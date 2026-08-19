import "./Hero01.scss";

function Hero01({
  eyebrow = "THE MODERN WORKSPACE",
  title = "Everything your team needs to move with clarity.",
  description =
    "Plan projects, collaborate with your team, and turn ideas into measurable progress from one beautifully simple workspace.",
  primaryLabel = "Start Free",
  primaryHref = "#start",
  secondaryLabel = "View Demo",
  secondaryHref = "#demo",
  image = "/images/hero-product.webp",
}) {
  return (
    <section className="sb-hero-01" aria-labelledby="hero-01-title">
      <div className="sb-hero-01__background" aria-hidden="true" />

      <div className="sb-hero-01__container">
        <div className="sb-hero-01__content">
          <span className="sb-hero-01__eyebrow">
            <i />
            {eyebrow}
          </span>

          <h1 id="hero-01-title">{title}</h1>

          <p>{description}</p>

          <div className="sb-hero-01__actions">
            <a href={primaryHref} className="sb-hero-01__primary">
              {primaryLabel}
              <span>↗</span>
            </a>

            <a href={secondaryHref} className="sb-hero-01__secondary">
              {secondaryLabel}
            </a>
          </div>

          <div className="sb-hero-01__trust">
            <div className="sb-hero-01__avatars" aria-hidden="true">
              <span>AM</span>
              <span>SK</span>
              <span>RJ</span>
            </div>

            <div>
              <strong>4.9/5 from 2,000+ teams</strong>
              <small>Built for focused work.</small>
            </div>
          </div>
        </div>

        <div className="sb-hero-01__visual">
          <div className="sb-hero-01__glow" />

          <div className="sb-hero-01__card">
            <img src={image} alt="Product interface preview" />
          </div>

          <div className="sb-hero-01__mini-card">
            <span>Growth</span>
            <strong>+28.4%</strong>
            <small>This month</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero01;