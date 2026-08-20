import "./Services12.scss";

const expertise = [
  ["01", "Growth Strategy", "Identify the opportunities worth pursuing."],
  ["02", "Transformation", "Turn strategy into practical execution."],
  ["03", "Leadership Advisory", "Navigate important decisions with confidence."],
  ["04", "Market Intelligence", "Understand the signals behind the numbers."],
];

function Services12() {
  return (
    <section className="sb-services-12">
      <div className="sb-services-12__container">
        <div className="sb-services-12__intro">
          <span>AREAS OF EXPERTISE</span>
          <h2>Experience where the decisions matter.</h2>
        </div>

        <div className="sb-services-12__grid">
          {expertise.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services12;