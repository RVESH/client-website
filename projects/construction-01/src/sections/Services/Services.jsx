import { ArrowRight } from "lucide-react";
import { services } from "../../data/services";
import { site } from "../../data/site";
import ServiceCard from "../../components/ServiceCard/ServiceCard.jsx";
import Button from "../../components/Button/Button.jsx";
import "./Services.scss";

export default function Services() {
  const { eyebrow, heading, desc } = site.servicesHomeHeading;

  return (
    <section className="section section--dark services-section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="section-head__title">{heading}</h2>
          </div>
          <Button to="/services" variant="secondary" icon={ArrowRight}>
            All services
          </Button>
        </div>
        <p className="services-section__desc">{desc}</p>

        <div className="services-section__grid">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
