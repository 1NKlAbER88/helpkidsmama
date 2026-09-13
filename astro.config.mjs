import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import path from 'node:path';

// Даты публикации статей — чтобы проставить в sitemap корректный lastmod:
// без него поисковики не понимают, что обновилось, и обходят сайт реже.
// Карточки для печати читаются тоже: без этого у /kartochki/ и всех наборов в sitemap
// не было lastmod вовсе, и Google не видел, что там появились новые страницы.
const pubDates = {};
function readDates(dir, prefix) {
  try {
    for (const file of fs.readdirSync(dir)) {
      if (!file.endsWith('.md')) continue;
      const raw = fs.readFileSync(path.join(dir, file), 'utf8');
      const m = raw.match(/^pubDate:\s*["']?(\d{4}-\d{2}-\d{2})/m);
      // если статью дописывали, для lastmod важна дата обновления, а не публикации
      const u = raw.match(/^updatedDate:\s*["']?(\d{4}-\d{2}-\d{2})/m);
      if (m) pubDates[prefix + file.replace(/\.md$/, '')] = (u && u[1] > m[1]) ? u[1] : m[1];
    }
  } catch {}
}
readDates('src/content/articles', '');
readDates('src/content/cards', 'kartochki/');
// главная и каталог карточек обновляются с каждой новой записью — берём самую свежую из УЖЕ
// вышедших (в контенте лежат статьи с датами вперёд, они появляются на сайте в свой день)
const today = new Date().toISOString().slice(0, 10);
const latest = (cards) => Object.entries(pubDates)
  .filter(([k, d]) => k.startsWith('kartochki/') === cards && d <= today)
  .map(([, d]) => d).sort().pop();
const newest = latest(false);
const newestCard = latest(true);

export default defineConfig({
  site: 'https://helpkidsmama.ru',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      serialize(item) {
        const slug = new URL(item.url).pathname.replace(/^\/|\/$/g, '');
        const d = slug === '' ? newest : slug === 'kartochki' ? newestCard : pubDates[slug];
        if (d && d > today) return item; // будущие даты в sitemap не отдаём
        if (d) item.lastmod = new Date(`${d}T09:00:00Z`).toISOString();
        return item;
      },
    }),
  ],
});
