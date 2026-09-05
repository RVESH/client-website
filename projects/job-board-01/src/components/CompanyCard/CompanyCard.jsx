import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import "./CompanyCard.scss";

export default function CompanyCard({ company, openingsCount }) {
  return (
    <article className="company-card">
      <div className="company-card__logo">
        <img src={company.logo.src} alt={company.logo.alt} loading="lazy" />
      </div>
      <h3 className="company-card__name">{company.name}</h3>
      <p className="company-card__industry">{company.industry}</p>
      <p className="company-card__location">
        <MapPin size={13} strokeWidth={2} aria-hidden="true" />
        <span>{company.location}</span>
      </p>
      <p className="company-card__desc">{company.description}</p>

      <div className="company-card__footer">
        <span className="company-card__openings">
          {openingsCount} open role{openingsCount === 1 ? "" : "s"}
        </span>
        <Link to={`/jobs?company=${company.id}`} className="company-card__cta">
          <span>View jobs</span>
          <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
