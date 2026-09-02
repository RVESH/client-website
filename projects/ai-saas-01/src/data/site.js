// ============================================================
// site.js — client-editable core site content.
// Update this file to change brand info, nav, contact details,
// footer links and global CTA copy. No code changes required.
// ============================================================

export const site = {
  name: 'Nexora AI',
  shortName: 'Nexora',
  tagline: 'The operating layer for AI-powered teams',
  description:
    'Nexora AI unifies your workflows, data and decisions into a single intelligent layer — so your team can automate the busywork and focus on the work that matters.',
  domain: 'nexora.ai',
}

export const nav = [
  { label: 'Home', path: '/' },
  { label: 'Features', path: '/features' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export const contact = {
  email: 'hello@nexora.ai',
  emailSales: 'sales@nexora.ai',
  phone: '+1 (415) 555-0148',
  phoneDisplay: '+1 415 555 0148',
  whatsapp: '14155550148',
  whatsappDisplay: '+1 415 555 0148',
  address: '548 Market Street, San Francisco, CA 94104',
  hours: 'Mon – Fri, 9:00am – 6:00pm PT',
}

export const social = [
  { label: 'X', url: 'https://x.com/nexoraai' },
  { label: 'LinkedIn', url: 'https://linkedin.com/company/nexoraai' },
  { label: 'GitHub', url: 'https://github.com/nexoraai' },
  { label: 'YouTube', url: 'https://youtube.com/@nexoraai' },
]

export const footerLinks = {
  product: [
    { label: 'Features', path: '/features' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Security', path: '/features' },
    { label: 'Integrations', path: '/features' },
  ],
  company: [
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'Careers', path: '/about' },
  ],
  resources: [
    { label: 'Documentation', path: '/features' },
    { label: 'Changelog', path: '/features' },
    { label: 'Status', path: '/contact' },
  ],
}

export const ctaLinks = {
  primary: { label: 'Start free trial', path: '/contact' },
  secondary: { label: 'Talk to sales', path: '/contact' },
}

export function buildWhatsappLink(message = "Hi, I'd like to learn more about Nexora AI.") {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`
}

export function buildMailLink(subject = 'Enquiry about Nexora AI') {
  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}`
}

export function buildTelLink() {
  return `tel:${contact.phone.replace(/[^+\d]/g, '')}`
}
