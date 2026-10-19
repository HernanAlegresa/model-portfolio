import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n/ui';

import rentTheLook01 from '../assets/work/rent-the-look/rent-the-look-01.jpg';
import rentTheLook02 from '../assets/work/rent-the-look/rent-the-look-02.jpg';
import rentTheLook03 from '../assets/work/rent-the-look/rent-the-look-03.jpg';
import rentTheLook04 from '../assets/work/rent-the-look/rent-the-look-04.jpg';
import rentTheLook05 from '../assets/work/rent-the-look/rent-the-look-05.jpg';
import rentTheLook06 from '../assets/work/rent-the-look/rent-the-look-06.jpg';
import rentTheLook07 from '../assets/work/rent-the-look/rent-the-look-07.jpg';
import forumIndustries01 from '../assets/work/forum-industries/forum-industries-01.jpg';
import forumIndustries02 from '../assets/work/forum-industries/forum-industries-02.jpg';
import forumIndustries03 from '../assets/work/forum-industries/forum-industries-03.jpg';
import forumIndustries04 from '../assets/work/forum-industries/forum-industries-04.jpg';
import forumIndustries05 from '../assets/work/forum-industries/forum-industries-05.jpg';
import forumIndustries06 from '../assets/work/forum-industries/forum-industries-06.jpg';
import forumIndustries07 from '../assets/work/forum-industries/forum-industries-07.jpg';
import forumIndustries08 from '../assets/work/forum-industries/forum-industries-08.jpg';
import forumIndustries09 from '../assets/work/forum-industries/forum-industries-09.jpg';
import forumIndustries10 from '../assets/work/forum-industries/forum-industries-10.jpg';
import forumIndustries11 from '../assets/work/forum-industries/forum-industries-11.jpg';
import forumIndustries12 from '../assets/work/forum-industries/forum-industries-12.jpg';
import forumIndustries13 from '../assets/work/forum-industries/forum-industries-13.jpg';
import forumIndustries14 from '../assets/work/forum-industries/forum-industries-14.jpg';
import forumIndustries15 from '../assets/work/forum-industries/forum-industries-15.jpg';
import forumIndustriesClip01 from '../assets/video/work/forum-industries-01.mp4?url';
import forumIndustriesClip02 from '../assets/video/work/forum-industries-02.mp4?url';
import forumIndustriesClip03 from '../assets/video/work/forum-industries-03.mp4?url';
import forumIndustriesClip04 from '../assets/video/work/forum-industries-04.mp4?url';
import forumIndustriesClip05 from '../assets/video/work/forum-industries-05.mp4?url';
import forumIndustriesPoster01 from '../assets/video/work/forum-industries-01-poster.jpg';
import forumIndustriesPoster02 from '../assets/video/work/forum-industries-02-poster.jpg';
import forumIndustriesPoster03 from '../assets/video/work/forum-industries-03-poster.jpg';
import forumIndustriesPoster04 from '../assets/video/work/forum-industries-04-poster.jpg';
import forumIndustriesPoster05 from '../assets/video/work/forum-industries-05-poster.jpg';
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
 * - `photos`: all of them, in order, right under the brand name, each with
 *   a thin frame of page colour around it. Put the best ones first, and
 *   photos that belong together (same look) next to each other.
 * - `layout`: how the photos are laid out (default `pairs`).
 *   · `pairs`: two by two at their own proportions; an odd one out at the
 *     end is shown alone, centred. For brands with a handful of photos.
 *   · `trios`: three across (two on phones, where the first one spans the
 *     full width), every photo cropped to the same 4:5 frame so the rows
 *     line up. For brands with many photos; a multiple of three fills
 *     every row. The viewer still shows each photo whole, uncropped.
 *     Each photo can set `position` (what the crop keeps in view) and
 *     `zoom` (to frame it closer, towards `position`).
 * - `videos`: the "Backstage" strip, all in one row (up to five; two by
 *   two on phones, an odd last one centred).
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
  /** Only used by the `trios` layout's 4:5 crop. Default: centred. */
  position?: string;
  /** Only used by the `trios` layout: 1 = no zoom, 1.2 = 20% closer. */
  zoom?: number;
}

export interface WorkClip {
  src: string;
  poster: ImageMetadata;
  label: Record<Lang, string>;
}

export interface WorkPage {
  layout?: 'pairs' | 'trios';
  photos: WorkPhoto[];
  videos: WorkClip[];
}

