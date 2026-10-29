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

## 2026-10-17 (cont.) — Fotos reales en Trabajos, Rabanne y limpieza de la Home

**Marcas:**
- **Rabanne reemplaza a Carolina Herrera** (era una confusión del usuario: el trabajo fue con Rabanne, como modelo e influencer). `rabanne.yaml` hereda año, material y prioridad; `carolina-herrera.yaml` borrado. Supuestos a confirmar: año 2025, ~4 fotos, roles modelo + creador de contenido, sin eventos.
- **Vans Uruguay sale de las 6 de la Home** (sigue en /work) y su `priority` pasa de 5 a 8, así las 6 primeras de /work coinciden con la Home.

**Trabajos (`HomeWork`):**
- Primera foto real por marca en `src/assets/work/<slug>/<slug>-01.jpg` para Rent the Look, Forum Industries, Original Penguin, Armani Beauty, Rabanne y Meller, con `alt` ES/EN.
- Las 6 son verticales en tarjetas 1,45:1: nuevo campo opcional `position` (CSS `object-position`) en `selected-work.ts` para elegir la franja visible.
- Armani: se reemplazó por la versión editada (1206×1580, `position: '50% 42%'`). Las dos primeras subidas eran la misma foto sin la edición (iOS manda el original si la edición no está "aplicada" → duplicar o exportar antes de enviar).

**Estructura y ritmo de la Home:**
- Orden actual: Hero → Sobre mí → Marcas → Trabajos → Ficha → Contacto.
- **"Qué hago" eliminada** (`HomeServices` y sus 12 strings): repetía categorías y marcas que ya muestran el banner y las tarjetas. Decisión del usuario: no moverla a otra página.
- **Sin líneas divisorias entre secciones**: al usuario le gusta que la Home se lea como una sola página con el mismo fondo. Quedan solo las líneas internas (filas de la ficha, banner de marcas) y la del footer (es de todo el sitio).
- **Espaciado uniforme**: token `--section-gap` (`clamp(5.5rem, 1rem + 8.5vw, 9rem)`) y cada sección pone el espacio solo debajo de sí misma. Medido de contenido a contenido: 144 px en escritorio y 88 px a 390 px entre todas las secciones. Única excepción: banner → grilla 40 px, porque el banner funciona como título de Trabajos.
- Ficha: sin la etiqueta visible "FICHA" (queda `visually-hidden`). Contacto: sin la línea "Para propuestas de marcas…" (sigue en la página Contact).
- Se probó y revirtió una etiqueta visible "Trabajos" encima del banner.

**Comprobaciones:** `npm run check` 0 errores / 0 warnings; `npm run build` OK; revisión en Chrome a 1536 px y en iframe de 390 px.

**Pendiente:**
- Polaroids reales (orden: rostro frente, rostro perfil, cuerpo frente, cuerpo perfil); el usuario está por enviarlas.
- Armani: el usuario cortó un ajuste de encuadre a `50% 36%` (mostraba un poco más de pelo arriba); queda en 42 %.
- Confirmar si Meller es correcto para la foto con paletas "KUL." y si Armani debe decir "CONTENIDO" en vez de "EVENTOS".
- ¿Sacar también la frase de la ficha "Para agencias y castings…"?
- Foto del hero en más resolución; fotos de About.

## 2026-10-18 — Polaroids protagonistas en la Home + visor

**Ficha de la Home (`HomeStats`):**
- Las 4 polaroids pasan a ocupar todo el ancho (4 en fila en escritorio, 2×2 en celular): ~344 px de ancho cada una a 1536 px, el doble que antes.
- Datos reducidos a los 5 clave en una línea chica debajo: altura, **peso (71,5 kg, nuevo, confirmado por el usuario)**, pecho, cintura, cadera. Talle, calzado, pelo y ojos quedan solo en About. Sale la frase "Para agencias y castings…".
- Hover: la polaroid bajo el cursor se levanta y se inclina, las otras se atenúan.

**Visor de polaroids (`PolaroidLightbox.astro`, nuevo):**
- Click en una polaroid → visor a pantalla completa con contador, Cerrar, Anterior/Siguiente, flechas del teclado, Esc, swipe y click afuera para cerrar.
- `<dialog>` nativo (`showModal()`): foco atrapado y Esc sin código propio. Con View Transitions la polaroid crece desde la miniatura y vuelve a ella al cerrar; sin soporte o con movimiento reducido, abre sin animación.
- Cada polaroid es un link a `/polaroids#<toma>`: sin JS sigue funcionando.

