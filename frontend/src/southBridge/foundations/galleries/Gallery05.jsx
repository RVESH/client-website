import "./Gallery05.scss";

function Gallery05() {
  return (
    <section className="sb-gallery-05" aria-labelledby="gallery-05-title">
      <div className="sb-gallery-05__heading">
        <span>THE EXPERIENCE</span>
        <h2 id="gallery-05-title">Seen in motion.</h2>
      </div>

      <div className="sb-gallery-05__stage">
        <img
          src="/images/gallery-05-01.webp"
          alt="Cinematic visual"
        />

        <div className="sb-gallery-05__overlay">
          <span>05 / 12</span>
          <strong>Quiet moments, carefully framed.</strong>
        </div>
      </div>
    </section>
  );
}

export default Gallery05;