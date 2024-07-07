export function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diffInDays = Math.floor(
    (now.getTime() - new Date(date).getTime()) / (1000 * 60 * 60 * 24)
  );

  if (diffInDays === 0) {
    return "Posted Today";
  } else if (diffInDays === 1) {
    return "Posted 1 day ago";
  } else {
    return `Posted ${diffInDays} days ago`;
  }
}
// Modified on 2025-02-19 00:38:34
// Modified on 2025-02-19 00:56:04
