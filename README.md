# MasterPeace Grill (masterpeacegrill.com)

Next.js 16 App Router site for MasterPeace Grill, 523 Fayette St, Conshohocken, PA. Owner operated for over 11 years. This replaces the old Create React App SPA.

## Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS 3.4 (dark theme, brand red, Bebas Neue display font), framer-motion, lucide-react
- Package manager: pnpm

## Commands

```
pnpm install
pnpm dev
pnpm build
```

## Layout

- `app/` - routes: `/` (home), `/menu`, `/about`, plus `robots.ts`, `sitemap.ts`, `not-found.tsx`
- `components/` - shared chrome: `site-header.tsx`, `site-footer.tsx`, `catering-popup.tsx`
- `lib/business.ts` - single source of truth for NAP, hours, links (never hardcode elsewhere)
- `lib/menu.json` - verbatim menu data (never edit prices or names); read via `lib/menu.ts`
- `lib/reviews.ts` - real Yelp reviews, verbatim (never invent reviews or ratings)
- `public/images/` - photography and logos carried over from the old site

## Catering

`/catering` is a separate app. `next.config.mjs` rewrites `/catering` and `/catering/:path*` to the catering deployment so one domain serves both. Always link to it with a plain `<a href="/catering">`, never `next/link`.
