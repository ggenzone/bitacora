import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection("perspectiva");

  return rss({
    title: 'Bitacora | Perspectiva',
    description: 'Cuaderno',
    site: context.site,
    // items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/bitacora/perspectiva/${post.id}/`,
    })),
    customData: `<language>es-ES</language>`,
  });
}