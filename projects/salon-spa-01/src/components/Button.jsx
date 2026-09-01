import { Link } from "react-router-dom";
import "./Button.scss";
import { telHref, whatsappHref, instagramHref } from "../utils/actions";

/**
 * Unified Button that can render as:
 * - an internal route link ("to")
 * - an external/action anchor ("href", or a shorthand "action")
 * - a plain button ("onClick")
 *
 * action: "call" | "whatsapp" | "instagram" | "enquire"
 */
function Button({
  children,
  to,
  href,
  action,
  variant = "primary", // primary | secondary | ghost
  size = "md", // md | sm
  onClick,
  type = "button",
  className = "",
  ...rest
}) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();

  let resolvedHref = href;
  let resolvedTo = to;
  let target;
  let rel;

  if (action === "enquire" && !to) resolvedTo = "/contact";
  if (action === "call") resolvedHref = telHref();
  if (action === "whatsapp") {
    resolvedHref = whatsappHref();
    target = "_blank";
    rel = "noopener noreferrer";
  }
  if (action === "instagram") {
    resolvedHref = instagramHref;
    target = "_blank";
    rel = "noopener noreferrer";
  }

  if (resolvedTo) {
    return (
      <Link to={resolvedTo} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (resolvedHref) {
    return (
      <a href={resolvedHref} className={classes} target={target} rel={rel} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}

export default Button;
