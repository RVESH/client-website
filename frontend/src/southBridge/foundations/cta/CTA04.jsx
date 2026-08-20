import "./CTA04.scss";

function CTA04({
  eyebrow = "START TODAY",
  title = "A simpler way to run your work.",
  description =
    "Set up your workspace in minutes and bring your team into one focused place.",
  primaryLabel = "Start Free",
  primaryHref = "#signup",
  note = "No credit card required",
}) {
  return (
    <section className="sb-cta-04">
      <div className="sb-cta-04__container">
        <div>
          <span>{eyebrow}</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="sb-cta-04__action">
          <a href={primaryHref}>
            {primaryLabel}
            <span>→</span>
          </a>
          <small>{note}</small>
        </div>
      </div>
    </section>
  );
}

export default CTA04;