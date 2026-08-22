import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";

import "./Reservation.scss";

function Reservation() {
  const whatsappMessage = encodeURIComponent(
    "Hello, I would like to reserve a table."
  );

  return (
    <div className="page-reservation">
      <Header />

      <main>
        <section className="page-reservation__hero">
          <span>RESERVATIONS</span>
          <h1>Your table is waiting.</h1>
          <p>
            For a simple V1 experience, reservations can be handled directly
            through WhatsApp or by phone.
          </p>
        </section>

        <section className="page-reservation__card">
          <div>
            <span>BOOK DIRECTLY</span>
            <h2>Choose what works for you.</h2>
          </div>

          <div className="page-reservation__actions">
            <Button
              href={`https://wa.me/919000000000?text=${whatsappMessage}`}
              variant="primary"
            >
              Reserve via WhatsApp
            </Button>

            <Button href="tel:+919000000000" variant="outline">
              Call Restaurant
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Reservation;