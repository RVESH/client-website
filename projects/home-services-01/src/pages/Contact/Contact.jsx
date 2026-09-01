import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import Button from '../../components/Button/Button';
import AreasHours from '../../sections/AreasHours/AreasHours';
import { site, whatsappHref } from '../../data/site';
import { services } from '../../data/services';
import './ContactPage.scss';

const initialForm = { name: '', phone: '', service: services[0]?.name ?? '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const buildMessage = () =>
    `Quote request from ${form.name || 'website'}\n` +
    `Service: ${form.service}\n` +
    `Phone: ${form.phone || 'not provided'}\n` +
    `Details: ${form.message || 'none given'}`;

  const handleWhatsapp = (e) => {
    e.preventDefault();
    window.open(whatsappHref(buildMessage()), '_blank', 'noreferrer');
    setSent('whatsapp');
  };

  const handleEmail = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Quote request — ${form.service}`);
    const body = encodeURIComponent(buildMessage());
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent('email');
  };

  return (
    <>
      <section className="section contact-hero section--ink">
        <div className="container">
          <SectionHeading
            index="CONTACT"
            title="Tell us what you need done."
            lead="Fill this in and send it however's easiest — WhatsApp gets the fastest reply, email works just as well."
          />
        </div>
      </section>

      <section className="section section--tight contact-body">
        <div className="container contact-body__grid">
          <form className="contact-form" onSubmit={handleWhatsapp}>
            <div className="contact-form__row">
              <label>
                <span>Name</span>
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
              </label>
              <label>
                <span>Phone</span>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Best number to reach you" required />
              </label>
            </div>
            <label>
              <span>Service</span>
              <select name="service" value={form.service} onChange={handleChange}>
                {services.map((s) => (
                  <option key={s.slug} value={s.name}>{s.name}</option>
                ))}
                <option value="Not sure / other">Not sure / other</option>
              </select>
            </label>
            <label>
              <span>What needs doing?</span>
              <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Rooms, rough scope, timing — whatever you've got." required />
            </label>

            <div className="contact-form__actions">
              <Button type="submit" variant="primary" icon={MessageCircle} iconPosition="left">
                Send via WhatsApp
              </Button>
              <Button type="button" variant="outline" icon={Send} iconPosition="left" onClick={handleEmail}>
                Send via email
              </Button>
            </div>
            {sent && (
              <p className="contact-form__note" role="status">
                {sent === 'whatsapp'
                  ? 'Opening WhatsApp with your details filled in — send it over from there.'
                  : 'Opening your email app with the details filled in — send it over from there.'}
              </p>
            )}
          </form>

          <aside className="contact-cards">
            <a className="contact-card" href={site.phoneHref}>
              <Phone size={20} aria-hidden="true" />
              <div>
                <span className="contact-card__label">Call</span>
                <span className="contact-card__value">{site.phoneDisplay}</span>
              </div>
            </a>
            <a className="contact-card" href={whatsappHref()} target="_blank" rel="noreferrer">
              <MessageCircle size={20} aria-hidden="true" />
              <div>
                <span className="contact-card__label">WhatsApp</span>
                <span className="contact-card__value">Message us directly</span>
              </div>
            </a>
            <a className="contact-card" href={`mailto:${site.email}`}>
              <Mail size={20} aria-hidden="true" />
              <div>
                <span className="contact-card__label">Email</span>
                <span className="contact-card__value">{site.email}</span>
              </div>
            </a>
            <div className="contact-card contact-card--static">
              <MapPin size={20} aria-hidden="true" />
              <div>
                <span className="contact-card__label">Based in</span>
                <span className="contact-card__value">{site.address.line1}, {site.address.line2}</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <AreasHours />
    </>
  );
}
