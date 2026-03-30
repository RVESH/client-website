import React, { useState } from "react";
import "./Portfolio.scss";

const PROJECTS = [
  {
    title: "Business Website Demo",
    tag: "HTML / CSS / Responsive",
    text: "Clean and fast website for small businesses with contact form and WhatsApp integration.",
    link: "#",
    accent: "#2563eb",
    bg: "linear-gradient(135deg,#eff6ff,#dbeafe)",
    icon: <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18M9 21V9"/></svg>,
  },
  {
    title: "Personal Portfolio Website",
    tag: "React / GitHub Pages",
    text: "One-page portfolio with animated sections, project showcase and contact form.",
    link: "#",
    accent: "#0ea5e9",
    bg: "linear-gradient(135deg,#f0f9ff,#e0f2fe)",
    icon: <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>,
  },
  {
    title: "Landing Page Design",
    tag: "React / UI Design",
    text: "Modern landing page with optimized layout, hero section and CTA designed to convert visitors.",
    link: "#",
    accent: "#6366f1",
    bg: "linear-gradient(135deg,#eef2ff,#e0e7ff)",
    icon: <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
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
        <div className="port__thumb-icon" style={{ color: project.accent }}>{project.icon}</div>
      </div>
      <div className="port__body">
        <span className="port__tag">{project.tag}</span>
        <h3 className="port__title">{project.title}</h3>
        <p className="port__text">{project.text}</p>
        <a href={project.link} className="port__link" target="_blank" rel="noopener noreferrer">
          View Project
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden>
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
        <header className="sh">
          <p className="sh__pill">My Work</p>
          <h2 className="sh__title">Selected Projects</h2>
          <p className="sh__sub">Sample websites and demo projects showcasing what I build for clients.</p>
        </header>
        <div className="port__grid">
          {PROJECTS.map((p, i) => <PortCard key={i} project={p} />)}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;