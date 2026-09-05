import { Link } from "react-router-dom";
import { Code2, PenTool, Boxes, Megaphone, Handshake, Headset, Settings2, Landmark, Briefcase } from "lucide-react";
import "./CategoryCard.scss";

const ICON_MAP = { Code2, PenTool, Boxes, Megaphone, Handshake, Headset, Settings2, Landmark };

export default function CategoryCard({ category, count }) {
  const Icon = ICON_MAP[category.icon] || Briefcase;

  return (
    <Link to={`/jobs?category=${category.id}`} className="category-card">
      <span className="category-card__icon">
        <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
      </span>
      <span className="category-card__label">{category.label}</span>
      <span className="category-card__count">
        {count} role{count === 1 ? "" : "s"}
      </span>
    </Link>
  );
}
