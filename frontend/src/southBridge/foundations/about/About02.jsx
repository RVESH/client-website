import "./About02.scss";

function About02({
  eyebrow = "THE PHILOSOPHY",
  title = "Less, but better.",
  quote =
    "We create with restraint, believing that the details people remember are rarely the loudest ones.",
  image = "/images/about-02.webp",
  meta = "Craft / Material / Time",
}) {
  return (
    <section className="sb-about-02" aria-labelledby="about-02-title">
      <div className="sb-about-02__container">
        <div className="sb-about-02__intro">
          <span>{eyebrow}</span>
          <h2 id="about-02-title">{title}</h2>
        </div>

        <div className="sb-about-02__body">
          <div className="sb-about-02__image-wrap">
            <img src={image} alt="Craftsmanship detail" />
            <span>02 / 12</span>
          </div>

          <div className="sb-about-02__copy">
            <p>{quote}</p>
            <div className="sb-about-02__meta">{meta}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About02;