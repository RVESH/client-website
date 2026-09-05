import { useMemo, useState } from "react";
import { companies } from "../../data/companies";
import { jobs } from "../../data/jobs";
import { site } from "../../data/site";
import CompanyCard from "../../components/CompanyCard/CompanyCard.jsx";
import CTA from "../../components/CTA/CTA.jsx";
import Button from "../../components/Button/Button.jsx";
import "./Companies.scss";

export default function Companies() {
  const [industry, setIndustry] = useState("");

  const industries = useMemo(
    () => Array.from(new Set(companies.map((c) => c.industry))).sort(),
    []
  );

  const openingsFor = (companyId) => jobs.filter((j) => j.companyId === companyId).length;

  const filtered = industry ? companies.filter((c) => c.industry === industry) : companies;

  return (
    <>
      <section className="section section--dark companies-hero">
        <div className="container">
          <span className="eyebrow">{site.companiesPage.eyebrow}</span>
          <h1 className="companies-hero__heading">{site.companiesPage.heading}</h1>
          <p className="companies-hero__desc">{site.companiesPage.desc}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="companies-filter">
            <button
              type="button"
              className={`companies-filter__btn ${!industry ? "is-active" : ""}`}
              onClick={() => setIndustry("")}
            >
              All industries
            </button>
            {industries.map((ind) => (
              <button
                key={ind}
                type="button"
                className={`companies-filter__btn ${industry === ind ? "is-active" : ""}`}
                onClick={() => setIndustry(ind)}
              >
                {ind}
              </button>
            ))}
          </div>

          <p className="companies-count">
            {filtered.length} compan{filtered.length === 1 ? "y" : "ies"}
          </p>

          <div className="companies-grid">
            {filtered.map((company) => (
              <CompanyCard key={company.id} company={company} openingsCount={openingsFor(company.id)} />
            ))}
          </div>
        </div>
      </section>

      <CTA
        eyebrow={site.employerCta.eyebrow}
        heading={site.employerCta.heading}
        desc={site.employerCta.desc}
        actions={
          <Button to="/contact" variant="primary">
            Post a job
          </Button>
        }
      />
    </>
  );
}
