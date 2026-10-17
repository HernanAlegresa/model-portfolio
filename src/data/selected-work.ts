import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n/ui';

/**
 * The photos in Home's brand-work grid, in order. This is the file to
 * edit when choosing the shots; HomeWork.astro only handles layout.
 *
 * - `work`: the brand's slug, i.e. its file name in src/content/work/
 *   (without .yaml). The brand name and category come from that entry, and
 *   the frame links to that brand on /work.
 * - `image`: null shows a placeholder. To use a real photo, put it in
 *   src/assets/work/<slug>/, import it at the top of this file and set it here:
 *     import penguin01 from '../assets/work/original-penguin/original-penguin-01.jpg';
 *     { work: 'original-penguin', image: penguin01, alt: { es: '…', en: '…' } }
 * - `alt`: what the photo shows, per language. Without it a generic
 *   "Hernán Alegresa on a job for <brand>" is used.
 *
 * Six cards, two per row, all landscape (1.45:1, like the Máxima Michaels
 * reference). Horizontal photos fit best; vertical ones are cropped to the
 * middle band. A "see more works" button under the grid leads to /work.
 */
export interface SelectedShot {
  work: string;
  image: ImageMetadata | null;
  alt?: Record<Lang, string>;
}

export const selectedWork: SelectedShot[] = [
  { work: 'rent-the-look', image: null },
  { work: 'forum-industries', image: null },
  { work: 'original-penguin', image: null },
  { work: 'armani-beauty', image: null },
  { work: 'vans-uruguay', image: null },
  { work: 'meller', image: null },
];
