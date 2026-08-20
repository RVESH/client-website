import "./About07.scss";

function About07({
  eyebrow = "OUR BELIEF",
  title = "Good work should feel inevitable.",
  description =
    "We reduce complexity, sharpen the idea and let the final experience speak without unnecessary noise.",
  image = "/images/about-07.webp",
}) {
  return (
    <section className="sb-about-07" aria-labelledby="about-07-title">
      <div className="sb-about-07__image">
        <img src={image} alt="Creative studio detail" />
      </div>

      <div className="sb-about-07__overlay" />

      <div className="sb-about-07__content">
        <span>{eyebrow}</span>
        <h2 id="about-07-title">{title}</h2>
        <p>{description}</p>

        <div className="sb-about-07__footer">
          <span>07 / 12</span>
          <span>Built with intent.</span>
        </div>
      </div>
    </section>
  );
}

export default About07;