import { useCallback, useEffect, useRef, useState } from "react";
import { useParams, useSearchParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, AlertTriangle, List, X } from "lucide-react";
import { findTitle, findEpisode } from "../../utils/titles";
import { useProgress } from "../../app/ProgressContext.jsx";
import WatchlistButton from "../../components/WatchlistButton/WatchlistButton.jsx";
import PlayerControls from "../../components/PlayerControls/PlayerControls.jsx";
import EpisodeCard from "../../components/EpisodeCard/EpisodeCard.jsx";
import "./Watch.scss";

export default function Watch() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const epParam = searchParams.get("ep");

  const title = findTitle(id);
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const hideTimer = useRef(null);
  const { setPercent, getPercent } = useProgress();

  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [muted, setMuted] = useState(false);
  const [rate, setRate] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [captionsOn, setCaptionsOn] = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [queueOpen, setQueueOpen] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const episodeMatch = epParam ? findEpisode(epParam) : null;
  const activeEpisode = episodeMatch?.episode || null;
  const activeSeason = episodeMatch?.season || (title?.seasons ? title.seasons[0] : null);
  const source = activeEpisode ? activeEpisode.video : title?.video;
  const poster = title?.backdrop.src;

  const episodeList = activeSeason?.episodes || [];
  const episodeIndex = activeEpisode ? episodeList.findIndex((e) => e.id === activeEpisode.id) : -1;
  const nextEpisode = episodeIndex >= 0 ? episodeList[episodeIndex + 1] : null;

  const progressId = activeEpisode ? activeEpisode.id : title?.id;

  // Reset player state whenever the source changes (title or episode switch).
  useEffect(() => {
    setPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    setError(false);
    setLoading(true);
  }, [source]);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play().catch(() => setError(true));
    else video.pause();
  }, []);

  const skip = useCallback((seconds) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = Math.min(Math.max(video.currentTime + seconds, 0), video.duration || 0);
  }, []);

  const seek = (value) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = value;
    setCurrentTime(value);
  };

  const changeVolume = (value) => {
    const video = videoRef.current;
    if (!video) return;
    video.volume = value;
    video.muted = value === 0;
    setVolume(value);
    setMuted(value === 0);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  const changeRate = (value) => {
    const video = videoRef.current;
    if (!video) return;
    video.playbackRate = value;
    setRate(value);
  };

  const toggleFullscreen = () => {
    const el = containerRef.current;
    if (!el) return;
    if (!document.fullscreenElement) el.requestFullscreen?.();
    else document.exitFullscreen?.();
  };

  const togglePip = async () => {
    const video = videoRef.current;
    if (!video) return;
    try {
      if (document.pictureInPictureElement) await document.exitPictureInPicture();
      else if (document.pictureInPictureEnabled) await video.requestPictureInPicture();
    } catch {
      // PiP can be unsupported/blocked — silently ignore.
    }
  };

  // Keyboard shortcuts.
  useEffect(() => {
    const onKeyDown = (e) => {
      if (["INPUT", "SELECT", "TEXTAREA"].includes(document.activeElement?.tagName)) return;
      switch (e.key) {
        case " ":
        case "k":
          e.preventDefault();
          togglePlay();
          break;
        case "ArrowRight":
          skip(10);
          break;
        case "ArrowLeft":
          skip(-10);
          break;
        case "m":
          toggleMute();
          break;
        case "f":
          toggleFullscreen();
          break;
        default:
          break;
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [togglePlay, skip]);

  useEffect(() => {
    const onFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  // Auto-hide controls after inactivity while playing.
  const showControls = useCallback(() => {
    setControlsVisible(true);
    clearTimeout(hideTimer.current);
    if (playing) {
      hideTimer.current = setTimeout(() => setControlsVisible(false), 2800);
    }
  }, [playing]);

  useEffect(() => {
    showControls();
    return () => clearTimeout(hideTimer.current);
  }, [playing, showControls]);

  if (!title) return <Navigate to="/browse" replace />;

  const handleNext = () => {
    if (nextEpisode) window.location.href = `/watch/${title.id}?ep=${nextEpisode.id}`;
  };

  const backLink = activeEpisode ? `/movie/${title.id}` : `/movie/${title.id}`;
  const savedPercent = getPercent(progressId);

  return (
    <div className="watch" ref={containerRef} onMouseMove={showControls} onTouchStart={showControls}>
      <div className="watch__top">
        <Link to={backLink} className="watch__back">
          <ArrowLeft size={18} strokeWidth={2} aria-hidden="true" />
          <span>{title.title}{activeEpisode ? ` — S${activeSeason.season}:E${activeEpisode.number} ${activeEpisode.title}` : ""}</span>
        </Link>

        <div className="watch__top-actions">
          <WatchlistButton id={title.id} variant="icon" title={title.title} />
          {title.seasons && (
            <button type="button" className="btn btn--icon" aria-label="Episode queue" aria-expanded={queueOpen} onClick={() => setQueueOpen((v) => !v)}>
              <List size={18} strokeWidth={2} />
            </button>
          )}
        </div>
      </div>

      <div className="watch__stage">
        {error ? (
          <div className="watch__state">
            <AlertTriangle size={36} strokeWidth={1.5} aria-hidden="true" />
            <h2>This preview couldn't load</h2>
            <p>Try again in a moment, or head back to the title page.</p>
            <Link to={backLink} className="btn btn--secondary">
              Back to details
            </Link>
          </div>
        ) : (
          <>
            {loading && (
              <div className="watch__state watch__state--loading">
                <span className="watch__spinner" aria-hidden="true" />
                <p>Loading preview…</p>
              </div>
            )}
            <video
              ref={videoRef}
              key={source}
              className="watch__video"
              src={source}
              poster={poster}
              playsInline
              autoPlay={autoplay}
              onClick={togglePlay}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onLoadedMetadata={(e) => {
                setDuration(e.currentTarget.duration);
                setLoading(false);
                e.currentTarget.volume = volume;
              }}
              onTimeUpdate={(e) => {
                const t = e.currentTarget.currentTime;
                setCurrentTime(t);
                if (e.currentTarget.duration) {
                  setPercent(progressId, (t / e.currentTarget.duration) * 100);
                }
              }}
              onEnded={() => {
                if (autoplay && nextEpisode) handleNext();
              }}
              onError={() => {
                setError(true);
                setLoading(false);
              }}
            >
              <track kind="captions" />
            </video>

            {captionsOn && playing && (
              <div className="watch__captions" aria-live="polite">
                Demo captions — synced captions are not included in this preview build.
              </div>
            )}

            {!playing && !loading && (
              <button type="button" className="watch__play-overlay" onClick={togglePlay} aria-label="Play">
                <span>▶</span>
              </button>
            )}

            <PlayerControls
              visible={controlsVisible || !playing}
              playing={playing}
              onPlayPause={togglePlay}
              currentTime={currentTime}
              duration={duration}
              onSeek={seek}
              volume={volume}
              muted={muted}
              onVolumeChange={changeVolume}
              onMuteToggle={toggleMute}
              rate={rate}
              onRateChange={changeRate}
              onSkip={skip}
              onFullscreenToggle={toggleFullscreen}
              isFullscreen={isFullscreen}
              captionsOn={captionsOn}
              onCaptionsToggle={() => setCaptionsOn((v) => !v)}
              onPip={document.pictureInPictureEnabled ? togglePip : null}
              hasNext={!!nextEpisode}
              onNext={handleNext}
            />
          </>
        )}
      </div>

      {savedPercent > 0 && !playing && !error && (
        <p className="watch__resume-note">Resuming from {savedPercent}% — press play to continue.</p>
      )}

      <div className="watch__autoplay">
        <label>
          <input type="checkbox" checked={autoplay} onChange={(e) => setAutoplay(e.target.checked)} />
          <span>Autoplay next episode</span>
        </label>
      </div>

      {title.seasons && queueOpen && (
        <div className="watch__queue">
          <div className="watch__queue-head">
            <h2>Up next</h2>
            <button type="button" className="btn btn--icon" onClick={() => setQueueOpen(false)} aria-label="Close queue">
              <X size={18} strokeWidth={2} />
            </button>
          </div>
          <div className="watch__queue-list">
            {episodeList.map((ep) => (
              <EpisodeCard key={ep.id} episode={ep} titleId={title.id} active={activeEpisode?.id === ep.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
