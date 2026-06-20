import { defineConfig } from 'astro/config';
import rehypeExternalLinks from 'rehype-external-links';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://beginnerfinancehub.com',
  integrations: [sitemap()],
  markdown: {
    rehypePlugins: [
      [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]
    ],
  },
});
