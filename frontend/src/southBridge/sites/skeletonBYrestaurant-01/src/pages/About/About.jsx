import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import AboutSection from "../../sections/About/About";
import Process from "../../sections/Process/Process";
import Stats from "../../sections/Stats/Stats";
import Testimonial from "../../sections/Testimonial/Testimonials";
import CTA from "../../sections/CTA/CTA";

import "./About.scss";

function About() {
  return (
    <div className="restaurant-page restaurant-page--about">
      <Header />

      <main>
        <AboutSection />

        <Process />

        <Stats />

        <Testimonial />

        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default About;