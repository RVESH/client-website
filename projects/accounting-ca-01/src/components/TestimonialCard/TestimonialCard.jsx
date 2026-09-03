import { Quote } from "lucide-react";
import "./TestimonialCard.scss";

export default function TestimonialCard({ testimonial }) {
  return (
    <figure className="testimonial-card">
      <Quote size={22} strokeWidth={1.5} aria-hidden="true" className="testimonial-card__mark" />
      <blockquote>
        <p>{testimonial.quote}</p>
      </blockquote>
      <figcaption>
        <span className="testimonial-card__name">{testimonial.name}</span>
        <span className="testimonial-card__role">{testimonial.role}</span>
      </figcaption>
    </figure>
  );
}
