import "./Hero10.scss";

function Hero10({
  name = "Rishabh Verma",
  role = "Independent designer & developer",
  description =
    "I create digital products, identities and interfaces for ambitious people and growing brands.",
  primaryLabel = "View Selected Work",
  primaryHref = "#work",
  secondaryLabel = "Let's Talk",
  secondaryHref = "#contact",
}) {
  return (
    <section className="sb-hero-10">
      <div className="sb-hero-10__container">
        <div className="sb-hero-10__top">
          <span>PORTFOLIO / 2026</span>
          <span>AVAILABLE FOR SELECT PROJECTS</span>
        </div>

        <div className="sb-hero-10__main">
          <div>
            <span className="sb-hero-10__role">{role}</span>

            <h1>
              {name.split(" ")[0]}
              <br />
              <em>{name.split(" ")[1]}</em>
            </h1>
          </div>

          <div className="sb-hero-10__side">
            <p>{description}</p>

            <div>
              <a href={primaryHref}>{primaryLabel} ↗</a>
              <a href={secondaryHref}>{secondaryLabel}</a>
            </div>
          </div>
        </div>

        <div className="sb-hero-10__bottom">
          <span>Scroll to explore</span>
          <span>↓</span>
        </div>
      </div>
    </section>
  );
}

export default Hero10;