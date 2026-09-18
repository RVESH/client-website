// Client-editable: brand identity, nav, contact details, and homepage copy.

export const site = {
  name: "Aperture",
  tagline: "Cinema, chosen carefully.",

  nav: [
    { label: "Home", path: "/" },
    { label: "Browse", path: "/browse" },
    { label: "Genres", path: "/genres" },
    { label: "Journal", path: "/journal" },
    { label: "Contact", path: "/contact" },
  ],

  contact: {
    addressLines: ["12 Riverside Wharf", "Southbank Quarter", "London SE1 9PQ"],
    phoneDisplay: "+44 20 7946 0958",
    phoneHref: "tel:+442079460958",
    whatsappDisplay: "+44 7700 900958",
    whatsappNumber: "447700900958",
    email: "hello@aperture.example",
    hours: [
      { day: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
      { day: "Saturday", time: "10:00 AM – 2:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
  },

  hero: {
    eyebrow: "Featured this week",
  },

  sections: {
    continueWatching: "Continue Watching",
    trending: "Trending Now",
    popular: "Popular on Aperture",
    newReleases: "New Releases",
    recommended: "Recommended For You",
    topRated: "Critically Acclaimed",
    comingSoon: "Coming Soon",
    genreHighlights: "Explore by Genre",
    collections: "Curated Collections",
    journal: "From the Journal",
    testimonials: "What Members Say",
  },

  newsletter: {
    eyebrow: "Stay in the loop",
    heading: "New titles, straight to your inbox.",
    desc: "One email a month — new releases, staff picks, and nothing else.",
  },

  footerNote: "A frontend showcase — demo previews only, not licensed film content.",
};
