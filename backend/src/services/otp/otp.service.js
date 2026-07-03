import {
    createOtp,
    deleteOtps,
} from "../../repositories/otp.repository";

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
}