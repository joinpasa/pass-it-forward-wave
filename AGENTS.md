# Project rules

- Public informational pages live in `src/pages` and are lazy-loaded in `src/App.tsx`; reuse the shared site navigation, footer, and semantic design tokens to preserve the existing experience.
- Science concept articles live on-site at /science/:slug, generated from the original pages into src/data/scienceArticles.json; the "Join the research" link stays external.