// Tiny markup for copy in the Direction A data files (src/data/*), so Freeman can edit copy without touching HTML:
//   *word*        -> the one Instrument Serif italic accent word (<em>)
//   [[To come…]]  -> a held chip (<span class="held">), shown on Deploy Previews, removed on production
//   \n            -> line break (headlines only)
// Everything else is escaped.
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function rich(s: string | undefined): string {
  if (!s) return '';
  return esc(s)
    .replace(/\[\[(.+?)\]\]/g, '<span class="held">$1</span>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br>');
}

/** Plain text (for alt, title and aria attributes): drops the markup. */
export const plain = (s: string | undefined) => (s ?? '').replace(/\[\[(.+?)\]\]/g, '').replace(/\*(.+?)\*/g, '$1').replace(/\n/g, ' ').trim();

/** Two-digit number: 1 -> "01". */
export const nn = (i: number) => String(i).padStart(2, '0');
