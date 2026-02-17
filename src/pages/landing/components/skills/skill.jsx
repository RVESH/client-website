// src/pages/landing/components/Skills/Skills.jsx
import React from "react";
import "./skill.scss"; // Must match exact filename

// ================================
// SKILLS DATA
// ================================
const SKILLS = [
  {
    tag: "💻",
    title: "Frontend Development",
    lines: [
      "Clean and well-structured HTML pages.",
      "Modern CSS styling and UI layout.",
      "Responsive one-page business websites."
    ],
    note: "Professional static websites."
  },

  {
    tag: "⚛️",
    title: "React Development (Basic)",
    lines: [
      "React project setup and structure.",
      "Reusable components and JSX.",
      "Single-page landing websites."
    ],
    note: "Ideal for simple web apps."
  },

  {
    tag: "🌐",
    title: "Deployment & Hosting",
    lines: [
      "Deploy on GitHub Pages, Vercel, and Netlify.",
      "Custom domain connection.",
      "Stable and secure live website links."
    ],
    note: "Website ready to go live."
  },

  {
    tag: "🔧",
    title: "Project Setup & Management",
    lines: [
      "Clean folder structure.",
      "File organization and maintenance.",
      "Bug fixing with AI assistance."
    ],
    note: "Easy-to-manage projects."
  },

  {
    tag: "📱",
    title: "Business Website Solutions",
    lines: [
      "Small business websites.",
      "WhatsApp and contact integration.",
      "Personal portfolio websites."
    ],
    note: "Perfect for local businesses."
  },

  {
    tag: "🤖",
    title: "AI-Assisted Development",
    lines: [
      "AI-powered research and planning.",
      "Smart code optimization.",
      "Modern layout and design ideas."
    ],
    note: "Fast and efficient delivery."
  }
];

// ================================
// LEARNING (NOT OFFERING)
// ================================
const LEARNING = [
  "Backend Development (Node.js, Database)",
  "Online Payment Integration",
  "Advanced Admin Dashboards",
  "Advanced SEO Optimization"
];

// ================================
// COMPONENT
// ================================
const Skills = () => {
  return (
    <section id="skills" className="section skills">
      <div className="container">

        {/* Header */}
        <header className="section__heading">
          <p className="section__eyebrow">My Skillset</p>

          <h2 className="section__title">
            What I Can Do For You
          </h2>

          <p className="section__text">
            Practical and reliable skills that I confidently deliver.
          </p>
        </header>

        {/* Skills Grid */}
        <div className="skills__grid">
          {SKILLS.map((item, index) => (
            <article
              key={index}
              className="card skills__card"
            >
              <div className="skills__tag">
                {item.tag}
              </div>

              <h3 className="skills__title">
                {item.title}
              </h3>

              <ul className="skills__list">
                {item.lines.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>

              <p className="skills__note">
                {item.note}
              </p>
            </article>
          ))}
        </div>

        {/* Learning Section */}
        <div className="skills__learning">
          <div className="skills__learning-inner">

            <p className="skills__learning-label">
              Currently Learning
            </p>

            <h3 className="skills__learning-title">
              Not Offered Yet
            </h3>

            <ul className="skills__learning-list">
              {LEARNING.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
