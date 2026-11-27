// The six service areas and their Direction A area pages (v04 · 12, Freeman's 27 Nov picks).
// Copy comes from the picked artboards in public/explore/design-a/ (brand-identity-offer-v2, web-digital-v2,
// marketing-creative-v2, ai-creative-v2, ai-for-teams-v2, services-v2 and home-v2c), with the live copy kept where
// the live page already had the same line. Edit copy here; the markup lives in src/components/a/.
//
// Markup in strings (src/lib/rich.ts): *accent word* (one per headline), [[To come: …]] for a held chip.
// No prices anywhere. Sprint lengths are draft terms (held: sprint-prices / "To come: sprint lengths and terms").
import type { Btn, BuyPanel, Cta, Feature, Hero, Offer, Step } from '../lib/a';
import { AUDIT_FREE, TALK } from '../lib/site';

export interface Area {
  slug: string;
  name: string;
  href: string;
  /** One line, used on Home "What we do", the Services hub and "Often paired with". */
  line: string;
  /** Sub-services as capsules on the Services hub. */
  caps: string[];
  buyAs: { name: string; term?: string };
  seeIn?: string;
  /** The area page. Film & Motion has none in the 27 Nov picks: its live page stays as it is. */
  page?: AreaPage;
}

export interface AreaPage {
  hero: Hero;
  next: string; // slug of the "Next:" area
  offersLead: string;
  offersSide: string;
  offers: Offer[];
  feature?: Feature;
  /** Extra white section before How to buy it (AI for Teams: how the pipeline works). */
  extra?: { eyebrow: string; title: string; side: string; steps: Step[] };
  buy: BuyPanel;
  paired: [string, string];
  cta: Cta;
  description: string;
}

const auditBtn = (style: Btn['style']): Btn => ({ label: 'Get a free audit', href: AUDIT_FREE, style });
const notSure: Cta = { title: 'Not sure where to *start?*', ctas: [{ label: 'Let’s talk', href: TALK, style: 'teal' }, auditBtn('dark-o')] };
const retainerSteps: Step[] = [
  { k: 'How it works', t: 'One request at a time', p: 'As many as fit the month.' },
  { k: 'Who does it', t: 'The same senior eye', p: 'On everything, every month.' },
  { k: 'Terms', t: 'To come', p: 'Draft, not final. [[To come: retainer terms]]' },
];
const SPRINT_BRAND = '/sprints/brand-sprint/';

