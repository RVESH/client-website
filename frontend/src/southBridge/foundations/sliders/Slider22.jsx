import "./Slider22.scss";

const DEFAULT_ITEMS = [
  { label: "DESIGN", logo: "A" },
  { label: "FORM", logo: "B" },
  { label: "MOTION", logo: "C" },
  { label: "DETAIL", logo: "D" },
  { label: "SPACE", logo: "E" },
];

function Slider22({ items = DEFAULT_ITEMS }) {
  const safeItems = Array.isArray(items) ? items : [];

  if (!safeItems.length) return null;

  const repeated = [...safeItems, ...safeItems];

  return (
    <section className="sb-slider-22" aria-label="Infinite rail">
      <div className="sb-slider-22__track">
        {repeated.map((item, index) => (
          <div key={`${item.label}-${index}`}>
            <span>{item.logo}</span>
            <strong>{item.label}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Slider22;