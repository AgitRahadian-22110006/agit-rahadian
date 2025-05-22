// generate-sitemap.js
import fs from 'fs';

const urls = [
  { loc: 'https://agitrahadian.my.id/', priority: 1.0, changefreq: 'weekly' },
  { loc: 'https://agitrahadian.my.id/experience', priority: 0.8, changefreq: 'monthly' },
  { loc: 'https://agitrahadian.my.id/tugas', priority: 0.7, changefreq: 'monthly' },
  { loc: 'https://agitrahadian.my.id/tugas/1', priority: 0.6, changefreq: 'monthly' },
  { loc: 'https://agitrahadian.my.id/AgitRahadian_CV.pdf', priority: 0.5, changefreq: 'monthly' },
  // Tambah URL lain yang kamu perlukan
];

const buildSitemap = () => {
  const lastmod = new Date().toISOString();
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  urls.forEach(({ loc, priority, changefreq }) => {
    sitemap += `  <url>\n`;
    sitemap += `    <loc>${loc}</loc>\n`;
    sitemap += `    <lastmod>${lastmod}</lastmod>\n`;
    sitemap += `    <changefreq>${changefreq}</changefreq>\n`;
    sitemap += `    <priority>${priority}</priority>\n`;
    sitemap += `  </url>\n`;
  });

  sitemap += `</urlset>`;
  return sitemap;
};

fs.writeFileSync('public/sitemap.xml', buildSitemap(), 'utf-8');
console.log('Sitemap generated at public/sitemap.xml');
