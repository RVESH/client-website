import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Film, Tv, Bookmark } from "lucide-react";
import { videos } from "../../data/videos";
import { useWatchlist } from "../../app/WatchlistContext.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import FilterPanel from "../../components/FilterPanel/FilterPanel.jsx";
import TitleCard from "../../components/TitleCard/TitleCard.jsx";
import "./Browse.scss";

const emptyFilters = { genre: "", year: "", rating: "", language: "", sort: "relevance" };
const PAGE_SIZE = 12;

export default function Browse() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { ids: watchlistIds } = useWatchlist();

  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [tab, setTab] = useState(searchParams.get("type") || "all");
  const [showWatchlistOnly, setShowWatchlistOnly] = useState(searchParams.get("watchlist") === "1");
  const [filters, setFilters] = useState({
    genre: searchParams.get("genre") || "",
    year: searchParams.get("year") || "",
    rating: searchParams.get("rating") || "",
    language: searchParams.get("language") || "",
    sort: searchParams.get("sort") || "relevance",
  });
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const languages = useMemo(() => Array.from(new Set(videos.map((v) => v.language))).sort(), []);

  useEffect(() => {
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    if (tab !== "all") params.set("type", tab);
    if (showWatchlistOnly) params.set("watchlist", "1");
    Object.entries(filters).forEach(([key, value]) => {
      if (value && !(key === "sort" && value === "relevance")) params.set(key, value);
    });
    setSearchParams(params, { replace: true });
  }, [query, tab, showWatchlistOnly, filters, setSearchParams]);

  const results = useMemo(() => {
    const kw = query.trim().toLowerCase();
    let list = videos.filter((v) => {
      if (kw && !v.title.toLowerCase().includes(kw)) return false;
      if (tab !== "all" && v.type !== tab) return false;
      if (showWatchlistOnly && !watchlistIds.includes(v.id)) return false;
      if (filters.genre && !v.genres.includes(filters.genre)) return false;
      if (filters.year && String(v.year) !== filters.year) return false;
      if (filters.rating && v.rating < parseFloat(filters.rating)) return false;
      if (filters.language && v.language !== filters.language) return false;
      return true;
    });

    if (filters.sort === "newest") list = [...list].sort((a, b) => b.year - a.year);
    else if (filters.sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    else if (filters.sort === "title") list = [...list].sort((a, b) => a.title.localeCompare(b.title));

    return list;
  }, [query, tab, showWatchlistOnly, filters, watchlistIds]);

  const activeCount = Object.entries(filters).filter(([k, v]) => v && !(k === "sort" && v === "relevance")).length;

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setVisibleCount(PAGE_SIZE);
  };
  const handleClear = () => {
    setFilters(emptyFilters);
    setQuery("");
    setShowWatchlistOnly(false);
    setVisibleCount(PAGE_SIZE);
  };
  const handleQueryChange = (value) => {
    setQuery(value);
    setVisibleCount(PAGE_SIZE);
  };
  const handleTabChange = (value) => {
    setTab(value);
    setVisibleCount(PAGE_SIZE);
  };
  const handleWatchlistToggle = () => {
    setShowWatchlistOnly((v) => !v);
    setVisibleCount(PAGE_SIZE);
  };

  const visible = results.slice(0, visibleCount);

  return (
    <>
      <section className="section browse-hero">
        <div className="container">
          <span className="eyebrow">Browse</span>
          <h1 className="browse-hero__heading">Every title, one search away</h1>
          <p className="browse-hero__desc">
            Search, filter and sort the full catalogue — movies and series, together or apart.
          </p>
          <SearchBar value={query} onChange={handleQueryChange} />
        </div>
      </section>

      <section className="section browse-body">
        <div className="container">
          <div className="browse-body__tabs" role="tablist" aria-label="Filter by type">
            <button type="button" role="tab" aria-selected={tab === "all"} className={tab === "all" ? "is-active" : ""} onClick={() => handleTabChange("all")}>
              All
            </button>
            <button type="button" role="tab" aria-selected={tab === "movie"} className={tab === "movie" ? "is-active" : ""} onClick={() => handleTabChange("movie")}>
              <Film size={15} strokeWidth={2} aria-hidden="true" />
              <span>Movies</span>
            </button>
            <button type="button" role="tab" aria-selected={tab === "series"} className={tab === "series" ? "is-active" : ""} onClick={() => handleTabChange("series")}>
              <Tv size={15} strokeWidth={2} aria-hidden="true" />
              <span>Series</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={showWatchlistOnly}
              className={showWatchlistOnly ? "is-active" : ""}
              onClick={handleWatchlistToggle}
            >
              <Bookmark size={15} strokeWidth={2} aria-hidden="true" />
              <span>My Watchlist{watchlistIds.length > 0 ? ` (${watchlistIds.length})` : ""}</span>
            </button>
          </div>

          <FilterPanel filters={filters} onChange={handleFilterChange} onClear={handleClear} activeCount={activeCount} languages={languages} />

          <p className="browse-body__count">
            {results.length} title{results.length === 1 ? "" : "s"} found
          </p>

          {results.length > 0 ? (
            <>
              <div className="browse-body__grid">
                {visible.map((v) => (
                  <TitleCard key={v.id} title={v} />
                ))}
              </div>
              {visibleCount < results.length && (
                <div className="browse-body__more">
                  <button type="button" className="btn btn--secondary" onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}>
                    Load more ({results.length - visibleCount} remaining)
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="browse-body__empty">
              <h3>
                {showWatchlistOnly ? "Your watchlist is empty" : "No titles match those filters"}
              </h3>
              <p>
                {showWatchlistOnly
                  ? "Add titles from any detail page and they'll show up here."
                  : "Try widening your search, or clear filters to see everything."}
              </p>
              {!showWatchlistOnly && (
                <button type="button" className="btn btn--primary" onClick={handleClear}>
                  Clear all filters
                </button>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
