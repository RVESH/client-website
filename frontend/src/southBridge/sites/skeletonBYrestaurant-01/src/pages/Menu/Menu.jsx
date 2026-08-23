import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";

import { menu } from "../../data/menu";

import "./Menu.scss";

function Menu() {
  return (
    <div className="restaurant-page restaurant-page--menu">
      <Header />

      <main>
        <section className="menu-page__intro">
          <span>OUR MENU</span>

          <h1>
            Seasonal food,
            <br />
            simply done.
          </h1>

          <p>
            A menu shaped by the season, the market and the pleasure of
            sharing a table.
          </p>
        </section>

        <section className="menu-page__content">
          {menu.map((category) => (
            <div
              className="menu-page__category"
              key={category.category}
            >
              <div className="menu-page__category-heading">
                <span>{category.category}</span>
              </div>

              <div className="menu-page__items">
                {category.items.map((item) => (
                  <article
                    className="menu-page__item"
                    key={item.name}
                  >
                    <div>
                      <h2>{item.name}</h2>
                      <p>{item.description}</p>
                    </div>

                    <strong>₹{item.price}</strong>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="menu-page__cta">
          <h2>Save a seat for the evening.</h2>

          <Button href="/#/reservation">
            Reserve a Table
          </Button>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Menu;