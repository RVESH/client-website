import { ArrowUpRight } from "lucide-react";
import "./Button.scss";

export default function Button({
  children,
  type = "button",
  variant = "dark",
  onClick,
  disabled = false,
  icon = true,
}) {
  return (
    <button
      type={type}
      className={`sb-button sb-button--${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{children}</span>

      {icon && (
        <ArrowUpRight
          size={15}
          strokeWidth={1.8}
          aria-hidden="true"
        />
      )}
    </button>
  );
}