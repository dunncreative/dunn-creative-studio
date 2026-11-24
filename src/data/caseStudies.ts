// The four case studies on the site (Freeman, 24 Nov: "Should only be 4 for now").
// Copy: Client Zero case study copy v03 (Dropbox 03_Work/dunncreative_clientzero_case-study-copy_v03.md),
// used as written. No quotes, results or numbers, by design.
// Images: the copies already in public/work/<slug>/ (same files as the _website-case-study-selects where
// the names match) and, for Mountain Mind Project, Freeman's own uploads from 24 Nov. The selects folder
// itself could not be downloaded in the 24 Nov run; swap in fuller selects later.
// Ironwood Homes: every scene mockup is AI-made and carries an AI label (ai: true).

export interface CsImage { src: string; alt: string; w: number; h: number; caption?: string; ai?: boolean }
export interface CsChapter { id: string; title: string; text?: string; note?: string; images?: CsImage[][]; held?: string; tags?: string[] }
export interface CaseStudy {
  slug: string;
  title: string;
  category: string; // Work filter: Branding | Websites | Campaigns
  titleLine: string;
  summary: string;
  card: CsImage;
  hero: CsImage;
  /** Lead image framing: 'cover' fills a 16:9 frame; 'contain' shows the whole piece on a dark frame. */
  heroFit?: 'cover' | 'contain';
  facts: [string, string][];
  liveUrl?: string;
  chapters: CsChapter[];
}

const iw = (f: string, w: number, h: number, alt: string, caption?: string, ai = false): CsImage => ({ src: `/work/ironwood-homes/${f}`, w, h, alt, caption, ai });
const mm = (f: string, w: number, h: number, alt: string, caption?: string): CsImage => ({ src: `/work/mountain-mind-project/${f}`, w, h, alt, caption });
const dp = (f: string, w: number, h: number, alt: string, caption?: string): CsImage => ({ src: `/work/jeremy-jones-deeper/${f}`, w, h, alt, caption });
const as = (f: string, w: number, h: number, alt: string, caption?: string): CsImage => ({ src: `/work/asymbol/${f}`, w, h, alt, caption });