**Datos:**
- `src/data/polaroids.ts` (nuevo): lista única de las 4 tomas (`image: null` hasta que lleguen las fotos), usada por la Home y por /polaroids (que ahora tiene anclas `#face-front`, etc.).
- `profile.ts`: `weightKg` + `formatStatValue()` (71,5 en español, 71.5 en inglés). About muestra el peso en la ficha completa.

**Comprobaciones:** `npm run check` 0 errores / 0 warnings; `npm run build` OK; Chrome a 1536 px, iframes de 390 y 320 px sin scroll horizontal; visor probado con flechas, Esc y click afuera.

**Ajuste (mismo día):** título visible "POLAROIDS" a la izquierda (medidas del "Some works" de Máxima: ~45 px, mayúsculas, tracking cerrado, ~77 px hasta las fotos a 1536 px); "Ver polaroids" sube a la misma línea, a la derecha; las 5 medidas quedan centradas debajo. Sale el string oculto `home.stats.title`.

**Fix (mismo día):** al cerrar el visor quedaba un borde bordó en la polaroid clickeada. Era `:focus-visible`: el `<dialog>` devuelve el foco al link que lo abrió y Chrome lo marcaba como foco visible. Ahora, si se abrió con mouse/toque, el foco vuelve sin contorno (`focus({ focusVisible: false })`, o `blur()` si el navegador no lo soporta); si se abrió con teclado (Enter), el contorno se mantiene para no perder la ubicación.

**Pendiente:** cargar las 4 polaroids reales en `src/assets/polaroids/` y referenciarlas en `polaroids.ts`.

## 2026-10-19 — Página propia de Rent the Look (primera marca)

**Material recibido** (adjunto desde el celular por Remote Control): 7 fotos de estudio (1717×2576) y 4 clips de backstage (.mov HEVC 4K vertical, 4–10 s, 89 MB en total).
- Fotos: `src/assets/work/rent-the-look/rent-the-look-01…07.jpg`. La 01 ya era la de la Home (traje marrón, sentado) y se mantuvo; el resto, numerado en el orden de la página. Astro las sirve en WebP (de ~700 KB a 50–170 KB según el ancho).
- Videos: convertidos a MP4 H.264 720×1280 sin audio + póster (primer cuadro), en `src/assets/video/work/`: 4,4 MB los cuatro. Completos, sin recortar.

**Nueva ruta `/es/work/<slug>` y `/en/work/<slug>`** (`WorkDetailView.astro` + `src/data/work-pages.ts`). Estructura:
1. Índice `01 / 11` + "Todos los trabajos", y el nombre de la marca a todo el ancho (Inter Tight 900; el tamaño sale del largo del nombre, así sirve para cualquier marca).
2. Intro: resumen grande + ficha (año, rol, formato, material) a la izquierda, fija mientras pasa la portada a la derecha (traje azul marino, primer plano).
3. Fotos de a pares a sangre, sin gutter, agrupadas por look: azul de cuerpo entero + lino beige, verde oliva cuerpo entero + primer plano, lino con lentes + sentado.
4. "BACKSTAGE": los 4 clips en una tira (2×2 en celular), en silencio y en loop, que se reproducen solo mientras están en pantalla. Con movimiento reducido o sin JS quedan con controles.
5. "Siguiente trabajo" (por `priority`; hoy Forum Industries, que lleva a su lugar en /work) + botón a todos los trabajos.

**Movimiento:** el nombre sube desde su línea base al cargar; cada foto se descubre de abajo hacia arriba al entrar en pantalla (la de la derecha un instante después) y se desplaza levemente dentro de su marco mientras se scrollea (`animation-timeline: view()`). Entre páginas: el nombre de la marca crece desde la tarjeta de la Home (o de /work) hasta el título (View Transitions entre documentos, ver ARCHITECTURE.md).

**También:** la tarjeta de la Home y /work linkean a la página (`workHref()`); /work muestra las 4 primeras fotos reales de Rent the Look. Nuevos strings `work.roles.*` y `work.detail.*`.

