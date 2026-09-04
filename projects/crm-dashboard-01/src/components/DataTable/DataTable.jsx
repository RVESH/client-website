import { SkeletonTableRow } from '../Skeleton'
import EmptyState from '../EmptyState'
import Icon from '../Icon'
import styles from './DataTable.module.scss'

/**
 * Generic responsive data table.
 *
 * columns: [{ key, header, render(row), align, hideBelow }]
 *   - render(row) returns the cell content
 *   - hideBelow: 'sm' | 'md' hides the column below that breakpoint (still
 *     shown in the stacked mobile card view via data-label)
 *
 * On narrow screens the table collapses into a stacked card layout via CSS
 * (see DataTable.module.scss) — each row becomes a card, each cell becomes
 * a labeled row using the `data-label` attribute.
 */
export default function DataTable({
  columns,
  rows,
  getRowId = (row) => row.id,
  selectable = false,
  selectedIds = [],
  onToggleSelect,
  onToggleSelectAll,
  onRowClick,
  loading = false,
  skeletonRows = 5,
  emptyTitle = 'No records found',
  emptyMessage = 'Try adjusting your filters or search terms.',
}) {
  const allSelected = rows.length > 0 && selectedIds.length === rows.length

  if (loading) {
    return (
      <div className={styles.skeletonWrap}>
        {Array.from({ length: skeletonRows }).map((_, i) => (
          <SkeletonTableRow key={i} columns={columns.length} />
        ))}
      </div>
    )
  }

  if (rows.length === 0) {
    return <EmptyState icon="inbox" title={emptyTitle} message={emptyMessage} />
  }

  return (
    <div className={styles.tableScroll}>
      <table className={styles.table}>
        <thead>
          <tr>
            {selectable && (
              <th className={styles.checkboxCol}>
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={onToggleSelectAll}
                  aria-label="Select all rows"
                />
              </th>
            )}
            {columns.map((col) => (
              <th
                key={col.key}
                className={[
                  col.align === 'right' ? styles.alignRight : '',
                  col.hideBelow ? styles[`hide-${col.hideBelow}`] : '',
                ].join(' ')}
              >
                {col.header}
              </th>
            ))}
            {onRowClick && <th className={styles.chevronCol} aria-hidden="true" />}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const id = getRowId(row)
            const isSelected = selectedIds.includes(id)
            return (
              <tr
                key={id}
                className={[
                  styles.row,
                  isSelected ? styles.rowSelected : '',
                  onRowClick ? styles.rowClickable : '',
                ].join(' ')}
                onClick={() => onRowClick && onRowClick(row)}
              >
                {selectable && (
                  <td
                    className={styles.checkboxCol}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => onToggleSelect(id)}
                      aria-label="Select row"
                    />
                  </td>
                )}
                {columns.map((col) => (
                  <td
                    key={col.key}
                    data-label={col.header}
                    className={[
                      col.align === 'right' ? styles.alignRight : '',
                      col.hideBelow ? styles[`hide-${col.hideBelow}`] : '',
                    ].join(' ')}
                  >
                    {col.render ? col.render(row) : row[col.key]}
                  </td>
                ))}
                {onRowClick && (
                  <td className={styles.chevronCol}>
                    <Icon name="chevronRight" size={16} className={styles.rowChevron} />
                  </td>
                )}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
