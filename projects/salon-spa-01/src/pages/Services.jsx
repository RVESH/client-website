import "./Services.scss";
import services from "../data/services";
import ServiceCard from "../components/ServiceCard.jsx";
import CTA from "../sections/CTA.jsx";

function groupByCategory(list) {
  return list.reduce((acc, service) => {
    acc[service.category] = acc[service.category] || [];
    acc[service.category].push(service);
    return acc;
  }, {});
}

function Services() {
  const grouped = groupByCategory(services);

  return (
    <>
      <section className="section page-banner">
        <div className="container">
          <span className="eyebrow">Menu</span>
          <h1>Services & pricing</h1>
          <p className="section-sub">
            A considered menu across hair, skin, bridal, nails and body. Prices shown are starting
            rates — your artist will confirm exact pricing during consultation.
          </p>
        </div>
      </section>

      <section className="section services-list">
        <div className="container">
          {Object.entries(grouped).map(([category, items]) => (
            <div className="services-list__group" key={category}>
              <h2 className="services-list__category">{category}</h2>
              <div className="services-list__grid">
                {items.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}

export default Services;
