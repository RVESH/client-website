// Small formatting helpers shared across components.

export function formatRuntime(minutes) {
  if (!minutes) return "";
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h === 0) return `${m}m`;
  return `${h}h ${m}m`;
}

export function formatDateLong(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function totalEpisodeCount(title) {
  if (!title.seasons) return 0;
  return title.seasons.reduce((sum, s) => sum + s.episodes.length, 0);
}

export function totalSeasonRuntime(season) {
  return season.episodes.reduce((sum, e) => sum + (e.duration || 0), 0);
}
