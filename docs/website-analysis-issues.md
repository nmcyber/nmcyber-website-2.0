# Website Analysis - Issues to File

Source: Website_Analuze.pptx, cross-checked against the current `dev` branch. See [website-analysis-devils-advocate.md](./website-analysis-devils-advocate.md) for the full review notes - a few of the deck's findings turned out to already be fixed, and two sections it describes don't exist in this codebase yet. Both are called out below.

Each heading below is meant to become one GitHub issue. Copy the heading in as the title, the body as the description.

---

## Navbar - Products dropdown links go nowhere

The Products dropdown in the navbar lists six items: Cybersecurity Awareness, Cybersecurity Readiness, Candidate Screening, Content Creation, Risk Assessments, Industry Training. None of them resolve to a working destination.

**Affected files:** `utils/constants.ts` (`NAVIGATION_WITH_SUBMENUS`), `components/shared/navbar.tsx`

**To do:** give each dropdown item a real `href`, either to a section anchor or a dedicated page, matching whatever the actual product/service structure ends up being (see the Products section issue below, since the two need to agree with each other).

---

## Homepage products section is incomplete and the CTA button does nothing

`components/landing/products.tsx` renders from `PRODUCTS.services` in `utils/constants.ts`, which currently has exactly 4 entries. The navbar dropdown lists 6 different named items, so there's a mismatch between what the nav promises and what the section shows. The cards themselves have no "read more" per card, and the bottom "Read All" button (`components/landing/products.tsx`) is a plain `<Button>` with no `onClick` and no `href` - clicking it is a no-op, confirmed in code, not just by clicking around.

Naming is also inconsistent: the navbar calls this "Products," the section itself is titled "Core Cybersecurity Awareness Training Services" in code, and the deck notes it used to say "Solutions." Pick one name and use it everywhere.

**Affected files:** `components/landing/products.tsx`, `utils/constants.ts` (`PRODUCTS`)

**To do:** decide on final product/service list and naming, bring the homepage section up to the full count, write real descriptive copy per card, and wire the CTA button to an actual destination.

---

## Resources section exists but has no working links yet

Unlike what the deck describes (no dedicated section at all), there's already a real page here: `app/resources/page.tsx`, built from `components/resources/resources-hero.tsx`, `available-resources.tsx`, and `how-to-use-resources.tsx`. The gap is narrower than the original deck suggests - `available-resources.tsx` currently has no `href` or download links on any of the listed resources, so the section is structurally built but nothing in it is clickable yet.

**Affected files:** `components/resources/available-resources.tsx`

**To do:** wire real links (downloads, external pages, whatever the actual resources are) into the existing section. This is a smaller task than "build the section," since the section's already there.

---

## Contact Us navbar link - verify against production

`NAVIGATION_WITH_SUBMENUS` in `utils/constants.ts` already points "Contact" to `/contact-us#contact`, which looks correct. The deck describes this as a dead link, which suggests the deck was reviewing an older build, or the live production site hasn't caught up with `dev` yet.

**To do:** confirm on the actual live site (not just this branch) whether this is still broken. If it's already fine in production too, close this one without any code change.

---

## Contact form doesn't actually submit anything

`components/landing/contact-form.tsx` has this sitting right in the code, lines 11-13:

```
// TODO: Create a form, recommend using shadcn forms
// TODO: Validate the form inputs using zod and full typescript types
// TODO: Create submit function that sends the email address only --> Console.log to see the output
```

The `<form>` element has no `onSubmit` and no `action`. There's also no email-sending dependency anywhere in `package.json`, so a confirmation email isn't a small addition, it needs an actual service wired in (something like Resend, or an API route that sends through whatever provider we pick).

On top of the functional gap: the send button's color doesn't stand out enough, and there's an awkward empty space in the layout around the form that needs filling.

**Affected files:** `components/landing/contact-form.tsx`

**To do:**
1. Build the actual submit handler (validate with zod, following the existing TODO comments as the starting point).
2. Pick and wire up an email service so a confirmation email actually goes out.
3. Fix the button color and the empty space in the layout.

---

## Newsletter subscribe form in the footer doesn't work

`components/shared/footer.tsx`, the `NewsletterForm` function: the email `Input` has no `value`/`onChange`, and the submit `Button` has no `onClick`. It's laid out correctly but has zero behavior behind it.

**Affected files:** `components/shared/footer.tsx`

**To do:** wire up actual subscribe functionality - needs a destination (mailing list provider, or a simple API route that stores the email) decided first, then the handler built against it.

---

## Footer social links point to generic homepages, not NMCyber's actual profiles

`SOCIAL_LINKS` in `utils/constants.ts`: Facebook goes to `facebook.com`, Twitter/X to `x.com`, Instagram to `instagram.com` - none of these are NMCyber's actual pages. LinkedIn is the one exception and already points to the real company page.

**Affected files:** `utils/constants.ts` (`SOCIAL_LINKS`)

**To do:** get NMCyber's real Facebook, X, and Instagram URLs and swap them in. If any of these platforms genuinely don't have an NMCyber presence yet, drop that icon rather than link to a placeholder.

---

## Footer legal links - scope needs deciding before filing

