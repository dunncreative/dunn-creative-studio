# Design round A · Unfold light (24–25 Nov 2026)

Freeman ran a three-direction design round on 24 Nov (A Unfold light, B Ridge refined, C Offer-led) and **picked A**.
The working canvas is a Claude Design artifact Freeman owns: https://claude.ai/artifact/UKueKy6WHKdBSKSxTjKYSL
(agents can't open it; the A artboards are exported as static pages in `public/explore/design-a/`, served at
`/explore/design-a/` on every Deploy Preview).

## FREEMAN'S PAGE PICKS — 27 Nov 2026 (LOCKED: build the development site from these)

Freeman picked the pages below as the foundation of the new site: the web design, structure, voice and pages to
build. PNGs of each are in Dropbox `/Dunn Creative Studio/Clients/Dunn Creative/00_Brand-Brain/112726-Dunn-Creative-Website-Page-Designs/`.
The static source for each is in `public/explore/design-a/`. These replace the 24 Nov Page Explorations v2 picks
(Home K, About E, ...) for every page listed here. Freeman will keep refining the master template, the section
templates, copy, imagery and details, so build them as reusable components, not one-off pages.

| Page | Canvas artboard (Dropbox PNG name) | Source in `/explore/design-a/` | Live route |
| --- | --- | --- | --- |
| Home | A · Home v2c (v2 hero, service list first) | `home-v2c.html` + headline "Big-studio craft. *Small-studio care.*", Selected work two per row | `/` |
| Services hub | A · Services v2 (image hero, two-column cards) | `services-v2.html` (moon hero) | `/services/` |
| Brand Identity | A · Brand Identity v2 (reworked offer and hero) | `brand-identity-offer-v2.html` | `/services/brand-identity/` |
| Web & Digital | A · Web & Digital (area page) | `web-digital-v2.html` | `/services/web-digital/` |
| Marketing Creative | A · Marketing Creative (area page) | `marketing-creative-v2.html` | `/services/marketing-creative/` |
| AI Creative | A · AI Creative (area page) | `ai-creative-v2.html` | `/services/ai-creative/` |
| AI for Teams | A · AI for Teams (area page) | `ai-for-teams-v2.html` | `/services/ai-for-teams/` |
| Sprints | A · Sprints v2 (galaxy image hero) | `sprints-v2.html` (galaxy image 1) | `/sprints/` |
| Brand Sprint | A · Brand Sprint (single sprint page) | `brand-sprint.html` (galaxy image 2) | `/sprints/brand-sprint/` |
| Work | A · Work v3 (v2 + bigger closing CTA) | `work-v4.html` (six projects, two per row) | `/work/` |
| Case study | A · Case study · Ironwood Homes | `case-ironwood-v2.html` (truck-door hero) | `/work/ironwood-homes/` |
| Lab | A · Lab | `lab-v2.html` | `/lab/` |
| Lab post | A · Lab post · Celtic triskele | `lab-post-celtic.html` | `/lab/celtic-triskele/` |
| Contact | A · Contact (from the agents' contact-a) | `contact-a.html` (on PR #19's branch) | `/contact/` |

Settled by the picks:
- **Look:** Direction A everywhere. Image hero panel at the top of every page; grey offer cards with Includes
  capsules on area pages; one black "How to buy it" panel; black closing CTA.
