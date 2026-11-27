// Sprints (v04 · 12): Freeman's 27 Nov picks A · Sprints v2 (sprints-v2.html, galaxy image 1) for /sprints/ and
// A · Brand Sprint (brand-sprint.html, galaxy image 2) for /sprints/brand-sprint/. No prices anywhere: every
// price or term still to come is a held chip ([[…]]), as on the live page (held: sprint-prices).
// Brand Sprint rhythm settled by Freeman: check-ins on days 1, 3, 5, 8 and 10.
import type { Btn, Cta, Hero, Step } from '../lib/a';
import { AUDIT_FREE, AUDIT_CALL, TALK } from '../lib/site';

export interface Sprint { slug: string; name: string; term: string; line: string; href: string; cta: string }

export const BRAND_SPRINT = '/sprints/brand-sprint/';

export const sprints: Sprint[] = [
  { slug: 'audit', name: 'Audit', term: '1 week', line: 'Start here if you’re not sure. A senior review of your brand, site and search, with a fix list.', href: AUDIT_FREE, cta: 'Start with Audit →' },
  { slug: 'brand-sprint', name: 'Brand Sprint', term: '2 weeks', line: 'Two directions on day 3, a finished identity on day 10.', href: BRAND_SPRINT, cta: 'See the Brand Sprint →' },
  { slug: 'web-sprint', name: 'Web Sprint', term: '2–4 weeks', line: 'A landing page in two weeks or up to five pages in four, live on your domain.', href: TALK, cta: 'Start with Web Sprint →' },
  { slug: 'launch-film', name: 'Launch Film', term: '3 weeks', line: 'Script to final cut, with every cutdown your launch needs.', href: TALK, cta: 'Start with Launch Film →' },
  { slug: 'ai-workflow-sprint', name: 'AI Workflow Sprint', term: '2 weeks', line: 'We map how your team makes creative, then set up the pipeline.', href: TALK, cta: 'Start with AI Workflow Sprint →' },
  { slug: 'creative-retainer', name: 'Creative Retainer', term: 'Monthly', line: 'One request at a time, 48-hour turnaround, the same senior eye.', href: TALK, cta: 'Start with Creative Retainer →' },
];

export const brandSprintDays: Step[] = [
  { k: 'Day 1', t: 'Kickoff', p: 'Your answers become the brief.' },
  { k: 'Day 3', t: 'Two directions', p: 'Shown live. You pick one on the call.' },
  { k: 'Day 5', t: 'System review', p: 'Logo, type and color refined.' },
  { k: 'Day 8', t: 'Menu pieces', p: 'Your chosen pieces, adjusted live.' },
  { k: 'Day 10', t: 'Handover', p: 'Guidelines and every file, in your name.' },
];

export const owned: Step[] = [
  { k: '', t: 'In your name', p: 'Domain, repo, hosting and source files are yours from day one.' },
  { k: '', t: 'Recorded walkthrough', p: 'Every handover comes with a video of how to run it.' },
  { k: '', t: '30 days of fixes', p: 'Anything that doesn’t work as agreed is fixed free.' },
];

export const sprintsHero: Hero = {
  eyebrow: 'Sprints',
  title: 'Senior work, on a *fixed date.*',
  line: 'Fixed scope, a day-by-day plan, and the creative director on every call. Start with an Audit if you’re not sure which you need.',
  image: { src: '/explore/design-a/assets/sprints-hero-galaxy.webp', w: 1152, h: 768, pos: 'center 95%' },
  ctas: [{ label: 'Start a sprint', href: TALK, style: 'light' }, { label: 'Start with an Audit', href: AUDIT_FREE, style: 'light-o' }],
  height: 520,
  small: true,
};

