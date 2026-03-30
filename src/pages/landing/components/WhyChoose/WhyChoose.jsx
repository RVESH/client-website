import React, { useState } from "react";
import "./WhyChoose.scss";

const POINTS = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    title: "On-Time Delivery",
    text: "Your website delivered in 48 hours. I take on fewer projects so every deadline is met — always.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    title: "Direct Communication",
    text: "Talk directly to me — no middlemen. WhatsApp, email or video call. Regular progress updates guaranteed.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
    title: "Affordable Pricing",
    text: "Premium quality at honest pricing. No hidden fees, no agency markup. Just real value for your business.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
    title: "Developer + Designer",
    text: "Beautiful UI, smooth UX and clean production code — all from one person who cares about your results.",
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
      <div className="why__body">
        <h3 className="why__title">{item.title}</h3>
        <p className="why__text">{item.text}</p>
      </div>
    </article>
  );
};

const WhyChoose = () => {
  return (
    <section id="why" className="section why">
      <div className="container">
        <header className="sh">
          <p className="sh__pill">Why Work With Me</p>
          <h2 className="sh__title">Not Just Another Portfolio</h2>
          <p className="sh__sub">You get a partner who understands business goals, not just someone pushing pixels.</p>
        </header>
        <div className="why__grid">
          {POINTS.map((item, i) => <WhyCard key={i} item={item} />)}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;