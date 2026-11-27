// Home (v04 · 12): Freeman's pick A · Home v2c (home-v2c.html): v2 hero, the service list first, Selected work
// two per row, How to work with us, Who you work with, closing CTA. Headline settled: "Big-studio craft.
// Small-studio care." Edit copy here.
import type { BuyPanel, Cta, Hero } from '../lib/a';
import { AUDIT_FREE, TALK } from '../lib/site';

export const homeHero: Hero = {
  eyebrow: 'Brand · Web & Digital · Film & Motion · AI',
  title: 'Big-studio craft.\n*Small-studio care.*',
  // Live line (the buyer sentence Freeman settled, docs/duet/), same as the artboard.
  line: 'Dunn Creative works with founder-led and family-run businesses whose brand hasn’t caught up with their work: outdoor and lifestyle brands, filmmakers and athletes, wellness studios and retreats, and established local companies ready to modernize.',
  wideLine: true,
  // README hero mapping (proposed by Claude, Freeman can swap): dunncreative-website-hero-image-1.
  image: { src: '/explore/design-a/assets/heroes/home-hero-cd-book.webp', w: 1536, h: 1024, pos: 'center 40%' },
  ctas: [{ label: 'Let’s talk', href: TALK, style: 'light' }, { label: 'Get a free audit', href: AUDIT_FREE, style: 'light-o' }],
  height: 600,
};

/** "Work for" row under the hero: the live list ("Brands we've built work for"), as on the artboard. */
export const workFor = ['Teton Gravity Research', 'Brain Farm', 'GU Energy', 'Stio', 'Peace Park', 'Asymbol', 'Ironwood Homes'];

/** Selected work, two per row: the four case studies (slugs in src/data/workIndex.ts). */
export const homeWork = ['ironwood-homes', 'mountain-mind-project', 'jeremy-jones-deeper', 'asymbol'];

export const howToWork: BuyPanel = {
  eyebrow: 'How to work with us',
  title: 'Start small. Scale when it works.',
  steps: [
    { k: '01', t: 'Audit', p: 'A free senior review of your brand and site, with what to fix first.' },
    { k: '02', t: 'Sprint', p: 'Fixed scope, fixed date: brand, web, film or AI workflow.' },
    { k: '03', t: 'Retainer', p: 'The same senior eye on the work that follows, month to month.' },
  ],
  big: true,
  ctas: [{ label: 'See the sprints', href: '/sprints/', style: 'dark-o' }],
};

export const whoYouWorkWith = {
  // The portrait live on Home (public/v2/assets/chris-portrait.webp).
  img: { src: '/v2/assets/chris-portrait.webp', alt: 'Christopher Dunn', w: 900, h: 900 },
  eyebrow: 'Who you work with',
  title: 'Every project is directed by Chris Dunn. *AI does the legwork.* People do the thinking.',
  body: '20+ years in creative direction, brand, web and content, most of it in action sports, film and lifestyle, where the work has to look as good as the footage.',
};

export const homeCta: Cta = {
  title: 'Have a project in mind?',
  ctas: [{ label: 'Let’s talk', href: TALK, style: 'teal' }, { label: 'Get a free audit', href: AUDIT_FREE, style: 'dark-o' }],
};
