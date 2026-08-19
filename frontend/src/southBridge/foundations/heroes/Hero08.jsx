import "./Hero08.scss";

function Hero08({
  eyebrow = "A QUIET PLACE TO ARRIVE",
  title = "Stay somewhere worth slowing down for.",
  description =
    "Private suites, thoughtful details and a slower rhythm in the heart of the city.",
  primaryLabel = "Check Availability",
  primaryHref = "#availability",
  image = "/images/hotel-hero.webp",
}) {
  return (
    <section className="sb-hero-08">
      <div className="sb-hero-08__image">
        <img src={image} alt="Luxury hotel interior" />
      </div>

      <div className="sb-hero-08__content">
        <span>{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>

        <a href={primaryHref}>
          {primaryLabel}
          <span>→</span>
        </a>
      </div>

      <div className="sb-hero-08__location">
        <strong>THE WILLOW HOUSE</strong>
        <span>Lisbon / Portugal</span>
      </div>
    </section>
  );
}

export default Hero08;