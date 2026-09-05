import { useEffect } from 'react'
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import ProgramCard from '../../components/ProgramCard/ProgramCard.jsx'
import CTA from '../../components/CTA/CTA.jsx'
import { programs } from '../../data/programs.js'
import styles from './Programs.module.scss'

function Programs() {
  useEffect(() => {
    document.title = 'Programs | Keystone Learning'
  }, [])

  return (
    <>
      <section className={styles.intro}>
        <div className="container">
          <SectionHeading
            eyebrow="Coaching & learning programs"
            title="For when a single course isn't the whole answer"
            description="Programs go deeper than individual courses — 1:1 coaching, cohort-based tracks, and hybrid mentorship built around a specific goal."
          />
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div className={styles.list}>
            {programs.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Still deciding which program fits?"
        description="A quick call with a mentor is usually the fastest way to figure that out — no pressure, no obligation."
      />
    </>
  )
}

export default Programs
