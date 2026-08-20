import "./Sections.scss";

/* =========================================================
   REUSABLE SECTION WRAPPERS
   ========================================================= */

export function Section01({
  eyebrow,
  title,
  description,
  children,
  align = "left",
}) {
  return (
    <section className={`sb-section sb-section-01 sb-section-01--${align}`}>
      <div className="sb-section-01__container">
        {(eyebrow || title || description) && (
          <div className="sb-section-01__intro">
            {eyebrow && <span>{eyebrow}</span>}
            {title && <h2>{title}</h2>}
            {description && <p>{description}</p>}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}

export function Section02({
  eyebrow,
  title,
  description,
  children,
}) {
  return (
    <section className="sb-section sb-section-02">
      <div className="sb-section-02__container">
        <div className="sb-section-02__intro">
          {eyebrow && <span>{eyebrow}</span>}
          {title && <h2>{title}</h2>}
          {description && <p>{description}</p>}
        </div>

        <div className="sb-section-02__content">
          {children}
        </div>
      </div>
    </section>
  );
}

export function Section03({
  eyebrow,
  title,
  description,
  children,
}) {
  return (
    <section className="sb-section sb-section-03">
      <div className="sb-section-03__container">
        <div className="sb-section-03__heading">
          <div>
            {eyebrow && <span>{eyebrow}</span>}
            {title && <h2>{title}</h2>}
          </div>

          {description && <p>{description}</p>}
        </div>

        <div className="sb-section-03__content">
          {children}
        </div>
      </div>
    </section>
  );
}

export function Section04({
  eyebrow,
  title,
  description,
  children,
}) {
  return (
    <section className="sb-section sb-section-04">
      <div className="sb-section-04__container">
        <div className="sb-section-04__intro">
          {eyebrow && <span>{eyebrow}</span>}
          {title && <h2>{title}</h2>}
          {description && <p>{description}</p>}
        </div>

        <div className="sb-section-04__content">
          {children}
        </div>
      </div>
    </section>
  );
}

export function Section05({
  eyebrow,
  title,
  description,
  children,
}) {
  return (
    <section className="sb-section sb-section-05">
      <div className="sb-section-05__container">
        <div className="sb-section-05__intro">
          {eyebrow && <span>{eyebrow}</span>}
          {title && <h2>{title}</h2>}
          {description && <p>{description}</p>}
        </div>

        <div className="sb-section-05__content">
          {children}
        </div>
      </div>
    </section>
  );
}

export function Section06({
  eyebrow,
  title,
  description,
  children,
}) {
  return (
    <section className="sb-section sb-section-06">
      <div className="sb-section-06__container">
        <div className="sb-section-06__intro">
          <div className="sb-section-06__index">
            <span>01</span>
          </div>

          <div>
            {eyebrow && <span>{eyebrow}</span>}
            {title && <h2>{title}</h2>}
            {description && <p>{description}</p>}
          </div>
        </div>

        <div className="sb-section-06__content">
          {children}
        </div>
      </div>
    </section>
  );
}

export function Section07({
  eyebrow,
  title,
  description,
  children,
}) {
  return (
    <section className="sb-section sb-section-07">
      <div className="sb-section-07__container">
        <div className="sb-section-07__intro">
          {eyebrow && <span>{eyebrow}</span>}
          {title && <h2>{title}</h2>}
          {description && <p>{description}</p>}
        </div>

        <div className="sb-section-07__content">
          {children}
        </div>
      </div>
    </section>
  );
}

export function Section08({
  eyebrow,
  title,
  description,
  children,
}) {
  return (
    <section className="sb-section sb-section-08">
      <div className="sb-section-08__container">
        <div className="sb-section-08__intro">
          <div>
            {eyebrow && <span>{eyebrow}</span>}
            {title && <h2>{title}</h2>}
          </div>

          {description && <p>{description}</p>}
        </div>

        <div className="sb-section-08__content">
          {children}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   SHOWCASE
   ========================================================= */

function ShowcaseContent({ label = "Reusable content area" }) {
  return (
    <div className="sb-section-demo">
      <div className="sb-section-demo__card">
        <span>{label}</span>
        <strong>Content goes here</strong>
      </div>

      <div className="sb-section-demo__card sb-section-demo__card--small">
        <span>02</span>
        <strong>Another block</strong>
      </div>

      <div className="sb-section-demo__card sb-section-demo__card--soft">
        <span>03</span>
        <strong>Flexible layout</strong>
      </div>
    </div>
  );
}

function Sections() {
  return (
    <main className="sb-sections-showcase">
      <div className="sb-sections-showcase__intro">
        <span>SouthBridge Foundations</span>

        <h1>Section Wrappers</h1>

        <p>
          Premium layout foundations for About, Services, Features,
          Gallery, Testimonials, Stats, CTA and other website sections.
        </p>
      </div>

      {/* =====================================================
          01
         ===================================================== */}

      <Section01
        eyebrow="01 / CLEAN PREMIUM"
        title="Built around a simple visual hierarchy."
        description="A dependable section wrapper for modern business, SaaS, agency and service websites."
      >
        <ShowcaseContent label="Primary content area" />
      </Section01>

      {/* =====================================================
          02
         ===================================================== */}

      <Section02
        eyebrow="02 / EDITORIAL"
        title="Space creates perception."
        description="A more sophisticated editorial structure for luxury brands, fashion, hospitality and architecture."
      >
        <ShowcaseContent label="Editorial content area" />
      </Section02>

      {/* =====================================================
          03
         ===================================================== */}

      <Section03
        eyebrow="03 / SPLIT ALIGNMENT"
        title="Structured content without feeling rigid."
        description="Excellent for services, features, projects, case studies and product sections."
      >
        <ShowcaseContent label="Split-layout content" />
      </Section03>

      {/* =====================================================
          04
         ===================================================== */}

      <Section04
        eyebrow="04 / CENTERED LUXURY"
        title="A quieter, more refined rhythm."
        description="Designed for elegant storytelling where typography and whitespace do most of the work."
      >
        <ShowcaseContent label="Centered content area" />
      </Section04>

      {/* =====================================================
          05
         ===================================================== */}

      <Section05
        eyebrow="05 / DARK PREMIUM"
        title="High contrast. Strong hierarchy."
        description="Useful for technology, creative studios, premium products and cinematic sections."
      >
        <ShowcaseContent label="Dark section content" />
      </Section05>

      {/* =====================================================
          06
         ===================================================== */}

      <Section06
        eyebrow="06 / NUMBERED SYSTEM"
        title="A foundation for structured storytelling."
        description="Works especially well for services, process sections, capabilities and case studies."
      >
        <ShowcaseContent label="Process content" />
      </Section06>

      {/* =====================================================
          07
         ===================================================== */}

      <Section07
        eyebrow="07 / WIDE CINEMATIC"
        title="More room. More visual impact."
        description="Use this when the content needs to breathe or when a large visual module follows the heading."
      >
        <ShowcaseContent label="Wide visual content" />
      </Section07>

      {/* =====================================================
          08
         ===================================================== */}

      <Section08
        eyebrow="08 / COMPACT BUSINESS"
        title="Clean, efficient and conversion-friendly."
        description="A practical option for pricing, FAQ, business features, contact blocks and utility-heavy sections."
      >
        <ShowcaseContent label="Compact content area" />
      </Section08>
    </main>
  );
}

export default Sections;