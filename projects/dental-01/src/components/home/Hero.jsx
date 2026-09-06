import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import Icon from '../ui/Icon.jsx'
import { doctors } from '../../data/doctors.js'
import styles from './Hero.module.css'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1704455306251-b4634215d98f?auto=format&fit=crop&w=1400&q=80'

export default function Hero() {
  const previewDoctors = doctors.slice(0, 3)

  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              <span className="eyebrow">Riverside District, San Marveno</span>
            </span>
            <h1 className={styles.title}>
              Modern dentistry, <em>gently</em> delivered.
            </h1>
            <p className={styles.lede}>
              Aurelia combines advanced dental technology with unhurried, comfort-first care —
              so the work that keeps your smile healthy never feels like an ordeal.
            </p>
            <div className={styles.actions}>
              <Button to="/contact" showArrow>
                Book a visit
              </Button>
              <Button to="/treatments" variant="secondary">
                Explore treatments
              </Button>
            </div>
            <div className={styles.trustRow}>
              <div className={styles.avatarStack}>
                {previewDoctors.map((doctor) => (
                  <img key={doctor.slug} src={doctor.image} alt="" />
                ))}
              </div>
              <p className={styles.trustText}>
                <strong>4.9/5</strong> average rating from over <strong>30,000</strong> patients treated
              </p>
            </div>
          </div>

          <div className={styles.visual}>
            <div className={styles.imageFrame}>
              <img
                src={HERO_IMAGE}
                alt="A calm, modern treatment room at Aurelia Dental Studio"
                loading="eager"
              />
            </div>
            <div className={styles.floatCard}>
              <span className={styles.floatIcon}>
                <Icon name="shield" size={20} />
              </span>
              <div>
                <strong>18+ years</strong>
                <span>Trusted local practice</span>
              </div>
            </div>
            <div className={styles.badge}>
              <strong>98%</strong>
              <span>of patients would recommend us to a friend</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
