// ============================================================
// images.js — central image registry.
// ONE physical image = ONE file in /public/images.
// Reference images everywhere through this file only.
// Replacing a file on disk (same filename) requires no code change.
// ============================================================

export const images = {
  heroVisual: '/images/hero-visual.svg',

  categoryCeramics: '/images/category-ceramics.svg',
  categoryLighting: '/images/category-lighting.svg',
  categoryTextiles: '/images/category-textiles.svg',
  categoryFurniture: '/images/category-furniture.svg',
  categoryJewelry: '/images/category-jewelry.svg',
  categoryStationery: '/images/category-stationery.svg',
  categoryKitchen: '/images/category-kitchen.svg',
  categoryGarden: '/images/category-garden.svg',

  sellerAshfield: '/images/seller-ashfield.svg',
  sellerNordfolk: '/images/seller-nordfolk.svg',
  sellerLoomBramble: '/images/seller-loombramble.svg',
  sellerHearthTimber: '/images/seller-hearthtimber.svg',
  sellerMarrow: '/images/seller-marrow.svg',
  sellerFielding: '/images/seller-fielding.svg',
  sellerHollow: '/images/seller-hollow.svg',

  patron1: '/images/patron-1.svg',
  patron2: '/images/patron-2.svg',
  patron3: '/images/patron-3.svg',
  patron4: '/images/patron-4.svg',
}

// Product gallery images follow the pattern /images/product-{id}-{1|2}.svg
// and are resolved directly by id in products.js — see getProductImages().
export function getProductImages(productId) {
  return [`/images/product-${productId}-1.svg`, `/images/product-${productId}-2.svg`]
}
