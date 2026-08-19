import "./Hero11.scss";

function Hero11({
  eyebrow = "MOVE BETTER. FEEL STRONGER.",
  title = "A better relationship with your body.",
  description =
    "Intentional training, expert coaching and a calmer approach to becoming stronger.",
  primaryLabel = "Book a Session",
  primaryHref = "#booking",
  image = "/images/wellness-hero.webp",
}) {
  return (
    <section className="sb-hero-11">
      <div className="sb-hero-11__container">
        <div className="sb-hero-11__copy">
          <span>{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>

          <a href={primaryHref}>
            {primaryLabel}
            <b>↗</b>
          </a>

          <div className="sb-hero-11__stats">
            <div>
              <strong>12+</strong>
              <span>Years experience</span>
            </div>
            <div>
              <strong>4.9</strong>
              <span>Member rating</span>
            </div>
          </div>
        </div>

        <div className="sb-hero-11__visual">
          <img src={image} alt="Wellness training session" />

          <div className="sb-hero-11__quote">
            “Consistency beats intensity.”
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero11;