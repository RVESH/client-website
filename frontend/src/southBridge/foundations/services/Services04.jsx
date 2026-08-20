import "./Services04.scss";

const services = [
  "Web Design",
  "Development",
  "Content Strategy",
  "Search & Growth",
  "Ongoing Support",
];

function Services04() {
  return (
    <section className="sb-services-04">
      <div className="sb-services-04__container">
        <div className="sb-services-04__top">
          <span>04 / SERVICES</span>
          <p>Focused capabilities for ambitious teams.</p>
        </div>

        <div className="sb-services-04__rows">
          {services.map((service, index) => (
            <a href={`#${service}`} key={service}>
              <span>0{index + 1}</span>
              <h3>{service}</h3>
              <i>↗</i>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services04;