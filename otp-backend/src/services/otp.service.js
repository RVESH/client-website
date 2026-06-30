import { v4 as uuidv4 } from 'uuid';
import { db } from '../config/database.js';
import { env } from '../config/env.js';
import { generateOTP } from '../utils/otp.generator.js';
import { hashOTP, verifyOTP } from '../utils/crypto.js';

export async function createOTP({ email, purpose, ip }) {

  // 1. Daily limit check
  const today = Math.floor(Date.now() / 1000) - 86400;
  const dailyCount = db.prepare(`
    SELECT COUNT(*) as count FROM otp_codes 
    WHERE email = ? AND purpose = ? AND created_at > ?
  `).get(email, purpose, today);

  if (dailyCount.count >= env.otp.dailyLimit) {
    throw { status: 429, message: 'Daily OTP limit reached. Try tomorrow.' };
  }

  // 2. Resend cooldown check
  const existing = db.prepare(`
    SELECT * FROM otp_codes 
    WHERE email = ? AND purpose = ? AND verified = 0
    ORDER BY created_at DESC LIMIT 1
  `).get(email, purpose);

  if (existing) {
    const cooldownLeft = (existing.last_sent_at + env.otp.resendCooldownSec) - Math.floor(Date.now() / 1000);
    if (cooldownLeft > 0) {
      throw { status: 429, message: `Please wait ${cooldownLeft} seconds before resending.` };
    }
    db.prepare(`DELETE FROM otp_codes WHERE id = ?`).run(existing.id);
  }

  // 3. OTP generate + hash
  const otp = generateOTP(6);
  const otpHash = await hashOTP(otp);
  const expiresAt = Math.floor(Date.now() / 1000) + (env.otp.expireMin * 60);

  // 4. Save to DB
  db.prepare(`
    INSERT INTO otp_codes (id, email, purpose, otp_hash, expires_at, ip_address)
    VALUES (?, ?, ?, ?, ?, ?)
  `).run(uuidv4(), email, purpose, otpHash, expiresAt, ip || null);

  return otp;
}

export async function verifyOTPCode({ email, purpose, otp }) {

  const record = db.prepare(`
    SELECT * FROM otp_codes 
    WHERE email = ? AND purpose = ? AND verified = 0
    ORDER BY created_at DESC LIMIT 1
  `).get(email, purpose);

  // Record nahi mila
  if (!record) {
    throw { status: 400, message: 'OTP not found. Please request a new one.' };
  }

  // Expire check
  if (Math.floor(Date.now() / 1000) > record.expires_at) {
    db.prepare(`DELETE FROM otp_codes WHERE id = ?`).run(record.id);
    throw { status: 400, message: 'OTP expired. Please request a new one.' };
  }

  // Max attempts check
  if (record.attempts >= env.otp.maxAttempts) {
    db.prepare(`DELETE FROM otp_codes WHERE id = ?`).run(record.id);
    throw { status: 429, message: 'Too many wrong attempts. Request a new OTP.' };
  }

  // OTP match
  const isMatch = await verifyOTP(otp, record.otp_hash);

  if (!isMatch) {
    db.prepare(`UPDATE otp_codes SET attempts = attempts + 1 WHERE id = ?`).run(record.id);
    const remaining = env.otp.maxAttempts - (record.attempts + 1);
    throw { status: 400, message: `Wrong OTP. ${remaining} attempts remaining.` };
  }

  // Sahi OTP — delete karo
  db.prepare(`DELETE FROM otp_codes WHERE id = ?`).run(record.id);

  return true;
}