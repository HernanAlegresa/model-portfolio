# Design Direction

Concepto: **retrato editorial en blanco y negro**. Alto contraste, cero radios de borde, el nombre del modelo como el elemento tipográfico más grande del sitio. La referencia rectora es **Máxima Michaels** (`docs/design-references/maxima-michaels.md`, sitio: https://maximamichaels.framer.website/).

**Cómo se usa la referencia:** cuando el usuario pide algo "como Máxima", se mide el sitio real (DOM en Chrome: tamaños, proporciones, colores, efectos) y se replica de cerca, sin reinterpretarlo ni suavizarlo. Ejemplo: la grilla de trabajos de la Home copia sus tarjetas de 1,45:1 y su hover (desenfoque de 8 px, velo negro al 59 %, copia nítida al 76 %). Donde la referencia no aplica a un modelo, se diseña algo propio y se le muestra al usuario para que elija.

## Tipografía

| Rol | Fuente | Uso |
|---|---|---|
| Display | **Inter Tight** variable, 800–900 | Nombre del hero, nombres de marca, títulos de disciplinas, cierre "Trabajemos juntos". Mayúsculas, tracking negativo (−0.02 a −0.045em), line-height 0.85–1. |
| Etiquetas / voz técnica | **DM Mono** 500 | Bio del hero, header ("MODELO", selector de idioma), banner de marcas, categorías, labels de la ficha, botón "Ver más trabajos". Mayúsculas. |
| Cuerpo | **Inter** variable | Párrafos, pies de foto, links. Sentence case. |

Se probaron y descartaron para el nombre: Boldonse (la fuente real de Máxima), Big Shoulders Display, Bodoni Moda, Syne y Unbounded. El usuario eligió volver a Inter Tight 900 centrado y a todo el ancho.

## Color

Base casi negro / casi blanco, no un blanco y negro clínico (tokens en `src/styles/global.css`):

- `--color-ink` `#0c0c0d` — fondo.
- `--color-ink-raised` `#161616` — superficies apenas elevadas (banner de marcas, placeholders).
- `--color-paper` `#f2f1ee` — texto principal, botón blanco.
- `--color-smoke` `#8c8a86` — texto secundario.
- `--color-hairline` `rgb(242 241 238 / 12%)` — líneas de 1 px.
- `--color-wine` `#6e1f2a` (`--color-accent`) — único acento: foco de teclado, subrayado de links, línea del cierre. Nunca como superficie grande.

La fotografía del hero va en blanco y negro (`filter: grayscale(1)`); el video de "Sobre mí" y las fotos de trabajos van en color.

## Composición

- **Hero:** una pantalla exacta (`100svh`), foto a sangre, nombre enorme centrado a todo el ancho en la base, bio en mono a la izquierda (sobre la pared vacía de la foto). Valores ajustables en HERO CONTROLS.
- **Header:** selector de idioma con globo (izq.), "MODELO" en mono (centro), hamburguesa (der.) que abre un overlay a pantalla completa. **No tocar la hamburguesa**: el usuario la aprobó tal cual.
- **Secciones sin título visible.** El usuario prefiere que cada sección se explique sola (la frase de "Sobre mí", el banner de marcas sobre la grilla). Títulos solo para lectores de pantalla. Excepción pedida por el usuario: "POLAROIDS" sobre las polaroids de la Home, a la izquierda como el "Some works" de Máxima (Inter Tight 900, ~45 px, mayúsculas, tracking −0.04em), con "Ver polaroids" en la misma línea a la derecha.
- **Grilla de trabajos a sangre**, sin gutter entre fotos; los textos sí respetan `--page-margin`.
- Cero radios de borde en superficies (la única forma redonda es el puntito separador del banner de marcas). Separadores con líneas de 1 px, no sombras (excepción: la sombra suave del borde superior de la hoja que tapa el hero).
- Margen de página fluido (`--page-margin`, 1.25–2.25rem) y ritmo vertical generoso (`--space-8`, 9rem).

## Movimiento

Detalle técnico en `docs/ARCHITECTURE.md` → "Sistema de movimiento". Principios:

- **Movimiento que acompaña el scroll**, no que lo bloquea. Nada de scroll secuestrado, inercia ni snap de página completa.
- Momentos firmados del sitio: el telón (la hoja de "Sobre mí" tapando el hero), las palabras que se iluminan al leer, el banner de marcas y el hover de la grilla de trabajos.
- **Todo** dentro de `prefers-reduced-motion: no-preference`.
- Sin librerías de animación (GSAP, Lenis, Framer Motion): CSS + `IntersectionObserver` alcanzan.

## Lo que el usuario rechazó (no volver a proponer igual)

- Galería en zigzag de 7 fotos de tamaños distintos (la página quedaba demasiado larga).
- Carrusel horizontal con contador, línea de progreso y flechas.
- Banner de marcas blanco con letras grandes (demasiado llamativo).
- Título grande "Trabajo seleccionado" sobre la grilla.
- Recortar o editar el video de "Sobre mí" (va completo, con sus flashes).

## Qué evitar

- Plantillas de "modelo genérico" o adornos que no sirvan a la jerarquía: eyebrows en mayúsculas sobre cada título, separadores con punto medio (excepción pedida por el usuario: "MODELAJE • 2026" en las tarjetas de trabajos), flechas pegadas a los CTA.
- Animación para impresionar sin aportar continuidad.
- Inventar contenido (ver `docs/PROJECT-BRIEF.md`).
