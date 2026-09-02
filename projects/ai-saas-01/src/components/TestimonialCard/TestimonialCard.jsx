import { Quote } from 'lucide-react'
import './TestimonialCard.scss'

export default function TestimonialCard({ quote, name, role, company }) {
  return (
    <figure className="testimonial-card">
      <Quote size={22} strokeWidth={1.5} className="testimonial-card__mark" />
      <blockquote className="testimonial-card__quote">“{quote}”</blockquote>
      <figcaption className="testimonial-card__meta">
        <span className="testimonial-card__avatar" aria-hidden="true">
          {name.charAt(0)}
        </span>
        <div>
          <div className="testimonial-card__name">{name}</div>
          <div className="testimonial-card__role">
            {role} · {company}
          </div>
        </div>
      </figcaption>
    </figure>
  )
}
