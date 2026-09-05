import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { companies } from "../../data/companies";
import JobMeta from "../JobMeta/JobMeta.jsx";
import "./JobCard.scss";

export default function JobCard({ job }) {
  const company = companies.find((c) => c.id === job.companyId);

  return (
    <article className="job-card">
      <div className="job-card__top">
        <div className="job-card__logo">
          {company && <img src={company.logo.src} alt={company.logo.alt} loading="lazy" />}
        </div>
        <div className="job-card__heading">
          <span className="job-card__workmode">{job.workMode}</span>
          <h3 className="job-card__title">{job.title}</h3>
          <p className="job-card__company">{company ? company.name : "Company"}</p>
        </div>
      </div>

      <JobMeta job={job} />

      <Link to={`/jobs/${job.id}`} className="job-card__cta">
        <span>View job</span>
        <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
      </Link>
    </article>
  );
}
