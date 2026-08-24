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

export const collections = { articles };
