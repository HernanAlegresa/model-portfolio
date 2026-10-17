# Reference: maxima-michaels

- **Sources:** Maxima-michaels.mp4 · efecto-fotos-cursor.mp4 · https://maximamichaels.framer.website/
- **Analyzed:** 2026-10-15 · gemini-3-flash-preview · 5 fps · high

## TL;DR
*   **Estilo:** Minimalismo brutalista de alto contraste (B&W) con tipografía *display* masiva y una estructura de rejilla limpia.
*   **Motion:** Scroll con inercia suave, transiciones de menú a pantalla completa y un efecto de "rastro de imágenes" (image trail) activado por el cursor.
*   **Valor principal:** El sistema de interacción del cursor en la sección de contacto (V2), que genera una narrativa visual dinámica mediante el movimiento del usuario.

## Code facts (exact — scanned from the site's source)

Source: https://maximamichaels.framer.website/ · files scanned: 0
Detection is by signature in the code: a hit is strong evidence, a miss is not proof of absence.

- ⚠ Could not fetch page: <urlopen error [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: certificate has expired (_ssl.c:1000)>

Aquí tienes el desglose técnico del sitio web de Maxima Michaels basado en las grabaciones proporcionadas.

## 1. Page map
| Ref | Sección / página | Contenido | Layout | Notable |
| :--- | :--- | :--- | :--- | :--- |
| V1 0:00 | Hero | Retrato B&W + Título gigante | Full bleed | Tipografía "MAXIMA MICHAELS" solapada. |
| V1 0:03 | Menú | Links: Home, Work, About, Contact | Overlay vertical | Tipografía masiva que ocupa el 80% del ancho. |
| V1 0:11 | About (Home) | Texto biográfico corto | Dos columnas (texto a la derecha) | Botón "MORE ABOUT ME" minimalista. |
| V1 0:18 | Works | Grid de proyectos | Grid 2x2 | Títulos debajo de las imágenes en monoespaciado. |
| V1 0:27 | Services | Lista de servicios | Lista con divisores horizontales | Categoría a la izquierda, detalle a la derecha. |
| V1 0:35 | Clients | Logos de marcas | Grid 3x2 | Logos en blanco sobre fondo negro. |
| V1 1:05 | About Page | Bio extendida + Awards + Playlist | Split 50/50 (Imagen/Texto) | Widget de Spotify integrado. |
| V2 0:01 | Contact | "LETS COLLABORATE" + Image Trail | Centrado / Interactivo | Las fotos aparecen siguiendo el cursor. |

## 2. Design tokens
- **Colors:** 
    - bg → `#000000`
    - text → `#FFFFFF`
    - muted → `#888888` (usado en detalles de servicios y pies de foto)
- **Type:** 
    - display (h1/h2) → Sans-serif ultra-bold (estilo *Inter Tight* o *Founders Grotesk*), ~15vw, uppercase, letter-spacing: ~-0.05em, line-height: ~0.9.
    - body → Sans-serif geométrica o Monospace, ~1.2vw (16-18px), weight: 400, case: uppercase (en etiquetas), line-height: 1.4.
- **Spacing & grid:** 
    - Márgenes externos: ~5vw.
    - Grid de proyectos: 2 columnas con gutter de ~20px.
    - Ritmo vertical: Espaciado generoso entre secciones (~150px a 200px).
- **Shapes & surfaces:** 
    - Radii: `0px` (esquinas vivas en todo el sitio).
    - Tratamiento de imagen: Blanco y negro de alto contraste con grano sutil (V1 0:00).
- **Cursor:** Default, pero actúa como disparador de eventos en la sección de contacto.

## 3. Motion inventory
| ID | Ref | Elemento | Trigger | Efecto (from → to) | ~Duración | Easing feel | Stagger / split | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| M1 | V1 0:03 | Menú Overlay | Click | Opacity 0→1 + Slide Y | 0.5s | Power2.out | No | Cubre toda la pantalla. |
| M2 | V1 0:18 | Imágenes Work | Hover | Scale 1.0→1.05 | 0.4s | Expo.out | No | Zoom suave dentro del contenedor. |
| M3 | V1 0:08 | Scroll | Scroll | Inercia / Smooth Scroll | - | Fluid | - | Probable uso de Framer Motion o Lenis. |
| M4 | V2 0:01 | Image Trail | Cursor | Spawn en `x,y` + Rotate + Fade Out | 1.2s | Custom | Sí | Las fotos aparecen tras recorrer ~50px. |

## 4. Interaction & navigation
- **Menú:** Botón de hamburguesa que transforma el icono en "X". Los links del menú tienen un hover que cambia el color o la opacidad.
- **Navegación:** Flujo continuo. Al hacer click en "About", se carga una página con un layout de dos columnas fijas (imagen fija a la izquierda, scroll en la derecha).
- **Proyectos:** Las imágenes actúan como links directos a casos de estudio (no mostrado en detalle, pero sugerido por el cursor pointer).

## 5. Build recipe
### M4 — Efecto Image Trail (V2)
Es el efecto más complejo. Se construye detectando el movimiento del ratón:
1.  **Estructura:** Un contenedor con `position: relative` y un array de imágenes ocultas con `position: absolute`.
2.  **Lógica de disparo:** 
    *   Escuchar `onMouseMove`.
    *   Calcular la distancia entre la posición actual del cursor y la posición donde apareció la última imagen (`Math.hypot(dx, dy)`).
    *   Si la distancia es > ~80px, mostrar la siguiente imagen del array.
3.  **Animación (Framer Motion / GSAP):**
    *   **Aparición:** `opacity: 0 -> 1`, `scale: 0.8 -> 1`, `rotate: random(-15deg, 15deg)`.
    *   **Desaparición:** Tras un `delay` de ~0.8s, animar `opacity: 0` y `scale: 1.1`.
    *   **Z-index:** Incrementar el z-index de cada nueva imagen para que siempre aparezca por encima de la anterior.

## 6. Open questions
- **Tipografía exacta:** ¿Es una fuente personalizada o una variable de Google Fonts (ej. Syne o Inter)?
- **Smooth Scroll:** ¿Es la implementación nativa de Framer o una librería externa como Lenis para asegurar la consistencia entre navegadores?
- **Performance:** ¿Cómo maneja el sitio el garbage collection de los nodos de imagen creados en el efecto de rastro para evitar fugas de memoria en sesiones largas?

## 7. Medido en el sitio real (Chrome, 2026-10-17)

Valores exactos leídos del DOM con la ventana a 1536×730 (no estimados de video). Usados para replicar la sección de trabajos en `src/components/home/HomeWork.astro`.

- **Sección "Some works":** título `H4` Boldonse 45px, mayúsculas, tracking −1.8px, margen izquierdo 25px; la grilla arranca ~87px debajo.
- **Grilla:** 2 columnas a sangre, sin gutter. Cada tarjeta 760×523 px (ratio ~1.45:1) en una ventana de 1520 px útiles. Paso entre filas ~699 px.
- **Pie de tarjeta:** categoría `H6` DM Mono 18px, `#a6a6a6`, tracking −0.36px; nombre `H5` Boldonse 28px blanco, tracking −1.12px; ambos con 25px de margen izquierdo, ~20px debajo de la imagen.
- **Hover:** dos `<img>` de la misma foto. La de fondo queda bajo un velo con `backdrop-filter: blur(8px)` y `background: rgba(0,0,0,.59)`; la de arriba se muestra a 578×398 (76 %) centrada.
- **Botón "See more works":** DM Mono 16px, fondo blanco, texto negro, centrado ~100px debajo de la última fila.
- **Primera sección:** fuente del nombre Boldonse; header con "PHOTOGRAPHER" centrado.
