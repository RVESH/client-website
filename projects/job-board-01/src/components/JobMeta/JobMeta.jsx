import { MapPin, Briefcase, BarChart3, Wallet, Clock } from "lucide-react";
import { formatSalary, formatPostedDate } from "../../utils/format";
import "./JobMeta.scss";

export default function JobMeta({ job, showPosted = true, size = "md" }) {
  return (
    <ul className={`job-meta job-meta--${size}`}>
      <li>
        <MapPin size={14} strokeWidth={2} aria-hidden="true" />
        <span>{job.location}</span>
      </li>
      <li>
        <Briefcase size={14} strokeWidth={2} aria-hidden="true" />
        <span>{job.type}</span>
      </li>
      <li>
        <BarChart3 size={14} strokeWidth={2} aria-hidden="true" />
        <span>{job.experienceLevel}</span>
      </li>
      <li>
        <Wallet size={14} strokeWidth={2} aria-hidden="true" />
        <span>{formatSalary(job.salaryMin, job.salaryMax)}</span>
      </li>
      {showPosted && (
        <li>
          <Clock size={14} strokeWidth={2} aria-hidden="true" />
          <span>{formatPostedDate(job.postedDate)}</span>
        </li>
      )}
    </ul>
  );
}
