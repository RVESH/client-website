import Button from '../../components/Button/Button.jsx'
import { images } from '../../data/images.js'
import styles from './Hero.module.scss'

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <span className="eyebrow">Courses & coaching for career growth</span>
          <h1 className={styles.headline}>
            Structured learning.
            <br />
            <span className="highlight">Real mentorship.</span>
          </h1>
          <p className={styles.lead}>
            Keystone pairs career-focused courses with real 1:1 mentorship —
            for people who want to build skills deliberately, guided by
            someone who has actually done the work.
          </p>

          <div className={styles.ctaRow}>
            <Button to="/contact" variant="accent">
              Book a Free Call
            </Button>
            <Button to="/courses" variant="ghost">
              Browse Courses
            </Button>
          </div>

          <p className={styles.trustLine}>
            1,200+ learners mentored since 2016 · 4.9/5 average rating
          </p>
        </div>

        <div className={styles.visual}>
          <div className={styles.imageFrame}>
            <img src={images.hero.src} alt={images.hero.alt} width="640" height="720" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
