// ============================================
// SITE DATA
// This file holds all core business information.
// Edit values here to update the whole website.
// ============================================

const rawWhatsapp = '+1 415 555 0148'

// Strips spaces and formatting so it works in a wa.me link.
const whatsappDigits = rawWhatsapp.replace(/[^\d]/g, '')

export const site = {
  companyName: 'Brightside Home Care',
  shortName: 'Brightside',
  tagline: 'Cleaner spaces. Easier days.',

  description:
    'Brightside Home Care is a local residential and office cleaning company built around dependable teams, careful attention to detail, and clear communication with every customer.',

  phone: '+1 415 555 0132',
  phoneDisplay: '(415) 555-0132',
  mobile: '+1 415 555 0148',
  whatsapp: rawWhatsapp,
  whatsappLink: `https://wa.me/${whatsappDigits}`,
  email: 'hello@brightsidehomecare.com',

  address: {
    line1: '214 Ferncroft Avenue',
    line2: 'Suite 3',
    city: 'San Rafael',
    region: 'CA',
    postalCode: '94901',
    full: '214 Ferncroft Avenue, Suite 3, San Rafael, CA 94901',
  },

  hours: [
    { day: 'Monday – Friday', time: '7:00 AM – 7:00 PM' },
    { day: 'Saturday', time: '8:00 AM – 5:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ],

  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
  },

  nav: [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'About', to: '/about' },
    { label: 'Areas', to: '/areas' },
    { label: 'Contact', to: '/contact' },
  ],

  stats: [
    { value: '9+', label: 'Years serving local homes' },
    { value: '4.9/5', label: 'Average customer rating' },
    { value: '15', label: 'Service areas covered' },
    { value: '3,200+', label: 'Cleans completed to date' },
  ],

  process: [
    {
      title: 'Tell us what you need',
      description:
        'Reach out by phone, WhatsApp, or our contact form and describe your space and what needs attention.',
    },
    {
      title: 'Choose a service and time',
      description:
        'We recommend the right service and find a time that fits your schedule, including recurring visits.',
    },
    {
      title: 'Our team arrives prepared',
      description:
        'A trained, background-checked team shows up on time with the supplies and equipment for the job.',
    },
    {
      title: 'Enjoy a cleaner space',
      description:
        'We do a final walkthrough with you whenever possible, so you know exactly what was done.',
    },
  ],

  benefits: [
    {
      title: 'Reliable, vetted teams',
      description:
        'Every cleaner is interviewed, background-checked, and trained on our standards before visiting a home.',
    },
    {
      title: 'Clear communication',
      description:
        'You always know who is coming, when, and what is included — no surprises on arrival or on the invoice.',
    },
    {
      title: 'Detail-first cleaning',
      description:
        'We follow room-by-room checklists built from years of resident feedback, not a rushed once-over.',
    },
    {
      title: 'Flexible scheduling',
      description:
        'One-time, weekly, biweekly, or monthly visits — adjust or pause your plan whenever your needs change.',
    },
    {
      title: 'Bring our own supplies',
      description:
        'Professional-grade, family-safe products and equipment included, or we can use yours on request.',
    },
    {
      title: 'Local, accountable owners',
      description:
        'We live in the communities we serve and stand behind every visit with a satisfaction follow-up.',
    },
  ],
}