/** Live FAQ answers from the 24 Nov Sprints page (src/v2/sprints.html), kept as real content. */
export const sprintsFaq = [
  { q: 'What does a sprint cost?', a: '[[To come: sprint prices]] Every sprint has a fixed price for the scope on the page. Larger sites get a fixed quote after an Audit.' },
  { q: 'What if we aren’t ready for a sprint?', a: 'Start with the free Audit. A sprint works best with positioning you can state in a sentence, one person who can say yes, and a launch, raise or season with a real date.' },
  { q: 'Who does the work?', a: 'Christopher Dunn, owner and creative director, directs every sprint and is on every call. He brings 20+ years in creative direction, brand, web and content, including senior creative roles at Teton Gravity Research and film campaigns built around release dates. AI speeds up drafts and production; every piece is directed and finished by hand, and we tell you what was AI-assisted.' },
  { q: 'What can make a sprint run late?', a: 'Decisions. Work is shown and decided on live calls, not in email rounds, and we ask for one person who can say yes. Sign-off by committee is not a fit yet.' },
  { q: 'What happens after the sprint?', a: 'You own everything and can run it yourself. Many teams move to the Creative Retainer for ongoing work.' },
  { q: 'Do you work with clients outside Jackson?', a: 'Yes. The studio is in Jackson, WY, and every call is on video, so you can be anywhere.' },
];

export const sprintsCta: Cta = {
  title: 'Tell us about the launch.',
  ctas: [{ label: 'Let’s talk', href: TALK, style: 'teal' }, { label: 'Get a free audit', href: AUDIT_FREE, style: 'dark-o' }],
};

// ---------- Brand Sprint ----------
const bookCall: Btn = { label: 'Book a call', href: AUDIT_CALL, style: 'light' };

