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
      title: "Recuperá tu confianza. Fortalecé tu corazón. Mejorá tu calidad de vida.",
      subtitle:
        "Programa de rehabilitación cardiopulmonar supervisado, diseñado para ayudar a personas con enfermedades cardíacas o pulmonares a recuperar su capacidad física mediante ejercicio adaptado y monitoreo profesional.",
      intro:
        "Es un programa médico supervisado que combina ejercicio aeróbico y de fuerza muscular para mejorar la capacidad cardiovascular y funcional.",
      programDetails: {
        title: "¿En qué consiste el programa?",
        items: [
          "36 sesiones de rehabilitación",
          "Sesiones de aproximadamente 30 a 60 minutos",
          "Frecuencia de 2 a 3 veces por semana",
          "Ejercicio personalizado según la valoración inicial",
          "Monitoreo de frecuencia cardíaca, presión arterial, saturación de oxígeno y ritmo cardíaco mediante telemetría",
          "Seguimiento de la evolución física",
        ],
      },
      indications: {
        title: "¿Para quién está indicado?",
        subtitle: "Personas que, según valoración médica:",
        items: [
          "Han sufrido un infarto",
          "Han recibido una angioplastia coronaria o cateterismo",
          "Se recuperan de una cirugía cardíaca",
          "Presentan insuficiencia cardíaca estable",
          "Tienen determinadas enfermedades cardiovasculares",
          "Presentan enfermedades respiratorias crónicas",
          "Necesitan recuperar su capacidad física después de un evento cardiovascular",
        ],
      },
      benefits: [
        {
          title: "Mejorar resistencia",
          description: "Mejorar la resistencia y capacidad física general.",
        },
        {
          title: "Fortalecer músculos",
          description: "Fortalecer los músculos y mejorar la condición cardiovascular.",
        },
        {
          title: "Control de factores",
          description: "Contribuir al control de factores de riesgo cardiovascular.",
        },
        {
          title: "Reducir fatiga",
          description: "Disminuir la fatiga y mejorar la tolerancia al esfuerzo.",
        },
        {
          title: "Bienestar emocional",
          description: "Favorecer el bienestar emocional y la confianza.",
        },
        {
          title: "Prevenir complicaciones",
          description: "Contribuir a reducir el riesgo de nuevas hospitalizaciones y complicaciones cardiovasculares.",
        },
      ],
      benefitsNote: "Los resultados dependen de la condición individual y del seguimiento médico.",
      process: {
        title: "El proceso",
        steps: [
          { number: "1", title: "Valoración médica inicial", description: "Evaluación completa de tu condición actual" },
          { number: "2", title: "Programa personalizado", description: "Diseño de ejercicios adaptados a tus necesidades" },
          { number: "3", title: "Sesiones supervisadas", description: "Entrenamiento con monitoreo continuo" },
          { number: "4", title: "Evaluación de avances", description: "Seguimiento y recomendaciones de continuidad" },
        ],
      },
      ctaPreText: "Volver a hacer lo que disfrutás también forma parte de recuperarte.",
      cta: "Quiero información sobre rehabilitación",
      ctaMicrocopy: "Evaluación inicial • Proceso progresivo • Seguimiento médico",
    },

    // Salud Cardiometabólica / Medicina General
    cardiometabolic: {
      badge: "Medicina General y Prevención Cardiometabólica",
      title: "Cuidar tu corazón comienza antes de que aparezcan los síntomas.",
      subtitle:
        "Consulta de medicina general enfocada en la prevención, detección temprana y control de factores de riesgo relacionados con hipertensión, diabetes, obesidad y alteraciones del colesterol y triglicéridos.",
      intro:
        "La Dra. Eimy Pinto cuenta con formación en Prevención de Riesgo Cardiometabólico (Universidad de Santander - UDES y Academia Latinoamericana de Lipidología y Riesgo Cardiovascular - ALALIP, Colombia) y brinda valoración enfocada en la prevención y control de factores asociados a enfermedad cardiovascular.",
      consultationIncludes: {
        title: "¿Qué incluye la consulta?",
        items: [
          "Historia clínica y examen físico",
          "Medición de presión arterial y signos vitales",
          "Electrocardiograma de 12 derivaciones",
          "Medición de peso y análisis de composición corporal",
          "Evaluación de factores de riesgo cardiovascular y metabólico",
          "Revisión de resultados de laboratorio cuando corresponda",
          "Recomendaciones individualizadas",
          "Plan de seguimiento según las necesidades del paciente",
        ],
      },
      targetAudience: {
        title: "¿Para quién es esta consulta?",
        subtitle: "Personas que:",
        items: [
          "Tienen presión arterial elevada",
          "Presentan prediabetes o diabetes",
          "Tienen sobrepeso u obesidad",
          "Presentan colesterol o triglicéridos elevados",
          "Llevan una vida sedentaria",
          "Tienen antecedentes familiares cardiovasculares",
          "Fuman o presentan otros factores de riesgo",
          "Desean prevenir enfermedades incluso sin tener síntomas",
        ],
      },
      keyMessage: "No necesitás sentirte mal para comenzar a cuidar tu salud.",
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
      credential: "Diplomado en Prevención de Riesgo Cardiometabólico (UDES - ALALIP, Colombia)",
      ctaPreText: "Porque muchas veces cuidar el corazón comienza antes de que aparezcan síntomas.",
      cta: "Quiero conocer mis factores de riesgo",
      ctaMicrocopy: "Evaluación integral • Prevención • Seguimiento",
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
      languagesLabel: "Idiomas",
      collegeLabel: "Colegiatura",
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
      subtitle: "Si tenés más preguntas, podés escribirme directamente.",
      // Sección de Rehabilitación Cardiopulmonar
      rehabilitationSection: {
        title: "Rehabilitación Cardiopulmonar",
        items: [
          {
            question: "¿Qué es la rehabilitación cardiopulmonar?",
            answer: "Es un programa médico supervisado que combina ejercicio aeróbico y de fuerza muscular para mejorar la capacidad cardiovascular y funcional. Está diseñado para ayudar a personas con enfermedades cardíacas o pulmonares a recuperar su capacidad física mediante ejercicio adaptado y monitoreo profesional.",
          },
          {
            question: "¿Quiénes pueden beneficiarse de la rehabilitación cardiopulmonar?",
            answer: "Personas que han sufrido un infarto, han recibido una angioplastia coronaria o cateterismo, se recuperan de una cirugía cardíaca, presentan insuficiencia cardíaca estable, tienen determinadas enfermedades cardiovasculares, presentan enfermedades respiratorias crónicas, o necesitan recuperar su capacidad física después de un evento cardiovascular. La indicación depende siempre de una valoración médica previa.",
          },
          {
            question: "¿Cuáles son los beneficios de la rehabilitación cardiopulmonar?",
            answer: "Entre los beneficios potenciales se encuentran: mejorar la resistencia y capacidad física, fortalecer los músculos y mejorar la condición cardiovascular, contribuir al control de factores de riesgo, disminuir la fatiga y mejorar la tolerancia al esfuerzo, favorecer el bienestar emocional, y contribuir a reducir el riesgo de nuevas hospitalizaciones y complicaciones cardiovasculares. Los resultados dependen de la condición individual y del seguimiento médico.",
          },
          {
            question: "¿Es seguro realizar ejercicio después de un infarto?",
            answer: "Sí, cuando se realiza bajo supervisión médica adecuada. El programa de rehabilitación cardiopulmonar está diseñado precisamente para que personas que han sufrido un evento cardiovascular puedan realizar ejercicio de forma segura, con monitoreo continuo de frecuencia cardíaca, presión arterial, saturación de oxígeno y ritmo cardíaco. La seguridad y el momento de inicio dependen de la valoración médica individual.",
          },
          {
            question: "¿Cuánto dura el programa de rehabilitación?",
            answer: "El programa incluye 36 sesiones de rehabilitación, con sesiones de aproximadamente 30 a 60 minutos y una frecuencia de 2 a 3 veces por semana. La duración total depende del progreso individual y de las necesidades de cada paciente.",
          },
          {
            question: "¿Qué tipo de ejercicios se realizan en rehabilitación?",
            answer: "El programa combina ejercicio aeróbico (como caminata, bicicleta estática) y ejercicio de fuerza muscular, todo personalizado según la valoración inicial. Los ejercicios se adaptan a la capacidad y evolución de cada paciente.",
          },
          {
            question: "¿Necesito una valoración médica antes de comenzar?",
            answer: "Sí, es necesaria una valoración médica inicial para evaluar tu condición actual, establecer un punto de partida adecuado y diseñar un programa de ejercicio personalizado según tus necesidades y capacidades.",
          },
          {
            question: "¿Puedo participar si tengo insuficiencia cardíaca?",
            answer: "Sí, la rehabilitación cardiopulmonar está indicada para personas con insuficiencia cardíaca estable. La participación depende de una valoración médica que determine si es el momento adecuado para iniciar el programa.",
          },
          {
            question: "¿Durante las sesiones se monitorea el corazón?",
            answer: "Sí, durante todas las sesiones se realiza monitoreo continuo de frecuencia cardíaca, presión arterial, saturación de oxígeno y ritmo cardíaco mediante telemetría. Esto permite realizar el ejercicio de forma segura y detectar cualquier alteración de manera oportuna.",
          },
          {
            question: "¿Necesito estar en buena condición física para participar?",
            answer: "No. El programa está diseñado precisamente para personas que necesitan recuperar su capacidad física. Los ejercicios se adaptan a tu condición actual y progresan de manera gradual según tu evolución.",
          },
          {
            question: "¿La rehabilitación ayuda a prevenir otro infarto?",
            answer: "La rehabilitación cardiopulmonar contribuye al control de factores de riesgo cardiovascular y puede ayudar a reducir el riesgo de nuevas hospitalizaciones y complicaciones cardiovasculares. Es parte de un enfoque integral que incluye también cambios en estilo de vida y seguimiento médico.",
          },
          {
            question: "¿Qué sucede cuando termino el programa de rehabilitación?",
            answer: "Al finalizar el programa se realiza una evaluación de los avances logrados y se brindan recomendaciones de continuidad para mantener los beneficios obtenidos. El objetivo es que puedas continuar con un estilo de vida activo de forma segura e independiente.",
          },
          {
            question: "¿Puedo participar si soy adulto mayor?",
            answer: "Sí, la rehabilitación cardiopulmonar puede beneficiar a adultos mayores. El programa se adapta a las capacidades y necesidades específicas de cada persona, independientemente de la edad. La participación depende de la valoración médica individual.",
          },
          {
            question: "¿Cuándo puedo comenzar después de una cirugía cardíaca o infarto?",
            answer: "El momento de inicio depende de la valoración médica individual. Generalmente, la rehabilitación puede comenzar una vez que el paciente se encuentra estable y ha sido autorizado por su médico tratante. Cada caso es diferente y requiere una evaluación personalizada.",
          },
          {
            question: "¿Por qué elegir un programa supervisado de rehabilitación?",
            answer: "Un programa supervisado ofrece monitoreo profesional continuo, ejercicios adaptados a tu condición específica, seguimiento de tu evolución, y la seguridad de tener atención médica disponible durante las sesiones. Esto es especialmente importante para personas con condiciones cardiovasculares o pulmonares.",
          },
        ],
        cta: "Consultar sobre rehabilitación",
      },
      // Sección de Medicina General y Prevención Cardiometabólica
      cardiometabolicSection: {
        title: "Medicina General y Prevención Cardiometabólica",
        items: [
          {
            question: "¿Qué es una consulta con enfoque en prevención cardiometabólica?",
            answer: "Es una consulta de medicina general enfocada en la prevención, detección temprana y control de factores de riesgo relacionados con hipertensión, diabetes, obesidad y alteraciones del colesterol y triglicéridos. El objetivo es identificar factores de riesgo antes de que aparezcan síntomas o complicaciones.",
          },
          {
            question: "¿Qué incluye la consulta de medicina general?",
            answer: "La consulta incluye historia clínica y examen físico, medición de presión arterial y signos vitales, electrocardiograma de 12 derivaciones, medición de peso y análisis de composición corporal, evaluación de factores de riesgo cardiovascular y metabólico, revisión de resultados de laboratorio cuando corresponda, recomendaciones individualizadas, y plan de seguimiento según las necesidades del paciente.",
          },
          {
            question: "¿Qué es el análisis de composición corporal?",
            answer: "Es una medición que permite conocer la proporción de masa muscular, grasa corporal y otros componentes del cuerpo. Esta información es útil para evaluar el estado nutricional y metabólico, y para establecer metas de salud más precisas que solo el peso en la báscula.",
          },
          {
            question: "¿Por qué se realiza un electrocardiograma en la consulta?",
            answer: "El electrocardiograma de 12 derivaciones permite evaluar la actividad eléctrica del corazón y detectar posibles alteraciones del ritmo cardíaco u otros hallazgos que pueden requerir atención. Es un estudio no invasivo que aporta información valiosa sobre la salud cardiovascular.",
          },
          {
            question: "¿Quién debería evaluar su riesgo cardiometabólico?",
            answer: "Personas que tienen presión arterial elevada, presentan prediabetes o diabetes, tienen sobrepeso u obesidad, presentan colesterol o triglicéridos elevados, llevan una vida sedentaria, tienen antecedentes familiares cardiovasculares, fuman o presentan otros factores de riesgo, o simplemente desean prevenir enfermedades incluso sin tener síntomas.",
          },
          {
            question: "¿Necesito tener alguna enfermedad para consultar?",
            answer: "No. No necesitás sentirte mal para comenzar a cuidar tu salud. La consulta de prevención cardiometabólica está diseñada tanto para personas con factores de riesgo conocidos como para quienes desean evaluar su estado de salud de forma preventiva.",
          },
          {
            question: "¿Se brinda seguimiento para hipertensión, diabetes o colesterol elevado?",
            answer: "Sí. La consulta incluye un plan de seguimiento según las necesidades de cada paciente. Se ofrece acompañamiento para el control de hipertensión arterial, diabetes, alteraciones del colesterol y triglicéridos, y otros factores de riesgo metabólico.",
          },
          {
            question: "¿La consulta incluye recomendaciones de alimentación y control de peso?",
            answer: "Sí. Se brindan recomendaciones individualizadas sobre estilos de vida saludable, que pueden incluir orientación sobre alimentación, actividad física y control de peso. Dependiendo de cada caso, se puede coordinar con otros profesionales de la salud.",
          },
          {
            question: "¿Dónde se encuentra el consultorio?",
            answer: "El consultorio se encuentra en Hospital Internacional La Católica, Torre Médica, quinto piso, consultorio 501, Guadalupe, San José, Costa Rica. También se ofrece consulta a domicilio y videoconsulta para quienes lo requieran.",
          },
          {
            question: "¿Quién realiza la consulta médica?",
            answer: "La consulta es realizada por la Dra. Eimy Stephany Pinto Arita, Médico y Cirujano con Diplomado en Prevención del Riesgo Cardiometabólico por la Universidad de Santander (UDES) y la Academia Latinoamericana de Lipidología y Riesgo Cardiovascular (ALALIP) de Colombia.",
          },
        ],
        cta: "Agendar valoración médica",
      },
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
      title: "Regain your confidence. Strengthen your heart. Improve your quality of life.",
      subtitle:
        "Supervised cardiopulmonary rehabilitation program designed to help people with heart or lung diseases recover their physical capacity through adapted exercise and professional monitoring.",
      intro:
        "It is a supervised medical program that combines aerobic and muscle strengthening exercises to improve cardiovascular and functional capacity.",
      programDetails: {
        title: "What does the program include?",
        items: [
          "36 rehabilitation sessions",
          "Sessions of approximately 30 to 60 minutes",
          "Frequency of 2 to 3 times per week",
          "Personalized exercise based on initial assessment",
          "Monitoring of heart rate, blood pressure, oxygen saturation, and heart rhythm through telemetry",
          "Physical progress tracking",
        ],
      },
      indications: {
        title: "Who is it indicated for?",
        subtitle: "People who, according to medical evaluation:",
        items: [
          "Have suffered a heart attack",
          "Have received coronary angioplasty or catheterization",
          "Are recovering from cardiac surgery",
          "Have stable heart failure",
          "Have certain cardiovascular diseases",
          "Have chronic respiratory diseases",
          "Need to recover physical capacity after a cardiovascular event",
        ],
      },
      benefits: [
        {
          title: "Improve endurance",
          description: "Improve overall endurance and physical capacity.",
        },
        {
          title: "Strengthen muscles",
          description: "Strengthen muscles and improve cardiovascular condition.",
        },
        {
          title: "Risk factor control",
          description: "Contribute to cardiovascular risk factor control.",
        },
        {
          title: "Reduce fatigue",
          description: "Decrease fatigue and improve exercise tolerance.",
        },
        {
          title: "Emotional wellbeing",
          description: "Promote emotional wellbeing and confidence.",
        },
        {
          title: "Prevent complications",
          description: "Help reduce the risk of new hospitalizations and cardiovascular complications.",
        },
      ],
      benefitsNote: "Results depend on individual condition and medical follow-up.",
      process: {
        title: "The process",
        steps: [
          { number: "1", title: "Initial medical assessment", description: "Complete evaluation of your current condition" },
          { number: "2", title: "Personalized program", description: "Exercise design adapted to your needs" },
          { number: "3", title: "Supervised sessions", description: "Training with continuous monitoring" },
          { number: "4", title: "Progress evaluation", description: "Follow-up and continuity recommendations" },
        ],
      },
      ctaPreText: "Getting back to what you enjoy is also part of recovery.",
      cta: "I want information about rehabilitation",
      ctaMicrocopy: "Initial evaluation • Progressive process • Medical follow-up",
    },

    // Cardiometabolic Health / General Medicine
    cardiometabolic: {
      badge: "General Medicine and Cardiometabolic Prevention",
      title: "Caring for your heart begins before symptoms appear.",
      subtitle:
        "General medicine consultation focused on prevention, early detection, and control of risk factors related to hypertension, diabetes, obesity, and cholesterol and triglyceride alterations.",
      intro:
        "Dr. Eimy Pinto has training in Cardiometabolic Risk Prevention (Universidad de Santander - UDES and Latin American Academy of Lipidology and Cardiovascular Risk - ALALIP, Colombia) and provides assessment focused on the prevention and control of factors associated with cardiovascular disease.",
      consultationIncludes: {
        title: "What does the consultation include?",
        items: [
          "Medical history and physical examination",
          "Blood pressure and vital signs measurement",
          "12-lead electrocardiogram",
          "Weight measurement and body composition analysis",
          "Cardiovascular and metabolic risk factor assessment",
          "Review of laboratory results when applicable",
          "Individualized recommendations",
          "Follow-up plan according to patient needs",
        ],
      },
      targetAudience: {
        title: "Who is this consultation for?",
        subtitle: "People who:",
        items: [
          "Have elevated blood pressure",
          "Have prediabetes or diabetes",
          "Are overweight or obese",
          "Have elevated cholesterol or triglycerides",
          "Lead a sedentary lifestyle",
          "Have family history of cardiovascular disease",
          "Smoke or have other risk factors",
          "Want to prevent diseases even without symptoms",
        ],
      },
      keyMessage: "You don't need to feel sick to start taking care of your health.",
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
      credential: "Diploma in Cardiometabolic Risk Prevention (UDES - ALALIP, Colombia)",
      ctaPreText: "Because often caring for your heart begins before symptoms appear.",
      cta: "I want to know my risk factors",
      ctaMicrocopy: "Comprehensive evaluation • Prevention • Follow-up",
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
      languagesLabel: "Languages",
      collegeLabel: "Medical License",
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
      // Cardiopulmonary Rehabilitation Section
      rehabilitationSection: {
        title: "Cardiopulmonary Rehabilitation",
        items: [
          {
            question: "What is cardiopulmonary rehabilitation?",
            answer: "It is a supervised medical program that combines aerobic and muscle strengthening exercises to improve cardiovascular and functional capacity. It is designed to help people with heart or lung diseases recover their physical capacity through adapted exercise and professional monitoring.",
          },
          {
            question: "Who can benefit from cardiopulmonary rehabilitation?",
            answer: "People who have suffered a heart attack, have received coronary angioplasty or catheterization, are recovering from cardiac surgery, have stable heart failure, have certain cardiovascular diseases, have chronic respiratory diseases, or need to recover physical capacity after a cardiovascular event. The indication always depends on a prior medical evaluation.",
          },
          {
            question: "What are the benefits of cardiopulmonary rehabilitation?",
            answer: "Potential benefits include: improving endurance and physical capacity, strengthening muscles and improving cardiovascular condition, contributing to risk factor control, decreasing fatigue and improving exercise tolerance, promoting emotional wellbeing, and helping reduce the risk of new hospitalizations and cardiovascular complications. Results depend on individual condition and medical follow-up.",
          },
          {
            question: "Is it safe to exercise after a heart attack?",
            answer: "Yes, when done under proper medical supervision. The cardiopulmonary rehabilitation program is designed precisely so that people who have suffered a cardiovascular event can exercise safely, with continuous monitoring of heart rate, blood pressure, oxygen saturation, and heart rhythm. Safety and timing depend on individual medical evaluation.",
          },
          {
            question: "How long does the rehabilitation program last?",
            answer: "The program includes 36 rehabilitation sessions, with sessions of approximately 30 to 60 minutes and a frequency of 2 to 3 times per week. Total duration depends on individual progress and each patient's needs.",
          },
          {
            question: "What type of exercises are performed in rehabilitation?",
            answer: "The program combines aerobic exercise (such as walking, stationary cycling) and muscle strengthening exercise, all personalized according to initial assessment. Exercises are adapted to each patient's capacity and progress.",
          },
          {
            question: "Do I need a medical evaluation before starting?",
            answer: "Yes, an initial medical evaluation is necessary to assess your current condition, establish an appropriate starting point, and design a personalized exercise program according to your needs and capabilities.",
          },
          {
            question: "Can I participate if I have heart failure?",
            answer: "Yes, cardiopulmonary rehabilitation is indicated for people with stable heart failure. Participation depends on a medical evaluation that determines if it is the right time to start the program.",
          },
          {
            question: "Is the heart monitored during sessions?",
            answer: "Yes, during all sessions continuous monitoring of heart rate, blood pressure, oxygen saturation, and heart rhythm is performed through telemetry. This allows safe exercise and timely detection of any alterations.",
          },
          {
            question: "Do I need to be in good physical condition to participate?",
            answer: "No. The program is designed precisely for people who need to recover their physical capacity. Exercises are adapted to your current condition and progress gradually according to your evolution.",
          },
          {
            question: "Does rehabilitation help prevent another heart attack?",
            answer: "Cardiopulmonary rehabilitation contributes to cardiovascular risk factor control and can help reduce the risk of new hospitalizations and cardiovascular complications. It is part of a comprehensive approach that also includes lifestyle changes and medical follow-up.",
          },
          {
            question: "What happens when I finish the rehabilitation program?",
            answer: "At the end of the program, an evaluation of the progress achieved is performed and continuity recommendations are provided to maintain the benefits obtained. The goal is for you to continue with an active lifestyle safely and independently.",
          },
          {
            question: "Can I participate if I am an older adult?",
            answer: "Yes, cardiopulmonary rehabilitation can benefit older adults. The program adapts to each person's specific capabilities and needs, regardless of age. Participation depends on individual medical evaluation.",
          },
          {
            question: "When can I start after cardiac surgery or heart attack?",
            answer: "The start time depends on individual medical evaluation. Generally, rehabilitation can begin once the patient is stable and has been authorized by their treating physician. Each case is different and requires personalized evaluation.",
          },
          {
            question: "Why choose a supervised rehabilitation program?",
            answer: "A supervised program offers continuous professional monitoring, exercises adapted to your specific condition, tracking of your progress, and the security of having medical care available during sessions. This is especially important for people with cardiovascular or pulmonary conditions.",
          },
        ],
        cta: "Inquire about rehabilitation",
      },
      // General Medicine and Cardiometabolic Prevention Section
      cardiometabolicSection: {
        title: "General Medicine and Cardiometabolic Prevention",
        items: [
          {
            question: "What is a consultation with cardiometabolic prevention focus?",
            answer: "It is a general medicine consultation focused on prevention, early detection, and control of risk factors related to hypertension, diabetes, obesity, and cholesterol and triglyceride alterations. The goal is to identify risk factors before symptoms or complications appear.",
          },
          {
            question: "What does the general medicine consultation include?",
            answer: "The consultation includes medical history and physical examination, blood pressure and vital signs measurement, 12-lead electrocardiogram, weight measurement and body composition analysis, cardiovascular and metabolic risk factor assessment, review of laboratory results when applicable, individualized recommendations, and follow-up plan according to patient needs.",
          },
          {
            question: "What is body composition analysis?",
            answer: "It is a measurement that allows knowing the proportion of muscle mass, body fat, and other body components. This information is useful for evaluating nutritional and metabolic status, and for establishing more precise health goals than just the scale weight.",
          },
          {
            question: "Why is an electrocardiogram performed during the consultation?",
            answer: "The 12-lead electrocardiogram allows evaluating the heart's electrical activity and detecting possible heart rhythm alterations or other findings that may require attention. It is a non-invasive study that provides valuable information about cardiovascular health.",
          },
          {
            question: "Who should evaluate their cardiometabolic risk?",
            answer: "People who have elevated blood pressure, have prediabetes or diabetes, are overweight or obese, have elevated cholesterol or triglycerides, lead a sedentary lifestyle, have family history of cardiovascular disease, smoke or have other risk factors, or simply want to prevent diseases even without symptoms.",
          },
          {
            question: "Do I need to have an illness to consult?",
            answer: "No. You don't need to feel sick to start taking care of your health. The cardiometabolic prevention consultation is designed both for people with known risk factors and for those who want to evaluate their health status preventively.",
          },
          {
            question: "Is follow-up provided for hypertension, diabetes, or high cholesterol?",
            answer: "Yes. The consultation includes a follow-up plan according to each patient's needs. Accompaniment is offered for controlling high blood pressure, diabetes, cholesterol and triglyceride alterations, and other metabolic risk factors.",
          },
          {
            question: "Does the consultation include nutrition and weight control recommendations?",
            answer: "Yes. Individualized recommendations on healthy lifestyles are provided, which may include guidance on nutrition, physical activity, and weight control. Depending on each case, coordination with other health professionals may be arranged.",
          },
          {
            question: "Where is the office located?",
            answer: "The office is located at Hospital Internacional La Católica, Torre Médica, fifth floor, office 501, Guadalupe, San José, Costa Rica. Home consultations and video consultations are also offered for those who require them.",
          },
          {
            question: "Who performs the medical consultation?",
            answer: "The consultation is performed by Dr. Eimy Stephany Pinto Arita, Physician and Surgeon with a Diploma in Cardiometabolic Risk Prevention from Universidad de Santander (UDES) and the Latin American Academy of Lipidology and Cardiovascular Risk (ALALIP) of Colombia.",
          },
        ],
        cta: "Schedule medical assessment",
      },
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
