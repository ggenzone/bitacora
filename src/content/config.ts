import { defineCollection, z } from "astro:content";
import { glob, file } from 'astro/loaders'; 

const blogCollection = (folder: string) => defineCollection({
  loader: glob({ pattern: "**/*.md", base: `./src/content/${folder}` }),
  schema: ({ image }) => z.object({
    title: z.string(),
    image: z.object({
        path: image(),
        alt: z.string(),
    }).optional(),
    //url: z.string(),
    author: z.string().default('Guido'),
    tags: z.array(z.string()).optional(),
    categories: z.array(z.string()).optional(),
    date: z.coerce.date(),
    description: z.string().optional(),
    //canonicalURL: z.string().url(),
    //date: z.string().transform((str) => new Date(str)),
    visible: z.boolean().default(true)
  }),
});

const perspectivaCollection = blogCollection('perspectiva')
const prototipoCollection = blogCollection('prototipo')
const herbrandCollection = blogCollection('herbrand')


export const collections = {
  prototipo: prototipoCollection,
  perspectiva: perspectivaCollection,
  herbrand: herbrandCollection
};