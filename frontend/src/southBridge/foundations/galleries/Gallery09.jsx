import "./Gallery09.scss";

const projects = [
  {
    src: "/images/gallery-09-01.webp",
    title: "North House",
    category: "Architecture",
  },
  {
    src: "/images/gallery-09-02.webp",
    title: "Forma",
    category: "Identity",
  },
  {
    src: "/images/gallery-09-03.webp",
    title: "Luma",
    category: "Digital Product",
  },
  {
    src: "/images/gallery-09-04.webp",
    title: "Atelier 27",
    category: "Hospitality",
  },
];

function Gallery09() {
  return (
    <section className="sb-gallery-09" aria-labelledby="gallery-09-title">
      <div className="sb-gallery-09__container">
        <div className="sb-gallery-09__intro">
          <span>SELECTED PROJECTS</span>
          <h2 id="gallery-09-title">A few things we've made.</h2>
        </div>

        <div className="sb-gallery-09__grid">
          {projects.map((project, index) => (
            <a href={`#project-${index + 1}`} key={project.title}>
              <div className="sb-gallery-09__image">
                <img src={project.src} alt={project.title} loading="lazy" />
              </div>

              <div className="sb-gallery-09__meta">
                <div>
                  <strong>{project.title}</strong>
                  <span>{project.category}</span>
                </div>
                <b>↗</b>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery09;