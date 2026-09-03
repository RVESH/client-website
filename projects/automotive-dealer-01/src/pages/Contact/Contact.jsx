import SectionHeading from '../../components/SectionHeading'
import Button from '../../components/Button'
import { images } from '../../data/images'
import {
  site,
  whatsappLink,
  telLink,
} from '../../data/site'
import styles from './Contact.module.scss'

function buildGmailLink() {
  const subject = 'General Enquiry — Vantage Motor Co.'

  const body = [
    'Hello Vantage Motor Co. team,',
    '',
    'I would like to enquire about one of your vehicles.',
    '',
    'Please share the available details, pricing, and next steps.',
    '',
    'Thank you.',
  ].join('\n')

  return (
    'https://mail.google.com/mail/?view=cm&fs=1' +
    `&to=${encodeURIComponent(site.contact.email)}` +
    `&su=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`
  )
}

export default function Contact() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className="container">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Send an enquiry, or come by the showroom"
            description="Every enquiry reaches a real member of our sales team directly — no ticketing queue, no auto-responder."
            inverse
          />
        </div>
      </header>

      <section className={['container', styles.grid].join(' ')}>
        <div className={styles.imageCol}>
          <img
            src={images.contact.src}
            alt={images.contact.alt}
            loading="lazy"
          />
        </div>

        <div className={styles.detailsCol}>
          <div className={styles.primaryAction}>
            <h2 className={styles.blockTitle}>
              Send an enquiry
            </h2>

            <p className={styles.blockText}>
              The fastest way to reach us. Opens a WhatsApp
              conversation directly with our sales team.
            </p>

            <Button
              href={whatsappLink(
                'Hello, I have a question for Vantage Motor Co.'
              )}
              variant="accent"
            >
              Message Us on WhatsApp
            </Button>
          </div>

          <div className={styles.infoGrid}>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>
                Phone
              </span>

              <a
                href={telLink()}
                className={styles.infoValue}
              >
                {site.contact.phoneDisplay}
              </a>
            </div>

            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>
                Email
              </span>

              <a
                href={buildGmailLink()}
                className={styles.infoValue}
              >
                {site.contact.email}
              </a>
            </div>

            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>
                Address
              </span>

              <address className={styles.infoValue}>
                {site.contact.address.line1}
                <br />
                {site.contact.address.line2}
                <br />
                {site.contact.address.country}
              </address>
            </div>

            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>
                Hours
              </span>

              <div className={styles.hoursList}>
                {site.contact.hours.map((h) => (
                  <div
                    className={styles.hoursRow}
                    key={h.days}
                  >
                    <span>{h.days}</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.secondaryActions}>
            <Button
              href={telLink()}
              variant="ghost"
            >
              Call the Showroom
            </Button>

            <a
              href={buildGmailLink()}
              className={styles.emailButton}
            >
              Send an Email
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}