import "./Menu.scss";

const menu = [
  ["01", "Smoked tomato", "olive, basil, sourdough"],
  ["02", "Charred vegetables", "sesame, lemon, herbs"],
  ["03", "Handmade pasta", "seasonal sauce, aged cheese"],
  ["04", "Open-fire fish", "greens, brown butter"],
  ["05", "Dark chocolate", "sea salt, olive oil"],
];

function Menu() {
  return (
    <div className="inner-page">
      <section className="inner-page__hero page-shell">
        <span className="eyebrow">THE MENU</span>

        <h1 className="section-title">
          Cooked with the season.
        </h1>

        <p className="section-copy">
          Our menu changes frequently. The dishes below show the
          spirit of the current evening.
        </p>
      </section>

      <section className="menu-list section">
        <div className="page-shell">
          {menu.map(([number, name, description]) => (
            <article key={number}>
              <span>{number}</span>

              <div>
                <h2>{name}</h2>
                <p>{description}</p>
              </div>

              <strong>—</strong>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Menu;