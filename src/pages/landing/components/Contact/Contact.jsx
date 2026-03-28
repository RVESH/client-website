import React, { useState } from "react";
import "./Contact.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // WhatsApp function
  const handleSend = () => {
    const phone = "919060144817";

    if (!name || !message) {
      alert("Please fill all fields");
      return;
    }

    const text = `Hi, I want a website.
Name: ${name}
Message: ${message}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">

        {/* Header */}
        <div className="contact__header">
          <p className="contact__eyebrow">Get In Touch</p>
          <h2 className="contact__title">
            Let’s Build Your Website 🚀
          </h2>
          <p className="contact__text">
            Tell me about your project and I’ll help you create a modern, fast website.
          </p>
        </div>

        {/* Content */}
        <div className="contact__grid">

          {/* LEFT */}
          <div className="contact__info">
            <h3>Why work with me?</h3>
            <ul>
              <li>⚡ Fast delivery</li>
              <li>💰 Affordable pricing</li>
              <li>📱 Mobile responsive</li>
              <li>🎯 Clean modern design</li>
            </ul>

            <a
              href="https://wa.me/919060144817"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary contact__whatsapp"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* RIGHT */}
          <div className="contact__form">

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <textarea
              placeholder="Tell me about your project..."
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button
              className="btn btn--primary"
              onClick={handleSend}
            >
              Send Message
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;