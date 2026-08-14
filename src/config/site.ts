/**
 * Configuracion central - Dra. Eimy Stephany Pinto Arita
 * Medicina General | Rehabilitacion Cardiopulmonar | Cardiologia No Invasiva
 * Hospital La Catolica - Costa Rica
 */

export const siteConfig = {
  // Informacion basica
  name: "Dra. Eimy Stephany Pinto Arita",
  shortName: "Dra. Eimy Pinto",
  doctorName: "Dra. Eimy Stephany Pinto Arita",
  doctorFirstName: "Eimy",
  doctorCode: "MED10809", // Codigo profesional del Colegio de Medicos

  // Descripcion
  description:
    "Atencion medica enfocada en prevencion cardiometabolica, rehabilitacion cardiopulmonar y estudios de cardiologia no invasiva. Acompanamiento cercano y personalizado en Hospital La Catolica, Costa Rica.",

  // Contacto
  contact: {
    phone: "+506 2246 3226",
    phone2: "+506 2246 3193",
    phoneLink: "tel:+50622463226",
    whatsapp: "+506 2246 3226",
    whatsappLink: "https://wa.me/50622463226",
    email: "eimypa@gmail.com",
    email2: "saludintegraldrapinto@gmail.com",
    hours: "Lunes a Viernes",
  },

  // Ubicacion
  location: {
    hospital: "Hospital Internacional La Catolica",
    hospitalAddress: "Calle Blancos, Goicoechea, San Jose, Costa Rica",
    consultorio: "Torre Medica, Piso 5, Consultorios 501/502",
    consultorioAddress: "San Antonio de Guadalupe, Goicoechea, frente a los Tribunales de Justicia",
    city: "San Jose",
    country: "Costa Rica",
    mapsUrl: "https://maps.google.com/?q=Torre+Medica+San+Antonio+Guadalupe+Goicoechea+Costa+Rica",
    wazeUrl: "https://waze.com/ul?ll=9.9406,-84.0536&navigate=yes",
    mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1965.2!2d-84.0550!3d9.9406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e36e44f5d5f5%3A0x2c8c8c8c8c8c8c8c!2sTribunales%20de%20Justicia%20Goicoechea!5e0!3m2!1ses!2scr!4v1700000000000",
  },

  // Horarios - PLACEHOLDER
  schedule: {
    weekdays: "[SCHEDULE]",
    saturday: "[SCHEDULE]",
    sunday: "[SCHEDULE]",
  },

  // Enlaces externos - PLACEHOLDERS
  links: {
    googleReviews: "[GOOGLE_REVIEWS_URL]",
    googleBusiness: "[GOOGLE_BUSINESS_URL]",
    instagram: "[INSTAGRAM_URL]",
    facebook: "[FACEBOOK_URL]",
  },

  // Credenciales
  credentials: {
    degree: "Doctor en Medicina y Cirugia",
    university: "Universidad de Iberoamerica (UNIBE)",
    graduationPeriod: "Enero 2004 - diciembre 2010",
    specialty: "Estudios de cardiologia no invasiva",
    diplomado: "Diplomado en prevencion de riesgo cardiometabolico",
    certifications: [
      "Instructora de Masaje Infantil - Asociacion Internacional de Masaje Infantil",
      "Prescriptora autorizada del metodo PNK para perdida de peso",
    ],
    collegeCode: "MED10809",
    collegeStatus: "Activo",
    languages: ["Espanol", "English"],
  },

  // SEO
  seo: {
    title:
      "Dra. Eimy Pinto | Rehabilitacion Cardiopulmonar y Salud Cardiometabolica en San Jose, Costa Rica",
    description:
      "Dra. Eimy Pinto en Hospital Internacional La Catolica. Rehabilitacion cardiopulmonar, salud cardiometabolica, Holter, MAPA y electrocardiograma con acompanamiento cercano en San Jose, Costa Rica.",
    keywords: [
      "rehabilitacion cardiopulmonar Costa Rica",
      "rehabilitacion pulmonar Costa Rica",
      "rehabilitacion cardiaca Costa Rica",
      "rehabilitacion cardiopulmonar San Jose",
      "salud cardiometabolica Costa Rica",
      "riesgo cardiometabolico Costa Rica",
      "prevencion cardiometabolica",
      "valoracion cardiometabolica",
      "Holter Costa Rica",
      "Holter 24 horas",
      "MAPA 24 horas Costa Rica",
      "monitoreo ambulatorio de presion arterial",
      "electrocardiograma Costa Rica",
      "electrocardiograma con interpretacion",
      "cardiologia no invasiva Costa Rica",
      "analisis de composicion corporal",
      "Dra. Eimy Pinto",
      "medico Hospital La Catolica",
      "medico San Jose Costa Rica",
      "Hospital Internacional La Catolica",
      "Goicoechea",
      "Guadalupe",
    ],
  },

  // Navegacion
  navigation: [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Rehabilitacion", href: "#rehabilitacion" },
    { label: "Sobre mi", href: "#sobre" },
    { label: "FAQ", href: "#faq" },
    { label: "Contacto", href: "#contacto" },
  ],

  // Servicios principales (tres pilares)
  mainServices: [
    {
      id: "rehabilitacion",
      name: "Rehabilitacion Cardiopulmonar",
      shortDescription:
        "Acompanamiento en tu recuperacion cardiovascular y pulmonar con un enfoque personalizado.",
    },
    {
      id: "cardiometabolico",
      name: "Salud Cardiometabolica",
      shortDescription:
        "Prevencion y control de factores de riesgo cardiovascular y metabolico.",
    },
    {
      id: "cardiologia",
      name: "Cardiologia No Invasiva",
      shortDescription:
        "Estudios cardiovasculares precisos: Holter, MAPA, electrocardiograma.",
    },
  ],

  // Estudios cardiovasculares
  cardiacStudies: [
    {
      id: "ecg",
      name: "Electrocardiograma",
      description: "Electrocardiograma (ECG) con interpretacion",
      variant: "Electrocardiograma + Consulta disponible",
    },
    {
      id: "holter",
      name: "Holter",
      description: "Holter 24 horas - hasta 30 dias",
      devices: ["Spacelabs", "Novi"],
    },
    {
      id: "oxi-holter",
      name: "Oxi Holter",
      description: "Oxi Holter 24 horas - Monitoreo de oximetria y ritmo cardiaco",
      devices: ["Novi"],
    },
    {
      id: "mapa",
      name: "MAPA",
      description: "Monitoreo Ambulatorio de Presion Arterial - 24 horas",
      devices: ["Spacelabs"],
    },
    {
      id: "eco-domicilio",
      name: "Ecocardiograma a domicilio",
      description: "Estudio ecocardiografico en la comodidad de tu hogar",
    },
  ],

  // Servicios completos
  services: {
    consultas: [
      "Consulta",
      "Consulta de Medicina General",
      "Consulta de primera vez",
      "Consulta de seguimiento",
      "Consulta a domicilio",
      "Videoconsulta",
      "Prescripcion de ejercicio con enfoque en adulto mayor",
    ],
    prevencion: [
      "Control metabolico",
      "Analisis de composicion corporal",
      "Valoracion de fuerza muscular",
      "Chequeo medico general",
      "Valoracion medica anual",
      "Valoracion de laboratorios",
      "Valoracion de gabinetes",
      "Promocion de estilos de vida saludable",
    ],
    cardiovasculares: [
      "Electrocardiograma con interpretacion",
      "Electrocardiograma + consulta",
      "Holter 24 horas - 30 dias",
      "Oxi Holter 24 horas",
      "MAPA 24 horas",
      "Ecocardiograma a domicilio",
    ],
    procedimientos: [
      "Dictamen medico",
      "Dictamen para licencia",
      "Papanicolau + consulta",
      "Retiro de puntos",
      "Sutura de heridas menores",
    ],
    tecnologias: [
      "Dispositivo Novi",
      "Prueba de farmacogenomica Migenesys",
      "Nursing Monitor / monitoreo de signos vitales",
    ],
    otros: [
      "Ferias de salud",
      "Capacitaciones en temas de salud cardiovascular",
    ],
  },

  // Imagenes
  images: {
    hero: "/images/doctor/img4.png", // Foto profesional en consultorio
    about: "/images/doctor/img1.2.png", // Retrato con bata blanca
    consultation: "/images/doctor/img4.png", // Consulta con paciente
    office: "/images/doctor/img1.1.png", // En escritorio del consultorio
    // Imagenes de servicios
    rehabilitacion: "/images/services/pulmonar2.webp",
    rehabilitacion2: "/images/services/pulmonar2.webp",
    rehabilitacion3: "/images/services/terapiapulmonar.webp",
    cardiometabolico: "/images/services/cardiometabolico1.webp",
    // Placeholders pendientes
    cardiologia: "CARDIOLOGIA_NO_INVASIVA_IMAGE",
    holter: "HOLTER_IMAGE",
    mapa: "MAPA_IMAGE",
    ecg: "ECG_IMAGE",
  },
} as const;

export type SiteConfig = typeof siteConfig;
