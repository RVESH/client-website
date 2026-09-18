import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Play, Info } from "lucide-react";
import { videos } from "../../data/videos";
import { genres } from "../../data/genres";
import { collections } from "../../data/collections";
import { journal } from "../../data/journal";
import { testimonials } from "../../data/testimonials";
import { site } from "../../data/site";
import { useWatchlist } from "../../app/WatchlistContext.jsx";
import { useProgress } from "../../app/ProgressContext.jsx";
import { collectionTitles } from "../../utils/titles";
import { formatRuntime } from "../../utils/format";
import Row from "../../components/Row/Row.jsx";
import TitleCard from "../../components/TitleCard/TitleCard.jsx";
import GenreCard from "../../components/GenreCard/GenreCard.jsx";
import CollectionCard from "../../components/CollectionCard/CollectionCard.jsx";
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard.jsx";
import SectionHeading from "../../components/SectionHeading/SectionHeading.jsx";
import Badge from "../../components/Badge/Badge.jsx";
import RatingBadge from "../../components/RatingBadge/RatingBadge.jsx";
import WatchlistButton from "../../components/WatchlistButton/WatchlistButton.jsx";
import NewsletterCTA from "../../components/NewsletterCTA/NewsletterCTA.jsx";
import "./Home.scss";

export default function Home() {
  const featured = videos.find((v) => v.featured) || videos[0];
  const { ids: watchlistIds } = useWatchlist();
  const { progress } = useProgress();

  const continueWatching = videos.filter((v) => Object.keys(progress).includes(v.id));
  const trending = videos.filter((v) => v.trending);
  const newReleases = videos.filter((v) => v.newRelease);
  const topRated = videos.filter((v) => v.topRated);
  const comingSoon = videos.filter((v) => v.comingSoon);
  const popular = [...videos].sort((a, b) => b.rating - a.rating).slice(4, 12);
  const fallbackPicks = useMemo(() => [...videos].reverse().slice(0, 8), []);
  const recommended = watchlistIds.length
    ? videos.filter(
        (v) => !watchlistIds.includes(v.id) && v.genres.some((g) => videos.find((w) => w.id === watchlistIds[0])?.genres.includes(g))
      )
    : fallbackPicks;

  return (
    <>
      {/* Hero */}
      <section className="home-hero">
        <div className="home-hero__bg">
          <img src={featured.backdrop.src} alt={featured.backdrop.alt} />
        </div>
        <div className="container home-hero__content">
          <span className="eyebrow">{site.hero.eyebrow}</span>
          <h1 className="home-hero__title">{featured.title}</h1>
          <div className="home-hero__meta">
            <RatingBadge rating={featured.rating} />
            <span>{featured.year}</span>
            {featured.duration && <span>{formatRuntime(featured.duration)}</span>}
            <Badge variant="outline">{featured.maturity}</Badge>
          </div>
          <p className="home-hero__desc">{featured.shortDescription}</p>
          <div className="home-hero__actions">
            <Link to={`/watch/${featured.id}`} className="btn btn--primary">
              <Play size={18} strokeWidth={0} fill="currentColor" />
              <span>Watch Now</span>
            </Link>
            <Link to={`/movie/${featured.id}`} className="btn btn--secondary">
              <Info size={18} strokeWidth={2} />
              <span>More Info</span>
            </Link>
            <WatchlistButton id={featured.id} title={featured.title} />
          </div>
        </div>
      </section>

      <div className="home-rows">
        {continueWatching.length > 0 && (
          <Row eyebrow="Pick up where you left off" title={site.sections.continueWatching}>
            {continueWatching.map((v) => (
              <TitleCard key={v.id} title={v} variant="landscape" />
            ))}
          </Row>
        )}

        <Row eyebrow="Right now" title={site.sections.trending} viewAllTo="/browse?sort=newest">
          {trending.map((v) => (
            <TitleCard key={v.id} title={v} />
          ))}
        </Row>

        <Row eyebrow="Audience favorites" title={site.sections.popular} viewAllTo="/browse?sort=rating">
          {popular.map((v) => (
            <TitleCard key={v.id} title={v} />
          ))}
        </Row>

        <Row eyebrow="Just landed" title={site.sections.newReleases} viewAllTo="/browse?sort=newest">
          {newReleases.map((v) => (
            <TitleCard key={v.id} title={v} />
          ))}
        </Row>

        <Row eyebrow="Based on your list" title={site.sections.recommended}>
          {recommended.map((v) => (
            <TitleCard key={v.id} title={v} />
          ))}
        </Row>

        <Row eyebrow="Highest rated" title={site.sections.topRated} viewAllTo="/browse?rating=8">
          {topRated.map((v) => (
            <TitleCard key={v.id} title={v} />
          ))}
        </Row>

        {comingSoon.length > 0 && (
          <Row eyebrow="On the way" title={site.sections.comingSoon}>
            {comingSoon.map((v) => (
              <TitleCard key={v.id} title={v} />
            ))}
          </Row>
        )}
      </div>

      {/* Genre highlights */}
      <section className="section section--tight">
        <div className="container">
          <SectionHeading eyebrow="Find your next watch" title={site.sections.genreHighlights} viewAllTo="/genres" />
          <div className="home-genres__grid">
            {genres.slice(0, 8).map((g) => (
              <GenreCard key={g.id} genre={g} count={videos.filter((v) => v.genres.includes(g.id)).length} />
            ))}
          </div>
        </div>
      </section>

      {/* Curated collections */}
      <section className="section section--tight">
        <div className="container">
          <SectionHeading eyebrow="Programmed for you" title={site.sections.collections} viewAllTo="/genres" viewAllLabel="See all genres" />
          <div className="home-collections__grid">
            {collections.slice(0, 4).map((c) => (
              <CollectionCard
                key={c.id}
                collection={c}
                previewImages={collectionTitles(c).map((t) => t.poster)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Journal */}
      <section className="section section--tight">
        <div className="container">
          <SectionHeading eyebrow="Behind the screen" title={site.sections.journal} viewAllTo="/journal" />
          <div className="home-journal__grid">
            {journal.slice(0, 3).map((post) => (
              <Link to="/journal" key={post.id} className="home-journal__card">
                <img src={post.image.src} alt={post.image.alt} loading="lazy" />
                <div>
                  <span className="home-journal__date">
                    {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                  </span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section--tight">
        <div className="container">
          <SectionHeading eyebrow="Member word" title={site.sections.testimonials} />
          <div className="home-testimonials__grid">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      <NewsletterCTA />
    </>
  );
}
