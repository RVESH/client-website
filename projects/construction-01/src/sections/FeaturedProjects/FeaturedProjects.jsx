import { ArrowRight } from "lucide-react";
import { projects } from "../../data/projects";
import { site } from "../../data/site";
import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx";
import Button from "../../components/Button/Button.jsx";
import "./FeaturedProjects.scss";

export default function FeaturedProjects() {
  const featured = projects.slice(0, 6);
  const { eyebrow, heading, desc } = site.featuredProjectsHeading;

  return (
    <section className="section featured-projects">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="section-head__title">{heading}</h2>
          </div>
          <p className="section-head__desc">{desc}</p>
        </div>

        <div className="featured-projects__grid">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="featured-projects__more">
          <Button to="/projects" variant="ghost" icon={ArrowRight}>
            View the full portfolio
          </Button>
        </div>
      </div>
    </section>
  );
}
