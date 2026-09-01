import SectionHeading from '../../components/SectionHeading/SectionHeading';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Button from '../../components/Button/Button';
import { projects } from '../../data/projects';
import './Projects.scss';

export default function Projects({ showAll = false }) {
  const list = showAll ? projects : projects.slice(0, 3);

  return (
    <section className="section projects-section">
      <div className="container">
        <div className="projects-section__head">
          <SectionHeading
            kicker="Recent work"
            title="A few jobs we're glad we photographed."
            lead="Hover a completed shot where available to see the before. Full write-ups on request."
          />
          {!showAll && <Button to="/projects" variant="outline">See all projects</Button>}
        </div>
        <div className="projects-section__grid">
          {list.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
