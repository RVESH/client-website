import React, { useState } from "react";
import "./Process.scss";

const STEPS = [
  {
    label: "01",
    title: "Requirement Discussion",
    text: "You share your business details, goals, and website requirements with me.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    label: "02",
    title: "Design & Development",
    text: "I design and build your website with regular updates and feedback rounds.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    label: "03",
    title: "Review & Delivery",
    text: "After your approval, I deploy the website live and provide full support.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
  },
];

const StepCard = ({ step, index }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <article
      className={`process__card${hovered ? " process__card--hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Connector line (between cards) */}
      {index < STEPS.length - 1 && (
        <div className="process__connector" aria-hidden />
      )}

      <div className="process__icon-wrap">
        {step.icon}
      </div>

      <div className="process__badge">{step.label}</div>

      <h3 className="process__title">{step.title}</h3>
      <p className="process__text">{step.text}</p>
    </article>
  );
};

const Process = () => {
  return (
    <section id="process" className="section process">
      <div className="container">

        <header className="section__heading">
          <p className="section__eyebrow">How It Works</p>
          <h2 className="section__title">Simple 3-Step Process</h2>
          <p className="section__text">
            A transparent and easy process for smooth project delivery.
          </p>
        </header>

        <div className="process__grid">
          {STEPS.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;