import "./Gallery01.scss";

const items = [
  { src: "/images/gallery-01-01.webp", alt: "Gallery image one" },
  { src: "/images/gallery-01-02.webp", alt: "Gallery image two" },
  { src: "/images/gallery-01-03.webp", alt: "Gallery image three" },
  { src: "/images/gallery-01-04.webp", alt: "Gallery image four" },
  { src: "/images/gallery-01-05.webp", alt: "Gallery image five" },
  { src: "/images/gallery-01-06.webp", alt: "Gallery image six" },
];

function Gallery01({
  eyebrow = "SELECTED MOMENTS",
  title = "A visual collection.",
  description = "A clean, balanced gallery for brands that want the imagery to do the talking.",
}) {
  return (
    <section className="sb-gallery-01" aria-labelledby="gallery-01-title">
      <div className="sb-gallery-01__container">
        <div className="sb-gallery-01__intro">
          <span>{eyebrow}</span>
          <h2 id="gallery-01-title">{title}</h2>
          <p>{description}</p>
        </div>

        <div className="sb-gallery-01__grid">
          {items.map((item, index) => (
            <figure key={item.src}>
              <img src={item.src} alt={item.alt} loading={index > 1 ? "lazy" : "eager"} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery01;