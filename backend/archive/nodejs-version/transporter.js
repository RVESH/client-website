import nodemailer from 'nodemailer';
import { env } from '../../src/config/env.js';

export const transporter = nodemailer.createTransport({
  host: env.email.host,
  port: env.email.port,
  secure: env.email.port === 465,
  auth: {
    user: env.email.user,
    pass: env.email.pass,
  },
});




// Do you need these now?
// ❌ transporter.js
// ❌ sender.js
// ❌ Nodemailer
// ❌ SMTP Transport

// No. They have no role in a Cloudflare Workers application.

// Cloudflare Workers don't run as a traditional Node.js server. The simplest and recommended approach is to call Brevo's HTTP API using fetch().

// Could you ever need them?

// Yes—but only if you change platforms.

// For example:

// Platform	Need Nodemailer?
// Cloudflare Workers	❌ No
// Node.js + Express VPS	✅ Maybe
// NestJS on EC2	✅ Maybe
// Traditional server using SMTP	✅ Yes

// So they're useful in a different architecture, not in your current one.