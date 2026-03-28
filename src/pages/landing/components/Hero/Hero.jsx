import React from "react";
import "./Hero.scss";

const handleScrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
};

const Hero = () => {
  return (
    <section id="hero" className="hero">

      {/* Dark overlay so background image stays visible but text is readable */}
      <div className="hero__overlay" aria-hidden />

      <div className="container hero__inner">

        {/* ── LEFT: Content ── */}
        <div className="hero__content">

          {/* Eyebrow badge */}
          <span className="hero__eyebrow">
            <span className="hero__eyebrow-dot" />
            Freelance React Web Developer
          </span>

          {/* Main heading */}
          <h1 className="hero__title">
            Get a Modern Website That{" "}
            <span className="hero__title-highlight">
              Brings You More Customers
            </span>
          </h1>

          {/* Subtext */}
          <p className="hero__subtitle">
            I build fast, responsive and professional websites for small
            businesses, startups and personal brands — so you can grow
            online without stress.
          </p>

          {/* Buttons */}
          <div className="hero__actions">
            <button
              className="hero__btn hero__btn--primary"
              onClick={() => handleScrollTo("contact")}
            >
              Get Your Website Now
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <button
              className="hero__btn hero__btn--outline"
              onClick={() => handleScrollTo("portfolio")}
            >
              View My Work
            </button>
          </div>

          {/* Trust strip */}
          <div className="hero__trust">
            <span className="hero__trust-item">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                <polyline points="2 8 6 12 14 4" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Fast Delivery
            </span>
            <span className="hero__trust-sep" />
            <span className="hero__trust-item">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                <polyline points="2 8 6 12 14 4" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Affordable Price
            </span>
            <span className="hero__trust-sep" />
            <span className="hero__trust-item">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                <polyline points="2 8 6 12 14 4" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              100% Responsive
            </span>
          </div>

        </div>

        {/* ── RIGHT: Floating card visual ── */}
        <div className="hero__visual" aria-hidden>

          {/* Main card */}
          <div className="hero__card">
            <div className="hero__card-top">
              <div className="hero__card-dots">
                <span style={{ background: "#f87171" }} />
                <span style={{ background: "#fbbf24" }} />
                <span style={{ background: "#34d399" }} />
              </div>
              <span className="hero__card-label">pixelrise.dev</span>
            </div>

            <div className="hero__card-body">
              <div className="hero__card-bar" style={{ width: "80%", background: "#bfdbfe" }} />
              <div className="hero__card-bar" style={{ width: "60%" }} />
              <div className="hero__card-bar" style={{ width: "90%" }} />
              <div className="hero__card-bar" style={{ width: "50%", background: "#c7d2fe" }} />
              <div className="hero__card-bar" style={{ width: "70%" }} />
            </div>

            <div className="hero__card-footer">
              <span className="hero__card-status">
                <span className="hero__card-status-dot" />
                Live in 24–48 hrs
              </span>
            </div>
          </div>

          {/* Floating stat pills */}
          <div className="hero__pill hero__pill--1">
            <strong>10+</strong>
            <span>Projects</span>
          </div>

          <div className="hero__pill hero__pill--2">
            <strong>100%</strong>
            <span>Satisfaction</span>
          </div>

          {/* Decorative ring */}
          <div className="hero__ring" />

        </div>

      </div>
    </section>
  );
};

export default Hero;