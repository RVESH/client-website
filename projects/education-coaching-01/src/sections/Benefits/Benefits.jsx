import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import { site } from '../../data/site.js'
import styles from './Benefits.module.scss'

function Benefits() {
  return (
    <section className="section section--tint">
      <div className="container">
        <SectionHeading
          eyebrow="Why Keystone"
          title="Built for people who want structure, not just content"
          description="Anyone can publish a course. What actually gets people to finish and grow is what happens around it."
        />

        <div className={styles.grid}>
          {site.benefits.map((benefit) => (
            <div key={benefit.title} className={styles.item}>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
