import { Quote } from "lucide-react";
import "./TestimonialCard.scss";

export default function TestimonialCard({ testimonial }) {
  return (
    <figure className="testimonial-card">
      <Quote size={20} strokeWidth={1.75} aria-hidden="true" className="testimonial-card__mark" />
      <blockquote>
        <p>{testimonial.quote}</p>
      </blockquote>
      <figcaption>
        <img src={testimonial.avatar.src} alt={testimonial.avatar.alt} loading="lazy" />
        <div>
          <span className="testimonial-card__name">{testimonial.name}</span>
          <span className="testimonial-card__role">{testimonial.role}</span>
        </div>
      </figcaption>
    </figure>
  );
}
