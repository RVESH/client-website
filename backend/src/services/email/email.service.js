const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";

export async function sendOtpEmail(env, email, otp) {
    const response = await fetch(BREVO_API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "api-key": env.BREVO_API_KEY,
        },
        body: JSON.stringify({
            sender: {
                email: env.BREVO_SENDER_EMAIL,
                name: env.BREVO_SENDER_NAME,
            },
            to: [
                {
                    email,
                },
            ],
            subject: "Verify your email address",
            htmlContent: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
                    <h2>Email Verification</h2>

                    <p>Your One-Time Password (OTP) is:</p>

                    <h1 style="letter-spacing: 8px; text-align: center;">
                        ${otp}
                    </h1>

                    <p>
                        This OTP will expire in <strong>10 minutes</strong>.
                    </p>

                    <p>
                        If you didn't request this OTP, you can safely ignore this email.
                    </p>
                </div>
            `,
        }),
    });

    if (!response.ok) {
        const error = await response.text();

        throw new Error(`Brevo Error: ${error}`);
    }

    return true;
}




// Check whether the email already exists.
// Hash the password using the Web Crypto API.
// Create the user.
// Generate and store the OTP.
// Send the OTP email.
// Return the response to the controller.