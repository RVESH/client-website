// Central image registry.
// One physical image = one entry. Replace the file in public/images/
// keeping the same filename to update an image with no code change.
// Naming convention: <title-slug>-poster.jpg, <title-slug>-backdrop.jpg,
// <episode-id>-thumb.jpg.

const base = "/images";

function poster(slug, alt) {
  return { src: `${base}/${slug}-poster.jpg`, alt: `${alt} poster artwork` };
}
function backdrop(slug, alt) {
  return { src: `${base}/${slug}-backdrop.jpg`, alt: `${alt} cinematic backdrop artwork` };
}
function thumb(id, alt) {
  return { src: `${base}/${id}-thumb.jpg`, alt: `${alt} episode thumbnail` };
}

export const images = {
  // ---- Site ----
  ogCover: { src: `${base}/og-cover.jpg`, alt: "Aperture" },

  // ---- Movies ----
  posterGlassHorizon: poster("glass-horizon", "Glass Horizon"),
  backdropGlassHorizon: backdrop("glass-horizon", "Glass Horizon"),
  posterTheLongStatic: poster("the-long-static", "The Long Static"),
  backdropTheLongStatic: backdrop("the-long-static", "The Long Static"),
  posterSaltAndMarrow: poster("salt-and-marrow", "Salt and Marrow"),
  backdropSaltAndMarrow: backdrop("salt-and-marrow", "Salt and Marrow"),
  posterNightshadeAvenue: poster("nightshade-avenue", "Nightshade Avenue"),
  backdropNightshadeAvenue: backdrop("nightshade-avenue", "Nightshade Avenue"),
  posterPaperMoths: poster("paper-moths", "Paper Moths"),
  backdropPaperMoths: backdrop("paper-moths", "Paper Moths"),
  posterTheQuietMachine: poster("the-quiet-machine", "The Quiet Machine"),
  backdropTheQuietMachine: backdrop("the-quiet-machine", "The Quiet Machine"),
  posterLowTide: poster("low-tide", "Low Tide"),
  backdropLowTide: backdrop("low-tide", "Low Tide"),
  posterAshfall: poster("ashfall", "Ashfall"),
  backdropAshfall: backdrop("ashfall", "Ashfall"),
  posterOrigamiHeart: poster("origami-heart", "Origami Heart"),
  backdropOrigamiHeart: backdrop("origami-heart", "Origami Heart"),
  posterTheCartographersWife: poster("the-cartographers-wife", "The Cartographer's Wife"),
  backdropTheCartographersWife: backdrop("the-cartographers-wife", "The Cartographer's Wife"),
  posterStaticBloom: poster("static-bloom", "Static Bloom"),
  backdropStaticBloom: backdrop("static-bloom", "Static Bloom"),
  posterSixWaysToSunday: poster("six-ways-to-sunday", "Six Ways to Sunday"),
  backdropSixWaysToSunday: backdrop("six-ways-to-sunday", "Six Ways to Sunday"),
  posterTheLastEmber: poster("the-last-ember", "The Last Ember"),
  backdropTheLastEmber: backdrop("the-last-ember", "The Last Ember"),
  posterConcreteGarden: poster("concrete-garden", "Concrete Garden"),
  backdropConcreteGarden: backdrop("concrete-garden", "Concrete Garden"),
  posterWolfHour: poster("wolf-hour", "Wolf Hour"),
  backdropWolfHour: backdrop("wolf-hour", "Wolf Hour"),
  posterFaultlines: poster("faultlines", "Faultlines"),
  backdropFaultlines: backdrop("faultlines", "Faultlines"),
  posterTheUnmappedSea: poster("the-unmapped-sea", "The Unmapped Sea"),
  backdropTheUnmappedSea: backdrop("the-unmapped-sea", "The Unmapped Sea"),
  posterMarigoldAndAsh: poster("marigold-and-ash", "Marigold & Ash"),
  backdropMarigoldAndAsh: backdrop("marigold-and-ash", "Marigold & Ash"),

  // ---- Series ----
  posterHollowPoint: poster("hollow-point", "Hollow Point"),
  backdropHollowPoint: backdrop("hollow-point", "Hollow Point"),
  posterTheNineRooms: poster("the-nine-rooms", "The Nine Rooms"),
  backdropTheNineRooms: backdrop("the-nine-rooms", "The Nine Rooms"),
  posterSignalLost: poster("signal-lost", "Signal Lost"),
  backdropSignalLost: backdrop("signal-lost", "Signal Lost"),
  posterSecondCity: poster("second-city", "Second City"),
  backdropSecondCity: backdrop("second-city", "Second City"),
  posterPaperweight: poster("paperweight", "Paperweight"),
  backdropPaperweight: backdrop("paperweight", "Paperweight"),
  posterTheUnderstory: poster("the-understory", "The Understory"),
  backdropTheUnderstory: backdrop("the-understory", "The Understory"),

  // ---- Episode thumbnails ----
  thumbHollowPointE1: thumb("hollow-point-s1e1", "Hollow Point S1E1"),
  thumbHollowPointE2: thumb("hollow-point-s1e2", "Hollow Point S1E2"),
  thumbHollowPointE3: thumb("hollow-point-s1e3", "Hollow Point S1E3"),
  thumbHollowPointE4: thumb("hollow-point-s1e4", "Hollow Point S1E4"),
  thumbTheNineRoomsE1: thumb("the-nine-rooms-s1e1", "The Nine Rooms S1E1"),
  thumbTheNineRoomsE2: thumb("the-nine-rooms-s1e2", "The Nine Rooms S1E2"),
  thumbTheNineRoomsE3: thumb("the-nine-rooms-s1e3", "The Nine Rooms S1E3"),
  thumbTheNineRoomsE4: thumb("the-nine-rooms-s1e4", "The Nine Rooms S1E4"),
  thumbSignalLostE1: thumb("signal-lost-s1e1", "Signal Lost S1E1"),
  thumbSignalLostE2: thumb("signal-lost-s1e2", "Signal Lost S1E2"),
  thumbSignalLostE3: thumb("signal-lost-s1e3", "Signal Lost S1E3"),
  thumbSignalLostE4: thumb("signal-lost-s1e4", "Signal Lost S1E4"),
  thumbSecondCityE1: thumb("second-city-s1e1", "Second City S1E1"),
  thumbSecondCityE2: thumb("second-city-s1e2", "Second City S1E2"),
  thumbSecondCityE3: thumb("second-city-s1e3", "Second City S1E3"),
  thumbSecondCityE4: thumb("second-city-s1e4", "Second City S1E4"),
  thumbPaperweightE1: thumb("paperweight-s1e1", "Paperweight S1E1"),
  thumbPaperweightE2: thumb("paperweight-s1e2", "Paperweight S1E2"),
  thumbPaperweightE3: thumb("paperweight-s1e3", "Paperweight S1E3"),
  thumbPaperweightE4: thumb("paperweight-s1e4", "Paperweight S1E4"),
  thumbTheUnderstoryE1: thumb("the-understory-s1e1", "The Understory S1E1"),
  thumbTheUnderstoryE2: thumb("the-understory-s1e2", "The Understory S1E2"),
  thumbTheUnderstoryE3: thumb("the-understory-s1e3", "The Understory S1E3"),
  thumbTheUnderstoryE4: thumb("the-understory-s1e4", "The Understory S1E4"),

  // ---- Journal ----
  journalOne: { src: `${base}/journal-restoration-craft.jpg`, alt: "Editorial image for a journal piece on film restoration" },
  journalTwo: { src: `${base}/journal-sound-design.jpg`, alt: "Editorial image for a journal piece on sound design" },
  journalThree: { src: `${base}/journal-indie-doc.jpg`, alt: "Editorial image for a journal piece on independent documentary" },
  journalFour: { src: `${base}/journal-score-composers.jpg`, alt: "Editorial image for a journal piece on film composers" },

  // ---- Testimonial avatars ----
  avatarOne: { src: `${base}/avatar-1.jpg`, alt: "Portrait initials for a member testimonial" },
  avatarTwo: { src: `${base}/avatar-2.jpg`, alt: "Portrait initials for a member testimonial" },
  avatarThree: { src: `${base}/avatar-3.jpg`, alt: "Portrait initials for a member testimonial" },
  avatarFour: { src: `${base}/avatar-4.jpg`, alt: "Portrait initials for a member testimonial" },
};
