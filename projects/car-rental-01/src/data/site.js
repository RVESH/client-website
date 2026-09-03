// ============================================
// SITE DATA
// Core business information. Edit values here to
// update copy across the whole site.
// ============================================

export const site = {
  companyName: 'Auric Motors',
  shortName: 'Auric',
  tagline: 'The road, elevated.',

  description:
    'Auric Motors is a premium car rental company offering a curated fleet from economy to luxury, transparent day-rate pricing, and pickup across seven major cities.',

  phone: '+1 512 555 0138',
  phoneDisplay: '(512) 555-0138',
  email: 'reservations@auricmotors.com',

  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    x: 'https://x.com',
  },

  nav: [
    { label: 'Home', to: '/' },
    { label: 'Fleet', to: '/fleet' },
    { label: 'About', to: '/about' },
    { label: 'Locations', to: '/locations' },
    { label: 'Contact', to: '/contact' },
  ],

  headerCta: { label: 'Reserve Now', to: '/contact' },

  // Canonical ordered vocabulary for vehicle categories, shared by the
  // fleet filter tabs and the booking widget's vehicle-type select.
  vehicleCategories: [
    { value: 'economy', label: 'Economy' },
    { value: 'sedan', label: 'Sedan' },
    { value: 'suv', label: 'SUV' },
    { value: 'luxury', label: 'Luxury' },
    { value: 'electric', label: 'Electric' },
    { value: 'convertible', label: 'Convertible' },
  ],

  stats: [
    { value: '12+', label: 'Years on the road' },
    { value: '9,500+', label: 'Reservations completed' },
    { value: '7', label: 'Cities with pickup' },
    { value: '4.8/5', label: 'Average customer rating' },
  ],

  benefits: [
    {
      title: 'Insurance included',
      description:
        'Every reservation includes standard collision coverage, so you can drive with one less thing to think about.',
    },
    {
      title: '24/7 roadside assistance',
      description:
        'A dedicated line is staffed around the clock for breakdowns, lockouts, or anything else on the road.',
    },
    {
      title: 'Transparent pricing',
      description:
        'The day rate you see is the day rate you pay. No surprise fees added at pickup.',
    },
    {
      title: 'Late-model, well-maintained fleet',
      description:
        'Every vehicle is serviced on a strict schedule and rotated out well before it shows its age.',
    },
    {
      title: 'Flexible pickup and drop-off',
      description:
        'Collect a car in one city and return it in another across our seven-city network at no extra charge.',
    },
    {
      title: 'A fleet for every trip',
      description:
        'From economy runabouts to executive sedans and open-top roadsters, the right car is always available.',
    },
  ],

  process: [
    {
      title: 'Choose your vehicle',
      description:
        'Browse the fleet by category and pick the car that fits your trip, from economy to luxury.',
    },
    {
      title: 'Select dates and location',
      description:
        'Tell us your pickup city and dates. Drop off somewhere else in our network at no extra charge.',
    },
    {
      title: 'Confirm your reservation',
      description:
        'Send an enquiry and our team will confirm availability and pricing within one business day.',
    },
    {
      title: 'Pick up and drive away',
      description:
        'Bring your license and reservation confirmation to the counter, sign, and you are on the road.',
    },
  ],
}
