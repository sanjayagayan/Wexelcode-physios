import NextAuth, { AuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import CognitoProvider from "next-auth/providers/cognito";
import { createHmac } from "crypto";
import {
  AuthFlowType,
  CognitoIdentityProviderClient,
  GlobalSignOutCommand,
  InitiateAuthCommand,
  InitiateAuthCommandInput,
} from "@aws-sdk/client-cognito-identity-provider";
import axios from "axios";

const client = new CognitoIdentityProviderClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
});

const getHashSecret = (username: string) => {
  const hasher = createHmac("sha256", process.env.COGNITO_CLIENT_SECRET!);
  hasher.update(`${username}${process.env.COGNITO_CLIENT_ID!}`);
  return hasher.digest("base64");
};

export async function getAccessTokenByRefreshToken(
  refreshToken: string,
  idToken: string
) {
  const params: InitiateAuthCommandInput = {
    AuthFlow: AuthFlowType.REFRESH_TOKEN,
    ClientId: process.env.COGNITO_CLIENT_ID as string,
    AuthParameters: {
      REFRESH_TOKEN: refreshToken,
      SECRET_HASH: getHashSecret(getSubByIdToken(idToken)),
    },
  };

  try {
    const command = new InitiateAuthCommand(params);
    const response = await client.send(command);
    const newAccessToken = response.AuthenticationResult;
    return newAccessToken;
  } catch (error) {
    console.error("Error getting new access token:", error);
    throw error;
  }
}

const getUserByEmail = async (email: string, accessToken: string) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  };
  const getUserBySubRequest = { params: { email }, headers };
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/users`,
      getUserBySubRequest
    );
    const user = response.data?.data.results[0];
    if (!user) {
      throw Error("User not found!");
    }

    return user;
  } catch (e) {
    console.log(e);
    throw new Error("Something went to wrong");
  }
};

const getSubByIdToken = (idToken: string): string => {
  const decodedToken = JSON.parse(atob(idToken.split(".")[1]));

  const identityProviderUserName: string = decodedToken["cognito:username"];
  const provider = identityProviderUserName.split("_")[0];
  if (
    provider === "google" ||
    provider === "facebook" ||
    provider === "apple"
  ) {
    return identityProviderUserName;
  }

  return decodedToken.sub;
};

export const authOptions: AuthOptions = {
  //
  providers: [
    CredentialsProvider({
      name: "Cognito",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Username" },
        password: { label: "Password", type: "password" },
      },

      authorize: async (credentials) => {
        if (!credentials) return null;

        const params: InitiateAuthCommandInput = {
          AuthFlow: "USER_PASSWORD_AUTH",
          ClientId: process.env.COGNITO_CLIENT_ID as string,
          AuthParameters: {
            USERNAME: credentials.username,
            PASSWORD: credentials.password,
            SECRET_HASH: getHashSecret(credentials.username),
          },
        };

        const signinCommand = new InitiateAuthCommand(params);
        const response = await client.send(signinCommand);

        //
        const { AccessToken, RefreshToken, IdToken, ExpiresIn } =
          response.AuthenticationResult!;

        // Get user data from backend
        const user = await getUserByEmail(credentials.username, AccessToken!);

        const token = {
          id: response.ChallengeParameters?.USER_ID_FOR_SRP as string,
          accessToken: AccessToken,
          refreshToken: RefreshToken,
          idToken: IdToken,
          expiresAt: ExpiresIn,
          user,
        };

        return token;
      },
    }),
    CognitoProvider({
      idToken: true,
      clientId: process.env.COGNITO_CLIENT_ID!,
      clientSecret: process.env.COGNITO_CLIENT_SECRET!,
      checks: ["state", "nonce"],
      issuer: process.env.COGNITO_ISSUER!,
      authorization: {
        params: {
          grant_type: "authorization_code",
          client_id: process.env.COGNITO_CLIENT_ID!,
          identity_provider: "Google",
          access_type: "offline",
          scope: "openid email profile aws.cognito.signin.user.admin",
        },
      },
    }),
  ],
  callbacks: {
    session({ token }) {
      const { user } = token as {
        user: User;
      };

      return {
        accessToken: token.accessToken as string,
        idToken: token.idToken as string,
        refreshToken: token.refreshToken as string,
        expires: token.expires as string,
        user,
      };
    },

    async jwt({ token, user, account, profile }) {
      if (profile) {
        token.accessToken = (account as any).access_token;
        token.refreshToken = (account as any).refresh_token;
        token.idToken = (account as any).id_token;
        token.expires = (account as any).expires_at ;

        token.user = await getUserByEmail(
          (user as any).email,
          (account as any).access_token
        );

        return token;
      }

      if (account) {
        // 'account' is only available the first time this callback is called on a new session
        token.accessToken = (user as any).accessToken;
        token.refreshToken = (user as any).refreshToken;
        token.idToken = (user as any).idToken;
        token.expires = Math.floor(Date.now() / 1000 + (user as any).expiresAt);

        token.user = (user as any).user;
      }
      //
      const timeDifferenceInSeconds =
        ((token.expires as number) * 1000 - Date.now()) / 1000;

      if (timeDifferenceInSeconds < 60) {
        const newTokenRes = await getAccessTokenByRefreshToken(
          (token as any)?.refreshToken,
          (token as any)?.idToken
        );

        return {
          ...token,
          accessToken: newTokenRes?.AccessToken,
          idToken: newTokenRes?.IdToken,
          expires: Math.floor(Date.now() / 1000 + newTokenRes?.ExpiresIn!),
        };
      }
      return token;
    },
    //
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
  },
  events: {
    signOut: async ({ token }) => {
      const command = new GlobalSignOutCommand({
        AccessToken: token?.accessToken as string,
      });
      await client.send(command).catch((e) => console.log(e));
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
//
export { handler as GET, handler as POST };
