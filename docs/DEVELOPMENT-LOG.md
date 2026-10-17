# Development Log

## 2026-10-14 — Etapa 1: investigación + Home

**Entorno de partida:** repo vacío (sin commits), Node 20.17.0, npm 10.8.2, Git 2.49.0.

**Problema encontrado:** Node 20 (Iron) llegó a EOL el 2026-03-24. Astro 7.x (última versión publicada) requiere Node ≥22.12.0 — no instala en Node 20.17. Astro 5.18.2 sí hubiera funcionado en Node 20, pero es 2 majors atrás.

**Decisión (autorizada por el usuario):** actualizar Node a 22 LTS en vez de pinear una versión vieja de Astro. Se instaló `nvm-windows` vía `winget` (`CoreyButler.NVMforWindows`), que detectó e importó el Node 20.17.0 existente, y se instaló/activó Node 22.23.3 (`nvm install 22 && nvm use 22`).

**Nota técnica de la sesión:** el PATH del sistema quedó correctamente actualizado en el registro de Windows (`NVM_HOME`, `NVM_SYMLINK` persistidos en HKCU/HKLM), pero la terminal de este agente no refresca su propio entorno hasta reiniciarse — por eso los comandos de esta sesión invocan Node vía ruta completa (`C:\nvm4w\nodejs\...`). Una terminal nueva del usuario ya debería ver `node`/`npm` apuntando a la v22 sin pasos extra.

**Scaffolding:** `npm create astro@latest` con template `minimal` + TypeScript estricto. El comando no aceptó crear el proyecto directamente en un directorio no vacío (el repo ya tenía `.git`), así que se generó en un directorio temporal y se movió el contenido al root del repo.

**i18n:** configurado `astro:i18n` nativo (`locales: ['es','en']`, `defaultLocale: 'es'`, `prefixDefaultLocale: true`, `redirectToDefaultLocale: true`). Ver `docs/ARCHITECTURE.md`.

**Home:** implementada con hero asimétrico, wordmark placeholder, 6 "pilares" cortos (profesionalismo, versatilidad, perfil atlético, experiencia comercial, creatividad, proyección internacional — tomados directamente de lo que el usuario pidió comunicar, sin inventar datos concretos), y un teaser de 3 placeholders para Work.

**Páginas stub:** `/work`, `/digitals`, `/about`, `/contact` en ambos idiomas, con mensaje "Próximamente" — para que la navegación no tenga enlaces rotos sin fingir contenido terminado.

**Referencias visuales:** inspeccionadas con `WebFetch` (sin navegador real esta sesión). Ver `docs/REFERENCE-ANALYSIS.md` para el detalle y las limitaciones de esa inspección.

**Comprobaciones ejecutadas:**
- `npx astro check` → 0 errores, 0 warnings, 0 hints (22 archivos).
- `npm run build` → 11 páginas generadas en `dist/`, build completo en ~2.8s. Un warning no bloqueante sobre la ruta raíz (documentado en `docs/ARCHITECTURE.md`).

**Pendiente para la próxima etapa:** contenido real de Work/Digitals/About/Contact, decisión final de tipografía tras verla en navegador, posible Content Collections para Work/Digitals, revisión visual del usuario en navegador real.

## 2026-10-15 — Realineación con el brief real y la referencia Máxima Michaels

**Contexto:** el usuario envió un brief mucho más completo y específico (nombre real, marcas, redes, personalidad) y había señalado una referencia visual concreta — Máxima Michaels — que ya tenía un análisis real guardado en `docs/design-references/maxima-michaels.md` (vía grabación de pantalla, no HTML estático). La Home existente se había construido el día anterior sobre una dirección genérica (ZENO/Shaukia vía WebFetch) anterior a ese análisis. Se auditó el repo, se confirmó la discrepancia, y se realineó todo el proyecto.

**Documentación reescrita:** `docs/IMPLEMENTATION-PLAN.md` (nuevo — síntesis de la referencia, qué se adopta/descarta y por qué, etapas y criterios de aceptación), `docs/PROJECT-BRIEF.md` (nombre real, marcas, redes), `docs/DESIGN-DIRECTION.md` (paleta y tipografía nuevas), `docs/ASSET-GUIDE.md` (nuevo), nota en `CLAUDE.md` aclarando que el nombre real ya no es placeholder.

