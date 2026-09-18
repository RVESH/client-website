import { Check, Plus } from "lucide-react";
import { useWatchlist } from "../../app/WatchlistContext.jsx";
import "./WatchlistButton.scss";

export default function WatchlistButton({ id, variant = "button", title }) {
  const { has, toggle } = useWatchlist();
  const on = has(id);

  const label = on ? `Remove ${title || "title"} from watchlist` : `Add ${title || "title"} to watchlist`;

  if (variant === "icon") {
    return (
      <button
        type="button"
        className={`watchlist-icon ${on ? "is-active" : ""}`}
        onClick={() => toggle(id)}
        aria-pressed={on}
        aria-label={label}
        title={label}
      >
        {on ? <Check size={16} strokeWidth={2.5} /> : <Plus size={16} strokeWidth={2.5} />}
      </button>
    );
  }

  return (
    <button
      type="button"
      className={`btn btn--secondary watchlist-btn ${on ? "is-active" : ""}`}
      onClick={() => toggle(id)}
      aria-pressed={on}
    >
      {on ? <Check size={18} strokeWidth={2} /> : <Plus size={18} strokeWidth={2} />}
      <span>{on ? "In Watchlist" : "Add to Watchlist"}</span>
    </button>
  );
}
