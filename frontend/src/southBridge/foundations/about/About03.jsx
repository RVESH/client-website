import "./About03.scss";

function About03({
  eyebrow = "WHO WE ARE",
  title = "Ideas first. Execution with intention.",
  description =
    "From first sketch to final detail, we stay close to the work and closer to the people it serves.",
  image = "/images/about-03.webp",
}) {
  return (
    <section className="sb-about-03" aria-labelledby="about-03-title">
      <div className="sb-about-03__container">
        <div className="sb-about-03__top">
          <span>{eyebrow}</span>
          <span>03—12</span>
        </div>

        <h2 id="about-03-title">
          Ideas first.
          <br />
          <em>Execution</em>
          <br />
          with intention.
        </h2>

        <div className="sb-about-03__bottom">
          <div className="sb-about-03__image">
            <img src={image} alt="Creative process" />
          </div>

          <div className="sb-about-03__copy">
            <p>{description}</p>
            <a href="#about-more">Read more ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About03;