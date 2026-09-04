import { Building2, Home, Route, Hammer, Ruler, ArrowUpRight } from "lucide-react";
import "./ServiceCard.scss";

const ICON_MAP = { Building2, Home, Route, Hammer, Ruler };

export default function ServiceCard({ service, expanded = false }) {
  const Icon = ICON_MAP[service.icon] || Building2;

  return (
    <article className={`service-card ${expanded ? "service-card--expanded" : ""}`}>
      <div className="service-card__head">
        <span className="service-card__icon">
          <Icon size={24} strokeWidth={1.75} aria-hidden="true" />
        </span>
        <ArrowUpRight size={18} strokeWidth={2} aria-hidden="true" className="service-card__arrow" />
      </div>
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__summary">{service.summary}</p>

      {expanded && (
        <>
          <hr className="hairline" />
          <p className="service-card__included-label">Scope includes</p>
          <ul className="service-card__included">
            {service.included.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </>
      )}
    </article>
  );
}