**Dirección de arte nueva:** blanco y negro de alto contraste (`--color-ink` / `--color-paper`, un único acento `--color-wine`), tipografía display `Inter Tight` (reemplaza a Fraunces, que se desinstaló) en mayúsculas con tracking negativo para el wordmark del nombre, cero radio de borde. Se adoptó de la referencia: tipografía display masiva, hover-zoom en imágenes de grid. Se descartó explícitamente: menú overlay fullscreen (no se justifica con 4 links), scroll con inercia (requeriría una dependencia nueva), efecto "image trail" de cursor (pieza de alcance propio, diferida).

**Bug encontrado y corregido durante la verificación visual:** `HomeView.astro` pasaba clases de posicionamiento de grid (`hero__frame`, `work-teaser__item`) directamente como prop `class` a `<PlaceholderImage />`. Astro solo aplica el atributo de scoping de CSS del componente que escribe el elemento en su propio template — como `PlaceholderImage.astro` renderiza el `<div>` raíz, las reglas de grid definidas en el `<style>` de `HomeView.astro` nunca matcheaban (confirmado con `getComputedStyle` vía Chrome DevTools: `grid-column: auto` en vez de `6 / 13`). Se corrigió envolviendo cada `<PlaceholderImage />` en un `<div>` propio de `HomeView.astro` que sí lleva las clases de layout. Keep en mente para cualquier componente nuevo que pase clases de layout a un hijo.

**Comprobaciones ejecutadas:**
- `npx astro check` → 0 errores, 0 warnings, 0 hints (22 archivos).
- `npm run build` → 11 páginas, sin errores (mismo warning no bloqueante del redirect raíz, ya documentado).
- Revisión visual en Chrome (desktop, 1112px): confirmado el hero con el nombre superpuesto al borde de la imagen, tal como se buscaba. Confirmado por `getComputedStyle` que el fix de grid también corrige el grid de `work-teaser`.
- **Limitación de esta sesión:** la herramienta de scroll/resize del navegador se volvió inestable a mitad de la verificación (timeouts de captura de pantalla tras cualquier scroll o resize, sin errores de consola de la página — parece un problema de la extensión, no del sitio). No se obtuvo captura visual de la vista mobile ni de las secciones por debajo del hero scrolleadas. Pendiente: repetir la revisión visual completa (mobile + scroll completo) en una sesión nueva del navegador.

**Pendiente para la próxima etapa:** revisión visual completa (mobile, scroll completo, hover states) en una sesión de Chrome estable; Etapa 3 (reafirmar stubs de Work/Digitals/About/Contact con el sistema nuevo); Etapa 4 (animaciones: confirmar hover-zoom en vivo); Etapa 5 (responsive real, en particular el tracking negativo del wordmark en pantallas angostas).

## 2026-10-15 (cont.) — Subir intensidad visual: overlay de navegación + escala tipográfica

**Contexto:** el usuario revisó la Home en `localhost` y notó que, aunque había cambiado, no se parecía a la referencia Máxima. Correcto: tres causas reales (ver conversación) — falta de fotografía real, dos elementos de la referencia rechazados deliberadamente en el plan (menú overlay, scroll con inercia), y una escala tipográfica/de márgenes conservadora. Preguntado explícitamente, el usuario pidió subir la intensidad ahora, incluso con placeholders.

**Cambios:**
- `Nav.astro` reescrito: los 4 links principales se movieron a un overlay fullscreen activado por un botón hamburguesa (CSS puro para el ícono, sin librería). Accesibilidad: foco se mueve al primer link al abrir y vuelve al botón al cerrar, cierre con `Escape`, `inert` + `aria-hidden` cuando está cerrado, `aria-expanded` y `aria-label` dinámico (verificado con JS en consola: los cuatro atributos cambian correctamente al abrir/cerrar).
- `global.css`: `--step-6` (wordmark) de `clamp(4.5rem, 2rem + 12vw, 11rem)` a `clamp(5rem, 1rem + 15vw, 14rem)`; peso del nombre 800→900, tracking -0.03em→-0.045em; nuevo `--page-margin` fluido (antes `--space-5` fijo de 2.5rem) para márgenes de página más ajustados; nuevo `--space-8` (9rem) para ritmo vertical entre secciones.
- `docs/IMPLEMENTATION-PLAN.md` y `docs/DESIGN-DIRECTION.md` actualizados para reflejar la reversión de la decisión sobre el menú overlay (de "rechazar" a "adoptar"), con la razón documentada.

