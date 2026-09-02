import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import { site } from '../../data/site.js'
import { images } from '../../data/images.js'
import styles from './Process.module.scss'

function Process() {
  return (
    <section className="section">
      <div className={`container ${styles.layout}`}>
        <div className={styles.copy}>
          <SectionHeading
            eyebrow="How it works"
            title="From first message to a finished room, in four simple steps"
          />

          <ol className={styles.steps}>
            {site.process.map((step, index) => (
              <li key={step.title} className={styles.step}>
                <span className={styles.number}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className={styles.imageFrame}>
          <img
            src={images.process01.src}
            alt={images.process01.alt}
            loading="lazy"
            width="560"
            height="700"
          />
        </div>
      </div>
    </section>
  )
}

export default Process
