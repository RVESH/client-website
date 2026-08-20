import "./About11.scss";

function About11({
  eyebrow = "ABOUT THE BRAND",
  title = "Made for people who notice the difference.",
  description =
    "A simple belief sits behind everything we do: quality should be felt before it is explained.",
  image = "/images/about-11.webp",
}) {
  return (
    <section className="sb-about-11" aria-labelledby="about-11-title">
      <div className="sb-about-11__container">
        <div className="sb-about-11__image">
          <img src={image} alt="Brand detail" />
        </div>

        <div className="sb-about-11__copy">
          <span>{eyebrow}</span>
          <h2 id="about-11-title">{title}</h2>
          <p>{description}</p>

          <div className="sb-about-11__rule">
            <span>11 / 12</span>
            <span>Quality over noise.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About11;