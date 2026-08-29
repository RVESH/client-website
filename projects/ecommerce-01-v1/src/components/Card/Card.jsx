import { ArrowUpRight } from "lucide-react";
import "./Card.scss";

export default function Card({
  eyebrow,
  title,
  text,
  href,
  image,
}) {
  return (
    <article className="sb-card">
      {image && (
        <div className="sb-card__media">
          <img
            src={image}
            alt=""
            loading="lazy"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        </div>
      )}

      <div className="sb-card__content">
        {eyebrow && (
          <span className="sb-card__eyebrow">
            {eyebrow}
          </span>
        )}

        <h3>{title}</h3>

        {text && <p>{text}</p>}

        {href && (
          <a href={href} className="sb-card__link">
            Explore
            <ArrowUpRight size={15} />
          </a>
        )}
      </div>
    </article>
  );
}