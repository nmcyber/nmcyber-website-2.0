# Email to interns: pull dev before you branch or push

> Created: 2026-11-23 18:20 · Last updated: 2026-11-23 18:20 · Session: https://claude.ai/code/session_0132u1ExiJ35yaBMoU43PsR5

Draft only. Not sent.

**To:** (interns and contributors on YeborianBusiness/website)
**Subject:** Always pull dev first, and a new check on your PRs

Hi team,

Quick one that will save all of us time.

A few PRs lately have come in behind `dev`, or stacked on top of another unmerged branch. When that happens the review ends up being about code that has already changed underneath you, and we hit conflicts or broken links that were already fixed. It's an easy habit to build, so here is what I'd like everyone to do from now on.

**Before you start any new work**
```bash
git checkout dev
git pull origin dev
git checkout -b feat/your-branch-name
```
Always branch from a freshly pulled `dev`. Please don't branch from another feature branch, because your PR then carries someone else's unmerged commits.

**Before you push to your PR**
```bash
git fetch origin
git merge origin/dev
```
Fix any conflicts, run the app and the checks, then push.

**What's changing on our side**
Every PR into `dev` now gets an automatic check called "Branch is up to date with dev". If your branch is behind, the check fails and a comment appears on your PR. You can fix it two ways:
1. Click the **Update branch** button at the bottom of the PR. GitHub merges `dev` into your branch for you.
2. Or run the two commands above in your terminal and push.

The check runs again when you push, and the comment updates by itself. I won't review a PR until it's green, so it's worth doing early.

If a merge conflict looks scary, don't guess. Message me and we'll go through it together. Nobody gets told off for asking.

Thanks,
Alex
