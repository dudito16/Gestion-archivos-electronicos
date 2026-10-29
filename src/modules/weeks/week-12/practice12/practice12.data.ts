import type { Practice12Question } from "./practice12.types";

export const practice12Questions: Practice12Question[] = [
  // Pregunta 1 — Fundamentos y finalidad de OAIS
  {
    id: 1,
    category: "Fundamentos del modelo OAIS",
    kind: "selectJustify",
    prompt: "¿Cuál de las siguientes es la definición correcta del modelo OAIS? Selecciona la correcta y justifica tu respuesta.",
    points: 2,
    options: [
      { id: "programa", label: "Un programa de software que, una vez instalado en los servidores institucionales, preserva automáticamente los documentos" },
      { id: "definicion", label: "Un modelo de referencia que organiza funciones, responsabilidades y tipos de información para la preservación digital" },
      { id: "formato", label: "Un formato de archivo especialmente diseñado y certificado para garantizar la preservación digital" },
      { id: "procedimiento-sgd", label: "Un procedimiento interno exclusivo del Sistema de Gestión Documental, sin relación con otros sistemas" },
    ],
    correctIds: ["definicion"],
    minSelected: 1,
    justifyPrompts: ["Explica por qué OAIS no es un programa ni un formato de archivo."],
    justifyMinWords: 8,
    expectedSummary: "OAIS es un modelo de referencia (funciones, responsabilidades, información), no un software, ni un formato, ni un procedimiento exclusivo del SGD.",
    feedbackByVerdict: {
      correct: "Correcto: OAIS describe funciones y responsabilidades de forma conceptual, no es una herramienta que se instala.",
      partial: "Revisa tu selección: solo una opción describe a OAIS como modelo de referencia.",
      review: "OAIS no es un programa, ni un formato, ni un procedimiento exclusivo del SGD: es un modelo de referencia que organiza funciones, responsabilidades y tipos de información para la preservación.",
    },
  },

  // Pregunta 2 — Finalidad: modelo de referencia vs. software
  {
    id: 2,
    category: "Modelo de referencia vs. software",
    kind: "compareChoice",
    scenario: "Dos instituciones adquieren el mismo repositorio digital comercial.",
    prompt: "¿Cuál institución aplica correctamente el modelo OAIS?",
    points: 2,
    labelA: "Institución A",
    rowsA: [{ field: "Enfoque", value: "Adquiere el repositorio y considera que la preservación queda garantizada de forma automática, sin ninguna otra acción" }],
    labelB: "Institución B",
    rowsB: [{ field: "Enfoque", value: "Adquiere el repositorio y además define políticas, procedimientos y responsables siguiendo los conceptos de OAIS" }],
    expected: "b",
    justifyMinWords: 8,
    expectedSummary: "Aplicar OAIS requiere interpretar y sostener sus conceptos con políticas, procedimientos y responsables — la sola adquisición de un software no basta.",
    feedbackByVerdict: {
      correct: "Correcto: el modelo OAIS debe interpretarse y sostenerse institucionalmente; un software no lo aplica por sí solo.",
      partial: "Tu justificación aporta algo, pero revisa cuál institución realmente interpreta y sostiene el modelo, no solo adquiere una herramienta.",
      review: "La Institución A asume que el software basta por sí solo, lo cual es incorrecto. La Institución B interpreta el modelo con políticas y responsables — ese es el enfoque correcto.",
    },
  },

  // Pregunta 3 — Entidad: Ingest
  {
    id: 3,
    category: "Entidades funcionales — Ingest",
    kind: "selectJustify",
    scenario: "Un área de archivo recibe un conjunto de expedientes enviados por otra área para su conservación a largo plazo.",
    prompt: "¿Cuál de las siguientes opciones describe correctamente la función de Ingest en este caso? Selecciona la correcta y justifica.",
    points: 2,
    options: [
      { id: "almacenar-sin-validar", label: "Guardar los archivos recibidos sin ninguna validación adicional" },
      { id: "definicion", label: "Recibir, validar y preparar la información enviada (SIP) para su conservación" },
      { id: "entregar-acceso", label: "Entregar la información directamente a quien la solicite" },
      { id: "monitorear-obsolescencia", label: "Monitorear la obsolescencia tecnológica y recomendar estrategias de preservación" },
    ],
    correctIds: ["definicion"],
    minSelected: 1,
    justifyPrompts: ["Explica por qué entregar información o monitorear obsolescencia no corresponde a Ingest."],
    justifyMinWords: 8,
    expectedSummary: "Ingest recibe, valida y prepara el SIP; entregar información corresponde a Acceso, y monitorear obsolescencia corresponde a Planificación de la Preservación.",
    feedbackByVerdict: {
      correct: "Correcto: Ingest se encarga de recibir, validar y preparar la información recibida, no de entregarla ni de monitorear riesgos tecnológicos.",
      partial: "Revisa la diferencia entre recibir/validar (Ingest), entregar (Acceso) y monitorear obsolescencia (Planificación de la Preservación).",
      review: "Ingest recibe, valida y prepara el SIP para su conservación. Entregar información a quien la solicita es función de Acceso; monitorear obsolescencia es función de Planificación de la Preservación.",
    },
  },

  // Pregunta 4 — Entidades funcionales (correspondencia)
  {
    id: 4,
    category: "Entidades funcionales — correspondencia",
    kind: "matchPairs",
    prompt: "Relaciona cada entidad funcional de OAIS con su responsabilidad principal.",
    points: 2,
    concepts: [
      { id: "administration", label: "Administración" },
      { id: "data-management", label: "Gestión de datos" },
      { id: "preservation-planning", label: "Planificación de la preservación" },
      { id: "access", label: "Acceso" },
    ],
    definitions: [
      { id: "def-acceso", label: "Preparar y entregar el DIP respetando las restricciones de acceso" },
      { id: "def-administracion", label: "Definir políticas y formalizar acuerdos con productores" },
      { id: "def-planificacion", label: "Anticipar riesgos de obsolescencia y recomendar estrategias" },
      { id: "def-gestion-datos", label: "Administrar la información descriptiva de lo conservado" },
    ],
    correctPairs: {
      administration: "def-administracion",
      "data-management": "def-gestion-datos",
      "preservation-planning": "def-planificacion",
      access: "def-acceso",
    },
    expectedSummary: "Administración↔políticas y acuerdos; Gestión de datos↔información descriptiva; Planificación de la preservación↔riesgos y estrategias; Acceso↔entrega respetando restricciones.",
    feedbackByVerdict: {
      correct: "Correcto: relacionaste cada entidad con su responsabilidad principal exacta.",
      partial: "Relacionaste algunas entidades correctamente; revisa qué pregunta responde cada una (quién decide, quién describe, quién anticipa, quién entrega).",
      review: "Administración define políticas y acuerdos; Gestión de Datos administra la información descriptiva; Planificación de la Preservación anticipa riesgos y recomienda estrategias; Acceso entrega respetando restricciones.",
    },
  },

  // Pregunta 5 — SIP
  {
    id: 5,
    category: "Paquetes de información — SIP",
    kind: "selectJustify",
    prompt: "¿Cuál de las siguientes afirmaciones sobre el SIP es correcta? Selecciona la correcta y justifica.",
    points: 2,
    options: [
      { id: "siempre-completo", label: "El SIP siempre contiene metadatos completos y perfectamente organizados, sin ninguna excepción posible" },
      { id: "definicion", label: "El SIP es el paquete que el productor prepara y envía para su ingreso al entorno de preservación" },
      { id: "igual-aip", label: "El SIP y el AIP son exactamente el mismo paquete de información, solo con nombres distintos" },
      { id: "lo-prepara-consumidor", label: "El SIP lo prepara y organiza el consumidor para poder solicitar acceso a la información" },
    ],
    correctIds: ["definicion"],
    minSelected: 1,
    justifyPrompts: ["Explica por qué el SIP no siempre llega con metadatos completos."],
    justifyMinWords: 8,
    expectedSummary: "El SIP es lo que el productor envía para el ingreso; puede llegar con metadatos incompletos (que Ingest y Gestión de Datos deben completar), y no es lo mismo que el AIP ni lo prepara el consumidor.",
    feedbackByVerdict: {
      correct: "Correcto: el SIP es el envío del productor para su ingreso, no una versión idéntica al AIP ni algo que prepara el consumidor.",
      partial: "Revisa por qué el SIP puede llegar con información incompleta y por qué no es lo mismo que el AIP.",
      review: "El SIP es el paquete que el productor prepara y envía para su ingreso. No siempre llega completo, no es idéntico al AIP, y no lo prepara el consumidor — eso correspondería al DIP, preparado por la función de Acceso.",
    },
  },

  // Pregunta 6 — AIP
  {
    id: 6,
    category: "Paquetes de información — AIP",
    kind: "selectJustify",
    prompt: "¿Cuál de las siguientes afirmaciones sobre el AIP es correcta? Selecciona la correcta y justifica.",
    points: 2,
    options: [
      { id: "copia-simple", label: "El AIP es simplemente una copia idéntica del archivo original, sin ninguna información adicional" },
      { id: "definicion", label: "El AIP incluye información de contenido e información de preservación (procedencia, integridad, historial de acciones)" },
      { id: "nunca-accion-posterior", label: "El AIP, una vez creado, nunca puede estar sujeto a ninguna acción de preservación posterior" },
      { id: "lo-recibe-consumidor", label: "El AIP es lo que recibe directamente el consumidor ante cada solicitud" },
    ],
    correctIds: ["definicion"],
    minSelected: 1,
    justifyPrompts: ["Explica por qué el AIP no debe reducirse a una simple copia del archivo original."],
    justifyMinWords: 8,
    expectedSummary: "El AIP suma información de preservación al contenido; puede estar sujeto a acciones posteriores (como una migración); y no es lo que recibe directamente el consumidor — eso es el DIP.",
    feedbackByVerdict: {
      correct: "Correcto: el AIP conserva información de preservación además del contenido, y puede ser objeto de acciones futuras planificadas.",
      partial: "Revisa por qué el AIP no es una copia simple ni algo inmutable para siempre.",
      review: "El AIP incluye información de preservación (procedencia, integridad, historial) además del contenido. Puede estar sujeto a acciones posteriores (p. ej. una migración recomendada por Planificación de la Preservación), y el consumidor recibe un DIP, no el AIP directamente.",
    },
  },

  // Pregunta 7 — DIP (análisis de una situación breve)
  {
    id: 7,
    category: "Paquetes de información — DIP",
    kind: "compareChoice",
    scenario: "Un ciudadano autorizado solicita copia de una resolución específica dentro de un expediente que contiene varios documentos, algunos con información reservada.",
    prompt: "¿Cuál de las siguientes entregas es la correcta?",
    points: 2,
    labelA: "Entrega A",
    rowsA: [{ field: "Contenido del DIP", value: "El expediente completo, incluyendo los documentos con información reservada" }],
    labelB: "Entrega B",
    rowsB: [{ field: "Contenido del DIP", value: "Únicamente la resolución solicitada, respetando las restricciones de acceso vigentes" }],
    expected: "b",
    justifyMinWords: 8,
    expectedSummary: "El DIP debe contener lo pertinente a la solicitud específica, respetando las restricciones de acceso — no necesariamente todo el expediente ni la información reservada.",
    feedbackByVerdict: {
      correct: "Correcto: el DIP se ajusta a la solicitud y respeta las restricciones de acceso vigentes.",
      partial: "Tu justificación aporta algo, pero revisa qué entrega respeta las restricciones de acceso del caso.",
      review: "Entregar el expediente completo, incluyendo información reservada, viola las restricciones de acceso. El DIP correcto contiene únicamente lo solicitado y autorizado.",
    },
  },

  // Pregunta 8 — Relación SGD-OAIS
  {
    id: 8,
    category: "Relación OAIS–SGD–repositorio",
    kind: "selectJustify",
    prompt: "¿Cuál de las siguientes afirmaciones describe correctamente la relación entre el SGD y el modelo OAIS? Selecciona la correcta y justifica.",
    points: 2,
    options: [
      { id: "son-iguales", label: "El SGD y el modelo OAIS son exactamente lo mismo, sin ninguna diferencia real" },
      { id: "definicion", label: "El SGD gestiona el trámite documental activo; OAIS organiza, como modelo de referencia, la preservación de lo transferido" },
      { id: "oais-reemplaza-sgd", label: "El modelo OAIS reemplaza por completo al SGD y elimina toda necesidad de gestión documental institucional" },
      { id: "sgd-preserva-automaticamente", label: "Todo lo gestionado en el SGD queda preservado automáticamente conforme al modelo OAIS, sin más acciones" },
    ],
    correctIds: ["definicion"],
    minSelected: 1,
    justifyPrompts: ["Explica por qué gestionar bien un documento en el SGD no equivale a haberlo preservado conforme a OAIS."],
    justifyMinWords: 8,
    expectedSummary: "El SGD y OAIS cumplen funciones distintas y complementarias: gestión activa vs. preservación a largo plazo; ninguno reemplaza ni garantiza automáticamente al otro.",
    feedbackByVerdict: {
      correct: "Correcto: el SGD y OAIS son complementarios, no equivalentes ni sustitutos uno del otro.",
      partial: "Revisa por qué el SGD no reemplaza a OAIS ni viceversa, y por qué la gestión documental no implica preservación automática.",
      review: "El SGD gestiona el trámite documental activo (Semanas 2-9); OAIS organiza conceptualmente la preservación de lo que, según la política institucional, deba transferirse. No son lo mismo, no se reemplazan, y la gestión en el SGD no garantiza preservación automática.",
    },
  },

  // Pregunta 9 — Relación repositorio-OAIS (análisis de una situación breve)
  {
    id: 9,
    category: "Relación OAIS–SGD–repositorio",
    kind: "compareChoice",
    scenario: "Dos instituciones tienen un repositorio digital.",
    prompt: "¿Cuál afirmación sobre la relación entre un repositorio y el modelo OAIS es correcta?",
    points: 2,
    labelA: "Afirmación A",
    rowsA: [{ field: "Postura", value: "Cualquier repositorio digital, por el solo hecho de existir, ya implementa el modelo OAIS de manera completa y definitiva" }],
    labelB: "Afirmación B",
    rowsB: [{ field: "Postura", value: "Un repositorio puede adoptar principios y funciones de OAIS según su diseño y gestión, sin que eso sea automático" }],
    expected: "b",
    justifyMinWords: 8,
    expectedSummary: "La adopción de OAIS por un repositorio depende del diseño y la gestión institucional — no es una propiedad automática de tener un repositorio.",
    feedbackByVerdict: {
      correct: "Correcto: un repositorio puede adoptar OAIS según su diseño, pero eso no ocurre automáticamente por su sola existencia.",
      partial: "Revisa por qué la sola existencia de un repositorio no garantiza la implementación completa de OAIS.",
      review: "Un repositorio puede adoptar, parcial o totalmente, los conceptos de OAIS, pero eso depende de decisiones institucionales de diseño y gestión — no es automático.",
    },
  },

  // Pregunta 10 — Aplicación del caso institucional (clasificación)
  {
    id: 10,
    category: "Aplicación — caso institucional",
    kind: "dragClassify",
    scenario: "La Municipalidad Distrital de San Gabriel (caso académico simulado) transfiere expedientes de obras públicas a un entorno de preservación digital.",
    instructions: "Arrastra cada tarea (o tócala y luego toca la entidad) hacia la entidad funcional de OAIS responsable de ejecutarla.",
    prompt: "Clasifica cada tarea del caso según la entidad funcional de OAIS responsable.",
    points: 2,
    items: [
      { id: "formalizar-acuerdo", label: "Formalizar el acuerdo de transferencia con el área productora de los expedientes", icon: "ClipboardList", category: "administration" },
      { id: "validar-sip", label: "Validar que los expedientes recibidos como SIP estén completos antes de aceptarlos", icon: "FilePlus", category: "ingest" },
      { id: "completar-metadatos", label: "Completar y organizar los metadatos faltantes de los expedientes", icon: "Database", category: "data-management" },
      { id: "verificar-integridad", label: "Verificar periódicamente la integridad de los expedientes ya conservados", icon: "ShieldCheck", category: "archival-storage" },
      { id: "anticipar-obsolescencia", label: "Anticipar el riesgo de que el formato de los expedientes técnicos quede obsoleto", icon: "RefreshCw", category: "preservation-planning" },
      { id: "preparar-entrega-restringida", label: "Preparar la entrega de un expediente respetando las restricciones de acceso vigentes", icon: "FileSearch", category: "access" },
    ],
    categories: [
      { id: "administration", label: "Administración", icon: "ClipboardList" },
      { id: "ingest", label: "Ingest", icon: "FilePlus" },
      { id: "data-management", label: "Gestión de datos", icon: "Database" },
      { id: "archival-storage", label: "Almacenamiento archivístico", icon: "Archive" },
      { id: "preservation-planning", label: "Planificación de la preservación", icon: "RefreshCw" },
      { id: "access", label: "Acceso", icon: "FileSearch" },
    ],
    expectedSummary: "Cada tarea del caso corresponde a una entidad funcional distinta: acuerdos (Administración), validación del SIP (Ingest), metadatos (Gestión de Datos), integridad de lo conservado (Almacenamiento Archivístico), riesgo de obsolescencia (Planificación de la Preservación), y entrega restringida (Acceso).",
    feedbackByVerdict: {
      correct: "Correcto: aplicaste correctamente las seis entidades funcionales a un caso institucional concreto.",
      partial: "Clasificaste correctamente algunas tareas; revisa qué entidad es responsable de cada momento del flujo (acuerdo, ingreso, descripción, conservación, anticipación de riesgos, entrega).",
      review: "Formalizar acuerdos es Administración; validar el SIP es Ingest; completar metadatos es Gestión de Datos; verificar integridad de lo conservado es Almacenamiento Archivístico; anticipar obsolescencia es Planificación de la Preservación; y preparar una entrega restringida es Acceso.",
    },
  },
];

export const TOTAL_QUESTIONS_12 = practice12Questions.length;
export const MAX_SCORE_12 = practice12Questions.reduce((sum, q) => sum + q.points, 0);
