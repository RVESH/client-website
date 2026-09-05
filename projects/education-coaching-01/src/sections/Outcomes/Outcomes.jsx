import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import { site } from '../../data/site.js'
import styles from './Outcomes.module.scss'

function Outcomes() {
  return (
    <section className="section section--tint">
      <div className="container">
        <SectionHeading
          eyebrow="Outcomes"
          title="Results learners actually report back"
          description="Not vanity metrics — these track what happens after a course or program ends."
        />

        <div className={styles.grid}>
          {site.outcomes.map((outcome) => (
            <div key={outcome.label} className={styles.card}>
              <span className={styles.value}>{outcome.value}</span>
              <p className={styles.label}>{outcome.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Outcomes
