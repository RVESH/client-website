import React, { useState } from "react";
import "./skill.scss";

const SKILLS = [
  {
    icon: "💻",
    title: "Frontend Development",
    lines: [
      "Clean and well-structured HTML pages.",
      "Modern CSS styling and UI layout.",
      "Responsive one-page business websites.",
    ],
    note: "Professional static websites.",
  },
  {
    icon: "⚛️",
    title: "React Development",
    lines: [
      "React project setup and structure.",
      "Reusable components and JSX.",
      "Single-page landing websites.",
    ],
    note: "Ideal for simple web apps.",
  },
  {
    icon: "🌐",
    title: "Deployment & Hosting",
    lines: [
      "Deploy on GitHub Pages, Vercel, Netlify.",
      "Custom domain connection.",
      "Stable and secure live website links.",
    ],
    note: "Website ready to go live.",
  },
  {
    icon: "🔧",
    title: "Project Setup & Management",
    lines: [
      "Clean folder structure.",
      "File organization and maintenance.",
      "Bug fixing with AI assistance.",
    ],
    note: "Easy-to-manage projects.",
  },
  {
    icon: "📱",
    title: "Business Website Solutions",
    lines: [
      "Small business websites.",
      "WhatsApp and contact integration.",
      "Personal portfolio websites.",
    ],
    note: "Perfect for local businesses.",
  },
  {
    icon: "🤖",
    title: "AI-Assisted Development",
    lines: [
      "AI-powered research and planning.",
      "Smart code optimization.",
      "Modern layout and design ideas.",
    ],
    note: "Fast and efficient delivery.",
  },
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
      className={`skills__card${hovered ? " skills__card--hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="skills__icon">{item.icon}</div>
      <h3 className="skills__title">{item.title}</h3>
      <ul className="skills__list">
        {item.lines.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>
      <p className="skills__note">{item.note}</p>
    </article>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section skills">
      <div className="container">

        <header className="section__heading">
          <p className="section__eyebrow">My Skillset</p>
          <h2 className="section__title">What I Can Do For You</h2>
          <p className="section__text">
            Practical and reliable skills that I confidently deliver.
          </p>
        </header>

        <div className="skills__grid">
          {SKILLS.map((item, index) => (
            <SkillCard key={index} item={item} />
          ))}
        </div>

        {/* Learning section */}
        <div className="skills__learning">
          <div className="skills__learning-inner">
            <div className="skills__learning-header">
              <span className="skills__learning-badge">🚧 Currently Learning</span>
              <h3 className="skills__learning-title">Not Offered Yet</h3>
            </div>
            <ul className="skills__learning-list">
              {LEARNING.map((item, index) => (
                <li key={index}>
                  <span className="skills__learning-dot" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;