import dotenv from 'dotenv';
dotenv.config();

const required = ['JWT_SECRET', 'EMAIL_USER', 'EMAIL_PASS'];

for (const key of required) {
  if (!process.env[key]) {
    console.error(`❌ Missing required env variable: ${key}`);
    process.exit(1);
  }
}

export const env = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  isDev: process.env.NODE_ENV !== 'production',
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:5173',
  dbPath: process.env.DB_PATH || './data/app.db',

  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  },

  email: {
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: Number(process.env.EMAIL_PORT) || 587,
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
    from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
  },

  otp: {
    expireMin: Number(process.env.OTP_EXPIRES_MIN) || 10,
    maxAttempts: Number(process.env.OTP_MAX_ATTEMPTS) || 5,
    resendCooldownSec: Number(process.env.OTP_RESEND_COOLDOWN_SEC) || 60,
    dailyLimit: Number(process.env.OTP_DAILY_LIMIT) || 20,
  },
};