// Génère public/sitemap.xml et public/robots.txt à partir des données du site.
// Lancer : npx tsx scripts/gen-sitemap.ts
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { formations } from "../src/data/formations";
import { metiers } from "../src/data/metiers";
import { articles } from "../src/data/articles";
import { dispositifs } from "../src/data/financements";

const SITE_URL = "https://paripermis.com";
const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");

const staticPaths = [
  "/",
  "/formations",
  "/metiers",
  "/financement",
  "/blog",
  "/simulateur",
  "/a-propos",
  "/contact",
  "/inscription",
  "/mentions-legales",
  "/cgu",
  "/donnees-personnelles",
];

const paths = [
  ...staticPaths,
  ...formations.map((f) => `/formations/${f.slug}`),
  ...metiers.map((m) => `/metiers/${m.slug}`),
  ...articles.map((a) => `/blog/${a.slug}`),
  ...dispositifs.map((d) => `/financement/${d.code}`),
];

const today = new Date().toISOString().slice(0, 10);
const urls = paths
  .map(
    (p) =>
      `  <url>\n    <loc>${SITE_URL}${p === "/" ? "" : p}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${p === "/" ? "1.0" : "0.8"}</priority>\n  </url>`,
  )
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

const robots = `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`;

writeFileSync(join(publicDir, "sitemap.xml"), sitemap);
writeFileSync(join(publicDir, "robots.txt"), robots);
console.log(`sitemap.xml généré (${paths.length} URLs) + robots.txt`);
