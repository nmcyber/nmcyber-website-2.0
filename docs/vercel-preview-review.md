# Review: nmcyber-website-2-0.vercel.app

Reviewed the actual Vercel preview (`https://nmcyber-website-2-0.vercel.app/`) in a live browser - not the production `nmcyber.com` site the original analysis deck looked at, and not just reading the source. Checked rendered output, console, and network. This is a newer build than what the deck saw - some of its complaints don't apply here anymore, and a few new, more serious issues showed up that the deck never had a chance to catch.

## Critical - fix before anyone else sees this

### 1. Placeholder phone number is live on every page

The navbar shows **"+61-XXX-XXX-XXX"** literally, in the desktop nav, the mobile toggle, and the mobile menu - three separate places, same text. This comes straight from `utils/constants.ts`:

```ts
export const COMPANY_INFO = {
  ...
  phone: '+61-XXX-XXX-XXX',
};
```

and gets rendered with no fallback or guard in `components/shared/navbar.tsx` (lines 109, 128, 252). Every visitor on the live preview sees this right now. This is the single most visible bug on the site - it's in the header, above the fold, on every page.

**Fix:** put the real phone number in `COMPANY_INFO.phone`, or if it's genuinely not decided yet, hide the phone number UI entirely rather than show a placeholder.

### 2. Footer has a fake US address and a fake phone number that contradict the rest of the brand

The footer shows:
```
(+806) 000 88 99
1811 Silverside Rd,
Wilmington, DE 19810, USA
```

Both are hardcoded directly in `components/shared/footer.tsx` (lines 126, 140, 142) - not pulled from `COMPANY_INFO` at all. "1811 Silverside Rd, Wilmington, DE" is a well-known generic template address (it's the kind of address used by registered-agent/LLC-formation services and shows up in countless SaaS template footers). "(+806)" isn't a real country code either.

This sits directly below a header that shows an Australian number format and a company email on `.com.au`. A cybersecurity company showing a fake US address and a nonsense phone number is a real trust problem, not just cosmetic.

**Fix:** replace both with NMCyber's real contact details, pulled from `COMPANY_INFO` like the rest of the site, not hardcoded separately in the footer.

### 3. "Why NMCyber" section shows the wrong heading - it's copy-pasted from the Products section

Right after the Products section ("Core Cybersecurity Awareness Training Services"), there's a second section labeled "WHY NMCYBER" that displays the exact same heading text again: "Core Cybersecurity Awareness Training Services". It's not a rendering glitch, it's in the data:

```ts
// utils/constants.ts, line 358-360
export const WHY_NMCYBER = {
  title: ' Core  Cybersecurity  Awareness  Training  Services',
  subtitle: 'Why NMCYber',
  ...
```

The title field for the Why NMCyber section was never given its own copy - it's a copy-paste of the Products title, double spaces and all. Visually this reads as a broken/duplicated section to anyone landing on the page.

**Affected:** `utils/constants.ts` (`WHY_NMCYBER.title`), rendered in `components/landing/why-nmcyber.tsx`

**Fix:** write an actual heading for this section.

### 4. Pricing tiers are out of order and the naming doesn't match the price

```
CYBERSPARK (STARTER)    $9/mo
CULTURELOCK (PREMIUM)   $29/mo
HUMANSHIELD (PRO)       $19/mo
```

"Pro" costs less than "Premium" and is listed after it. Anyone scanning left to right expects price to go up as the tier name implies more value. Right now it goes $9 → $29 → $19, which reads as a mistake, not an intentional pricing ladder.

**Fix:** either re-order so price ascends left to right, or re-think the tier names so "Premium" isn't priced below "Pro." This is a pricing page, people will notice.

## Confirmed non-functional (same conclusion the original deck reached, re-verified on this build)

- **Contact form** (the "Ready to Build Your Human Firewall?" section) - the form has no submit handler, confirmed by literal `// TODO` comments still in `components/landing/contact-form.tsx`.
- **Newsletter subscribe** in the footer - input isn't controlled, button has no click handler.
- **Products section "Read All" button** - no `href`, no `onClick`.

These were already written up in [website-analysis-issues.md](./website-analysis-issues.md); confirming they're still true on this specific build, not just assumed from the deck.

## Performance and housekeeping

- **Vercel Web Analytics is wired up but not enabled.** Console shows: `[Vercel Web Analytics] Failed to load script... Be sure to enable Web Analytics for your project and deploy again.` The `<Analytics />` component from `@vercel/analytics/react` is already in `app/layout.tsx`, but the project-level toggle in the Vercel dashboard hasn't been turned on. Either enable it (Vercel dashboard → project → Analytics) or remove the component if it's not wanted, since right now every visitor's browser makes a request that's guaranteed to do nothing useful.
- **Deprecated meta tag.** Console warning: `<meta name="apple-mobile-web-app-capable">` is deprecated, should also include `<meta name="mobile-web-app-capable" content="yes">`. Small fix, in `app/layout.tsx` or wherever the meta tags are set.
- All other network requests on the homepage returned 200 - no broken images, no failed scripts beyond the two above. Font and script loading looked normal for a Next.js app.

## Devil's advocate - what I'd push back on before any of this gets filed

**The "Partners" section does exist in code - my earlier review was wrong about that.** When I first went through this codebase (before checking the live preview), I wrote in the devil's-advocate doc that no partners/logos section exists anywhere. That was wrong - it's embedded inside `components/landing/hero.tsx` (the `partnerLogos` array and "Trusted by 3,200+ partners" line), not a separate file, which is why a file search for "partners" didn't surface it clearly enough. Correcting that now: the section the deck calls out in slides 13/14 is this one. Worth renaming/extracting it to its own component if it's going to keep growing, rather than living inside the hero file.

**The "Numbers" section genuinely still doesn't exist** - checked the full rendered page top to bottom, no stats/numbers block anywhere on the homepage. That finding from the earlier devil's-advocate doc stands.

**Double-checked whether this preview actually matches the `dev` branch content** before trusting the file:line references above - pulled `PRICING_PLANS` straight from `utils/constants.ts` and it matches the rendered pricing section exactly, tier names, prices, and feature lists included. So this preview is backed by the same content as what's in this repo, the file references above are safe to act on directly.

**Not fixing the phone/address placeholders is the one item here I'd treat as blocking**, more urgent than anything in the original analysis deck. Dead links and an unfinished contact form are "things to get to." A fake US address and a visibly fake phone number on every page of a cybersecurity company's site is the kind of thing a visitor screenshots and asks about.
