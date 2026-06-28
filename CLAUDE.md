# BeginnerFinanceHub — Site Repo Instructions

Astro site. Auto-deploys to Netlify on push to `main` on GitHub. No manual deploy step.

Remote: `github.com/beginnerfinancehub/beginner-finance-hub` · branch: `main`

---

## Article frontmatter (current schema — post WI-01)

Articles live in `src/content/articles/` as Markdown files. File name = URL slug (`kebab-case.md`).

```markdown
---
title: "Your Title Here"
description: "One-sentence description for SEO and previews."
pubDate: 2026-06-20
updatedDate: 2026-06-28          # optional — omit if not updated
author: "John Cho"               # default; omit to use default
draft: false                     # true = in repo but not live
image: "/images/article-02.png" # optional — featured image path (relative to /public)
imageAlt: "Alt text here"        # required if image is set
ogImage: "/images/og/article-02.png"  # optional — OG/social card (absolute path from /public); falls back to site default card
faq:                             # optional — drives FAQPage JSON-LD + visible FAQ section
  - q: "Question?"
    a: "Answer. Plain English, no advice line."
---
```

**Rules:**
- `draft: true` → in repo, not visible on site.
- `draft: false` → live the moment the commit is pushed.
- If `faq` is populated, the article body **must** include a `## Common Questions` section whose content matches the frontmatter answers exactly (schema + visible section stay in sync).
- `ogImage` path must exist under `/public` before the commit, or the build will reference a missing file.
- No em dashes (`—`) 