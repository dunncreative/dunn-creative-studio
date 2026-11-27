// Lab on the Direction A template (v04 · 12): the Lab index (lab-v2) and the Lab post template (lab-post-celtic).
// The pieces themselves (slugs, titles, labels) stay in src/data/lab.ts.
//
// Celtic / triskele is the first post built on the template, with Freeman's 12 images (Triskele Worlds and
// Celtic Ink Spirals, all AI-directed, public/explore/design-a/assets/lab/celtic/). Its body copy is the artboard's
// marked placeholder until Freeman writes it: on Deploy Previews it shows with a "Placeholder copy" chip, on
// production it is left out and the page says "Full story coming soon." The other pieces keep their titles and
// stay marked (placeholder image, held line, held body).
const C = '/explore/design-a/assets/lab/celtic/';
export interface LabImage { src: string; alt: string }
export interface LabBlock {
  title: string;
  /** Placeholder copy (Deploy Previews only, marked). */
  draft?: string;
  /** Gallery rows: images, their aspect ratio and the minimum column width. */
  rows?: { ar: string; min: number; images: LabImage[] }[];
  well?: boolean;
  caption?: string;
}
export interface LabPost {
  /** One line for the hero and the Lab card. Placeholder until Freeman writes it. */
  line?: string;
  hero?: { src: string; pos: string; w: number; h: number };
  card?: LabImage;
  facts: [string, string][];
  blocks: LabBlock[];
  ai: string;
}
const img = (f: string, alt: string): LabImage => ({ src: C + f, alt });

export const labPosts: Record<string, LabPost> = {
  'celtic-triskele': {
    line: 'Three spirals, one centre. An AI-directed series on the oldest Celtic mark and the worlds it holds.',
    hero: { src: C + 'worlds-08.webp', pos: 'center 30%', w: 1536, h: 1024 },
    card: img('worlds-07.webp', 'Triskele Worlds: stag, angel and sea serpent in three spirals'),
    facts: [['Type', 'Series'], ['Topic', 'Celtic symbols'], ['Tools', '[[To come: tools]]'], ['AI use', 'AI-directed imagery'], ['Year', '[[To come: year]]']],
    blocks: [
      { title: 'The idea', draft: 'The triskele is three spirals turning out from one centre. This series asks what each arm could hold: the forest, the sky and the sea. Then it lets the symbol grow into whole worlds around it.' },
      {
        title: 'Triskele *Worlds*',
        draft: 'The stag, the angel and the sea creature, each in one arm of the spiral, bound at the centre by the knot.',
        rows: [
          { ar: '3/2', min: 600, images: [img('worlds-07.webp', 'Triskele Worlds: stag, angel and sea serpent in three spirals of roots')] },
          { ar: '3/2', min: 320, images: [img('worlds-06.webp', 'Triskele Worlds: the three spirals in clouds'), img('worlds-08.webp', 'Triskele Worlds: the triskele in a field of stars')] },
          { ar: '2/3', min: 220, images: [img('worlds-09.webp', 'Triskele Worlds, portrait I'), img('worlds-10.webp', 'Triskele Worlds, portrait II'), img('worlds-11.webp', 'Triskele Worlds, portrait III'), img('worlds-angel.webp', 'Triskele Worlds, portrait IV')] },
        ],
        caption: 'Triskele Worlds · all images AI-directed by Chris Dunn.',
      },
      {
        title: 'Celtic Ink *Spirals*',
        draft: 'The same three-armed spiral, stripped back to ink: tattoo flash, carved stone, watercolour and moonlit roots.',
        well: true,
        rows: [
          { ar: '2/3', min: 240, images: [img('worlds-003.webp', 'Celtic Ink Spirals: eagle, wolf and seahorse triskele in black ink'), img('ink-005.webp', 'Celtic Ink Spirals: triskele in grey ink and stars'), img('ink-008.webp', 'Celtic Ink Spirals: watercolour triskele of birth, life and death')] },
          { ar: '1/1', min: 320, images: [img('ink-imagery-002.webp', 'Celtic Ink Spirals: raven on a triskele of roots under a full moon'), img('ink-007.webp', 'Celtic Ink Spirals: carved triskele in coloured light')] },
        ],
        caption: 'Celtic Ink Spirals · all images AI-directed by Chris Dunn.',
      },
      { title: 'How it was made' },
    ],
    ai: 'Every image in this series is AI-directed.',
  },
};

/** Lab index hero (lab-v2): Freeman's Triskele Worlds art. */
export const labHero = {
  eyebrow: 'Lab',
  title: 'The *Lab*',
  line: 'Experiments. Series. Notes. Every piece says what was AI-assisted.',
  image: { src: C + 'worlds-06.webp', w: 1536, h: 1024, pos: 'center 40%', tag: 'AI-directed image · Celtic / triskele' },
  height: 560,
};

/** "What's in the Lab" (live copy). */
export const labKinds = [
  { k: '01', t: 'Series', p: 'Personal series. Each one gets its own story page.' },
  { k: '02', t: 'R&D notes', p: 'How the studio works now, including the agent studio and what we learn from it.' },
  { k: '03', t: 'Field guides', p: '[[To come: what a field guide covers]]' },
];
