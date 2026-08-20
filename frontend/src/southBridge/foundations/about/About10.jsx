import "./About10.scss";

function About10({
  eyebrow = "WHO WE ARE",
  title = "Experience matters when the decisions matter.",
  description =
    "We partner with leadership teams on complex transformation, combining strategic thinking with practical execution.",
  image = "/images/about-10.webp",
}) {
  return (
    <section className="sb-about-10" aria-labelledby="about-10-title">
      <div className="sb-about-10__container">
        <div className="sb-about-10__heading">
          <div>
            <span>{eyebrow}</span>
            <h2 id="about-10-title">{title}</h2>
          </div>

          <p>{description}</p>
        </div>

        <div className="sb-about-10__body">
          <div className="sb-about-10__image">
            <img src={image} alt="Professional team meeting" />
          </div>

          <div className="sb-about-10__facts">
            <div>
              <strong>15+</strong>
              <span>Years of experience</span>
            </div>

            <div>
              <strong>30</strong>
              <span>Markets reached</span>
            </div>

            <div>
              <strong>92%</strong>
              <span>Client retention</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About10;