export const defaultLang = 'es';

export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const ui = {
  es: {
    'nav.work': 'Work',
    'nav.polaroids': 'Polaroids',
    'nav.about': 'About',
    'nav.contact': 'Contacto',
    'nav.menu.open': 'Abrir menú',
    'nav.menu.close': 'Cerrar menú',
    'site.brand': 'Hernán Alegresa',
    'nav.home.label': 'Hernán Alegresa, inicio',
    'nav.lang.label': 'Idioma',
    'home.title': 'Hernán Alegresa | Modelo',
    'home.description': 'Portfolio de Hernán Alegresa, modelo y creador de contenido uruguayo. Trabajos, polaroids y contacto.',
    'home.bio':
      "Modelo y creador de contenido uruguayo. Trabajo con marcas de moda y belleza en e-commerce, fotos, contenido para redes y eventos. Me muevo del formal al streetwear y apunto a trabajar a nivel internacional.",
    'home.hero.alt': 'Retrato en blanco y negro de Hernán Alegresa con musculosa blanca, mirando a cámara.',
    'home.name.first': 'HERNÁN',
    'home.name.last': 'ALEGRESA',
    'home.work.title': 'Trabajo seleccionado',
    'home.brands.label': 'Marcas con las que trabajé',
    'home.work.cta': 'Ver más trabajos',
    'home.work.shot.alt': 'Hernán Alegresa en un trabajo para {brand}',
    'home.about.title': 'Sobre mí',
    'home.about.statement': 'Quiero llegar tan lejos como pueda, sin dejar de ser yo mismo.',
    'home.about.body':
      "No me pongo techo. Quiero llegar lo más lejos posible en el modelaje: trabajar afuera, con grandes marcas, y dejar mi marca acá en Uruguay. Cada trabajo es una oportunidad para dar lo mejor de mí y ser un poco mejor, como modelo y como persona.",
    'home.about.cta': 'Más sobre mí',
    'home.about.media.alt': 'Hernán Alegresa en distintas sesiones de fotos.',
    'home.stats.open': 'Ampliar polaroid',
    'lightbox.label': 'Polaroids ampliadas',
    'lightbox.photos': 'Fotos ampliadas',
    'lightbox.close': 'Cerrar',
    'lightbox.prev': 'Anterior',
    'lightbox.next': 'Siguiente',
    'home.stats.cta': 'Ver polaroids',
    'home.contact.title': 'Trabajemos juntos',
    'placeholder.label': 'Foto pendiente',
    'wip.title': 'Próximamente',
    'wip.body':
      'Esta sección está en construcción. Todavía estoy seleccionando e incorporando mis fotografías profesionales.',
    'wip.back': 'Volver al inicio',
    'nav.home': 'Inicio',
    'footer.pitch': 'Modelo y creador de contenido en Uruguay.',
    'footer.pages': 'Páginas',
    'footer.contact': 'Contacto',
    'footer.social': 'Redes',
    'footer.dm': 'Mensaje por Instagram',
    'footer.soon': 'muy pronto',
    'footer.top': 'Volver arriba',

    // About
    'about.title': 'About | Hernán Alegresa',
    'about.description': 'Quién es Hernán Alegresa: cómo empezó en el modelaje, qué hace fuera de cámara y su ficha técnica.',
    'about.heading': 'About me',
    'about.intro':
      "Soy Hernán, tengo {age} años y soy de Uruguay. Trabajo como modelo y creador de contenido.",
    'about.video.alt':
      "Backstage de una sesión de fotos en estudio: Hernán frente al fondo blanco, entre luces y el equipo de producción.",
    'about.story.label':
      "Cómo empezó todo",
    'about.story.1.when':
      "Enero de 2026",
    'about.story.1.text':
      "Me invitaron a un evento de Armani en Punta del Este. Fue mi primer trabajo con una marca y ahí conocí a mucha gente de la moda y el modelaje en Uruguay. Empecé a subir contenido a mis redes.",
    'about.story.2.when':
      "Marzo",
    'about.story.2.text':
      "Me empezaron a llegar propuestas para modelar. Lo pensé mucho: acá es un rubro poco desarrollado, más para hombres, y me daba miedo el qué dirán.",
    'about.story.3.when':
      "Mitad de año",
    'about.story.3.text':
      "Me animé. Empecé a aceptar trabajos con marcas sin dejar la programación, y descubrí algo que disfruto muchísimo.",
    'about.story.4.when':
      "Hoy",
    'about.story.4.text':
      "En pocos meses trabajé con marcas como Rabanne, Original Penguin y Vans, y cada vez me llegan más propuestas. Ahora apunto a trabajar afuera.",
    'about.life.label':
      "Fuera de cámara",
    'about.football.label':
      "Deporte",
    'about.football.text':
      "Jugué al fútbol en juveniles a nivel profesional y hoy sigo jugando en el amateur. Voy al gimnasio, salgo a correr y me gustan casi todos los deportes: juego a la mayoría y miro mucho tenis y básquetbol.",
    'about.football.alt':
      "Hernán festejando un gol en una cancha de fútbol, con camiseta azul y short blanco.",
    'about.code.label':
      "Programación",
    'about.code.text':
      "Trabajé como desarrollador full stack en una empresa y hoy hago proyectos freelance y propios. Este portfolio lo hice yo, de cero: el código, el diseño y cada foto que elegí.",
    'about.code.alt':
      "Hernán programando en una notebook, de perfil, con lentes.",
    'about.people.label':
      "Mi gente",
    'about.people.alt':
      "Hernán en la playa, en cuclillas sobre la arena, abrazando a Pipa, su perra blanca.",
    'about.people.text':
      "Me encanta estar con mi familia y mis amigos, conocer gente y charlar. Soy muy sociable, y en los eventos eso se nota. También me encantan los perros: tengo una perra que se llama Pipa.",
    'about.values':
      "Cuido mi imagen, pero sé que lo que define a una persona es cómo es. Mi prioridad es ser buena gente, ser fiel a mí mismo y dar lo mejor de mí en cada trabajo.",
    'about.more':
      "Seguir viendo",
    'about.stats.heading': 'Ficha técnica',
    'about.stats.age': 'Edad',
    'about.stats.height': 'Altura',
    'about.stats.weight': 'Peso',
    'about.stats.chest': 'Pecho',
    'about.stats.waist': 'Cintura',
    'about.stats.hip': 'Cadera',
    'about.stats.clothing': 'Talle de ropa',
    'about.stats.shoe': 'Calzado',
    'about.stats.hair': 'Cabello',
    'about.stats.hairValue': 'Castaño claro',
    'about.stats.eyes': 'Ojos',
    'about.stats.eyesValue': 'Marrones',
    'about.stats.base': 'Base',
    'about.stats.languages': "Idiomas",
    'about.stats.languagesValue': "Español (nativo), inglés (avanzado) y portugués",
    'about.stats.passport': "Pasaporte",
    'about.stats.passportValue': "Italiano (UE), en trámite",
    'about.stats.pending': 'A confirmar',
    'about.stats.ageUnit': 'años',

    // Work
    'work.title': 'Work | Hernán Alegresa',
    'work.description': 'Marcas con las que trabajó Hernán Alegresa como modelo y creador de contenido en Uruguay.',
    'work.statement': 'Solo presencia.',
    'work.categories.modeling': 'Modelaje',
    'work.categories.ecommerce': 'E-commerce',
    'work.categories.content': 'Contenido',
    'work.categories.events': 'Eventos',
    'work.detail.title': '{brand} | Hernán Alegresa',
    'work.detail.all': 'Todos los trabajos',
    'work.detail.gallery': 'Fotos',
    'work.detail.backstage': 'Backstage',
    'work.detail.nav': 'Más trabajos',
    'work.detail.next': 'Siguiente trabajo',
    'work.photo.open': 'Ampliar foto',

    // Polaroids
    'polaroids.title': 'Polaroids | Hernán Alegresa',
    'polaroids.description': 'Polaroids de Hernán Alegresa para agencias y castings: rostro y cuerpo, de frente y de perfil.',
    'polaroids.shot.faceFront': 'Rostro de frente',
    'polaroids.shot.faceProfile': 'Rostro de perfil',
    'polaroids.shot.bodyFront': 'Cuerpo completo de frente',
    'polaroids.shot.halfProfile': 'Medio cuerpo de perfil',
    'polaroids.shot.torso': 'Torso',
    'polaroids.shot.halfFront': 'Medio cuerpo de frente',

    // Contact
    'contact.title': 'Contacto | Hernán Alegresa',
    'contact.description': 'Cómo contactar a Hernán Alegresa, modelo y creador de contenido en Uruguay.',
    'contact.lead': 'Para marcas, agencias, fotógrafos y castings.',
    'contact.instagram.label': 'Instagram',
    'contact.email.label': 'Email',
    'contact.email.pending': 'Muy pronto',
    'contact.phone.label': 'Teléfono',
  },
  en: {
    'nav.work': 'Work',
    'nav.polaroids': 'Polaroids',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.menu.open': 'Open menu',
    'nav.menu.close': 'Close menu',
    'site.brand': 'Hernán Alegresa',
    'nav.home.label': 'Hernán Alegresa, home',
    'nav.lang.label': 'Language',
    'home.title': 'Hernán Alegresa | Model',
    'home.description': 'Portfolio of Hernán Alegresa, a model and content creator from Uruguay. Work, polaroids and contact.',
    'home.bio':
      "Model and content creator from Uruguay. I work with fashion and beauty brands on e-commerce, photo shoots, social content and events. I'm at ease from tailoring to streetwear, and I'm aiming for international work.",
    'home.hero.alt': 'Black-and-white portrait of Hernán Alegresa in a white tank top, looking into the camera.',
    'home.name.first': 'HERNÁN',
    'home.name.last': 'ALEGRESA',
    'home.work.title': 'Selected work',
    'home.brands.label': 'Brands I have worked with',
    'home.work.cta': 'See more work',
    'home.work.shot.alt': 'Hernán Alegresa on a job for {brand}',
    'home.about.title': 'About me',
    'home.about.statement': 'I want to go as far as I can, without losing who I am.',
    'home.about.body':
      "I don't set myself a ceiling. I want to go as far as I can in modeling: work abroad, with big brands, and make my mark here in Uruguay. Every job is a chance to give my best and get a little better, as a model and as a person.",
    'home.about.cta': 'More about me',
    'home.about.media.alt': 'Hernán Alegresa across different photo shoots.',
    'home.stats.open': 'Enlarge polaroid',
    'lightbox.label': 'Enlarged polaroids',
    'lightbox.photos': 'Enlarged photos',
    'lightbox.close': 'Close',
    'lightbox.prev': 'Previous',
    'lightbox.next': 'Next',
    'home.stats.cta': 'See polaroids',
    'home.contact.title': "Let's work together",
    'placeholder.label': 'Photo coming soon',
    'wip.title': 'Coming soon',
    'wip.body':
      'This section is under construction. I am still selecting and adding my professional photography.',
    'wip.back': 'Back to home',
    'nav.home': 'Home',
    'footer.pitch': 'Model and content creator based in Uruguay.',
    'footer.pages': 'Pages',
    'footer.contact': 'Contact',
    'footer.social': 'Social',
    'footer.dm': 'Message on Instagram',
    'footer.soon': 'coming soon',
    'footer.top': 'Back to top',

    // About
    'about.title': 'About | Hernán Alegresa',
    'about.description': 'Who Hernán Alegresa is: how he got into modeling, what he does off camera, and his stats.',
    'about.heading': 'About me',
    'about.intro':
      "I'm Hernán, I'm {age} and I'm from Uruguay. I work as a model and content creator.",
    'about.video.alt':
      "Behind the scenes of a studio photo shoot: Hernán against the white backdrop, among the lights and the production team.",
    'about.story.label':
      "How it all started",
    'about.story.1.when':
      "January 2026",
    'about.story.1.text':
      "I was invited to an Armani event in Punta del Este. It was my first job with a brand, and there I met a lot of people from fashion and modeling in Uruguay. I started posting content on my social media.",
    'about.story.2.when':
      "March",
    'about.story.2.text':
      "Modeling offers started coming in. I gave it a lot of thought: the industry here is small, even more so for men, and I was afraid of what people would say.",
    'about.story.3.when':
      "Mid-year",
    'about.story.3.text':
      "I went for it. I started taking on work with brands while still programming, and found something I really enjoy.",
    'about.story.4.when':
      "Today",
    'about.story.4.text':
      "In just a few months I've worked with brands like Rabanne, Original Penguin and Vans, and more offers keep coming. Now I'm aiming to work abroad.",
    'about.life.label':
      "Off camera",
    'about.football.label':
      "Sport",
    'about.football.text':
      "I played youth football at a professional level and still play as an amateur. I go to the gym, run, and love almost every sport: I play most of them and watch a lot of tennis and basketball.",
    'about.football.alt':
      "Hernán celebrating a goal on a football pitch, in a blue shirt and white shorts.",
    'about.code.label':
      "Programming",
    'about.code.text':
      "I worked as a full stack developer at a company, and now I do freelance and personal projects. I built this portfolio myself from scratch: the code, the design and every photo I chose.",
    'about.code.alt':
      "Hernán coding on a laptop, in profile, wearing glasses.",
    'about.people.label':
      "My people",
    'about.people.alt':
      "Hernán on the beach, crouching on the sand and hugging Pipa, a small white dog.",
    'about.people.text':
      "I love spending time with my family and friends, meeting people and talking. I'm very sociable, and it shows at events. I also love dogs: I have one called Pipa.",
    'about.values':
      "I take care of my image, but I know what defines a person is who they are. My priority is being a good person, staying true to myself and giving my best on every job.",
    'about.more':
      "Keep exploring",
    'about.stats.heading': 'Stats',
    'about.stats.age': 'Age',
    'about.stats.height': 'Height',
    'about.stats.weight': 'Weight',
    'about.stats.chest': 'Chest',
    'about.stats.waist': 'Waist',
    'about.stats.hip': 'Hip',
    'about.stats.clothing': 'Clothing size',
    'about.stats.shoe': 'Shoe size',
    'about.stats.hair': 'Hair',
    'about.stats.hairValue': 'Light brown',
    'about.stats.eyes': 'Eyes',
    'about.stats.eyesValue': 'Brown',
    'about.stats.base': 'Based in',
    'about.stats.languages': "Languages",
    'about.stats.languagesValue': "Spanish (native), English (advanced) and Portuguese",
    'about.stats.passport': "Passport",
    'about.stats.passportValue': "Italian (EU), in progress",
    'about.stats.pending': 'To be confirmed',
    'about.stats.ageUnit': '',

    // Work
    'work.title': 'Work | Hernán Alegresa',
    'work.description': 'Brands Hernán Alegresa has worked with as a model and content creator in Uruguay.',
    'work.statement': 'Nothing but presence.',
    'work.categories.modeling': 'Modeling',
    'work.categories.ecommerce': 'E-commerce',
    'work.categories.content': 'Content',
    'work.categories.events': 'Events',
    'work.detail.title': '{brand} | Hernán Alegresa',
    'work.detail.all': 'All work',
    'work.detail.gallery': 'Photos',
    'work.detail.backstage': 'Backstage',
    'work.detail.nav': 'More work',
    'work.detail.next': 'Next work',
    'work.photo.open': 'Enlarge photo',

    // Polaroids
    'polaroids.title': 'Polaroids | Hernán Alegresa',
    'polaroids.description': 'Polaroids of Hernán Alegresa for agencies and castings: face and body, front and profile.',
    'polaroids.shot.faceFront': 'Face, front',
    'polaroids.shot.faceProfile': 'Face, profile',
    'polaroids.shot.bodyFront': 'Full body, front',
    'polaroids.shot.halfProfile': 'Half body, profile',
    'polaroids.shot.torso': 'Torso',
    'polaroids.shot.halfFront': 'Half body, front',

    // Contact
    'contact.title': 'Contact | Hernán Alegresa',
    'contact.description': 'How to reach Hernán Alegresa, a model and content creator in Uruguay.',
    'contact.lead': 'For brands, agencies, photographers and castings.',
    'contact.instagram.label': 'Instagram',
    'contact.email.label': 'Email',
    'contact.email.pending': 'Coming soon',
    'contact.phone.label': 'Phone',
  },
} as const;

export type UiKey = keyof (typeof ui)['es'];
