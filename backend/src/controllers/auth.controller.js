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
import { registerService } from "../services/auth/......ifMONGODBregister.service.js";
 // import { verifyOtpService } from "../services/otp/.....ifMONGODBotp.service.js";
import { verifyOtpService } from "../services/auth/verify-otp.service.js";
 import { resendOtpService } from "../services/auth/resend-otp.service.js";
 import { refreshTokenService } from "../services/auth/refresh-token.service.js";
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
    "REGISTER"
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
        "REGISTER"
    );

    return success(
        c,
        result.message,
        result
    );
}

  async login(c) {
    const body = await c.req.json();

    return success(
      c,
      "Login endpoint reached.",
      body
    );
  }

  async logout(c) {
    return success(
      c,
      "Logout endpoint reached."
    );
  }

  async forgotPassword(c) {
    const body = await c.req.json();

    return success(
      c,
      "Forgot Password endpoint reached.",
      body
    );
  }

  async resetPassword(c) {
    const body = await c.req.json();

    return success(
      c,
      "Reset Password endpoint reached.",
      body
    );
  }

  async me(c) {
    return success(
      c,
      "Current user endpoint reached."
    );
  }
}

export default new AuthController();





