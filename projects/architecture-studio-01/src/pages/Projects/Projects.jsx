import { useMemo, useState } from 'react'
import { projects, categories } from '../../data/projects.js'
import ProjectCard from '../../components/ProjectCard/ProjectCard.jsx'
import Slider from '../../components/Slider/Slider.jsx'
import './Projects.scss'

const detailProjects = projects.filter((p) => p.detail)

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return projects
    return projects.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  return (
    <>
      <section className="section section--tight projectsIntro">
        <div className="container">
          <p className="eyebrow">Projects</p>
          <h1>Work, sorted honestly rather than dressed up.</h1>
          <p className="lede">
            Every project here was built, not just rendered. Filter by
            type, or scroll through everything in the order it was
            finished.
          </p>
        </div>
      </section>

      <section className="section section--tight projectsFilter">
        <div className="container">
          <div className="projectsFilter__tabs" role="tablist" aria-label="Filter projects by category">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat}
                className={'projectsFilter__tab' + (activeCategory === cat ? ' is-active' : '')}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section projectsGallery">
        <div className="container projectsGallery__grid">
          {filtered.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </section>

      {detailProjects.length > 0 && (
        <section className="section section--paper projectsDetail">
          <div className="container">
            <p className="eyebrow">A closer look</p>
            <h2>Detail previews</h2>
          </div>
          <div className="container projectsDetail__slider">
            <Slider
              items={detailProjects}
              label="Project detail previews"
              autoplay
              renderItem={(project) => (
                <div className="projectsDetail__slide">
                  <div className="projectsDetail__image">
                    <img src={project.detail.src} alt={project.detail.alt} loading="lazy" />
                  </div>
                  <div className="projectsDetail__caption">
                    <h3>{project.title}</h3>
                    <p>{project.location} — {project.year}</p>
                  </div>
                </div>
              )}
            />
          </div>
        </section>
      )}
    </>
  )
}
