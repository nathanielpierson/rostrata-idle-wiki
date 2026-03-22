/**
 * All Markdown files in src/content/wiki/*.md are wiki pages.
 * - index.md → site home (/)
 * - any-other-name.md → /any-other-name
 *
 * Add a new page: create a .md file here; it appears in the sidebar automatically.
 */

const wikiModules = import.meta.glob<string>('../content/wiki/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

function pathToSlug(filePath: string): string | null {
  const match = filePath.match(/\/([^/]+)\.md$/)
  return match?.[1] ?? null
}

function slugToLabel(slug: string): string {
  if (slug === 'index') return 'Home'
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export type WikiNavItem = {
  slug: string
  path: string
  label: string
}

export function getWikiNavItems(): WikiNavItem[] {
  const items: WikiNavItem[] = []
  for (const filePath of Object.keys(wikiModules)) {
    const slug = pathToSlug(filePath)
    if (!slug) continue
    const path = slug === 'index' ? '/' : `/${slug}`
    items.push({ slug, path, label: slugToLabel(slug) })
  }
  items.sort((a, b) => {
    if (a.slug === 'index') return -1
    if (b.slug === 'index') return 1
    return a.label.localeCompare(b.label, undefined, { sensitivity: 'base' })
  })
  return items
}

export function getPageMarkdown(slug: string): string | null {
  const normalized = slug === '' ? 'index' : slug
  const entry = Object.entries(wikiModules).find(([path]) =>
    path.endsWith(`/${normalized}.md`),
  )
  return entry?.[1] ?? null
}
