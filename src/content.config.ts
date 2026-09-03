import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    // Заголовок для <title> и поиска: с ключом в начале. H1 остаётся живым (title).
    seoTitle: z.string().optional(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    cover: z.string().optional(),
    tags: z.array(z.string()).default([]),
    // Раздел для главной. Не указан — определится по тегам, а если не выйдет,
    // сборка напишет предупреждение, и статья попадёт только в общую ленту.
    section: z.enum(['emotions', 'school', 'relations', 'behaviour']).optional(),
  }),
});

// Наборы карточек для печати. Набор это одна страница, внутри несколько карточек:
// так вместо десятков тонких страниц получается одна сильная, и её же держат пины.
const cards = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cards' }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    cover: z.string().optional(),
    tags: z.array(z.string()).default([]),
    // возраст, для карточки-подписи и для фильтра в будущем
    ages: z.string().optional(),
    items: z.array(z.object({
      id: z.string(),          // якорь: /kartochki/<slug>/#<id>
      title: z.string(),
      sub: z.string(),
      level: z.string(),       // «лёгкий», «средний», «сложный»
      file: z.string(),        // путь к PDF
      preview: z.string(),     // крупное превью
      thumb: z.string(),       // миниатюра
    })).default([]),
  }),
});

export const collections = { articles, cards };
