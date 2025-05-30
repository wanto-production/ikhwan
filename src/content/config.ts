import { defineCollection } from "astro:content";
import { z } from "astro:schema";


const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string().optional(),
    category: z.string(),
    thumbnail: z.string().optional(),
    relatedPost: z.array(z.string()).optional(),
  })
})

export const collections = {
  blog
}
