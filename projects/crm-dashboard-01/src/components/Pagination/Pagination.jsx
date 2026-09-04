import Icon from '../Icon'
import styles from './Pagination.module.scss'

export default function Pagination({ page, totalPages, onChange, total, pageSize }) {
  if (totalPages <= 1) return null

  const start = (page - 1) * pageSize + 1
  const end = Math.min(page * pageSize, total)

  const pageNumbers = getPageNumbers(page, totalPages)

  return (
    <div className={styles.wrap}>
      <span className={styles.summary}>
        Showing <strong>{start}–{end}</strong> of <strong>{total}</strong>
      </span>

      <div className={styles.controls}>
        <button
          type="button"
          className={styles.navBtn}
          onClick={() => onChange(page - 1)}
          disabled={page === 1}
          aria-label="Previous page"
        >
          <Icon name="chevronLeft" size={16} />
        </button>

        {pageNumbers.map((p, i) =>
          p === '…' ? (
            <span key={`ellipsis-${i}`} className={styles.ellipsis}>
              …
            </span>
          ) : (
            <button
              key={p}
              type="button"
              className={[styles.pageBtn, p === page ? styles.pageBtnActive : ''].join(' ')}
              onClick={() => onChange(p)}
              aria-current={p === page ? 'page' : undefined}
            >
              {p}
            </button>
          )
        )}

        <button
          type="button"
          className={styles.navBtn}
          onClick={() => onChange(page + 1)}
          disabled={page === totalPages}
          aria-label="Next page"
        >
          <Icon name="chevronRight" size={16} />
        </button>
      </div>
    </div>
  )
}

function getPageNumbers(current, total) {
  const delta = 1
  const range = []
  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
      range.push(i)
    }
  }
  const withEllipsis = []
  let prev = null
  for (const n of range) {
    if (prev !== null && n - prev > 1) withEllipsis.push('…')
    withEllipsis.push(n)
    prev = n
  }
  return withEllipsis
}
