// Hero01 → Premium SaaS / Product
// Hero02 → Luxury Restaurant
// Hero03 → Editorial / Fashion
// Hero04 → Premium Architecture
// Hero05 → Creative Agency
// Hero06 → E-commerce Product
// Hero07 → Dark Tech / AI
// Hero08 → Luxury Hotel
// Hero09 → Corporate / Consulting
// Hero10 → Personal Portfolio
// Hero11 → Wellness / Fitness
// Hero12 → Premium Local Business

import Hero01 from "./Hero01";
import Hero02 from "./Hero02";
import Hero03 from "./Hero03";
import Hero04 from "./Hero04";
import Hero05 from "./Hero05";
import Hero06 from "./Hero06";
import Hero07 from "./Hero07";
import Hero08 from "./Hero08";
import Hero09 from "./Hero09";
import Hero10 from "./Hero10";
import Hero11 from "./Hero11";
import Hero12 from "./Hero12";
import "./style.scss";

function Hero() {
  return (
    <div className="hero_foundation">
      <Hero01 />
      <Hero02 />
      <Hero03 />
      <Hero04 />
      <Hero05 />
      <Hero06 />
      <Hero07 />
      <Hero08 />
      <Hero09 />
      <Hero10 />
      <Hero11 />
      <Hero12 />
    </div>
  );
}

export {
  Hero01,
  Hero02,
  Hero03,
  Hero04,
  Hero05,
  Hero06,
  Hero07,
  Hero08,
  Hero09,
  Hero10,
  Hero11,
  Hero12,
};

export default Hero;