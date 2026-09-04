import { useRef, useState } from 'react'
import Button from '../Button'
import {
  buildEnquiryMessage,
  buildEnquirySubject,
  gmailComposeLink,
  mailLink,
  whatsappLink,
} from '../../utils/links'
import styles from './ContactForm.module.scss'

const EVENT_TYPES = [
  'Wedding',
  'Elopement',
  'Vow Renewal',
  'Engagement Party',
  'Corporate Event',
  'Private Celebration',
  'Other',
]

const initialFields = {
  name: '',
  email: '',
  phone: '',
  eventType: '',
  eventDate: '',
  guestCount: '',
  venue: '',
  budget: '',
  message: '',
}

export default function ContactForm() {
  const [fields, setFields] = useState(initialFields)
  const formRef = useRef(null)

  const update = (key) => (e) => setFields((prev) => ({ ...prev, [key]: e.target.value }))

  const validate = () => {
    if (!formRef.current) return false
    return formRef.current.reportValidity()
  }

  const handleEmail = () => {
    if (!validate()) return
    const subject = buildEnquirySubject(fields)
    const body = buildEnquiryMessage(fields)
    window.open(gmailComposeLink(subject, body), '_blank', 'noopener,noreferrer')
  }

  const handleWhatsApp = () => {
    if (!validate()) return
    const message = buildEnquiryMessage(fields)
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer')
  }

  const mailtoHref = mailLink(buildEnquirySubject(fields), buildEnquiryMessage(fields))

  return (
    <form
      ref={formRef}
      className={styles.form}
      onSubmit={(e) => e.preventDefault()}
      noValidate={false}
    >
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="name">Full Name *</label>
          <input
            id="name"
            type="text"
            required
            value={fields.name}
            onChange={update('name')}
            autoComplete="name"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            type="email"
            required
            value={fields.email}
            onChange={update('email')}
            autoComplete="email"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="phone">Phone *</label>
          <input
            id="phone"
            type="tel"
            required
            value={fields.phone}
            onChange={update('phone')}
            autoComplete="tel"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="eventType">Event Type *</label>
          <select id="eventType" required value={fields.eventType} onChange={update('eventType')}>
            <option value="" disabled>
              Select an event type
            </option>
            {EVENT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="eventDate">Event Date *</label>
          <input
            id="eventDate"
            type="date"
            required
            value={fields.eventDate}
            onChange={update('eventDate')}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="guestCount">Guest Count *</label>
          <input
            id="guestCount"
            type="number"
            min="1"
            required
            value={fields.guestCount}
            onChange={update('guestCount')}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="venue">Venue / Location *</label>
          <input
            id="venue"
            type="text"
            required
            placeholder="Booked venue, city, or region"
            value={fields.venue}
            onChange={update('venue')}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="budget">Budget (Optional)</label>
          <input
            id="budget"
            type="text"
            placeholder="e.g. $40,000 – $60,000"
            value={fields.budget}
            onChange={update('budget')}
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          rows={5}
          required
          placeholder="Tell us a little about your vision for the day…"
          value={fields.message}
          onChange={update('message')}
        />
      </div>

      <div className={styles.actions}>
        <Button type="button" variant="primary" onClick={handleEmail}>
          Send Enquiry via Email
        </Button>
        <Button type="button" variant="ghost" onClick={handleWhatsApp}>
          Send via WhatsApp
        </Button>
      </div>

      <p className={styles.note}>
        These buttons open your email or WhatsApp app with the details above already filled
        in — nothing is sent automatically. You can review the message and send it yourself.
        Prefer your own mail app?{' '}
        <a href={mailtoHref} className={styles.inlineLink}>
          Use mailto instead
        </a>
        .
      </p>
    </form>
  )
}
