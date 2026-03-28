import React from "react";
import "./Hero.scss";
// import  contact from "./Contact/Contact.jsx";
const handleScrollToContact = () => {
  const el = document.getElementById("contact");
  if (el) {
    window.scrollTo({
      top: el.offsetTop - 70,
      behavior: "smooth",
    });
  }
};
const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container hero__inner">

        <div className="hero__content">

          <p className="hero__eyebrow">
               Freelance React Web Developer
          </p>

          <h1 className="hero__title">
            Get a Modern Website That Brings You More Customers
          </h1>

          <p className="hero__subtitle">
            I build fast, responsive and professional websites for small businesses, 
            startups and personal brands — so you can grow online without stress.
          </p>

          <div className="hero__actions">

            {/* PRIMARY CTA (MOST IMPORTANT) */}
            <button
              onClick={handleScrollToContact}
              className="btn btn--primary"
            >
              💬 Get Your Website Now
            </button>

            {/* SECONDARY CTA */}
            <a
              href="#portfolio"
              className="btn btn--ghost"
            >
              View My Work
            </a>

          </div>

          {/* TRUST LINE */}
          <p className="hero__trust">
            ⚡ Fast Delivery • 💰 Affordable • 📱 100% Responsive
          </p>

        </div>

      </div>
    </section>
  );
};

export default Hero;