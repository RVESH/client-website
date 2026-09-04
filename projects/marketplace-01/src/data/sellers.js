// ============================================================
// sellers.js — independent maker / studio profiles.
// ============================================================

export const sellers = [
  {
    id: 'ashfield-ceramics',
    name: 'Ashfield Ceramics',
    avatar: 'sellerAshfield',
    location: 'Asheville, NC',
    since: '2016',
    rating: 4.9,
    productCount: 42,
    tagline: 'Wood-fired stoneware, thrown and glazed by hand in small batches.',
  },
  {
    id: 'nordfolk-lighting',
    name: 'Nordfolk Lighting Co.',
    avatar: 'sellerNordfolk',
    location: 'Portland, OR',
    since: '2018',
    rating: 4.8,
    productCount: 27,
    tagline: 'Sculptural lighting built from brass, oak and hand-blown glass.',
  },
  {
    id: 'loom-bramble',
    name: 'Loom & Bramble',
    avatar: 'sellerLoomBramble',
    location: 'Providence, RI',
    since: '2014',
    rating: 4.9,
    productCount: 35,
    tagline: 'Handwoven textiles and rugs using undyed, natural fibres.',
  },
  {
    id: 'hearth-timber',
    name: 'Hearth & Timber',
    avatar: 'sellerHearthTimber',
    location: 'Burlington, VT',
    since: '2012',
    rating: 4.9,
    productCount: 19,
    tagline: 'Solid-wood furniture built to be repaired, not replaced.',
  },
  {
    id: 'marrow-studio',
    name: 'Marrow Studio',
    avatar: 'sellerMarrow',
    location: 'Brooklyn, NY',
    since: '2019',
    rating: 4.8,
    productCount: 58,
    tagline: 'Hammered metal jewelry and small objects cast in a Brooklyn studio.',
  },
  {
    id: 'fielding-paper',
    name: 'Fielding Paper Co.',
    avatar: 'sellerFielding',
    location: 'Austin, TX',
    since: '2020',
    rating: 4.7,
    productCount: 31,
    tagline: 'Letterpress-printed notebooks and marbled paper goods.',
  },
  {
    id: 'hollow-co',
    name: 'Hollow & Co.',
    avatar: 'sellerHollow',
    location: 'Minneapolis, MN',
    since: '2015',
    rating: 4.9,
    productCount: 24,
    tagline: 'Cast iron kitchenware and terracotta objects for the home and garden.',
  },
]

export function getSellerById(id) {
  return sellers.find((s) => s.id === id)
}
