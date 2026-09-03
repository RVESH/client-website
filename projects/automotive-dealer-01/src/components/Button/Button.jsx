import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

/**
 * Reusable Button.
 * - `to`     -> internal route (React Router Link)
 * - `href`   -> external URL, mailto:, or tel:
 * - default  -> renders a <button>, use `onClick`
 */
export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'default',
  type = 'button',
  className = '',
  icon = null,
  ariaLabel,
  ...rest
}) {
  const classes = [styles.button, styles[variant], className]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      <span className={styles.label}>{children}</span>
      {icon && <span className={styles.icon}>{icon}</span>}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel} {...rest}>
        {content}
      </Link>
    )
  }

  if (href) {
    const isExternal = href.startsWith('http')
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
      {...rest}
    >
      {content}
    </button>
  )
}
