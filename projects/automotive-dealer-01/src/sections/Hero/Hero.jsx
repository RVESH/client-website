import Button from '../../components/Button'
import { images } from '../../data/images'
import { whatsappLink } from '../../data/site'
import styles from './Hero.module.scss'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageLayer}>
        <img src={images.hero.src} alt={images.hero.alt} loading="eager" fetchpriority="high" />
        <div className={styles.scrim} />
      </div>

      <div className={['container', styles.content].join(' ')}>
        <span className={styles.status}>
          <span className={styles.statusDot} aria-hidden="true" />
          Showroom open — 8 vehicles currently available
        </span>

        <h1 className={styles.headline}>
          Driven by <span className={styles.accentWord}>what comes next.</span>
        </h1>

        <p className={styles.sub}>
          A curated showroom of performance and luxury vehicles — inspected,
          verified, and ready to drive. No pressure, no filler inventory.
        </p>

        <div className={styles.ctaRow}>
          <Button to="/vehicles" variant="accent">
            Browse Vehicles
          </Button>
          <Button
            href={whatsappLink('Hello, I would like to speak with the Vantage team.')}
            variant="dark"
          >
            Talk to Our Team
          </Button>
        </div>

        <dl className={styles.quickFacts}>
          <div>
            <dt>Founded</dt>
            <dd>2011</dd>
          </div>
          <div>
            <dt>Inspection</dt>
            <dd>150-Point</dd>
          </div>
          <div>
            <dt>Delivered</dt>
            <dd>2,400+</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
