import isEmail from 'validator/lib/isEmail.js';

const BLOCKED_DOMAINS = [
  'mailinator.com', 'tempmail.com', '10minutemail.com',
  'guerrillamail.com', 'throwaway.email', 'fakeinbox.com',
  'yopmail.com', 'trashmail.com',
];

export function validateEmail(email) {
  if (!email || typeof email !== 'string')
    return { valid: false, message: 'Email required' };

  const cleaned = email.trim().toLowerCase();

  if (!isEmail(cleaned))
    return { valid: false, message: 'Invalid email format' };

  const domain = cleaned.split('@')[1];
  if (BLOCKED_DOMAINS.includes(domain))
    return { valid: false, message: 'Temporary emails not allowed' };

  return { valid: true, email: cleaned };
}

export function validatePassword(password) {
  if (!password || password.length < 8)
    return { valid: false, message: 'Password must be at least 8 characters' };
  return { valid: true };
}