import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import RatingBadge from "../RatingBadge/RatingBadge.jsx";
import Badge from "../Badge/Badge.jsx";
import WatchlistButton from "../WatchlistButton/WatchlistButton.jsx";
import { useProgress } from "../../app/ProgressContext.jsx";
import { formatRuntime } from "../../utils/format";
import "./TitleCard.scss";

export default function TitleCard({ title, variant = "poster" }) {
  const { getPercent } = useProgress();
  const percent = getPercent(title.id);
  const image = variant === "landscape" ? title.backdrop : title.poster;

  return (
    <article className={`title-card title-card--${variant}`}>
      <Link to={`/movie/${title.id}`} className="title-card__media">
        <img src={image.src} alt={image.alt} loading="lazy" />
        <div className="title-card__scrim" aria-hidden="true" />

        <div className="title-card__top">
          {title.newRelease && <Badge variant="new">New</Badge>}
          <span className="title-card__type">{title.type === "series" ? "Series" : "Film"}</span>
        </div>

        <div className="title-card__hover">
          <span className="title-card__play">
            <Play size={20} strokeWidth={0} fill="currentColor" />
          </span>
        </div>

        {percent > 0 && (
          <div className="title-card__progress" role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100}>
            <span style={{ width: `${percent}%` }} />
          </div>
        )}
      </Link>

      <div className="title-card__body">
        <div className="title-card__row">
          <Link to={`/movie/${title.id}`} className="title-card__title">
            {title.title}
          </Link>
          <WatchlistButton id={title.id} variant="icon" title={title.title} />
        </div>
        <div className="title-card__meta">
          <span>{title.year}</span>
          {title.duration && <span>{formatRuntime(title.duration)}</span>}
          <RatingBadge rating={title.rating} size="sm" />
        </div>
      </div>
    </article>
  );
}
