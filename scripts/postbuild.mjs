import { copyFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const dist = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist')
const index = join(dist, 'index.html')

/**
 * GitHub Pages has no rewrite rules, so a request for /services is a request
 * for a file that does not exist. Serving 404.html gets the right *content*
 * on screen — the SPA boots and the router resolves the path — but the
 * response is still HTTP 404, so crawlers drop exactly the pages sitemap.xml
 * advertises. Writing a real index.html at each route makes them 200.
 *
 * Keep in sync with the routes in src/app/App.tsx.
 */
const ROUTES = ['services', 'spare-parts', 'standards', 'about', 'contact', 'parts-request']

for (const route of ROUTES) {
  const dir = join(dist, route)
  mkdirSync(dir, { recursive: true })
  copyFileSync(index, join(dir, 'index.html'))
}

// Genuinely unknown paths still fall through to 404.html, which is correct:
// the router renders NotFoundPage and the status stays 404.
copyFileSync(index, join(dist, '404.html'))

console.log(`postbuild: ${ROUTES.length} rota + 404.html yazildi`)
