import "./Testimonial05.scss";

function Testimonial05({
  quote =
    "We shipped faster, reduced confusion across the team and finally had a product that matched the quality of our thinking.",
  name = "Sana Kapoor",
  role = "Head of Product, Orbit",
}) {
  return (
    <section className="sb-testimonial-05">
      <div className="sb-testimonial-05__container">
        <div className="sb-testimonial-05__rating">
          <strong>4.9</strong>
          <span>★★★★★</span>
          <small>Average client rating</small>
        </div>

        <div className="sb-testimonial-05__quote">
          <blockquote>“{quote}”</blockquote>

          <div>
            <strong>{name}</strong>
            <span>{role}</span>
          </div>
        </div>

        <div className="sb-testimonial-05__metric">
          <strong>+31%</strong>
          <span>conversion after launch</span>
        </div>
      </div>
    </section>
  );
}

export default Testimonial05;