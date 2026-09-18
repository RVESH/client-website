// Helpers that resolve relationships between titles, genres and collections.
// Kept as plain functions (no class/store) since the data itself is static.
import { videos } from "../data/videos";
import { genres } from "../data/genres";
import { collections } from "../data/collections";

export function findTitle(id) {
  return videos.find((v) => v.id === id) || null;
}

export function genreLabel(genreId) {
  const g = genres.find((item) => item.id === genreId);
  return g ? g.label : genreId;
}

export function titlesByGenre(genreId) {
  return videos.filter((v) => v.genres.includes(genreId));
}

export function relatedTitles(title, limit = 8) {
  return videos
    .filter((v) => v.id !== title.id && v.genres.some((g) => title.genres.includes(g)))
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
}

// Resolves a collection's member titles, whether curated by explicit id list
// or derived automatically from a boolean flag on each title.
export function collectionTitles(collection) {
  if (collection.auto) {
    return videos.filter((v) => v[collection.auto]);
  }
  return collection.titleIds.map((id) => findTitle(id)).filter(Boolean);
}

export function findCollection(id) {
  return collections.find((c) => c.id === id) || null;
}

export function findEpisode(episodeId) {
  for (const title of videos) {
    if (!title.seasons) continue;
    for (const season of title.seasons) {
      const ep = season.episodes.find((e) => e.id === episodeId);
      if (ep) return { title, season, episode: ep };
    }
  }
  return null;
}
