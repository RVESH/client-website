import { Phone, Mail, MessageCircle, MapPin, Clock } from 'lucide-react'
import Button from '../../components/Button/Button.jsx'
import ContactForm from '../../components/ContactForm/ContactForm.jsx'
import {
  contact,
  buildTelLink,
  buildMailtoLink,
  buildGmailLink,
  buildWhatsappLink,
  buildMapEmbedUrl,
  buildMapLink,
} from '../../data/site.js'
import './Contact.scss'

const contactMethods = [
  {
    icon: Phone,
    title: 'Call the studio',
    value: contact.phoneDisplay,
    href: buildTelLink(),
  },
  {
    icon: Mail,
    title: 'Email us',
    value: contact.email,
    href: buildMailtoLink({
      subject: 'Enquiry from website',
    }),
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: contact.whatsappDisplay,
    href: buildWhatsappLink(),
    external: true,
  },
]

function isMobileDevice() {
  return (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    ) ||
    navigator.userAgentData?.mobile === true
  )
}

function handleEmailClick(e) {
  if (isMobileDevice()) {
    // Keep the mailto: href for phones/tablets.
    return
  }

  e.preventDefault()

  const gmailUrl = buildGmailLink({
    subject: 'Enquiry from website',
  })

  window.open(
    gmailUrl,
    '_blank',
    'noopener,noreferrer',
  )
}

export default function Contact() {
  return (
    <div className="page contact-page">
      <section className="section contact-hero">
        <div className="container contact-hero__inner">
          <span className="section-head__eyebrow">
            Contact
          </span>

          <h1 className="contact-hero__title">
            Reserve your visit
          </h1>

          <p className="contact-hero__desc">
            Call, message us on WhatsApp, or send an enquiry below
            — whichever is easiest. A member of our team will
            confirm a time that works for you.
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
                target={
                  method.external ? '_blank' : undefined
                }
                rel={
                  method.external
                    ? 'noreferrer'
                    : undefined
                }
                onClick={
                  method.title === 'Email us'
                    ? handleEmailClick
                    : undefined
                }
              >
                <span className="contact-methods__icon">
                  <IconEl
                    size={20}
                    strokeWidth={1.75}
                  />
                </span>

                <span className="contact-methods__title">
                  {method.title}
                </span>

                <span className="contact-methods__value">
                  {method.value}
                </span>
              </a>
            )
          })}
        </div>
      </section>

      <section className="section contact-main">
        <div className="container contact-main__inner">
          <div className="contact-main__form-col">
            <h2 className="contact-main__heading">
              Send an enquiry
            </h2>

            <p className="contact-main__subheading">
              Fill in what you can — you'll review the full
              message before it sends.
            </p>

            <ContactForm />
          </div>

          <aside className="contact-main__info-col">
            <div className="contact-info-card">
              <h3>
                <MapPin
                  size={16}
                  strokeWidth={1.75}
                />
                Studio address
              </h3>

              <p className="contact-info-card__desc">
                {contact.address}
              </p>

              <Button
                href={buildMapLink()}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                size="sm"
              >
                Get directions
              </Button>
            </div>

            <div className="contact-info-card">
              <h3>
                <Clock
                  size={16}
                  strokeWidth={1.75}
                />
                Studio hours
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

            <div className="contact-info-card contact-info-card--map">
              <h3>Find us</h3>

              <div className="contact-map">
                <iframe
                  title="Meridian Dental Studio location"
                  src={buildMapEmbedUrl()}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}