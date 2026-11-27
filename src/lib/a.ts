// Shared shapes for the Direction A components (src/components/a/) and their data (src/data/).
// Copy strings take the tiny markup in src/lib/rich.ts: *accent word*, [[held chip]].

export type BtnStyle = 'light' | 'light-o' | 'teal' | 'dark-o' | 'ink' | 'ink-o';
export interface Btn { label: string; href: string; style?: BtnStyle; data?: Record<string, string> }

export interface HeroImage {
  src: string;
  /** Leave empty for a decorative hero image. */
  alt?: string;
  /** CSS object-position, e.g. 'center 75%'. */
  pos?: string;
  w?: number;
  h?: number;
  /** Corner tag. Every AI image is labelled; default 'AI-directed image'. */
  tag?: string;
}

export interface Hero {
  eyebrow: string;
  title: string;
  line?: string;
  image: HeroImage;
  ctas?: Btn[];
  /** Panel height in px at desktop (artboards: 520 area pages, 540–600 others). */
  height?: number;
  /** Smaller headline (Sprints, Brand Sprint). */
  small?: boolean;
  wideLine?: boolean;
}

export interface Offer { name: string; line: string; label?: string; caps: string[]; dark?: boolean }
export interface Step { k: string; t: string; p?: string }
export interface Row { n?: string; name: string; line: string; href: string }

export interface BuyPanel {
  eyebrow: string;
  title: string;
  side?: string;
  steps: Step[];
  note?: string;
  ctas?: Btn[];
  big?: boolean;
}

export interface Cta { eyebrow?: string; title: string; lead?: string; ctas: Btn[] }

export interface WorkItem {
  slug: string;
  title: string;
  /** Small caps label above the title. */
  label: string;
  line?: string;
  href?: string;
  img: { src: string; alt: string; w?: number; h?: number; fit?: 'cover' | 'contain'; pos?: string; dark?: boolean };
  /** AI pill text, e.g. 'AI-directed mockup'. */
  ai?: string;
  /** Filter keys (service areas) for the Work index. */
  areas?: string[];
}

export interface Feature {
  eyebrow: string;
  item: { href: string; img: { src: string; alt: string }; ai?: string; label: string; title: string; line: string; caps?: string[]; link?: string };
}
