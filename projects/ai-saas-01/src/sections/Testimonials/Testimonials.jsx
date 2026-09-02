import TestimonialCard from '../../components/TestimonialCard/TestimonialCard.jsx'
import { testimonials } from '../../data/testimonials.js'
import './Testimonials.scss'

export default function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="section-head__eyebrow">Customer stories</span>
          <h2 className="section-head__title">Teams that run on Nexora</h2>
        </div>
        <div className="testimonials__grid">
          {testimonials.map((item) => (
            <TestimonialCard key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
