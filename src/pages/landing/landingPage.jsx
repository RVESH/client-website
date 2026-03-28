import React from "react";

import Navbar   from "./components/Navbar/Navbar";
import Hero     from "./components/Hero/Hero";
import Service  from "./components/service/service";
import Skills   from "./components/skills/skill";
import WhyChoose from "./components/WhyChoose/WhyChoose";
import Process  from "./components/Process/Process";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact  from "./components/Contact/Contact";

import "./landingPage.scss";

const LandingPage = () => {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Main content — offset for fixed navbar */}
      <main className="landing__main">

        {/* 1. Hero */}
        <Hero />

        {/* 2. Services */}
        <Service />

        {/* 3. Skills */}
        {/* <Skills /> */}

        {/* 4. Why Choose Me */}
        <WhyChoose />

        {/* 5. Process */}
        <Process />

        {/* 6. Portfolio */}
        <Portfolio />

        {/* 7. Contact */}
        <Contact />

      </main>

      {/* Footer */}
      <footer className="landing__footer">
        <div className="container landing__footer-inner">
          <p className="landing__footer-brand">PixelRise</p>
          <p className="landing__footer-copy">
            © {new Date().getFullYear()} PixelRise. Crafted with care.
          </p>
          <div className="landing__footer-links">
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;