The deck describes three separate dead links: Privacy Policy, Terms of Service, Site Map. The current footer (`components/shared/footer.tsx`) only has one link, "Terms & Policies," pointing to `/terms-and-policies`, which isn't a real route (no matching folder under `app/`).

This needs a decision before it becomes an issue: are we building one combined terms page, or splitting it back into three separate pages? Those are different amounts of work.

**Affected files:** `components/shared/footer.tsx`, needs a new route under `app/`

**To do:** decide on one page vs three, write the actual legal content, build the route(s), link them up.

---

## Mobile design and responsiveness

General complaint from the deck: mobile layout doesn't really exist yet, and responsiveness across breakpoints isn't consistent. This is cross-cutting rather than tied to one file - every component under `components/` and `app/` uses Tailwind responsive classes inconsistently (some have `sm:`/`md:` variants, some don't).

**To do:** treat this as a pass across the whole site rather than a single fix. Probably worth doing page by page as other sections get redesigned, rather than as one giant ticket.

---

## Google Lighthouse score

Current baseline Lighthouse scores (performance, accessibility, best practices, SEO) are being used as the benchmark for the redesign work.

**To do:** run a fresh Lighthouse audit against the live site to get the actual current numbers, then track against a target of 80+ across all four categories as redesign work lands.

---

## Google Search Console setup

Need to confirm whether the live domain is already registered in Google Search Console.

**To do:** check GSC directly. If the domain isn't there yet, add it and get SEO tracking actually running. This isn't a code change, it's an account/config task.

---

## Hero section cleanup

Two different states get described in the deck - the current production hero (CTA position described as good) and a separate "dev version" (CTA buttons getting cut off, subtitle too long). Worth taking a fresh look at what's actually live and what's in `components/landing/hero.tsx` right now before writing the real ticket, since the deck itself is comparing two different snapshots in time.

Known items either way:
- Subtitle is too long / adds too much cognitive load - should come down to roughly two lines.
- CTA buttons should not be visually cut off on any screen size.
- Centered layout is a positive and should stay.
- **Accent color - conflicting notes in the source deck itself.** One slide says the CTA accent color is great and should stay, a later slide's to-do list says to change it. Needs a decision before this goes in as a ticket, otherwise someone will "fix" something that didn't need fixing.

**Affected files:** `components/landing/hero.tsx`

---

## Partners section exists, confirmed working

Correction from an earlier pass: this section does exist, it's just embedded inside `components/landing/hero.tsx` (the `partnerLogos` array) and `utils/constants.ts` (`HERO_CONTENT.partners`) rather than its own file. Confirmed rendering correctly on the live Vercel preview, right after the hero, matching what the deck describes as looking good in this position. Not an issue to file - if anything, worth a follow-up ticket to extract it into its own component for maintainability, but that's a nice-to-have, not a bug.

---

## Numbers/stats section - needs clarification before filing

Same situation as Partners - the deck describes a numbers/stats section (three key numbers, plus an award icon that should be removed) as a "dev version," but nothing matching this exists in `components/landing/` or anywhere else in this repo.

**Before this becomes an issue:** same question - need to locate where this section currently lives before writing a ticket against it.

---

## Why Us section still uses an accordion, should be cards

`components/landing/why-nmcyber.tsx` imports and uses `Accordion`/`AccordionItem`/`AccordionTrigger`/`AccordionContent` from `components/ui/accordion`. The deck wants this swapped to a card layout, one clear statement per card, overall more concise than the current accordion copy.

**Affected files:** `components/landing/why-nmcyber.tsx`, `utils/constants.ts` (`WHY_NMCYBER.accordionItems`)

**To do:** redesign as cards instead of an accordion, tighten the copy to one statement per card.

---

## Awards section - likely already handled, confirm before closing

The deck's two options were: one award goes in the footer, multiple awards get a dedicated section. `components/shared/footer.tsx` already renders an `AwardsBadge` with the Belmont award SVG, matching the "one award" path.

**To do:** just confirm there's only the one award to show. If a second one is coming, this needs to move into its own section instead.

---

## Email marketing for free resources and newsletter

No email capture flow exists for either the free-resources offer or the general newsletter subscribe - this is the same underlying gap as the newsletter subscribe issue above, just scoped to the marketing/lead-gen angle (e.g. does signing up for a free resource also subscribe someone to a list, welcome email, etc).

**To do:** decide on an email marketing tool/provider, then build both flows (resource gate + newsletter) against it. Worth bundling with the newsletter subscribe fix above rather than doing twice.

---

## Suggested timeline (for reference, not an individual issue)

| Week | Focus |
|---|---|
| 1 | Discovery, brainstorming, analysis |
| 2 | Fix dead navbar links, finish Resources section, fix Hero section |
| 3 | Why Us section redesign |
| 4 | Contact form fix, make it fully functional |
| 5 | Email marketing for subscribe + free resources |
| 6 | Fix dead footer links |
| 7 | Mobile redesign and responsiveness pass |
| 8 | Google Lighthouse audit and improvements |
| 9 | Google Search Console and SEO setup |
| 10 | Functionality and UI testing across screen sizes |
| 11 | Review pass, extra fixes and polish |
| 12 | Handover |