**Comprobaciones:** `npm run check` y `npm run build` sin errores. Verificado en Chrome: el overlay abre con el menú masivo tal como en la referencia, cierra con Escape devolviendo el foco correctamente (confirmado con JS, no solo visualmente).

**Hallazgo pendiente de Etapa 5 (no es una regresión de hoy):** en viewports anchos y bajos (ej. 2048×1010), la sección hero mide ~1753px de alto porque la imagen placeholder 4:5 ocupa 7/12 del ancho — a esa proporción, la imagen fuerza una altura mayor al viewport y hay que scrollear dentro del hero para ver el CTA. Ya estaba presente en la proporción de grid anterior; la escala tipográfica más grande de hoy no lo causó pero tampoco lo esconde. Se revisa en Etapa 5 junto con el resto de breakpoints.

## 2026-10-15 (cont.) — Etapas 3-5: coherencia de stubs y pase responsive

**Etapa 3 (stubs Work/Digitals/About/Contact):** verificado sin cambios de código. `WipView.astro`, `SiteFooter.astro` y `Nav.astro` ya usaban el sistema de tokens de la Etapa 2 completo. Confirmado visualmente en Chrome (`/es/work`, `/en/about`), incluyendo el overlay de navegación funcionando igual desde las páginas stub.

**Etapa 4 (animaciones):** ya cubierta por el `hover-zoom` de la Etapa 2, dentro de `prefers-reduced-motion`. No hay galerías nuevas en los stubs todavía para extenderlo — se retoma cuando Work/Digitals tengan contenido real.

**Etapa 5 (responsive) — dos bugs reales encontrados y corregidos, midiendo en vez de asumiendo:**

1. **Overflow horizontal del wordmark en mobile.** El piso del `clamp()` de `--step-6` (`5rem`) se alcanzaba por debajo de ~427px de ancho, así que "ALEGRESA" (8 letras, peso 900) se salía del viewport en todo el rango de celulares comunes (320–414px). Medido con el ancho real renderizado del texto (`getBoundingClientRect`) en Chrome, no por estimación. Corregido en `global.css`: `--step-6` pasó de `clamp(5rem, 1rem + 15vw, 14rem)` a `clamp(3.25rem, 16.1vw, 14rem)`. Verificado sin overflow desde 320px hasta el punto de saturación (~1387px).

2. **Hero más alto que el viewport en desktop.** El hallazgo de la sesión anterior lo describía como un caso raro de "viewport ancho y bajo"; en realidad es sistémico en **casi todo el desktop (≥1024px)**, incluyendo 1920×1080 y 1366×768 estándar (medido con un `<iframe>` same-origin como harness de testing, ver nota de herramientas abajo — `resize_window` no funciona en este entorno). Corregido en `HomeView.astro`, `.hero__frame` (media query de escritorio): `max-height: calc(100svh - var(--nav-clearance) - var(--space-6) - var(--space-6) - var(--space-4))` + `overflow: hidden` (recorta el placeholder como lo haría una foto real con `object-fit: cover`, en vez de pelear con el cálculo de ancho del grid).
   - **Resultado:** sin overflow desde 1509px de ancho para arriba (cubre 1920×1080, 1512×982, 2048×1010/1066). Queda un overflow residual de ~40–100px entre ~1024–1500px (ej. 1366×768, 1440×900) porque en ese rango el bloque de texto, no la imagen, pasa a ser el límite. Cerrarlo del todo implicaría achicar el wordmark específicamente en ese rango — **el usuario decidió dejarlo así** (prioriza mantener el wordmark grande sobre eliminar un scroll de pocos píxeles en laptops).
   - **Intento fallido, revertido:** la primera versión capaba por `max-width: 64svh` + `margin-left: auto` en vez de por altura — esto activó un bug de sizing de grid de Chromium (al agregar `max-width` a un ítem de grid que abarca varias filas `auto` con `align-self: center` y un hijo con `aspect-ratio`, el algoritmo cae a un tamaño mínimo/intrínseco) que colapsaba la imagen a un ancho fijo de ~285px en **cualquier** tamaño de viewport probado — una regresión real en tamaños de escritorio normales. Se detectó antes de darlo por bueno probando varios tamaños con el iframe-harness, y se revirtió a tiempo.

