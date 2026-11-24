// Site-wide settings: navigation, where the CTAs go, and the six structural defaults from
// wireframes v02.1 (index, "Open structural questions"). Freeman hasn't confirmed the six yet,
// so each one is a switch here and on /held, not something baked into a page.

export const EMAIL = 'chris@dunncreative.com';
export const PLACE = 'Jackson, WY';

/** Main CTA, "Let's talk". */
export const TALK = '/contact/';
/** Audit and lead path (decided 18 Nov): three ways in, all on /contact/#audit. `way` preselects one. No prices. */
export const AUDIT = '/contact/#audit';
export const AUDIT_FREE = '/contact/?way=free#audit';
export const AUDIT_CALL = '/contact/?way=call#audit';
export const AUDIT_ADV = '/contact/?way=advanced#audit';

export const FREE_AUDIT_LINE = 'A short written review of your site with the top fixes, within 5 business days.';
export const WAYS_IN = [
  { id: 'free', name: 'Free audit', line: FREE_AUDIT_LINE, href: AUDIT_FREE, credit: false },
  { id: 'call', name: 'Book a call', line: 'A short call to talk through what you need and where to start.', href: AUDIT_CALL, credit: false },
  { id: 'advanced', name: 'Advanced audit', line: 'A deeper, paid review of your brand, site and creative workflow, including AI workflow recommendations, with a prioritized plan.', href: AUDIT_ADV, credit: true },
] as const;

// Main nav (24 Nov page picks): Work · Services · Sprints · Lab · About. AI lives under Services.
export const NAV = [
  { label: 'Work', href: '/work/' },
  { label: 'Services', href: '/services/' },
  { label: 'Sprints', href: '/sprints/' },
  { label: 'Lab', href: '/lab/' },
  { label: 'About', href: '/about/' },
];

export const FOOTER_NAV = [...NAV, { label: 'Contact', href: '/contact/' }];

// The six open structural questions, with the wireframes' recommendations applied as defaults.
export const defaults = [
  {
    q: 'Six service cards, not the Content Plan’s five',
    applied: 'Settled 24 Nov (page picks): six areas everywhere: Brand Identity, Websites, Marketing Creative, Film & Motion, AI Creative, AI for Teams. AI Creative and AI for Teams link to /ai.',
    where: 'src/lib/site.ts (SERVICE_AREAS) and the v2 page markup',
  },
  {
    q: 'Work page CTA label',
    applied: '“Let’s talk” on /work. “Start a project” stays on case studies only.',
    where: 'src/pages/work/index.astro',
  },
  {
    q: 'One Audit or two',
    applied: 'Settled 18 Nov: three ways in (free audit, book a call, paid advanced audit), on one path (/contact/#audit). No prices shown.',
    where: 'src/lib/site.ts (WAYS_IN)',
  },
  {
    q: 'Lab series page',
    applied: 'A teaser band on /lab, plus a /lab/[slug] story page for each wireframed piece (lorem until written).',
    where: 'src/pages/lab/index.astro',
  },
  {
    q: 'Case study closing',
    applied: 'Ends on Next project (wireframe row 15). The floating “Start a project” button stays.',
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

/** The six service areas, everywhere on the site (24 Nov page picks). */
export const SERVICE_AREAS = [
  { label: 'Brand Identity', href: '/services/brand-identity/' },
  { label: 'Websites', href: '/services/websites/' },
  { label: 'Marketing Creative', href: '/services/marketing-creative/' },
  { label: 'Film & Motion', href: '/services/#video' },
  { label: 'AI Creative', href: '/ai/' },
  { label: 'AI for Teams', href: '/ai/#team' },
];
