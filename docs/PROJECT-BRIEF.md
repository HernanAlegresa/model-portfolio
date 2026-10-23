# Project Brief

Fuente: brief maestro provisto por el usuario el 2026-10-15 (segunda sesión), que reemplaza y amplía el brief anterior. Este documento es la referencia consolidada de contenido real — `src/` nunca debe contener un dato que no esté acá o marcado explícitamente como placeholder.

## Quién

**Hernán Alegresa** — modelo masculino y creador de contenido, con base en Uruguay.

- Altura: 1,80 m.
- Medidas: pecho 98 cm, cintura 75 cm, cadera 95 cm.
- Talle de ropa: M. Talle de calzado: 42.
- Cabello: castaño claro. Ojos: marrones.
- Otras medidas: **pendientes de confirmar** — no inventar, dejar como placeholder hasta que el usuario las provea.
- Edad: 25 años — **campo manual**, no calculado. El sitio nunca debe derivar la edad de una fecha de nacimiento; se guarda como valor explícito en `src/data/profile.ts` y se actualiza a mano cuando corresponda.

**Privacidad — reglas duras, no negociables sin aprobación explícita del usuario:**
- Nunca publicar la fecha de nacimiento completa (ni en `src/`, ni en documentación — ni siquiera acá; si hace falta la fecha exacta para algún cálculo interno, pedirla de nuevo en el momento, no guardarla).
- La edad visible es opcional y de actualización manual, nunca calculada automáticamente.
- No publicar teléfono personal por defecto — queda pendiente de aprobación final del usuario antes de aparecer en el sitio.
- No mostrar el nombre de la agencia actual ni presentar el sitio como si tuviera representación oficial — el portfolio es una presentación profesional independiente, a su nombre.
- No agregar medidas, talles, nacionalidades, idiomas o credenciales no confirmados explícitamente acá (idiomas y pasaporte ya confirmados, ver abajo).

Perfil: modelo y creador de contenido con experiencia en e-commerce, fotografía profesional, contenido para redes sociales, colaboraciones con marcas y participación en eventos. Versatilidad para indumentaria formal, casual y streetwear. Practica deporte y mantiene actividad física constante. Se describe como sociable, adaptable, creativo y comprometido con disfrutar el proceso sin perder profesionalismo.

