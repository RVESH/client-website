
import AboutSection from "../../sections/About/About";
import Stats from "../../sections/Stats/Stats";
import Process from "../../sections/Process/Process";
import Testimonials from "../../sections/Testimonials/Testimonials";
import CTA from "../../sections/CTA/CTA";

import "./About.scss";

function About() {
  return (
    <div className="restaurant-page restaurant-page--about">

      <main>
        <section className="inner-page__hero">
          <span>OUR STORY</span>
          <h1>Food, people and a place worth returning to.</h1>
        </section>

        <AboutSection />
        <Stats />
        <Process />
        <Testimonials />
        <CTA />
      </main>

    </div>
  );
}

export default About;