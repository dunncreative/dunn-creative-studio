// Lab on the Direction A template (v04 · 12): the Lab index (lab-v2) and the Lab post template (lab-post-celtic).
// The pieces themselves (slugs, titles, labels) stay in src/data/lab.ts.
//
// Celtic / triskele is the first post built on the template, with Freeman's 21 images (Triskele Worlds and
// Celtic Ink Spirals, all AI-directed, public/lab/celtic-triskele/). Its body copy is the artboard's
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
// Freeman's full Celtic / triskele set (21 images, Dropbox 00_Brand-Brain/References/Lab-Posts/Celtic-Triskele/).
const T = '/lab/celtic-triskele/';
const t = (n: number, alt: string): LabImage => ({ src: `${T}celtic-triskele-${n}.webp`, alt });

export const labPosts: Record<string, LabPost> = {
  'celtic-triskele': {
    line: 'Three spirals, one centre. An AI-directed series on the oldest Celtic mark and the worlds it holds.',
    hero: { src: T + 'celtic-triskele-8.webp', pos: 'center 40%', w: 1200, h: 800 },
    card: t(9, 'Triskele Worlds: stag, angel and sea figure in three spirals around the knot'),
    facts: [['Type', 'Series'], ['Topic', 'Celtic symbols'], ['Tools', '[[To come: tools]]'], ['AI use', 'AI-directed imagery'], ['Year', '[[To come: year]]']],
    blocks: [
      { title: 'The idea', draft: 'The triskele is three spirals turning out from one centre. This series asks what each arm could hold: the forest, the sky and the sea. Then it lets the symbol grow into whole worlds around it.' },
      {
        title: 'Triskele *Worlds*',
        draft: 'The stag, the angel and the sea creature, each in one arm of the spiral, bound at the centre by the knot.',
        rows: [
          { ar: '3/2', min: 600, images: [t(9, 'Triskele Worlds: stag, angel and sea figure in three spirals around the knot')] },
          { ar: '3/2', min: 320, images: [t(10, 'Triskele Worlds: tree, angel and sea serpent in a spiral of roots'), t(8, 'Triskele Worlds: the triskele in a field of stars')] },
          { ar: '2/3', min: 220, images: [t(2, 'Triskele Worlds: eagle, wolf and sea spiral'), t(3, 'Triskele Worlds: three lit doorways with the knot at the centre'), t(4, 'Triskele Worlds: carved doors with the stag and the sea figure'), t(5, 'Triskele Worlds: the angel above a glowing knot')] },
          { ar: '2/3', min: 220, images: [t(6, 'Triskele Worlds: angel, stag and sea figure along a tree trunk'), t(7, 'Triskele Worlds: angel, stag and sea spiral in starlight'), t(11, 'Triskele Worlds: the three spirals rising through cloud')] },
        ],
        caption: 'Triskele Worlds · all images AI-directed by Chris Dunn.',
      },
      {
        title: 'Celtic Ink *Spirals*',
        draft: 'The same three-armed spiral, stripped back to ink: tattoo flash, carved stone, watercolour and moonlit roots.',
        well: true,
        rows: [
          { ar: '2/3', min: 220, images: [t(1, 'Celtic Ink Spirals: eagle, wolf and sea serpent triskele in black ink'), t(15, 'Celtic Ink Spirals: triskele in grey ink and stars'), t(13, 'Celtic Ink Spirals: watercolour triskele with tree, child and skull')] },
          { ar: '2/3', min: 220, images: [t(17, 'Celtic Ink Spirals: eagle, wolf and mermaid triskele, tattoo flash'), t(18, 'Celtic Ink Spirals: eagle, wolf and mermaid triskele, second version'), t(19, 'Celtic Ink Spirals: eagle, wolf and salmon triskele, tattoo flash')] },
          { ar: '2/3', min: 220, images: [t(14, 'Celtic Ink Spirals: carved triskele in coloured light'), t(20, 'Celtic Ink Spirals: raven on an ink triskele of roots'), t(21, 'Celtic Ink Spirals: raven on a triskele of roots under a full moon')] },
          { ar: '3/2', min: 320, images: [t(12, 'Celtic Ink Spirals: raven on a spiral of roots in a dark forest'), t(16, 'Celtic Ink Spirals: two lions around a knotwork compass')] },
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
