/**
 * Configuración central - Dra. Eimy Stephany Pinto Arita
 * Medicina General | Rehabilitación Cardiopulmonar | Cardiología No Invasiva
 * Hospital La Católica - Costa Rica
 */

export const siteConfig = {
  // Información básica
  name: "Dra. Eimy Stephany Pinto Arita",
  shortName: "Dra. Eimy Pinto",
  doctorName: "Dra. Eimy Stephany Pinto Arita",
  doctorFirstName: "Eimy",
  doctorCode: "MED10809", // Código profesional del Colegio de Médicos

  // Descripción
  description:
    "Atención médica enfocada en prevención cardiometabólica, rehabilitación cardiopulmonar y estudios de cardiología no invasiva. Acompañamiento cercano y personalizado en Hospital La Católica, Costa Rica.",

  // Contacto
  contact: {
    phone: "+506 2246 3226",
    phone2: "+506 2246 3193",
    phoneLink: "tel:+50622463226",
    whatsapp: "+506 7012 4116",
    whatsappLink: "https://wa.me/50670124116",
    email: "eimypa@gmail.com",
    email2: "saludintegraldrapinto@gmail.com",
    hours: "Lunes a Viernes",
  },

  // Ubicación
  location: {
    hospital: "Hospital Internacional La Católica",
    hospitalAddress: "Calle Blancos, Goicoechea, San José, Costa Rica",
    consultorio: "Torre Médica, Piso 5, Consultorios 501/502",
    consultorioAddress: "San Antonio de Guadalupe, Goicoechea, frente a los Tribunales de Justicia",
    city: "San José",
    country: "Costa Rica",
    mapsUrl: "https://maps.google.com/?q=Torre+Médica+San+Antonio+Guadalupe+Goicoechea+Costa+Rica",
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
    degree: "Doctor en Medicina y Cirugía",
    university: "Universidad de Iberoamérica (UNIBE)",
    graduationPeriod: "Enero 2004 - diciembre 2010",
    specialty: "Estudios de cardiología no invasiva",
    diplomado: "Diplomado en prevención de riesgo cardiometabólico",
    certifications: [
      "Instructora de Masaje Infantil - Asociación Internacional de Masaje Infantil",
      "Prescriptora autorizada del método PNK para pérdida de peso",
    ],
    collegeCode: "MED10809",
    collegeStatus: "Activo",
    languages: ["Español", "English"],
  },

  // SEO
  seo: {
    title:
      "Dra. Eimy Pinto | Rehabilitación Cardiopulmonar y Salud Cardiometabólica en San José, Costa Rica",
    description:
      "Dra. Eimy Pinto en Hospital Internacional La Católica. Rehabilitación cardiopulmonar, salud cardiometabólica, Holter, MAPA y electrocardiograma con acompañamiento cercano en San José, Costa Rica.",
    keywords: [
      "rehabilitación cardiopulmonar Costa Rica",
      "rehabilitación pulmonar Costa Rica",
      "rehabilitación cardiaca Costa Rica",
      "rehabilitación cardiopulmonar San José",
      "salud cardiometabólica Costa Rica",
      "riesgo cardiometabólico Costa Rica",
      "prevención cardiometabólica",
      "valoración cardiometabólica",
      "Holter Costa Rica",
      "Holter 24 horas",
      "MAPA 24 horas Costa Rica",
      "monitoreo ambulatorio de presión arterial",
      "electrocardiograma Costa Rica",
      "electrocardiograma con interpretación",
      "cardiología no invasiva Costa Rica",
      "análisis de composición corporal",
      "Dra. Eimy Pinto",
      "médico Hospital La Católica",
      "médico San José Costa Rica",
      "Hospital Internacional La Católica",
      "Goicoechea",
      "Guadalupe",
    ],
  },

  // Navegación
  navigation: [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Rehabilitación", href: "#rehabilitacion" },
    { label: "Sobre mí", href: "#sobre" },
    { label: "FAQ", href: "#faq" },
    { label: "Contacto", href: "#contacto" },
  ],

  // Servicios principales (tres pilares)
  mainServices: [
    {
      id: "rehabilitacion",
      name: "Rehabilitación Cardiopulmonar",
      shortDescription:
        "Acompañamiento en tu recuperación cardiovascular y pulmonar con un enfoque personalizado.",
    },
    {
      id: "cardiometabolico",
      name: "Salud Cardiometabólica",
      shortDescription:
        "Prevención y control de factores de riesgo cardiovascular y metabólico.",
    },
    {
      id: "cardiologia",
      name: "Cardiología No Invasiva",
      shortDescription:
        "Estudios cardiovasculares precisos: Holter, MAPA, electrocardiograma.",
    },
  ],

  // Estudios cardiovasculares
  cardiacStudies: [
    {
      id: "ecg",
      name: "Electrocardiograma",
      description: "Electrocardiograma (ECG) con interpretación",
      variant: "Electrocardiograma + Consulta disponible",
    },
    {
      id: "holter",
      name: "Holter",
      description: "Holter 24 horas - hasta 30 días",
      devices: ["Spacelabs", "Novi"],
    },
    {
      id: "oxi-holter",
      name: "Oxi Holter",
      description: "Oxi Holter 24 horas - Monitoreo de oximetría y ritmo cardíaco",
      devices: ["Novi"],
    },
    {
      id: "mapa",
      name: "MAPA",
      description: "Monitoreo Ambulatorio de Presión Arterial - 24 horas",
      devices: ["Spacelabs"],
    },
    {
      id: "eco-domicilio",
      name: "Ecocardiograma a domicilio",
      description: "Estudio ecocardiográfico en la comodidad de tu hogar",
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
      "Prescripción de ejercicio con enfoque en adulto mayor",
    ],
    prevención: [
      "Control metabólico",
      "Análisis de composición corporal",
      "Valoración de fuerza muscular",
      "Chequeo médico general",
      "Valoración médica anual",
      "Valoración de laboratorios",
      "Valoración de gabinetes",
      "Promoción de estilos de vida saludable",
    ],
    cardiovasculares: [
      "Electrocardiograma con interpretación",
      "Electrocardiograma + consulta",
      "Holter 24 horas - 30 días",
      "Oxi Holter 24 horas",
      "MAPA 24 horas",
      "Ecocardiograma a domicilio",
    ],
    procedimientos: [
      "Dictamen médico",
      "Dictamen para licencia",
      "Papanicolau + consulta",
      "Retiro de puntos",
      "Sutura de heridas menores",
    ],
    tecnologías: [
      "Dispositivo Novi",
      "Prueba de farmacogenómica Migenesys",
      "Nursing Monitor / monitoreo de signos vitales",
    ],
    otros: [
      "Ferias de salud",
      "Capacitaciones en temas de salud cardiovascular",
    ],
  },

  // Imágenes
  images: {
    hero: "/images/services/pulmonar2.webp", // Imagen de rehabilitación pulmonar
    about: "/images/doctor/img1.2.png", // Retrato con bata blanca
    consultation: "/images/doctor/img1.1.png", // Consulta con paciente
    office: "/images/doctor/img1.1.png", // En escritorio del consultorio
    // Imágenes de servicios
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
