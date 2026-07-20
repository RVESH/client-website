import { Router } from 'express';
import { register, verifySignup, resendOTP } from '../controllers/auth.controller.js';
import { otpRateLimit } from '../middleware/rateLimit.middleware.js';

const router = Router();

router.post('/register', otpRateLimit, register);
router.post('/verify-otp', otpRateLimit, verifySignup);
router.post('/resend-otp', otpRateLimit, resendOTP);

export default router;