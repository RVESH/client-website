import React, { useState } from "react";
import "./Process.scss";

const STEPS = [
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    label: "Step 01",
    title: "Discussion",
    text: "You share your business goals and requirements. I ask the right questions to understand exactly what you need.",
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    label: "Step 02",
    title: "Development",
    text: "I design and build your website with regular updates. You can give feedback at every stage until it's perfect.",
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
    label: "Step 03",
    title: "Delivery",
    text: "After your approval, I deploy the site live with full handover. You get 100% ownership and ongoing support.",
  },
];

const StepCard = ({ step, isLast }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <article
      className={`proc__card${hovered ? " proc__card--hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="proc__icon-wrap">{step.icon}</div>
      {!isLast && <div className="proc__connector" aria-hidden />}
      <span className="proc__num">{step.label}</span>
      <h3 className="proc__title">{step.title}</h3>
      <p className="proc__text">{step.text}</p>
    </article>
  );
};

const Process = () => {
  return (
    <section id="process" className="section process">
      <div className="container">
        <header className="sh">
          <p className="sh__pill">How It Works</p>
          <h2 className="sh__title">Simple 3-Step Process</h2>
          <p className="sh__sub">A clear, transparent process so you always know what's happening.</p>
        </header>
        <div className="proc__grid">
          {STEPS.map((step, i) => <StepCard key={i} step={step} isLast={i === STEPS.length - 1} />)}
        </div>
      </div>
    </section>
  );
};

export default Process;