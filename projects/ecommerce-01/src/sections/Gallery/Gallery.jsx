import { images } from "../../data/images";

import "./Gallery.scss";

const galleryItems =
  images.gallery.map(
    (src, index) => ({
      src,
      alt: `NOVA lifestyle ${index + 1}`,
    })
  );

export default function Gallery() {
  return (
    <section className="gallery section">
      <div className="page-shell">

        <span className="eyebrow">
          THE COLLECTION
        </span>

        <h2 className="section-title">
          Made to live with.
        </h2>

        <div className="gallery__grid">
          {galleryItems.map(
            (item, index) => (
              <figure
                key={item.src}
                className={
                  index === 0
                    ? "gallery__item gallery__item--feature"
                    : "gallery__item"
                }
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                />
              </figure>
            )
          )}
        </div>

      </div>
    </section>
  );
}