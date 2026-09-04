import SectionHeading from '../../components/SectionHeading'
import TestimonialCard from '../../components/TestimonialCard'
import { testimonials } from '../../data/testimonials'
import styles from './Testimonials.module.scss'

export default function Testimonials() {
  const featured = testimonials.slice(0, 3)

  return (
    <section className={[styles.section, 'container'].join(' ')}>
      <SectionHeading
        eyebrow="Kind Words"
        title="From couples we've worked with"
        align="center"
      />

      <div className={styles.grid}>
        {featured.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  )
}
