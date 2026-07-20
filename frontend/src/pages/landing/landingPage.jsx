import React from "react";
import "./landingPage.scss";

import Navbar    from "./components/Navbar/Navbar";
import Hero      from "./components/Hero/Hero";
import Service   from "./components/service/service";
// import Skills    from "./components/skills/skills";
import WhyChoose from "./components/WhyChoose/WhyChoose";
import Process   from "./components/Process/Process";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact   from "./components/Contact/Contact";

const LandingPage = () => {
  return (
    <>
      <Navbar />

      <main className="landing__main">
        <Hero />
        <Service />
        {/* <Skills /> */}
        <WhyChoose />
        <Process />
        <Portfolio />
        <Contact />
      </main>

      <footer className="landing__footer">
        <div className="container landing__footer-inner">
          <p className="landing__footer-brand">
            Pixel<span>Rise</span>
          </p>
          <p className="landing__footer-copy">
            © {new Date().getFullYear()} PixelRise. Crafted with care.
          </p>
          <nav className="landing__footer-links">
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;