import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import Hero from "../../sections/Hero/Hero";
import About from "../../sections/About/About";
import Services from "../../sections/Services/Services";
import Stats from "../../sections/Stats/Stats";
import Gallery from "../../sections/Gallery/Gallery";
import Testimonial from "../../sections/Testimonial/Testimonials";
import CTA from "../../sections/CTA/CTA";
import Contact from "../../sections/Contact/Contact";

import "./Home.scss";

function Home() {
  return (
    <div className="restaurant-page restaurant-page--home">
      <Header />

      <main>
        <Hero />

        <About />

        <Services />

        <Stats />

        <Gallery />

        <Testimonial />

        <CTA />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default Home;