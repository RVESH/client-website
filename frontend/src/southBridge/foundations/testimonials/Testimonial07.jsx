import "./Testimonial07.scss";

function Testimonial07({
  quote =
    "The new identity gave the team confidence and the new website gave the brand a completely different level of presence.",
  client = "North Studio",
  project = "Brand Identity + Digital",
  metric = "+42%",
  metricLabel = "qualified enquiries",
}) {
  return (
    <section className="sb-testimonial-07">
      <div className="sb-testimonial-07__container">
        <div className="sb-testimonial-07__project">
          <span>PROJECT</span>
          <strong>{client}</strong>
          <small>{project}</small>
        </div>

        <blockquote>“{quote}”</blockquote>

        <div className="sb-testimonial-07__result">
          <strong>{metric}</strong>
          <span>{metricLabel}</span>
        </div>
      </div>
    </section>
  );
}

export default Testimonial07;