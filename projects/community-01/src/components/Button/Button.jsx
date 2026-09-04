import './Button.scss'

export default function Button({
  children,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  target,
  rel,
  className = '',
  ...rest
}) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim()

  const renderIcon = () => {
    if (icon === 'ArrowRight') {
      return <span className="btn__icon btn__icon--arrow" aria-hidden="true" />
    }

    if (icon === 'Users') {
      return <span className="btn__icon btn__icon--users" aria-hidden="true" />
    }

    return null
  }

  const content = (
    <>
      {iconPosition === 'left' && renderIcon()}
      <span className="btn__label">{children}</span>
      {iconPosition === 'right' && renderIcon()}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={target}
        rel={rel}
        {...rest}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      {...rest}
    >
      {content}
    </button>
  )
}