**Técnica de testing nueva (documentada para el futuro):** `resize_window` de la extensión de Chrome reporta éxito pero nunca cambia `window.innerWidth` de verdad. En su lugar, se creó un `<iframe>` same-origin con `width`/`height` explícitos apuntando a `localhost:4321`, y se leyó el layout desde `iframe.contentDocument`/`iframe.contentWindow` — el iframe tiene su propio viewport de CSS independiente (vw/vh/svh resuelven contra él), así que simula tamaños de viewport arbitrarios de forma confiable sin necesitar que la ventana real cambie de tamaño.

**Comprobaciones ejecutadas:** `npm run check` → 0 errores, 0 warnings, 0 hints (22 archivos). `npm run build` → 11 páginas, mismo warning no bloqueante del redirect raíz ya documentado. Revisión visual en Chrome confirmando ambos fixes (wordmark no corta en el cálculo analítico de mobile; hero sin scroll interno en 2048×1066 real, composición con el nombre superpuesto a la imagen preservada).

**Pendiente:** Etapa 6 formal (esta entrada la cubre en parte); contenido real de Work/Digitals/About/Contact — bloqueado hasta que el usuario provea fotos reales (`docs/ASSET-GUIDE.md` ya tiene la estructura lista) y datos de contacto confirmados.

## 2026-10-15 (cont.) — Brief maestro: contenido real de Work/Polaroids/About/Contact

**Contexto:** el usuario envió un brief maestro extenso con datos reales (medidas físicas, historia personal, historial de 11 marcas/colaboraciones, reglas de privacidad y contenido) y pidió trabajar con autonomía: auditar, planificar y ejecutar por etapas sin pedir aprobación en cada tarea chica. Tres decisiones estructurales ya habían quedado resueltas en la conversación previa: "Digitals" se renombra a **"Polaroids"**, el contacto es **solo info estática** (sin formulario, para no sumar una dependencia nueva), y sí hay **video real** disponible para algunas marcas.

**Documentación reescrita:** `docs/PROJECT-BRIEF.md` (contenido completo del brief maestro, con los nombres de marca corregidos — Urban Haus, VCP Uruguay, Rent the Look, que antes estaban mal en la versión anterior del documento — y las reglas de privacidad explícitas), `docs/ASSET-GUIDE.md` (estructura de carpetas actualizada a Polaroids + Content Collections de Work), `docs/ARCHITECTURE.md` (rutas reales, componentes nuevos, sección dedicada a la Content Collection `work`, y corregida una referencia obsoleta a la fuente Fraunces que ya se había reemplazado por Inter Tight en una sesión anterior).

**Content Collections implementado** (`src/content.config.ts` + `src/content/work/*.yaml`, 11 entradas — una por marca): usa el loader `glob()` de `astro/loaders` sobre `src/content.config.ts` en la raíz de `src/` (convención de Astro 7, no `src/content/config.ts`). Schema: `brand`/`year` sin traducir, `roles`/`categories` como claves en inglés traducidas vía `ui.ts`, `summary`/`note` como texto libre bilingüe dentro del mismo `.yaml` (es contenido real, no "chrome" de interfaz — por eso no vive en `ui.ts`), `material.photos` cualitativo (`pending`/`one`/`few`/`some`/`many`, no un conteo exacto porque la mayoría de las marcas no tienen inventario preciso todavía), `priority` para curación manual (no alfabética), y `link` siempre `null` hasta confirmación real.

