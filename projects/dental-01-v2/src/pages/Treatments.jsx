import PageHero from '../components/ui/PageHero.jsx'
import Container from '../components/ui/Container.jsx'
import Icon from '../components/ui/Icon.jsx'
import TreatmentCard from '../components/treatments/TreatmentCard.jsx'
import CTABand from '../components/home/CTABand.jsx'
import { treatments } from '../data/treatments.js'
import styles from './Treatments.module.scss'

export default function Treatments() {
  return (
    <>
      <PageHero
        eyebrow="Treatments"
        title="Every treatment, planned before it's performed"
        description="We don't sell procedures one at a time. Each visit starts with a digital scan and a clear plan, so you understand the why before the what."
      />

      <section className="section">
        <Container>
          <div className={styles.grid}>
            {treatments.map((treatment) => (
              <TreatmentCard key={treatment.slug} treatment={treatment} />
            ))}
          </div>

          <div className={styles.note}>
            <Icon name="shield" size={22} className={styles.noteIcon} />
            <p className={styles.noteText}>
              <strong>Not sure which treatment you need?</strong> Most patients start with a
              comprehensive exam and digital scan — from there, we'll recommend a plan and walk
              you through the options before anything is booked.
            </p>
          </div>
        </Container>
      </section>

      <CTABand
        title="Have a specific concern in mind?"
        text="Describe what's going on and we'll point you to the right specialist — no need to self-diagnose which treatment you need."
      />
    </>
  )
}
