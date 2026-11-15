# Component Guide

> **Search before you create.** Check the folders below before adding a new file. If something close already exists, add a prop to it instead of making a near-duplicate.

---

## Folder structure

```
components/
├── ui/            # shadcn primitives - button, card, dialog, accordion, form, input, etc.
│                   # Don't hand edit these, regenerate through the shadcn CLI instead.
├── shared/        # Used site-wide: navbar.tsx, footer.tsx, blur-element.tsx, not-found.tsx
├── wrapper/       # page-wrapper.tsx - the page shell/layout wrapper
├── landing/       # Homepage-only sections: hero, products, price-plans, testimonials,
│                   # why-nmcyber, why-human-centric, free-resources, contact-form
├── about-us/      # About page specific
├── academy/       # Academy page specific
├── services/      # Services page specific
├── resources/      # Resources page specific
└── structured-data.tsx   # JSON-LD helper, used in page.tsx files
```

Products page has its own co-located components instead of a shared folder:

```
app/products/
└── _components/   # Only used within the products page
```

If a future page needs the same pattern, follow that example rather than putting page-only pieces into `components/`.

## No barrel file, no required header

Unlike some of our other projects, this repo doesn't have a `components/index.ts` master barrel and components don't require a JSDoc author header. Import directly from the file:

```tsx
// This is how it's done here
import Hero from '@/components/landing/hero';
import { Button } from '@/components/ui/button';
```

Most landing and page-specific components use a default export (`export default function Hero()`), while the shadcn `ui/` primitives use named exports (`export function Button()`). Match whichever pattern the folder you're in already uses.

## Where a new component goes

| Situation | Location |
|---|---|
| Used site-wide (nav, footer, etc.) | `components/shared/` |
| Only on the homepage | `components/landing/` |
| Only on one other page | `components/<page-name>/`, or `app/<page>/_components/` if it's truly one-off |
| A shadcn primitive you don't have yet | Add it through `npx shadcn@latest add <name>`, lands in `components/ui/` |

## Adding a new component, step by step

1. Check the folder above - does something close already exist?
2. Pick the right location from the table above.
3. Pull any copy it needs into `utils/constants.ts` first, as its own exported object. Don't hardcode strings in the component if there's any chance it'll need to change later - follow the pattern of `HERO_CONTENT`, `WHY_NMCYBER`, etc.
4. Write the component, import copy from `utils/constants.ts`.
5. Import it directly where it's used - no barrel to update.
6. If it's a new shared or landing component, add a short entry below so the next person doesn't duplicate it.

## Current components (quick reference)

### `components/shared/`
- `navbar.tsx` - site nav, pulls from `NAVIGATION_WITH_SUBMENUS`, `SOCIAL_LINKS`
- `footer.tsx` - site footer, pulls from `QUICK_LINKS`, `PLATFORM_LINKS`
- `blur-element.tsx` - decorative background blur used behind hero/sections, see below for props
- `not-found.tsx` - shared 404 content block

#### `BlurElement` usage

```tsx
import BlurElement from '@/components/shared/blur-element';

<BlurElement
  position="left"
  positionValue="10"
  size="200px"
  blur="60px"
  opacity={0.7}
  zIndex={-1}
  className="custom-blur"
/>
```

Props:
- `position`: `'left' | 'top' | 'right' | 'bottom' | 'inset'` (default `'inset'`)
- `positionValue`: string (default `'0'`)
- `zIndex`: number (default `0`)
- `opacity`: number (default `0.5`)
- `size`: string (default `'100px'`)
- `blur`: string (default `'40px'`)
- `className`: string (optional)

Renders an absolutely positioned, blurred, rounded div with a gradient background. Use it anywhere you need a soft background glow.

### `components/landing/`
- `hero.tsx` - homepage hero, star rating, CTA
- `products.tsx` - product lineup section
- `why-human-centric.tsx`, `why-nmcyber.tsx` - value prop sections
- `price-plans.tsx` - pricing section, pulls from `PRICING_PLANS`
- `testimonials.tsx` - pulls from `TESTIMONIALS`
- `free-resources.tsx` - pulls from `FREE_RESOURCES`
- `contact-form.tsx` - uses react-hook-form, pulls field config from `CONTACT_FORM`

### `components/wrapper/`
- `page-wrapper.tsx` - shared page shell, used by most top-level pages

### `components/ui/`
Standard shadcn set: `accordion`, `badge`, `button`, `card`, `dialog`, `form`, `input`, `label`, `sonner` (toast), `table`, `textarea`, `toast`, `toggle`. Plus a couple of one-off pieces (`SpotlightCard.jsx` and its CSS) that predate the shadcn setup - leave those as they are unless you're specifically replacing them.
