# Dunn Creative Studio — new website

Working repo for the new dunncreative.com (replaces the Squarespace site at launch).
Owner and creative director: Freeman (Chris Dunn).

## Stack
- Astro 5, static output to `dist/`. Node 22 (`.nvmrc`).
- Hosted on Netlify: every pull request gets a Deploy Preview link; `main` is production.
- `npm run build` must pass before any PR is marked ready.

## Structure
- `src/pages/` — the site in the Ridge look: home, services hub + `services/[service]`, work index + case
  study, AI, Lab + Lab stories, About, Contact, AI statement, Privacy.
- `src/pages/explore/a/` — the studio's one-page lead site (task #33).
- `public/explore/` — three standalone lead pages (get started, AI call, audit) plus an index, made in Freeman's
  chat sessions. Static HTML; edit them only on Freeman's ask.
- Since the 24 Nov page picks, the main pages render Freeman's picked layouts from Page Explorations v2:
  `src/layouts/V2.astro` (header/footer in `src/components/v2/`, styles in `public/v2/v2.css`), markup in
  `src/v2/*.html`, case studies from `src/data/caseStudies.ts` (copy v03), Lab posts from `src/data/lab.ts`.
  `/sprints/` is built in the same v2 style from the sprint one-pager concept (prices held). Every other version is kept as static reference at `/explore/pages/`.
- `src/lib/held.ts` (shown at `/held`) — every open item for Freeman in one registry. Never fill an `answer`
  there from anything but Freeman's own answer.

## Where things stand (19 Nov 2026)
- 24 Nov: Freeman picked the page layouts (Home K, About E, Services I, AI G, Branding G, Websites B,
  Contact E, Work E, Case study G, Lab post B, Lab B). A draft PR from
  `claude/u22414bf55145482f23a140dacf5681d9-explorations-to-site` ports them; his merge puts them live. Until
  then, page work continues on that branch, not in fresh layouts.
- `main` is the live site at dunncreative.netlify.app. PR #5 (site pages from Wireframes v02.1, in the
  **Ridge** look Freeman picked) was squash-merged on 19 Nov, so the Ridge pages are live.
- Home and About use the portrait Freeman approved: `src/assets/studio/chris-dunn-portrait-bw.webp`.
- Still open: PR #1 (`feat/work-collection`, tasks #39 and #40), PR #3 (`claude/33-explore-a`, QA fixes for
  #33) and draft PR #7 (`feat/client-logo-bar`, Freeman's seven client logos in the homepage logo bar, from
  the chat session). Next merges, per Freeman's chat session: #1, then #3, each brought up to date with
  `main` first. Merging stays Freeman's.
- Freeman's chat session owns `feat/client-logo-bar`. Studio runs don't push to it; send changes for it
  through the Notion Inbox.
- `docs/duet/` holds Freeman's Claude Duet concepts (24 Nov): the sprint one-pager that the next /explore/a
  builds from, the page layout explorations, and the buyer sentence Freeman settled. Read `docs/duet/README.md`.
- The Notion board (Decisions, task handoff notes, Inbox) is the record of what's decided, including copy and
  pricing calls. Read it before acting on anything in this file.

## Rules for agents
- Never commit to `main`. Work on a branch, open a **draft** pull request, link the Deploy Preview on the Notion task.
- Never merge. Merging is Freeman's.
- Don't push to a branch another session owns (today: `feat/client-logo-bar`, PR #7).
- Never invent clients, results, quotes or prices. Use only facts from the Brand Brain, the board or Freeman.
- Brand: logo in white on dark, black on light, never teal. Teal (#1AA6AA; #10777A for small text on light)
  is an accent only. Greys from dark to light are part of the palette; Grey 600 (#6B6E72) is the caption grey
  on light. Follow Brand Guidelines v1 (Notion), which also sets sentence-case buttons with rounded corners
  and a light nav for now.
- Keep previews `noindex` until launch (set in `netlify.toml`).
- Reference only, do not copy wholesale: the old .net repo (`dunncreative/dunn-creative`) and the live Squarespace site.
