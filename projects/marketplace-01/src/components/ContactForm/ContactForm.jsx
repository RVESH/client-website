import { useState } from 'react'
import { Mail, MessageCircle } from 'lucide-react'
import Button from '../Button/Button.jsx'
import { categories } from '../../data/categories.js'
import { buildGmailLink, buildWhatsappLink } from '../../data/site.js'
import './ContactForm.scss'

function buildEnquiryText(form) {
  const lines = [
    `Name: ${form.name || '—'}`,
    `Email: ${form.email || '—'}`,
    `Phone: ${form.phone || '—'}`,
    `Product / category: ${form.productOrCategory || '—'}`,
    '',
    'Message:',
    form.message || '—',
  ]
  return lines.join('\n')
}

export default function ContactForm({ initialProduct = '' }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    productOrCategory: initialProduct,
    message: '',
  })
  const [errors, setErrors] = useState({})

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function validate() {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.email.trim() && !form.phone.trim()) {
      next.email = 'Add an email or phone number so we can reach you.'
    }
    if (!form.message.trim()) next.message = 'Let us know what you need help with.'
    return next
  }

  function openLink(url) {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  function handleSend(channel) {
    const validation = validate()
    setErrors(validation)
    if (Object.keys(validation).length > 0) return

    const body = buildEnquiryText(form)
    const subject = `INDEX Market enquiry — ${form.productOrCategory || 'General'}`

    if (channel === 'gmail') {
      openLink(buildGmailLink({ subject, body }))
    } else if (channel === 'whatsapp') {
      openLink(buildWhatsappLink(`${subject}\n\n${body}`))
    }
  }

  return (
    <form className="contact-form" onSubmit={(e) => e.preventDefault()} noValidate>
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
            <span className="contact-form__error" id="cf-name-error">
              {errors.name}
            </span>
          )}
        </div>

        <div className="contact-form__field">
          <label htmlFor="cf-phone">Phone</label>
          <input id="cf-phone" name="phone" type="tel" value={form.phone} onChange={handleChange} autoComplete="tel" />
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
            <span className="contact-form__error" id="cf-email-error">
              {errors.email}
            </span>
          )}
        </div>

        <div className="contact-form__field">
          <label htmlFor="cf-product">Product / category</label>
          <input
            id="cf-product"
            name="productOrCategory"
            type="text"
            list="cf-category-options"
            value={form.productOrCategory}
            onChange={handleChange}
            placeholder="e.g. a product name or category"
          />
          <datalist id="cf-category-options">
            {categories.map((c) => (
              <option key={c.id} value={c.name} />
            ))}
          </datalist>
        </div>
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
          aria-describedby={errors.message ? 'cf-message-error' : undefined}
          placeholder="Tell us what you're looking for..."
        />
        {errors.message && (
          <span className="contact-form__error" id="cf-message-error">
            {errors.message}
          </span>
        )}
      </div>

      <div className="contact-form__actions">
        <Button type="button" variant="primary" size="lg" onClick={() => handleSend('gmail')}>
          <Mail size={16} className="contact-form__btn-icon" /> Send via Gmail
        </Button>
        <Button type="button" variant="secondary" size="lg" onClick={() => handleSend('whatsapp')}>
          <MessageCircle size={16} className="contact-form__btn-icon" /> Send via WhatsApp
        </Button>
      </div>

      <p className="contact-form__note">
        Both options open a pre-filled message for you to review — nothing is sent automatically, and no order or
        enquiry is confirmed until our team replies.
      </p>
    </form>
  )
}
