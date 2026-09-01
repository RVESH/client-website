import { projects } from '../../data/projects.js'
import ProjectCard from '../../components/ProjectCard/ProjectCard.jsx'
import Button from '../../components/Button/Button.jsx'
import './Projects.scss'

const selection = projects.slice(0, 4)

export default function SelectedWork() {
  return (
    <section className="section section--paper selectedWork">
      <div className="container">
        <div className="selectedWork__head">
          <div>
            <p className="eyebrow">Selected work</p>

            <h2>
              A short list, kept short on purpose.
            </h2>
          </div>

          <Button to="/projects" variant="ghost">
            All projects
          </Button>
        </div>

        <div className="selectedWork__grid">
          {selection.map((project, index) => (
            <div
              className={`selectedWork__item item-${index}`}
              key={project.id}
            >
              <ProjectCard
                project={project}
                size={index === 0 ? 'lg' : 'md'}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}