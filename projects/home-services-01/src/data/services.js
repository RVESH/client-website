// Service catalogue. `icon` maps to a lucide-react icon component name
// (see components/IconTile). `image` keys reference src/data/images.js.

export const services = [
  {
    slug: 'kitchen-bath-remodels',
    icon: 'ChefHat',
    name: 'Kitchen & Bath Remodels',
    short: 'Full remodels and refreshes, planned to the last fixture.',
    description:
      'From layout changes to cabinetry, countertops, tiling and fixtures — we plan the whole job before a single wall comes down, so timelines and budgets hold.',
    image: 'serviceKitchen',
    included: ['Layout & design planning', 'Cabinetry & countertops', 'Tiling & waterproofing', 'Fixture install'],
  },
  {
    slug: 'electrical',
    icon: 'Zap',
    name: 'Electrical Services',
    short: 'Panel upgrades, rewiring, lighting and safety inspections.',
    description:
      'Licensed electrical work for older homes and new additions alike — panel upgrades, rewiring, lighting design and full safety inspections.',
    image: 'serviceElectrical',
    included: ['Panel upgrades', 'Rewiring & circuits', 'Lighting design', 'Safety inspections'],
  },
  {
    slug: 'plumbing-repiping',
    icon: 'Droplets',
    name: 'Plumbing & Repiping',
    short: 'Leak fixes, fixture swaps and whole-home repiping.',
    description:
      'From a dripping tap to a full repipe, our plumbing team works clean and documents everything, with clear pricing before work starts.',
    image: 'servicePlumbing',
    included: ['Leak detection & repair', 'Fixture & valve swaps', 'Whole-home repiping', 'Water heater install'],
  },
  {
    slug: 'painting-finishes',
    icon: 'PaintRoller',
    name: 'Interior & Exterior Painting',
    short: 'Prep-first painting that holds its finish for years.',
    description:
      'Proper prep — patching, sanding, priming — is most of a good paint job. We spend the time there so the finish coat lasts.',
    image: 'servicePainting',
    included: ['Surface prep & patching', 'Interior painting', 'Exterior painting', 'Cabinet refinishing'],
  },
  {
    slug: 'outdoor-decks',
    icon: 'TreePine',
    name: 'Outdoor Living & Decks',
    short: 'Decks, fencing and outdoor spaces built to last outside.',
    description:
      'Decking, fencing, pergolas and hardscape — built with weather-rated materials and detailing that keeps water moving away from your home.',
    image: 'serviceOutdoor',
    included: ['Deck design & build', 'Fencing', 'Pergolas & shade structures', 'Hardscaping'],
  },
  {
    slug: 'repairs-handyman',
    icon: 'Wrench',
    name: 'General Repairs & Handyman',
    short: 'The running list — drywall, doors, mounting, fixes.',
    description:
      'For the list that keeps growing: drywall repair, door and hardware fixes, mounting, caulking, and the dozen small jobs worth doing properly.',
    image: 'serviceHandyman',
    included: ['Drywall & patch repair', 'Doors, locks & hardware', 'TV & shelf mounting', 'Small job punch-lists'],
  },
];

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug);
}
