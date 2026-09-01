import { useState, useMemo } from 'react';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import CTA from '../../sections/CTA/CTA';
import { projects } from '../../data/projects';
import './ProjectsPage.scss';

export default function ProjectsPage() {
  const categories = useMemo(() => ['All', ...new Set(projects.map((p) => p.category))], []);
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <section className="section projects-page-hero">
        <div className="container">
          <SectionHeading
            index="PROJECTS"
            title="A working record, not a highlight reel."
            lead="Real jobs from around the area — before/after where we've got it, straight photos where we don't."
          />
          <div className="projects-page__filters" role="tablist" aria-label="Filter projects by category">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={active === c}
                className={`projects-page__filter ${active === c ? 'is-active' : ''}`}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="projects-page__grid">
            {filtered.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
