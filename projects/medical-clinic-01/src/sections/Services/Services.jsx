import ServiceCard from "../../components/ServiceCard/ServiceCard";

import { services } from "../../data/services";

import "./Services.scss";

export default function Services() {
  return (
    <section className="clinic-services section">
      <div className="page-shell">

        <div className="clinic-services__heading">
          <span className="eyebrow">
            CARE AT MEDORA
          </span>

          <h2 className="section-title">
            Complete care,
            <br />
            without the complexity.
          </h2>
        </div>

        <div className="clinic-services__grid">
          {services.map(
            (service) => (
              <ServiceCard
                key={service.id}
                service={service}
              />
            )
          )}
        </div>

      </div>
    </section>
  );
}