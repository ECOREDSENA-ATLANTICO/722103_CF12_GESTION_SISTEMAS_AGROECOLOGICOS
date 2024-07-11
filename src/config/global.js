export default {
  global: {
    componenteFormativo: 'Propagación vegetal',
    descripcionCurso:
      'En este componente formativo, se abordan temas que le permitirán implementar métodos de propagación vegetal, teniendo en cuenta sustratos, técnicas de desinfección, tipos de propagación, manejo de plagas, metodologías <i> in vitro</i>, entre otros, según principios agroecológicos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Sustratos y medios de enraizamiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de sustrato',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Herramientas, equipos y técnicas',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Desinfectantes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Técnicas y preparación',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Normatividad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Tipo de material vegetal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Sexual',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Propagación asexual',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Tratamientos',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Biotecnología para propagación vegetal',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Manejo Ecológico de Plagas y Enfermedades (MEPE)',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/722103_CF12-DU.pdf',
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
  complementario: [
    {
      tema: '1. Sustratos y medios de enraizamiento',
      referencia:
        'Escuela Agrícola Panamericana. (2012). Manual de establecimiento de cultivos. Programa de Manejo Integrado de Plagas en América Central.',
      tipo: 'Capítulo de libro',
      link: 'downloads/Modulo_4_Manual_Establecimiento_de_Cultivos.pdf',
    },
    {
      tema: '1. Sustratos y medios de enraizamiento',
      referencia:
        'Osuna, H., Osuna, A. y Fierro, A. (2016). Manual de propagación de plantas superiores. Casa abierta al tiempo.',
      tipo: 'Libro',
      link: 'downloads/manual_plantas.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Angiosperma',
      significado: 'plantas que tienen las semillas encerradas en un ovario.',
    },
    {
      termino: 'Autótrofa',
      significado:
        'plantas que poseen pigmentos que les permiten sintetizar carbohidratos a partir del dióxido de carbono.',
    },
    {
      termino: 'Gametofito',
      significado:
        'generación de células haploides, que produce células reproductoras sexuales, las gametas.',
    },
    {
      termino: 'Gimnosperma',
      significado:
        'planta vascular, principalmente árbol, cuyas semillas se encuentran al descubierto.',
    },
    {
      termino: 'Semilla',
      significado: 'conforma el fruto y da origen a la planta.',
    },
    {
      termino: 'Material vegetativo',
      significado:
        'semilla, parte de planta o planta viva destinada a ser plantada.',
    },
  ],
  referencias: [
    {
      referencia:
        'Baysal-Gurel, F. (2016). Selección y uso de desinfectantes para la producción en viveros. Universidad Estatal de Tennessee.',
      link:
        'https://www.tnstate.edu/extension/spanish_nursery_publications/Disinfectant%20factsheet%20%20Selecci%C3%B3n%20y%20uso%20de%20desinfectantes%20para%20la%20producci%C3%B3n%20en%20viveros.pdf',
    },
    {
      referencia:
        'Brechelt, A. (2004). El manejo ecológico de plagas y enfermedades. Red de Acción en Plaguicidas y sus Alternativas para América Latina [RAP-AL].',
      link:
        'https://www.academia.edu/39859054/El_Manejo_Ecol%C3%B3gico_de_Plagas_y_Enfermedades',
    },
    {
      referencia:
        'Quiñoes, J. (2015). Guía de técnicas, métodos y procedimientos de reproducción asexual o vegetativa de las plantas. Centro para el Desarrollo Agropecuario y Forestal [CEDAF]. ',
      link:
        'https://www.competitividad.org.do/wp-content/uploads/2016/05/Gu%C3%ADa-de-t%C3%A9cnicas-m%C3%A9todos-y-procedimientos-de-reproducci%C3%B3n-asexual-o-vegetativa-de-las-plantas.pdf',
    },
    {
      referencia:
        'Willan, R. (1991). Guía para la manipulación de semillas forestales. Organización de las Naciones Unidas para la Agricultura y la Alimentación.',
      link: 'https://www.fao.org/3/ad232s/ad232s00.htm#TOC',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Tatiana Villamil',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel De Jesús Paredes Maestre',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Desarrollo Curricular',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },

        {
          nombre: 'Diana Julieth Núñez Ortegón',
          cargo: 'Experta Temática',
          centro: 'Centro de Comercio y Servicio - Regional Tolima',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Diseñadora instruccional',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro: 'Centro de Diseño y Metrología - Distrito Capital',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrector de estilo',
          centro: 'Centro de Diseño y Metrología - Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nelson Vera',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Alexander Acosta',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Carmen Martínez',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Rafael Pérez Meriño',
          cargo: 'Desarrollo Fullstack ',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Eulices Orduz Amézquita',
          cargo: 'Diseño de contenidos digitales',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Fabian Cuartas',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Gilberto Herrera',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Jairo Valencia Ebrat',
          cargo: 'Validación de recursos digitales ',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
