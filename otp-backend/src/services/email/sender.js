import { transporter } from './transporter.js';
import { env } from '../../config/env.js';

export async function sendEmail({ to, subject, html }) {
  if (env.isDev) {
    console.log('\n📧 [DEV EMAIL]');
    console.log('To:', to);
    console.log('Subject:', subject);
    console.log('─────────────────');
    return true;
  }

  await transporter.sendMail({
    from: env.email.from,
    to,
    subject,
    html,
  });

  return true;
}