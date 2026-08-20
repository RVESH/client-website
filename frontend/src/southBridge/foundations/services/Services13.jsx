import "./Services13.scss";

function Services13() {
  const benefits = [
    ["01", "Thoughtful Materials", "Selected for durability and everyday use."],
    ["02", "Free Delivery", "Complimentary shipping above the minimum."],
    ["03", "Easy Returns", "A straightforward return process."],
    ["04", "Human Support", "Real people when you need help."],
  ];

  return (
    <section className="sb-services-13">
      <div className="sb-services-13__container">
        <div className="sb-services-13__intro">
          <span>WHY SHOP WITH US</span>
          <h2>The little things make the difference.</h2>
        </div>

        <div className="sb-services-13__grid">
          {benefits.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services13;