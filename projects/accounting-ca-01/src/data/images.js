// Central image registry.
// One physical image = one entry. Replace the file in public/images/
// keeping the same filename to update a photo with no code change.

const base = "/images";

export const images = {
  heroMain: { src: `${base}/hero-main.jpg`, alt: "Abstract ledger and growth chart motif in deep forest and brass" },
  aboutStory: { src: `${base}/about-story.jpg`, alt: "Editorial composition representing the firm's documented, disciplined approach" },
  industriesTexture: { src: `${base}/industries-texture.jpg`, alt: "" },
  ctaTexture: { src: `${base}/cta-texture.jpg`, alt: "" },
  ogCover: { src: `${base}/og-cover.jpg`, alt: "Ledgeworth & Co." },

  teamAV: { src: `${base}/team-av.jpg`, alt: "Portrait monogram for Anjali Verma" },
  teamRK: { src: `${base}/team-rk.jpg`, alt: "Portrait monogram for Rohan Kapoor" },
  teamMS: { src: `${base}/team-ms.jpg`, alt: "Portrait monogram for Meera Sinha" },
  teamPN: { src: `${base}/team-pn.jpg`, alt: "Portrait monogram for Pranav Nair" },
  teamSD: { src: `${base}/team-sd.jpg`, alt: "Portrait monogram for Sunita Deshmukh" },
  teamKT: { src: `${base}/team-kt.jpg`, alt: "Portrait monogram for Karan Thakur" },
};
