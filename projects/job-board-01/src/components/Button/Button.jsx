import { Link } from "react-router-dom";
import "./Button.scss";

/**
 * Shared button/link control.
 * variant: "primary" | "secondary" | "ghost" | "outline"
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
  iconPosition = "end",
  className = "",
  disabled = false,
  ...rest
}) {
  const classes = `btn btn--${variant} ${className}`.trim();
  const content = (
    <>
      {Icon && iconPosition === "start" && <Icon size={16} strokeWidth={2} aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconPosition === "end" && <Icon size={16} strokeWidth={2} aria-hidden="true" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
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
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled} {...rest}>
      {content}
    </button>
  );
}
