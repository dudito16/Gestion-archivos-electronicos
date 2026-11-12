import type { Practice14Question } from "./practice14.types";

export const practice14Questions: Practice14Question[] = [
  // Pregunta 1 — Conceptos de repositorios digitales
  {
    id: 1,
    category: "Conceptos de repositorios digitales",
    kind: "multipleChoice",
    prompt: "¿Cuál afirmación describe correctamente qué es un repositorio digital confiable?",
    points: 2,
    options: [
      { id: "servidor-capacidad", label: "Un servidor con suficiente capacidad de almacenamiento para todos los documentos de la institución" },
      { id: "definicion", label: "Un sistema que organiza, da acceso y sostiene la preservación mediante políticas, controles y responsabilidades" },
      { id: "backup-automatico", label: "Un sistema que realiza copias de seguridad automáticas cada noche, sin ninguna otra condición" },
      { id: "software-certifica", label: "Un software que certifica automáticamente el cumplimiento de ISO 16363 al instalarse" },
    ],
    correctId: "definicion",
    expectedSummary: "Un repositorio confiable sostiene la preservación mediante políticas, controles y responsabilidades, no solo capacidad de almacenamiento o copias automáticas.",
    feedbackByVerdict: {
      correct: "Correcto: la confiabilidad depende de políticas, controles y responsabilidades sostenidas, no solo de la capacidad técnica del servidor.",
      incorrect: "Un repositorio confiable no se define por su capacidad de almacenamiento, por hacer copias automáticas, ni por ningún software que se autocertifique: requiere políticas, controles y responsabilidades sostenidas en el tiempo.",
    },
  },

  // Pregunta 2 — Conceptos de repositorios digitales (escenario)
  {
    id: 2,
    category: "Conceptos de repositorios digitales",
    kind: "multipleChoice",
    scenario: "Una institución tiene servidores modernos y realiza copias de seguridad diarias, pero no cuenta con una política de preservación, ni verifica la integridad de sus documentos, ni tiene responsables formalmente asignados.",
    prompt: "¿Puede afirmarse que esta institución dispone de un repositorio digital confiable?",
    points: 2,
    options: [
      { id: "si-tecnologia", label: "Sí, porque la tecnología empleada es moderna y suficiente" },
      { id: "no-faltan-condiciones", label: "No, porque faltan política de preservación, verificación de integridad y responsables asignados" },
      { id: "si-copias-diarias", label: "Sí, siempre que las copias de seguridad se realicen a diario" },
      { id: "depende-proveedor", label: "No puede determinarse sin conocer qué proveedor administra el servidor" },
    ],
    correctId: "no-faltan-condiciones",
    expectedSummary: "La tecnología moderna y las copias de seguridad no bastan: faltan política, verificación de integridad y responsables formalmente asignados.",
    feedbackByVerdict: {
      correct: "Correcto: sin política de preservación, verificación de integridad y responsables asignados, no puede afirmarse que el repositorio sea confiable, por moderna que sea su tecnología.",
      incorrect: "La tecnología moderna y las copias diarias no bastan por sí solas: sin política de preservación, verificación de integridad y responsables formalmente asignados, no puede afirmarse que el repositorio sea confiable.",
    },
  },

  // Pregunta 3 — Características de confiabilidad
  {
    id: 3,
    category: "Características de confiabilidad",
    kind: "multipleChoice",
    prompt: "¿Qué característica de confiabilidad se compromete cuando un documento conservado no coincide con su valor de referencia (hash) registrado al ingreso?",
    points: 2,
    options: [
      { id: "confidencialidad-3", label: "Confidencialidad" },
      { id: "integridad-3", label: "Integridad" },
      { id: "sostenibilidad-3", label: "Sostenibilidad" },
      { id: "disponibilidad-3", label: "Disponibilidad" },
    ],
    correctId: "integridad-3",
    expectedSummary: "Un hash diferente al registrado compromete directamente la integridad del documento.",
    feedbackByVerdict: {
      correct: "Correcto: un valor de hash distinto al registrado indica, precisamente, un problema de integridad.",
      incorrect: "La confidencialidad, la sostenibilidad y la disponibilidad no se ven comprometidas directamente por un hash diferente: lo que se compromete es la integridad del documento.",
    },
  },

  // Pregunta 4 — Características de confiabilidad
  {
    id: 4,
    category: "Características de confiabilidad",
    kind: "multipleChoice",
    prompt: "¿Cuál de las siguientes opciones SÍ constituye evidencia de trazabilidad sobre un documento conservado?",
    points: 2,
    options: [
      { id: "registro-eventos-4", label: "Un registro de eventos con su fecha, resultado y agente responsable" },
      { id: "tamano-bytes-4", label: "El tamaño en bytes que ocupa actualmente el archivo en el servidor" },
      { id: "solo-almacenado-4", label: "El hecho de que el documento siga almacenado en el servidor" },
      { id: "nombre-extension-4", label: "El nombre y la extensión con que fue guardado originalmente el archivo" },
    ],
    correctId: "registro-eventos-4",
    expectedSummary: "La trazabilidad exige un registro de las acciones realizadas sobre el objeto; el tamaño, el nombre o que siga almacenado son datos del archivo, no un registro de lo que le ha ocurrido.",
    feedbackByVerdict: {
      correct: "Correcto: un registro de eventos con fecha, resultado y agente responsable permite reconstruir qué ocurrió con el documento — eso es trazabilidad.",
      incorrect: "El tamaño del archivo, su nombre y extensión, o que simplemente siga almacenado son datos o atributos del archivo, no un registro de acciones: ninguno permite reconstruir qué le ha ocurrido al documento, que es lo que exige la trazabilidad.",
    },
  },

  // Pregunta 5 — ISO 16363:2025
  {
    id: 5,
    category: "ISO 16363:2025",
    kind: "multipleChoice",
    prompt: "¿Qué evalúa principalmente la norma ISO 16363:2025?",
    points: 2,
    options: [
      { id: "exclusivo-tecnologia-5", label: "Exclusivamente la infraestructura tecnológica utilizada por el repositorio" },
      { id: "definicion-5", label: "Criterios de infraestructura organizacional, gestión de objetos digitales, y seguridad tecnológica" },
      { id: "software-especifico-5", label: "Qué software específico debe utilizar cada repositorio institucional" },
      { id: "presupuesto-anual-5", label: "El presupuesto anual exacto que debe asignar cada institución" },
    ],
    correctId: "definicion-5",
    expectedSummary: "ISO 16363 evalúa, de forma integrada, criterios organizacionales, de gestión de objetos digitales y de infraestructura/seguridad.",
    feedbackByVerdict: {
      correct: "Correcto: ISO 16363 evalúa de forma integrada los tres ámbitos (organizacional, objetos digitales, infraestructura/seguridad), no solo la tecnología.",
      incorrect: "ISO 16363 no se limita a la tecnología, ni exige un software específico, ni fija un presupuesto exacto: evalúa criterios organizacionales, de gestión de objetos digitales y de infraestructura/seguridad de forma integrada.",
    },
  },

  // Pregunta 6 — ISO 16363:2025 (escenario)
  {
    id: 6,
    category: "ISO 16363:2025",
    kind: "multipleChoice",
    scenario: "Una institución cuenta con servidores de última generación, pero carece de políticas de preservación aprobadas y de responsables formalmente asignados al repositorio.",
    prompt: "Conforme a los tres ámbitos de ISO 16363, ¿cuál se encuentra más comprometido en este caso?",
    points: 2,
    options: [
      { id: "ambito-c-6", label: "C. Infraestructura y seguridad" },
      { id: "ambito-a-6", label: "A. Infraestructura organizacional" },
      { id: "ambito-b-6", label: "B. Gestión de objetos digitales" },
      { id: "ninguno-6", label: "Ninguno, porque la tecnología empleada es adecuada" },
    ],
    correctId: "ambito-a-6",
    expectedSummary: "La falta de políticas aprobadas y responsables asignados compromete, principalmente, el ámbito A (infraestructura organizacional).",
    feedbackByVerdict: {
      correct: "Correcto: la falta de políticas y responsables asignados corresponde al ámbito de infraestructura organizacional, independientemente de la calidad de la tecnología.",
      incorrect: "La tecnología adecuada no resuelve la falta de políticas ni de responsables asignados: ese hallazgo corresponde al ámbito A (infraestructura organizacional), no al C ni al B.",
    },
  },

  // Pregunta 7 — Auditoría
  {
    id: 7,
    category: "Auditoría",
    kind: "multipleChoice",
    prompt: "¿Cuál afirmación distingue correctamente una auditoría formal de una autoevaluación académica?",
    points: 2,
    options: [
      { id: "son-iguales-7", label: "Son exactamente lo mismo, con nombres distintos y ningún otro matiz real que las diferencie" },
      { id: "definicion-7", label: "La auditoría formal, basada en evidencias, puede conducir a una certificación emitida por una entidad competente" },
      { id: "autoeval-certifica-7", label: "La autoevaluación académica certifica automáticamente al repositorio evaluado, sin necesidad de ninguna auditoría externa" },
      { id: "sin-evidencias-7", label: "La auditoría formal no requiere evidencias concretas, solo declaraciones institucionales generales sin comprobación" },
    ],
    correctId: "definicion-7",
    expectedSummary: "La auditoría formal, basada en evidencias, puede conducir a una certificación emitida por una entidad competente; la autoevaluación académica tiene fines formativos y no certifica nada.",
    feedbackByVerdict: {
      correct: "Correcto: solo una auditoría formal basada en evidencias puede conducir a una certificación, y esa certificación la emite una entidad competente; la autoevaluación académica es formativa y no certifica.",
      incorrect: "Una auditoría formal y una autoevaluación académica no son lo mismo: solo la primera, basada en evidencias concretas, puede conducir a una certificación — y esa certificación la emite una entidad competente, no la propia auditoría.",
    },
  },

  // Pregunta 8 — Arquitectura
  {
    id: 8,
    category: "Arquitectura",
    kind: "multipleChoice",
    prompt: "En la arquitectura de un repositorio de preservación, ¿qué función cumple la identificación de formatos?",
    points: 2,
    options: [
      { id: "genera-paquete-8", label: "Genera directamente el paquete de preservación final, sin ningún paso previo" },
      { id: "definicion-8", label: "Determina el formato real del archivo, más allá de su extensión, antes de procesarlo" },
      { id: "aplica-restricciones-8", label: "Aplica las restricciones de acceso a cualquier solicitud de consulta recibida" },
      { id: "gestion-metadatos-8", label: "Completa y organiza los metadatos descriptivos y técnicos del objeto" },
    ],
    correctId: "definicion-8",
    expectedSummary: "La identificación de formatos determina el formato real de cada archivo antes de continuar su procesamiento; completar metadatos es la función de otro componente distinto (gestión de metadatos).",
    feedbackByVerdict: {
      correct: "Correcto: la identificación de formatos determina el formato real del archivo, un paso previo a generar el paquete de preservación, aplicar restricciones de acceso o completar los metadatos.",
      incorrect: "La identificación de formatos no genera el paquete final, ni aplica restricciones de acceso, ni completa los metadatos (esa es la función de Gestión de metadatos, un componente distinto): determina el formato real de cada archivo antes de continuar su procesamiento.",
    },
  },

  // Pregunta 9 — Arquitectura (escenario)
  {
    id: 9,
    category: "Arquitectura",
    kind: "multipleChoice",
    scenario: "Un archivo nombrado \"resolucion.pdf\" llega al repositorio como parte de una transferencia recién validada.",
    prompt: "Antes de generar su paquete de preservación, ¿qué componente de la arquitectura debe intervenir primero?",
    points: 2,
    options: [
      { id: "gestion-acceso-9", label: "Gestión de acceso" },
      { id: "recuperacion-consulta-9", label: "Recuperación y consulta" },
      { id: "identificacion-formatos-9", label: "Identificación de formatos" },
      { id: "generacion-directa-9", label: "Generación de paquetes de preservación, de forma directa" },
    ],
    correctId: "identificacion-formatos-9",
    expectedSummary: "Antes de generar el paquete de preservación, debe identificarse el formato real del archivo recibido.",
    feedbackByVerdict: {
      correct: "Correcto: la identificación de formatos debe ocurrir antes de generar el paquete de preservación, para no asumir que la extensión del archivo es suficiente.",
      incorrect: "La gestión de acceso y la recuperación y consulta ocurren en otro momento del flujo; y generar el paquete directamente, sin identificar antes el formato real, repetiría el error de confiar solo en la extensión del archivo.",
    },
  },

  // Pregunta 10 — Almacenamiento
  {
    id: 10,
    category: "Almacenamiento",
    kind: "multipleChoice",
    scenario: "Una institución mantiene dos copias de sus documentos, pero ambas se encuentran en el mismo edificio.",
    prompt: "¿Qué principio de almacenamiento está incumpliendo esta institución?",
    points: 2,
    options: [
      { id: "verificacion-integridad-10", label: "La verificación periódica de integridad de los documentos" },
      { id: "regla-321-10", label: "La regla 3-2-1, que exige al menos una copia externa" },
      { id: "gestion-metadatos-10", label: "La gestión completa de los metadatos de preservación" },
      { id: "identificacion-formatos-10", label: "La identificación técnica correcta de los formatos de archivo" },
    ],
    correctId: "regla-321-10",
    expectedSummary: "Mantener ambas copias en el mismo edificio incumple la regla 3-2-1, que exige al menos una copia externa.",
    feedbackByVerdict: {
      correct: "Correcto: dos copias en el mismo edificio no constituyen redundancia real frente a un incidente físico — incumple la regla 3-2-1.",
      incorrect: "El problema descrito no es de verificación de integridad, metadatos ni identificación de formatos: es que ambas copias comparten la misma ubicación física, incumpliendo la regla 3-2-1.",
    },
  },

  // Pregunta 11 — Acceso y seguridad
  {
    id: 11,
    category: "Acceso y seguridad",
    kind: "multipleChoice",
    scenario: "Un usuario modifica un documento conservado sin que exista ningún registro de la operación realizada.",
    prompt: "¿Qué control de seguridad falta principalmente en este caso?",
    points: 2,
    options: [
      { id: "restricciones-confidencialidad-11", label: "Restricciones de confidencialidad sobre el contenido del documento" },
      { id: "registro-operaciones-11", label: "Registro de operaciones de auditoría asociado al control de acceso" },
      { id: "politica-sostenibilidad-11", label: "Una política de sostenibilidad financiera para el repositorio" },
      { id: "identificacion-formatos-11", label: "La identificación del formato del documento modificado" },
    ],
    correctId: "registro-operaciones-11",
    expectedSummary: "Sin registro de operaciones, una modificación no autorizada no puede detectarse ni investigarse.",
    feedbackByVerdict: {
      correct: "Correcto: sin registro de operaciones, la modificación no deja evidencia que permita detectarla ni investigarla.",
      incorrect: "El problema no es de confidencialidad, sostenibilidad financiera ni identificación de formatos: es la falta de un registro de operaciones que permita detectar e investigar la modificación.",
    },
  },

  // Pregunta 12 — Acceso y seguridad (escenario)
  {
    id: 12,
    category: "Acceso y seguridad",
    kind: "multipleChoice",
    scenario: "Un documento con información reservada se entrega a un usuario sin verificar previamente si contaba con autorización.",
    prompt: "¿Qué riesgo se materializó en este caso?",
    points: 2,
    options: [
      { id: "obsolescencia-12", label: "Riesgo de obsolescencia tecnológica" },
      { id: "sostenibilidad-12", label: "Riesgo de sostenibilidad organizacional" },
      { id: "confidencialidad-12", label: "Riesgo de confidencialidad" },
      { id: "identificacion-12", label: "Riesgo de identificación de formatos" },
    ],
    correctId: "confidencialidad-12",
    expectedSummary: "Entregar información reservada sin verificar autorización materializa un riesgo de confidencialidad.",
    feedbackByVerdict: {
      correct: "Correcto: entregar información reservada sin verificar la autorización del solicitante es, precisamente, un riesgo de confidencialidad.",
      incorrect: "El caso no corresponde a obsolescencia tecnológica, sostenibilidad organizacional ni identificación de formatos: es un riesgo de confidencialidad, por entregar información reservada sin verificar autorización.",
    },
  },

  // Pregunta 13 — Sostenibilidad
  {
    id: 13,
    category: "Sostenibilidad",
    kind: "multipleChoice",
    scenario: "Un repositorio depende por completo de una sola persona que conoce los procedimientos, y de un presupuesto asignado únicamente para un proyecto ya vencido.",
    prompt: "¿Qué dimensiones de sostenibilidad están comprometidas de forma inmediata y directa en este caso?",
    points: 2,
    options: [
      { id: "unicamente-tecnologica-13", label: "Únicamente la sostenibilidad tecnológica" },
      { id: "organizacional-financiera-13", label: "La sostenibilidad organizacional y la financiera" },
      { id: "ninguna-13", label: "Ninguna, mientras el sistema siga funcionando técnicamente" },
      { id: "unicamente-acceso-13", label: "Únicamente las condiciones de acceso del repositorio" },
    ],
    correctId: "organizacional-financiera-13",
    expectedSummary: "De forma inmediata, el caso compromete la sostenibilidad organizacional (dependencia de una persona) y la financiera (presupuesto vencido); la sostenibilidad tecnológica es, en todo caso, un riesgo derivado a mediano plazo, no el riesgo directo de este caso.",
    feedbackByVerdict: {
      correct: "Correcto: depender de una sola persona compromete de inmediato la sostenibilidad organizacional, y depender de un presupuesto de proyecto vencido compromete de inmediato la sostenibilidad financiera. La sostenibilidad tecnológica podría verse afectada más adelante, como consecuencia de estas dos, pero no es el riesgo directo descrito aquí.",
      incorrect: "El riesgo descrito no es exclusivamente tecnológico, ni de acceso, ni inexistente: de forma inmediata y directa, compromete la sostenibilidad organizacional (por la dependencia de una sola persona) y la financiera (por el presupuesto vencido). Lo tecnológico podría comprometerse más adelante, como consecuencia de estas dos, pero no es el riesgo inmediato de este caso.",
    },
  },

  // Pregunta 14 — Relación SGD–repositorio
  {
    id: 14,
    category: "Relación SGD–repositorio",
    kind: "multipleChoice",
    prompt: "¿Cuál afirmación describe correctamente la relación entre el SGD y el repositorio de preservación?",
    points: 2,
    options: [
      { id: "sustituye-14", label: "El repositorio sustituye por completo al SGD en cuanto se implementa formalmente" },
      { id: "definicion-14", label: "Son complementarios: el SGD gestiona el trámite activo y el repositorio conserva a largo plazo lo transferido" },
      { id: "mismo-sistema-14", label: "El SGD y el repositorio son, en la práctica, exactamente el mismo sistema institucional" },
      { id: "antes-sgd-14", label: "El repositorio debe implementarse antes de que exista cualquier SGD en la institución" },
    ],
    correctId: "definicion-14",
    expectedSummary: "El SGD y el repositorio son complementarios: gestión activa frente a conservación a largo plazo de lo transferido.",
    feedbackByVerdict: {
      correct: "Correcto: el SGD y el repositorio cumplen funciones distintas y complementarias, no se sustituyen ni son el mismo sistema.",
      incorrect: "El SGD y el repositorio no se sustituyen entre sí, ni son el mismo sistema, ni exigen un orden de implementación fijo: son complementarios, cada uno con su propia función.",
    },
  },

  // Pregunta 15 — Transferencia de información
  {
    id: 15,
    category: "Transferencia de información",
    kind: "multipleChoice",
    scenario: "Una entidad pública transfiere 100 expedientes electrónicos desde su SGD hacia el repositorio institucional.",
    prompt: "¿Qué debe verificar el repositorio como parte de la recepción de esta transferencia?",
    points: 2,
    options: [
      { id: "solo-volumen-15", label: "Únicamente que el volumen de archivos recibidos coincida con el número esperado" },
      { id: "definicion-15", label: "Que el envío esté completo, la integridad coincida con lo declarado, y existan los metadatos necesarios" },
      { id: "elimina-copia-sgd-15", label: "Que el SGD haya eliminado su propia copia antes de confirmar la entrega" },
      { id: "mismo-formato-15", label: "Que todos los documentos transferidos estén en el mismo formato de archivo" },
    ],
    correctId: "definicion-15",
    expectedSummary: "La recepción debe validar que el envío esté completo, que la integridad coincida con lo declarado, y que existan los metadatos necesarios.",
    feedbackByVerdict: {
      correct: "Correcto: la recepción exige validar que el envío esté completo, verificar la integridad frente a lo declarado, y comprobar que existan los metadatos necesarios — no solo contar archivos.",
      incorrect: "Contar archivos, exigir que el SGD elimine su copia, o exigir un único formato no son los criterios de recepción: deben verificarse la completitud del envío, la integridad declarada y los metadatos necesarios.",
    },
  },
];

export const TOTAL_QUESTIONS_14 = practice14Questions.length;
export const MAX_SCORE_14 = practice14Questions.reduce((sum, q) => sum + q.points, 0);
