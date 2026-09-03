import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react'
import { site } from '../../data/site'
import Button from '../../components/Button/Button.jsx'
import './Contact.scss'

function buildWhatsAppEnquiry(form, whatsappHref) {
  const message = [
    'Hello, I would like to enquire about your accounting services.',
    '',
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    `Phone: ${form.phone}`,
    `Service: ${form.service || 'Not selected'}`,
    '',
    'Message:',
    form.message,
  ].join('\n')

  let baseUrl = whatsappHref

  try {
    const url = new URL(whatsappHref, window.location.origin)

    url.search = ''
    url.hash = ''

    baseUrl = url.toString()
  } catch {
    baseUrl = whatsappHref
  }

  const separator = baseUrl.includes('?') ? '&' : '?'

  return `${baseUrl}${separator}text=${encodeURIComponent(message)}`
}

export default function Contact() {
  const { contact } = site

  function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const form = {
      name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      phone: String(formData.get('phone') || '').trim(),
      service: String(formData.get('service') || '').trim(),
      message: String(formData.get('message') || '').trim(),
    }

    const whatsappUrl = buildWhatsAppEnquiry(
      form,
      contact.whatsappHref,
    )

    window.open(
      whatsappUrl,
      '_blank',
      'noopener,noreferrer',
    )
  }

  return (
    <>
      <section className="section section--dark contact-hero">
        <div className="container">
          <span className="eyebrow">Get in touch</span>

          <h1 className="contact-hero__heading">
            Let&apos;s talk about your numbers
          </h1>

          <p className="contact-hero__desc">
            Call, WhatsApp, or send an enquiry below — a senior
            advisor will respond within one business day.
          </p>
        </div>
      </section>

      <section className="section contact-body">
        <div className="container contact-body__grid">
          <div className="contact-info">
            <div className="contact-info__block">
              <MapPin
                size={18}
                strokeWidth={1.5}
                aria-hidden="true"
              />

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
              <Phone
                size={18}
                strokeWidth={1.5}
                aria-hidden="true"
              />

              <div>
                <h3>Call the firm</h3>

                <p>
                  <a href={contact.phoneHref}>
                    {contact.phoneDisplay}
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-info__block">
              <MessageCircle
                size={18}
                strokeWidth={1.5}
                aria-hidden="true"
              />

              <div>
                <h3>WhatsApp</h3>

                <p>
                  <a
                    href={contact.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contact.whatsappDisplay}
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-info__block">
              <Mail
                size={18}
                strokeWidth={1.5}
                aria-hidden="true"
              />

              <div>
                <h3>Email</h3>

                <p>
                  <a href={contact.emailHref}>
                    {contact.email}
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-info__block">
              <Clock
                size={18}
                strokeWidth={1.5}
                aria-hidden="true"
              />

              <div>
                <h3>Opening hours</h3>

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
              <Button
                href={contact.phoneHref}
                variant="ghost"
                icon={Phone}
              >
                Call now
              </Button>

              <Button
                href={contact.whatsappHref}
                variant="ghost"
                icon={MessageCircle}
              >
                WhatsApp
              </Button>
            </div>
          </div>

          <div className="contact-form-wrap">
            <div className="contact-form-wrap__header">
              <span className="contact-form-wrap__eyebrow">
                Start a conversation
              </span>

              <h2>Send an enquiry</h2>

              <p className="contact-form-wrap__desc">
                Tell us briefly what you need — tax, audit,
                advisory or wealth planning — and your message
                will open directly in WhatsApp for you to review
                and send.
              </p>
            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="contact-form__row">
                <label htmlFor="name">Full name</label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  required
                  autoComplete="name"
                />
              </div>

              <div className="contact-form__row contact-form__row--split">
                <div>
                  <label htmlFor="email">Email</label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    autoComplete="email"
                  />
                </div>

                <div>
                  <label htmlFor="phone">Phone</label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91..."
                    required
                    autoComplete="tel"
                  />
                </div>
              </div>

              <div className="contact-form__row">
                <label htmlFor="service">
                  What do you need help with?
                </label>

                <select
                  id="service"
                  name="service"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  <option value="Tax Advisory & Compliance">
                    Tax Advisory & Compliance
                  </option>

                  <option value="Audit & Assurance">
                    Audit & Assurance
                  </option>

                  <option value="Business Advisory">
                    Business Advisory
                  </option>

                  <option value="Wealth & Estate Planning">
                    Wealth & Estate Planning
                  </option>

                  <option value="Something else">
                    Something else
                  </option>
                </select>
              </div>

              <div className="contact-form__row">
                <label htmlFor="message">Message</label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us what you need help with..."
                  required
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                icon={Send}
              >
                Continue to WhatsApp
              </Button>

              <p className="contact-form__note">
                Your message will be prepared in WhatsApp.
                Review the details and press Send.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section
        className="contact-map"
        aria-label="Office location"
      >
        <div className="contact-map__panel">
          <MapPin
            size={28}
            strokeWidth={1.25}
            aria-hidden="true"
          />

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
  )
}