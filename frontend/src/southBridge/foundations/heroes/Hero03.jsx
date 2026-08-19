import "./Hero03.scss";

function Hero03({
  eyebrow = "SPRING / SUMMER 2026",
  title = "Quiet confidence.",
  description = "Form, material and movement in considered balance.",
  image = "/images/fashion-hero.webp",
  primaryLabel = "View Collection",
  primaryHref = "#collection",
}) {
  return (
    <section className="sb-hero-03">
      <div className="sb-hero-03__container">
        <div className="sb-hero-03__copy">
          <span>{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>

          <a href={primaryHref}>
            {primaryLabel}
            <strong>→</strong>
          </a>
        </div>

        <div className="sb-hero-03__visual">
          <div className="sb-hero-03__frame">
            <img src={image} alt="Fashion collection" />
          </div>

          <span className="sb-hero-03__vertical">ATELIER / 06</span>
          <span className="sb-hero-03__index">01 — 04</span>
        </div>
      </div>
    </section>
  );
}

export default Hero03;