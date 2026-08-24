import "./Button.scss";

function Button({
  children,
  type = "button",
  variant = "primary",
  onClick,
  className = "",
  disabled = false,
}) {
  return (
    <button
      type={type}
      className={`sb-button sb-button--${variant} ${className}`.trim()}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{children}</span>
      <span className="sb-button__arrow" aria-hidden="true">
        ↗
      </span>
    </button>
  );
}

export default Button;