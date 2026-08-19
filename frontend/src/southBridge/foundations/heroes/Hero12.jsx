import "./Hero12.scss";

function Hero12({
  eyebrow = "CRAFTED LOCALLY / SINCE 2004",
  title = "Small details. Distinctive results.",
  description =
    "A modern neighborhood studio combining thoughtful service, timeless materials and a genuinely personal experience.",
  primaryLabel = "Explore Services",
  primaryHref = "#services",
  secondaryLabel = "Visit the Studio",
  secondaryHref = "#visit",
  image = "/images/business-hero.webp",
}) {
  return (
    <section className="sb-hero-12">
      <div className="sb-hero-12__container">
        <div className="sb-hero-12__visual">
          <img src={image} alt="Studio interior" />

          <div className="sb-hero-12__tag">
            <span>OPEN TODAY</span>
            <strong>09:00 — 19:00</strong>
          </div>
        </div>

        <div className="sb-hero-12__copy">
          <span>{eyebrow}</span>

          <h1>{title}</h1>

          <p>{description}</p>

          <div className="sb-hero-12__actions">
            <a href={primaryHref}>{primaryLabel}</a>
            <a href={secondaryHref}>{secondaryLabel} ↗</a>
          </div>

          <div className="sb-hero-12__meta">
            <span>42 Market Street</span>
            <span>New Delhi</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero12;