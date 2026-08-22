import "./CTA.scss";

function CTA({
  eyebrow = "YOUR TABLE IS WAITING",
  title = "Join us for dinner.",
  description =
    "Seasonal cooking, good wine and a room made for long evenings.",
  primaryLabel = "Reserve a Table",
  primaryHref = "#reservation",
  secondaryLabel = "View Menu",
  secondaryHref = "#menu",
}) {
  return (
    <section className="sb-cta-07">
      <div className="sb-cta-07__container">
        <div>
          <span>{eyebrow}</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="sb-cta-07__actions">
          <a href={primaryHref}>{primaryLabel} ↗</a>
          <a href={secondaryHref}>{secondaryLabel}</a>
        </div>
      </div>
    </section>
  );
}

export default CTA;