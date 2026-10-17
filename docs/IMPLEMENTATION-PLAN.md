# Implementation Plan

> **Documento histórico (2026-10-15).** Es el plan con el que se realineó el proyecto a la referencia Máxima Michaels; sus etapas 1–6 están completas. Varias decisiones de acá cambiaron después (fuente mono adoptada, nombre centrado, estructura de la Home). El estado actual está en `docs/DESIGN-DIRECTION.md`, `docs/ARCHITECTURE.md` y `docs/DEVELOPMENT-LOG.md`.

Este documento reemplaza la dirección de arte "genérica" con la que arrancó el proyecto (ver `docs/DEVELOPMENT-LOG.md`, sesión 2026-10-14) por una dirección informada por la referencia real que el usuario señaló — **Máxima Michaels** — y por los datos reales que el usuario proveyó en el brief del 2026-10-15 (nombre, marcas, redes, personalidad). Sustituye el rol que tenían `docs/REFERENCE-ANALYSIS.md` (ZENO/Shaukia/Awwwards, vía WebFetch sin navegador) como referencia rectora: ese documento queda como antecedente histórico, no como la referencia que guía las decisiones actuales.

## 1. Síntesis de la referencia (Máxima Michaels)

Fuente verificada: `docs/design-references/maxima-michaels.md` (análisis de grabación de pantalla real, no HTML estático). Rasgos confirmados:

- Minimalismo brutalista en blanco y negro de alto contraste. Sin radios de borde.
- Tipografía *display* masiva (~15vw), uppercase, tracking negativo, line-height ~0.9 — el nombre/wordmark es el elemento más grande de la página.
- Cuerpo/etiquetas en sans geométrica o monoespaciada, uppercase en etiquetas puntuales.
- Grid limpio, márgenes ~5vw, ritmo vertical generoso entre secciones (150-200px).
- Motion: hover con zoom suave en imágenes de grid (scale 1.0→1.05), scroll con inercia, menú overlay a pantalla completa, y un efecto de "image trail" en el cursor (sección de contacto) — este último es el hallazgo más complejo y más específico de un portfolio de fotógrafa mostrando trabajo ajeno.

Es un sitio de **fotógrafa** mostrando el trabajo de otros. Nuestro sitio es de un **modelo**: la fotografía protagonista es él mismo, no un catálogo de clientes. Eso cambia qué se adapta y qué no.

## 2. Qué se adapta y qué no

| Elemento de Máxima | Decisión | Razón |
|---|---|---|
| Tipografía display masiva uppercase para el nombre | **Adoptar** | Es el rasgo más fuerte y más transferible: el nombre del modelo debe dominar la Home igual que el de la fotógrafa domina la suya. |
| B&W de alto contraste, cero radio de borde | **Adoptar, simplificado** | Encaja con fotografía editorial de moda en general, no es exclusivo de un portfolio de fotógrafa. Se abandona la paleta cálida cian/sand/oliva/borgoña de la iteración anterior (ver sección 4). |
| Grid limpio + ritmo vertical generoso | **Adoptar** | Universal a diseño editorial, no depende de que el sitio sea de fotografía. |
| Hover con zoom suave en grid de imágenes | **Adoptar** | Barato, accesible (se envuelve en `prefers-reduced-motion`), mejora la sensación de interactividad sin narrar nada. |
| Menú overlay a pantalla completa | **Adoptar** *(revisado 2026-10-15)* | Decisión inicial fue rechazarlo por no justificarse con 4 links; el usuario revisó el resultado en navegador, lo sintió demasiado alejado de la referencia, y pidió subir la intensidad visual explícitamente, incluyendo este elemento. Implementado con manejo de foco (foco se mueve al primer link al abrir y vuelve al botón al cerrar), cierre con Escape, `inert` en el overlay cerrado y `aria-expanded`/`aria-label` dinámico — mitiga el riesgo de accesibilidad que motivó el rechazo original en vez de ignorarlo. |
| Scroll con inercia (Lenis/Framer) | **Rechazar** | Requiere una dependencia nueva no justificada todavía (CLAUDE.md: no agregar dependencias sin necesidad real); el scroll nativo es más accesible y predecible. |
| Image trail en cursor | **Diferir** | Es el hallazgo más específico de "fotógrafa mostrando trabajo ajeno a través del cursor". Para un modelo podría adaptarse en el futuro a la galería de Work/Digitals (revelar fotos propias al pasar el cursor), pero es una pieza de interacción compleja (JS, gestión de memoria de nodos) que no debe bloquear tener una Home sólida. Se documenta como candidato de Etapa 4+ con alcance propio, no como requisito de esta etapa. |

