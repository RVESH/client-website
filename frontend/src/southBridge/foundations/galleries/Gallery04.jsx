import "./Gallery04.scss";

function Gallery04() {
  return (
    <section className="sb-gallery-04" aria-labelledby="gallery-04-title">
      <div className="sb-gallery-04__container">
        <div className="sb-gallery-04__intro">
          <span>SELECTED WORK</span>
          <h2 id="gallery-04-title">One story, several moments.</h2>
        </div>

        <div className="sb-gallery-04__layout">
          <figure className="sb-gallery-04__feature">
            <img src="/images/gallery-04-01.webp" alt="Featured project" />
            <figcaption>North House — Main Residence</figcaption>
          </figure>

          <div className="sb-gallery-04__side">
            <figure>
              <img src="/images/gallery-04-02.webp" alt="Supporting project view" />
              <figcaption>Material Detail</figcaption>
            </figure>

            <figure>
              <img src="/images/gallery-04-03.webp" alt="Supporting project view" />
              <figcaption>Morning Room</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery04;