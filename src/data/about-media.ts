import type { ImageMetadata } from 'astro';
import aboutClip from '../assets/video/about.mp4?url';
import aboutPoster from '../assets/video/about-poster.jpg';
import sessionClip from '../assets/video/about-session.mp4?url';
import sessionPoster from '../assets/video/about-session-poster.jpg';
import football from '../assets/about/football.jpg';
import coding from '../assets/about/coding.jpg';
import pipa from '../assets/about/pipa.jpg';

/**
 * What plays in the frame next to the Home's "about" text. Edit this file
 * to choose it; HomeAbout.astro handles the rest.
 *
 * A video wins over photos: if `video` is set, it plays (muted, looping)
 * and `images` is ignored. Otherwise `images` cross-fade one after another.
 * With neither, placeholders cycle so the effect is visible meanwhile.
 *
 * VIDEO — put the file in src/assets/video/ and import it with `?url`:
 *   import aboutClip from '../assets/video/about.mp4?url';
 *   import aboutPoster from '../assets/video/about-poster.jpg';
 *   video: { src: aboutClip, poster: aboutPoster },
 * iPhone .mov files are usually HEVC, which Chrome on Windows and Firefox
 * can't play: convert to H.264 MP4 first (the current about.mp4 is the
 * original clip, full length, re-encoded at 1080×1920 without sound).
 * MP4 (H.264), no sound needed, vertical 9:16 (the frame takes that shape
 * when a video is set), 5–15 s, ideally
 * under ~8 MB. The poster is a still shown before it loads and to visitors
 * who turned off motion; a frame from the video itself works best.
 *
 * PHOTOS — put them in src/assets/about/ and import them:
 *   import about01 from '../assets/about/about-01.jpg';
 *   images: [about01, about02, about03],
 * 3–5 vertical photos; each one stays about 4 seconds.
 *
 * The description screen readers get (for the video or the photos as a set)
 * is `home.about.media.alt` in src/i18n/ui.ts.
 */
export interface AboutMedia {
  video: { src: string; poster: ImageMetadata } | null;
  images: ImageMetadata[];
}

export const aboutMedia: AboutMedia = {
  video: { src: aboutClip, poster: aboutPoster },
  images: [],
};

/**
 * The /about page's media (the Home's frame above is separate).
 *
 * - `video`: the clip next to the opening line. Square (1:1) and muted;
 *   converted from the iPhone .mov like the Work clips (docs/ASSET-GUIDE.md §6).
 * - `football` / `code` / `people`: the photos of the "Fuera de cámara"
 *   blocks (Deporte, Programación, Mi gente). Their descriptions are
 *   `about.<key>.alt` in src/i18n/ui.ts.
 * - `position`: which part stays in frame on phones, where they're cropped.
 */
export const aboutPage = {
  video: { src: sessionClip, poster: sessionPoster },
  football: { image: football, position: '52% 40%' },
  code: { image: coding, position: '78% 65%' },
  people: { image: pipa, position: '50% 55%' },
};
