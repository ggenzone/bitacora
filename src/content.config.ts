import { defineCollection, z } from "astro:content";
import { glob, file } from 'astro/loaders'; 

const blogCollection = (folder: string) => defineCollection({
  loader: glob({ pattern: "**/*.md", base: `./src/pages/${folder}` }),
  schema: ({ image }) => z.object({
    title: z.string(),
    image: z.object({
        path: image(),
        alt: z.string(),
    }),
    //url: z.string(),
    author: z.string().default('Guido'),
    tags: z.array(z.string()),
    categories: z.array(z.string()),
    date: z.coerce.date(),
    //canonicalURL: z.string().url(),
  }),
});

const perspectivaCollection = blogCollection('perspectiva')
const prototipoCollection = blogCollection('prototipo')

export const collections = {
  prototivo: prototipoCollection,
  perspectiva: perspectivaCollection,
};