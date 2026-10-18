# Architecture

## Stack y por qué

- **Astro 7**, salida estática (`output: "static"`, default). Astro genera HTML en build time; no hay JS de framework en el cliente. Elegido porque el sitio es mayormente contenido + fotografía, no una app interactiva — React/Vue serían peso sin beneficio real. El poco JS que existe es TypeScript vanilla en `<script>` de componentes (Astro lo empaqueta): el menú overlay (`Nav.astro`), el selector de idioma (`LanguageSwitcher.astro`), el scroll-reveal (`BaseLayout.astro`) y el video/slideshow de "Sobre mí" (`home/HomeAbout.astro`).
- **TypeScript estricto** (`tsconfig.json` extiende `astro/tsconfigs/strict`).
- **Node.js ≥22.12.0** — requisito real de Astro 7 (`npm view astro engines`). Se actualizó el entorno de desarrollo de Node 20.17 (EOL desde 2026-03-24) a Node 22.23.3 LTS vía nvm-windows.
- **Fuentes autohospedadas** vía fontsource en vez de Google Fonts CDN: `@fontsource-variable/inter-tight` (display), `@fontsource-variable/inter` (cuerpo) y `@fontsource/dm-mono` peso 500 (etiquetas y bio; DM Mono no tiene versión variable).
- **Sin dependencias de animación.** Todo el movimiento es CSS (transiciones, keyframes y animaciones ligadas al scroll con `animation-timeline`) más `IntersectionObserver` nativo — ver "Sistema de movimiento" abajo.

## i18n

Usa el router de i18n nativo de Astro (`astro:i18n`), configurado en `astro.config.mjs`:

```js
i18n: {
  locales: ['es', 'en'],
  defaultLocale: 'es',
  routing: {
    prefixDefaultLocale: true,     // /es/ y /en/, ninguno sin prefijo
    redirectToDefaultLocale: true, // "/" redirige a "/es/"
  },
}
```

- `src/pages/index.astro` existe vacío porque Astro lo requiere como punto de entrada de la raíz, pero el redirect real lo genera Astro automáticamente (en `dist/index.html` queda como un HTML estático con `<meta http-equiv="refresh">` + `rel="canonical"`, válido sin necesitar servidor).
- `src/i18n/ui.ts` — diccionario de strings por idioma (`ui.es`, `ui.en`), tipado (`UiKey` deriva de las claves reales, así un typo en una clave es error de compilación).
- `src/i18n/utils.ts` — `getLangFromUrl`, `useTranslations(lang)` (devuelve función `t(key)`), `switchLocalePath(pathname, newLang)` para el selector de idioma.
- El selector de idioma (`LanguageSwitcher.astro`) asume que toda ruta existe con el mismo slug en ambos idiomas (`/es/work` ↔ `/en/work`). Si en el futuro se localizan los slugs (`/es/trabajo` vs `/en/work`), `switchLocalePath` deja de alcanzar y hay que mapear slug por página — anotado acá para no sorprenderse después.

## Rutas actuales

| Ruta | Estado |
|---|---|
| `/` | Redirect automático a `/es/` |
| `/es/`, `/en/` | Home completa |
| `/es/work`, `/en/work` | Completa — 11 proyectos reales desde Content Collections, con placeholders de foto/video |
| `/es/polaroids`, `/en/polaroids` | Completa — 4 tomas fijas de agencia, con placeholders |
| `/es/about`, `/en/about` | Completa — bio real + ficha técnica (`src/data/profile.ts`) |
| `/es/contact`, `/en/contact` | Completa — Instagram + email pendiente, sin formulario (ver `PROJECT-BRIEF.md` §Contacto) |

`/digitals` ya no existe — se renombró a `/polaroids` por decisión explícita del usuario (2026-10-15). `WipView.astro` sigue existiendo como mecanismo genérico de stub, pero hoy ninguna ruta lo usa — queda disponible para la próxima página que se agregue sin contenido real todavía.

## Componentes

```
src/layouts/BaseLayout.astro   — <html>, head (title, description, hreflang), Nav, slot, SiteFooter; script del scroll-reveal
src/components/
  Nav.astro                   — header: LanguageSwitcher (izq.), "MODELO" (centro, link a Home), hamburguesa (der.) + overlay fullscreen con los 4 links
  LanguageSwitcher.astro      — botón con globo que despliega Español / English (switchLocalePath)
  SiteFooter.astro            — Instagram + copyright
  PlaceholderImage.astro      — bloque rayado con aspect-ratio y label visible, para fotos todavía no cargadas
  HomeView.astro              — hero + orden de las secciones de la Home (ver abajo)
  home/HomeAbout.astro        — "Sobre mí": video o slideshow + frase y párrafo que se iluminan al scrollear
  home/HomeBrands.astro       — banner de marcas que se desliza (marquee CSS)
  home/HomeWork.astro         — grilla 2×3 de trabajos con hover de Máxima Michaels + botón "Ver más trabajos"
  home/HomeStats.astro        — ficha (medidas de profile.ts) + 4 polaroids que llevan a /polaroids
  home/HomeContact.astro      — cierre "Trabajemos juntos" + Instagram
  WorkView.astro              — lista de proyectos desde la Content Collection `work`
  PolaroidsView.astro         — las 4 tomas fijas de agencia
  AboutView.astro             — bio (corta + extendida) + ficha técnica desde src/data/profile.ts
  ContactView.astro           — Instagram + email pendiente, estático
  WipView.astro               — stub genérico "Próximamente", sin ruta activa hoy
src/data/
  profile.ts                  — medidas físicas confirmadas/pendientes, edad manual (nunca calculada de fecha de nacimiento)
  selected-work.ts            — qué 6 marcas y fotos muestra la grilla de trabajos de la Home
  about-media.ts              — video (o fotos) del marco de "Sobre mí"
src/content/
  work/*.yaml                 — una entrada por marca/colaboración (ver content.config.ts)
src/content.config.ts          — schema de la Content Collection `work`
src/assets/                    — medios optimizados por astro:assets (home/hero.png, video/about.mp4 + poster)
```

