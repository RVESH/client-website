import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import { formatRuntime } from "../../utils/format";
import "./EpisodeCard.scss";

export default function EpisodeCard({ episode, titleId, active = false }) {
  return (
    <Link to={`/watch/${titleId}?ep=${episode.id}`} className={`episode-card ${active ? "is-active" : ""}`}>
      <div className="episode-card__media">
        <img src={episode.thumbnail.src} alt={episode.thumbnail.alt} loading="lazy" />
        <span className="episode-card__play">
          <Play size={16} strokeWidth={0} fill="currentColor" />
        </span>
      </div>
      <div className="episode-card__body">
        <div className="episode-card__head">
          <span className="episode-card__number">Episode {episode.number}</span>
          {episode.duration && <span className="episode-card__duration">{formatRuntime(episode.duration)}</span>}
        </div>
        <h4>{episode.title}</h4>
        <p>{episode.description}</p>
      </div>
    </Link>
  );
}
