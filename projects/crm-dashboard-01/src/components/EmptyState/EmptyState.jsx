import Icon from '../Icon'
import Button from '../Button'
import styles from './EmptyState.module.scss'

export default function EmptyState({
  icon = 'inbox',
  title = 'Nothing here yet',
  message = 'Try adjusting your filters or search.',
  actionLabel,
  onAction,
}) {
  return (
    <div className={styles.wrap}>
      <div className={styles.iconWrap}>
        <Icon name={icon} size={26} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.message}>{message}</p>
      {actionLabel && onAction && (
        <Button variant="secondary" size="sm" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  )
}
