import Icon from '../Icon/Icon.jsx'
import './Button.css'

/**
 * Universal button used across the site.
 * - `href` renders an <a> (in-page anchor / external)
 * - otherwise renders a <button>
 */
export default function Button({
  children,
  href,
  onClick,
  type = 'button',
  variant = 'primary', // primary | secondary | ghost
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
