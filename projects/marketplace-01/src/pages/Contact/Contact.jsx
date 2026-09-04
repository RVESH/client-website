import { useLocation } from 'react-router-dom'
import { Phone, Mail, MessageCircle, MapPin, Clock } from 'lucide-react'
import ContactForm from '../../components/ContactForm/ContactForm.jsx'
import { contact, buildTelLink, buildMailtoLink, buildWhatsappLink } from '../../data/site.js'
import './Contact.scss'

const contactMethods = [
  {
    icon: Phone,
    title: 'Call us',
    value: contact.phoneDisplay,
    href: buildTelLink(),
  },
  {
    icon: Mail,
    title: 'Email us',
    value: contact.email,
    href: buildMailtoLink({ subject: 'Enquiry from INDEX Market' }),
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: contact.whatsappDisplay,
    href: buildWhatsappLink(),
    external: true,
  },
]

export default function Contact() {
  const location = useLocation()
  const productContext = location.state?.productTitle || location.state?.category || ''

  return (
    <div className="page contact-page">
      <section className="section--tight contact-hero">
        <div className="container contact-hero__inner">
          <span className="section-head__kicker">Contact</span>
          <h1 className="contact-hero__title">Get in touch</h1>
          <p className="contact-hero__desc">
            {productContext
              ? `Ask us about "${productContext}" — or anything else in the catalogue.`
              : 'Questions about an order, a maker, or selling on INDEX — reach us however is easiest.'}
          </p>
        </div>
      </section>

      <section className="section--tight contact-methods">
        <div className="container contact-methods__grid">
          {contactMethods.map((method) => {
            const IconEl = method.icon
            return (
              <a
                key={method.title}
                href={method.href}
                className="contact-methods__card"
                target={method.external ? '_blank' : undefined}
                rel={method.external ? 'noreferrer' : undefined}
              >
                <span className="contact-methods__icon">
                  <IconEl size={20} strokeWidth={1.75} />
                </span>
                <span className="contact-methods__title">{method.title}</span>
                <span className="contact-methods__value">{method.value}</span>
              </a>
            )
          })}
        </div>
      </section>

      <section className="section contact-main">
        <div className="container contact-main__inner">
          <div className="contact-main__form-col">
            <h2 className="contact-main__heading">Send an enquiry</h2>
            <p className="contact-main__subheading">
              Fill in what you can — you'll review the full message before it sends.
            </p>
            <ContactForm initialProduct={productContext} />
          </div>

          <aside className="contact-main__info-col">
            <div className="contact-info-card">
              <h3>
                <MapPin size={16} strokeWidth={1.75} /> Address
              </h3>
              <p className="contact-info-card__desc">{contact.address}</p>
            </div>

            <div className="contact-info-card">
              <h3>
                <Clock size={16} strokeWidth={1.75} /> Hours
              </h3>
              <ul className="contact-info-card__hours">
                {contact.hours.map((row) => (
                  <li key={row.day}>
                    <span>{row.day}</span>
                    <span>{row.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}
