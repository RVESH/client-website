import { testimonials } from "../../data/testimonials";
import { site } from "../../data/site";
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard.jsx";
import "./Testimonials.scss";

export default function Testimonials() {
  const { eyebrow, heading, desc } = site.testimonialsHeading;

  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="section-head__title">{heading}</h2>
          </div>
          <p className="section-head__desc">{desc}</p>
        </div>

        <div className="testimonials-section__grid">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
