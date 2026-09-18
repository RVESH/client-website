import { Link } from "react-router-dom";
import "./Button.scss";

/**
 * Shared button/link control.
 * variant: "primary" | "secondary" | "ghost" | "icon"
 * Renders a <Link> for internal paths, an <a> for external/tel/mailto, else a <button>.
 */
export default function Button({
  children,
  variant = "primary",
  to,
  href,
  onClick,
  type = "button",
  icon: Icon,
  iconPosition = "start",
  className = "",
  disabled = false,
  ariaLabel,
  ...rest
}) {
  const classes = `btn btn--${variant} ${className}`.trim();
  const content = (
    <>
      {Icon && iconPosition === "start" && <Icon size={18} strokeWidth={2} aria-hidden="true" />}
      {children && <span>{children}</span>}
      {Icon && iconPosition === "end" && <Icon size={18} strokeWidth={2} aria-hidden="true" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    const isExternal = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      aria-label={ariaLabel}
      {...rest}
    >
      {content}
    </button>
  );
}
