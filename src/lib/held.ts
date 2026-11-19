// Every item the wireframes v02.1 hold for Freeman, in one place.
//
// How to swap an answer in: set `answer` on the item. Every <Held id="…" /> on the site then shows
// the answer instead of the placeholder chip. Items with no answer render as a dashed "Held" chip
// while SHOW_HELD is true (preview), and render nothing when it is false (launch).
//
// Nothing here is a fact until Freeman answers it. Never fill `answer` from anywhere but Freeman.

export const SHOW_HELD = true;

export interface HeldItem {
  /** Short label shown on the chip. */
  label: string;
  /** The question for Freeman, as it appears on /held. */
  ask: string;
  /** Pages the item appears on (for /held). */
  pages: string[];
  /** What the preview uses meanwhile, if anything. */
  meanwhile?: string;
  /** Freeman's answer. When set, <Held> renders this text instead of the chip. */
  answer?: string;
}

export const held = {
  'response-time': {
    label: 'response-time promise',
    ask: 'How fast do you reply to an inquiry (for example, within one business day)?',
    pages: ['Home', 'Contact'],
  },
  'audit-format': {
    label: 'audit: free or paid, format, turnaround',
    ask: 'Is the Audit free or paid, what format is it, and how long does it take?',
    pages: ['Home', 'Services', 'AI', 'Contact'],
    answer: 'Settled 18 Nov (Audit and Lead Path decision): a free audit (a short written review of your site with the top fixes, within 5 business days), book a call, or a paid advanced audit. No prices on the site.',
  },
  'audit-credit': {
    label: 'advanced audit fee comes off the project',
    ask: 'Confirm the line “the advanced audit fee comes off the project” (no figure shown).',
    pages: ['Home', 'Services', 'AI', 'Contact'],
    meanwhile: 'Shown as a Held chip beside the advanced audit until confirmed.',
  },
  'budget-ranges': {
    label: 'budget range values',
    ask: 'What are the four budget ranges on the contact form? (Chips are approved; values are not set.)',
    pages: ['Contact'],
  },
  platforms: {
    label: 'build platforms',
    ask: 'Which platforms do you build sites on (for example Webflow, Astro, Shopify)?',
    pages: ['Services', 'Websites'],
  },
  revisions: {
    label: 'revision rounds',
    ask: 'How many revision rounds come with most projects? The draft line says two to three.',
    pages: ['Services', 'Service pages'],
  },
  'photo-video-scope': {
    label: 'photo and video scope',
    ask: 'What does photo direction and video cover, and which parts are crewed through partners?',
    pages: ['Services', 'Campaigns & Content'],
  },
  timelines: {
    label: 'typical timeline',
    ask: 'What is the typical timeline for each service (Brand, Websites, Campaigns, Print, Decks)?',
    pages: ['Service pages'],
  },
  'portrait-home': {
    label: 'portrait pick (Home)',
    ask: 'Which portrait goes in the Home founder band? Default: Chris-Dunn-Portrait-1.jpg.',
    pages: ['Home'],
    meanwhile: "The studio's current black-and-white portrait, until Portrait-1 is in the repo.",
  },
  'portrait-about': {
    label: 'portrait pick (About)',
    ask: 'Which portrait goes at the top of About? Default: Chris-Dunn-Portrait-2.jpg (different from Home).',
    pages: ['About'],
    meanwhile: 'A labelled slot. The file is in Dropbox, which this build cannot download from.',
  },
  'about-photos': {
    label: 'Wyoming photos',
    ask: 'Please add the two Wyoming photos (Green River fly fishing, Grand Teton backcountry) to the repo or the chat.',
    pages: ['About'],
    meanwhile: 'Labelled slots with the file names.',
  },
  'hero-reel': {
    label: 'final hero reel cut',
    ask: 'Is dunn-creative-hero-imagery-4.MP4 the hero reel, and is there a final cut to compress?',
    pages: ['Home'],
    meanwhile: 'The Ridge hero: a drawn SVG ridge line over the dark band, with no reel or image yet.',
  },
  'client-logos': {
    label: 'client logo files',
    ask: 'Please add the seven client logo files (Client-Logos-For-Website, plus an Ironwood Homes export).',
    pages: ['Home'],
    meanwhile: 'Client names set as type.',
  },
  network: {
    label: 'describe the network',
    ask: 'How should the specialist network be described (who, roughly how many, which crafts)?',
    pages: ['About'],
  },
  ownership: {
    label: 'ownership terms',
    ask: 'Who owns the work, including AI-assisted assets, once a project is paid?',
    pages: ['AI'],
  },
  'ai-seats': {
    label: 'public AI seat names',
    ask: 'Can the agent studio seat names (Atlas and the specialist seats) appear on the site?',
    pages: ['AI', 'Services'],
    meanwhile: 'Atlas named as drawn; the specialist seats named by role only.',
  },
  'ai-projects': {
    label: 'AI-assisted client projects',
    ask: 'Which client projects actually used AI and can be shown on the AI page?',
    pages: ['AI'],
  },
  'case-year': {
    label: 'year and duration',
    ask: 'What year was each case study, and how long did it run? (Deeper first.)',
    pages: ['Case studies'],
  },
  'case-ai': {
    label: 'AI used on this project',
    ask: 'Was AI used on this project, and how? (Deeper first.)',
    pages: ['Case studies'],
  },
  'deeper-challenge': {
    label: 'Deeper challenge, 2 to 3 sentences',
    ask: 'Please confirm the facts in the Deeper challenge, or give 2 to 3 sentences of your own.',
    pages: ['Deeper case study'],
    meanwhile: 'The current challenge copy from the work inventory.',
  },
  'dvd-menu': {
    label: 'Deeper DVD menu asset',
    ask: 'Is there an image or capture of the Deeper DVD menu to show?',
    pages: ['Deeper case study'],
  },
  results: {
    label: 'results',
    ask: 'Real numbers or a client quote for any case study. Without one, the band is left out at launch.',
    pages: ['Case studies'],
  },
  'social-handles': {
    label: 'social handles',
    ask: 'Which Instagram, LinkedIn and Behance accounts should the footer link to?',
    pages: ['Every page (footer)'],
  },
  'lab-guide': {
    label: 'first field guide',
    ask: 'What is the first Lab field guide (title and topic)?',
    pages: ['Home', 'Lab'],
  },
  'lab-posts': {
    label: 'Lab pieces and dates',
    ask: 'Which Lab pieces go up first, and when? (Celtic / triskele, Hoverboarding, Money history, Client Zero, Agent studio, Workflows.)',
    pages: ['Home', 'Lab', 'AI'],
    meanwhile: 'Titles from the wireframe; no dates, no pages behind them yet.',
  },
  newsletter: {
    label: 'email tool and send rhythm',
    ask: 'Which email tool should the Lab signup use, and how often would you send?',
    pages: ['Lab'],
    meanwhile: 'The signup form is preview only and sends nothing.',
  },
  'lab-ai': {
    label: 'AI use on this Lab piece',
    ask: 'For each Lab piece, what did AI do on it? Every Lab piece says what was AI-assisted.',
    pages: ['Lab stories'],
  },
  'service-copy': {
    label: 'service page copy',
    ask: 'Please check the deliverables and process on the Brand, Campaigns, Print and Decks pages. Only Websites was wireframed.',
    pages: ['Service pages'],
    meanwhile: 'Deliverables from the Services hub tags; process shown as proposed step titles with lorem ipsum.',
  },
  'deck-work': {
    label: 'deck work to show',
    ask: 'Is there deck or presentation work that can be shown? None is in the Work list yet.',
    pages: ['Decks & Presentations'],
  },
  'draft-copy': {
    label: 'placeholder copy',
    ask: 'Lorem ipsum stands in for detail copy here. Section titles are real; the paragraphs need writing (or a yes to draft them).',
    pages: ['Service pages', 'Case studies', 'Lab pieces', 'AI statement'],
    meanwhile: 'Lorem ipsum under real section titles (Freeman, 18 Nov: placeholder text is fine to keep moving).',
  },
  'privacy-copy': {
    label: 'privacy policy text',
    ask: 'The privacy page needs real policy text before launch (what the contact form collects, analytics, who to contact).',
    pages: ['Privacy'],
    meanwhile: 'Section titles with lorem ipsum. Not a real policy.',
  },
} satisfies Record<string, HeldItem>;

export type HeldId = keyof typeof held;

export function heldItem(id: HeldId): HeldItem {
  return held[id];
}
