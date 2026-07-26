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
 class AuthController {

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
  // const body = await c.req.json();
    const body = c.get("body");

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

    return success(
      c,
      "Resend OTP endpoint reached.",
      body
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





