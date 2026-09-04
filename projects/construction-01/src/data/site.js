// Client-editable: firm identity, contact details, nav, and global copy.

export const site = {
  name: "Strata Build Co.",
  shortName: "Strata Build",
  tagline: "Commercial, residential & infrastructure construction",
  founded: "2003",

  nav: [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "Services", path: "/services" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ],

  contact: {
    addressLines: ["Plot 14, Industrial Estate Road", "Bela Industrial Area", "Patna, Bihar 801103"],
    phoneDisplay: "+91 612 220 5581",
    phoneHref: "tel:+916122205581",
    whatsappDisplay: "+91 98351 40072",
    whatsappHref: "https://wa.me/919835140072",
    email: "projects@stratabuild.co.in",
    emailHref: "mailto:projects@stratabuild.co.in",
    hours: [
      { day: "Monday – Saturday", time: "8:30 AM – 6:00 PM" },
      { day: "Sunday", time: "Site visits by appointment" },
    ],
  },

  cta: {
    primary: "Request a quote",
    secondary: "Call the office",
  },

  hero: {
    eyebrow: "Building since 2003",
    headline: "We build the structures ambitious plans depend on.",
    sub: "Commercial, residential, infrastructure and engineering projects delivered on schedule, on budget, and to a standard that outlasts the warranty.",
  },

  strengths: {
    heading: "Why clients build with us",
    desc: "Two decades of projects taught us where most contractors cut corners. We don't.",
    items: [
      {
        title: "In-house engineering",
        desc: "Structural and MEP engineering handled internally, so design and buildability are never at odds.",
      },
      {
        title: "Fixed-price certainty",
        desc: "Detailed estimation before ground-breaking means the number you sign is the number you pay.",
      },
      {
        title: "Safety-first sites",
        desc: "Zero-compromise safety protocols across every site — audited monthly, no exceptions.",
      },
      {
        title: "On-schedule delivery",
        desc: "Milestone-tracked programs with weekly client reporting, not a status update at handover.",
      },
    ],
  },

  stats: {
    heading: "Two decades, measured in concrete",
    items: [
      { value: 22, suffix: "", label: "Years in operation" },
      { value: 180, suffix: "+", label: "Projects delivered" },
      { value: 96, suffix: "%", label: "Delivered on schedule" },
      { value: 45, suffix: "L+", label: "Sq. ft. constructed" },
    ],
  },

  featuredProjectsHeading: {
    eyebrow: "Portfolio",
    heading: "Recent work",
    desc: "A cross-section of commercial, residential and infrastructure projects delivered across the last five years.",
  },

  servicesHomeHeading: {
    eyebrow: "Capabilities",
    heading: "What we build",
    desc: "Full-service construction and engineering, from first drawing to final handover.",
  },

  testimonialsHeading: {
    eyebrow: "Client word",
    heading: "What clients say after handover",
    desc: "The reviews that matter come after the retention period, not before.",
  },

  finalCta: {
    heading: "Ready to break ground?",
    desc: "Send us your drawings or your rough idea — we'll come back with a realistic budget and timeline within a week.",
  },

  about: {
    story: {
      eyebrow: "Our story",
      heading: "Twenty-two years of building things that last",
      paragraphs: [
        "Strata Build Co. was founded in 2003 by a structural engineer and a site supervisor who were tired of watching good drawings get compromised on-site by cost-cutting and poor sequencing.",
        "We built the company around a simple rule: the people who design the structure and the people who build it should be the same team. That's still true today, twenty-two years and over 180 projects later.",
        "From a single residential contract in 2003, we now run commercial towers, infrastructure works, industrial plants and heritage renovations across four states — with the same site discipline we started with.",
      ],
    },
    approach: {
      eyebrow: "Our approach",
      heading: "How a project runs with us",
      items: [
        {
          title: "Engineer before we estimate",
          desc: "Structural and MEP review happens before a number is quoted, so the price reflects reality.",
        },
        {
          title: "One project lead, start to finish",
          desc: "A single senior engineer owns your project from ground-breaking to handover — no rotating site managers.",
        },
        {
          title: "Weekly progress, not surprises",
          desc: "Photographed milestone reports every week, so you always know exactly where the project stands.",
        },
      ],
    },
    values: {
      eyebrow: "Our values",
      heading: "What we hold every site to",
      items: [
        { title: "Safety", desc: "Every site follows the same audited safety protocol, regardless of project size or deadline pressure." },
        { title: "Precision", desc: "Tolerances are checked at every pour and every frame — not just at final inspection." },
        { title: "Accountability", desc: "If a schedule slips, you hear it from us first, with a revised plan, not an excuse." },
      ],
    },
    credentials: {
      eyebrow: "Credentials",
      heading: "Licensed, insured and certified",
      items: [
        "Class-A contractor license, Bihar State Building Construction Department",
        "ISO 9001:2015 certified for quality management",
        "ISO 45001 certified for occupational health & safety",
        "Member, Builders' Association of India",
        "Comprehensive contractor's all-risk insurance on every project",
      ],
    },
    team: {
      eyebrow: "Leadership",
      heading: "The people running your project",
    },
  },

  servicesPage: {
    eyebrow: "Services",
    heading: "Construction and engineering capability, under one roof",
    desc: "Five core disciplines, each led by a dedicated senior engineer, so nothing is subcontracted out of accountability.",
  },

  projectsPage: {
    eyebrow: "Projects",
    heading: "A portfolio built on delivery",
    desc: "Filter by category to see the work most relevant to what you're planning.",
  },
};
