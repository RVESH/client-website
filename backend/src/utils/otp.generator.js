import { randomInt } from 'crypto';

export function generateOTP(length = 6) {
  const min = Math.pow(10, length - 1);
  const max = Math.pow(10, length) - 1;
  return String(randomInt(min, max + 1));
}