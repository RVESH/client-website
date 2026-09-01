import { useState } from 'react';
import { getImage } from '../../data/images';
import './ProjectCard.scss';

export default function ProjectCard({ project }) {
  const [showBefore, setShowBefore] = useState(false);
  const hasBeforeAfter = Boolean(project.before && project.after);

  return (
    <article className="project-card">
      <div
        className="project-card__media"
        onMouseEnter={() => hasBeforeAfter && setShowBefore(true)}
        onMouseLeave={() => hasBeforeAfter && setShowBefore(false)}
      >
        <img src={getImage(project.image)} alt={`${project.title} — completed project`} loading="lazy" />
        {hasBeforeAfter && (
          <img
            src={getImage(project.before)}
            alt={`${project.title} — before`}
            className={`project-card__before ${showBefore ? 'is-visible' : ''}`}
            loading="lazy"
          />
        )}
        {hasBeforeAfter && (
          <button
            type="button"
            className="project-card__toggle"
            onClick={() => setShowBefore((v) => !v)}
          >
            {showBefore ? 'After' : 'Before'}
          </button>
        )}
        <span className="project-card__category">{project.category}</span>
      </div>
      <div className="project-card__body">
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="project-card__meta">
          <span>{project.location}</span>
          <span aria-hidden="true">&middot;</span>
          <span>{project.year}</span>
        </div>
      </div>
    </article>
  );
}
