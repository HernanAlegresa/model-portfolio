# Learning Guide

Guía basada en el código real de este repo, no genérica. Cada sección: qué es, por qué se usó acá, dónde mirarlo y un ejercicio corto. Actualizada al 2026-10-17.

## 1. Componentes Astro (`.astro`)

**Qué es:** un archivo `.astro` tiene un "frontmatter" entre `---` (TypeScript que corre en build time) y una plantilla HTML debajo con `{expresiones}`. Opcionalmente, un `<style>` (con scope: solo afecta a ese componente) y un `<script>` (sí llega al navegador).

**Por qué acá:** un portfolio de fotos y texto no necesita React. Astro genera HTML estático; solo viaja al navegador el JS que escribís en `<script>`.

**Dónde mirarlo:** `src/components/home/HomeBrands.astro`: el frontmatter lee la Collection `work` y arma la lista de marcas; la plantilla solo la recorre.

**Ejercicio:** en `src/components/HomeView.astro`, cambiá de lugar `<HomeStats lang={lang} />` y `<HomeContact lang={lang} />`. Cambiaste el orden de la Home moviendo una línea: eso es lo que da dividir en componentes.

## 2. i18n con rutas por carpeta

**Qué es:** Astro genera `/es/...` y `/en/...` según `locales` en `astro.config.mjs` y las carpetas `src/pages/es/` y `src/pages/en/`.

**Por qué acá:** URLs explícitas por idioma, mejor para SEO y para compartir un link en un idioma fijo.

**Dónde mirarlo:** `src/pages/es/index.astro` vs `src/pages/en/index.astro` (mismo `HomeView`, distinto `lang`); `switchLocalePath` en `src/i18n/utils.ts`, que usa el selector de idioma.

**Ejercicio:** agregá una clave nueva a `ui.es` en `src/i18n/ui.ts` pero no a `ui.en`, usala en un componente y corré `npm run check`. El error que aparece es el tipo `UiKey` protegiéndote de una traducción faltante.

## 3. Contenido separado de la presentación

**Qué es:** ningún componente tiene texto visible escrito a mano: todo pasa por `t('clave')`. Los datos que cambian (qué marcas mostrar, qué video, qué medidas) viven en `src/data/*.ts` y `src/content/`.

**Dónde mirarlo:** `src/data/selected-work.ts` decide las 6 marcas de la grilla; `src/components/home/HomeWork.astro` solo las dibuja.

**Ejercicio:** cambiá `meller` por `urban-haus` en `selected-work.ts`. La tarjeta muestra la marca nueva con su categoría y su link, sin tocar el componente.

## 4. Content Collections

**Qué es:** datos con un *schema* validado (Zod) en vez de arrays sueltos en el código. Cada marca es un `.yaml` en `src/content/work/`; el schema está en `src/content.config.ts`.

**Por qué acá:** el banner de marcas, la grilla de trabajos y la página Work leen la misma fuente. Agregar una marca es agregar un archivo.

**Ejercicio:** en un `.yaml`, poné `year: "2025"` (con comillas) y corré `npm run build`. El schema rechaza el string porque espera un número.

## 5. Design tokens con custom properties

**Qué es:** colores, fuentes y espacios definidos una vez en `:root` (`src/styles/global.css`) y usados con `var(--nombre)`.

**Dónde mirarlo:** `--color-ink`, `--color-paper`, `--page-margin`, `--space-*`. El bloque HERO CONTROLS de `HomeView.astro` es el mismo concepto aplicado a un componente: variables que redefinís por tamaño de pantalla.

**Ejercicio:** cambiá `--color-accent` por otro color y buscá dónde aparece (foco del teclado, subrayado de links, línea del cierre).

## 6. `prefers-reduced-motion` como opt-in

**Qué es:** una media query que detecta si el usuario pidió menos animación en su sistema.

