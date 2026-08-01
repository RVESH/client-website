import React, { useState } from "react";
import "./service.scss";

const SERVICES = [
  { icon: "🌐", title: "Business Website",      text: "Professional website for your business to attract more customers and build online credibility.", highlight: "Best for shops & startups" },
  { icon: "⚛️", title: "React Landing Page",    text: "Modern one-page website with smooth UI and blazing-fast performance.",                         highlight: "High conversion design" },
  { icon: "🚀", title: "Deployment Setup",       text: "Get your website live with domain connection, hosting setup and speed optimization.",           highlight: "Live in 24–48 hours" },
  { icon: "🎨", title: "UI Design",              text: "Clean and attractive design focused on user experience and visual hierarchy.",                   highlight: "Modern look" },
  { icon: "🔧", title: "Maintenance & Updates",  text: "Fix bugs, update content and keep your website running smoothly long-term.",                    highlight: "Ongoing support" },
  { icon: "📱", title: "WhatsApp Integration",   text: "Direct customer contact with WhatsApp & call buttons to boost your leads instantly.",           highlight: "Boost leads" },
];

const ServiceCard = ({ service }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <article
      className={`svc__card${hovered ? " svc__card--hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="svc__icon-wrap">
        <span className="svc__icon">{service.icon}</span>
      </div>
      <h3 className="svc__title">{service.title}</h3>
      <p className="svc__text">{service.text}</p>
      <span className="svc__badge">{service.highlight}</span>
    </article>
  );
};

const Service = () => {
  const duplicated = [...SERVICES, ...SERVICES];

  return (
    <section id="services" className="section services">
      <div className="container">
        <header className="sh">
          <p className="sh__pill">What I Offer</p>
          <h2 className="sh__title">Services That Help You Grow</h2>
          <p className="sh__sub">Simple, affordable and result-focused websites for your business.</p>
        </header>

<div className="svc__track-wrap">
  <div className="svc__grid">
    {duplicated.map((service, index) => (
      <ServiceCard
        key={index}
        service={service}
      />
    ))}
  </div>
</div>
        <div className="svc__trust">
          <span>✔ 10+ Demo Projects</span>
          <span className="svc__trust-dot" />
          <span>✔ Fast Delivery</span>
          <span className="svc__trust-dot" />
          <span>✔ Affordable Pricing</span>
        </div>
      </div>
    </section>
  );
};

export default Service;