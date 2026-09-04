// ============================================================
// site.js — client-editable brand, navigation, contact and copy.
// ============================================================

export const site = {
  name: 'INDEX',
  fullName: 'INDEX Market',
  tagline: 'A curated marketplace for independent makers',
  description:
    'INDEX gathers small studios and independent makers into one catalogue — ceramics, lighting, textiles, furniture and more, each piece made by hand in small batches.',
}

export const nav = [
  { label: 'Home', path: '/' },
  { label: 'Marketplace', path: '/marketplace' },
  { label: 'Categories', path: '/categories' },
  { label: 'Contact', path: '/contact' },
]

export const ctaLinks = {
  primary: { label: 'Browse Marketplace', path: '/marketplace' },
}

export const contact = {
  phone: '+1 (312) 555-0199',
  phoneDisplay: '+1 312 555 0199',
  email: 'hello@indexmarket.co',
  whatsapp: '13125550199',
  whatsappDisplay: '+1 312 555 0199',
  address: '84 Fulton Row, Chicago, IL 60607',
  hours: [
    { day: 'Monday – Friday', time: '9:00 AM – 6:00 PM CT' },
    { day: 'Saturday', time: '10:00 AM – 4:00 PM CT' },
    { day: 'Sunday', time: 'Closed' },
  ],
}

export const social = [
  { label: 'Instagram', url: 'https://instagram.com/indexmarket' },
  { label: 'Pinterest', url: 'https://pinterest.com/indexmarket' },
  { label: 'Newsletter', url: 'https://indexmarket.co/newsletter' },
]

export const footerLinks = {
  shop: [
    { label: 'Marketplace', path: '/marketplace' },
    { label: 'Categories', path: '/categories' },
    { label: 'New arrivals', path: '/marketplace?sort=newest' },
  ],
  studio: [
    { label: 'Sell on INDEX', path: '/contact' },
    { label: 'Our sellers', path: '/categories' },
    { label: 'Contact', path: '/contact' },
  ],
}

export const marketplaceStats = [
  { value: '340+', label: 'Independent makers' },
  { value: '2,600+', label: 'Objects catalogued' },
  { value: '18', label: 'Countries shipped to' },
  { value: '4.8 / 5', label: 'Average buyer rating' },
]

export function buildWhatsappLink(message = "Hi, I'd like to enquire about an item on INDEX Market.") {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`
}

export function buildTelLink() {
  return `tel:${contact.phone.replace(/[^+\d]/g, '')}`
}

export function buildGmailLink({ subject, body, to = contact.email }) {
  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to,
    su: subject || '',
    body: body || '',
  })
  return `https://mail.google.com/mail/?${params.toString()}`
}

export function buildMailtoLink({ subject, body, to = contact.email }) {
  const params = new URLSearchParams({ subject: subject || '', body: body || '' })
  return `mailto:${to}?${params.toString()}`
}
