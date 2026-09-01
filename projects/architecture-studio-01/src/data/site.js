// Client-editable studio information.
// Changing values here updates the whole site — no component edits needed.

export const site = {
  name: 'Marrow Studio',
  shortName: 'Marrow',
  tagline: 'Architecture and interiors built from the inside out.',
  founded: 1998,

  nav: [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'Studio', path: '/studio' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
  ],

  contact: {
    address: {
      line1: '14 Founders Yard',
      line2: 'London, E2 7QA',
      country: 'United Kingdom',
    },
    phone: '+44 20 7946 0891',
    email: 'studio@marrow-architecture.com',
    whatsapp: '+44 7700 900123', // set to '' to hide WhatsApp CTA
    hours: [
      { days: 'Monday – Friday', time: '9:00 – 18:00' },
      { days: 'Saturday', time: 'By appointment' },
      { days: 'Sunday', time: 'Closed' },
    ],
  },

  social: [
    { label: 'Instagram', url: 'https://instagram.com' },
    { label: 'LinkedIn', url: 'https://linkedin.com' },
  ],

  // Set to [] to hide the map on the Contact page.
  locations: [
    {
      id: 'london',
      label: 'Marrow Studio, London',
      lat: 51.5272,
      lng: -0.0645,
    },
  ],

  stats: [
    { value: '26', label: 'years in practice' },
    { value: '140+', label: 'projects delivered' },
    { value: '9', label: 'design awards' },
    { value: '4', label: 'countries worked in' },
  ],

  clients: [
    'Hoxton Land Trust',
    'Salt Works Group',
    'Founders Collective',
    'Kessler & Yin',
    'Two Rivers Hospitality',
  ],

  testimonial: {
    quote: 'They designed around how the building would age, not just how it would open. Five years on, it still feels considered.',
    name: 'Priya Anand',
    role: 'Director, Salt Works Group',
  },
}
