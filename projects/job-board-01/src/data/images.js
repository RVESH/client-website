// Central image registry.
// One physical image = one entry. Replace the file in public/images/
// keeping the same filename to update an image with no code change.

const base = "/images";

export const images = {
  heroMain: { src: `${base}/hero-main.jpg`, alt: "Abstract network and growth-path illustration in navy and teal" },
  ctaTexture: { src: `${base}/cta-texture.jpg`, alt: "" },
  ogCover: { src: `${base}/og-cover.jpg`, alt: "Hirely" },

  coNimbus: { src: `${base}/co-nimbus.jpg`, alt: "Nimbus Technologies logo" },
  coVertex: { src: `${base}/co-vertex.jpg`, alt: "Vertex Analytics logo" },
  coBrightpath: { src: `${base}/co-brightpath.jpg`, alt: "BrightPath Health logo" },
  coNorthwind: { src: `${base}/co-northwind.jpg`, alt: "Northwind Logistics logo" },
  coQuantify: { src: `${base}/co-quantify.jpg`, alt: "Quantify Finance logo" },
  coHarborline: { src: `${base}/co-harborline.jpg`, alt: "Harborline Retail logo" },
  coFernway: { src: `${base}/co-fernway.jpg`, alt: "Fernway Studio logo" },
  coSolstice: { src: `${base}/co-solstice.jpg`, alt: "Solstice Energy logo" },
};
