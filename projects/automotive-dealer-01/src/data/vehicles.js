// ============================================================================
// VEHICLE INVENTORY
// Client-editable sample data. Add, remove, or edit vehicles here —
// no component code needs to change.
// ============================================================================

import { images } from './images'

export const categories = [
  'All',
  'Performance',
  'Sedan',
  'SUV',
  'Coupe',
  'Hatchback',
  'Electric',
]

export const vehicles = [
  {
    id: 'apex-gtr',
    brand: 'Apex',
    model: 'GT-R',
    year: '2025',
    category: 'Performance',
    price: '$118,500',
    mileage: '1,240 mi',
    fuel: 'Petrol',
    transmission: 'Automatic',
    power: '602 hp',
    status: 'Available',
    summary:
      'A twin-turbo flagship coupe built for the track and refined enough for the daily commute.',
    description:
      'The Apex GT-R pairs a 602 hp twin-turbo V6 with an active all-wheel-drive system tuned for both circuit lap times and long-distance composure. Carbon-ceramic brakes, adaptive dampers, and a lightweight body structure make this one of the most complete performance coupes in our current inventory.',
    specs: [
      { label: 'Engine', value: '3.0L Twin-Turbo V6' },
      { label: 'Power', value: '602 hp / 480 lb-ft' },
      { label: '0–60 mph', value: '2.9 sec' },
      { label: 'Drivetrain', value: 'All-Wheel Drive' },
      { label: 'Top Speed', value: '196 mph' },
      { label: 'Exterior', value: 'Graphite Metallic' },
    ],
    cover: images.vehicle01.cover,
    detail: images.vehicle01.detail,
  },
  {
    id: 'aurelia-coupe',
    brand: 'Aurelia',
    model: 'Coupe',
    year: '2024',
    category: 'Coupe',
    price: '$74,900',
    mileage: '8,600 mi',
    fuel: 'Petrol',
    transmission: 'Automatic',
    power: '395 hp',
    status: 'Available',
    summary:
      'An Italian-inspired grand tourer with a naturally aspirated V8 and a hand-finished cabin.',
    description:
      'The Aurelia Coupe is built around a naturally aspirated V8 and a chassis tuned for long, sweeping roads rather than outright track times. Every unit passing through our showroom receives a full detailing pass and a documented service history review before listing.',
    specs: [
      { label: 'Engine', value: '4.0L Naturally Aspirated V8' },
      { label: 'Power', value: '395 hp / 310 lb-ft' },
      { label: '0–60 mph', value: '4.4 sec' },
      { label: 'Drivetrain', value: 'Rear-Wheel Drive' },
      { label: 'Top Speed', value: '178 mph' },
      { label: 'Exterior', value: 'Rosso Corsa Red' },
    ],
    cover: images.vehicle02.cover,
    detail: images.vehicle02.detail,
  },
  {
    id: 'terra-suv-x7',
    brand: 'Terra',
    model: 'SUV X7',
    year: '2025',
    category: 'SUV',
    price: '$68,200',
    mileage: '3,150 mi',
    fuel: 'Diesel',
    transmission: 'Automatic',
    power: '330 hp',
    status: 'Available',
    summary:
      'A full-size SUV with three-row seating, air suspension, and genuine off-road capability.',
    description:
      'The Terra X7 is built for families who still want to leave the pavement behind occasionally. Air suspension, a locking rear differential, and a genuinely usable third row make it one of our most requested vehicles for buyers upgrading from a mid-size crossover.',
    specs: [
      { label: 'Engine', value: '3.0L Turbo-Diesel Inline-6' },
      { label: 'Power', value: '330 hp / 495 lb-ft' },
      { label: 'Seating', value: '7 Passengers' },
      { label: 'Drivetrain', value: 'Four-Wheel Drive' },
      { label: 'Towing', value: '7,700 lbs' },
      { label: 'Exterior', value: 'Storm Grey' },
    ],
    cover: images.vehicle03.cover,
    detail: images.vehicle03.detail,
  },
  {
    id: 'glide-ev-one',
    brand: 'Glide',
    model: 'EV One',
    year: '2025',
    category: 'Electric',
    price: '$56,400',
    mileage: '2,020 mi',
    fuel: 'Electric',
    transmission: 'Single-Speed',
    power: '429 hp',
    status: 'Available',
    summary:
      'A dual-motor electric sedan with a 320-mile range and instant, effortless acceleration.',
    description:
      'The Glide EV One delivers a genuine 320-mile EPA-estimated range alongside dual-motor all-wheel drive. It arrives with the full battery health report from our inspection team, along with details on remaining manufacturer battery warranty.',
    specs: [
      { label: 'Motor', value: 'Dual Electric Motor, AWD' },
      { label: 'Power', value: '429 hp / 471 lb-ft' },
      { label: 'Range', value: '320 mi (EPA est.)' },
      { label: 'Charging', value: '10–80% in 24 min (DC)' },
      { label: '0–60 mph', value: '3.8 sec' },
      { label: 'Exterior', value: 'Deep Sea Blue' },
    ],
    cover: images.vehicle04.cover,
    detail: images.vehicle04.detail,
  },
  {
    id: 'meridian-sedan',
    brand: 'Meridian',
    model: 'Sedan',
    year: '2023',
    category: 'Sedan',
    price: '$41,750',
    mileage: '14,300 mi',
    fuel: 'Petrol',
    transmission: 'Automatic',
    power: '248 hp',
    status: 'Available',
    summary:
      'A quietly confident executive sedan with a driver-assist suite and a whisper-quiet cabin.',
    description:
      'The Meridian Sedan is a low-mileage executive car that prioritizes comfort, quiet, and a comprehensive driver-assist package over outright performance. A strong choice for buyers who want a dependable daily car with a documented single-owner history.',
    specs: [
      { label: 'Engine', value: '2.0L Turbocharged Inline-4' },
      { label: 'Power', value: '248 hp / 273 lb-ft' },
      { label: 'Drivetrain', value: 'Front-Wheel Drive' },
      { label: 'Fuel Economy', value: '32 mpg combined' },
      { label: 'Owners', value: '1 (documented)' },
      { label: 'Exterior', value: 'Pearl White' },
    ],
    cover: images.vehicle05.cover,
    detail: images.vehicle05.detail,
  },
  {
    id: 'rallye-hatch',
    brand: 'Rallye',
    model: 'Hatch',
    year: '2024',
    category: 'Hatchback',
    price: '$32,300',
    mileage: '6,450 mi',
    fuel: 'Petrol',
    transmission: 'Manual',
    power: '271 hp',
    status: 'Reserved',
    summary:
      'A rally-bred hot hatch with a six-speed manual and genuine motorsport pedigree.',
    description:
      'Built on a rally-homologated platform, the Rallye Hatch pairs a turbocharged four-cylinder with a proper six-speed manual gearbox. This unit is currently reserved pending final paperwork — reach out to be notified if it returns to availability.',
    specs: [
      { label: 'Engine', value: '2.0L Turbocharged Inline-4' },
      { label: 'Power', value: '271 hp / 258 lb-ft' },
      { label: 'Transmission', value: '6-Speed Manual' },
      { label: 'Drivetrain', value: 'All-Wheel Drive' },
      { label: '0–60 mph', value: '4.6 sec' },
      { label: 'Exterior', value: 'Signal Orange' },
    ],
    cover: images.vehicle06.cover,
    detail: images.vehicle06.detail,
  },
  {
    id: 'strata-suv',
    brand: 'Strata',
    model: 'SUV',
    year: '2022',
    category: 'SUV',
    price: '$29,900',
    mileage: '31,800 mi',
    fuel: 'Petrol',
    transmission: 'Automatic',
    power: '203 hp',
    status: 'Available',
    summary:
      'A compact, efficient SUV that holds its value and asks little of you in return.',
    description:
      'The Strata SUV is a dependable, well-maintained compact SUV with a full inspection history on file. It represents excellent value for buyers who want SUV practicality without a premium price tag.',
    specs: [
      { label: 'Engine', value: '2.5L Inline-4' },
      { label: 'Power', value: '203 hp / 184 lb-ft' },
      { label: 'Drivetrain', value: 'All-Wheel Drive' },
      { label: 'Fuel Economy', value: '27 mpg combined' },
      { label: 'Cargo Space', value: '39.5 cu ft' },
      { label: 'Exterior', value: 'Olive Green' },
    ],
    cover: images.vehicle07.cover,
    detail: images.vehicle07.detail,
  },
  {
    id: 'nova-performance',
    brand: 'Nova',
    model: 'Performance',
    year: '2025',
    category: 'Performance',
    price: 'Price on request',
    mileage: '180 mi',
    fuel: 'Petrol',
    transmission: 'Automatic',
    power: '512 hp',
    status: 'Available',
    summary:
      'A near-new limited-build performance sedan with factory warranty remaining.',
    description:
      'The Nova Performance is a low-mileage, near-new arrival with the majority of its factory warranty still intact. Given the limited production run, pricing is confirmed directly with our sales team — contact us for current availability and figures.',
    specs: [
      { label: 'Engine', value: '3.5L Twin-Turbo V6' },
      { label: 'Power', value: '512 hp / 442 lb-ft' },
      { label: 'Drivetrain', value: 'Rear-Wheel Drive' },
      { label: 'Warranty', value: 'Factory, transferable' },
      { label: '0–60 mph', value: '3.4 sec' },
      { label: 'Exterior', value: 'Graphite Metallic' },
    ],
    cover: images.vehicle08.cover,
    detail: images.vehicle08.detail,
  },
]

export const getVehicleById = (id) => vehicles.find((v) => v.id === id)

export const getRelatedVehicles = (currentId, category, limit = 3) =>
  vehicles
    .filter((v) => v.id !== currentId && v.category === category)
    .slice(0, limit)
    .concat(
      vehicles
        .filter((v) => v.id !== currentId && v.category !== category)
        .slice(0, Math.max(0, limit - 1))
    )
    .slice(0, limit)
