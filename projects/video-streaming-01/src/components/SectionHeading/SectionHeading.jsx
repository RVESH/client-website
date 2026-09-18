import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./SectionHeading.scss";

export default function SectionHeading({ eyebrow, title, desc, viewAllTo, viewAllLabel = "View all" }) {
  return (
    <div className="section-head">
      <div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 className="section-head__title">{title}</h2>
        {desc && <p className="section-head__desc">{desc}</p>}
      </div>
      {viewAllTo && (
        <Link to={viewAllTo} className="section-head__viewall">
          <span>{viewAllLabel}</span>
          <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
        </Link>
      )}
    </div>
  );
}
