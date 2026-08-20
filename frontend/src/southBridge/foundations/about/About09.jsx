import "./About09.scss";

function About09({
  eyebrow = "THE STUDIO",
  title = "Strategy meets imagination.",
  description =
    "We work across identity, digital and experience to turn complicated ideas into simple, memorable systems.",
  image = "/images/about-09.webp",
}) {
  return (
    <section className="sb-about-09" aria-labelledby="about-09-title">
      <div className="sb-about-09__container">
        <div className="sb-about-09__intro">
          <span>{eyebrow}</span>
          <h2 id="about-09-title">{title}</h2>
        </div>

        <div className="sb-about-09__grid">
          <div className="sb-about-09__copy">
            <p>{description}</p>

            <div className="sb-about-09__list">
              <span>01</span>
              <strong>Strategy</strong>
              <span>02</span>
              <strong>Identity</strong>
              <span>03</span>
              <strong>Digital</strong>
            </div>
          </div>

          <div className="sb-about-09__image">
            <img src={image} alt="Creative studio" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About09;