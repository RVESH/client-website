import "./Newsletter07.scss";

function Newsletter07() {
  return (
    <section className="sb-newsletter-07">
      <div className="sb-newsletter-07__container">
        <div>
          <span>FROM OUR TABLE</span>
          <h2>Stories from the kitchen.</h2>
          <p>
            Seasonal notes, new menus and little things happening around the
            restaurant.
          </p>
        </div>

        <form>
          <input type="email" placeholder="Your email" required />
          <button type="submit">Join us ↗</button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter07;