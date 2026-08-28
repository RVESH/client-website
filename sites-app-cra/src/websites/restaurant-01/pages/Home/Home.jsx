
import Hero from "../../sections/Hero/Hero";
import Stats from "../../sections/Stats/Stats";
import About from "../../sections/About/About";
import Services from "../../sections/Services/Services";
import Process from "../../sections/Process/Process";
import Gallery from "../../sections/Gallery/Gallery";
import Testimonials from "../../sections/Testimonials/Testimonials";
import CTA from "../../sections/CTA/CTA";
import Contact from "../../sections/Contact/Contact";

import "./Home.scss";

function Home() {
  return (
    <div className="restaurant-page restaurant-page--home">

      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Process />
        <Gallery />
        <Testimonials />
        <CTA />
        <Contact />
      </main>

    </div>
  );
}

export default Home;