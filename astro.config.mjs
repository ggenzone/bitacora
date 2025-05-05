// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ggenzone.github.io',
  base: 'bitacora',

  vite: {
      plugins: [tailwindcss()]
	},

  markdown: {
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
	},

  integrations: [sitemap()],
});