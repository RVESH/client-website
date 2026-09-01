import SectionHeading from '../../components/SectionHeading/SectionHeading';
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';
import { testimonials } from '../../data/testimonials';
import './Testimonials.scss';

export default function Testimonials() {
  return (
    <section className="section section--ink testimonials-section">
      <div className="container">
        <SectionHeading kicker="From the neighborhood" title="What it's like working with us." />
        <div className="testimonials-section__grid">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
