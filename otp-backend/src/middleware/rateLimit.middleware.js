import rateLimit from 'express-rate-limit';

export const globalRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { success: false, message: 'Too many requests. Try after 15 minutes.' },
  standardHeaders: true,
  legacyHeaders: false,
});

export const otpRateLimit = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: { success: false, message: 'Too many OTP requests. Wait 1 minute.' },
  keyGenerator: (req) => req.body?.email || req.ip,
});