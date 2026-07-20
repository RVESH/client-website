import {
    createOtp,
    deleteOtps,
    findOtp,
    deleteOtp,
} from "../../repositories/otp.repository";
import { findUserByEmail, updateUser } from "../../repositories/user.repository";
import ValidationError from "../../errors/ValidationError";
import NotFoundError from "../../errors/NotFoundError";

const OTP_LENGTH = 6;
const OTP_EXPIRY_MINUTES = 10;

function generateOtp() {
    const bytes = new Uint32Array(1);

    crypto.getRandomValues(bytes);

    const otp = (bytes[0] % 900000) + 100000;

    return otp.toString();
}

export async function generateAndStoreOtp(env, email, purpose) {
    await deleteOtps(env, {
        email: email.toLowerCase(),
        purpose,
    });

    const otp = generateOtp();

    const expiresAt = new Date(
        Date.now() + OTP_EXPIRY_MINUTES * 60 * 1000
    );

    await createOtp(env, {
        email: email.toLowerCase(),
        otp,
        purpose,
        verified: false,
        createdAt: new Date(),
        expiresAt,
    });

    return {
        otp,
        expiresAt,
    };
};


// export async function verifyOtpService(env, email, otp, purpose) {
//     const normalizedEmail = email.toLowerCase();

// const otpRecord = await findOtp(env, {
//     email: normalizedEmail,
//     purpose,
// });

// if (!otpRecord) {
//     throw new NotFoundError("OTP not found.");
// }

// if (new Date(otpRecord.expires_at) < new Date()) {
//     await deleteOtp(env, {
//         id: otpRecord.id,
//     });

//     throw new ValidationError("OTP has expired.");
// }

// if (otpRecord.otp !== otp) {
//     throw new ValidationError("Invalid OTP.");
// }

// const user = await findUserByEmail(env, normalizedEmail);

// if (!user) {
//     throw new NotFoundError("User not found.");
// }

// await updateUser(
//     env,
//     user.id,
//     {
//         email_verified: 1,
//         updated_at: new Date().toISOString(),
//     }
// );

// await deleteOtp(env, {
//     id: otpRecord.id,
// });

// return {
//     message: "Email verified successfully.",
// };
   
// }