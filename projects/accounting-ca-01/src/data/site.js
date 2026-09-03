// Client-editable: firm identity, contact details, nav, and global copy.

export const site = {
  name: "Ledgeworth & Co.",
  shortName: "Ledgeworth",
  tagline: "Chartered accountants and financial advisors",
  founded: "1998",

  nav: [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "About", path: "/about" },
    { label: "Team", path: "/team" },
    { label: "Contact", path: "/contact" },
  ],

  contact: {
    addressLines: ["4th Floor, Meridian House", "22 Fraser Road", "Patna, Bihar 800001"],
    phoneDisplay: "+91 612 445 0187",
    phoneHref: "tel:+916124450187",
    whatsappDisplay: "+91 98350 22147",
    whatsappHref: "https://wa.me/919835022147",
    email: "advise@ledgeworth.co.in",
    emailHref: "mailto:advise@ledgeworth.co.in",
    hours: [
      { day: "Monday – Friday", time: "9:30 AM – 6:30 PM" },
      { day: "Saturday", time: "10:00 AM – 2:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
  },

  cta: {
    primary: "Book a consultation",
    secondary: "Call the firm",
  },

  hero: {
    eyebrow: "Chartered Accountants, since 1998",
    headline: "Financial clarity, built on twenty-six years of precision.",
    sub: "We handle the numbers with the discretion and rigour they deserve — so you can make decisions with confidence, not guesswork.",
  },

  trust: {
    heading: "Recognised for rigour",
    items: [
      "Institute of Chartered Accountants of India",
      "Registered Tax Practitioners' Association",
      "ISO 27001 — Data Handling",
      "Empanelled, Reserve Bank of India",
    ],
  },

  whyChooseUs: {
    heading: "Why firms and families choose us",
    desc: "A disciplined practice built around three commitments we don't compromise on.",
    items: [
      {
        title: "Precision over guesswork",
        desc: "Every figure is reviewed twice before it reaches you — audit-grade discipline applied to routine work.",
      },
      {
        title: "A named advisor, not a queue",
        desc: "You work with one senior advisor who knows your file, not a rotating helpdesk.",
      },
      {
        title: "Plain-language reporting",
        desc: "Statements and advice are written to be understood, not decoded — no jargon left unexplained.",
      },
      {
        title: "Proactive, not reactive",
        desc: "We flag exposure and opportunity ahead of deadlines, not the week they arrive.",
      },
    ],
  },

  stats: {
    heading: "The practice, in figures",
    items: [
      { value: 26, suffix: "", label: "Years in practice" },
      { value: 480, suffix: "+", label: "Active client mandates" },
      { value: 92, suffix: "%", label: "Clients retained 5+ years" },
      { value: 11, suffix: "", label: "Chartered advisors on staff" },
    ],
  },

  industries: {
    heading: "Industries we serve",
    desc: "Sector-specific experience across regulated and high-growth businesses.",
    items: [
      "Manufacturing & Trading",
      "Healthcare & Diagnostics",
      "Real Estate & Construction",
      "Technology & SaaS",
      "Hospitality",
      "Professional Services",
      "Retail & FMCG",
      "Private Family Offices",
    ],
  },

  insightsHeading: {
    heading: "Insights & client word",
    desc: "Notes from our advisory desk, and what clients say after working with us.",
  },

  teamPreview: {
    heading: "Meet the advisors",
    desc: "Senior chartered accountants, each responsible for their own client roster.",
  },

  finalCta: {
    heading: "Let's look at your numbers together.",
    desc: "A first consultation costs nothing but thirty minutes — and usually surfaces something worth acting on.",
  },

  about: {
    story: {
      eyebrow: "Our story",
      heading: "Twenty-six years of getting the numbers right",
      paragraphs: [
        "Ledgeworth & Co. was founded in 1998 by two chartered accountants who believed financial advice had become too generic — templated reports, rotating juniors, and little real accountability.",
        "We built the opposite: a practice where every client is assigned a senior advisor from day one, and every figure carries a name behind it. That principle hasn't changed as we've grown to eleven advisors and offices serving clients across four states.",
        "Today we advise manufacturing groups, healthcare networks, technology companies and family offices — but the discipline is the same one we started with: precision first, explanation always.",
      ],
    },
    approach: {
      eyebrow: "Our approach",
      heading: "How we work",
      items: [
        {
          title: "Listen before we advise",
          desc: "We spend the first sessions understanding your business and goals before proposing structure.",
        },
        {
          title: "Document everything in plain terms",
          desc: "Every recommendation is written down, dated, and explained — nothing lives only in conversation.",
        },
        {
          title: "Review on a fixed calendar",
          desc: "Quarterly reviews catch exposure and opportunity before year-end, not after.",
        },
      ],
    },
    values: {
      eyebrow: "Our values",
      heading: "What we hold ourselves to",
      items: [
        { title: "Discretion", desc: "Client information is handled with the confidentiality of a fiduciary relationship." },
        { title: "Accuracy", desc: "A second reviewer checks every return, statement and filing before it leaves the office." },
        { title: "Candour", desc: "We tell clients what they need to hear, including when the answer is 'not yet'." },
      ],
    },
    credentials: {
      eyebrow: "Credentials",
      heading: "Recognised and regulated",
      items: [
        "Member firm, Institute of Chartered Accountants of India",
        "Registered with the Registered Tax Practitioners' Association",
        "Empanelled auditor, Reserve Bank of India",
        "ISO 27001 certified for client data handling",
        "Member, Confederation of Indian Industry (Bihar Chapter)",
      ],
    },
  },

  servicesPage: {
    eyebrow: "Services",
    heading: "Advisory built around how your business actually runs",
    desc: "Four practice areas, each led by a senior chartered accountant, structured so nothing falls between two desks.",
  },
};
