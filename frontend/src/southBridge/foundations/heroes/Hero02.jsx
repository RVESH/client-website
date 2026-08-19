import "./Hero02.scss";

function Hero02({
  eyebrow = "FINE DINING • EST. 1998",
  title = "A table worth remembering.",
  description =
    "Seasonal ingredients, open-fire cooking and a room designed for long evenings.",
  primaryLabel = "Reserve a Table",
  primaryHref = "#reservation",
  secondaryLabel = "Explore the Menu",
  secondaryHref = "#menu",
  image = "/images/restaurant-hero.webp",
}) {
  return (
    <section className="sb-hero-02">
      <img
        className="sb-hero-02__image"
        src={image}
        alt="Restaurant interior"
      />

      <div className="sb-hero-02__overlay" />

      <div className="sb-hero-02__content">
        <span>{eyebrow}</span>

        <h1>{title}</h1>

        <p>{description}</p>

        <div className="sb-hero-02__actions">
          <a href={primaryHref}>{primaryLabel}</a>
          <a href={secondaryHref}>{secondaryLabel} ↗</a>
        </div>
      </div>

      <div className="sb-hero-02__bottom">
        <span>42 Willow Street</span>
        <span>New York</span>
        <span>Open Tue–Sat</span>
      </div>
    </section>
  );
}

export default Hero02;