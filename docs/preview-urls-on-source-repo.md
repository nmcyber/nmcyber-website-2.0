# Preview URLs on YeborianBusiness/website PRs

Created: 2026-11-16 13:26 · Last updated: 2026-11-16 13:32 · Session: https://claude.ai/code/session_0132u1EwXbaxf5dUdcYVmm75, https://claude.ai/code/session_0132u1EwXbaxf5dUdcYVmm75

## Problem

Vercel is connected via its GitHub App to `nmcyber/nmcyber-website-2.0`, a one-way mirror of
this repo (`YeborianBusiness/website`), set up to work around the GitHub free org plan /
Vercel Hobby plan limitation on deploying org-owned repos directly. Because of that, Vercel's
automatic PR-comment preview links only ever show up on PRs opened against the mirror — never
on PRs opened against this repo, which is where contributors actually work and where Alex
reviews.

The existing `dev-sync.yml` workflow (`.github/workflows/dev-sync.yml`) mirrors on push to
`dev`, hourly cron, and manual dispatch. It is unrelated to this plan and is left untouched —
it keeps doing its job of getting `dev`/`main` content onto the repo Vercel's GitHub App
actually watches for production deploys.

## Decision: deploy this repo directly via the Vercel CLI, bypassing the mirror for previews

Rejected the earlier approach (broadening `dev-sync.yml`'s triggers + a polling workflow that
waits for the GitHub-App-triggered deployment on the mirror). A devil's-advocate review of that
version found it added meaningful complexity (branch-collision handling, a sync-then-poll race
condition, `workflow_run` plumbing to recover PR context, a new `pull_request` vs
`pull_request_target` secret-exposure question) to solve a problem the Vercel CLI already
solves directly, with less moving parts.

Confirmed workable via the `vercel:vercel-cli` skill (CI/CD Automation + Deployment references):
`vercel deploy` can run from any repo/CI environment regardless of which repo the project's
GitHub App integration is wired to — it talks to the Vercel API directly, not through Git push
events. Non-interactive project linking in CI uses `VERCEL_ORG_ID` / `VERCEL_PROJECT_ID` env
vars (no `.vercel/` folder needs to be committed), and the deploy URL comes back on stdout in
the same step — no polling required.

Known IDs for this project (from Vercel MCP):
- `VERCEL_ORG_ID` = `team_lv7BXA0Vy7oj4vJaoUiJFHJl` (team: nmcyber's projects)
- `VERCEL_PROJECT_ID` = `prj_18tUOuCBdyTHwgiS0Y7Uoe4M1PEV` (nmcyber-website-2-0)

## Fork/collaborator status (resolved)

Confirmed: `YeborianBusiness/website` only accepts PRs from collaborators with push access, not
public forks. This removes the `pull_request` vs `pull_request_target` secret-exposure concern
the review raised — `pull_request` already receives repo secrets normally for every contributor
who can open a PR here, since none of them are fork-originated. No special-casing needed for
that risk. If the repo's PR policy ever changes to accept forks, this decision must be
revisited before merging this workflow as-is.

## Proposed approach

One new workflow in this repo, e.g. `.github/workflows/preview-deploy.yml`:

1. **Trigger**: `pull_request` (`opened`, `synchronize`, `reopened`) — collaborator-only PRs
   as confirmed above, so no fork-secrets concern.
2. **Steps**:
   - Checkout the PR head ref.
   - `npm i -g vercel`
   - `vercel pull --yes --environment=preview --token=$VERCEL_TOKEN`
   - `vercel build --token=$VERCEL_TOKEN`
   - `vercel deploy --prebuilt --token=$VERCEL_TOKEN` → capture stdout as the preview URL
   - Post/update a PR comment with the URL, using a hidden marker so repeated pushes to the
     same PR edit the existing comment instead of spamming new ones.
3. **Concurrency guard**: `concurrency: { group: preview-${{ github.event.pull_request.number }}, cancel-in-progress: true }`
   so an in-flight deploy from an older push doesn't finish after a newer one and overwrite the
   comment with a stale URL.
4. **Secrets/variables needed in this repo** (`YeborianBusiness/website` → Settings → Secrets
   and variables → Actions):
   - `VERCEL_TOKEN` (secret) — a Vercel API token scoped to the `nmcyber's projects` team.
   - `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID` (can be plain repo variables, not secret — they're
     identifiers, not credentials).
5. **Permissions**: job needs `pull-requests: write` to post/edit the PR comment — set
   explicitly in the workflow's `permissions:` block rather than relying on the repo's default
   `GITHUB_TOKEN` permission setting, which may default to read-only.

## Free-plan constraints to watch

Both the GitHub org and the Vercel team are on free tiers. Verified against the live accounts
on 2026-11-16:

- **GitHub Actions usage (confirmed, live).** `YeborianBusiness` org billing page: $0 of $12.00
  included Actions compute used for the Nov 1–30, 2026 cycle; 0 GB of 0.5 GB included Actions
  storage used; limits reset in 15 days. `gh api orgs/YeborianBusiness/settings/billing/actions`
  404s and `actions/permissions` 403s for the `Xanderyeng` account even with `admin:org` scope,
  because that account's org role is `member`, not owner — the dashboard figures above (owner
  access) are the only way to check this going forward, not the API, unless an owner-level PAT
  is used. Current headroom is effectively unused — a Next.js build plus `vercel deploy` per PR
  push is low risk this cycle, but re-check the dashboard periodically once usage patterns are
  established, since this repo already runs `quality.yml` and `dev-sync.yml` on every push/PR
  and the new workflow adds to that same pool.
- **Vercel Hobby plan (confirmed, indirectly).** `list_billing_charges` on the team returned
  `costs_not_found` — no usage-based billing exists for this team, consistent with Hobby/free
  (not a paid Pro/Enterprise plan with metered costs). Vercel doesn't expose Hobby's numeric
  build-minute/concurrency limits via API; those live on the team's dashboard billing page only.
  Not independently re-verified beyond confirming the plan tier itself.
- **Trigger volume.** Frequent `synchronize` events (every push to an open PR) multiply deploys
  and Actions runs. Given the comfortable Actions headroom above, triggering on every
  `synchronize` is fine to start with; revisit only if usage climbs noticeably in a later
  billing cycle.
- **Token scope.** Use a `VERCEL_TOKEN` scoped to only the `nmcyber's projects` team, not a
  personal account-wide token, to limit blast radius if the secret ever leaks via a
  misconfigured workflow or dependency.

## Out of scope

- Changing which repo Vercel's GitHub App is connected to (still ruled out — that's the GitHub
  free org / Vercel Hobby limitation this mirror exists to avoid for production deploys).
- Changing the mirror strategy (`dev-sync.yml` stays as-is; it handles `dev`/`main` → mirror for
  production only, and this plan doesn't touch it).
- Deploying PR previews to production or promoting them automatically — these stay preview-only
  deployments, reviewed and merged normally through `dev`.

## Open items before implementation

- Create the scoped `VERCEL_TOKEN`, add it plus `VERCEL_ORG_ID`/`VERCEL_PROJECT_ID` to repo
  secrets/variables.
- Draft the exact workflow YAML for review before merging.
