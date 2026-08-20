import "./Gallery02.scss";

function Gallery02({
  eyebrow = "THE COLLECTION",
  title = "Objects, places and quiet details.",
}) {
  return (
    <section className="sb-gallery-02" aria-labelledby="gallery-02-title">
      <div className="sb-gallery-02__container">
        <div className="sb-gallery-02__intro">
          <span>{eyebrow}</span>
          <h2 id="gallery-02-title">{title}</h2>
        </div>

        <div className="sb-gallery-02__layout">
          <figure className="sb-gallery-02__large">
            <img src="/images/gallery-02-01.webp" alt="Editorial feature" />
            <figcaption>01 — Morning Light</figcaption>
          </figure>

          <figure className="sb-gallery-02__top">
            <img src="/images/gallery-02-02.webp" alt="Editorial detail" />
            <figcaption>02 — Material Study</figcaption>
          </figure>

          <figure className="sb-gallery-02__bottom">
            <img src="/images/gallery-02-03.webp" alt="Editorial atmosphere" />
            <figcaption>03 — At The Table</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Gallery02;