// Every item the wireframes v02.1 hold for Freeman, in one place.
//
// How to swap an answer in: set `answer` on the item. Every <Held id="…" /> on the site then shows
// the answer instead of the placeholder chip. Items with no answer render as a dashed "Held" chip
// while SHOW_HELD is true (preview), and render nothing when it is false (launch).
//
// Nothing here is a fact until Freeman answers it. Never fill `answer` from anywhere but Freeman.

// Off on the live site: Netlify sets CONTEXT=production for main. Deploy Previews and local builds show chips (v04 · 10).
export const SHOW_HELD = process.env.CONTEXT !== 'production';

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
    answer: '24 Nov: A. No response-time promise at launch.',
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
    answer: 'Go ahead within 30 days and your audit fee comes off the project.',
  },
  'budget-ranges': {
    label: 'budget range values',
    ask: 'What are the four budget ranges on the contact form? (Chips are approved; values are not set.)',
    pages: ['Contact'],
    meanwhile: 'Live site (CONTEXT=production): the budget step is left out and the form runs in five steps. Deploy Previews keep the Range 1/2/3 placeholder step (v04 · 10 QA).',
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
    answer: 'chris-dunn-portrait-bw (Freeman, 19 Nov).',
  },
  'portrait-about': {
    label: 'portrait pick (About)',
    ask: 'Which portrait goes at the top of About? Default: Chris-Dunn-Portrait-2.jpg (different from Home).',
    pages: ['About'],
    answer: 'chris-dunn-portrait-bw, same as Home (Freeman, 19 Nov).',
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
    meanwhile: 'The four DVD menu screens from the Deeper selects folder (Main, Chapters, Extras, Unplugged) are on the case study.',
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
    meanwhile: 'Titles from the wireframe, no dates. Live site (CONTEXT=production): each Lab story page shows its title and one line, “Full story coming soon.” Deploy Previews keep the full story template with “To come” chips (v04 · 10 QA).',
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
    meanwhile: 'Live site (CONTEXT=production): one holding line, “Our privacy policy is being finalized. Ask us anything on the contact page.” Deploy Previews: section titles with lorem ipsum. Not a real policy, and studio agents do not draft one (v04 · 10 QA).',
  },
  'ai-statement-copy': {
    label: 'AI statement text',
    ask: 'The /ai-statement/ page has no approved text yet. Please write or approve the statement (what AI does, what people decide, disclosure, files and data, ownership, tools).',
    pages: ['AI statement'],
    meanwhile: 'Live site (CONTEXT=production): one holding line, “Our AI statement is being finalized. Ask us anything on the contact page.”, plus a link to /ai/. Deploy Previews: real section titles with the draft lines and lorem ipsum (v04 · 10 QA).',
  },
  'sprint-prices': {
    label: 'sprint prices',
    ask: 'A price for each sprint (Audit, Brand Sprint, Web Sprint, Launch Film, Creative Retainer, AI Workflow Sprint), or keep prices off for now? The open-slots badge stays off until you say.',
    pages: ['Sprints'],
    meanwhile: 'Each sprint card and the cost FAQ show a “To come” price chip.',
  },
  'sprint-terms': {
    label: 'sprint durations and terms',
    ask: 'The Sprints page uses the durations and terms from your sprint one-pager concept as written: Audit 1 week, Brand Sprint 2 weeks, Web Sprint 2 or 4 weeks, Launch Film 3 weeks, AI Workflow Sprint 2 weeks, Retainer monthly; the audit fee credit within 30 days; 48-hour retainer turnaround and a 3-month minimum; 30 days of fixes. Keep them all?',
    pages: ['Sprints'],
    meanwhile: 'Shown as written in the concept.',
  },
  'footer-line': {
    label: 'footer line',
    ask: 'The footer still says “Strategic thinking. Clean design. Real results.” Keep it or change it?',
    pages: ['Every page'],
    meanwhile: 'Kept as written (your call, 24 Nov).',
    answer: 'Strategic thinking. Clean design. Built to perform.',
  },
  'case-images': {
    label: 'case study selects',
    ask: 'The selects from each project’s _website-case-study-selects folder are now on the four case studies. Anything to add, drop or reorder?',
    pages: ['Case studies'],
    meanwhile: 'Selects in (24 Nov overnight build): Ironwood AI mockups (each labelled), Mountain Mind site mockups, photos and three marketing plan pages, Deeper packaging, discs, ads and DVD menus, Asymbol launch, social and email. Not used: Ironwood logo PNGs, brand guidelines PDF and business card proof PDF (the logo system and business card images already cover them). Case study years still held.',
  },
  'film-motion-copy': {
    label: 'Film & Motion page copy',
    ask: 'The new /services/film-motion/ stub has drafted lines: the description, the section title and one line per sub-service. Juno writes the final copy in v04 · 3. Keep the drafts until then?',
    pages: ['Film & Motion'],
    meanwhile: 'Drafted lines (v04 · 10), shown with a “To come” chip on previews.',
  },
  'lab-lines': {
    label: 'Lab one-liners and images',
    ask: 'A one-line description and a lead image for each Lab piece.',
    pages: ['Lab', 'Lab pieces'],
    meanwhile: 'Grey image blocks and “To come: one line” chips.',
  },
} satisfies Record<string, HeldItem>;

export type HeldId = keyof typeof held;

export function heldItem(id: HeldId): HeldItem {
  return held[id];
}
