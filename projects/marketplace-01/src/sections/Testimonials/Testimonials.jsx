import { Quote } from 'lucide-react'
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import { images } from '../../data/images.js'
import { testimonials } from '../../data/testimonials.js'
import './Testimonials.scss'

export default function Testimonials() {
  return (
    <section className="section section--alt testimonials">
      <div className="container">
        <SectionHeading kicker="Buyer notes" title="What people say after their first order" align="center" />

        <div className="testimonials__grid">
          {testimonials.map((item) => (
            <figure key={item.id} className="testimonial">
              <Quote size={20} strokeWidth={1.5} className="testimonial__mark" />
              <blockquote>“{item.quote}”</blockquote>
              <figcaption>
                <img src={images[item.avatar]} alt="" loading="lazy" />
                <div>
                  <div className="testimonial__name">{item.name}</div>
                  <div className="testimonial__role">{item.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
