import { Hono } from "hono";

import authController from "../controllers/auth.controller.js";

import { authMiddleware } from "../middleware/auth.middleware.js";
import { validate } from "../middleware/validation.middleware.js";

import {
  validateRegister,
  validateLogin,
  validateVerifyOtp,
  validateForgotPassword,
  validateResetPassword,
  validateRefreshToken,
  validateLogout,
  validateResendOtp,
} from "../validators/auth.validator.js";

const auth = new Hono();

/*
|--------------------------------------------------------------------------
| Authentication
|--------------------------------------------------------------------------
*/

auth.post(
  "/register",
  validate(validateRegister),
  (c) => authController.register(c)
);

auth.post(
  "/login",
  validate(validateLogin),
  (c) => authController.login(c)
);

auth.post(
  "/logout",
  validate(validateLogout),
  (c) => authController.logout(c)
);

auth.post(
  "/refresh-token",
  validate(validateRefreshToken),
  (c) => authController.refreshToken(c)
);

/*
|--------------------------------------------------------------------------
| OTP
|--------------------------------------------------------------------------
*/

auth.post(
  "/verify-otp",
  validate(validateVerifyOtp),
  (c) => authController.verifyOtp(c)
);

auth.post(
  "/resend-otp",
  validate(validateResendOtp),
  (c) => authController.resendOtp(c)
);

auth.post(
  "/forgot-password",
  validate(validateForgotPassword),
  (c) => authController.forgotPassword(c)
);

auth.post(
  "/reset-password",
  validate(validateResetPassword),
  (c) => authController.resetPassword(c)
);

/*
|--------------------------------------------------------------------------
| Protected Routes
|--------------------------------------------------------------------------
*/

auth.get(
  "/me",
  authMiddleware,
  (c) => authController.me(c)
);

export default auth;