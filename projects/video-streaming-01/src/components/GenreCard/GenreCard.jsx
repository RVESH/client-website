import { Link } from "react-router-dom";
import "./GenreCard.scss";

export default function GenreCard({ genre, count }) {
  const [c1, c2] = genre.accent;
  return (
    <Link
      to={`/browse?genre=${genre.id}`}
      className="genre-card"
      style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }}
    >
      <span className="genre-card__label">{genre.label}</span>
      <span className="genre-card__desc">{genre.description}</span>
      <span className="genre-card__count">
        {count} title{count === 1 ? "" : "s"}
      </span>
    </Link>
  );
}
