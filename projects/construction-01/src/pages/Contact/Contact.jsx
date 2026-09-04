import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from "lucide-react";
import { site } from "../../data/site";
import Button from "../../components/Button/Button.jsx";
import "./Contact.scss";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { contact } = site;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="section section--dark contact-hero">
        <div className="container">
          <span className="eyebrow">Get in touch</span>
          <h1 className="contact-hero__heading">Let's talk about your project</h1>
          <p className="contact-hero__desc">
            Call, WhatsApp, or send your drawings and requirements below — a senior engineer will
            respond within one business day.
          </p>
        </div>
      </section>

      <section className="section contact-body">
        <div className="container contact-body__grid">
          <div className="contact-info">
            <div className="contact-info__block">
              <MapPin size={18} strokeWidth={1.75} aria-hidden="true" />
              <div>
                <h3>Office & yard</h3>
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
                <h3>Call the office</h3>
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
                  <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">
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
                  <a href={contact.emailHref}>{contact.email}</a>
                </p>
              </div>
            </div>

            <div className="contact-info__block">
              <Clock size={18} strokeWidth={1.75} aria-hidden="true" />
              <div>
                <h3>Office hours</h3>
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

            <div className="contact-info__actions">
              <Button href={contact.phoneHref} variant="ghost" icon={Phone}>
                Call now
              </Button>
              <Button href={contact.whatsappHref} variant="ghost" icon={MessageCircle}>
                WhatsApp
              </Button>
            </div>
          </div>

          <div className="contact-form-wrap">
            <h2>Send an enquiry</h2>
            <p className="contact-form-wrap__desc">
              Tell us about your project — scope, location and rough timeline — and we'll come
              back with next steps.
            </p>

            {submitted ? (
              <div className="contact-form__success" role="status">
                <h3>Enquiry received</h3>
                <p>Thank you — a senior engineer will reach out within one business day.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form__row">
                  <label htmlFor="name">Full name</label>
                  <input id="name" name="name" type="text" required autoComplete="name" />
                </div>
                <div className="contact-form__row contact-form__row--split">
                  <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" required autoComplete="email" />
                  </div>
                  <div>
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" type="tel" required autoComplete="tel" />
                  </div>
                </div>
                <div className="contact-form__row">
                  <label htmlFor="projectType">Project type</label>
                  <select id="projectType" name="projectType" defaultValue="">
                    <option value="" disabled>
                      Select a project type
                    </option>
                    <option value="commercial">Commercial construction</option>
                    <option value="residential">Residential construction</option>
                    <option value="infrastructure">Infrastructure</option>
                    <option value="renovation">Renovation & restoration</option>
                    <option value="engineering">Structural & MEP engineering</option>
                  </select>
                </div>
                <div className="contact-form__row">
                  <label htmlFor="message">Project details</label>
                  <textarea id="message" name="message" rows={4} required />
                </div>
                <Button type="submit" variant="primary" icon={Send}>
                  Send enquiry
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="contact-location" aria-label="Office location">
        <div className="contact-location__panel">
          <MapPin size={28} strokeWidth={1.5} aria-hidden="true" />
          <div>
            <h3>Visit the office & yard</h3>
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
