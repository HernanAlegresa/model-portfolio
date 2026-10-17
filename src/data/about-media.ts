import type { ImageMetadata } from 'astro';
import aboutClip from '../assets/video/about.mp4?url';
import aboutPoster from '../assets/video/about-poster.jpg';

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
