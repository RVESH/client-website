import { useEffect, useMemo, useState } from 'react'
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import { site } from '../../data/site.js'
import { images } from '../../data/images.js'
import { services } from '../../data/services.js'
import styles from './Contact.module.scss'

function Contact() {
  useEffect(() => {
    document.title = 'Contact | Brightside Home Care'
  }, [])

  const phoneHref = `tel:${site.phone.replace(/[^\d+]/g, '')}`

  const quickContacts = useMemo(
    () => [
      {
        id: 'call',
        label: 'Call us',
        value: site.phoneDisplay || site.phone,
        href: phoneHref,
      },
      {
        id: 'whatsapp',
        label: 'WhatsApp',
        value: 'Message us directly',
        href: site.whatsappLink,
      },
      {
        id: 'email',
        label: 'Email',
        value: site.email,
        href: `mailto:${site.email}`,
      },
    ],
    [phoneHref],
  )

  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }))

    if (submitted) {
      setSubmitted(false)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const name = form.name.trim()
    const phone = form.phone.trim()
    const service = form.service.trim()
    const message = form.message.trim()

    if (!name || !phone) {
      return
    }

    const whatsappMessage = [
      `Hello Brightside Home Care,`,
      '',
      `I'd like to request a cleaning quote.`,
      '',
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Service: ${service || 'Not specified'}`,
      '',
      `Details:`,
      message || 'No additional details provided.',
    ].join('\n')

    const whatsappUrl =
      `${site.whatsappLink}?text=${encodeURIComponent(
        whatsappMessage,
      )}`

    window.open(
      whatsappUrl,
      '_blank',
      'noopener,noreferrer',
    )

    setSubmitted(true)

    setForm({
      name: '',
      phone: '',
      service: '',
      message: '',
    })
  }

  return (
    <>
      <section className={styles.intro}>
        <div className="container">
          <SectionHeading
            eyebrow="Get in touch"
            title="Let's find a plan that fits your space"
            description="Send us a few details and we'll get back to you with a straightforward quote — usually within one business day."
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
                target={
                  contact.id === 'whatsapp'
                    ? '_blank'
                    : undefined
                }
                rel={
                  contact.id === 'whatsapp'
                    ? 'noopener noreferrer'
                    : undefined
                }
                className={styles.quickCard}
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
            <h2>Send an enquiry</h2>

            <p className={styles.formHint}>
              Fill in your details and we&apos;ll open WhatsApp with
              your enquiry ready to send to {site.companyName}.
            </p>

            <div className={styles.field}>
              <label htmlFor="contact-name">
                Full name
              </label>

              <input
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Jamie Alvarez"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-phone">
                Phone number
              </label>

              <input
                id="contact-phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="(415) 555-0100"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-service">
                Service interested in
              </label>

              <select
                id="contact-service"
                name="service"
                value={form.service}
                onChange={handleChange}
              >
                <option value="">
                  Select a service
                </option>

                {services.map((service) => (
                  <option
                    key={service.id}
                    value={service.title}
                  >
                    {service.title}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-message">
                Tell us about your space
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                placeholder="Number of rooms, preferred days, property type, or anything else useful to know."
              />
            </div>

            <button
              type="submit"
              className={styles.submit}
            >
              Send enquiry
            </button>

            {submitted && (
              <p
                className={styles.success}
                role="status"
              >
                WhatsApp has been opened with your enquiry details.
              </p>
            )}
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
              <h3>Address</h3>

              <p>{site.address.line1}</p>
              <p>{site.address.line2}</p>
              <p>
                {site.address.city},{' '}
                {site.address.region}{' '}
                {site.address.postalCode}
              </p>
            </div>

            <div className={styles.infoBlock}>
              <h3>Hours</h3>

              <ul className={styles.hours}>
                {site.hours.map((hour) => (
                  <li key={hour.day}>
                    <span>{hour.day}</span>
                    <span>{hour.time}</span>
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