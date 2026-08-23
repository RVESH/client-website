import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";

import FAQ from "../../sections/FAQ/FAQ";

import "./Reservation.scss";

function Reservation() {
  const whatsappMessage = encodeURIComponent(
    "Hello, I would like to reserve a table at LUMA."
  );

  return (
    <div className="restaurant-page restaurant-page--reservation">
      <Header />

      <main>
        <section className="reservation-page__intro">
          <span>RESERVATIONS</span>

          <h1>Your table is waiting.</h1>

          <p>
            Join us for seasonal cooking, good wine and an evening worth
            remembering.
          </p>
        </section>

        <section className="reservation-page__options">
          <article>
            <span>01</span>

            <h2>Reserve by WhatsApp</h2>

            <p>
              Send us your preferred date, time and number of guests.
            </p>

            <Button
              href={`https://wa.me/919000000000?text=${whatsappMessage}`}
            >
              WhatsApp Us
            </Button>
          </article>

          <article>
            <span>02</span>

            <h2>Call the restaurant</h2>

            <p>
              Speak directly with our team for availability and private
              dining requests.
            </p>

            <Button
              href="tel:+919000000000"
              variant="outline"
            >
              +91 90000 00000
            </Button>
          </article>
        </section>

        <FAQ />
      </main>

      <Footer />
    </div>
  );
}

export default Reservation;