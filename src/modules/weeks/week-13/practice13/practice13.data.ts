import type { Practice13Question } from "./practice13.types";

export const practice13Questions: Practice13Question[] = [
  // Pregunta 1 — Metadatos de preservación
  {
    id: 1,
    category: "Metadatos de preservación",
    kind: "selectJustify",
    prompt: "¿Cuál de las siguientes opciones describe correctamente qué son los metadatos de preservación? Selecciona la correcta y justifica tu respuesta.",
    points: 2,
    options: [
      { id: "son-descriptivos", label: "Información que únicamente describe el título y el tema de un documento para facilitar su búsqueda" },
      { id: "definicion", label: "Información que puede registrar datos sobre objetos, eventos, agentes, derechos o verificaciones, según corresponda" },
      { id: "son-el-contenido", label: "El propio contenido del archivo digital, sin ninguna información adicional que lo acompañe" },
      { id: "son-software", label: "Un software que ejecuta automáticamente la preservación de los documentos sin intervención humana" },
    ],
    correctIds: ["definicion"],
    minSelected: 1,
    justifyPrompts: ["Explica por qué los metadatos de preservación no son lo mismo que los metadatos descriptivos."],
    justifyMinWords: 8,
    expectedSummary: "Los metadatos de preservación pueden registrar información sobre objetos, eventos, agentes, derechos y verificaciones, según corresponda al caso; no son solo descripción, ni el contenido mismo, ni un software.",
    feedbackByVerdict: {
      correct: "Correcto: los metadatos de preservación pueden documentar objetos, eventos, agentes, derechos y verificaciones, según el caso — un alcance distinto del de la descripción.",
      partial: "Revisa tu selección: solo una opción describe realmente a los metadatos de preservación.",
      review: "Los metadatos de preservación no son la descripción del documento, ni su contenido, ni un software: según corresponda, pueden registrar información sobre objetos, eventos, agentes, derechos y verificaciones que sostienen la preservación.",
    },
  },

  // Pregunta 2 — PREMIS (análisis de una situación breve)
  {
    id: 2,
    category: "PREMIS",
    kind: "compareChoice",
    scenario: "Dos instituciones preservan un expediente digital transferido a su entorno de preservación.",
    prompt: "¿Cuál institución documenta correctamente la preservación conforme a PREMIS?",
    points: 2,
    labelA: "Institución A",
    rowsA: [{ field: "Práctica", value: "Conserva el expediente, pero no registra ningún evento ni agente responsable de las acciones aplicadas" }],
    labelB: "Institución B",
    rowsB: [{ field: "Práctica", value: "Registra cada evento aplicado al expediente de forma estructurada, con información pertinente sobre fecha, resultado y agente" }],
    expected: "b",
    justifyMinWords: 8,
    expectedSummary: "PREMIS requiere documentar estructuradamente los eventos aplicados a un objeto, con la información pertinente sobre fecha, resultado y agente, no solo conservarlo sin registro.",
    feedbackByVerdict: {
      correct: "Correcto: PREMIS exige documentar estructuradamente los eventos aplicados, con la información pertinente sobre su agente y resultado, no solo conservar el expediente.",
      partial: "Tu justificación aporta algo, pero revisa qué institución realmente documenta la preservación conforme a PREMIS.",
      review: "La Institución A conserva el expediente sin documentar ninguna acción, lo cual no es suficiente. La Institución B registra cada evento de forma estructurada, con la información pertinente sobre fecha, resultado y agente — ese es el comportamiento correcto.",
    },
  },

  // Pregunta 3 — METS
  {
    id: 3,
    category: "METS",
    kind: "selectJustify",
    prompt: "¿Cuál de las siguientes opciones describe correctamente la finalidad de la sección structMap de un documento METS? Selecciona la correcta y justifica.",
    points: 2,
    options: [
      { id: "solo-enumera", label: "Enumerar únicamente los archivos digitales, sin representar ninguna relación jerárquica entre ellos" },
      { id: "definicion", label: "Organizar jerárquicamente los archivos listados, representando la estructura lógica del objeto digital completo" },
      { id: "descriptiva", label: "Contener la información descriptiva del objeto, como su título y su fecha de creación" },
      { id: "ejecuta-preservacion", label: "Ejecutar automáticamente las acciones de preservación necesarias sobre los archivos descritos" },
    ],
    correctIds: ["definicion"],
    minSelected: 1,
    justifyPrompts: ["Explica por qué structMap no es lo mismo que fileSec ni que dmdSec."],
    justifyMinWords: 8,
    expectedSummary: "structMap representa las relaciones estructurales entre los archivos; fileSec organiza información sobre esos archivos (sin representar su jerarquía); y dmdSec contiene la descripción del objeto.",
    feedbackByVerdict: {
      correct: "Correcto: structMap representa las relaciones estructurales entre los archivos, una función distinta de fileSec (que organiza información sobre ellos) y de dmdSec (que contiene la descripción).",
      partial: "Revisa la diferencia entre organizar información sobre los archivos (fileSec), describirlos (dmdSec) y representar sus relaciones estructurales (structMap).",
      review: "structMap representa las relaciones estructurales entre los archivos que fileSec organiza. No es la sección descriptiva (dmdSec) ni ejecuta ninguna acción de preservación por sí sola.",
    },
  },

  // Pregunta 4 — Dublin Core (correspondencia)
  {
    id: 4,
    category: "Dublin Core",
    kind: "matchPairs",
    prompt: "Relaciona cada elemento Dublin Core con su finalidad.",
    points: 2,
    concepts: [
      { id: "title", label: "title" },
      { id: "creator", label: "creator" },
      { id: "date", label: "date" },
      { id: "format", label: "format" },
    ],
    definitions: [
      { id: "def-format", label: "Formato, medio o características físicas del recurso, según el contexto" },
      { id: "def-title", label: "Nombre por el que se conoce el recurso" },
      { id: "def-date", label: "Fecha asociada a un evento del ciclo de vida del recurso" },
      { id: "def-creator", label: "Persona u organización principalmente responsable de crear el recurso" },
    ],
    correctPairs: {
      title: "def-title",
      creator: "def-creator",
      date: "def-date",
      format: "def-format",
    },
    expectedSummary: "title↔nombre del recurso; creator↔persona u organización responsable de crearlo; date↔fecha de un evento del ciclo de vida; format↔formato, medio o características físicas, según el contexto.",
    feedbackByVerdict: {
      correct: "Correcto: relacionaste cada elemento Dublin Core con su finalidad exacta.",
      partial: "Relacionaste algunos elementos correctamente; revisa qué finalidad corresponde a cada uno.",
      review: "title es el nombre del recurso; creator es la persona u organización principalmente responsable de crearlo; date es una fecha del ciclo de vida del recurso; format es el formato, medio o características físicas del recurso, según el contexto.",
    },
  },

  // Pregunta 5 — Relación entre estándares
  {
    id: 5,
    category: "Relación entre estándares",
    kind: "selectJustify",
    prompt: "¿Cuál de las siguientes afirmaciones describe correctamente la relación entre PREMIS, METS y Dublin Core? Selecciona la correcta y justifica.",
    points: 2,
    options: [
      { id: "equivalentes", label: "Los tres estándares son equivalentes entre sí y basta con implementar cualquiera de ellos" },
      { id: "definicion", label: "Cada estándar resuelve un problema distinto y pueden complementarse dentro de una misma solución de preservación" },
      { id: "mets-sustituye", label: "METS sustituye a PREMIS, porque ambos describen la estructura interna de los archivos" },
      { id: "dc-registra-eventos", label: "Dublin Core registra los eventos de preservación aplicados a un objeto digital conservado" },
    ],
    correctIds: ["definicion"],
    minSelected: 1,
    justifyPrompts: ["Explica por qué estos tres estándares no son intercambiables entre sí."],
    justifyMinWords: 8,
    expectedSummary: "PREMIS, METS y Dublin Core resuelven problemas distintos (preservación, estructura, descripción) y pueden complementarse, sin ser equivalentes ni sustitutos uno del otro.",
    feedbackByVerdict: {
      correct: "Correcto: cada estándar resuelve un problema distinto, y pueden complementarse sin ser intercambiables.",
      partial: "Revisa por qué ningún estándar de los tres sustituye por completo a los otros dos.",
      review: "PREMIS registra eventos de preservación, METS estructura objetos complejos, y Dublin Core describe el recurso. Son complementarios, no equivalentes ni sustitutos entre sí.",
    },
  },

  // Pregunta 6 — Relación entre estándares (análisis de una situación breve)
  {
    id: 6,
    category: "Relación entre estándares",
    kind: "compareChoice",
    scenario: "Una institución implementa Dublin Core para describir sus expedientes digitales.",
    prompt: "¿Cuál postura institucional es correcta respecto de esta implementación?",
    points: 2,
    labelA: "Postura A",
    rowsA: [{ field: "Postura", value: "Considera que, al describir sus expedientes con Dublin Core, ya no necesita registrar ningún evento de preservación" }],
    labelB: "Postura B",
    rowsB: [{ field: "Postura", value: "Reconoce que Dublin Core describe el recurso, pero aún debe documentar estructuradamente sus eventos y agentes de preservación" }],
    expected: "b",
    justifyMinWords: 8,
    expectedSummary: "Describir un recurso con Dublin Core no sustituye la necesidad de documentar estructuradamente sus eventos y agentes de preservación; PREMIS es un estándar que puede complementar esa necesidad, sin ser obligatorio de forma universal.",
    feedbackByVerdict: {
      correct: "Correcto: Dublin Core describe el recurso, pero la institución aún necesita documentar sus eventos y agentes de preservación; PREMIS puede apoyar esa necesidad, sin ser la única vía posible.",
      partial: "Tu justificación aporta algo, pero revisa si describir un recurso sustituye documentar sus eventos y agentes de preservación.",
      review: "La Postura A asume que Dublin Core basta por sí solo, lo cual es incorrecto. La Postura B reconoce que aún debe documentarse la preservación de forma estructurada, por ejemplo con PREMIS — ese es el enfoque correcto.",
    },
  },

  // Pregunta 7 — BagIt
  {
    id: 7,
    category: "BagIt",
    kind: "selectJustify",
    prompt: "¿Cuál de las siguientes afirmaciones sobre BagIt es correcta? Selecciona la correcta y justifica.",
    points: 2,
    options: [
      { id: "garantiza-autenticidad", label: "Garantiza, por sí solo, la autenticidad histórica de cualquier documento que incluya en su paquete" },
      { id: "definicion", label: "Permite empaquetar archivos con un manifiesto de sumas de verificación que permite comprobar su integridad" },
      { id: "sustituye-todo", label: "Sustituye completamente a OAIS, PREMIS, METS y Dublin Core en todas sus funciones respectivas" },
      { id: "exige-repositorio", label: "Exige instalar un repositorio digital específico antes de poder preparar cualquier paquete" },
    ],
    correctIds: ["definicion"],
    minSelected: 1,
    justifyPrompts: ["Explica por qué una verificación exitosa del manifiesto no demuestra, por sí sola, la autenticidad histórica de un documento."],
    justifyMinWords: 8,
    expectedSummary: "BagIt empaqueta y, a través de las sumas de verificación registradas en su manifiesto, permite comprobar la integridad de los archivos transferidos; no garantiza autenticidad histórica ni sustituye a los demás estándares.",
    feedbackByVerdict: {
      correct: "Correcto: BagIt empaqueta y, mediante las sumas de verificación de su manifiesto, permite comprobar el contenido transferido, sin garantizar autenticidad ni sustituir a otros estándares.",
      partial: "Revisa qué comprueban realmente las sumas de verificación de un manifiesto BagIt, y qué no demuestran por sí solas.",
      review: "BagIt permite empaquetar y, mediante los manifiestos y las sumas de verificación correspondientes, comprobar que el contenido no cambió durante la transferencia. No garantiza autenticidad histórica, no sustituye a OAIS, PREMIS, METS ni Dublin Core, y no exige ningún repositorio específico.",
    },
  },

  // Pregunta 8 — Identificación vs. validación (análisis de una situación breve)
  {
    id: 8,
    category: "Identificación y validación de formatos",
    kind: "compareChoice",
    scenario: "Un archivo ya identificado correctamente como PDF debe conservarse a largo plazo conforme a un perfil de conformidad requerido para este caso (por ejemplo, PDF/A, cuando corresponda).",
    prompt: "¿Cuál acción adicional es la correcta en este caso?",
    points: 2,
    labelA: "Acción A",
    rowsA: [{ field: "Decisión", value: "Considerar que, al identificarlo como PDF, ya no es necesario comprobar nada más sobre el archivo" }],
    labelB: "Acción B",
    rowsB: [{ field: "Decisión", value: "Validar, además, si el archivo cumple el perfil de conformidad requerido en este caso específico" }],
    expected: "b",
    justifyMinWords: 8,
    expectedSummary: "Identificar el formato no demuestra conformidad con un perfil de conformidad requerido para un caso específico (p. ej., PDF/A); eso requiere una validación adicional, sin que esto signifique que todo PDF deba cumplir ese perfil.",
    feedbackByVerdict: {
      correct: "Correcto: identificar y validar son comprobaciones distintas; un archivo identificado correctamente puede necesitar validación adicional frente al perfil requerido en ese caso.",
      partial: "Tu justificación aporta algo, pero revisa si identificar el formato basta para confirmar su conformidad con un perfil requerido.",
      review: "La Acción A asume que identificar basta por sí solo, lo cual es incorrecto. La Acción B valida además la conformidad con el perfil requerido en este caso (p. ej., PDF/A) — ese es el procedimiento correcto, sin que ello implique que todo PDF deba cumplir ese perfil.",
    },
  },

  // Pregunta 9 — Normalización y eventos de preservación
  {
    id: 9,
    category: "Normalización y eventos de preservación",
    kind: "selectJustify",
    prompt: "¿Cuál de las siguientes afirmaciones sobre la normalización de formatos es correcta? Selecciona la correcta y justifica.",
    points: 2,
    options: [
      { id: "automatica", label: "Debe aplicarse de forma automática a todos los archivos antiguos de un repositorio, sin ninguna evaluación" },
      { id: "definicion", label: "Requiere evaluar el riesgo y el impacto antes de transformar un archivo, y debe documentarse como un evento" },
      { id: "elimina-original", label: "Una vez normalizado un archivo, el original debe eliminarse de inmediato para ahorrar espacio" },
      { id: "no-se-registra", label: "No necesita registrarse como evento, porque solo afecta al formato y no al contenido" },
    ],
    correctIds: ["definicion"],
    minSelected: 1,
    justifyPrompts: ["Explica por qué normalizar un archivo sin evaluación previa ni registro posterior es una práctica riesgosa."],
    justifyMinWords: 8,
    expectedSummary: "La normalización requiere evaluación previa del riesgo y el impacto, y debe documentarse como un evento de preservación conforme a los procedimientos aplicables; conservar el original es una práctica habitual, pero no una obligación universal sin matices.",
    feedbackByVerdict: {
      correct: "Correcto: normalizar requiere evaluación previa y debe quedar documentado como un evento de preservación, conforme a los procedimientos aplicables en cada caso.",
      partial: "Revisa por qué la normalización no debe aplicarse automáticamente ni quedar sin registrar.",
      review: "La normalización requiere evaluar el riesgo y el impacto antes de transformar un archivo, y documentarse como un evento de preservación conforme a los procedimientos aplicables; según la política institucional, suele conservarse también el original. Nunca debe aplicarse de forma automática o sin registro.",
    },
  },

  // Pregunta 10 — Aplicación del caso institucional (clasificación)
  {
    id: 10,
    category: "Aplicación — caso institucional",
    kind: "dragClassify",
    scenario: "La Municipalidad Distrital de San Gabriel (caso académico simulado) prepara la transferencia de un expediente de obras públicas con un archivo mal identificado por su extensión.",
    instructions: "Arrastra cada tarea (o tócala y luego toca el estándar) hacia el estándar que la resuelve.",
    prompt: "Clasifica cada tarea del caso según el estándar correspondiente.",
    points: 2,
    items: [
      { id: "registrar-evento-id", label: "Registrar el evento de identificación del archivo mal nombrado, con su resultado y agente responsable", icon: "Fingerprint", category: "premis" },
      { id: "representar-relacion", label: "Representar la relación jerárquica entre el informe principal y sus tres anexos", icon: "FolderTree", category: "mets" },
      { id: "completar-descripcion", label: "Completar el título, la fecha y el tema del expediente para facilitar su búsqueda", icon: "Tags", category: "dublincore" },
      { id: "generar-manifiesto", label: "Generar el manifiesto con el valor de verificación de cada archivo antes de transferirlos", icon: "FolderKanban", category: "bagit" },
      { id: "registrar-agente-validacion", label: "Registrar qué agente ejecutó la validación de conformidad aplicada al archivo", icon: "Fingerprint", category: "premis" },
      { id: "declarar-version-bag", label: "Declarar en bagit.txt la versión de BagIt utilizada, antes de transferir el paquete completo", icon: "FolderKanban", category: "bagit" },
    ],
    categories: [
      { id: "premis", label: "PREMIS", icon: "Fingerprint" },
      { id: "mets", label: "METS", icon: "FolderTree" },
      { id: "dublincore", label: "Dublin Core", icon: "Tags" },
      { id: "bagit", label: "BagIt", icon: "FolderKanban" },
    ],
    expectedSummary: "Cada tarea del caso corresponde a un estándar distinto: eventos y agentes (PREMIS), relaciones estructurales (METS), descripción básica (Dublin Core), y empaquetado verificable (BagIt).",
    feedbackByVerdict: {
      correct: "Correcto: aplicaste correctamente los cuatro estándares a un caso institucional concreto.",
      partial: "Clasificaste correctamente algunas tareas; revisa qué estándar resuelve cada necesidad (registrar eventos, estructurar, describir o empaquetar).",
      review: "PREMIS registra eventos y agentes; METS representa relaciones estructurales; Dublin Core completa la descripción básica; y BagIt empaqueta y permite verificar la transferencia.",
    },
  },
];

export const TOTAL_QUESTIONS_13 = practice13Questions.length;
export const MAX_SCORE_13 = practice13Questions.reduce((sum, q) => sum + q.points, 0);
