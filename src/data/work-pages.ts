import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n/ui';

import rentTheLook01 from '../assets/work/rent-the-look/rent-the-look-01.jpg';
import rentTheLook02 from '../assets/work/rent-the-look/rent-the-look-02.jpg';
import rentTheLook03 from '../assets/work/rent-the-look/rent-the-look-03.jpg';
import rentTheLook04 from '../assets/work/rent-the-look/rent-the-look-04.jpg';
import rentTheLook05 from '../assets/work/rent-the-look/rent-the-look-05.jpg';
import rentTheLook06 from '../assets/work/rent-the-look/rent-the-look-06.jpg';
import rentTheLook07 from '../assets/work/rent-the-look/rent-the-look-07.jpg';
import rentTheLookClip01 from '../assets/video/work/rent-the-look-01.mp4?url';
import rentTheLookClip02 from '../assets/video/work/rent-the-look-02.mp4?url';
import rentTheLookClip03 from '../assets/video/work/rent-the-look-03.mp4?url';
import rentTheLookClip04 from '../assets/video/work/rent-the-look-04.mp4?url';
import rentTheLookPoster01 from '../assets/video/work/rent-the-look-01-poster.jpg';
import rentTheLookPoster02 from '../assets/video/work/rent-the-look-02-poster.jpg';
import rentTheLookPoster03 from '../assets/video/work/rent-the-look-03-poster.jpg';
import rentTheLookPoster04 from '../assets/video/work/rent-the-look-04-poster.jpg';

/**
 * The photos and videos on each brand's own page (/es/work/<slug>). A brand
 * gets a page as soon as it has an entry here; brands without one stay as a
 * card on /work. The brand's name comes from its file in src/content/work/
 * — this file is only the media. The page shows just the work itself: the
 * kind of job and the year are already on the /work card.
 *
 * - `photos`: all of them, in order, right under the brand name. They're
 *   laid out two by two, each with a thin frame of page colour around it;
 *   an odd one out at the end is shown alone, centred. Put the best pair
 *   first, and pairs that belong together (same look) next to each other.
 * - `videos`: the "Backstage" strip, four across (two by two on phones).
 *   Each needs an H.264 MP4 imported with `?url`, a poster (its first
 *   frame, imported normally) and a description per language for screen
 *   readers. Leave it empty and the strip isn't shown.
 *
 * Photos: put them in src/assets/work/<slug>/ and import them at the top.
 * Videos: src/assets/video/work/<slug>-01.mp4 + <slug>-01-poster.jpg.
 * iPhone .mov files are HEVC 4K: convert them first (see docs/ASSET-GUIDE.md).
 */
export interface WorkPhoto {
  image: ImageMetadata;
  alt: Record<Lang, string>;
}

export interface WorkClip {
  src: string;
  poster: ImageMetadata;
  label: Record<Lang, string>;
}

export interface WorkPage {
  photos: WorkPhoto[];
  videos: WorkClip[];
}

export const workPages: Record<string, WorkPage> = {
  'rent-the-look': {
    photos: [
      {
        image: rentTheLook07,
        alt: {
          es: 'Hernán Alegresa con traje de lino gris topo, polo blanco y lentes de sol oscuros, frente a una cortina blanca.',
          en: 'Hernán Alegresa in a taupe linen suit, white polo and dark sunglasses, against a white curtain.',
        },
      },
      {
        image: rentTheLook01,
        alt: {
          es: 'Hernán Alegresa con traje marrón y remera blanca, sentado en una silla cromada frente a una cortina blanca.',
          en: 'Hernán Alegresa in a brown suit and white tee, seated on a chrome chair against a white curtain.',
        },
      },
      {
        image: rentTheLook05,
        alt: {
          es: 'Hernán Alegresa de cuerpo entero con traje cruzado verde oliva y remera blanca, junto a una silla cromada.',
          en: 'Full-length shot of Hernán Alegresa in an olive double-breasted suit and white tee, beside a chrome chair.',
        },
      },
      {
        image: rentTheLook06,
        alt: {
          es: 'Hernán Alegresa con saco cruzado verde oliva, tomándose la solapa y mirando hacia un costado.',
          en: 'Hernán Alegresa in an olive double-breasted jacket, holding the lapel and looking to the side.',
        },
      },
      {
        image: rentTheLook03,
        alt: {
          es: 'Hernán Alegresa de cuerpo entero con traje azul marino y remera oscura, de pie frente a una cortina blanca.',
          en: 'Full-length shot of Hernán Alegresa in a navy suit and dark tee, standing against a white curtain.',
        },
      },
      {
        image: rentTheLook04,
        alt: {
          es: 'Hernán Alegresa con traje de lino beige y remera negra, apoyado en una columna de bloques de hormigón.',
          en: 'Hernán Alegresa in a beige linen suit and black tee, leaning on a column of concrete blocks.',
        },
      },
      {
        image: rentTheLook02,
        alt: {
          es: 'Hernán Alegresa con traje azul marino y camisa blanca, la mano en la solapa, mirando a cámara frente a una cortina de lino.',
          en: 'Hernán Alegresa in a navy suit and white shirt, hand on the lapel, looking into the camera against a linen curtain.',
        },
      },
    ],
    videos: [
      {
        src: rentTheLookClip01,
        poster: rentTheLookPoster01,
        label: {
          es: 'Hernán posando con traje de lino junto a una columna de bloques.',
          en: 'Hernán posing in a linen suit beside a column of blocks.',
        },
      },
      {
        src: rentTheLookClip02,
        poster: rentTheLookPoster02,
        label: {
          es: 'Detrás de cámara: Hernán sentado mientras lo fotografían.',
          en: 'Behind the scenes: Hernán seated while being photographed.',
        },
      },
      {
        src: rentTheLookClip03,
        poster: rentTheLookPoster03,
        label: {
          es: 'Hernán con pantalón de lino y remera negra, con el saco en la mano.',
          en: 'Hernán in linen trousers and a black tee, jacket in hand.',
        },
      },
      {
        src: rentTheLookClip04,
        poster: rentTheLookPoster04,
        label: {
          es: 'Detrás de cámara: Hernán de traje y lentes de sol frente al equipo de fotografía.',
          en: 'Behind the scenes: Hernán in a suit and sunglasses facing the photo crew.',
        },
      },
    ],
  },
};

/** Where a brand's card should lead: its own page if it has one, else its spot on /work. */
export function workHref(lang: Lang, slug: string): string {
  return slug in workPages ? `/${lang}/work/${slug}` : `/${lang}/work#${slug}`;
}
