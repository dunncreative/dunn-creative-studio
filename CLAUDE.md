# Dunn Creative Studio — new website

Working repo for the new dunncreative.com (replaces the Squarespace site at launch).
Owner and creative director: Freeman (Chris Dunn).

## Stack
- Astro 5, static output to `dist/`. Node 22 (`.nvmrc`).
- Hosted on Netlify: every pull request gets a Deploy Preview link; `main` is production.
- `npm run build` must pass before any PR is marked ready.

## Structure
- `src/pages/explore/{a,b,c}/` — landing-page explorations, one per moodboard direction.
- The chosen direction grows into the full site (home, about, services hub + single service template,
  work index + case study template, blog, contact, Lab).

## Rules for agents
- Never commit to `main`. Work on a branch, open a **draft** pull request, link the Deploy Preview on the Notion task.
- Never merge. Merging is Freeman's.
- Never invent clients, results, quotes or prices. Use only facts from the Brand Brain, the board or Freeman.
- Brand: logo in white on dark, black on light, never teal. Teal (#1AA6AA; #10777A for small text on light)
  is an accent only. Greys from dark to light are part of the palette. Follow Brand Guidelines v1 once it exists.
- Keep previews `noindex` until launch (set in `netlify.toml`).
- Reference only, do not copy wholesale: the old .net repo (`dunncreative/dunn-creative`) and the live Squarespace site.
