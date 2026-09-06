import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import styles from './Button.module.css'

export default function Button({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  showArrow = false,
  fullWidth = false,
  className = '',
  ...rest
}) {
  const classes = [styles.btn, styles[variant], styles[size], fullWidth ? styles.fullWidth : '', className]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      <span>{children}</span>
      {showArrow && <Icon name="arrowRight" size={18} className={styles.icon} />}
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
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {content}
    </button>
  )
}
