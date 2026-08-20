import "./About05.scss";

function About05({
  eyebrow = "THE NUMBERS BEHIND THE WORK",
  title = "Small team. Serious attention.",
  description =
    "We stay deliberately focused so every project receives the senior thinking, craft and care it deserves.",
  image = "/images/about-05.webp",
}) {
  return (
    <section className="sb-about-05" aria-labelledby="about-05-title">
      <div className="sb-about-05__container">
        <div className="sb-about-05__header">
          <div>
            <span>{eyebrow}</span>
            <h2 id="about-05-title">{title}</h2>
          </div>

          <p>{description}</p>
        </div>

        <div className="sb-about-05__grid">
          <div className="sb-about-05__image">
            <img src={image} alt="Team collaboration" />
          </div>

          <div className="sb-about-05__stats">
            <div>
              <strong>12</strong>
              <span>Years of experience</span>
            </div>

            <div>
              <strong>48</strong>
              <span>Projects delivered</span>
            </div>

            <div>
              <strong>19</strong>
              <span>Industries served</span>
            </div>

            <div>
              <strong>96%</strong>
              <span>Returning clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About05;