import { MapPin, ArrowUpRight } from "lucide-react";
import "./ProjectCard.scss";

const CATEGORY_LABELS = {
  commercial: "Commercial",
  residential: "Residential",
  infrastructure: "Infrastructure",
  renovation: "Renovation",
  engineering: "Engineering",
};

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__media">
        <img src={project.image.src} alt={project.image.alt} loading="lazy" />
        <span className="project-card__category">{CATEGORY_LABELS[project.category]}</span>
        <span className="project-card__corner" aria-hidden="true">
          <ArrowUpRight size={18} strokeWidth={2} />
        </span>
      </div>
      <div className="project-card__body">
        <div className="project-card__meta">
          <MapPin size={13} strokeWidth={2} aria-hidden="true" />
          <span>{project.location}</span>
          <span className="project-card__dot" aria-hidden="true" />
          <span>{project.year}</span>
        </div>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__summary">{project.summary}</p>
        <p className="project-card__size">{project.size}</p>
      </div>
    </article>
  );
}
