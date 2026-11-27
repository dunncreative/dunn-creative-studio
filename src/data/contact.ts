// Contact (v04 · 12): Freeman's 27 Nov pick, A · Contact (contact-a.html). The form's options and the "What happens
// next" steps are the live Contact page's (src/v2/contact.html). The budget question stays out (held: budget-ranges).
// The form is a preview: nothing is sent until a form handler is chosen (same as the live page).
import type { Hero } from '../lib/a';
import { WAYS_IN } from '../lib/site';

export const contactHero: Hero = {
  eyebrow: 'Contact',
  title: 'Tell us what you’re *building.*',
  line: 'We’ll review it and follow up with the best next step.',
  // README hero mapping (proposed by Claude, Freeman can swap): dunncreative-website-hero-image-4.
  image: { src: '/explore/design-a/assets/heroes/contact-hero-cd-moon.webp', w: 1248, h: 832, pos: 'center 60%' },
  ctas: [{ label: 'Start the form ↓', href: '#form', style: 'light' }, { label: 'Get a free audit', href: '#audit', style: 'light-o' }],
  height: 560,
};

export const needs = ['Brand Identity', 'Web & Digital', 'Marketing Creative', 'Film & Motion', 'AI Creative', 'AI for Teams', 'Not sure yet'];
export const kinds = ['New brand', 'Brand refresh', 'New website', 'Website redesign', 'Pitch deck or presentation', 'Campaign or content', 'Print or packaging', 'Ongoing creative support', 'AI for my team', 'Other'];
export const timings = ['As soon as possible', 'Within 2 to 4 weeks', 'Within 1 to 2 months', '2+ months', 'Flexible or exploring'];

export const nextSteps = [
  { t: 'You tell us what you’re building', p: 'The form here, an email or a call. Whatever is easiest.' },
  { t: 'We read it', p: 'We read every inquiry.' },
  { t: 'A short call', p: 'Goals, timing and the right way in.' },
  { t: 'A clear next step', p: 'An audit or a plan, with the scope written down.' },
];

/** "Other ways to start": the three ways in (src/lib/site.ts WAYS_IN, settled 18 Nov), artboard lines, held details. */
export const otherWays = [
  { id: 'free', name: 'Free audit', line: 'A senior review of brand, site or workflow, with what to fix.', held: 'To come: audit format', href: WAYS_IN[0].href },
  { id: 'call', name: 'Book a call', line: 'Talk it through with Chris before you write anything up.', held: 'To come: booking link', href: WAYS_IN[1].href },
  { id: 'advanced', name: 'Advanced audit', line: 'A deeper, paid review.', held: 'To come: advanced audit scope and fee', href: WAYS_IN[2].href },
];
