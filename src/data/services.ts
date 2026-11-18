// Services: the hub groups, the six Home cards and the service detail pages.
// Copy comes from wireframes v02.1 and Website Copy v02 (as already used on the demo Services page).
// Only Websites was wireframed as a detail page; the other four reuse its template with the hub's
// own lines and tags, and leave the rest held (see src/lib/held.ts, "service-copy").
import type { HeldId } from '../lib/held';
import { AUDIT_AI } from '../lib/site';

export type ServiceSlug = 'brand-identity' | 'websites' | 'campaigns-content' | 'print-packaging' | 'decks-presentations';

export interface HubRow {
  name: string;
  line: string;
  tags: string[];
  /** Detail page slug, '/ai', or null for "no detail page at launch". */
  to: ServiceSlug | '/ai' | null;
  held?: HeldId;
}
export interface HubGroup { name: string; id: string; tone: '' | 'grey' | 'dark'; rows: HubRow[] }

export const groups: HubGroup[] = [
  { name: 'Brand & Identity', id: 'brand', tone: 'grey', rows: [
    { name: 'Branding', line: 'A complete brand system, built on strategy and made to be used.', tags: ['Strategy', 'Logo suite', 'Guidelines'], to: 'brand-identity' },
    { name: 'Packaging & Merch', line: "Packaging and merchandise that carry the brand into people's hands.", tags: ['Packaging systems', 'Merch'], to: 'print-packaging' },
    { name: 'Print', line: "Print and physical materials that match everything you've built on screen.", tags: ['Brochures', 'Collateral', 'Magazine ads'], to: 'print-packaging' },
    { name: 'Presentations', line: 'Decks built as an argument first and designed second.', tags: ['Investor', 'Sales', 'Reports & eBooks'], to: 'decks-presentations' },
  ] },
  { name: 'Web & Digital', id: 'web', tone: '', rows: [
    { name: 'Web Design', line: 'Websites and landing pages with clear UX, strong visuals and conversion built in.', tags: ['Sitemap', 'UX', 'Visual design', 'Build'], to: 'websites', held: 'platforms' },
    { name: 'Landing pages', line: 'One page, one campaign, one action. Designed and built to launch on time.', tags: ['Campaign pages', 'Launch pages'], to: 'websites' },
    { name: 'Email', line: 'Branded email, designed, built and tested inside the platform you already use.', tags: ['Templates', 'Campaigns'], to: 'campaigns-content' },
    { name: 'Social', line: "Social content worth posting, made for each platform's format and pace.", tags: ['Static', 'Motion', 'Test variants'], to: 'campaigns-content' },
  ] },
  { name: 'Production', id: 'production', tone: 'grey', rows: [
    { name: 'Video', line: 'Video directed from the brand system, with shoots crewed through production partners.', tags: ['Concept to delivery'], to: 'campaigns-content' },
    { name: 'Motion', line: 'Motion and video that bring the brand system to life without breaking it.', tags: ['Motion graphics', 'Title sequences'], to: 'campaigns-content' },
    { name: 'Photo direction', line: '', tags: [], to: null, held: 'photo-video-scope' },
  ] },
  { name: 'AI Services', id: 'ai', tone: 'dark', rows: [
    { name: 'AI-enhanced creative', line: 'Senior creative direction with AI in the production line.', tags: ['Drafts', 'Variants', 'Resizes'], to: '/ai' },
    { name: 'AI consulting', line: "AI built into how your team creates, with the judgment to know where it helps and where it doesn't.", tags: ['Workflow audits', 'Training'], to: '/ai' },
    { name: 'Agent studio', line: "The studio's own AI seats plan, draft and check the work, and a person approves every step.", tags: ['Atlas', 'Specialist seats'], to: '/ai', held: 'ai-seats' },
  ] },
  { name: 'Strategy', id: 'strategy', tone: '', rows: [
    { name: 'Marketing strategy', line: 'Positioning and messaging that give every creative decision a reason.', tags: ['Plans', 'Insights'], to: null },
    { name: 'Concept creation', line: 'Campaign ideas built to work on every channel, not just one.', tags: ['Campaign ideas', '360° concepts'], to: 'campaigns-content' },
  ] },
];

