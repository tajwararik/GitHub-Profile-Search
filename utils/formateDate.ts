export default function formateLateUpdate(date: string) {
  const lastUpdate = new Date(date).getTime();

  if (Number.isNaN(lastUpdate)) return null;

  const day = Math.floor((Date.now() - lastUpdate) / (24 * 60 * 60 * 1000));

  return day === 0 ? "updated today" : `updated ${day} days ago`;
}