## 3. Decisiones concretas de dirección de arte

**Color.** Base casi-negro/casi-blanco (no un negro puro clínico): `--color-ink: #0c0c0d`, `--color-paper: #f2f1ee`. Un único acento, vino desaturado (`--color-wine: #6e1f2a`), usado con moderación (foco, un detalle por sección) — no una paleta de "series" con 4 acentos como antes, porque todavía no hay campañas reales que distinguir entre sí. Se puede introducir un segundo acento el día que haya series fotográficas reales que lo justifiquen.

**Tipografía.** Se abandona Fraunces (serif, cálido, itálica) — no es el lenguaje de Máxima y diluía la referencia. Se adopta **Inter Tight** (variable, `@fontsource-variable/inter-tight`) para el wordmark y momentos display puntuales en peso 800-900 con tracking negativo; se mantiene **Inter** para navegación, cuerpo y leyendas. Dos familias, no tres — se evita sumar una mono solo por el gusto de citar la referencia literalmente.

**Composición de Home.** Un solo momento de máxima fuerza: el nombre superpuesto al borde del retrato placeholder, asimétrico (no centrado). Todo lo demás alrededor queda deliberadamente tranquilo — sin "eyebrows" decorativos nuevos, sin comillas dobles de cita, sin blockquote itálico (eso pertenecía al lenguaje serif que se retira).

**Nombre real.** El usuario proveyó su nombre profesional real (*Hernán Alegresa*) en este brief — ya no es un placeholder a confirmar. Se elimina la nota rotada "nombre a confirmar" y el badge asociado.

**Contenido verídico disponible para usar ya (sin inventar nada adicional):** Uruguay, 25 años, 1,80 m, cabello castaño claro, ojos marrones, perfil atlético, @hernanalegresa (solo Instagram: el brief posterior prohíbe mostrar TikTok, y el fútbol ya no figura en el brief vigente), frase de posicionamiento ("Quiero llegar tan lejos como pueda, sin dejar de ser yo mismo"), lista de marcas (ver `PROJECT-BRIEF.md`). Todo lo que no esté en esta lista (medidas adicionales, agencia, fechas de campaña, logros) sigue siendo placeholder explícito.

**Intensidad visual** *(revisado 2026-10-15, tras primera revisión del usuario en navegador)*. La primera versión de Etapa 2 resultó demasiado conservadora — el usuario la comparó con la referencia y pidió subir la intensidad antes de seguir, incluso sin fotos reales todavía. Ajustes aplicados: wordmark de `--step-6: clamp(4.5rem, 2rem + 12vw, 11rem)` a `clamp(5rem, 1rem + 15vw, 14rem)` (más cerca del ~15vw observado), peso 800→900, tracking -0.03em→-0.045em; margen de página de `--space-5` fijo (2.5rem) a `--page-margin: clamp(1.25rem, 3vw, 2.25rem)` fluido y más ajustado; ritmo vertical entre secciones nuevo (`--space-8: 9rem`) más cercano a los 150-200px observados. Esto confirma que parte de la distancia con la referencia era una decisión de escala corregible sin fotos — la otra parte (el tratamiento fotográfico B&W de alto contraste) sigue bloqueada hasta que haya material real.

## 4. Arquitectura técnica

Sin cambios de stack. Astro 7 + TypeScript estricto + i18n nativo se mantienen — ninguna razón nueva para migrar. Cambios de implementación quedan acotados a: `global.css` (tokens), `HomeView.astro`, `Nav.astro`, `PlaceholderImage.astro`, `ui.ts` (contenido real donde corresponde, placeholders explícitos donde no). Ver `docs/ARCHITECTURE.md` para lo que no cambia (rutas, componentes, Content Collections futuras).

## 5. Mapa de páginas y navegación

