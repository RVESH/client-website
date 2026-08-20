import "./Gallery10.scss";

function Gallery10() {
  const items = [
    ["/images/gallery-10-01.webp", "01"],
    ["/images/gallery-10-02.webp", "02"],
    ["/images/gallery-10-03.webp", "03"],
    ["/images/gallery-10-04.webp", "04"],
  ];

  return (
    <section className="sb-gallery-10" aria-labelledby="gallery-10-title">
      <div className="sb-gallery-10__header">
        <span>THE JOURNEY</span>
        <h2 id="gallery-10-title">From the first detail to the final frame.</h2>
      </div>

      <div className="sb-gallery-10__track">
        {items.map(([src, number]) => (
          <figure key={src}>
            <img src={src} alt={`Journey image ${number}`} loading="lazy" />
            <figcaption>0{number}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Gallery10;