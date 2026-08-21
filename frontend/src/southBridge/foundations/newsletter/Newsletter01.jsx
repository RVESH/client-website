import "./Newsletter01.scss";

function Newsletter01({
  eyebrow = "STAY IN THE LOOP",
  title = "Good ideas, delivered occasionally.",
  description =
    "A thoughtful note with new work, useful insights and things worth knowing.",
  buttonLabel = "Subscribe",
}) {
  return (
    <section className="sb-newsletter-01">
      <div className="sb-newsletter-01__container">
        <div className="sb-newsletter-01__copy">
          <span>{eyebrow}</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <form className="sb-newsletter-01__form">
          <label>
            Email address
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
            />
          </label>

          <button type="submit">
            {buttonLabel}
            <span>↗</span>
          </button>

          <small>By subscribing, you agree to receive our updates.</small>
        </form>
      </div>
    </section>
  );
}

export default Newsletter01;