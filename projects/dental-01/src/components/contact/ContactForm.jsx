import { useState } from 'react'
import Button from '../ui/Button.jsx'
import Icon from '../ui/Icon.jsx'
import { treatments } from '../../data/treatments.js'
import styles from './ContactForm.module.css'

const initialValues = {
  name: '',
  email: '',
  phone: '',
  treatment: '',
  message: '',
}

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your full name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'That email address doesn\'t look right.'
  }
  if (!values.phone.trim()) errors.phone = 'Please enter a phone number.'
  if (!values.message.trim()) errors.message = 'Let us know a little about what you need.'
  return errors
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      // Front-end showcase only — no backend is wired up to receive this enquiry.
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div className={styles.card}>
        <div className={styles.successState}>
          <span className={styles.successIcon}>
            <Icon name="check" size={26} />
          </span>
          <h3 className={styles.successTitle}>Enquiry received</h3>
          <p className={styles.successText}>
            Thank you, {values.name.split(' ')[0]}. A member of our patient care team will reach
            out to {values.email} within one business day to confirm your appointment.
          </p>
          <div style={{ marginTop: 24 }}>
            <Button
              variant="secondary"
              onClick={() => {
                setValues(initialValues)
                setSubmitted(false)
              }}
            >
              Submit another enquiry
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <form className={styles.card} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="name">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className={styles.input}
            placeholder="Jordan Ellis"
            value={values.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <span id="name-error" className={styles.errorText} role="alert">
              {errors.name}
            </span>
          )}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="phone">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={styles.input}
            placeholder="(415) 555-0148"
            value={values.phone}
            onChange={handleChange}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && (
            <span id="phone-error" className={styles.errorText} role="alert">
              {errors.phone}
            </span>
          )}
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="email">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className={styles.input}
          placeholder="jordan@email.com"
          value={values.email}
          onChange={handleChange}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <span id="email-error" className={styles.errorText} role="alert">
            {errors.email}
          </span>
        )}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="treatment">
          Treatment of interest <span className={styles.optional}>(optional)</span>
        </label>
        <select
          id="treatment"
          name="treatment"
          className={styles.select}
          value={values.treatment}
          onChange={handleChange}
        >
          <option value="">Not sure yet</option>
          {treatments.map((treatment) => (
            <option key={treatment.slug} value={treatment.slug}>
              {treatment.name}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="message">
          What brings you in?
        </label>
        <textarea
          id="message"
          name="message"
          className={styles.textarea}
          placeholder="Tell us a little about what you need, or any concerns you have."
          value={values.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <span id="message-error" className={styles.errorText} role="alert">
            {errors.message}
          </span>
        )}
      </div>

      <div className={styles.footerRow}>
        <Button type="submit" showArrow>
          Send enquiry
        </Button>
        <p className={styles.disclaimer}>
          This is a showcase form — no data is sent or stored anywhere.
        </p>
      </div>
    </form>
  )
}
