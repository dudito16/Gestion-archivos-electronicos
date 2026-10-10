import type { Practice10Question } from "./practice10.types";

export const practice10Questions: Practice10Question[] = [
  // Pregunta 1 — Concepto de integridad digital
  {
    id: 1,
    category: "Concepto de integridad digital",
    kind: "selectJustify",
    prompt: "¿Cuál de las siguientes es la definición correcta de integridad digital? Selecciona la correcta y justifica tu respuesta.",
    points: 2,
    options: [
      { id: "mantiene-legible", label: "Que el documento siga siendo legible, sin importar si cambió su contenido" },
      { id: "definicion", label: "Que el documento se mantenga completo y sin alteraciones no controladas respecto de un estado de referencia establecido" },
      { id: "nunca-cambia", label: "Que el documento nunca pueda cambiar bajo ninguna circunstancia" },
      { id: "mismo-nombre", label: "Que el documento conserve el mismo nombre de archivo a lo largo del tiempo" },
    ],
    correctIds: ["definicion"],
    minSelected: 1,
    justifyPrompts: ["Explica por qué las otras opciones no definen correctamente la integridad digital."],
    justifyMinWords: 8,
    expectedSummary: "La integridad digital exige comparar el estado actual de un documento contra un estado de referencia establecido; la sola legibilidad, un nombre de archivo inalterado o la imposibilidad absoluta de cambio no la definen.",
    feedbackByVerdict: {
      correct: "Correcto: la integridad se verifica comparando contra una referencia, no se asume por la legibilidad ni por la inmutabilidad absoluta.",
      partial: "Revisa tu selección: solo una opción describe la integridad en relación con un estado de referencia.",
      review: "La integridad digital no es solo que el documento se vea legible, ni que nunca cambie, ni que mantenga su nombre de archivo: requiere compararlo contra un estado de referencia establecido previamente.",
    },
  },

  // Pregunta 2 — Hash vs Checksum
  {
    id: 2,
    category: "Hash vs Checksum",
    kind: "compareChoice",
    scenario: "Un área de archivo debe decidir qué mecanismo sostiene mejor la verificación de integridad de sus expedientes electrónicos a lo largo de varios años.",
    prompt: "¿Cuál de las siguientes decisiones es más adecuada?",
    points: 2,
    labelA: "Decisión A",
    rowsA: [{ field: "Mecanismo", value: "Calcular un valor de checksum una sola vez, al momento de digitalizar, y no volver a revisarlo" }],
    labelB: "Decisión B",
    rowsB: [{ field: "Mecanismo", value: "Calcular un valor de hash como referencia y compararlo periódicamente a lo largo del tiempo" }],
    expected: "b",
    justifyMinWords: 8,
    expectedSummary: "El hash, comparado periódicamente contra una referencia, es el mecanismo orientado a sostener la integridad documental en el tiempo; un checksum calculado una sola vez no sostiene una verificación continua.",
    feedbackByVerdict: {
      correct: "Correcto: sostener la integridad a lo largo de los años requiere una referencia (hash) y comparaciones periódicas, no un único cálculo puntual.",
      partial: "Tu justificación aporta algo, pero revisa cuál de las dos decisiones permite verificar la integridad de forma sostenida en el tiempo.",
      review: "Verificar la integridad de expedientes durante varios años requiere un valor de referencia que se compare periódicamente — calcular un valor una sola vez y no volver a revisarlo no sostiene nada en el tiempo.",
    },
  },

  // Pregunta 3 — Fixity
  {
    id: 3,
    category: "Fixity",
    kind: "selectJustify",
    prompt: "¿Cuál de las siguientes afirmaciones sobre fixity es correcta? Selecciona la correcta y justifica.",
    points: 2,
    options: [
      { id: "memoria", label: "Fixity es recordar de memoria el contenido de cada documento" },
      { id: "una-vez", label: "Fixity se verifica una sola vez, al momento de crear el documento, y nunca más" },
      { id: "definicion", label: "Fixity es la propiedad de un documento de permanecer sin cambios no documentados en el tiempo, y las prácticas que permiten comprobarlo de forma sistemática" },
      { id: "igual-backup", label: "Fixity es exactamente lo mismo que hacer una copia de respaldo" },
    ],
    correctIds: ["definicion"],
    minSelected: 1,
    justifyPrompts: ["Explica por qué fixity no se reduce a una copia de respaldo ni a una verificación única."],
    justifyMinWords: 8,
    expectedSummary: "Fixity combina una propiedad (permanecer sin cambios no documentados) con una práctica sistemática de comprobación en el tiempo — no es un respaldo ni una verificación de una sola vez.",
    feedbackByVerdict: {
      correct: "Correcto: fixity es tanto la propiedad de permanecer íntegro como el conjunto de prácticas para comprobarlo de forma repetible.",
      partial: "Revisa por qué fixity requiere verificación sistemática y repetida, no un único chequeo inicial.",
      review: "Fixity no es recordar el contenido ni hacer una copia de respaldo: es la propiedad de un documento de permanecer sin cambios no documentados, verificada de forma sistemática a lo largo del tiempo.",
    },
  },

  // Pregunta 4 — Verificación de integridad
  {
    id: 4,
    category: "Verificación de integridad",
    kind: "compareChoice",
    scenario: "La Municipalidad Distrital de San Gabriel (caso académico simulado) realizó dos verificaciones de integridad sobre expedientes distintos.",
    prompt: "¿Cuál de las dos verificaciones indica que se requiere iniciar una investigación?",
    points: 2,
    labelA: "Verificación A",
    rowsA: [
      { field: "Referencia", value: "A1B2C3" },
      { field: "Valor actual", value: "A1B2C3" },
    ],
    labelB: "Verificación B",
    rowsB: [
      { field: "Referencia", value: "A1B2C3" },
      { field: "Valor actual", value: "F9X8Z7" },
    ],
    expected: "b",
    justifyMinWords: 8,
    expectedSummary: "La Verificación B muestra una diferencia entre el valor de referencia y el valor actual, lo que amerita iniciar una investigación; la Verificación A muestra coincidencia, es decir, integridad conforme a la referencia.",
    feedbackByVerdict: {
      correct: "Correcto: cuando el valor actual no coincide con la referencia, se requiere investigar la causa.",
      partial: "Tu justificación aporta algo, pero revisa cuál de las dos verificaciones realmente muestra una diferencia.",
      review: "En la Verificación A, referencia y valor actual coinciden: integridad conforme. En la Verificación B no coinciden, lo que requiere iniciar una investigación.",
    },
  },

  // Pregunta 5 — Fixity (orden del proceso)
  {
    id: 5,
    category: "Fixity",
    kind: "reorder",
    prompt: "Ordena las etapas del proceso de fixity, desde el archivo hasta el resultado de la verificación.",
    points: 2,
    items: [
      { id: "verificacion", label: "Verificación" },
      { id: "archivo", label: "Archivo" },
      { id: "resultado", label: "Resultado" },
      { id: "almacenamiento", label: "Almacenamiento" },
      { id: "comparacion", label: "Comparación" },
      { id: "referencia", label: "Referencia" },
    ],
    correctOrder: ["archivo", "referencia", "almacenamiento", "verificacion", "comparacion", "resultado"],
    expectedSummary: "El proceso de fixity parte del archivo, establece una referencia, la conserva en el almacenamiento, y más adelante vuelve a verificar y comparar el valor actual contra esa referencia para producir un resultado.",
    feedbackByVerdict: {
      correct: "Correcto: archivo, referencia, almacenamiento, verificación, comparación y resultado — en ese orden.",
      partial: "Avanzaste parcialmente; revisa qué debe ocurrir antes de poder comparar un valor contra una referencia.",
      review: "El orden correcto es: Archivo → Referencia → Almacenamiento → Verificación → Comparación → Resultado. No se puede comparar (ni verificar) sin antes haber establecido y almacenado una referencia.",
    },
  },

  // Pregunta 6 — Interpretación de una diferencia de hash
  {
    id: 6,
    category: "Cambios detectados",
    kind: "selectJustify",
    scenario: "Un sistema detecta que el hash actual de un documento no coincide con el hash de referencia registrado meses atrás.",
    prompt: "¿Cuál es la interpretación correcta de este hallazgo, antes de realizar cualquier investigación adicional? Selecciona la correcta y justifica.",
    points: 2,
    options: [
      { id: "ignorar", label: "No es relevante mientras el documento siga abriendo correctamente" },
      { id: "correcta", label: "El contenido del documento cambió respecto al estado de referencia, por una causa que aún debe determinarse" },
      { id: "fraude", label: "Se confirma que el documento fue alterado de forma fraudulenta" },
      { id: "eliminar", label: "Se debe eliminar el documento del expediente de inmediato, antes de informar a nadie" },
    ],
    correctIds: ["correcta"],
    minSelected: 1,
    justifyPrompts: ["Explica por qué una diferencia de hash no equivale, por sí sola, a una conclusión de fraude."],
    justifyMinWords: 8,
    expectedSummary: "Un hash diferente solo indica que el contenido cambió respecto a la referencia; la causa (autorizada o no) solo puede determinarse investigando — nunca se concluye fraude de forma automática, ni se ignora, ni se elimina el documento.",
    feedbackByVerdict: {
      correct: "Correcto: un hash diferente es una señal que requiere investigación, no una conclusión de fraude ni algo que pueda ignorarse.",
      partial: "Revisa por qué 'fraude confirmado' y 'no es relevante' son ambas conclusiones apresuradas e incorrectas.",
      review: "Un hash diferente indica que el contenido cambió respecto a la referencia, por una causa aún no determinada. Declarar fraude, ignorar la diferencia o eliminar el documento son respuestas incorrectas: lo que corresponde es investigar.",
    },
  },

  // Pregunta 7 — Riesgos
  {
    id: 7,
    category: "Riesgos",
    kind: "dragClassify",
    instructions: "Arrastra cada situación (o tócala y luego toca el nivel de riesgo) hacia el nivel que le corresponde.",
    prompt: "Clasifica cada situación según su nivel de riesgo para la integridad documental.",
    points: 2,
    items: [
      { id: "mod-no-autorizada", label: "Un usuario sin autorización logra modificar el contenido del documento sin dejar registro visible", icon: "Lock", category: "alta" },
      { id: "sustitucion", label: "El archivo original es reemplazado por completo con una versión distinta, sin que el cambio quede documentado", icon: "FileX", category: "alta" },
      { id: "corrupcion", label: "Una falla de almacenamiento daña parte del contenido del archivo sin intervención de ninguna persona", icon: "ServerCrash", category: "media" },
      { id: "ausencia-referencia", label: "El expediente nunca tuvo un valor de referencia calculado desde su ingreso al sistema", icon: "FileSearch", category: "media" },
      { id: "error-transferencia", label: "Durante una transferencia entre sistemas, una parte menor del archivo no se copia completamente", icon: "ArrowRightLeft", category: "baja" },
      { id: "error-registro", label: "Un registro de verificación queda incompleto por un error de digitación, sin afectar el resultado de la comparación", icon: "ClipboardList", category: "baja" },
    ],
    categories: [
      { id: "alta", label: "Riesgo alto", icon: "ShieldAlert" },
      { id: "media", label: "Riesgo medio", icon: "AlertCircle" },
      { id: "baja", label: "Riesgo bajo", icon: "FileSearch" },
    ],
    expectedSummary: "Riesgo alto: modificación no autorizada y sustitución del archivo, por comprometer directamente la confiabilidad del documento. Riesgo medio: corrupción de datos y ausencia de referencia. Riesgo bajo: errores menores de transferencia o de registro que no afectan el resultado.",
    feedbackByVerdict: {
      correct: "Correcto: distingues los riesgos que comprometen directamente la confiabilidad del documento de los que son errores menores o de proceso.",
      partial: "Clasificaste correctamente algunas situaciones; revisa cuáles comprometen directamente el contenido del documento frente a cuáles son fallas de proceso.",
      review: "Modificación no autorizada y sustitución comprometen directamente la confiabilidad del documento (riesgo alto). Corrupción de datos y ausencia de referencia son riesgo medio. Errores menores de transferencia o de registro son riesgo bajo.",
    },
  },

  // Pregunta 8 — Controles
  {
    id: 8,
    category: "Controles",
    kind: "matchPairs",
    prompt: "Relaciona cada riesgo con el control más directamente relacionado.",
    points: 2,
    concepts: [
      { id: "riesgo-acceso", label: "Modificación no autorizada" },
      { id: "riesgo-referencia", label: "Pérdida de referencia" },
      { id: "riesgo-verificacion", label: "Falta de verificación periódica" },
      { id: "riesgo-diferencia", label: "Diferencia detectada sin explicación" },
    ],
    definitions: [
      { id: "def-investigacion", label: "Investigación y registro del hallazgo" },
      { id: "def-acceso", label: "Control de acceso y permisos diferenciados" },
      { id: "def-periodico", label: "Controles de integridad programados periódicamente" },
      { id: "def-hash-inicial", label: "Establecer un valor de hash desde el ingreso del documento" },
    ],
    correctPairs: {
      "riesgo-acceso": "def-acceso",
      "riesgo-referencia": "def-hash-inicial",
      "riesgo-verificacion": "def-periodico",
      "riesgo-diferencia": "def-investigacion",
    },
    expectedSummary: "Modificación no autorizada → control de acceso; pérdida de referencia → establecer hash desde el ingreso; falta de verificación periódica → controles programados; diferencia sin explicación → investigación y registro.",
    feedbackByVerdict: {
      correct: "Correcto: relacionaste cada riesgo con el control que lo atiende de forma más directa.",
      partial: "Relacionaste algunos riesgos correctamente; revisa qué control previene cada riesgo frente a cuál responde una vez que ya ocurrió.",
      review: "Modificación no autorizada se previene con control de acceso; pérdida de referencia se evita estableciendo el hash desde el ingreso; falta de verificación periódica se corrige con controles programados; una diferencia sin explicación requiere investigación y registro.",
    },
  },

  // Pregunta 9 — Caso práctico
  {
    id: 9,
    category: "Caso práctico",
    kind: "stageFlow",
    scenario: "En la Municipalidad Distrital de San Gabriel (caso académico simulado) se detecta una diferencia de hash en un expediente electrónico.",
    prompt: "Completa qué acción realizar, quién es responsable y qué evidencia debería quedar en cada etapa del análisis del caso.",
    points: 2,
    stages: [
      { id: "detectar", label: "Detectar" },
      { id: "interpretar", label: "Interpretar" },
      { id: "investigar", label: "Investigar" },
      { id: "decidir", label: "Decidir" },
    ],
    fieldLabels: ["Acción", "Responsable", "Evidencia"],
    minStages: 3,
    criticalPrompt: "¿Cuál etapa consideras más crítica para evitar una conclusión apresurada de fraude, y por qué?",
    criticalMinWords: 8,
    expectedSummary: "Un análisis completo detecta la diferencia, la interpreta sin asumir fraude, investiga la causa (trazabilidad, versiones, usuarios) y recién entonces decide — la etapa de investigar es la que evita una conclusión apresurada.",
    feedbackByVerdict: {
      correct: "Correcto: completaste las etapas con acción, responsable y evidencia, y justificaste con criterio por qué investigar es la etapa que evita una conclusión apresurada.",
      partial: "Avanzaste en varias etapas; completa al menos tres con sus tres columnas y profundiza en tu justificación de la etapa crítica.",
      review: "Cada etapa (detectar, interpretar, investigar, decidir) debería tener una acción concreta, un responsable y una evidencia asociada. La etapa de investigar es la que impide saltar directamente a una conclusión de fraude.",
    },
  },

  // Pregunta 10 — CASO INTEGRADOR
  {
    id: 10,
    category: "Aplicación profesional",
    kind: "matrixBuilder",
    scenario:
      "Un área de archivo enfrenta varios problemas de integridad en distintos expedientes: diferencias de hash sin explicación, expedientes sin valor de referencia desde su ingreso, y falta de verificaciones periódicas.",
    prompt: "Construye una matriz: para cada problema, define la decisión, el criterio técnico y el control correspondiente.",
    instructions: "Completa al menos 3 filas y responde las preguntas de cierre.",
    points: 2,
    columns: [
      { key: "problema", label: "Problema", type: "text", placeholder: "Describe el problema" },
      {
        key: "decision",
        label: "Decisión",
        type: "select",
        options: [
          { id: "investigar", label: "Investigar y documentar" },
          { id: "ignorar", label: "Ignorar por ahora" },
          { id: "declarar-fraude", label: "Declarar fraude de inmediato" },
          { id: "eliminar-documento", label: "Eliminar el documento" },
          { id: "establecer-referencia", label: "Establecer valor de referencia" },
          { id: "programar-verificacion", label: "Programar verificación periódica" },
        ],
      },
      { key: "criterio", label: "Criterio técnico", type: "text", placeholder: "¿Qué criterio aplicas?" },
      { key: "control", label: "Control", type: "text", placeholder: "¿Qué control aplicarías a futuro?" },
    ],
    minRows: 3,
    addLabel: "Agregar otro problema",
    chipSuggestions: [
      "Diferencia de hash sin explicación documentada",
      "Expediente sin valor de referencia desde su ingreso",
      "Falta de verificación periódica de integridad",
    ],
    chipColumnKey: "problema",
    consistencyHints: [
      { problemKeyword: "diferencia de hash sin explicacion documentada", column: "decision", expectedValue: "investigar" },
      { problemKeyword: "sin valor de referencia desde su ingreso", column: "decision", expectedValue: "establecer-referencia" },
      { problemKeyword: "falta de verificacion periodica", column: "decision", expectedValue: "programar-verificacion" },
    ],
    closingQuestions: [
      "¿Qué evidencia respaldaría tu decisión frente a cada problema?",
      "¿Por qué ninguna de estas situaciones debería resolverse declarando fraude de inmediato?",
    ],
    closingMinWords: 8,
    expectedSummary: "Cada problema debe asociarse con una decisión profesional coherente (nunca declarar fraude de inmediato ni ignorar), un criterio técnico y un control verificable — una diferencia sin explicación se investiga, no se concluye.",
    feedbackByVerdict: {
      correct: "Correcto: construiste una matriz completa que conecta cada problema con una decisión, un criterio y un control coherentes y profesionales.",
      partial: "Avanzaste en la matriz; completa al menos tres filas con las cuatro columnas y revisa que la decisión elegida no contradiga el problema (una diferencia sin explicación se investiga, nunca se declara fraude de inmediato).",
      review: "Una matriz completa relaciona cada problema con una decisión profesional, un criterio técnico y un control verificable. Declarar fraude de inmediato o ignorar una diferencia sin explicación nunca es la decisión correcta — corresponde investigar y documentar.",
    },
  },
];

export const TOTAL_QUESTIONS_10 = practice10Questions.length;
export const MAX_SCORE_10 = practice10Questions.reduce((sum, q) => sum + q.points, 0);
