import "./Newsletter05.scss";

function Newsletter05({
  title = "New pieces. Better finds.",
  description = "Be first to know about new arrivals, limited releases and considered collections.",
}) {
  return (
    <section className="sb-newsletter-05">
      <div className="sb-newsletter-05__container">
        <div>
          <span>THE EDIT</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <form>
          <label>
            Email address
            <input
              type="email"
              placeholder="you@example.com"
              required
            />
          </label>

          <button type="submit">
            Join the list
            <span>↗</span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter05;