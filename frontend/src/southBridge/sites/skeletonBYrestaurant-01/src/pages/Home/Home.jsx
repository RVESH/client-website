import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import Hero from "../../sections/Hero/Hero";
import About from "../../sections/About/About";
import Services from "../../sections/Services/Services";
import Gallery from "../../sections/Gallery/Gallery";
import Stats from "../../sections/Stats/Stats";
import Process from "../../sections/Process/Process";
import FAQ from "../../sections/FAQ/FAQ";
import CTA from "../../sections/CTA/CTA";
import Contact from "../../sections/Contact/Contact";

import "./Home.scss";

function Home() {
  return (
    <div className="page-home">
      <Header />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="stats">
          <Stats />
        </section>

        <section id="process">
          <Process />
        </section>

        <section id="gallery">
          <Gallery />
        </section>

        <section id="faq">
          <FAQ />
        </section>

        <section id="reservation">
          <CTA />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;