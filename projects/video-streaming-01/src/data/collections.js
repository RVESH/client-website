// Client-editable: curated collections. `titleIds` is an explicit, editable
// list; leave it empty and set `auto` to derive membership from a flag on
// each title in videos.js instead (used for rows like Trending/Top Rated
// that should stay in sync automatically).

export const collections = [
  {
    id: "staff-picks",
    label: "Staff Picks",
    description: "Hand-picked by our programming team this month.",
    auto: null,
    titleIds: [
      "glass-horizon",
      "hollow-point",
      "concrete-garden",
      "origami-heart",
      "the-understory",
      "wolf-hour",
    ],
  },
  {
    id: "award-season",
    label: "Award Season",
    description: "The titles collecting nominations this year.",
    auto: null,
    titleIds: [
      "salt-and-marrow",
      "the-quiet-machine",
      "the-cartographers-wife",
      "concrete-garden",
      "paperweight",
    ],
  },
  {
    id: "late-night",
    label: "Late Night",
    description: "For when the house is quiet and you want something with teeth.",
    auto: null,
    titleIds: ["static-bloom", "the-long-static", "wolf-hour", "faultlines", "the-nine-rooms"],
  },
  {
    id: "family",
    label: "Family",
    description: "Something for the whole room, no compromises.",
    auto: null,
    titleIds: ["origami-heart", "second-city", "the-unmapped-sea"],
  },
  {
    id: "documentaries",
    label: "Documentaries",
    description: "True stories, carefully told.",
    auto: null,
    titleIds: ["concrete-garden", "the-unmapped-sea", "the-understory"],
  },
  {
    id: "new-and-noteworthy",
    label: "New & Noteworthy",
    description: "Just landed and already worth your evening.",
    auto: "newRelease",
    titleIds: [],
  },
  {
    id: "trending-now",
    label: "Trending Now",
    description: "What everyone's watching this week.",
    auto: "trending",
    titleIds: [],
  },
  {
    id: "critically-acclaimed",
    label: "Critically Acclaimed",
    description: "Our highest-rated titles, full stop.",
    auto: "topRated",
    titleIds: [],
  },
];
