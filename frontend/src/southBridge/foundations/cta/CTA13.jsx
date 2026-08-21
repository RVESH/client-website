import "./CTA13.scss";

function CTA13({
  eyebrow = "LET'S CREATE SOMETHING GREAT",
  title = "Have an idea worth building?",
  description =
    "Bring us the idea, the challenge or simply the starting point. We'll help you turn it into something clear, useful and memorable.",
  primaryLabel = "Start a Project",
  primaryHref = "#contact",
  secondaryLabel = "View Our Work",
  secondaryHref = "#work",
}) {
  return (
    <section
      className="sb-cta-13"
      aria-labelledby="cta-13-title"
    >
      <div className="sb-cta-13__noise" aria-hidden="true" />

      <div className="sb-cta-13__container">
        <div className="sb-cta-13__top">
          <span className="sb-cta-13__eyebrow">
            <i />
            {eyebrow}
          </span>

          <span className="sb-cta-13__index">
            13 / CTA
          </span>
        </div>

        <div className="sb-cta-13__main">
          <div className="sb-cta-13__content">
            <h2 id="cta-13-title">
              {title}
            </h2>

            <p>{description}</p>
          </div>

          <div className="sb-cta-13__actions">
            <a
              href={primaryHref}
              className="sb-cta-13__primary"
            >
              <span>{primaryLabel}</span>
              <b>↗</b>
            </a>

            <a
              href={secondaryHref}
              className="sb-cta-13__secondary"
            >
              {secondaryLabel}
            </a>
          </div>
        </div>

        <div className="sb-cta-13__bottom">
          <span>Strategy</span>
          <span>Design</span>
          <span>Development</span>
          <span>Growth</span>
        </div>
      </div>
    </section>
  );
}

export default CTA13;