import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchX } from "lucide-react";
import { jobs } from "../../data/jobs";
import { companies } from "../../data/companies";
import { site } from "../../data/site";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import FilterPanel from "../../components/FilterPanel/FilterPanel.jsx";
import JobCard from "../../components/JobCard/JobCard.jsx";
import Button from "../../components/Button/Button.jsx";
import "./Jobs.scss";

const emptyFilters = { category: "", type: "", workMode: "", experience: "", company: "" };

export default function Jobs() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [keyword, setKeyword] = useState(searchParams.get("q") || "");
  const [location, setLocation] = useState(searchParams.get("location") || "");
  const [filters, setFilters] = useState({
    category: searchParams.get("category") || "",
    type: searchParams.get("type") || "",
    workMode: searchParams.get("workMode") || "",
    experience: searchParams.get("experience") || "",
    company: searchParams.get("company") || "",
  });

  // Keep the URL in sync so filtered views are shareable/bookmarkable.
  useEffect(() => {
    const params = new URLSearchParams();
    if (keyword.trim()) params.set("q", keyword.trim());
    if (location.trim()) params.set("location", location.trim());
    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.set(key, value);
    });
    setSearchParams(params, { replace: true });
  }, [keyword, location, filters, setSearchParams]);

  const filteredCompany = companies.find((c) => c.id === filters.company);

  const results = useMemo(() => {
    const kw = keyword.trim().toLowerCase();
    const loc = location.trim().toLowerCase();

    return jobs.filter((job) => {
      const company = companies.find((c) => c.id === job.companyId);
      if (kw) {
        const haystack = `${job.title} ${company ? company.name : ""} ${job.category}`.toLowerCase();
        if (!haystack.includes(kw)) return false;
      }
      if (loc && !job.location.toLowerCase().includes(loc)) return false;
      if (filters.category && job.category !== filters.category) return false;
      if (filters.type && job.type !== filters.type) return false;
      if (filters.workMode && job.workMode !== filters.workMode) return false;
      if (filters.experience && job.experienceLevel !== filters.experience) return false;
      if (filters.company && job.companyId !== filters.company) return false;
      return true;
    });
  }, [keyword, location, filters]);

  const activeCount =
    Object.values(filters).filter(Boolean).length + (keyword ? 1 : 0) + (location ? 1 : 0);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleClear = () => {
    setKeyword("");
    setLocation("");
    setFilters(emptyFilters);
  };

  return (
    <>
      <section className="section section--dark jobs-hero">
        <div className="container">
          <span className="eyebrow">{site.jobsPage.eyebrow}</span>
          <h1 className="jobs-hero__heading">{site.jobsPage.heading}</h1>
          <p className="jobs-hero__desc">{site.jobsPage.desc}</p>
          <SearchBar
            keyword={keyword}
            onKeywordChange={setKeyword}
            location={location}
            onLocationChange={setLocation}
            onSubmit={() => {}}
          />
        </div>
      </section>

      <section className="section jobs-body">
        <div className="container">
          {filteredCompany && (
            <p className="jobs-body__scoped">
              Showing roles at <strong>{filteredCompany.name}</strong>.{" "}
              <button type="button" onClick={() => handleFilterChange("company", "")}>
                View all companies
              </button>
            </p>
          )}

          <FilterPanel
            filters={filters}
            onChange={handleFilterChange}
            onClear={handleClear}
            activeCount={activeCount}
          />

          <p className="jobs-body__count">
            {results.length} job{results.length === 1 ? "" : "s"} found
          </p>

          {results.length > 0 ? (
            <div className="jobs-body__grid">
              {results.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <div className="jobs-body__empty">
              <SearchX size={36} strokeWidth={1.5} aria-hidden="true" />
              <h3>No jobs match those filters</h3>
              <p>Try widening your search, or clear filters to see everything we've got.</p>
              <Button variant="primary" onClick={handleClear}>
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