export const brandSprint = {
  hero: {
    eyebrow: 'Sprints · 02 · Brand Sprint',
    title: 'A brand in *ten working days.*',
    line: 'Logo system, color, type and six real pieces of your brand in use, plus the guidelines and files your team needs to run with it.',
    image: { src: '/explore/design-a/assets/sprints-hero-galaxy-2.webp', w: 1152, h: 768, pos: 'center 15%' },
    ctas: [bookCall, { label: 'See what’s included', href: '#included', style: 'light-o' }],
    height: 540,
    small: true,
  } as Hero,
  facts: [
    ['Timeline', '10 working days'],
    ['Live calls', 'One hour or less each'],
    ['Best for', 'Launches and relaunches'],
    ['Price', 'Fixed, to come [[To come: Brand Sprint price]]'],
  ] as [string, string][],
  parts: {
    eyebrow: 'What you walk away with',
    title: 'Three parts. *You choose six.*',
    side: 'The same for every Brand Sprint. Only the six applications change, and you pick those at kickoff.',
    cards: [
      { name: 'The identity', intro: 'The core system everything else is built from.', items: ['Logo, wordmark and mark', 'Color for screen and print', 'Type system', 'Image direction', 'One graphic element'] },
      { name: 'Your brand in use', intro: 'Real pieces, designed and exported. Not mockups for a deck.', items: ['Six applications from the menu', 'Launch-ready exports', 'Social profile kit'] },
      { name: 'Handover', intro: 'Everything your team needs to keep it consistent.', items: ['Guidelines in Figma and PDF', 'Figma library of styles and parts', 'Exported asset kit', 'Recorded handover call'], dark: true },
    ],
  },
  menu: {
    eyebrow: 'The menu',
    title: 'Choose *your six.*',
    side: 'The pieces you need for what you’re launching. Chosen at kickoff, finished by day 10.',
    items: [
      ['Website hero', 'Desktop and mobile'], ['Product or app screen', 'One key screen'], ['Pitch deck template', 'Ten master slides'],
      ['Social set', 'Nine posts and profile kit'], ['Ad set', 'Six sizes'], ['Signage', 'One sign or banner'],
      ['Packaging', 'One item, front and back'], ['Merch', 'Two items'], ['Email kit', 'Header and signature'],
    ] as [string, string][],
  },
  runs: {
    eyebrow: 'How it runs',
    title: 'Ten days, *start to finish.*',
    side: 'A short questionnaire before day 1. Decisions happen on live calls, and nothing sits waiting for feedback.',
    decisionDays: [1, 3, 5, 8, 10],
    days: [
      { k: 'Day 1', t: 'Kickoff', p: 'Your questionnaire answers become the brief. We lock your six.' },
      { k: 'Day 3', t: 'Two directions', p: 'Shown live. You pick one on the call and tell us what to push.' },
      { k: 'Day 5', t: 'System review', p: 'Logo, type and color refined.' },
      { k: 'Day 8', t: 'Your six, in use', p: 'The chosen pieces in the chosen direction, adjusted live.' },
      { k: 'Day 10', t: 'Handover', p: 'Guidelines, library and every file, walked through and in your name.' },
    ] as Step[],
  },
  fit: {
    eyebrow: 'Is it right for you?',
    title: 'Fast decisions, *fast brand.*',
    side: 'A sprint works when decisions can happen quickly. If that’s hard right now, a slower project may suit you better.',
    good: ['You’re launching or relaunching in the next three months', 'The people who decide can join a one-hour call', 'You want a system your team can run without us', 'Your positioning is clear, or you add a strategy day'],
    not: ['You need research across many stakeholders first', 'Every decision needs a committee’s sign-off', 'You’d like ten logo options to choose from', 'You’re rebranding a large family of products at once'],
  },
  yours: {
    eyebrow: 'Everything is yours',
    title: 'One fixed price. *No surprises.*',
    steps: [
      { k: '', t: 'In your name', p: 'Final files, source files and rights to the finished identity are yours at handover.' },
      { k: '', t: 'Recorded walkthrough', p: 'Every handover comes with a video of how to use it.' },
      { k: '', t: '30 days of fixes', p: 'Anything that doesn’t work as agreed is fixed free.' },
    ] as Step[],
    addonsTitle: 'Add-ons, agreed before kickoff',
    addons: ['Strategy and positioning day', 'Naming, adds five days', 'Motion logo', 'Full pitch deck', 'Extra application', 'Photography direction'],
    addonsNote: 'Each keeps the ten-day timeline unless noted. [[To come: add-on prices]]',
  },
  faq: [
    { q: 'What does a Brand Sprint cost?', a: 'One fixed price for everything on this page, agreed before kickoff. Add-ons are priced separately. [[To come: Brand Sprint price]]' },
    { q: 'Is ten working days really enough?', a: 'Yes, for a focused brand. The questionnaire does the discovery, you decide on live calls, and nothing sits waiting for feedback.' },
    { q: 'What do you need from us?', a: 'The questionnaire, about twenty minutes, and the people who decide on short calls of an hour or less.' },
    { q: 'What if we don’t like either direction?', a: 'It’s rare, because the questionnaire sets the brief. If it happens, we take what worked from both and show a third route by day 5.' },
    { q: 'Do we own everything?', a: 'Yes. Final files, source files and rights to the finished identity are yours at handover.' },
    { q: 'Can we add a website?', a: 'Yes. The Web Sprint can start the week after handover, so you can be live with a new brand and site in about seven weeks.' },
  ],
  others: {
    eyebrow: 'Other sprints',
    title: 'Same model, *different job.*',
    side: 'Fixed scope, fixed dates, one price, every time.',
    slugs: ['web-sprint', 'launch-film', 'creative-retainer'],
    lines: { 'creative-retainer': 'After launch, keep the same team: one request at a time, the same senior eye.' } as Record<string, string>,
  },
  cta: {
    eyebrow: 'Start a Brand Sprint',
    title: 'Let’s talk about *your brand.*',
    lead: 'Book a 30-minute call. We’ll check the fit, confirm the sprint and agree your start week.',
    ctas: [{ label: 'Book a call', href: AUDIT_CALL, style: 'teal' }, { label: 'Get a free audit', href: AUDIT_FREE, style: 'dark-o' }],
  } as Cta,
};
