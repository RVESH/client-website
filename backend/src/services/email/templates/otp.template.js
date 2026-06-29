export function otpEmailTemplate({ otp, purpose, expireMin }) {
  const purposeText = {
    signup: 'account activation',
    login: 'login verification',
    password_reset: 'password reset',
    email_change: 'email change',
    delete_account: 'account deletion',
  }[purpose] || 'verification';

  return {
    subject: `Your OTP for ${purposeText}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:480px;margin:auto;padding:32px;background:#f9f9f9;border-radius:8px;">
        <h2 style="color:#333;">Your One-Time Password</h2>
        <p style="color:#555;">Use this OTP for <strong>${purposeText}</strong>:</p>
        <div style="font-size:40px;font-weight:bold;letter-spacing:8px;color:#4F46E5;padding:20px;background:#fff;border-radius:8px;text-align:center;margin:20px 0;">
          ${otp}
        </div>
        <p style="color:#888;font-size:13px;">⏱ Expires in <strong>${expireMin} minutes</strong></p>
        <p style="color:#888;font-size:13px;">🔒 Never share this OTP with anyone.</p>
        <p style="color:#aaa;font-size:11px;">If you didn't request this, ignore this email.</p>
      </div>
    `,
  };
}