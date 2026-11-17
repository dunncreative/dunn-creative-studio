import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Work: case studies and snapshots. A snapshot is a work entry with one asset and no body.
// Facts come only from Client Zero · Launch work inventory v01 (17 Nov 2026).
const image = z.object({
  src: z.string(),
  alt: z.string(),
  caption: z.string().optional(),
  // Ground behind the image when it has transparency (e.g. a white logo needs 'dark').
  ground: z.enum(['light', 'grey', 'dark']).optional(),
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z
    .object({
      title: z.string(),
      client: z.string(),
      kind: z.enum(['case-study', 'snapshot']),
      disciplines: z.array(z.string()).min(1),
      services: z.array(z.string()).min(1),
      summary: z.string(),
      year: z.number().int().optional(),
      liveUrl: z.string().url().optional(),
      images: z.array(image),
      featured: z.boolean().default(false),
      // Service pages that list this project: websites · brand-identity · campaigns-content
      serviceTags: z.array(z.enum(['websites', 'brand-identity', 'campaigns-content'])).default([]),
      order: z.number().int(),
      draft: z.boolean().default(false),
      // Case-study spec row. Omit a field when it is unknown.
      spec: z
        .object({
          timeline: z.string().optional(),
          deliverables: z.array(z.string()).optional(),
          channels: z.array(z.string()).optional(),
          aiUsed: z.string().optional(),
        })
        .optional(),
      // Results band: real numbers or a real client quote only. null = the band is not rendered.
      results: z
        .object({ text: z.string(), source: z.string().optional() })
        .nullable()
        .default(null),
    })
    .refine((d) => d.draft || d.images.length > 0, { message: 'Published entries need at least one image' })
    .refine((d) => d.kind !== 'snapshot' || d.images.length === 1, { message: 'A snapshot has exactly one asset' }),
});

export const collections = { work };