**Por qué "opt-in":** todas las animaciones están *dentro* de `@media (prefers-reduced-motion: no-preference)`. Si alguien agrega una animación sin pensar en accesibilidad, por defecto no corre.

**Ejercicio:** en Windows, Configuración → Accesibilidad → Efectos visuales → desactivá "Efectos de animación" y recorré la Home. El banner de marcas queda quieto y el video muestra su imagen fija.

## 7. Animaciones ligadas al scroll (`animation-timeline`)

**Qué es:** una animación normal avanza con el reloj; con `animation-timeline: view()` avanza según cuánto del elemento se ve en pantalla. `animation-range` dice en qué tramo (`entry 0% entry 100%` = mientras el elemento entra).

**Dónde mirarlo:** `HomeAbout.astro` (cada palabra se ilumina en su tramo, calculado con `--i` y `--n`) y el telón del hero en `HomeView.astro` (un *named timeline* `--curtain` con `timeline-scope` para que el hero lea el progreso de su hermano).

**Ejercicio:** en `HomeAbout.astro`, cambiá `--lit-span: 40%` por `20%`. ¿La frase se ilumina más rápido o más lento al scrollear?

## 8. `position: sticky` (el telón)

**Qué es:** un elemento sticky se comporta normal hasta tocar el borde que indicás (`top: 0`) y ahí queda fijo mientras su contenedor siga en pantalla.

**Dónde mirarlo:** `.hero` dentro de `.curtain` en `HomeView.astro`. La hoja `.curtain__sheet` tiene fondo opaco y `z-index: 1`, por eso pasa por encima.

**Ejercicio:** sacá temporalmente el `background` de `.curtain__sheet` y scrolleá. Vas a ver el hero quieto detrás del texto: así funciona el truco.

## 9. `IntersectionObserver`

**Qué es:** una API del navegador que avisa cuándo un elemento entra o sale de la pantalla, sin escuchar el scroll en cada píxel.

**Dónde mirarlo:** `BaseLayout.astro` (agrega `.is-visible` a cada `[data-reveal]`) y `HomeAbout.astro` (pausa el video y el slideshow fuera de pantalla).

**Ejercicio:** en `BaseLayout.astro`, cambiá `threshold: 0.15` por `0.6`. ¿Cuánto tiene que entrar una tarjeta para aparecer?

## 10. El marquee infinito

**Qué es:** la lista de marcas está escrita dos veces seguidas; la tira se mueve exactamente la mitad de su largo y vuelve a empezar. Como la segunda copia es idéntica, el salto no se ve. La copia lleva `aria-hidden` para que los lectores de pantalla no lean todo dos veces.

**Dónde mirarlo:** `src/components/home/HomeBrands.astro`.

**Ejercicio:** cambiá `40s` por `20s`. ¿A qué velocidad se puede leer un nombre?

## 11. Imágenes y video con `astro:assets`

**Qué es:** las fotos importadas desde `src/assets/` pasan por `<Image>`, que genera versiones WebP de varios anchos (`widths`); el navegador elige según `sizes`. Los videos se importan con `?url` y se copian tal cual.

**Dónde mirarlo:** el hero en `HomeView.astro` (`loading="eager"`, `fetchpriority="high"` porque es lo primero que se ve) y `src/data/about-media.ts`.

**Ejercicio:** corré `npm run build` y mirá en `dist/_astro/` cuántas versiones de `hero` se generaron y cuánto pesa cada una frente al PNG original.

## 12. Accesibilidad sin texto visible: `.visually-hidden`

**Qué es:** una clase (en `global.css`) que oculta un elemento a la vista pero lo deja para lectores de pantalla.

**Por qué acá:** el usuario no quiere títulos visibles en varias secciones, pero un lector de pantalla necesita títulos para navegar. Cada sección tiene su `<h2 class="visually-hidden">`.

**Ejercicio:** abrí las DevTools de Chrome → pestaña "Accessibility" sobre la grilla de trabajos y buscá el título "Trabajo seleccionado" que no se ve en pantalla.
