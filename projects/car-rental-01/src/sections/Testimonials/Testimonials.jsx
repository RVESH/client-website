import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard.jsx'
import { testimonials } from '../../data/testimonials.js'
import styles from './Testimonials.module.css'

function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="What renters say"
          title="Trusted by drivers across seven cities"
          align="center"
        />

        <div className={styles.grid}>
          {testimonials.slice(0, 3).map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
