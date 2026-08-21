import "./Testimonial12.scss";

function Testimonial12({
  quote =
    "The team brought structure to a complex brief and kept the work commercially focused throughout.",
  name = "Vikram Arora",
  role = "Managing Director, Meridian",
  metric = "18%",
  metricLabel = "increase in qualified leads",
}) {
  return (
    <section className="sb-testimonial-12">
      <div className="sb-testimonial-12__container">
        <div className="sb-testimonial-12__top">
          <span>CLIENT PERSPECTIVE</span>
          <span>MERIDIAN / 2026</span>
        </div>

        <div className="sb-testimonial-12__main">
          <blockquote>“{quote}”</blockquote>

          <div className="sb-testimonial-12__details">
            <div>
              <strong>{name}</strong>
              <small>{role}</small>
            </div>

            <div className="sb-testimonial-12__metric">
              <strong>{metric}</strong>
              <small>{metricLabel}</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial12;