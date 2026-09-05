import { useEffect, useRef } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import { jobs } from "../../data/jobs";
import { companies } from "../../data/companies";
import JobMeta from "../../components/JobMeta/JobMeta.jsx";
import JobCard from "../../components/JobCard/JobCard.jsx";
import ApplicationForm from "../../components/ApplicationForm/ApplicationForm.jsx";
import Button from "../../components/Button/Button.jsx";
import { formatDateLong } from "../../utils/format";
import "./JobDetail.scss";

export default function JobDetail() {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === id);
  const applyRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [id]);

  if (!job) {
    return <Navigate to="/jobs" replace />;
  }

  const company = companies.find((c) => c.id === job.companyId);
  const relatedJobs = jobs
    .filter((j) => j.id !== job.id && (j.category === job.category || j.companyId === job.companyId))
    .slice(0, 3);

  const scrollToApply = () => {
    applyRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <section className="section section--dark job-detail-hero">
        <div className="container">
          <Link to="/jobs" className="job-detail-hero__back">
            <ArrowLeft size={15} strokeWidth={2} aria-hidden="true" />
            <span>Back to all jobs</span>
          </Link>

          <div className="job-detail-hero__top">
            {company && (
              <div className="job-detail-hero__logo">
                <img src={company.logo.src} alt={company.logo.alt} />
              </div>
            )}
            <div>
              <span className="job-detail-hero__workmode">{job.workMode}</span>
              <h1 className="job-detail-hero__title">{job.title}</h1>
              {company && (
                <Link to={`/jobs?company=${company.id}`} className="job-detail-hero__company">
                  {company.name}
                </Link>
              )}
            </div>
          </div>

          <JobMeta job={job} size="lg" />

          <div className="job-detail-hero__actions">
            <Button variant="primary" onClick={scrollToApply}>
              Apply now
            </Button>
            {company && (
              <Button to={`/companies`} variant="secondary">
                About {company.name}
              </Button>
            )}
          </div>
        </div>
      </section>

      <section className="section job-detail-body">
        <div className="container job-detail-body__grid">
          <div className="job-detail-body__main">
            <div className="job-detail-block">
              <h2>About this role</h2>
              <p>{job.description}</p>
            </div>

            <div className="job-detail-block">
              <h2>Responsibilities</h2>
              <ul className="job-detail-list">
                {job.responsibilities.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={16} strokeWidth={2} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="job-detail-block">
              <h2>Requirements</h2>
              <ul className="job-detail-list">
                {job.requirements.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={16} strokeWidth={2} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="job-detail-block">
              <h2>Benefits</h2>
              <ul className="job-detail-list">
                {job.benefits.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={16} strokeWidth={2} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div ref={applyRef} className="job-detail-block job-detail-block--apply">
              <ApplicationForm job={job} company={company} />
            </div>
          </div>

          <aside className="job-detail-body__side">
            <div className="job-detail-summary">
              <h3>Job overview</h3>
              <dl>
                <div>
                  <dt>Posted on</dt>
                  <dd>{formatDateLong(job.postedDate)}</dd>
                </div>
                <div>
                  <dt>Job type</dt>
                  <dd>{job.type}</dd>
                </div>
                <div>
                  <dt>Work mode</dt>
                  <dd>{job.workMode}</dd>
                </div>
                <div>
                  <dt>Experience</dt>
                  <dd>{job.experienceLevel}</dd>
                </div>
                <div>
                  <dt>Location</dt>
                  <dd>{job.location}</dd>
                </div>
              </dl>
              <Button variant="primary" onClick={scrollToApply} className="job-detail-summary__cta">
                Apply now
              </Button>
            </div>

            {company && (
              <div className="job-detail-company">
                <div className="job-detail-company__logo">
                  <img src={company.logo.src} alt={company.logo.alt} />
                </div>
                <h3>{company.name}</h3>
                <p className="job-detail-company__industry">{company.industry}</p>
                <p>{company.description}</p>
                <Link to={`/jobs?company=${company.id}`} className="job-detail-company__link">
                  <span>View all roles at {company.name}</span>
                  <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
                </Link>
              </div>
            )}
          </aside>
        </div>
      </section>

      {relatedJobs.length > 0 && (
        <section className="section section--dim">
          <div className="container">
            <h2 className="job-detail-related__heading">Related roles</h2>
            <div className="job-detail-related__grid">
              {relatedJobs.map((j) => (
                <JobCard key={j.id} job={j} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
