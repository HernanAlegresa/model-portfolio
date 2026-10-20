import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n/ui';
import rentTheLook01 from '../assets/work/rent-the-look/rent-the-look-01.jpg';
import forumIndustries01 from '../assets/work/forum-industries/forum-industries-01.jpg';
import originalPenguin01 from '../assets/work/original-penguin/original-penguin-01.jpg';
import rabanne01 from '../assets/work/rabanne/rabanne-01.jpg';
import armaniBeauty01 from '../assets/work/armani-beauty/armani-beauty-01.jpg';
import meller01 from '../assets/work/meller/meller-01.jpg';
import urbanHaus06 from '../assets/work/urban-haus/urban-haus-06.jpg';
import vans02 from '../assets/work/vans/vans-02.jpg';

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
 * - `position`: which part of the photo stays in frame when it's cropped,
 *   as a CSS object-position (e.g. '50% 20%' keeps the upper part of a
 *   vertical photo). Defaults to the centre.
 *
 * Six cards, two per row, all landscape (1.45:1, like the Máxima Michaels
 * reference). Horizontal photos fit best; vertical ones are cropped to the
 * middle band. A "see more works" button under the grid leads to /work.
 */
export interface SelectedShot {
  work: string;
  image: ImageMetadata | null;
  alt?: Record<Lang, string>;
  position?: string;
}

export const selectedWork: SelectedShot[] = [
  {
    work: 'rent-the-look',
    image: rentTheLook01,
    position: '50% 9%',
    alt: {
      es: 'Hernán Alegresa con traje marrón y remera blanca, sentado en una silla cromada frente a una cortina blanca.',
      en: 'Hernán Alegresa in a brown suit and white tee, seated on a chrome chair against a white curtain.',
    },
  },
  {
    work: 'forum-industries',
    image: forumIndustries01,
    position: '50% 10%',
    alt: {
      es: 'Hernán Alegresa con gorra negra y conjunto deportivo crema, sentado sobre el asfalto mirando a cámara.',
      en: 'Hernán Alegresa in a black cap and a cream sports set, sitting on the asphalt looking at the camera.',
    },
  },
  {
    work: 'original-penguin',
    image: originalPenguin01,
    position: '50% 30%',
    alt: {
      es: 'Hernán Alegresa con buzo blanco de Original Penguin, apoyado en una palmera a pleno sol.',
      en: 'Hernán Alegresa in a white Original Penguin sweatshirt, leaning against a palm tree in full sun.',
    },
  },
  {
    work: 'armani-beauty',
    image: armaniBeauty01,
    position: '50% 38%',
    alt: {
      es: 'Hernán Alegresa con camisa a rayas sosteniendo un perfume Acqua di Giò en la playa al atardecer.',
      en: 'Hernán Alegresa in a striped shirt holding an Acqua di Giò fragrance on the beach at sunset.',
    },
  },
  {
    work: 'rabanne',
    image: rabanne01,
    position: '50% 50%',
    alt: {
      es: 'Hernán Alegresa con remera negra sosteniendo un perfume 1 Million Black frente a los afiches de Rabanne.',
      en: 'Hernán Alegresa in a black tee holding a 1 Million Black fragrance in front of Rabanne posters.',
    },
  },
  {
    work: 'meller',
    image: meller01,
    position: '50% 35%',
    alt: {
      es: 'Hernán Alegresa con lentes de sol espejados y buzo tejido a rayas, sosteniendo dos paletas de playa.',
      en: 'Hernán Alegresa in mirrored sunglasses and a striped knit sweater, holding two beach paddles.',
    },
  },
];

/**
 * Cards for the brands that are on /work but not among the Home's six.
 * Same fields as above; /work takes a brand's card from `selectedWork`
 * first, then from here, else shows a placeholder.
 */
export const workOnlyShots: SelectedShot[] = [
  {
    work: 'urban-haus',
    image: urbanHaus06,
    position: '50% 80%',
    alt: {
      es: 'Primer plano desde arriba de Hernán Alegresa acostado en el pasto, con camisa blanca, bucket hat negro y lentes de sol.',
      en: 'Close-up from above of Hernán Alegresa lying on the grass, in a white shirt, black bucket hat and sunglasses.',
    },
  },
  {
    work: 'vans',
    image: vans02,
    position: '50% 62%',
    alt: {
      es: 'Hernán Alegresa con gorra Vans y mochila, haciendo la V con las dos manos y sacando la lengua en la cima de un morro de Río.',
      en: 'Hernán Alegresa in a Vans cap and backpack, making peace signs with both hands and sticking his tongue out on top of a Rio hill.',
    },
  },
];
