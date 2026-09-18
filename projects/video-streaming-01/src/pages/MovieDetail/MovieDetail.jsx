import { useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { Play, Film, ThumbsUp, ThumbsDown, Share2, Check } from "lucide-react";
import { findTitle, relatedTitles, genreLabel } from "../../utils/titles";
import { formatRuntime } from "../../utils/format";
import Badge from "../../components/Badge/Badge.jsx";
import RatingBadge from "../../components/RatingBadge/RatingBadge.jsx";
import WatchlistButton from "../../components/WatchlistButton/WatchlistButton.jsx";
import PersonList from "../../components/PersonList/PersonList.jsx";
import EpisodeCard from "../../components/EpisodeCard/EpisodeCard.jsx";
import TitleCard from "../../components/TitleCard/TitleCard.jsx";
import Modal from "../../components/Modal/Modal.jsx";
import "./MovieDetail.scss";

export default function MovieDetail() {
  const { id } = useParams();
  const title = findTitle(id);
  const [trailerOpen, setTrailerOpen] = useState(false);
  const [reaction, setReaction] = useState(null);
  const [activeSeason, setActiveSeason] = useState(0);
  const [shared, setShared] = useState(false);

  if (!title) return <Navigate to="/browse" replace />;

  const related = relatedTitles(title);
  const season = title.seasons ? title.seasons[activeSeason] : null;

  const handleShare = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: title.title, url });
      } else {
        await navigator.clipboard.writeText(url);
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      }
    } catch {
      // Share can be cancelled by the user — nothing to do.
    }
  };

  return (
    <>
      <section className="detail-hero">
        <div className="detail-hero__bg">
          <img src={title.backdrop.src} alt={title.backdrop.alt} />
        </div>
        <div className="container detail-hero__content">
          <div className="detail-hero__poster">
            <img src={title.poster.src} alt={title.poster.alt} />
          </div>

          <div className="detail-hero__info">
            <span className="eyebrow">{title.type === "series" ? "Series" : "Film"}</span>
            <h1>{title.title}</h1>

            <div className="detail-hero__meta">
              <RatingBadge rating={title.rating} />
              <span>{title.year}</span>
              {title.duration && <span>{formatRuntime(title.duration)}</span>}
              {title.seasons && (
                <span>
                  {title.seasons.length} season{title.seasons.length > 1 ? "s" : ""}
                </span>
              )}
              <Badge variant="outline">{title.maturity}</Badge>
            </div>

            <div className="detail-hero__genres">
              {title.genres.map((g) => (
                <Link key={g} to={`/browse?genre=${g}`} className="detail-hero__genre-tag">
                  {genreLabel(g)}
                </Link>
              ))}
            </div>

            <p className="detail-hero__desc">{title.description}</p>

            <div className="detail-hero__actions">
              <Link to={`/watch/${title.id}`} className="btn btn--primary">
                <Play size={18} strokeWidth={0} fill="currentColor" />
                <span>Watch Now</span>
              </Link>
              <button type="button" className="btn btn--secondary" onClick={() => setTrailerOpen(true)}>
                <Film size={18} strokeWidth={2} />
                <span>Trailer</span>
              </button>
              <WatchlistButton id={title.id} title={title.title} />

              <div className="detail-hero__reactions" role="group" aria-label="Rate this title">
                <button
                  type="button"
                  className={`btn btn--icon ${reaction === "up" ? "is-active" : ""}`}
                  aria-pressed={reaction === "up"}
                  aria-label="Like"
                  onClick={() => setReaction(reaction === "up" ? null : "up")}
                >
                  <ThumbsUp size={17} strokeWidth={2} />
                </button>
                <button
                  type="button"
                  className={`btn btn--icon ${reaction === "down" ? "is-active" : ""}`}
                  aria-pressed={reaction === "down"}
                  aria-label="Dislike"
                  onClick={() => setReaction(reaction === "down" ? null : "down")}
                >
                  <ThumbsDown size={17} strokeWidth={2} />
                </button>
                <button type="button" className="btn btn--icon" aria-label="Share" onClick={handleShare}>
                  {shared ? <Check size={17} strokeWidth={2} /> : <Share2 size={17} strokeWidth={2} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section detail-body">
        <div className="container detail-body__grid">
          <div className="detail-body__main">
            {title.seasons && (
              <div className="detail-episodes">
                <div className="detail-episodes__head">
                  <h2>Episodes</h2>
                  {title.seasons.length > 1 && (
                    <label>
                      <span className="visually-hidden">Season</span>
                      <select value={activeSeason} onChange={(e) => setActiveSeason(Number(e.target.value))}>
                        {title.seasons.map((s, i) => (
                          <option key={s.season} value={i}>
                            Season {s.season}
                          </option>
                        ))}
                      </select>
                    </label>
                  )}
                </div>
                <div className="detail-episodes__list">
                  {season.episodes.map((ep) => (
                    <EpisodeCard key={ep.id} episode={ep} titleId={title.id} />
                  ))}
                </div>
              </div>
            )}

            <div className="detail-info">
              <PersonList label="Cast" people={title.cast} />
              <PersonList label={title.type === "series" ? "Creator" : "Director"} people={[title.creator || title.director]} />
              <PersonList label="Writers" people={title.writers} />
              <PersonList label="Language" people={[title.language]} />
              <PersonList label="Subtitles" people={title.subtitles} />
            </div>
          </div>

          <aside className="detail-body__side">
            <h3>More like this</h3>
            <div className="detail-related__list">
              {related.slice(0, 4).map((t) => (
                <TitleCard key={t.id} title={t} variant="landscape" />
              ))}
            </div>
          </aside>
        </div>
      </section>

      {related.length > 4 && (
        <section className="section section--tight">
          <div className="container">
            <h2 className="detail-related__heading">You might also like</h2>
            <div className="detail-related__grid">
              {related.slice(4, 10).map((t) => (
                <TitleCard key={t.id} title={t} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Modal open={trailerOpen} onClose={() => setTrailerOpen(false)} title={`${title.title} — Trailer`}>
        <video
          className="detail-trailer-video"
          src={title.trailer}
          controls
          autoPlay
          poster={title.backdrop.src}
        >
          <track kind="captions" />
        </video>
      </Modal>
    </>
  );
}
