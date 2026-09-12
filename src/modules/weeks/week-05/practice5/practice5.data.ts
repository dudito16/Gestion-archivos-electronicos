import type { Practice5Question } from "./practice5.types";

const ATTRIBUTE_OPTIONS = [
  { id: "autenticidad", label: "Autenticidad" },
  { id: "fiabilidad", label: "Fiabilidad" },
  { id: "integridad", label: "Integridad" },
  { id: "disponibilidad", label: "Disponibilidad" },
];

export const practice5Questions: Practice5Question[] = [
  // Pregunta 1 — Documento como evidencia
  {
    id: 1,
    category: "Documento como evidencia",
    kind: "selectJustify",
    scenario:
      "Una unidad administrativa utiliza documentos electrónicos para sustentar sus actividades. Uno de los documentos contiene información importante, pero existen dudas sobre su origen, contexto y forma de incorporación al sistema.",
    prompt: "¿Qué condiciones deberían analizarse para determinar si el documento puede funcionar como evidencia confiable? Selecciona los aspectos relevantes y explica uno de ellos.",
    points: 1,
    options: [
      { id: "contexto", label: "El contexto en que fue creado o recibido" },
      { id: "procedencia", label: "La procedencia o el productor del documento" },
      { id: "identificacion", label: "Que cuente con una identificación clara (título, código, fecha)" },
      { id: "captura", label: "Cómo y cuándo fue incorporado (capturado) al sistema" },
      { id: "registro", label: "Si fue registrado formalmente" },
      { id: "controles", label: "Los controles aplicados para evitar modificaciones no autorizadas" },
      { id: "mantenimiento", label: "Cómo se mantiene y conserva en el tiempo" },
      { id: "diseno", label: "El diseño gráfico del documento" },
      { id: "tamano", label: "El tamaño del archivo en disco" },
    ],
    correctIds: ["contexto", "procedencia", "identificacion", "captura", "registro", "controles", "mantenimiento"],
    minSelected: 5,
    justifyPrompts: ["Elige uno de los aspectos que seleccionaste y explica por qué es relevante para sostener el documento como evidencia."],
    justifyMinWords: 8,
    expectedSummary: "Contexto, procedencia/productor, identificación, captura, registro, controles de modificación y mantenimiento — no el diseño gráfico ni el tamaño del archivo.",
    feedbackByVerdict: {
      correct:
        "Identificas correctamente que la condición de evidencia de un documento depende de poder sostener quién lo produjo, en qué contexto, cómo fue capturado y registrado, y qué controles y mantenimiento ha recibido — no de aspectos superficiales como su diseño o peso.",
      partial:
        "Tu selección va en la dirección correcta, pero revisa si dejaste fuera algún aspecto sustantivo (contexto, procedencia, captura, registro, controles o mantenimiento) o si tu explicación necesita más desarrollo.",
      review:
        "La condición de evidencia de un documento no depende de su apariencia, sino de poder demostrar su origen, contexto, forma de incorporación al sistema y los controles que ha recibido desde entonces. Revisa el caso y vuelve a seleccionar.",
    },
  },

  // Pregunta 2 — Identifica el atributo comprometido
  {
    id: 2,
    category: "Atributo comprometido",
    kind: "dragClassify",
    instructions: "Arrastra cada situación (o tócala y luego toca el atributo) hacia el atributo que compromete.",
    prompt: "Relaciona cada situación con el atributo del documento que resulta comprometido.",
    points: 1,
    items: [
      { id: "sit-a", label: "Situación A", icon: "HelpCircle", category: "autenticidad" },
      { id: "sit-b", label: "Situación B", icon: "KeyRound", category: "integridad" },
      { id: "sit-c", label: "Situación C", icon: "Scale", category: "fiabilidad" },
      { id: "sit-d", label: "Situación D", icon: "FolderOpen", category: "disponibilidad" },
    ],
    categories: [
      { id: "autenticidad", label: "Autenticidad", icon: "ShieldCheck" },
      { id: "fiabilidad", label: "Fiabilidad", icon: "Scale" },
      { id: "integridad", label: "Integridad", icon: "KeyRound" },
      { id: "disponibilidad", label: "Disponibilidad", icon: "FolderOpen" },
    ],
    expectedSummary:
      "A → Autenticidad (no se sabe quién lo generó); B → Integridad (modificado sin evidencia); C → Fiabilidad (no representa fielmente la actividad); D → Disponibilidad (no puede localizarse a tiempo).",
    feedbackByVerdict: {
      correct:
        "Correcto: distingues con precisión los cuatro atributos — quién lo creó (autenticidad), si sigue sin alteraciones no autorizadas (integridad), si su contenido representa fielmente la actuación (fiabilidad), y si puede recuperarse cuando se necesita (disponibilidad).",
      partial:
        "Clasificaste correctamente algunas situaciones, pero confundiste al menos una. Revisa la diferencia entre \"quién lo hizo\" (autenticidad), \"qué tan bien representa lo ocurrido\" (fiabilidad) y \"si sigue intacto\" (integridad).",
      review:
        "Los cuatro atributos no son intercambiables. Vuelve a leer cada situación identificando exactamente qué se pone en duda: la autoría, el contenido íntegro, la fidelidad del relato o la posibilidad de recuperar el documento.",
    },
  },

  // Pregunta 3 — ¿Qué está fallando?
  {
    id: 3,
    category: "Ficha documental incompleta",
    kind: "selectJustify",
    scenario: "Título: Informe\nFecha: 2026\nAutor: —\nUnidad: —\nEstado: —\nContexto: —",
    prompt: "Selecciona tres elementos de esta ficha que deberían mejorarse y explica por qué.",
    points: 1,
    options: [
      { id: "titulo", label: "Título — \"Informe\" es demasiado genérico" },
      { id: "fecha", label: "Fecha — \"2026\" está incompleta (falta día y mes)" },
      { id: "autor", label: "Autor — no está identificado" },
      { id: "unidad", label: "Unidad — no está identificada" },
      { id: "estado", label: "Estado — no se indica" },
      { id: "contexto", label: "Contexto — no se indica" },
      { id: "formato", label: "El formato de archivo del documento" },
    ],
    correctIds: ["titulo", "fecha", "autor", "unidad", "estado", "contexto"],
    minSelected: 3,
    justifyPrompts: ["Explica por qué los elementos que elegiste deberían mejorarse."],
    justifyMinWords: 8,
    expectedSummary: "Título genérico, fecha incompleta, y ausencia de autor, unidad, estado y contexto — cualquier tres de estos, bien justificados.",
    feedbackByVerdict: {
      correct:
        "Correcto: reconoces que un título genérico, una fecha incompleta o la ausencia de autor, unidad, estado y contexto debilitan la ficha, porque impiden identificar con precisión quién produjo el documento y en qué circunstancias.",
      partial:
        "Identificaste algún elemento débil de la ficha, pero tu selección o tu explicación podría precisar mejor por qué esos campos —y no otros— son los que más afectan la identificación del documento.",
      review:
        "Esta ficha tiene varios campos vacíos o imprecisos (autor, unidad, estado, contexto) y un título y fecha demasiado genéricos. Revisa cuáles de esos elementos comprometen más la identificación del documento.",
    },
  },

  // Pregunta 4 — Captura documental
  {
    id: 4,
    category: "Captura documental",
    kind: "selectJustify",
    prompt: "¿Cuáles de los siguientes documentos deberían ser objeto de captura dentro del sistema de gestión documental? Selecciona los que correspondan y justifica al menos dos de tus decisiones.",
    points: 1,
    options: [
      { id: "final", label: "Documento final utilizado para sustentar una decisión" },
      { id: "borrador", label: "Borrador personal que no fue utilizado" },
      { id: "recibido", label: "Documento recibido dentro de un trámite" },
      { id: "copia", label: "Copia personal sin función documental" },
      { id: "expediente", label: "Documento que forma parte de un expediente" },
    ],
    correctIds: ["final", "recibido", "expediente"],
    minSelected: 3,
    justifyPrompts: ["Justifica tu primera decisión de captura.", "Justifica tu segunda decisión de captura."],
    justifyMinWords: 6,
    expectedSummary: "El documento final que sustenta una decisión, el recibido en un trámite y el que forma parte de un expediente — no el borrador personal ni la copia sin función documental.",
    feedbackByVerdict: {
      correct:
        "Correcto: capturaste los documentos que efectivamente sostienen una actividad institucional o forman parte de un trámite, dejando fuera el borrador y la copia personal sin función documental. Recuerda que esta decisión siempre depende del contexto y las políticas de cada institución.",
      partial:
        "Tu selección es razonable, pero revisa si algún documento sin función documental quedó incluido, o si dejaste fuera alguno que sí sostiene una actividad institucional. No existe una regla absoluta: depende del contexto y la política institucional.",
      review:
        "No toda pieza recibida o creada debe capturarse: lo relevante es si sostiene una actividad institucional como evidencia (un documento recibido en trámite, uno que sustenta una decisión, uno que integra un expediente), a diferencia de borradores o copias personales sin función documental.",
    },
  },

  // Pregunta 5 — Detecta el riesgo
  {
    id: 5,
    category: "Riesgos en la gestión documental",
    kind: "selectJustify",
    scenario: "Una oficina guarda documentos en carpetas personales. Cada trabajador utiliza nombres de archivo diferentes. Existen varias versiones y no existe un registro uniforme.",
    prompt: "Selecciona los riesgos presentes en este caso y luego indica cuál consideras el más importante.",
    points: 1,
    options: [
      { id: "sin-registro", label: "No existe un registro uniforme que identifique los documentos" },
      { id: "nombres-inconsistentes", label: "Los nombres de archivo inconsistentes dificultan ubicar los documentos" },
      { id: "versiones-sin-control", label: "Existen varias versiones sin control de cuál es la vigente" },
      { id: "dificil-autoria", label: "Es difícil determinar la autoría o el responsable de cada documento" },
      { id: "color-carpetas", label: "Las carpetas no tienen un esquema de colores uniforme" },
      { id: "tamano-carpetas", label: "Las carpetas compartidas ocupan mucho espacio" },
    ],
    correctIds: ["sin-registro", "nombres-inconsistentes", "versiones-sin-control", "dificil-autoria"],
    minSelected: 4,
    justifyPrompts: ["¿Cuál consideras el riesgo más importante? Justifica tu respuesta."],
    justifyMinWords: 8,
    expectedSummary: "Ausencia de registro uniforme, nombres inconsistentes, múltiples versiones sin control y dificultad para determinar autoría — no aspectos estéticos u de espacio en disco.",
    feedbackByVerdict: {
      correct:
        "Correcto: reconoces que la ausencia de registro, los nombres inconsistentes, las versiones sin control y la autoría incierta son los riesgos reales de este caso — no el color o el tamaño de las carpetas, que son irrelevantes para la gestión documental.",
      partial:
        "Identificaste algunos riesgos reales, pero revisa si dejaste fuera alguno importante (registro, nombres, versiones, autoría) o si tu justificación sobre el riesgo más importante necesita más desarrollo.",
      review:
        "El riesgo en este caso no está en la apariencia de las carpetas, sino en la ausencia de un registro uniforme, la inconsistencia de nombres, las versiones sin control y la dificultad para determinar quién produjo cada documento.",
    },
  },

  // Pregunta 6 — Ordena el proceso
  {
    id: 6,
    category: "Proceso de gestión documental",
    kind: "reorder",
    instructions: "Toca los elementos en el orden en que normalmente se articulan dentro de un proceso de gestión documental.",
    prompt: "Construye una secuencia coherente del proceso de gestión documental.",
    points: 1,
    items: [
      { id: "captura", label: "Captura" },
      { id: "registro", label: "Registro" },
      { id: "uso", label: "Uso / tramitación" },
      { id: "mantenimiento", label: "Mantenimiento" },
      { id: "control", label: "Control" },
      { id: "disposicion", label: "Archivo / disposición" },
    ],
    correctOrder: ["captura", "registro", "uso", "mantenimiento", "control", "disposicion"],
    expectedSummary: "Captura → Registro → Uso/tramitación → Mantenimiento → Control → Archivo/disposición — un patrón habitual, no una secuencia universal rígida.",
    feedbackByVerdict: {
      correct:
        "Construiste una secuencia coherente con el patrón habitual del proceso documental. Ten presente que, según el contexto organizacional, algunos procesos —como el control— pueden aplicarse de forma continua y no solo al final.",
      partial:
        "Tu secuencia acierta en varios tramos, pero revisa el orden entre captura, registro y uso: normalmente el documento se captura, se registra formalmente y luego se tramita o utiliza.",
      review:
        "Revisa la lógica del proceso: primero se captura el documento dentro del sistema, luego se registra, después se usa o tramita, se mantiene, se controla y finalmente se archiva o dispone. El orden puede variar según el contexto, pero esta secuencia representa el patrón habitual.",
    },
  },

  // Pregunta 7 — Registro documental
  {
    id: 7,
    category: "Registro documental",
    kind: "editFields",
    scenario:
      "Documento electrónico ficticio: Memorando remitido por la Oficina de Planeamiento a la Oficina de Presupuesto el 20 de agosto de 2026, con asunto \"Requerimiento de información presupuestal para el cuarto trimestre\", en el marco del proceso de programación presupuestal anual.",
    prompt: "Completa la ficha de registro del documento.",
    points: 1,
    fields: [
      { id: "identificador", label: "Identificador", initialValue: "" },
      { id: "titulo", label: "Título", initialValue: "" },
      { id: "fecha", label: "Fecha", initialValue: "" },
      { id: "productor", label: "Productor / autor", initialValue: "" },
      { id: "unidad", label: "Unidad responsable", initialValue: "" },
      { id: "tipo", label: "Tipo documental", initialValue: "" },
      { id: "asunto", label: "Asunto", initialValue: "" },
      { id: "contexto", label: "Contexto (trámite o actividad relacionada)", initialValue: "" },
      { id: "estado", label: "Estado", initialValue: "" },
      { id: "referencia", label: "Referencia / ubicación", initialValue: "" },
    ],
    explanationPrompt: "¿Qué tres campos consideras indispensables para poder identificar y gestionar correctamente este documento? Justifica tu elección.",
    explanationMinWords: 10,
    expectedSummary: "Una ficha completa identifica el documento (identificador, título, fecha), lo atribuye (productor, unidad) y lo sitúa en su contexto (asunto, trámite relacionado).",
    feedbackByVerdict: {
      correct:
        "Completaste una ficha sólida y tu justificación reconoce que identificar, atribuir y contextualizar el documento son las funciones que sostienen su valor como evidencia.",
      partial:
        "Completaste la mayoría de los campos, pero revisa si alguno quedó vacío o poco específico, y si tu justificación explica con claridad por qué esos tres campos son indispensables.",
      review:
        "Una ficha de registro incompleta o genérica no permite identificar ni gestionar el documento. Completa todos los campos posibles y explica con más detalle por qué elegiste esos tres como indispensables.",
    },
  },

  // Pregunta 8 — Autenticidad vs. integridad
  {
    id: 8,
    category: "Autenticidad vs. integridad",
    kind: "matchPairs",
    prompt: "Relaciona cada caso con el atributo principalmente comprometido y luego explica la diferencia entre ambos.",
    points: 1,
    concepts: [
      { id: "caso-a", label: "Caso A: Se conoce quién produjo el documento, pero posteriormente el contenido fue alterado sin quedar registro del cambio." },
      { id: "caso-b", label: "Caso B: El contenido del documento se mantiene sin alteraciones, pero no existe evidencia suficiente para determinar su origen." },
    ],
    definitions: ATTRIBUTE_OPTIONS,
    correctPairs: { "caso-a": "integridad", "caso-b": "autenticidad" },
    justifyPrompt: "Explica la diferencia entre lo que compromete al Caso A y lo que compromete al Caso B.",
    justifyMinWords: 10,
    expectedSummary: "Caso A compromete la integridad (alteración sin registro); Caso B compromete la autenticidad (origen no determinable).",
    feedbackByVerdict: {
      correct:
        "Correcto: distingues que la integridad se refiere a si el contenido sigue intacto desde su creación, mientras que la autenticidad se refiere a si puede demostrarse quién lo produjo — dos preguntas distintas que pueden fallar de forma independiente.",
      partial:
        "Relacionaste al menos un caso correctamente, pero revisa la diferencia entre \"quién lo hizo\" (autenticidad) y \"si sigue sin alteraciones\" (integridad), y desarrolla mejor tu explicación.",
      review:
        "La integridad depende de si el contenido permanece sin alteraciones no autorizadas; la autenticidad depende de si puede demostrarse el origen del documento. Vuelve a relacionar los casos con estos dos conceptos.",
    },
  },

  // Pregunta 9 — Documento fiable
  {
    id: 9,
    category: "Documento fiable",
    kind: "compareChoice",
    prompt: "¿Cuál de los dos documentos presenta mejores condiciones para funcionar como evidencia confiable? Justifica tu decisión.",
    points: 1,
    labelA: "Documento A",
    labelB: "Documento B",
    rowsA: [
      { field: "Origen", value: "Creado durante la actividad institucional" },
      { field: "Contexto", value: "Cuenta con contexto claro de la actuación que registra" },
      { field: "Registro", value: "Fue registrado formalmente en su momento" },
    ],
    rowsB: [
      { field: "Origen", value: "Creado después, a partir de una reconstrucción informal" },
      { field: "Contexto", value: "No hay claridad sobre cómo se obtuvo la información" },
      { field: "Registro", value: "No fue registrado en su momento" },
    ],
    expected: "a",
    justifyMinWords: 8,
    expectedSummary: "El Documento A, por haber sido creado durante la actividad, con contexto claro y registro oportuno — condiciones propias de un documento fiable.",
    feedbackByVerdict: {
      correct:
        "Correcto: el Documento A fue producido durante la propia actividad, con contexto claro y registro oportuno, condiciones que sostienen la fiabilidad. El Documento B, al reconstruirse después de forma informal, pierde esa cercanía con la actuación que dice representar.",
      partial:
        "Tu justificación aporta algunos elementos válidos, pero conviene precisar por qué el momento de creación y el registro oportuno son claves para la fiabilidad de un documento.",
      review:
        "Un documento es más fiable cuando fue creado durante la actividad que describe, con contexto claro y registro oportuno — no cuando se reconstruye después de manera informal, sin certeza sobre cómo se obtuvo la información.",
    },
  },

  // Pregunta 10 — Identifica el control adecuado
  {
    id: 10,
    category: "Controles de gestión documental",
    kind: "matchPairs",
    prompt: "Relaciona cada problema con el control más apropiado para resolverlo.",
    points: 1,
    concepts: [
      { id: "multiples-versiones", label: "Múltiples versiones del mismo documento" },
      { id: "sin-identificacion", label: "Documentos sin identificación clara" },
      { id: "modif-sin-registro", label: "Modificaciones sin registro" },
      { id: "dificil-localizar", label: "Documentos difíciles de localizar" },
      { id: "sin-responsables", label: "Ausencia de responsables definidos" },
    ],
    definitions: [
      { id: "control-versiones", label: "Control de versiones" },
      { id: "identificacion", label: "Identificación (código, título, fecha)" },
      { id: "registro", label: "Registro de cambios" },
      { id: "acceso-recuperacion", label: "Procedimientos de acceso y recuperación" },
      { id: "responsabilidades", label: "Responsabilidades definidas" },
      { id: "metadatos", label: "Metadatos descriptivos" },
      { id: "procedimientos", label: "Procedimientos documentados" },
    ],
    correctPairs: {
      "multiples-versiones": "control-versiones",
      "sin-identificacion": "identificacion",
      "modif-sin-registro": "registro",
      "dificil-localizar": "acceso-recuperacion",
      "sin-responsables": "responsabilidades",
    },
    expectedSummary: "Versiones → control de versiones; identificación → identificación; modificaciones → registro de cambios; localización → acceso/recuperación; responsables → responsabilidades definidas.",
    feedbackByVerdict: {
      correct:
        "Correcto: cada control resuelve un problema específico — el control de versiones evita la confusión entre copias, la identificación permite distinguir documentos, el registro da trazabilidad a los cambios, y así sucesivamente.",
      partial:
        "Relacionaste correctamente algunos pares, pero revisa cuál control resuelve específicamente cada problema — por ejemplo, la diferencia entre \"identificación\" y \"registro de cambios\".",
      review:
        "Cada problema tiene un control específico que lo resuelve: no es lo mismo identificar un documento que registrar sus cambios, ni lo mismo controlar versiones que definir responsabilidades. Vuelve a revisar cada relación.",
    },
  },

  // Pregunta 11 — Contexto documental
  {
    id: 11,
    category: "Contexto documental",
    kind: "selectJustify",
    scenario: "Documento aislado: \"Informe técnico – 15/08/2026\"",
    prompt: "¿Qué información adicional permitiría comprender mejor el contexto de este documento? Selecciona las opciones relevantes y explica por qué el contexto es importante.",
    points: 1,
    options: [
      { id: "actividad", label: "A qué actividad o trámite pertenece" },
      { id: "productor", label: "Quién lo produjo" },
      { id: "unidad", label: "Qué unidad es responsable" },
      { id: "relacion", label: "Con qué otros documentos se relaciona" },
      { id: "color-carpeta", label: "El color de la carpeta donde se guarda" },
      { id: "paginas", label: "Cuántas páginas tiene" },
    ],
    correctIds: ["actividad", "productor", "unidad", "relacion"],
    minSelected: 3,
    justifyPrompts: ["Explica por qué el contexto es importante para gestionar el documento como evidencia."],
    justifyMinWords: 8,
    expectedSummary: "Actividad o trámite relacionado, productor, unidad responsable y relación con otros documentos — no aspectos irrelevantes como el color de la carpeta o la paginación.",
    feedbackByVerdict: {
      correct:
        "Correcto: reconoces que sin saber a qué actividad pertenece, quién lo produjo o con qué otros documentos se relaciona, un documento aislado pierde buena parte de su valor como evidencia, sin importar cuán completo parezca su contenido.",
      partial:
        "Tu selección apunta en la dirección correcta, pero desarrolla mejor por qué esa información contextual es la que realmente sostiene el valor del documento como evidencia.",
      review:
        "Un documento aislado, sin saber a qué actividad pertenece o quién lo produjo, es difícil de interpretar correctamente. El contexto es lo que permite entender su función real dentro de la actividad institucional.",
    },
  },

  // Pregunta 12 — Analiza el flujo
  {
    id: 12,
    category: "Análisis del flujo documental",
    kind: "stageFlow",
    instructions: "Recepción → Registro → Revisión → Derivación → Atención → Respuesta → Archivo.",
    prompt: "Para al menos 5 de las 7 etapas, indica qué documento/evidencia interviene, qué control aplicarías y quién sería el responsable.",
    points: 1,
    stages: [
      { id: "recepcion", label: "Recepción" },
      { id: "registro", label: "Registro" },
      { id: "revision", label: "Revisión" },
      { id: "derivacion", label: "Derivación" },
      { id: "atencion", label: "Atención" },
      { id: "respuesta", label: "Respuesta" },
      { id: "archivo", label: "Archivo" },
    ],
    fieldLabels: ["Documento / evidencia", "Control", "Responsable"],
    minStages: 5,
    criticalPrompt: "¿Qué etapa consideras crítica para mantener la trazabilidad del documento? Justifica tu elección.",
    criticalMinWords: 8,
    expectedSummary: "Cada etapa debería dejar un documento o evidencia identificable, un control aplicado y un responsable claro; no se exigen respuestas idénticas.",
    feedbackByVerdict: {
      correct:
        "Analizaste el flujo con criterio profesional: cada etapa debería dejar un rastro reconocible (documento, control, responsable), y supiste justificar por qué una de ellas resulta especialmente crítica para la trazabilidad.",
      partial:
        "Completaste parte del análisis, pero revisa si alguna etapa quedó sin control o sin responsable asignado, y desarrolla mejor por qué elegiste esa etapa como crítica.",
      review:
        "Un flujo documental completo requiere que cada etapa tenga un documento o evidencia identificable, un control y un responsable. Completa al menos 5 etapas y justifica con más detalle tu elección de la etapa crítica.",
    },
  },

  // Pregunta 13 — Detecta errores en la gestión
  {
    id: 13,
    category: "Errores en la gestión documental",
    kind: "openText",
    scenario:
      "Un documento electrónico fue recibido, pero no fue registrado. Después fue enviado por correo a tres personas. Una de ellas modificó el archivo y lo devolvió con el mismo nombre. Finalmente, se guardaron tres copias.",
    prompt: "Identifica al menos 4 problemas en la gestión de este caso y explica qué debería haberse hecho para mantener el control documental.",
    points: 1,
    fieldLabel: "Problemas identificados y qué debió hacerse",
    candidates: [
      { id: "sin-registro", label: "El documento no fue registrado al recibirse", keywords: ["registro", "registrar", "no se registro"] },
      { id: "envio-sin-control", label: "Se envió por correo a varias personas sin control", keywords: ["correo", "envio", "enviado", "tres personas"] },
      { id: "modificacion-sin-trazabilidad", label: "Fue modificado sin dejar constancia del cambio", keywords: ["modific", "cambio", "alter"] },
      { id: "mismo-nombre", label: "Se devolvió con el mismo nombre, generando incertidumbre sobre la versión vigente", keywords: ["mismo nombre", "version", "cual es la version", "vigente"] },
      { id: "copias-sin-control", label: "Se guardaron varias copias sin control", keywords: ["copia", "copias", "duplicad"] },
    ],
    requiredCount: 4,
    minWords: 15,
    expectedSummary: "Falta de registro al recibir el documento, envío sin control de versiones, modificación sin trazabilidad, ambigüedad sobre la versión vigente y copias sin control.",
    feedbackByVerdict: {
      correct:
        "Identificas con precisión los problemas de este caso: la falta de registro inicial, el envío sin control, la modificación sin trazabilidad y la ambigüedad de versiones son fallas típicas cuando no existen procedimientos documentales definidos.",
      partial:
        "Identificaste algunos problemas reales, pero podrías precisar más o cubrir otros aspectos del caso (registro, control de versiones, trazabilidad de cambios).",
      review:
        "Este caso presenta varios problemas encadenados: ausencia de registro, envío sin control, modificación sin trazabilidad y copias sin control. Vuelve a leer el caso e identifica al menos 4 de ellos con más detalle.",
    },
  },

  // Pregunta 14 — Responsabilidades
  {
    id: 14,
    category: "Responsabilidades en la gestión documental",
    kind: "matchPairs",
    prompt: "Relaciona cada responsabilidad con el rol o proceso correspondiente y luego responde la pregunta final.",
    points: 1,
    concepts: [
      { id: "definir-procedimientos", label: "Definir procedimientos" },
      { id: "registrar-documentos", label: "Registrar documentos" },
      { id: "controlar-modificaciones", label: "Controlar modificaciones" },
      { id: "asegurar-disponibilidad", label: "Asegurar disponibilidad" },
      { id: "mantener-documentos", label: "Mantener documentos" },
      { id: "supervisar-cumplimiento", label: "Supervisar cumplimiento" },
    ],
    definitions: [
      { id: "area-gestion-documental", label: "Área de gestión documental" },
      { id: "personal-receptor", label: "Personal receptor / mesa de partes" },
      { id: "control-versiones", label: "Responsable de control de versiones" },
      { id: "area-ti", label: "Área de TI / repositorio documental" },
      { id: "custodio", label: "Custodio del archivo" },
      { id: "control-interno", label: "Jefatura o control interno" },
    ],
    correctPairs: {
      "definir-procedimientos": "area-gestion-documental",
      "registrar-documentos": "personal-receptor",
      "controlar-modificaciones": "control-versiones",
      "asegurar-disponibilidad": "area-ti",
      "mantener-documentos": "custodio",
      "supervisar-cumplimiento": "control-interno",
    },
    justifyPrompt: "¿Por qué la gestión documental no depende únicamente del software?",
    justifyMinWords: 10,
    expectedSummary: "Cada responsabilidad recae en un rol distinto: procedimientos (gestión documental), registro (recepción), control de versiones, disponibilidad (TI), mantenimiento (custodio) y supervisión (control interno).",
    feedbackByVerdict: {
      correct:
        "Correcto: distribuyes las responsabilidades entre distintos roles y reconoces que un software solo automatiza procesos — la gestión documental depende de que existan políticas, procedimientos y personas responsables de aplicarlos.",
      partial:
        "Relacionaste correctamente algunas responsabilidades, pero revisa cuáles recaen en el área de gestión documental frente a las que corresponden a TI o al personal receptor, y desarrolla mejor tu respuesta.",
      review:
        "La gestión documental involucra distintos roles (quien define procedimientos no es quien registra, ni quien asegura disponibilidad técnica). Un sistema no sustituye estas responsabilidades: solo las apoya.",
    },
  },

  // Pregunta 15 — Fiabilidad vs. autenticidad vs. integridad
  {
    id: 15,
    category: "Fiabilidad, autenticidad e integridad",
    kind: "matchPairs",
    prompt: "Determina qué atributo está principalmente comprometido en cada escenario y luego explica la diferencia entre los tres conceptos.",
    points: 1,
    concepts: [
      { id: "escenario-1", label: "Escenario 1: Un documento fue firmado por una persona, pero luego se comprueba que el contenido fue alterado sin dejar rastro." },
      { id: "escenario-2", label: "Escenario 2: Un documento se conserva íntegro, pero fue elaborado mucho después de la actividad que describe, por alguien que no participó en ella." },
      { id: "escenario-3", label: "Escenario 3: Un documento contiene información completa y verosímil, pero nadie puede confirmar quién lo generó realmente." },
    ],
    definitions: ATTRIBUTE_OPTIONS,
    correctPairs: { "escenario-1": "integridad", "escenario-2": "fiabilidad", "escenario-3": "autenticidad" },
    justifyPrompt: "Explica la diferencia entre fiabilidad, autenticidad e integridad con tus propias palabras.",
    justifyMinWords: 15,
    expectedSummary: "Escenario 1 → integridad (alterado sin rastro); Escenario 2 → fiabilidad (no se generó en el momento ni por quien participó); Escenario 3 → autenticidad (autoría no confirmable).",
    feedbackByVerdict: {
      correct:
        "Correcto: distingues con claridad conceptual que la integridad protege el contenido de alteraciones, la fiabilidad depende de si el documento representa fielmente la actuación en su momento, y la autenticidad depende de poder demostrar el origen.",
      partial:
        "Relacionaste correctamente al menos un escenario, pero tu explicación conceptual necesita distinguir mejor los tres atributos entre sí, no solo repetir sus definiciones.",
      review:
        "Estos tres atributos responden preguntas distintas: ¿sigue igual? (integridad), ¿representa fielmente lo ocurrido? (fiabilidad), ¿se sabe quién lo hizo? (autenticidad). Vuelve a analizar cada escenario con esa distinción en mente.",
    },
  },

  // Pregunta 16 — Corrige la estrategia
  {
    id: 16,
    category: "Estrategia institucional",
    kind: "selectJustify",
    scenario: "Una institución decide solucionar todos sus problemas documentales simplemente comprando un nuevo sistema.",
    prompt: "¿Qué otros elementos deben considerarse además del sistema? Selecciona los que correspondan y explica por qué instalar un sistema no basta por sí solo.",
    points: 1,
    options: [
      { id: "politicas", label: "Políticas de gestión documental" },
      { id: "responsabilidades", label: "Responsabilidades definidas" },
      { id: "procesos", label: "Procesos documentados" },
      { id: "controles", label: "Controles de calidad y versiones" },
      { id: "capacitacion", label: "Capacitación del personal" },
      { id: "contexto", label: "Comprensión del contexto institucional" },
      { id: "marca", label: "La marca comercial del proveedor del software" },
      { id: "colores", label: "El diseño visual de la interfaz" },
    ],
    correctIds: ["politicas", "responsabilidades", "procesos", "controles", "capacitacion", "contexto"],
    minSelected: 4,
    justifyPrompts: ["¿Por qué instalar un sistema no garantiza por sí solo una adecuada gestión de documentos?"],
    justifyMinWords: 10,
    expectedSummary: "Políticas, responsabilidades, procesos, controles, capacitación y comprensión del contexto — un sistema es una herramienta, no un sustituto de estos elementos.",
    feedbackByVerdict: {
      correct:
        "Correcto: un sistema es una herramienta que automatiza procesos, pero sin políticas, responsabilidades, procedimientos, controles y personal capacitado, los mismos problemas documentales simplemente se trasladan al nuevo entorno digital.",
      partial:
        "Tu selección reconoce algunos elementos clave, pero podrías ampliarla o explicar con más detalle por qué la tecnología por sí sola no resuelve problemas de gestión.",
      review:
        "Comprar un sistema no resuelve automáticamente los problemas de gestión documental: sin políticas, procesos, responsabilidades y capacitación, los mismos errores de antes simplemente se repiten en la nueva plataforma.",
    },
  },

  // Pregunta 17 — Construye una estrategia de control
  {
    id: 17,
    category: "Estrategia de control",
    kind: "matrixBuilder",
    scenario:
      "Se han detectado los siguientes problemas: existen varias versiones del mismo documento sin control; algunos documentos no cuentan con identificación clara; se realizan modificaciones sin dejar registro de quién las hizo; algunos documentos son difíciles de localizar cuando se necesitan.",
    prompt: "Construye una matriz con al menos 4 problemas, el atributo que afectan, el control que propones y tu justificación.",
    points: 1,
    columns: [
      { key: "problema", label: "Problema", placeholder: "Describe o selecciona un problema", type: "text" },
      { key: "atributo", label: "Atributo afectado", type: "select", options: ATTRIBUTE_OPTIONS },
      { key: "control", label: "Control propuesto", placeholder: "p. ej. Control de versiones", type: "text" },
      { key: "justificacion", label: "Justificación", placeholder: "¿Por qué resuelve el problema?", type: "text" },
    ],
    minRows: 4,
    chipSuggestions: [
      "Existen varias versiones del mismo documento sin control.",
      "Algunos documentos no cuentan con identificación clara.",
      "Se realizan modificaciones sin dejar registro de quién las hizo.",
      "Algunos documentos son difíciles de localizar cuando se necesitan.",
    ],
    chipColumnKey: "problema",
    closingQuestions: [],
    expectedSummary: "Cada fila debe mostrar coherencia: el control propuesto debe corresponder al atributo afectado por el problema descrito (no exige una única redacción).",
    feedbackByVerdict: {
      correct:
        "Construiste una matriz coherente: cada control propuesto corresponde razonablemente al atributo afectado por el problema descrito, lo que demuestra criterio para relacionar diagnóstico y solución.",
      partial:
        "Completaste varias filas, pero revisa si en alguna el control propuesto realmente resuelve el atributo que señalaste como afectado.",
      review:
        "Completa al menos 4 filas de la matriz, asegurándote de que el control propuesto en cada una corresponda de forma coherente con el atributo que identificaste como afectado.",
    },
  },

  // Pregunta 18 — Analiza una decisión institucional
  {
    id: 18,
    category: "Decisión institucional",
    kind: "compareChoice",
    prompt: "¿Cuál estrategia institucional es más adecuada para una gestión documental confiable? Justifica profesionalmente tu elección.",
    points: 1,
    labelA: "Estrategia A",
    labelB: "Estrategia B",
    rowsA: [{ field: "Descripción", value: "Guardar todos los documentos sin criterios definidos." }],
    rowsB: [{ field: "Descripción", value: "Definir políticas, responsabilidades, procesos y controles para identificar y gestionar los documentos que deben mantenerse como evidencia." }],
    expected: "b",
    justifyMinWords: 10,
    expectedSummary: "La Estrategia B, porque define políticas, responsabilidades, procesos y controles — condiciones necesarias para que los documentos funcionen como evidencia confiable.",
    feedbackByVerdict: {
      correct:
        "Correcto: guardar todo sin criterio no produce evidencia confiable, solo acumula información sin control. La Estrategia B, al definir políticas, responsabilidades, procesos y controles, es la que realmente sostiene una gestión documental adecuada.",
      partial:
        "Elegiste una postura razonable, pero desarrolla mejor por qué la definición de políticas, procesos y responsabilidades es indispensable frente a simplemente acumular documentos.",
      review:
        "Acumular documentos sin criterios definidos no garantiza que puedan usarse como evidencia confiable. Lo que sostiene una gestión adecuada son las políticas, responsabilidades, procesos y controles definidos con claridad.",
    },
  },

  // Pregunta 19 — Caso de diagnóstico
  {
    id: 19,
    category: "Diagnóstico institucional",
    kind: "matrixBuilder",
    scenario:
      "Una institución presenta: documentos sin registro; múltiples versiones; dificultad para localizar información; ausencia de responsables claros; documentos sin contexto; modificaciones sin trazabilidad; procedimientos diferentes entre oficinas.",
    prompt: "Identifica al menos 5 problemas, asocia cada uno con un aspecto de la gestión documental y propón un control. Luego prioriza dos controles.",
    points: 1,
    columns: [
      { key: "problema", label: "Problema", placeholder: "Describe o selecciona un problema", type: "text" },
      {
        key: "aspecto",
        label: "Aspecto de gestión documental afectado",
        type: "select",
        options: [
          { id: "captura", label: "Captura" },
          { id: "registro", label: "Registro" },
          { id: "mantenimiento", label: "Mantenimiento" },
          { id: "autenticidad", label: "Autenticidad" },
          { id: "fiabilidad", label: "Fiabilidad" },
          { id: "integridad", label: "Integridad" },
          { id: "disponibilidad", label: "Disponibilidad" },
          { id: "responsabilidades", label: "Responsabilidades" },
        ],
      },
      { key: "control", label: "Control propuesto", placeholder: "p. ej. Registro obligatorio al ingreso", type: "text" },
    ],
    minRows: 5,
    chipSuggestions: [
      "Documentos sin registro",
      "Múltiples versiones",
      "Dificultad para localizar información",
      "Ausencia de responsables claros",
      "Documentos sin contexto",
      "Modificaciones sin trazabilidad",
      "Procedimientos diferentes entre oficinas",
    ],
    chipColumnKey: "problema",
    closingQuestions: ["Prioriza dos de los controles que propusiste y explica por qué son los más urgentes."],
    closingMinWords: 15,
    expectedSummary: "Al menos 5 problemas relacionados coherentemente con un aspecto de gestión documental y un control, con dos controles priorizados y justificados.",
    feedbackByVerdict: {
      correct:
        "Realizaste un diagnóstico completo: relacionaste cada problema con el aspecto de gestión documental que afecta, propusiste controles pertinentes y priorizaste con criterio los más urgentes.",
      partial:
        "Tu diagnóstico cubre varios problemas, pero revisa si todas las relaciones problema-aspecto-control son coherentes y si tu priorización explica claramente el criterio utilizado.",
      review:
        "Un diagnóstico institucional requiere relacionar cada problema con el aspecto de gestión documental que compromete y un control pertinente. Completa al menos 5 filas coherentes y prioriza dos controles con justificación.",
    },
  },

  // Pregunta 20 — CASO INTEGRADOR
  {
    id: 20,
    category: "Caso integrador — Responsable de Gestión Documental",
    kind: "matrixBuilder",
    scenario:
      "Una entidad pública está revisando su sistema de gestión de documentos electrónicos. Durante el diagnóstico se encontró que algunos documentos no son capturados, existen registros incompletos, diferentes oficinas utilizan procedimientos distintos, hay múltiples versiones, algunos documentos son difíciles de recuperar y no siempre están claras las responsabilidades sobre su mantenimiento.",
    instructions: "Asume el rol de Responsable de Gestión Documental y elabora una propuesta con al menos 5 problemas.",
    prompt: "Construye tu propuesta de controles y responde las preguntas finales.",
    points: 1,
    columns: [
      { key: "problema", label: "Problema", placeholder: "Describe o selecciona un problema", type: "text" },
      { key: "atributo", label: "Atributo o aspecto afectado", type: "select", options: [...ATTRIBUTE_OPTIONS, { id: "captura", label: "Captura" }, { id: "registro", label: "Registro" }, { id: "mantenimiento", label: "Mantenimiento" }, { id: "responsabilidades", label: "Responsabilidades" }] },
      { key: "control", label: "Control propuesto", placeholder: "p. ej. Procedimiento uniforme de captura", type: "text" },
      { key: "responsable", label: "Responsable / proceso", placeholder: "¿Quién lo implementaría?", type: "text" },
      { key: "justificacion", label: "Justificación", placeholder: "¿Por qué este control resuelve el problema?", type: "text" },
    ],
    minRows: 5,
    chipSuggestions: [
      "Algunos documentos no son capturados",
      "Existen registros incompletos",
      "Diferentes oficinas utilizan procedimientos distintos",
      "Hay múltiples versiones",
      "Algunos documentos son difíciles de recuperar",
      "No siempre están claras las responsabilidades sobre el mantenimiento",
    ],
    chipColumnKey: "problema",
    closingQuestions: [
      "¿Cuál es el problema más crítico?",
      "¿Qué control debería implementarse primero?",
      "¿Por qué?",
      "¿Cómo comprobarías que la medida está funcionando?",
    ],
    closingMinWords: 6,
    expectedSummary: "Al menos 5 problemas bien relacionados con su atributo/aspecto y un control justificado, más una priorización clara y un criterio de verificación.",
    feedbackByVerdict: {
      correct:
        "Elaboraste una propuesta profesional completa: relacionas cada problema con el atributo o aspecto que compromete, propones controles pertinentes con responsables definidos, y justificas con criterio cuál priorizar y cómo verificar su efectividad — exactamente lo que se espera de un responsable de gestión documental.",
      partial:
        "Tu propuesta cubre varios elementos, pero revisa si todas las filas son coherentes (problema, atributo, control y responsable relacionados entre sí) y si tus respuestas finales explican con claridad la priorización y la forma de comprobar resultados.",
      review:
        "Una propuesta profesional necesita al menos 5 problemas relacionados coherentemente con su atributo, un control con responsable definido, y una priorización justificada con un criterio de verificación. Completa la matriz y las preguntas finales con más detalle.",
    },
  },
];

export const TOTAL_QUESTIONS_5 = practice5Questions.length;
export const MAX_SCORE_5 = practice5Questions.reduce((sum, q) => sum + q.points, 0);
