const EMAIL_REGEX =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEmail(email) {
  if (!email) {
    throw new Error("Email is required.");
  }

  const normalizedEmail = email.trim().toLowerCase();

  if (!EMAIL_REGEX.test(normalizedEmail)) {
    throw new Error("Invalid email address.");
  }

  return normalizedEmail;
}

export function validatePassword(password) {
  if (!password) {
    throw new Error("Password is required.");
  }

  if (password.length < 8) {
    throw new Error("Password must be at least 8 characters.");
  }

  return password;
}

export function validateName(name) {
  if (!name) {
    throw new Error("Name is required.");
  }

  const trimmedName = name.trim();

  if (trimmedName.length < 2) {
    throw new Error("Name must contain at least 2 characters.");
  }

  return trimmedName;
}
