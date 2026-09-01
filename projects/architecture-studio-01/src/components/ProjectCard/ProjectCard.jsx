import './ProjectCard.scss'

/**
 * A single project preview. Since projects don't yet have individual
 * detail pages in v1, the card surfaces the same information a detail
 * page would lead with, so browsing still feels complete.
 */
export default function ProjectCard({ project, size = 'md' }) {
  return (
    <article className={`projectCard projectCard--${size}`}>
      <div className="projectCard__frame">
        <img src={project.cover.src} alt={project.cover.alt} loading="lazy" />
        <span className="projectCard__year">{project.year}</span>
      </div>
      <div className="projectCard__caption">
        <div className="projectCard__titleRow">
          <h3>{project.title}</h3>
          <p className="projectCard__category">{project.category}</p>
        </div>
        <p className="projectCard__location">{project.location}</p>
      </div>
    </article>
  )
}
