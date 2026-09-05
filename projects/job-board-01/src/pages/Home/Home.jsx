import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, PenSquare } from "lucide-react";
import { site } from "../../data/site";
import { jobs } from "../../data/jobs";
import { companies } from "../../data/companies";
import { categories } from "../../data/categories";
import { testimonials } from "../../data/testimonials";
import { images } from "../../data/images";
import SectionHeading from "../../components/SectionHeading/SectionHeading.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import JobCard from "../../components/JobCard/JobCard.jsx";
import CategoryCard from "../../components/CategoryCard/CategoryCard.jsx";
import StatCard from "../../components/StatCard/StatCard.jsx";
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard.jsx";
import Button from "../../components/Button/Button.jsx";
import CTA from "../../components/CTA/CTA.jsx";
import "./Home.scss";

export default function Home() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (keyword.trim()) params.set("q", keyword.trim());
    if (location.trim()) params.set("location", location.trim());
    navigate(`/jobs${params.toString() ? `?${params.toString()}` : ""}`);
  };

  const featuredJobs = jobs.slice(0, 6);

  const categoryCounts = categories.map((c) => ({
    category: c,
    count: jobs.filter((j) => j.category === c.id).length,
  }));

  return (
    <>
      {/* Hero */}
      <section className="home-hero">
        <div className="home-hero__bg">
          <img src={images.heroMain.src} alt={images.heroMain.alt} />
        </div>
        <div className="container home-hero__content">
          <span className="eyebrow">{site.hero.eyebrow}</span>
          <h1 className="home-hero__headline">{site.hero.headline}</h1>
          <p className="home-hero__sub">{site.hero.sub}</p>
          <SearchBar
            keyword={keyword}
            onKeywordChange={setKeyword}
            location={location}
            onLocationChange={setLocation}
            onSubmit={handleSearch}
          />
          <div className="home-hero__quicklinks">
            <span>Popular:</span>
            {[
              { label: "Frontend Engineer", to: "/jobs?q=Frontend%20Engineer" },
              { label: "Product Manager", to: "/jobs?q=Product%20Manager" },
              { label: "Remote", to: "/jobs?location=Remote" },
              { label: "Internship", to: "/jobs?type=Internship" },
            ].map((q) => (
              <button key={q.label} type="button" onClick={() => navigate(q.to)}>
                {q.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured jobs */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Featured roles"
            title="Roles hiring managers are prioritising"
            desc="A snapshot of active openings across categories and experience levels."
            action={
              <Button to="/jobs" variant="ghost" icon={ArrowRight}>
                View all jobs
              </Button>
            }
          />
          <div className="home-jobs__grid">
            {featuredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular categories */}
      <section className="section section--dim">
        <div className="container">
          <SectionHeading
            eyebrow="Browse by category"
            title="Popular categories"
            desc="Jump straight to the type of role you're looking for."
          />
          <div className="home-categories__grid">
            {categoryCounts.map(({ category, count }) => (
              <CategoryCard key={category.id} category={category} count={count} />
            ))}
          </div>
        </div>
      </section>

      {/* Trusted companies */}
      <section className="section section--tight">
        <div className="container">
          <SectionHeading
            eyebrow="Who's hiring"
            title="Trusted by growing companies"
            desc="From fast-moving startups to established regional players."
          />
          <div className="home-companies__strip">
            {companies.map((c) => (
              <div className="home-companies__logo" key={c.id} title={c.name}>
                <img src={c.logo.src} alt={c.logo.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow={site.howItWorks.eyebrow}
            title={site.howItWorks.heading}
            desc={site.howItWorks.desc}
          />
          <div className="home-how__grid">
            {site.howItWorks.steps.map((step, i) => (
              <div className="home-how__item" key={step.title}>
                <span className="home-how__index">{String(i + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section section--dark home-stats">
        <div className="container">
          <SectionHeading eyebrow="By the numbers" title={site.stats.heading} />
          <div className="home-stats__grid">
            {site.stats.items.map((item) => (
              <StatCard key={item.label} value={item.value} suffix={item.suffix} label={item.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow={site.testimonialsHeading.eyebrow}
            title={site.testimonialsHeading.heading}
            desc={site.testimonialsHeading.desc}
          />
          <div className="home-testimonials__grid">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Employer CTA */}
      <CTA
        eyebrow={site.employerCta.eyebrow}
        heading={site.employerCta.heading}
        desc={site.employerCta.desc}
        actions={
          <>
            <Button to="/contact" variant="primary" icon={PenSquare}>
              Post a job
            </Button>
            <Button to="/companies" variant="secondary">
              Browse companies
            </Button>
          </>
        }
      />
    </>
  );
}
