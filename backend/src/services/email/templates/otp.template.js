// export function otpEmailTemplate({ otp, purpose, expireMin }) {
//   const purposeText = {
//     signup: 'account activation',
//     login: 'login verification',
//     forgot_password: 'password reset OTP',
//     email_change: 'email change',
//     delete_account: 'account deletion',
//   }[purpose] || 'verification';

//   return {
//     subject: `Your OTP for ${purposeText}`,
//     html: `
//       <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 500px; margin: auto; padding: 40px; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);">
//         <h2 style="color: #2c3e50; text-align: center;">Your One-Time Password</h2>
//         <p style="color: #34495e; text-align: center;">Use this OTP for <strong>${purposeText}</strong>:</p>
//         <div style="font-size: 48px; font-weight: bold; letter-spacing: 10px; color: #2980b9; padding: 25px; background: #ecf0f1; border-radius: 10px; text-align: center; margin: 20px 0;">
//           ${otp}
//         </div>
//         <p style="color: #7f8c8d; font-size: 14px; text-align: center;">⏱ Expires in <strong>${expireMin} minutes</strong></p>
//         <p style="color: #7f8c8d; font-size: 14px; text-align: center;">🔒 Never share this OTP with anyone.</p>
//         <p style="color: #bdc3c7; font-size: 12px; text-align: center;">If you didn't request this, ignore this email.</p>
//       </div>
//     `,
//   };
// }
export function otpEmailTemplate({ otp, purpose, expireMin }) {
  const purposeMap = {
    signup:          { text: 'Account Activation',  icon: '🚀', accent: '#6C63FF' },
    login:           { text: 'Login Verification',  icon: '🔑', accent: '#00C9A7' },
    forgot_password: { text: 'Password Reset',      icon: '🛡️', accent: '#FF6B6B' },
    email_change:    { text: 'Email Change',        icon: '✉️', accent: '#F7B731' },
    delete_account:  { text: 'Account Deletion',    icon: '⚠️', accent: '#FC5C7D' },
  };

  const { text: purposeText, icon, accent } = purposeMap[purpose] ?? {
    text: 'Verification', icon: '✅', accent: '#6C63FF',
  };

  // Darken accent slightly for the gradient end
  const accentDark = accent + 'CC';

  return {
    subject: `${icon} Your OTP for ${purposeText}`,
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>OTP — ${purposeText}</title>
</head>
<body style="margin:0;padding:0;background:#0f0f1a;font-family:'Helvetica Neue',Arial,sans-serif;">

  <!-- Outer wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f0f1a;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="540" cellpadding="0" cellspacing="0"
               style="max-width:540px;width:100%;border-radius:20px;overflow:hidden;
                      box-shadow:0 20px 60px rgba(0,0,0,0.5);">

          <!-- ───── HERO HEADER ───── -->
          <tr>
            <td style="background:linear-gradient(135deg,${accent} 0%,#1a1a3e 100%);
                       padding:48px 40px 36px;text-align:center;">
              <!-- Brand pill -->
              <div style="display:inline-block;background:rgba(255,255,255,0.12);
                          border:1px solid rgba(255,255,255,0.25);border-radius:999px;
                          padding:6px 18px;margin-bottom:24px;">
                <span style="color:#fff;font-size:12px;font-weight:700;letter-spacing:2px;
                             text-transform:uppercase;">Secure Access</span>
              </div>
              <!-- Icon circle -->
              <div style="width:72px;height:72px;margin:0 auto 20px;
                          background:rgba(255,255,255,0.15);border-radius:50%;
                          border:2px solid rgba(255,255,255,0.3);
                          font-size:34px;line-height:72px;text-align:center;">
                ${icon}
              </div>
              <h1 style="margin:0 0 8px;color:#ffffff;font-size:28px;font-weight:800;
                         letter-spacing:-0.5px;">One-Time Password</h1>
              <p style="margin:0;color:rgba(255,255,255,0.7);font-size:15px;">
                Requested for <strong style="color:#fff;">${purposeText}</strong>
              </p>
            </td>
          </tr>

          <!-- ───── BODY ───── -->
          <tr>
            <td style="background:#16162a;padding:40px;">

              <!-- Intro text -->
              <p style="margin:0 0 28px;color:#a0a0c0;font-size:15px;line-height:1.7;
                        text-align:center;">
                Use the code below to complete your <strong style="color:#e0e0ff;">${purposeText.toLowerCase()}</strong>.
                This code is valid for a limited time — do not share it with anyone.
              </p>

              <!-- ── OTP BOX ── -->
              <div style="background:linear-gradient(135deg,#1e1e3f 0%,#12122a 100%);
                          border:1.5px solid ${accent};border-radius:16px;
                          padding:32px 24px;text-align:center;margin-bottom:28px;
                          box-shadow:0 0 30px ${accent}55,inset 0 0 20px rgba(0,0,0,0.3);">
                <p style="margin:0 0 14px;color:#7070a0;font-size:11px;font-weight:700;
                           letter-spacing:3px;text-transform:uppercase;">Your OTP Code</p>
                <div style="display:inline-block;font-size:52px;font-weight:900;
                            letter-spacing:14px;color:#ffffff;
                            text-shadow:0 0 20px ${accent},0 0 40px ${accent}88;
                            font-variant-numeric:tabular-nums;">
                  ${otp}
                </div>
                <!-- Animated-style underline bar -->
                <div style="height:3px;width:80%;margin:20px auto 0;border-radius:99px;
                            background:linear-gradient(90deg,transparent,${accent},transparent);">
                </div>
              </div>

              <!-- Timer + warning pills -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                <tr>
                  <td width="49%" style="padding-right:6px;">
                    <div style="background:#1e1e3f;border:1px solid #2a2a50;
                                border-radius:12px;padding:14px;text-align:center;">
                      <div style="font-size:22px;margin-bottom:4px;">⏱</div>
                      <p style="margin:0;color:#a0a0c0;font-size:12px;">Expires in</p>
                      <p style="margin:4px 0 0;color:#fff;font-size:16px;font-weight:700;">
                        ${expireMin} minutes
                      </p>
                    </div>
                  </td>
                  <td width="2%"></td>
                  <td width="49%" style="padding-left:6px;">
                    <div style="background:#1e1e3f;border:1px solid #2a2a50;
                                border-radius:12px;padding:14px;text-align:center;">
                      <div style="font-size:22px;margin-bottom:4px;">🔒</div>
                      <p style="margin:0;color:#a0a0c0;font-size:12px;">Single use</p>
                      <p style="margin:4px 0 0;color:#fff;font-size:16px;font-weight:700;">
                        Keep it private
                      </p>
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Security tip -->
              <div style="background:linear-gradient(135deg,rgba(108,99,255,0.12),rgba(0,201,167,0.08));
                          border:1px solid rgba(108,99,255,0.3);border-radius:12px;
                          padding:16px 20px;margin-bottom:32px;">
                <p style="margin:0;color:#8080b0;font-size:13px;line-height:1.65;">
                  🛡️ <strong style="color:#c0c0e0;">Security reminder:</strong>
                  We will <u>never</u> ask for your OTP via phone, chat, or email.
                  If you did not request this code, please ignore this email and
                  consider changing your password.
                </p>
              </div>

              <!-- Divider -->
              <div style="height:1px;background:linear-gradient(90deg,transparent,#2a2a50,transparent);
                          margin-bottom:28px;"></div>

              <!-- Steps -->
              <p style="margin:0 0 16px;color:#6060a0;font-size:11px;font-weight:700;
                        letter-spacing:2px;text-transform:uppercase;">How to use</p>
              <table width="100%" cellpadding="0" cellspacing="0">
                ${[
                  ['1', 'Return to the verification page in your browser or app.'],
                  ['2', `Enter the ${otp.toString().length}-digit code exactly as shown above.`],
                  ['3', 'Complete your action before the timer runs out.'],
                ].map(([num, step]) => `
                <tr>
                  <td width="32" valign="top" style="padding-bottom:14px;">
                    <div style="width:24px;height:24px;border-radius:50%;
                                background:linear-gradient(135deg,${accent},${accentDark});
                                color:#fff;font-size:11px;font-weight:700;
                                text-align:center;line-height:24px;">${num}</div>
                  </td>
                  <td style="padding-bottom:14px;padding-left:10px;
                             color:#9090c0;font-size:14px;line-height:1.5;">
                    ${step}
                  </td>
                </tr>`).join('')}
              </table>

            </td>
          </tr>

          <!-- ───── FOOTER ───── -->
          <tr>
            <td style="background:#0f0f1a;padding:28px 40px;text-align:center;
                       border-top:1px solid #1e1e3f;">
              <!-- Colored dot row -->
              <div style="margin-bottom:16px;">
                ${['#FF6B6B','#F7B731','#6C63FF','#00C9A7','#FC5C7D']
                  .map(c => `<span style="display:inline-block;width:8px;height:8px;
                             border-radius:50%;background:${c};margin:0 4px;"></span>`)
                  .join('')}
              </div>
              <p style="margin:0 0 6px;color:#404060;font-size:12px;">
                This is an automated message — please do not reply.
              </p>
              <p style="margin:0;color:#303050;font-size:11px;">
                © ${new Date().getFullYear()} Your Company · All rights reserved
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
    `.trim(),
  };
}