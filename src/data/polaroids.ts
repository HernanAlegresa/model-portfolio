import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n/ui';
import faceFront from '../assets/polaroids/face-front.jpg';
import faceProfile from '../assets/polaroids/face-profile.jpg';
import bodyFront from '../assets/polaroids/body-front.jpg';
import halfProfile from '../assets/polaroids/half-profile.jpg';
import torso from '../assets/polaroids/torso.jpg';
import halfFront from '../assets/polaroids/half-front.jpg';

/**
 * Every polaroid, in the order agencies read them: the four key shots
 * first (face front, face profile, half body front, half body profile),
 * then the extras. Keep the `home: true` ones first, so the order here is
 * the order on /polaroids. /polaroids shows them all; the Home shows only
 * `home: true`.
 * See docs/ASSET-GUIDE.md for how each shot should be taken.
 *
 * - `shot`: which shot it is. Its caption comes from
 *   `polaroids.shot.<shot>` in src/i18n/ui.ts.
 * - `id`: anchor on /polaroids (e.g. /es/polaroids#face-front).
 * - `image`: null shows a placeholder. Photos live in src/assets/polaroids/,
 *   imported at the top of this file. Vertical 3:4 photos fit the frame
 *   exactly; others are cropped.
 * - `home`: also shown on the Home (keep it to the four key shots).
 * - `alt`: what the photo shows, per language. Without it the caption is used.
 * - `position`: which part of the photo stays in frame when it's cropped,
 *   as a CSS object-position. Defaults to the centre.
 */
export type PolaroidShotKey =
  | 'faceFront'
  | 'faceProfile'
  | 'bodyFront'
  | 'halfProfile'
  | 'torso'
  | 'halfFront';

export interface Polaroid {
  shot: PolaroidShotKey;
  id: string;
  image: ImageMetadata | null;
  home?: boolean;
  alt?: Record<Lang, string>;
  position?: string;
}

export const polaroids: Polaroid[] = [
  {
    shot: 'faceFront',
    id: 'face-front',
    image: faceFront,
    home: true,
    alt: {
      es: 'Hernán Alegresa, rostro de frente, musculosa negra, fondo gris claro.',
      en: 'Hernán Alegresa, face from the front, black tank top, light grey background.',
    },
  },
  {
    shot: 'faceProfile',
    id: 'face-profile',
    image: faceProfile,
    home: true,
    alt: {
      es: 'Hernán Alegresa, rostro de perfil izquierdo, fondo gris claro.',
      en: 'Hernán Alegresa, face in left profile, light grey background.',
    },
  },
  {
    shot: 'halfFront',
    id: 'half-front',
    image: halfFront,
    home: true,
    alt: {
      es: 'Hernán Alegresa, medio cuerpo de frente, manos en los bolsillos.',
      en: 'Hernán Alegresa, half body from the front, hands in pockets.',
    },
  },
  {
    shot: 'halfProfile',
    id: 'half-profile',
    image: halfProfile,
    home: true,
    alt: {
      es: 'Hernán Alegresa de perfil, medio cuerpo, brazos cruzados, contra una pared clara.',
      en: 'Hernán Alegresa in profile, half body, arms crossed, against a light wall.',
    },
  },
  {
    shot: 'bodyFront',
    id: 'body-front',
    image: bodyFront,
    alt: {
      es: 'Hernán Alegresa de cuerpo entero, de frente, con musculosa negra y jean claro.',
      en: 'Hernán Alegresa, full body from the front, in a black tank top and light jeans.',
    },
  },
  {
    shot: 'torso',
    id: 'torso',
    image: torso,
    alt: {
      es: 'Hernán Alegresa sin remera, medio cuerpo de frente, con jean.',
      en: 'Hernán Alegresa shirtless, half body from the front, in jeans.',
    },
  },
];

/** The key shots, for the Home. */
export const homePolaroids = polaroids.filter((polaroid) => polaroid.home);
