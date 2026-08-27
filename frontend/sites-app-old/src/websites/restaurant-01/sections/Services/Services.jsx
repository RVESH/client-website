import "./Services.scss";

const capabilities = [
  {
    number: "01",
    title: "Brand",
    items: ["Strategy", "Positioning", "Identity"],
  },
  {
    number: "02",
    title: "Digital",
    items: ["UX / UI", "Web Design", "Development"],
  },
  {
    number: "03",
    title: "Content",
    items: ["Editorial", "Campaigns", "Launch"],
  },
];

function Services() {
  return (
    <section className="sb-services-08">
      <div className="sb-services-08__container">
        <div className="sb-services-08__intro">
          <span>CAPABILITIES</span>
          <h2>A compact team with a wide range.</h2>
        </div>

        <div className="sb-services-08__grid">
          {capabilities.map((group) => (
            <article key={group.number}>
              <span>{group.number}</span>
              <h3>{group.title}</h3>

              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;