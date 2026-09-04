// ============================================================================
// SIGNATURE WEDDINGS / EVENTS
// Realistic fictional demo content — packages/experiences shown on the
// Weddings page and featured (a subset) on Home.
// ============================================================================

import { images } from './images'

export const events = [
  {
    id: 'garden-wedding',
    title: 'The Garden Wedding',
    style: 'Romantic, botanical, unhurried',
    guestRange: '80 – 180 guests',
    description:
      'Held among live oaks and seasonal blooms, this experience leans into natural textures and soft, layered color. Best suited to estate gardens, botanical venues, or private homes with outdoor grounds.',
    highlights: [
      'Outdoor ceremony design with a natural arch installation',
      'Seasonal, garden-inspired floral direction',
      'Layered tablescapes with mixed vintage rentals',
      'Golden-hour portrait planning built into the timeline',
    ],
    image: images.event01,
  },
  {
    id: 'estate-wedding',
    title: 'The Estate Wedding',
    style: 'Timeless, formal, richly detailed',
    guestRange: '120 – 250 guests',
    description:
      'A grander scale celebration for couples drawn to classic architecture and formal service. Designed around candlelight, fine linens, and a considered processional moment.',
    highlights: [
      'Formal ceremony staging with full production support',
      'Candlelit reception design',
      'Multi-course seated dinner logistics',
      'Extended vendor team coordination (av, lighting, orchestra)',
    ],
    image: images.event02,
  },
  {
    id: 'intimate-elopement',
    title: 'The Intimate Elopement',
    style: 'Quiet, personal, unscripted',
    guestRange: '2 – 30 guests',
    description:
      'For couples who want the meaning without the scale. We handle every logistic — permits, officiant, small-format styling — so the day stays entirely about the two of you.',
    highlights: [
      'Permit and location scouting',
      'Officiant and small vendor team booking',
      'Minimal, considered styling',
      'Full day-of coordination for a party of two (or a few more)',
    ],
    image: images.event03,
  },
  {
    id: 'coastal-wedding',
    title: 'The Coastal Wedding',
    style: 'Breezy, relaxed, sun-drenched',
    guestRange: '60 – 150 guests',
    description:
      'Built for waterfront and island venues, with a design language that leans into natural light, weathered materials, and a relaxed but polished guest experience.',
    highlights: [
      'Tide and weather-contingency planning',
      'Outdoor ceremony and reception logistics',
      'Relaxed, coastal-inspired tablescapes',
      'Sunset timeline planning',
    ],
    image: images.event04,
  },
  {
    id: 'black-tie-ballroom',
    title: 'The Black-Tie Ballroom',
    style: 'Dramatic, formal, editorial',
    guestRange: '150 – 300 guests',
    description:
      'Our most production-heavy offering — built for couples who want a fully transformed ballroom, a formal dress code, and a night that feels genuinely cinematic.',
    highlights: [
      'Full room transformation & lighting design',
      'Formal seated dinner with multi-vendor coordination',
      'Custom stage and dance floor production',
      'Dedicated night-of production manager',
    ],
    image: images.event05,
  },
  {
    id: 'private-celebration',
    title: 'The Private Celebration',
    style: 'Personal, flexible, occasion-led',
    guestRange: '20 – 100 guests',
    description:
      'A flexible format for milestone anniversaries, vow renewals, engagement celebrations, and other occasions that deserve the same design attention as a wedding day.',
    highlights: [
      'Flexible venue formats, including private residences',
      'Custom design tailored to the occasion',
      'Scaled vendor team based on guest count',
      'Full or partial planning support available',
    ],
    image: images.event06,
  },
]

export const getEventById = (id) => events.find((e) => e.id === id)
