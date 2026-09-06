import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import Icon from '../ui/Icon.jsx'
import { testimonials } from '../../data/testimonials.js'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  return (
    <section className={`section ${styles.section}`}>
      <Container>
        <SectionHeading
          eyebrow="Patient stories"
          title="What it's actually like to be a patient here"
          center
        />
        <div className={styles.grid}>
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className={styles.card}>
              <span className={styles.quoteIcon}>
                <Icon name="quote" size={28} />
              </span>
              <blockquote className={styles.quote}>“{testimonial.quote}”</blockquote>
              <figcaption className={styles.attribution}>
                <span className={styles.name}>{testimonial.name}</span>
                <span className={styles.detail}>{testimonial.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  )
}
