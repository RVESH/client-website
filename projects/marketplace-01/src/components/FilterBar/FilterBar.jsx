import './FilterBar.scss'

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
]

const AVAILABILITY_OPTIONS = ['All', 'In stock', 'Made to order']

export default function FilterBar({
  categories,
  activeCategory,
  onCategoryChange,
  availability,
  onAvailabilityChange,
  sort,
  onSortChange,
}) {
  return (
    <div className="filter-bar">
      <div className="filter-bar__categories" role="tablist" aria-label="Filter by category">
        <button
          type="button"
          role="tab"
          aria-selected={activeCategory === 'all'}
          className={`filter-bar__chip ${activeCategory === 'all' ? 'filter-bar__chip--active' : ''}`}
          onClick={() => onCategoryChange('all')}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            role="tab"
            aria-selected={activeCategory === cat.id}
            className={`filter-bar__chip ${activeCategory === cat.id ? 'filter-bar__chip--active' : ''}`}
            onClick={() => onCategoryChange(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="filter-bar__row">
        <div className="filter-bar__field">
          <label htmlFor="fb-availability">Availability</label>
          <select
            id="fb-availability"
            value={availability}
            onChange={(e) => onAvailabilityChange(e.target.value)}
          >
            {AVAILABILITY_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-bar__field">
          <label htmlFor="fb-sort">Sort by</label>
          <select id="fb-sort" value={sort} onChange={(e) => onSortChange(e.target.value)}>
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}
