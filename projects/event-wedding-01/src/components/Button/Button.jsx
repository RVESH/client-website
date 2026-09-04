import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

/**
 * Reusable Button.
 * - `to`     -> internal route (React Router Link)
 * - `href`   -> external URL, mailto:, tel:, or wa.me link
 * - default  -> renders a <button>, use `onClick`
 */
export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  type = 'button',
  className = '',
  ariaLabel,
  ...rest
}) {
  const classes = [styles.button, styles[variant], className].filter(Boolean).join(' ')

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel} {...rest}>
        <span>{children}</span>
      </Link>
    )
  }

  if (href) {
    const isExternal = /^https?:\/\//.test(href)
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        <span>{children}</span>
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} aria-label={ariaLabel} {...rest}>
      <span>{children}</span>
    </button>
  )
}
