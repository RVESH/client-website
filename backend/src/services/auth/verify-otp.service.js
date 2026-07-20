import {
  findOtp,
  deleteOtp,
} from "../../repositories/otp.repository";

import {
  findUserByEmail,
  updateUser,
} from "../../repositories/user.repository";

import ValidationError from "../../errors/ValidationError";
import NotFoundError from "../../errors/NotFoundError";

export async function verifyOtpService(env, email, otp, purpose) {
  const normalizedEmail = email.toLowerCase();

  const otpRecord = await findOtp(env, {
    email: normalizedEmail,
    purpose,
  });

  if (!otpRecord) {
    throw new NotFoundError("OTP not found.");
  }

  if (new Date(otpRecord.expires_at) < new Date()) {
    await deleteOtp(env, {
      id: otpRecord.id,
    });

    throw new ValidationError("OTP has expired.");
  }

  if (otpRecord.otp !== otp) {
    throw new ValidationError("Invalid OTP.");
  }

  const user = await findUserByEmail(env, normalizedEmail);

  if (!user) {
    throw new NotFoundError("User not found.");
  }

  await updateUser(env, user.id, {
    email_verified: 1,
    updated_at: new Date().toISOString(),
  });

  await deleteOtp(env, {
    id: otpRecord.id,
  });

  return {
    message: "Email verified successfully.",
  };
}