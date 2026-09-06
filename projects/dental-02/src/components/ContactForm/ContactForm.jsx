import { useState } from 'react'
import { Mail, MessageCircle } from 'lucide-react'
import Button from '../Button/Button.jsx'
import { treatments } from '../../data/treatments.js'
import {
  buildGmailLink,
  buildMailtoLink,
  buildWhatsappLink,
} from '../../data/site.js'
import './ContactForm.scss'

function getInitialTreatment() {
  const treatment = new URLSearchParams(window.location.search).get(
    'treatment',
  )

  if (!treatment) {
    return ''
  }

  const exists = treatments.some((item) => item.title === treatment)

  return exists ? treatment : ''
}

function buildEnquiryText(form) {
  const lines = [
    `Name: ${form.name || '—'}`,
    `Email: ${form.email || '—'}`,
    `Phone: ${form.phone || '—'}`,
    `Preferred treatment: ${form.treatment || '—'}`,
    `Preferred date: ${form.date || '—'}`,
    '',
    'Message:',
    form.message || '—',
  ]

  return lines.join('\n')
}

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    treatment: getInitialTreatment(),
    date: '',
    message: '',
  })

  const [errors, setErrors] = useState({})

  function handleChange(e) {
    const { name, value } = e.target

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  function validate() {
    const next = {}

    if (!form.name.trim()) {
      next.name = 'Please enter your name.'
    }

    if (!form.email.trim() && !form.phone.trim()) {
      next.email = 'Add an email or phone number so we can reach you.'
    }

    if (form.email.trim()) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

      if (!emailPattern.test(form.email.trim())) {
        next.email = 'Please enter a valid email address.'
      }
    }

    if (!form.message.trim()) {
      next.message = 'Let us know what you need help with.'
    }

    return next
  }

  function handleSend(channel) {
    const validation = validate()

    setErrors(validation)

    if (Object.keys(validation).length > 0) {
      return
    }

    const body = buildEnquiryText(form)

    const subject = `Appointment enquiry — ${
      form.treatment || 'General enquiry'
    }`

    if (channel === 'email') {
      const isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent,
        ) ||
        navigator.userAgentData?.mobile === true

      if (isMobile) {
        const mailtoUrl = buildMailtoLink({
          subject,
          body,
        })

        window.location.assign(mailtoUrl)
        return
      }

      const gmailUrl = buildGmailLink({
        subject,
        body,
      })

      window.location.assign(gmailUrl)
      return
    }

    if (channel === 'whatsapp') {
      const whatsappUrl = buildWhatsappLink(`${subject}\n\n${body}`)

      window.open(
        whatsappUrl,
        '_blank',
        'noopener,noreferrer',
      )
    }
  }

  return (
    <form
      className="contact-form"
      onSubmit={(e) => e.preventDefault()}
      noValidate
    >
      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="cf-name">Full name</label>

          <input
            id="cf-name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'cf-name-error' : undefined}
            autoComplete="name"
          />

          {errors.name && (
            <span
              className="contact-form__error"
              id="cf-name-error"
            >
              {errors.name}
            </span>
          )}
        </div>

        <div className="contact-form__field">
          <label htmlFor="cf-phone">Phone</label>

          <input
            id="cf-phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            autoComplete="tel"
          />
        </div>
      </div>

      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="cf-email">Email</label>

          <input
            id="cf-email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'cf-email-error' : undefined}
            autoComplete="email"
          />

          {errors.email && (
            <span
              className="contact-form__error"
              id="cf-email-error"
            >
              {errors.email}
            </span>
          )}
        </div>

        <div className="contact-form__field">
          <label htmlFor="cf-date">Preferred date</label>

          <input
            id="cf-date"
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="contact-form__field">
        <label htmlFor="cf-treatment">
          Preferred treatment
        </label>

        <select
          id="cf-treatment"
          name="treatment"
          value={form.treatment}
          onChange={handleChange}
        >
          <option value="">
            Select a treatment (optional)
          </option>

          {treatments.map((treatment) => (
            <option
              key={treatment.id}
              value={treatment.title}
            >
              {treatment.title}
            </option>
          ))}
        </select>
      </div>

      <div className="contact-form__field">
        <label htmlFor="cf-message">Message</label>

        <textarea
          id="cf-message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message ? 'cf-message-error' : undefined
          }
          placeholder="Tell us a little about what you're looking for..."
        />

        {errors.message && (
          <span
            className="contact-form__error"
            id="cf-message-error"
          >
            {errors.message}
          </span>
        )}
      </div>

      <div className="contact-form__actions">
        <Button
          type="button"
          variant="primary"
          size="lg"
          onClick={() => handleSend('email')}
        >
          <Mail
            size={16}
            className="contact-form__btn-icon"
          />
          Send via Email
        </Button>

        <Button
          type="button"
          variant="outline"
          size="lg"
          onClick={() => handleSend('whatsapp')}
        >
          <MessageCircle
            size={16}
            className="contact-form__btn-icon"
          />
          Send via WhatsApp
        </Button>
      </div>

      <p className="contact-form__note">
        Both options open a pre-filled message for you to review —
        nothing is sent automatically, and no appointment is
        confirmed until our team replies.
      </p>
    </form>
  )
}