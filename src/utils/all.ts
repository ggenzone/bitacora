//import getReadingTime from "reading-time";
//import { toString } from "mdast-util-to-string";

/** Format Date */
export const getFormattedDate = (date: number | string | Date) =>
  date
    ? new Date(date).toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";


/** Estimated Reading time */
/*
export function remarkReadingTime() {
  return function (tree, { data }) {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);

    data.astro.frontmatter.estReadingTime = readingTime.minutes;
  };
}
*/

/** Check if an Image Path is Relative or Absolute */
export const checkImageUrl = (image: string | URL, url: string | URL) => {
  try {
    new URL(image);
    return image;
  } catch (error) {
    return new URL(image, url).toString();
  }
};