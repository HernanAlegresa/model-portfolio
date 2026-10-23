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
import originalPenguin01 from '../assets/work/original-penguin/original-penguin-01.jpg';
import originalPenguin02 from '../assets/work/original-penguin/original-penguin-02.jpg';
import originalPenguin03 from '../assets/work/original-penguin/original-penguin-03.jpg';
import originalPenguin04 from '../assets/work/original-penguin/original-penguin-04.jpg';
import originalPenguin05 from '../assets/work/original-penguin/original-penguin-05.jpg';
import originalPenguin06 from '../assets/work/original-penguin/original-penguin-06.jpg';
import originalPenguin07 from '../assets/work/original-penguin/original-penguin-07.jpg';
import originalPenguin08 from '../assets/work/original-penguin/original-penguin-08.jpg';
import originalPenguin09 from '../assets/work/original-penguin/original-penguin-09.jpg';
import originalPenguin10 from '../assets/work/original-penguin/original-penguin-10.jpg';
import originalPenguin11 from '../assets/work/original-penguin/original-penguin-11.jpg';
import originalPenguin12 from '../assets/work/original-penguin/original-penguin-12.jpg';
import originalPenguin13 from '../assets/work/original-penguin/original-penguin-13.jpg';
import originalPenguin14 from '../assets/work/original-penguin/original-penguin-14.jpg';
import originalPenguin15 from '../assets/work/original-penguin/original-penguin-15.jpg';
import originalPenguin16 from '../assets/work/original-penguin/original-penguin-16.jpg';
import originalPenguin17 from '../assets/work/original-penguin/original-penguin-17.jpg';
import originalPenguin18 from '../assets/work/original-penguin/original-penguin-18.jpg';
import originalPenguin19 from '../assets/work/original-penguin/original-penguin-19.jpg';
import originalPenguin20 from '../assets/work/original-penguin/original-penguin-20.jpg';
import originalPenguin21 from '../assets/work/original-penguin/original-penguin-21.jpg';
import originalPenguinClip01 from '../assets/video/work/original-penguin-01.mp4?url';
import originalPenguinClip02 from '../assets/video/work/original-penguin-02.mp4?url';
import originalPenguinPoster01 from '../assets/video/work/original-penguin-01-poster.jpg';
import originalPenguinPoster02 from '../assets/video/work/original-penguin-02-poster.jpg';
import armaniBeauty01 from '../assets/work/armani-beauty/armani-beauty-01.jpg';
import armaniBeauty02 from '../assets/work/armani-beauty/armani-beauty-02.jpg';
import armaniBeauty03 from '../assets/work/armani-beauty/armani-beauty-03.jpg';
import armaniBeauty04 from '../assets/work/armani-beauty/armani-beauty-04.jpg';
import armaniBeauty05 from '../assets/work/armani-beauty/armani-beauty-05.jpg';
import armaniBeautyFilmClip from '../assets/video/work/armani-beauty-film.mp4?url';
import armaniBeautyFilmPoster from '../assets/video/work/armani-beauty-film-poster.jpg';
import rabanne01 from '../assets/work/rabanne/rabanne-01.jpg';
import rabanne02 from '../assets/work/rabanne/rabanne-02.jpg';
import rabanne03 from '../assets/work/rabanne/rabanne-03.jpg';
import rabanne04 from '../assets/work/rabanne/rabanne-04.jpg';
import rabanne05 from '../assets/work/rabanne/rabanne-05.jpg';
import rabanne06 from '../assets/work/rabanne/rabanne-06.jpg';
import rabanneClip01 from '../assets/video/work/rabanne-01.mp4?url';
import rabannePoster01 from '../assets/video/work/rabanne-01-poster.jpg';
import meller01 from '../assets/work/meller/meller-01.jpg';
import meller02 from '../assets/work/meller/meller-02.jpg';
import meller03 from '../assets/work/meller/meller-03.jpg';
import meller04 from '../assets/work/meller/meller-04.jpg';
import meller05 from '../assets/work/meller/meller-05.jpg';
import urbanHaus01 from '../assets/work/urban-haus/urban-haus-01.jpg';
import urbanHaus02 from '../assets/work/urban-haus/urban-haus-02.jpg';
import urbanHaus03 from '../assets/work/urban-haus/urban-haus-03.jpg';
import urbanHaus04 from '../assets/work/urban-haus/urban-haus-04.jpg';
import urbanHaus05 from '../assets/work/urban-haus/urban-haus-05.jpg';
import urbanHaus06 from '../assets/work/urban-haus/urban-haus-06.jpg';
import urbanHaus07 from '../assets/work/urban-haus/urban-haus-07.jpg';
import urbanHaus08 from '../assets/work/urban-haus/urban-haus-08.jpg';
import urbanHaus09 from '../assets/work/urban-haus/urban-haus-09.jpg';
import urbanHaus10 from '../assets/work/urban-haus/urban-haus-10.jpg';
import urbanHaus11 from '../assets/work/urban-haus/urban-haus-11.jpg';
import urbanHaus12 from '../assets/work/urban-haus/urban-haus-12.jpg';
import urbanHaus13 from '../assets/work/urban-haus/urban-haus-13.jpg';
import urbanHaus14 from '../assets/work/urban-haus/urban-haus-14.jpg';
import urbanHaus15 from '../assets/work/urban-haus/urban-haus-15.jpg';
import urbanHaus16 from '../assets/work/urban-haus/urban-haus-16.jpg';
import urbanHaus17 from '../assets/work/urban-haus/urban-haus-17.jpg';
import urbanHaus18 from '../assets/work/urban-haus/urban-haus-18.jpg';
import urbanHaus19 from '../assets/work/urban-haus/urban-haus-19.jpg';
import urbanHaus20 from '../assets/work/urban-haus/urban-haus-20.jpg';
import urbanHaus21 from '../assets/work/urban-haus/urban-haus-21.jpg';
import urbanHaus22 from '../assets/work/urban-haus/urban-haus-22.jpg';
import urbanHaus23 from '../assets/work/urban-haus/urban-haus-23.jpg';
import urbanHaus24 from '../assets/work/urban-haus/urban-haus-24.jpg';
import urbanHaus25 from '../assets/work/urban-haus/urban-haus-25.jpg';
import urbanHaus26 from '../assets/work/urban-haus/urban-haus-26.jpg';
import urbanHaus27 from '../assets/work/urban-haus/urban-haus-27.jpg';
import vans01 from '../assets/work/vans/vans-01.jpg';
import vans02 from '../assets/work/vans/vans-02.jpg';
import vans03 from '../assets/work/vans/vans-03.jpg';
import vans04 from '../assets/work/vans/vans-04.jpg';
import vans05 from '../assets/work/vans/vans-05.jpg';
import vans06 from '../assets/work/vans/vans-06.jpg';
import vans07 from '../assets/work/vans/vans-07.jpg';
import vans08 from '../assets/work/vans/vans-08.jpg';
import vans09 from '../assets/work/vans/vans-09.jpg';
import vansClip01 from '../assets/video/work/vans-01.mp4?url';
import vansClip02 from '../assets/video/work/vans-02.mp4?url';
import vansClip03 from '../assets/video/work/vans-03.mp4?url';
import vansPoster01 from '../assets/video/work/vans-01-poster.jpg';
import vansPoster02 from '../assets/video/work/vans-02-poster.jpg';
import vansPoster03 from '../assets/video/work/vans-03-poster.jpg';
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
 *   · `rows`: rows of one to four, chosen one by one with `inRows(...)`
 *     (which also fills `rows`). Every photo keeps its own proportions and
 *     the photos of a row share the same height, so the row fills the
 *     width exactly: two 2:3 photos make a tall pair, three a tighter row,
 *     four a short one (for brands with many photos, to keep the page
 *     short). On phones a pair stays two across, a trio shows its first
 *     photo full width and a four splits into two pairs. A row can also
 *     hold a film (`WorkFilm`): a video shown with the same weight as the
 *     photos, silent and looping while on screen; a horizontal one alone
 *     in its row spans the full width, a vertical one sits among the
 *     photos like one more of them.
 *     `position` and `zoom` work as in `trios`.
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
  /** Only used by the `trios` and `rows` crops. Default: centred. */
  position?: string;
  /** Only used by `trios` and `rows`: 1 = no zoom, 1.2 = 20% closer. */
  zoom?: number;
}