- **Type:** the picked pages use Inter Tight Light headlines with one Instrument Serif italic accent word (the
  same idea as the type specimen's option 1). Build with this pairing; Freeman can still swap it.
- **Brand Sprint rhythm:** check-ins on days 1, 3, 5, 8 and 10, as on the picked Sprints and Brand Sprint pages.
- **Brand Identity offers (replaces the brief's locked list):** Brand strategy · Logo and identity system ·
  Brand guidelines · Story and messaging · Branded imagery · Rebrand and refresh.
- **Work page:** six projects only (the four case studies, Peace Park, GU Energy); the "More work" strip is gone.
- **Not picked, keep as reference only:** the other Home, Services, Work, Brand Identity v1, AI Creative v2
  (the AI story), Brand Sprint v2 and the agents' alternates.

Still to come from Freeman (keep placeholders, don't invent): hero images for Home, Web & Digital, Marketing
Creative, AI for Teams, Work and Contact; prices and terms; the Celtic post's own words; Ironwood project facts;
the About page pick (not in this set: keep the live About until he picks).

## What's decided (Freeman)
- Direction **A** for the whole site: white pages, wide margins, black rounded panels, light headlines with one
  italic accent word, colour only in the work, light nav (Work · Services · Sprints · Lab · About + "Let's talk").
- Keep A's **Selected work** (2-column cards, 4:3 image, label, title, one line) and A's numbered **What we do**
  list over B's versions.
- Image hero, not an empty top: the first hero "felt too empty". Pages open with a rounded image panel, white text
  over a bottom gradient, the CTA buttons inside the panel.
- Services hero image: `public/explore/design-a/assets/services-hero-moons.webp` (Freeman's own image, labelled
  "AI-directed image").
- Sprints hero image (25 Nov): `public/explore/design-a/assets/sprints-hero-galaxy.webp` (Freeman's own galaxy
  image, labelled "AI-directed image"), shown in `sprints-v2.html`. Use it for every Sprints hero, including
  `sprints-a2`. Frame it so the swirl sits above the headline (`background-position: center 95%`).
  A second option, `assets/sprints-hero-galaxy-2.webp` (diagonal galaxy, `center 15%`), is in `sprints-v3.html`.
  Freeman picks between the two; until then sprints-a2 uses the first.
- Brand Identity hero image (25 Nov): `public/explore/design-a/assets/brand-identity-hero.webp` (Freeman's own
  galaxy-over-trees image, labelled "AI-directed image"), framed `center 75% / 108% auto` so the galaxy fills the
  top half of the panel. Use it on `brand-identity.html`; the other area pages keep the placeholder until Freeman
  sends theirs.
- Work, case study and Lab (26 Nov, Freeman's chat): `work-v2`, `case-ironwood-v2`, `lab-v2` and
  `lab-post-celtic` refine the v04 · 14 pages. Work adds filter chips; the Ironwood case study uses the truck-door
  mockup as its hero (labelled "AI-directed mockup"); the Lab hero and Celtic card use Freeman's Triskele Worlds art.
  `lab-post-celtic` is the Lab post template, built around his 12 images in
  `assets/lab/celtic/` (Triskele Worlds and Celtic Ink Spirals, all labelled AI-directed). Body copy there is
  placeholder until Freeman writes it.
- Area pages, 27 Nov (Freeman's chat): `brand-identity-offer-v1` (Freeman's own 'What we offer' text, eight
  offers with Includes capsules), `brand-identity-offer-v2` (reworked to six offers, one per locked sub-service,
  hero 'A brand that lasts.') and `web-digital-v2` (same layout: six offer cards, Mountain Mind, the Web Sprint
  day plan). The 'What we offer' card grid replaces 'What's included' on area pages. Freeman still picks v1 or v2
  for Brand Identity; this changes the brief's locked sub-service list, so don't touch the live routes until then.
- The Deeper key art is **not** a hero image (it distorts). Mountain photo `/v2/assets/hero-mountain-ai.webp` is the
  placeholder elsewhere, labelled "Placeholder image · AI-directed".

## Still open — Freeman picks (do not pick for him)
- **Home**: `home-a` (first) · `home-v2` (short 600px hero, buttons in panel) · `home-v2b` (v2 hero + service cards
  above work) · `home-v2c` (v2 hero + service list above work) · `home-v3` (first hero + cards above work).
- **Services**: `services-a` (list rows) · `services-v2` (moon hero + 2-column cards with capsules, "Buy it as",
  "See it in") · `services-v3` (stacked full-width modules) · `services-v4` (C's white cards in A type).
- **Fonts**: the artboards use Inter Tight 300 + Instrument Serif italic. Fonts stay held until the type pick at
  `/explore/type/` (task v04 · 1). Live routes keep the current fonts.
- Sprint lengths shown ("Brand Sprint · 2 weeks" etc.) are draft terms; no prices anywhere.
- "Buy it as" pairing of Marketing Creative and AI Creative with the Creative Retainer is a draft guess.

## The page system (use it for every new page)
1. **Image hero panel**: `border-radius:20px`, ~520–600px tall, image `cover`, gradient
   `transparent 45% → rgba(11,12,13,.85)`, eyebrow (13px caps), H1 in white at ~100px max with one italic word,
   one line under it, two buttons (white solid + white outline) bottom right. Corner tag for any AI or placeholder
   image. One image per page; never reuse the same crop on two pages.
2. Sections: 7 or fewer per page, intros under 25 words, card lines under 12 words.
3. Cards: grey `#F4F4F3`, radius 20px, number, round arrow button, name, one line, sub-services as capsules. At
   most one dark card per grid.
4. One black panel per page for "How to buy it" / "How to work with us" (Audit → Sprint → Retainer), and one black
   closing CTA panel.
5. Teal only for small accents and the CTA button inside black panels. Logo black on light.
6. Render-check 1440 and 390: no horizontal overflow (use `minmax(min(100%,340px),1fr)` grids).

## The area page template
`brand-identity.html` is the template for all six area pages: hero → What's included (the locked sub-services
from Master Brief v04 §4, one line each) → one case study → How to buy it (that area's sprint day plan, no price) →
Often paired with (two other areas) → closing CTA.

## Next for the studio (see Notion tasks v04 · 12 and v04 · 13)
Build the remaining pages as **A alternates** under `public/explore/design-a/` (static HTML, same tokens), at
least one, ideally two versions each: the five other area pages, About, Work index, a case study (Ironwood),
Lab index, a Lab post, Contact, Sprints with the image hero. Add each to `index.html`. Live routes change only after
Freeman picks.