Redes: Instagram [@hernanalegresa](https://instagram.com/hernanalegresa) únicamente. **No mostrar TikTok** en el portfolio (decisión explícita del usuario, no es un olvido).

Frase de posicionamiento: *"Quiero llegar tan lejos como pueda, sin dejar de ser yo mismo."*

## Historia para About

Fuente real, sin inventar nada adicional — usar como base para redactar, no copiar palabra por palabra si el tono editorial pide ajustes, pero sin alterar los hechos.

**Historia real (contada por el usuario el 2026-10-21, reemplaza la versión anterior que decía 2025):**

- **Antes:** trabajaba como programador full stack en una empresa. A principios de 2026 dejó ese trabajo y empezó a buscar otro. Durante el año hizo proyectos freelance para clientes y proyectos propios.
- **Enero de 2026:** lo invitaron a un evento de Armani en Punta del Este. Fue su primer trabajo con una marca (como invitado). Ahí conoció a mucha gente del ambiente de influencers, moda y modelaje en Uruguay. Empezó a subir contenido a redes: lifestyle y fotos estéticas.
- **Marzo de 2026 (aprox.):** le empezaron a llegar propuestas para modelar. Lo pensó mucho: tenía dudas y miedo al "qué dirán", porque en Uruguay el rubro está poco desarrollado, y más para hombres.
- **Mitad de 2026:** decidió animarse: aceptar trabajos con marcas y trabajar con su imagen, sin dejar la programación. Lo disfruta muchísimo.
- **Hoy (octubre de 2026):** lleva unos tres meses trabajando fuerte. Tiene mucha demanda y muchas propuestas para el poco tiempo que lleva, y se lo reconocen. Está creciendo rápido en Uruguay.
- **Objetivo:** trabajar a nivel internacional y ser el mejor en lo que hace; profesionalizarse y dedicarse al 100 %.

No usar cantidades de meses fijas en el sitio ("hace tres meses"): quedan viejas. Decir "desde mitad de 2026" o "en pocos meses".

**Fuera de cámara:**
- **Fútbol:** jugó fútbol profesional en juveniles y después pasó al amateur, donde sigue jugando.
- **Deporte en general:** gimnasio, correr; le gustan casi todos los deportes, juega a la mayoría y mira tenis y básquetbol, entre otros.
- **Programación:** programador recibido (estudió la carrera de programación; institución y título exacto no confirmados, no inventarlos). Trabajó como full stack. **Este portfolio lo hizo él de cero**, como proyecto propio: código, diseño, estética y selección de fotos. Se destaca en About (decisión del usuario).
- **Vida social:** familia, amigos, conocer gente. Muy sociable y proactivo; se desenvuelve bien en eventos.
- **Perros:** tiene una perra, Pipa. (Hace poco falleció Nina, otra perra suya: no mencionarlo en el sitio salvo que él lo pida.)

**Idiomas y documentos (confirmados):** español nativo, inglés fluido/avanzado, portugués (nivel no especificado). Pasaporte italiano (UE) en trámite, a punto de salir: actualizar a "vigente" cuando lo confirme.

**Valores:** cuida su imagen, pero lo que define a una persona es ser buena gente; su prioridad es ser buena persona y fiel a sí mismo. Quiere desafiarse y dar lo mejor de sí.

**Objetivo:** construir una carrera sin ponerse límites de antemano, llegar tan lejos como pueda en el modelaje y dejar que las experiencias, oportunidades y el trabajo lo lleven a ser el mejor profesional posible.

**Tono editorial para la redacción final:** humano y natural, como lo diría él; sin rayas (—) ni giros de texto generado por IA. Personal, auténtico y profesional; conciso, con voz editorial; ambicioso sin resultar arrogante; cercano sin ser informal en exceso; natural, no biografía corporativa genérica; coherente con un modelo que trabaja para marcas y busca oportunidades internacionales. Admite una versión breve (debe funcionar visualmente sola) y una ampliada si el diseño lo justifica.

**No inventar:** citas, premios, campañas, logros, experiencias internacionales profesionales ni afirmaciones sobre su carrera que no estén en este documento.

## Historial profesional y marcas

**Todos los trabajos se muestran como 2026** (decisión del usuario, 2026-10-21). Única excepción real: Urban Haus (fotos con el pelo platinado) fue a fines de 2025, pero el usuario pidió mostrarlo como 2026 (febrero). Distinguir explícitamente entre trabajo como **modelo**, como **creador de contenido** y como **invitado a eventos** — no convertir automáticamente cada colaboración en "campaña de modelaje". Categorías disponibles (un proyecto puede tener varias): `modelaje`, `ecommerce`, `contenido`, `eventos`.

| Marca | Año | Actividad | Rol | Categorías | Material disponible |
|---|---|---|---|---|---|
| **Meller** (Meller Uruguay) | 2026 | Colaboraciones en redes mostrando productos | Creador de contenido | contenido | Fotos — algunas buenas |
| **Urban Haus** *(no "Urban House")* | 2026 | Modelaje para e-commerce y contenido | Modelo, creador de contenido | modelaje, ecommerce, contenido | ~4 fotos |
| **Original Penguin** | 2026 | E-commerce, fotos y reels para web/redes | Modelo | modelaje, ecommerce, contenido | Bastante material: fotos + algunos videos |
| **Rent the Look** *(no "Rent Deluxe")* | 2026 | Fotos y videos para e-commerce y redes | Modelo | modelaje, ecommerce, contenido | Bastante material: fotos + videos |
| **Forum Industries** | 2026 | E-commerce, fotos y videos para web/redes | Modelo | modelaje, ecommerce, contenido | Bastante material: fotos + videos |
| **Vans** *(no "Vans Uruguay")* | 2026 | Contenido durante un viaje personal a Río de Janeiro usando producto de la marca; parte publicada en redes de la marca, parte en redes propias | Creador de contenido | contenido | Hasta ~10 fotos + algunos videos |
| **Armani Beauty** | 2026 | Eventos y creación de contenido (su primer trabajo con una marca fue como invitado a un evento suyo en Punta del Este, en enero de 2026; no asumir que todo el material es de ese evento) | Creador de contenido, invitado | eventos, contenido | Bastante material: fotos + videos |
| **Rabanne** *(no "Carolina Herrera")* | 2026 | Modelo e influencer para la marca | Modelo, creador de contenido | modelaje, contenido | 6 fotos + 1 video de backstage |

**Fuera del portfolio por decisión del dueño (2026-10-20):** VCP Uruguay, Chivas Regal y Salus Uruguay. El portfolio es de modelaje: estas colaboraciones (selfies de contenido, un evento como invitado, un comercial de TV sin material) no suman a ese foco. No volver a agregarlas.

**Reglas de presentación (aplican al contenido y al código):**
1. El año es dato de referencia del proyecto — no inventar meses/fechas exactas.
2. Cada proyecto respeta las categorías de la tabla; un proyecto puede tener varias.
3. No inventar resultados, estadísticas, alcance, premios, créditos, enlaces o testimonios.
4. No mostrar las 8 marcas con idéntico protagonismo — selección curada, no checklist.
5. No forzar galerías extensas en proyectos con poco material (Rabanne: 6 fotos y 1 video).
6. Dejar espacio para enlaces a publicaciones oficiales, pero **no inventar URLs** — todos los `link` quedan `null`/pendientes hasta que el usuario los confirme.
7. No usar logos o materiales oficiales de marca sin autorización — el nombre de la marca es referencia de un trabajo real, no implica respaldo oficial del sitio.
8. Vans: no presentar el viaje como campaña internacional oficial ni organizada por la marca.
9. Armani Beauty: no asumir que todo el contenido es del evento de enero de 2026 en Punta del Este.

## Contacto profesional

- Instagram: [@hernanalegresa](https://instagram.com/hernanalegresa) — único link social a mostrar.
- TikTok: **no mostrar**.
- Agencia: **no mostrar**, no atribuir representación oficial.
- Email profesional: **hernanalegresa10@gmail.com** (confirmado por el usuario el 2026-10-23). Vive en `src/data/contact.ts`.
- Teléfono: no publicar por defecto — pendiente de aprobación final del usuario.
- Formulario de contacto: **decisión ya tomada en conversación — solo info estática**, sin formulario, para no sumar una dependencia externa (ej. Formspree) sin necesidad confirmada. Si el usuario pide un formulario real más adelante, documentar en `ARCHITECTURE.md` qué servicio y credenciales haría falta — no implementar un formulario que no envíe nada de verdad.

## Idiomas y audiencia

ES/EN desde la primera versión funcional. Audiencia: marcas de indumentaria, agencias de modelos, fotógrafos y directores creativos, productoras y clientes de publicidad, equipos de casting, marcas de contenido para redes, clientes/oportunidades internacionales. La traducción al inglés debe sonar natural para la industria del modelaje, no literal. No declarar ni insinuar un nivel de inglés del usuario solo porque el sitio tiene versión en inglés.

## Arquitectura de navegación

- **Home** — primera impresión visual fuerte, nombre, fotografía protagonista, navegación simple a Polaroids/Work/About/Contact (ese orden en el menú y el footer desde 2026-10-23).
- **Work** — selección curada de colaboraciones con marcas (tabla arriba), categorizada, con galerías de longitud variable.
- **Polaroids** *(antes "Digitals" — renombrado por decisión explícita del usuario)* — fotos de presentación estándar de agencia: rostro de frente, rostro de perfil, cuerpo completo de frente, cuerpo completo de perfil. Sección independiente de Work, sin retoque.
- **About** — historia personal + ficha técnica (medidas confirmadas/pendientes).
- **Contact** — Instagram, email, sin teléfono ni agencia por defecto.

### Explícitamente fuera de alcance por ahora
- Fotografías y videos reales: el usuario los carga de a poco (ver `docs/ASSET-GUIDE.md`). Ya cargados al 2026-10-17: la foto del hero y el video de "Sobre mí".
- Nombre de agencia actual.
- Teléfono personal, enlaces a publicaciones — todos placeholder hasta aprobación/confirmación.
- Formulario de contacto funcional, CMS, backend, base de datos — sin necesidad real identificada.

## Criterios de éxito

1. La Home tiene identidad visual fuerte, coherente con el análisis de Máxima y adaptada a un perfil de modelo.
2. Las fotografías (hoy placeholders) tienen protagonismo — el diseño no parece plantilla genérica.
3. Navegación, transiciones y galerías se sienten intencionales, no decorativas.
4. El sitio diferencia correctamente modelaje, e-commerce, creación de contenido, eventos y comercial de TV.
5. Contenido disponible en español e inglés desde el día uno.
6. Polaroids es una sección profesional independiente, no una copia de Work.
7. Los placeholders son fáciles de reemplazar por material real (ver `ASSET-GUIDE.md`).
8. Funciona igual de bien en escritorio y móvil.
9. Rápido, accesible (teclado, contraste, `prefers-reduced-motion`) y mantenible.
10. Ningún dato inventado: campañas, fotos, resultados, créditos, fecha de nacimiento completa, teléfono sin aprobar.
11. Existe una guía clara para cargar material definitivo sin rehacer el sitio.
