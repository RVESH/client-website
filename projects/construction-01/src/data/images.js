// Central image registry.
// One physical image = one entry. Replace the file in public/images/
// keeping the same filename to update an image with no code change.

const base = "/images";

export const images = {
  heroMain: { src: `${base}/hero-main.jpg`, alt: "Illustrated city skyline under construction with a crane, in charcoal and amber" },
  aboutStory: { src: `${base}/about-story.jpg`, alt: "Editorial composition representing the firm's engineering-led process" },
  ctaTexture: { src: `${base}/cta-texture.jpg`, alt: "" },
  ogCover: { src: `${base}/og-cover.jpg`, alt: "Strata Build Co." },

  teamRS: { src: `${base}/team-rs.jpg`, alt: "Portrait monogram for Ravi Shankar" },
  teamAK: { src: `${base}/team-ak.jpg`, alt: "Portrait monogram for Anita Kumar" },
  teamMP: { src: `${base}/team-mp.jpg`, alt: "Portrait monogram for Manoj Prasad" },
  teamVT: { src: `${base}/team-vt.jpg`, alt: "Portrait monogram for Vivek Thakur" },

  projRiversideTower: { src: `${base}/proj-riverside-tower.jpg`, alt: "Illustrated diagram for the Riverside Tower commercial project" },
  projOakhavenResidence: { src: `${base}/proj-oakhaven-residence.jpg`, alt: "Illustrated diagram for the Oakhaven Residence project" },
  projMetroBridge: { src: `${base}/proj-metro-bridge.jpg`, alt: "Illustrated diagram for the Metro Bridge infrastructure project" },
  projHeritageRenovation: { src: `${base}/proj-heritage-renovation.jpg`, alt: "Illustrated diagram for the Heritage Building renovation project" },
  projPlantEngineering: { src: `${base}/proj-plant-engineering.jpg`, alt: "Illustrated diagram for a process plant engineering project" },
  projSummitOffices: { src: `${base}/proj-summit-offices.jpg`, alt: "Illustrated diagram for the Summit Offices commercial project" },
  projLakesideVillas: { src: `${base}/proj-lakeside-villas.jpg`, alt: "Illustrated diagram for the Lakeside Villas residential project" },
  projTransitHub: { src: `${base}/proj-transit-hub.jpg`, alt: "Illustrated diagram for the Transit Hub infrastructure project" },
  projFacadeRetrofit: { src: `${base}/proj-facade-retrofit.jpg`, alt: "Illustrated diagram for a facade retrofit renovation project" },
  projProcessPlant: { src: `${base}/proj-process-plant.jpg`, alt: "Illustrated diagram for a process plant engineering project" },
};
