// src/sections/Process/Process.jsx

import "./Process.scss";

const steps = [
  ["01", "Arrive", "Settle in. We have the rest covered."],
  ["02", "Gather", "A menu shaped by what is best today."],
  ["03", "Stay", "Take your time. There is nowhere else to be."],
];

function Process() {
  return (
    <section className="process section">
      <div className="page-shell">
        <div className="process__intro">
          <span className="eyebrow">THE EXPERIENCE</span>
          <h2 className="section-title">
            An evening with its own rhythm.
          </h2>
        </div>

        <div className="process__grid">
          {steps.map(([number, title, description]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;