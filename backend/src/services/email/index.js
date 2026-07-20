import { sendEmail } from './sender.js';
import { otpEmailTemplate } from './templates/otp.template.js';
import { env } from '../../config/env.js';

export async function sendOTPEmail({ to, otp, purpose }) {
  const { subject, html } = otpEmailTemplate({
    otp,
    purpose,
    expireMin: env.otp.expireMin,
  });

  return sendEmail({ to, subject, html });
}