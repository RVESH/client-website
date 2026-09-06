import { Link } from 'react-router-dom'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import Button from '../ui/Button.jsx'
import Icon from '../ui/Icon.jsx'
import { treatments } from '../../data/treatments.js'
import styles from './TreatmentHighlights.module.scss'

const featured = treatments.slice(0, 6)

export default function TreatmentHighlights() {
  return (
    <section className="section">
      <Container>
        <div className={styles.head}>
          <SectionHeading
            eyebrow="Treatments"
            title="Care built around your whole mouth, not just one visit"
            description="From routine prevention to full-mouth rehabilitation, every treatment starts with the same digital planning process — so nothing is a surprise."
          />
          <Button to="/treatments" variant="secondary" showArrow>
            View all treatments
          </Button>
        </div>

        <div className={styles.grid}>
          {featured.map((treatment) => (
            <Link key={treatment.slug} to="/treatments" className={styles.card}>
              <span className={styles.cardIcon}>
                <Icon name={treatment.icon} size={22} />
              </span>
              <h3 className={styles.cardTitle}>{treatment.name}</h3>
              <p className={styles.cardText}>{treatment.summary}</p>
              <span className={styles.cardLink}>
                Learn more <Icon name="arrowRight" size={15} />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
