// ============================================================
// images.js — central image registry.
// ONE physical image = ONE file in /public/images.
// Reference images everywhere through this file only.
// ============================================================

export const images = {
  // Editorial hero uses a product asset rather than a duplicate hero file.
  heroVisual: '/images/product-sculptural-rattan-chair-1.svg',

  // Category imagery reuses the most relevant product photography/asset.
  categoryCeramics: '/images/product-kiln-stoneware-vase-1.svg',
  categoryLighting: '/images/product-brass-arc-lamp-1.svg',
  categoryTextiles: '/images/product-block-print-linen-rug-1.svg',
  categoryFurniture: '/images/product-sculptural-rattan-chair-1.svg',
  categoryJewelry: '/images/product-hammered-brass-cuff-1.svg',
  categoryStationery: '/images/product-letterpress-notebook-set-1.svg',
  categoryKitchen: '/images/product-cast-iron-skillet-trio-1.svg',
  categoryGarden: '/images/product-terracotta-planter-set-1.svg',

  // Seller/patron artwork already exists as SVG and should stay SVG.
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

// Each product gets two distinct existing gallery variants.
export function getProductImages(productId) {
  return [`/images/product-${productId}-1.svg`, `/images/product-${productId}-2.svg`]
}
