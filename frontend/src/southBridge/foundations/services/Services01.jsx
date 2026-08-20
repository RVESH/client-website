import "./Services01.scss";

const services = [
  {
    number: "01",
    title: "Strategy",
    text: "Clear direction before execution begins.",
  },
  {
    number: "02",
    title: "Design",
    text: "Distinctive experiences built around people.",
  },
  {
    number: "03",
    title: "Development",
    text: "Fast, resilient and production-ready digital products.",
  },
];

function Services01({
  eyebrow = "WHAT WE DO",
  title = "From idea to something people want to use.",
}) {
  return (
    <section className="sb-services-01" aria-labelledby="services-01-title">
      <div className="sb-services-01__container">
        <div className="sb-services-01__intro">
          <span>{eyebrow}</span>
          <h2 id="services-01-title">{title}</h2>
        </div>

        <div className="sb-services-01__grid">
          {services.map((service) => (
            <article key={service.number} className="sb-services-01__card">
              <span className="sb-services-01__number">
                {service.number}
              </span>

              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>

              <a href={`#${service.title.toLowerCase()}`} aria-label={service.title}>
                ↗
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services01;