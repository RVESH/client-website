// Client-editable: platform identity, nav, contact details, and home-page copy.

export const site = {
  name: "Hirely",
  tagline: "Find the work that fits your next chapter.",

  nav: [
    { label: "Home", path: "/" },
    { label: "Jobs", path: "/jobs" },
    { label: "Companies", path: "/companies" },
    { label: "Contact", path: "/contact" },
  ],

  contact: {
    addressLines: ["3rd Floor, Crescent Business Park", "Boring Road", "Patna, Bihar 800001"],
    phoneDisplay: "+91 612 335 0192",
    phoneHref: "tel:+916123350192",
    whatsappDisplay: "+91 98350 61147",
    whatsappNumber: "919835061147",
    email: "hello@hirely.example",
    hours: [
      { day: "Monday – Friday", time: "9:30 AM – 6:30 PM" },
      { day: "Saturday", time: "10:00 AM – 2:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
  },

  cta: {
    candidate: "Browse jobs",
    employer: "Post a job",
  },

  hero: {
    eyebrow: "1,200+ live roles across India",
    headline: "Find the work that fits your next chapter.",
    sub: "Search real openings from companies that are actually hiring — filtered by role, location and experience, no noise.",
  },

  howItWorks: {
    eyebrow: "How it works",
    heading: "Three steps to your next role",
    desc: "No account walls, no recruiter spam — just a clear path from search to application.",
    steps: [
      {
        title: "Search and filter",
        desc: "Filter by keyword, location, category, job type and experience to cut straight to relevant roles.",
      },
      {
        title: "Read the real details",
        desc: "Every listing has the full responsibilities, requirements and benefits — not a two-line summary.",
      },
      {
        title: "Apply directly",
        desc: "Apply by email or WhatsApp with your details pre-filled, straight to the hiring team.",
      },
    ],
  },

  stats: {
    heading: "Hirely, in numbers",
    items: [
      { value: 1240, suffix: "+", label: "Live job openings" },
      { value: 380, suffix: "+", label: "Hiring companies" },
      { value: 26, suffix: "", label: "Cities covered" },
      { value: 94, suffix: "%", label: "Listings updated weekly" },
    ],
  },

  testimonialsHeading: {
    eyebrow: "Candidate word",
    heading: "People who found their next role here",
    desc: "Real feedback from candidates who applied through Hirely.",
  },

  employerCta: {
    eyebrow: "For employers",
    heading: "Hiring? Get in front of serious candidates.",
    desc: "Post a role and reach candidates who are actively searching — no lengthy contracts, no per-application fees.",
  },

  companiesPage: {
    eyebrow: "Companies",
    heading: "Companies hiring right now",
    desc: "Browse the teams behind the roles — filter by industry to find where you'd fit.",
  },

  jobsPage: {
    eyebrow: "Jobs",
    heading: "Search live openings",
    desc: "Filter by keyword, location, category, type and experience to find roles that fit.",
  },

  contactPage: {
    eyebrow: "Get in touch",
    heading: "Questions about Hirely?",
    desc: "Reach out about a listing, a company profile, or posting a role — we usually reply within one business day.",
  },
};
