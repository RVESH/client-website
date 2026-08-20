import "./Gallery06.scss";

const images = [
  ["/images/gallery-06-01.webp", "01"],
  ["/images/gallery-06-02.webp", "02"],
  ["/images/gallery-06-03.webp", "03"],
  ["/images/gallery-06-04.webp", "04"],
];

function Gallery06() {
  return (
    <section className="sb-gallery-06" aria-labelledby="gallery-06-title">
      <div className="sb-gallery-06__container">
        <div className="sb-gallery-06__heading">
          <span>THE DETAILS</span>
          <h2 id="gallery-06-title">Nothing unnecessary.</h2>
        </div>

        <div className="sb-gallery-06__grid">
          {images.map(([src, number]) => (
            <figure key={src}>
              <img src={src} alt={`Luxury detail ${number}`} loading="lazy" />
              <figcaption>{number}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery06;