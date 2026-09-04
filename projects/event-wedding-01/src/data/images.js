// ============================================================================
// IMAGE REGISTRY
// Every physical file lives in /public/images/. Components and data files
// reference images only through this registry — never a raw path.
// ============================================================================

const path = (file) => `/images/${file}`

export const images = {
  hero: {
    src: path('gallery01.jpg'),
    alt: 'A minimal ceremony arch set against a warm, softly lit backdrop',
  },

  story: {
    src: path('gallery13.jpg'),
    alt: 'An editorial-style framed portrait composition',
  },

  venue01: { src: path('gallery05.jpg'), alt: 'Garden and estate venue styling in soft sage tones' },
  venue02: { src: path('gallery06.jpg'), alt: 'Ballroom and black-tie styling with candlelight' },
  venue03: { src: path('gallery07.jpg'), alt: 'Coastal and waterfront venue styling' },
  venue04: { src: path('gallery08.jpg'), alt: 'Modern and minimal styling with fine linework' },

  event01: { src: path('gallery01.jpg'), alt: 'The Garden Wedding signature experience' },
  event02: { src: path('gallery02.jpg'), alt: 'The Estate Wedding signature experience' },
  event03: { src: path('gallery13.jpg'), alt: 'The Intimate Elopement signature experience' },
  event04: { src: path('gallery07.jpg'), alt: 'The Coastal Wedding signature experience' },
  event05: { src: path('gallery06.jpg'), alt: 'The Black-Tie Ballroom signature experience' },
  event06: { src: path('gallery08.jpg'), alt: 'The Private Celebration signature experience' },

  gallery: Array.from({ length: 16 }, (_, i) => {
    const n = String(i + 1).padStart(2, '0')
    const categories = ['Ceremony', 'Reception', 'Details', 'Portraits']
    const category = categories[Math.floor(i / 4)]
    return {
      id: `gallery-${n}`,
      category,
      src: path(`gallery${n}.jpg`),
      alt: `${category} moment from a recent Amaranth & Oak celebration, image ${n}`,
    }
  }),
}
