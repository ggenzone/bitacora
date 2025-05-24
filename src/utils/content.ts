import { getCollection, type DataEntryMap } from "astro:content";

type Collections = keyof DataEntryMap

// Only return posts without `draft: true` in the frontmatter

export const latestPosts = async (collection: Collections) => (
  await getCollection(collection, ({ data }) => {
    return data.visible !== false
  })
).sort(
  (a, b) =>
    new Date(b.data.date).valueOf() -
    new Date(a.data.date).valueOf()
);