Las páginas en `src/pages/es/*.astro` y `src/pages/en/*.astro` son deliberadamente finas: solo pasan `lang` a `BaseLayout` + el componente `*View`. Si mañana hay que ajustar el layout de la Home, se edita `HomeView.astro` una sola vez y ambos idiomas lo reciben.

**Gotcha de Astro (CSS con scope):** pasar una clase de layout como prop `class` a un componente hijo (`<PlaceholderImage class="…">`) no funciona, porque Astro solo aplica el atributo de scope a los elementos escritos en el template del propio componente. Envolver al hijo en un `<div>` del padre, o usar `:global()` para estilar elementos internos del hijo (como hacen las secciones de `home/` con `:global(img)`).

## Home

Orden (en `HomeView.astro`), pensado como las preguntas que se hace una marca o un casting:

1. **Hero** — foto B&W a pantalla completa (`100svh`), nombre enorme abajo, bio a la izquierda. Ajustable a mano desde el bloque **HERO CONTROLS** (variables CSS para celular y para ≥56rem).
2. **Sobre mí** (`HomeAbout`) — es la "hoja" que sube tapando el hero.
3. **Banner de marcas** (`HomeBrands`) — las 11 marcas de la Collection, sutil; hace de encabezado de la grilla.
4. **Trabajos** (`HomeWork`) — 6 marcas de `selected-work.ts`, réplica de la sección "Some works" de Máxima Michaels.
5. **Ficha + polaroids** (`HomeStats`), 6. **Contacto** (`HomeContact`). ("Qué hago" se sacó en 2026-10: repetía las categorías y marcas que ya muestran el banner y la grilla.)

El hero y "Sobre mí" van dentro de `<div class="curtain">`: el hero es `position: sticky` y `.curtain__sheet` (fondo opaco, `z-index: 1`) sube por encima. Las secciones 3 a 6 no tienen título visible por decisión del usuario; cada una lleva un `<h2 class="visually-hidden">` para lectores de pantalla.

## Sistema de movimiento

Toda animación vive dentro de `@media (prefers-reduced-motion: no-preference)`; sin esa preferencia el contenido se ve completo y quieto.

| Mecanismo | Dónde | Para qué |
|---|---|---|
| `.reveal`, `.reveal-wipe` (keyframes al cargar) | `global.css`, hero | Entrada del hero. |
| `[data-reveal]` + `IntersectionObserver` | `global.css` + `BaseLayout.astro` | Fade/rise al entrar en pantalla (Work, Polaroids, About, Contact, tarjetas de `HomeWork`). |
| `animation-timeline: view()` / named view timelines | `HomeView` (telón del hero), `HomeAbout` (palabras que se iluminan), `HomeContact` (título) | Animaciones que avanzan con el scroll. Envueltas en `@supports (animation-timeline: view())`; Firefox hoy no las soporta y ve el contenido quieto. |
| Marquee CSS (`translateX(0 → -50%)` con la lista duplicada) | `HomeBrands` | Banner infinito; se pausa con hover. |
| `IntersectionObserver` + `visibilitychange` | `HomeAbout` | El video y el slideshow solo corren cuando están en pantalla. |

## Content Collections — `work`

Implementado 2026-10-15 (segunda sesión) cuando llegó contenido real de las 11 marcas/colaboraciones. Schema completo en `src/content.config.ts`:

- `brand`, `year` — datos simples, no traducidos (nombre propio / número).
- `roles`, `categories` — arrays de claves en inglés (`model`, `ecommerce`, etc.); las etiquetas visibles están en `src/i18n/ui.ts` (`work.categories.*`), nunca hardcodeadas en el `.yaml` ni en el componente.
- `summary`, `note` — texto libre por proyecto, con claves `es`/`en` dentro del mismo archivo. Esto es contenido real (como el body de un Markdown), por eso vive en la Collection y no en `ui.ts` — distinto tipo de string que el "chrome" de la interfaz.
- `material.photos` — valor cualitativo (`pending`/`one`/`few`/`some`/`many`), no un conteo exacto — la mayoría de las marcas no tienen un inventario preciso todavía (ver `PROJECT-BRIEF.md`). `WorkView.astro` lo usa para decidir cuántos placeholders renderizar por proyecto.
- `priority` — orden de curación manual, no alfabético ni cronológico — así la selección puede priorizar fuerza visual sin listar las 11 marcas con el mismo peso.
- `link` — siempre `null` hasta que el usuario confirme una URL real; nunca se inventa.

Carga vía `glob()` loader (`astro/loaders`) apuntando a `src/content/work/*.yaml` — Astro 7 usa `src/content.config.ts` en la raíz de `src/`, no `src/content/config.ts` (convención de versiones anteriores de Astro).

## Advertencia de build conocida

`npm run build` emite:
```
[WARN] [build] Could not render `` from route `/` as it conflicts with higher priority route `/`.
```
Es un log interno de Astro al resolver la ruta de redirect raíz contra las rutas localizadas; **no es bloqueante** — se verificó que `dist/index.html` se genera correctamente con el redirect a `/es/`. Documentado acá para no re-investigarlo cada vez que aparezca.
