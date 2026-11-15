# NMCyber Website

NMCyber's marketing site.

Built with **Next.js**, **Tailwind CSS 4**, and **shadcn/ui** on Radix. Uses **Bun** for package management and script execution, **Biome** for linting and formatting.

## Live preview

The most up to date version of the site is deployed here:

**https://nmcyber-website-2-0.vercel.app/**

This is where `dev` gets previewed once a PR is reviewed and merged. Use this link to check your work made it in, not the old production domain.

## First time setup

If this is your first time cloning this repo, do this once before anything else.

### Option A - SSH with an alias (recommended if you work with more than one GitHub account)

This is the setup worth using if you'll ever have more than one GitHub account on your machine (a personal one, a work one, etc) - it lets git know which identity to use for which repo automatically, instead of you having to think about it every time.

1. **Generate a dedicated SSH key for this account:**
   ```bash
   ssh-keygen -t ed25519 -C "your-email@example.com" -f ~/.ssh/id_ed25519_nmcyber
   ```
   Give it a passphrase if you want, or leave it blank.

2. **Add the public key to your GitHub account:** copy the contents of `~/.ssh/id_ed25519_nmcyber.pub`, then on GitHub go to Settings -> SSH and GPG keys -> New SSH key, paste it in.

3. **Add an alias for this key in `~/.ssh/config`** (create the file if it doesn't exist):
   ```
   Host github-nmcyber
       HostName github.com
       User git
       IdentityFile ~/.ssh/id_ed25519_nmcyber
   ```

4. **Clone using the alias instead of `github.com`:**
   ```bash
   git clone git@github-nmcyber:YeborianBusiness/website.git
   ```
   Notice it's `github-nmcyber` in the clone URL, not `github.com` - that's what tells git to use this specific key for this specific repo. If you already cloned it before setting this up, fix the remote instead:
   ```bash
   git remote set-url origin git@github-nmcyber:YeborianBusiness/website.git
   ```

This way, if you also have a personal GitHub account or another work account set up with its own alias (`github-personal`, `github-otherteam`, whatever you call it), each repo you clone just uses whichever alias matches the account it belongs to, and you never get stuck pushing as the wrong person.

### Option B - simpler: HTTPS with the GitHub CLI

If the SSH setup above feels like too much right now, this works fine too and takes less setup:

1. Install the [GitHub CLI](https://cli.github.com/) if you don't have it.
2. Run `gh auth login` and follow the prompts (choose HTTPS when asked).
3. Clone normally:
   ```bash
   git clone https://github.com/YeborianBusiness/website.git
   ```

`gh` handles authentication for you after that, no key management needed. The tradeoff is this is per-machine, not per-repo - if you only ever use one GitHub account on this machine, that's not a problem.

## Quick start

```bash
bun install
bun run dev
```

Open `http://localhost:3000`.

## Branch rules

- **Always open PRs against `dev`.** Never `main`.
- **Never commit or push directly to `main` or `dev`.** Every change goes through a feature branch and a PR, even a small one.
- Branch off `dev`, not `main`, when starting new work.
- See [CONTRIBUTING.md](./docs/CONTRIBUTING.md) for branch naming, commit message style, and the full PR checklist.

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
