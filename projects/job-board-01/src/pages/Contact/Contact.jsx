import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from "lucide-react";
import { site } from "../../data/site";
import Button from "../../components/Button/Button.jsx";
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
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      message,
    ].join("\n");
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      contact.email
    )}&su=${encodeURIComponent(subject || "Enquiry via Hirely")}&body=${encodeURIComponent(body)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleWhatsappSend = () => {
    setTouched(true);
    if (!isValid) return;
    const text = `Hi Hirely team,\n\n${message}\n\nName: ${name}\nEmail: ${email}`;
    const url = `${whatsappHref}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <section className="section section--dark contact-hero">
        <div className="container">
          <span className="eyebrow">{site.contactPage.eyebrow}</span>
          <h1 className="contact-hero__heading">{site.contactPage.heading}</h1>
          <p className="contact-hero__desc">{site.contactPage.desc}</p>
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

            <div className="contact-info__actions">
              <Button href={contact.phoneHref} variant="ghost" icon={Phone}>
                Call now
              </Button>
              <Button href={whatsappHref} variant="ghost" icon={MessageCircle}>
                WhatsApp
              </Button>
            </div>
          </div>

          <div className="contact-form-wrap">
            <h2>Send us a message</h2>
            <p className="contact-form-wrap__desc">
              For candidate support, company profile updates, or posting a role — tell us what you
              need and choose how to send it.
            </p>

            <form className="contact-form" onSubmit={handleEmailSend}>
              <div className="contact-form__row contact-form__row--split">
                <div>
                  <label htmlFor="contact-name">Full name</label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                  />
                </div>
              </div>
              <div className="contact-form__row">
                <label htmlFor="contact-subject">Subject (optional)</label>
                <input
                  id="contact-subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className="contact-form__row">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              {touched && !isValid && (
                <p className="contact-form__warning" role="alert">
                  Please fill in your name, email and message first.
                </p>
              )}

              <div className="contact-form__actions">
                <Button type="submit" variant="primary" icon={Send}>
                  Send via Email
                </Button>
                <Button type="button" variant="outline" onClick={handleWhatsappSend} icon={MessageCircle}>
                  Send via WhatsApp
                </Button>
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
