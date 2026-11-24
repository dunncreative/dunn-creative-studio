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
- `src/pages/explore/a/` — the studio's one-page lead site (task #33, done). The sprint page is now `/sprints`
  (task v04 · 4), built from `docs/duet/sprint-one-pager/`.
- `public/explore/` — three standalone lead pages (get started, AI call, audit) plus an index, made in Freeman's
  chat sessions. Static HTML; edit them only on Freeman's ask.
- `src/lib/held.ts` (shown at `/held`) — every open item for Freeman in one registry. Never fill an `answer`
  there from anything but Freeman's own answer.

## Where things stand (24 Nov 2026)
- `main` is the live site at dunncreative.netlify.app and takes squash merges only. Freeman squash-merged
  PR #5 (Ridge site pages) on 19 Nov and PRs #1 (work collection), #3 (/explore/a fixes) and #8
  (`docs/duet/`) on 24 Nov. New work branches off `main`.
- Home and About use the portrait Freeman approved: `src/assets/studio/chris-dunn-portrait-bw.webp`.
- Draft PR #7 (`feat/client-logo-bar`, Freeman's client logos in the homepage logo bar) stays parked. Freeman's
  chat session owns that branch. Studio runs don't push to it; send changes for it through the Notion Inbox.
- What to build from, in this order: the Client Zero job's Project Direction field in Notion (newest dated
  entry first), Dropbox `03_Work/dunncreative_clientzero_content-decisions_v03.md`, then Website Master Brief
  v04 (`01_Briefs/dunncreative_clientzero_website-brief_v04.md`). This week's priorities are the Notion Week
  Plan's "This week: 24–30 Nov" section. Creative Brief v03 and the 22–28 Nov week plan Doc are superseded.
- `docs/duet/` holds Freeman's Claude Duet concepts (24 Nov): the sprint one-pager that `/sprints` builds
  from, the page layout explorations, and the buyer sentence Freeman settled. Read `docs/duet/README.md`.
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
