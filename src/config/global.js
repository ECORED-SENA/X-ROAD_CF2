export default {
  global: {
    componenteFormativo: 'Marco de Interoperabilidad para el Estado colombiano',
    descripcionCurso:
      'La interoperabilidad ha funcionado como una herramienta de gran alcance en los procesos de intercambio de información rápida, segura y eficiente; la importancia de su aplicación debe tener un alcance tanto a nivel local, interinstitucional, sectorial, nacional o internacional y orientado a todos los involucrados en gestionar las necesidades estratégicas de las entidades favoreciendo así la transformación del Estado colombiano para que funcione como una sola institución que le brinde a los ciudadanos información oportuna, trámites ágiles y mejores servicios.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Herramienta que acompaña a las entidades en el desarrollo de sus capacidades de intercambio de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Antecedentes y Marco Legal',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Colaboración entre Entidades para el Intercambio de la Información en la Administración Pública',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Objetivos del Marco de Interoperabilidad',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: '¿Quiénes deben usar el marco de interoperabilidad?',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Áreas de Aplicación de la Interoperabilidad',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Modelo Conceptual de Interoperabilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Gobernanza de la Interoperabilidad',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Principios - Proceso de priorización de servicios de intercambio de información',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Dominios - Direccionamiento del proceso de intercambio de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Dominio 1: político-legal',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.1.1',
            titulo: 'Lineamientos y diagrama de flujo',
            hash: 't_4_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.1.2',
            titulo: 'Actividades',
            hash: 't_4_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Domino 2: organizacional',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2.1',
            titulo: 'Lineamientos y diagrama de flujo',
            hash: 't_4_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2.2',
            titulo: 'Actividades',
            hash: 't_4_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Domino 3: semántico',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3.1',
            titulo: 'Actividades',
            hash: 't_4_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Domino 4: técnico',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4.1',
            titulo: 'Lineamientos y diagrama de flujo',
            hash: 't_4_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4.2',
            titulo: 'Actividades',
            hash: 't_4_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo:
          'Modelo de Madurez - Pasos para lograr implementar y lograr la madurez',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: [
          'Daniel Fernando Portilla Arciniegas',
          'José Ricardo Aponte Oviedo',
        ],
        cargo: 'Expertos temáticos',
        centro: 'MINTIC',
      },
      {
        nombre: 'Sergio Arturo Medina Castillo',
        cargo: 'Diseñador instruccional',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
      },
      {
        nombre: 'Vilma Lucia Perilla M',
        cargo: 'Revisora y evaluadora metodológica',
        centro: 'Centro de Gestión Industrial',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Corrección de estilo',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
      },
      {
        nombre: ['Eulises Orduz Amezquita', 'Luis Gabriel Urueta Alvarez'],
        cargo: 'Diseño Web y Producción audiovisual',
      },
      {
        nombre: 'Ricardo Alfonso González Vargas',
        cargo: 'Desarrollo front-End',
      },
      {
        nombre: 'Maria Isabel Román Rueda',
        cargo: 'Validación de diseño y contenido',
      },
      {
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: ['Validación y vinculación en plataforma LMS'],
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Atzori, L, Iera, A. y Morabito, G, (2017, marzo 1) Comprensión de Internet de las cosas: definición, potencialidades y papel social de un paradigma en rápida evolución pag. 122-140. ',
      link:
        'https://www.sciencedirect.com/science/article/abs/pii/S1570870516303316',
    },
    {
      referencia:
        'BBC NEWS. (2014, marzo 10). El peligro de usar wi-fi en lugares públicos.',
      link:
        'https://www.bbc.com/mundo/noticias/2014/03/140310_wifi_internet_hotspots_rg',
    },
    {
      referencia:
        'Decreto 620 de 2020. [Presidencia de la Republica]. Por el cual se subroga el título 17 de la parte 2 del libro 2 del Decreto 1078 de 2015, para reglamentarse parcialmente los artículos 53, 54, 60, 61 Y 64 de la Ley 1437 de 2011, los literales e, j y literal a del parágrafo 2 del artículo 45 de la Ley 1753 de 2015, el numeral 3 del artículo 147 de la Ley 1955 de 2019, y el artículo 9 del Decreto 2106 de 2019, estableciendo los lineamientos generales en el uso y operación de los servicios ciudadanos digitales". 2 de mayo de 2020.',
    },
    {
      referencia:
        'Gobierno electrónico. Estado, ciudadanía y democracia en Internet, Julie Massal, Carlos Germán Sandoval, Revista Análisis político nº 68, Bogotá, enero-abril, 2010: págs. 3-25',
    },
    {
      referencia:
        'Ley 1341 de 2009. [Congreso de la Republica]. Por la cual se definen principios y conceptos sobre la sociedad de la información y la organización de las Tecnologías de la Información y las Comunicaciones –TIC–, se crea la Agencia Nacional de Espectro y se dictan otras disposiciones. Julio 30 de 2009',
    },
    {
      referencia:
        'Manual de Gobierno digital. Implementación de la Política de Gobierno Digital Decreto 1008 de 2018 (Compilado en el Decreto 1078 de 2015, capítulo 1, título 9, parte 2, libro 2).',
    },
    {
      referencia:
        'Marco de la Transformación Digital para el Estado Colombiano. MinTIC, (Julio 2020).',
    },
  ],
  glosario: [
    {
      termino: 'Servicios ciudadanos digitales',
      significado:
        'es el conjunto de soluciones y procesos transversales que brindan al Estado capacidades y eficiencias para su transformación digital, para lograr una adecuada interacción del ciudadano con el Estado, garantizando el derecho a la utilización de medios electrónicos ante la administración pública.',
    },
    {
      termino: 'Servicios ciudadanos digitales base',
      significado:
        'son los considerados como servicios de interoperabilidad, autenticación digital y carpeta ciudadana digital.',
    },
    {
      termino: 'Servicios ciudadanos digitales especiales',
      significado:
        'son aquellos que brindan soluciones que por sus características realizan nuevas ofertas de valor y son adicionales a los servicios ciudadanos digitales base, o bien, corresponden a innovaciones que realizan los prestadores de servicio a partir de la integración a los servicios ciudadanos digitales base, esto bajo un esquema coordinado por el articulador.',
    },
    {
      termino: 'Servicio de intercambio de información',
      significado:
        'recurso tecnológico que mediante el uso de un conjunto de protocolos y estándares permite el intercambio de información. “Es una representación lógica de una actividad de negocio repetible que tiene un resultado específico (por ejemplo, verificar el crédito del cliente, proporcionar datos del clima, consolidar informes de perforación) y que tiene las siguientes características: autocontenido, puede estar compuesto por otros servicios y es una “caja negra” para los consumidores del servicio”',
    },
    {
      termino: 'Trámite',
      significado:
        'conjunto o serie de pasos o acciones reguladas por el Estado, que deben efectuar los usuarios para adquirir un derecho o cumplir con una obligación prevista o autorizada por la ley. El trámite se inicia cuando ese particular activa el aparato público a través de una petición o solicitud expresa y termina (como trámite) cuando la administración pública se pronuncia sobre éste, aceptando o denegando la solicitud.',
    },
  ],
  complementario: [
    {
      texto:
        'BIC., (2015). “2 minutos para entender el desarrollo sostenible – Spanish”',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      texto:
        'Arnold, M. y Osorio, F., (1998). Introducción a los conceptos básicos de la Teoría general de sistemas. Cinta moebio 3: 40-49',
      tipo: 'Página web',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto:
        'Balboa, C. y Dominguez, M. (2014). Economía circular como marco para el ecodiseño: el modelo ECO-3. Informador Técnico (Colombia) Volumen 78, No. 1. Pág. 52-90.',
      tipo: 'Artículo científico',
      link: 'https://www.google.com/',
    },
    {
      texto: 'Economía de Rosquilla. (s.f.).',
      tipo: 'Página web',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto: '2 minutos para entender el desarrollo sostenible – Spanish',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
}
