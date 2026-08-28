import { restaurantImages } from "../../data/images";

import "./Menu.scss";

const menu = [
  ["01", "Smoked Tomato", "Olive, basil, sourdough", "₹420"],
  ["02", "Charred Vegetables", "Sesame, lemon, herbs", "₹460"],
  ["03", "Handmade Pasta", "Seasonal sauce, aged cheese", "₹680"],
  ["04", "Open-Fire Fish", "Greens, brown butter", "₹950"],
  ["05", "Dark Chocolate", "Sea salt, olive oil", "₹380"],
];

function Menu() {
  return (
    <div className="inner-page">

      <section className="inner-page__hero page-shell">
        <span className="eyebrow">
          THE MENU
        </span>

        <h1 className="section-title">
          Cooked with the season.
        </h1>

        <p className="section-copy">
          Our menu changes frequently. Explore
          the dishes currently defining the LUMA
          kitchen.
        </p>
      </section>

      <section className="menu-list section">
        <div className="page-shell">

          {menu.map(
            (
              [
                number,
                name,
                description,
                price,
              ],
              index
            ) => (
              <article key={number}>

                <div className="menu-list__image">
                  <img
                    src={
                      restaurantImages
                        .gallery[index %
                          restaurantImages
                            .gallery.length]
                        .src
                    }
                    alt={name}
                    loading="lazy"
                  />
                </div>

                <div className="menu-list__number">
                  {number}
                </div>

                <div>
                  <h2>{name}</h2>
                  <p>{description}</p>
                </div>

                <strong>{price}</strong>

              </article>
            )
          )}

        </div>
      </section>

    </div>
  );
}

export default Menu;