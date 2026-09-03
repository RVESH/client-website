// ============================================
// IMAGE REGISTRY
// Every image used on the site is registered here.
// Physical files live in public/images/.
//
// Artwork is an original illustration set drawn specifically for this
// brand (not stock photography), in the Auric Motors palette. To swap
// in real photography later: add the photo to public/images/, keep the
// same key below, and point `src` at the new filename.
// ============================================

const path = (file) => `/images/${file}`

export const images = {
  hero: {
    src: path('hero01.svg'),
    alt: 'Illustration of a bronze sedan on an open road at dusk',
  },

  vehicleAsterHatch: {
    src: path('vehicle-aster-hatch.svg'),
    alt: 'Illustration of the Aster Hatch economy hatchback',
  },
  vehicleNimbusCompact: {
    src: path('vehicle-nimbus-compact.svg'),
    alt: 'Illustration of the Nimbus Compact economy car',
  },
  vehicleHalcyonSedan: {
    src: path('vehicle-halcyon-sedan.svg'),
    alt: 'Illustration of the Halcyon Sedan',
  },
  vehicleMeridianSedan: {
    src: path('vehicle-meridian-sedan.svg'),
    alt: 'Illustration of the Meridian Sedan hybrid',
  },
  vehicleTerrainSuv: {
    src: path('vehicle-terrain-suv.svg'),
    alt: 'Illustration of the Terrain SUV',
  },
  vehicleSummit4x4: {
    src: path('vehicle-summit-4x4.svg'),
    alt: 'Illustration of the Summit 4x4 full-size SUV',
  },
  vehicleRegentExecutive: {
    src: path('vehicle-regent-executive.svg'),
    alt: 'Illustration of the Regent Executive luxury sedan',
  },
  vehicleMonarchGt: {
    src: path('vehicle-monarch-gt.svg'),
    alt: 'Illustration of the Monarch GT luxury coupe',
  },
  vehicleVoltSparkEv: {
    src: path('vehicle-volt-spark-ev.svg'),
    alt: 'Illustration of the Volt Spark electric car',
  },
  vehicleSolsticeRoadster: {
    src: path('vehicle-solstice-roadster.svg'),
    alt: 'Illustration of the Solstice Roadster convertible',
  },

  about01: {
    src: path('about01.svg'),
    alt: 'Illustration of an Auric Motors advisor handing over car keys',
  },
  locations01: {
    src: path('locations01.svg'),
    alt: 'Illustration of a city skyline with a highway leading toward it',
  },
  contact01: {
    src: path('contact01.svg'),
    alt: 'Illustration of a car parked at a rental counter at dusk',
  },
}
