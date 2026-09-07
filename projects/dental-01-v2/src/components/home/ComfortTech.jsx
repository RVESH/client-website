import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import Icon from '../ui/Icon.jsx'
import { comfortFeatures } from '../../data/stats.js'
import styles from './ComfortTech.module.scss'

const TECH_IMAGE =
  'https://images.unsplash.com/photo-1522849696084-818b29dfe210?auto=format&fit=crop&w=1200&q=80'

export default function ComfortTech() {
  return (
    <section className="section">
      <Container>
        <div className={styles.grid}>
          <div className={styles.visual}>
            <img src={TECH_IMAGE} alt="Digital dental imaging used for treatment planning" loading="lazy" />
            <div className={styles.visualCaption}>
              Precise 3D imaging behind every treatment plan
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Technology & comfort"
              title="Precision equipment, patient-first pacing"
              description="Better technology should mean less time in the chair and fewer surprises — not just a nicer-looking waiting room."
            />
            <div className={styles.featureGrid}>
              {comfortFeatures.map((feature) => (
                <div key={feature.title} className={styles.feature}>
                  <span className={styles.featureIcon}>
                    <Icon name={feature.icon} size={20} />
                  </span>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureText}>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
