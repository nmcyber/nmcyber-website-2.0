# Contributing

## Never edit files in `components/ui/` directly

`components/ui/` is the shadcn/ui primitive set (button, card, dialog, accordion, form, input, etc.). These are generated files, not hand-authored ones. **Do not open one of these files and change it.** If you need different behaviour or styling:

- Wrap it instead - build your own component in `components/shared/`, `components/landing/`, or wherever it belongs, that imports and composes the `ui/` primitive.
- If you genuinely need to change the primitive itself (a new variant, a prop shadcn doesn't give you), regenerate it through the shadcn CLI (`npx shadcn@latest add <component>`) rather than hand-editing the file, so it stays consistent with how the rest of the design system is maintained.

A PR that edits a file under `components/ui/` directly will be asked to revise.

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

- `dev` is the integration branch, and it's what's deployed to the live preview: **https://nmcyber-website-2-0.vercel.app/**. Feature and fix branches get PR'd into `dev`.
- Check the preview link after your PR merges to confirm your change actually made it in.
- `main` gets merged from `dev` when a batch of work is ready to ship to production. Don't push straight to `main` or `dev`.

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

## Document what you actually did

This matters as much as the code. Whoever reviews your PR, and whoever picks up related work after you, needs to know what changed and why without having to read every diff line by line.

- **PR description:** say plainly what you built or fixed, and call out anything you introduced that wasn't explicitly asked for (a new dependency, a new pattern, a decision you made because the ticket didn't specify one). If you're proposing something rather than shipping it (an idea for a future section, a different approach you didn't have time to finish), say that explicitly in the PR too, don't just leave it half-built with no explanation.
- **New or changed component:** update [COMPONENTS.md](./COMPONENTS.md) - this is not optional, a PR that adds a shared component without a COMPONENTS.md entry will be asked to revise.
- **New or changed section/page behaviour:** a one or two line note in the PR description is enough - "added X," "changed Y to do Z instead of what it did before" - but it needs to be there.
- **Don't let undocumented changes pile up.** If you find yourself explaining a decision in a comment thread on the PR that isn't also in the PR description or COMPONENTS.md, go add it there too. The comment thread disappears from view once the PR merges, the docs don't.
