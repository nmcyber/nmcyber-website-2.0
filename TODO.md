# TODO

Created: 2026-11-15 20:15 · Last updated: 2026-11-16 09:30 · Session: https://claude.ai/code/session_0132u1EwxYmNs5GHweaLSwMY

## Repo access — add collaborators (not done yet, waiting on go-ahead)

Add these people to `YeborianBusiness/website` with permissions to push/create branches and resolve git issues assigned to them. Do not add until explicitly told to.

- **Alden Junus** — GitHub: `aussenseiter` (email: aldenjunus@gmail.com)
- **Petar Lekoksy** — GitHub: `LegoDrifter` (https://github.com/LegoDrifter)
- **Victor Florencio** — GitHub: `VictorTurraF` (https://github.com/VictorTurraF)

Decided: add as **Write**-level collaborators (not Admin/Maintain), direct to the repo rather than via an org team (team not set up yet).

### Branch protection — checked, not available on current plan

Checked `main`/`dev` branch protection directly against the GitHub API. `YeborianBusiness` is on the free org plan and the repo is private — both the branch-protection API and the newer rulesets API return:

> "Upgrade to GitHub Pro or make this repository public to enable this feature."

So PR-required rules, required approvals, and force-push blocking on `main`/`dev` are not available right now without either upgrading the org (~$4/seat/month for GitHub Team) or making the repo public (not worth the tradeoff for source exposure).

Decision for now: skip technical enforcement, rely on Write-level access + convention. Collaborators branch off `dev`, open PRs, don't push directly to `main`/`dev`. Revisit branch protection if the org ever upgrades off the free plan.
