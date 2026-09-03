import styles from './TestimonialCard.module.css'

function TestimonialCard({ testimonial }) {
  return (
    <figure className={styles.card}>
      <svg className={styles.mark} width="32" height="24" viewBox="0 0 34 26" aria-hidden="true">
        <path
          d="M0 26V15.6C0 6.8 5.3 1.2 13.4 0L14.6 3.6C10 5 7.6 8 7.4 11.6H14V26H0ZM19.4 26V15.6C19.4 6.8 24.7 1.2 32.8 0L34 3.6C29.4 5 27 8 26.8 11.6H33.4V26H19.4Z"
          fill="#BD8A3D"
        />
      </svg>
      <blockquote className={styles.quote}>{testimonial.quote}</blockquote>
      <figcaption className={styles.meta}>
        <span className={styles.name}>{testimonial.name}</span>
        <span className={styles.role}>
          {testimonial.role} · {testimonial.location}
        </span>
      </figcaption>
    </figure>
  )
}

export default TestimonialCard
