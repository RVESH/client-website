import { Search } from "lucide-react";

import "./SearchBar.scss";

export default function SearchBar({
  value,
  onChange,
}) {
  return (
    <label className="north-search">
      <Search
        size={17}
        strokeWidth={1.6}
      />

      <input
        type="search"
        value={value}
        onChange={(event) =>
          onChange(
            event.target.value
          )
        }
        placeholder="Search location, property or type"
        aria-label="Search properties"
      />
    </label>
  );
}