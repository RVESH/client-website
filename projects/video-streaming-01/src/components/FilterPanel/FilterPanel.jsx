import { X } from "lucide-react";
import { genres } from "../../data/genres";
import "./FilterPanel.scss";

const YEARS = ["2025", "2024", "2023", "2022", "2021"];
const RATINGS = [
  { value: "", label: "Any rating" },
  { value: "8", label: "8+" },
  { value: "7", label: "7+" },
  { value: "6", label: "6+" },
];
const SORT_OPTIONS = [
  { value: "relevance", label: "Relevance" },
  { value: "newest", label: "Newest" },
  { value: "rating", label: "Highest rated" },
  { value: "title", label: "Title A–Z" },
];

export default function FilterPanel({ filters, onChange, onClear, activeCount, languages }) {
  return (
    <div className="filter-panel">
      <div className="filter-panel__grid">
        <div className="filter-panel__field">
          <label htmlFor="filter-genre">Genre</label>
          <select id="filter-genre" value={filters.genre} onChange={(e) => onChange("genre", e.target.value)}>
            <option value="">All genres</option>
            {genres.map((g) => (
              <option key={g.id} value={g.id}>
                {g.label}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-panel__field">
          <label htmlFor="filter-year">Year</label>
          <select id="filter-year" value={filters.year} onChange={(e) => onChange("year", e.target.value)}>
            <option value="">Any year</option>
            {YEARS.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-panel__field">
          <label htmlFor="filter-rating">Rating</label>
          <select id="filter-rating" value={filters.rating} onChange={(e) => onChange("rating", e.target.value)}>
            {RATINGS.map((r) => (
              <option key={r.value} value={r.value}>
                {r.label}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-panel__field">
          <label htmlFor="filter-language">Language</label>
          <select id="filter-language" value={filters.language} onChange={(e) => onChange("language", e.target.value)}>
            <option value="">Any language</option>
            {languages.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-panel__field">
          <label htmlFor="filter-sort">Sort by</label>
          <select id="filter-sort" value={filters.sort} onChange={(e) => onChange("sort", e.target.value)}>
            {SORT_OPTIONS.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {activeCount > 0 && (
        <button type="button" className="filter-panel__clear" onClick={onClear}>
          <X size={14} strokeWidth={2} aria-hidden="true" />
          <span>Clear filters ({activeCount})</span>
        </button>
      )}
    </div>
  );
}
