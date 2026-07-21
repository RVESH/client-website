// Generate a password reset OTP and email it without allowing email enumeration.
// 🚨 Small architectural issue before coding

// Your current otp.service.js is already responsible for:

// Generate OTP
// Hash OTP
// Store OTP

// That means Forgot Password should reuse otp.service.js, not generate or store OTPs itself.

// This follows the Single Responsibility Principle and avoids duplicate logic.

// So the flow is:

// forgot-password.service
//         │
//         ▼
// Find User
//         │
//         ▼
// OTP Service
// (generate + hash + save)
//         │
//         ▼
// Email Service
// (send reset OTP)

import { findUserByEmail } from "../../repositories/user.repository";
import { generateAndStoreOtp } from "../otp/otp.service";
import { sendOtpEmail } from "../email/email.service";

export async function forgotPasswordService(env, email) {
  const normalizedEmail = email.toLowerCase();

  const user = await findUserByEmail(env, normalizedEmail);

  // Prevent email enumeration
  if (!user) {
    return {
      message:
        "If an account exists, a password reset OTP has been sent.",
    };
  }

  const { otp } = await generateAndStoreOtp(
    env,
    normalizedEmail,
    "PASSWORD_RESET"
  );

  await sendOtpEmail(
    env,
    normalizedEmail,
    otp
  );

  return {
    message:
      "If an account exists, a password reset OTP has been sent.",
  };
}