import { verifyOtpService } from "../otp/verify-otp.service";
import { findUserByEmail, updateUser } from "../../repositories/user.repository";
import { revokeAllUserSessions } from "../../repositories/session.repository";
import { hashPassword } from "../../utils/password.js";
import NotFoundError from "../../errors/NotFoundError";

export async function resetPasswordService(
    env,
    email,
    otp,
    newPassword
) {
    const normalizedEmail = email.toLowerCase();

    // Verify OTP (this also deletes the OTP on success)
    await verifyOtpService(
        env,
        normalizedEmail,
        otp,
        "PASSWORD_RESET"
    );

    const user = await findUserByEmail(
        env,
        normalizedEmail
    );

    if (!user) {
        throw new NotFoundError("User not found.");
    }

    const { hash, salt } = await hashPassword(newPassword);

    await updateUser(env, user.id, {
        password: hash,
        password_salt: salt,
        updated_at: new Date().toISOString(),
    });

    await revokeAllUserSessions(env, user.id);

    return {
        message: "Password reset successfully.",
    };
}