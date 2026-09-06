import { useEffect } from 'react'
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import ContactForm from '../../components/ContactForm/ContactForm.jsx'
import { site } from '../../data/site.js'
import styles from './Contact.module.scss'

const mapQuery = encodeURIComponent(site.address.full)

const quickContacts = [
  { id: 'call', label: 'Call us', value: site.phoneDisplay, href: `tel:${site.phone}` },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    value: 'Message us directly',
    href: `${site.whatsappLink}?text=${encodeURIComponent('Hi Keystone, I have a question.')}`,
  },
  {
    id: 'email',
    label: 'Email',
    value: site.email,
    href: site.emailLink,
  },
]

function Contact() {
  useEffect(() => {
    document.title = 'Contact | Keystone Learning'
  }, [])

  return (
    <>
      <section className={styles.intro}>
        <div className="container">
          <SectionHeading
            eyebrow="Get in touch"
            title="Let's find the right starting point"
            description="Send an enquiry by Gmail or WhatsApp, or reach out directly — a mentor will get back to you, usually within one business day."
          />
        </div>
      </section>

      <section className={styles.quickSection}>
        <div className="container">
          <div className={styles.quickGrid}>
            {quickContacts.map((c) => (
              <a
                key={c.id}
                href={c.href}
                className={styles.quickCard}
                target={c.id === 'call' || c.id === 'email' ? undefined : '_blank'}
                rel={c.id === 'call' || c.id === 'email' ? undefined : 'noopener noreferrer'}
              >
                <span className={styles.quickLabel}>{c.label}</span>
                <span className={styles.quickValue}>{c.value}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className={`container ${styles.grid}`}>
          <ContactForm />

          <div className={styles.infoCol}>
            <div className={styles.mapFrame}>
              <iframe
                title="Keystone Learning office location"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className={styles.infoBlock}>
              <h3>Address</h3>
              <p>{site.address.line1}</p>
              <p>{site.address.line2}</p>
              <p>
                {site.address.city}, {site.address.region} {site.address.postalCode}
              </p>
            </div>

            <div className={styles.infoBlock}>
              <h3>Hours</h3>
              <ul className={styles.hours}>
                {site.hours.map((h) => (
                  <li key={h.day}>
                    <span>{h.day}</span>
                    <span>{h.time}</span>
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