**Problemas encontrados:**
- `IntersectionObserver` tiene en cuenta el `clip-path` del propio elemento: con la foto recortada al 100 % nunca se "veía" y no se revelaba. El recorte pasó a la `<img>` de adentro.
- Chrome cancelaba la transición al entrar a la Home y a la página de marca ("ViewTransition opt-in disabled") con `@view-transition` en `global.css`; inline en el `<head>` de `BaseLayout` funciona.

**Comprobaciones:** `npm run check` 0 errores / 0 warnings; `npm run build` 14 páginas; Chrome a 1536 px e iframe de 390 px sin scroll horizontal; Home → Rent the Look con transición y sin errores de consola.

**Pendiente:** confirmar año (2025), rol y si hay crédito de fotógrafo o productora para nombrar; ¿visor a pantalla completa para las fotos de marca (como el de polaroids)?; siguiente marca.

**/work rediseñada (mismo día):** pedido del usuario: que se vea como los trabajos de la Home, con todas las marcas.
- Medido en la página Work de Máxima (1536 px): frase centrada de 90 px en mayúsculas ("I SHOOT COOL SHIT."), debajo "(SOME WORK)" en DM Mono 18 px gris, ~100 px hasta la grilla.
- Arriba: frase "Solo presencia." / "Nothing but presence." (elegida por el usuario) (`work.statement`, Inter Tight 900, 90 px a 1536 px) y "(WORK)" en mono gris como `h1`. Después el banner de marcas (`HomeBrands`) y la grilla con las 11 marcas por `priority`.
- La grilla de la Home pasó a `WorkGrid.astro`, compartida: las tarjetas son idénticas en las dos páginas y una marca nueva ocupa el lugar siguiente. Las 5 marcas sin foto (Vans Uruguay, Urban Haus, Chivas Regal, VCP Uruguay, Salus Uruguay) muestran placeholder.
- Sale la lista anterior (etiquetas, resumen, galerías de placeholders) y sus strings (`work.kicker`, `work.lead`, `work.card.*`, `work.detail.open`).
- Comprobaciones: `npm run check` 0 errores; `npm run build` OK; Chrome 1536 px y iframe 390 px sin scroll horizontal; la Home sin cambios visibles (hover incluido).
- Frase definitiva elegida por el usuario.

**Ajustes pedidos por el usuario (mismo día):**
- Tarjetas de trabajos (`WorkGrid`, o sea /work y la Home): el año a la derecha de la categoría ("MODELAJE   2025"). Todos los trabajos del sitio son de 2025: el usuario arrancó este año.
- Página de Rent the Look: sin el texto de la izquierda (resumen + ficha). El usuario quiere mostrar solo fotos y videos; el tipo de trabajo ya está en /work. Sale el campo `cover` de `work-pages.ts`: todas las fotos van en `photos`.
- Borde exterior en cada foto y cada clip: el mismo espacio entre fotos y contra los bordes de la pantalla (`--frame`, 8–14 px).
- Nuevo orden: arriba el par favorito del usuario (lino con lentes + sentado), después verde oliva, después azul de cuerpo entero + lino beige; la que era portada (azul, primer plano) cierra sola, centrada.
- Strings sin uso eliminados: `work.roles.*` y la ficha (`work.detail.year/role/format/material/photos.*/videos.*`).
- Comprobaciones: `npm run check` 0 errores; `npm run build` OK; Chrome 1536 px e iframe 390 px sin scroll horizontal.

**Visor de fotos en las páginas de marca (mismo día).** Requisito del usuario para todos los trabajos: poder hacer clic en cada foto y verla entera.
- `WorkLightbox.astro`, mismo comportamiento que el de polaroids: `<dialog>` nativo, la foto crece desde la que se clickeó (View Transitions), contador "02 / 07", Cerrar / Anterior / Siguiente, flechas del teclado, Esc, swipe en celular y clic en el fondo para cerrar.
- Fondo negro sólido, solo la foto. La foto se dimensiona con una container query (`min(100cqw, 100cqh * ratio)`): ocupa todo el alto o todo el ancho disponible, nunca recortada. Carga la versión grande solo al abrir, y precarga las de al lado.
- Cada foto de la página es un link al archivo en tamaño completo: sin JS (o con Ctrl/⌘-clic) se abre sola. Cursor de lupa.
- Bug encontrado y corregido: las flechas, además de cambiar de foto, movían el foco a un botón y le dibujaban el contorno bordó (acción por defecto de Chrome). Ahora `preventDefault()`. Mismo arreglo aplicado al visor de polaroids, que tenía el mismo código.
- Comprobaciones: `npm run check` 0 errores; `npm run build` OK; probado en Chrome (clic, flechas, Esc, Cerrar) a 1536 px y en iframe de 390 px.