// Home "What we make": six cards (structural default 1). AI links to /ai.
export const homeCards: { name: string; tags: string[]; href: string }[] = [
  { name: 'Brand Identity', tags: ['Strategy', 'Logo suite', 'Guidelines'], href: '/services/brand-identity/' },
  { name: 'Websites', tags: ['UX', 'Visual design', 'Build', 'Landing pages'], href: '/services/websites/' },
  { name: 'Campaigns & Content', tags: ['Ads', 'Social', 'Email', 'Motion'], href: '/services/campaigns-content/' },
  { name: 'Print & Packaging', tags: ['Packaging', 'Collateral', 'Magazine ads'], href: '/services/print-packaging/' },
  { name: 'Decks & Presentations', tags: ['Investor', 'Sales', 'Reports'], href: '/services/decks-presentations/' },
  { name: 'AI for Creative Teams', tags: ['Workflows', 'Training', 'Brand assistants'], href: '/ai/' },
];

export interface ServiceDetail {
  slug: ServiceSlug;
  name: string;
  headline: string;
  sub: string;
  deliverables: string;
  /** Formats/platforms spec cell: text, or a held id. */
  formats?: string;
  formatsHeld?: HeldId;
  get: { item: string; held?: HeldId }[];
  /** Work entry ids to show, in order. Empty = held. */
  work: string[];
  workTitle: string;
  workHeld?: HeldId;
  ai: { k: 'Speeds up' | 'Stays human'; v: string }[];
  /** Process steps; omitted = held. */
  process?: { n: string; t: string; d: string }[];
  faq: { q: string; a?: string; held?: HeldId }[];
  cta: string;
  /** Held items shown on this page beyond the defaults (timeline is always held). */
  copyHeld: boolean;
}

const aiGeneric: ServiceDetail['ai'] = [
  { k: 'Speeds up', v: 'First-round drafts and options to react to.' },
  { k: 'Speeds up', v: 'Variants and resizes once the direction is set.' },
  { k: 'Stays human', v: 'Strategy, direction and the final calls.' },
];

