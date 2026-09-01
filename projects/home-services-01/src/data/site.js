// Central, client-editable business info.
// Replace phone/WhatsApp/email/address with the real business details.

export const site = {
  name: 'Forma',
  fullName: 'Forma Home Services',
  tagline: 'Home services, done to spec.',
  description:
    'Forma is a premium local home-services company handling remodels, repairs, electrical, plumbing, painting and outdoor work — planned precisely and finished properly.',

  phoneDisplay: '(555) 014-2277',
  phoneHref: 'tel:+15550142277',

  // International format, digits only — no +, spaces or hyphens.
  whatsappNumber: '15550142277',
  whatsappDefaultMessage: "Hi Forma, I'd like a quote for a project.",

  email: 'hello@formahomeservices.com',

  address: {
    line1: '118 Millbrook Avenue',
    line2: 'Millbrook, ST 42019',
  },

  hours: [
    { day: 'Monday – Friday', time: '7:00 AM – 6:00 PM' },
    { day: 'Saturday', time: '8:00 AM – 4:00 PM' },
    { day: 'Sunday', time: 'Closed — emergency line only' },
  ],

  serviceAreas: [
    'Millbrook',
    'Fairview Heights',
    'Cedar Hollow',
    'North Ridge',
    'Brookstone',
    'Larkspur Valley',
    'Old Mill District',
    'Ashford County (surrounding)',
  ],

  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
  },

  founded: 2009,
  license: 'Licensed & Insured — Lic. #HS-30841',

  nav: [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ],
};

export function whatsappHref(message = site.whatsappDefaultMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
