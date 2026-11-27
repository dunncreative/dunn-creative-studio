// About (v04 · 18): Freeman's pick A · About v3 (public/explore/design-a/about-v3.html), 27 Nov evening.
// Copy as on the artboard (Freeman picked it). Accent words: one per headline, in ink (Decision #45 A).
// Markup: *accent word*, [[held chip]] (src/lib/rich.ts).
import type { Btn, Hero } from '../lib/a';
import { TALK, AUDIT_FREE, PLACE } from '../lib/site';

const A = '/explore/design-a/assets';

export const aboutHero: Hero = {
  eyebrow: 'About Dunn Creative',
  title: 'A senior studio, rebuilt for *now.*',
  line: `Brand and digital work from ${PLACE}. One creative director on every project, specialists by the job, and an AI studio in the production line.`,
  image: { src: `${A}/heroes/spare-hero-galaxy-bw.webp`, w: 1152, h: 768, pos: 'center 45%' },
  ctas: [{ label: 'See the work', href: '/work/', style: 'light' }, { label: 'Let’s talk', href: TALK, style: 'light-o' }],
  height: 560,
  wideLine: true,
};

export const aboutWhat = {
  eyebrow: '01 · What Dunn Creative is',
  title: 'Small studio. Senior judgment. *Bigger output.*',
  side: 'Big-studio craft without the layers. You work with the person who makes the calls, and the work moves at the speed of a small team.',
  cards: [
    { name: 'The studio', line: `A brand and digital studio in ${PLACE}, working with clients local, national and remote.` },
    { name: 'The model', line: 'One senior creative director, specialists brought in by the job, and an AI studio that drafts, versions and preps.' },
    { name: 'The work', line: 'Brand identity, web and digital, marketing creative, film and motion, AI creative and AI for teams.' },
  ],
};

export const aboutLed = {
  eyebrow: '02 · Led by Chris Dunn',
  title: 'Twenty years where the work had to *deliver.*',
  body: '20+ years in creative direction, brand, web and content, most of it in action sports, film and lifestyle, where the work has to look as good as the footage. That standard comes to every Dunn Creative project.',
  portrait: { src: `${A}/about/chris-dunn-portrait-about.webp`, alt: 'Chris Dunn, creative director', w: 900, h: 900 },
  caption: ['Christopher Dunn', `Owner and creative director · ${PLACE}`] as [string, string],
  credits: [
    ['Teton Gravity Research', 'Senior creative roles'],
    ['Brain Farm', 'Long-running creative work'],
    ['We Are Blood', 'Film campaign'],
    ['The Fourth Phase', 'Film campaign'],
    ['View From A Blue Moon', 'Film campaign'],
  ] as [string, string][],
  howEyebrow: 'How we work',
  howTitle: 'From first call to final *file.*',
  how: [
    ['Listen', 'Your goals, your audience and what’s in the way.'],
    ['Shape', 'Strategy and direction set before a pixel moves.'],
    ['Make', 'Design and production, reviewed with you at every step.'],
    ['Hand over', 'Files, guidelines and everything your team needs to keep going.'],
  ] as [string, string][],
};

export const aboutWhy = {
  eyebrow: '03 · Why Dunn Creative',
  title: 'Deliverables are easy. Systems are *rare.*',
  side: 'Plenty of studios hand over files. Dunn Creative builds the system behind them, so the brand keeps working after launch.',
  points: [
    ['A creative director on every job', 'You work with Chris from the first call to the final file. No hand-off to a junior team.'],
    ['AI where it helps', 'AI takes on the drafting and versioning, so rounds come back sooner and budgets go further. The calls stay human.'],
    ['Proven where the bar is high', '20+ years in action sports, film and lifestyle, where the work has to look as good as the footage.'],
    ['Built to grow with you', 'Start with an audit or a single sprint. Add a retainer once it’s working.'],
  ] as [string, string][],
  tile: `${A}/about/dc-symbol-white-tile.webp`,
};

/** Sprint cards: no lengths or prices (Inputs, v04 · 18). Brand Sprint links to its page, the others to /sprints/. */
export const aboutSprints = {
  eyebrow: '04 · Creative Sprints',
  title: 'The fastest way to start is a *sprint.*',
  side: 'A fixed scope, a set timeline and one clear result. The simplest way to see what working together feels like.',
  cards: [
    { href: '/sprints/brand-sprint/', name: 'Brand Sprint', line: 'Positioning, identity and the system to hold it.' },
    { href: '/sprints/', name: 'Web Sprint', line: 'A site or landing page, designed and built.' },
    { href: '/sprints/', name: 'Launch Film', line: 'Film-grade work for a launch or campaign.' },
    { href: '/sprints/', name: 'AI Workflow Sprint', line: 'The pipeline we run, set up for your team.' },
  ],
  footLine: 'Not sure which one fits? Start with a free audit.',
  footCtas: [{ label: 'See the sprints', href: '/sprints/', style: 'ink' }, { label: 'Get a free audit', href: AUDIT_FREE, style: 'ink-o' }] as Btn[],
};

export const aboutCta = {
  cta: {
    eyebrow: 'Let’s talk',
    title: 'Let’s make your brand impossible to *ignore.*',
    lead: 'Tell us where you’re headed. We’ll come back with a clear first step.',
    ctas: [{ label: 'Let’s talk', href: TALK, style: 'teal' }, { label: 'Get a free audit', href: AUDIT_FREE, style: 'dark-o' }] as Btn[],
  },
  image: { src: `${A}/about/about-cta-galaxy-color.webp`, w: 1152, h: 768, pos: 'center 40%' },
};
