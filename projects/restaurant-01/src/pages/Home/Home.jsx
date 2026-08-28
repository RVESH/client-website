import Hero from "../../sections/Hero/Hero";
import Stats from "../../sections/Stats/Stats";
import AboutSection from "../../sections/About/About";
import Services from "../../sections/Services/Services";
import Process from "../../sections/Process/Process";
import Gallery from "../../sections/Gallery/Gallery";
import Testimonials from "../../sections/Testimonials/Testimonials";
import CTA from "../../sections/CTA/CTA";

import "./Home.scss";

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <Stats />
      <AboutSection />
      <Services />
      <Process />
      <Gallery />
      <Testimonials />
      <CTA />
    </div>
  );
}

export default Home;