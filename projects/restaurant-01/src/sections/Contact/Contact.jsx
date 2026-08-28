import ContactSection from "../../sections/Contact/Contact";
import FAQ from "../../sections/FAQ/FAQ";
import CTA from "../../sections/CTA/CTA";

import "./Contact.scss";

function Contact() {
  return (
    <div className="restaurant-page restaurant-page--contact">
      <section className="inner-page__hero">
        <span>FIND US</span>

        <h1>
          Come by. Stay awhile.
        </h1>
      </section>

      <ContactSection />
      <FAQ />
      <CTA />
    </div>
  );
}

export default Contact;