// ============================================================================
// SERVICES
// Client-editable. Six core offerings shown on the Services page and
// featured (a subset) on Home.
// ============================================================================

export const services = [
  {
    id: 'full-planning',
    title: 'Full Wedding Planning',
    summary: 'End-to-end design and management, from first concept to last dance.',
    description:
      'For couples who want a true creative partner. We handle vision, budget, vendor sourcing, design, logistics, and every detail in between, so you experience the planning process rather than manage it.',
    deliverables: [
      'Unlimited planning meetings',
      'Full vendor sourcing & contract review',
      'Custom design concept & mood boards',
      'Complete budget management',
      'Detailed month-of timeline',
      'On-site coordination for the full event',
    ],
    idealFor: 'Couples planning 9+ months out who want a hands-on partner from day one.',
  },
  {
    id: 'partial-planning',
    title: 'Partial Planning',
    summary: 'A collaborative middle ground for couples who have a head start.',
    description:
      'You have already booked a venue and made some key decisions — we step in to refine the design, fill remaining vendor gaps, and take over logistics as the day approaches.',
    deliverables: [
      'Planning check-ins from the 4-month mark',
      'Remaining vendor sourcing & recommendations',
      'Design refinement & styling guidance',
      'Timeline development',
      'On-site coordination for the full event',
    ],
    idealFor: 'Couples with a venue booked who want expert guidance finishing the plan.',
  },
  {
    id: 'day-of-coordination',
    title: 'Day-Of Coordination',
    summary: 'Confident, calm execution of a plan you have already built.',
    description:
      'You have done the planning — we make sure it runs exactly as intended. A dedicated lead coordinator manages vendors, timeline, and any last-minute changes so your day feels effortless.',
    deliverables: [
      'Two planning calls in the final 6 weeks',
      'Vendor confirmation & timeline finalization',
      'Rehearsal coordination',
      'Full day-of management (up to 10 hours)',
      'A dedicated on-site lead + assistant',
    ],
    idealFor: 'Couples who have planned everything themselves and want expert execution.',
  },
  {
    id: 'venue-vendor-coordination',
    title: 'Venue & Vendor Coordination',
    summary: 'Sourcing and managing the right partners for your vision and budget.',
    description:
      'From venue selection to florist contracts, we bring a decade of vetted relationships to make sure every partner on your day is a genuine fit — creatively and logistically.',
    deliverables: [
      'Venue shortlist & site visit coordination',
      'Vendor sourcing across all categories',
      'Contract & pricing review',
      'Ongoing vendor communication management',
    ],
    idealFor: 'Couples who want expert sourcing without full planning support.',
  },
  {
    id: 'decor-styling',
    title: 'Décor & Styling',
    summary: 'A cohesive design language carried through every visual detail.',
    description:
      'From tablescapes to ceremony structures, our styling team develops a considered palette and material story, then executes it down to the last candle and place card.',
    deliverables: [
      'Custom mood board & material palette',
      'Floral & rental sourcing',
      'Tablescape & ceremony design',
      'On-site styling & installation oversight',
    ],
    idealFor: 'Couples with planning covered who want a distinctive design point of view.',
  },
  {
    id: 'corporate-private-events',
    title: 'Corporate & Private Events',
    summary: 'The same editorial standard, applied beyond the wedding day.',
    description:
      'Milestone birthdays, anniversaries, galas, and brand events — planned with the same rigor and design sensibility as our wedding work, scaled to your guest list and goals.',
    deliverables: [
      'Concept development & run-of-show',
      'Venue & vendor sourcing',
      'Guest experience & logistics planning',
      'On-site event management',
    ],
    idealFor: 'Organizations and individuals planning a milestone or brand event.',
  },
]

export const getServiceById = (id) => services.find((s) => s.id === id)
