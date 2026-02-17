import React from "react";
import "./Process.scss";

// ================================
// PROCESS STEPS
// ================================
const STEPS = [
  {
    label: "01",
    title: "Requirement Discussion",
    text: "You share your business details, goals, and website requirements with me.",
  },

  {
    label: "02",
    title: "Design & Development",
    text: "I design and build your website with regular updates and feedback.",
  },

  {
    label: "03",
    title: "Review & Delivery",
    text: "After your approval, I deploy the website and provide full support.",
  },
];

// ================================
// COMPONENT
// ================================
const Process = () => {
  return (
    <section id="process" className="section process">
      <div className="container">

        {/* Header */}
        <header className="section__heading">
          <p className="section__eyebrow">
            How It Works
          </p>

          <h2 className="section__title">
            Simple 3-Step Process
          </h2>

          <p className="section__text">
            A transparent and easy process for smooth project delivery.
          </p>
        </header>

        {/* Steps Grid */}
        <div className="cards-grid process__grid">
          {STEPS.map((step, index) => (
            <article
              key={index}
              className="card process__card"
            >

              <div className="process__badge">
                {step.label}
              </div>

              <h3 className="process__title">
                {step.title}
              </h3>

              <p className="process__text">
                {step.text}
              </p>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;
