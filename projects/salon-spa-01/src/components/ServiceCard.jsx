import "./ServiceCard.scss";
import Button from "./Button.jsx";

function ServiceCard({ service, compact = false }) {
  const { category, name, summary, description, duration, priceFrom } = service;

  return (
    <article className={`service-card ${compact ? "service-card--compact" : ""}`}>
      <span className="service-card__category">{category}</span>
      <h3 className="service-card__name">{name}</h3>
      <p className="service-card__text">{compact ? summary : description}</p>
      <div className="service-card__meta">
        <span>{duration}</span>
        <span className="service-card__dot" aria-hidden="true">
          &middot;
        </span>
        <span>{priceFrom}</span>
      </div>
      <Button action="enquire" variant="ghost" size="sm" className="service-card__cta">
        Enquire about this
      </Button>
    </article>
  );
}

export default ServiceCard;
