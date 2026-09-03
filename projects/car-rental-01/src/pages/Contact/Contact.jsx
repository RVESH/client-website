import { useEffect, useState } from 'react'
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import Button from '../../components/Button/Button.jsx'
import { site } from '../../data/site.js'
import { locations } from '../../data/locations.js'
import { images } from '../../data/images.js'
import styles from './Contact.module.css'

const createGmailComposeUrl = ({
  to,
  subject = '',
  body = '',
}) => {
  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to,
    su: subject,
    body,
  })

  return `https://mail.google.com/mail/?${params.toString()}`
}

const quickContacts = [
  {
    id: 'call',
    label: 'Call us',
    value: site.phoneDisplay,
    href: `tel:${site.phone}`,
  },
  {
    id: 'email',
    label: 'Email',
    value: site.email,
    href: createGmailComposeUrl({
      to: site.email,
      subject: 'Enquiry — Auric Motors',
      body: [
        'Hello Auric Motors,',
        '',
        'I would like to enquire about your vehicle rental services.',
        '',
        'Thank you.',
      ].join('\n'),
    }),
  },
  {
    id: 'hours',
    label: 'Reservations',
    value: 'Available 24/7',
    href: `tel:${site.phone}`,
  },
]

function Contact() {
  useEffect(() => {
    document.title = 'Contact | Auric Motors'
  }, [])

  const [form, setForm] = useState({
    name: '',
    phone: '',
    location: locations[0]?.id || '',
    pickupDate: '',
    returnDate: '',
    message: '',
  })

  const handleChange = (field) => (event) => {
    setForm((previous) => ({
      ...previous,
      [field]: event.target.value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const locationName =
      locations.find(
        (location) => location.id === form.location,
      )?.city || form.location

    const subject = `Reservation enquiry — ${locationName}`

    const body = [
      'Hello Auric Motors,',
      '',
      'I would like to enquire about a vehicle reservation.',
      '',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Pickup location: ${locationName}`,
      `Pickup date: ${form.pickupDate || 'Not specified'}`,
      `Return date: ${form.returnDate || 'Not specified'}`,
      '',
      'Additional details:',
      form.message || 'None provided',
      '',
      'Thank you.',
    ].join('\n')

    const composeUrl = createGmailComposeUrl({
      to: site.email,
      subject,
      body,
    })

    window.open(composeUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <section className={styles.intro}>
        <div className="container">
          <SectionHeading
            eyebrow="Get in touch"
            title="Let's get you on the road"
            description="Send a reservation enquiry and our team will confirm pricing and availability — usually within one business day."
          />
        </div>
      </section>

      <section className={styles.quickSection}>
        <div className="container">
          <div className={styles.quickGrid}>
            {quickContacts.map((contact) => (
              <a
                key={contact.id}
                href={contact.href}
                className={styles.quickCard}
                target={
                  contact.id === 'email'
                    ? '_blank'
                    : undefined
                }
                rel={
                  contact.id === 'email'
                    ? 'noreferrer'
                    : undefined
                }
              >
                <span className={styles.quickLabel}>
                  {contact.label}
                </span>

                <span className={styles.quickValue}>
                  {contact.value}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className={`container ${styles.grid}`}>
          <form
            className={styles.form}
            onSubmit={handleSubmit}
          >
            <h2>Send a reservation enquiry</h2>

            <p className={styles.formHint}>
              Your enquiry will open in Gmail with the
              details filled in. Review it and press Send.
            </p>

            <div className={styles.fieldRow}>
              <div className={styles.field}>
                <label htmlFor="name">
                  Full name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange('name')}
                  placeholder="Jordan Lee"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="phone">
                  Phone number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  value={form.phone}
                  onChange={handleChange('phone')}
                  placeholder="(512) 555-0100"
                />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="location">
                Pickup location
              </label>

              <select
                id="location"
                name="location"
                value={form.location}
                onChange={handleChange('location')}
              >
                {locations.map((location) => (
                  <option
                    key={location.id}
                    value={location.id}
                  >
                    {location.city}, {location.state}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.fieldRow}>
              <div className={styles.field}>
                <label htmlFor="pickupDate">
                  Pickup date
                </label>

                <input
                  id="pickupDate"
                  name="pickupDate"
                  type="date"
                  value={form.pickupDate}
                  onChange={handleChange(
                    'pickupDate',
                  )}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="returnDate">
                  Return date
                </label>

                <input
                  id="returnDate"
                  name="returnDate"
                  type="date"
                  value={form.returnDate}
                  onChange={handleChange(
                    'returnDate',
                  )}
                />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="message">
                Anything else we should know?
              </label>

              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange('message')}
                placeholder="Vehicle type you have in mind, drop-off city if different, etc."
              />
            </div>

            <Button
              type="submit"
              variant="accent"
              className={styles.submit}
            >
              Send enquiry
            </Button>
          </form>

          <div className={styles.infoCol}>
            <div className={styles.infoImage}>
              <img
                src={images.contact01.src}
                alt={images.contact01.alt}
                loading="lazy"
                width="560"
                height="420"
              />
            </div>

            <div className={styles.infoBlock}>
              <h3>Reservations</h3>

              <p>{site.phoneDisplay}</p>
              <p>{site.email}</p>

              <p className={styles.muted}>
                Staffed 24/7
              </p>
            </div>

            <div className={styles.infoBlock}>
              <h3>Nearest locations</h3>

              <ul className={styles.locationList}>
                {locations.slice(0, 4).map((location) => (
                  <li key={location.id}>
                    <span>
                      {location.city}, {location.state}
                    </span>

                    <span className={styles.code}>
                      {location.code}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact