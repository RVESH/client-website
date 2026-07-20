import { findUserByEmail } from "../../repositories/user.repository";
import { generateAndStoreOtp } from "../otp/otp.service";
import { sendOtpEmail } from "../email/email.service";

import NotFoundError from "../../errors/NotFoundError";
import ValidationError from "../../errors/ValidationError";

export async function resendOtpService(env, email, purpose) {
    const normalizedEmail = email.toLowerCase();

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
        message: "OTP sent successfully.",
    };
}