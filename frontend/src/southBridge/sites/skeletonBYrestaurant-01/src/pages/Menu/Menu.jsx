import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import { menu } from "../../data/menu";

import "./Menu.scss";

function MenuPage() {
  return (
    <div className="page-menu">
      <Header />

      <main>
        <section className="page-menu__hero">
          <span>OUR MENU</span>
          <h1>Food made for long evenings.</h1>
          <p>
            Seasonal ingredients, simple techniques and dishes designed to
            share.
          </p>
        </section>

        <section className="page-menu__content">
          {menu.map((group) => (
            <div className="page-menu__group" key={group.category}>
              <h2>{group.category}</h2>

              <div className="page-menu__items">
                {group.items.map((item) => (
                  <article key={item.name}>
                    <div>
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                    </div>

                    <strong>₹{item.price}</strong>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="page-menu__cta">
          <h2>Ready for a table?</h2>
          <Button href="/#/reservation" variant="primary">
            Reserve a Table
          </Button>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default MenuPage;