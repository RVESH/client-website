import { site } from "../../data/site";
import { images } from "../../data/images";
import { team } from "../../data/team";
import CTA from "../../sections/CTA/CTA.jsx";
import "./About.scss";

export default function About() {
  const { story, approach, values, credentials, team: teamCopy } = site.about;

  return (
    <>
      <section className="section about-story">
        <div className="container about-story__grid">
          <div className="about-story__content">
            <span className="eyebrow">{story.eyebrow}</span>
            <h1 className="about-story__heading">{story.heading}</h1>
            {story.paragraphs.map((p) => (
              <p key={p.slice(0, 20)} className="about-story__paragraph">
                {p}
              </p>
            ))}
          </div>
          <div className="about-story__figure">
            <img src={images.aboutStory.src} alt={images.aboutStory.alt} />
          </div>
        </div>
      </section>

      <section className="section section--tight about-approach">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">{approach.eyebrow}</span>
              <h2 className="section-head__title">{approach.heading}</h2>
            </div>
          </div>
          <div className="about-approach__grid">
            {approach.items.map((item) => (
              <div className="about-approach__item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark about-values">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">{values.eyebrow}</span>
              <h2 className="section-head__title">{values.heading}</h2>
            </div>
          </div>
          <div className="about-values__grid">
            {values.items.map((item) => (
              <div className="about-values__item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-team">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">{teamCopy.eyebrow}</span>
              <h2 className="section-head__title">{teamCopy.heading}</h2>
            </div>
          </div>
          <div className="about-team__grid">
            {team.map((member) => (
              <div className="about-team__card" key={member.id}>
                <div className="about-team__photo">
                  <img src={member.image.src} alt={member.image.alt} loading="lazy" />
                </div>
                <h3>{member.name}</h3>
                <p className="about-team__role">{member.role}</p>
                <dl className="about-team__meta">
                  <div>
                    <dt>Focus</dt>
                    <dd>{member.specialisation}</dd>
                  </div>
                  <div>
                    <dt>Experience</dt>
                    <dd>{member.experience}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-credentials">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">{credentials.eyebrow}</span>
              <h2 className="section-head__title">{credentials.heading}</h2>
            </div>
          </div>
          <ul className="about-credentials__list">
            {credentials.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <CTA />
    </>
  );
}
