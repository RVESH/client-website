import "./Gallery.scss";

function Gallery() {
  return (
    <section className="sb-gallery-07" aria-labelledby="gallery-07-title">
      <div className="sb-gallery-07__container">
        <div className="sb-gallery-07__intro">
          <span>FROM THE KITCHEN</span>
          <h2 id="gallery-07-title">A little taste of the room.</h2>
          <p>
            Dishes, ingredients and the people behind the table.
          </p>
        </div>

       <div className="sb-gallery-07__grid">
  {[
    ["01", "/images/gallery-01.webp", "Fresh pasta"],
    ["02", "/images/gallery-02.webp", "Open kitchen"],
    ["03", "/images/gallery-03.webp", "Seasonal menu"],
    ["04", "/images/gallery-04.webp", "Late evening"],
  ].map(([number, src, label]) => (
    <figure key={number}>
      <img
        src={src}
        alt={label}
        loading={number === "01" ? "eager" : "lazy"}
        fetchPriority={
          number === "01" ? "high" : undefined
        }
      />

      <figcaption>
        <span>{number}</span>
        <strong>{label}</strong>
      </figcaption>
    </figure>
  ))}
</div>
      </div>
    </section>
  );
}

export default Gallery;