import { images } from "../../data/images";

import "./Gallery.scss";

export default function Gallery() {
  return (
    <section className="north-gallery section">
      <div className="page-shell">

        <div className="north-gallery__heading">
          <span className="eyebrow">
            THE DETAIL
          </span>

          <h2 className="section-title">
            Architecture,
            <br />
            light, living.
          </h2>
        </div>

        <div className="north-gallery__grid">

          <div className="north-gallery__item north-gallery__item--large">
            <img
              src={images.gallery[0]}
              alt="Residential architecture"
              loading="lazy"
            />
          </div>

          <div className="north-gallery__item">
            <img
              src={images.gallery[1]}
              alt="Residential interior"
              loading="lazy"
            />
          </div>

          <div className="north-gallery__item">
            <img
              src={images.gallery[2]}
              alt="Residential exterior"
              loading="lazy"
            />
          </div>

          <div className="north-gallery__item">
            <img
              src={images.gallery[3]}
              alt="Premium residence"
              loading="lazy"
            />
          </div>

        </div>

      </div>
    </section>
  );
}