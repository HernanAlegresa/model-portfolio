import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n/ui';

/**
 * The four agency polaroids, in the standard order (face front, face
 * profile, full body front, full body profile). Shown on the Home and on
 * /polaroids; see docs/ASSET-GUIDE.md for how each shot should be taken.
 *
 * - `shot`: which of the four it is. Its caption comes from
 *   `polaroids.shot.<shot>` in src/i18n/ui.ts.
 * - `id`: anchor on /polaroids (e.g. /es/polaroids#face-front).
 * - `image`: null shows a placeholder. To use the real photo, put it in
 *   src/assets/polaroids/, import it at the top of this file and set it here:
 *     import faceFront from '../assets/polaroids/face-front.jpg';
 *     { shot: 'faceFront', id: 'face-front', image: faceFront, alt: { es: '…', en: '…' } }
 *   Vertical 3:4 photos fit the frame exactly; others are cropped.
 * - `alt`: what the photo shows, per language. Without it the caption is used.
 * - `position`: which part of the photo stays in frame when it's cropped,
 *   as a CSS object-position. Defaults to the centre.
 */
export type PolaroidShotKey = 'faceFront' | 'faceProfile' | 'bodyFront' | 'bodyProfile';

export interface Polaroid {
  shot: PolaroidShotKey;
  id: string;
  image: ImageMetadata | null;
  alt?: Record<Lang, string>;
  position?: string;
}

export const polaroids: Polaroid[] = [
  { shot: 'faceFront', id: 'face-front', image: null },
  { shot: 'faceProfile', id: 'face-profile', image: null },
  { shot: 'bodyFront', id: 'body-front', image: null },
  { shot: 'bodyProfile', id: 'body-profile', image: null },
];
