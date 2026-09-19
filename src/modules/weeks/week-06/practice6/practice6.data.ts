import type { Practice6Question } from "./practice6.types";

const SIGNATURE_ASPECT_OPTIONS = [
  { id: "identidad", label: "Identidad / certificado" },
  { id: "integridad", label: "Integridad" },
  { id: "trazabilidad", label: "Trazabilidad" },
  { id: "registro", label: "Registro" },
];

export const practice6Questions: Practice6Question[] = [
  // Pregunta 1 — Documento firmado como evidencia
  {
    id: 1,
    category: "Documento firmado como evidencia",
    kind: "selectJustify",
    scenario:
      "Una unidad recibe un documento electrónico aparentemente firmado. El documento contiene información relevante, pero antes de utilizarlo como evidencia debe determinarse quién firmó, qué mecanismo se utilizó y si la firma puede verificarse.",
    prompt: "¿Qué condiciones deberían comprobarse antes de aceptar este documento como evidencia? Selecciona las relevantes y explica una de ellas.",
    points: 1,
    options: [
      { id: "identidad", label: "Identidad del firmante según el certificado" },
      { id: "vigencia", label: "Vigencia del certificado asociado" },
      { id: "integridad", label: "Si el contenido fue alterado tras la firma" },
      { id: "tiempo", label: "Cuándo se produjo la firma" },
      { id: "registro", label: "Si la revisión quedó registrada" },
      { id: "diseno", label: "El diseño visual del documento" },
      { id: "peso", label: "El tamaño del archivo" },
    ],
    correctIds: ["identidad", "vigencia", "integridad", "tiempo", "registro"],
    minSelected: 4,
    justifyPrompts: ["Elige una de las condiciones seleccionadas y explica por qué es relevante."],
    justifyMinWords: 8,
    expectedSummary: "Identidad del firmante, vigencia del certificado, integridad del contenido, momento de la firma y registro de la revisión — no el diseño ni el tamaño del archivo.",
    feedbackByVerdict: {
      correct: "Correcto: reconoces que sostener un documento firmado como evidencia exige comprobar identidad, vigencia, integridad, momento de la firma y dejar registro de la revisión — no basta con que el documento 'se vea' firmado.",
      partial: "Tu selección va en la dirección correcta, pero revisa si dejaste fuera alguna condición sustantiva o si tu explicación necesita más desarrollo.",
      review: "La confiabilidad de un documento firmado no depende de su apariencia, sino de poder comprobar identidad, vigencia del certificado, integridad del contenido, momento de la firma y dejar constancia de la revisión.",
    },
  },

  // Pregunta 2 — Atributo comprometido
  {
    id: 2,
    category: "Atributo comprometido",
    kind: "dragClassify",
    scenario:
      "Situación A: No se puede determinar quién generó el documento firmado.\nSituación B: El contenido del documento fue modificado después de la firma, sin dejar evidencia del cambio.\nSituación C: El certificado utilizado para firmar había sido revocado antes del momento de la firma.\nSituación D: El documento firmado existe, pero no hay registro de cuándo ni por quién fue recibido.",
    instructions: "Arrastra cada situación (o tócala y luego toca la categoría) hacia lo que compromete.",
    prompt: "Relaciona cada situación con lo que resulta comprometido.",
    points: 1,
    items: [
      { id: "sit-a", label: "Situación A", icon: "HelpCircle", category: "identidad" },
      { id: "sit-b", label: "Situación B", icon: "KeyRound", category: "integridad" },
      { id: "sit-c", label: "Situación C", icon: "ClipboardList", category: "certificado" },
      { id: "sit-d", label: "Situación D", icon: "Route", category: "trazabilidad" },
    ],
    categories: [
      { id: "identidad", label: "Identidad no verificable", icon: "FileSearch" },
      { id: "integridad", label: "Integridad comprometida", icon: "KeyRound" },
      { id: "certificado", label: "Certificado no válido", icon: "ShieldCheck" },
      { id: "trazabilidad", label: "Trazabilidad perdida", icon: "Route" },
    ],
    expectedSummary: "A → Identidad no verificable (no se sabe quién firmó); B → Integridad comprometida (modificado sin evidencia); C → Certificado no válido (revocado al firmar); D → Trazabilidad perdida (sin registro de recepción).",
    feedbackByVerdict: {
      correct: "Correcto: distingues con precisión entre no poder identificar al firmante, un contenido alterado, un certificado inválido y la ausencia de registro — cuatro problemas distintos que requieren respuestas distintas.",
      partial: "Clasificaste correctamente algunas situaciones, pero revisa la diferencia entre un problema de identidad y uno de integridad, o entre certificado y trazabilidad.",
      review: "Cada situación compromete algo distinto: quién firmó (identidad), si el contenido cambió (integridad), si el certificado era válido (certificado), o si quedó registro (trazabilidad). Vuelve a analizar cada una.",
    },
  },

  // Pregunta 3 — ¿Qué falla en este certificado?
  {
    id: 3,
    category: "Interpretación de certificados",
    kind: "selectJustify",
    scenario: "Hoy es 15 de septiembre de 2026.\nTitular: —\nEmisor: Entidad certificadora (genérico)\nVigencia: 01/01/2020 – 01/01/2021\nUso declarado: —",
    prompt: "Selecciona los elementos de este certificado que generan duda para usarlo hoy, y explica por qué.",
    points: 1,
    options: [
      { id: "titular", label: "Titular — no está identificado" },
      { id: "vigencia", label: "Vigencia — venció en 2021" },
      { id: "uso", label: "Uso declarado — no se especifica" },
      { id: "emisor", label: "Emisor — el nombre es demasiado largo" },
    ],
    correctIds: ["titular", "vigencia", "uso"],
    minSelected: 2,
    justifyPrompts: ["Explica por qué los elementos que elegiste generan duda."],
    justifyMinWords: 8,
    expectedSummary: "Titular no identificado, vigencia vencida y uso declarado ausente — no la longitud del nombre del emisor.",
    feedbackByVerdict: {
      correct: "Correcto: sin titular identificado, con vigencia vencida y sin uso declarado, este certificado no ofrece bases suficientes para confiar en una firma actual.",
      partial: "Identificaste algún problema real, pero revisa si consideraste todos los elementos que generan duda sobre este certificado.",
      review: "Un certificado sin titular identificado, vencido, y sin uso declarado no puede aceptarse sin más para un trámite actual. Revisa cada campo con detenimiento.",
    },
  },

  // Pregunta 4 — Captura y registro de un documento firmado
  {
    id: 4,
    category: "Captura de documentos firmados",
    kind: "selectJustify",
    prompt: "¿Cuáles de estos documentos firmados deberían capturarse y registrarse en el sistema de gestión documental? Selecciona y justifica al menos dos decisiones.",
    points: 1,
    options: [
      { id: "final", label: "Documento final firmado que sustenta una decisión" },
      { id: "borrador", label: "Borrador firmado informalmente, nunca utilizado" },
      { id: "recibido", label: "Documento firmado recibido dentro de un trámite" },
      { id: "copia", label: "Copia guardada en el computador personal de un funcionario, sin relación con ningún trámite" },
      { id: "expediente", label: "Documento firmado que forma parte de un expediente" },
    ],
    correctIds: ["final", "recibido", "expediente"],
    minSelected: 3,
    justifyPrompts: ["Justifica tu primera decisión.", "Justifica tu segunda decisión."],
    justifyMinWords: 6,
    expectedSummary: "El documento final que sustenta una decisión, el recibido en un trámite y el que integra un expediente — no el borrador informal ni la copia sin función documental.",
    feedbackByVerdict: {
      correct: "Correcto: capturas los documentos firmados que sostienen una actividad institucional, dejando fuera el borrador y la copia sin función documental.",
      partial: "Tu selección es razonable, pero revisa si algún documento sin función documental quedó incluido o si dejaste fuera alguno relevante.",
      review: "La firma no cambia el criterio de captura: sigue dependiendo de si el documento sostiene una actividad institucional como evidencia, no de si tiene una firma aplicada.",
    },
  },

  // Pregunta 5 — Detecta el riesgo en la gestión de firmas
  {
    id: 5,
    category: "Riesgos en la gestión de firmas",
    kind: "selectJustify",
    scenario: "Una oficina guarda documentos firmados en carpetas personales. Nadie revisa la vigencia de los certificados y no existe un registro uniforme de las firmas recibidas.",
    prompt: "Selecciona los riesgos presentes y luego indica cuál consideras el más importante.",
    points: 1,
    options: [
      { id: "sin-revision", label: "No se revisa la vigencia de los certificados" },
      { id: "sin-registro", label: "No existe un registro uniforme de firmas recibidas" },
      { id: "dependencia-personal", label: "La conservación depende de carpetas personales" },
      { id: "color", label: "Las carpetas no tienen un esquema de colores uniforme" },
    ],
    correctIds: ["sin-revision", "sin-registro", "dependencia-personal"],
    minSelected: 3,
    justifyPrompts: ["¿Cuál consideras el riesgo más importante? Justifica tu respuesta."],
    justifyMinWords: 8,
    expectedSummary: "No revisar la vigencia de certificados, la ausencia de registro uniforme y la dependencia de carpetas personales — no aspectos estéticos.",
    feedbackByVerdict: {
      correct: "Correcto: identificas que la falta de revisión de vigencia, la ausencia de registro y la dependencia de carpetas personales son los riesgos reales — no el color de las carpetas.",
      partial: "Identificaste algún riesgo real, pero revisa si dejaste fuera alguno importante o si tu justificación necesita más desarrollo.",
      review: "El riesgo real está en no revisar la vigencia de los certificados, no registrar las firmas recibidas y depender de carpetas personales — no en aspectos estéticos.",
    },
  },

  // Pregunta 6 — Ordena el proceso de firma y verificación
  {
    id: 6,
    category: "Proceso de firma y verificación",
    kind: "reorder",
    instructions: "Toca los elementos en el orden en que ocurren al firmar y luego verificar un documento.",
    prompt: "Construye la secuencia combinando firma y verificación.",
    points: 1,
    items: [
      { id: "documento", label: "Documento" },
      { id: "resumen", label: "Generación de resumen" },
      { id: "firma", label: "Aplicación de la firma" },
      { id: "certificado", label: "Certificado" },
      { id: "firmado", label: "Documento firmado" },
      { id: "verificacion", label: "Verificación" },
    ],
    correctOrder: ["documento", "resumen", "firma", "certificado", "firmado", "verificacion"],
    expectedSummary: "Documento → Generación de resumen → Aplicación de la firma → Certificado → Documento firmado → Verificación.",
    feedbackByVerdict: {
      correct: "Construiste correctamente la secuencia: el resumen y la firma se generan antes de tener el documento firmado, y la verificación ocurre después, cuando alguien más lo recibe.",
      partial: "Tu secuencia acierta en varios tramos, pero revisa el orden entre la generación del resumen, la firma y el certificado.",
      review: "Primero se genera el resumen del documento, luego se aplica la firma con el certificado, obteniendo el documento firmado; solo después, al recibirlo, se realiza la verificación.",
    },
  },

  // Pregunta 7 — Ficha de registro de un documento firmado
  {
    id: 7,
    category: "Registro de documentos firmados",
    kind: "editFields",
    scenario: "Documento electrónico ficticio: Oficio firmado digitalmente, remitido por la Oficina de Asesoría Jurídica a la Oficina General el 5 de septiembre de 2026.",
    prompt: "Completa la ficha de registro de este documento firmado.",
    points: 1,
    fields: [
      { id: "identificador", label: "Identificador", initialValue: "" },
      { id: "titulo", label: "Título", initialValue: "" },
      { id: "fecha", label: "Fecha", initialValue: "" },
      { id: "firmante", label: "Firmante (según certificado)", initialValue: "" },
      { id: "certificado", label: "Certificado asociado", initialValue: "" },
      { id: "unidad", label: "Unidad receptora", initialValue: "" },
      { id: "estado", label: "Estado", initialValue: "" },
      { id: "referencia", label: "Referencia / ubicación", initialValue: "" },
    ],
    explanationPrompt: "¿Qué tres campos consideras indispensables para poder verificar y gestionar este documento firmado? Justifica.",
    explanationMinWords: 10,
    expectedSummary: "Una ficha completa identifica el documento, atribuye la firma a un certificado concreto y lo sitúa en su contexto de recepción.",
    feedbackByVerdict: {
      correct: "Completaste una ficha sólida y tu justificación reconoce que identificar el documento y su firmante, junto con el certificado asociado, es lo que sostiene su valor como evidencia verificable.",
      partial: "Completaste la mayoría de los campos, pero revisa si alguno quedó vacío y si tu justificación explica con claridad por qué esos tres campos son indispensables.",
      review: "Una ficha incompleta no permite verificar ni gestionar un documento firmado. Completa todos los campos posibles, especialmente firmante y certificado asociado.",
    },
  },

  // Pregunta 8 — Verificación vs validación en dos casos
  {
    id: 8,
    category: "Verificación vs. validación",
    kind: "matchPairs",
    prompt: "Relaciona cada caso con lo que resulta comprometido y luego explica la diferencia entre ambos.",
    points: 1,
    concepts: [
      { id: "caso-a", label: "Caso A: La firma se verifica técnicamente sin alteraciones, pero el certificado fue revocado antes de firmarse." },
      { id: "caso-b", label: "Caso B: El certificado está vigente, pero el contenido fue alterado después de firmarse." },
    ],
    definitions: [
      { id: "validacion", label: "Validación comprometida" },
      { id: "verificacion", label: "Verificación comprometida (integridad)" },
    ],
    correctPairs: { "caso-a": "validacion", "caso-b": "verificacion" },
    justifyPrompt: "Explica la diferencia entre lo que compromete al Caso A y lo que compromete al Caso B.",
    justifyMinWords: 10,
    expectedSummary: "Caso A compromete la validación (certificado revocado, aunque la firma se compruebe técnicamente); Caso B compromete la verificación/integridad (contenido alterado).",
    feedbackByVerdict: {
      correct: "Correcto: distingues que la verificación técnica puede ser exitosa y aun así el documento no ser válido (certificado revocado), mientras que una alteración del contenido compromete directamente la verificación técnica.",
      partial: "Relacionaste al menos un caso correctamente, pero desarrolla mejor la diferencia entre verificación técnica y validez para el trámite.",
      review: "La verificación técnica revisa si la firma corresponde al documento; la validación evalúa si el certificado es aceptable para el trámite (vigente, no revocado). Vuelve a relacionar los casos.",
    },
  },

  // Pregunta 9 — ¿Cuál documento firmado es más confiable?
  {
    id: 9,
    category: "Confiabilidad de un documento firmado",
    kind: "compareChoice",
    prompt: "¿Cuál de los dos documentos firmados presenta mejores condiciones para continuar el trámite? Justifica tu decisión.",
    points: 1,
    labelA: "Documento A",
    labelB: "Documento B",
    rowsA: [
      { field: "Firma", value: "Verificada técnicamente" },
      { field: "Certificado", value: "Vigente" },
      { field: "Registro", value: "Registrado al recibirse" },
    ],
    rowsB: [
      { field: "Firma", value: "Verificada técnicamente" },
      { field: "Certificado", value: "Vigente" },
      { field: "Registro", value: "Sin registro de recepción" },
    ],
    expected: "a",
    justifyMinWords: 8,
    expectedSummary: "El Documento A, porque además de la firma verificada y el certificado vigente, cuenta con registro de recepción que sostiene su trazabilidad.",
    feedbackByVerdict: {
      correct: "Correcto: firma y certificado son necesarios pero no suficientes; el registro de recepción es lo que permite sostener la trazabilidad del Documento A frente al B.",
      partial: "Tu justificación aporta elementos válidos, pero precisa por qué el registro de recepción es la diferencia clave entre ambos documentos.",
      review: "Firma verificada y certificado vigente son iguales en ambos casos; lo que distingue al Documento A es que su recepción quedó registrada, sosteniendo su trazabilidad.",
    },
  },

  // Pregunta 10 — Relaciona el problema con el control
  {
    id: 10,
    category: "Controles sobre documentos firmados",
    kind: "matchPairs",
    prompt: "Relaciona cada problema con el control más apropiado.",
    points: 1,
    concepts: [
      { id: "certificado-vencido", label: "Certificado vencido no detectado" },
      { id: "sin-registro-firma", label: "Falta de registro de la firma" },
      { id: "dificil-localizar", label: "Imposibilidad de localizar el documento firmado" },
      { id: "modif-sin-trazabilidad", label: "Modificación sin trazabilidad" },
      { id: "sin-responsables", label: "Responsabilidades no definidas" },
    ],
    definitions: [
      { id: "verificar-vigencia", label: "Verificación de vigencia del certificado" },
      { id: "registro-obligatorio", label: "Registro obligatorio de la firma" },
      { id: "acceso-recuperacion", label: "Procedimientos de acceso y recuperación" },
      { id: "control-integridad", label: "Control de integridad y trazabilidad" },
      { id: "responsabilidades", label: "Responsabilidades definidas" },
    ],
    correctPairs: {
      "certificado-vencido": "verificar-vigencia",
      "sin-registro-firma": "registro-obligatorio",
      "dificil-localizar": "acceso-recuperacion",
      "modif-sin-trazabilidad": "control-integridad",
      "sin-responsables": "responsabilidades",
    },
    expectedSummary: "Certificado vencido → verificación de vigencia; sin registro → registro obligatorio; difícil localizar → acceso/recuperación; modificación sin trazabilidad → control de integridad; sin responsables → responsabilidades definidas.",
    feedbackByVerdict: {
      correct: "Correcto: cada control resuelve un problema específico de la gestión de documentos firmados.",
      partial: "Relacionaste correctamente algunos pares, pero revisa cuál control resuelve específicamente cada problema.",
      review: "Cada problema tiene un control específico: no es lo mismo verificar vigencia que registrar una firma, ni lo mismo controlar integridad que definir responsabilidades.",
    },
  },

  // Pregunta 11 — Contexto de una firma aislada
  {
    id: 11,
    category: "Contexto de un documento firmado",
    kind: "selectJustify",
    scenario: "Documento aislado: 'Oficio_firmado.pdf'",
    prompt: "¿Qué información adicional permitiría comprender mejor este documento firmado? Selecciona y explica por qué el contexto es importante.",
    points: 1,
    options: [
      { id: "firmante", label: "Quién firmó, según el certificado" },
      { id: "tramite", label: "Para qué trámite se firmó" },
      { id: "unidad", label: "Qué unidad lo recibe" },
      { id: "fecha", label: "Cuándo se recibió" },
      { id: "color", label: "El color del ícono del PDF" },
    ],
    correctIds: ["firmante", "tramite", "unidad", "fecha"],
    minSelected: 3,
    justifyPrompts: ["Explica por qué el contexto es importante para gestionar un documento firmado."],
    justifyMinWords: 8,
    expectedSummary: "Firmante, trámite relacionado, unidad receptora y fecha de recepción — no aspectos irrelevantes como el ícono del archivo.",
    feedbackByVerdict: {
      correct: "Correcto: sin saber quién firmó, para qué trámite y cuándo se recibió, un documento firmado aislado pierde buena parte de su utilidad como evidencia.",
      partial: "Tu selección apunta en la dirección correcta, pero desarrolla mejor por qué esa información contextual sostiene el valor del documento.",
      review: "Un nombre de archivo no aporta contexto. Sin firmante, trámite, unidad y fecha, el documento firmado es difícil de interpretar correctamente.",
    },
  },

  // Pregunta 12 — Analiza el flujo con firma
  {
    id: 12,
    category: "Flujo documental con firma",
    kind: "stageFlow",
    instructions: "Recepción → Registro → Firma → Validación → Derivación → Archivo.",
    prompt: "Para al menos 4 de las 6 etapas, indica qué documento/evidencia interviene, qué control aplicarías y quién sería el responsable.",
    points: 1,
    stages: [
      { id: "recepcion", label: "Recepción" },
      { id: "registro", label: "Registro" },
      { id: "firma", label: "Firma" },
      { id: "validacion", label: "Validación" },
      { id: "derivacion", label: "Derivación" },
      { id: "archivo", label: "Archivo" },
    ],
    fieldLabels: ["Documento / evidencia", "Control", "Responsable"],
    minStages: 4,
    criticalPrompt: "¿Qué etapa consideras crítica para sostener la trazabilidad de la firma? Justifica tu elección.",
    criticalMinWords: 8,
    expectedSummary: "Cada etapa debería dejar un documento o evidencia identificable, un control aplicado y un responsable claro; no se exigen respuestas idénticas.",
    feedbackByVerdict: {
      correct: "Analizaste el flujo con criterio profesional: cada etapa debería dejar un rastro reconocible, y supiste justificar por qué una de ellas resulta especialmente crítica.",
      partial: "Completaste parte del análisis, pero revisa si alguna etapa quedó sin control o sin responsable, y desarrolla mejor tu elección de etapa crítica.",
      review: "Un flujo con firma requiere que cada etapa tenga documento/evidencia, control y responsable. Completa al menos 4 etapas y justifica con más detalle tu elección.",
    },
  },

  // Pregunta 13 — Detecta errores en la gestión de una firma
  {
    id: 13,
    category: "Errores en la gestión de firmas",
    kind: "openText",
    scenario: "Un documento firmado digitalmente nunca fue registrado. Se envió por correo a varias personas, una de ellas lo modificó, y finalmente se guardaron tres copias sin que nadie documentara la revisión de la firma.",
    prompt: "Identifica al menos 4 problemas en la gestión de este caso y explica qué debió haberse hecho.",
    points: 1,
    fieldLabel: "Problemas identificados y qué debió hacerse",
    candidates: [
      { id: "sin-registro", label: "El documento firmado nunca fue registrado", keywords: ["registro", "registrar", "no se registro"] },
      { id: "envio-sin-control", label: "Se envió por correo sin control", keywords: ["correo", "envio", "enviado"] },
      { id: "modificacion", label: "Fue modificado tras la firma", keywords: ["modific", "cambio", "alter"] },
      { id: "copias", label: "Se guardaron copias sin control", keywords: ["copia", "copias", "duplicad"] },
      { id: "sin-revision-firma", label: "Nadie documentó la revisión de la firma", keywords: ["revision", "verificacion", "validacion"] },
    ],
    requiredCount: 4,
    minWords: 15,
    expectedSummary: "Falta de registro, envío sin control, modificación tras la firma, copias sin control y ausencia de documentación de la revisión de la firma.",
    feedbackByVerdict: {
      correct: "Identificas con precisión los problemas de este caso: la falta de registro, el envío sin control, la modificación posterior y la ausencia de revisión documentada son fallas típicas cuando no existen procedimientos definidos.",
      partial: "Identificaste algunos problemas reales, pero podrías precisar más o cubrir otros aspectos del caso.",
      review: "Este caso presenta varios problemas encadenados: sin registro, sin control de envío, modificación posterior y copias sin control. Vuelve a leer el caso e identifica al menos 4.",
    },
  },

  // Pregunta 14 — Responsabilidades en la verificación de firmas
  {
    id: 14,
    category: "Responsabilidades en la verificación",
    kind: "matchPairs",
    prompt: "Relaciona cada responsabilidad con el rol correspondiente y luego responde la pregunta final.",
    points: 1,
    concepts: [
      { id: "revisar-vigencia", label: "Revisar la vigencia y la integridad técnica de la firma" },
      { id: "registrar-firma", label: "Registrar la firma recibida" },
      { id: "definir-procedimientos", label: "Definir los procedimientos de verificación de firmas" },
      { id: "mantener-evidencia", label: "Mantener evidencia temporal" },
      { id: "supervisar", label: "Supervisar el cumplimiento" },
    ],
    definitions: [
      { id: "responsable-tecnico", label: "Responsable técnico de verificación" },
      { id: "mesa-partes", label: "Mesa de partes / personal receptor" },
      { id: "area-ti", label: "Área de TI / repositorio documental" },
      { id: "control-interno", label: "Jefatura o control interno" },
      { id: "area-gestion", label: "Área de gestión documental" },
    ],
    correctPairs: {
      "revisar-vigencia": "responsable-tecnico",
      "registrar-firma": "mesa-partes",
      "definir-procedimientos": "area-gestion",
      "mantener-evidencia": "area-ti",
      supervisar: "control-interno",
    },
    justifyPrompt: "¿Por qué la verificación de una firma no depende únicamente del sistema informático?",
    justifyMinWords: 10,
    expectedSummary: "Distintos roles participan: responsable técnico (vigencia e integridad), área de gestión documental (procedimientos), mesa de partes (registro), TI (evidencia), control interno (supervisión).",
    feedbackByVerdict: {
      correct: "Correcto: distribuyes las responsabilidades entre distintos roles y reconoces que un sistema solo apoya la verificación — las personas y los procedimientos siguen siendo necesarios.",
      partial: "Relacionaste correctamente algunas responsabilidades, pero desarrolla mejor tu respuesta sobre por qué no basta con el sistema informático.",
      review: "La verificación de una firma involucra distintos roles (técnico, receptor, TI, control interno). Un sistema automatiza pasos, pero no sustituye la definición de responsabilidades.",
    },
  },

  // Pregunta 15 — Verificación, validación y auditoría
  {
    id: 15,
    category: "Verificación, validación y auditoría",
    kind: "matchPairs",
    prompt: "Determina qué concepto está principalmente en juego en cada escenario y luego explica la diferencia entre los tres.",
    points: 1,
    concepts: [
      { id: "escenario-1", label: "Escenario 1: El sistema comprueba técnicamente que la firma corresponde al documento y no fue alterada." },
      { id: "escenario-2", label: "Escenario 2: Se evalúa si el certificado utilizado es aceptable para este trámite específico." },
      { id: "escenario-3", label: "Escenario 3: Meses después, se necesita reconstruir quién revisó este documento y cuándo." },
    ],
    definitions: [
      { id: "verificacion", label: "Verificación" },
      { id: "validacion", label: "Validación" },
      { id: "auditoria", label: "Auditoría / trazabilidad" },
    ],
    correctPairs: { "escenario-1": "verificacion", "escenario-2": "validacion", "escenario-3": "auditoria" },
    justifyPrompt: "Explica la diferencia entre verificación, validación y auditoría con tus propias palabras.",
    justifyMinWords: 15,
    expectedSummary: "Escenario 1 → verificación (comprobación técnica); Escenario 2 → validación (aceptabilidad en el contexto); Escenario 3 → auditoría/trazabilidad (reconstrucción posterior).",
    feedbackByVerdict: {
      correct: "Correcto: distingues con claridad que la verificación es técnica, la validación depende del contexto del trámite, y la auditoría permite reconstruir después lo ocurrido gracias a la trazabilidad registrada.",
      partial: "Relacionaste correctamente al menos un escenario, pero tu explicación conceptual necesita distinguir mejor los tres conceptos entre sí.",
      review: "Estos tres conceptos responden preguntas distintas: ¿la firma es técnicamente correcta? (verificación), ¿es aceptable para este trámite? (validación), ¿se puede reconstruir qué pasó? (auditoría).",
    },
  },

  // Pregunta 16 — Corrige la estrategia
  {
    id: 16,
    category: "Estrategia institucional",
    kind: "selectJustify",
    scenario: "Una institución concluye que, al usar firma digital, ya no hace falta ningún otro control sobre sus documentos electrónicos.",
    prompt: "¿Qué otros elementos siguen siendo necesarios? Selecciona los que correspondan y explica por qué la firma digital, por sí sola, no basta.",
    points: 1,
    options: [
      { id: "registro", label: "Registro de los documentos firmados" },
      { id: "trazabilidad", label: "Trazabilidad del flujo documental" },
      { id: "auditoria", label: "Mecanismos de auditoría" },
      { id: "politicas", label: "Políticas de gestión documental" },
      { id: "capacitacion", label: "Capacitación del personal" },
      { id: "marca", label: "La marca del proveedor del certificado" },
    ],
    correctIds: ["registro", "trazabilidad", "auditoria", "politicas", "capacitacion"],
    minSelected: 4,
    justifyPrompts: ["¿Por qué la firma digital, por sí sola, no garantiza una adecuada gestión documental?"],
    justifyMinWords: 10,
    expectedSummary: "Registro, trazabilidad, auditoría, políticas y capacitación siguen siendo necesarios — la firma es un mecanismo más, no un sustituto de la gestión documental.",
    feedbackByVerdict: {
      correct: "Correcto: la firma digital resuelve identidad e integridad de la firma, pero no registra, no da trazabilidad ni define responsabilidades por sí sola — eso sigue dependiendo de la gestión documental.",
      partial: "Tu selección reconoce algunos elementos clave, pero podrías ampliarla o explicar con más detalle por qué la firma no sustituye a la gestión documental.",
      review: "Una firma digital válida no registra el documento, no sostiene su trazabilidad ni define responsabilidades: esos siguen siendo procesos de gestión documental necesarios.",
    },
  },

  // Pregunta 17 — Construye una estrategia de verificación
  {
    id: 17,
    category: "Estrategia de verificación",
    kind: "matrixBuilder",
    scenario: "Se han detectado los siguientes problemas: certificados que no se revisan antes de aceptar un documento; firmas que no se registran; documentos firmados difíciles de localizar; modificaciones posteriores a la firma sin trazabilidad.",
    prompt: "Construye una matriz con al menos 4 problemas, el aspecto que afectan, el control que propones y tu justificación.",
    points: 1,
    columns: [
      { key: "problema", label: "Problema", placeholder: "Describe o selecciona un problema", type: "text" },
      { key: "aspecto", label: "Aspecto afectado", type: "select", options: SIGNATURE_ASPECT_OPTIONS },
      { key: "control", label: "Control propuesto", placeholder: "p. ej. Verificación de vigencia", type: "text" },
      { key: "justificacion", label: "Justificación", placeholder: "¿Por qué resuelve el problema?", type: "text" },
    ],
    minRows: 4,
    chipSuggestions: [
      "Certificados que no se revisan antes de aceptar un documento",
      "Firmas que no se registran",
      "Documentos firmados difíciles de localizar",
      "Modificaciones posteriores a la firma sin trazabilidad",
    ],
    chipColumnKey: "problema",
    closingQuestions: [],
    expectedSummary: "Cada fila debe mostrar coherencia entre el problema, el aspecto afectado y el control propuesto (no exige una única redacción).",
    feedbackByVerdict: {
      correct: "Construiste una matriz coherente: cada control corresponde razonablemente al aspecto afectado por el problema descrito.",
      partial: "Completaste varias filas, pero revisa si en alguna el control propuesto realmente resuelve el aspecto que señalaste.",
      review: "Completa al menos 4 filas, asegurando que el control propuesto corresponda de forma coherente con el aspecto afectado por cada problema.",
    },
  },

  // Pregunta 18 — Analiza una decisión institucional
  {
    id: 18,
    category: "Decisión institucional",
    kind: "compareChoice",
    prompt: "¿Cuál estrategia es más adecuada para gestionar documentos firmados digitalmente? Justifica profesionalmente tu elección.",
    points: 1,
    labelA: "Estrategia A",
    labelB: "Estrategia B",
    rowsA: [{ field: "Descripción", value: "Aceptar cualquier documento firmado sin revisar el certificado ni registrar la recepción." }],
    rowsB: [{ field: "Descripción", value: "Definir procedimientos de verificación, validación y registro para todo documento firmado que se reciba." }],
    expected: "b",
    justifyMinWords: 10,
    expectedSummary: "La Estrategia B, porque define procedimientos de verificación, validación y registro — condiciones necesarias para confiar en un documento firmado.",
    feedbackByVerdict: {
      correct: "Correcto: aceptar firmas sin revisar certificado ni registrar recepción expone a la institución a documentos no verificables. La Estrategia B sostiene una gestión confiable.",
      partial: "Elegiste una postura razonable, pero desarrolla mejor por qué los procedimientos de verificación y registro son indispensables.",
      review: "Aceptar documentos firmados sin ningún procedimiento de verificación ni registro no garantiza que puedan sostenerse como evidencia confiable.",
    },
  },

  // Pregunta 19 — Caso de diagnóstico
  {
    id: 19,
    category: "Diagnóstico institucional",
    kind: "matrixBuilder",
    scenario: "Una institución presenta: certificados no revisados; ausencia de registro de firmas; trazabilidad perdida después de firmarse los documentos; responsabilidades no definidas; falta de evidencia temporal uniforme; procedimientos distintos entre oficinas.",
    prompt: "Identifica al menos 5 problemas, asocia cada uno con un aspecto afectado y propón un control. Luego prioriza dos controles.",
    points: 1,
    columns: [
      { key: "problema", label: "Problema", placeholder: "Describe o selecciona un problema", type: "text" },
      {
        key: "aspecto",
        label: "Aspecto afectado",
        type: "select",
        options: [...SIGNATURE_ASPECT_OPTIONS, { id: "tiempo", label: "Evidencia temporal" }, { id: "responsabilidades", label: "Responsabilidades" }],
      },
      { key: "control", label: "Control propuesto", placeholder: "p. ej. Procedimiento uniforme de verificación", type: "text" },
    ],
    minRows: 5,
    chipSuggestions: [
      "Certificados no revisados",
      "Ausencia de registro de firmas",
      "Trazabilidad perdida después de firmarse los documentos",
      "Responsabilidades no definidas",
      "Falta de evidencia temporal uniforme",
      "Procedimientos distintos entre oficinas",
    ],
    chipColumnKey: "problema",
    closingQuestions: ["Prioriza dos de los controles que propusiste y explica por qué son los más urgentes."],
    closingMinWords: 15,
    expectedSummary: "Al menos 5 problemas relacionados coherentemente con un aspecto y un control, con dos controles priorizados y justificados.",
    feedbackByVerdict: {
      correct: "Realizaste un diagnóstico completo: relacionaste cada problema con el aspecto que afecta, propusiste controles pertinentes y priorizaste con criterio los más urgentes.",
      partial: "Tu diagnóstico cubre varios problemas, pero revisa si todas las relaciones problema-aspecto-control son coherentes y si tu priorización explica el criterio utilizado.",
      review: "Completa al menos 5 filas relacionando cada problema con su aspecto y un control pertinente, y prioriza dos controles con justificación.",
    },
  },

  // Pregunta 20 — CASO INTEGRADOR
  {
    id: 20,
    category: "Caso integrador — Responsable de Gestión Documental",
    kind: "matrixBuilder",
    scenario:
      "Una institución recibe un documento electrónico aparentemente firmado. Durante la revisión se detecta que: el documento tiene una firma; el certificado debe ser revisado; existen dudas sobre la validez; se necesita comprobar que el contenido no haya sido alterado; se requiere conocer cuándo se realizó la firma; debe registrarse la acción dentro del flujo documental.",
    instructions: "Asume el rol de Responsable de Gestión Documental y construye tu propuesta con al menos 5 problemas o comprobaciones.",
    prompt: "Construye tu propuesta y responde las preguntas finales.",
    points: 1,
    columns: [
      { key: "problema", label: "Problema / comprobación", placeholder: "Describe o selecciona un elemento a comprobar", type: "text" },
      { key: "atributo", label: "Aspecto o atributo afectado", type: "select", options: [...SIGNATURE_ASPECT_OPTIONS, { id: "tiempo", label: "Evidencia temporal" }] },
      { key: "accion", label: "Acción o control propuesto", placeholder: "p. ej. Verificar vigencia del certificado", type: "text" },
      { key: "responsable", label: "Cómo lo documentarías / responsable", placeholder: "¿Quién y cómo?", type: "text" },
      { key: "justificacion", label: "Justificación", placeholder: "¿Por qué es necesario?", type: "text" },
    ],
    minRows: 5,
    chipSuggestions: [
      "Comprobar quién firma según el certificado",
      "Revisar si el certificado está vigente",
      "Verificar que el contenido no haya sido alterado",
      "Determinar cuándo se realizó la firma",
      "Registrar la acción dentro del flujo documental",
      "Diferenciar verificación técnica de validez para el trámite",
    ],
    chipColumnKey: "problema",
    closingQuestions: [
      "¿Qué debes comprobar antes de aceptar este documento como válido?",
      "Explica la diferencia entre verificación y validación en este caso.",
      "¿Qué papel cumple el certificado en esta revisión?",
      "¿Qué información de trazabilidad debe registrarse?",
    ],
    closingMinWords: 6,
    expectedSummary: "Al menos 5 elementos bien relacionados con su aspecto y una acción justificada, más respuestas claras sobre verificación, validación, certificado y trazabilidad.",
    feedbackByVerdict: {
      correct: "Elaboraste una propuesta profesional completa: relacionas cada comprobación con el aspecto que involucra, propones acciones con responsables definidos, y distingues con claridad verificación, validación, certificado y trazabilidad — exactamente el criterio de un responsable de gestión documental.",
      partial: "Tu propuesta cubre varios elementos, pero revisa si todas las filas son coherentes y si tus respuestas finales distinguen con claridad verificación, validación y trazabilidad.",
      review: "Una propuesta profesional necesita al menos 5 comprobaciones relacionadas con su aspecto, una acción con responsable definido, y respuestas claras sobre verificación, validación, certificado y trazabilidad.",
    },
  },
];

export const TOTAL_QUESTIONS_6 = practice6Questions.length;
export const MAX_SCORE_6 = practice6Questions.reduce((sum, q) => sum + q.points, 0);
