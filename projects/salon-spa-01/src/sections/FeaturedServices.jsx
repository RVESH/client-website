import "./FeaturedServices.scss";
import services from "../data/services";
import ServiceCard from "../components/ServiceCard.jsx";
import Button from "../components/Button.jsx";

function FeaturedServices() {
  const featured = services.filter((s) => s.featured).slice(0, 3);

  return (
    <section className="section featured-services">
      <div className="container">
        <div className="section-head featured-services__head">
          <div>
            <span className="eyebrow">Signature offerings</span>
            <h2>Where most clients begin</h2>
          </div>
          <Button to="/services" variant="secondary" size="sm">
            View all services
          </Button>
        </div>

        <div className="featured-services__grid">
          {featured.map((service) => (
            <ServiceCard key={service.id} service={service} compact />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedServices;
