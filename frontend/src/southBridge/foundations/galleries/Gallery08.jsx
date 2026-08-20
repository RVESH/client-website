import "./Gallery08.scss";

function Gallery08() {
  return (
    <section className="sb-gallery-08" aria-labelledby="gallery-08-title">
      <div className="sb-gallery-08__container">
        <div className="sb-gallery-08__header">
          <span>SELECTED SPACES</span>
          <h2 id="gallery-08-title">Designed to be lived in.</h2>
        </div>

        <div className="sb-gallery-08__layout">
          <figure>
            <img src="/images/gallery-08-01.webp" alt="Interior project" />
            <figcaption>House / Delhi</figcaption>
          </figure>

          <figure>
            <img src="/images/gallery-08-02.webp" alt="Interior detail" />
            <figcaption>Material Study</figcaption>
          </figure>

          <figure>
            <img src="/images/gallery-08-03.webp" alt="Architectural detail" />
            <figcaption>Morning Room</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Gallery08;