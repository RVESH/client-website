import "./Testimonials.scss";

function Testimonial({
  quote =
    "There is something rare about a place that feels considered without ever feeling precious. We left already planning the next visit.",
  name = "Elena Rossi",
  role = "Guest / Lisbon",
}) {
  return (
    <section className="sb-testimonial-06">
      <div className="sb-testimonial-06__container">
        <span className="sb-testimonial-06__eyebrow">
          A NOTE FROM A GUEST
        </span>

        <blockquote>“{quote}”</blockquote>

        <div className="sb-testimonial-06__author">
          <span>★★★★★</span>
          <strong>{name}</strong>
          <small>{role}</small>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;