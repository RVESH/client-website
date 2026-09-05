import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

/**
 * Unified button component.
 * - Internal nav: pass `to` (react-router Link)
 * - External / mailto / tel / Gmail-compose / wa.me: pass `href`
 * - Action / form submit: pass `onClick` or `type="submit"`
 *
 * variant: 'default' | 'ghost' | 'accent' | 'dark'
 */
function Button({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'default',
  className = '',
  ...rest
}) {
  const classes = [styles.button, styles[variant], className].filter(Boolean).join(' ')

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    const opensNewTab = href.startsWith('http')
    return (
      <a
        href={href}
        className={classes}
        target={opensNewTab ? '_blank' : undefined}
        rel={opensNewTab ? 'noopener noreferrer' : undefined}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}

export default Button
