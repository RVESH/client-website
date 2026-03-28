import React, { useState } from "react";
import "./WhyChoose.scss";

const POINTS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: "On-Time Delivery",
    text: "Small number of projects at a time so deadlines are realistic and always met.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: "Clear Communication",
    text: "Frequent updates, Loom walkthroughs if needed and async-friendly workflow.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: "Developer + Designer",
    text: "Clean UI, thoughtful UX and production-ready code delivered by one person.",
  },
];

const WhyCard = ({ item }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <article
      className={`why__card${hovered ? " why__card--hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="why__icon">{item.icon}</div>
      <h3 className="why__title">{item.title}</h3>
      <p className="why__text">{item.text}</p>
    </article>
  );
};

const WhyChoose = () => {
  return (
    <section id="why" className="section why">
      <div className="container">

        <header className="section__heading">
          <p className="section__eyebrow">Why Work With Me</p>
          <h2 className="section__title">Not Just Another Portfolio</h2>
          <p className="section__text">
            You get a partner who understands business goals, not just
            someone pushing pixels and writing code.
          </p>
        </header>

        <div className="why__grid">
          {POINTS.map((item, index) => (
            <WhyCard key={index} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;