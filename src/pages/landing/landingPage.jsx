import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Service from "./components/service/service";
import Skills from "./components/skills/skill";
import WhyChoose from "./components/WhyChoose/WhyChoose";
import Process from "./components/Process/Process";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

const LandingPage = () => {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Services */}
      <Service />

      {/* Skills */}
      <Skills />

      {/* Why Choose Me */}
      <WhyChoose />

      {/* Process */}
      <Process />

      {/* Portfolio */}
      <Portfolio />

      {/* Contact */}
      <Contact />
    </>
  );
};

export default LandingPage;
