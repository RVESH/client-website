import "./Testimonial08.scss";

function Testimonial08({
  image = "/images/testimonial-08.webp",
  quote =
    "The process felt collaborative from beginning to end. We never felt like a small client inside a large process.",
  name = "Priya Malhotra",
  role = "Founder, Aster",
}) {
  return (
    <section className="sb-testimonial-08">
      <div className="sb-testimonial-08__container">
        <div className="sb-testimonial-08__image">
          <img src={image} alt={name} />
        </div>

        <div className="sb-testimonial-08__content">
          <span>THE FOUNDER'S NOTE</span>

          <blockquote>“{quote}”</blockquote>

          <div>
            <strong>{name}</strong>
            <small>{role}</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial08;