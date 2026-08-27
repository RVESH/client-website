import CTA from "../../sections/CTA/CTA";

import "./Menu.scss";

const categories = [
  {
    title: "Starters",
    items: [
      ["Burrata", "Tomato, basil, olive oil", "₹680"],
      ["Charred Corn", "Lime, chilli, smoked butter", "₹540"],
      ["Roasted Mushrooms", "Herbs, garlic, sourdough", "₹620"],
    ],
  },
  {
    title: "Mains",
    items: [
      ["Handmade Pasta", "Seasonal vegetables, parmesan", "₹890"],
      ["Wood-Fired Fish", "Lemon, herbs, brown butter", "₹1,150"],
      ["Slow Cooked Short Rib", "Root vegetables, jus", "₹1,280"],
    ],
  },
  {
    title: "Desserts",
    items: [
      ["Dark Chocolate", "Sea salt, olive oil", "₹520"],
      ["Vanilla Panna Cotta", "Seasonal fruit", "₹480"],
      ["Warm Apple Tart", "Vanilla cream", "₹450"],
    ],
  },
];

function Menu() {
  return (
    <div className="restaurant-page restaurant-page--menu">

      <main>
        <section className="menu-page__hero">
          <span>THE MENU</span>
          <h1>Seasonal cooking, simply served.</h1>
          <p>
            A menu that changes with the market, the
            season and the moment.
          </p>
        </section>

        <section className="menu-page__content">
          {categories.map((category) => (
            <div
              className="menu-page__category"
              key={category.title}
            >
              <h2>{category.title}</h2>

              <div className="menu-page__items">
                {category.items.map(
                  ([name, description, price]) => (
                    <article key={name}>
                      <div>
                        <h3>{name}</h3>
                        <p>{description}</p>
                      </div>

                      <strong>{price}</strong>
                    </article>
                  )
                )}
              </div>
            </div>
          ))}
        </section>

        <CTA />
      </main>

    </div>
  );
}

export default Menu;