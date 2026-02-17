import React from "react";
import "./service.scss";

// ================================
// SERVICES DATA
// ================================
const SERVICES = [
  {
    icon: "🌐",
    title: "Business Website Development",
    text: "Clean, responsive websites for small businesses with contact and WhatsApp integration.",
  },

  {
    icon: "⚛️",
    title: "React Landing Pages",
    text: "Modern one-page landing websites for products, services, and portfolios.",
  },

  {
    icon: "🚀",
    title: "Website Hosting & Deployment",
    text: "Deploy and manage websites on GitHub, Vercel, and Netlify with live links.",
  },

  {
    icon: "🎨",
    title: "UI Design & Customization",
    text: "Simple and attractive designs optimized for speed and user experience.",
  },

  {
    icon: "🔧",
    title: "Website Maintenance",
    text: "Regular updates, bug fixes, and content changes when needed.",
  },

  {
    icon: "📱",
    title: "WhatsApp & Contact Setup",
    text: "Easy customer contact setup with call and WhatsApp buttons.",
  },
];

// ================================
// COMPONENT
// ================================
const Service = () => {
  return (
    <section id="services" className="section services">
      <div className="container">

        {/* Header */}
        <header className="section__heading">
          <p className="section__eyebrow">What I Offer</p>

          <h2 className="section__title">
            My Services
          </h2>

          <p className="section__text">
            Practical and affordable web solutions for small businesses and startups.
          </p>
        </header>

        {/* Services Grid */}
        <div className="cards-grid">
          {SERVICES.map((service, index) => (
            <article
              key={index}
              className="card services__card"
            >

              <div className="services__icon">
                {service.icon}
              </div>

              <h3 className="services__title">
                {service.title}
              </h3>

              <p className="services__text">
                {service.text}
              </p>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Service;
