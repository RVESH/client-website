import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

/**
 * Unified button component.
 * - Internal nav: pass `to` (uses react-router Link)
 * - External / mailto / tel: pass `href`
 * - Action button: pass `onClick`
 *
 * variant: 'default' | 'ghost' | 'accent'
 */
function Button({
  children,
  to,
  href,
  onClick,
  variant = 'default',
  className = '',
  ...rest
}) {
  const classes = [styles.button, styles[variant], className]
    .filter(Boolean)
    .join(' ')

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    const isExternal = href.startsWith('http')
    return (
      <a
        href={href}
        className={classes}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}

export default Button
