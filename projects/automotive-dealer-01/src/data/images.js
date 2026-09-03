// ============================================================================
// IMAGE REGISTRY
// Every physical file lives in /public/images/. Components and data files
// reference images only through this registry — never a raw path.
// ============================================================================

const path = (file) => `/images/${file}`

export const images = {
  hero: {
    src: path('hero01.jpg'),
    alt: 'Premium performance vehicle on the Vantage Motor Co. showroom floor',
  },

  dealer: {
    src: path('dealer01.jpg'),
    alt: 'Wide view of the Vantage Motor Co. showroom floor',
  },

  about: {
    src: path('about01.jpg'),
    alt: 'A recently inspected vehicle staged inside the Vantage showroom',
  },

  contact: {
    src: path('contact01.jpg'),
    alt: 'Vantage Motor Co. showroom entrance at dusk',
  },

  texture: {
    src: path('texture01.jpg'),
    alt: '',
  },

  vehicle01: {
    cover: { src: path('vehicle01.jpg'), alt: 'Apex GT-R performance coupe, side profile' },
    detail: { src: path('vehicle01-detail.jpg'), alt: 'Apex GT-R performance coupe, detail view' },
  },
  vehicle02: {
    cover: { src: path('vehicle02.jpg'), alt: 'Aurelia Coupe in deep red, side profile' },
    detail: { src: path('vehicle02-detail.jpg'), alt: 'Aurelia Coupe, detail view' },
  },
  vehicle03: {
    cover: { src: path('vehicle03.jpg'), alt: 'Terra SUV X7, side profile' },
    detail: { src: path('vehicle03-detail.jpg'), alt: 'Terra SUV X7, detail view' },
  },
  vehicle04: {
    cover: { src: path('vehicle04.jpg'), alt: 'Glide EV One electric sedan, side profile' },
    detail: { src: path('vehicle04-detail.jpg'), alt: 'Glide EV One, detail view' },
  },
  vehicle05: {
    cover: { src: path('vehicle05.jpg'), alt: 'Meridian Sedan in pearl white, side profile' },
    detail: { src: path('vehicle05-detail.jpg'), alt: 'Meridian Sedan, detail view' },
  },
  vehicle06: {
    cover: { src: path('vehicle06.jpg'), alt: 'Rallye Hatch in signal orange, side profile' },
    detail: { src: path('vehicle06-detail.jpg'), alt: 'Rallye Hatch, detail view' },
  },
  vehicle07: {
    cover: { src: path('vehicle07.jpg'), alt: 'Strata SUV, side profile' },
    detail: { src: path('vehicle07-detail.jpg'), alt: 'Strata SUV, detail view' },
  },
  vehicle08: {
    cover: { src: path('vehicle08.jpg'), alt: 'Nova Performance in graphite, side profile' },
    detail: { src: path('vehicle08-detail.jpg'), alt: 'Nova Performance, detail view' },
  },

  team01: { src: path('team01.jpg'), alt: 'Portrait placeholder for the General Manager' },
  team02: { src: path('team02.jpg'), alt: 'Portrait placeholder for the Sales Director' },
  team03: { src: path('team03.jpg'), alt: 'Portrait placeholder for the Head of Inspections' },
}
