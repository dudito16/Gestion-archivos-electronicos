/** Content for Week 14's "Evaluación de la confiabilidad de un repositorio digital institucional" workshop case. */

export const tallerDisclaimer = "CASO ACADÉMICO SIMULADO — Municipalidad Provincial de Río Verde";

export const tallerScenario =
  "La Municipalidad Provincial de Río Verde (caso académico simulado) planea implementar un repositorio digital para conservar sus expedientes electrónicos con valor permanente. Antes de implementarlo, solicita un diagnóstico académico de confiabilidad, considerando los tres ámbitos de ISO 16363:2025 y su relación con el SGD existente.";

export const tallerDiscussionPrompt =
  "Para discutir en clase antes de responder individualmente: ¿qué le dirían a la Municipalidad de Río Verde si fueran responsables del área de archivo? El docente puede recoger opiniones del grupo antes de que cada estudiante registre su propia propuesta.";

export interface TallerDimensionData {
  id: string;
  number: number;
  label: string;
  prompt: string;
  criteria: string[];
}

export const tallerDimensions: TallerDimensionData[] = [
  {
    id: "organizacional",
    number: 1,
    label: "Infraestructura organizacional",
    prompt: "¿Qué políticas, responsables y planificación de recursos debería tener formalizados la municipalidad antes de implementar el repositorio?",
    criteria: [
      "Identifica políticas concretas que deberían aprobarse formalmente (no basta con mencionarlas en general)",
      "Propone responsables o un área específica, no solo \"alguien debería encargarse\"",
      "Considera la planificación de recursos humanos y financieros, no solo tecnológicos",
    ],
  },
  {
    id: "objetos-digitales",
    number: 2,
    label: "Gestión de objetos digitales",
    prompt: "¿Qué procedimientos de recepción, identificación, metadatos e integridad debería definir para los objetos digitales que conservará?",
    criteria: [
      "Explica qué se comprobaría antes de aceptar un envío (procedimiento de validación)",
      "Menciona qué metadatos (descriptivos, técnicos, de preservación) se requerirían",
      "Indica cómo y con qué frecuencia se verificaría la integridad",
    ],
  },
  {
    id: "infraestructura-seguridad",
    number: 3,
    label: "Infraestructura y seguridad",
    prompt: "¿Qué condiciones de infraestructura tecnológica, redundancia y control de acceso debería exigir?",
    criteria: [
      "Propone un control de acceso por roles, no solo autenticación de usuarios",
      "Considera la redundancia de la infraestructura, no solo su capacidad de almacenamiento",
      "Explica qué registros de seguridad (auditoría de accesos) deberían mantenerse",
    ],
  },
  {
    id: "almacenamiento",
    number: 4,
    label: "Almacenamiento",
    prompt: "¿Qué estrategia de almacenamiento (redundancia, regla 3-2-1, copias externas) propondrías y por qué?",
    criteria: [
      "Justifica la estrategia elegida con el riesgo concreto que resuelve, no solo la nombra",
      "Considera al menos una copia en una ubicación geográficamente distinta",
      "Explica cómo se verificaría periódicamente la integridad de las copias",
    ],
  },
  {
    id: "acceso",
    number: 5,
    label: "Acceso",
    prompt: "¿Qué procedimientos de autenticación, autorización y restricciones de acceso debería implementar?",
    criteria: [
      "Distingue autenticación (quién es el usuario) de autorización (qué puede hacer)",
      "Propone restricciones basadas en la clasificación de la información, no una regla genérica para todos los documentos",
      "Explica qué quedaría registrado sobre cada acceso o entrega",
    ],
  },
  {
    id: "sostenibilidad",
    number: 6,
    label: "Sostenibilidad",
    prompt: "¿Qué riesgos de sostenibilidad financiera, organizacional y tecnológica debería anticipar la municipalidad?",
    criteria: [
      "Diferencia riesgos inmediatos (dependencia de una persona, presupuesto de un solo proyecto) de riesgos derivados a mediano plazo (obsolescencia tecnológica)",
      "Propone una medida concreta para reducir la dependencia de una sola persona",
      "Considera la planificación presupuestal más allá de un proyecto puntual",
    ],
  },
  {
    id: "relacion-sgd",
    number: 7,
    label: "Relación con el SGD",
    prompt: "¿Cómo debería relacionarse el repositorio propuesto con el SGD existente de la municipalidad, y qué criterios de transferencia aplicarías?",
    criteria: [
      "Explica que el SGD y el repositorio cumplen funciones complementarias, no que uno sustituye al otro",
      "Menciona al menos tres criterios de transferencia concretos (p. ej., metadatos, integridad, restricciones de acceso)",
      "Relaciona la propuesta con el flujo de transferencia visto en el Módulo 6",
    ],
  },
];

export const tallerRisksPrompt = "Describe el riesgo.";
export const tallerMeasurePrompt = "Describe la medida correctiva que lo atiende.";

export const tallerRisksMinimum = 5;

export const tallerRisksCriteria = [
  "Cada riesgo puede ocurrir realmente en el caso de Río Verde, no es un riesgo genérico desconectado del caso",
  "Cada medida correctiva responde directamente al riesgo que la precede, no es una recomendación aislada",
  "Los cinco riesgos son distintos entre sí, no la misma idea repetida con otras palabras",
];

export const tallerClosingPrompt =
  "Redacta tu conclusión: un breve diagnóstico orientativo sobre si la municipalidad está en condiciones de implementar un repositorio confiable, y qué debería resolver antes de hacerlo.";

export const tallerClosingCriteria = [
  "Retoma al menos una conclusión de cada ámbito (organizacional, objetos digitales, infraestructura y seguridad)",
  "Indica explícitamente si la municipalidad está o no en condiciones de implementar el repositorio, y qué le falta",
  "No presenta el diagnóstico como una certificación ni como una auditoría formal",
];

export const tallerAcademicDisclaimer =
  "Este diagnóstico es un ejercicio académico con fines formativos. No constituye una auditoría formal ni una certificación conforme a ISO 16363:2025, y no debe presentarse como tal ante ninguna institución real.";
