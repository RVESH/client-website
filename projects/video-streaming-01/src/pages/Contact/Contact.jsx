import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from "lucide-react";
import { site } from "../../data/site";
import "./Contact.scss";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [touched, setTouched] = useState(false);

  const { contact } = site;
  const whatsappHref = `https://wa.me/${contact.whatsappNumber}`;
  const isValid = name.trim() && email.trim() && message.trim();

  const handleEmailSend = (e) => {
    e.preventDefault();
    setTouched(true);
    if (!isValid) return;
    const body = [`Name: ${name}`, `Email: ${email}`, "", message].join("\n");
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      contact.email
    )}&su=${encodeURIComponent(subject || "Enquiry via Aperture")}&body=${encodeURIComponent(body)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleWhatsappSend = () => {
    setTouched(true);
    if (!isValid) return;
    const text = `Hi Aperture team,\n\n${message}\n\nName: ${name}\nEmail: ${email}`;
    window.open(`${whatsappHref}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <section className="section contact-hero">
        <div className="container">
          <span className="eyebrow">Get in touch</span>
          <h1 className="contact-hero__heading">Questions about Aperture?</h1>
          <p className="contact-hero__desc">
            Press, partnerships, or just something you want to tell us about a title — we read
            every message.
          </p>
        </div>
      </section>

      <section className="section contact-body">
        <div className="container contact-body__grid">
          <div className="contact-info">
            <div className="contact-info__block">
              <MapPin size={18} strokeWidth={1.75} aria-hidden="true" />
              <div>
                <h3>Office</h3>
                <p>
                  {contact.addressLines.map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            </div>

            <div className="contact-info__block">
              <Phone size={18} strokeWidth={1.75} aria-hidden="true" />
              <div>
                <h3>Call us</h3>
                <p>
                  <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
                </p>
              </div>
            </div>

            <div className="contact-info__block">
              <MessageCircle size={18} strokeWidth={1.75} aria-hidden="true" />
              <div>
                <h3>WhatsApp</h3>
                <p>
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                    {contact.whatsappDisplay}
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-info__block">
              <Mail size={18} strokeWidth={1.75} aria-hidden="true" />
              <div>
                <h3>Email</h3>
                <p>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </p>
              </div>
            </div>

            <div className="contact-info__block">
              <Clock size={18} strokeWidth={1.75} aria-hidden="true" />
              <div>
                <h3>Hours</h3>
                <dl className="contact-info__hours">
                  {contact.hours.map((h) => (
                    <div key={h.day}>
                      <dt>{h.day}</dt>
                      <dd>{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap">
            <h2>Send us a message</h2>
            <p className="contact-form-wrap__desc">
              Fill this in, then choose how you'd like to send it — you'll review the message
              before it goes.
            </p>

            <form className="contact-form" onSubmit={handleEmailSend}>
              <div className="contact-form__row contact-form__row--split">
                <div>
                  <label htmlFor="contact-name">Full name</label>
                  <input id="contact-name" type="text" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
                </div>
                <div>
                  <label htmlFor="contact-email">Email</label>
                  <input id="contact-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
                </div>
              </div>
              <div className="contact-form__row">
                <label htmlFor="contact-subject">Subject (optional)</label>
                <input id="contact-subject" type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
              </div>
              <div className="contact-form__row">
                <label htmlFor="contact-message">Message</label>
                <textarea id="contact-message" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} />
              </div>

              {touched && !isValid && (
                <p className="contact-form__warning" role="alert">
                  Please fill in your name, email and message first.
                </p>
              )}

              <div className="contact-form__actions">
                <button type="submit" className="btn btn--primary">
                  <Send size={18} strokeWidth={2} aria-hidden="true" />
                  <span>Send via Email</span>
                </button>
                <button type="button" className="btn btn--secondary" onClick={handleWhatsappSend}>
                  <MessageCircle size={18} strokeWidth={2} aria-hidden="true" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>
              <p className="contact-form__note">
                This opens Gmail or WhatsApp with your message pre-filled — you review and send it
                yourself.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="contact-location" aria-label="Office location">
        <div className="contact-location__panel">
          <MapPin size={28} strokeWidth={1.5} aria-hidden="true" />
          <div>
            <h3>Visit the office</h3>
            <p>
              {contact.addressLines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
