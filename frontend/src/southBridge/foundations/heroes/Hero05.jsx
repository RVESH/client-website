import "./Hero05.scss";

function Hero05({
  eyebrow = "INDEPENDENT DIGITAL STUDIO",
  title = "We build brands people remember.",
  description =
    "Strategy, identity and digital experiences for companies ready to become impossible to ignore.",
  primaryLabel = "View Our Work",
  primaryHref = "#work",
  secondaryLabel = "Start a Project",
  secondaryHref = "#contact",
}) {
  return (
    <section className="sb-hero-05">
      <div className="sb-hero-05__container">
        <div className="sb-hero-05__topline">
          <span>{eyebrow}</span>
          <span>New Delhi / India</span>
        </div>

        <div className="sb-hero-05__main">
          <h1>
            We build
            <br />
            <em>brands</em>
            <br />
            people remember.
          </h1>

          <div className="sb-hero-05__side">
            <p>{description}</p>

            <div className="sb-hero-05__actions">
              <a href={primaryHref}>{primaryLabel} ↗</a>
              <a href={secondaryHref}>{secondaryLabel}</a>
            </div>
          </div>
        </div>

        <div className="sb-hero-05__footer">
          <span>SELECTED CLIENTS</span>
          <div>
            <b>North</b>
            <b>Orra</b>
            <b>Forma</b>
            <b>Vela</b>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero05;