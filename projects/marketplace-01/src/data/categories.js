// ============================================================
// categories.js — marketplace category catalogue.
// `icon` values map to lucide-react icon names.
// ============================================================

export const categories = [
  {
    id: 'ceramics',
    name: 'Ceramics & Tableware',
    image: 'categoryCeramics',
    icon: 'Amphora',
    itemCount: 312,
    description: 'Hand-thrown stoneware, glazed tableware and one-off studio pieces.',
  },
  {
    id: 'lighting',
    name: 'Lighting',
    image: 'categoryLighting',
    icon: 'Lamp',
    itemCount: 184,
    description: 'Sculptural lamps, pendants and sconces from independent lighting studios.',
  },
  {
    id: 'textiles',
    name: 'Textiles & Rugs',
    image: 'categoryTextiles',
    icon: 'LayoutGrid',
    itemCount: 246,
    description: 'Handwoven throws, block-printed textiles and natural-fibre rugs.',
  },
  {
    id: 'furniture',
    name: 'Furniture',
    image: 'categoryFurniture',
    icon: 'Armchair',
    itemCount: 158,
    description: 'Solid-wood and rattan furniture built in small batches, not factories.',
  },
  {
    id: 'jewelry',
    name: 'Jewelry & Objects',
    image: 'categoryJewelry',
    icon: 'Gem',
    itemCount: 421,
    description: 'Hammered metals, freshwater pearls and small sculptural objects.',
  },
  {
    id: 'stationery',
    name: 'Stationery & Paper',
    image: 'categoryStationery',
    icon: 'NotebookPen',
    itemCount: 197,
    description: 'Letterpress notebooks, marbled paper goods and desk objects.',
  },
  {
    id: 'kitchen',
    name: 'Kitchen & Home',
    image: 'categoryKitchen',
    icon: 'CookingPot',
    itemCount: 133,
    description: 'Cast iron, enamelware and everyday kitchen objects made to last.',
  },
  {
    id: 'garden',
    name: 'Garden & Outdoor',
    image: 'categoryGarden',
    icon: 'Flower2',
    itemCount: 96,
    description: 'Terracotta planters, garden tools and outdoor objects.',
  },
]

export function getCategoryById(id) {
  return categories.find((c) => c.id === id)
}
