import React from "react";
import "./WhyChoose.scss";

const POINTS = [
  {
    title: "Developer + designer mindset",
    text: "Clean UI, thoughtful UX and production‑ready code in one person.",
  },
  {
    title: "Clear communication",
    text: "Frequent updates, Loom walkthroughs if needed and async‑friendly.",
  },
  {
    title: "On‑time delivery",
    text: "Small number of projects at a time so deadlines are realistic.",
  },
];

const WhyChoose = () => {
  return (
    <section id="why" className="section why">
      <div className="container">
        <header className="section__heading">
          <p className="section__eyebrow">Why work with me</p>
          <h2 className="section__title">Not just another portfolio</h2>
          <p className="section__text">
            You get a partner who understands business goals, not just someone
            pushing pixels and writing code.
          </p>
        </header>

        <div className="cards-grid">
          {POINTS.map((item) => (
            <article key={item.title} className="card why__card">
              <h3 className="why__title">{item.title}</h3>
              <p className="why__text">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
