import { Link } from "react-router-dom";
import "./Button.scss";

/**
 * Shared button/link control.
 * variant: "primary" | "secondary" | "ghost"
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
  className = "",
  ...rest
}) {
  const classes = `btn btn--${variant} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        <span>{children}</span>
        {Icon && <Icon size={16} strokeWidth={1.75} aria-hidden="true" />}
      </Link>
    );
  }

  if (href) {
    const isExternal = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        <span>{children}</span>
        {Icon && <Icon size={16} strokeWidth={1.75} aria-hidden="true" />}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      <span>{children}</span>
      {Icon && <Icon size={16} strokeWidth={1.75} aria-hidden="true" />}
    </button>
  );
}
