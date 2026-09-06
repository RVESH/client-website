// ============================================================
// site.js — client-editable clinic content.
// Update this file to change brand info, nav, contact details,
// hours, footer links and CTA copy. No code changes required.
// ============================================================

export const site = {
  name: 'Meridian Dental Studio',
  shortName: 'Meridian',
  tagline: 'Refined dental care, unhurried',
  description:
    'A private dental studio built around calm rooms, gentle technique and dentists who take the time to explain every step.',
}

export const nav = [
  { label: 'Home', path: '/' },
  { label: 'Treatments', path: '/treatments' },
  { label: 'Doctors', path: '/doctors' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export const contact = {
  phone: '+1 (415) 555-0173',
  phoneDisplay: '+1 415 555 0173',
  email: 'hello@meridiandentalstudio.com',
  whatsapp: '14155550173',
  whatsappDisplay: '+1 415 555 0173',
  address: '212 Laurel Street, Suite 4, San Francisco, CA 94118',
  mapQuery: '212 Laurel Street, San Francisco, CA 94118',
  hours: [
    { day: 'Monday – Thursday', time: '8:00 AM – 6:00 PM' },
    { day: 'Friday', time: '8:00 AM – 4:00 PM' },
    { day: 'Saturday', time: '9:00 AM – 2:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ],
}

export const social = [
  {
    label: 'Instagram',
    url: 'https://instagram.com/meridiandentalstudio',
  },
  {
    label: 'Facebook',
    url: 'https://facebook.com/meridiandentalstudio',
  },
  {
    label: 'Google Reviews',
    url: 'https://www.google.com/maps',
  },
]

export const footerLinks = {
  clinic: [
    { label: 'Treatments', path: '/treatments' },
    { label: 'Our Doctors', path: '/doctors' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ],
  visit: [
    { label: 'Book a visit', path: '/contact' },
    { label: 'Directions', path: '/contact' },
    { label: 'New patients', path: '/about' },
  ],
}

export const ctaLinks = {
  primary: { label: 'Reserve Now', path: '/contact' },
  secondary: {
    label: 'Call the studio',
    href: null,
  },
}

export const trustStats = [
  { value: '13+', label: 'Years in practice' },
  { value: '9,400+', label: 'Smiles cared for' },
  { value: '4.9 / 5', label: 'Average patient rating' },
  { value: '5', label: 'Specialist dentists' },
]

export function buildWhatsappLink(
  message = "Hi, I'd like to enquire about booking an appointment at Meridian Dental Studio.",
) {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`
}

export function buildTelLink() {
  return `tel:${contact.phone.replace(/[^+\d]/g, '')}`
}

export function buildGmailLink({
  subject = '',
  body = '',
  to = contact.email,
} = {}) {
  return [
    'https://mail.google.com/mail/?view=cm&fs=1',
    `to=${encodeURIComponent(to)}`,
    `su=${encodeURIComponent(subject)}`,
    `body=${encodeURIComponent(body)}`,
  ].join('&')
}

export function buildMailtoLink({
  subject = '',
  body = '',
  to = contact.email,
} = {}) {
  return [
    `mailto:${to}`,
    `?subject=${encodeURIComponent(subject)}`,
    `&body=${encodeURIComponent(body)}`,
  ].join('')
}

export function buildMapEmbedUrl() {
  return `https://maps.google.com/maps?q=${encodeURIComponent(
    contact.mapQuery,
  )}&z=15&output=embed`
}

export function buildMapLink() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    contact.mapQuery,
  )}`
}