Sin cambios respecto a `docs/ARCHITECTURE.md`: Home completa, `/work` `/digitals` `/about` `/contact` como stubs "Próximamente" en ambos idiomas. No se crean páginas completas nuevas en esta etapa — la Home es la prioridad (brief, sección 9).

## 6. Sistema de contenido e idiomas

Sin cambios estructurales a `src/i18n/`. Se actualizan valores de `ui.ts` para reflejar nombre real, marcas (placeholder de logos/trabajos, no fotos), y copy alineado a la nueva dirección (sentence case, sin itálicas serif).

## 7. Sistema de placeholders

`PlaceholderImage.astro` se mantiene como mecanismo central, pero su paleta de acentos se simplifica a la nueva base B&W + vino (de 4 acentos de "serie" a una sola variante neutra + una de énfasis), porque ya no hay 3 series de color distintas que insinuar sin contenido real. Detalle completo de qué foto va en qué archivo: `docs/ASSET-GUIDE.md` (nuevo, Etapa 3 en adelante — estructura base se deja lista ahora).

## 8. Etapas, dependencias y criterios de aceptación

| Etapa | Qué incluye | Criterio de aceptación |
|---|---|---|
| 1 — Este documento + docs actualizados | `IMPLEMENTATION-PLAN.md`, `PROJECT-BRIEF.md`, `DESIGN-DIRECTION.md`, `ASSET-GUIDE.md`, nota en `CLAUDE.md` | Ningún documento contradice a otro sobre nombre real, paleta o tipografía. |
| 2 — Home y sistema visual | `global.css`, `Nav.astro`, `HomeView.astro`, `PlaceholderImage.astro`, `ui.ts` | `npm run check` y `npm run build` sin errores; Home revisada visualmente (desktop + mobile) en Chrome; nombre real visible de inmediato; sin radios de borde sueltos del sistema anterior. |
| 3 — Estructura y contenido | Reafirmar stubs de Work/Digitals/About/Contact con el nuevo sistema visual (hoy usan tokens que cambian en Etapa 2, así que heredan el cambio; revisar que no quede nada del lenguaje serif/itálico viejo) | Las 4 páginas stub se ven coherentes con la Home nueva, no como una sección "vieja" pegada a una Home "nueva". |
| 4 — Animaciones | Hover-scale en grids de imagen (Work teaser y futuras galerías); evaluar candidato "image trail" acotado a Work/Digitals si hay tiempo y contenido real para probarlo | Toda animación nueva vive dentro de `prefers-reduced-motion: no-preference`; se prueba con el toggle de SO. |
| 5 — Responsive y pulido | Revisar breakpoints con el nuevo type scale (clamp en vw puede desbordar en pantallas muy angostas si no se revisa) | Sin recortes de texto ni overflow horizontal en 320px–1920px. |
| 6 — Validación y entrega | `npm run check`, `npm run build`, revisión visual, actualizar `DEVELOPMENT-LOG.md` | Documentado qué se hizo, qué falta, cómo correr el proyecto y cómo incorporar fotos reales. |

Dependencia dura: Etapa 2 bloquea 3-6 (no tiene sentido extender un sistema visual que todavía no se validó).

## 9. Riesgos y decisiones pendientes

- **Tracking negativo + `clamp()` en vw para el wordmark** puede volverse ilegible en pantallas muy angostas (320-360px) si el tracking negativo se aplica sin ajuste — se prueba explícitamente en Etapa 5, no se asume que "clamp ya lo resuelve".
- **Image trail diferido**: si el usuario lo quiere antes, es una pieza de alcance propio (requiere JS en cliente, gestión de nodos, y fotos reales para que tenga sentido mostrarlo) — no se improvisa dentro de la Home.
- **Un solo acento de color (vino)** puede no alcanzar el día que existan series fotográficas reales que necesiten distinguirse visualmente (ej. editorial vs. comercial vs. deportivo) — se revisita cuando haya Content Collections con contenido real, no antes.
- **Fuente Inter Tight**: se verifica que exista como paquete `@fontsource-variable/inter-tight` antes de instalar (Etapa 2); si no cubre el peso 900 variable, el plan B es `Archivo` variable, igualmente libre y autohospedable.
