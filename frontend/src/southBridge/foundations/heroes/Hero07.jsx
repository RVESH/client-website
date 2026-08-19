import "./Hero07.scss";

function Hero07({
  eyebrow = "INTELLIGENCE, WITHOUT THE NOISE.",
  title = "Build smarter systems.",
  description =
    "A focused AI platform for teams that need speed, control and reliable decisions at every stage.",
  primaryLabel = "Get Started",
  primaryHref = "#start",
  secondaryLabel = "See how it works",
  secondaryHref = "#how",
}) {
  return (
    <section className="sb-hero-07">
      <div className="sb-hero-07__grid" aria-hidden="true" />

      <div className="sb-hero-07__container">
        <div className="sb-hero-07__copy">
          <span>{eyebrow}</span>

          <h1>
            Build
            <br />
            smarter
            <br />
            <strong>systems.</strong>
          </h1>

          <p>{description}</p>

          <div className="sb-hero-07__actions">
            <a href={primaryHref}>{primaryLabel} ↗</a>
            <a href={secondaryHref}>{secondaryLabel}</a>
          </div>
        </div>

        <div className="sb-hero-07__visual">
          <div className="sb-hero-07__orb" />
          <div className="sb-hero-07__panel">
            <span>LIVE SYSTEM</span>
            <strong>98.7%</strong>
            <small>Model reliability</small>

            <div className="sb-hero-07__bars">
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero07;