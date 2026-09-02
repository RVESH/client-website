// ============================================
// IMAGE REGISTRY
// Every image used on the site is registered here.
// Physical files live in public/images/.
// To replace a photo, keep the filename the same
// and swap the file in public/images/.
// ============================================

const path = (file) => `/images/${file}`

// Artwork is an original illustration set (not stock photography) drawn
// specifically for this brand, in the Brightside palette. Files are SVG.
// To swap in real photography later, add the photo to public/images/,
// keep the same key here, and point `src` at the new filename.
export const images = {
  hero: {
    src: path('hero01.svg'),
    alt: 'Illustration of a cleaner wiping down a bright, sunlit kitchen counter',
  },

  service01: {
    src: path('service01.svg'),
    alt: 'Illustration of a living room being vacuumed during a standard house cleaning',
  },
  service02: {
    src: path('service02.svg'),
    alt: 'Illustration of a cleaner scrubbing bathroom tile during a deep cleaning visit',
  },
  service03: {
    src: path('service03.svg'),
    alt: 'Illustration of an empty apartment being prepared ahead of a move-in',
  },
  service04: {
    src: path('service04.svg'),
    alt: 'Illustration of an office reception area kept spotless by a commercial cleaning team',
  },
  service05: {
    src: path('service05.svg'),
    alt: 'Illustration of a kitchen stovetop and countertop being sanitized',
  },
  service06: {
    src: path('service06.svg'),
    alt: 'Illustration of a freshly cleaned room after post-renovation dust removal',
  },

  about01: {
    src: path('about01.svg'),
    alt: 'Illustration of the Brightside team preparing supplies before a home visit',
  },

  process01: {
    src: path('process01.svg'),
    alt: 'Illustration of a cleaner reviewing a checklist with a homeowner',
  },

  area01: {
    src: path('area01.svg'),
    alt: 'Illustration of a tree-lined residential street in one of our service neighborhoods',
  },

  contact01: {
    src: path('contact01.svg'),
    alt: 'Illustration of a bright, freshly cleaned living space',
  },

  team01: {
    src: path('team01.svg'),
    alt: 'Illustration of two Brightside team members before a shift',
  },
}
