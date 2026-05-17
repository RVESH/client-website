import React, { useState } from "react";
import "./skill.scss";

const SKILLS = [
  { icon: "💻", title: "Frontend Development",       lines: ["Clean and well-structured HTML pages.", "Modern CSS styling and UI layout.", "Responsive one-page business websites."],  note: "Professional static websites." },
  { icon: "⚛️", title: "React Development",          lines: ["React project setup and structure.", "Reusable components and JSX.", "Single-page landing websites."],               note: "Ideal for simple web apps." },
  { icon: "🌐", title: "Deployment & Hosting",        lines: ["Deploy on GitHub Pages, Vercel, Netlify.", "Custom domain connection.", "Stable and secure live website links."],    note: "Website ready to go live." },
  { icon: "🔧", title: "Project Setup & Management",  lines: ["Clean folder structure.", "File organization and maintenance.", "Bug fixing with AI assistance."],                 note: "Easy-to-manage projects." },
  { icon: "📱", title: "Business Website Solutions",  lines: ["Small business websites.", "WhatsApp and contact integration.", "Personal portfolio websites."],                    note: "Perfect for local businesses." },
  { icon: "🤖", title: "AI-Assisted Development",     lines: ["AI-powered research and planning.", "Smart code optimization.", "Modern layout and design ideas."],                 note: "Fast and efficient delivery." },
];

const LEARNING = [
  "Backend Development (Node.js, Database)",
  "Online Payment Integration",
  "Advanced Admin Dashboards",
  "Advanced SEO Optimization",
];

const SkillCard = ({ item }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <article
      className={`skill__card${hovered ? " skill__card--hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="skill__icon">{item.icon}</div>
      <h3 className="skill__title">{item.title}</h3>
      <ul className="skill__list">
        {item.lines.map((l, i) => <li key={i}>{l}</li>)}
      </ul>
      <p className="skill__note">{item.note}</p>
    </article>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <header className="sh">
          <p className="sh__pill">My Skillset</p>
          <h2 className="sh__title">What I Can Do For You</h2>
          <p className="sh__sub">Practical and reliable skills that I confidently deliver.</p>
        </header>

        <div className="skill__grid">
          {SKILLS.map((item, i) => <SkillCard key={i} item={item} />)}
        </div>

        <div className="skill__learning">
          <div className="skill__learning-header">
            <span className="skill__learning-badge">🚧 Currently Learning</span>
            <h3 className="skill__learning-title">Not Offered Yet</h3>
          </div>
          <ul className="skill__learning-list">
            {LEARNING.map((item, i) => (
              <li key={i}><span className="skill__learning-dot" />{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;