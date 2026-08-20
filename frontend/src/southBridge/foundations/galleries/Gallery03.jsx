import "./Gallery03.scss";

const items = [
  ["/images/gallery-03-01.webp", "01"],
  ["/images/gallery-03-02.webp", "02"],
  ["/images/gallery-03-03.webp", "03"],
  ["/images/gallery-03-04.webp", "04"],
  ["/images/gallery-03-05.webp", "05"],
  ["/images/gallery-03-06.webp", "06"],
];

function Gallery03() {
  return (
    <section className="sb-gallery-03" aria-labelledby="gallery-03-title">
      <div className="sb-gallery-03__container">
        <div className="sb-gallery-03__heading">
          <span>03 / GALLERY</span>
          <h2 id="gallery-03-title">Collected over time.</h2>
        </div>

        <div className="sb-gallery-03__masonry">
          {items.map(([src, number]) => (
            <figure key={src}>
              <img src={src} alt={`Collection image ${number}`} loading="lazy" />
              <span>{number}</span>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery03;