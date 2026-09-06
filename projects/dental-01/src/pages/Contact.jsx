import PageHero from '../components/ui/PageHero.jsx'
import Container from '../components/ui/Container.jsx'
import Icon from '../components/ui/Icon.jsx'
import Button from '../components/ui/Button.jsx'
import ContactForm from '../components/contact/ContactForm.jsx'
import ContactInfo from '../components/contact/ContactInfo.jsx'
import { clinicInfo } from '../data/clinicInfo.js'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's find you the right appointment"
        description="Send an enquiry, call, or message us on WhatsApp — whichever is easiest. We typically reply within one business day."
      />

      <section className="section">
        <Container>
          <div className={styles.grid}>
            <ContactForm />
            <ContactInfo />
          </div>
        </Container>
      </section>

      <section className={`section section--tight ${styles.emergency}`}>
        <Container>
          <div className={styles.emergencyInner}>
            <div className={styles.emergencyText}>
              <span className={styles.emergencyIcon}>
                <Icon name="pulse" size={20} />
              </span>
              <div>
                <h3 className={styles.emergencyTitle}>Dental emergency?</h3>
                <p className={styles.emergencyDesc}>
                  Call us directly for same-day emergency appointments — broken teeth, acute
                  pain, or lost restorations.
                </p>
              </div>
            </div>
            <Button href={`tel:${clinicInfo.phone.replace(/[^+\d]/g, '')}`} showArrow>
              Call {clinicInfo.phoneDisplay}
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
