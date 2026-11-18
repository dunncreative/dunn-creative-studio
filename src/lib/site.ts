// Site-wide settings: navigation, where the CTAs go, and the six structural defaults from
// wireframes v02.1 (index, "Open structural questions"). Freeman hasn't confirmed the six yet,
// so each one is a switch here and on /held, not something baked into a page.

export const EMAIL = 'chris@dunncreative.com';
export const PLACE = 'Jackson, WY';

/** Main CTA, "Let's talk". */
export const TALK = '/contact/';
/** The one Audit offer (default 3). `track` preselects the brand/web or AI track. */
export const AUDIT = '/contact/#audit';
export const AUDIT_AI = '/contact/?track=ai#audit';

export const NAV = [
  { label: 'Work', href: '/work/' },
  { label: 'Services', href: '/services/' },
  { label: 'AI', href: '/ai/' },
  { label: 'Lab', href: '/lab/' },
  { label: 'About', href: '/about/' },
];

export const FOOTER_NAV = [...NAV, { label: 'Contact', href: '/contact/' }];

// The six open structural questions, with the wireframes' recommendations applied as defaults.
export const defaults = [
  {
    q: 'Six service cards, not the Content Plan’s five',
    applied: 'Brand Identity, Websites, Campaigns & Content, Print & Packaging, Decks & Presentations, AI for Creative Teams. The AI card links to /ai, not a /services/ai page.',
    where: 'src/data/services.ts (homeCards)',
  },
  {
    q: 'Work page CTA label',
    applied: '“Let’s talk” on /work. “Start a project” stays on case studies only.',
    where: 'src/pages/work/index.astro',
  },
  {
    q: 'One Audit or two',
    applied: 'One Audit with a brand/web track and an AI track, on one path (/contact/#audit). Free or paid is still open.',
    where: 'src/lib/site.ts (AUDIT, AUDIT_AI)',
  },
  {
    q: 'Lab series page',
    applied: 'A teaser band on /lab. The /lab/[series] template is not built yet.',
    where: 'src/pages/lab/index.astro',
  },
  {
    q: 'Case study closing',
    applied: 'Ends on Next project with no CTA band; the sticky “Start a project” is the CTA.',
    where: 'src/pages/work/[slug].astro',
  },
  {
    q: 'Production group',
    applied: 'Photo direction listed under Production with no detail page. No Video or Motion detail pages yet.',
    where: 'src/data/services.ts (groups)',
  },
];

/** Nav look for every page: 'light' for now (Freeman, 18 Nov). A page can pass nav="dark" to Work. */
export const NAV_THEME: 'light' | 'dark' = 'light';
