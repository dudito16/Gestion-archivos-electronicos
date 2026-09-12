import type { FlowStep } from "../../../types/content.types";
import type { AuditField, CaseStep, ObjectiveCard, SignatureTypeInfo, SummaryPoint, TraceabilityStage } from "./week06.types";

export const heroChain: { id: string; label: string; icon: string }[] = [
  { id: "documento", label: "Documento", icon: "FileText" },
  { id: "firma", label: "Firma", icon: "FileSignature" },
  { id: "certificado", label: "Certificado", icon: "ShieldCheck" },
  { id: "validacion", label: "Validación", icon: "ClipboardList" },
  { id: "verificacion", label: "Verificación", icon: "FileSearch" },
  { id: "trazabilidad", label: "Trazabilidad", icon: "Route" },
];

export const weekProgression: FlowStep[] = [
  { id: "s4", label: "Semana 4: Metadatos" },
  { id: "s5", label: "Semana 5: Gestión y evidencia" },
  { id: "s6", label: "Semana 6: Firma, identidad, validación y trazabilidad" },
];

export const objectives: ObjectiveCard[] = [
  { id: "o1", title: "Diferenciar los tipos de firma", description: "Firma electrónica, firma digital y firma manuscrita digitalizada, sin tratarlas como equivalentes.", icon: "FileSignature" },
  { id: "o2", title: "Explicar la función de la firma digital", description: "Qué aporta a un documento electrónico dentro de la gestión documental.", icon: "KeyRound" },
  { id: "o3", title: "Identificar la función del certificado digital", description: "Cómo vincula una identidad con una firma dentro de una infraestructura de confianza.", icon: "ShieldCheck" },
  { id: "o4", title: "Explicar el papel de una autoridad certificadora", description: "Su participación en la emisión y gestión de certificados.", icon: "Landmark" },
  { id: "o5", title: "Diferenciar validación y verificación", description: "Dos preguntas distintas ante una firma: si es técnicamente correcta y si es aceptable en su contexto.", icon: "GitCompareArrows" },
  { id: "o6", title: "Explicar el sellado de tiempo", description: "Qué evidencia temporal aporta y por qué no sustituye a la firma.", icon: "Stamp" },
  { id: "o7", title: "Analizar la trazabilidad de documentos firmados", description: "Qué información debe quedar registrada en cada etapa del flujo documental.", icon: "Route" },
  { id: "o8", title: "Reconocer la importancia de la auditoría", description: "Qué preguntas permiten reconstruir una acción sobre un documento.", icon: "FileSearch" },
  { id: "o9", title: "Analizar firmas válidas con problemas de gestión", description: "Una firma correcta no garantiza, por sí sola, una gestión documental adecuada.", icon: "AlertCircle" },
  { id: "o10", title: "Relacionar la firma con la gestión integral", description: "Vincular la firma con captura, registro, metadatos y mantenimiento del documento.", icon: "Workflow" },
];

export const whyItMattersCase =
  "Una institución recibe un documento electrónico aparentemente firmado. El documento contiene información importante, pero antes de utilizarlo como evidencia debe determinarse quién firmó, qué mecanismo se utilizó y si la firma puede verificarse.";

export const whyItMattersLinks = ["Captura", "Registro", "Metadatos", "Contexto", "Trazabilidad", "Mantenimiento"];

export const electronicSignatureExamples = [
  "Un clic en 'Acepto los términos y condiciones'",
  "Un PIN o código enviado por SMS para aprobar una operación",
  "Un dibujo de firma en una pantalla táctil, sin certificado asociado",
  "Un usuario y contraseña utilizados para aprobar un documento en una plataforma",
];

export const digitalSignatureFlow: FlowStep[] = [
  { id: "documento", label: "Documento" },
  { id: "funcion", label: "Función criptográfica" },
  { id: "hash", label: "Valor resumen (hash)" },
  { id: "firma", label: "Firma" },
  { id: "firmado", label: "Documento firmado" },
];

