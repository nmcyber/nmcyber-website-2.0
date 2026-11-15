# Contributing

## Branch naming

```
feat/<short-description>       # New feature
fix/<short-description>        # Bug fix
chore/<short-description>      # Dependency updates, config, housekeeping
refactor/<short-description>   # Code cleanup, no behaviour change
docs/<short-description>       # Documentation only
```

Looking at the existing branches, naming hasn't always been strict about this (there's a plain `refractor` branch that's been reused across a few PRs). Going forward, stick to the pattern above so it's clear what a branch is for before opening it.

**Examples:**
- `feat/products-page`
- `fix/navbar-overflow`
- `docs/component-guide`

## Commit messages

Follow [Conventional Commits](https://www.conventionalcommits.org/) where you can:

```
<type>: <short summary>

[optional body]
```

**Types:** `feat`, `fix`, `chore`, `refactor`, `docs`

**Examples:**
```
fix: navbar wrapper adjustment
feat: add resources page and update font usage sitewide
chore: clean-up; overflow bug
```

## Branch flow

- `main` is production, deployed on Vercel.
- `dev` is the integration branch. Feature and fix branches get PR'd into `dev`.
- `dev` gets merged into `main` when a batch of work is ready to ship.
- Don't push straight to `main`.

## Before opening a PR

```bash
bun run check       # biome check - must pass with 0 errors
bun run type-check   # tsc --noEmit - must pass with 0 errors
```

Both run automatically on commit through husky, but run them yourself before pushing so you're not surprised by a failing hook mid-commit.

## Adding or changing content

Almost everything on the site is driven by `utils/constants.ts`. If you're changing copy, update it there first rather than hardcoding text inside a component - see [ARCHITECTURE.md](./ARCHITECTURE.md#content-model) for how that file is organized.

## Creating a new component

### Step 1 - search first

Check [COMPONENTS.md](./COMPONENTS.md) and look through `components/shared/` and `components/landing/` before writing something new. If a close match already exists, extend it with a prop rather than duplicating it.

### Step 2 - decide where it lives

| Situation | Location |
|---|---|
| Used site-wide | `components/shared/` |
| Only on the homepage | `components/landing/` |
| Only on one other page | `components/<page-name>/` or `app/<page>/_components/` |

### Step 3 - build it

- Pull any text into `utils/constants.ts` as its own export, don't hardcode strings.
- Default export for page/landing components, named export for anything that goes in `components/ui/`, matching whatever the rest of that folder already does.
- No barrel file in this repo, so import components directly from their path.

### Step 4 - document it

Add a short entry to [COMPONENTS.md](./COMPONENTS.md) so the next person doesn't rebuild the same thing.

## Adding a new page

1. Create `app/<page-name>/page.tsx`.
2. Add a content block for it in `utils/constants.ts` (follow the pattern of `ABOUT_US`, `SERVICES_PAGE`, etc.).
3. Build out any page-only components under `app/<page-name>/_components/` if they're not reused anywhere else.
4. Wire it into the nav if it needs to be reachable (`NAVIGATION_WITH_SUBMENUS` in `utils/constants.ts`).
5. Check `app/sitemap.ts` - make sure the new route is picked up there if it should be indexed.
