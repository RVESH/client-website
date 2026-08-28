// src/sections/About/About.jsx

import "./About.scss";

function About() {
  return (
    <section className="about section">
      <div className="page-shell about__grid">
        <div>
          <span className="eyebrow">THE HOUSE</span>
          <h2 className="section-title">
            A dining room built around the season.
          </h2>
        </div>

        <div className="about__copy">
          <p className="section-copy">
            LUMA is a neighbourhood restaurant shaped by local
            produce, patient techniques and the simple pleasure
            of sitting around a table together.
          </p>

          <p className="section-copy">
            Our menu changes often. The mood stays warm,
            intimate and unhurried.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;