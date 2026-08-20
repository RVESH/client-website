import "./CTA01.scss";

function CTA01({
  eyebrow = "READY WHEN YOU ARE",
  title = "Let's build something worth remembering.",
  description =
    "Tell us what you are working on and we will help turn the idea into a clear next step.",
  primaryLabel = "Start a Conversation",
  primaryHref = "#contact",
  secondaryLabel = "View Our Work",
  secondaryHref = "#work",
}) {
  return (
    <section className="sb-cta-01" aria-labelledby="cta-01-title">
      <div className="sb-cta-01__container">
        <div className="sb-cta-01__copy">
          <span>{eyebrow}</span>

          <h2 id="cta-01-title">{title}</h2>

          <p>{description}</p>
        </div>

        <div className="sb-cta-01__actions">
          <a href={primaryHref} className="sb-cta-01__primary">
            {primaryLabel}
            <b>↗</b>
          </a>

          <a href={secondaryHref} className="sb-cta-01__secondary">
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA01;