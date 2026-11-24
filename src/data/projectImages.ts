/**
 * Auto-loads landing-page screenshots from src/data/images/.
 * Name each file after the project id (see src/data/projects.ts), e.g.
 *   ai-travel-assistant.webp   marketinsights.webp   markyourcal.webp
 *   stoodio.webp               industrial-navigator.webp
 * Supported: .webp .png .jpg .jpeg .avif. Projects without a file simply show generated artwork.
 */
const files = import.meta.glob<string>('./images/*.{webp,png,jpg,jpeg,avif}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const byId: Record<string, string> = {}
for (const [path, url] of Object.entries(files)) {
  const id = path.replace(/^.*\//, '').replace(/\.[^.]+$/, '')
  byId[id] = url
}

export const getProjectImage = (id: string): string | undefined => byId[id]

/** Attaches a screenshot to every project that has a matching file. */
export function withImages<T extends { id: string; image?: string }>(list: T[]): T[] {
  return list.map((p) => ({ ...p, image: p.image ?? getProjectImage(p.id) }))
}
