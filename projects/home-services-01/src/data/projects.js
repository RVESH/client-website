// Work / project gallery. `before`/`after` are optional — when present,
// ProjectCard renders a before/after treatment.

export const projects = [
  {
    slug: 'millbrook-kitchen',
    title: 'Millbrook Ave. Kitchen',
    category: 'Kitchen & Bath',
    location: 'Millbrook',
    year: 2025,
    summary: 'Galley kitchen opened into the dining room, full cabinetry and stone replacement.',
    image: 'projectKitchen1',
    before: 'projectKitchen1Before',
    after: 'projectKitchen1',
  },
  {
    slug: 'cedar-hollow-bath',
    title: 'Cedar Hollow Primary Bath',
    category: 'Kitchen & Bath',
    location: 'Cedar Hollow',
    year: 2025,
    summary: 'Tub-to-shower conversion with heated floor and full tile replacement.',
    image: 'projectBath1',
    before: 'projectBath1Before',
    after: 'projectBath1',
  },
  {
    slug: 'north-ridge-deck',
    title: 'North Ridge Deck & Pergola',
    category: 'Outdoor Living',
    location: 'North Ridge',
    year: 2024,
    summary: 'Two-tier deck in weather-rated composite with a cedar pergola over the dining area.',
    image: 'projectDeck1',
  },
  {
    slug: 'fairview-panel-upgrade',
    title: 'Fairview Heights Panel Upgrade',
    category: 'Electrical',
    location: 'Fairview Heights',
    year: 2024,
    summary: '100A to 200A service upgrade with full circuit remapping for an EV charger.',
    image: 'projectElectrical1',
  },
  {
    slug: 'brookstone-exterior',
    title: 'Brookstone Exterior Repaint',
    category: 'Painting',
    location: 'Brookstone',
    year: 2024,
    summary: 'Full exterior strip, repair and repaint on a 1920s clapboard home.',
    image: 'projectPainting1',
    before: 'projectPainting1Before',
    after: 'projectPainting1',
  },
  {
    slug: 'old-mill-repipe',
    title: 'Old Mill District Repipe',
    category: 'Plumbing',
    location: 'Old Mill District',
    year: 2023,
    summary: 'Whole-home copper repipe on a 1948 property, completed in four days.',
    image: 'projectPlumbing1',
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
