# Reference Analysis

> **Documento histórico (2026-10-14).** Primera investigación, hecha sin navegador. La referencia rectora pasó a ser Máxima Michaels (`docs/design-references/maxima-michaels.md`), analizada con video y, desde 2026-10-17, midiendo el sitio real en Chrome.

## Método y limitación real de inspección

Las cuatro referencias se inspeccionaron con la herramienta `WebFetch` disponible en este entorno: descarga el HTML público de la URL, lo convierte a texto/markdown y lo resume. Esto permite leer **estructura, navegación, jerarquía de contenido y copy real**, pero:

- **No permite observar animaciones, transiciones, timing de scroll ni comportamiento interactivo real.** Cualquier mención a movimiento en este documento está marcada explícitamente como hipótesis, no como observación.
- No se usó un navegador real (Chrome) en esta sesión, así que no hay capturas ni grabaciones propias.
- No se abrieron páginas individuales de las listas de Awwwards (quedó en el nivel de las páginas de categoría).

No se copió código ni diseño de ningún sitio; lo que sigue son observaciones estructurales y oportunidades de diseño, no una reproducción.

---

## 1. ZENO — zenomodel.com

**Observado (vía HTML):**
- Nav con anclas internas: Work, Digitals, Stats, Contact + descarga de comp card en PDF.
- Hero con retrato grande, stats inline ("6'1\" Height | 38R Jacket | 10.5 US Shoe").
- Intro con tags de especialidad ("Runway · Editorial · Menswear") y CTA a `#work`.
- Tres proyectos de galería con fecha/ciudad, uno incluye un video de 19 segundos.
- Sección Digitals con 6 tomas estándar de casting (headshot, full length, 3/4, perfil, cuerpo frente/lado).
- Tabla de medidas detallada.
- Footer con ubicación, email, Instagram y copyright.

**Hipótesis (no verificable sin navegador):** probablemente usa scroll suave entre anclas y transiciones de imagen al hacer hover; no se puede confirmar timing ni librería.

**Qué vale la pena adaptar:** la claridad de la sección Digitals (tomas estándar nombradas explícitamente) y la tabla de medidas como bloque de datos separado del resto — ambos ya están reflejados como secciones futuras (`/digitals`) en `docs/ARCHITECTURE.md`.

**Qué evitar:** todo es de una sola página con anclas (`#work`, `#contact`); este proyecto usa páginas propias por sección — decisión ya tomada en el brief original, no se revierte.

## 2. Shaukia Alhassan — shaukiah.webflow.io

**Observado (vía HTML):** sitio Webflow (CDN `cdn.prod.website-files.com`). Hero con título grande ("THIS IS SHAUKIA"), subtítulo de rol, ubicación. Sección "About" con historia personal extensa y declaración de misión. Grid de 4 proyectos + portfolio personal. CTA final de contacto. Footer con redes y crédito de diseñador.

**Hipótesis (no verificable):** el brief original la señala como referencia de "revelado de imágenes, scroll y ritmo narrativo" — no pude confirmar cómo se implementa ese revelado (podría ser scroll-triggered con IntersectionObserver, o animación CSS en viewport) porque WebFetch no ejecuta JS ni mide comportamiento de scroll.

**Qué vale la pena adaptar:** el patrón de hero con declaración personal corta y directa (texto en primera persona, sin relleno) es coherente con el tono de autenticidad que pidió el usuario para la sección About futura.

**Qué evitar:** el brief pide explícitamente que el resultado final no sea "excesivamente animado" — sin poder verificar cuánta animación tiene este sitio realmente, no se asume ningún patrón de movimiento específico de acá.

## 3 y 4. Awwwards — Fashion / Animation (páginas de listado)

**Observado:** ambas son páginas de listado paginadas con grillas de sitios premiados, cada entrada con estudio/diseñador y badges (Pro, Honorable Mention, Site of Day, Developer Award). Se registraron ~30 entradas por página en cada categoría (ver fetch crudo de esta sesión si hace falta el listado completo); no se abrió ninguna entrada individual.

**Limitación:** estas páginas son un índice hacia otros sitios, no un patrón de diseño en sí mismo. Sin abrir sitios individuales con un navegador no hay observación real de composición o movimiento que reportar — cualquier afirmación sobre "cómo se ven los sitios de moda premiados" sería inventada.

**Oportunidad real:** sirven como fuente de nombres para que el usuario elija 2-3 sitios puntuales y los revise él mismo (o los grabe/capture), y a partir de eso se haga un análisis dirigido en vez de genérico.

---

## Preguntas abiertas para el usuario

1. Si querés un análisis de movimiento real (no hipotético) de alguno de estos sitios, ¿podés pasar una grabación de pantalla corta (10-20s) o permitir que se use la herramienta de navegador Chrome en una sesión futura?
2. De los ~30 sitios listados en cada categoría de Awwwards, ¿hay 2-3 que te resuenen particularmente para que los analicemos en detalle en vez de la lista completa?
