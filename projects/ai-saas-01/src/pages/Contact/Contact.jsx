import { useState } from 'react'
import {
  ArrowUpRight,
  Clock,
  Mail,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react'
import Button from '../../components/Button/Button.jsx'
import {
  contact,
  buildMailLink,
  buildTelLink,
  buildWhatsappLink,
} from '../../data/site.js'
import './Contact.scss'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email us',
    value: contact.email,
    href: buildMailLink('Nexora enquiry'),
    action: 'Send an email',
  },
  {
    icon: Phone,
    title: 'Call us',
    value: contact.phoneDisplay,
    href: buildTelLink(),
    action: 'Call now',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: contact.whatsappDisplay,
    href: buildWhatsappLink(),
    action: 'Message us',
    external: true,
  },
]

const initialForm = {
  name: '',
  email: '',
  company: '',
  message: '',
}

function buildGmailComposeLink(form) {
  const subject = `Nexora enquiry — ${form.company || form.name}`

  const body = [
    'Hello Nexora team,',
    '',
    'I would like to discuss my workflows and learn more about Nexora.',
    '',
    `Name: ${form.name}`,
    `Work email: ${form.email}`,
    `Company: ${form.company || 'Not provided'}`,
    '',
    'Message:',
    form.message,
    '',
    'Regards,',
    form.name,
  ].join('\n')

  return (
    `https://mail.google.com/mail/?view=cm&fs=1` +
    `&to=${encodeURIComponent(contact.emailSales)}` +
    `&su=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`
  )
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})

  function handleChange(event) {
    const { name, value } = event.target

    setForm((current) => ({
      ...current,
      [name]: value,
    }))

    if (errors[name]) {
      setErrors((current) => ({
        ...current,
        [name]: '',
      }))
    }
  }

  function validate() {
    const next = {}

    if (!form.name.trim()) {
      next.name = 'Please enter your name.'
    }

    if (!form.email.trim()) {
      next.email = 'Please enter your work email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Please enter a valid email address.'
    }

    if (!form.message.trim()) {
      next.message = 'Tell us what you would like help with.'
    }

    return next
  }

  function handleSubmit(event) {
    event.preventDefault()

    const validation = validate()
    setErrors(validation)

    if (Object.keys(validation).length > 0) {
      return
    }

    const gmailLink = buildGmailComposeLink(form)

    window.location.href = gmailLink
  }

  return (
    <div className="page contact-page">
      {/* HERO */}
      <section className="section contact-hero">
        <div className="container contact-hero__inner">
          <span className="section-head__eyebrow">Contact</span>

          <h1 className="contact-hero__title">
            Let&apos;s talk about your workflows
          </h1>

          <p className="contact-hero__desc">
            Have a question about Nexora, want a product walkthrough, or need
            help choosing the right workflow automation? Reach out and our team
            will take it from there.
          </p>
        </div>
      </section>

      {/* DIRECT CONTACT METHODS */}
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
                <div className="contact-methods__top">
                  <span className="contact-methods__icon">
                    <IconEl size={19} strokeWidth={1.8} />
                  </span>

                  <ArrowUpRight
                    className="contact-methods__arrow"
                    size={16}
                    strokeWidth={1.7}
                  />
                </div>

                <span className="contact-methods__title">
                  {method.title}
                </span>

                <span className="contact-methods__value">
                  {method.value}
                </span>

                <span className="contact-methods__action">
                  {method.action}
                  <ArrowUpRight size={13} strokeWidth={1.8} />
                </span>
              </a>
            )
          })}
        </div>
      </section>

      {/* MAIN CONTACT */}
      <section className="section contact-main">
        <div className="container contact-main__inner">
          <div className="contact-main__form-col">
            <div className="contact-main__intro">
              <span className="section-head__eyebrow">Get in touch</span>

              <h2 className="contact-main__heading">
                Tell us what you&apos;re trying to automate
              </h2>

              <p className="contact-main__subheading">
                Share a little context and we&apos;ll help you figure out the
                best way to use Nexora.
              </p>
            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="contact-form__row">
                <div className="contact-form__field">
                  <label htmlFor="name">Full name</label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={
                      errors.name ? 'name-error' : undefined
                    }
                  />

                  {errors.name && (
                    <span
                      className="contact-form__error"
                      id="name-error"
                    >
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="contact-form__field">
                  <label htmlFor="email">Work email</label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={
                      errors.email ? 'email-error' : undefined
                    }
                  />

                  {errors.email && (
                    <span
                      className="contact-form__error"
                      id="email-error"
                    >
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className="contact-form__field">
                <label htmlFor="company">
                  Company
                  <span className="contact-form__optional">
                    Optional
                  </span>
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Company name"
                  value={form.company}
                  onChange={handleChange}
                />
              </div>

              <div className="contact-form__field">
                <label htmlFor="message">
                  What would you like to automate?
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  placeholder="Tell us about your workflow, team, or the problem you're trying to solve..."
                  value={form.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? 'message-error' : undefined
                  }
                />

                {errors.message && (
                  <span
                    className="contact-form__error"
                    id="message-error"
                  >
                    {errors.message}
                  </span>
                )}
              </div>

              <div className="contact-form__actions">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  icon="ArrowRight"
                >
                  Send enquiry
                </Button>

                <a
                  href={buildWhatsappLink()}
                  className="contact-form__whatsapp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={18} strokeWidth={1.8} />
                  WhatsApp instead
                </a>
              </div>

              <div className="contact-form__destination">
                <Mail size={15} strokeWidth={1.8} />

                <span>
                  Enquiry will be addressed to{' '}
                  <a href={buildMailLink('Nexora enquiry')}>
                    {contact.emailSales}
                  </a>
                </span>
              </div>

              <p className="contact-form__note">
                Your enquiry opens in Gmail with the message details already
                filled in. Review it and press Send.
              </p>
            </form>
          </div>

          {/* SIDE INFORMATION */}
          <aside className="contact-main__info-col">
            <div className="contact-info-card">
              <span className="contact-info-card__eyebrow">
                Nexora
              </span>

              <div className="contact-info-card__heading-row">
                <h3>Talk to our team</h3>

                <span className="contact-info-card__mini-icon">
                  <MessageCircle size={16} strokeWidth={1.8} />
                </span>
              </div>

              <p className="contact-info-card__desc">
                For product walkthroughs, enterprise plans, onboarding or
                custom workflow discussions.
              </p>

              <a
                href={buildMailLink('Sales enquiry')}
                className="contact-info-card__link"
              >
                {contact.emailSales}
                <ArrowUpRight size={14} strokeWidth={1.8} />
              </a>
            </div>

            <div className="contact-info-card">
              <span className="contact-info-card__eyebrow">
                Office
              </span>

              <h3>{contact.address}</h3>

              <div className="contact-info-card__details">
                <p className="contact-info-card__row">
                  <Clock size={16} strokeWidth={1.8} />
                  <span>{contact.hours}</span>
                </p>

                <a
                  href={buildTelLink()}
                  className="contact-info-card__row contact-info-card__row--link"
                >
                  <Phone size={16} strokeWidth={1.8} />
                  <span>{contact.phoneDisplay}</span>
                </a>
              </div>
            </div>

            <div className="contact-info-card contact-info-card--accent">
              <span className="contact-info-card__icon">
                <Send size={18} strokeWidth={1.8} />
              </span>

              <span className="contact-info-card__eyebrow">
                Quick conversation
              </span>

              <h3>Prefer to message directly?</h3>

              <p className="contact-info-card__desc">
                Start a conversation on WhatsApp and reach the team directly.
              </p>

              <a
                href={buildWhatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="contact-info-card__link"
              >
                Start on WhatsApp
                <ArrowUpRight size={14} strokeWidth={1.8} />
              </a>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}