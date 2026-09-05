import { useRef, useState } from 'react'
import { courses } from '../../data/courses.js'
import { programs } from '../../data/programs.js'
import { site } from '../../data/site.js'
import styles from './ContactForm.module.scss'

const timingOptions = [
  { value: '', label: 'No preference' },
  { value: 'Weekday mornings', label: 'Weekday mornings' },
  { value: 'Weekday evenings', label: 'Weekday evenings' },
  { value: 'Weekends', label: 'Weekends' },
  { value: 'Flexible', label: 'Flexible / no preference' },
]

function buildMessageBody(form) {
  const lines = [
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    `Phone: ${form.phone}`,
    `Course / program: ${form.interest || 'Not specified'}`,
    `Preferred timing: ${form.timing || 'No preference'}`,
    '',
    form.message,
  ]
  return lines.join('\n')
}

function ContactForm() {
  const formRef = useRef(null)

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    timing: '',
    message: '',
  })

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  // Both send paths reuse the browser's native constraint validation
  // (reportValidity) even though only the Gmail button is a true
  // type="submit" — this keeps the same built-in validation UI for
  // whichever channel the visitor picks, without a fake success state.
  const isValid = () => {
    if (!formRef.current) return true
    return formRef.current.reportValidity()
  }

  const sendViaGmail = (e) => {
    e.preventDefault()
    if (!isValid()) return
    const subject = `Enquiry — ${form.interest || 'General'}`
    const body = buildMessageBody(form)
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      site.email,
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const sendViaWhatsApp = () => {
    if (!isValid()) return
    const text = `Hi Keystone, I'd like to ask about:\n\n${buildMessageBody(form)}`
    const url = `${site.whatsappLink}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <form ref={formRef} className={styles.form} onSubmit={sendViaGmail}>
      <h2>Send an enquiry</h2>
      <p className={styles.hint}>
        Choose how you'd like to reach us — either option opens with your
        details pre-filled. You review and send it yourself; nothing is
        submitted from this page.
      </p>

      <div className={styles.fieldRow}>
        <div className={styles.field}>
          <label htmlFor="name">Full name</label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange('name')}
            placeholder="Jamie Alvarez"
            autoComplete="name"
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange('email')}
            placeholder="jamie@email.com"
            autoComplete="email"
          />
        </div>
      </div>

      <div className={styles.fieldRow}>
        <div className={styles.field}>
          <label htmlFor="phone">Phone number</label>
          <input
            id="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange('phone')}
            placeholder="(617) 555-0100"
            autoComplete="tel"
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="timing">Preferred timing</label>
          <select id="timing" value={form.timing} onChange={handleChange('timing')}>
            {timingOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="interest">Course or program you're interested in</label>
        <select id="interest" value={form.interest} onChange={handleChange('interest')}>
          <option value="">Not sure yet / general enquiry</option>
          <optgroup label="Courses">
            {courses.map((c) => (
              <option key={c.id} value={c.title}>
                {c.title}
              </option>
            ))}
          </optgroup>
          <optgroup label="Programs">
            {programs.map((p) => (
              <option key={p.id} value={p.title}>
                {p.title}
              </option>
            ))}
          </optgroup>
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          rows="5"
          required
          value={form.message}
          onChange={handleChange('message')}
          placeholder="Tell us a bit about your goals and where you're starting from."
        />
      </div>

      <div className={styles.actions}>
        <button type="submit" className={styles.gmailButton}>
          Send via Gmail
        </button>
        <button type="button" className={styles.whatsappButton} onClick={sendViaWhatsApp}>
          Send via WhatsApp
        </button>
      </div>
    </form>
  )
}

export default ContactForm
