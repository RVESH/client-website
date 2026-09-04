import styles from './TestimonialCard.module.scss'

export default function TestimonialCard({ testimonial }) {
  return (
    <figure className={styles.card}>
      <span className={styles.mark} aria-hidden="true">&ldquo;</span>
      <blockquote className={styles.quote}>{testimonial.quote}</blockquote>
      <figcaption className={styles.caption}>
        <span className={styles.name}>{testimonial.name}</span>
        <span className={styles.event}>{testimonial.event}</span>
      </figcaption>
    </figure>
  )
}
