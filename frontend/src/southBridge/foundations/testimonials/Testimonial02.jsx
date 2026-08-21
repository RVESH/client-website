import "./Testimonial02.scss";

function Testimonial02({
  quote =
    "The rarest thing in a creative partner is the ability to make difficult decisions feel simple.",
  name = "Maya Kapoor",
  role = "Creative Director",
  publication = "Form Journal",
}) {
  return (
    <section className="sb-testimonial-02">
      <div className="sb-testimonial-02__container">
        <span className="sb-testimonial-02__eyebrow">
          02 / TESTIMONIAL
        </span>

        <blockquote>
          “{quote}”
        </blockquote>

        <div className="sb-testimonial-02__meta">
          <strong>{name}</strong>
          <span>{role}</span>
          <span>{publication}</span>
        </div>
      </div>
    </section>
  );
}

export default Testimonial02;