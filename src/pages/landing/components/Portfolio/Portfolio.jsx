import React, { useState } from "react";
import "./Portfolio.scss";

const PROJECTS = [
  {
    title: "Business Website Demo",
    tag: "HTML / CSS / Responsive",
    text: "Clean and fast website for small businesses with contact and WhatsApp integration.",
    link: "#",
    color: "#3b82f6",
  },
  {
    title: "Personal Portfolio Website",
    tag: "React / GitHub Pages",
    text: "One-page portfolio website to showcase skills and projects.",
    link: "#",
    color: "#6366f1",
  },
  {
    title: "Landing Page Design",
    tag: "React / UI Design",
    text: "Modern landing page with optimized layout and call-to-action sections.",
    link: "#",
    color: "#0ea5e9",
  },
];

const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className={`portfolio__card${hovered ? " portfolio__card--hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="portfolio__thumb" style={{ background: `linear-gradient(135deg, ${project.color}18 0%, ${project.color}30 100%)` }}>
        <div className="portfolio__thumb-icon" style={{ color: project.color }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="3"/>
            <path d="M3 9h18M9 21V9"/>
          </svg>
        </div>
      </div>

      <div className="portfolio__body">
        <span className="portfolio__tag">{project.tag}</span>
        <h3 className="portfolio__title">{project.title}</h3>
        <p className="portfolio__text">{project.text}</p>

        <a href={project.link} className="portfolio__link" target="_blank" rel="noopener noreferrer">
          <span>View Project</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </article>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="section portfolio">
      <div className="container">

        <header className="section__heading">
          <p className="section__eyebrow">My Work</p>
          <h2 className="section__title">Selected Projects</h2>
          <p className="section__text">
            Sample projects and demo websites showcasing my development skills.
          </p>
        </header>

        <div className="portfolio__grid">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;