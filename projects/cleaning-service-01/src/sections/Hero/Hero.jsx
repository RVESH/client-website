import Button from '../../components/Button/Button.jsx'
import { site } from '../../data/site.js'
import { images } from '../../data/images.js'
import styles from './Hero.module.scss'

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <span className="eyebrow">Residential & office cleaning</span>
          <h1 className={styles.headline}>
            Cleaner spaces.
            <br />
            Easier days.
          </h1>
          <p className={styles.lead}>
            Brightside sends the same dependable, background-checked team to
            your door — with a clear checklist, honest communication, and
            genuine attention to detail every visit.
          </p>

          <div className={styles.ctaRow}>
            <Button to="/contact" variant="accent">
              Get a free quote
            </Button>
            <Button href={site.whatsappLink} variant="ghost">
              WhatsApp us
            </Button>
          </div>

          <p className={styles.trustLine}>
            Trusted by homes and offices across Marin County since 2017.
          </p>
        </div>

        <div className={styles.visual}>
          <div className={styles.imageFrame}>
            <img
              src={images.hero.src}
              alt={images.hero.alt}
              width="640"
              height="760"
            />
          </div>
          <svg
            className={styles.streak}
            viewBox="0 0 220 90"
            aria-hidden="true"
          >
            <path
              d="M4 60C40 20 66 20 96 44C132 72 158 72 216 30"
              stroke="#E8623C"
              strokeWidth="7"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero
