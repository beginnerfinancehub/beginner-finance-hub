import { defineConfig } from 'astro/config';
import rehypeExternalLinks from 'rehype-external-links';
import sitemap from '@astrojs/sitemap';

// Converts > [!KEY-TAKEAWAY], > [!TIP], > [!WARNING] blockquotes
// into styled divs. Max 1–2 per article; warnings should be rare.
function remarkCallouts() {
  return (tree) => {
    function walk(node) {
      if (!node.children) return;
      for (const child of node.children) {
        if (child.type === 'blockquote') {
          const firstPara = child.children?.[0];
          if (firstPara?.type === 'paragraph') {
            const firstText = firstPara.children?.[0];
            if (firstText?.type === 'text') {
              const match = firstText.value.match(/^\[!(KEY-TAKEAWAY|TIP|WARNING)\]\n?/i);
              if (match) {
                const type = match[1].toLowerCase();
                child.data = child.data || {};
                child.data.hName = 'div';
                child.data.hProperties = { className: [`callout`, `callout--${type}`] };
                firstText.value = firstText.value.slice(match[0].length);
                if (!firstText.value && firstPara.children.length === 1) {
                  child.children.shift();
                }
              }
            }
          }
        }
        walk(child);
      }
    }
    walk(tree);
  };
}

export default defineConfig({
  site: 'https://beginnerfinancehub.com',
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkCallouts],
    rehypePlugins: [
      [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]
    ],
  },
});
