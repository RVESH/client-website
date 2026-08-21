import "./Testimonial09.scss";

const reviews = [
  ["01", "“The new website finally feels like us.”", "Nora", "North House"],
  ["02", "“Every detail feels intentional.”", "Aditya", "Forma"],
  ["03", "“A noticeably better experience for our customers.”", "Mira", "Aster"],
];

function Testimonial09() {
  return (
    <section className="sb-testimonial-09">
      <div className="sb-testimonial-09__container">
        <div className="sb-testimonial-09__heading">
          <span>CLIENT STORIES</span>
          <h2>In their own words.</h2>
        </div>

        <div className="sb-testimonial-09__track">
          {reviews.map(([number, quote, name, company]) => (
            <article key={number}>
              <span>{number}</span>
              <blockquote>{quote}</blockquote>
              <div>
                <strong>{name}</strong>
                <small>{company}</small>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial09;