import "./Gallery12.scss";

const stories = [
  {
    src: "/images/gallery-12-01.webp",
    number: "01",
    title: "The Beginning",
    text: "Where the first idea takes shape.",
  },
  {
    src: "/images/gallery-12-02.webp",
    number: "02",
    title: "In The Details",
    text: "Material, texture and proportion.",
  },
  {
    src: "/images/gallery-12-03.webp",
    number: "03",
    title: "The Experience",
    text: "The moment everything comes together.",
  },
];

function Gallery12() {
  return (
    <section className="sb-gallery-12" aria-labelledby="gallery-12-title">
      <div className="sb-gallery-12__container">
        <div className="sb-gallery-12__heading">
          <span>12 / EDITORIAL GALLERY</span>
          <h2 id="gallery-12-title">The details tell the story.</h2>
        </div>

        <div className="sb-gallery-12__list">
          {stories.map((story) => (
            <article key={story.number}>
              <div className="sb-gallery-12__image">
                <img src={story.src} alt={story.title} loading="lazy" />
              </div>

              <div className="sb-gallery-12__text">
                <span>{story.number}</span>
                <h3>{story.title}</h3>
                <p>{story.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery12;