export const digitalSignatureVerifyFlow: FlowStep[] = [
  { id: "firmado", label: "Documento firmado" },
  { id: "obtener", label: "Obtener firma" },
  { id: "certificado", label: "Verificar certificado" },
  { id: "comprobar", label: "Comprobar firma" },
  { id: "comparar", label: "Comparar resultados" },
  { id: "validacion", label: "Validación" },
];

export const signatureTypes: SignatureTypeInfo[] = [
  {
    id: "manuscrita",
    label: "Firma manuscrita digitalizada",
    icon: "ScanLine",
    whatItIs: "La imagen de una firma hecha a mano, incorporada a un archivo digital (por ejemplo, mediante un escaneo).",
    howObtained: "Se firma en papel y luego se digitaliza (escáner, foto, o un trazo capturado en pantalla sin infraestructura criptográfica).",
    whatItProves: "Poco por sí sola: es una imagen que puede copiarse, recortarse o insertarse en otro documento sin dejar rastro.",
    risks: "No permite verificar quién la aplicó realmente, ni si el documento fue alterado después.",
    context: "Uso informal o como constancia visual, nunca como único mecanismo para sostener autenticidad o integridad.",
  },
  {
    id: "electronica",
    label: "Firma electrónica",
    icon: "MousePointerClick",
    whatItIs: "Concepto amplio: cualquier mecanismo electrónico usado para manifestar identificación, aceptación o aprobación.",
    howObtained: "Un clic de aceptación, un PIN, una contraseña, un trazo en pantalla — mecanismos variados, sin un estándar técnico único.",
    whatItProves: "Que alguien realizó una acción a través de un medio electrónico; el nivel de certeza depende del mecanismo específico.",
    risks: "No todo mecanismo ofrece el mismo nivel de seguridad; asumir que todas las firmas electrónicas son equivalentes es un error común.",
    context: "Trámites de bajo riesgo, confirmaciones o aceptaciones donde no se requiere el nivel de garantía de una firma digital.",
  },
  {
    id: "digital",
    label: "Firma digital",
    icon: "FileSignature",
    whatItIs: "Un mecanismo específico basado en tecnología criptográfica y certificados, dentro de una infraestructura de confianza.",
    howObtained: "Se genera con una clave privada asociada a un certificado digital, aplicada sobre un valor resumen (hash) del documento.",
    whatItProves: "Permite verificar técnicamente el origen del documento y detectar si su contenido fue alterado después de firmarse.",
    risks: "Requiere que el certificado sea válido y vigente; una firma técnicamente correcta no resuelve por sí sola otros problemas de gestión documental.",
    context: "Documentos que deben sostenerse como evidencia formal de una actuación institucional.",
  },
];

export const signatureComparisonColumns = ["Firma manuscrita digitalizada", "Firma electrónica", "Firma digital"];

export const signatureComparisonRows: { criterion: string; values: string[] }[] = [
  {
    criterion: "Qué es",
    values: [
      "Imagen de una firma hecha a mano",
      "Concepto amplio de mecanismos electrónicos de identificación o aprobación",
      "Mecanismo criptográfico específico basado en certificados",
    ],
  },
  {
    criterion: "Cómo se obtiene",
    values: ["Escaneo o captura de un trazo manual", "Clic, PIN, contraseña u otro mecanismo electrónico", "Clave privada vinculada a un certificado digital"],
  },
  {
    criterion: "Qué demuestra",
    values: ["Poco por sí sola, sin infraestructura de respaldo", "Que ocurrió una acción por un medio electrónico", "Origen verificable e integridad del contenido firmado"],
  },
  {
    criterion: "Riesgos",
    values: [
      "Fácil de copiar o insertar sin dejar rastro",
      "Nivel de seguridad variable según el mecanismo",
      "Depende de la vigencia y validez del certificado",
    ],
  },
  {
    criterion: "Contexto de uso",
    values: ["Constancia informal", "Trámites de bajo riesgo", "Documentos que deben sostenerse como evidencia formal"],
  },
];

