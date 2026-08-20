import "./About04.scss";

function About04({
  eyebrow = "OUR APPROACH",
  title = "A team that likes getting into the details.",
  description =
    "We combine strategy, craft and technology to make work that feels clear, useful and distinctly human.",
  mainImage = "/images/about-04-main.webp",
  secondaryImage = "/images/about-04-small.webp",
}) {
  return (
    <section className="sb-about-04" aria-labelledby="about-04-title">
      <div className="sb-about-04__container">
        <div className="sb-about-04__copy">
          <span>{eyebrow}</span>
          <h2 id="about-04-title">{title}</h2>
          <p>{description}</p>

          <div className="sb-about-04__numbers">
            <div>
              <strong>12+</strong>
              <span>Years of practice</span>
            </div>

            <div>
              <strong>48</strong>
              <span>Projects launched</span>
            </div>
          </div>
        </div>

        <div className="sb-about-04__visual">
          <div className="sb-about-04__main">
            <img src={mainImage} alt="Our workspace" />
          </div>

          <div className="sb-about-04__small">
            <img src={secondaryImage} alt="Creative detail" />
          </div>

          <span className="sb-about-04__mark">04 / 12</span>
        </div>
      </div>
    </section>
  );
}

export default About04;