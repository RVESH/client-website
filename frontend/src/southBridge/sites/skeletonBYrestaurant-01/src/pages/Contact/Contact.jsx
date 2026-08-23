import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import ContactSection from "../../sections/Contact/Contact";
import FAQ from "../../sections/FAQ/FAQ";

import "./Contact.scss";

function Contact() {
  return (
    <div className="restaurant-page restaurant-page--contact">
      <Header />

      <main>
        <ContactSection />

        <section className="contact-page__location">
          <span>FIND US</span>

          <h1>18 Willow Lane, New Delhi</h1>

          <p>
            Tuesday — Saturday / 18:00 — 23:00
          </p>

          <a
            href="https://maps.google.com/?q=New+Delhi"
            target="_blank"
            rel="noreferrer"
          >
            Open in Maps ↗
          </a>
        </section>

        <FAQ />
      </main>

      <Footer />
    </div>
  );
}

export default Contact;


// Tumhare existing sections/Contact/Contact.jsx ko reuse karenge.

// src/pages/Contact/Contact.jsx