import Hero from "../../sections/Hero/Hero.jsx";
import Strengths from "../../sections/Strengths/Strengths.jsx";
import FeaturedProjects from "../../sections/FeaturedProjects/FeaturedProjects.jsx";
import Services from "../../sections/Services/Services.jsx";
import Stats from "../../sections/Stats/Stats.jsx";
import Testimonials from "../../sections/Testimonials/Testimonials.jsx";
import CTA from "../../sections/CTA/CTA.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <Strengths />
      <FeaturedProjects />
      <Services />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  );
}
