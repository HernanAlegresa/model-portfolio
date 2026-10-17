import { ui, defaultLang, type Lang, type UiKey } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Swaps the locale segment of a pathname, keeping the rest of the path intact. */
export function switchLocalePath(pathname: string, newLang: Lang): string {
  const segments = pathname.split('/');
  segments[1] = newLang;
  return segments.join('/') || '/';
}
