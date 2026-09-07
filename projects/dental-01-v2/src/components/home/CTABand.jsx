import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import { clinicInfo } from '../../data/clinicInfo.js'
import styles from './CTABand.module.scss'

export default function CTABand({
  title = 'Ready to see what a calmer dental visit feels like?',
  text = 'Tell us what you need, and we\'ll match you with the right specialist — most enquiries get a response within one business day.',
}) {
  return (
    <section className="section section--tight">
      <Container>
        <div className={styles.band}>
          <div className={styles.copy}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.text}>{text}</p>
          </div>
          <div className={styles.actions}>
            <Button to="/contact" variant="onDark" showArrow>
              Book a visit
            </Button>
            <Button href={`tel:${clinicInfo.phone.replace(/[^+\d]/g, '')}`} variant="outlineLight">
              Call {clinicInfo.phoneDisplay}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
