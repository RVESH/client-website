import { Search, X } from "lucide-react";
import "./SearchBar.scss";

export default function SearchBar({ value, onChange, placeholder = "Search movies and series" }) {
  return (
    <div className="search-bar">
      <Search size={18} strokeWidth={2} aria-hidden="true" />
      <label htmlFor="browse-search" className="visually-hidden">
        {placeholder}
      </label>
      <input
        id="browse-search"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button type="button" className="search-bar__clear" onClick={() => onChange("")} aria-label="Clear search">
          <X size={16} strokeWidth={2} />
        </button>
      )}
    </div>
  );
}
