/**
 * Contenido centralizado para el website de la Dra. Eimy Pinto
 * Soporte para internacionalizacion (i18n) - Español e Ingles
 */

export const content = {
  es: {
    // Language
    language: {
      es: "Español",
      en: "English",
    },

    // Header
    header: {
      cta: "Agendar una Cita",
      mobileCta: "Agendar Cita",
      tagline: "Medicina con Empatía",
      nav: {
        services: "Servicios",
        rehabilitation: "Rehabilitación",
        cardiometabolic: "Cardiometabolico",
        about: "Sobre mi",
        faq: "FAQ",
        contact: "Contacto",
      },
    },

    // Hero
    hero: {
      badge: "Hospital Internacional La Católica",
      title: "Rehabilitación cardiopulmonar y salud cardiometabólica",
      titleHighlight: "con acompañamiento cercano.",
      subtitle:
        "Atención médica de la Dra. Eimy Pinto enfocada en rehabilitación cardiopulmonar, prevención cardiometabólica y estudios de cardiologia no invasiva en San Jose, Costa Rica.",
      ctaPreText: "Da el primer paso hacia tu bienestar cardiovascular.",
      primaryCta: "Agendar una cita",
      primaryCtaMicrocopy:
        "Atención personalizada • Acompañamiento cercano • Hospital La Católica",
      secondaryCta: "Conocer servicios",
      trustBadge1: "Médico y Cirujano",
      trustBadge2: "Codigo MED10809",
      trustBadge3: "Español / English",
    },

    // Tres pilares principales
    pillars: {
      badge: "Especialidades Médicas",
      title: "Tres áreas de enfoque para tu salud cardiovascular.",
      subtitle:
        "Rehabilitación, prevención cardiometabólica y diagnóstico cardiovascular con acompañamiento médico cercano.",
      items: [
        {
          number: "01",
          title: "Rehabilitación Cardiopulmonar",
          description:
            "Programa de rehabilitación cardiaca y pulmonar para acompañarte en tu recuperacion cardiovascular. Recupera la confianza en tu cuerpo y mejora tu calidad de vida.",
          cta: "Mas información",
        },
        {
          number: "02",
          title: "Salud Cardiometabólica",
          description:
            "Valoración cardiometabólica integral para evaluar, prevenir y controlar factores de riesgo cardiovascular. Analisis de composición corporal y seguimiento personalizado.",
          cta: "Mas información",
        },
        {
          number: "03",
          title: "Cardiologia No Invasiva",
          description:
            "Estudios cardiovasculares precisos: Holter de 24 horas, MAPA de presión arterial y electrocardiograma con interpretacion. Diagnóstico claro sin procedimientos invasivos.",
          cta: "Mas información",
        },
      ],
    },

    // Rehabilitación Cardiopulmonar
    rehabilitation: {
      badge: "Rehabilitación Cardiopulmonar en Costa Rica",
      title: "Recuperarte también significa volver a sentir confianza en tu cuerpo.",
      subtitle:
        "La rehabilitación cardiopulmonar va mas alla de lo fisico. Es un programa de rehabilitación cardiaca y pulmonar que te ayuda a recuperar la seguridad, la capacidad y la calidad de vida que mereces.",
      intro:
        "Si estas experimentando dificultad para recuperar tu capacidad física, fatiga, falta de aire, menor tolerancia al ejercicio o inseguridad al retomar actividad física, un programa de rehabilitación cardiopulmonar puede ayudarte. La Dra. Eimy Pinto ofrece acompañamiento cercano en San Jose, Costa Rica.",
      benefits: [
        {
          title: "Rehabilitación cardiaca guiada",
          description:
            "Acompañamiento médico personalizado en cada etapa de tu recuperacion cardiovascular.",
        },
        {
          title: "Seguridad al moverte",
          description:
            "Recupera la confianza para retomar tus actividades con tranquilidad.",
        },
        {
          title: "Mejor calidad de vida",
          description:
            "Mejora tu capacidad física, pulmonar y tu bienestar emocional.",
        },
        {
          title: "Seguimiento continuo",
          description:
            "Monitoreo constante de tu progreso con ajustes personalizados.",
        },
      ],
      ctaPreText: "Tu recuperacion cardiovascular merece atención personalizada.",
      cta: "Consultar sobre rehabilitación cardiopulmonar",
      ctaMicrocopy:
        "Evaluación personalizada • Acompañamiento cercano • Recuperacion progresiva",
    },

    // Salud Cardiometabólica
    cardiometabolic: {
      badge: "Salud Cardiometabólica en Costa Rica",
      title: "La prevención cardiometabólica comienza por entender tus factores de riesgo.",
      subtitle:
        "Con el Diplomado en prevención de riesgo cardiometabolico, la Dra. Eimy Pinto ofrece una valoración cardiometabólica integral para identificar y controlar factores que pueden afectar tu salud cardiovascular.",
      intro:
        "Si presentas o quieres prevenir presión arterial alta, diabetes, sobrepeso, alteraciones metabolicas, sedentarismo o factores de riesgo cardiovascular, una valoración cardiometabólica puede darte claridad y un plan de accion personalizado.",
      process: {
        title: "El proceso es sencillo:",
        steps: ["Evaluar", "Entender", "Prevenir", "Acompañar"],
      },
      services: [
        "Control metabolico integral",
        "Analisis de composición corporal",
        "Valoración cardiometabólica",
        "Seguimiento personalizado",
        "Prevención de riesgo cardiometabolico",
      ],
      credential:
        "Diplomado en prevención de riesgo cardiometabolico",
      ctaPreText: "Entiende tu riesgo cardiometabolico. Toma el control de tu salud.",
      cta: "Agendar valoración cardiometabólica",
      ctaMicrocopy:
        "Evaluación integral • Plan personalizado • Seguimiento continuo",
    },

    // Cardiologia No Invasiva
    cardiology: {
      badge: "Cardiologia No Invasiva en Costa Rica",
      title: "Estudios cardiovasculares precisos para respuestas claras.",
      subtitle:
        "Diagnóstico cardiovascular sin procedimientos invasivos en San Jose, Costa Rica. Electrocardiograma, Holter y MAPA con interpretacion médica y acompañamiento cercano.",
      studies: [
        {
          id: "ecg",
          title: "Electrocardiograma (ECG) con interpretacion",
          description:
            "Evaluación de la actividad eléctrica del corazón con interpretacion médica. Disponible electrocardiograma + consulta para una valoración completa.",
          cta: "Agendar electrocardiograma",
        },
        {
          id: "holter",
          title: "Monitoreo Holter",
          description:
            "Holter de 24 horas hasta 30 dias para monitoreo continuo del ritmo cardiaco. Dispositivos Spacelabs y Novi disponibles para capturar eventos que no ocurren en estudios cortos.",
          cta: "Consultar sobre Holter",
        },
        {
          id: "oxi-holter",
          title: "Oxi Holter 24 horas",
          description:
            "Monitoreo combinado de oximetría y ritmo cardiaco durante 24 horas. Permite evaluar simultaneamente la saturacion de oxigeno y la actividad eléctrica del corazón.",
          cta: "Consultar sobre Oxi Holter",
        },
        {
          id: "mapa",
          title: "MAPA — Monitoreo Ambulatorio de Presión Arterial",
          description:
            "MAPA de 24 horas para evaluar variaciones de presión arterial a lo largo del dia. Equipo Spacelabs para mediciones precisas.",
          cta: "Agendar MAPA",
        },
        {
          id: "eco",
          title: "Ecocardiograma a domicilio",
          description:
            "Estudio ecocardiográfico en la comodidad de tu hogar para pacientes que requieren atención domiciliaria.",
          cta: "Consultar disponibilidad",
        },
      ],
      ctaPreText: "Obtén respuestas claras sobre tu salud cardiovascular.",
      cta: "Agendar estudio cardiovascular",
    },

    // Servicios
    services: {
      badge: "Servicios Médicos",
      title: "Atención médica integral en Hospital La Católica.",
      subtitle:
        "Desde consultas hasta estudios cardiovasculares especializados, con el mismo acompañamiento cercano y empatico.",
      categories: [
        {
          title: "Consultas Médicas",
          description: "En cada consulta se evalua al paciente de manera integral: identificando factores de riesgo cardiometabolicos, analisis de peso y composición corporal, valoración de fuerza muscular y promocion de estilos de vida saludable. Con un enfoque biológico y psicosocial, utilizando equipos de medicina de precision.",
          items: [
            "Consulta de Medicina General",
            "Consulta de primera vez",
            "Consulta de seguimiento",
            "Consulta médica a domicilio",
            "Videoconsulta",
            "Prescripcion de ejercicio con enfoque en adulto mayor",
          ],
        },
        {
          title: "Prevención Cardiometabólica",
          items: [
            "Control metabolico integral",
            "Analisis de composición corporal",
            "Valoración de fuerza muscular",
            "Chequeo médico general",
            "Valoración cardiometabólica anual",
            "Valoración de laboratorios",
            "Promocion de estilos de vida saludable",
          ],
        },
        {
          title: "Estudios de Cardiologia No Invasiva",
          items: [
            "Electrocardiograma (ECG) con interpretacion",
            "Monitoreo Holter 24 horas - hasta 30 dias",
            "Oxi Holter 24 horas",
            "MAPA — Monitoreo de Presión Arterial 24 horas",
            "Ecocardiograma a domicilio",
          ],
        },
        {
          title: "Procedimientos",
          items: [
            "Dictamen médico",
            "Dictamen para licencia",
            "Papanicolau + consulta",
            "Retiro de puntos",
            "Sutura de heridas menores",
          ],
        },
        {
          title: "Otros Servicios",
          items: [
            "Ferias de salud",
            "Capacitaciones en temas de salud cardiovascular",
          ],
        },
      ],
      ctaPreText: "Encuentra el servicio que necesitas.",
      cta: "Agendar una cita",
    },

    // Sobre la doctora
    about: {
      badge: "Médico en San Jose, Costa Rica",
      name: "Dra. Eimy Stephany Pinto Arita",
      tagline: "Medicina con tiempo para escucharte.",
      credentials: "Doctor en Medicina y Cirugía • Diplomado en Prevención de Riesgo Cardiometabolico • Estudios de Cardiologia No Invasiva",
      intro:
        "Amo mi profesion y siempre trato de dar lo mejor de mi con cada paciente.",
      paragraphs: [
        "Una buena consulta médica también significa escuchar, comprender, explicar, orientar, responder preguntas, acompañar y dar tranquilidad.",
        "Mi objetivo es que cada paciente salga de la consulta con claridad sobre su situacion, un plan concreto y la tranquilidad de sentirse acompañado en su proceso de salud. Atiendo en Hospital Internacional La Católica, en Goicoechea, San Jose.",
      ],
      quote:
        "Entender que esta pasando con tu salud también puede darte tranquilidad.",
      quoteAttribution: "— Dra. Eimy Pinto, sobre su filosofia de atención",
      education: {
        title: "Formación",
        degree: "Doctor en Medicina y Cirugía",
        university: "Universidad de Iberoamerica (UNIBE)",
        period: "Enero 2004 - diciembre 2010",
      },
      specialty: {
        title: "Especialización",
        items: [
          "Diplomado en prevención de riesgo cardiometabolico",
          "Estudios de cardiologia no invasiva",
        ],
      },
      certifications: {
        title: "Certificaciones adicionales",
        items: [
          "Instructora de Masaje Infantil - Asociación Internacional de Masaje Infantil",
          "Prescriptora autorizada del método PNK para pérdida de peso",
        ],
      },
      college: {
        title: "Colegio de Médicos y Cirujanos de Costa Rica",
        code: "MED10809",
        status: "Activo",
        type: "Médico y Cirujano",
      },
      languages: ["Español", "English"],
      ctaPreText: "Agenda tu cita y experimenta una atención diferente.",
      cta: "Agendar con la Dra. Pinto",
      ctaMicrocopy: "Atención personalizada • Tiempo para escucharte • Hospital La Católica",
    },

    // Trust / Por que elegirme
    trust: {
      badge: "Medicina con Empatía",
      title: "Tu salud merece respuestas claras y un acompañamiento cercano.",
      subtitle:
        "La Dra. Eimy Pinto se diferencia por tomarse el tiempo para escuchar, explicar y acompañar a cada paciente.",
      features: [
        {
          title: "Escucha activa",
          description:
            "Cada consulta comienza escuchando. Tu historia, tus preocupaciones y tus metas dan forma al plan de tratamiento.",
        },
        {
          title: "Explicaciones claras",
          description:
            "Entiendes que esta pasando con tu salud y cuales son las opciones disponibles para ti.",
        },
        {
          title: "Tiempo sin prisas",
          description:
            "Las citas se programan para que ningún tema quede sin abordar.",
        },
        {
          title: "Acompañamiento continuo",
          description:
            "Seguimiento personalizado en cada etapa de tu tratamiento o rehabilitación.",
        },
      ],
      ctaPreText:
        "Una consulta también debe darte el espacio para preguntar, entender y sentirte acompañado.",
      cta: "Agendar una cita",
      ctaMicrocopy:
        "Empatía • Claridad • Acompañamiento",
    },

    // Testimonios
    testimonials: {
      badge: "Testimonios",
      title: "Lo que dicen los pacientes.",
      subtitle:
        "Experiencias reales de personas que han encontrado en la consulta un espacio de confianza y claridad.",
      note: "[TESTIMONIOS_PENDIENTES - Se agregaran testimonios reales posteriormente]",
      placeholder: {
        text: "Aqui apareceran testimonios reales de pacientes.",
        name: "[NOMBRE]",
        role: "[TIPO DE PACIENTE]",
      },
      ctaPreText: "Únete a quienes ya confian en una atención diferente.",
      cta: "Agendar tu primera cita",
    },

    // FAQ
    faq: {
      badge: "Preguntas Frecuentes",
      title: "Respuestas a tus dudas sobre salud cardiovascular.",
      subtitle:
        "Si tienes mas preguntas, estoy aqui para ayudarte.",
      items: [
        {
          question: "Que es la rehabilitación cardiopulmonar y para que sirve?",
          answer:
            "La rehabilitación cardiopulmonar es un programa médico supervisado que ayuda a personas con condiciones cardiovasculares o pulmonares a recuperar su capacidad física, mejorar su calidad de vida y retomar sus actividades con seguridad. Incluye evaluación inicial, ejercicio guiado y seguimiento personalizado. La Dra. Eimy Pinto ofrece rehabilitación cardiopulmonar en San Jose, Costa Rica.",
        },
        {
          question: "Que es una valoración cardiometabólica?",
          answer:
            "Una valoración cardiometabólica es una evaluación integral que identifica factores de riesgo cardiovascular y metabolico como presión arterial alta, diabetes, sobrepeso o sedentarismo. Incluye analisis de composición corporal y permite crear un plan de prevención personalizado.",
        },
        {
          question: "Cual es la diferencia entre un electrocardiograma, Holter y MAPA?",
          answer:
            "El electrocardiograma (ECG) captura la actividad eléctrica del corazón en un momento especifico. El Holter monitorea el ritmo cardiaco de forma continua durante 24 horas a 14 dias. El MAPA (Monitoreo Ambulatorio de Presión Arterial) mide la presión arterial automaticamente durante 24 horas para evaluar variaciones a lo largo del dia.",
        },
        {
          question: "Cuanto tiempo se utiliza un Holter?",
          answer:
            "El Holter puede usarse desde 24 horas hasta 14 dias, dependiendo de lo que necesitemos evaluar. Un monitoreo mas prolongado permite capturar eventos cardíacos que pueden no ocurrir en un estudio corto.",
        },
        {
          question: "Que es un MAPA de presión arterial?",
          answer:
            "El MAPA es el Monitoreo Ambulatorio de Presión Arterial. Es un estudio de 24 horas que mide tu presión arterial automaticamente mientras realizas tus actividades normales, permitiendo evaluar variaciones diurnas y nocturnas que no se detectan en una medicion puntual.",
        },
        {
          question: "Donde atiende la Dra. Eimy Pinto?",
          answer:
            "La Dra. Eimy Pinto atiende en Hospital Internacional La Católica, ubicado en Goicoechea, San Jose, Costa Rica. El consultorio esta en Torre Médica, Piso 5, Consultorios 501/502, en San Antonio de Guadalupe. Tambien ofrece consultas a domicilio y videoconsulta.",
        },
        {
          question: "Puedo solicitar una consulta a domicilio?",
          answer:
            "Si, la Dra. Pinto ofrece consultas médicas a domicilio y también ecocardiograma a domicilio para pacientes que lo requieran.",
        },
        {
          question: "Como puedo agendar una cita?",
          answer:
            "Puedes agendar tu cita por WhatsApp al +506 2246 3226 o llamar al mismo numero. Te respondere lo antes posible para coordinar tu cita en Hospital La Católica.",
        },
      ],
      cta: "Preguntame por WhatsApp",
    },

    // Ubicacion / Contacto
    location: {
      badge: "Consultorio en San Jose",
      title: "Hospital Internacional La Católica",
      subtitle: "Goicoechea, San Jose, Costa Rica",
      description:
        "Torre Médica, Piso 5, Consultorios 501/502. San Antonio de Guadalupe, frente a los Tribunales de Justicia. Atención médica en un ambiente de confianza y profesionalismo.",
      ctaPreText: "Agenda tu cita hoy.",
      cta: "Agendar una cita",
    },

    // CTA Final
    cta: {
      title: "Tu salud cardiovascular merece atención personalizada.",
      description:
        "Da el primer paso hacia una atención médica donde te escuchan, te explican y te acompañan en cada etapa de tu rehabilitación o prevención cardiometabólica.",
      primaryCta: "Agendar una cita",
      secondaryCta: "Conocer servicios",
      microcopy:
        "Prevención • Acompañamiento • Confianza",
    },

    // Footer
    footer: {
      description:
        "Dra. Eimy Pinto: rehabilitación cardiopulmonar, salud cardiometabólica y cardiologia no invasiva. Hospital Internacional La Católica, Goicoechea, San Jose, Costa Rica.",
      contact: "Contacto",
      callNow: "Llamar",
      bookNow: "Agendar por WhatsApp",
      hours: "Horario de atención",
      copyright: "Dra. Eimy Stephany Pinto Arita. Todos los derechos reservados.",
      location: "Hospital Internacional La Católica • San Jose, Costa Rica",
      credentials: "MED10809 • Colegio de Médicos y Cirujanos de Costa Rica",
    },

    // WhatsApp flotante
    whatsapp: {
      tooltip: "Agendar una cita",
      ariaLabel: "Contactar por WhatsApp",
    },

    // Accesibilidad
    accessibility: {
      skipToContent: "Saltar al contenido principal",
      menuOpen: "Abrir menu",
      menuClose: "Cerrar menu",
    },
  },

  en: {
    // Language
    language: {
      es: "Español",
      en: "English",
    },

    // Header
    header: {
      cta: "Schedule an Appointment",
      mobileCta: "Book Now",
      tagline: "Medicine with Empathy",
      nav: {
        services: "Services",
        rehabilitation: "Rehabilitation",
        cardiometabolic: "Cardiometabolic",
        about: "About",
        faq: "FAQ",
        contact: "Contact",
      },
    },

    // Hero
    hero: {
      badge: "Hospital Internacional La Católica",
      title: "Cardiopulmonary rehabilitation and cardiometabolic health",
      titleHighlight: "with compassionate care.",
      subtitle:
        "Médical care by Dr. Eimy Pinto focused on cardiopulmonary rehabilitation, cardiometabolic prevention, and non-invasive cardiology studies in San Jose, Costa Rica.",
      ctaPreText: "Take the first step toward your cardiovascular wellness.",
      primaryCta: "Schedule an appointment",
      primaryCtaMicrocopy:
        "Personalized care • Close support • Hospital La Católica",
      secondaryCta: "View services",
      trustBadge1: "Physician & Surgeon",
      trustBadge2: "Code MED10809",
      trustBadge3: "Spanish / English",
    },

    // Three main pillars
    pillars: {
      badge: "Médical Specialties",
      title: "Three focus áreas for your cardiovascular health.",
      subtitle:
        "Rehabilitation, cardiometabolic prevention, and cardiovascular diagnosis with close médical support.",
      items: [
        {
          number: "01",
          title: "Cardiopulmonary Rehabilitation",
          description:
            "Cardiac and pulmonary rehabilitation program to support your cardiovascular recovery. Regain confidence in your body and improve your quality of life.",
          cta: "Learn more",
        },
        {
          number: "02",
          title: "Cardiometabolic Health",
          description:
            "Comprehensive cardiometabolic assessment to evaluate, prevent, and control cardiovascular risk factors. Body composition analysis and personalized follow-up.",
          cta: "Learn more",
        },
        {
          number: "03",
          title: "Non-Invasive Cardiology",
          description:
            "Precise cardiovascular studies: 24-hour Holter monitoring, ABPM blood pressure monitoring, and electrocardiogram with interpretation. Clear diagnosis without invasive procedures.",
          cta: "Learn more",
        },
      ],
    },

    // Cardiopulmonary Rehabilitation
    rehabilitation: {
      badge: "Cardiopulmonary Rehabilitation in Costa Rica",
      title: "Recovery also means regaining confidence in your body.",
      subtitle:
        "Cardiopulmonary rehabilitation goes beyond the physical. It's a cardiac and pulmonary rehabilitation program that helps you regain the security, capacity, and quality of life you deserve.",
      intro:
        "If you're experiencing difficulty recovering your physical capacity, fatigue, shortness of breath, reduced exercise tolerance, or uncertainty about resuming physical activity, a cardiopulmonary rehabilitation program can help. Dr. Eimy Pinto offers compassionate care in San Jose, Costa Rica.",
      benefits: [
        {
          title: "Guided cardiac rehabilitation",
          description:
            "Personalized médical support at every stage of your cardiovascular recovery.",
        },
        {
          title: "Safe movement",
          description:
            "Regain confidence to resume your activities with peace of mind.",
        },
        {
          title: "Better quality of life",
          description:
            "Improve your physical, pulmonary capacity and emotional wellbeing.",
        },
        {
          title: "Continuous monitoring",
          description:
            "Constant tracking of your progress with personalized adjustments.",
        },
      ],
      ctaPreText: "Your cardiovascular recovery deserves personalized attention.",
      cta: "Inquire about cardiopulmonary rehabilitation",
      ctaMicrocopy:
        "Personalized evaluation • Close support • Progressive recovery",
    },

    // Cardiometabolic Health
    cardiometabolic: {
      badge: "Cardiometabolic Health in Costa Rica",
      title: "Cardiometabolic prevention starts by understanding your risk factors.",
      subtitle:
        "With the Diploma in cardiometabolic risk prevention, Dr. Eimy Pinto offers a comprehensive cardiometabolic assessment to identify and control factors that may affect your cardiovascular health.",
      intro:
        "If you have or want to prevent high blood pressure, diabetes, overweight, metabolic alterations, sedentary lifestyle, or cardiovascular risk factors, a cardiometabolic assessment can give you clarity and a personalized action plan.",
      process: {
        title: "The process is simple:",
        steps: ["Evaluate", "Understand", "Prevent", "Support"],
      },
      services: [
        "Comprehensive metabolic control",
        "Body composition analysis",
        "Cardiometabolic assessment",
        "Personalized follow-up",
        "Cardiometabolic risk prevention",
      ],
      credential: "Diploma in cardiometabolic risk prevention",
      ctaPreText: "Understand your cardiometabolic risk. Take control of your health.",
      cta: "Schedule cardiometabolic assessment",
      ctaMicrocopy:
        "Comprehensive evaluation • Personalized plan • Continuous follow-up",
    },

    // Non-Invasive Cardiology
    cardiology: {
      badge: "Non-Invasive Cardiology in Costa Rica",
      title: "Precise cardiovascular studies for clear answers.",
      subtitle:
        "Cardiovascular diagnosis without invasive procedures in San Jose, Costa Rica. Electrocardiogram, Holter, and ABPM with médical interpretation and compassionate care.",
      studies: [
        {
          id: "ecg",
          title: "Electrocardiogram (ECG) with interpretation",
          description:
            "Evaluation of the heart's eléctrical activity with médical interpretation. Electrocardiogram + consultation available for complete assessment.",
          cta: "Schedule electrocardiogram",
        },
        {
          id: "holter",
          title: "Holter Monitoring",
          description:
            "24-hour to 30-day Holter monitoring for continuous heart rhythm tracking. Spacelabs and Novi devices available to capture events that don't occur in short studies.",
          cta: "Inquire about Holter",
        },
        {
          id: "oxi-holter",
          title: "Oxi Holter 24 hours",
          description:
            "Combined oximetry and heart rhythm monitoring for 24 hours. Allows simultaneous evaluation of oxygen saturation and heart eléctrical activity.",
          cta: "Inquire about Oxi Holter",
        },
        {
          id: "mapa",
          title: "ABPM — Ambulatory Blood Pressure Monitoring",
          description:
            "24-hour ABPM to evaluate blood pressure variations throughout the day. Spacelabs equipment for precise measurements.",
          cta: "Schedule ABPM",
        },
        {
          id: "eco",
          title: "Home echocardiogram",
          description:
            "Echocardiographic study in the comfort of your home for patients requiring home care.",
          cta: "Check availability",
        },
      ],
      ctaPreText: "Get clear answers about your cardiovascular health.",
      cta: "Schedule cardiovascular study",
    },

    // Services
    services: {
      badge: "Médical Services",
      title: "Comprehensive médical care at Hospital La Católica.",
      subtitle:
        "From consultations to specialized cardiovascular studies, with the same compassionate and close support.",
      categories: [
        {
          title: "Médical Consultations",
          description: "Each consultation includes a comprehensive patient evaluation: identifying cardiometabolic risk factors, weight and body composition analysis, muscle strength assessment, and promotion of healthy lifestyles. With a biological and psychosocial approach, using precision medicine equipment.",
          items: [
            "General Medicine Consultation",
            "First-time consultation",
            "Follow-up consultation",
            "Home médical consultation",
            "Video consultation",
            "Exercise prescription with focus on older adults",
          ],
        },
        {
          title: "Cardiometabolic Prevention",
          items: [
            "Comprehensive metabolic control",
            "Body composition analysis",
            "Muscle strength assessment",
            "General médical checkup",
            "Annual cardiometabolic assessment",
            "Laboratory evaluation",
            "Healthy lifestyle promotion",
          ],
        },
        {
          title: "Non-Invasive Cardiology Studies",
          items: [
            "Electrocardiogram (ECG) with interpretation",
            "Holter Monitoring 24 hours - up to 30 days",
            "Oxi Holter 24 hours",
            "ABPM — Blood Pressure Monitoring 24 hours",
            "Home echocardiogram",
          ],
        },
        {
          title: "Procedures",
          items: [
            "Médical certificate",
            "License certificate",
            "Pap smear + consultation",
            "Suture removal",
            "Minor wound suturing",
          ],
        },
        {
          title: "Other Services",
          items: [
            "Health fairs",
            "Cardiovascular health training sessions",
          ],
        },
      ],
      ctaPreText: "Find the service you need.",
      cta: "Schedule an appointment",
    },

    // About the doctor
    about: {
      badge: "Physician in San Jose, Costa Rica",
      name: "Dra. Eimy Stephany Pinto Arita",
      tagline: "Medicine with time to listen.",
      credentials: "Doctor of Medicine and Surgery • Diploma in Cardiometabolic Risk Prevention • Non-Invasive Cardiology Studies",
      intro:
        "I love my profession and always try to give my best with each patient.",
      paragraphs: [
        "A good médical consultation also means listening, understanding, explaining, guiding, answering questions, supporting, and providing peace of mind.",
        "My goal is for every patient to leave the consultation with clarity about their situation, a concrete plan, and the peace of mind of feeling supported in their health journey. I practice at Hospital Internacional La Católica in Goicoechea, San Jose.",
      ],
      quote:
        "Understanding what's happening with your health can also give you peace of mind.",
      quoteAttribution: "— Dra. Eimy Pinto, on her care philosophy",
      education: {
        title: "Education",
        degree: "Doctor of Medicine and Surgery",
        university: "Universidad de Iberoamerica (UNIBE)",
        period: "January 2004 - December 2010",
      },
      specialty: {
        title: "Specialization",
        items: [
          "Diploma in cardiometabolic risk prevention",
          "Non-invasive cardiology studies",
        ],
      },
      certifications: {
        title: "Additional Certifications",
        items: [
          "Infant Massage Instructor - International Association of Infant Massage",
          "Authorized prescriber of PNK method for weight loss",
        ],
      },
      college: {
        title: "College of Physicians and Surgeons of Costa Rica",
        code: "MED10809",
        status: "Active",
        type: "Physician & Surgeon",
      },
      languages: ["Spanish", "English"],
      ctaPreText: "Schedule your appointment and experience different care.",
      cta: "Book with Dr. Pinto",
      ctaMicrocopy: "Personalized care • Time to listen • Hospital La Católica",
    },

    // Trust / Why choose me
    trust: {
      badge: "Medicine with Empathy",
      title: "Your health deserves clear answers and close support.",
      subtitle:
        "Dr. Eimy Pinto differentiates herself by taking the time to listen, explain, and support each patient.",
      features: [
        {
          title: "Active listening",
          description:
            "Every consultation begins with listening. Your story, concerns, and goals shape the treatment plan.",
        },
        {
          title: "Clear explanations",
          description:
            "You understand what's happening with your health and what options are available to you.",
        },
        {
          title: "Unhurried time",
          description:
            "Appointments are scheduled so no topic is left unaddressed.",
        },
        {
          title: "Continuous support",
          description:
            "Personalized follow-up at every stage of your treatment or rehabilitation.",
        },
      ],
      ctaPreText:
        "A consultation should also give you space to ask, understand, and feel supported.",
      cta: "Schedule an appointment",
      ctaMicrocopy: "Empathy • Clarity • Support",
    },

    // Testimonials
    testimonials: {
      badge: "Testimonials",
      title: "What patients say.",
      subtitle:
        "Real experiences from people who have found a space of trust and clarity in consultation.",
      note: "[TESTIMONIALS_PENDING - Real testimonials will be added later]",
      placeholder: {
        text: "Real patient testimonials will appear here.",
        name: "[NAME]",
        role: "[PATIENT TYPE]",
      },
      ctaPreText: "Join those who already trust in different care.",
      cta: "Schedule your first appointment",
    },

    // FAQ
    faq: {
      badge: "Frequently Asked Questions",
      title: "Answers to your cardiovascular health questions.",
      subtitle: "If you have more questions, I'm here to help.",
      items: [
        {
          question: "What is cardiopulmonary rehabilitation and what is it for?",
          answer:
            "Cardiopulmonary rehabilitation is a supervised médical program that helps people with cardiovascular or pulmonary conditions recover their physical capacity, improve their quality of life, and safely resume their activities. It includes initial evaluation, guided exercise, and personalized follow-up. Dr. Eimy Pinto offers cardiopulmonary rehabilitation in San Jose, Costa Rica.",
        },
        {
          question: "What is a cardiometabolic assessment?",
          answer:
            "A cardiometabolic assessment is a comprehensive evaluation that identifies cardiovascular and metabolic risk factors such as high blood pressure, diabetes, overweight, or sedentary lifestyle. It includes body composition analysis and allows creating a personalized prevention plan.",
        },
        {
          question: "What's the difference between an electrocardiogram, Holter, and ABPM?",
          answer:
            "The electrocardiogram (ECG) captures the heart's eléctrical activity at a specific moment. The Holter monitors heart rhythm continuously for 24 hours to 14 days. ABPM (Ambulatory Blood Pressure Monitoring) measures blood pressure automatically for 24 hours to evaluate variations throughout the day.",
        },
        {
          question: "How long is a Holter monitor used?",
          answer:
            "The Holter can be used from 24 hours up to 14 days, depending on what we need to evaluate. Longer monitoring allows capturing cardiac events that may not occur in a short study.",
        },
        {
          question: "What is blood pressure ABPM?",
          answer:
            "ABPM is Ambulatory Blood Pressure Monitoring. It's a 24-hour study that measures your blood pressure automatically while you perform your normal activities, allowing evaluation of daytime and nighttime variations not detected in a single measurement.",
        },
        {
          question: "Where does Dr. Eimy Pinto practice?",
          answer:
            "Dr. Eimy Pinto practices at Hospital Internacional La Católica, located in Goicoechea, San Jose, Costa Rica. The office is in Torre Médica, Floor 5, Offices 501/502, in San Antonio de Guadalupe. She also offers home consultations and video consultations.",
        },
        {
          question: "Can I request a home consultation?",
          answer:
            "Yes, Dr. Pinto offers home médical consultations and also home echocardiograms for patients who require them.",
        },
        {
          question: "How can I schedule an appointment?",
          answer:
            "You can schedule your appointment via WhatsApp at +506 2246 3226 or call the same number. I'll respond as soon as possible to coordinate your appointment at Hospital La Católica.",
        },
      ],
      cta: "Ask me on WhatsApp",
    },

    // Location / Contact
    location: {
      badge: "Office in San Jose",
      title: "Hospital Internacional La Católica",
      subtitle: "Goicoechea, San Jose, Costa Rica",
      description:
        "Torre Médica, Floor 5, Offices 501/502. San Antonio de Guadalupe, across from the Courts of Justice. Médical care in an environment of trust and professionalism.",
      ctaPreText: "Schedule your appointment today.",
      cta: "Schedule an appointment",
    },

    // Final CTA
    cta: {
      title: "Your cardiovascular health deserves personalized attention.",
      description:
        "Take the first step toward médical care where they listen to you, explain to you, and support you at every stage of your rehabilitation or cardiometabolic prevention.",
      primaryCta: "Schedule an appointment",
      secondaryCta: "View services",
      microcopy: "Prevention • Support • Trust",
    },

    // Footer
    footer: {
      description:
        "Dr. Eimy Pinto: cardiopulmonary rehabilitation, cardiometabolic health, and non-invasive cardiology. Hospital Internacional La Católica, Goicoechea, San Jose, Costa Rica.",
      contact: "Contact",
      callNow: "Call",
      bookNow: "Book via WhatsApp",
      hours: "Office hours",
      copyright: "Dra. Eimy Stephany Pinto Arita. All rights reserved.",
      location: "Hospital Internacional La Católica • San Jose, Costa Rica",
      credentials: "MED10809 • College of Physicians and Surgeons of Costa Rica",
    },

    // Floating WhatsApp
    whatsapp: {
      tooltip: "Schedule an appointment",
      ariaLabel: "Contact via WhatsApp",
    },

    // Accessibility
    accessibility: {
      skipToContent: "Skip to main content",
      menuOpen: "Open menu",
      menuClose: "Close menu",
    },
  },
} as const;

export type Content = typeof content;
export type ContentLanguage = keyof Content;
