// src/pages/Contact/Contact.jsx

import "./Contact.scss";

function Contact() {
  return (
    <div className="inner-page">
      <section className="inner-page__hero page-shell">
        <span className="eyebrow">CONTACT</span>

        <h1 className="section-title">
          Come say hello.
        </h1>

        <p className="section-copy">
          For reservations, private dining and general enquiries,
          our team is happy to help.
        </p>
      </section>

      <section className="contact-page section">
        <div className="page-shell contact-page__grid">
          <div>
            <span className="eyebrow">ADDRESS</span>
            <address>
              18 Willow Lane
              <br />
              New Delhi
              <br />
              India
            </address>
          </div>

          <div>
            <span className="eyebrow">GET IN TOUCH</span>
            <a href="tel:+919000000000">+91 90000 00000</a>
            <a href="mailto:hello@luma.example">
              hello@luma.example
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;