## 2026-10-19 (noche) — Forum Industries, segunda página de marca

**Fotos (15):** con tantas fotos, de a pares la página quedaba larguísima. Nuevo `layout: 'trios'` en `work-pages.ts`: tres por fila (dos en celular, la primera a todo el ancho), todas recortadas a 4:5 para que las filas queden parejas; el visor sigue mostrando cada foto entera. 15 = 5 filas justas. Cada foto puede llevar `position` (qué parte deja a la vista el recorte) y `zoom` (acercar hacia `position`, con `scale` + `transform-origin`). Las fotos de Forum quedaron en una tabla numerada como sus archivos (`forumIndustriesPhotos`) y el orden en una lista (`inOrder(...)`), para que el usuario las ordene y encuadre a mano: así lo hizo (orden final 1, 3, 2, 14, 13, 15, 7, 8, 9, 10, 11, 12, 5, 4, 6; encuadre propio en la 5 y la 6).

**Backstage (5 clips):** la tira acepta hasta 5 en una fila (`--clips`); en celular, de a dos, con el último solo y centrado. Orden pedido por el usuario: el 3.º y el 5.º intercambiados. Los `.mov` del iPhone eran HDR HLG (`arib-std-b67`): convertidos como siempre salían lavados (el fondo azul del estudio quedaba lila), así que se convierten con mapeo de tonos a SDR (comando en `ASSET-GUIDE.md` §6). 85 MB → 5,8 MB. Los clips de Rent the Look se convirtieron sin ese paso y se ven algo planos: reconvertirlos si el usuario reenvía los originales.

**Bug: el nombre de la marca se cortaba** (la S final de "FORUM INDUSTRIES"). Dos causas:
- El tamaño salía de `largo × 0,55 em`, pero en Inter Tight 900 las letras van de 0,27 em (I) a 1,07 em (W). Rabanne y Vans Uruguay se iban a cortar más. Ahora `src/lib/display-name.ts` tiene el avance de cada carácter y los pares con kerning, medidos en Chrome; da el ancho real del nombre (coincide con el navegador al milésimo de em) y `font-size: 100cqi / --name-width`. Si cambia la tipografía, el peso o el tracking del título, hay que volver a medir.
- El `clip-path` de la animación de entrada recortaba justo en los bordes de la caja, y letras como K, A o V sobresalen unos píxeles: ahora llega 0,1 em más allá a los costados.
- Comprobado con los 11 nombres a 7 anchos (320–1536 px): ninguno se corta; el nombre empieza alineado con "02 / 11" y termina alineado con "Todos los trabajos".

**Comprobaciones:** `npm run check` 0 errores; `npm run build` OK (16 páginas); Chrome 1536 px e iframe de 390 px sin scroll horizontal; los 5 clips se reproducen.

**Pendiente:** siguiente marca por prioridad (Original Penguin); reconvertir los clips de Rent the Look si llegan los originales; lo que sigue abierto de la entrada anterior (polaroids, Armani, Meller, etc.).

## 2026-10-19 (día) — Original Penguin, tercera página de marca

**Fotos (21):** muchas fotos, pero los looks tienen 1, 2, 3 o 5 fotos, así que ni los pares (Rent the Look) ni los tríos (Forum) encajaban. Nuevo `layout: 'rows'` en `work-pages.ts`: filas de dos o de tres, una por una, con `inRows(tabla, [[2, 3], [4, 7, 5], …])` (cada lista es una fila de 1–3 fotos; tira error si una fila tiene más). Todas las fotos en el mismo marco 2:3 (ya son 2:3, no se recortan); los pares dan fotos grandes y los tríos aceleran el ritmo. En celular un par sigue de a dos y un trío abre con la primera a todo el ancho. Admite `position` y `zoom` como `trios`. Orden propuesto, un look por fila: jean en Casapueblo · campera azul marino (3) · campera en la costa (2) · buzo crema · camisa tropical · gorra beige ×2 + polo rosado · duna · gorra negra · café. Aprobado por el usuario. La foto 01 es la misma de la Home (mismo archivo, mismo número).

