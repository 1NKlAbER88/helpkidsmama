import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import path from 'node:path';

// Даты публикации статей — чтобы проставить в sitemap корректный lastmod:
// без него поисковики не понимают, что обновилось, и обходят сайт реже.
const ARTICLES_DIR = 'src/content/articles';
const pubDates = {};
try {
  for (const file of fs.readdirSync(ARTICLES_DIR)) {
    if (!file.endsWith('.md')) continue;
    const raw = fs.readFileSync(path.join(ARTICLES_DIR, file), 'utf8');
    const m = raw.match(/^pubDate:\s*["']?(\d{4}-\d{2}-\d{2})/m);
    if (m) pubDates[file.replace(/\.md$/, '')] = m[1];
  }
} catch {}
// главная обновляется с каждой новой статьёй — берём самую свежую из УЖЕ вышедших
// (в контенте лежат статьи с датами вперёд, они появляются на сайте в свой день)
const today = new Date().toISOString().slice(0, 10);
const newest = Object.values(pubDates).filter((d) => d <= today).sort().pop();

export default defineConfig({
  site: 'https://helpkidsmama.ru',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      serialize(item) {
        const slug = new URL(item.url).pathname.replace(/^\/|\/$/g, '');
        const d = slug === '' ? newest : pubDates[slug];
        if (d && d > today) return item; // будущие даты в sitemap не отдаём
        if (d) item.lastmod = new Date(`${d}T09:00:00Z`).toISOString();
        return item;
      },
    }),
  ],
});
