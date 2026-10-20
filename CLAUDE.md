# CLAUDE.md

Instrucciones persistentes para trabajar en este repositorio. Leé también `docs/PROJECT-BRIEF.md`, `docs/DESIGN-DIRECTION.md` y `docs/ARCHITECTURE.md` antes de implementar cambios grandes.

Design references: docs/design-references/INDEX.md — read it before UI/design work; open a reference file only for the section needed.

## Qué es este proyecto

Portfolio editorial bilingüe (ES/EN) para un modelo masculino. Es, a la vez:
1. Un portfolio profesional real.
2. Una pieza de portfolio de programación.
3. Un proyecto de aprendizaje guiado para el dueño del repo (programador aprendiendo desarrollo web moderno).

## Stack

- **Astro 7** (TypeScript, CSS moderno, sin framework de UI — no React/Vue/Svelte salvo necesidad real y justificada).
- **Node.js ≥22.12.0** (LTS). El repo fijó `engines.node` en `package.json`; no bajar ese requisito sin verificar de nuevo los requisitos oficiales de Astro.
- npm como package manager.
- Fuentes autohospedadas vía fontsource (no CDN de Google Fonts): Inter Tight e Inter variables, DM Mono 500.

## Comandos

```bash
npm install
npm run dev      # servidor local, http://localhost:4321
npm run check    # astro check (tipos + diagnósticos de .astro)
npm run build    # build de producción a dist/
npm run preview  # sirve dist/ localmente
```

Corré `npm run check` y `npm run build` antes de dar por terminada cualquier tarea no trivial.

## Arquitectura (resumen — detalle en docs/ARCHITECTURE.md)

- `src/i18n/ui.ts` — diccionario de strings por idioma. `src/i18n/utils.ts` — helpers (`getLangFromUrl`, `useTranslations`, `switchLocalePath`).
- `src/layouts/BaseLayout.astro` — shell HTML, head, nav, footer, `hreflang`.
- `src/components/` — piezas reutilizables (`Nav`, `LanguageSwitcher`, `PlaceholderImage`, `SiteFooter`, `WipView`) y una vista por página (`HomeView`, `WorkView`, `PolaroidsView`, `AboutView`, `ContactView`).
- `src/components/home/` — una sección de la Home por archivo (`HomeAbout`, `HomeBrands`, `HomeWork`, `HomeStats`, `HomeContact`); `HomeView.astro` tiene el hero y el orden.
- `src/data/` — datos editables sin tocar componentes: `profile.ts` (medidas), `polaroids.ts` (las 4 polaroids), `selected-work.ts` (marcas/fotos de la grilla de la Home), `about-media.ts` (video de "Sobre mí").
- `src/content/work/*.yaml` + `src/content.config.ts` — Content Collection con las 8 marcas.
- `src/pages/es/*` y `src/pages/en/*` — una página por idioma, sin lógica de contenido embebida (la vista real vive en `src/components/*View.astro`).
- `src/pages/index.astro` — vacío a propósito; Astro genera el redirect `/ → /es/` automáticamente (`astro.config.mjs`, `i18n.routing.redirectToDefaultLocale`).
- `src/styles/global.css` — tokens de color/tipografía como custom properties, reset mínimo, reglas de `prefers-reduced-motion`.

## Convenciones y límites

- **No inventar contenido real**: sin campañas, medidas, logros, testimonios ni datos de contacto no confirmados. El nombre real del modelo (**Hernán Alegresa**) y los datos básicos confirmados (Uruguay, 25 años, 1,80 m, redes @hernanalegresa, lista de marcas) ya están disponibles en `docs/PROJECT-BRIEF.md` — usalos tal cual, no son placeholder. Todo lo que no esté documentado ahí sigue siendo placeholder explícito (ver `PlaceholderImage.astro`).
- **Páginas nuevas sin contenido real:** usar un stub ("Próximamente", ver `WipView.astro`) en vez de inventar contenido. Las 5 páginas actuales (Home, Work, Polaroids, About, Contact) ya tienen contenido real del brief; lo que falta son fotos, que se muestran como `PlaceholderImage` hasta cargarlas (`docs/ASSET-GUIDE.md`).
- **i18n**: toda ruta nueva necesita su par `/es/` y `/en/`. Toda string visible va en `src/i18n/ui.ts`, nunca hardcodeada en un componente.
- **Contenido vs. presentación**: datos de marcas/proyectos en la Content Collection (`src/content/work/`), selecciones y medios editables en `src/data/`, nunca arrays de contenido hardcodeados en componentes — así se puede agregar material sin tocar código de presentación.
- **Movimiento**: toda animación debe estar dentro de `@media (prefers-reduced-motion: no-preference)`. Nada de scroll bloqueado ni animaciones que impidan navegar.
- **No agregar dependencias** (frameworks de UI, CMS, backend, base de datos) sin justificar la necesidad real frente a lo que ya existe.
- **No hacer commit ni push** sin autorización explícita del usuario en esa conversación puntual.

## Cómo trabajar con el usuario

- **Estado actual y pendientes:** última entrada de `docs/DEVELOPMENT-LOG.md`. Dirección visual vigente y lo que ya se rechazó: `docs/DESIGN-DIRECTION.md`.
- **No tocar sin pedido explícito:** el hero de la Home (incluido el bloque HERO CONTROLS, que el usuario ajusta a mano), la hamburguesa del header y el contenido del video de "Sobre mí".
- **Referencias:** cuando pida algo "como Máxima Michaels", medir el sitio real en Chrome y replicarlo de cerca, sin suavizarlo ni reinterpretarlo (ver `docs/design-references/`).
- **Pedidos visuales ambiguos:** mostrar opciones o capturas para que elija. El usuario revierte lo que no captura su intención.
- **Verificación visual:** probar en Chrome en escritorio y en un `<iframe>` same-origin de 390 px (`resize_window` no cambia el viewport en este entorno).
- Responder en español rioplatense.

## Modo de aprendizaje

El usuario quiere entender lo que se construye, no solo recibir código. Cuando introduzcas un concepto nuevo importante (i18n, content collections, accesibilidad, etc.), explicá brevemente qué es, por qué se eligió acá, en qué archivo aparece, y dejá una pregunta o ejercicio corto. No expliques líneas triviales ni conviertas tareas chicas en clases largas.
