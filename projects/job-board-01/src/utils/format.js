// Small formatting helpers shared across job components.

export function formatSalary(min, max) {
  if (!min && !max) return "Not disclosed";
  if (min && max) return `₹${min}L – ₹${max}L / year`;
  return `Up to ₹${min || max}L / year`;
}

export function formatPostedDate(dateStr) {
  const posted = new Date(dateStr);
  const now = new Date();
  const diffMs = now - posted;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays <= 0) return "Posted today";
  if (diffDays === 1) return "Posted yesterday";
  if (diffDays < 7) return `Posted ${diffDays} days ago`;
  if (diffDays < 14) return "Posted 1 week ago";
  if (diffDays < 30) return `Posted ${Math.floor(diffDays / 7)} weeks ago`;
  const months = Math.floor(diffDays / 30);
  return `Posted ${months} month${months > 1 ? "s" : ""} ago`;
}

export function formatDateLong(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
