import { featuredProject } from '../../data/projects.js'
import Button from '../../components/Button/Button.jsx'
import './FeaturedProject.scss'

export default function FeaturedProject() {
  const project = featuredProject

  return (
    <section className="section featured">
      <div className="container featured__grid">
        <div className="featured__image">
          <img
            src={project.cover.src}
            alt={project.cover.alt}
            loading="lazy"
          />
        </div>

        <div className="featured__text">
          <p className="eyebrow">Recently completed</p>

          <h2>{project.title}</h2>

          <p className="featured__meta">
            {project.location} — {project.year}
          </p>

          <p className="lede">
            {project.summary}
          </p>

          <Button to="/projects" variant="ghost">
            See the full project list
          </Button>
        </div>
      </div>
    </section>
  )
}