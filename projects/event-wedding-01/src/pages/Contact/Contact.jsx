import SectionHeading from '../../components/SectionHeading'
import ContactForm from '../../components/ContactForm'
import { site } from '../../data/site'
import { telLink, whatsappLink, directionsLink } from '../../utils/links'
import styles from './Contact.module.scss'

export default function Contact() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className="container">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Let's start planning"
            description="Share a few details about your celebration and we will respond within one business day. Prefer to talk it through first? Call or message us directly."
            inverse
          />
        </div>
      </header>

      <section className={['container', styles.grid].join(' ')}>
        <div className={styles.formCol}>
          <h2 className={styles.formTitle}>Send an Enquiry</h2>
          <ContactForm />
        </div>

        <div className={styles.infoCol}>
          <div className={styles.infoBlock}>
            <span className={styles.infoLabel}>Phone</span>
            <a href={telLink()} className={styles.infoValue}>
              {site.contact.phoneDisplay}
            </a>
          </div>

          <div className={styles.infoBlock}>
            <span className={styles.infoLabel}>Email</span>
            <a href={`mailto:${site.contact.email}`} className={styles.infoValue}>
              {site.contact.email}
            </a>
          </div>

          <div className={styles.infoBlock}>
            <span className={styles.infoLabel}>WhatsApp</span>
            <a
              href={whatsappLink('Hello, I have a question for Amaranth & Oak.')}
              className={styles.infoValue}
              target="_blank"
              rel="noopener noreferrer"
            >
              Message Us
            </a>
          </div>

          <div className={styles.infoBlock}>
            <span className={styles.infoLabel}>Studio Address</span>
            <address className={styles.infoValue}>
              {site.contact.address.line1}
              <br />
              {site.contact.address.line2}
              <br />
              {site.contact.address.country}
            </address>
          </div>

          <div className={styles.infoBlock}>
            <span className={styles.infoLabel}>Studio Hours</span>
            <div className={styles.hoursList}>
              {site.contact.hours.map((h) => (
                <div className={styles.hoursRow} key={h.days}>
                  <span>{h.days}</span>
                  <span>{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.mapCard}>
            <div className={styles.mapPin} aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
                <path
                  d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
                <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </div>
            <p className={styles.mapText}>
              {site.contact.address.line1}, {site.contact.address.line2}
            </p>
            <a
              href={directionsLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapLink}
            >
              Get Directions →
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