**Páginas nuevas, todas bilingües:**
- **Work** (`WorkView.astro`) — lista los 11 proyectos ordenados por `priority`, cada uno con tags de categoría, badge de "incluye video" si corresponde, nota opcional en itálica, y una galería de placeholders cuya cantidad depende de `material.photos` (6/4/2/1 según el valor) — así Salus Uruguay (1 foto) no queda forzado a una grilla vacía ni Rent the Look (bastante material) se ve escueto.
- **Polaroids** (`PolaroidsView.astro`, antes `/digitals`) — 4 tomas fijas (rostro frente/perfil, cuerpo completo frente/perfil), independiente de Work, sin lenguaje de retoque.
- **About** (`AboutView.astro`) — bio corta + extendida (texto real del brief, voz editorial) y una ficha técnica (`src/data/profile.ts`) con los campos confirmados (altura, pecho, cintura, cadera, talles, cabello, ojos). La edad es un **campo manual** (`profile.age`, hoy 25) — nunca se calcula de una fecha de nacimiento, y esa fecha no se guarda en ningún archivo de `src/` (solo se mencionó en la conversación, nunca se persistió).
- **Contact** (`ContactView.astro`) — Instagram (único link social, sin TikTok), email como placeholder "casilla profesional en camino" (no se inventó una dirección), sin teléfono ni mención de agencia.

**Rename Digitals → Polaroids:** `src/pages/{es,en}/digitals.astro` eliminados, reemplazados por `polaroids.astro`; `Nav.astro` y `src/i18n/ui.ts` actualizados (`nav.digitals` → `nav.polaroids`).

**Privacidad — verificado, no solo prometido:** se corrió `grep` sobre `src/` y `dist/` buscando cualquier rastro de fecha de nacimiento (ningún resultado real, solo la palabra "birthdate" en un comentario de código explicando la regla) — no hay ningún teléfono en el repo porque nunca se proveyó uno en el chat.

**Incidente menor:** el servidor de `npm run dev` que quedaba corriendo en background de una sesión anterior se había caído silenciosamente a mitad de esta sesión (el puerto 4321 dejó de responder sin ningún error visible previo) — se reinició sin pérdida de trabajo, ya que todo el contenido está en archivos, no en estado del servidor.

**Comprobaciones ejecutadas:** `npm run check` → 0 errores, 0 warnings (17 hints cosméticos de `ts(6385)` sobre `zod` marcado "deprecated" en los tipos de `astro:content` de esta versión — no afecta la funcionalidad, documentado acá para no re-investigarlo). `npm run build` → 11 páginas, mismo warning no bloqueante del redirect raíz. Revisión visual en Chrome de las 4 páginas nuevas (`/es/about`, `/es/work` incluyendo el caso de 1 sola foto de Salus, `/es/polaroids`, `/es/contact`) — todas coherentes con el sistema visual de la Home.

**Pendiente / explícitamente fuera de alcance de esta sesión:**
- Importar fotos/videos reales — el usuario los carga después; `docs/ASSET-GUIDE.md` sección 6 documenta exactamente cómo reemplazar los placeholders de Work cuando lleguen.
- Componente de video dedicado (hoy el plan es agregarlo como elemento adicional en la galería de cada marca cuando llegue el primer archivo real — no se construyó de antemano sin contenido que lo valide, YAGNI).
- Página de Home: no se tocó en esta sesión — sigue como quedó al final de la sesión anterior (Etapa 5 completa, gap residual de 1024-1500px aceptado por el usuario).
- Pulido de animación/transición específico para las 4 páginas nuevas (Etapa 4 de este brief) y pase responsive dedicado de las mismas (Etapa 5) — las páginas reutilizan los mismos tokens y utilidades (`hover-zoom`, `link-sweep`, `reveal`) que ya existen. Se corrió solo un chequeo básico de overflow horizontal a 375px (las 4 páginas nuevas, sin overflow), pero no una revisión visual completa en mobile/tablet.
- Si el usuario pide un formulario de contacto real más adelante, hace falta elegir y documentar un servicio externo (ej. Formspree) — no implementado, ver `PROJECT-BRIEF.md` §Contacto.

## 2026-10-15 (cont.) — Pulido autónomo: lo que faltaba antes de la revisión pantalla por pantalla

**Contexto:** el usuario pidió explícitamente que se hiciera "todo lo que considere clave u óptimo" antes de empezar a revisar el sitio pantalla por pantalla con él. Se identificaron y resolvieron seis pendientes reales, sin pedir aprobación por cada uno (autorización ya dada en el brief maestro).