export const certificateFlow: FlowStep[] = [
  { id: "entidad", label: "Persona / entidad" },
  { id: "certificado", label: "Certificado digital" },
  { id: "identidad", label: "Identidad + clave pública" },
  { id: "confianza", label: "Infraestructura de confianza" },
];

export const certificateFacts = [
  { id: "identidad", label: "Identidad", description: "Vincula un nombre o entidad identificable con una clave.", icon: "FileSearch" },
  { id: "clave", label: "Clave pública", description: "Permite verificar la firma sin exponer la clave privada del firmante.", icon: "KeyRound" },
  { id: "vigencia", label: "Periodo de validez", description: "Todo certificado tiene una fecha de emisión y una de vencimiento.", icon: "ClipboardList" },
  { id: "confianza", label: "Confianza", description: "Es útil en la medida en que se confía en quien lo emitió.", icon: "ShieldCheck" },
];

export const authorityFlow: FlowStep[] = [
  { id: "firmante", label: "Firmante" },
  { id: "certificado", label: "Certificado" },
  { id: "autoridad", label: "Autoridad certificadora" },
  { id: "infraestructura", label: "Infraestructura de confianza" },
  { id: "usuario", label: "Usuario que verifica" },
];

export const howItWorksSignPhase: FlowStep[] = [
  { id: "documento", label: "Documento" },
  { id: "resumen", label: "Generación de resumen" },
  { id: "aplicacion", label: "Aplicación de la firma" },
  { id: "certificado", label: "Certificado" },
  { id: "firmado", label: "Documento firmado" },
];

export const howItWorksVerifyPhase: FlowStep[] = [
  { id: "firmado", label: "Documento firmado" },
  { id: "identificacion", label: "Identificación del certificado" },
  { id: "verificacion", label: "Verificación de la firma" },
  { id: "integridad", label: "Comprobación de integridad" },
  { id: "resultado", label: "Resultado" },
];

export const validationVsVerification = {
  verification: {
    label: "Verificación",
    question: "¿La firma corresponde técnicamente al documento y al mecanismo utilizado?",
    description: "Comprobación técnica: se recalcula el resumen del documento, se compara con la firma y se revisa el certificado asociado.",
    example: "El sistema confirma que la firma no fue alterada y que corresponde exactamente a ese archivo.",
  },
  validation: {
    label: "Validación",
    question: "¿La firma o el certificado cumplen las condiciones necesarias para considerarse válidos en este contexto?",
    description: "Evaluación más amplia: además de la comprobación técnica, se considera si el certificado está vigente, si corresponde al contexto del trámite y si es aceptable para ese propósito.",
    example: "Un certificado técnicamente verificable, pero vencido o revocado, puede no ser válido para el trámite.",
  },
};

export const timestampIdeas = [
  "Asocia el documento o la firma con un momento determinado.",
  "No sustituye a la firma digital: aporta evidencia temporal, no autoría.",
  "Puede ayudar a sostener cuándo existía el documento o cuándo se produjo la firma.",
  "Es un elemento de contexto adicional, no una prueba aislada de todo el proceso.",
];

