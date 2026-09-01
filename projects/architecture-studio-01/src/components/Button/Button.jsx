import { Link } from 'react-router-dom'
import './Button.scss'

/**
 * Shared button/link. Renders an <a>, a router <Link>, or a <button>
 * depending on the props supplied.
 */
export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary', // 'primary' | 'ghost'
  type = 'button',
  className = '',
  ...rest
}) {
  const classes = `btn btn--${variant} ${className}`.trim()

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
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
