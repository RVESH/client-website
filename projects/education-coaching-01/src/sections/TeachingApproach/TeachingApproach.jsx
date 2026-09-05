import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import { site } from '../../data/site.js'
import { images } from '../../data/images.js'
import styles from './TeachingApproach.module.scss'

function TeachingApproach() {
  return (
    <section className="section">
      <div className={`container ${styles.layout}`}>
        <div className={styles.copy}>
          <SectionHeading eyebrow="Our approach" title="A methodology, not just a syllabus" />

          <ol className={styles.steps}>
            {site.approach.map((step, index) => (
              <li key={step.title} className={styles.step}>
                <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className={styles.imageFrame}>
          <img src={images.about01.src} alt={images.about01.alt} loading="lazy" width="560" height="640" />
        </div>
      </div>
    </section>
  )
}

export default TeachingApproach
