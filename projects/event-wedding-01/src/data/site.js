// ============================================================================
// SITE DATA
// Client-editable. Brand identity, contact details, hours, nav.
// ============================================================================

export const site = {
  name: 'Amaranth & Oak',
  shortName: 'Amaranth & Oak',
  tagline: 'Weddings and events, considered.',
  description:
    'Full-service wedding and event planning for couples who want their day thoughtfully designed, not templated. Based in Charleston, available for destination celebrations nationwide.',

  founded: '2014',
  yearsInBusiness: 11,

  contact: {
    email: 'hello@amaranthandoak.com',
    phone: '+1 (843) 555-0132',
    phoneDisplay: '+1 843 555 0132',
    whatsapp: '18435550132',
    address: {
      line1: '214 Meeting Street, Studio 3',
      line2: 'Charleston, SC 29401',
      country: 'United States',
    },
    hours: [
      { days: 'Tuesday — Friday', time: '10:00 — 18:00' },
      { days: 'Saturday', time: 'By appointment' },
      { days: 'Sunday — Monday', time: 'Closed' },
    ],
  },

  social: {
    instagram: 'https://instagram.com/amaranthandoak',
    pinterest: 'https://pinterest.com/amaranthandoak',
  },

  nav: [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'Weddings', to: '/weddings' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'Contact', to: '/contact' },
  ],

  ctaLabel: 'Book a Consultation',

  stats: [
    { value: '11', label: 'Years planning' },
    { value: '260+', label: 'Celebrations designed' },
    { value: '40+', label: 'Venue partners' },
    { value: '5.0', label: 'Average client rating' },
  ],
}
