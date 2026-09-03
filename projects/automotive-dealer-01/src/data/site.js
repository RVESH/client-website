// ============================================================================
// SITE DATA
// Client-editable. Dealership identity, contact details, hours, nav, social.
// Do not import components or JSX here — plain data only.
// ============================================================================

export const site = {
  name: 'Vantage Motor Co.',
  shortName: 'Vantage',
  tagline: 'Driven by what comes next.',
  description:
    'A curated showroom of premium performance and luxury vehicles, inspected, verified, and ready to drive.',

  founded: '2011',
  yearsInBusiness: 15,

  contact: {
    email: 'sales@vantagemotorco.com',
    phone: '+1 (312) 555-0148',
    phoneDisplay: '+1 312 555 0148',
    whatsapp: '13125550148',
    address: {
      line1: '4820 Industrial Parkway',
      line2: 'Chicago, IL 60607',
      country: 'United States',
    },
    hours: [
      { days: 'Monday — Friday', time: '09:00 — 19:00' },
      { days: 'Saturday', time: '10:00 — 17:00' },
      { days: 'Sunday', time: 'By appointment' },
    ],
  },

  social: {
    instagram: 'https://instagram.com/vantagemotorco',
    facebook: 'https://facebook.com/vantagemotorco',
    youtube: 'https://youtube.com/@vantagemotorco',
  },

  nav: [
    { label: 'Home', to: '/' },
    { label: 'Vehicles', to: '/vehicles' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ],

  stats: [
    { value: '15+', label: 'Years in business' },
    { value: '2,400+', label: 'Vehicles delivered' },
    { value: '150-pt', label: 'Inspection standard' },
    { value: '4.9/5', label: 'Average client rating' },
  ],
}

export const whatsappLink = (message) =>
  `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`

export const telLink = () => `tel:${site.contact.phone.replace(/[^+\d]/g, '')}`

export const mailLink = (subject = '') =>
  `mailto:${site.contact.email}${
    subject ? `?subject=${encodeURIComponent(subject)}` : ''
  }`