**Bug real encontrado durante la auditoría responsive — overflow horizontal en About y Polaroids a 320-360px:** `grid-template-columns: repeat(2, 1fr)` tiene un mínimo implícito `auto` (no `0`) para cada track. En `.stats-grid__row` (About, un flex row con `dt`/`dd`) y en `.polaroids__item` (Polaroids, con un `<p>` de caption sin `overflow:hidden`), el contenido de texto forzaba el track a crecer más allá del viewport — confirmado inspeccionando `getBoundingClientRect()` de cada elemento dentro de un iframe de testing hasta encontrar el que realmente excedía `clientWidth` (no alcanza con mirar solo `scrollWidth` del documento). Corregido cambiando todos los `repeat(N, 1fr)` de las páginas nuevas a `repeat(N, minmax(0, 1fr))` más `min-width: 0` en los elementos de texto involucrados — aplicado también preventivamente en `WorkView.astro` aunque esa grilla no mostraba el bug (sus items solo contienen `PlaceholderImage`, que al tener `overflow:hidden` no dispara el mismo problema). Verificado con una barrida de 64 combinaciones página×ancho (320-1920px, 8 páginas) tras el fix: 0 overflows.

**Motion nuevo:** sistema de scroll-reveal (`[data-reveal]` + `IntersectionObserver` en `BaseLayout.astro`, estilos en `global.css`) distinto del `.reveal` existente (que dispara una vez al cargar, pensado para el hero de Home). El nuevo sistema es para contenido debajo del fold en Work/Polaroids/About/Contact — por defecto el contenido es 100% visible (solo se oculta dentro de `@media (prefers-reduced-motion: no-preference)`), así que si JS falla o el usuario prefiere menos movimiento, nunca hay contenido oculto. Aplicado a: cada `.work-item` de Work, el grid+stats de About, cada item de Polaroids (con stagger vía `[data-reveal-group]`), y las filas de Contact.

**Estado activo de navegación:** `Nav.astro` ahora compara `Astro.url.pathname` contra cada link y marca `aria-current="page"` en el link de la página actual dentro del overlay — visualmente atenuado con subrayado en el color de acento. Verificado en Chrome: al abrir el menú desde `/en/work`, "WORK" aparece atenuado con subrayado vino mientras el resto queda en blanco pleno.

**robots.txt y 404 personalizado:** `public/robots.txt` (allow all, sin dependencias) y `src/pages/404.astro` con el mismo lenguaje visual del sitio, bilingüe en una sola página (no hay forma limpia de saber el idioma pretendido en una ruta rota, así que se muestra ES+EN juntos con links a ambos homes).

**Verificación end-to-end en Chrome:** navegación por el overlay (`/en/work` → click "Polaroids" → cierra overlay, aterriza en `/en/polaroids` con contenido traducido correctamente), `LanguageSwitcher` desde `/en/polaroids` → `/es/polaroids` (mantiene la página, solo cambia idioma). Revisión visual a 375px de ancho (iframe visible superpuesto + `zoom`) de About (ficha técnica), Polaroids (grid 2x2) y Work (tags + galería) — todas leen bien, sin elementos cortados ni amontonados.

**Comprobaciones ejecutadas:** `npm run check` → 0 errores, 0 warnings. `npm run build` → 12 páginas (sumó `/404.html`), mismo warning no bloqueante del redirect raíz.

**Pendiente real, no deferido por elección:** ninguno identificado en esta pasada — lo que quedaba pendiente de la sesión anterior (responsive, motion, nav) quedó resuelto acá. Lo que sigue depende exclusivamente de contenido real (fotos/videos) o de que el usuario revise pantalla por pantalla y pida cambios puntuales.

## 2026-10-17 — Revisión de la Home sección por sección

**Contexto:** primera sesión de revisión con el usuario, de arriba hacia abajo. El usuario prioriza ver y elegir: varios cambios se probaron, se compararon y se revirtieron hasta dar con lo que quería. La referencia rectora siguió siendo Máxima Michaels; para la sección de trabajos se midió su sitio real en Chrome (ver `docs/design-references/maxima-michaels.md` §7).

