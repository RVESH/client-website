// The controller should only do 4 things:

// Read request data.
// Call the appropriate service.
// Return a standardized response.
// Let errors bubble up to the error middleware.

// It should never:

// ❌ Generate OTP
// ❌ Hash passwords
// ❌ Send emails
// ❌ Query MongoDB
// ❌ Generate JWT

// AuthController

// ├── register()
// ├── verifyOtp()
// ├── resendOtp()
// ├── login()
// ├── logout()
// ├── forgotPassword()
// ├── resetPassword()
// └── me()


import { success } from "../utils/response.js";
// import { registerService } from "../services/auth/......ifMONGODBregister.service.js";
 import { registerService } from "../services/auth/register.service.js";
// import { verifyOtpService } from "../services/otp/.....ifMONGODBotp.service.js";
import { verifyOtpService } from "../services/auth/verify-otp.service.js";
import { refreshTokenService } from "../services/auth/refresh-token.service.js";
import { logoutService } from "../services/auth/logout.service.js";
import { loginService } from "../services/auth/login.service.js";
import { forgotPasswordService } from "../services/auth/forgot-password.service.js";
import { resetPasswordService } from "../services/auth/reset-password.service.js";
 class AuthController {

async refreshToken(c) {
  const body = await c.req.json();

  const result = await refreshTokenService(
    c.env,
    body.refreshToken
  );

  return success(
    c,
    "Token refreshed successfully.",
    result
  );
}



async register(c) {
  const body = await c.req.json();

  const result = await registerService(c.env, body);

  return success(
    c,
    result.message,
    result,
    201
  );
}

async verifyOtp(c) {
  const body = await c.req.json();

  const result = await verifyOtpService(
    c.env,
    body.email,
    body.otp,
    body.purpose
);

  return success(
    c,
    result.message,
    result
  );
}

async resendOtp(c) {
    const body = await c.req.json();

    const result = await resendOtpService(
        c.env,
        body.email,
        body.purpose
    );

    return success(
        c,
        result.message,
        result
    );
}

  async login(c) {
  const body = await c.req.json();

  const result = await loginService(
    c.env,
    body.email,
    body.password,
    {
      userAgent: c.req.header("User-Agent"),
      ipAddress: c.req.header("CF-Connecting-IP"),
    }
  );

  return success(
    c,
    "Login successful.",
    result
  );
}
                                // Client
                                //   │
                                //   ▼
                                // Refresh Token
                                //   │
                                //   ▼
                                // Hash Token
                                //   │
                                //   ▼
                                // Find Session (D1)
                                //   │
                                //   ▼
                                // Revoke Session
                                //   │
                                //   ▼
                                // Return Success


  async logout(c) {
  const body = await c.req.json();

  const result = await logoutService(
    c.env,
    body.refreshToken
  );

  return success(
    c,
    result.message,
    result
  );
}

async forgotPassword(c) {
  const body = await c.req.json();

  const result = await forgotPasswordService(
    c.env,
    body.email
  );

  return success(
    c,
    result.message,
    result
  );
}

async resetPassword(c) {
    const body = await c.req.json();

    const result = await resetPasswordService(
        c.env,
        body.email,
        body.otp,
        body.newPassword
    );

    return success(
        c,
        result.message,
        result
    );
}

async me(c) {
  const user = c.get("user");

  
  return success(
    c,
    "Current user fetched successfully.",
    {
      id: user.id,
      name: user.name,
      email: user.email,
      emailVerified: Boolean(user.email_verified),
      status: user.status,
      createdAt: user.created_at,
    }
  );
}


}

export default new AuthController();





