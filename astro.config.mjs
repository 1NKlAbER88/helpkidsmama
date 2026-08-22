import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://helpkidsmama.ru',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
