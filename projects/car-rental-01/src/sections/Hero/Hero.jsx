import Button from '../../components/Button/Button.jsx'
import BookingWidget from '../../components/BookingWidget/BookingWidget.jsx'
import { images } from '../../data/images.js'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.top}`}>
        <div className={styles.copy}>
          <span className="eyebrow">Premium car rental</span>
          <h1 className={styles.headline}>The road, elevated.</h1>
          <p className={styles.lead}>
            A curated fleet from economy to luxury, transparent day-rate
            pricing, and pickup across seven cities. Reserve in minutes, no
            account required.
          </p>

          <div className={styles.ctaRow}>
            <Button to="/fleet" variant="accent">
              Browse the fleet
            </Button>
            <Button to="/locations" variant="dark">
              Find a location
            </Button>
          </div>
        </div>

        <div className={styles.visual}>
          <svg
            className={styles.speedLines}
            viewBox="0 0 200 120"
            aria-hidden="true"
          >
            <line x1="10" y1="30" x2="80" y2="10" stroke="#BD8A3D" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
            <line x1="20" y1="50" x2="110" y2="26" stroke="#BD8A3D" strokeWidth="3" strokeLinecap="round" opacity="0.45" />
            <line x1="30" y1="70" x2="140" y2="42" stroke="#BD8A3D" strokeWidth="3" strokeLinecap="round" opacity="0.25" />
          </svg>
          <div className={styles.imageFrame}>
            <img src={images.hero.src} alt={images.hero.alt} width="640" height="480" />
          </div>
        </div>
      </div>

      <div className={`container ${styles.widgetWrap}`}>
        <BookingWidget variant="dark" />
      </div>

      <div className={styles.angleEdge} aria-hidden="true" />
    </section>
  )
}

export default Hero
