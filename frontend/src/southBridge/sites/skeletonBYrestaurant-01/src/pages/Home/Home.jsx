import { useState } from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Modal from "../../components/Modal/Modal";

import Hero from "../../sections/Hero/Hero";
import About from "../../sections/About/About";
import Services from "../../sections/Services/Services";
import Stats from "../../sections/Stats/Stats";
import Gallery from "../../sections/Gallery/Gallery";
import Testimonial from "../../sections/Testimonial/Testimonials";
import CTA from "../../sections/CTA/CTA";
import Contact from "../../sections/Contact/Contact";

import Button from "../../components/Button/Button";
import "./Home.scss";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="restaurant-page restaurant-page--home">
      <Header />

      <main>
        <Hero />

        <Button onClick={() => setIsModalOpen(true)}>
          View Details
        </Button>

        <About />

        <Services />

        <Stats />

        <Gallery />

        <Testimonial />

        <CTA />

        <Contact />
      </main>

      <Footer />

      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Restaurant Details"
        description="Seasonal menu and dining information."
      >
        <p>
          Fresh ingredients, seasonal dishes and an
          intimate dining experience.
        </p>
      </Modal>
    </div>
  );
}

export default Home;