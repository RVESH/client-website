import "./Services02.scss";

const services = [
  ["01", "Brand Strategy", "Positioning, research and a clear point of view."],
  ["02", "Visual Identity", "A flexible identity system with lasting character."],
  ["03", "Digital Experience", "Websites and products designed around real behavior."],
  ["04", "Launch & Growth", "A considered path from first release to momentum."],
];

function Services02() {
  return (
    <section className="sb-services-02">
      <div className="sb-services-02__container">
        <div className="sb-services-02__intro">
          <span>OUR CAPABILITIES</span>
          <h2>What we bring to the table.</h2>
        </div>

        <div className="sb-services-02__list">
          {services.map(([number, title, text]) => (
            <a href={`#service-${number}`} key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <strong>↗</strong>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services02;