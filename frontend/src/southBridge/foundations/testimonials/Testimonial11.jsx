import "./Testimonial11.scss";

const quotes = [
  ["01", "“Simple, thoughtful and exactly right for us.”", "Sana"],
  ["02", "“We finally have a digital presence we are proud to share.”", "Arjun"],
  ["03", "“The process felt calm, focused and incredibly professional.”", "Maya"],
  ["04", "“A much better reflection of where the company is going.”", "Kabir"],
];

function Testimonial11() {
  return (
    <section className="sb-testimonial-11">
      <div className="sb-testimonial-11__container">
        <div className="sb-testimonial-11__heading">
          <span>WHAT THEY REMEMBER</span>
          <h2>The words that stayed with us.</h2>
        </div>

        <div className="sb-testimonial-11__list">
          {quotes.map(([number, quote, name]) => (
            <article key={number}>
              <span>{number}</span>
              <blockquote>{quote}</blockquote>
              <strong>— {name}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial11;