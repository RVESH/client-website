import Button from '../../components/Button'
import { images } from '../../data/images'
import { site } from '../../data/site'
import styles from './Hero.module.scss'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageLayer}>
        <img src={images.hero.src} alt={images.hero.alt} loading="eager" fetchPriority="high" />
        <div className={styles.scrim} />
      </div>

      <div className={['container', styles.content].join(' ')}>
        <span className={styles.eyebrow}>Full-Service Wedding &amp; Event Planning</span>
        <h1 className={styles.headline}>{site.tagline}</h1>
        <p className={styles.sub}>{site.description}</p>

        <div className={styles.ctaRow}>
          <Button to="/contact" variant="accent">
            {site.ctaLabel}
          </Button>
          <Button to="/weddings" variant="light">
            View Our Weddings
          </Button>
        </div>
      </div>
    </section>
  )
}
