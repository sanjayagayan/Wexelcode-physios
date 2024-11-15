/**
 * .env file related keys are defined here
 */

// =========================================================
type Environment = {
  SESSION_REFRESH_TIME: string;
  STRIPE_PUBLIC_KEY: string;
  APP_URL: string;
  BASE_URL: string;
};
// =========================================================

const ENVIRONMENT: Environment = {
  SESSION_REFRESH_TIME: process.env.NEXT_PUBLIC_SESSION_REFRESH_TIME!,
  STRIPE_PUBLIC_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!,
  APP_URL: process.env.NEXT_PUBLIC_APP_URL!,
  BASE_URL: process.env.NEXT_PUBLIC_BASE_URL!
};
//
export default ENVIRONMENT;
