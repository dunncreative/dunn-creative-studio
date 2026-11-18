// Lab pieces (wireframe lab_v02). Titles come from the wireframe; nothing here is written yet,
// so every body is lorem ipsum under real section titles (held: draft-copy, lab-posts).
export type LabKind = 'series' | 'rnd' | 'guide';
export interface LabPiece {
  slug: string;
  kind: LabKind;
  label: string;
  title: string;
  /** True when the title itself is still held (the first field guide). */
  titleHeld?: boolean;
  sections: string[];
}
const seriesSections = ['The idea', 'The series', 'How it was made', 'Notes'];
const rndSections = ['The question', 'What we tried', 'What worked', 'What’s next'];
const guideSections = ['Who it’s for', 'The steps', 'Tools', 'Further reading'];

export const lab: LabPiece[] = [
  { slug: 'client-zero', kind: 'rnd', label: 'R&D note', title: 'Client Zero: rebuilding our own site with an agent studio', sections: rndSections },
  { slug: 'celtic-triskele', kind: 'series', label: 'Series', title: 'Celtic / triskele', sections: seriesSections },
  { slug: 'hoverboarding', kind: 'series', label: 'Series', title: 'Hoverboarding', sections: seriesSections },
  { slug: 'money-history', kind: 'series', label: 'Series', title: 'Money history', sections: seriesSections },
  { slug: 'agent-studio', kind: 'rnd', label: 'R&D note', title: 'Agent studio', sections: rndSections },
  { slug: 'workflows', kind: 'rnd', label: 'R&D note', title: 'Workflows', sections: rndSections },
  { slug: 'field-guide', kind: 'guide', label: 'Field guide', title: 'Field guide', titleHeld: true, sections: guideSections },
];

export const labHref = (slug: string) => `/lab/${slug}/`;

