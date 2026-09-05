import { Search, MapPin } from "lucide-react";
import "./SearchBar.scss";

export default function SearchBar({
  keyword,
  onKeywordChange,
  location,
  onLocationChange,
  onSubmit,
  size = "md",
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.();
  };

  return (
    <form className={`search-bar search-bar--${size}`} onSubmit={handleSubmit} role="search">
      <div className="search-bar__field">
        <Search size={18} strokeWidth={2} aria-hidden="true" />
        <label htmlFor="search-keyword" className="visually-hidden">
          Job title or keyword
        </label>
        <input
          id="search-keyword"
          type="text"
          placeholder="Job title, keyword or company"
          value={keyword}
          onChange={(e) => onKeywordChange(e.target.value)}
        />
      </div>

      <div className="search-bar__divider" aria-hidden="true" />

      <div className="search-bar__field">
        <MapPin size={18} strokeWidth={2} aria-hidden="true" />
        <label htmlFor="search-location" className="visually-hidden">
          Location
        </label>
        <input
          id="search-location"
          type="text"
          placeholder="City or 'Remote'"
          value={location}
          onChange={(e) => onLocationChange(e.target.value)}
        />
      </div>

      <button type="submit" className="search-bar__submit">
        Search jobs
      </button>
    </form>
  );
}
