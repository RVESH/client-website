import { genres } from "../../data/genres";
import { videos } from "../../data/videos";
import GenreCard from "../../components/GenreCard/GenreCard.jsx";
import "./Genres.scss";

export default function Genres() {
  return (
    <>
      <section className="section section--tight genres-hero">
        <div className="container">
          <span className="eyebrow">Genres</span>
          <h1 className="genres-hero__heading">Find your next watch by genre</h1>
          <p className="genres-hero__desc">
            Twelve genres, each curated rather than auto-sorted. Pick one to filter the full catalogue.
          </p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="genres-grid">
            {genres.map((g) => (
              <GenreCard key={g.id} genre={g} count={videos.filter((v) => v.genres.includes(g.id)).length} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
