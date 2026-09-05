import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard.jsx'
import { testimonials } from '../../data/testimonials.js'
import styles from './Testimonials.module.scss'

function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Learner stories"
          title="What it's like to actually finish what you start"
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