/** Picks photos out of a numbered table, in the order given. */
function inOrder(photos: Record<number, WorkPhoto>, order: number[]): WorkPhoto[] {
  return order.map((n) => {
    const photo = photos[n];
    if (!photo) throw new Error(`work-pages: there is no photo ${n}`);
    return photo;
  });
}

/**
 * Forum Industries' photos, numbered like their files. Per photo, for the
 * 4:5 frame of the `trios` layout:
 * - `position`: 'horizontal% vertical%' of the point the frame keeps in
 *   view — '0% 50%' the left edge, '100% 50%' the right, '50% 0%' the top.
 * - `zoom`: 1 shows the whole photo (all but 05 and 06 are already 4:5);
 *   1.2 = 20% closer, towards `position`.
 */
const forumIndustriesPhotos: Record<number, WorkPhoto> = {
  1: {
    image: forumIndustries01,
    alt: {
      es: 'Hernán Alegresa sentado en el asfalto con camiseta de malla crema, short crema y gorra negra, mirando a cámara desde abajo.',
      en: 'Hernán Alegresa seated on the asphalt in a cream mesh jersey, cream shorts and a black cap, looking up into the camera.',
    },
    position: '50% 50%',
    zoom: 1,
  },
  2: {
    image: forumIndustries02,
    alt: {
      es: 'Hernán Alegresa recostado en la vereda con camiseta de malla crema estampada y gorra negra, mirando a cámara por encima del hombro.',
      en: 'Hernán Alegresa reclining on the pavement in a printed cream mesh jersey and black cap, looking into the camera over his shoulder.',
    },
    position: '50% 0%',
    zoom: 1,
  },
  3: {
    image: forumIndustries03,
    alt: {
      es: 'Hernán Alegresa de espaldas con camiseta de malla crema y gorra negra, sonriendo de perfil frente a un muro de ladrillo y revoque.',
      en: 'Hernán Alegresa from behind in a cream mesh jersey and black cap, smiling in profile against a brick and plaster wall.',
    },
    position: '50% 50%',
    zoom: 1,
  },
  4: {
    image: forumIndustries04,
    alt: {
      es: 'Hernán Alegresa con musculosa de básquet bordó HOOPDREAM, sosteniendo una pelota sobre el hombro en una cancha al aire libre.',
      en: 'Hernán Alegresa in a maroon HOOPDREAM basketball tank, holding a ball on his shoulder on an outdoor court.',
    },
    position: '50% 50%',
    zoom: 1,
  },
  5: {
    image: forumIndustries05,
    alt: {
      es: 'Hernán Alegresa picando una pelota de básquet con musculosa bordó HOOPDREAM y short negro en una cancha pintada.',
      en: 'Hernán Alegresa dribbling a basketball in a maroon HOOPDREAM tank and black shorts on a painted court.',
    },
    position: '35% 20%',
    zoom: 1,
  },
  6: {
    image: forumIndustries06,
    alt: {
      es: 'Hernán Alegresa con musculosa bordó HOOPDREAM, mirando hacia abajo con la mano sobre una pelota de básquet, aro de fondo.',
      en: 'Hernán Alegresa in a maroon HOOPDREAM tank, looking down with a hand on a basketball, a hoop behind him.',
    },
    position: '0% 30%',
    zoom: 1,
  },
  7: {
    image: forumIndustries07,
    alt: {
      es: 'Hernán Alegresa sentado con remera negra, gorra negra Forum al revés y auriculares con cable, apoyando la cara en la mano.',
      en: 'Hernán Alegresa seated in a black tee, a backwards black Forum cap and wired earphones, resting his face on his hand.',
    },
    position: '50% 50%',
    zoom: 1,
  },
  8: {
    image: forumIndustries08,
    alt: {
      es: 'Foto en blanco y negro de Hernán Alegresa con remera oscura, mirando hacia arriba con una pelota de fútbol en equilibrio sobre la cabeza.',
      en: 'Black-and-white photo of Hernán Alegresa in a dark tee, looking up with a football balanced on his head.',
    },
    position: '50% 50%',
    zoom: 1,
  },
  9: {
    image: forumIndustries09,
    alt: {
      es: 'Hernán Alegresa con remera negra y gorra Forum al revés, colgado de la red de un arco y sosteniendo una pelota de fútbol.',
      en: 'Hernán Alegresa in a black tee and backwards Forum cap, hanging from a goal net and holding a football.',
    },
    position: '50% 50%',
    zoom: 1,
  },
  10: {
    image: forumIndustries10,
    alt: {
      es: 'Hernán Alegresa con remera deportiva verde y auriculares, mirando al cielo bajo unas barras rojas de ejercicio.',
      en: 'Hernán Alegresa in a green sports tee and headphones, looking up at the sky beneath red exercise bars.',
    },
    position: '50% 50%',
    zoom: 1,
  },
  11: {
    image: forumIndustries11,
    alt: {
      es: 'Hernán Alegresa con remera verde y auriculares, apoyado en una barra roja y mirando hacia un costado.',
      en: 'Hernán Alegresa in a green tee and headphones, leaning on a red bar and looking to the side.',
    },
    position: '50% 50%',
    zoom: 1,
  },
  12: {
    image: forumIndustries12,
    alt: {
      es: 'Hernán Alegresa sonriendo con remera verde y auriculares, apoyado entre las barras rojas de un parque.',
      en: 'Hernán Alegresa smiling in a green tee and headphones, leaning between the red bars of a park.',
    },
    position: '50% 50%',
    zoom: 1,
  },
  13: {
    image: forumIndustries13,
    alt: {
      es: 'Retrato de Hernán Alegresa con musculosa negra, mirando a cámara por encima del hombro.',
      en: 'Portrait of Hernán Alegresa in a black tank top, looking into the camera over his shoulder.',
    },
    position: '50% 50%',
    zoom: 1,
  },
  14: {
    image: forumIndustries14,
    alt: {
      es: 'Hernán Alegresa con musculosa y short negros, inclinado con las manos en las rodillas, mirando hacia un costado.',
      en: 'Hernán Alegresa in a black tank top and shorts, bent over with hands on his knees, looking to the side.',
    },
    position: '50% 50%',
    zoom: 1,
  },
  15: {
    image: forumIndustries15,
    alt: {
      es: 'Hernán Alegresa corriendo por la calle con musculosa blanca, short verde oliva, gorra y zapatillas de trail.',
      en: 'Hernán Alegresa running down the street in a white tank top, olive shorts, a cap and trail shoes.',
    },
    position: '50% 50%',
    zoom: 1,
  },
};

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
  'forum-industries': {
    layout: 'trios',
    // Five rows of three, one look per row. Each number is a photo in
    // forumIndustriesPhotos above (= its file forum-industries-NN.jpg):
    // swap the numbers to change where each one goes.
    photos: inOrder(forumIndustriesPhotos, [1, 3, 2, 14, 13, 15, 7, 8, 9, 10, 11, 12, 5, 4, 6]),
    videos: [
      {
        src: forumIndustriesClip01,
        poster: forumIndustriesPoster01,
        label: {
          es: 'Detrás de cámara: Hernán con campera clara y auriculares, sentado frente a un fondo azul mientras lo filman.',
          en: 'Behind the scenes: Hernán in a light jacket and headphones, seated against a blue backdrop while being filmed.',
        },
      },
      {
        src: forumIndustriesClip02,
        poster: forumIndustriesPoster02,
        label: {
          es: 'Detrás de cámara: Hernán con campera oscura y short blanco en la calle, visto también en el monitor de la cámara.',
          en: 'Behind the scenes: Hernán in a dark jacket and white shorts on the street, also seen on the camera monitor.',
        },
      },
      {
        src: forumIndustriesClip05,
        poster: forumIndustriesPoster05,
        label: {
          es: 'Hernán con camiseta negra estampada posando en un estudio de fondo blanco.',
          en: 'Hernán in a black printed jersey posing in a white-backdrop studio.',
        },
      },
      {
        src: forumIndustriesClip04,
        poster: forumIndustriesPoster04,
        label: {
          es: 'Hernán con campera negra en un estudio blanco, con una pelota de fútbol bajo el pie.',
          en: 'Hernán in a black jacket in a white studio, a football under his foot.',
        },
      },
      {
        src: forumIndustriesClip03,
        poster: forumIndustriesPoster03,
        label: {
          es: 'Detrás de cámara: Hernán con camisa verde oliva frente a un fondo azul, mientras la fotógrafa lo encuadra.',
          en: 'Behind the scenes: Hernán in an olive shirt against a blue backdrop while the photographer frames him.',
        },
      },
    ],
  },
};

/** Where a brand's card should lead: its own page if it has one, else its spot on /work. */
export function workHref(lang: Lang, slug: string): string {
  return slug in workPages ? `/${lang}/work/${slug}` : `/${lang}/work#${slug}`;
}
