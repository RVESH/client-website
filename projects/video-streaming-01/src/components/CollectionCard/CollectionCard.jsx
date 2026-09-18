import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./CollectionCard.scss";

export default function CollectionCard({ collection, previewImages }) {
  return (
    <Link to={`/collections/${collection.id}`} className="collection-card">
      <div className="collection-card__stack">
        {previewImages.slice(0, 3).map((img, i) => (
          <img key={img.src} src={img.src} alt="" loading="lazy" style={{ zIndex: 3 - i }} />
        ))}
      </div>
      <div className="collection-card__body">
        <h3>{collection.label}</h3>
        <p>{collection.description}</p>
        <span className="collection-card__cta">
          <span>Explore</span>
          <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
