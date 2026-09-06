import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard.jsx'
import { testimonials } from '../../data/testimonials.js'
import './Testimonials.scss'

export default function Testimonials() {
  return (
    <section className="section section--alt testimonials">
      <div className="container">
        <SectionHeading eyebrow="Patient stories" title="What it's actually like to be a patient here" align="center" />

        <div className="testimonials__grid">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
