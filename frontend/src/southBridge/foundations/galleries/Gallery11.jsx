import "./Gallery11.scss";

function Gallery11() {
  return (
    <section className="sb-gallery-11" aria-labelledby="gallery-11-title">
      <div className="sb-gallery-11__container">
        <div className="sb-gallery-11__intro">
          <span>VISUAL STORIES</span>
          <h2 id="gallery-11-title">A collection with different moods.</h2>
        </div>

        <div className="sb-gallery-11__grid">
          <figure className="sb-gallery-11__one">
            <img src="/images/gallery-11-01.webp" alt="Visual story one" />
          </figure>

          <figure className="sb-gallery-11__two">
            <img src="/images/gallery-11-02.webp" alt="Visual story two" />
          </figure>

          <figure className="sb-gallery-11__three">
            <img src="/images/gallery-11-03.webp" alt="Visual story three" />
          </figure>

          <div className="sb-gallery-11__quote">
            <span>11 / 12</span>
            <strong>Form follows feeling.</strong>
          </div>

          <figure className="sb-gallery-11__four">
            <img src="/images/gallery-11-04.webp" alt="Visual story four" />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Gallery11;