export interface WorkClip {
  src: string;
  poster: ImageMetadata;
  label: Record<Lang, string>;
}

/** A video shown in the gallery itself, as one more piece of the work (`rows` only). */
export interface WorkFilm extends WorkClip {
  /** Its frame size in pixels, for its proportions in the row. */
  width: number;
  height: number;
}

/** One place in a `rows` row: a photo (its position in `photos`) or a film. */
export type WorkRowItem = { photo: number } | { film: WorkFilm };

export interface WorkPage {
  layout?: 'pairs' | 'trios' | 'rows';
  photos: WorkPhoto[];
  /** Only for `rows`: what each row holds, in order. */
  rows?: WorkRowItem[][];
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
 * Like `inOrder`, but row by row: each number is a photo of the table, and
 * a film can take a place in a row too. Gives the photos in order (for the
 * viewer) and what each row holds.
 */
function inRows(photos: Record<number, WorkPhoto>, rows: (number | WorkFilm)[][]): Pick<WorkPage, 'photos' | 'rows'> {
  const order: number[] = [];
  const layout = rows.map((row) => {
    if (row.length < 1 || row.length > 4) throw new Error(`work-pages: a row takes one to four items, not ${row.length}`);
    return row.map((item): WorkRowItem => {
      if (typeof item !== 'number') return { film: item };
      order.push(item);
      return { photo: order.length - 1 };
    });
  });
  return { photos: inOrder(photos, order), rows: layout };
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

/**
 * Original Penguin's photos, numbered like their files. All are already
 * 2:3 like the `rows` frame, so none needs `position` or `zoom` yet.
 */
const originalPenguinPhotos: Record<number, WorkPhoto> = {
  1: {
    image: originalPenguin01,
    alt: {
      es: 'Hernán Alegresa con buzo crema Original Penguin y pantalón azul marino, apoyado en el tronco de una palmera.',
      en: 'Hernán Alegresa in a cream Original Penguin sweatshirt and navy trousers, leaning on a palm trunk.',
    },
  },
  2: {
    image: originalPenguin02,
    alt: {
      es: 'Hernán Alegresa con camisa de jean abierta sobre una remera blanca estampada, mirando a cámara frente a una escultura blanca.',
      en: 'Hernán Alegresa in an open denim shirt over a printed white tee, looking into the camera in front of a white sculpture.',
    },
  },
  3: {
    image: originalPenguin03,
    alt: {
      es: 'Hernán Alegresa con camisa de jean y remera blanca, apoyado en una pared encalada con azulejos azules de Casapueblo.',
      en: 'Hernán Alegresa in a denim shirt and white tee, leaning on a whitewashed wall with blue Casapueblo tiles.',
    },
  },
  4: {
    image: originalPenguin04,
    alt: {
      es: 'Hernán Alegresa con campera azul marino, polo azul, short crema y lentes de sol, sentado en las rocas bajo Casapueblo.',
      en: 'Hernán Alegresa in a navy jacket, blue polo, cream shorts and sunglasses, seated on the rocks below Casapueblo.',
    },
  },
  5: {
    image: originalPenguin05,
    alt: {
      es: 'Hernán Alegresa con lentes de sol, subiendo el cierre de una campera azul marino de puños a rayas, cielo nublado de fondo.',
      en: 'Hernán Alegresa in sunglasses, zipping up a navy jacket with striped cuffs against a cloudy sky.',
    },
  },
  6: {
    image: originalPenguin06,
    alt: {
      es: 'Hernán Alegresa de pie en la costa rocosa con polo azul, short crema y la campera azul marino sobre el hombro.',
      en: 'Hernán Alegresa standing on the rocky shore in a blue polo and cream shorts, the navy jacket over his shoulder.',
    },
  },
  7: {
    image: originalPenguin07,
    alt: {
      es: 'Primer plano de Hernán Alegresa con lentes de sol dorados, cerrando una campera azul marino con el pingüino bordado.',
      en: 'Close-up of Hernán Alegresa in gold sunglasses, zipping a navy jacket with the embroidered penguin.',
    },
  },
  8: {
    image: originalPenguin08,
    alt: {
      es: 'Hernán Alegresa sentado en las rocas junto al mar con campera azul marino y zapatillas, con Casapueblo al fondo.',
      en: 'Hernán Alegresa seated on the rocks by the sea in a navy jacket and sneakers, Casapueblo behind him.',
    },
  },
  9: {
    image: originalPenguin09,
    alt: {
      es: 'Hernán Alegresa en la playa con gorra beige, remera blanca y short de baño azul, acomodándose la gorra.',
      en: 'Hernán Alegresa on the beach in a beige cap, white tee and blue swim shorts, adjusting the cap.',
    },
  },
  10: {
    image: originalPenguin10,
    alt: {
      es: 'Hernán Alegresa con gorra beige y camisa celeste, la mano en la gorra, con el mar de fondo.',
      en: 'Hernán Alegresa in a beige cap and light blue shirt, hand on the cap, the sea behind him.',
    },
  },
  11: {
    image: originalPenguin11,
    alt: {
      es: 'Hernán Alegresa con camisa tropical estampada y lentes de sol, sentado en las rocas con la mano en la cara.',
      en: 'Hernán Alegresa in a printed tropical shirt and sunglasses, seated on the rocks with his hand on his face.',
    },
  },
  12: {
    image: originalPenguin12,
    alt: {
      es: 'Hernán Alegresa con camisa tropical estampada y lentes de sol, sentado en las rocas con el brazo extendido.',
      en: 'Hernán Alegresa in a printed tropical shirt and sunglasses, seated on the rocks with his arm stretched out.',
    },
  },
  13: {
    image: originalPenguin13,
    alt: {
      es: 'Hernán Alegresa recostado en una duna con remera azul, la mano en el pelo, con la playa y el mar detrás.',
      en: 'Hernán Alegresa reclining on a dune in a blue tee, hand in his hair, the beach and sea behind him.',
    },
  },
  14: {
    image: originalPenguin14,
    alt: {
      es: 'Hernán Alegresa recostado en una duna con remera azul de pingüino bordado, mirando hacia un costado.',
      en: 'Hernán Alegresa reclining on a dune in a blue tee with an embroidered penguin, looking to the side.',
    },
  },
  15: {
    image: originalPenguin15,
    alt: {
      es: 'Hernán Alegresa con polo rosado y lentes de sol, apoyado en un poste de madera bajo una palmera.',
      en: 'Hernán Alegresa in a pink polo and sunglasses, leaning on a wooden post beneath a palm tree.',
    },
  },
  16: {
    image: originalPenguin16,
    alt: {
      es: 'Hernán Alegresa con buzo crema Original Penguin, apoyado en un poste con los lentes de sol en la mano.',
      en: 'Hernán Alegresa in a cream Original Penguin sweatshirt, leaning on a post with his sunglasses in hand.',
    },
  },
  17: {
    image: originalPenguin17,
    alt: {
      es: 'Hernán Alegresa con buzo crema Original Penguin, el brazo apoyado en un poste y la mano en el bolsillo.',
      en: 'Hernán Alegresa in a cream Original Penguin sweatshirt, arm resting on a post and hand in his pocket.',
    },
  },
  18: {
    image: originalPenguin18,
    alt: {
      es: 'Hernán Alegresa de perfil con gorra y remera negras, el mentón en la mano, junto a una columna blanca.',
      en: 'Hernán Alegresa in profile in a black cap and tee, chin on his hand, beside a white column.',
    },
  },
  19: {
    image: originalPenguin19,
    alt: {
      es: 'Hernán Alegresa con gorra y remera negras, el mentón en la mano, mirando a cámara junto a una columna blanca.',
      en: 'Hernán Alegresa in a black cap and tee, chin on his hand, looking into the camera beside a white column.',
    },
  },
  20: {
    image: originalPenguin20,
    alt: {
      es: 'Hernán Alegresa con polo blanco, buzo celeste sobre los hombros y lentes de sol, tomando un café al sol.',
      en: 'Hernán Alegresa in a white polo, a light blue sweatshirt over his shoulders and sunglasses, drinking a coffee in the sun.',
    },
  },
  21: {
    image: originalPenguin21,
    alt: {
      es: 'Hernán Alegresa con polo blanco y buzo celeste sobre los hombros, llevándose una taza de café a la boca.',
      en: 'Hernán Alegresa in a white polo with a light blue sweatshirt over his shoulders, raising a cup of coffee.',
    },
  },
};

/** Armani Beauty's photos, numbered like their files. 01 is also the Home card's. */
const armaniBeautyPhotos: Record<number, WorkPhoto> = {
  1: {
    image: armaniBeauty01,
    alt: {
      es: 'Hernán Alegresa con camisa tejida a rayas, sosteniendo un frasco de Acqua di Giò frente al mar al atardecer.',
      en: 'Hernán Alegresa in a striped knit shirt, holding a bottle of Acqua di Giò in front of the sea at sunset.',
    },
  },
  2: {
    image: armaniBeauty02,
    alt: {
      es: 'Hernán Alegresa caminando por la arena con camisa tejida a rayas, pantalón blanco y lentes de sol, durante un evento de Armani en la playa.',
      en: 'Hernán Alegresa walking on the sand in a striped knit shirt, white trousers and sunglasses, during an Armani beach event.',
    },
  },
  3: {
    image: armaniBeauty03,
    alt: {
      es: 'Hernán Alegresa agachado junto al cartel de Armani en la playa, mirando un frasco de perfume a contraluz.',
      en: 'Hernán Alegresa crouching by the Armani sign on the beach, looking at a perfume bottle against the light.',
    },
  },
  4: {
    image: armaniBeauty04,
    alt: {
      es: 'Hernán Alegresa de pie junto al cartel Mare Giorgio Armani en la playa, levantando un frasco de perfume al atardecer.',
      en: 'Hernán Alegresa standing by the Mare Giorgio Armani sign on the beach, raising a perfume bottle at sunset.',
    },
  },
  5: {
    image: armaniBeauty05,
    alt: {
      es: 'Hernán Alegresa con un trago junto a una invitada con abanico, en el parador del evento de Armani al atardecer.',
      en: 'Hernán Alegresa with a drink beside a guest holding a fan, at the Armani event beach bar at sunset.',
    },
  },
};

/** Armani Beauty's film, shot with a professional camera (1280×720 after conversion). */
const armaniBeautyFilm: WorkFilm = {
  src: armaniBeautyFilmClip,
  poster: armaniBeautyFilmPoster,
  width: 1280,
  height: 720,
  label: {
    es: 'Hernán a contraluz frente al atardecer en la playa, con un frasco de Acqua di Giò en la mano.',
    en: 'Hernán silhouetted against the sunset on the beach, holding a bottle of Acqua di Giò.',
  },
};

/**
 * Rabanne's photos, from the 1 Million Black launch night in Montevideo,
 * numbered like their files. 04 is also the Home and /work card's.
 */
const rabannePhotos: Record<number, WorkPhoto> = {
  1: {
    image: rabanne01,
    alt: {
      es: 'Hernán Alegresa con remera negra mostrando un frasco de 1 Million Black frente a los afiches de Rabanne.',
      en: 'Hernán Alegresa in a black tee holding up a bottle of 1 Million Black in front of Rabanne posters.',
    },
  },
  2: {
    image: rabanne02,
    alt: {
      es: 'Hernán Alegresa al volante de un auto clásico descapotable negro, mirando hacia atrás, de noche frente al evento.',
      en: 'Hernán Alegresa at the wheel of a black vintage convertible, looking back over his shoulder, at night outside the event.',
    },
  },
  3: {
    image: rabanne03,
    alt: {
      es: 'Hernán Alegresa sentado en un auto clásico descapotable con el brazo sobre la puerta, junto a un invitado con gorra y lentes.',
      en: 'Hernán Alegresa seated in a vintage convertible with his arm on the door, next to a guest in a cap and sunglasses.',
    },
  },
  4: {
    image: rabanne04,
    alt: {
      es: 'Hernán Alegresa asomándose por encima de la puerta de un auto clásico negro, con el pelo al viento.',
      en: 'Hernán Alegresa leaning out over the door of a black vintage car, his hair caught by the wind.',
    },
  },
  5: {
    image: rabanne05,
    alt: {
      es: 'Hernán Alegresa al volante de un auto clásico descapotable, mirando hacia abajo, con la entrada del evento detrás.',
      en: 'Hernán Alegresa at the wheel of a vintage convertible, looking down, with the event entrance behind him.',
    },
  },
  6: {
    image: rabanne06,
    alt: {
      es: 'Hernán Alegresa de pie junto a un auto clásico descapotable negro, con la mano en la puerta, a punto de subirse.',
      en: 'Hernán Alegresa standing by a black vintage convertible, one hand on the door, about to get in.',
    },
  },
};

/**
 * Meller's photos (sunglasses), the ones shot with a professional camera,
 * numbered like their files. 01 is also the Home card's.
 */
const mellerPhotos: Record<number, WorkPhoto> = {
  1: {
    image: meller01,
    alt: {
      es: 'Hernán Alegresa con lentes deportivos espejados y buzo tejido a rayas, cruzando dos paletas azules KUL frente al pecho.',
      en: 'Hernán Alegresa in mirrored sport sunglasses and a striped knit sweater, crossing two blue KUL paddles over his chest.',
    },
  },
  2: {
    image: meller02,
    alt: {
      es: 'Hernán Alegresa sonriendo con lentes de sol y campera negra, con un vaso en la mano, en una fiesta iluminada de naranja.',
      en: 'Hernán Alegresa smiling in sunglasses and a black jacket, cup in hand, at an orange-lit party.',
    },
  },
  3: {
    image: meller03,
    alt: {
      es: 'Hernán Alegresa con camiseta de Flamengo y lentes de sol, con los brazos en alto sobre una vista de Río de Janeiro.',
      en: 'Hernán Alegresa in a Flamengo jersey and sunglasses, arms raised above a view of Rio de Janeiro.',
    },
  },
  4: {
    image: meller04,
    alt: {
      es: 'Selfie de Hernán Alegresa con lentes de sol rojos tomando agua de coco en la playa de Ipanema.',
      en: 'Selfie of Hernán Alegresa in red sunglasses drinking from a coconut on Ipanema beach.',
    },
  },
  5: {
    image: meller05,
    alt: {
      es: 'Hernán Alegresa en una reposera de la playa, con la cara tapada por una remera y los lentes de sol encima, frente al morro Dois Irmãos.',
      en: 'Hernán Alegresa in a beach chair, his face covered by a T-shirt with the sunglasses on top, facing the Dois Irmãos hills.',
    },
  },
};

/** Urban Haus' photos, numbered like their files: 01–14 in the city, 15–27 in the countryside. */
const urbanHausPhotos: Record<number, WorkPhoto> = {
  1: {
    image: urbanHaus01,
    alt: {
      es: 'Hernán Alegresa con bucket hat negro, lentes de sol y camisa de lino verde, sentado en un murito junto a una bolsa de tela.',
      en: 'Hernán Alegresa in a black bucket hat, sunglasses and a green linen shirt, sitting on a low wall beside a tote bag.',
    },
  },
  2: {
    image: urbanHaus02,
    alt: {
      es: 'Hernán Alegresa de perfil, con bucket hat negro, lentes de sol y camisa de lino verde, haciendo la V detrás de un poste.',
      en: 'Hernán Alegresa in profile, in a black bucket hat, sunglasses and a green linen shirt, making a peace sign behind a post.',
    },
  },
  3: {
    image: urbanHaus03,
    alt: {
      es: 'Detalle de la camisa de lino verde, el pantalón azul y las zapatillas blancas y verdes sobre un piso de baldosas caladas.',
      en: 'Detail of the green linen shirt, navy trousers and white and green sneakers on open paving tiles.',
    },
  },
  4: {
    image: urbanHaus04,
    alt: {
      es: 'Hernán Alegresa con camisa blanca de manga corta y pantalón verde, sentado en una silla de madera en un interior.',
      en: 'Hernán Alegresa in a white short-sleeved shirt and green trousers, sitting on a wooden chair indoors.',
    },
  },
  5: {
    image: urbanHaus05,
    alt: {
      es: 'Hernán Alegresa acostado en el pasto, visto desde arriba, con camisa blanca y pantalón verde, sosteniendo unos lentes de sol.',
      en: 'Hernán Alegresa lying on the grass, seen from above, in a white shirt and green trousers, holding a pair of sunglasses.',
    },
  },
  6: {
    image: urbanHaus06,
    alt: {
      es: 'Primer plano desde arriba de Hernán Alegresa acostado en el pasto, con camisa blanca, bucket hat negro y lentes de sol.',
      en: 'Close-up from above of Hernán Alegresa lying on the grass, in a white shirt, black bucket hat and sunglasses.',
    },
  },
  7: {
    image: urbanHaus07,
    alt: {
      es: 'Hernán Alegresa con remera blanca, gorra negra, lentes de sol y short de baño estampado, frente a una pared de cañas.',
      en: 'Hernán Alegresa in a white T-shirt, black cap, sunglasses and printed swim shorts, in front of a bamboo wall.',
    },
  },
  8: {
    image: urbanHaus08,
    alt: {
      es: 'Hernán Alegresa de perfil con remera blanca, gorra negra y short de baño estampado, frente a una pared de cañas.',
      en: 'Hernán Alegresa in profile in a white T-shirt, black cap and printed swim shorts, in front of a bamboo wall.',
    },
  },
  9: {
    image: urbanHaus09,
    alt: {
      es: 'Detalle de Hernán Alegresa con remera a rayas verdes, poniéndose unas zapatillas blancas y verdes con medias blancas.',
      en: 'Detail of Hernán Alegresa in a green-striped T-shirt, putting on white and green sneakers with white socks.',
    },
  },
  10: {
    image: urbanHaus10,
    alt: {
      es: 'Hernán Alegresa caminando de perfil frente a una pared, con remera a rayas verdes, bermuda cargo y zapatillas blancas.',
      en: 'Hernán Alegresa walking in profile past a wall, in a green-striped T-shirt, cargo shorts and white sneakers.',
    },
  },
  11: {
    image: urbanHaus11,
    alt: {
      es: 'Hernán Alegresa con remera a rayas verdes, haciéndose sombra con la mano y mirando a lo lejos frente a un edificio.',
      en: 'Hernán Alegresa in a green-striped T-shirt, shading his eyes with his hand and looking into the distance by a building.',
    },
  },
  12: {
    image: urbanHaus12,
    alt: {
      es: 'Hernán Alegresa con remera a rayas verdes, haciéndose sombra con la mano bajo un cielo blanco, con una fachada naranja detrás.',
      en: 'Hernán Alegresa in a green-striped T-shirt, shading his eyes under a white sky, with an orange façade behind.',
    },
  },
  13: {
    image: urbanHaus13,
    alt: {
      es: 'Hernán Alegresa de espaldas, acomodándose la gorra, con una remera blanca estampada que dice OFFLINE, junto a una pared de ladrillo.',
      en: 'Hernán Alegresa from behind, adjusting his cap, in a white T-shirt printed with OFFLINE, by a brick wall.',
    },
  },
  14: {
    image: urbanHaus14,
    alt: {
      es: 'Detalle de la espalda de la remera blanca estampada OFFLINE, con flores violetas, junto a una pared de ladrillo.',
      en: 'Close-up of the back of the white OFFLINE T-shirt, with purple flowers, by a brick wall.',
    },
  },
  15: {
    image: urbanHaus15,
    alt: {
      es: 'Hernán Alegresa con campera marrón, apoyado en una tranquera detrás de otra modelo con campera beige, en el campo.',
      en: 'Hernán Alegresa in a brown jacket, leaning on a farm gate behind another model in a beige jacket, in the countryside.',
    },
  },
  16: {
    image: urbanHaus16,
    alt: {
      es: 'Hernán Alegresa con campera beige, apoyado en una tranquera con la mano en el mentón, junto a otra modelo sentada.',
      en: 'Hernán Alegresa in a beige jacket, leaning on a farm gate with his hand on his chin, beside another model sitting on it.',
    },
  },
  17: {
    image: urbanHaus17,
    alt: {
      es: 'Hernán Alegresa con campera beige de cuello de corderoy y jean claro, con un buzo en el brazo, en un corral.',
      en: 'Hernán Alegresa in a beige jacket with a corduroy collar and light jeans, a sweater over his arm, in a paddock.',
    },
  },
  18: {
    image: urbanHaus18,
    alt: {
      es: 'Foto en blanco y negro de Hernán Alegresa con buzo negro de cierre, acariciando a un caballo por encima del cerco.',
      en: 'Black-and-white photo of Hernán Alegresa in a black zip-up sweater, stroking a horse over the fence.',
    },
  },
  19: {
    image: urbanHaus19,
    alt: {
      es: 'Foto en blanco y negro, movida, de Hernán Alegresa sonriendo con un caballo que le apoya la cabeza, junto al cerco.',
      en: 'Blurred black-and-white photo of Hernán Alegresa smiling as a horse rests its head on him, by the fence.',
    },
  },
  20: {
    image: urbanHaus20,
    alt: {
      es: 'Foto en blanco y negro de Hernán Alegresa con buzo negro, mirando a un caballo que se asoma por encima del cerco.',
      en: 'Black-and-white photo of Hernán Alegresa in a black sweater, looking at a horse leaning over the fence.',
    },
  },
  21: {
    image: urbanHaus21,
    alt: {
      es: 'Foto en blanco y negro de Hernán Alegresa sonriendo con los dientes apretados mientras un caballo le muerde la manga.',
      en: 'Black-and-white photo of Hernán Alegresa grinning as a horse nibbles his sleeve.',
    },
  },
  22: {
    image: urbanHaus22,
    alt: {
      es: 'Foto en blanco y negro, movida, de Hernán Alegresa riéndose con un caballo detrás, en el corral.',
      en: 'Blurred black-and-white photo of Hernán Alegresa laughing with a horse behind him, in the paddock.',
    },
  },
  23: {
    image: urbanHaus23,
    alt: {
      es: 'Hernán Alegresa con gorro tejido marrón, buzo blanco con capucha y campera acolchada marrón, sentado contra la rueda de un tractor.',
      en: 'Hernán Alegresa in a brown knit beanie, white hoodie and brown quilted jacket, sitting against a tractor wheel.',
    },
  },
  24: {
    image: urbanHaus24,
    alt: {
      es: 'Hernán Alegresa con gorro tejido y campera acolchada marrón, apoyado en un tractor verde, visto desde abajo.',
      en: 'Hernán Alegresa in a knit beanie and brown quilted jacket, leaning on a green tractor, seen from below.',
    },
  },
  25: {
    image: urbanHaus25,
    alt: {
      es: 'Hernán Alegresa con buzo tejido bordó, recostado contra un tronco con las manos detrás de la cabeza y una campera beige al lado.',
      en: 'Hernán Alegresa in a burgundy knit sweater, reclining against a tree trunk with his hands behind his head and a beige jacket beside him.',
    },
  },
  26: {
    image: urbanHaus26,
    alt: {
      es: 'Hernán Alegresa de perfil con campera beige bordada, frente a unos fardos de pasto.',
      en: 'Hernán Alegresa in profile in an embroidered beige jacket, in front of hay bales.',
    },
  },
  27: {
    image: urbanHaus27,
    alt: {
      es: 'Hernán Alegresa con campera beige abierta sobre un buzo tejido marrón, apoyado en unos fardos de pasto.',
      en: 'Hernán Alegresa in an open beige jacket over a brown knit sweater, leaning on hay bales.',
    },
  },
};

/** Vans' photos, numbered like their files. */
const vansPhotos: Record<number, WorkPhoto> = {
  1: {
    image: vans01,
    alt: {
      es: 'Hernán Alegresa con gorra Vans, campera negra, bermuda y medias a cuadros, esperando en una esquina de Río de Janeiro junto a un ómnibus naranja.',
      en: 'Hernán Alegresa in a Vans cap, black jacket, shorts and checkerboard socks, waiting on a Rio de Janeiro corner by an orange bus.',
    },
  },
  2: {
    image: vans02,
    alt: {
      es: 'Hernán Alegresa con gorra Vans y mochila, haciendo la V con las dos manos y sacando la lengua en la cima de un morro de Río.',
      en: 'Hernán Alegresa in a Vans cap and backpack, making peace signs with both hands and sticking his tongue out on top of a Rio hill.',
    },
  },
  3: {
    image: vans03,
    alt: {
      es: 'Hernán Alegresa de espaldas con gorra y mochila, mirando los morros y las casas de Río desde lo alto de un sendero.',
      en: 'Hernán Alegresa from behind in a cap and backpack, looking over the hills and houses of Rio from the top of a trail.',
    },
  },
  4: {
    image: vans04,
    alt: {
      es: 'Detalle de las zapatillas Vans de trekking mojadas y las medias Vans a cuadros, con bermuda cargo negra, en una calle de Río.',
      en: 'Detail of wet Vans hiking shoes and checkerboard Vans socks, with black cargo shorts, on a Rio street.',
    },
  },
  5: {
    image: vans05,
    alt: {
      es: 'Foto en blanco y negro de Hernán Alegresa con campera Vans abierta y un trago en la mano, en un bar.',
      en: 'Black-and-white photo of Hernán Alegresa in an open Vans jacket with a drink in his hand, in a bar.',
    },
  },
  6: {
    image: vans06,
    alt: {
      es: 'Selfie en el espejo de una tienda Vans: Hernán Alegresa con camisa a cuadros, sosteniendo una zapatilla Old Skool junto a la oreja.',
      en: 'Mirror selfie in a Vans store: Hernán Alegresa in a plaid shirt, holding an Old Skool sneaker to his ear.',
    },
  },
  7: {
    image: vans07,
    alt: {
      es: 'Hernán Alegresa con una gorra Vans roja tapándole los ojos, frente a una pared a cuadros negros, blancos y rojos.',
      en: 'Hernán Alegresa with a red Vans cap pulled over his eyes, in front of a black, white and red checkerboard wall.',
    },
  },
  8: {
    image: vans08,
    alt: {
      es: 'Hernán Alegresa con gorra Vans roja, levantando una ceja frente a una pared a cuadros negros, blancos y rojos.',
      en: 'Hernán Alegresa in a red Vans cap, raising an eyebrow in front of a black, white and red checkerboard wall.',
    },
  },
  9: {
    image: vans09,
    alt: {
      es: 'Selfie en el espejo de una tienda Vans: Hernán Alegresa con gorra roja y campera negra Vans.',
      en: 'Mirror selfie in a Vans store: Hernán Alegresa in a red cap and a black Vans jacket.',
    },
  },
};

/** Vans' films, vertical phone videos (720×1280 after conversion). */
const vansFilmTrail: WorkFilm = {
  src: vansClip01,
  poster: vansPoster01,
  width: 720,
  height: 1280,
  label: {
    es: 'Hernán con mochila caminando por un sendero en lo alto de un morro de Río, con las montañas al atardecer detrás.',
    en: 'Hernán with a backpack walking a trail high on a Rio hill, with the mountains at sunset behind.',
  },
};

const vansFilmStore: WorkFilm = {
  src: vansClip02,
  poster: vansPoster02,
  width: 720,
  height: 1280,
  label: {
    es: 'Hernán sin remera, con gorra y mochila, bajando las escaleras de la entrada de una tienda Vans.',
    en: 'Hernán shirtless, in a cap and backpack, walking down the entrance steps of a Vans store.',
  },
};

const vansFilmSummit: WorkFilm = {
  src: vansClip03,
  poster: vansPoster03,
  width: 720,
  height: 1280,
  label: {
    es: 'Hernán sentado en la cima de un morro de Río al atardecer, sonriendo y haciendo señas a cámara entre la gente.',
    en: 'Hernán sitting on top of a Rio hill at sunset, smiling and gesturing at the camera among the crowd.',
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
  'original-penguin': {
    layout: 'rows',
    // One list per row (two or three photos), one look per row, pairs and
    // trios alternating. Each number is a photo in originalPenguinPhotos
    // above (= its file original-penguin-NN.jpg): move the numbers to
    // reorder, or between lists to regroup.
    ...inRows(originalPenguinPhotos, [
      [2, 3], //         denim shirt, Casapueblo
      [4, 7, 5], //      navy jacket
      [8, 6], //         navy jacket, on the shore
      [16, 1, 17], //    cream sweatshirt
      [11, 12], //       tropical shirt
      [9, 10, 15], //    beige cap ×2 + pink polo
      [13, 14], //       blue tee, on the dune
      [18, 19], //       black cap
      [20, 21], //       coffee
    ]),
    videos: [
      {
        src: originalPenguinClip01,
        poster: originalPenguinPoster01,
        label: {
          es: 'Hernán con remera blanca, poniéndose una campera azul marino frente al mar y el cielo azul.',
          en: 'Hernán in a white tee, putting on a navy jacket against the sea and a blue sky.',
        },
      },
      {
        src: originalPenguinClip02,
        poster: originalPenguinPoster02,
        label: {
          es: 'Detrás de cámara: Hernán y otro modelo posando en la escollera mientras los fotografían.',
          en: 'Behind the scenes: Hernán and another model posing on the breakwater while they are photographed.',
        },
      },
    ],
  },
  'armani-beauty': {
    layout: 'rows',
    // The film opens the gallery across the full width, then a pair and
    // a row of three. Each number is a photo in armaniBeautyPhotos above
    // (= its file armani-beauty-NN.jpg); move `armaniBeautyFilm` to
    // another row to change where the film goes.
    ...inRows(armaniBeautyPhotos, [
      [armaniBeautyFilm], //  the film, full width
      [1, 2], //              the perfume at sunset + walking
      [4, 3, 5], //           at the event
    ]),
    // No backstage for this brand: the film is part of the work itself.
    videos: [],
  },
  rabanne: {
    layout: 'rows',
    // The fragrance first, then the night in the car: getting in, then
    // seated with a guest. Each number is a
    // photo in rabannePhotos above (= its file rabanne-NN.jpg): move the
    // numbers to reorder.
    ...inRows(rabannePhotos, [
      [1, 2], // the bottle + looking back from the wheel
      [6, 4], // getting into the car
      [3, 5], // seated, with a guest
    ]),
    videos: [
      {
        src: rabanneClip01,
        poster: rabannePoster01,
        label: {
          es: 'Detrás de cámara: Hernán posando con el perfume frente a los afiches de Rabanne mientras lo filman.',
          en: 'Behind the scenes: Hernán posing with the fragrance in front of Rabanne posters while being filmed.',
        },
      },
    ],
  },
  meller: {
    layout: 'rows',
    // Content wearing the brand's sunglasses, grouped by where it was made.
    // Each number is a photo in mellerPhotos above (= its file
    // meller-NN.jpg): move the numbers to reorder.
    ...inRows(mellerPhotos, [
      [1, 2, 3], //  KUL paddles, party, Rio from the hill
      [4, 5], //     Rio, on the beach
    ]),
    videos: [],
  },
  'urban-haus': {
    layout: 'rows',
    // Two shoots, the countryside one first. Many photos, so mostly rows
    // of four to keep the page short. Each number is a photo in
    // urbanHausPhotos above (= its file urban-haus-NN.jpg): move the
    // numbers to reorder.
    ...inRows(urbanHausPhotos, [
      [15, 17, 16, 27], // countryside: the gate, the beige jacket
      [20, 18, 21], //     with the horse
      [19, 22], //         with the horse, in motion
      [23, 24, 25, 26], // the tractor, the tree, the hay bales
      [1, 2, 3], //        city: linen shirt and bucket hat
      [7, 8, 13, 14], //   white T-shirts: bamboo wall, OFFLINE
      [4, 5, 6], //        white shirt, on the grass
      [10, 11, 12, 9], //  striped T-shirt
    ]),
    videos: [],
  },
  vans: {
    layout: 'rows',
    // Content from a trip to Rio de Janeiro: photos and films side by
    // side, all of it the work itself (no backstage). Each number is a
    // photo in vansPhotos above (= its file vans-NN.jpg); the films are
    // the vansFilm… constants. Move them to reorder.
    ...inRows(vansPhotos, [
      [2, vansFilmSummit, 3, vansFilmTrail], // the hike
      [1, 4, 6, 5], //                          the street, the details
      [9, vansFilmStore, 8, 7], //              the red cap, the store
    ]),
    videos: [],
  },
};

/** Where a brand's card should lead: its own page if it has one, else its spot on /work. */
export function workHref(lang: Lang, slug: string): string {
  return slug in workPages ? `/${lang}/work/${slug}` : `/${lang}/work#${slug}`;
}
