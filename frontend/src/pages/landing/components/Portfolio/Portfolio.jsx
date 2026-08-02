import React, { useState } from "react";
import "./Portfolio.scss";

const PROJECTS = [
  {
    title: "Business Website Demo",
    tag: "HTML / CSS / Responsive",
    text: "Clean and fast website for small businesses with contact form and WhatsApp integration.",
    link: "#",
    bg: "linear-gradient(145deg, #f0ebe3 0%, #e5ddd2 100%)",
    // icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M3 9h18M9 21V9"/></svg>,
  },
  {
    
    title: "Personal Portfolio Website",
    tag: "React / GitHub Pages",
    text: "One-page portfolio with animated sections, project showcase and contact form.",
    link: "#",
    bg: "linear-gradient(145deg, #e8e2d8 0%, #ddd5c8 100%)",
    // icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>,
  },
  {
    title: "Landing Page Design",
    tag: "React / UI Design",
    text: "Modern landing page with optimized layout, hero section and CTA designed to convert visitors.",
    link: "#",
    bg: "linear-gradient(145deg, #e5ddd2 0%, #d9d0c2 100%)",
    // icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="3"/><path d="M8 21h8M12 17v4"/></svg>,
  },
];

const PortCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <article
      className={`port__card${hovered ? " port__card--hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="port__thumb" style={{ background: project.bg }}>
        <div className="port__thumb-icon">{project.icon}</div>
      </div>
      <div className="port__body">
        <span className="port__tag">{project.tag}</span>
        <h3 className="port__title">{project.title}</h3>
        <p className="port__text">{project.text}</p>
        <a href={project.link} className="port__link" target="_blank" rel="noopener noreferrer">
          View Project
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
        <header className="sh">
          <p className="sh__pill">Our Work</p>
          <h2 className="sh__title">Websites That <span>Sell</span></h2>
          <p className="sh__sub">Hand-crafted demos and live projects built for real businesses.</p>
        </header>
        <div className="port__grid">
          {PROJECTS.map((p, i) => <PortCard key={i} project={p} />)}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;