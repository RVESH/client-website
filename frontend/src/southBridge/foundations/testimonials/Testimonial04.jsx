import "./Testimonial04.scss";

function Testimonial04({
  quote =
    "They didn't just redesign the product. They changed how we think about the business.",
  name = "Arjun Mehra",
  role = "Co-Founder, Luma",
}) {
  return (
    <section className="sb-testimonial-04">
      <div className="sb-testimonial-04__glow" />

      <div className="sb-testimonial-04__container">
        <span>CLIENT / 04</span>

        <blockquote>“{quote}”</blockquote>

        <div className="sb-testimonial-04__person">
          <strong>{name}</strong>
          <small>{role}</small>
        </div>
      </div>
    </section>
  );
}

export default Testimonial04;