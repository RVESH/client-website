import images from "./images";

const site = {
  name: "Maison Rosette",
  tagline: "A quiet luxury studio for hair, skin & beauty",
  shortName: "Maison Rosette",

  nav: [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "About", path: "/about" },
    { label: "Team", path: "/team" },
    { label: "Contact", path: "/contact" },
  ],

  contact: {
    phoneDisplay: "+91 98450 12345",
    phoneDial: "+919845012345",
    whatsapp: "+919845012345",
    whatsappMessage: "Hello Maison Rosette, I'd like to enquire about an appointment.",
    email: "hello@maisonrosette.studio",
    instagramHandle: "@maisonrosette",
    instagramUrl: "https://instagram.com/maisonrosette",
  },

  hero: {
    eyebrow: "Est. 2016 — Bengaluru & Goa",
    heading: "Beauty, considered.",
    subheading:
      "A calm, editorial studio for hair, skin and bridal artistry — built around unhurried craft and premium care.",
    image: images.heroHome,
    primaryCta: { label: "Enquire Now", type: "enquire" },
    secondaryCta: { label: "Call the Studio", type: "call" },
  },

  whyChooseUs: {
    heading: "Why clients return to us",
    subheading:
      "Every visit is built on precision, unhurried time, and products we would use ourselves.",
    points: [
      {
        title: "Master stylists only",
        text: "Every artist trains a minimum of five years before joining the floor.",
      },
      {
        title: "Considered products",
        text: "We work with a small, curated set of clean, professional-grade lines.",
      },
      {
        title: "Unhurried appointments",
        text: "Each booking is paced generously — no visit is rushed to fit the next.",
      },
      {
        title: "Private studio feel",
        text: "Low chair count by design, for a calm room rather than a busy salon floor.",
      },
    ],
  },

  about: {
    heading: "A studio built on restraint",
    intro:
      "Maison Rosette began as a single chair in Indiranagar in 2016, built on the idea that beauty work deserves the same patience as any other craft.",
    body: [
      "We keep our studios small on purpose. Fewer chairs mean our artists can give each guest the time their hair, skin or bridal look actually needs — not the time a schedule allows.",
      "Our team trains continuously with colour, cut and skin specialists from Mumbai, Paris and Seoul, and we retire techniques the moment something gentler and more effective exists.",
      "Today Maison Rosette runs two studios, a small bridal atelier, and a waitlist we're genuinely proud of.",
    ],
    image: images.aboutStory,
    values: [
      { title: "Craft over speed", text: "We would rather see you twice than rush you once." },
      { title: "Honest consultation", text: "We tell you what will and won't suit you, gently." },
      { title: "Quiet luxury", text: "No performance — just careful, considered work." },
    ],
  },

  cta: {
    heading: "Ready for your next appointment?",
    subheading: "Tell us what you're looking for and we'll get back to you within the day.",
  },

  footerNote:
    "Maison Rosette is a private studio. Visits are by enquiry — we'll confirm timing personally.",
};

export default site;
