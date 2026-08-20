import "./Services05.scss";

function Services05() {
  const items = [
    ["Strategy", "01", "Positioning, research and planning."],
    ["Design", "02", "Identity, interfaces and experiences."],
    ["Technology", "03", "Fast, dependable digital systems."],
    ["Growth", "04", "Launch, content and optimisation."],
  ];

  return (
    <section className="sb-services-05">
      <div className="sb-services-05__container">
        <div className="sb-services-05__intro">
          <span>CAPABILITIES</span>
          <h2>Everything needed to move an idea forward.</h2>
        </div>

        <div className="sb-services-05__grid">
          {items.map(([title, number, text], index) => (
            <article
              className={`sb-services-05__card sb-services-05__card--${index + 1}`}
              key={title}
            >
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

export default Services05;