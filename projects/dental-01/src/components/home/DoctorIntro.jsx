import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import Button from '../ui/Button.jsx'
import Icon from '../ui/Icon.jsx'
import { doctors } from '../../data/doctors.js'
import styles from './DoctorIntro.module.css'

const points = [
  'Every dentist trains and practices within a single specialty, not a broad general caseload',
  'Cases above a routine cleaning are reviewed by at least two clinicians before treatment begins',
  'Direct continuity — you see the same dentist across your full course of treatment',
]

export default function DoctorIntro() {
  const roster = doctors.slice(0, 3)

  return (
    <section className="section">
      <Container>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <SectionHeading eyebrow="Your care team" title="Specialists, not generalists" />
            <p className={styles.text}>
              Aurelia is built around five clinicians who each focus on a single discipline —
              cosmetic, orthodontic, implant, endodontic, and periodontal care — rather than one
              dentist attempting everything.
            </p>
            <ul className={styles.list}>
              {points.map((point) => (
                <li key={point} className={styles.listItem}>
                  <Icon name="check" size={18} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <Button to="/doctors" variant="secondary" showArrow>
              Meet the full team
            </Button>
          </div>

          <div className={styles.roster}>
            {roster.map((doctor) => (
              <div key={doctor.slug} className={styles.doctorCard}>
                <div className={styles.doctorPhoto}>
                  <img src={doctor.image} alt={doctor.name} loading="lazy" />
                </div>
                <p className={styles.doctorName}>{doctor.name}</p>
                <p className={styles.doctorRole}>{doctor.role}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