export const details: ServiceDetail[] = [
  {
    slug: 'websites',
    name: 'Websites',
    headline: 'Websites that make the case before you get the call.',
    sub: 'Strategy, design and build for marketing sites, landing pages and stores.',
    deliverables: 'Sitemap · Wireframes · Design · Build',
    formatsHeld: 'platforms',
    get: [
      { item: 'Site strategy and sitemap' }, { item: 'UX and wireframes' }, { item: 'Visual design' }, { item: 'Copy' },
      { item: 'Build', held: 'platforms' }, { item: 'Landing pages' }, { item: 'Ecommerce' }, { item: 'Launch, analytics setup and team training' },
    ],
    work: ['peace-park', 'mountain-mind-project', 'hines-goldsmiths'],
    workTitle: 'Websites we’ve built',
    ai: [
      { k: 'Speeds up', v: 'First-round layout and copy options to react to.' },
      { k: 'Speeds up', v: 'Variants and resizes of page assets.' },
      { k: 'Stays human', v: 'Structure, design decisions and the final build review.' },
    ],
    process: [
      { n: '01', t: 'Audit', d: 'Your current site, analytics and competitors.' },
      { n: '02', t: 'Structure', d: 'Sitemap, key pages and wireframes.' },
      { n: '03', t: 'Design', d: 'The visual system and every key template.' },
      { n: '04', t: 'Build and launch', d: 'Responsive build, testing, launch and handover.' },
    ],
    faq: [
      { q: 'Can you write the copy?', a: 'Yes. Copy is part of most website projects.' },
      { q: 'Can we edit it ourselves after launch?', a: 'Yes. We build on platforms your team can update, and we show them how.' },
      { q: 'Which platforms?', held: 'platforms' },
      { q: 'How long does it take?', held: 'timelines' },
    ],
    cta: 'Give your best work a better home.',
    copyHeld: false,
  },
  {
    slug: 'brand-identity',
    name: 'Brand Identity',
    headline: 'A complete brand system, built on strategy and made to be used.',
    sub: 'Strategy, logo, type, color and the guidelines that hold it together.',
    deliverables: 'Strategy · Logo suite · Guidelines',
    get: [{ item: 'Brand strategy' }, { item: 'Logo suite' }, { item: 'Type and color' }, { item: 'Brand guidelines' }],
    work: [],
    workTitle: 'Brands we’ve built',
    ai: aiGeneric,
    faq: [
      { q: 'Do you work with existing brands?', a: 'Yes. Refreshes, extensions and ongoing support are common starting points.' },
      { q: 'How many revisions?', held: 'revisions' },
      { q: 'How long does it take?', held: 'timelines' },
    ],
    cta: 'Have a project in mind?',
    copyHeld: true,
  },
  {
    slug: 'campaigns-content',
    name: 'Campaigns & Content',
    headline: 'Ads, social, email, motion and video, with variations built for testing.',
    sub: 'Campaign ideas, and the content that carries them across every channel.',
    deliverables: 'Ads · Social · Email · Motion · Video',
    get: [
      { item: 'Campaign concepts' }, { item: 'Ad creative' }, { item: 'Social: static, motion and test variants' },
      { item: 'Email templates and campaigns' }, { item: 'Motion graphics and title sequences' }, { item: 'Video, concept to delivery', held: 'photo-video-scope' },
    ],
    work: [],
    workTitle: 'Campaigns we’ve made',
    ai: aiGeneric,
    faq: [
      { q: 'Can you work with our media buyer or agency?', a: 'Yes. We deliver in the specs and naming they need.' },
      { q: 'How many revisions?', held: 'revisions' },
      { q: 'How long does it take?', held: 'timelines' },
    ],
    cta: 'Have a project in mind?',
    copyHeld: true,
  },
  {
    slug: 'print-packaging',
    name: 'Print & Packaging',
    headline: "Print and physical materials that match everything you've built on screen.",
    sub: "Packaging and merchandise that carry the brand into people's hands.",
    deliverables: 'Packaging · Collateral · Magazine ads',
    get: [{ item: 'Packaging systems' }, { item: 'Merch' }, { item: 'Brochures and collateral' }, { item: 'Magazine ads' }],
    work: ['jeremy-jones-deeper', 'gu-energy', 'asymbol'],
    workTitle: 'Print and packaging we’ve made',
    ai: aiGeneric,
    faq: [
      { q: 'Do you work with existing brands?', a: 'Yes. Refreshes, extensions and ongoing support are common starting points.' },
      { q: 'How many revisions?', held: 'revisions' },
      { q: 'How long does it take?', held: 'timelines' },
    ],
    cta: 'Have a project in mind?',
    copyHeld: true,
  },
  {
    slug: 'decks-presentations',
    name: 'Decks & Presentations',
    headline: 'Decks built as an argument first and designed second.',
    sub: 'Investor, sales and partnership decks that get read to the end.',
    deliverables: 'Investor · Sales · Reports & eBooks',
    get: [{ item: 'Investor decks' }, { item: 'Sales decks' }, { item: 'Reports and eBooks' }],
    work: [],
    workTitle: 'Decks we’ve made',
    workHeld: 'deck-work',
    ai: aiGeneric,
    faq: [
      { q: 'How many revisions?', held: 'revisions' },
      { q: 'How long does it take?', held: 'timelines' },
    ],
    cta: 'Have a project in mind?',
    copyHeld: true,
  },
];

export const aiOfferLink = AUDIT_AI;
