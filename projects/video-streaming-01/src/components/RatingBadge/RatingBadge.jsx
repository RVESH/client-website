import { Star } from "lucide-react";
import "./RatingBadge.scss";

export default function RatingBadge({ rating, size = "md" }) {
  return (
    <span className={`rating-badge rating-badge--${size}`}>
      <Star size={size === "sm" ? 13 : 15} strokeWidth={0} fill="currentColor" aria-hidden="true" />
      <span>{rating.toFixed(1)}</span>
    </span>
  );
}
