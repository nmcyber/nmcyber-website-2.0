# Website Analysis - Issues to File

Source: Website_Analuze.pptx. Grouped by area, each one is meant to become its own issue.

## Navbar

**Navbar - Products links are dead**
Products dropdown has six links: Cybersecurity Awareness, Cybersecurity Readiness, Candidate Screening, Content Creation, Risk Assessments, Industry Training. None of them work.

**Products section only shows 4 of 6 products**
The Products link in the navbar goes to the Cybersecurity Solutions section, but that section only has 4 of the 6 products listed in the navbar dropdown. Cards have no descriptive text, and the "View more" button does nothing on click. Naming is also inconsistent - navbar says "Products," section is titled "Solutions."
To do: redesign the section with real descriptive copy per product, make it feel professional and marketable, and fix the naming mismatch.

**Resources tab links are dead, no dedicated section**
The Resources tab in the navbar lists resources NMCyber offers, but every link is dead and there's no section on the site that actually showcases them.
To do: build a dedicated resources section.

**Platform and Academy links go nowhere, and they're duplicates**
Both are dead links, and they point at the same thing conceptually.
To do: drop one, keep a single link.

**Contact Us navbar link doesn't go to the footer**
Clicking "Contact Us" in the nav should land on the footer (where contact info / the form lives), but right now it's a dead link.

## Contact form

**Contact form: styling, functionality, and UX issues**
- Send button color doesn't stand out, should be a different color.
- Form likely doesn't submit correctly - needs functionality confirmed.
- No confirmation email sent back to the user after submitting.
- Layout has an awkward empty/unused space around the form.
To do: confirm and fix form submission end to end, send a confirmation email on successful submit, fix the empty space in the layout, change the send button color.

## Footer

**Footer: dead social links**
Social icons in the footer don't link anywhere real.

**Footer: Products/Services and Resources links don't go anywhere useful**
The Products section is now labeled "Services" in the footer. Clicking either Services or Resources just scrolls to the top of the page instead of going to a real section - functionally dead.

**Footer: Subscribe doesn't work**
No subscribe/email capture functionality behind the subscribe input.

**Footer: Privacy Policy, Terms of Service, Site Map links are dead**
None of these pages exist yet, and the links don't go anywhere.
To do: fix social links, properly link Services and Resources sections, add working subscribe functionality, and write actual content for Privacy Policy, Terms of Service, and Site Map.

## Mobile and responsiveness

**No real mobile design**
Mobile layout is effectively non-existent right now, and general responsiveness doesn't meet a reasonable standard.
To do: incorporate proper responsive design as part of any redesign work, not as an afterthought.

## Performance (Lighthouse)

**Google Lighthouse score needs improvement**
Current Lighthouse scores (performance, accessibility, best practices, SEO - the 4 categories) are being used as the baseline to measure improvement against.
To do: redesign/fix the site to hit a Lighthouse score of 80+ across these categories.

## SEO

**Confirm Google Search Console setup**
Need to verify whether the site's domain is already registered in Google Search Console. GSC is how we'll track SEO and traffic over time.
To do: if the domain isn't in GSC yet, add it and set up SEO tracking.

## Hero section

**Hero section: CTA and copy cleanup**
- The "Platform/Academy" button combo in the header needs simplifying (ties back to the navbar duplicate-link issue).
- On the dev version, the CTA buttons are getting visually cut off - needs a layout fix.
- Title and subtitle are too long / add too much cognitive load - should be tightened up, subtitle ideally down to two lines.
- CTA accent color works well and should be kept, but the overall accent color should be revisited where it's inconsistent.
- Centered layout for the hero reads as a positive design choice and should be kept.

## Partners section

**Keep the dev version of the partners section**
The partners section on the dev environment looks good sitting right after the hero - assuming the numbers shown are ones we can actually back up/defend.

## Awards section

**Decide on awards display: footer badge vs dedicated section**
If NMCyber only has one award to show, it should just live in the footer. If there are multiple awards, it deserves its own section (reference: how Arctic Wolf handles this).
To do: confirm how many awards exist, then build whichever version applies.

## Numbers/stats section

**Numbers section: drop the award icon, confirm the stats**
Keep the section to three key numbers (assuming they're defensible/accurate), and remove the award icon/sign from this section since awards get handled separately above.

## Why Us section

**Redesign the Why Us section**
Current layout uses an accordion/harmonica style. Should be swapped for a card layout, one clear statement per card, overall more concise than what's there now.

## Marketing / lead gen

**Add email marketing for free resources and newsletter subscribe**
No email capture flow currently exists for either the "free resources" offer or the general newsletter subscribe in the footer.

---

## Suggested timeline (for reference, not individual issues)

| Week | Focus |
|---|---|
| 1 | Discovery, brainstorming, analysis |
| 2 | Fix dead navbar links, build Resources section, fix Hero section |
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