**Hero (aprobado, no tocar):**
- Rehecho como la primera pantalla de Máxima: foto B&W a pantalla completa (`100svh`), nombre enorme abajo y bio en DM Mono.
- Foto real cargada: `src/assets/home/hero.png` (1672×941, horizontal). Reemplazó a una vertical que el usuario descartó. Para celulares retina se pidió un original de más resolución.
- Bloque **HERO CONTROLS** (variables CSS) para que el usuario ajuste a mano encuadre, zoom, posición de la bio y tamaño/alineación del nombre.
- Fuentes probadas para el nombre: Boldonse, Big Shoulders, Bodoni Moda, Syne y Unbounded. Se volvió a Inter Tight 900 centrado a todo el ancho.
- Se sacaron del hero el lead, el CTA y el indicador de scroll.

**Header:** selector de idioma con globo a la izquierda (`LanguageSwitcher.astro`, panel con solo borde superior), "MODELO" en mono al centro y la hamburguesa sin cambios.

**Secciones nuevas** (cada una en `src/components/home/`):
- **Sobre mí** (`HomeAbout`), en el lugar 2. Es la hoja que sube tapando el hero, que queda sticky dentro de `.curtain` y se oscurece con una animación ligada al scroll. Sin título visible.
  - La frase y el párrafo se iluminan palabra por palabra al scrollear.
  - El marco reproduce el video real del usuario (`src/assets/video/about.mp4`). El `.mov` original era HEVC 4K y solo se reconvirtió a H.264 1080×1920 sin audio, con el contenido completo: el usuario pidió explícitamente no recortarlo ni editarlo, flashes incluidos.
  - Si no hay video, el marco acepta un slideshow de fotos (`src/data/about-media.ts`).
- **Banner de marcas** (`HomeBrands`): marquee CSS con las 11 marcas. Primero fue una franja blanca con letras grandes; el usuario la pidió más sutil (fondo oscuro, mono chica gris).
- **Trabajos** (`HomeWork`): réplica de "Some works" de Máxima. Grilla 2×3 a sangre de tarjetas 1,45:1; hover con la foto desenfocada y oscurecida y una copia nítida al 76 %; botón blanco "Ver más trabajos". Las marcas y fotos se eligen en `src/data/selected-work.ts`.
  - Antes se probaron y descartaron una galería en zigzag de 7 fotos (página demasiado larga) y un carrusel horizontal con flechas y línea de progreso.
- **Qué hago** (`HomeServices`), **Ficha + polaroids** (`HomeStats`) y **Trabajemos juntos** (`HomeContact`): construidas con libertad creativa. El usuario todavía no las revisó.
- Se eliminó la sección "pillars": su texto venía de un brief anterior y mencionaba campañas no confirmadas.
- El footer ahora muestra Instagram en vez de "contacto por confirmar".

**Herramientas:**
- `ffmpeg-static` se usó solo desde el scratchpad de la sesión para convertir el video; no es dependencia del proyecto.
- El dev server se trabó una vez con `FailedToLoadModuleSSR` (había importado un componente antes de que el archivo existiera); se resolvió reiniciándolo.

**Auditoría de cierre:**
- Documentación actualizada (README, ARCHITECTURE, DESIGN-DIRECTION, ASSET-GUIDE, LEARNING-GUIDE, CLAUDE.md). Los docs históricos (`IMPLEMENTATION-PLAN.md`, `REFERENCE-ANALYSIS.md`) quedaron marcados como tales.
- Eliminadas claves de `ui.ts` y tokens de CSS sin uso.
- `.claude/settings.local.json` agregado a `.gitignore`.
- Primer historial de commits del repo.

**Comprobaciones:** `npm run check` con 0 errores y 0 warnings (los 17 hints de `z` deprecated son conocidos). `npm run build` genera 12 páginas, con el mismo warning no bloqueante del redirect raíz. Revisión visual en Chrome a 1536×730 y en iframe de 390 px (y 320 px para el cierre).

**Pendiente:**
- Que el usuario revise "Qué hago", la ficha y el contacto.
- Fotos reales para la grilla de trabajos, los polaroids y About.
- Foto del hero en más resolución.
- Preguntas abiertas: ¿"MODELO" cambia a "Hernán Alegresa" al scrollear? ¿Agregar un título chico tipo "SOME WORKS" sobre la grilla? Confirmar los textos nuevos de "Sobre mí" y "Qué hago".
