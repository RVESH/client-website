import { ArrowUpRight, Landmark, ShieldCheck, LineChart, Wallet } from "lucide-react";
import "./ServiceCard.scss";

const ICON_MAP = { Landmark, ShieldCheck, LineChart, Wallet };

export default function ServiceCard({ service, expanded = false }) {
  const Icon = ICON_MAP[service.icon] || Landmark;

  return (
    <article className={`service-card ${expanded ? "service-card--expanded" : ""}`}>
      <div className="service-card__head">
        <Icon size={22} strokeWidth={1.5} aria-hidden="true" className="service-card__icon" />
        <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" className="service-card__arrow" />
      </div>
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__summary">{service.summary}</p>

      {expanded && (
        <>
          <hr className="hairline" />
          <p className="service-card__included-label">What's included</p>
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
