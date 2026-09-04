import { Search } from 'lucide-react'
import './SearchBar.scss'

export default function SearchBar({ value, onChange, placeholder = 'Search the catalogue...', onSubmit }) {
  return (
    <form
      className="search-bar"
      role="search"
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit?.(value)
      }}
    >
      <Search size={18} strokeWidth={2} className="search-bar__icon" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Search products"
      />
      {value && (
        <button type="button" className="search-bar__clear" onClick={() => onChange('')} aria-label="Clear search">
          Clear
        </button>
      )}
    </form>
  )
}
