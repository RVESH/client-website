import "./Newsletter11.scss";

function Newsletter11({
  image = "/images/newsletter-11.webp",
}) {
  return (
    <section className="sb-newsletter-11">
      <div className="sb-newsletter-11__image">
        <img src={image} alt="" aria-hidden="true" />
      </div>

      <div className="sb-newsletter-11__overlay" />

      <div className="sb-newsletter-11__content">
        <span>FROM THE JOURNAL</span>
        <h2>Notes worth saving.</h2>
        <p>
          New stories, ideas and discoveries, sent when there is something
          worth saying.
        </p>

        <form>
          <input type="email" placeholder="Your email" required />
          <button type="submit">Subscribe ↗</button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter11;