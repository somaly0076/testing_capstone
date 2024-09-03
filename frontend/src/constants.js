export const NODE_ENV = "development";
export const PORT = 3000 || "..."; // change later
export const FETCH_PROFILE = (username) => `/api/users/profile/${username}`;
export const LOGIN_URL = "/api/users/login";
export const REGISTER_URL = "/api/users/signup";
export const FORGOT_PASSWORD_URL = "/api/users/forgotPassword";
export const RESET_PASSWORD_URL = (token) =>
  `/api/users/resetPassword/${token}`;
