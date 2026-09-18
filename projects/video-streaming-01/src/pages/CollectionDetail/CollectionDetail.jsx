import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { findCollection, collectionTitles } from "../../utils/titles";
import TitleCard from "../../components/TitleCard/TitleCard.jsx";
import "./CollectionDetail.scss";

export default function CollectionDetail() {
  const { id } = useParams();
  const collection = findCollection(id);

  if (!collection) return <Navigate to="/genres" replace />;

  const titles = collectionTitles(collection);

  return (
    <section className="section collection-detail">
      <div className="container">
        <Link to="/genres" className="collection-detail__back">
          <ArrowLeft size={16} strokeWidth={2} aria-hidden="true" />
          <span>All genres &amp; collections</span>
        </Link>

        <span className="eyebrow">Collection</span>
        <h1 className="collection-detail__heading">{collection.label}</h1>
        <p className="collection-detail__desc">{collection.description}</p>
        <p className="collection-detail__count">
          {titles.length} title{titles.length === 1 ? "" : "s"}
        </p>

        {titles.length > 0 ? (
          <div className="collection-detail__grid">
            {titles.map((t) => (
              <TitleCard key={t.id} title={t} />
            ))}
          </div>
        ) : (
          <p className="collection-detail__empty">This collection doesn't have any titles yet.</p>
        )}
      </div>
    </section>
  );
}
