/**
 * Contenido centralizado para el website de la Dra. Eimy Pinto
 * Soporte para internacionalización (i18n) - Español e Inglés
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
      cta: "Agendar Consulta",
      mobileCta: "Agendar",
      tagline: "Medicina General y Cardiología",
      nav: {
        services: "Servicios",
        rehabilitation: "Rehabilitación",
        cardiometabolic: "Cardiometabólico",
        about: "Sobre mí",
        faq: "FAQ",
        contact: "Contacto",
      },
    },

    // Hero
    hero: {
      badge: "Hospital Internacional La Católica",
      title: "Rehabilitación cardiopulmonar y salud cardiometabólica",
      titleHighlight: "",
      subtitle:
        "Atención médica orientada a la prevención, evaluación y recuperación de la salud cardiovascular y pulmonar.",
      ctaPreText: "Un abordaje profesional para comprender tu estado de salud, identificar factores de riesgo y definir los pasos adecuados para tu bienestar.",
      primaryCta: "Agendar una consulta",
      primaryCtaMicrocopy:
        "Hospital La Católica • San José, Costa Rica",
      secondaryCta: "Conocer servicios",
      trustBadge1: "Médico y Cirujano",
      trustBadge2: "Código MED10809",
      trustBadge3: "Español / English",
    },

    // Tres pilares principales
    pillars: {
      badge: "Áreas de Atención",
      title: "Un enfoque integral para tu salud cardiovascular",
      subtitle:
        "Cada etapa requiere una atención diferente: prevenir, estudiar una condición o recuperar capacidad física. El objetivo es brindarte una valoración médica cuidadosa y una orientación clara según tus necesidades.",
      items: [
        {
          number: "01",
          title: "Rehabilitación Cardiopulmonar",
          subtitle: "Recuperar capacidad. Retomar actividades. Avanzar con seguridad.",
          description:
            "Programa de rehabilitación dirigido a personas con condiciones cardiovasculares o pulmonares que buscan mejorar su capacidad funcional, tolerancia al esfuerzo y calidad de vida mediante un proceso progresivo y supervisado.",
          cta: "Más información",
        },
        {
          number: "02",
          title: "Salud Cardiometabólica",
          subtitle: "Conocer tus factores de riesgo permite actuar a tiempo.",
          description:
            "Valoración de factores cardiovasculares y metabólicos como presión arterial, composición corporal, sedentarismo, sobrepeso y alteraciones metabólicas, con énfasis en prevención y seguimiento.",
          cta: "Más información",
        },
        {
          number: "03",
          title: "Cardiología No Invasiva",
          subtitle: "Información clínica para tomar mejores decisiones.",
          description:
            "Estudios cardiovasculares como electrocardiograma, Holter y MAPA que permiten evaluar la actividad cardíaca y la presión arterial sin procedimientos invasivos.",
          cta: "Más información",
        },
      ],
    },

    // Rehabilitación Cardiopulmonar
    rehabilitation: {
      badge: "Rehabilitación Cardiopulmonar en Costa Rica",
      title: "Recuperar capacidad también es recuperar confianza.",
      subtitle:
        "Después de una condición cardiovascular o pulmonar, actividades que antes parecían sencillas pueden representar un desafío.",
      intro:
        "La rehabilitación cardiopulmonar es un proceso médico supervisado orientado a mejorar progresivamente la capacidad funcional, la tolerancia al esfuerzo y la seguridad al realizar actividad física. El objetivo es avanzar de acuerdo con tu condición clínica y ayudarte a retomar, de manera progresiva, las actividades que forman parte de tu vida.",
      benefits: [
        {
          title: "Evaluación",
          description:
            "Conocer tu condición actual permite establecer un punto de partida adecuado.",
        },
        {
          title: "Recuperación progresiva",
          description:
            "El proceso se adapta a tu evolución y capacidad funcional.",
        },
        {
          title: "Movimiento con mayor seguridad",
          description:
            "Trabajamos para mejorar la tolerancia al esfuerzo y recuperar confianza al realizar actividad física.",
        },
        {
          title: "Seguimiento",
          description:
            "La evolución se valora durante el proceso para realizar los ajustes que sean necesarios.",
        },
      ],
      ctaPreText: "Volver a hacer lo que disfrutás también forma parte de recuperarte.",
      cta: "Consultar sobre rehabilitación",
      ctaMicrocopy:
        "Evaluación inicial • Proceso progresivo • Seguimiento médico",
    },

    // Salud Cardiometabólica
    cardiometabolic: {
      badge: "Salud Cardiometabólica en Costa Rica",
      title: "Prevenir comienza por conocer tu riesgo.",
      subtitle:
        "La salud cardiovascular está relacionada con múltiples factores: presión arterial, metabolismo, composición corporal, actividad física, antecedentes y hábitos de vida.",
      intro:
        "Una valoración cardiometabólica permite analizar estos elementos de manera conjunta, identificar factores de riesgo y establecer medidas de prevención o seguimiento según cada caso. La Dra. Eimy Pinto cuenta con formación en Prevención de Riesgo Cardiometabólico y brinda valoración enfocada en la prevención y control de factores asociados a enfermedad cardiovascular.",
      process: {
        title: "El enfoque:",
        steps: ["Evaluar", "Comprender", "Prevenir", "Dar seguimiento"],
      },
      services: [
        "Control metabólico integral",
        "Análisis de composición corporal",
        "Valoración cardiometabólica",
        "Seguimiento según evolución",
        "Prevención de riesgo cardiovascular",
      ],
      credential:
        "Diplomado en Prevención de Riesgo Cardiometabólico",
      ctaPreText: "Porque muchas veces cuidar el corazón comienza antes de que aparezcan síntomas.",
      cta: "Agendar valoración",
      ctaMicrocopy:
        "Evaluación integral • Prevención • Seguimiento",
    },

    // Cardiología No Invasiva
    cardiology: {
      badge: "Cardiología No Invasiva en Costa Rica",
      title: "Estudios cardiovasculares para una valoración más precisa.",
      subtitle:
        "Los estudios de cardiología no invasiva permiten obtener información sobre el ritmo cardíaco, la actividad eléctrica del corazón y el comportamiento de la presión arterial durante las actividades cotidianas.",
      studies: [
        {
          id: "ecg",
          title: "Electrocardiograma (ECG)",
          description:
            "Registro de la actividad eléctrica del corazón con interpretación médica.",
          cta: "Agendar ECG",
        },
        {
          id: "holter",
          title: "Monitoreo Holter",
          description:
            "Monitoreo continuo del ritmo cardíaco durante un período determinado, útil para identificar alteraciones que pueden no presentarse durante un electrocardiograma convencional.",
          cta: "Consultar sobre Holter",
        },
        {
          id: "oxi-holter",
          title: "Oxi Holter 24 horas",
          description:
            "Registro simultáneo del ritmo cardíaco y la saturación de oxígeno durante 24 horas.",
          cta: "Consultar sobre Oxi Holter",
        },
        {
          id: "mapa",
          title: "MAPA — Monitoreo de Presión Arterial",
          description:
            "Monitoreo ambulatorio de la presión arterial durante 24 horas para evaluar su comportamiento durante el día y la noche.",
          cta: "Agendar MAPA",
        },
        {
          id: "eco",
          title: "Ecocardiograma a domicilio",
          description:
            "Estudio ecocardiográfico en el hogar para pacientes que requieren atención domiciliaria.",
          cta: "Consultar disponibilidad",
        },
      ],
      ctaPreText: "Cada estudio aporta información que debe interpretarse dentro del contexto clínico de cada paciente.",
      cta: "Agendar estudio",
    },

    // Servicios
    services: {
      badge: "Servicios Médicos",
      title: "Atención médica en Hospital La Católica",
      subtitle:
        "Consultas, valoraciones y estudios cardiovasculares con un enfoque integral y profesional.",
      categories: [
        {
          title: "Consultas Médicas",
          description: "Cada consulta incluye una valoración integral del paciente, identificando factores de riesgo, evaluando composición corporal y promoviendo hábitos de vida saludables.",
          items: [
            "Consulta de Medicina General",
            "Consulta de primera vez",
            "Consulta de seguimiento",
            "Consulta médica a domicilio",
            "Videoconsulta",
            "Prescripción de ejercicio",
          ],
        },
        {
          title: "Prevención Cardiometabólica",
          items: [
            "Control metabólico integral",
            "Análisis de composición corporal",
            "Valoración de fuerza muscular",
            "Chequeo médico general",
            "Valoración cardiometabólica anual",
            "Valoración de laboratorios",
            "Orientación en estilos de vida saludable",
          ],
        },
        {
          title: "Estudios de Cardiología No Invasiva",
          items: [
            "Electrocardiograma (ECG) con interpretación",
            "Monitoreo Holter",
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
            "Capacitaciones en salud cardiovascular",
          ],
        },
      ],
      ctaPreText: "¿Tenés alguna consulta sobre los servicios?",
      cta: "Agendar una cita",
    },

    // Sobre la doctora
    about: {
      badge: "Médico en San José, Costa Rica",
      name: "Dra. Eimy Stephany Pinto Arita",
      tagline: "Medicina con criterio, tiempo y cercanía.",
      credentials: "Doctor en Medicina y Cirugía • Diplomado en Prevención de Riesgo Cardiometabólico • Estudios de Cardiología No Invasiva",
      intro:
        "Para mí, una buena atención médica comienza con una valoración cuidadosa del paciente.",
      paragraphs: [
        "Escuchar sus síntomas, conocer sus antecedentes, realizar las preguntas necesarias y explicar de forma comprensible lo que estamos evaluando son partes esenciales de una consulta.",
        "Mi interés es que cada paciente pueda comprender mejor su estado de salud y tenga claridad sobre los pasos que podemos seguir, ya sea para prevenir, estudiar una condición o acompañar un proceso de recuperación. Creo en una medicina profesional y rigurosa, pero también humana.",
      ],
      quote:
        "Porque detrás de cada estudio, resultado o diagnóstico hay una persona que necesita comprender qué está pasando con su salud.",
      quoteAttribution: "— Dra. Eimy Pinto",
      education: {
        title: "Formación",
        degree: "Doctor en Medicina y Cirugía",
        university: "Universidad de Iberoamérica (UNIBE)",
        period: "Enero 2004 - diciembre 2010",
      },
      specialty: {
        title: "Especialización",
        items: [
          "Diplomado en Prevención de Riesgo Cardiometabólico",
          "Estudios de Cardiología No Invasiva",
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
      ctaPreText: "Si querés agendar una consulta, podés escribirme.",
      cta: "Agendar con la Dra. Pinto",
      ctaMicrocopy: "Hospital La Católica • San José, Costa Rica",
    },

    // Trust / Medicina que comienza por escuchar
    trust: {
      badge: "Enfoque de Atención",
      title: "Medicina que comienza por escuchar",
      subtitle:
        "Una valoración médica no consiste únicamente en revisar resultados o identificar síntomas. También requiere conocer los antecedentes del paciente, comprender cómo se siente y valorar cómo una condición está afectando su vida cotidiana. Por eso, cada consulta busca integrar criterio médico, una evaluación cuidadosa y una comunicación clara.",
      features: [
        {
          title: "Escuchar antes de orientar",
          description:
            "Tus síntomas, antecedentes y preocupaciones aportan información importante para comprender tu estado de salud.",
        },
        {
          title: "Explicar con claridad",
          description:
            "Conocer qué estamos evaluando, qué significan los hallazgos y cuáles son las alternativas permite participar de manera informada en el cuidado de tu salud.",
        },
        {
          title: "Una consulta con el tiempo necesario",
          description:
            "Las dudas también forman parte de la consulta. El objetivo es disponer del espacio necesario para abordarlas y realizar una valoración adecuada.",
        },
        {
          title: "Definir los siguientes pasos",
          description:
            "Al finalizar, buscamos que tengas claridad sobre tu situación y sobre las recomendaciones, estudios o seguimiento que correspondan.",
        },
      ],
      ctaPreText:
        "Una atención médica rigurosa también puede sentirse cercana.",
      cta: "Agendar una consulta",
      ctaMicrocopy:
        "Valoración • Orientación • Seguimiento",
    },

    // Testimonios
    testimonials: {
      badge: "Testimonios",
      title: "Lo que dicen los pacientes",
      subtitle:
        "Experiencias de personas que han recibido atención médica en la consulta.",
      note: "[TESTIMONIOS_PENDIENTES - Se agregarán testimonios reales posteriormente]",
      placeholder: {
        text: "Aquí aparecerán testimonios reales de pacientes.",
        name: "[NOMBRE]",
        role: "[TIPO DE PACIENTE]",
      },
      ctaPreText: "¿Querés agendar tu consulta?",
      cta: "Agendar cita",
    },

    // FAQ
    faq: {
      badge: "Preguntas Frecuentes",
      title: "Respuestas a dudas comunes",
      subtitle:
        "Si tenés más preguntas, podés escribirme directamente.",
      items: [
        {
          question: "¿Qué es la rehabilitación cardiopulmonar y para qué sirve?",
          answer:
            "La rehabilitación cardiopulmonar es un programa médico supervisado que ayuda a personas con condiciones cardiovasculares o pulmonares a recuperar su capacidad física, mejorar su calidad de vida y retomar sus actividades con mayor seguridad. Incluye evaluación inicial, ejercicio progresivo y seguimiento médico.",
        },
        {
          question: "¿Qué es una valoración cardiometabólica?",
          answer:
            "Es una evaluación integral que identifica factores de riesgo cardiovascular y metabólico como presión arterial elevada, alteraciones en el metabolismo, sobrepeso o sedentarismo. Incluye análisis de composición corporal y permite establecer un plan de prevención según cada caso.",
        },
        {
          question: "¿Cuál es la diferencia entre un electrocardiograma, Holter y MAPA?",
          answer:
            "El electrocardiograma (ECG) registra la actividad eléctrica del corazón en un momento específico. El Holter monitorea el ritmo cardíaco de forma continua durante un período determinado. El MAPA (Monitoreo Ambulatorio de Presión Arterial) mide la presión arterial automáticamente durante 24 horas para evaluar su comportamiento a lo largo del día.",
        },
        {
          question: "¿Durante cuánto tiempo se utiliza un Holter?",
          answer:
            "El Holter puede utilizarse durante diferentes períodos según lo que se necesite evaluar. Un monitoreo más prolongado permite detectar eventos cardíacos que pueden no presentarse en estudios de corta duración.",
        },
        {
          question: "¿Qué es el MAPA de presión arterial?",
          answer:
            "El MAPA es el Monitoreo Ambulatorio de Presión Arterial. Es un estudio de 24 horas que mide la presión arterial automáticamente mientras realizás tus actividades normales, permitiendo evaluar variaciones diurnas y nocturnas que no se detectan en una medición puntual.",
        },
        {
          question: "¿Dónde atiende la Dra. Eimy Pinto?",
          answer:
            "La Dra. Eimy Pinto atiende en Hospital Internacional La Católica, ubicado en Goicoechea, San José, Costa Rica. El consultorio está en Torre Médica, Piso 5, Consultorios 501/502, en San Antonio de Guadalupe. También ofrece consultas a domicilio y videoconsulta.",
        },
        {
          question: "¿Puedo solicitar una consulta a domicilio?",
          answer:
            "Sí, se ofrecen consultas médicas a domicilio y también ecocardiograma a domicilio para pacientes que lo requieran.",
        },
        {
          question: "¿Cómo puedo agendar una cita?",
          answer:
            "Podés agendar tu cita por WhatsApp o llamar directamente. Te responderé lo antes posible para coordinar tu cita en Hospital La Católica.",
        },
      ],
      cta: "Escribime por WhatsApp",
    },

    // Ubicación / Contacto
    location: {
      badge: "Consultorio en San José",
      title: "Hospital Internacional La Católica",
      subtitle: "Goicoechea, San José, Costa Rica",
      description:
        "Torre Médica, Piso 5, Consultorios 501/502. San Antonio de Guadalupe, frente a los Tribunales de Justicia.",
      office: "Consultorio",
      phones: "Teléfonos",
      email: "Correo electrónico",
      hours: "Horario de atención",
      ctaPreText: "¿Querés agendar tu consulta?",
      cta: "Agendar cita",
    },

    // CTA Final
    cta: {
      title: "Tu salud merece una valoración cuidadosa.",
      description:
        "Si necesitás evaluar tu salud cardiovascular, iniciar un proceso de rehabilitación cardiopulmonar o conocer mejor tus factores de riesgo cardiometabólico, podemos comenzar con una valoración médica.",
      primaryCta: "Agendar una consulta",
      secondaryCta: "Conocer servicios",
      microcopy:
        "Prevención • Evaluación • Seguimiento",
    },

    // Footer
    footer: {
      description:
        "Dra. Eimy Pinto: rehabilitación cardiopulmonar, salud cardiometabólica y cardiología no invasiva. Hospital Internacional La Católica, Goicoechea, San José, Costa Rica.",
      contact: "Contacto",
      callNow: "Llamar",
      bookNow: "Agendar por WhatsApp",
      hours: "Horario de atención",
      schedulePending: "Horario pendiente",
      contactToSchedule: "Contactar para agendar",
      copyright: "Dra. Eimy Stephany Pinto Arita. Todos los derechos reservados.",
      location: "Hospital Internacional La Católica • San José, Costa Rica",
      credentials: "MED10809 • Colegio de Médicos y Cirujanos de Costa Rica",
    },

    // WhatsApp flotante
    whatsapp: {
      tooltip: "Agendar consulta",
      ariaLabel: "Contactar por WhatsApp",
    },

    // Accesibilidad
    accessibility: {
      skipToContent: "Saltar al contenido principal",
      menuOpen: "Abrir menú",
      menuClose: "Cerrar menú",
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
      cta: "Schedule Appointment",
      mobileCta: "Book",
      tagline: "General Medicine & Cardiology",
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
      titleHighlight: "",
      subtitle:
        "Medical care focused on the prevention, evaluation, and recovery of cardiovascular and pulmonary health.",
      ctaPreText: "A professional approach to understand your health status, identify risk factors, and define the appropriate steps for your wellbeing.",
      primaryCta: "Schedule an appointment",
      primaryCtaMicrocopy:
        "Hospital La Católica • San José, Costa Rica",
      secondaryCta: "View services",
      trustBadge1: "Physician & Surgeon",
      trustBadge2: "Code MED10809",
      trustBadge3: "Spanish / English",
    },

    // Three main pillars
    pillars: {
      badge: "Areas of Care",
      title: "A comprehensive approach to your cardiovascular health",
      subtitle:
        "Each stage requires different care: prevention, studying a condition, or recovering physical capacity. The goal is to provide you with careful medical assessment and clear guidance according to your needs.",
      items: [
        {
          number: "01",
          title: "Cardiopulmonary Rehabilitation",
          subtitle: "Recover capacity. Resume activities. Move forward safely.",
          description:
            "Rehabilitation program for people with cardiovascular or pulmonary conditions seeking to improve functional capacity, exercise tolerance, and quality of life through a progressive and supervised process.",
          cta: "Learn more",
        },
        {
          number: "02",
          title: "Cardiometabolic Health",
          subtitle: "Knowing your risk factors allows you to act in time.",
          description:
            "Assessment of cardiovascular and metabolic factors such as blood pressure, body composition, sedentary lifestyle, overweight, and metabolic alterations, with emphasis on prevention and follow-up.",
          cta: "Learn more",
        },
        {
          number: "03",
          title: "Non-Invasive Cardiology",
          subtitle: "Clinical information for better decisions.",
          description:
            "Cardiovascular studies such as electrocardiogram, Holter, and ABPM that allow evaluation of cardiac activity and blood pressure without invasive procedures.",
          cta: "Learn more",
        },
      ],
    },

    // Cardiopulmonary Rehabilitation
    rehabilitation: {
      badge: "Cardiopulmonary Rehabilitation in Costa Rica",
      title: "Recovering capacity also means regaining confidence.",
      subtitle:
        "After a cardiovascular or pulmonary condition, activities that once seemed simple can become challenging.",
      intro:
        "Cardiopulmonary rehabilitation is a supervised medical process aimed at progressively improving functional capacity, exercise tolerance, and safety when performing physical activity. The goal is to progress according to your clinical condition and help you gradually resume the activities that are part of your life.",
      benefits: [
        {
          title: "Evaluation",
          description:
            "Understanding your current condition allows establishing an appropriate starting point.",
        },
        {
          title: "Progressive recovery",
          description:
            "The process adapts to your evolution and functional capacity.",
        },
        {
          title: "Safer movement",
          description:
            "We work to improve exercise tolerance and regain confidence when performing physical activity.",
        },
        {
          title: "Follow-up",
          description:
            "Progress is assessed during the process to make necessary adjustments.",
        },
      ],
      ctaPreText: "Getting back to what you enjoy is also part of recovery.",
      cta: "Inquire about rehabilitation",
      ctaMicrocopy:
        "Initial evaluation • Progressive process • Medical follow-up",
    },

    // Cardiometabolic Health
    cardiometabolic: {
      badge: "Cardiometabolic Health in Costa Rica",
      title: "Prevention starts with knowing your risk.",
      subtitle:
        "Cardiovascular health is related to multiple factors: blood pressure, metabolism, body composition, physical activity, history, and lifestyle habits.",
      intro:
        "A cardiometabolic assessment allows analyzing these elements together, identifying risk factors, and establishing prevention or follow-up measures for each case. Dr. Eimy Pinto has training in Cardiometabolic Risk Prevention and provides assessment focused on the prevention and control of factors associated with cardiovascular disease.",
      process: {
        title: "The approach:",
        steps: ["Evaluate", "Understand", "Prevent", "Follow up"],
      },
      services: [
        "Comprehensive metabolic control",
        "Body composition analysis",
        "Cardiometabolic assessment",
        "Follow-up according to evolution",
        "Cardiovascular risk prevention",
      ],
      credential: "Diploma in Cardiometabolic Risk Prevention",
      ctaPreText: "Because often caring for your heart begins before symptoms appear.",
      cta: "Schedule assessment",
      ctaMicrocopy:
        "Comprehensive evaluation • Prevention • Follow-up",
    },

    // Non-Invasive Cardiology
    cardiology: {
      badge: "Non-Invasive Cardiology in Costa Rica",
      title: "Cardiovascular studies for more precise assessment.",
      subtitle:
        "Non-invasive cardiology studies allow obtaining information about heart rhythm, the electrical activity of the heart, and blood pressure behavior during daily activities.",
      studies: [
        {
          id: "ecg",
          title: "Electrocardiogram (ECG)",
          description:
            "Recording of the heart's electrical activity with medical interpretation.",
          cta: "Schedule ECG",
        },
        {
          id: "holter",
          title: "Holter Monitoring",
          description:
            "Continuous monitoring of heart rhythm over a determined period, useful for identifying alterations that may not occur during a conventional electrocardiogram.",
          cta: "Inquire about Holter",
        },
        {
          id: "oxi-holter",
          title: "Oxi Holter 24 hours",
          description:
            "Simultaneous recording of heart rhythm and oxygen saturation for 24 hours.",
          cta: "Inquire about Oxi Holter",
        },
        {
          id: "mapa",
          title: "ABPM — Blood Pressure Monitoring",
          description:
            "Ambulatory blood pressure monitoring for 24 hours to evaluate its behavior during day and night.",
          cta: "Schedule ABPM",
        },
        {
          id: "eco",
          title: "Home echocardiogram",
          description:
            "Echocardiographic study at home for patients requiring home care.",
          cta: "Check availability",
        },
      ],
      ctaPreText: "Each study provides information that must be interpreted within each patient's clinical context.",
      cta: "Schedule study",
    },

    // Services
    services: {
      badge: "Medical Services",
      title: "Medical care at Hospital La Católica",
      subtitle:
        "Consultations, assessments, and cardiovascular studies with a comprehensive and professional approach.",
      categories: [
        {
          title: "Medical Consultations",
          description: "Each consultation includes a comprehensive patient assessment, identifying risk factors, evaluating body composition, and promoting healthy lifestyle habits.",
          items: [
            "General Medicine Consultation",
            "First-time consultation",
            "Follow-up consultation",
            "Home medical consultation",
            "Video consultation",
            "Exercise prescription",
          ],
        },
        {
          title: "Cardiometabolic Prevention",
          items: [
            "Comprehensive metabolic control",
            "Body composition analysis",
            "Muscle strength assessment",
            "General medical checkup",
            "Annual cardiometabolic assessment",
            "Laboratory evaluation",
            "Healthy lifestyle guidance",
          ],
        },
        {
          title: "Non-Invasive Cardiology Studies",
          items: [
            "Electrocardiogram (ECG) with interpretation",
            "Holter Monitoring",
            "Oxi Holter 24 hours",
            "ABPM — 24-hour Blood Pressure Monitoring",
            "Home echocardiogram",
          ],
        },
        {
          title: "Procedures",
          items: [
            "Medical certificate",
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
            "Cardiovascular health training",
          ],
        },
      ],
      ctaPreText: "Do you have questions about the services?",
      cta: "Schedule an appointment",
    },

    // About the doctor
    about: {
      badge: "Physician in San José, Costa Rica",
      name: "Dr. Eimy Stephany Pinto Arita",
      tagline: "Medicine with criteria, time, and care.",
      credentials: "Doctor of Medicine and Surgery • Diploma in Cardiometabolic Risk Prevention • Non-Invasive Cardiology Studies",
      intro:
        "For me, good medical care begins with a careful patient assessment.",
      paragraphs: [
        "Listening to symptoms, learning about history, asking necessary questions, and explaining in an understandable way what we are evaluating are essential parts of a consultation.",
        "My interest is for each patient to better understand their health status and have clarity about the steps we can follow, whether for prevention, studying a condition, or accompanying a recovery process. I believe in professional and rigorous medicine, but also humane.",
      ],
      quote:
        "Because behind every study, result, or diagnosis there is a person who needs to understand what is happening with their health.",
      quoteAttribution: "— Dr. Eimy Pinto",
      education: {
        title: "Education",
        degree: "Doctor of Medicine and Surgery",
        university: "Universidad de Iberoamérica (UNIBE)",
        period: "January 2004 - December 2010",
      },
      specialty: {
        title: "Specialization",
        items: [
          "Diploma in Cardiometabolic Risk Prevention",
          "Non-Invasive Cardiology Studies",
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
      ctaPreText: "If you want to schedule a consultation, you can contact me.",
      cta: "Book with Dr. Pinto",
      ctaMicrocopy: "Hospital La Católica • San José, Costa Rica",
    },

    // Trust / Medicine that starts by listening
    trust: {
      badge: "Care Approach",
      title: "Medicine that starts by listening",
      subtitle:
        "A medical assessment is not just about reviewing results or identifying symptoms. It also requires knowing the patient's history, understanding how they feel, and assessing how a condition is affecting their daily life. That's why each consultation seeks to integrate medical criteria, careful evaluation, and clear communication.",
      features: [
        {
          title: "Listen before guiding",
          description:
            "Your symptoms, history, and concerns provide important information to understand your health status.",
        },
        {
          title: "Explain clearly",
          description:
            "Knowing what we are evaluating, what the findings mean, and what the alternatives are allows you to participate in an informed way in your health care.",
        },
        {
          title: "A consultation with necessary time",
          description:
            "Questions are also part of the consultation. The goal is to have the necessary space to address them and perform an adequate assessment.",
        },
        {
          title: "Define next steps",
          description:
            "At the end, we seek for you to have clarity about your situation and about the recommendations, studies, or follow-up that apply.",
        },
      ],
      ctaPreText:
        "Rigorous medical care can also feel caring.",
      cta: "Schedule an appointment",
      ctaMicrocopy:
        "Assessment • Guidance • Follow-up",
    },

    // Testimonials
    testimonials: {
      badge: "Testimonials",
      title: "What patients say",
      subtitle:
        "Experiences from people who have received medical care in consultation.",
      note: "[TESTIMONIALS_PENDING - Real testimonials will be added later]",
      placeholder: {
        text: "Real patient testimonials will appear here.",
        name: "[NAME]",
        role: "[PATIENT TYPE]",
      },
      ctaPreText: "Would you like to schedule your consultation?",
      cta: "Schedule appointment",
    },

    // FAQ
    faq: {
      badge: "Frequently Asked Questions",
      title: "Answers to common questions",
      subtitle: "If you have more questions, you can contact me directly.",
      items: [
        {
          question: "What is cardiopulmonary rehabilitation and what is it for?",
          answer:
            "Cardiopulmonary rehabilitation is a supervised medical program that helps people with cardiovascular or pulmonary conditions recover their physical capacity, improve their quality of life, and resume their activities more safely. It includes initial evaluation, progressive exercise, and medical follow-up.",
        },
        {
          question: "What is a cardiometabolic assessment?",
          answer:
            "It is a comprehensive evaluation that identifies cardiovascular and metabolic risk factors such as elevated blood pressure, metabolic alterations, overweight, or sedentary lifestyle. It includes body composition analysis and allows establishing a prevention plan for each case.",
        },
        {
          question: "What's the difference between an electrocardiogram, Holter, and ABPM?",
          answer:
            "The electrocardiogram (ECG) records the heart's electrical activity at a specific moment. The Holter monitors heart rhythm continuously over a determined period. ABPM (Ambulatory Blood Pressure Monitoring) measures blood pressure automatically for 24 hours to evaluate its behavior throughout the day.",
        },
        {
          question: "How long is a Holter monitor used?",
          answer:
            "The Holter can be used for different periods depending on what needs to be evaluated. Longer monitoring allows detecting cardiac events that may not occur in short-duration studies.",
        },
        {
          question: "What is blood pressure ABPM?",
          answer:
            "ABPM is Ambulatory Blood Pressure Monitoring. It's a 24-hour study that measures your blood pressure automatically while you perform your normal activities, allowing evaluation of daytime and nighttime variations not detected in a single measurement.",
        },
        {
          question: "Where does Dr. Eimy Pinto practice?",
          answer:
            "Dr. Eimy Pinto practices at Hospital Internacional La Católica, located in Goicoechea, San José, Costa Rica. The office is in Torre Médica, Floor 5, Offices 501/502, in San Antonio de Guadalupe. She also offers home consultations and video consultations.",
        },
        {
          question: "Can I request a home consultation?",
          answer:
            "Yes, home medical consultations and home echocardiograms are offered for patients who require them.",
        },
        {
          question: "How can I schedule an appointment?",
          answer:
            "You can schedule your appointment via WhatsApp or call directly. I'll respond as soon as possible to coordinate your appointment at Hospital La Católica.",
        },
      ],
      cta: "Message me on WhatsApp",
    },

    // Location / Contact
    location: {
      badge: "Office in San José",
      title: "Hospital Internacional La Católica",
      subtitle: "Goicoechea, San José, Costa Rica",
      description:
        "Torre Médica, Floor 5, Offices 501/502. San Antonio de Guadalupe, across from the Courts of Justice.",
      office: "Office",
      phones: "Phone Numbers",
      email: "Email",
      hours: "Office Hours",
      ctaPreText: "Would you like to schedule your consultation?",
      cta: "Schedule appointment",
    },

    // Final CTA
    cta: {
      title: "Your health deserves careful assessment.",
      description:
        "If you need to evaluate your cardiovascular health, start a cardiopulmonary rehabilitation process, or better understand your cardiometabolic risk factors, we can begin with a medical assessment.",
      primaryCta: "Schedule an appointment",
      secondaryCta: "View services",
      microcopy: "Prevention • Evaluation • Follow-up",
    },

    // Footer
    footer: {
      description:
        "Dr. Eimy Pinto: cardiopulmonary rehabilitation, cardiometabolic health, and non-invasive cardiology. Hospital Internacional La Católica, Goicoechea, San José, Costa Rica.",
      contact: "Contact",
      callNow: "Call",
      bookNow: "Book via WhatsApp",
      hours: "Office hours",
      schedulePending: "Schedule pending",
      contactToSchedule: "Contact to schedule",
      copyright: "Dr. Eimy Stephany Pinto Arita. All rights reserved.",
      location: "Hospital Internacional La Católica • San José, Costa Rica",
      credentials: "MED10809 • College of Physicians and Surgeons of Costa Rica",
    },

    // Floating WhatsApp
    whatsapp: {
      tooltip: "Schedule appointment",
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
