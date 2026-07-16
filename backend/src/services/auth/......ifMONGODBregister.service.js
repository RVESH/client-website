import { findUserByEmail, createUser } from "../../repositories/user.repository";
import { generateAndStoreOtp } from "../otp/.....ifMONGODBotp.service";
import { sendOtpEmail } from "../email/email.service";
import ConflictError from "../../errors/ConflictError"; 


const PASSWORD_ITERATIONS = 100000;
const PASSWORD_HASH = "SHA-256";

async function hashPassword(password) {
    const encoder = new TextEncoder();

    const salt = crypto.getRandomValues(new Uint8Array(16));

    const key = await crypto.subtle.importKey(
        "raw",
        encoder.encode(password),
        { name: "PBKDF2" },
        false,
        ["deriveBits"]
    );

    const derivedBits = await crypto.subtle.deriveBits(
        {
            name: "PBKDF2",
            salt,
            iterations: PASSWORD_ITERATIONS,
            hash: PASSWORD_HASH,
        },
        key,
        256
    );

    const hash = Array.from(new Uint8Array(derivedBits))
        .map((byte) => byte.toString(16).padStart(2, "0"))
        .join("");

    const saltHex = Array.from(salt)
        .map((byte) => byte.toString(16).padStart(2, "0"))
        .join("");

    return {
        hash,
        salt: saltHex,
    };
}



export async function registerService(env, payload) {
    console.log("1. registerService started");

    const { name, email, password } = payload;

    const normalizedEmail = email.toLowerCase();

    console.log("2. Finding user...");

    const existingUser = await findUserByEmail(env, normalizedEmail);

    console.log("3. User lookup complete");



if (existingUser) {
    console.log("Existing user found");

    if (existingUser.emailVerified) {
        console.log("User already verified");
        throw new ConflictError("Email already registered.");
    }

    console.log("Generating new OTP");

    const { otp } = await generateAndStoreOtp(
        env,
        normalizedEmail,
        "REGISTER"
    );

    console.log("Sending OTP");

    await sendOtpEmail(env, normalizedEmail, otp);

    console.log("Returning success");

    return {
        message: "Verification OTP sent successfully.",
        userId: existingUser._id,
        email: normalizedEmail,
    };
}


    console.log("4. Hashing password...");

    const { hash, salt } = await hashPassword(password);

    console.log("5. Creating user...");

    const user = await createUser(env, {
        name,
        email: normalizedEmail,
        password: hash,
        passwordSalt: salt,
        emailVerified: false,
        createdAt: new Date(),
        updatedAt: new Date(),
    });

    console.log("6. User created");

    const { otp } = await generateAndStoreOtp(
        env,
        normalizedEmail,
        "REGISTER"
    );

    console.log("7. OTP generated");

    await sendOtpEmail(env, normalizedEmail, otp);

    console.log("8. Email sent");

    return {
        message: "Registration successful. Please verify your email.",
        userId: user._id,
        email: normalizedEmail,
    };
}









// Controller
//       │
//       ▼
// registerService()
//       │
//       ├── findUserByEmail()
//       │
//       ├── hashPassword()
//       │
//       ├── createUser()
//       │
//       ├── generateAndStoreOtp()
//       │
//       ├── sendOtpEmail()
//       │
//       ▼
// Return Success

