import styles from './Button.module.scss'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon = null,
  iconOnly = false,
  type = 'button',
  disabled = false,
  className = '',
  ...rest
}) {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    iconOnly ? styles.iconOnly : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button type={type} className={classes} disabled={disabled} {...rest}>
      {icon}
      {!iconOnly && children && <span>{children}</span>}
    </button>
  )
}
