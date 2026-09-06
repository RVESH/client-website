// ============================================================
// treatments.js — treatment catalogue used on Home (featured)
// and the Treatments page (full grid).
// `icon` values map to lucide-react icon names.
// ============================================================

export const treatments = [
  {
    id: 'general',
    title: 'General Dentistry',
    icon: 'Stethoscope',
    image: 'treatmentGeneral',
    summary: 'Routine exams, cleanings and check-ups to keep your smile healthy year-round.',
    details: [
      'Comprehensive oral exams with digital imaging',
      'Professional cleanings and plaque removal',
      'Cavity detection and early intervention',
      'Personalised home-care guidance',
    ],
    featured: true,
  },
  {
    id: 'cosmetic',
    title: 'Cosmetic Dentistry',
    icon: 'Sparkles',
    image: 'treatmentCosmetic',
    summary: 'Veneers, bonding and smile design for a result that still looks like you.',
    details: [
      'Porcelain veneers and composite bonding',
      'Full digital smile design previews',
      'Gum contouring for balanced proportions',
      'Natural-looking, long-lasting materials',
    ],
    featured: true,
  },
  {
    id: 'orthodontics',
    title: 'Orthodontics',
    icon: 'Move',
    image: 'treatmentOrthodontics',
    summary: 'Clear aligners and modern braces to straighten teeth at any age.',
    details: [
      'Clear aligner therapy with 3D treatment mapping',
      'Traditional and ceramic braces',
      'Bite correction for jaw alignment',
      'Retention plans to protect your results',
    ],
    featured: true,
  },
  {
    id: 'implants',
    title: 'Dental Implants',
    icon: 'ShieldCheck',
    image: 'treatmentImplants',
    summary: 'Permanent, natural-feeling replacements for missing teeth.',
    details: [
      'Single-tooth and full-arch implant solutions',
      'Guided 3D implant placement',
      'Custom porcelain crowns and bridges',
      'Bone grafting when additional support is needed',
    ],
    featured: true,
  },
  {
    id: 'whitening',
    title: 'Teeth Whitening',
    icon: 'Sun',
    image: 'treatmentWhitening',
    summary: 'In-studio and take-home whitening for a brighter, even smile.',
    details: [
      'In-studio whitening in a single visit',
      'Custom take-home whitening trays',
      'Sensitivity-conscious formulations',
      'Shade matching for a natural result',
    ],
    featured: false,
  },
  {
    id: 'preventive',
    title: 'Preventive Care',
    icon: 'Leaf',
    image: 'treatmentPreventive',
    summary: 'Proactive care designed to catch small issues before they grow.',
    details: [
      'Fluoride treatments and dental sealants',
      'Gum health screening and periodontal care',
      'Oral cancer screening at every check-up',
      'Nightguards for teeth grinding',
    ],
    featured: false,
  },
  {
    id: 'restorative',
    title: 'Restorative Dentistry',
    icon: 'Wrench',
    image: 'treatmentRestorative',
    summary: 'Fillings, crowns and repairs that restore comfort and function.',
    details: [
      'Tooth-coloured composite fillings',
      'Custom crowns and inlays',
      'Root canal therapy',
      'Repair for chipped or worn teeth',
    ],
    featured: false,
  },
  {
    id: 'pediatric',
    title: 'Pediatric Dentistry',
    icon: 'Baby',
    image: 'treatmentPediatric',
    summary: 'Gentle, patient care that helps kids feel at ease from their very first visit.',
    details: [
      'Child-friendly exams and cleanings',
      'Cavity prevention and sealants',
      'Guidance on habits and growth milestones',
      'A calm, unhurried pace for nervous first-timers',
    ],
    featured: false,
  },
]

export function getFeaturedTreatments() {
  return treatments.filter((t) => t.featured)
}
