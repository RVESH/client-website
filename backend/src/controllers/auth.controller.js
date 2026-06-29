import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcryptjs';
import { db } from '../config/database.js';
import { createOTP, verifyOTPCode } from '../services/otp.service.js';
import { sendOTPEmail } from '../services/email/index.js';
import { validateEmail, validatePassword } from '../utils/validator.js';
import { sendSuccess, sendError } from '../utils/response.js';
import { OTP_PURPOSE } from '../config/constants.js';

export async function register(req, res) {
  try {
    const { email, password, name } = req.body;

    const emailCheck = validateEmail(email);
    if (!emailCheck.valid) return sendError(res, emailCheck.message);

    const passCheck = validatePassword(password);
    if (!passCheck.valid) return sendError(res, passCheck.message);

    const exists = db.prepare(`SELECT id FROM users WHERE email = ?`).get(emailCheck.email);
    if (exists) return sendError(res, 'Email already registered');

    const hashedPassword = await bcrypt.hash(password, 10);
    db.prepare(`INSERT INTO users (id, email, password, name) VALUES (?, ?, ?, ?)`)
      .run(uuidv4(), emailCheck.email, hashedPassword, name || null);

    const otp = await createOTP({
      email: emailCheck.email,
      purpose: OTP_PURPOSE.SIGNUP,
      ip: req.ip,
    });

    await sendOTPEmail({ to: emailCheck.email, otp, purpose: OTP_PURPOSE.SIGNUP });

    return sendSuccess(res, { email: emailCheck.email }, 'OTP sent to your email', 201);
  } catch (err) {
    if (err.status) return sendError(res, err.message, err.status);
    console.error(err);
    return sendError(res, 'Server error', 500);
  }
}

export async function verifySignup(req, res) {
  try {
    const { email, otp } = req.body;

    const emailCheck = validateEmail(email);
    if (!emailCheck.valid) return sendError(res, emailCheck.message);

    if (!otp) return sendError(res, 'OTP required');

    await verifyOTPCode({
      email: emailCheck.email,
      purpose: OTP_PURPOSE.SIGNUP,
      otp: String(otp),
    });

    db.prepare(`UPDATE users SET status = 'active', updated_at = unixepoch() WHERE email = ?`)
      .run(emailCheck.email);

    return sendSuccess(res, {}, 'Account activated successfully');
  } catch (err) {
    if (err.status) return sendError(res, err.message, err.status);
    console.error(err);
    return sendError(res, 'Server error', 500);
  }
}

export async function resendOTP(req, res) {
  try {
    const { email, purpose } = req.body;

    const emailCheck = validateEmail(email);
    if (!emailCheck.valid) return sendError(res, emailCheck.message);

    const validPurposes = Object.values(OTP_PURPOSE);
    if (!purpose || !validPurposes.includes(purpose))
      return sendError(res, 'Invalid purpose');

    const otp = await createOTP({
      email: emailCheck.email,
      purpose,
      ip: req.ip,
    });

    await sendOTPEmail({ to: emailCheck.email, otp, purpose });

    return sendSuccess(res, {}, 'OTP resent successfully');
  } catch (err) {
    if (err.status) return sendError(res, err.message, err.status);
    console.error(err);
    return sendError(res, 'Server error', 500);
  }
}