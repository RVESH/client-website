import "./Gallery.scss";
import images from "../data/images";

function Gallery() {
  return (
    <section className="section gallery">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Inside the studio</span>
          <h2>A quiet room, done well</h2>
        </div>

        <div className="gallery__grid">
          {images.gallery.map((src, i) => (
            <div className={`gallery__item gallery__item--${i}`} key={src}>
              <img src={src} alt="Maison Rosette studio detail" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
