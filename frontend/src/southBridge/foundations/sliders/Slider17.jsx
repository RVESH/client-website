import "./Slider17.scss";

const DEFAULT_ITEMS = [
  { title: "First Chapter", text: "Start here.", image: "/images/slider-17-01.webp" },
  { title: "Second Chapter", text: "Keep moving.", image: "/images/slider-17-02.webp" },
  { title: "Final Chapter", text: "Leave a mark.", image: "/images/slider-17-03.webp" },
];

function Slider17({ items = DEFAULT_ITEMS }) {
  const safeItems = Array.isArray(items) ? items : [];

  if (!safeItems.length) return null;

  return (
    <section className="sb-slider-17">
      <div className="sb-slider-17__header">
        <span>SCROLL TO EXPLORE</span>
        <strong>{safeItems.length} stories</strong>
      </div>

      <div className="sb-slider-17__rail">
        {safeItems.map((item, index) => (
          <article key={`${item.title}-${index}`}>
            <div className="sb-slider-17__image">
              <img src={item.image} alt={item.title} />
            </div>

            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Slider17;