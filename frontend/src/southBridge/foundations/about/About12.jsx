import "./About12.scss";

function About12({
  eyebrow = "ABOUT US",
  title = "Different perspectives. One clear direction.",
  description =
    "Our team brings strategy, design and technology together to build thoughtful experiences with a point of view.",
  imageMain = "/images/about-12-main.webp",
  imageSmall = "/images/about-12-small.webp",
}) {
  return (
    <section className="sb-about-12" aria-labelledby="about-12-title">
      <div className="sb-about-12__container">
        <div className="sb-about-12__intro">
          <span>{eyebrow}</span>
          <h2 id="about-12-title">{title}</h2>
        </div>

        <div className="sb-about-12__grid">
          <div className="sb-about-12__large">
            <img src={imageMain} alt="Team collaboration" />
          </div>

          <div className="sb-about-12__small">
            <img src={imageSmall} alt="Creative detail" />
          </div>

          <div className="sb-about-12__statement">
            <span>12 / 12</span>
            <p>{description}</p>
          </div>

          <div className="sb-about-12__principle">
            <small>OUR PRINCIPLE</small>
            <strong>Make the complex feel simple.</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About12;