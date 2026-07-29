import { api } from "./client";

export const register = (data) =>
  api("/register", {
    method: "POST",
    body: JSON.stringify(data),
  });

export const login = (data) =>
  api("/login", {
    method: "POST",
    body: JSON.stringify(data),
  });

export const verifyOtp = (data) =>
  api("/verify-otp", {
    method: "POST",
    body: JSON.stringify(data),
  });

export const resendOtp = (data) =>
  api("/resend-otp", {
    method: "POST",
    body: JSON.stringify(data),
  });

export const logout = (data) =>
  api("/logout", {
    method: "POST",
    body: JSON.stringify(data),
  });

export const forgotPassword = (data) =>
  api("/forgot-password", {
    method: "POST",
    body: JSON.stringify(data),
  });

export const resetPassword = (data) =>
  api("/reset-password", {
    method: "POST",
    body: JSON.stringify(data),
  });

export const getCurrentUser = () =>
  api("/me");