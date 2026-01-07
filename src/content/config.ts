import { defineCollection, z } from 'astro:content';

const elements = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    brand: z.string(),
    title: z.string(),
    category: z.string(),
    thumbnail: z.string(),
    images: z.array(z.string()).default([]),
    date: z.string().optional(),
  }),
});

export const collections = { elements };