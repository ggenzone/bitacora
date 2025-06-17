import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection("herbrand");

  return rss({
    title: 'Bitacora | Herbrand',
    description: 'Herbrand Universe',
    site: context.site,
    // items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/bitacora/herbrand/${post.id}/`,
    })),
    customData: `<language>es-ES</language>`,
  });
}