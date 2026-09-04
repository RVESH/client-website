// ============================================================
// products.js — marketplace product catalogue.
// `category` refers to a categories.js id, `seller` to a sellers.js id.
// `images` are resolved via getProductImages(id) in images.js.
// ============================================================

import { getProductImages } from './images.js'

const RAW_PRODUCTS = [
  {
    id: 'kiln-stoneware-vase',
    title: 'Kiln-Fired Stoneware Vase',
    category: 'ceramics',
    seller: 'ashfield-ceramics',
    price: 86,
    compareAtPrice: null,
    rating: 4.8,
    reviewCount: 64,
    tags: ['New'],
    availability: 'In stock',
    shortDesc: 'A single-fired stoneware vase with a matte oatmeal glaze and hand-carved base.',
    description:
      'Each vase is thrown on a manual wheel and finished with a matte oatmeal glaze that shifts subtly with the kiln atmosphere, so no two pieces are exactly alike. Sized for a single stem or a small gathered bunch.',
    specs: [
      { label: 'Material', value: 'Stoneware clay, matte glaze' },
      { label: 'Dimensions', value: '6.5"H x 4"W' },
      { label: 'Care', value: 'Hand wash only' },
      { label: 'Origin', value: 'Asheville, NC' },
    ],
  },
  {
    id: 'hand-thrown-dinner-set',
    title: 'Hand-Thrown Dinner Set (4-Piece)',
    category: 'ceramics',
    seller: 'ashfield-ceramics',
    price: 214,
    compareAtPrice: 248,
    rating: 4.9,
    reviewCount: 118,
    tags: ['Bestseller'],
    availability: 'In stock',
    shortDesc: 'Four-piece place setting in a warm speckled stoneware glaze.',
    description:
      'A complete place setting — dinner plate, side plate, bowl and mug — thrown in small batches and finished in a speckled stoneware glaze that pairs easily with everyday table settings.',
    specs: [
      { label: 'Includes', value: '1 dinner plate, 1 side plate, 1 bowl, 1 mug' },
      { label: 'Material', value: 'Stoneware clay, food-safe glaze' },
      { label: 'Care', value: 'Dishwasher and microwave safe' },
      { label: 'Origin', value: 'Asheville, NC' },
    ],
  },
  {
    id: 'brass-arc-lamp',
    title: 'Brushed Brass Arc Lamp',
    category: 'lighting',
    seller: 'nordfolk-lighting',
    price: 340,
    compareAtPrice: null,
    rating: 4.7,
    reviewCount: 41,
    tags: ['Limited'],
    availability: 'Made to order',
    shortDesc: 'A sweeping brushed-brass arc lamp with a hand-blown opal glass shade.',
    description:
      'Built around a solid brass arm and finished by hand to a soft brushed texture, this floor lamp casts a warm, diffused light through a hand-blown opal glass shade. Each order is made in Portland after purchase.',
    specs: [
      { label: 'Material', value: 'Brushed brass, blown glass' },
      { label: 'Dimensions', value: '62"H, 30" arm reach' },
      { label: 'Bulb', value: 'E26, not included' },
      { label: 'Lead time', value: '3–4 weeks, made to order' },
    ],
  },
  {
    id: 'paper-lantern-pendant',
    title: 'Paper Lantern Pendant',
    category: 'lighting',
    seller: 'nordfolk-lighting',
    price: 128,
    compareAtPrice: null,
    rating: 4.6,
    reviewCount: 29,
    tags: [],
    availability: 'In stock',
    shortDesc: 'A pleated paper pendant shade over a minimal brass ceiling mount.',
    description:
      'A soft, pleated paper shade diffuses light evenly across a room without glare. The brass ceiling mount is designed to be re-wired easily by any licensed electrician.',
    specs: [
      { label: 'Material', value: 'Washi paper, brass fittings' },
      { label: 'Dimensions', value: '14" diameter shade' },
      { label: 'Bulb', value: 'E26, not included' },
      { label: 'Origin', value: 'Portland, OR' },
    ],
  },
  {
    id: 'handwoven-wool-throw',
    title: 'Handwoven Wool Throw',
    category: 'textiles',
    seller: 'loom-bramble',
    price: 165,
    compareAtPrice: null,
    rating: 4.9,
    reviewCount: 87,
    tags: ['New'],
    availability: 'In stock',
    shortDesc: 'An undyed wool throw woven on a floor loom in a soft herringbone weave.',
    description:
      'Woven from undyed, naturally coloured wool on a floor loom, this throw uses a soft herringbone structure that drapes well over a sofa or the foot of a bed. Fringe is hand-knotted.',
    specs: [
      { label: 'Material', value: '100% undyed wool' },
      { label: 'Dimensions', value: '50" x 70"' },
      { label: 'Care', value: 'Dry clean recommended' },
      { label: 'Origin', value: 'Providence, RI' },
    ],
  },
  {
    id: 'block-print-linen-rug',
    title: 'Block-Print Linen Rug',
    category: 'textiles',
    seller: 'loom-bramble',
    price: 420,
    compareAtPrice: null,
    rating: 4.8,
    reviewCount: 33,
    tags: ['Limited'],
    availability: 'Made to order',
    shortDesc: 'A hand block-printed linen rug in a small-batch indigo run.',
    description:
      'Each rug is block-printed by hand with hand-carved wooden stamps in a single indigo dye run, so colour saturation varies slightly piece to piece. Backed with a natural cotton canvas.',
    specs: [
      { label: 'Material', value: 'Linen face, cotton backing' },
      { label: 'Dimensions', value: "5' x 7'" },
      { label: 'Care', value: 'Spot clean only' },
      { label: 'Lead time', value: '2–3 weeks, made to order' },
    ],
  },
  {
    id: 'reclaimed-oak-side-table',
    title: 'Reclaimed Oak Side Table',
    category: 'furniture',
    seller: 'hearth-timber',
    price: 560,
    compareAtPrice: null,
    rating: 4.7,
    reviewCount: 22,
    tags: [],
    availability: 'In stock',
    shortDesc: 'A joinery-built side table in reclaimed oak with a hand-rubbed oil finish.',
    description:
      'Built using traditional mortise-and-tenon joinery from reclaimed oak barn beams, this side table is finished with a hand-rubbed oil that deepens with age rather than wearing out.',
    specs: [
      { label: 'Material', value: 'Reclaimed oak, oil finish' },
      { label: 'Dimensions', value: '22"H x 18"W x 18"D' },
      { label: 'Care', value: 'Re-oil annually' },
      { label: 'Origin', value: 'Burlington, VT' },
    ],
  },
  {
    id: 'sculptural-rattan-chair',
    title: 'Sculptural Rattan Chair',
    category: 'furniture',
    seller: 'hearth-timber',
    price: 780,
    compareAtPrice: 860,
    rating: 4.9,
    reviewCount: 51,
    tags: ['Bestseller'],
    availability: 'Made to order',
    shortDesc: 'A hand-woven rattan lounge chair over a solid ash frame.',
    description:
      'The rattan seat and back are hand-woven over a solid steam-bent ash frame, a technique that takes a single weaver roughly nine hours per chair. Each order is woven after purchase.',
    specs: [
      { label: 'Material', value: 'Solid ash, natural rattan' },
      { label: 'Dimensions', value: '30"H x 27"W x 29"D' },
      { label: 'Weight capacity', value: '275 lbs' },
      { label: 'Lead time', value: '4–5 weeks, made to order' },
    ],
  },
  {
    id: 'hammered-brass-cuff',
    title: 'Hammered Brass Cuff',
    category: 'jewelry',
    seller: 'marrow-studio',
    price: 92,
    compareAtPrice: null,
    rating: 4.8,
    reviewCount: 76,
    tags: ['New'],
    availability: 'In stock',
    shortDesc: 'A hand-hammered brass cuff with a raw, faceted texture.',
    description:
      'Cut, hammered and shaped entirely by hand, this cuff carries a faceted texture from the hammering process itself. Brass develops a natural patina over time; a polishing cloth is included.',
    specs: [
      { label: 'Material', value: 'Solid brass' },
      { label: 'Sizing', value: 'Adjustable, one size fits most' },
      { label: 'Care', value: 'Polish cloth included' },
      { label: 'Origin', value: 'Brooklyn, NY' },
    ],
  },
  {
    id: 'pearl-drop-earrings',
    title: 'Freshwater Pearl Drop Earrings',
    category: 'jewelry',
    seller: 'marrow-studio',
    price: 118,
    compareAtPrice: null,
    rating: 4.7,
    reviewCount: 54,
    tags: [],
    availability: 'In stock',
    shortDesc: 'Freshwater pearls set on hand-forged gold-fill ear wires.',
    description:
      'Each pearl is selected by hand for shape and lustre, then set on gold-fill ear wires forged in the studio. A quiet, everyday piece that still catches the light.',
    specs: [
      { label: 'Material', value: 'Freshwater pearl, gold-fill' },
      { label: 'Dimensions', value: '1.25" drop length' },
      { label: 'Care', value: 'Avoid contact with perfume' },
      { label: 'Origin', value: 'Brooklyn, NY' },
    ],
  },
  {
    id: 'letterpress-notebook-set',
    title: 'Letterpress Notebook Set',
    category: 'stationery',
    seller: 'fielding-paper',
    price: 38,
    compareAtPrice: null,
    rating: 4.9,
    reviewCount: 142,
    tags: [],
    availability: 'In stock',
    shortDesc: 'A set of three letterpress-covered notebooks with recycled cotton paper.',
    description:
      'Covers are printed one at a time on a Vandercook letterpress, then hand-bound around 120 pages of recycled cotton paper that takes both pencil and fountain pen well.',
    specs: [
      { label: 'Includes', value: 'Set of 3 notebooks' },
      { label: 'Paper', value: '120 pages, recycled cotton, dot-grid' },
      { label: 'Dimensions', value: '5.5" x 8.5"' },
      { label: 'Origin', value: 'Austin, TX' },
    ],
  },
  {
    id: 'marbled-desk-organizer',
    title: 'Marbled Desk Organizer',
    category: 'stationery',
    seller: 'fielding-paper',
    price: 54,
    compareAtPrice: null,
    rating: 4.6,
    reviewCount: 38,
    tags: ['New'],
    availability: 'In stock',
    shortDesc: 'A hand-marbled paper-wrapped desk tray for pens and small tools.',
    description:
      'Marbled using a traditional water-bath technique, no two trays carry the same pattern. The rigid interior is wrapped by hand and sealed with a matte protective coat.',
    specs: [
      { label: 'Material', value: 'Marbled paper over rigid board' },
      { label: 'Dimensions', value: '9" x 4" x 2"' },
      { label: 'Care', value: 'Wipe clean with a dry cloth' },
      { label: 'Origin', value: 'Austin, TX' },
    ],
  },
  {
    id: 'cast-iron-skillet-trio',
    title: 'Cast Iron Skillet Trio',
    category: 'kitchen',
    seller: 'hollow-co',
    price: 145,
    compareAtPrice: 168,
    rating: 4.9,
    reviewCount: 96,
    tags: ['Bestseller'],
    availability: 'In stock',
    shortDesc: 'Three pre-seasoned cast iron skillets in graduated sizes.',
    description:
      'Cast, sanded and pre-seasoned in-house, this trio covers everyday cooking from a single egg to a full skillet meal. Seasoning improves with every use.',
    specs: [
      { label: 'Includes', value: '6", 8" and 10" skillets' },
      { label: 'Material', value: 'Pre-seasoned cast iron' },
      { label: 'Care', value: 'Hand wash, re-oil after use' },
      { label: 'Origin', value: 'Minneapolis, MN' },
    ],
  },
  {
    id: 'terracotta-planter-set',
    title: 'Terracotta Planter Set',
    category: 'garden',
    seller: 'hollow-co',
    price: 76,
    compareAtPrice: null,
    rating: 4.7,
    reviewCount: 61,
    tags: ['New'],
    availability: 'In stock',
    shortDesc: 'A set of three unglazed terracotta planters with drainage saucers.',
    description:
      'Left unglazed so the clay can breathe, these planters develop a natural patina outdoors over time. Each size comes with a matching drainage saucer.',
    specs: [
      { label: 'Includes', value: '4", 6" and 8" planters with saucers' },
      { label: 'Material', value: 'Unglazed terracotta' },
      { label: 'Use', value: 'Indoor or outdoor' },
      { label: 'Origin', value: 'Minneapolis, MN' },
    ],
  },
]

export const products = RAW_PRODUCTS.map((p) => ({
  ...p,
  images: getProductImages(p.id),
}))

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getRelatedProducts(product, limit = 4) {
  return products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.seller === product.seller))
    .slice(0, limit)
}

export function getFeaturedProducts(limit = 6) {
  const curatedIds = [
    'kiln-stoneware-vase',
    'brass-arc-lamp',
    'handwoven-wool-throw',
    'sculptural-rattan-chair',
    'hammered-brass-cuff',
    'cast-iron-skillet-trio',
  ]
  return curatedIds.map((id) => getProductById(id)).filter(Boolean).slice(0, limit)
}

export function getNewArrivals(limit = 4) {
  return products.filter((p) => p.tags.includes('New')).slice(0, limit)
}
