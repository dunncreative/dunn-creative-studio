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
    answer: 'Go ahead within 30 days and your audit fee comes off the project.',
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
  },
  'case-images': {
    label: 'case study selects',
    ask: 'Case studies use the images already in the repo plus your Mountain Mind uploads. Swap in more from each project’s _website-case-study-selects folder?',
    pages: ['Case studies'],
    meanwhile: 'The 24 Nov build could not download the selects folder; Ironwood’s AI mockups all carry an AI label.',
  },
  'lab-lines': {
    label: 'Lab one-liners and images',
    ask: 'A one-line description and a lead image for each Lab piece.',
    pages: ['Lab', 'Lab pieces'],
    meanwhile: 'Grey image blocks and “To come: one line” chips.',
  },
  // Design round A area pages (task #58, PR #18): static noindex alternates in /explore/design-a/.
  // Each item lists the lines that are drafted or adapted, not verbatim from the brief, the live site or case copy v03.
  'design-a-web-lines': {
    label: 'Web & Digital drafted lines',
    ask: 'Web & Digital area page (web-digital and web-digital-b): OK these lines? Custom website development: “Design and build in Astro, with easy editing.” (from your Web Sprint one-pager; names a platform, which is still held). Custom CMS: “Adds a CMS and blog so your team can publish.” (from the Web Sprint Plus line). E-commerce: “An online store, so customers can buy direct.” Get found: SEO and AEO: “So people, and the AI tools they ask, can find you.” Care and updates: “Web pages and updates, ordered as you need them.” Case eyebrow: “Website · Jackson, WY”.',
    pages: ['/explore/design-a/web-digital', '/explore/design-a/web-digital-b'],
    meanwhile: 'Shown as drafted.',
  },
  'design-a-marketing-lines': {
    label: 'Marketing Creative drafted lines',
    ask: 'Marketing Creative area page: OK the case eyebrow “Marketing creative · Jackson, WY”? Sub-service titles drop the brief’s qualifiers (“Ad creative” without “(static and animated)”): keep them short like this?',
    pages: ['/explore/design-a/marketing-creative'],
    meanwhile: 'Shown as drafted.',
  },
  'design-a-film-lines': {
    label: 'Film & Motion drafted lines',
    ask: 'Film & Motion area page: OK these lines? Intro: “Motion and video, directed from the brand system.” (the live Home card line, reused as the intro). Key art and film packaging: “One film, one look, across every release piece.” (adapted from a case-study exploration heading). Titles and intros: “Title sequences and motion logos, made from the brand.” Edits and cutdowns: “Cutdowns in 16:9, 4:5 and 9:16.” (from the Launch Film one-pager). Deeper eyebrow: “Key art and packaging · TGR”. Deeper credit: “Made in-house at Teton Gravity Research while Chris was Creative Director.”',
    pages: ['/explore/design-a/film-motion'],
    meanwhile: 'Shown as drafted.',
  },
  'design-a-ai-creative-lines': {
    label: 'AI Creative drafted lines',
    ask: 'AI Creative area page: OK these lines? AI illustration: “Custom illustration that extends the identity.” (the Illustration line from the live Marketing Creative page). Ironwood eyebrow: “AI-directed mockups · Star Valley, WY”. Ironwood note: “Every scene is an AI-directed mockup, made to show the identity on real touchpoints.”',
    pages: ['/explore/design-a/ai-creative'],
    meanwhile: 'Shown as drafted.',
  },
  'design-a-ai-teams-lines': {
    label: 'AI for Teams pipeline steps',
    ask: 'AI for Teams area page, “How the pipeline works” (adapted from the AI page): OK step 1 “First drafts, versions and variations, resizes and production, checks against the brand.” and step 2 “Strategy, creative direction, taste and curation, and the final call.”?',
    pages: ['/explore/design-a/ai-for-teams'],
    meanwhile: 'Shown as drafted.',
  },
  'design-a-ai-creative-buy': {
    label: 'how AI Creative is bought',
    ask: 'The AI Creative area page sells it through the Creative Retainer. That is a draft guess (Brief §5 does not map it). Retainer, its own sprint, or something else?',
    pages: ['/explore/design-a/ai-creative'],
    meanwhile: 'Creative Retainer under a Draft badge; turnaround and minimum term shown as “Terms to come”.',
  },
} satisfies Record<string, HeldItem>;

export type HeldId = keyof typeof held;

export function heldItem(id: HeldId): HeldItem {
  return held[id];
}
