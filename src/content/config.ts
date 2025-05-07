// src/content/config.js
import { z, defineCollection } from 'astro:content';



const docs = defineCollection({
  schema: z.object({
    title: z.string(),
    // author: z.string(),
    // date: z.date(),
    featuredImage: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  devblog: docs,

};