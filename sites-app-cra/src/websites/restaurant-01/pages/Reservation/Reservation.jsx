
import Process from "../../sections/Process/Process";
import FAQ from "../../sections/FAQ/FAQ";
import Contact from "../../sections/Contact/Contact";

import "./Reservation.scss";

function Reservation() {
  return (
    <div className="restaurant-page restaurant-page--reservation">

      <main>
        <section className="inner-page__hero">
          <span>RESERVATIONS</span>

          <h1>
            Your table is waiting.
          </h1>

          <p>
            Tell us when you would like to visit and
            our team will take care of the rest.
          </p>
        </section>

        <section className="reservation-form">
          <form>
            <label>
              Name
              <input
                type="text"
                name="name"
                placeholder="Your name"
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
              />
            </label>

            <label>
              Date
              <input
                type="date"
                name="date"
              />
            </label>

            <label>
              Guests
              <select name="guests" defaultValue="2">
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
                <option value="6">6 Guests</option>
              </select>
            </label>

            <button type="submit">
              Request Reservation
            </button>
          </form>
        </section>

        <Process />
        <FAQ />
        <Contact />
      </main>

    </div>
  );
}

export default Reservation;