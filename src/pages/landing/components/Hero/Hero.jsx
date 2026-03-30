import React from "react";
import "./Hero.scss";

const handleScrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 68, behavior: "smooth" });
};

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero__overlay" aria-hidden />

      <div className="container hero__inner">

        {/* Left: Content */}
        <div className="hero__content">
          <span className="hero__pill">
            <span className="hero__pill-dot" />
            Freelance React Web Developer
          </span>

          <h1 className="hero__title">
            Get a High-Converting Website That{" "}
            <span className="hero__title-hl">Brings You More Customers</span>
          </h1>

          <p className="hero__sub">
            I build fast, responsive and professional websites for small
            businesses, startups and personal brands — ready to go live
            in 48 hours.
          </p>

          <div className="hero__actions">
            <button className="hero__btn hero__btn--primary" onClick={() => handleScrollTo("contact")}>
              Get Your Website in 48 Hours
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="hero__btn hero__btn--glass" onClick={() => handleScrollTo("portfolio")}>
              View My Work
            </button>
          </div>

          <div className="hero__trust">
            <span className="hero__trust-item">
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden><polyline points="2 8 6 12 14 4" stroke="#22c55e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Fast Delivery
            </span>
            <span className="hero__trust-sep" />
            <span className="hero__trust-item">
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden><polyline points="2 8 6 12 14 4" stroke="#22c55e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Affordable Price
            </span>
            <span className="hero__trust-sep" />
            <span className="hero__trust-item">
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden><polyline points="2 8 6 12 14 4" stroke="#22c55e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              100% Responsive
            </span>
          </div>
        </div>

        {/* Right: Visual card */}
        <div className="hero__visual" aria-hidden>
          <div className="hero__ring" />
          <div className="hero__ring hero__ring--2" />

          <div className="hero__card">
            <div className="hero__card-top">
              <div className="hero__card-dots">
                <span style={{ background: "#f87171" }} />
                <span style={{ background: "#fbbf24" }} />
                <span style={{ background: "#34d399" }} />
              </div>
              <span className="hero__card-url">pixelrise.dev</span>
            </div>
            <div className="hero__card-bars">
              <div className="hero__card-bar hero__card-bar--blue" style={{ width: "75%" }} />
              <div className="hero__card-bar" style={{ width: "55%" }} />
              <div className="hero__card-bar" style={{ width: "88%" }} />
              <div className="hero__card-bar hero__card-bar--indigo" style={{ width: "62%" }} />
              <div className="hero__card-bar" style={{ width: "70%" }} />
            </div>
            <div className="hero__card-foot">
              <span className="hero__card-status">
                <span className="hero__card-status-dot" />
                Live in 24–48 hrs
              </span>
            </div>
          </div>

          <div className="hero__stat hero__stat--1">
            <strong>10+</strong><span>Projects</span>
          </div>
          <div className="hero__stat hero__stat--2">
            <strong>100%</strong><span>Satisfaction</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;