import PageHero from '../components/ui/PageHero.jsx'
import Container from '../components/ui/Container.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import Icon from '../components/ui/Icon.jsx'
import DoctorCard from '../components/doctors/DoctorCard.jsx'
import CTABand from '../components/home/CTABand.jsx'
import { doctors } from '../data/doctors.js'
import styles from './Doctors.module.scss'

const approach = [
  {
    icon: 'team',
    title: 'Collaborative case review',
    text: 'Complex cases are discussed across specialties before treatment starts, not handed off after something goes wrong.',
  },
  {
    icon: 'calendar',
    title: 'Continuity of care',
    text: 'You work with the same clinician throughout a course of treatment — no rotating faces mid-plan.',
  },
  {
    icon: 'shield',
    title: 'Ongoing education',
    text: 'Every dentist completes structured continuing education each year, beyond the state minimum requirement.',
  },
]

export default function Doctors() {
  return (
    <>
      <PageHero
        eyebrow="Our team"
        title="Five specialists, one coordinated plan"
        description="Rather than one dentist covering every discipline, Aurelia is built around clinicians who each focus on a single area of dentistry."
      />

      <section className="section">
        <Container>
          <div className={styles.grid}>
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.slug} doctor={doctor} />
            ))}
          </div>
        </Container>
      </section>

      <section className={`section ${styles.approach}`}>
        <Container>
          <SectionHeading
            eyebrow="How we work together"
            title="What specialization actually changes"
            description="It affects how cases get planned, reviewed, and handed between clinicians — not just the letters after each name."
          />
          <div className={styles.approachGrid}>
            {approach.map((item) => (
              <div key={item.title} className={styles.approachItem}>
                <span className={styles.approachIcon}>
                  <Icon name={item.icon} size={21} />
                </span>
                <h3 className={styles.approachTitle}>{item.title}</h3>
                <p className={styles.approachText}>{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        title="Want to know who you'd be working with?"
        text="Tell us what brings you in, and we'll match you with the right specialist before your first visit."
      />
    </>
  )
}
