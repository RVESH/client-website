import { images } from "./images";

export const products = [
  {
    id: "minimal-leather-bag",
    name: "Minimal Leather Bag",
    category: "Bags",
    price: 2499,
    compareAtPrice: 2999,
    badge: "BESTSELLER",
    rating: 4.8,
    reviewCount: 124,
    image: images.products.bag01,
    description:
      "A structured everyday leather bag designed for work, travel and daily essentials.",
    features: [
      "Premium finish",
      "Adjustable strap",
      "Everyday carry",
    ],
  },

  {
    id: "classic-steel-watch",
    name: "Classic Steel Watch",
    category: "Accessories",
    price: 3299,
    compareAtPrice: 3999,
    badge: "POPULAR",
    rating: 4.9,
    reviewCount: 89,
    image: images.products.watch01,
    description:
      "A clean stainless-steel watch built around a timeless minimalist profile.",
    features: [
      "Stainless steel",
      "Minimal dial",
      "Everyday wear",
    ],
  },

  {
    id: "premium-linen-shirt",
    name: "Premium Linen Shirt",
    category: "Clothing",
    price: 1899,
    compareAtPrice: 2299,
    badge: "NEW",
    rating: 4.7,
    reviewCount: 76,
    image: images.products.cloth01,
    description:
      "Breathable linen with a relaxed silhouette for warm everyday wear.",
    features: [
      "100% linen",
      "Relaxed fit",
      "Breathable fabric",
    ],
  },

  {
    id: "everyday-sneakers",
    name: "Everyday Sneakers",
    category: "Footwear",
    price: 2799,
    compareAtPrice: 3499,
    badge: "BESTSELLER",
    rating: 4.8,
    reviewCount: 215,
    image: images.products.shoe01,
    description:
      "Comfort-focused sneakers built for everyday movement.",
    features: [
      "Cushioned sole",
      "Lightweight construction",
      "Everyday styling",
    ],
  },

  {
    id: "ceramic-table-lamp",
    name: "Ceramic Table Lamp",
    category: "Home",
    price: 1599,
    compareAtPrice: 1999,
    badge: "SALE",
    rating: 4.6,
    reviewCount: 54,
    image: images.products.lamp01,
    description:
      "A sculptural ceramic lamp designed for warm ambient light.",
    features: [
      "Ceramic body",
      "Warm light",
      "Minimal form",
    ],
  },

  {
    id: "everyday-backpack",
    name: "Everyday Backpack",
    category: "Bags",
    price: 2199,
    compareAtPrice: 2699,
    badge: "POPULAR",
    rating: 4.7,
    reviewCount: 101,
    image: images.products.backpack01,
    description:
      "A streamlined backpack with practical storage for city life.",
    features: [
      "Laptop compartment",
      "Water-resistant finish",
      "Lightweight",
    ],
  },

  {
    id: "utility-cotton-jacket",
    name: "Utility Cotton Jacket",
    category: "Clothing",
    price: 2999,
    compareAtPrice: 3699,
    badge: "NEW",
    rating: 4.8,
    reviewCount: 63,
    image: images.products.jacket01,
    description:
      "A versatile cotton jacket inspired by refined workwear.",
    features: [
      "Heavy cotton",
      "Utility pockets",
      "Relaxed fit",
    ],
  },

  {
    id: "slim-leather-wallet",
    name: "Slim Leather Wallet",
    category: "Accessories",
    price: 899,
    compareAtPrice: 1199,
    badge: "BESTSELLER",
    rating: 4.8,
    reviewCount: 142,
    image: images.products.wallet01,
    description:
      "A compact leather wallet designed for cards and everyday essentials.",
    features: [
      "Genuine leather",
      "Slim profile",
      "Card optimized",
    ],
  },
];

export function getProductById(id) {
  return products.find(
    (product) => product.id === id
  );
}