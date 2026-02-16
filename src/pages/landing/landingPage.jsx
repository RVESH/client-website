import React from "react";
import "./landingPage.scss";

const LandingPage = () => {
  return (
    <div className="landing">

      {/* HERO */}
      <div className="hero">
        <h1>Grow Your Business Online</h1>
        <p>Fast | Affordable | Trusted</p>

        <a
          href="https://wa.me/91XXXXXXXXXX"
          className="whatsapp-btn"
        >
          Chat on WhatsApp
        </a>
      </div>

      {/* SERVICES */}
      <section className="section">
        <h2>My Services</h2>
        <p>✔ Google Business Setup</p>
        <p>✔ One Page Website</p>
        <p>✔ WhatsApp Marketing</p>
        <p>✔ Online Visibility</p>
      </section>

      {/* WHY */}
      <section className="section">
        <h2>Why Choose Me?</h2>
        <p>✔ Low Cost</p>
        <p>✔ Fast Work</p>
        <p>✔ Honest Service</p>
        <p>✔ Local Support</p>
      </section>

      {/* PROCESS */}
      <section className="section">
        <h2>How It Works</h2>
        <p>1. You Send Details</p>
        <p>2. I Create Website</p>
        <p>3. You Approve</p>
        <p>4. Payment</p>
      </section>

      {/* DEMO */}
      <section className="section">
        <h2>My Demo Work</h2>
        <p>Sample Website</p>
        <p>Sample Google Profile</p>
      </section>

      {/* CONTACT */}
      <section className="contact">
        <h2>Contact Me</h2>
        <p>📧 yourmail@gmail.com</p>
        <p>📞 9XXXXXXXXX</p>
      </section>

    </div>
  );
};





export default LandingPage;
