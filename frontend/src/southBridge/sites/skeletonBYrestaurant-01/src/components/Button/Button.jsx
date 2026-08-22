import "./Button.scss";

function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  className = "",
  ...props
}) {
  const classes = `restaurant-button restaurant-button--${variant} ${className}`.trim();

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  );
}

export default Button;