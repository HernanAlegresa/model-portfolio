# Asset Guide

Cómo y dónde colocar las fotos y videos reales cuando estés listo para reemplazar los placeholders. Mientras no agregues archivos acá, el sitio sigue mostrando placeholders explícitos — las páginas de Home, Work, Polaroids y About ya están implementadas y funcionan completas con placeholders; no hace falta tocar la estructura, solo el contenido visual.

**Ya cargado:** `home/hero.png` (foto del hero) y `video/about.mp4` + `video/about-poster.jpg` (video de "Sobre mí").

## 1. Dónde van los archivos

Los medios van en `src/assets/`, no en `public/`. Razón: Astro solo optimiza (resize, WebP/AVIF, lazy loading automático) las imágenes que pasan por el componente `<Image>` de `astro:assets`, y eso requiere que vivan en `src/`. `public/` copia el archivo tal cual, sin optimizar — lo evitamos para fotografía, que es justamente lo más pesado del sitio.

```
src/assets/
  home/
    hero.png                   → retrato principal de la Home (ya cargado; encuadre en HomeView.astro → HERO CONTROLS)
  video/
    about.mp4                  → video de "Sobre mí" (ya cargado; se elige en src/data/about-media.ts)
    about-poster.jpg           → primer cuadro del video, se ve mientras carga
  polaroids/
    face-front.jpg              → rostro de frente
    face-profile.jpg            → rostro de perfil
    body-front.jpg              → cuerpo completo de frente
    body-profile.jpg            → cuerpo completo de perfil
  about/
    portrait.jpg                → foto de acompañamiento de la página About
    about-01.jpg, about-02.jpg… → solo si "Sobre mí" de la Home usa fotos en vez del video (src/data/about-media.ts)
  work/
    rent-the-look/
      rent-the-look-01.jpg
      rent-the-look-02.jpg
      ...
    forum-industries/
      forum-industries-01.jpg
      ...
    original-penguin/
      original-penguin-01.jpg
      ...
    armani-beauty/
      armani-beauty-01.jpg
      ...
    vans-uruguay/
      vans-uruguay-01.jpg
      ...
    meller/
      meller-01.jpg
    urban-haus/
      urban-haus-01.jpg
    rabanne/
      rabanne-01.jpg
    chivas-regal/
      chivas-regal-01.jpg
    vcp-uruguay/
      vcp-uruguay-01.jpg
    salus-uruguay/
      salus-uruguay-01.jpg       → la única foto confirmada para esta marca
  video/
    work/
      rent-the-look-01.mp4
      forum-industries-01.mp4
      original-penguin-01.mp4
      armani-beauty-01.mp4
      vans-uruguay-01.mp4
```

El nombre de cada carpeta bajo `work/` coincide exactamente con el `slug` del archivo de contenido en `src/content/work/<slug>.yaml` (ver sección 6) — así no hay ambigüedad sobre qué carpeta corresponde a cuál marca. **Nombres de marca correctos, no usar variantes viejas:** Urban Haus (no "Urban House"), VCP Uruguay (no "BSP Uruguay"), Rent the Look (no "Rent Deluxe").

## 2. Cantidad recomendada por sección

`/work` muestra una tarjeta por marca, todas iguales (como la grilla de la Home). La foto de cada tarjeta sale de `src/data/selected-work.ts`: las 6 marcas de la Home reusan su foto y encuadre; las demás muestran un placeholder hasta que se cargue su foto. El campo `material.photos` de cada `.yaml` quedó como referencia de cuánto material hay por marca:

| Valor de `material.photos` | Fotos aproximadas | Marcas con ese valor hoy |
|---|---|---|
| `many` | 6 | Rent the Look, Forum Industries, Original Penguin, Armani Beauty |
| `some` | 4 | Vans Uruguay, Meller |
| `few` | 2 | Urban Haus, Rabanne, Chivas Regal |
| `one` | 1 | Salus Uruguay |
| `pending` | 1 | VCP Uruguay |

No hace falta llenar exactamente esa cantidad de fotos reales — es un punto de partida curado según lo que cada marca efectivamente tiene, no una grilla obligatoria. Si terminás usando menos o más fotos que el placeholder sugerido, ajustá el valor de `material.photos` (ver sección 6) en vez de forzar la cantidad.

| Sección | Cantidad mínima | Cantidad ideal |
|---|---|---|
| Home (`home/hero.png`) | 1 | 1 — la mejor foto que tengas, es la primera impresión |
| Trabajos en Home (grilla 2×3) | 6 | 6 — se eligen en `src/data/selected-work.ts` (marca + foto) |
| Polaroids | 4 (las 4 tomas fijas) | 4, mismo encuadre/iluminación entre sí, sin retoque |
| About — portrait | 1 | 1-2 |
| Home — marco junto a la presentación | 1 video **o** 3 fotos | 1 video vertical de 5–15 s, o 3–5 fotos verticales que se alternan — se eligen en `src/data/about-media.ts` |
| Work por proyecto | según tabla arriba | según tabla arriba |

## 3. Proporciones y orientación

| Uso | Ratio sugerido | Orientación |
|---|---|---|
| `home/hero.png` | 16:9 (la actual: 1672×941; ideal ≥ 2560 px de ancho) | Horizontal, cara a la derecha |
| Trabajos en Home — las 6 tarjetas | 1,45:1 (casi 3:2), como Máxima Michaels | Horizontal |
| Polaroids — las 4 tomas | 4:5, mismo encuadre entre sí (como una ficha de casting real) | Vertical |
| About — portrait | 4:5 o 3:4 | Vertical |
| Work — galería por proyecto | `WorkView.astro` ya cicla ratios 4:5 / 1:1 / 3:4 / 16:9 por posición — subí la foto en su ratio nativo, el recorte final lo hace CSS (`object-fit: cover`) | Mixta |

