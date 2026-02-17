import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container contact__inner">

        {/* Header */}
        <header className="contact__header">
          <p className="section__eyebrow">
            Contact Me
          </p>

          <h2 className="section__title contact__title">
            Let’s Discuss Your Project
          </h2>

          <p className="section__text contact__text">
            Share your requirements and get a quick response.
          </p>
        </header>

        {/* Contact Box */}
        <div className="contact__box">

          <div className="contact__info">

            <h3>Get in Touch</h3>

            <p>
              📧 Email: yourmail@gmail.com
            </p>

            <p>
              📱 WhatsApp: +91XXXXXXXXXX
            </p>

            <p>
              ⏱ Response Time: Within 24 Hours
            </p>

          </div>

          <div className="contact__action">

            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary contact__btn"
            >
              Chat on WhatsApp
            </a>

            <p className="contact__note">
              Click the button to start a direct conversation.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
