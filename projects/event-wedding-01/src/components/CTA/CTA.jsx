import Button from '../Button'
import styles from './CTA.module.scss'

export default function CTA({
  eyebrow = 'Begin Your Story',
  title = "Let's plan something extraordinary.",
  description = 'Tell us about your celebration and we will be in touch within one business day.',
  ctaLabel = 'Book a Consultation',
}) {
  return (
    <section className={styles.section}>
      <div className={['container', styles.inner].join(' ')}>
        <span className={`eyebrow ${styles.eyebrow}`}>{eyebrow}</span>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <Button to="/contact" variant="light" className={styles.button}>
          {ctaLabel}
        </Button>
      </div>
    </section>
  )
}
