import "./CTA08.scss";

function CTA08({
  eyebrow = "THE NEW COLLECTION",
  title = "Designed for the way you live now.",
  description =
    "Explore considered pieces, natural materials and timeless forms.",
  primaryLabel = "Shop Collection",
  primaryHref = "#shop",
  secondaryLabel = "See What's New",
  secondaryHref = "#new",
}) {
  return (
    <section className="sb-cta-08">
      <div className="sb-cta-08__container">
        <div className="sb-cta-08__copy">
          <span>{eyebrow}</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="sb-cta-08__actions">
          <a href={primaryHref}>{primaryLabel}</a>
          <a href={secondaryHref}>{secondaryLabel} →</a>
        </div>
      </div>
    </section>
  );
}

export default CTA08;