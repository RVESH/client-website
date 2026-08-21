import "./Testimonial01.scss";

function Testimonial01({
  eyebrow = "CLIENT NOTES",
  quote =
    "They understood what we were trying to become before we had found the words for it. The final experience feels incredibly close to the business we imagined.",
  name = "Aarav Mehta",
  role = "Founder, North Studio",
  initials = "AM",
  rating = "5.0",
}) {
  return (
    <section
      className="sb-testimonial-01"
      aria-labelledby="testimonial-01-title"
    >
      <div className="sb-testimonial-01__container">
        <div className="sb-testimonial-01__intro">
          <span>{eyebrow}</span>
          <strong>{rating}</strong>
        </div>

        <div className="sb-testimonial-01__main">
          <div className="sb-testimonial-01__quote">
            <span className="sb-testimonial-01__mark">“</span>

            <blockquote id="testimonial-01-title">
              {quote}
            </blockquote>
          </div>

          <div className="sb-testimonial-01__person">
            <div className="sb-testimonial-01__avatar">
              {initials}
            </div>

            <div>
              <strong>{name}</strong>
              <span>{role}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial01;