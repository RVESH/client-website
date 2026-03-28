import React, { useState } from "react";
import "./Contact.scss";

const WHY_POINTS = [
  { icon: "⚡", text: "Fast delivery — 24 to 48 hours" },
  { icon: "💰", text: "Affordable pricing for everyone" },
  { icon: "📱", text: "100% mobile responsive design" },
  { icon: "🎯", text: "Clean, modern and professional UI" },
];

const Contact = () => {
  const [name, setName]       = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent]       = useState(false);

  const handleSend = () => {
    if (!name.trim() || !message.trim()) {
      alert("Please fill all fields before sending.");
      return;
    }

    const phone = "919060144817";
    const text  = `Hi, I want a website.\nName: ${name}\nMessage: ${message}`;
    const url   = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">

        {/* Header */}
        <header className="section__heading">
          <p className="section__eyebrow">Get In Touch</p>
          <h2 className="section__title">Let's Build Your Website</h2>
          <p className="section__text">
            Tell me about your project and I'll help you create a modern, fast website.
          </p>
        </header>

        {/* Grid */}
        <div className="contact__grid">

          {/* LEFT — Info */}
          <div className="contact__info">
            <h3 className="contact__info-title">Why work with me?</h3>
            <ul className="contact__why-list">
              {WHY_POINTS.map((point, i) => (
                <li key={i} className="contact__why-item">
                  <span className="contact__why-icon">{point.icon}</span>
                  <span>{point.text}</span>
                </li>
              ))}
            </ul>

            <div className="contact__divider" />

            <p className="contact__cta-label">Ready to start? Chat directly:</p>
            <a
              href="https://wa.me/919060144817"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__whatsapp-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* RIGHT — Form */}
          <div className="contact__form">
            <div className="contact__form-card">
              <h3 className="contact__form-title">Send a Message</h3>

              <div className="contact__field">
                <label className="contact__label" htmlFor="contact-name">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  className="contact__input"
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="contact__field">
                <label className="contact__label" htmlFor="contact-msg">Your Project Details</label>
                <textarea
                  id="contact-msg"
                  className="contact__textarea"
                  placeholder="Tell me what kind of website you need..."
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <button
                className={`contact__send-btn${sent ? " contact__send-btn--sent" : ""}`}
                onClick={handleSend}
              >
                {sent ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send via WhatsApp
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;