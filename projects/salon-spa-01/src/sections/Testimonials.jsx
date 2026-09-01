import "./Testimonials.scss";
import testimonials from "../data/testimonials";

function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">In their words</span>
          <h2>What clients notice first</h2>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <figure className="testimonials__item" key={t.id}>
              <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption>
                <span className="testimonials__name">{t.name}</span>
                <span className="testimonials__context">{t.context}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
