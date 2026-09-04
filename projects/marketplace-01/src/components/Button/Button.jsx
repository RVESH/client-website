import { Link } from 'react-router-dom'
import Icon from '../Icon/Icon.jsx'
import './Button.scss'

/**
 * Universal button used across the site.
 * - `to` renders an internal <Link>
 * - `href` renders an <a> (external / mailto / tel / whatsapp)
 * - otherwise renders a <button>
 */
export default function Button({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary', // primary | secondary | ghost | inverse
  size = 'md', // sm | md | lg
  icon,
  iconPosition = 'right',
  target,
  rel,
  className = '',
  ...rest
}) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim()

  const content = (
    <>
      {icon && iconPosition === 'left' && <Icon name={icon} size={16} className="btn__icon btn__icon--left" />}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <Icon name={icon} size={16} className="btn__icon btn__icon--right" />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {content}
    </button>
  )
}
