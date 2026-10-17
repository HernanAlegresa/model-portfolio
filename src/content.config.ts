import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const localizedText = z.object({
  es: z.string(),
  en: z.string(),
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/work' }),
  schema: z.object({
    brand: z.string(),
    year: z.number().int(),
    // Keys only — display labels live in src/i18n/ui.ts so copy never
    // forks between the data layer and the translation dictionary.
    roles: z
      .array(z.enum(['model', 'content-creator', 'guest', 'commercial-participant']))
      .min(1),
    categories: z
      .array(z.enum(['modeling', 'ecommerce', 'content', 'events', 'tv-commercial']))
      .min(1),
    summary: localizedText,
    // Qualitative, not exact — most brands' material isn't inventoried yet.
    // See docs/PROJECT-BRIEF.md §"Historial profesional y marcas" for source.
    material: z.object({
      photos: z.enum(['pending', 'one', 'few', 'some', 'many']),
      hasVideo: z.boolean(),
    }),
    link: z.string().url().nullable(),
    // Lower sorts first. Lets curation favor visual strength/variety over
    // listing all 11 brands with equal weight (PROJECT-BRIEF.md rule 4).
    priority: z.number().int(),
    note: localizedText.optional(),
  }),
});

export const collections = { work };
