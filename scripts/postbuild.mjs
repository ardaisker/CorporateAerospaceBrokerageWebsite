import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const indexPath = join(dist, 'index.html')

const SITE = 'https://guleraero.com'
const SUFFIX = ' | Guler Aero'

/**
 * Tek dogruluk kaynagi: rota dosyalari, her rotanin <head>'i ve sitemap
 * buradan uretiliyor. src/app/App.tsx'teki rotalarla senkron tut.
 * `seo` alani src/utils/seoContent.ts icindeki anahtara denk gelir.
 */
const ROUTES = [
  { path: '',              seo: 'home',         changefreq: 'weekly',  priority: '1.0' },
  { path: 'services',      seo: 'services',     changefreq: 'monthly', priority: '0.9' },
  { path: 'spare-parts',   seo: 'spareParts',   changefreq: 'monthly', priority: '0.9' },
  { path: 'standards',     seo: 'standards',    changefreq: 'monthly', priority: '0.8' },
  { path: 'about',         seo: 'about',        changefreq: 'monthly', priority: '0.7' },
  { path: 'contact',       seo: 'contact',      changefreq: 'monthly', priority: '0.8' },
  { path: 'parts-request', seo: 'partsRequest', changefreq: 'monthly', priority: '0.9' },
]

// Basliklari/aciklamalari uygulamanin kendi kaynagindan oku ki iki yerde
// tutulmasin. Duz bir nesne sabiti, TS derlemesine gerek yok.
const seoSrc = readFileSync(join(root, 'src/utils/seoContent.ts'), 'utf8')
const seoContent = new Function(
  'return ' + seoSrc.slice(seoSrc.indexOf('{'), seoSrc.lastIndexOf('}') + 1)
)()

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

/**
 * index.html tek bir sabit canonical tasiyordu ve her rota onun kopyasiydi:
 * ham HTML'de her sayfa kendini ana sayfanin kopyasi ilan ediyordu. Helmet
 * bunu tarayicida duzeltiyor ama ilk okumada verilen sinyal yanlisti. Burada
 * her rotanin head'i derleme aninda dogru degerlerle yeniden yaziliyor.
 */
function headFor(html, { url, title, description }) {
  const full = esc(title + SUFFIX)
  const desc = esc(description)
  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${full}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${desc}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${full}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${desc}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${full}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${desc}$2`)
}

const baseHtml = readFileSync(indexPath, 'utf8')

/**
 * GitHub Pages'in yeniden yazma kurali yok: /services diye bir dosya olmadigi
 * icin istek 404.html'e dusuyordu; icerik dogru ciziliyordu ama cevap HTTP 404
 * kaliyordu, ustelik sitemap tam da o adresleri tanitiyordu.
 */
for (const route of ROUTES) {
  const url = `${SITE}/${route.path ? route.path + '/' : ''}`
  const meta = seoContent.en[route.seo]
  const html = headFor(baseHtml, { url, title: meta.title, description: meta.description })
  if (route.path) {
    mkdirSync(join(dist, route.path), { recursive: true })
    writeFileSync(join(dist, route.path, 'index.html'), html)
  } else {
    writeFileSync(indexPath, html)
  }
}

// Gercekten bilinmeyen yollar 404.html'e dusmeye devam ediyor; orada HTTP 404
// dogru cevap ve router NotFoundPage'i ciziyor. Indekslenmemeli.
writeFileSync(
  join(dist, '404.html'),
  baseHtml.replace('<meta name="robots" content="index, follow" />', '<meta name="robots" content="noindex, follow" />')
)

/**
 * sitemap.xml elle tutuluyordu: lastmod 2025-02-05'te donmustu ve adresler
 * egik cizgisizdi, yani sunucunun 301 verdigi bicimdeydi.
 */
const lastmod = new Date().toISOString().slice(0, 10)
writeFileSync(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map(r => `  <url>
    <loc>${SITE}/${r.path ? r.path + '/' : ''}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join('\n')}
</urlset>
`
)

writeFileSync(
  join(dist, 'robots.txt'),
  `# Guler Aero Solutions
User-agent: *
Allow: /

Sitemap: ${SITE}/sitemap.xml
`
)

console.log(`postbuild: ${ROUTES.length} rota head'i yazildi + 404.html + sitemap.xml + robots.txt (lastmod ${lastmod})`)
