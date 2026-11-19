// Content notes such as "[confirm]" or "[held: …]" are for the studio, never for visitors.
// clean() strips them; if nothing real is left, it returns undefined so the field is not rendered.
const NOTE = /\s*\[(?:confirm|held|tbd|todo)[^\]]*\]/gi;

export function clean(value: string | undefined | null): string | undefined {
  if (!value) return undefined;
  const out = value.replace(NOTE, '').replace(/\s{2,}/g, ' ').trim();
  return out && !/^[.,;:·–-]+$/.test(out) ? out : undefined;
}

export function cleanList(values: string[] | undefined): string[] {
  return (values ?? []).map(clean).filter((v): v is string => Boolean(v));
}

// True when an image caption marks it as AI-made, so thumbnails can carry the label too.
export function isAiImage(caption: string | undefined): boolean {
  return /\bAI[- ](?:directed|made|generated)\b/i.test(caption ?? '');
}