export const traceabilityStages: TraceabilityStage[] = [
  { id: "creacion", label: "Creación", icon: "FileText", whatHappened: "Se genera el documento electrónico.", who: "Área productora", when: "Momento de la actividad", document: "Borrador o versión inicial", evidence: "Registro de creación" },
  { id: "captura", label: "Captura", icon: "Inbox", whatHappened: "El documento se incorpora al sistema de gestión documental.", who: "Personal receptor", when: "Al recibirse o generarse formalmente", document: "Documento incorporado", evidence: "Constancia de captura" },
  { id: "registro", label: "Registro", icon: "ClipboardList", whatHappened: "Se asigna un identificador y se deja constancia formal.", who: "Mesa de partes / gestión documental", when: "Inmediatamente después de la captura", document: "Documento registrado", evidence: "Asiento de registro" },
  { id: "revision", label: "Revisión", icon: "FileSearch", whatHappened: "Se revisa el contenido y, si corresponde, la firma asociada.", who: "Responsable del trámite", when: "Antes de continuar el flujo", document: "Documento en revisión", evidence: "Observaciones de revisión" },
  { id: "firma", label: "Firma", icon: "FileSignature", whatHappened: "Se aplica o se identifica la firma digital sobre el documento.", who: "Firmante identificado por el certificado", when: "Momento de la firma (o su sello de tiempo)", document: "Documento firmado", evidence: "Firma y certificado asociado" },
  { id: "validacion", label: "Validación", icon: "ShieldCheck", whatHappened: "Se comprueba que la firma y el certificado son aceptables para el trámite.", who: "Responsable de gestión documental", when: "Antes de dar curso al documento", document: "Documento validado", evidence: "Resultado de la validación" },
  { id: "derivacion", label: "Derivación", icon: "Route", whatHappened: "El documento se deriva a la unidad competente.", who: "Mesa de partes o sistema de trámite", when: "Tras la validación", document: "Documento derivado", evidence: "Constancia de derivación" },
  { id: "uso", label: "Uso", icon: "FolderOpen", whatHappened: "El documento se consulta o utiliza para sustentar una decisión.", who: "Unidad competente", when: "Durante la tramitación", document: "Documento en uso", evidence: "Registro de consulta o acción" },
  { id: "mantenimiento", label: "Mantenimiento", icon: "KeyRound", whatHappened: "Se conservan el documento y sus metadatos de gestión.", who: "Área de gestión documental / TI", when: "Durante toda su vigencia", document: "Documento conservado", evidence: "Metadatos de conservación" },
  { id: "archivo", label: "Archivo", icon: "Archive", whatHappened: "El documento se archiva o dispone según corresponda.", who: "Responsable de archivo", when: "Al concluir su vigencia activa", document: "Documento archivado", evidence: "Constancia de disposición" },
];

export const auditFields: AuditField[] = [
  { id: "quien", question: "¿Quién?", icon: "FileSearch", example: "El usuario o firmante identificado por el certificado o la sesión." },
  { id: "que", question: "¿Qué hizo?", icon: "ClipboardList", example: "Firmó, revisó, derivó, modificó o registró el documento." },
  { id: "cuando", question: "¿Cuándo?", icon: "Stamp", example: "Fecha y hora de la acción, idealmente respaldada por evidencia temporal." },
  { id: "sobre-que", question: "¿Sobre qué documento?", icon: "FileText", example: "El identificador o registro del documento afectado." },
  { id: "estado", question: "¿Cuál era el estado?", icon: "FolderOpen", example: "En qué punto del flujo se encontraba antes de la acción." },
  { id: "resultado", question: "¿Cuál fue el resultado?", icon: "ShieldCheck", example: "Si la acción se completó, qué verificación o validación produjo." },
];