**Backstage (2 clips):** uno SDR 1080p y otro HDR HLG 4K a 120 fps (convertido con el mapeo de tonos, salida a 30 fps). 35 MB → 1,7 MB. El clip de la escollera tiene dos modelos: la descripción no dice cuál es Hernán.
- Con 2 clips cada uno ocupaba media fila y se veían enormes. Ahora ningún clip pasa de un cuarto del ancho (el tamaño de los 4 de Rent the Look): con 1–3 clips quedan a ese tamaño y centrados (`--slots`). Pedido del usuario.
- Más aire entre clips en todas las marcas: `--clip-gap` (16–40 px) en vez de `--frame`. Pedido del usuario.

**Videos pesados:** para los que no entran por el chat, pasarlos a la PC (cable / iCloud.com) y decir la carpeta, o recortarlos en el iPhone (Fotos → Editar) antes de mandarlos.

**Comprobaciones:** `npm run check` 0 errores; `npm run build` OK (18 páginas); HTML del dev server con 9 filas (3 tríos) y 2 videos. Chrome no estaba conectado: la verificación visual la hizo el usuario en su navegador.

**Pendiente:** siguiente marca por prioridad (Armani Beauty); reconvertir los clips de Rent the Look si llegan los originales; lo que sigue abierto (polaroids, Meller, etc.).

## 2026-10-19 (mediodía) — Armani Beauty, cuarta página de marca

**Material:** 6 fotos del evento de Acqua di Giò en la playa (Mare Giorgio Armani, atardecer) y un video horizontal filmado con cámara profesional, 22 s. No hay backstage: el video es parte del trabajo. La foto de la Home (`armani-beauty-01.jpg`) era un recorte de la que sostiene el perfume: se reemplazó por el original (más resolución, la tarjeta se ve igual).

**`rows` ahora respeta la proporción de cada pieza:** las fotos venían en 3:4, 9:16 y 2:3. Cada columna de la fila es `<proporción>fr` (`--cols`) y cada marco lleva su `aspect-ratio`, así todas las piezas de una fila tienen la misma altura y completan el ancho, sin recortar. En celular, el trío abre con la primera a todo el ancho y las otras dos parejas (`--cols-rest`). Original Penguin (todas 2:3) queda idéntico (medido antes/después).

**Films en la grilla:** una fila de `inRows(...)` puede llevar un `WorkFilm` (video + póster + tamaño + descripción ES/EN) en vez de un número de foto. Se reproduce sin sonido y en loop mientras está en pantalla, con el mismo script que los clips del backstage (controles si no hay JS o con movimiento reducido). En compu ocupa la pantalla: ancho de la página × alto de la ventana menos el marco (`100svh`), recortando un poco arriba/abajo; en celular, 16:9. Pedido del usuario: verlo entero en la compu, sin scroll. Conversión: 1280×720 H.264 CRF 22, sin audio, 19,7 MB → 3,1 MB.

**Orden:** video · frasco en la cabeza, sosteniendo el perfume, caminando · cartel Mare, agachado con el perfume, en el parador. Aprobado por el usuario. Sin sección Backstage (`videos: []`).

**Comprobaciones:** `npm run check` 0 errores; `npm run build` OK (20 páginas); Chrome 1536 px (filas a una altura, el video entra justo en 695 px de alto) e iframe de 390 px sin scroll horizontal.

**Pendiente:** siguiente marca por prioridad (Rabanne); reconvertir los clips de Rent the Look si llegan los originales; lo que sigue abierto (polaroids, Meller, etc.).

## 2026-10-20 — Armani Beauty: fuera la foto del perfume sobre la cabeza

Pedido del usuario al curar el portfolio. Quedan 5 fotos + el video, renumeradas `armani-beauty-01…05` (sin huecos). Filas: video a lo ancho · par (perfume al atardecer, caminando por la arena) · trío del evento. La foto de la Home (01) no cambia.

## 2026-10-20 — Meller, quinta página de marca

**Material:** solo las fotos sacadas con cámara profesional, elegidas por el usuario: paletas KUL, fiesta, morro de Río saludando y dos de la playa en Río (`meller-01…05`; 01 sigue siendo la de la Home). Quedaron afuera las selfies de la óptica, las dunas y la rambla.

