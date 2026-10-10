import type { Practice11Question } from "./practice11.types";

export const practice11Questions: Practice11Question[] = [
  // Pregunta 1 — Concepto, finalidad y objetivos de la preservación digital
  {
    id: 1,
    category: "Concepto de preservación digital",
    kind: "selectJustify",
    prompt: "¿Cuál de las siguientes es la definición correcta de preservación digital? Selecciona la correcta y justifica tu respuesta.",
    points: 2,
    options: [
      { id: "backup", label: "Mantener copias de seguridad actualizadas de los documentos" },
      { id: "definicion", label: "El conjunto planificado de políticas, estrategias y acciones que garantizan que los documentos permanezcan accesibles, auténticos, íntegros e interpretables a lo largo del tiempo" },
      { id: "software-moderno", label: "Usar siempre el software más moderno disponible en el mercado" },
      { id: "una-vez", label: "Una acción que se realiza una sola vez, al momento de crear el documento" },
    ],
    correctIds: ["definicion"],
    minSelected: 1,
    justifyPrompts: ["Explica por qué las otras opciones no definen correctamente la preservación digital."],
    justifyMinWords: 8,
    expectedSummary: "La preservación digital es un conjunto planificado y sostenido de políticas, estrategias y acciones — no un respaldo, no usar siempre lo más moderno, ni una acción de una sola vez.",
    feedbackByVerdict: {
      correct: "Correcto: la preservación es una función planificada y sostenida en el tiempo, no un evento único ni un simple respaldo.",
      partial: "Revisa tu selección: solo una opción describe la preservación como un proceso planificado y sostenido.",
      review: "La preservación digital no es solo un respaldo, ni usar siempre el software más moderno, ni una acción única: es un conjunto planificado de políticas, estrategias y acciones sostenidas en el tiempo.",
    },
  },

  // Pregunta 2 — Gestión documental, archivo electrónico y preservación digital
  {
    id: 2,
    category: "Gestión documental, archivo electrónico y preservación",
    kind: "compareChoice",
    scenario: "Una institución gestiona correctamente sus documentos en el SGD: los registra, los deriva y los archiva al concluir el trámite. Sin embargo, nunca ha evaluado qué ocurrirá con esos documentos dentro de 15 años.",
    prompt: "¿Cuál de las siguientes decisiones corresponde realmente a la preservación digital?",
    points: 2,
    labelA: "Decisión A",
    rowsA: [{ field: "Acción", value: "Confiar en que, por estar bien gestionados en el SGD, los documentos seguirán siendo accesibles indefinidamente" }],
    labelB: "Decisión B",
    rowsB: [{ field: "Acción", value: "Evaluar, según una política institucional, qué documentos requieren ser transferidos a un entorno de preservación a largo plazo" }],
    expected: "b",
    justifyMinWords: 8,
    expectedSummary: "Un buen SGD gestiona el trámite activo, pero no resuelve por sí solo la preservación a largo plazo; esa evaluación y transferencia según política es una función distinta y adicional.",
    feedbackByVerdict: {
      correct: "Correcto: la buena gestión documental operativa no garantiza, por sí sola, la preservación a largo plazo — esa es una función adicional y planificada.",
      partial: "Tu justificación aporta algo, pero revisa cuál decisión corresponde específicamente a la función de preservación, no solo a la gestión documental.",
      review: "Estar bien gestionado en el SGD no equivale a estar preservado: la preservación exige evaluar, según una política, qué documentos deben transferirse a un entorno con controles específicos a largo plazo.",
    },
  },

  // Pregunta 3 — Riesgos de obsolescencia
  {
    id: 3,
    category: "Riesgos de obsolescencia",
    kind: "dragClassify",
    instructions: "Arrastra cada situación (o tócala y luego toca el tipo de riesgo) hacia el tipo que le corresponde.",
    prompt: "Clasifica cada situación según el tipo de riesgo de preservación que describe.",
    points: 2,
    items: [
      { id: "formato1", label: "Ningún programa actualmente disponible logra interpretar correctamente la estructura de este formato de archivo", icon: "FileType", category: "formato" },
      { id: "hw1", label: "El sistema operativo necesario para ejecutar el programa original ya no puede instalarse en equipos actuales", icon: "History", category: "hardware-software" },
      { id: "meta1", label: "El documento se abre y se lee sin ningún problema, pero ya no hay registro de qué expediente lo originó ni cuándo", icon: "FileSearch", category: "metadatos" },
      { id: "formato2", label: "El formato del archivo fue reemplazado en el mercado por versiones incompatibles con los documentos antiguos", icon: "FileType", category: "formato" },
      { id: "hw2", label: "El equipo físico original, indispensable para ejecutar cierto software especializado, ya no se fabrica ni se repara", icon: "History", category: "hardware-software" },
      { id: "meta2", label: "El contenido es perfectamente legible, pero se desconoce quién lo produjo y bajo qué trámite", icon: "FileSearch", category: "metadatos" },
    ],
    categories: [
      { id: "formato", label: "Obsolescencia de formato", icon: "FileType" },
      { id: "hardware-software", label: "Obsolescencia de hardware y software", icon: "History" },
      { id: "metadatos", label: "Pérdida de metadatos", icon: "FileSearch" },
    ],
    expectedSummary: "Obsolescencia de formato: el formato en sí ya no es interpretable. Obsolescencia de hardware y software: el entorno técnico (equipo, sistema operativo) necesario para ejecutar el programa original ha desaparecido. Pérdida de metadatos: el contenido se lee sin problema, pero se pierde el contexto que le da significado.",
    feedbackByVerdict: {
      correct: "Correcto: distingues cuándo el problema está en el formato, cuándo en el entorno técnico y cuándo en el contexto documental.",
      partial: "Clasificaste correctamente algunas situaciones; revisa si el problema descrito es sobre el formato en sí, sobre el equipo/software necesario, o sobre la información de contexto.",
      review: "La obsolescencia de formato afecta la interpretación del archivo mismo; la de hardware/software afecta el entorno técnico necesario para ejecutarlo; la pérdida de metadatos afecta el contexto, aunque el contenido siga siendo legible.",
    },
  },

  // Pregunta 4 — Política de preservación digital
  {
    id: 4,
    category: "Política de preservación digital",
    kind: "matchPairs",
    prompt: "Relaciona cada componente de la política de preservación digital con su definición.",
    points: 2,
    concepts: [
      { id: "alcance", label: "Alcance" },
      { id: "responsabilidades", label: "Responsabilidades" },
      { id: "criterios-seleccion", label: "Criterios de selección" },
      { id: "revision", label: "Revisión periódica" },
    ],
    definitions: [
      { id: "def-revision", label: "Frecuencia con la que se actualiza la política" },
      { id: "def-alcance", label: "Qué documentos y series documentales cubre la política" },
      { id: "def-criterios", label: "Qué documentos se preservan y con qué prioridad" },
      { id: "def-responsables", label: "Quién decide, ejecuta y supervisa la preservación" },
    ],
    correctPairs: {
      alcance: "def-alcance",
      responsabilidades: "def-responsables",
      "criterios-seleccion": "def-criterios",
      revision: "def-revision",
    },
    expectedSummary: "Alcance↔qué documentos cubre; responsabilidades↔quién decide y ejecuta; criterios de selección↔qué se preserva y con qué prioridad; revisión periódica↔frecuencia de actualización — cuatro componentes distintos, sin solapamiento.",
    feedbackByVerdict: {
      correct: "Correcto: relacionaste cada componente de la política con su definición exacta.",
      partial: "Relacionaste algunos componentes correctamente; revisa qué pregunta responde cada uno (qué, quién, cuáles, cada cuánto).",
      review: "El alcance define qué cubre la política; las responsabilidades definen quién decide y ejecuta; los criterios de selección definen qué se preserva y con qué prioridad; la revisión periódica define cada cuánto se actualiza.",
    },
  },

  // Pregunta 5 — Plan de preservación digital
  {
    id: 5,
    category: "Plan de preservación digital",
    kind: "reorder",
    prompt: "Ordena la secuencia lógica para construir un plan de preservación digital, desde el diagnóstico hasta el seguimiento.",
    points: 2,
    items: [
      { id: "cronograma", label: "Cronograma" },
      { id: "diagnostico", label: "Diagnóstico" },
      { id: "seguimiento", label: "Indicadores de seguimiento" },
      { id: "evaluacion-riesgos", label: "Evaluación de riesgos" },
      { id: "inventario", label: "Inventario de objetos digitales" },
      { id: "estrategias", label: "Selección de estrategias" },
    ],
    correctOrder: ["diagnostico", "inventario", "evaluacion-riesgos", "estrategias", "cronograma", "seguimiento"],
    expectedSummary: "El plan parte de un diagnóstico, inventaría los objetos digitales existentes, evalúa sus riesgos, selecciona estrategias adecuadas, las organiza en un cronograma, y finalmente establece indicadores para dar seguimiento continuo.",
    feedbackByVerdict: {
      correct: "Correcto: diagnóstico, inventario, evaluación de riesgos, estrategias, cronograma e indicadores de seguimiento — en ese orden.",
      partial: "Avanzaste parcialmente; revisa qué información necesitas conocer antes de poder evaluar riesgos o elegir una estrategia.",
      review: "El orden correcto es: Diagnóstico → Inventario → Evaluación de riesgos → Selección de estrategias → Cronograma → Indicadores de seguimiento. No se puede evaluar un riesgo sin inventariar antes qué existe, ni elegir una estrategia sin conocer los riesgos.",
    },
  },

  // Pregunta 6 — Selección de estrategia de migración
  {
    id: 6,
    category: "Migración",
    kind: "compareChoice",
    scenario: "Un conjunto de oficios producidos en un formato de procesador de texto descontinuado ya no se abre correctamente con el software institucional vigente. Su contenido y estructura pueden conservarse plenamente al convertirlos a un formato actual.",
    prompt: "¿Cuál de las siguientes decisiones es la más adecuada?",
    points: 2,
    labelA: "Decisión A",
    rowsA: [{ field: "Acción", value: "Mantener los oficios en su formato original indefinidamente, sin ninguna intervención" }],
    labelB: "Decisión B",
    rowsB: [{ field: "Acción", value: "Migrar los oficios a un formato vigente, verificando su integridad y documentando el procedimiento" }],
    expected: "b",
    justifyMinWords: 8,
    expectedSummary: "Cuando el contenido puede conservarse plenamente en un formato vigente, la migración documentada y verificada es la respuesta directa; mantener el formato obsoleto sin intervención no resuelve el riesgo ya detectado.",
    feedbackByVerdict: {
      correct: "Correcto: migrar, verificando integridad y documentando el procedimiento, es la respuesta adecuada cuando el contenido puede conservarse plenamente en el formato nuevo.",
      partial: "Tu justificación aporta algo, pero revisa qué decisión realmente resuelve el riesgo de obsolescencia ya detectado.",
      review: "No intervenir deja el riesgo de obsolescencia sin resolver. La migración, con verificación de integridad y documentación del procedimiento, es la decisión adecuada en este caso.",
    },
  },

  // Pregunta 7 — Normalización de formatos
  {
    id: 7,
    category: "Normalización de formatos",
    kind: "selectJustify",
    prompt: "¿Cuál de las siguientes afirmaciones sobre la normalización de formatos es correcta? Selecciona la correcta y justifica.",
    points: 2,
    options: [
      { id: "best-format", label: "La normalización consiste en identificar el único formato universalmente mejor para cualquier documento" },
      { id: "extension-basta", label: "Basta con revisar la extensión del archivo para saber si es un formato idóneo para preservación" },
      { id: "definicion", label: "La normalización consiste en reducir la diversidad de formatos utilizados por una institución, estableciendo un conjunto limitado y documentado de formatos preferidos" },
      { id: "solo-nuevos", label: "La normalización solo puede aplicarse a documentos ya existentes, nunca a la producción futura" },
    ],
    correctIds: ["definicion"],
    minSelected: 1,
    justifyPrompts: ["Explica por qué ningún formato es universalmente infalible para la preservación."],
    justifyMinWords: 8,
    expectedSummary: "La normalización reduce la diversidad de formatos con un conjunto documentado de formatos preferidos; ningún formato es universalmente mejor, la extensión del archivo no basta como criterio, y la normalización se aplica sobre todo a la producción futura.",
    feedbackByVerdict: {
      correct: "Correcto: normalizar es reducir la diversidad de formatos con un criterio documentado, no imponer un formato 'universalmente mejor'.",
      partial: "Revisa por qué ningún formato es infalible y por qué la extensión del archivo, por sí sola, no garantiza idoneidad.",
      review: "La normalización reduce la diversidad de formatos estableciendo un conjunto documentado de formatos preferidos. No existe un formato universalmente mejor, la extensión no basta como criterio, y se aplica principalmente a la producción futura de documentos.",
    },
  },

  // Pregunta 8 — Emulación tecnológica
  {
    id: 8,
    category: "Emulación tecnológica",
    kind: "selectJustify",
    scenario: "Una base de datos administrativa antigua, con relaciones complejas entre registros, depende de un software y un sistema operativo que ya no tienen soporte.",
    prompt: "¿Cuál de las siguientes afirmaciones sobre la emulación en este caso es correcta? Selecciona la correcta y justifica.",
    points: 2,
    options: [
      { id: "sin-costos", label: "La emulación no implica ningún costo ni dependencia técnica adicional" },
      { id: "siempre-mejor", label: "La emulación es siempre preferible a la migración, en cualquier caso" },
      { id: "elimina-necesidad", label: "Usar emulación elimina la necesidad de documentar el entorno tecnológico original" },
      { id: "correcta", label: "La emulación puede mantener el acceso a la base de datos reproduciendo su entorno original, pero requiere documentación y mantenimiento continuo del emulador" },
    ],
    correctIds: ["correcta"],
    minSelected: 1,
    justifyPrompts: ["Explica por qué la emulación no es una solución sin costos ni dependencias."],
    justifyMinWords: 8,
    expectedSummary: "La emulación puede preservar la funcionalidad y las relaciones originales de la base de datos, pero exige documentación detallada y mantenimiento continuo del emulador — no es gratuita, no es siempre superior a la migración, y no elimina la necesidad de documentar.",
    feedbackByVerdict: {
      correct: "Correcto: la emulación puede mantener el acceso al entorno original, pero con costos, dependencias y necesidad de documentación continua.",
      partial: "Revisa por qué la emulación no es una solución automática ni libre de costos y dependencias.",
      review: "La emulación puede mantener el acceso reproduciendo el entorno original, pero requiere documentación detallada y mantenimiento continuo — no es gratuita, no siempre es preferible a la migración, y no elimina la necesidad de documentar.",
    },
  },

  // Pregunta 9 — Caso institucional
  {
    id: 9,
    category: "Caso institucional",
    kind: "stageFlow",
    scenario: "En la Municipalidad Distrital de San Gabriel (caso académico simulado) coexisten expedientes técnicos en un formato obsoleto y resoluciones digitalizadas sin metadatos, sin que exista una política de preservación aprobada.",
    prompt: "Completa qué acción realizar, quién es responsable y qué evidencia debería quedar en cada etapa del análisis del caso.",
    points: 2,
    stages: [
      { id: "diagnosticar", label: "Diagnosticar" },
      { id: "priorizar", label: "Priorizar" },
      { id: "seleccionar-estrategia", label: "Seleccionar estrategia" },
      { id: "documentar", label: "Documentar" },
    ],
    fieldLabels: ["Acción", "Responsable", "Evidencia"],
    minStages: 3,
    criticalPrompt: "¿Cuál etapa consideras más crítica para que las demás medidas sean sostenibles en el tiempo, y por qué?",
    criticalMinWords: 8,
    expectedSummary: "Un análisis completo diagnostica el estado real de los documentos, prioriza según riesgo y valor, selecciona la estrategia adecuada para cada conjunto, y documenta cada decisión — documentar es lo que permite auditar y sostener las medidas en el tiempo.",
    feedbackByVerdict: {
      correct: "Correcto: completaste las etapas con acción, responsable y evidencia, y justificaste con criterio por qué documentar sostiene las demás medidas en el tiempo.",
      partial: "Avanzaste en varias etapas; completa al menos tres con sus tres columnas y profundiza en tu justificación de la etapa crítica.",
      review: "Cada etapa (diagnosticar, priorizar, seleccionar estrategia, documentar) debería tener una acción concreta, un responsable y una evidencia asociada. Documentar es lo que permite, más adelante, auditar y sostener en el tiempo cualquier decisión tomada.",
    },
  },

  // Pregunta 10 — CASO INTEGRADOR
  {
    id: 10,
    category: "Resolución integradora",
    kind: "matrixBuilder",
    scenario:
      "Una institución enfrenta varios problemas de preservación en distintos conjuntos documentales: un formato obsoleto sin soporte vigente, documentos digitalizados sin metadatos, y ausencia de una política institucional de preservación.",
    prompt: "Construye una matriz: para cada problema, define la estrategia, el criterio técnico y el control correspondiente.",
    instructions: "Completa al menos 3 filas y responde las preguntas de cierre.",
    points: 2,
    columns: [
      { key: "problema", label: "Problema", type: "text", placeholder: "Describe el problema" },
      {
        key: "estrategia",
        label: "Estrategia",
        type: "select",
        options: [
          { id: "migracion", label: "Migración" },
          { id: "normalizacion", label: "Normalización" },
          { id: "emulacion", label: "Emulación" },
          { id: "no-aplica-estrategia-tecnica", label: "Ninguna de las tres (requiere otra acción previa)" },
        ],
      },
      { key: "criterio", label: "Criterio técnico", type: "text", placeholder: "¿Qué criterio aplicas?" },
      { key: "control", label: "Control", type: "text", placeholder: "¿Qué control aplicarías a futuro?" },
    ],
    minRows: 3,
    addLabel: "Agregar otro problema",
    chipSuggestions: [
      "Formato obsoleto sin soporte vigente",
      "Ausencia de metadatos en documentos digitalizados",
      "Ausencia de política institucional de preservación",
    ],
    chipColumnKey: "problema",
    consistencyHints: [
      { problemKeyword: "formato obsoleto sin soporte vigente", column: "estrategia", expectedValue: "migracion" },
      { problemKeyword: "ausencia de metadatos en documentos digitalizados", column: "estrategia", expectedValue: "no-aplica-estrategia-tecnica" },
      { problemKeyword: "ausencia de politica institucional de preservacion", column: "estrategia", expectedValue: "no-aplica-estrategia-tecnica" },
    ],
    closingQuestions: [
      "¿Qué evidencia respaldaría cada una de tus decisiones?",
      "¿Por qué ninguna estrategia técnica por sí sola resuelve todos los problemas de preservación de este caso?",
    ],
    closingMinWords: 8,
    expectedSummary: "Cada problema debe asociarse con una estrategia coherente: un formato obsoleto con documentos existentes se migra; la ausencia de metadatos no se resuelve con una estrategia técnica de formato, sino reconstruyendo el contexto; la ausencia de política es un problema institucional, no técnico.",
    feedbackByVerdict: {
      correct: "Correcto: construiste una matriz completa que conecta cada problema con una estrategia, un criterio y un control coherentes y profesionales.",
      partial: "Avanzaste en la matriz; completa al menos tres filas con las cuatro columnas y revisa que la estrategia elegida no contradiga la naturaleza del problema (la pérdida de metadatos y la ausencia de política no se resuelven con una estrategia técnica de formato).",
      review: "Un formato obsoleto con documentos existentes requiere migración. La ausencia de metadatos y la ausencia de política institucional no son problemas de formato: ninguna de las tres estrategias técnicas (migración, normalización, emulación) las resuelve por sí sola.",
    },
  },
];

export const TOTAL_QUESTIONS_11 = practice11Questions.length;
export const MAX_SCORE_11 = practice11Questions.reduce((sum, q) => sum + q.points, 0);
