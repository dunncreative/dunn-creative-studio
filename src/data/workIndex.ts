// Work index (v04 · 12): Freeman's pick A · Work v3 (work-v4.html): six projects, two per row, filter chips and
// the big closing CTA. Four case studies (pages from src/data/caseStudies.ts, kept exactly as live) plus Peace Park
// and GU Energy, which use their existing images and have no case study pages. The "More work" strip is retired.
// Card lines are the live Work page lines.
import type { Btn, Cta, Hero, HeroImage, Step, WorkItem } from '../lib/a';
import { AUDIT_FREE, TALK } from '../lib/site';

export interface WorkEntry extends WorkItem { homeLabel?: string }

export const work: WorkEntry[] = [
  {
    slug: 'ironwood-homes', title: 'Ironwood Homes', label: 'Ironwood Homes · Branding', homeLabel: 'Brand identity', href: '/work/ironwood-homes/',
    line: 'Brand identity for a custom home builder serving Star Valley, Wyoming.',
    img: { src: '/v2/assets/work/ironwood-homes-5.webp', alt: 'Ironwood Homes logo carved into a wood entrance sign', w: 1280, h: 816 },
    ai: 'AI-directed mockup', areas: ['brand-identity', 'ai-creative'],
  },
  {
    slug: 'mountain-mind-project', title: 'Mountain Mind Project', label: 'Mountain Mind Project · Web & Digital', homeLabel: 'Web & Digital', href: '/work/mountain-mind-project/',
    line: 'A full redesign for a mindfulness training company, with our own photography.',
    img: { src: '/v2/assets/work/mountain-mind-project.webp', alt: 'Mountain Mind Project home page', w: 900, h: 562 },
    areas: ['web-digital'],
  },
  {
    slug: 'jeremy-jones-deeper', title: 'Jeremy Jones’ Deeper', label: 'Teton Gravity Research · Campaigns', homeLabel: 'Film & Motion', href: '/work/jeremy-jones-deeper/',
    line: 'Packaging, poster, ads and DVD menu for TGR’s snowboard film Deeper.',
    img: { src: '/v2/assets/work/jeremy-jones-deeper-1.webp', alt: 'Deeper key art: the film title over a black-and-white mountain face', w: 1400, h: 1054, fit: 'contain', dark: true },
    areas: ['film-motion', 'marketing-creative'],
  },
  {
    slug: 'asymbol', title: 'Asymbol', label: 'Asymbol · Campaigns', homeLabel: 'Marketing Creative', href: '/work/asymbol/',
    line: 'Ads, email, social and a binding launch with Union and Bryan Iguchi.',
    img: { src: '/v2/assets/work/asymbol.webp', alt: 'Teaser image for the Asymbol × Union limited-edition binding, designed by Bryan Iguchi', w: 900, h: 900, fit: 'contain', dark: true },
    areas: ['marketing-creative'],
  },
  {
    slug: 'peace-park', title: 'Peace Park', label: 'Peace Park · Web & Digital',
    img: { src: '/work/peace-park/screen-home-485.png', alt: 'Peace Park website home page on a phone', w: 485, h: 844, pos: 'top' },
    areas: ['web-digital'],
  },
  {
    slug: 'gu-energy', title: 'GU Energy', label: 'GU Energy · Marketing Creative',
    img: { src: '/work/gu-energy/gu-international-energy-drink-mix-social-ad-600x400-bike-01.webp', alt: 'GU Energy Drink Mix social ad with a cyclist', w: 600, h: 400 },
    areas: ['marketing-creative'],
  },
];

export const workHero: Hero = {
  eyebrow: 'Work · 6 projects',
  title: 'Work that *holds up.*',
  line: 'Brands, websites and films for founder-led businesses, outdoor brands and filmmakers. 20+ years of it, from Teton Gravity Research to a home builder in Star Valley.',
  // README hero mapping (proposed by Claude, Freeman can swap): Dunn-Creative-Graphics-Armor-009-Wide.
  image: { src: '/explore/design-a/assets/heroes/work-hero-cd-armor.webp', w: 1536, h: 1024, pos: 'center 40%' },
  ctas: [{ label: 'Start a project', href: TALK, style: 'light' }, { label: 'Get a free audit', href: AUDIT_FREE, style: 'light-o' }],
  height: 560,
};

/** Filter chips: service areas (slugs from src/data/areas.ts) that have work on the page. */
export const workFilters = ['brand-identity', 'web-digital', 'marketing-creative', 'film-motion', 'ai-creative'];

export const workCta: { cta: Cta; image: HeroImage; steps: Step[] } = {
  cta: {
    eyebrow: 'Next project',
    title: 'Let’s make the brand *match the work.*',
    lead: 'Brand, web, film and AI under one creative director. Tell us what you’re building, and we’ll come back with a plan.',
    ctas: [{ label: 'Start a project', href: TALK, style: 'teal' } as Btn, { label: 'Get a free audit', href: AUDIT_FREE, style: 'light-o' } as Btn],
  },
  // As on the artboard: Freeman's galaxy image, framed differently from the Sprints hero (center 30% vs 95%).
  image: { src: '/explore/design-a/assets/sprints-hero-galaxy.webp', w: 1152, h: 768, pos: 'center 30%' },
  steps: [
    { k: '01', t: 'Free audit', p: 'An honest look at your brand and site: what’s working and what isn’t.' },
    { k: '02', t: 'Sprint', p: 'Fixed scope, fixed date, senior work. Brand, web or a launch film.' },
    { k: '03', t: 'Retainer', p: 'The same team, month to month, once the foundation is in.' },
  ],
};
