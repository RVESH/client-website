import { findUserByEmail } from "../../repositories/user.repository";
import { generateAndStoreOtp } from "../otp/otp.service.js";
import { sendOtpEmail } from "../email/email.service.js";

import NotFoundError from "../../errors/NotFoundError";
import ValidationError from "../../errors/ValidationError";

export async function resendOtpService(env, email, purpose) {
    const normalizedEmail = email.trim().toLowerCase();

const allowedPurposes = [
  "REGISTER",
  "FORGOT_PASSWORD",
];

if (!allowedPurposes.includes(purpose)) {
  throw new ValidationError("Invalid OTP purpose.");
}


    const user = await findUserByEmail(env, normalizedEmail);

    if (!user) {
        throw new NotFoundError("User not found.");
    }

    if (user.email_verified) {
        throw new ValidationError("Email is already verified.");
    }

    const { otp } = await generateAndStoreOtp(
        env,
        normalizedEmail,
        purpose
    );

    await sendOtpEmail(
        env,
        normalizedEmail,
        otp
    );

 return {
    success: true,
    message: "OTP sent successfully.",
};
}