export const practicalCaseSteps: CaseStep[] = [
  {
    id: "paso1",
    scenario: "Una unidad recibe un documento electrónico firmado digitalmente que debe incorporarse a un trámite. Ejemplo contextualizado al AGN.",
    prompt: "¿Qué debería determinarse primero?",
    options: [
      { id: "a", label: "Si el documento se ve bien formateado." },
      { id: "b", label: "Quién firma y qué certificado está asociado a esa firma." },
      { id: "c", label: "El tamaño del archivo." },
    ],
    bestId: "b",
    feedback: "Antes de continuar, conviene identificar quién firma y qué certificado respalda esa firma — sin eso, no hay base para confiar en el documento.",
  },
  {
    id: "paso2",
    scenario: "Se identifica al firmante y el certificado asociado a la firma.",
    prompt: "¿Qué corresponde comprobar a continuación?",
    options: [
      { id: "a", label: "Si la firma puede verificarse técnicamente y si el certificado está vigente." },
      { id: "b", label: "Si el firmante tiene un cargo importante." },
    ],
    bestId: "a",
    feedback: "La verificación técnica de la firma y la vigencia del certificado son la base para sostener que el documento es lo que dice ser.",
  },
  {
    id: "paso3",
    scenario: "La firma se verifica correctamente y el certificado está vigente.",
    prompt: "¿Qué más debería revisarse antes de continuar?",
    options: [
      { id: "a", label: "Si el documento presenta alteraciones posteriores a la firma." },
      { id: "b", label: "Nada más; una firma verificada es suficiente." },
    ],
    bestId: "a",
    feedback: "La verificación de la firma también permite detectar si el contenido fue alterado después de firmarse — es parte de la misma comprobación técnica.",
  },
  {
    id: "paso4",
    scenario: "No se detectan alteraciones en el contenido del documento.",
    prompt: "¿Qué información adicional conviene establecer?",
    options: [
      { id: "a", label: "Cuándo se produjo la firma o qué evidencia temporal está disponible." },
      { id: "b", label: "El color del logotipo institucional." },
    ],
    bestId: "a",
    feedback: "Saber cuándo se firmó (o contar con un sello de tiempo) aporta contexto adicional para sostener el documento como evidencia.",
  },
  {
    id: "paso5",
    scenario: "Se cuenta con evidencia razonable sobre el momento de la firma.",
    prompt: "¿Qué debe hacerse con esta revisión?",
    options: [
      { id: "a", label: "Registrar la acción dentro del flujo documental, dejando constancia de lo verificado." },
      { id: "b", label: "No es necesario registrar nada; ya se revisó informalmente." },
    ],
    bestId: "a",
    feedback: "Registrar la revisión (qué se comprobó y con qué resultado) es lo que permite mantener trazabilidad sobre el documento en adelante.",
  },
  {
    id: "paso6",
    scenario: "La acción queda registrada dentro del sistema de gestión documental.",
    prompt: "¿Por qué es importante mantener la trazabilidad de aquí en adelante?",
    options: [
      { id: "a", label: "Porque permite reconstruir, en el futuro, quién hizo qué, cuándo y con qué resultado." },
      { id: "b", label: "Porque así el documento ocupa menos espacio." },
    ],
    bestId: "a",
    feedback: "La trazabilidad es lo que permitirá, más adelante, auditar y sostener el documento como evidencia confiable de la actuación institucional.",
  },
];

export const summaryPoints: SummaryPoint[] = [
  { id: "s1", title: "01", description: "La firma electrónica es un concepto amplio; la firma digital es un mecanismo específico basado en certificados.", icon: "FileSignature" },
  { id: "s2", title: "02", description: "El certificado digital vincula una identidad con una clave, dentro de una infraestructura de confianza.", icon: "ShieldCheck" },
  { id: "s3", title: "03", description: "Verificación es una comprobación técnica; validación evalúa si la firma es aceptable en su contexto.", icon: "GitCompareArrows" },
  { id: "s4", title: "04", description: "El sellado de tiempo aporta evidencia temporal, pero no sustituye a la firma digital.", icon: "Stamp" },
  { id: "s5", title: "05", description: "Una firma válida no garantiza, por sí sola, una gestión documental adecuada: la trazabilidad y la auditoría siguen siendo necesarias.", icon: "Route" },
];

export const nextWeekConnection = {
  currentTitle: "Firma electrónica, firma digital, certificados y trazabilidad",
  nextWeekNumber: 7,
  nextTitle: "Seguridad de la información",
  nextConcepts: ["Confidencialidad", "Integridad técnica", "Disponibilidad de sistemas", "Controles de seguridad"],
  text: "Ya sabemos cómo identificar quién firma un documento y cómo verificar y validar esa firma. Ahora veremos los controles de seguridad de la información que protegen los documentos electrónicos durante todo su ciclo de vida.",
};
