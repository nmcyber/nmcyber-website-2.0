# NMCyber Website

NMCyber's marketing site.

Built with **Next.js**, **Tailwind CSS 4**, and **shadcn/ui** on Radix. Uses **Bun** for package management and script execution, **Biome** for linting and formatting.

## Live preview

The most up to date version of the site is deployed here:

**https://nmcyber-website-2-0.vercel.app/**

This is where `dev` gets previewed once a PR is reviewed and merged. Use this link to check your work made it in, not the old production domain.

## Quick start

```bash
bun install
bun run dev
```

Open `http://localhost:3000`.

## Documentation

Full documentation is in [/docs](./docs):

- [Architecture](./docs/ARCHITECTURE.md)
- [Contributing](./docs/CONTRIBUTING.md)
- [Components](./docs/COMPONENTS.md)

## Scripts

| Script | Description |
|---|---|
| `bun run dev` | Start the dev server |
| `bun run build` | Production build |
| `bun run start` | Run the production build |
| `bun run check` | Biome check |
| `bun run fix` | Biome check with auto-fix |
| `bun run format` | Biome format, write |
| `bun run lint` | Biome lint |
| `bun run type-check` | TypeScript check, no emit |

Both `check` and `type-check` run automatically on commit via husky. Run them yourself before pushing so a failing hook isn't a surprise.
