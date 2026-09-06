import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://hvconstruction.com';

const staticRoutes = [
    '/',
    '/about',
    '/expertise',
    '/projects',
    '/contact',
    '/faq',
    '/privacy',
    '/terms'
];

const expertiseSlugs = [
    'government-infrastructure',
    'jal-jeevan-mission',
    'roads-transportation',
    'optical-fibre-telecom',
    'buildings-civil',
    'high-rise',
    'private-development',
    'interior-design',
    'turnkey-solutions'
];

const allUrls = [
    ...staticRoutes,
    ...expertiseSlugs.map(slug => `/expertise/${slug}`)
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(url => `  <url>
    <loc>${SITE_URL}${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${url === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${url === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), xml);
console.log('Sitemap generated successfully.');
