import "./Stats.scss";

const defaultStats = [
  {
    value: "12+",
    label: "Years of experience",
    detail: "Building thoughtful digital experiences",
  },
  {
    value: "48",
    label: "Projects delivered",
    detail: "Across multiple industries",
  },
  {
    value: "96%",
    label: "Client retention",
    detail: "Long-term partnerships built on trust",
  },
  {
    value: "18",
    label: "Countries reached",
    detail: "Working across different markets",
  },
];

/* =========================================================
   STATS01 — CLEAN PREMIUM
========================================================= */

function Stats01({
  eyebrow = "BY THE NUMBERS",
  title = "A few numbers behind the work.",
  stats = defaultStats,
}) {
  return (
    <section className="sb-stats sb-stats--01" aria-labelledby="stats-01-title">
      <div className="sb-stats__container">
        <div className="sb-stats--01__intro">
          <span>{eyebrow}</span>
          <h2 id="stats-01-title">{title}</h2>
        </div>

        <div className="sb-stats--01__grid">
          {stats.map((stat) => (
            <article key={stat.label}>
              <strong>{stat.value}</strong>
              <h3>{stat.label}</h3>
              <p>{stat.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   STATS02 — SAAS METRICS
========================================================= */

function Stats02({
  title = "Built to move the numbers that matter.",
  stats = [
    ["01", "99.9%", "Platform uptime"],
    ["02", "2.4M", "Actions processed"],
    ["03", "41%", "Faster workflows"],
    ["04", "18k+", "Active users"],
  ],
}) {
  return (
    <section className="sb-stats sb-stats--02" aria-labelledby="stats-02-title">
      <div className="sb-stats__container">
        <div className="sb-stats--02__heading">
          <span>PERFORMANCE</span>
          <h2 id="stats-02-title">{title}</h2>
        </div>

        <div className="sb-stats--02__grid">
          {stats.map(([number, value, label]) => (
            <article key={number}>
              <span>{number}</span>
              <strong>{value}</strong>
              <p>{label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   STATS03 — DARK CINEMATIC
========================================================= */

function Stats03({
  eyebrow = "THE BIG PICTURE",
  title = "Progress worth measuring.",
}) {
  const stats = [
    ["120+", "Launches"],
    ["32", "Markets"],
    ["94%", "Retention"],
  ];

  return (
    <section className="sb-stats sb-stats--03" aria-labelledby="stats-03-title">
      <div className="sb-stats__container">
        <div className="sb-stats--03__header">
          <span>{eyebrow}</span>
          <h2 id="stats-03-title">{title}</h2>
        </div>

        <div className="sb-stats--03__grid">
          {stats.map(([value, label]) => (
            <article key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   STATS04 — LUXURY EDITORIAL
========================================================= */

function Stats04({
  title = "Measured in experience, not just numbers.",
}) {
  const stats = [
    ["14", "Years of craft"],
    ["87", "Projects"],
    ["23", "Awards & mentions"],
  ];

  return (
    <section className="sb-stats sb-stats--04" aria-labelledby="stats-04-title">
      <div className="sb-stats__container">
        <div className="sb-stats--04__heading">
          <span>OUR JOURNEY</span>
          <h2 id="stats-04-title">{title}</h2>
        </div>

        <div className="sb-stats--04__grid">
          {stats.map(([value, label]) => (
            <article key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   STATS05 — HORIZONTAL STRIP
========================================================= */

function Stats05({
  stats = [
    ["12+", "Years"],
    ["48", "Projects"],
    ["96%", "Retention"],
    ["18", "Countries"],
  ],
}) {
  return (
    <section className="sb-stats sb-stats--05" aria-label="Key statistics">
      <div className="sb-stats__container">
        <div className="sb-stats--05__strip">
          {stats.map(([value, label]) => (
            <article key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   STATS06 — BENTO
========================================================= */

function Stats06({
  title = "Numbers with context.",
}) {
  return (
    <section className="sb-stats sb-stats--06" aria-labelledby="stats-06-title">
      <div className="sb-stats__container">
        <div className="sb-stats--06__intro">
          <span>AT A GLANCE</span>
          <h2 id="stats-06-title">{title}</h2>
        </div>

        <div className="sb-stats--06__grid">
          <article className="sb-stats--06__large">
            <span>01</span>
            <strong>96%</strong>
            <p>Clients who continue working with us.</p>
          </article>

          <article>
            <span>02</span>
            <strong>48</strong>
            <p>Projects successfully delivered.</p>
          </article>

          <article className="sb-stats--06__accent">
            <span>03</span>
            <strong>18</strong>
            <p>Markets reached worldwide.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   STATS07 — CORPORATE
========================================================= */

function Stats07({
  eyebrow = "BUSINESS IMPACT",
  title = "Scale, consistency and measurable progress.",
}) {
  const stats = [
    ["32%", "Revenue growth"],
    ["18%", "Reduced acquisition cost"],
    ["4.6×", "Return on investment"],
  ];

  return (
    <section className="sb-stats sb-stats--07" aria-labelledby="stats-07-title">
      <div className="sb-stats__container">
        <div className="sb-stats--07__heading">
          <span>{eyebrow}</span>
          <h2 id="stats-07-title">{title}</h2>
        </div>

        <div className="sb-stats--07__grid">
          {stats.map(([value, label]) => (
            <article key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   STATS08 — AGENCY RESULTS
========================================================= */

function Stats08({
  title = "Work that creates a measurable difference.",
}) {
  const stats = [
    ["+42%", "Qualified enquiries"],
    ["+31%", "Conversion rate"],
    ["−28%", "Bounce rate"],
  ];

  return (
    <section className="sb-stats sb-stats--08" aria-labelledby="stats-08-title">
      <div className="sb-stats__container">
        <div className="sb-stats--08__intro">
          <span>SELECTED RESULTS</span>
          <h2 id="stats-08-title">{title}</h2>
        </div>

        <div className="sb-stats--08__grid">
          {stats.map(([value, label], index) => (
            <article key={label}>
              <span>0{index + 1}</span>
              <strong>{value}</strong>
              <p>{label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   STATS09 — RESTAURANT / HOSPITALITY
========================================================= */

function Stats09({
  title = "A little of what makes us different.",
}) {
  const stats = [
    ["12", "Years"],
    ["180k+", "Guests served"],
    ["4.9", "Average rating"],
    ["7", "Days open"],
  ];

  return (
    <section className="sb-stats sb-stats--09" aria-labelledby="stats-09-title">
      <div className="sb-stats__container">
        <div className="sb-stats--09__heading">
          <span>OUR STORY</span>
          <h2 id="stats-09-title">{title}</h2>
        </div>

        <div className="sb-stats--09__grid">
          {stats.map(([value, label]) => (
            <article key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   STATS10 — FITNESS
========================================================= */

function Stats10({
  title = "Consistency creates the result.",
}) {
  const stats = [
    ["2,400+", "Members"],
    ["18", "Coaches"],
    ["34k", "Sessions completed"],
  ];

  return (
    <section className="sb-stats sb-stats--10" aria-labelledby="stats-10-title">
      <div className="sb-stats__container">
        <div className="sb-stats--10__heading">
          <span>THE NUMBERS</span>
          <h2 id="stats-10-title">{title}</h2>
        </div>

        <div className="sb-stats--10__grid">
          {stats.map(([value, label]) => (
            <article key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   STATS11 — SINGLE HERO METRIC
========================================================= */

function Stats11({
  eyebrow = "ONE NUMBER SAYS A LOT",
  value = "96%",
  title = "of our clients choose to work with us again.",
  detail = "A number we're proud of because it represents relationships, not transactions.",
}) {
  return (
    <section className="sb-stats sb-stats--11" aria-labelledby="stats-11-title">
      <div className="sb-stats__container">
        <span>{eyebrow}</span>

        <div className="sb-stats--11__main">
          <strong>{value}</strong>

          <div>
            <h2 id="stats-11-title">{title}</h2>
            <p>{detail}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   STATS12 — MINIMAL NUMBERS
========================================================= */

function Stats12({
  stats = [
    ["08", "Years", "of independent work"],
    ["52", "Launches", "across multiple industries"],
    ["91", "Clients", "served globally"],
    ["24", "Partners", "working alongside us"],
  ],
}) {
  return (
    <section className="sb-stats sb-stats--12">
      <div className="sb-stats__container">
        <div className="sb-stats--12__grid">
          {stats.map(([number, value, label]) => (
            <article key={number}>
              <span>{number}</span>

              <strong>{value}</strong>

              <p>{label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   STATS13 — GRADIENT MODERN
========================================================= */

function Stats13({
  title = "Momentum you can measure.",
}) {
  const stats = [
    ["4.8×", "Average growth"],
    ["72%", "Faster delivery"],
    ["98%", "Client satisfaction"],
  ];

  return (
    <section className="sb-stats sb-stats--13" aria-labelledby="stats-13-title">
      <div className="sb-stats__container">
        <div className="sb-stats--13__heading">
          <span>THE IMPACT</span>
          <h2 id="stats-13-title">{title}</h2>
        </div>

        <div className="sb-stats--13__grid">
          {stats.map(([value, label]) => (
            <article key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   STATS14 — COMPACT INLINE
========================================================= */

function Stats14({
  stats = [
    ["12+", "Years"],
    ["48", "Projects"],
    ["96%", "Retention"],
    ["18", "Countries"],
  ],
}) {
  return (
    <section className="sb-stats sb-stats--14" aria-label="Metrics">
      <div className="sb-stats__container">
        <div className="sb-stats--14__line">
          {stats.map(([value, label], index) => (
            <article key={label}>
              <strong>{value}</strong>
              <span>{label}</span>

              {index !== stats.length - 1 && (
                <i aria-hidden="true" />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export {
  Stats01,
  Stats02,
  Stats03,
  Stats04,
  Stats05,
  Stats06,
  Stats07,
  Stats08,
  Stats09,
  Stats10,
  Stats11,
  Stats12,
  Stats13,
  Stats14,
};

function Stats() {
  return (
    <div className="stats_foundation">
      <Stats01 />
      <Stats02 />
      <Stats03 />
      <Stats04 />
      <Stats05 />
      <Stats06 />
      <Stats07 />
      <Stats08 />
      <Stats09 />
      <Stats10 />
      <Stats11 />
      <Stats12 />
      <Stats13 />
      <Stats14 />
    </div>
  );
}

export default Stats;