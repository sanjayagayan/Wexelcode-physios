import axios from "axios";
//
import ENVIRONMENT from "@/config/environment";
import { auth } from "./auth";
import { getAccessTokenByRefreshToken } from "@/app/api/auth/[...nextauth]/route";
//
let newAccessToken: any = null;
let refreshPromise: any = null;
/**
 * Function to select the tokens from the redux store
 * @returns {Object}
 */
const getTokens = async () => {
  const session: any = await auth();
  // When initializing tokens, subscribing to redux store changes to
  // get an updated state each time the store state gets changed
  return {
    refreshToken: session?.refreshToken,
    accessToken: session?.accessToken,
    idToken: session?.idToken,
  };
};
// Create an axios config instance
const axiosConfig = axios.create({
  baseURL: ENVIRONMENT.BASE_URL,
});
/**
 * Function to select the refresh token from getTokens() function
 * @returns {refreshToken}
 */
const getNewTokens = async () => {
  const { refreshToken, idToken } = await getTokens();
  const tokenData = await getAccessTokenByRefreshToken(refreshToken, idToken);

  return tokenData;
};
/**
 * Function to add axios interceptors to check the axios request
 * @returns {config}
 */
axiosConfig.interceptors.request.use(async (requestConfig) => {
  const config = requestConfig;
  const { accessToken } = await getTokens();
  if (accessToken && "Authorization" in config.headers) {
    config.headers.Authorization = `Bearer ${newAccessToken ?? accessToken}`;
  }
  return config;
});
/**
 * Function to add axios interceptors to check the axios response
 * This will ensure that when simultaneous request fail due to 401, only one request will send
 * a request to refresh the tokens, and the other requests will wait until the renewal is finished
 * before re-trying with an updated access token
 * @returns {*}
 */
axiosConfig.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { refreshToken } = await getTokens();
    const originalRequest = error.config;
    if (
      error?.response?.status === 401 &&
      refreshToken &&
      !originalRequest._retry
    ) {
      try {
        originalRequest._retry = true;
        // If there is no pending promise, try to renew tokens (refreshPromise serves as a flag to prevent multiple refresh token invocations)
        if (!refreshPromise) {
          refreshPromise = getNewTokens()
            .then((tokenData) => {
              newAccessToken = tokenData?.AccessToken;
            })
            .catch((e) => {
              throw e;
            })
            .finally(() => {
              // Reset the promise back to null once resolved
              refreshPromise = null;
            });
        }
        /**
         * If the global refreshPromise is not null, await it (when two simultaneous requests get intercepted,
         * this line ensures the second request waits until the getNewTokens() triggered by the first request is completed)
         */
        if (refreshPromise) {
          await refreshPromise;
        }
        return axiosConfig(originalRequest);
      } catch (e) {
        return Promise.reject(e);
      }
    } else if (
      error?.response?.status === 400 &&
      error?.response?.message === "Token is not active"
    ) {
      window.location.reload();
    }
    //
    return Promise.reject(error);
  }
);
//
export default axiosConfig;
