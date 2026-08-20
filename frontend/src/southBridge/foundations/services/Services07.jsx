import "./Services07.scss";

function Services07() {
  const services = [
    ["01", "Private Dining", "Menus created around the occasion."],
    ["02", "Events", "Thoughtful spaces for intimate gatherings."],
    ["03", "Chef's Table", "A closer look at the kitchen and craft."],
  ];

  return (
    <section className="sb-services-07">
      <div className="sb-services-07__container">
        <header>
          <span>OUR OFFERINGS</span>
          <h2>Designed around the occasion.</h2>
        </header>

        <div className="sb-services-07__grid">
          {services.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href={`#${title}`}>Discover</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services07;