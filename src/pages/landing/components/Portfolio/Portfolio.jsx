import React from "react";
import "./Portfolio.scss";

const PROJECTS = [
  {
    title: "Business Website Demo",
    tag: "HTML / CSS / Responsive",
    text: "Clean and fast website for small businesses with contact and WhatsApp integration.",
    link: "#",
  },

  {
    title: "Personal Portfolio Website",
    tag: "React / GitHub Pages",
    text: "One-page portfolio website to showcase skills and projects.",
    link: "#",
  },

  {
    title: "Landing Page Design",
    tag: "React / UI Design",
    text: "Modern landing page with optimized layout and call-to-action sections.",
    link: "#",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section portfolio">
      <div className="container">

        {/* Header */}
        <header className="section__heading">
          <p className="section__eyebrow">My Work</p>

          <h2 className="section__title">
            Selected Projects
          </h2>

          <p className="section__text">
            Sample projects and demo websites showcasing my development skills.
          </p>
        </header>

        {/* Cards */}
        <div className="cards-grid">
          {PROJECTS.map((project, index) => (
            <article
              key={index}
              className="card portfolio__card"
            >
              <div className="portfolio__thumb" />

              <div className="portfolio__body">

                <p className="portfolio__tag">
                  {project.tag}
                </p>

                <h3 className="portfolio__title">
                  {project.title}
                </h3>

                <p className="portfolio__text">
                  {project.text}
                </p>

                <a
                  href={project.link}
                  className="portfolio__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