**Filas:** `[1, 2, 3]` (paletas, fiesta, morro) · `[4, 5]` (playa). Sin backstage.

**Comprobaciones:** `npm run check` 0 errores; build OK; Chrome 1536 px e iframe de 390 px sin scroll horizontal.

## 2026-10-20 — Urban Haus, sexta página de marca, y filas de cuatro

**Material:** 27 fotos de dos sesiones profesionales: 01–14 en la ciudad, 15–27 en el campo (tranquera, caballo en blanco y negro, tractor, fardos). La galería abre con el campo.

**Filas de cuatro:** con tantas fotos, filas de tres hacían la página muy larga (pedido del usuario: que no sea demasiado larga). `inRows` ahora acepta de 1 a 4 piezas por fila. En `WorkDetailView` cada fila agrupa sus piezas en `.project__group` (`display: contents` en compu, así no cambia nada para filas de 1–3); en celular (< 48rem) una fila de cuatro pasa a una columna y cada grupo es un par (`--pair`). `sizes` de 25vw/50vw y la aparición escalonada sigue con el segundo par (280/420 ms). Galería: ~4.600 px a 1536.

**Tarjeta en /work:** las tarjetas salían de `selected-work.ts`, que también arma la grilla de la Home (6). Para no sumar tarjetas a la Home, las marcas que solo están en /work toman su foto de `workOnlyShots` (mismo archivo). Urban Haus usa la 06 (acostado en el pasto, encuadre `50% 80%`), elegida por el usuario.

**Comprobaciones:** `npm run check` 0 errores; build OK; Chrome 1536 px e iframe de 390 px (las filas de cuatro se parten en pares, sin scroll horizontal).

## 2026-10-20 — Vans, séptima página de marca (videos dentro de la galería)

**Nombre:** la marca es **Vans**, no "Vans Uruguay" (pedido del usuario): slug `vans`, archivos `vans-NN`, `src/content/work/vans.yaml`. La dirección vieja `/work/vans-uruguay` deja de existir.

**Material:** 9 fotos de celular y 3 videos verticales de un viaje personal a Río (sendero, escalera de la tienda, cima al atardecer). El usuario colaboró como creador de contenido, no como modelo: los videos **no son backstage** y van mezclados con las fotos (`videos: []`).

**Films en filas mixtas:** un `WorkFilm` dentro de una fila con fotos mantiene su proporción, como una foto más. Solo cuando está solo en su fila (`.project__frame--full`) ocupa el alto de la pantalla desde 48rem; Armani no cambia. Filas: `[2, cima, 3, sendero]` · `[1, 4, 6, 5]` · `[9, tienda, 8, 7]`. Galería ~1.650 px a 1536. Videos: 720×1280 H.264, sin audio, CRF 24.

**Tarjeta en /work:** la 02, la primera de la galería (en la cima haciendo la V; `50% 62%`), elegida por el usuario.

**Comprobaciones:** `npm run check` 0 errores; build OK; Chrome 1536 px e iframe de 390 px; los videos se reproducen.

## 2026-10-20 — Curaduría: un portfolio de modelaje, 8 marcas

**Decisión del usuario** ("este portfolio es un portfolio de modelaje"): salen **VCP Uruguay** (selfies de probador), **Chivas Regal** (invitado a un evento, 2 fotos casi iguales) y **Salus Uruguay** (actor en un comercial de TV, sin material). Se borraron sus `.yaml`, sus fotos y video, y las categorías/roles que solo usaba Salus (`tv-commercial`, `commercial-participant`, en `content.config.ts` y `ui.ts`). Brief, guía de assets, arquitectura y `CLAUDE.md` pasan a 8 marcas; el brief deja anotado que no se vuelven a agregar.

Quedan: modelaje (Rent the Look, Forum Industries, Original Penguin, Urban Haus, Rabanne) y, en segundo plano, eventos/contenido (Armani Beauty, Meller, Vans).

**Header:** el texto central decía "Modelo"; ahora dice el nombre (`site.brand`, "Hernán Alegresa"), pedido del usuario. Se quitó `nav.role`.

