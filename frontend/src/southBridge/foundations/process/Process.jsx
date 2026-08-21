import "./Process.scss";

const defaultSteps = [
  {
    number: "01",
    title: "Discover",
    text: "We understand the goal, audience, constraints and opportunity before deciding what to build.",
  },
  {
    number: "02",
    title: "Define",
    text: "We turn the information into a clear structure, direction and practical plan.",
  },
  {
    number: "03",
    title: "Create",
    text: "The experience takes shape through design, content, development and refinement.",
  },
  {
    number: "04",
    title: "Launch",
    text: "Everything is checked, polished and prepared for the real world.",
  },
];

/* =========================================================
   PROCESS 01 — PREMIUM STEPS
========================================================= */

function Process01({
  eyebrow = "HOW IT WORKS",
  title = "A clear process from first conversation to final launch.",
  steps = defaultSteps,
}) {
  return (
    <section className="sb-process sb-process--01" aria-labelledby="process-01-title">
      <div className="sb-process__container">
        <div className="sb-process--01__intro">
          <span>{eyebrow}</span>
          <h2 id="process-01-title">{title}</h2>
        </div>

        <div className="sb-process--01__grid">
          {steps.map((step) => (
            <article key={step.number}>
              <span>{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PROCESS 02 — TIMELINE
========================================================= */

function Process02({
  title = "Four stages. One focused journey.",
}) {
  const steps = [
    ["01", "Listen", "Understand what matters."],
    ["02", "Plan", "Create a clear direction."],
    ["03", "Build", "Turn the idea into reality."],
    ["04", "Refine", "Polish every important detail."],
  ];

  return (
    <section className="sb-process sb-process--02" aria-labelledby="process-02-title">
      <div className="sb-process__container">
        <div className="sb-process--02__heading">
          <span>THE JOURNEY</span>
          <h2 id="process-02-title">{title}</h2>
        </div>

        <div className="sb-process--02__timeline">
          {steps.map(([number, titleText, text]) => (
            <article key={number}>
              <div className="sb-process--02__marker">
                {number}
              </div>

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
   PROCESS 03 — DARK TECH
========================================================= */

function Process03({
  eyebrow = "SYSTEM / PROCESS",
  title = "Simple on the surface. Thoughtful underneath.",
}) {
  const steps = [
    ["01", "Input", "Gather the right information."],
    ["02", "Structure", "Turn complexity into clarity."],
    ["03", "Execute", "Build with precision."],
  ];

  return (
    <section className="sb-process sb-process--03" aria-labelledby="process-03-title">
      <div className="sb-process__container">
        <div className="sb-process--03__heading">
          <span>{eyebrow}</span>
          <h2 id="process-03-title">{title}</h2>
        </div>

        <div className="sb-process--03__grid">
          {steps.map(([number, titleText, text]) => (
            <article key={number}>
              <span>{number}</span>

              <div className="sb-process--03__icon" aria-hidden="true">
                +
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
   PROCESS 04 — LUXURY EDITORIAL
========================================================= */

function Process04({
  title = "Nothing rushed. Nothing overlooked.",
}) {
  const steps = [
    ["01", "The Beginning", "A thoughtful conversation and a clear understanding of what is needed."],
    ["02", "The Direction", "A considered path shaped around the right priorities."],
    ["03", "The Craft", "Careful execution with attention to every meaningful detail."],
  ];

  return (
    <section className="sb-process sb-process--04" aria-labelledby="process-04-title">
      <div className="sb-process__container">
        <div className="sb-process--04__heading">
          <span>OUR APPROACH</span>
          <h2 id="process-04-title">{title}</h2>
        </div>

        <div className="sb-process--04__list">
          {steps.map(([number, titleText, text]) => (
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
   PROCESS 05 — HORIZONTAL
========================================================= */

function Process05({
  steps = [
    ["01", "Discover"],
    ["02", "Plan"],
    ["03", "Create"],
    ["04", "Launch"],
  ],
}) {
  return (
    <section className="sb-process sb-process--05" aria-label="Process">
      <div className="sb-process__container">
        <div className="sb-process--05__strip">
          {steps.map(([number, title]) => (
            <article key={number}>
              <span>{number}</span>
              <strong>{title}</strong>
              <i aria-hidden="true">→</i>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PROCESS 06 — BENTO
========================================================= */

function Process06({
  title = "The right balance of thinking and making.",
}) {
  return (
    <section className="sb-process sb-process--06" aria-labelledby="process-06-title">
      <div className="sb-process__container">
        <div className="sb-process--06__heading">
          <span>FROM IDEA TO OUTCOME</span>
          <h2 id="process-06-title">{title}</h2>
        </div>

        <div className="sb-process--06__grid">
          <article className="sb-process--06__large">
            <span>01</span>

            <div>
              <h3>Understand before building.</h3>
              <p>
                The first stage is about finding the real problem, defining
                the objective and identifying what success should look like.
              </p>
            </div>

            <a href="#discover">Explore stage ↗</a>
          </article>

          <article>
            <span>02</span>
            <strong>Shape</strong>
            <p>Structure the experience.</p>
          </article>

          <article className="sb-process--06__accent">
            <span>03</span>
            <strong>Deliver</strong>
            <p>Make the final result work.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PROCESS 07 — NUMBER + OUTCOME
========================================================= */

function Process07({
  title = "Every stage has a purpose.",
}) {
  const steps = [
    ["01", "Discover", "Clarity before commitment."],
    ["02", "Design", "Ideas become a tangible direction."],
    ["03", "Develop", "The experience becomes real."],
    ["04", "Improve", "The details get stronger through refinement."],
  ];

  return (
    <section className="sb-process sb-process--07" aria-labelledby="process-07-title">
      <div className="sb-process__container">
        <div className="sb-process--07__heading">
          <span>THE METHOD</span>
          <h2 id="process-07-title">{title}</h2>
        </div>

        <div className="sb-process--07__list">
          {steps.map(([number, titleText, text]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{titleText}</h3>
              <p>{text}</p>
              <b aria-hidden="true">↗</b>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PROCESS 08 — ROADMAP
========================================================= */

function Process08({
  title = "A roadmap that keeps everyone moving in the same direction.",
}) {
  const steps = [
    ["01", "Brief", "Goals, audience and requirements."],
    ["02", "Direction", "Structure, hierarchy and visual language."],
    ["03", "Production", "Design, development and content."],
    ["04", "Review", "Testing, refinement and final preparation."],
  ];

  return (
    <section className="sb-process sb-process--08" aria-labelledby="process-08-title">
      <div className="sb-process__container">
        <div className="sb-process--08__heading">
          <span>ROADMAP</span>
          <h2 id="process-08-title">{title}</h2>
        </div>

        <div className="sb-process--08__road">
          <div className="sb-process--08__line" />

          {steps.map(([number, titleText, text], index) => (
            <article className={index % 2 ? "is-even" : ""} key={number}>
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
   PROCESS 09 — AGENCY
========================================================= */

function Process09({
  title = "From first idea to launch day.",
}) {
  const steps = [
    ["01", "Discovery", "We ask the right questions."],
    ["02", "Strategy", "We decide what matters most."],
    ["03", "Creative", "We build the visual direction."],
    ["04", "Launch", "We prepare everything for release."],
  ];

  return (
    <section className="sb-process sb-process--09" aria-labelledby="process-09-title">
      <div className="sb-process__container">
        <div className="sb-process--09__intro">
          <span>OUR PROCESS</span>
          <h2 id="process-09-title">{title}</h2>
        </div>

        <div className="sb-process--09__grid">
          {steps.map(([number, titleText, text]) => (
            <article key={number}>
              <span>{number}</span>

              <h3>{titleText}</h3>

              <p>{text}</p>

              <div className="sb-process--09__arrow">↘</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PROCESS 10 — HOSPITALITY
========================================================= */

function Process10({
  title = "A stay designed around the moments that matter.",
}) {
  const steps = [
    ["01", "Arrive", "A warm welcome and an easy beginning."],
    ["02", "Settle In", "Everything you need, quietly within reach."],
    ["03", "Enjoy", "Time to slow down and make the most of it."],
  ];

  return (
    <section className="sb-process sb-process--10" aria-labelledby="process-10-title">
      <div className="sb-process__container">
        <div className="sb-process--10__heading">
          <span>THE EXPERIENCE</span>
          <h2 id="process-10-title">{title}</h2>
        </div>

        <div className="sb-process--10__grid">
          {steps.map(([number, titleText, text]) => (
            <article key={number}>
              <span>{number}</span>

              <div>
                <h3>{titleText}</h3>
                <p>{text}</p>
              </div>

              <a href={`#${titleText.toLowerCase()}`}>
                Discover ↗
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PROCESS 11 — SPOTLIGHT
========================================================= */

function Process11({
  title = "Good work starts before the first pixel.",
  description =
    "The strongest outcomes usually come from spending enough time understanding the problem before trying to solve it.",
}) {
  return (
    <section className="sb-process sb-process--11" aria-labelledby="process-11-title">
      <div className="sb-process__container">
        <div className="sb-process--11__visual" aria-hidden="true">
          <div className="sb-process--11__ring ring-one" />
          <div className="sb-process--11__ring ring-two" />
          <div className="sb-process--11__core">01</div>
        </div>

        <div className="sb-process--11__content">
          <span>STEP ONE</span>
          <h2 id="process-11-title">{title}</h2>
          <p>{description}</p>

          <a href="#process">
            Explore the process
            <b>↗</b>
          </a>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PROCESS 12 — MINIMAL NUMBERED
========================================================= */

function Process12({
  steps = [
    ["01", "Discover", "Understand the opportunity."],
    ["02", "Define", "Create the right direction."],
    ["03", "Build", "Turn the plan into reality."],
    ["04", "Launch", "Release with confidence."],
  ],
}) {
  return (
    <section className="sb-process sb-process--12" aria-label="Process steps">
      <div className="sb-process__container">
        <div className="sb-process--12__grid">
          {steps.map(([number, title, text]) => (
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
   PROCESS 13 — GRADIENT MODERN
========================================================= */

function Process13({
  title = "A modern process built for momentum.",
}) {
  const steps = [
    ["01", "Focus", "Find the important thing."],
    ["02", "Move", "Turn decisions into action."],
    ["03", "Refine", "Make the good even better."],
  ];

  return (
    <section className="sb-process sb-process--13" aria-labelledby="process-13-title">
      <div className="sb-process__container">
        <div className="sb-process--13__heading">
          <span>THE FLOW</span>
          <h2 id="process-13-title">{title}</h2>
        </div>

        <div className="sb-process--13__grid">
          {steps.map(([number, titleText, text], index) => (
            <article
              className={`sb-process--13__card sb-process--13__card--${index + 1}`}
              key={number}
            >
              <span>{number}</span>
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
   PROCESS 14 — COMPACT INLINE
========================================================= */

function Process14({
  steps = [
    ["Discover", "01"],
    ["Define", "02"],
    ["Create", "03"],
    ["Launch", "04"],
  ],
}) {
  return (
    <section className="sb-process sb-process--14" aria-label="Process">
      <div className="sb-process__container">
        <div className="sb-process--14__line">
          {steps.map(([title, number], index) => (
            <article key={number}>
              <strong>{title}</strong>
              <span>{number}</span>

              {index !== steps.length - 1 && (
                <i aria-hidden="true">→</i>
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
  Process01,
  Process02,
  Process03,
  Process04,
  Process05,
  Process06,
  Process07,
  Process08,
  Process09,
  Process10,
  Process11,
  Process12,
  Process13,
  Process14,
};

/* =========================================================
   SHOWCASE
========================================================= */

function Process() {
  return (
    <div className="process_foundation">
      <Process01 />
      <Process02 />
      <Process03 />
      <Process04 />
      <Process05 />
      <Process06 />
      <Process07 />
      <Process08 />
      <Process09 />
      <Process10 />
      <Process11 />
      <Process12 />
      <Process13 />
      <Process14 />
    </div>
  );
}

export default Process;