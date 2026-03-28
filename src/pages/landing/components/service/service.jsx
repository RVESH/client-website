import React, { useState } from "react";
import "./service.scss";

const SERVICES = [
  {
    icon: "🌐",
    title: "Business Website",
    text: "Professional website for your business to attract more customers.",
    highlight: "Best for shops & startups",
  },
  {
    icon: "⚛️",
    title: "React Landing Page",
    text: "Modern one-page website with smooth UI and fast performance.",
    highlight: "High conversion design",
  },
  {
    icon: "🚀",
    title: "Deployment Setup",
    text: "Get your website live with domain, hosting, and fast loading speed.",
    highlight: "Live in 24–48 hours",
  },
  {
    icon: "🎨",
    title: "UI Design",
    text: "Clean and attractive design focused on user experience.",
    highlight: "Modern look",
  },
  {
    icon: "🔧",
    title: "Maintenance",
    text: "Fix bugs, update content and keep your website running smoothly.",
    highlight: "Ongoing support",
  },
  {
    icon: "📱",
    title: "WhatsApp Integration",
    text: "Direct customer contact with WhatsApp & call buttons.",
    highlight: "Boost leads",
  },
];

const ServiceCard = ({ service }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className={`services__card${hovered ? " services__card--hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="services__icon-wrap">
        <span className="services__icon">{service.icon}</span>
      </div>
      <h3 className="services__title">{service.title}</h3>
      <p className="services__text">{service.text}</p>
      <span className="services__badge">{service.highlight}</span>
    </article>
  );
};

const Service = () => {
  return (
    <section id="services" className="section services">
      <div className="container">

        <header className="section__heading">
          <p className="section__eyebrow">What I Offer</p>
          <h2 className="section__title">Services That Help You Grow</h2>
          <p className="section__text">
            Simple, affordable and result-focused websites for your business.
          </p>
          <div className="services__trust">
            <span>✔ 10+ Demo Projects</span>
            <span className="services__trust-dot" />
            <span>✔ Fast Delivery</span>
            <span className="services__trust-dot" />
            <span>✔ Affordable Pricing</span>
          </div>
        </header>

        <div className="services__grid">
          {SERVICES.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Service;