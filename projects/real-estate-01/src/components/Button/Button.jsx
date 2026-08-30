import { Link } from "react-router-dom";

import "./Button.scss";

export default function Button({
  children,
  to,
  href,
  variant = "dark",
}) {
  const className =
    `north-button north-button--${variant}`;

  if (to) {
    return (
      <Link
        to={to}
        className={className}
      >
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={className}
    >
      {children}
    </a>
  );
}