**Comprobaciones:** `npm run check` 0 errores; build OK (26 páginas); las páginas de las marcas quitadas dan 404; /work y la Home sin rastros de ellas.

**Pendiente:** el usuario manda las 4 polaroids; crea un email profesional (lo crea él) para Contacto; fotos que faltan de Rabanne (página propia) y Armani; revisar About y Contacto; ver el header a 390 px en Chrome (el nombre debería entrar entre idioma y hamburguesa).

## 2026-10-21 — Polaroids reales, títulos, footer, About completa y corrección de fechas

**Polaroids:** 6 fotos reales en `src/assets/polaroids/` (3:4, entran justo en el marco). `src/data/polaroids.ts`: las 4 clave con `home: true` (rostro de frente, rostro de perfil, medio cuerpo de frente, medio cuerpo de perfil) van a la Home; /polaroids muestra las 6 (+ cuerpo completo de frente y torso) en una sola grilla, con el visor. `PolaroidLightbox` recibe la lista por prop. El usuario sacó la de brazos cruzados.

**Títulos de página:** `PageHead.astro`, un título grande centrado compartido por Work, Polaroids, About y Contacto (mismo tamaño que "SOLO PRESENCIA."), con el borde superior a `--nav-clearance` (antes quedaba ~100 px más abajo). About dice "About me" (el nombre ya está en el header); se quitaron los kickers repetidos.

**Footer:** `SiteFooter.astro` rehecho: frase corta, Páginas (con la actual marcada), Contacto, Redes (Instagram), el nombre a todo el ancho (medido con `display-name.ts`), idioma ES/EN y "volver arriba". Los canales salen de `src/data/contact.ts` (también lo usan la Home y Contacto): `email` y `phone` en `null` hasta que el usuario los confirme; el teléfono no aparece hasta entonces.

**About:** video de backstage cuadrado (`about-session.mp4`, HLG convertido a SDR) + presentación; línea de tiempo de 2026 en 4 momentos; "Fuera de cámara" con 3 fotos (fútbol, programación, Pipa) alineadas con subgrid; lema y valores; ficha con idiomas y pasaporte italiano en trámite; links a Polaroids/Work/Contacto. El texto se ilumina palabra por palabra con `LitText.astro` (mismo efecto que la Home). Prioridad del usuario: presentarse como modelo; la programación va como parte de su vida fuera de cámara.

**Fechas corregidas:** el usuario empezó en **enero de 2026** (no 2025). Las 8 marcas pasan a `year: 2026` (Urban Haus fue a fines de 2025 pero se muestra 2026 por pedido suyo). La historia real quedó en `docs/PROJECT-BRIEF.md`.

**Textos:** sin rayas (—) ni frases que suenen a IA en todo el sitio (títulos de pestaña con "|"). Nuevo párrafo de "Sobre mí" en la Home (el usuario eligió la opción B: "No me pongo techo…").

**Comprobaciones:** `npm run check` 0 errores; build OK (26 páginas); Chrome 1536 px e iframe de 390 px sin scroll horizontal; ningún "2025" ni "—" visible en el HTML generado.

**Pendiente:** email profesional (lo crea el usuario) → `src/data/contact.ts`; fotos de Rabanne y Armani; nivel de portugués; pasaporte a "vigente" cuando salga; el hero todavía dice "apunto a trabajar a nivel internacional" (se repite con el párrafo nuevo, sin decidir).

## 2026-10-21 (cierre) — About: lema junto al video, programador recibido y revisión general

**About:** a la derecha del video va ahora el lema ("Quiero llegar tan lejos como pueda…") en grande y, debajo, sus valores (imagen vs. ser buena gente, desafiarse, su mejor versión), los dos con el efecto de `LitText`. Se quitó la presentación ("Soy Hernán, tengo 25 años…") y los datos clave, que repetían la ficha; el bloque del lema de más abajo desaparece (no se repite en la página). Programación: "Me recibí de programador…" (sin institución ni título: no confirmados).

**Revisión general antes de cerrar:** 25 páginas (ES/EN) + 404. Sin enlaces ni archivos rotos en el build; sin scroll horizontal a 390 px ni a 1440 px; una sola `h1` por página; todas las imágenes con `alt`; `lang` correcto; ningún texto en el idioma equivocado; ningún "2025", "—" ni placeholder visible. Arreglo: la 404 ya no declara `hreflang` (no tiene versión por idioma).

