import ValidationError from "../errors/ValidationError.js";
const EMAIL_REGEX =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()_\-+=])[A-Za-z\d@$!%*?&^#()_\-+=]{8,128}$/;

const OTP_REGEX =
  /^\d{6}$/;

const PURPOSES = new Set([
  "REGISTER",
  "FORGOT_PASSWORD",
]);

// import ValidationError from "../errors/ValidationError.js";
/*
|--------------------------------------------------------------------------
| Helpers
|--------------------------------------------------------------------------
*/

export function validateEmail(email) {
  if (typeof email !== "string") {
    throw new ValidationError("Email is required.");
  }

  const normalizedEmail = email.trim().toLowerCase();

  if (!normalizedEmail) {
    throw new ValidationError("Email is required.");
  }

  if (!EMAIL_REGEX.test(normalizedEmail)) {
    throw new ValidationError("Invalid email address.");
  }

  if (normalizedEmail.length > 254) {
    throw new ValidationError("Email is too long.");
  }

  return normalizedEmail;
}

export function validatePassword(password) {
  if (typeof password !== "string") {
    throw new ValidationError("Password is required.");
  }

  const normalizedPassword = password.trim();

  if (!normalizedPassword) {
    throw new ValidationError("Password is required.");
  }

  if (normalizedPassword.length < 8) {
    throw new ValidationError(
      "Password must be at least 8 characters."
    );
  }

  if (normalizedPassword.length > 128) {
    throw new ValidationError(
      "Password cannot exceed 128 characters."
    );
  }

  if (!PASSWORD_REGEX.test(normalizedPassword)) {
    throw new ValidationError(
      "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character."
    );
  }

  return normalizedPassword;
}

export function validateName(name) {
  if (typeof name !== "string") {
    throw new ValidationError("Name is required.");
  }

  const normalizedName = name.trim();

  if (!normalizedName) {
    throw new ValidationError("Name is required.");
  }

  if (normalizedName.length < 2) {
    throw new ValidationError(
      "Name must contain at least 2 characters."
    );
  }

  if (normalizedName.length > 100) {
    throw new ValidationError(
      "Name cannot exceed 100 characters."
    );
  }

  return normalizedName;
}

export function validateOtp(otp) {
  if (typeof otp !== "string") {
    throw new ValidationError("OTP is required.");
  }

  const normalizedOtp = otp.trim();

  if (!OTP_REGEX.test(normalizedOtp)) {
    throw new ValidationError(
      "OTP must contain exactly 6 digits."
    );
  }

  return normalizedOtp;
}


export function validatePurpose(purpose) {
  if (typeof purpose !== "string") {
    throw new ValidationError("Purpose is required.");
  }

  const normalizedPurpose =
    purpose.trim().toUpperCase();

  if (!PURPOSES.has(normalizedPurpose)) {
    throw new ValidationError("Invalid OTP purpose.");
  }

  return normalizedPurpose;
}

export function validateRefreshTokenValue(refreshToken) {
  if (typeof refreshToken !== "string") {
    throw new ValidationError("Refresh token is required.");
  }

  const token = refreshToken.trim();

  if (!token) {
    throw new ValidationError("Refresh token is required.");
  }

  return token;
}

/*
|--------------------------------------------------------------------------
| Route Validators
|--------------------------------------------------------------------------
*/

export function validateRegister(body) {
    body = body ?? {};

  return {
    name: validateName(body.name),
    email: validateEmail(body.email),
    password: validatePassword(body.password),
  };
}

export function validateLogin(body) {
    body = body ?? {};

  return {
    email: validateEmail(body.email),
    password: validatePassword(body.password),
  };
}

export function validateVerifyOtp(body) {
    body = body ?? {};

  return {
    email: validateEmail(body.email),
    otp: validateOtp(body.otp),
    purpose: validatePurpose(body.purpose),
  };
}

export function validateForgotPassword(body) {
    body = body ?? {};

  return {
    email: validateEmail(body.email),
  };
}

export function validateResetPassword(body) {
    body = body ?? {};
  return {
    email: validateEmail(body.email),
    otp: validateOtp(body.otp),
    newPassword: validatePassword(
      body.newPassword
    ),
  };
}

export function validateRefreshToken(body) {
    body = body ?? {};
  return {
    refreshToken: validateRefreshTokenValue(
      body.refreshToken
    ),
  };
}

export function validateLogout(body) {
    body = body ?? {};
  return {
    refreshToken: validateRefreshTokenValue(
      body.refreshToken
    ),
  };
}

export function validateResendOtp(body) {
    body = body ?? {};
  return {
    email: validateEmail(body.email),
    purpose: validatePurpose(body.purpose),
  };
}