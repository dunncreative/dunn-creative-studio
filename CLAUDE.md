# Dunn Creative Studio — new website

Working repo for the new dunncreative.com (replaces the Squarespace site at launch).
Owner and creative director: Freeman (Chris Dunn).

## Stack
- Astro 5, static output to `dist/`. Node 22 (`.nvmrc`).
- Hosted on Netlify: every pull request gets a Deploy Preview link; `main` is production.
- `npm run build` must pass before any PR is marked ready.

## Structure
- `src/pages/explore/a/` — the studio's one-page lead site (task #33).
- `public/explore/` — three standalone lead pages (get started, AI call, audit) plus an index, made in Freeman's
  chat sessions. Static HTML; edit them only on Freeman's ask.
- The full site (home, about, services hub + single service template, work index + case study template,
  contact, Lab, AI) is being built on `feat/site-pages-v02-1` (PR #5), not on `main` yet.

## Where things stand (18 Nov 2026)
- `main` is the live demo at dunncreative.netlify.app: PR #2 (home, services, work) and PR #4 (/explore/a)
  are merged. AI, Lab and About show "soon" until PR #5 lands.
- PR #1 (`feat/work-collection`, tasks #39 and #40) and PR #3 (`claude/33-explore-a`) are still open.
  Their content is already on `main`; fixes pushed there reach the demo only when Freeman merges them.
- PR #5 (`feat/site-pages-v02-1`) holds the site pages from Wireframes v02.1, which Freeman approved on
  18 Nov, rebuilt in the **Ridge** look he picked the same day (of Ridge, Type and Frame). Freeman's chat
  session owns this branch. Studio runs don't push to it; send changes for it through the Notion Inbox.
- Open items for Freeman live in one registry on PR #5: `src/lib/held.ts`, shown at `/held`. Never fill an
  `answer` there from anything but Freeman's own answer.
- The Notion board (Decisions, task handoff notes, Inbox) is the record of what's decided. Read it before
  acting on anything in this file.

## Rules for agents
- Never commit to `main`. Work on a branch, open a **draft** pull request, link the Deploy Preview on the Notion task.
- Never merge. Merging is Freeman's.
- Don't push to a branch another session owns (today: `feat/site-pages-v02-1`, PR #5).
- Never invent clients, results, quotes or prices. Use only facts from the Brand Brain, the board or Freeman.
- Brand: logo in white on dark, black on light, never teal. Teal (#1AA6AA; #10777A for small text on light)
  is an accent only. Greys from dark to light are part of the palette; Grey 600 (#6B6E72) is the caption grey
  on light. Follow Brand Guidelines v1 (Notion), which also sets sentence-case buttons with rounded corners
  and a light nav for now.
- Keep previews `noindex` until launch (set in `netlify.toml`).
- Reference only, do not copy wholesale: the old .net repo (`dunncreative/dunn-creative`) and the live Squarespace site.
