const fs = require('fs')
const globby = require('globby')

function addPage(page) {
  const path = page.replace('pages', '').replace(/(.tsx|.mdx)$/, '');
  const route = path === '/index' ? '' : path;
  const url = new URL(route.endsWith('/') ? route : `${route}/`, process.env.WEBSITE_URL).href;

  return `  <url>
    <loc>${url}</loc>
    <changefreq>${process.env.SITEMAP_CHANGEFREQ || 'monthly'}</changefreq>
  </url>`;
}

async function generateSitemap() {
  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const pages = await globby([
    'pages/**/*{.tsx,.mdx}',
    '!pages/_*.tsx',
    '!pages/api',
  ])
  const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(addPage).join('\n')}
</urlset>`

  fs.writeFileSync('public/sitemap.xml', sitemap)
}

generateSitemap()
