import "./Features.scss";

const defaultFeatures = [
  {
    number: "01",
    title: "Fast by default",
    description:
      "A lightweight experience designed to stay responsive across devices.",
  },
  {
    number: "02",
    title: "Made to scale",
    description:
      "A flexible structure that can grow with the product and the business.",
  },
  {
    number: "03",
    title: "Easy to adapt",
    description:
      "Clear components and content patterns make future changes easier.",
  },
];

/* =========================================================
   FEATURES 01 — PREMIUM 3 COLUMN
========================================================= */

function Features01({
  eyebrow = "WHY IT WORKS",
  title = "Thoughtful features, built around real use.",
  features = defaultFeatures,
}) {
  return (
    <section
      className="sb-features sb-features--01"
      aria-labelledby="features-01-title"
    >
      <div className="sb-features__container">
        <div className="sb-features--01__intro">
          <span>{eyebrow}</span>
          <h2 id="features-01-title">{title}</h2>
        </div>

        <div className="sb-features--01__grid">
          {features.map((feature) => (
            <article key={feature.number}>
              <span>{feature.number}</span>

              <div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>

              <a href={`#feature-${feature.number}`} aria-label={feature.title}>
                ↗
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FEATURES 02 — SAAS CAPABILITIES
========================================================= */

function Features02({
  title = "Everything your team needs, in one focused system.",
}) {
  const features = [
    ["01", "Smart Workspace", "Projects, tasks and conversations in one place."],
    ["02", "Automation", "Remove repetitive work and keep things moving."],
    ["03", "Live Analytics", "Understand performance as it happens."],
    ["04", "Integrations", "Connect the tools your team already uses."],
  ];

  return (
    <section
      className="sb-features sb-features--02"
      aria-labelledby="features-02-title"
    >
      <div className="sb-features__container">
        <div className="sb-features--02__heading">
          <span>PLATFORM</span>
          <h2 id="features-02-title">{title}</h2>
        </div>

        <div className="sb-features--02__grid">
          {features.map(([number, name, text]) => (
            <article key={number}>
              <span>{number}</span>

              <div className="sb-features--02__icon" aria-hidden="true">
                +
              </div>

              <h3>{name}</h3>
              <p>{text}</p>

              <a href={`#${name.toLowerCase().replace(/\s+/g, "-")}`}>
                Learn more →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FEATURES 03 — DARK TECH
========================================================= */

function Features03({
  eyebrow = "BUILT DIFFERENTLY",
  title = "Less complexity. More capability.",
}) {
  const features = [
    ["01", "Secure", "Designed with privacy and control in mind."],
    ["02", "Reliable", "Stable foundations for everyday use."],
    ["03", "Connected", "Works with the systems around it."],
  ];

  return (
    <section
      className="sb-features sb-features--03"
      aria-labelledby="features-03-title"
    >
      <div className="sb-features__container">
        <div className="sb-features--03__heading">
          <span>{eyebrow}</span>
          <h2 id="features-03-title">{title}</h2>
        </div>

        <div className="sb-features--03__grid">
          {features.map(([number, titleText, text]) => (
            <article key={number}>
              <span>{number}</span>

              <div className="sb-features--03__symbol" aria-hidden="true">
                ◇
              </div>

              <h3>{titleText}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FEATURES 04 — LUXURY EDITORIAL
========================================================= */

function Features04({
  title = "The details are part of the experience.",
}) {
  const features = [
    ["01", "Considered Materials", "Every element chosen with intention."],
    ["02", "Quiet Technology", "Useful where it matters, invisible where it doesn't."],
    ["03", "Lasting Design", "An experience designed to age well."],
  ];

  return (
    <section
      className="sb-features sb-features--04"
      aria-labelledby="features-04-title"
    >
      <div className="sb-features__container">
        <div className="sb-features--04__heading">
          <span>THE EXPERIENCE</span>
          <h2 id="features-04-title">{title}</h2>
        </div>

        <div className="sb-features--04__grid">
          {features.map(([number, titleText, text]) => (
            <article key={number}>
              <span>{number}</span>

              <div>
                <h3>{titleText}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FEATURES 05 — HORIZONTAL
========================================================= */

function Features05({
  features = [
    ["01", "Strategy"],
    ["02", "Design"],
    ["03", "Technology"],
    ["04", "Support"],
  ],
}) {
  return (
    <section className="sb-features sb-features--05" aria-label="Capabilities">
      <div className="sb-features__container">
        <div className="sb-features--05__strip">
          {features.map(([number, title]) => (
            <a href={`#${title}`} key={number}>
              <span>{number}</span>
              <strong>{title}</strong>
              <b>↗</b>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FEATURES 06 — BENTO
========================================================= */

function Features06({
  title = "A flexible system with room to grow.",
}) {
  return (
    <section
      className="sb-features sb-features--06"
      aria-labelledby="features-06-title"
    >
      <div className="sb-features__container">
        <div className="sb-features--06__heading">
          <span>CORE FEATURES</span>
          <h2 id="features-06-title">{title}</h2>
        </div>

        <div className="sb-features--06__grid">
          <article className="sb-features--06__large">
            <span>01</span>

            <div>
              <h3>Powerful at the core.</h3>
              <p>
                The main experience stays simple while the underlying system
                remains flexible enough for future growth.
              </p>
            </div>

            <a href="#core">Explore ↗</a>
          </article>

          <article>
            <span>02</span>
            <strong>Fast</strong>
            <p>Responsive experiences across devices.</p>
          </article>

          <article className="sb-features--06__accent">
            <span>03</span>
            <strong>Flexible</strong>
            <p>Adaptable patterns for changing needs.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FEATURES 07 — BENEFITS / OUTCOMES
========================================================= */

function Features07({
  title = "Features matter. Outcomes matter more.",
}) {
  const benefits = [
    ["01", "Save time", "Less manual work means more time for important decisions."],
    ["02", "Move faster", "Clear workflows reduce unnecessary friction."],
    ["03", "Stay focused", "The important information stays easy to find."],
    ["04", "Grow confidently", "A stronger foundation makes the next stage easier."],
  ];

  return (
    <section
      className="sb-features sb-features--07"
      aria-labelledby="features-07-title"
    >
      <div className="sb-features__container">
        <div className="sb-features--07__heading">
          <span>THE BENEFIT</span>
          <h2 id="features-07-title">{title}</h2>
        </div>

        <div className="sb-features--07__list">
          {benefits.map(([number, titleText, text]) => (
            <article key={number}>
              <span>{number}</span>

              <h3>{titleText}</h3>

              <p>{text}</p>

              <b aria-hidden="true">→</b>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FEATURES 08 — FEATURE LIST / PROCESS FEEL
========================================================= */

function Features08({
  title = "Designed around the way people actually work.",
}) {
  const features = [
    ["01", "Discover", "Understand the problem before designing the answer."],
    ["02", "Organise", "Bring information into a structure people can navigate."],
    ["03", "Execute", "Move from intention to action without unnecessary steps."],
    ["04", "Improve", "Learn from real use and refine what matters."],
  ];

  return (
    <section
      className="sb-features sb-features--08"
      aria-labelledby="features-08-title"
    >
      <div className="sb-features__container">
        <div className="sb-features--08__intro">
          <span>HOW IT WORKS</span>
          <h2 id="features-08-title">{title}</h2>
        </div>

        <div className="sb-features--08__timeline">
          {features.map(([number, titleText, text]) => (
            <article key={number}>
              <span>{number}</span>

              <div>
                <h3>{titleText}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FEATURES 09 — PRODUCT HIGHLIGHTS
========================================================= */

function Features09({
  title = "Small details. Noticeably better experience.",
}) {
  const features = [
    ["Focus", "Keep the important thing in front of you."],
    ["Clarity", "Simple language and clear hierarchy."],
    ["Speed", "Fast interactions without unnecessary waiting."],
  ];

  return (
    <section
      className="sb-features sb-features--09"
      aria-labelledby="features-09-title"
    >
      <div className="sb-features__container">
        <div className="sb-features--09__heading">
          <span>PRODUCT HIGHLIGHTS</span>
          <h2 id="features-09-title">{title}</h2>
        </div>

        <div className="sb-features--09__grid">
          {features.map(([titleText, text], index) => (
            <article key={titleText}>
              <div className="sb-features--09__visual" aria-hidden="true">
                <span>0{index + 1}</span>
                <i />
              </div>

              <h3>{titleText}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FEATURES 10 — HOSPITALITY
========================================================= */

function Features10({
  title = "Everything is taken care of.",
}) {
  const benefits = [
    ["01", "Thoughtful Service", "A warm experience from arrival to departure."],
    ["02", "Flexible Options", "Designed to fit different needs and occasions."],
    ["03", "Quiet Comfort", "The little details that make the difference."],
  ];

  return (
    <section
      className="sb-features sb-features--10"
      aria-labelledby="features-10-title"
    >
      <div className="sb-features__container">
        <div className="sb-features--10__heading">
          <span>THE EXPERIENCE</span>
          <h2 id="features-10-title">{title}</h2>
        </div>

        <div className="sb-features--10__grid">
          {benefits.map(([number, titleText, text]) => (
            <article key={number}>
              <span>{number}</span>

              <div>
                <h3>{titleText}</h3>
                <p>{text}</p>
              </div>

              <a href={`#${titleText}`}>Discover ↗</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FEATURES 11 — FEATURE SPOTLIGHT
========================================================= */

function Features11({
  title = "The feature people notice first.",
  description =
    "Put your strongest capability here. This format works especially well when one feature deserves more attention than the rest.",
}) {
  return (
    <section
      className="sb-features sb-features--11"
      aria-labelledby="features-11-title"
    >
      <div className="sb-features__container">
        <div className="sb-features--11__visual" aria-hidden="true">
          <div className="sb-features--11__orbit" />
          <div className="sb-features--11__core">✦</div>
        </div>

        <div className="sb-features--11__content">
          <span>FEATURE SPOTLIGHT</span>
          <h2 id="features-11-title">{title}</h2>
          <p>{description}</p>

          <a href="#feature-spotlight">
            Explore feature
            <b>↗</b>
          </a>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FEATURES 12 — MINIMAL NUMBERED
========================================================= */

function Features12({
  features = [
    ["01", "Smart", "Simple when it needs to be."],
    ["02", "Fast", "Quick where it matters."],
    ["03", "Flexible", "Ready for what comes next."],
    ["04", "Reliable", "Built for everyday use."],
  ],
}) {
  return (
    <section className="sb-features sb-features--12" aria-label="Features">
      <div className="sb-features__container">
        <div className="sb-features--12__grid">
          {features.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FEATURES 13 — GRADIENT MODERN
========================================================= */

function Features13({
  title = "Modern capability, beautifully organised.",
}) {
  const features = [
    ["01", "Connected", "Everything works together."],
    ["02", "Intuitive", "The experience feels obvious."],
    ["03", "Adaptable", "Change without starting over."],
  ];

  return (
    <section
      className="sb-features sb-features--13"
      aria-labelledby="features-13-title"
    >
      <div className="sb-features__container">
        <div className="sb-features--13__heading">
          <span>WHY IT STANDS OUT</span>
          <h2 id="features-13-title">{title}</h2>
        </div>

        <div className="sb-features--13__grid">
          {features.map(([number, titleText, text], index) => (
            <article
              className={`sb-features--13__card sb-features--13__card--${index + 1}`}
              key={number}
            >
              <span>{number}</span>

              <div>
                <h3>{titleText}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FEATURES 14 — COMPACT INLINE
========================================================= */

function Features14({
  features = [
    ["Fast", "Quick experiences"],
    ["Simple", "Easy to understand"],
    ["Flexible", "Ready to adapt"],
    ["Reliable", "Built for daily use"],
  ],
}) {
  return (
    <section className="sb-features sb-features--14" aria-label="Key benefits">
      <div className="sb-features__container">
        <div className="sb-features--14__line">
          {features.map(([title, text], index) => (
            <article key={title}>
              <strong>{title}</strong>
              <span>{text}</span>

              {index !== features.length - 1 && (
                <i aria-hidden="true" />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   EXPORTS
========================================================= */

export {
  Features01,
  Features02,
  Features03,
  Features04,
  Features05,
  Features06,
  Features07,
  Features08,
  Features09,
  Features10,
  Features11,
  Features12,
  Features13,
  Features14,
};

/* =========================================================
   SHOWCASE
========================================================= */

function Features() {
  return (
    <div className="features_foundation">
      <Features01 />
      <Features02 />
      <Features03 />
      <Features04 />
      <Features05 />
      <Features06 />
      <Features07 />
      <Features08 />
      <Features09 />
      <Features10 />
      <Features11 />
      <Features12 />
      <Features13 />
      <Features14 />
    </div>
  );
}

export default Features;