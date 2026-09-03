import { ArrowRight } from "lucide-react";
import { services } from "../../data/services";
import ServiceCard from "../../components/ServiceCard/ServiceCard.jsx";
import Button from "../../components/Button/Button.jsx";
import "./Services.scss";

export default function Services() {
  return (
    <section className="section services-section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">What we do</span>
            <h2 className="section-head__title">Core advisory services</h2>
          </div>
          <Button to="/services" variant="ghost" icon={ArrowRight}>
            View all services
          </Button>
        </div>

        <div className="services-section__grid">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
