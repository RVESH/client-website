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

import { verifyPassword } from "../../utils/password.js";

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

const isValid = await verifyPassword(
  otp,
  otpRecord.otp_hash,
  otpRecord.otp_salt
);

if (!isValid) {
  throw new ValidationError("Invalid OTP.");
}

  const user = await findUserByEmail(env, normalizedEmail);

  if (!user) {
    throw new NotFoundError("User not found.");
  }

if (purpose === "REGISTER") {
    await updateUser(env, user.id, {
        email_verified: 1,
        status: "active",
        updated_at: new Date().toISOString(),
    });
}

  await deleteOtp(env, {
    id: otpRecord.id,
  });

  return {
    verified: true,
    message: "Email verified successfully.",
  };
}

// in otp.repository.js it must be
// const { hash, salt } = await hashPassword(otp);

// await createOtp(env, {
//     email: email.toLowerCase(),
//     otpHash: hash,
//     otpSalt: salt,
//     purpose,
//     verified: false,
//     createdAt: new Date(),
//     expiresAt,
// });
// Otherwise verifyPassword() will always fail.
// ⚠️ 3. Fix otp.repository.js
// Earlier I noticed this SQL bug:
// Your query currently has:
// VALUES (?, ?, ?, ?, ?, ?, ?, ?)