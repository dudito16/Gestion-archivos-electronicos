import type { Practice8Question } from "./practice8.types";

export const practice8Questions: Practice8Question[] = [
  // Pregunta 1 — Concepto de interoperabilidad
  {
    id: 1,
    category: "Concepto de interoperabilidad",
    kind: "selectJustify",
    prompt: "¿Cuál de las siguientes es la definición correcta de interoperabilidad? Selecciona la correcta y justifica tu respuesta.",
    points: 1,
    options: [
      { id: "mismo-proveedor", label: "Que ambas organizaciones usen el mismo proveedor de software" },
      { id: "definicion-completa", label: "Que diferentes sistemas, organizaciones o plataformas puedan intercambiar información y utilizarla de manera coherente para un propósito" },
      { id: "conexion-tecnica", label: "Que dos sistemas puedan conectarse técnicamente, sin más requisitos" },
      { id: "correo", label: "Que los documentos se envíen por correo electrónico entre entidades" },
    ],
    correctIds: ["definicion-completa"],
    minSelected: 1,
    justifyPrompts: ["Explica por qué las otras opciones son insuficientes para definir interoperabilidad."],
    justifyMinWords: 8,
    expectedSummary: "La interoperabilidad implica que distintos sistemas, organizaciones o plataformas intercambien información y la utilicen de forma coherente — no basta con una conexión técnica, el mismo proveedor o un simple envío de archivos.",
    feedbackByVerdict: {
      correct: "Correcto: la interoperabilidad involucra procesos, significado y mecanismos compatibles, no solo una conexión técnica.",
      partial: "Revisa tu selección: solo una opción describe la interoperabilidad en su sentido completo, no simplificado.",
      review: "La interoperabilidad no es solo conectar sistemas, usar el mismo proveedor o enviar un correo: requiere que la información pueda intercambiarse y utilizarse de forma coherente entre distintas organizaciones o plataformas.",
    },
  },

  // Pregunta 2 — Interoperabilidad organizacional
  {
    id: 2,
    category: "Interoperabilidad organizacional",
    kind: "selectJustify",
    scenario: "Un documento llega correctamente al sistema de la entidad receptora, pero no existe ningún procedimiento definido sobre qué unidad debe atenderlo ni qué trámite iniciar.",
    prompt: "¿Cuál de las siguientes opciones describe el problema ORGANIZACIONAL en este caso? Selecciona la correcta y justifica.",
    points: 1,
    options: [
      { id: "semantico", label: "El campo de fecha se interpreta de forma distinta en cada sistema" },
      { id: "organizacional", label: "No existe un proceso definido para continuar el trámite una vez recibido el documento" },
      { id: "tecnico", label: "El sistema receptor no puede leer el formato del archivo recibido" },
      { id: "no-interop", label: "El servidor del sistema receptor funciona con lentitud" },
    ],
    correctIds: ["organizacional"],
    minSelected: 1,
    justifyPrompts: ["Explica por qué las otras opciones no describen un problema organizacional."],
    justifyMinWords: 8,
    expectedSummary: "El problema organizacional es la ausencia de un proceso definido para continuar el trámite; las otras opciones describen un problema semántico, uno técnico y uno de rendimiento, respectivamente.",
    feedbackByVerdict: {
      correct: "Correcto: la ausencia de un proceso definido para continuar el trámite es un problema organizacional — las responsabilidades y procesos entre entidades no están claros.",
      partial: "Revisa la diferencia: un problema organizacional se refiere a procesos y responsabilidades entre entidades, no a la interpretación de datos ni a la tecnología.",
      review: "El problema organizacional es que no existe un procedimiento definido para continuar el trámite. Las otras opciones son un problema semántico (interpretación de campos), uno técnico (formato ilegible) y uno de rendimiento del servidor, no de interoperabilidad organizacional.",
    },
  },

  // Pregunta 3 — Interoperabilidad semántica
  {
    id: 3,
    category: "Interoperabilidad semántica",
    kind: "selectJustify",
    scenario: "El campo \"Tipo documental\" del sistema emisor se transfiere al campo \"Asunto\" del sistema receptor, sin que exista una correspondencia definida entre ambos conceptos.",
    prompt: "¿Cuál de las siguientes opciones describe el problema SEMÁNTICO en este caso? Selecciona la correcta y justifica.",
    points: 1,
    options: [
      { id: "tecnico", label: "No existe un mecanismo técnico para transmitir el campo entre los sistemas" },
      { id: "organizacional", label: "La entidad receptora no sabe qué unidad debe continuar el trámite" },
      { id: "semantico", label: "Ambos sistemas no interpretan el campo de la misma manera" },
      { id: "no-interop", label: "El sistema receptor tarda varios segundos en cargar el documento" },
    ],
    correctIds: ["semantico"],
    minSelected: 1,
    justifyPrompts: ["Explica por qué las otras opciones no describen un problema semántico."],
    justifyMinWords: 8,
    expectedSummary: "El problema semántico es que ambos sistemas no interpretan el campo de la misma manera; las otras opciones describen un problema técnico, uno organizacional y uno de rendimiento.",
    feedbackByVerdict: {
      correct: "Correcto: que \"Tipo documental\" se confunda con \"Asunto\" es un problema de interpretación compartida — eso es interoperabilidad semántica.",
      partial: "Revisa la diferencia: un problema semántico es sobre el significado de los datos, no sobre el mecanismo técnico ni sobre los procesos organizacionales.",
      review: "El problema semántico es que ambos sistemas no comparten el mismo significado para ese campo. Las otras opciones son un problema técnico (mecanismo de transmisión), uno organizacional (continuidad del trámite) y uno de rendimiento, no de interoperabilidad semántica.",
    },
  },

  // Pregunta 4 — Interoperabilidad técnica
  {
    id: 4,
    category: "Interoperabilidad técnica",
    kind: "selectJustify",
    scenario: "El sistema emisor exporta los documentos en un formato que el sistema receptor no puede leer, y no existe ningún servicio de conversión entre ambos.",
    prompt: "¿Cuál de las siguientes opciones describe el problema TÉCNICO en este caso? Selecciona la correcta y justifica.",
    points: 1,
    options: [
      { id: "organizacional", label: "Las entidades no tienen definido quién debe recibir el documento" },
      { id: "semantico-1", label: "El campo \"código\" se interpreta de forma distinta en cada sistema" },
      { id: "semantico-2", label: "Ambas entidades usan terminología distinta para el mismo trámite" },
      { id: "tecnico", label: "No existe un mecanismo tecnológico compatible para transmitir y convertir la información" },
    ],
    correctIds: ["tecnico"],
    minSelected: 1,
    justifyPrompts: ["Explica por qué las otras opciones no describen un problema técnico."],
    justifyMinWords: 8,
    expectedSummary: "El problema técnico es la ausencia de un mecanismo tecnológico compatible para transmitir y convertir la información; las otras opciones describen un problema organizacional y dos semánticos.",
    feedbackByVerdict: {
      correct: "Correcto: la falta de un mecanismo técnico de conversión entre formatos incompatibles es un problema de interoperabilidad técnica.",
      partial: "Revisa la diferencia: un problema técnico es sobre mecanismos tecnológicos de intercambio, no sobre procesos ni sobre el significado de los datos.",
      review: "El problema técnico es la ausencia de un mecanismo tecnológico compatible (como un servicio de conversión). Las otras opciones describen un problema organizacional (responsabilidad de recepción) y dos problemas semánticos (interpretación de campos y terminología).",
    },
  },

  // Pregunta 5 — Intercambio documental
  {
    id: 5,
    category: "Intercambio documental",
    kind: "selectJustify",
    prompt: "Al intercambiar un documento electrónico entre dos entidades, ¿qué debe conservarse? Selecciona todo lo que corresponda y explica uno de ellos.",
    points: 1,
    options: [
      { id: "diseno", label: "El diseño visual del documento" },
      { id: "contenido", label: "El contenido del documento" },
      { id: "nombre-archivo", label: "El nombre interno del archivo (mayúsculas o minúsculas)" },
      { id: "metadatos", label: "Los metadatos asociados" },
      { id: "relacion", label: "La relación con el expediente al que pertenece" },
      { id: "evidencia", label: "Evidencia de que el intercambio ocurrió" },
      { id: "veces-abierto", label: "La cantidad de veces que el archivo fue abierto antes del envío" },
    ],
    correctIds: ["contenido", "metadatos", "relacion", "evidencia"],
    minSelected: 3,
    justifyPrompts: ["Elige uno de los elementos que seleccionaste y explica por qué debe conservarse."],
    justifyMinWords: 8,
    expectedSummary: "Deben conservarse el contenido, los metadatos, la relación con el expediente y la evidencia del intercambio; el diseño visual, el formato del nombre del archivo y datos de uso previo (como cuántas veces se abrió) no son relevantes para la gestión del documento.",
    feedbackByVerdict: {
      correct: "Correcto: identificaste los elementos que realmente comprometen la gestión del documento si se pierden.",
      partial: "Tu selección va en la dirección correcta; revisa si incluiste algún elemento meramente cosmético o de uso previo, como el diseño visual, el formato del nombre del archivo o cuántas veces se abrió.",
      review: "Lo que debe conservarse es el contenido, los metadatos, la relación con el expediente y la evidencia del intercambio. El diseño visual, detalles como mayúsculas/minúsculas en el nombre del archivo y la cantidad de veces que se abrió el archivo no afectan la gestión del documento.",
    },
  },

  // Pregunta 6 — Intercambio de expediente
  {
    id: 6,
    category: "Intercambio de expediente",
    kind: "selectJustify",
    scenario: "Un expediente de 5 documentos se envía a otra entidad. Al revisarlo, el sistema receptor muestra los 5 documentos, pero sin las fechas de producción y sin indicar el orden original.",
    prompt: "¿Qué se perdió realmente en este intercambio? Selecciona todo lo que corresponda y explica uno de ellos.",
    points: 1,
    options: [
      { id: "tipo-letra", label: "El tipo de letra utilizado en los documentos" },
      { id: "fechas", label: "Los metadatos de fecha de producción" },
      { id: "color-sellos", label: "El color de los sellos institucionales" },
      { id: "orden", label: "El orden original de los documentos" },
    ],
    correctIds: ["fechas", "orden"],
    minSelected: 2,
    justifyPrompts: ["Elige uno de los elementos perdidos y explica por qué compromete la gestión del expediente."],
    justifyMinWords: 8,
    expectedSummary: "Se perdieron las fechas de producción y el orden original de los documentos; el tipo de letra y el color de los sellos no se mencionan como afectados en el caso.",
    feedbackByVerdict: {
      correct: "Correcto: identificaste exactamente lo que el caso describe como perdido, sin incluir detalles que el caso no menciona.",
      partial: "Revisa el caso nuevamente: solo dos elementos están explícitamente descritos como perdidos.",
      review: "El caso solo menciona que faltan las fechas de producción y el orden original. El tipo de letra y el color de los sellos no se mencionan — no hay evidencia de que se hayan perdido.",
    },
  },

  // Pregunta 7 — Correspondencia de metadatos
  {
    id: 7,
    category: "Correspondencia de metadatos",
    kind: "matchPairs",
    prompt: "Relaciona cada campo del Sistema A con su correspondencia semántica en el Sistema B.",
    points: 1,
    concepts: [
      { id: "codigo", label: "Código de expediente (Sistema A)" },
      { id: "area", label: "Área responsable (Sistema A)" },
      { id: "tipo", label: "Tipo documental (Sistema A)" },
      { id: "estado", label: "Estado del expediente (Sistema A)" },
    ],
    definitions: [
      { id: "def-condicion", label: "Condición del expediente (Sistema B)" },
      { id: "def-numero", label: "Número de expediente (Sistema B)" },
      { id: "def-clase", label: "Clase documental (Sistema B)" },
      { id: "def-unidad", label: "Unidad responsable (Sistema B)" },
    ],
    correctPairs: {
      codigo: "def-numero",
      area: "def-unidad",
      tipo: "def-clase",
      estado: "def-condicion",
    },
    expectedSummary: "Código↔Número de expediente (identificación), Área↔Unidad responsable (responsabilidad organizacional), Tipo↔Clase documental (clasificación), Estado↔Condición (situación actual) — cuatro correspondencias semánticas distintas y sin solapamiento.",
    feedbackByVerdict: {
      correct: "Correcto: relacionaste cada campo con su equivalente semántico exacto.",
      partial: "Relacionaste algunos campos correctamente; revisa qué concepto representa cada campo (identificación, responsabilidad, clasificación o estado).",
      review: "Código de expediente equivale a número de expediente; área responsable equivale a unidad responsable; tipo documental equivale a clase documental; estado del expediente equivale a condición del expediente.",
    },
  },

  // Pregunta 8 — Caso de interoperabilidad
  {
    id: 8,
    category: "Caso de interoperabilidad",
    kind: "compareChoice",
    scenario: "La Municipalidad Distrital de San Gabriel (simulación académica) debe enviar un expediente a otra entidad. Ambos sistemas registran la misma información, con nombres de campo distintos.",
    prompt: "¿Cuál de las siguientes correspondencias entre los dos sistemas es semánticamente válida?",
    points: 1,
    labelA: "Correspondencia A",
    rowsA: [
      { field: "Sistema A", value: "Fecha de creación" },
      { field: "Sistema B", value: "Fecha de registro" },
    ],
    labelB: "Correspondencia B",
    rowsB: [
      { field: "Sistema A", value: "Código de expediente" },
      { field: "Sistema B", value: "Número de expediente" },
    ],
    expected: "b",
    justifyMinWords: 8,
    expectedSummary: "La Correspondencia B es válida porque ambos campos identifican de forma única al expediente. La Correspondencia A no es equivalente exacta: la fecha de creación y la fecha de registro pueden ser momentos distintos del proceso.",
    feedbackByVerdict: {
      correct: "Correcto: código de expediente y número de expediente identifican lo mismo; fecha de creación y fecha de registro no son necesariamente el mismo momento.",
      partial: "Tu justificación aporta algo, pero revisa cuál de las dos correspondencias representa el mismo concepto exacto en ambos sistemas.",
      review: "La fecha de creación (cuándo se originó el expediente) y la fecha de registro (cuándo el Sistema B lo registró) pueden ser momentos distintos — no son equivalentes exactos. Código de expediente y número de expediente sí identifican lo mismo.",
    },
  },

  // Pregunta 9 — Identificación de pérdida de información
  {
    id: 9,
    category: "Identificación de pérdida de información",
    kind: "selectJustify",
    scenario: "Un oficio digitalizado se envía desde el Sistema A hacia el Sistema B. Al revisarlo, el documento se visualiza correctamente, pero el campo que indica el área que lo produjo quedó vacío, y no hay registro de cuándo se recibió en el Sistema B.",
    prompt: "¿Qué información se perdió realmente en este intercambio? Selecciona todo lo que corresponda y explica uno de ellos.",
    points: 1,
    options: [
      { id: "color-sello", label: "El color del sello institucional" },
      { id: "area", label: "El área productora del documento" },
      { id: "contenido", label: "El contenido visible del oficio" },
      { id: "evidencia-recepcion", label: "La evidencia de recepción en el Sistema B" },
    ],
    correctIds: ["area", "evidencia-recepcion"],
    minSelected: 2,
    justifyPrompts: ["Elige uno de los elementos perdidos y explica por qué compromete la gestión del documento."],
    justifyMinWords: 8,
    expectedSummary: "Se perdieron el área productora y la evidencia de recepción; el contenido se visualiza correctamente (no se perdió) y el color del sello no se menciona en el caso.",
    feedbackByVerdict: {
      correct: "Correcto: identificaste exactamente lo que el caso describe como perdido, sin confundirlo con el contenido (que sí llegó correctamente).",
      partial: "Revisa el caso: el contenido se visualiza correctamente, así que no es información perdida.",
      review: "El caso indica explícitamente que el documento 'se visualiza correctamente' (el contenido no se perdió), pero el área productora quedó vacía y no hay registro de recepción — esas sí son pérdidas reales.",
    },
  },

  // Pregunta 10 — Digitalización
  {
    id: 10,
    category: "Digitalización",
    kind: "selectJustify",
    prompt: "¿Cuál de las siguientes afirmaciones sobre digitalización es correcta? Selecciona la correcta y justifica.",
    points: 1,
    options: [
      { id: "igual-digital", label: "Digitalizar es lo mismo que crear un documento digital" },
      { id: "definicion", label: "La digitalización es el proceso de convertir información de un soporte físico en una representación digital mediante un proceso controlado" },
      { id: "nunca-papel", label: "Un documento digitalizado nunca existió en soporte físico" },
      { id: "solo-foto", label: "Digitalizar significa únicamente tomar una fotografía del documento" },
    ],
    correctIds: ["definicion"],
    minSelected: 1,
    justifyPrompts: ["Explica por qué un documento digital y un documento digitalizado no son lo mismo."],
    justifyMinWords: 8,
    expectedSummary: "Digitalizar es convertir, mediante un proceso controlado, información de un soporte físico en una representación digital; un documento digital nunca existió en papel, mientras que uno digitalizado sí.",
    feedbackByVerdict: {
      correct: "Correcto: la digitalización es un proceso controlado de conversión de soporte físico a digital, distinto de un documento que nace digital.",
      partial: "Revisa la diferencia entre documento digital (nunca existió en papel) y documento digitalizado (si existió en papel).",
      review: "La digitalización convierte información de un soporte físico a una representación digital mediante un proceso controlado. Un documento digital, en cambio, nunca existió en papel — son conceptos distintos (visto en la Semana 1).",
    },
  },

  // Pregunta 11 — Calidad de imagen
  {
    id: 11,
    category: "Calidad de imagen",
    kind: "compareChoice",
    prompt: "¿Cuál imagen cumple mejor el objetivo de digitalización?",
    points: 1,
    labelA: "Imagen A",
    rowsA: [{ field: "Características", value: "Inclinada, cortada en el borde derecho, texto poco legible" }],
    labelB: "Imagen B",
    rowsB: [{ field: "Características", value: "Correctamente orientada, completa, texto legible" }],
    expected: "b",
    justifyMinWords: 8,
    expectedSummary: "La Imagen B cumple el objetivo de digitalización: una imagen debe permitir consultar y gestionar el documento, lo que exige orientación correcta, integridad y legibilidad.",
    feedbackByVerdict: {
      correct: "Correcto: una imagen inclinada, cortada o poco legible no sirve para consultar ni gestionar el documento, sin importar otros factores.",
      partial: "Tu justificación aporta algo, pero revisa cuál imagen realmente permite leer y gestionar el documento sin dificultad.",
      review: "La Imagen A está inclinada, incompleta y es poco legible — no cumple el propósito de la digitalización. La Imagen B sí, por estar correctamente orientada, completa y ser legible.",
    },
  },

  // Pregunta 12 — Resolución
  {
    id: 12,
    category: "Resolución",
    kind: "selectJustify",
    prompt: "¿Cuál de las siguientes afirmaciones sobre resolución de digitalización es correcta? Selecciona la correcta y justifica.",
    points: 1,
    options: [
      { id: "siempre-300", label: "Todo documento debe digitalizarse siempre a 300 DPI" },
      { id: "mas-grande-mejor", label: "Cuanto más grande sea el archivo resultante, mejor es siempre la digitalización" },
      { id: "depende", label: "La resolución adecuada depende del tipo de documento, su contenido, su finalidad y los requisitos institucionales" },
      { id: "no-influye-ocr", label: "La resolución no influye en la calidad del reconocimiento óptico de caracteres (OCR)" },
    ],
    correctIds: ["depende"],
    minSelected: 1,
    justifyPrompts: ["Explica por qué no existe un único valor de resolución correcto para todos los casos."],
    justifyMinWords: 8,
    expectedSummary: "No existe un único valor universal de DPI: la resolución adecuada depende del documento, su finalidad y los requisitos institucionales — ni un valor fijo ni el tamaño del archivo determinan por sí solos la calidad.",
    feedbackByVerdict: {
      correct: "Correcto: no existe una regla universal de resolución; depende del documento, su contenido, su finalidad y los requisitos institucionales.",
      partial: "Revisa por qué fijar un único valor (como 300 DPI) para todos los casos sería pedagógicamente incorrecto.",
      review: "No existe un único valor universal de DPI. La resolución adecuada depende del tipo de documento, su contenido, su finalidad, el equipo disponible y los requisitos institucionales — y sí influye en la calidad del OCR.",
    },
  },

  // Pregunta 13 — Color
  {
    id: 13,
    category: "Color",
    kind: "compareChoice",
    prompt: "¿Cuál de los dos documentos realmente necesita digitalizarse en color?",
    points: 1,
    labelA: "Documento A",
    rowsA: [{ field: "Descripción", value: "Oficio mecanografiado, solo texto en tinta negra, sin sellos ni anotaciones" }],
    labelB: "Documento B",
    rowsB: [{ field: "Descripción", value: "Resolución con un sello oficial a color y una firma en tinta azul" }],
    expected: "b",
    justifyMinWords: 8,
    expectedSummary: "El Documento B necesita color porque el sello y la tinta pueden ser relevantes para verificar autenticidad; el Documento A es solo texto en tinta negra, sin valor informativo adicional en el color.",
    feedbackByVerdict: {
      correct: "Correcto: el color aporta información relevante en el Documento B (sello, firma); en el Documento A no aporta nada adicional.",
      partial: "Tu justificación aporta algo, pero revisa en cuál de los dos documentos el color forma parte del contenido informativo.",
      review: "El color debe usarse cuando forma parte del contenido informativo. El Documento B tiene un sello a color y una firma en tinta azul, relevantes para la autenticidad; el Documento A es solo texto en tinta negra.",
    },
  },

  // Pregunta 14 — Control de calidad
  {
    id: 14,
    category: "Control de calidad",
    kind: "stageFlow",
    scenario: "El área de archivo digitaliza un lote de documentos y debe asegurar su calidad antes de almacenarlos.",
    prompt: "Completa qué revisar, quién es responsable y qué evidencia debería quedar en cada etapa del control de calidad.",
    points: 1,
    stages: [
      { id: "preparacion", label: "Preparación" },
      { id: "captura", label: "Captura" },
      { id: "control-imagen", label: "Control de imagen" },
      { id: "verificacion", label: "Verificación" },
      { id: "metadatos", label: "Metadatos" },
    ],
    fieldLabels: ["Qué revisar", "Responsable", "Evidencia"],
    minStages: 4,
    criticalPrompt: "¿Cuál etapa consideras más crítica para detectar imágenes inclinadas, cortadas o ilegibles, y por qué?",
    criticalMinWords: 8,
    expectedSummary: "Un control de calidad completo revisa preparación, captura, control de imagen, verificación y metadatos, asignando responsable y evidencia en cada etapa — con especial atención a la etapa de control de imagen, donde se detectan los errores de digitalización.",
    feedbackByVerdict: {
      correct: "Correcto: completaste las etapas con acción, responsable y evidencia, y justificaste con criterio cuál etapa detecta mejor los errores de digitalización.",
      partial: "Avanzaste en varias etapas; completa al menos cuatro con sus tres columnas y profundiza en tu justificación de la etapa crítica.",
      review: "Cada etapa (preparación, captura, control de imagen, verificación, metadatos) debería tener una acción concreta, un responsable y una evidencia asociada. Los errores de orientación o legibilidad se detectan específicamente en el control de imagen.",
    },
  },

  // Pregunta 15 — TIFF/JPEG/PNG
  {
    id: 15,
    category: "TIFF, JPEG y PNG",
    kind: "dragClassify",
    instructions: "Arrastra cada afirmación (o tócala y luego toca el formato) hacia el formato que describe.",
    prompt: "Clasifica cada afirmación según el formato de imagen al que corresponde.",
    points: 1,
    items: [
      { id: "tiff-calidad", label: "Formato usado frecuentemente en digitalización, que conserva imagen con alta calidad", icon: "Image", category: "tiff" },
      { id: "jpeg-perdida", label: "Formato de imagen cuya compresión puede perder información para reducir el tamaño del archivo", icon: "ScanLine", category: "jpeg" },
      { id: "png-sin-perdida", label: "Formato de imagen con compresión sin pérdida, común en gráficos digitales", icon: "FileType", category: "png" },
      { id: "tiff-grande", label: "Formato cuyos archivos tienden a ser más grandes por conservar el detalle sin perderlo", icon: "Image", category: "tiff" },
      { id: "jpeg-detalle", label: "Formato cuya pérdida de información puede afectar documentos donde el detalle es crítico", icon: "ScanLine", category: "jpeg" },
      { id: "png-no-universal", label: "Formato que, pese a no perder información, no debe asumirse como el mejor formato archivístico", icon: "FileType", category: "png" },
    ],
    categories: [
      { id: "tiff", label: "TIFF", icon: "Image" },
      { id: "jpeg", label: "JPEG", icon: "ScanLine" },
      { id: "png", label: "PNG", icon: "FileType" },
    ],
    expectedSummary: "TIFF: alta calidad para digitalización, archivos más grandes. JPEG: compresión con pérdida, puede afectar documentos críticos. PNG: compresión sin pérdida, común en gráficos, no necesariamente el mejor formato archivístico.",
    feedbackByVerdict: {
      correct: "Correcto: distingues las características propias de TIFF, JPEG y PNG sin confundirlas.",
      partial: "Clasificaste correctamente algunas afirmaciones; revisa la diferencia entre conservar detalle sin pérdida (TIFF/PNG) y perder información para reducir tamaño (JPEG).",
      review: "TIFF conserva alta calidad y genera archivos grandes; JPEG comprime con pérdida de información; PNG comprime sin pérdida pero no es automáticamente el mejor formato para archivo.",
    },
  },

  // Pregunta 16 — PDF
  {
    id: 16,
    category: "PDF",
    kind: "selectJustify",
    prompt: "¿Cuál de las siguientes afirmaciones sobre PDF es correcta? Selecciona la correcta y justifica.",
    points: 1,
    options: [
      { id: "garantiza-siempre", label: "Cualquier PDF garantiza automáticamente la preservación a largo plazo del documento" },
      { id: "correcta", label: "PDF está orientado a presentar documentos de manera consistente, pero no garantiza por sí solo la preservación a largo plazo" },
      { id: "imagen-sin-perdida", label: "PDF es un formato de imagen con compresión sin pérdida" },
      { id: "nunca-elementos", label: "Un PDF nunca puede incluir elementos que comprometan su estabilidad futura" },
    ],
    correctIds: ["correcta"],
    minSelected: 1,
    justifyPrompts: ["Explica por qué un PDF común no garantiza por sí solo la preservación a largo plazo."],
    justifyMinWords: 8,
    expectedSummary: "PDF presenta documentos de forma consistente, pero no garantiza preservación a largo plazo por sí solo; puede incluir elementos que comprometan su estabilidad futura.",
    feedbackByVerdict: {
      correct: "Correcto: PDF es un formato de presentación consistente, no una garantía automática de preservación.",
      partial: "Revisa por qué 'orientado a presentar de manera consistente' no es lo mismo que 'garantiza preservación a largo plazo'.",
      review: "PDF está orientado a presentar documentos de manera consistente, pero no significa automáticamente preservación a largo plazo — puede incluir elementos (fuentes externas, scripts) que comprometen su estabilidad futura.",
    },
  },

  // Pregunta 17 — PDF/A
  {
    id: 17,
    category: "PDF/A",
    kind: "selectJustify",
    prompt: "¿Cuál de las siguientes afirmaciones sobre PDF/A es correcta? Selecciona la correcta y justifica.",
    points: 1,
    options: [
      { id: "igual-pdf", label: "PDF/A es exactamente lo mismo que un PDF común, solo con otro nombre" },
      { id: "garantiza-sola", label: "Cualquier archivo PDF/A garantiza por sí solo la preservación, sin necesidad de otras medidas" },
      { id: "correcta", label: "PDF/A es una familia de formatos basados en PDF, orientados a la preservación a largo plazo, con requisitos específicos" },
      { id: "solo-imagenes", label: "PDF/A solo puede utilizarse para imágenes, nunca para documentos de texto" },
    ],
    correctIds: ["correcta"],
    minSelected: 1,
    justifyPrompts: ["Explica por qué PDF/A no garantiza por sí solo la preservación."],
    justifyMinWords: 8,
    expectedSummary: "PDF/A es una familia de formatos basados en PDF orientados a la preservación a largo plazo, con requisitos específicos — no es idéntico a un PDF común, no garantiza por sí solo la preservación, y no se limita a imágenes.",
    feedbackByVerdict: {
      correct: "Correcto: PDF/A agrega requisitos específicos orientados a la preservación, pero no sustituye otras medidas de conservación.",
      partial: "Revisa por qué PDF/A no es idéntico a un PDF común, aunque esté basado en él.",
      review: "PDF/A es una familia de formatos basados en PDF, con requisitos específicos que favorecen la preservación a largo plazo — pero no garantiza por sí solo la conservación, no es lo mismo que cualquier PDF, y se usa principalmente para documentos de texto, no solo imágenes.",
    },
  },

  // Pregunta 18 — Selección de formato
  {
    id: 18,
    category: "Selección de formato",
    kind: "selectJustify",
    scenario: "Un documento de texto de varias páginas debe conservarse a largo plazo como evidencia institucional, sin depender de un software específico en el futuro.",
    prompt: "¿Qué formato es más adecuado para este caso? Selecciona el correcto y justifica.",
    points: 1,
    options: [
      { id: "jpeg", label: "JPEG" },
      { id: "png", label: "PNG" },
      { id: "tiff", label: "TIFF" },
      { id: "pdfa", label: "PDF/A" },
    ],
    correctIds: ["pdfa"],
    minSelected: 1,
    justifyPrompts: ["Explica por qué los otros formatos no son adecuados para este caso."],
    justifyMinWords: 8,
    expectedSummary: "PDF/A es el formato orientado específicamente a la preservación a largo plazo de documentos; JPEG y PNG son formatos de imagen, y TIFF, aunque de alta calidad, está pensado para imágenes, no para documentos de texto de varias páginas como evidencia.",
    feedbackByVerdict: {
      correct: "Correcto: PDF/A está diseñado específicamente para preservar documentos de texto a largo plazo, sin depender de un software específico.",
      partial: "Revisa cuál formato está orientado a documentos de texto y preservación, y no solo a imágenes.",
      review: "PDF/A es la opción adecuada para preservar un documento de texto como evidencia institucional. JPEG, PNG y TIFF son formatos de imagen, pensados para otro propósito.",
    },
  },

  // Pregunta 19 — Caso de digitalización
  {
    id: 19,
    category: "Caso de digitalización",
    kind: "compareChoice",
    prompt: "¿Qué enfoque es más adecuado para digitalizar un manuscrito antiguo con trazos de tinta desvanecida?",
    points: 1,
    labelA: "Enfoque A",
    rowsA: [{ field: "Descripción", value: "Digitalizar en blanco y negro, a baja resolución, para ahorrar espacio de almacenamiento" }],
    labelB: "Enfoque B",
    rowsB: [{ field: "Descripción", value: "Digitalizar en escala de grises o color, a una resolución que permita distinguir los trazos de tinta desvanecida" }],
    expected: "b",
    justifyMinWords: 8,
    expectedSummary: "Un manuscrito con trazos desvanecidos requiere suficiente resolución y un modo de color/grises que permita distinguir el detalle — priorizar el ahorro de espacio sobre la legibilidad compromete el propósito de la digitalización.",
    feedbackByVerdict: {
      correct: "Correcto: priorizar el ahorro de espacio sobre la calidad compromete la posibilidad de leer el manuscrito en el futuro.",
      partial: "Tu justificación aporta algo, pero revisa qué enfoque realmente preserva el detalle necesario para este tipo de material.",
      review: "Un manuscrito con tinta desvanecida necesita suficiente resolución y un modo de color o escala de grises que permita distinguir los trazos — reducir la calidad para ahorrar espacio no cumple el propósito de digitalizar este material.",
    },
  },

  // Pregunta 20 — CASO INTEGRADOR
  {
    id: 20,
    category: "Caso integrador de interoperabilidad y digitalización",
    kind: "matrixBuilder",
    scenario:
      "Una institución debe enviar un expediente a otra entidad. El expediente incluye documentos físicos aún no digitalizados, documentos digitalizados hace años con baja resolución, y los dos sistemas involucrados usan nombres de campo distintos para los mismos conceptos.",
    prompt: "Construye una matriz: para cada problema, define la decisión, el criterio, el formato y el control de calidad correspondiente.",
    instructions: "Completa al menos 3 filas y responde las preguntas de cierre.",
    points: 1,
    columns: [
      { key: "problema", label: "Problema", type: "text", placeholder: "Describe el problema" },
      { key: "decision", label: "Decisión", type: "text", placeholder: "¿Qué se decide hacer?" },
      { key: "criterio", label: "Criterio", type: "text", placeholder: "¿Qué criterio técnico aplicas?" },
      {
        key: "formato",
        label: "Formato",
        type: "select",
        options: [
          { id: "tiff", label: "TIFF" },
          { id: "jpeg", label: "JPEG" },
          { id: "png", label: "PNG" },
          { id: "pdf", label: "PDF" },
          { id: "pdfa", label: "PDF/A" },
        ],
      },
      { key: "control", label: "Control de calidad", type: "text", placeholder: "¿Cómo verificarías el resultado?" },
    ],
    minRows: 3,
    addLabel: "Agregar otro problema",
    chipSuggestions: [
      "Documentos físicos aún no digitalizados",
      "Documentos digitalizados hace años con baja resolución",
      "Campos sin correspondencia clara entre los dos sistemas",
    ],
    chipColumnKey: "problema",
    consistencyHints: [{ problemKeyword: "digitalizados hace anos con baja resolucion", column: "formato", expectedValue: ["tiff", "pdfa"] }],
    closingQuestions: [
      "¿Qué evidencia permitiría verificar que tus decisiones mejoraron la calidad e interoperabilidad del expediente?",
      "De todos los problemas identificados, ¿cuál priorizarías primero y por qué?",
    ],
    closingMinWords: 8,
    expectedSummary: "Cada problema debe asociarse con una decisión concreta, un criterio técnico coherente, un formato adecuado (no contradictorio con el problema) y un control de calidad verificable — no basta con enunciar el problema.",
    feedbackByVerdict: {
      correct: "Correcto: construiste una matriz completa que conecta cada problema con una decisión, un criterio y un formato coherentes, con control de calidad y evidencia claros.",
      partial: "Avanzaste en la matriz; completa al menos tres filas con las cinco columnas y revisa que el formato elegido no contradiga el problema descrito (por ejemplo, un documento con baja resolución necesita un formato orientado a la calidad o la preservación, como TIFF o PDF/A, no uno con pérdida como JPEG).",
      review: "Una matriz completa relaciona cada problema con una decisión, un criterio técnico, un formato coherente (no contradictorio) y un control de calidad verificable — no basta con enunciar el problema y llenar campos sin análisis.",
    },
  },
];

export const TOTAL_QUESTIONS_8 = practice8Questions.length;
export const MAX_SCORE_8 = practice8Questions.reduce((sum, q) => sum + q.points, 0);
