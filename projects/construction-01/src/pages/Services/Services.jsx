import { Phone } from "lucide-react";
import { services } from "../../data/services";
import { site } from "../../data/site";
import ServiceCard from "../../components/ServiceCard/ServiceCard.jsx";
import Button from "../../components/Button/Button.jsx";
import CTA from "../../sections/CTA/CTA.jsx";
import "./Services.scss";

export default function ServicesPage() {
  return (
    <>
      <section className="section services-page-hero section--dark">
        <div className="container">
          <span className="eyebrow">{site.servicesPage.eyebrow}</span>
          <h1 className="services-page-hero__heading">{site.servicesPage.heading}</h1>
          <p className="services-page-hero__desc">{site.servicesPage.desc}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-page__list">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} expanded />
            ))}
          </div>

          <div className="services-page__enquire">
            <div>
              <h2>Have a set of drawings already?</h2>
              <p>Send them over and we'll come back with a realistic estimate and timeline.</p>
            </div>
            <div className="services-page__enquire-actions">
              <Button to="/contact" variant="ghost">
                Send an enquiry
              </Button>
              <Button href={site.contact.phoneHref} variant="ghost" icon={Phone}>
                {site.contact.phoneDisplay}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
