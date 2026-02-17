import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container hero__inner">

        <div className="hero__content">

          <p className="hero__eyebrow">
            Freelance Web Developer
          </p>

          <h1 className="hero__title">
            Clean, Fast & Affordable Websites
            <br />
            For Your Business
          </h1>

          <p className="hero__subtitle">
            I help small businesses and individuals build modern,
            responsive websites that attract more customers.
          </p>

          <div className="hero__actions">

            <a
              href="#contact"
              className="btn btn--primary"
            >
              Get Free Consultation
            </a>

            <a
              href="#portfolio"
              className="btn btn--ghost"
            >
              View My Work
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