Subí el archivo en su proporción real/sin recortar cuando sea posible — no hace falta recortar a mano de antemano.

**Polaroids en particular:** nada de retoque, efectos ni composición editorial — son las fotos crudas que una agencia usa para evaluar físico real. Mismo fondo/luz entre las 4 si es posible.

## 4. Tamaño y formato de origen

- Formato de origen: **JPG** (foto) o **PNG** (si tiene transparencia, poco probable en fotografía). Astro convierte a WebP/AVIF automáticamente al optimizar — no subas ya convertido.
- Resolución mínima: **2000px en el lado largo**. Astro genera versiones más chicas para pantallas chicas; de un archivo chico no puede "inventar" resolución.
- Sin compresión agresiva previa — dejá que el pipeline de Astro decida la calidad final.
- Video: **MP4 (H.264)**, sin audio si es solo ambientación visual. Los `.mov` de iPhone suelen venir en HEVC, que Chrome en Windows y Firefox no reproducen: hay que convertirlos a H.264 antes (sin cambiar el contenido; así se hizo con `about.mp4`). Nombrá el archivo igual que la carpeta de la marca + número. Marcas con video confirmado hoy: Original Penguin, Rent the Look, Forum Industries, Vans Uruguay, Armani Beauty.

## 5. Cómo sustituir un placeholder por una imagen real

1. Colocá el archivo en la carpeta de `src/assets/` que corresponda (sección 1).
2. Abrí el archivo que decide qué se muestra:
   - Home, grilla de trabajos → `src/data/selected-work.ts` (importás la foto y la ponés en `image`; no hace falta tocar el componente).
   - Home, "Sobre mí" → `src/data/about-media.ts`.
   - Polaroids, About, Work → el componente (`PolaroidsView.astro`, `AboutView.astro`, `WorkView.astro`; para Work ver sección 6).
3. Reemplazá el `<PlaceholderImage ... />` correspondiente por:
   ```astro
   ---
   import { Image } from 'astro:assets';
   import hero from '../assets/home/hero.png';
   ---
   <Image src={hero} alt="Descripción real de la foto" />
   ```
4. El `alt` tiene que describir la foto de verdad (no "placeholder") — es contenido de accesibilidad real, no decorativo.
5. Corré `npm run build` una vez para confirmar que Astro procesó la imagen sin errores.

## 6. Caso particular: Work ya usa Content Collections

Las 11 marcas viven como datos en `src/content/work/*.yaml` (schema en `src/content.config.ts`). En `/work` cada una es una tarjeta (`WorkGrid.astro`); su foto se elige en `src/data/selected-work.ts`.

Cuando tengas fotos reales para una marca, se le arma **su propia página** (`/es/work/<slug>`), como ya tiene Rent the Look:

1. Fotos en `src/assets/work/<slug>/<slug>-01.jpg`, `-02`… (mismo `slug` que el `.yaml`). JPG del tamaño original; Astro genera las versiones WebP livianas en el build.
2. Videos: los `.mov` del iPhone son HEVC 4K y pesan 10–30 MB; Chrome en Windows y Firefox no los reproducen. Se convierten a MP4 H.264 720×1280, sin audio, con `ffmpeg` (instalado solo en el scratchpad de la sesión con `ffmpeg-static`, no como dependencia):
   `ffmpeg -i in.mov -an -vf "scale=720:1280,format=yuv420p" -c:v libx264 -preset slow -crf 24 -movflags +faststart <slug>-01.mp4`
   y el primer cuadro como póster: `ffmpeg -i <slug>-01.mp4 -frames:v 1 <slug>-01-poster.jpg`. Van en `src/assets/video/work/`. Los 4 clips de Rent the Look bajaron de 89 MB a 4,4 MB.
   Si `ffmpeg -i in.mov` muestra `arib-std-b67` (HDR HLG, lo normal en iPhone), agregá al principio de `-vf` el mapeo de tonos a SDR, o los colores salen lavados: `zscale=t=linear:npl=100,format=gbrpf32le,zscale=p=bt709,tonemap=hable:desat=0,zscale=t=bt709:m=bt709:r=tv,format=yuv420p,` (así se convirtieron los de Forum Industries).
3. En `src/data/work-pages.ts`, una entrada por marca: `photos` (todas, en orden: las mejores primero y juntas las del mismo look) y `videos` (la tira de "Backstage", hasta 5 en una fila), cada uno con su descripción ES/EN. Con pocas fotos van de a pares a su proporción (`layout` por defecto); con muchas, `layout: 'trios'` las pone de a tres, todas recortadas a 4:5, y cada foto puede llevar `position` y `zoom` para elegir el encuadre (ejemplo: Forum Industries, con las fotos numeradas como sus archivos y el orden en una lista `inOrder(...)`, fácil de editar a mano). Con esa entrada la página se genera sola, y la tarjeta de la Home y la de /work pasan a linkear ahí.
4. Ajustá `material.photos` en el `.yaml` si la cantidad real cambió mucho, y completá `link` solo con una URL confirmada.

## 7. ES/EN

El texto de cada proyecto de Work (`summary`, `note`) ya es bilingüe dentro del mismo archivo `.yaml` (claves `es`/`en`) — no hace falta duplicar el archivo por idioma. Las imágenes y videos no tienen versión por idioma (son el mismo archivo para ambos `/es/work` y `/en/work`), salvo que el `alt` deba redactarse distinto por idioma — en ese caso, el `alt` se escribe directo en el componente que renderiza la imagen, no en el `.yaml`.
