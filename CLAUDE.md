# BeginnerFinanceHub — Site Repo Instructions

This is the live BFH website. It's built with Astro and deploys automatically to Netlify whenever a commit is pushed to `main` on GitHub. There is no manual deploy step — push to `main` = live.

## How to publish an article

Articles live in `src/content/articles/` as Markdown files.

Every article needs this frontmatter block at the top:

```markdown
---
title: "Your Title Here"
description: "One-sentence description for SEO and previews."
pubDate: 2026-06-26
author: "John Cho"
draft: false
---
```

- `draft: true` = exists in the repo but won't appear on the site.
- `draft: false` = live as soon as pushed to `main`.
- File naming convention: `kebab-case-slug.md` (this becomes the URL path).

## What not to touch without explicit instruction

These files affect every page on the site. Do not edit them unless specifically asked:

- `src/layouts/` — page templates
- `src/styles/global.css` — site-wide styling
- `src/components/` — Nav, Footer, AuthorByline
- `astro.config.mjs`, `netlify.toml`, `tsconfig.json`, `package.json`

Content files (`src/content/articles/*.md`, `src/pages/*.astro`) are safe to edit.

## Deployment

Changes only go live via `git commit` + `git push origin main`. Editing a file locally does nothing until it's pushed. The Netlify build runs automatically on push — no login or manual trigger needed.

## Loose files in the repo root

`founders-brief_v1_1.md` and `portfolio-os.md` in the root are stale working files, not site content. Ignore them unless the Chair asks about them.