export const areas: Area[] = [
  {
    slug: 'brand-identity',
    name: 'Brand Identity',
    href: '/services/brand-identity/',
    line: 'Strategy, identity and the system that holds it together.',
    // Settled 27 Nov (Freeman): the six Brand Identity offers replace the brief's locked list.
    caps: ['Brand strategy', 'Logo and identity system', 'Brand guidelines', 'Story and messaging', 'Branded imagery', 'Rebrand and refresh'],
    buyAs: { name: 'Brand Sprint', term: '2 weeks' },
    seeIn: 'Ironwood Homes',
    page: {
      description: 'Brand strategy, a logo and identity system and the guidelines that hold it together, from Dunn Creative in Jackson, WY.',
      hero: {
        eyebrow: 'Services · 01 · Brand Identity',
        title: 'A brand that *lasts.*',
        line: 'Strategy, a logo system and the guidelines that hold it together. For a new business, or one that’s outgrown its look.',
        image: { src: '/explore/design-a/assets/brand-identity-hero.webp', w: 1152, h: 768, pos: 'center 75%' },
        ctas: [{ label: 'Start a Brand Sprint', href: SPRINT_BRAND, style: 'light' }, auditBtn('light-o')],
        height: 520,
      },
      next: 'web-digital',
      offersLead: 'Branding built for clarity, consistency and growth.',
      offersSide: 'Starting from scratch or refining what you have, we build the system a growing business can run on.',
      offers: [
        { name: 'Brand strategy', line: 'Who you’re for, what sets you apart, and the one idea everything else is built on.', caps: ['Positioning session', 'Audience', 'Competitive review', 'Brand architecture'] },
        { name: 'Logo and identity system', line: 'A logo system and visual language that holds up on a website, a truck door or a business card.', caps: ['Primary logo', 'Secondary marks', 'Icon mark', 'Responsive versions', 'Type and color'] },
        { name: 'Brand guidelines', line: 'Clear standards your team, partners and vendors can follow without calling us.', caps: ['Logo use', 'Type and color', 'Image direction', 'Applications'] },
        { name: 'Story and messaging', line: 'How you sound: the story, the voice and the few messages worth repeating.', caps: ['Mission and vision', 'Values', 'Tone of voice', 'Messaging pillars', 'Brand story'] },
        { name: 'Branded imagery', line: 'How the brand looks in photography, motion and AI-directed images, labelled honestly.', caps: ['Art direction', 'Photo direction', 'AI-directed imagery', 'Motion logo', 'Image library'] },
        { name: 'Rebrand and refresh', line: 'For a business that’s outgrown its look. Keep the equity, fix what’s holding it back.', label: 'Ideal for', caps: ['Repositioning', 'Growth', 'Mergers', 'New launches', 'A tired brand'], dark: true },
      ],
      feature: {
        eyebrow: 'Selected work',
        item: {
          href: '/work/ironwood-homes/',
          img: { src: '/v2/assets/work/ironwood-homes-5.webp', alt: 'Ironwood Homes identity on signage, AI-directed mockup' },
          ai: 'AI-directed mockup',
          label: 'Brand identity · Star Valley, WY',
          title: 'Ironwood *Homes*',
          line: 'Identity, guidelines and AI-directed mockups for a custom home builder in Star Valley.',
          caps: ['Logo and identity system', 'Brand guidelines', 'Branded imagery'],
        },
      },
      buy: {
        eyebrow: 'How to buy it',
        title: 'The Brand Sprint. *Two weeks.*',
        side: 'Fixed scope, fixed date. Everything is yours from day one.',
        // Settled (Freeman): check-ins on days 1, 3, 5, 8 and 10.
        steps: [
          { k: 'Day 1', t: 'Kickoff', p: 'Your answers become the brief.' },
          { k: 'Day 3', t: 'Two directions', p: 'Shown live. You pick one on the call.' },
          { k: 'Day 5', t: 'System review', p: 'Logo, type and color refined.' },
          { k: 'Day 8', t: 'Menu pieces', p: 'Your chosen pieces, adjusted live.' },
          { k: 'Day 10', t: 'Handover', p: 'Guidelines and every file, in your name.' },
        ],
        ctas: [{ label: 'Start a Brand Sprint', href: SPRINT_BRAND, style: 'teal' }, { label: 'See all sprints', href: '/sprints/', style: 'dark-o' }],
      },
      paired: ['web-digital', 'marketing-creative'],
      cta: notSure,
    },
  },
  {
    slug: 'web-digital',
    name: 'Web & Digital',
    href: '/services/web-digital/',
    line: 'Sites that look right, load fast and get found.',
    caps: ['Web design', 'Website development', 'Landing pages', 'Custom CMS', 'E-commerce', 'SEO and AEO'],
    buyAs: { name: 'Web Sprint', term: '2–4 weeks' },
    seeIn: 'Mountain Mind Project',
    page: {
      description: 'Websites and landing pages from Dunn Creative, designed and built to look right, load fast and get found.',
      hero: {
        eyebrow: 'Services · 02 · Web & Digital',
        title: 'A website that *works.*',
        line: 'Sites that look right, load fast and get found. For a first site, a redesign or a single landing page.',
        image: { src: '/explore/design-a/assets/heroes/web-digital-hero-orbits.webp', w: 1152, h: 768, pos: 'center 40%' },
        ctas: [{ label: 'Start a Web Sprint', href: TALK, style: 'light' }, auditBtn('light-o')],
        height: 520,
      },
      next: 'marketing-creative',
      offersLead: 'Websites built to look right, load fast and get found.',
      offersSide: 'A first site, a redesign or one landing page, designed and built by the same team.',
      offers: [
        { name: 'Web design', line: 'Sites built around your audience, your content and the one thing you want visitors to do.', caps: ['Sitemap and page goals', 'Wireframes', 'Page design', 'Responsive layouts', 'Design system'] },
        { name: 'Website development', line: 'Built on the platform that fits how you work, with editing your team can handle.', caps: ['Astro builds', 'Webflow builds', 'Custom CMS', 'Blog setup', 'Speed and accessibility'] },
        { name: 'Landing pages', line: 'One page, one goal, for a launch, a campaign or an offer.', caps: ['Launch pages', 'Campaign pages', 'Lead forms', 'Test variations'] },
        { name: 'E-commerce', line: 'An online store, so customers can buy from you direct.', caps: ['Store design', 'Product pages', 'Collections', 'Checkout flow'] },
        { name: 'Get found: SEO and AEO', line: 'So people, and the AI tools they ask, can find you.', caps: ['Technical SEO', 'Site structure', 'Schema markup', 'Search-ready copy', 'Local search'] },
        { name: 'Care and updates', line: 'New pages and changes, ordered as you need them, from the team that built the site.', caps: ['New pages', 'Content updates', 'Fixes', 'Performance checks'], dark: true },
      ],
      feature: {
        eyebrow: 'Selected work',
        item: {
          href: '/work/mountain-mind-project/',
          img: { src: '/v2/assets/work/mountain-mind-project.webp', alt: 'Mountain Mind Project website homepage' },
          label: 'Website · Jackson, WY',
          title: 'Mountain Mind *Project*',
          line: 'A full redesign for a mindfulness training company, with our own photography.',
          caps: ['Web design', 'Website development', 'Photography'],
        },
      },
      buy: {
        eyebrow: 'How to buy it',
        title: 'The Web Sprint. *Two or four weeks.*',
        side: 'A landing page in two weeks, or a site of up to five pages in four. Draft terms.',
        steps: [
          { k: 'Day 1', t: 'Kickoff', p: 'Sitemap and page goals agreed.' },
          { k: 'Day 5', t: 'Homepage design', p: 'Shown on a live call, decided on the call.' },
          { k: 'Day 10', t: 'All pages designed', p: 'Every page signed off before the build.' },
          { k: 'Day 15', t: 'Staging review', p: 'The working site on a private link.' },
          { k: 'Day 20', t: 'Live', p: 'Launched on your domain, with a recorded walkthrough.' },
        ],
        note: 'A landing page runs the same steps in 10 days.',
        ctas: [{ label: 'Start a Web Sprint', href: TALK, style: 'teal' }, { label: 'See all sprints', href: '/sprints/', style: 'dark-o' }],
      },
      paired: ['brand-identity', 'marketing-creative'],
      cta: notSure,
    },
  },
  {
    slug: 'marketing-creative',
    name: 'Marketing Creative',
    href: '/services/marketing-creative/',
    line: 'The everyday work that keeps a brand in front of people.',
    caps: ['Ad creative', 'Social media creative', 'Email campaigns', 'Pitch decks', 'Print and collateral', 'Packaging and merch'],
    buyAs: { name: 'Creative Retainer', term: 'Monthly' },
    seeIn: 'Asymbol',
    page: {
      description: 'Ads, social, email, decks, print and packaging from Dunn Creative: one brand, every channel.',
      hero: {
        eyebrow: 'Services · 03 · Marketing Creative',
        title: 'One brand, *every channel.*',
        line: 'The everyday work that keeps a brand in front of people: ads, social, email, decks, print and packaging.',
        image: { src: '/explore/design-a/assets/heroes/marketing-creative-hero-hoverboard.webp', w: 1152, h: 768, pos: 'center 45%' },
        ctas: [{ label: 'Start a marketing project', href: TALK, style: 'light' }, auditBtn('light-o')],
        height: 520,
      },
      next: 'film-motion',
      offersLead: 'Marketing creative for a launch, a campaign or the everyday work in between.',
      offersSide: 'Designed by the team that knows your brand, so every piece looks like it came from the same place.',
      offers: [
        { name: 'Ad creative', line: 'Static, animated and video ads for every channel, with variations to test.', caps: ['Static ads', 'Animated ads', 'Video ads', 'Size sets', 'Test variations'] },
        { name: 'Social media creative', line: 'Posts, stories and short motion that look like you on every platform.', caps: ['Static posts', 'Motion posts', 'Stories and reels', 'Templates', 'Launch content'] },
        { name: 'Email design and campaigns', line: 'Branded templates and campaigns, designed to be read.', caps: ['Email templates', 'Campaign design', 'Newsletters', 'Launch emails'] },
        { name: 'Decks and reports', line: 'Pitch decks, sales presentations and reports that tell the story clearly.', caps: ['Pitch decks', 'Sales presentations', 'Deck templates', 'eBooks', 'Reports'] },
        { name: 'Print and collateral', line: 'The printed pieces that still matter, matched to the screen.', caps: ['Brochures', 'Business cards', 'Signage', 'Posters'] },
        { name: 'Packaging and merch', line: 'Packaging and merchandise that carry the brand off the screen.', caps: ['Packaging', 'Labels', 'Apparel', 'Merch'], dark: true },
      ],
      feature: {
        eyebrow: 'Selected work',
        item: {
          href: '/work/asymbol/',
          img: { src: '/v2/assets/work/asymbol.webp', alt: 'Asymbol x Union limited-edition binding launch' },
          label: 'Marketing creative · Jackson, WY',
          title: '*Asymbol*',
          line: 'Ads, email, social and a binding launch with Union and Bryan Iguchi.',
          caps: ['Campaign design', 'Email marketing', 'Social media'],
        },
      },
      buy: {
        eyebrow: 'How to buy it',
        title: 'The Creative Retainer. *Monthly.*',
        side: 'Ongoing design for teams that ship every week: ads, social, email, decks and site updates. Draft terms.',
        steps: retainerSteps,
        ctas: [{ label: 'Start a Creative Retainer', href: TALK, style: 'teal' }, { label: 'See all sprints', href: '/sprints/', style: 'dark-o' }],
      },
      paired: ['brand-identity', 'ai-creative'],
      cta: notSure,
    },
  },
  {
    slug: 'film-motion',
    name: 'Film & Motion',
    href: '/services/film-motion/',
    line: 'Film-grade work for launches and campaigns.',
    caps: ['Launch films', 'Motion design', 'Key art and packaging', 'Titles and intros', 'Edits and cutdowns'],
    buyAs: { name: 'Launch Film', term: '3 weeks' },
    seeIn: 'Jeremy Jones’ Deeper',
  },
  {
    slug: 'ai-creative',
    name: 'AI Creative',
    href: '/services/ai-creative/',
    line: 'Human-led AI imagery, directed and labelled.',
    caps: ['AI imagery', 'AI illustration', 'AI video', 'Product and concept visuals', 'Content at scale'],
    buyAs: { name: 'Creative Retainer', term: 'Monthly' },
    seeIn: 'Ironwood Homes mockups',
    page: {
      description: 'Human-led AI imagery, illustration and video from Dunn Creative. A creative director runs every step, and every piece is labelled.',
      hero: {
        eyebrow: 'Services · 05 · AI Creative',
        title: 'AI, with a *director.*',
        line: 'Human-led AI imagery, illustration and video. A creative director runs every step, and every piece is labelled.',
        image: { src: '/explore/design-a/assets/heroes/ai-creative-hero.webp', w: 1152, h: 768, pos: 'center 40%' },
        ctas: [{ label: 'Start a project', href: TALK, style: 'light' }, auditBtn('light-o')],
        height: 520,
      },
      next: 'ai-for-teams',
      offersLead: 'AI in the production line, with a creative director in charge of it.',
      offersSide: 'More options, faster, without giving up the craft or the brand.',
      offers: [
        { name: 'AI imagery', line: 'A library of on-brand images, directed by a person and labelled honestly.', caps: ['Image libraries', 'Lifestyle scenes', 'Hero images', 'Backgrounds'] },
        { name: 'AI illustration', line: 'Custom illustration that extends the identity across marketing and products.', caps: ['Spot illustrations', 'Editorial art', 'Icons and patterns', 'Series art'] },
        { name: 'AI video', line: 'Storyboards, footage, edits and voiceover, with AI in each stage.', caps: ['Storyboards', 'Generated footage', 'Edits', 'Voiceover', 'Social cutdowns'] },
        { name: 'Product and concept visuals', line: 'New product scenes and seasonal visuals from what you already have.', caps: ['Product scenes', 'Mockups', 'Concept boards', 'Seasonal visuals'] },
        { name: 'Content at scale', line: 'Resizes, versions and variants for every channel.', caps: ['Resizes', 'Versions', 'Variants', 'Channel sets'] },
        { name: 'Directed and labelled', line: 'AI drafts, versions and resizes. A person directs every step, and taste decides what ships.', label: 'Every piece is', caps: ['Human-directed', 'Labelled as AI', 'Checked against your brand', 'Yours to use'], dark: true },
      ],
      feature: {
        eyebrow: 'Selected work',
        item: {
          href: '/work/ironwood-homes/',
          img: { src: '/work/ironwood-homes/mockup-merch.webp', alt: 'Ironwood Homes caps and tee, AI-directed mockup' },
          ai: 'AI-directed mockup',
          label: 'AI-directed mockups · Star Valley, WY',
          title: 'Ironwood *Homes*',
          line: 'Every scene is an AI-directed mockup, made to show the identity on real touchpoints.',
          caps: ['Truck door', 'Wall sign', 'Caps and tee'],
        },
      },
      buy: {
        eyebrow: 'How to buy it',
        title: 'The Creative Retainer. *Monthly.*',
        side: 'Ongoing design for teams that ship every week: ads, social, email, decks and site updates. Draft terms.',
        steps: retainerSteps,
        ctas: [{ label: 'Start a Creative Retainer', href: TALK, style: 'teal' }, { label: 'See all sprints', href: '/sprints/', style: 'dark-o' }],
      },
      paired: ['marketing-creative', 'ai-for-teams'],
      cta: { title: 'Want AI in your creative, *done properly?*', ctas: [{ label: 'Let’s talk', href: TALK, style: 'teal' }, auditBtn('dark-o')] },
    },
  },
  {
    slug: 'ai-for-teams',
    name: 'AI for Teams',
    href: '/services/ai-for-teams/',
    line: 'The pipeline we run, set up for your team.',
    caps: ['AI workflow setup', 'Team training', 'AI consulting and strategy'],
    buyAs: { name: 'AI Workflow Sprint', term: '2 weeks' },
    page: {
      description: 'Practical AI for creative and marketing teams from Dunn Creative: workflows, training and strategy, set up in the tools you already use.',
      hero: {
        eyebrow: 'Services · 06 · AI for Teams',
        title: 'Our pipeline, *your team.*',
        line: 'Practical AI for creative and marketing teams: the workflows, the training and the strategy, set up in the tools you already use.',
        image: { src: '/explore/design-a/assets/heroes/ai-for-teams-hero.webp', w: 1152, h: 768, pos: 'center 40%' },
        ctas: [{ label: 'Start an AI Workflow Sprint', href: TALK, style: 'light' }, { label: 'Schedule an AI consultation', href: '/contact/?way=call#audit', style: 'light-o' }],
        height: 520,
      },
      next: 'brand-identity',
      offersLead: 'Practical AI for creative and marketing teams.',
      offersSide: 'We set up the same human-led pipeline we run every day, in your tools, for the jobs your team does every week.',
      offers: [
        { name: 'AI workflow setup', line: 'AI built into the work you already do: brand, social, campaigns, decks, web and video.', caps: ['Workflow map', 'Tool setup', 'Template library', 'Brand rules for AI', 'QA checklist'] },
        { name: 'Team training', line: 'Prompting and AI-assisted design and writing, used well and responsibly.', caps: ['Live team session', 'Recorded walkthrough', 'How-we-use-AI guide', '30-day check-in'] },
        { name: 'AI consulting and strategy', line: 'Where AI fits your workflows, skills and readiness, with quick wins first.', caps: ['Readiness review', 'Tool choices', 'Roadmap', 'Quick wins'] },
      ],
      extra: {
        eyebrow: 'How the pipeline works',
        title: 'Human creativity. *AI acceleration.*',
        side: 'AI drafts, versions and resizes. A person directs every step, and taste decides what ships.',
        steps: [
          { k: '01', t: 'AI does the legwork', p: 'First drafts, versions and variations, resizes and production, checks against the brand.' },
          { k: '02', t: 'People do the thinking', p: 'Strategy, creative direction, taste and curation, and the final call.' },
          { k: '03', t: 'Labelled, always', p: 'You always know what was AI-assisted, on every project and every image.' },
        ],
      },
      buy: {
        eyebrow: 'How to buy it',
        title: 'The AI Workflow Sprint. *Two weeks.*',
        side: 'We map how your team makes creative work, then set up and hand over an AI pipeline that fits it. Draft terms.',
        steps: [
          { k: 'Day 1', t: 'Kickoff', p: 'We walk through your current workflow and tools.' },
          { k: 'Day 3', t: 'Pipeline plan', p: 'You approve what gets automated and what stays human.' },
          { k: 'Day 6', t: 'Setup', p: 'Templates, board and QA steps set up in your tools.' },
          { k: 'Day 8', t: 'Training', p: 'A live session with the people who will run it.' },
          { k: 'Day 10', t: 'Handover', p: 'Playbook and recorded walkthrough.' },
        ],
        note: 'Before day 1: a short questionnaire on how your team makes and approves creative work.',
        ctas: [{ label: 'Start an AI Workflow Sprint', href: TALK, style: 'teal' }, { label: 'See all sprints', href: '/sprints/', style: 'dark-o' }],
      },
      paired: ['ai-creative', 'marketing-creative'],
      cta: { title: 'Start small. *Scale when it works.*', ctas: [{ label: 'Let’s talk', href: TALK, style: 'teal' }, auditBtn('dark-o')] },
    },
  },
];

export const area = (slug: string) => {
  const a = areas.find((x) => x.slug === slug);
  if (!a) throw new Error(`areas.ts: no area "${slug}"`);
  return a;
};
export const areaNumber = (slug: string) => String(areas.findIndex((x) => x.slug === slug) + 1).padStart(2, '0');
