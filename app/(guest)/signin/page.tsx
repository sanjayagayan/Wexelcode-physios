import SigninPageView from "modules/signin/Signin";
import { Metadata } from "next";

const title = "WexelCode - Signin";
const description =
  "This is a Next.js starter kit that uses Next-Auth for simple email + password login and a Postgres database to persist the data.";

export const metadata: Metadata = {
  title,
  description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};
const SigninPage = () => {
  return <SigninPageView />;
};

export default SigninPage;
