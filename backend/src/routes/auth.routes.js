// import { Router } from 'express';
import { Hono } from "hono";
import authController from "../controllers/auth.controller";

const auth = new Hono();

auth.post("/send-otp", (c) => authController.sendOtp(c));

auth.post("/verify-otp", (c) => authController.verifyOtp(c));

auth.post("/register", (c) => authController.register(c));

auth.post("/login", (c) => authController.login(c));

auth.post("/logout", (c) => authController.logout(c));

auth.post("/forgot-password", (c) => authController.forgotPassword(c));

auth.post("/reset-password", (c) => authController.resetPassword(c));

auth.post("/refresh-token", (c) => authController.refreshToken(c));

auth.get("/me", (c) => authController.me(c));

auth.post("/resend-otp", (c) => authController.resendOtp(c));

export default auth;