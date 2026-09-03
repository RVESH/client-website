import RouteLink from '../RouteLink/RouteLink.jsx'
import styles from './Button.module.css'

/**
 * Unified button component.
 * - Internal nav: pass `to` (routed through the app's custom router)
 * - External / mailto / tel: pass `href`
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
      <RouteLink to={to} className={classes} {...rest}>
        {children}
      </RouteLink>
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
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}

export default Button
