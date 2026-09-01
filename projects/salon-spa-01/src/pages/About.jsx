import "./About.scss";
import site from "../data/site";
import CTA from "../sections/CTA.jsx";

function About() {
  const { about } = site;

  return (
    <>
      <section className="section page-banner">
        <div className="container">
          <span className="eyebrow">Our story</span>
          <h1>{about.heading}</h1>
          <p className="section-sub">{about.intro}</p>
        </div>
      </section>

      <section className="section about-story">
        <div className="container about-story__row">
          <div className="about-story__media">
            <img src={about.image} alt="Founder at work in the studio" />
          </div>
          <div className="about-story__text">
            {about.body.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-values">
        <div className="container">
          <div className="about-values__grid">
            {about.values.map((v) => (
              <div className="about-values__item" key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

export default About;
