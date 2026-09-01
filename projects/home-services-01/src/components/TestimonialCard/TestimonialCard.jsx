import { Star } from 'lucide-react';
import './TestimonialCard.scss';

export default function TestimonialCard({ testimonial }) {
  return (
    <figure className="testimonial-card">
      <div className="testimonial-card__rating" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
        ))}
      </div>
      <blockquote>&ldquo;{testimonial.quote}&rdquo;</blockquote>
      <figcaption>
        <span className="testimonial-card__name">{testimonial.name}</span>
        <span className="testimonial-card__meta">{testimonial.project} &middot; {testimonial.location}</span>
      </figcaption>
    </figure>
  );
}
