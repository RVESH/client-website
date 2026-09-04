import { useMemo, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import SearchBar from '../../components/SearchBar/SearchBar.jsx'
import FilterBar from '../../components/FilterBar/FilterBar.jsx'
import ProductGrid from '../../components/ProductGrid/ProductGrid.jsx'
import { products } from '../../data/products.js'
import { categories } from '../../data/categories.js'
import './Marketplace.scss'

export default function Marketplace() {
  const [searchParams, setSearchParams] = useSearchParams()

  const [query, setQuery] = useState(searchParams.get('q') || '')
  const [category, setCategory] = useState(searchParams.get('category') || 'all')
  const [availability, setAvailability] = useState('All')
  const [sort, setSort] = useState('featured')

  // Keep the URL in sync so filtered views are shareable/bookmarkable
  useEffect(() => {
    const next = new URLSearchParams()
    if (query) next.set('q', query)
    if (category !== 'all') next.set('category', category)
    setSearchParams(next, { replace: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, category])

  const filtered = useMemo(() => {
    let list = [...products]

    if (query.trim()) {
      const q = query.trim().toLowerCase()
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.shortDesc.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)),
      )
    }

    if (category !== 'all') {
      list = list.filter((p) => p.category === category)
    }

    if (availability !== 'All') {
      list = list.filter((p) => p.availability === availability)
    }

    switch (sort) {
      case 'newest':
        list = list.filter((p) => p.tags.includes('New')).concat(list.filter((p) => !p.tags.includes('New')))
        break
      case 'price-asc':
        list.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        list.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        list.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return list
  }, [query, category, availability, sort])

  return (
    <div className="page marketplace-page">
      <section className="section--tight marketplace-hero">
        <div className="container marketplace-hero__inner">
          <span className="section-head__kicker">Marketplace</span>
          <h1 className="marketplace-hero__title">The full catalogue</h1>
          <p className="marketplace-hero__desc">
            {products.length} objects from {categories.length} categories, all shipped directly by the studio
            that made them.
          </p>
          <div className="marketplace-hero__search">
            <SearchBar value={query} onChange={setQuery} placeholder="Search by name, tag or description..." />
          </div>
        </div>
      </section>

      <section className="section--tight marketplace-results">
        <div className="container">
          <FilterBar
            categories={categories}
            activeCategory={category}
            onCategoryChange={setCategory}
            availability={availability}
            onAvailabilityChange={setAvailability}
            sort={sort}
            onSortChange={setSort}
          />

          <div className="marketplace-results__count">
            {filtered.length} {filtered.length === 1 ? 'result' : 'results'}
          </div>

          <ProductGrid
            products={filtered}
            emptyMessage="Nothing matches those filters — try clearing the search or category."
          />
        </div>
      </section>
    </div>
  )
}
