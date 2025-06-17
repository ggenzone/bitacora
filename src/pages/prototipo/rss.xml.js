import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection("prototipo");

  return rss({
    title: 'Bitacora | Prototipo',
    description: 'Prototipo',
    site: context.site,
    // items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    items: posts.filter(post => post.visible).map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/bitacora/prototipo/${post.id}/`,
    })),
    customData: `<language>es-ES</language>`,
  });
}