# Devil's Advocate: Website Analysis Deck vs Current Code

Went through the pptx slide by slide again and checked each claim against what's actually in the `dev` branch right now. A few things don't line up, and a couple of sections the deck talks about don't exist in this codebase at all. Flagging these before anything gets turned into a GitHub issue, so we don't file tickets against code that's already changed or against sections that live somewhere else.

## Things that look already fixed in dev

**Platform/Academy duplicate link.** The deck says these two nav items point to the same thing and one should be dropped. Checked `utils/constants.ts` - there's no "Platform" entry in `NAVIGATION_WITH_SUBMENUS` anymore, only "Academy." Looks like this was already resolved. Worth a quick look at the live site to confirm, but nothing to fix in code here.

**Single award already in the footer.** The deck's two options were: one award goes in the footer, multiple awards get their own section. `components/shared/footer.tsx` already has an `AwardsBadge` component rendering `/images/31st-Belmont-awards-2024.svg`. This already matches option one. No action needed unless there's a second award coming that would push this into "needs its own section" territory.

**Resources now has a dedicated page.** The deck says there's no dedicated section for resources, just dead links in the nav dropdown. That's no longer true structurally - `app/resources/page.tsx` exists, backed by `components/resources/resources-hero.tsx`, `available-resources.tsx`, and `how-to-use-resources.tsx`. The page exists. What's still missing: `available-resources.tsx` has no actual `href`/download links in it at all, so the section is built but the resources themselves aren't wired up yet. This changes the issue from "build a resources section" to "finish wiring up the resource links on the section that already exists."

**Contact nav link.** Deck says clicking "Contact Us" in the nav is a dead link and should go to the footer. In `NAVIGATION_WITH_SUBMENUS`, `Contact` already points to `/contact-us#contact`. Worth confirming on the live site, but the current dev data already has this wired to an anchor.

## Things confirmed still broken (verified in code, not just assumed from the deck)

**Contact form.** `components/landing/contact-form.tsx` line 11-13 has the literal comments:
```
// TODO: Create a form, recommend using shadcn forms
// TODO: Validate the form inputs using zod and full typescript types
// TODO: Create submit function that sends the email address only --> Console.log to see the output
```
The `<form>` has no `onSubmit`, no `action`. This isn't a guess, the code says outright it isn't built yet.

**Newsletter subscribe.** `components/shared/footer.tsx`, the `NewsletterForm` function - the email `Input` isn't controlled (no `value`/`onChange`), and the submit `Button` has no `onClick`. Pure UI shell, confirmed non-functional.

**Social links.** `SOCIAL_LINKS` in `utils/constants.ts` - Facebook, X/Twitter, and Instagram all point to the generic homepages (`facebook.com`, `x.com`, `instagram.com`), not NMCyber's actual profiles. Only LinkedIn is real (`linkedin.com/company/nmcyber`).

**Products homepage CTA.** `components/landing/products.tsx` - the "Read All" button at the bottom is a plain `<Button>` with no `onClick` and no `href`. Clicking it does nothing, matches the deck's complaint about the "View more" button (naming's changed since the deck was written, but the dead-click behavior is the same).

**Homepage products section only shows 4 cards.** `PRODUCTS.services` in `utils/constants.ts` has exactly 4 entries. Matches the "4/6" complaint, though the section title in code is now "Core Cybersecurity Awareness Training Services," not "Products" or "Solutions" like the deck describes - naming has shifted again since the audit.

**Why Us section is still an accordion.** `components/landing/why-nmcyber.tsx` imports and uses `Accordion`/`AccordionItem` from `components/ui/accordion`. Confirms the "harmonica layout" the deck wants swapped for cards.

## Things the deck describes that don't exist anywhere in this codebase

**Partners section - correction, this does exist.** Originally wrote here that no partners/logos section exists anywhere in the codebase. That was wrong - a live preview check (see [vercel-preview-review.md](./vercel-preview-review.md)) showed it rendering right after the hero, and it turned out to be embedded inside `components/landing/hero.tsx` (the `partnerLogos` array and "Trusted by 3,200+ partners" line) and `utils/constants.ts` (`HERO_CONTENT.partners`), not a separate file - that's why the earlier file search missed it. If this section keeps growing it's probably worth pulling out into its own component rather than leaving it inside the hero file.

**Numbers/stats section.** Same situation - slides 16 and 17 reference a numbers section with an award icon that needs removing. No matching component exists in `components/landing/` or elsewhere. Same question applies: does this exist somewhere we haven't looked, or is it still unbuilt?

**Hero section, dev version vs current.** Slides 11 and 12 describe two different states of the hero - slide 11 looks like the live production hero (says the CTA position is "perfect"), slide 12 is a separate "dev version" with different complaints (CTA cutting off, subtitle too long). The current `components/landing/hero.tsx` doesn't visibly show either state without actually running the app - worth taking a screenshot of what's live now before writing the issue, since the deck itself is describing two different snapshots in time.

## Direct contradiction inside the deck itself

Slide 12 says the hero's "CTA accent color is great" and lists it as a positive. Slide 19's TO DO LIST then says "Change CTA Accent Color." These can't both be right as written. Worth going back to whoever wrote the deck to confirm which one is current before filing an issue that says "change the accent color" when another slide in the same deck says to keep it.

## Discrepancy in the footer legal links

The deck (slide 7) describes three separate dead links: Privacy Policy, Terms of Service, and Site Map. The current footer (`components/shared/footer.tsx`) only has one link, "Terms & Policies," pointing to `/terms-and-policies`, which doesn't exist as a route. So either:
- the three were already consolidated into one link and the deck is describing an older version, or
- the one link is supposed to expand back into three pages.

Matters for scoping the issue - "write content for one combined terms page" is a different task than "build three separate legal pages."

## Bottom line

Before filing these as GitHub issues, worth doing two things:
1. Confirm against the actual live production URL (not just `dev` branch code) which of the "already fixed" items are genuinely resolved there too - dev and prod can disagree.
2. Get clarity from whoever has the Partners/Numbers section mockups or preview link, since there's nothing in this repo to attach those two issues to yet.

Everything else below is grounded in something concrete, either a code comment, a missing handler, or a component that doesn't exist, not just a restatement of the slide text.