**Pendiente (para cerrar el portfolio):** email profesional → `src/data/contact.ts`; fotos de Rabanne (página propia) y Armani; foto nueva de Programación (el usuario la manda). Menores: nivel de portugués, pasaporte "vigente", "internacional" repetido en el texto del hero.

## 2026-10-23 — Email, Polaroids antes que Trabajos y página de Rabanne

**Contacto:** email profesional `hernanalegresa10@gmail.com` en `src/data/contact.ts`; aparece solo en Contacto, el cierre de la Home y el footer (los tres ya leían `contact.email`). Se quitó la frase "Para marcas, agencias, fotógrafos y castings" de /contact (y su clave `contact.lead`).

**Orden:** en la Home, Polaroids + ficha va antes que el banner de marcas + Trabajos (el banner es el encabezado de la grilla, se mueven juntos). El menú y el footer siguen el mismo orden: Polaroids → Work → About → Contacto. El `aria-label` del menú pasó a `ui.ts` (`nav.primary.label`; estaba en inglés fijo).

**Rabanne (página propia):** 6 fotos de cámara profesional del lanzamiento de 1 Million Black (2:3, `rabanne-01..06`; reemplazan la `rabanne-01` vieja de celular) en `layout: 'rows'`, tres pares: [perfume, mirando atrás desde el volante] + [subiéndose al auto] + [sentado con un invitado]. Un clip de backstage (`rabanne-01.mp4`, iPhone SDR bt709, sin tonemap, 29 MB → 2,4 MB). La tarjeta de la Home y de /work usa la 04 (subiéndose al auto, elegida por el usuario) con `position: '50% 35%'`. `material.photos: some`, `hasVideo: true`.

**About:** "Hoy" ya no nombra marcas ("conseguí trabajar con marcas muy grandes y estoy avanzando a pasos agigantados"). "Fuera de cámara" achicada: cada bloque es una miniatura cuadrada con el título y el texto al lado; tres en una fila desde 64rem, apilados en celular (de ~1000 px de alto a ~220 px en compu). El usuario probó una sola columna y la descartó por el espacio vacío a la derecha.

**Publicación:** `site: 'https://hernanalegresa-model.vercel.app'` en `astro.config.mjs`; los `hreflang` ahora son URLs absolutas. Vercel publica solo cada push a `main`. README actualizado: el portfolio queda terminado.

**Pendiente (opcional):** fotos de Armani; foto nueva de Programación. Decidir si en español el menú dice "Work/About" o "Trabajos/Sobre mí". Menores: nivel de portugués, pasaporte "vigente", "internacional" repetido en el hero.

## 2026-10-29 — Armani reordenada y nueva marca: Balmohk

**Armani Beauty:** la galería abre con las 3 fotos del lanzamiento I Will [6, 7, 8], sigue el film a todo el ancho y después la playa [1, 2] + [4, 3, 5]. La tarjeta de la Home pasa a la 06 (sentado solo en la silla con el I Will, `50% 20%`), la misma que ya usaba /work; `workCovers` queda vacía (el mecanismo sigue disponible).

**Balmohk (marca nueva, 9 en total):** 8 fotos de cámara profesional de un evento en la tienda (2:3, `balmohk-01..08`, en el orden en que las mandó el usuario) en `layout: 'rows'`, de a pares: [2, 8] mostrador + pasillo, [1, 3] mostrador, [5, 6] lentes contra la pared y la columna, [4, 7] la V + con amigos. Dos clips de backstage verticales: `balmohk-01` (mostrador, SDR bt709 a 60 fps → 30 fps, póster del segundo 3,5) y `balmohk-02` (columna, HLG → tonemap). 14 MB + 5 MB → 0,8 MB + 0,8 MB. En la Home ocupa el lugar de Meller con la 08, caminando por el pasillo (`50% 28%`, elegida por el usuario); Meller pasa a `workOnlyShots` y sigue en /work con su foto. `priority: 9`.

**A confirmar con el usuario:** rol y categorías (`model` + `modeling, events`) y el resumen del yaml ("Fotos con ropa de la marca en un evento en su tienda").

**Comprobaciones:** `npm run check` 0 errores; build OK (30 páginas); Chrome 1536 px e iframe de 390 px sin scroll horizontal; los dos videos cargan.
