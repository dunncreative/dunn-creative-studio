# Design round A · Unfold light (24–25 Nov 2026)

Freeman ran a three-direction design round on 24 Nov (A Unfold light, B Ridge refined, C Offer-led) and **picked A**.
The working canvas is a Claude Design artifact Freeman owns: https://claude.ai/artifact/UKueKy6WHKdBSKSxTjKYSL
(agents can't open it; the A artboards are exported as static pages in `public/explore/design-a/`, served at
`/explore/design-a/` on every Deploy Preview).

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
   `transparent 25% → .62 at 55% → rgba(11,12,13,.9)` (stronger at ≤760px; updated 25 Nov so hero text stays ≥4.5:1), eyebrow (13px caps), H1 in white at ~100px max with one italic word,
   `transparent 45% → rgba(11,12,13,.85)`, eyebrow (13px caps), H1 in white at ~100px max with one italic word,
   one line under it, two buttons (white solid + white outline) bottom right. Corner tag for any AI or placeholder
   image. One image per page; never reuse the same crop on two pages.
2. Sections: 7 or fewer per page, intros under 25 words, card lines under 12 words.
3. Cards: grey `#F4F4F3`, radius 20px, number, round arrow button, name, one line, sub-services as capsules. At
   most one dark card per grid.
4. One black panel per page for "How to buy it" / "How to work with us" (Audit → Sprint → Retainer), and one black
   closing CTA panel.
5. Teal only for small accents and the CTA button inside black panels. Logo black on light.
6. Render-check 1440 and 390: no horizontal overflow (use `minmax(min(100%,340px),1fr)` grids), "Let's talk" visible in the
   header (at ≤760px the nav links fold into a "Menu" `<details>`; classes `ahdr`, `anav`, `amenu`, `acta`), and
   hero text contrast ≥4.5:1 (body) and ≥3:1 (large) measured over the image.
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
