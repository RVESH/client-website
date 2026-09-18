import "./Badge.scss";

export default function Badge({ children, variant = "default" }) {
  return <span className={`badge badge--${variant}`}>{children}</span>;
}
