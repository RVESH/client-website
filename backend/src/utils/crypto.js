import bcrypt from 'bcryptjs';

const SALT_ROUNDS = 10;

export async function hashOTP(otp) {
  return bcrypt.hash(otp, SALT_ROUNDS);
}

export async function verifyOTP(otp, hash) {
  return bcrypt.compare(otp, hash);
}