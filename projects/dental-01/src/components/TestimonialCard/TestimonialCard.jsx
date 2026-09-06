import { Quote } from 'lucide-react'
import { images } from '../../data/images.js'
import './TestimonialCard.scss'

export default function TestimonialCard({ quote, name, role, avatar }) {
  return (
    <figure className="testimonial-card">
      <Quote size={22} strokeWidth={1.5} className="testimonial-card__mark" />
      <blockquote className="testimonial-card__quote">“{quote}”</blockquote>
      <figcaption className="testimonial-card__meta">
        <img src={images[avatar]} alt="" className="testimonial-card__avatar" loading="lazy" />
        <div>
          <div className="testimonial-card__name">{name}</div>
          <div className="testimonial-card__role">{role}</div>
        </div>
      </figcaption>
    </figure>
  )
}
