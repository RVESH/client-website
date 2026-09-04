import { useMemo, useState } from "react";
import { projects, categories } from "../../data/projects";
import { site } from "../../data/site";
import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx";
import CTA from "../../sections/CTA/CTA.jsx";
import "./Projects.scss";

export default function Projects() {
  const [active, setActive] = useState("all");

  const filtered = useMemo(
    () => (active === "all" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <>
      <section className="section section--dark projects-hero">
        <div className="container">
          <span className="eyebrow">{site.projectsPage.eyebrow}</span>
          <h1 className="projects-hero__heading">{site.projectsPage.heading}</h1>
          <p className="projects-hero__desc">{site.projectsPage.desc}</p>
        </div>
      </section>

      <section className="section projects-body">
        <div className="container">
          <div className="projects-filter" role="tablist" aria-label="Filter projects by category">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={active === cat.id}
                className={`projects-filter__btn ${active === cat.id ? "is-active" : ""}`}
                onClick={() => setActive(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <p className="projects-body__count">
            Showing {filtered.length} of {projects.length} projects
          </p>

          <div className="projects-body__grid">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="projects-body__empty">No projects in this category yet — check back soon.</p>
          )}
        </div>
      </section>

      <CTA />
    </>
  );
}
