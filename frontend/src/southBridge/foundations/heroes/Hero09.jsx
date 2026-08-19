import "./Hero09.scss";

function Hero09({
  eyebrow = "STRATEGY • TECHNOLOGY • TRANSFORMATION",
  title = "Complex problems. Clear outcomes.",
  description =
    "We help ambitious organizations make better decisions, build stronger capabilities and move with confidence.",
  primaryLabel = "Our Expertise",
  primaryHref = "#expertise",
  secondaryLabel = "Meet the Firm",
  secondaryHref = "#about",
}) {
  return (
    <section className="sb-hero-09">
      <div className="sb-hero-09__container">
        <div className="sb-hero-09__copy">
          <span>{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>

          <div className="sb-hero-09__actions">
            <a href={primaryHref}>{primaryLabel}</a>
            <a href={secondaryHref}>{secondaryLabel}</a>
          </div>
        </div>

        <div className="sb-hero-09__visual">
          <div className="sb-hero-09__shape sb-hero-09__shape--one" />
          <div className="sb-hero-09__shape sb-hero-09__shape--two" />
          <div className="sb-hero-09__shape sb-hero-09__shape--three" />
          <span>01</span>
        </div>
      </div>
    </section>
  );
}

export default Hero09;