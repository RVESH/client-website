import { Search as SearchIcon, X } from "lucide-react";
import "./Search.scss";

export default function Search({
  value,
  onChange,
  placeholder = "Search products...",
}) {
  const clear = () => onChange("");

  return (
    <label className="store-search">
      <SearchIcon
        size={18}
        strokeWidth={1.6}
        aria-hidden="true"
      />

      <input
        type="search"
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        placeholder={placeholder}
        aria-label="Search products"
        autoComplete="off"
      />

      {value && (
        <button
          type="button"
          onClick={clear}
          aria-label="Clear search"
        >
          <X size={15} />
        </button>
      )}
    </label>
  );
}