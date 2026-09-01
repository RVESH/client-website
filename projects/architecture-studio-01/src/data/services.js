import { images } from './images.js'

export const services = [
  {
    id: 'architecture',
    title: 'Architecture',
    summary: 'New buildings and extensions, from early feasibility through to planning and building regulations.',
    points: [
      'Feasibility studies and site appraisal',
      'Concept and detailed design',
      'Planning applications',
      'Technical and building-regulations drawings',
    ],
    image: images.servicesArchitecture,
  },
  {
    id: 'interiors',
    title: 'Interior design',
    summary: 'Layout, materials and fittings for spaces that need to hold up to daily use without losing character.',
    points: [
      'Space planning and joinery design',
      'Material and finishes specification',
      'Lighting design',
      'Furniture selection and procurement',
    ],
    image: images.servicesInteriors,
  },
  {
    id: 'planning',
    title: 'Planning and consultation',
    summary: 'Guidance through local planning constraints before a design is committed to paper.',
    points: [
      'Pre-application advice',
      'Heritage and conservation consultation',
      'Community and stakeholder engagement',
      'Planning appeal support',
    ],
    image: images.studioMaterials,
  },
  {
    id: 'delivery',
    title: 'Project delivery',
    summary: 'Oversight on site so the drawings survive contact with the build.',
    points: [
      'Contractor tendering',
      'Contract administration',
      'Site inspections',
      'Snagging and handover',
    ],
    image: images.studioWorkshop,
  },
]
