# Architecture

## Tech stack

| Layer | Technology |
|---|---|
| Framework | Next.js (App Router) |
| Styling | Tailwind CSS 4 |
| UI primitives | shadcn/ui on top of Radix |
| Forms | react-hook-form |
| Animation | Framer Motion |
| Linting/formatting | Biome 2 |
| Package manager | Bun |
| Language | TypeScript 5 |
| Hosting | Vercel |

There's no CMS and no database here. All copy lives in `utils/constants.ts` as plain exported objects, and every page is static.

## Project structure

```
nmcyber-website-2.0/
├── app/
│   ├── (home)/              # Homepage route group
│   ├── about-us/
│   ├── academy/
│   ├── company/
│   ├── contact-us/
│   ├── products/
│   │   └── _components/     # Only used on the products page
│   ├── resources/
│   ├── services/
│   ├── layout.tsx           # Root layout, fonts, nav, footer
│   ├── globals.css          # Tailwind theme tokens
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── metadata.tsx
│   └── not-found.tsx
├── components/
│   ├── ui/                  # shadcn primitives (button, card, dialog, etc.) - don't hand edit, regenerate via shadcn
│   ├── shared/               # navbar, footer, blur-element, not-found - used across the whole site
│   ├── wrapper/              # page-wrapper.tsx, layout shell
│   ├── landing/              # Everything on the homepage: hero, products, pricing, testimonials, etc.
│   ├── about-us/
│   ├── academy/
│   ├── services/
│   ├── resources/
│   └── structured-data.tsx  # JSON-LD helper
├── utils/
│   ├── constants.ts          # All site copy and content objects, by section
│   └── structured-data.ts    # Builds the schema.org objects for SEO
├── lib/
│   └── utils.ts              # cn() and small helpers
├── types/
│   └── resources.ts
├── biome.json
├── tsconfig.json
├── next.config.ts
├── components.json           # shadcn config
└── docs/                     # this folder
```

There's no `[locale]` segment and no barrel file (`components/index.ts` doesn't exist). Components get imported directly from their file path, e.g. `import Hero from '@/components/landing/hero'`.

## Routing and rendering

Every page here is plain static Next.js - no `dynamic` export games, no deploy hooks, no revalidate windows. Content comes from `utils/constants.ts` at build time, so a `next build` is all it takes to get a fresh static site.

`app/(home)/page.tsx` is the one place that assembles every landing section in order:

```tsx
<Hero />
<WhyHumanCentric />
<Products />
<WhyNMCyber />
<Testimonials />
<PricePlans />
<FreeResources />
<ContactForm />
```

If you're adding a new homepage section, this is the file you touch, and the order here is the order it renders in on the page.

## Content model

There isn't a CMS, so "content" means an exported object or array in `utils/constants.ts`. Each landing section generally has its own export, named after what it feeds:

- `HERO_CONTENT`
- `WHY_HUMAN_CENTRIC`
- `PRODUCTS`
- `WHY_NMCYBER`
- `PRICING_PLANS`
- `FREE_RESOURCES`
- `TESTIMONIALS`
- `SERVICE_PACKAGES`, `SERVICES`
- `NAVIGATION_WITH_SUBMENUS`, `QUICK_LINKS`, `PLATFORM_LINKS`, `SOCIAL_LINKS`
- `COMPANY_INFO`
- Per-page blocks like `ABOUT_US`, `PRODUCTS_PAGE`, `SERVICES_PAGE`, `RESOURCES_PAGE`

If you're changing copy, start in `utils/constants.ts` before touching the component. Most components just map over one of these objects.

## SEO

`utils/structured-data.ts` builds the schema.org JSON-LD objects (organization data mostly), and `components/structured-data.tsx` drops it into the page as a script tag. `app/sitemap.ts` and `app/robots.ts` are the usual Next.js conventions, nothing custom there.

## Deployment

Hosted on Vercel, straight from the `main` branch. `dev` is the integration branch - feature branches get PR'd into `dev`, and `dev` gets merged into `main` when it's ready to ship. There's also a scheduled GitHub Actions workflow (`.github/workflows/sync-yml`) that mirrors this repo to a secondary GitHub remote every hour, separate from the Vercel deploy.