export const caseStudies: CaseStudy[] = [
  {
    slug: 'jeremy-jones-deeper',
    title: "Jeremy Jones' Deeper",
    category: 'Campaigns',
    titleLine: 'Packaging a film that goes past the lifts.',
    summary: "Packaging, poster, ads and DVD menu for TGR's snowboard film Deeper.",
    card: dp('jeremy-jones-deeper.webp', 1400, 1054, 'Deeper key art: the film title over a black-and-white mountain face'),
    hero: dp('jeremy-jones-deeper.webp', 1400, 1054, 'Deeper key art: the film title over a black-and-white mountain face'),
    heroFit: 'contain',
    facts: [['Client', 'Teton Gravity Research'], ['Made', 'In-house at Teton Gravity Research'], ['Services', 'Art direction, packaging, poster, magazine ads, DVD menu, marketing collateral']],
    chapters: [
      { id: 'project', title: 'The project', text: "Deeper is Teton Gravity Research's snowboard film with Jeremy Jones, the first in the Deeper, Further, Higher trilogy, following Jeremy and other top freeriders past the reach of helicopters, snowmobiles and lifts into untouched terrain. Chris made this work in-house as TGR's Creative Director, working closely with Jeremy and Director of Photography and Producer Chris Edmands on the art direction, reviews and revisions. The look was built from the trip photographers' images and frames pulled from the film, with some scenes composited to tell the story better, like tents camped in the snow added to the mountain shot with hikers. Jeremy's own hand-drawn notes run across the inside of the DVD box. The work covered the DVD packaging, poster, magazine ads, DVD menu and the marketing collateral around the release." },
      { id: 'packaging', title: 'Packaging and ads', images: [
        [dp('jeremy-jones-deeper-box-wide.webp', 1239, 800, 'Deeper DVD packaging, back and front covers', 'DVD packaging, back and front.')],
        [dp('jeremy-jones-deeper-box.webp', 700, 915, 'Deeper DVD box, front cover', 'The DVD box.'), dp('jeremy-jones-deeper-magazine-ad.webp', 662, 880, 'Deeper magazine ad, portrait format', 'Magazine ad.')],
      ], held: 'To come: DVD menu images' },
      { id: 'delivered', title: 'What we delivered', tags: ['Art direction', 'Packaging', 'Poster', 'Magazine ads', 'DVD menu', 'Marketing collateral'] },
    ],
  },
  {
    slug: 'ironwood-homes',
    title: 'Ironwood Homes',
    category: 'Branding',
    titleLine: 'A brand as enduring as the homes.',
    summary: 'Brand identity for a custom home builder serving Star Valley, Wyoming.',
    card: iw('mockup-entrance-sign.webp', 1280, 816, 'Ironwood Homes horizontal logo carved into a timber entrance sign on stone posts', undefined, true),
    hero: iw('mockup-entrance-sign.webp', 1280, 816, 'Ironwood Homes horizontal logo carved into a timber entrance sign on stone posts', undefined, true),
    facts: [['Client', 'Ironwood Homes'], ['Location', 'Afton, Wyoming'], ['Industry', 'Custom home building'], ['Brand words', 'Strong, Authentic, Premium, Enduring']],
    chapters: [
      { id: 'project', title: 'The project', text: "Ironwood Homes is a custom home builder and general contractor based in Afton, Wyoming, building new homes and remodels across Star Valley with modern ranch design, honest materials and a real respect for each client's budget. The team came to us with a strong visual concept: industrial, rustic, hand-forged and unmistakably Western. Our job was to turn it into a professional identity system that matches the homes behind the name. We built a flexible logo system around a primary vertical logo, with a horizontal lockup, an IH monogram and a circular badge, so it holds up at any size on any surface. Every color comes from the materials Ironwood builds with (iron, weathered steel, burnished bronze, timber and parchment), set in Crimson Pro and Work Sans. A quick-reference brand guide and production-ready files keep every touchpoint consistent, from business cards and letterhead to signage, trucks and a stitched hat." },
      { id: 'identity', title: 'The logo system', images: [
        [iw('logo-suite-light.webp', 2400, 1500, 'Ironwood Homes logo system on a light background: vertical logo, horizontal logo, IH monogram and circular badge', 'Vertical (primary), horizontal, IH monogram and circular badge.')],
        [iw('logo-suite-dark.webp', 2400, 1500, 'The same Ironwood Homes logo system reversed on a dark background', 'The same system, reversed.'), iw('logo-on-backgrounds.webp', 2400, 1500, 'The vertical Ironwood Homes logo on six brand colors', 'On the brand colors.')],
      ] },
      { id: 'inuse', title: 'In use', note: 'Every scene in this chapter is an AI-directed mockup, made to show the identity on real touchpoints.', images: [
        [iw('mockup-wood-wall.webp', 1280, 720, 'Ironwood Homes vertical logo in iron letters on a weathered wood wall', 'Wall sign.', true)],
        [iw('mockup-truck-door.webp', 1248, 832, 'Ironwood Homes horizontal logo on the door of a dark pickup truck', 'Truck door.', true), iw('mockup-embossed.webp', 1312, 784, 'Ironwood Homes vertical logo embossed on a dark textured surface', 'Embossed.', true)],
        [iw('mockup-monogram-materials.webp', 2046, 832, 'Three IH monograms: iron on wood, wood on steel, and burned into wood', 'The monogram in iron, timber and fire.', true)],
        [iw('mockup-merch.webp', 2046, 832, 'Ironwood Homes logo on a leather-patch trucker cap, an embroidered grey cap and a folded green tee', 'Caps and tee.', true)],
        [iw('business-cards.webp', 2400, 1300, 'Ironwood Homes business card, front and back', 'Business card, front and back.', true)],
      ] },
      { id: 'delivered', title: 'What we delivered', tags: ['Logo system', 'Color palette', 'Typography', 'Material inspiration', 'Business cards and letterhead', 'Brand guide', 'Production files (AI, EPS, SVG, PDF, PNG, JPG)'] },
    ],
  },
  {
    slug: 'asymbol',
    title: 'Asymbol',
    category: 'Campaigns',
    titleLine: 'Art-led marketing for a gallery that lives on the mountain.',
    summary: 'Ads, email, social and a binding launch with Union and Bryan Iguchi.',
    card: as('bi_asymbolxunion_teaser_social.webp', 1000, 1000, 'Teaser image for the Asymbol × Union limited-edition binding, designed by Bryan Iguchi'),
    hero: as('bi_asymbolxunion_teaser_social.webp', 1000, 1000, 'Teaser image for the Asymbol × Union limited-edition binding, designed by Bryan Iguchi'),
    heroFit: 'contain',
    facts: [['Client', 'Asymbol'], ['Location', 'Jackson Hole, Wyoming'], ['Services', 'Campaign design, email marketing, social media, magazine ads, marketing collateral, t-shirt graphics']],
    chapters: [
      { id: 'project', title: 'The project', text: 'Asymbol is an online store and art gallery in Jackson Hole, Wyoming, built around the art and artists of snowboarding. We worked as its marketing design partner, making the magazine ads, social imagery, email newsletters and t-shirt graphics that carried the gallery\'s look from print to inbox. The biggest piece was the launch of the Asymbol × Union "Undefeated Spirit" binding collaboration with pro snowboarder and artist Bryan Iguchi. We built the tease and launch imagery, the social posts, a Facebook profile takeover and the email campaigns, so the release read as one story on every channel.' },
      { id: 'launch', title: 'The Union launch', images: [
        [as('bi_asymbolxunion_teaser_social.webp', 1000, 1000, 'Teaser image for the Asymbol × Union limited-edition binding, designed by Bryan Iguchi', 'Tease.'), as('bi_asymbolxunion_teaser3_social12.webp', 1000, 1000, 'Social post announcing the launch day of the Asymbol × Union binding', 'Launch day.')],
        [as('mobile-marketing-instagram-1.webp', 305, 600, 'The binding campaign as an Instagram post on a phone', 'On Instagram.'), as('asymbol-email-newsletter.webp', 782, 2188, 'Asymbol email newsletter layout with product tiles', 'Email newsletter.')],
      ] },
      { id: 'ads', title: 'Magazine ads', images: [
        [as('asymbol-snowboard-art-magazine-ad.webp', 1200, 1437, 'Asymbol magazine ad with black-and-white snowboard art'), as('jamie-lynn-art-gallery-snowboard-ad-asymbol.webp', 1200, 1437, 'Asymbol gallery magazine ad featuring an artist and a painting')],
      ] },
      { id: 'delivered', title: 'What we delivered', tags: ['Campaign design', 'Email marketing', 'Social media', 'Magazine ads', 'Marketing collateral', 'T-shirt graphics'] },
    ],
  },
  {
    slug: 'mountain-mind-project',
    title: 'Mountain Mind Project',
    category: 'Websites',
    titleLine: 'The ability to live fully can be trained.',
    summary: 'A full redesign for a mindfulness training company, with our own photography.',
    card: mm('screen-home-1440.webp', 1440, 900, 'Mountain Mind Project home page'),
    hero: mm('site-devices.webp', 2400, 1319, 'Mountain Mind Project website on a laptop and tablet'),
    liveUrl: 'https://mountainmindproject.com/',
    facts: [['Client', 'Mountain Mind Project'], ['Location', 'Jackson Hole, Wyoming'], ['Services', 'Web design, website development, photography, digital marketing consulting (website and marketing plan)']],
    chapters: [
      { id: 'project', title: 'The project', text: "Mountain Mind Project is founder Sasha Dingle's mindfulness practice in Jackson Hole, Wyoming, offering evidence-based courses, retreats and one-to-one coaching for athletes, professionals, first responders, teens and anyone looking for resilience and peak performance. The website was the professional launch of the business, and its job was to show the depth of her programs and turn visitors into students. We designed and built mountainmindproject.com with a modern layout, a fresh palette, strong typography and clear paths into courses, retreats and coaching. We shot most of the photography ourselves, from Teton peaks to a portrait session with Sasha and a live meditation class, so the site shows the real practice rather than stock. We also wrote a website and marketing plan, covering SEO, a monthly newsletter, an Instagram and Facebook strategy and a launch playbook for each new course." },
      { id: 'site', title: 'The site', images: [
        [mm('screen-home-1440.webp', 1440, 900, 'Mountain Mind Project home page', 'Home page.')],
        [mm('screen-inner-1440.webp', 1440, 900, 'Mountain Mind Project About page', 'About page.')],
        [mm('screen-home-485.webp', 485, 844, 'Mountain Mind Project home page on a phone', 'Home, on a phone.'), mm('screen-inner-485.webp', 485, 844, 'Mountain Mind Project About page on a phone', 'About, on a phone.')],
      ] },
      { id: 'photography', title: 'Photography', note: 'Photos by Chris Dunn.', images: [
        [mm('photo-teton-peaks.webp', 800, 600, 'Snow-covered Teton peaks under a blue sky'), mm('photo-sasha-portrait.webp', 800, 532, 'Portrait of Sasha Dingle smiling in warm light')],
        [mm('photo-meditation-class.webp', 800, 532, 'A live meditation class standing in a studio'), mm('photo-seated-meditation.webp', 532, 800, 'Seated meditation on a studio floor')],
      ] },
      { id: 'delivered', title: 'What we delivered', tags: ['Web design', 'Website development', 'Photography', 'Digital marketing consulting (website and marketing plan)'] },
    ],
  },
];

export const caseHref = (slug: string) => `/work/${slug}/`;
