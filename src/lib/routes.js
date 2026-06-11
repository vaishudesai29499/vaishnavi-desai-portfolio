export const AI_HUNT_BASE = '/ai-hunt';
export const AI_HUNT_ENTRY = `${AI_HUNT_BASE}/job-radar`;

export function aiHuntPath(path = '') {
  if (!path) return AI_HUNT_BASE;
  return `${AI_HUNT_BASE}${path.startsWith('/') ? path : `/${path}`}`;
}
