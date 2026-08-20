import "./About08.scss";

function About08({
  eyebrow = "FROM OUR KITCHEN",
  title = "A neighborhood table, done properly.",
  description =
    "We cook with the seasons, source with intention and leave room for the kind of evenings that take their time.",
  image = "/images/about-08-restaurant.webp",
  signature = "Kitchen / People / Place",
}) {
  return (
    <section className="sb-about-08" aria-labelledby="about-08-title">
      <div className="sb-about-08__container">
        <div className="sb-about-08__heading">
          <span>{eyebrow}</span>
          <h2 id="about-08-title">{title}</h2>
        </div>

        <div className="sb-about-08__body">
          <div className="sb-about-08__image">
            <img src={image} alt="Restaurant dining room" />
          </div>

          <div className="sb-about-08__copy">
            <p>{description}</p>
            <span className="sb-about-08__signature">{signature}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About08;