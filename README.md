# Hernán Alegresa — Model Portfolio

Portfolio editorial bilingüe (español / inglés) de **Hernán Alegresa**, modelo y creador de contenido con base en Uruguay. Construido con [Astro](https://astro.build) 7 + TypeScript, CSS moderno y sin framework de UI.

Es, a la vez, un portfolio profesional real, una pieza de portfolio de programación y un proyecto de aprendizaje guiado.

## Estado

Las 5 páginas existen en ambos idiomas: **Home**, **Work**, **Polaroids**, **About** y **Contact**.

- La **Home** se está revisando sección por sección con el dueño del sitio. El hero, "Sobre mí" (con video real), el banner de marcas y la grilla de trabajos ya están definidos. La ficha y el contacto de cierre están construidos y falta revisarlos ("Qué hago" se sacó).
- Material real cargado: la foto del hero y el video de "Sobre mí". El resto de las imágenes son placeholders explícitos, a reemplazar siguiendo `docs/ASSET-GUIDE.md`.

El detalle de cada sesión está en `docs/DEVELOPMENT-LOG.md`.

## Requisitos

- **Node.js ≥ 22.12.0** (requisito de Astro 7). Si tenés una versión anterior: [nvm-windows](https://github.com/coreybutler/nvm-windows) y `nvm install 22 && nvm use 22`.
- npm (incluido con Node).

## Uso

```bash
npm install
npm run dev      # servidor local en http://localhost:4321 (/ redirige a /es/)
npm run check    # tipos y diagnósticos de Astro
npm run build    # build de producción a dist/
npm run preview  # sirve dist/ localmente
```

## Dónde está cada cosa

| Qué querés cambiar | Dónde |
|---|---|
| Textos visibles (ES/EN) | `src/i18n/ui.ts` |
| Encuadre de la foto del hero, posición de la bio y tamaño del nombre | Bloque **HERO CONTROLS** al principio del `<style>` de `src/components/HomeView.astro` |
| Video o fotos de "Sobre mí" | `src/data/about-media.ts` |
| Las 6 marcas y fotos de la grilla de trabajos de la Home | `src/data/selected-work.ts` |
| Datos de cada marca (categorías, resumen, prioridad) | `src/content/work/*.yaml` |
| Medidas y edad | `src/data/profile.ts` |
| Colores, fuentes y espaciados | `src/styles/global.css` |

## Documentación

| Documento | Para qué |
|---|---|
| `CLAUDE.md` | Reglas de trabajo en el repo (también las lee Claude Code). |
| `docs/PROJECT-BRIEF.md` | **Fuente de verdad del contenido**: datos personales confirmados, marcas, reglas de privacidad. |
| `docs/DESIGN-DIRECTION.md` | Dirección visual actual: tipografía, color, composición, movimiento. |
| `docs/ARCHITECTURE.md` | Rutas, componentes, i18n, Content Collections y decisiones técnicas. |
| `docs/ASSET-GUIDE.md` | Cómo y dónde cargar fotos y videos reales. |
| `docs/DEVELOPMENT-LOG.md` | Registro de avances por sesión. |
| `docs/LEARNING-GUIDE.md` | Conceptos usados en el código, con ejercicios. |
| `docs/design-references/` | Análisis de la referencia principal (Máxima Michaels). |
| `docs/IMPLEMENTATION-PLAN.md`, `docs/REFERENCE-ANALYSIS.md` | Históricos: el plan inicial y la primera investigación de referencias. |
