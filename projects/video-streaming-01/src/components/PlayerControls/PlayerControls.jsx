import { useState } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  SkipForward,
  Settings,
  Captions,
  PictureInPicture2,
} from "lucide-react";
import "./PlayerControls.scss";

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  const mm = h > 0 ? String(m).padStart(2, "0") : m;
  const ss = String(s).padStart(2, "0");
  return h > 0 ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
}

const RATES = [0.5, 0.75, 1, 1.25, 1.5, 2];

export default function PlayerControls({
  playing,
  onPlayPause,
  currentTime,
  duration,
  onSeek,
  volume,
  muted,
  onVolumeChange,
  onMuteToggle,
  rate,
  onRateChange,
  onSkip,
  onFullscreenToggle,
  isFullscreen,
  captionsOn,
  onCaptionsToggle,
  onPip,
  hasNext,
  onNext,
  visible,
}) {
  const [showSettings, setShowSettings] = useState(false);
  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className={`player-controls ${visible ? "is-visible" : ""}`}>
      <div className="player-controls__seek">
        <label htmlFor="seek-range" className="visually-hidden">
          Seek
        </label>
        <input
          id="seek-range"
          type="range"
          min={0}
          max={duration || 0}
          step={0.1}
          value={currentTime}
          onChange={(e) => onSeek(parseFloat(e.target.value))}
          style={{ "--progress": `${progress}%` }}
          aria-valuetext={`${formatTime(currentTime)} of ${formatTime(duration)}`}
        />
      </div>

      <div className="player-controls__row">
        <div className="player-controls__group">
          <button type="button" className="player-controls__btn" onClick={() => onSkip(-10)} aria-label="Rewind 10 seconds">
            <RotateCcw size={20} strokeWidth={2} />
          </button>
          <button
            type="button"
            className="player-controls__btn player-controls__btn--play"
            onClick={onPlayPause}
            aria-label={playing ? "Pause" : "Play"}
          >
            {playing ? <Pause size={22} strokeWidth={0} fill="currentColor" /> : <Play size={22} strokeWidth={0} fill="currentColor" />}
          </button>
          <button type="button" className="player-controls__btn" onClick={() => onSkip(10)} aria-label="Forward 10 seconds">
            <RotateCw size={20} strokeWidth={2} />
          </button>

          {hasNext && (
            <button type="button" className="player-controls__btn" onClick={onNext} aria-label="Next episode">
              <SkipForward size={20} strokeWidth={2} />
            </button>
          )}

          <div className="player-controls__volume">
            <button type="button" className="player-controls__btn" onClick={onMuteToggle} aria-label={muted ? "Unmute" : "Mute"}>
              {muted || volume === 0 ? <VolumeX size={20} strokeWidth={2} /> : <Volume2 size={20} strokeWidth={2} />}
            </button>
            <label htmlFor="volume-range" className="visually-hidden">
              Volume
            </label>
            <input
              id="volume-range"
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={muted ? 0 : volume}
              onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
              className="player-controls__volume-range"
            />
          </div>

          <span className="player-controls__time">
            {formatTime(currentTime)} <span>/ {formatTime(duration)}</span>
          </span>
        </div>

        <div className="player-controls__group">
          <button
            type="button"
            className={`player-controls__btn ${captionsOn ? "is-active" : ""}`}
            onClick={onCaptionsToggle}
            aria-pressed={captionsOn}
            aria-label="Toggle captions"
          >
            <Captions size={20} strokeWidth={2} />
          </button>

          <div className="player-controls__settings">
            <button
              type="button"
              className="player-controls__btn"
              onClick={() => setShowSettings((v) => !v)}
              aria-expanded={showSettings}
              aria-label="Playback settings"
            >
              <Settings size={20} strokeWidth={2} />
            </button>
            {showSettings && (
              <div className="player-controls__menu" role="menu">
                <span className="player-controls__menu-label">Playback speed</span>
                {RATES.map((r) => (
                  <button
                    key={r}
                    type="button"
                    role="menuitemradio"
                    aria-checked={rate === r}
                    className={rate === r ? "is-active" : ""}
                    onClick={() => {
                      onRateChange(r);
                      setShowSettings(false);
                    }}
                  >
                    {r === 1 ? "Normal" : `${r}×`}
                  </button>
                ))}
              </div>
            )}
          </div>

          {onPip && (
            <button type="button" className="player-controls__btn" onClick={onPip} aria-label="Picture in picture">
              <PictureInPicture2 size={20} strokeWidth={2} />
            </button>
          )}

          <button
            type="button"
            className="player-controls__btn"
            onClick={onFullscreenToggle}
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          >
            {isFullscreen ? <Minimize size={20} strokeWidth={2} /> : <Maximize size={20} strokeWidth={2} />}
          </button>
        </div>
      </div>
    </div>
  );
}
