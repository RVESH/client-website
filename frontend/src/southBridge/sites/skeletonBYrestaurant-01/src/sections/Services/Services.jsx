import "./Services.scss";

function Services() {
  const services = [
    ["01", "Strategy", "Find the signal before making the move."],
    ["02", "Identity", "Create a visual language with character."],
    ["03", "Digital", "Translate the idea into useful experiences."],
  ];

  return (
    <section className="sb-services-06">
      <div className="sb-services-06__container">
        <div className="sb-services-06__intro">
          <span>SELECTED CAPABILITIES</span>
          <h2>Less noise. Better work.</h2>
        </div>

        <div className="sb-services-06__list">
          {services.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href={`#${title}`}>Explore ↗</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;