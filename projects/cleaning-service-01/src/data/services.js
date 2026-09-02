import { images } from './images.js'

export const services = [
  {
    id: 'house-cleaning',
    title: 'House Cleaning',
    summary:
      'A dependable, recurring clean that keeps every room in your home consistently fresh.',
    points: [
      'Dusting, vacuuming, and mopping all living areas',
      'Kitchen counters, sinks, and exteriors of appliances',
      'Bathroom sanitizing, mirrors, and fixtures',
      'Bed making and light tidying on request',
    ],
    coverage: 'Weekly, biweekly, or monthly',
    image: images.service01,
  },
  {
    id: 'deep-cleaning',
    title: 'Deep Cleaning',
    summary:
      'A thorough, top-to-bottom clean for spaces that need real attention, not a quick pass.',
    points: [
      'Baseboards, vents, and behind-furniture areas',
      'Grout scrubbing and tile detailing',
      'Interior windows and window sills',
      'Inside of oven and refrigerator on request',
    ],
    coverage: 'One-time or seasonal',
    image: images.service02,
  },
  {
    id: 'move-in-move-out',
    title: 'Move-In / Move-Out',
    summary:
      'A full reset for an empty property so it shows well or feels ready from day one.',
    points: [
      'Cabinets and drawers, inside and out',
      'Full kitchen and bathroom detailing',
      'Closets, shelving, and storage areas',
      'Floors and baseboards throughout',
    ],
    coverage: 'Single visit, flexible timing',
    image: images.service03,
  },
  {
    id: 'office-cleaning',
    title: 'Office Cleaning',
    summary:
      'Regular commercial cleaning that keeps shared workspaces presentable for staff and visitors.',
    points: [
      'Desks, reception areas, and common spaces',
      'Restroom sanitizing and restocking',
      'Trash and recycling removal',
      'Floors, glass, and high-touch surfaces',
    ],
    coverage: 'Weekday or after-hours visits',
    image: images.service04,
  },
  {
    id: 'kitchen-bathroom',
    title: 'Kitchen & Bathroom Cleaning',
    summary:
      'A focused visit for the two rooms that need the most consistent care in any home.',
    points: [
      'Degreasing stovetops and backsplashes',
      'Sink, tub, and shower descaling',
      'Grout and tile detail work',
      'Fixture polishing and mirror cleaning',
    ],
    coverage: 'One-time or add-on to a regular visit',
    image: images.service05,
  },
  {
    id: 'post-renovation',
    title: 'Post-Renovation Cleaning',
    summary:
      'Fine dust and construction residue removed so a finished space is actually livable.',
    points: [
      'Fine dust removal from every surface',
      'Light fixtures, vents, and window tracks',
      'Floor detailing and adhesive residue removal',
      'Final walkthrough clean before move-in',
    ],
    coverage: 'One-time, scheduled after project completion',
    image: images.service06,
  },
]
