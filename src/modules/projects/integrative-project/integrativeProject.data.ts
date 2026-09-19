import type {
  Actor,
  AuditRow,
  CaseDocument,
  ChecklistItem,
  EvidenceType,
  FlowStageDetail,
  MetadataField,
  ModeloAnexo,
  ModeloChapter,
  ModeloComparisonExample,
  ModeloConclusion,
  ModeloMatrixRow,
  ModeloRecommendation,
  OrganizationOption,
  RiskFinding,
  RubricCriterion,
  TimelineEvent,
  WeekDeliverable,
} from "./integrativeProject.types";

export const caseOrg = {
  name: "Municipalidad Distrital de San Gabriel",
  sector: "Público",
  area: "Gerencia de Administración",
  process: "Atención y trámite de solicitudes administrativas",
  document: "Informe técnico",
  disclaimer: "Este caso es una simulación académica elaborada exclusivamente con fines educativos. Los nombres, datos y documentos son ficticios y no corresponden a una institución real.",
};

export const actors: Actor[] = [
  { id: "mesa-partes", label: "Mesa de partes", icon: "Inbox", description: "Recibe la solicitud, la registra y le asigna un código de ingreso." },
  { id: "area-solicitante", label: "Área solicitante", icon: "FileText", description: "Presenta la solicitud administrativa que da origen al trámite." },
  { id: "responsable-area", label: "Responsable del área", icon: "FileSearch", description: "Elabora el informe técnico que sustenta la respuesta a la solicitud." },
  { id: "gerencia", label: "Gerencia de Administración", icon: "Landmark", description: "Revisa, firma y autoriza la respuesta antes de su envío." },
  { id: "archivo", label: "Archivo", icon: "Archive", description: "Conserva el expediente una vez concluido el trámite." },
];

export const caseDocuments: CaseDocument[] = [
  { id: "solicitud", label: "Solicitud", icon: "FileText", generatedBy: "Área solicitante", purpose: "Iniciar el trámite administrativo", moment: "Inicio del proceso", relatesTo: "Cargo de recepción, expediente" },
  { id: "cargo", label: "Cargo de recepción", icon: "Inbox", generatedBy: "Mesa de partes", purpose: "Dejar constancia de la recepción", moment: "Al recibirse la solicitud", relatesTo: "Solicitud" },
  { id: "informe", label: "Informe técnico", icon: "FileSearch", generatedBy: "Responsable del área", purpose: "Sustentar técnicamente la respuesta", moment: "Durante la elaboración", relatesTo: "Solicitud, memorando" },
  { id: "memorando", label: "Memorando", icon: "FileSignature", generatedBy: "Responsable del área", purpose: "Elevar el informe técnico a la Gerencia", moment: "Tras elaborar el informe", relatesTo: "Informe técnico" },
  { id: "oficio", label: "Oficio de respuesta", icon: "FileSignature", generatedBy: "Gerencia de Administración", purpose: "Comunicar la respuesta formal al solicitante", moment: "Al concluir la revisión", relatesTo: "Informe técnico, expediente" },
  { id: "registro-expediente", label: "Registro del expediente", icon: "ClipboardList", generatedBy: "Sistema de gestión documental", purpose: "Reunir y ordenar todos los documentos del trámite", moment: "Durante todo el proceso", relatesTo: "Todos los documentos anteriores" },
];

export const sgdSituation =
  "La organización utiliza un sistema de gestión documental para registrar y derivar documentos, pero algunos documentos de trabajo pueden circular temporalmente mediante correo electrónico y carpetas compartidas.";

export const observedFlow = [
  { id: "recepcion", label: "Recepción", detail: "La solicitud ingresa por mesa de partes." },
  { id: "registro", label: "Registro", detail: "Se asigna un código y se incorpora al sistema." },
  { id: "derivacion", label: "Derivación", detail: "El expediente se deriva al área solicitante/responsable." },
  { id: "elaboracion", label: "Elaboración", detail: "Se redacta el informe técnico." },
  { id: "correo", label: "Correo / carpeta compartida", detail: "Borradores del informe circulan informalmente entre colaboradores." },
  { id: "firma", label: "Firma", detail: "El responsable autorizado firma el informe/memorando." },
  { id: "respuesta", label: "Respuesta", detail: "Se emite el oficio de respuesta al solicitante." },
  { id: "archivo", label: "Archivo", detail: "El expediente concluido se archiva." },
];

export const sgdComponents = ["Usuarios", "Documentos", "Expedientes", "Metadatos", "Procesos", "Trazabilidad"];

export const sgdFunctionTable: { function: string; situation: string; evidence: string }[] = [
  { function: "Registro", situation: "Existe", evidence: "Registro del documento" },
  { function: "Derivación", situation: "Existe", evidence: "Movimiento del expediente" },
  { function: "Seguimiento", situation: "Parcial", evidence: "Registro de eventos" },
  { function: "Firma", situation: "Existe", evidence: "Documento firmado" },
  { function: "Trazabilidad", situation: "Parcial", evidence: "Historial del expediente" },
];

export const reconstructedFlow: FlowStageDetail[] = [
  { id: "recepcion", label: "Recepción", document: "Solicitud", responsible: "Mesa de partes", system: "SGD", action: "Recepción física/electrónica", evidence: "Cargo de recepción" },
  { id: "registro", label: "Registro", document: "Solicitud", responsible: "Mesa de partes", system: "SGD", action: "Asignación de código e ingreso al sistema", evidence: "Registro del expediente" },
  { id: "derivacion", label: "Derivación", document: "Expediente", responsible: "Mesa de partes / SGD", system: "SGD", action: "Envío al área competente", evidence: "Constancia de derivación" },
  { id: "elaboracion", label: "Elaboración", document: "Informe técnico (borrador)", responsible: "Responsable del área", system: "Correo / carpeta compartida", action: "Redacción del informe", evidence: "Versión de trabajo del informe" },
  { id: "revision", label: "Revisión", document: "Informe técnico", responsible: "Responsable del área", system: "Correo / SGD", action: "Revisión de contenido", evidence: "Observaciones de revisión" },
  { id: "firma", label: "Firma", document: "Informe técnico / memorando", responsible: "Gerencia de Administración", system: "Firma digital", action: "Firma del documento", evidence: "Documento firmado" },
  { id: "respuesta", label: "Respuesta", document: "Oficio de respuesta", responsible: "Gerencia de Administración", system: "SGD", action: "Emisión y envío", evidence: "Oficio registrado y enviado" },
  { id: "archivo", label: "Archivo", document: "Expediente completo", responsible: "Archivo", system: "SGD / repositorio", action: "Conservación", evidence: "Expediente archivado" },
];

export const flowRiskQuestion = "¿En qué etapa podría perderse información si no existe un mecanismo adecuado de trazabilidad?";

export const flowRiskOptions: { id: string; label: string; correct: boolean; feedback: string }[] = [
  { id: "recepcion", label: "Recepción", correct: false, feedback: "La recepción queda respaldada por el cargo — es una de las etapas mejor documentadas." },
  { id: "elaboracion", label: "Elaboración (correo / carpeta compartida)", correct: true, feedback: "Correcto: mientras el documento circula fuera del sistema principal, sus versiones y cambios pueden no quedar registrados, comprometiendo la trazabilidad." },
  { id: "archivo", label: "Archivo", correct: false, feedback: "El archivo conserva el expediente ya consolidado; el riesgo de pérdida de información es mayor mientras el documento aún se está elaborando." },
];

export const metadataFields: MetadataField[] = [
  { id: "codigo", label: "Código", value: "INF-2026-0015", category: "identificacion" },
  { id: "tipo", label: "Tipo documental", value: "Informe técnico", category: "identificacion" },
  { id: "fecha", label: "Fecha", value: "15/09/2026", category: "identificacion" },
  { id: "productor", label: "Productor", value: "Gerencia de Administración", category: "contexto" },
  { id: "asunto", label: "Asunto", value: "Solicitud administrativa", category: "contexto" },
  { id: "expediente", label: "Expediente", value: "EXP-2026-0087", category: "relacion" },
  { id: "responsable", label: "Responsable", value: "Área de Administración", category: "responsabilidad" },
  { id: "estado", label: "Estado", value: "Firmado", category: "estado" },
  { id: "fecha-firma", label: "Fecha de firma", value: "15/09/2026", category: "trazabilidad" },
  { id: "firmante", label: "Firmante", value: "Responsable autorizado", category: "responsabilidad" },
];

export const metadataCategoryLabels: Record<MetadataField["category"], string> = {
  identificacion: "Identificación — permite distinguir este documento de cualquier otro.",
  contexto: "Contexto — sitúa el documento dentro de la actividad institucional que lo originó.",
  responsabilidad: "Responsabilidad — indica quién produjo o autorizó el documento.",
  relacion: "Relación — conecta el documento con el expediente o trámite al que pertenece.",
  estado: "Estado — informa en qué punto del trámite se encuentra el documento.",
  trazabilidad: "Trazabilidad — aporta evidencia temporal para reconstruir el recorrido del documento.",
};

export const riskFindings: RiskFinding[] = [
  {
    id: "hallazgo-1",
    finding: "Algunos documentos de trabajo circulan temporalmente fuera del sistema principal.",
    attribute: "Integridad",
    risk: "Riesgo de utilizar una versión incorrecta o desactualizada.",
    control: "Incorporación temprana al SGD y control de versiones.",
  },
  {
    id: "hallazgo-2",
    finding: "No todos los eventos del proceso quedan registrados de la misma manera.",
    attribute: "Disponibilidad / Trazabilidad",
    risk: "Dificultad para reconstruir el recorrido completo del documento.",
    control: "Uniformar el registro de eventos en todas las etapas del flujo.",
  },
  {
    id: "hallazgo-3",
    finding: "No existe una ficha uniforme de metadatos para todos los documentos.",
    attribute: "Fiabilidad",
    risk: "Documentos difíciles de identificar y gestionar de forma consistente.",
    control: "Definir una ficha mínima de metadatos aplicable a todo el proceso.",
  },
  {
    id: "hallazgo-4",
    finding: "El proceso requiere identificar claramente al responsable de la firma.",
    attribute: "Autenticidad",
    risk: "Dudas sobre quién autorizó realmente el documento.",
    control: "Vincular la firma a un certificado y un responsable identificable.",
  },
];

export const signatureAnalysis = {
  type: "Firma digital, aplicada mediante certificado asignado al responsable autorizado.",
  signer: "El responsable identificado en la Gerencia de Administración, según el certificado asociado.",
  evidence: "El documento firmado y el registro del evento de firma dentro del sistema.",
  certificate: "El certificado vincula la identidad del firmante con la firma aplicada al informe/memorando.",
  verification: "Verificar la firma implica comprobar técnicamente que corresponde al documento y que no fue alterado después.",
  validation: "Validar la firma implica evaluar si el certificado utilizado es aceptable para este trámite (vigente y no revocado).",
  contextNote: "La firma por sí sola no basta: debe relacionarse con el registro del documento y con el expediente al que pertenece para sostener su valor como evidencia.",
};

export const signatureFlow = ["Documento", "Firmante", "Firma digital", "Certificado", "Verificación", "Registro", "Trazabilidad"];

export const traceabilityEvents: TimelineEvent[] = [
  { id: "e1", time: "15/09 08:10", event: "Recepción", responsible: "Mesa de partes", document: "Solicitud", result: "Documento recibido" },
  { id: "e2", time: "15/09 08:15", event: "Registro", responsible: "Mesa de partes", document: "Solicitud", result: "Código asignado: EXP-2026-0087" },
  { id: "e3", time: "15/09 09:30", event: "Derivación", responsible: "SGD", document: "Expediente", result: "Derivado a Gerencia de Administración" },
  { id: "e4", time: "15/09 11:20", event: "Elaboración", responsible: "Responsable del área", document: "Informe técnico (borrador)", result: "Primera versión redactada" },
  { id: "e5", time: "15/09 14:10", event: "Revisión", responsible: "Responsable del área", document: "Informe técnico", result: "Observaciones incorporadas" },
  { id: "e6", time: "15/09 15:00", event: "Firma", responsible: "Gerencia de Administración", document: "Informe técnico / memorando", result: "Documento firmado digitalmente" },
  { id: "e7", time: "15/09 15:05", event: "Registro del evento", responsible: "SGD", document: "Informe técnico", result: "Evento de firma registrado" },
  { id: "e8", time: "15/09 16:00", event: "Respuesta", responsible: "Gerencia de Administración", document: "Oficio de respuesta", result: "Oficio emitido al solicitante" },
];

export const auditRows: AuditRow[] = [
  { element: "Documento identificado", result: "Sí", observation: "Existe código (INF-2026-0015)" },
  { element: "Responsable identificado", result: "Sí", observation: "Usuario registrado en el sistema" },
  { element: "Firma verificable", result: "Sí", observation: "Se dispone de evidencia de firma" },
  { element: "Metadatos", result: "Parcial", observation: "Faltan campos en algunos documentos" },
  { element: "Trazabilidad", result: "Parcial", observation: "Algunos eventos no están registrados" },
  { element: "Control documental", result: "Parcial", observation: "Existen documentos fuera del flujo principal" },
];

export const auditImprovements: { id: string; label: string; explanation: string }[] = [
  { id: "metadatos", label: "Completar la ficha de metadatos", explanation: "Una ficha incompleta dificulta identificar y gestionar el documento con el mismo criterio en todas las áreas." },
  { id: "trazabilidad", label: "Uniformar el registro de eventos", explanation: "Sin un registro uniforme, no es posible reconstruir con certeza todo el recorrido del documento." },
  { id: "control", label: "Incorporar los documentos de trabajo al flujo principal", explanation: "Mientras circulen por correo o carpetas compartidas, quedan fuera del control de versiones y del registro del sistema." },
];

export const proposalBefore = ["Recepción", "Registro", "Derivación", "Elaboración", "Correo / carpeta compartida", "Firma", "Respuesta", "Archivo"];
export const proposalAfter = [
  "Recepción",
  "Registro en SGD",
  "Expediente electrónico",
  "Metadatos",
  "Derivación",
  "Elaboración",
  "Revisión",
  "Firma digital",
  "Verificación",
  "Trazabilidad",
  "Archivo",
];

export const proposalExplanations: { id: string; improvement: string; solves: string }[] = [
  { id: "registro-sgd", improvement: "Registro en SGD desde el inicio", solves: "Evita que el documento circule sin control desde la recepción." },
  { id: "expediente", improvement: "Expediente electrónico explícito", solves: "Mantiene unidos todos los documentos relacionados con el trámite." },
  { id: "metadatos", improvement: "Ficha de metadatos uniforme", solves: "Permite identificar y gestionar el documento con el mismo criterio en toda la organización." },
  { id: "revision", improvement: "Revisión formal antes de firmar", solves: "Reduce el uso de versiones de trabajo dispersas por correo." },
  { id: "verificacion", improvement: "Verificación de la firma", solves: "Confirma que el documento firmado no fue alterado y que el certificado es válido." },
  { id: "trazabilidad", improvement: "Registro explícito de trazabilidad", solves: "Permite reconstruir, en cualquier momento, el recorrido completo del documento." },
];

export const weekConnectionSummary: { week: number; label: string; concept: string }[] = [
  { week: 1, label: "Semana 1", concept: "Documento y expediente" },
  { week: 2, label: "Semana 2", concept: "Sistema de gestión documental" },
  { week: 3, label: "Semana 3", concept: "Procesos y flujo documental" },
  { week: 4, label: "Semana 4", concept: "Metadatos" },
  { week: 5, label: "Semana 5", concept: "Autenticidad, fiabilidad, integridad y disponibilidad" },
  { week: 6, label: "Semana 6", concept: "Firma, certificado, verificación y trazabilidad" },
];

// ---------------------------------------------------------------------------
// PARTE 2 — Proyecto del equipo
// ---------------------------------------------------------------------------

export const teamMission = [
  "Seleccionar una organización.",
  "Seleccionar un área.",
  "Seleccionar un proceso.",
  "Identificar un documento o expediente.",
  "Reconstruir su gestión.",
  "Analizar riesgos.",
  "Identificar controles.",
  "Analizar firma y trazabilidad.",
  "Proponer mejoras.",
  "Sustentar cada afirmación mediante evidencias.",
];

export const organizationOptions: OrganizationOption[] = [
  { id: "a", letter: "A", label: "Empresa donde trabaja uno de los integrantes." },
  { id: "b", letter: "B", label: "Institución pública o privada que puedan analizar con información pública." },
  { id: "c", letter: "C", label: "Organización sobre la que tengan autorización para recoger información." },
  { id: "d", letter: "D", label: "Caso académico propio, cuando no puedan acceder a una organización real." },
];

export const organizationWarnings = [
  "No deben incluir información confidencial.",
  "No deben incluir datos personales innecesarios.",
  "No deben publicar credenciales.",
  "No deben publicar información restringida.",
  "Deben utilizar únicamente información autorizada o pública.",
];

export const evidenceExamples = [
  "Documento institucional",
  "Procedimiento",
  "Manual",
  "Captura autorizada",
  "Formulario",
  "Entrevista",
  "Observación",
  "Sitio web institucional",
  "Normativa",
  "Documento público",
  "Registro de ejemplo autorizado",
];

export const weekDeliverables: WeekDeliverable[] = [
  {
    week: 1,
    title: "Conocer la organización",
    items: [
      "Organización",
      "Sector",
      "Actividad",
      "Área",
      "Proceso",
      "Documento seleccionado",
      "Expediente relacionado",
      "Actores involucrados",
      "Descripción inicial del problema",
    ],
  },
  {
    week: 2,
    title: "Analizar el SGD",
    items: [
      "Existencia de SGD",
      "Usuarios",
      "Documentos",
      "Expedientes",
      "Registro",
      "Derivación",
      "Seguimiento",
      "Trazabilidad",
      "Sistemas utilizados",
      "Indicar para cada uno: Confirmado / No confirmado / No se pudo determinar",
    ],
  },
  {
    week: 3,
    title: "Reconstruir el flujo",
    items: ["Elaborar el 'Flujo documental actual': etapa, documento, responsable, sistema, acción, evidencia"],
  },
  {
    week: 4,
    title: "Identificar metadatos",
    items: ["Elaborar la 'Ficha de metadatos' (mínimo 8 campos), cada uno con: nombre, ejemplo, propósito, fuente o justificación"],
  },
  {
    week: 5,
    title: "Analizar riesgos y controles",
    items: [
      "Elaborar la 'Matriz de riesgos y controles' (mínimo 5 problemas), con: problema, evidencia, atributo afectado, riesgo, control actual, control propuesto, justificación",
    ],
  },
  {
    week: 6,
    title: "Analizar firma y trazabilidad",
    items: [
      "Tipo de firma",
      "Firmante",
      "Certificado, cuando corresponda",
      "Validación",
      "Verificación",
      "Fecha/hora",
      "Trazabilidad",
      "Auditoría",
      "Elaborar la 'Ficha de análisis de firma y trazabilidad'",
    ],
  },
];

export const finalProducts: { id: string; label: string }[] = [
  { id: "p1", label: "Informe final" },
  { id: "p2", label: "Diagrama del flujo documental actual" },
  { id: "p3", label: "Diagrama del flujo documental propuesto" },
  { id: "p4", label: "Ficha de metadatos" },
  { id: "p5", label: "Matriz de riesgos y controles" },
  { id: "p6", label: "Análisis de firma y trazabilidad" },
  { id: "p7", label: "Evidencias" },
];

export const reportStructure = [
  "Portada",
  "Resumen ejecutivo",
  "Descripción de la organización",
  "Área y proceso seleccionado",
  "Documento/expediente seleccionado",
  "Situación actual",
  "Análisis del SGD",
  "Flujo documental actual",
  "Metadatos",
  "Análisis de riesgos",
  "Autenticidad, fiabilidad, integridad y disponibilidad",
  "Firma electrónica/digital",
  "Certificado y verificación",
  "Trazabilidad",
  "Auditoría",
  "Problemas identificados",
  "Propuesta de mejora",
  "Flujo documental propuesto",
  "Conclusiones",
  "Recomendaciones",
  "Referencias",
  "Anexos",
];

export const evidenceTypes: EvidenceType[] = [
  { id: "documento", icon: "FileText", label: "Documento", whenToUse: "Cuando cuentas con una copia (autorizada) del documento que describes." },
  { id: "captura", icon: "ScanLine", label: "Captura autorizada", whenToUse: "Cuando se te ha permitido tomar una captura de pantalla del sistema o proceso." },
  { id: "formulario", icon: "ClipboardList", label: "Formulario", whenToUse: "Cuando el proceso utiliza un formato o formulario identificable." },
  { id: "procedimiento", icon: "BookOpen", label: "Procedimiento", whenToUse: "Cuando existe un procedimiento escrito que regula la actividad." },
  { id: "fuente", icon: "Landmark", label: "Fuente institucional", whenToUse: "Cuando la información proviene del sitio web o de comunicaciones oficiales de la organización." },
  { id: "entrevista", icon: "FileSearch", label: "Entrevista", whenToUse: "Cuando obtienes información directamente de una persona responsable del proceso." },
  { id: "observacion", icon: "Radar", label: "Observación", whenToUse: "Cuando describes lo que observaste directamente en el proceso, indicando cómo lo observaste." },
  { id: "registro", icon: "Database", label: "Registro", whenToUse: "Cuando dispones de un registro o historial que respalda tu afirmación." },
];

export const dontDo = [
  "Copiar definiciones de Internet.",
  "Llenar páginas con teoría que no se aplica al caso.",
  "Inventar funcionalidades del sistema.",
  "Afirmar que existe una firma digital sin evidencia.",
  "Inventar procesos.",
  "Utilizar información confidencial.",
  "Presentar un caso ficticio como si fuera real.",
  "Copiar el caso modelo.",
  "Llenar el informe con capturas sin explicar qué demuestran.",
];

export const doDo = [
  "Investigar.",
  "Observar.",
  "Preguntar cuando corresponda.",
  "Registrar evidencias.",
  "Distinguir hechos de interpretaciones.",
  "Explicar problemas.",
  "Relacionar conceptos.",
  "Justificar decisiones.",
  "Proponer controles.",
  "Diseñar mejoras.",
];

export const RUBRIC_MAX_SCORE = 20;

export const rubricCriteria: RubricCriterion[] = [
  { id: "r1", label: "Comprensión de la organización y del proceso", points: 2, description: "Claridad al describir la organización, el área y el proceso seleccionado." },
  { id: "r2", label: "Identificación y análisis de documentos y expedientes", points: 2, description: "Reconocimiento correcto de los documentos, su función y su relación con el expediente." },
  { id: "r3", label: "Análisis del sistema de gestión documental", points: 3, description: "Evaluación fundamentada de usuarios, documentos, expedientes, registro, derivación, seguimiento y trazabilidad." },
  { id: "r4", label: "Reconstrucción del flujo documental", points: 2, description: "Reconstrucción clara y respaldada del flujo con etapa, documento, responsable, sistema, acción y evidencia." },
  { id: "r5", label: "Identificación y análisis de metadatos", points: 2, description: "Ficha de metadatos completa, con propósito y justificación de cada campo." },
  { id: "r6", label: "Análisis de autenticidad, fiabilidad, integridad y disponibilidad", points: 3, description: "Análisis fundamentado de los cuatro atributos aplicados al caso concreto." },
  { id: "r7", label: "Análisis de firma, certificado, verificación y trazabilidad", points: 2, description: "Comprensión aplicada de los conceptos de la Semana 6 al caso analizado." },
  { id: "r8", label: "Identificación de problemas y riesgos", points: 1, description: "Precisión al identificar problemas reales, respaldados por evidencia." },
  { id: "r9", label: "Propuesta de mejora y flujo propuesto", points: 2, description: "Coherencia entre los problemas identificados y las mejoras propuestas." },
  { id: "r10", label: "Evidencias, fuentes y calidad de la sustentación", points: 1, description: "Uso apropiado de evidencias y distinción entre descripción y análisis." },
];

export const rubricLevels: { id: string; label: string; range: string; description: string }[] = [
  { id: "excelente", label: "Excelente", range: "18–20", description: "Presenta evidencia pertinente, analiza el problema y relaciona sus conclusiones con los contenidos de las Semanas 1 a 6." },
  { id: "adecuado", label: "Adecuado", range: "15–17", description: "Presenta evidencia suficiente y desarrolla un análisis coherente, aunque algunos aspectos requieren mayor profundidad." },
  { id: "en-desarrollo", label: "En desarrollo", range: "11–14", description: "Presenta información relevante, pero el análisis es parcial o presenta relaciones insuficientemente justificadas." },
  { id: "insuficiente", label: "Insuficiente", range: "0–10", description: "Presenta información limitada, sin evidencia suficiente o sin relación clara entre el problema, el análisis y la propuesta." },
];

export const qualityExamples: { id: string; bad: string; good: string; kind: "descripcion" | "afirmacion" }[] = [
  {
    id: "ejemplo-1",
    kind: "descripcion",
    bad: "La empresa utiliza documentos electrónicos y tiene un sistema.",
    good: "El proceso utiliza el sistema X para registrar documentos, pero el caso evidencia que determinados documentos de trabajo circulan fuera del flujo principal. Esto genera un riesgo de pérdida de contexto y dificulta reconstruir el historial. Se propone incorporar un mecanismo de registro...",
  },
  {
    id: "ejemplo-2",
    kind: "afirmacion",
    bad: "El área cuenta con firma digital.",
    good: "Se verificó, mediante la revisión del documento compartido por el área, que el informe técnico incluye una firma digital aplicada con certificado. Esto permite sostener la identidad del firmante, aunque no se pudo confirmar si el certificado se revisa antes de aceptarse en otros trámites.",
  },
];

export const checklistItems: ChecklistItem[] = [
  { id: "organizacion", label: "Seleccionamos la organización." },
  { id: "area", label: "Definimos el área." },
  { id: "proceso", label: "Definimos el proceso." },
  { id: "documento", label: "Seleccionamos un documento o expediente." },
  { id: "actores", label: "Identificamos los actores." },
  { id: "sgd", label: "Analizamos el SGD." },
  { id: "documentos", label: "Identificamos los documentos." },
  { id: "flujo", label: "Elaboramos el flujo actual." },
  { id: "metadatos", label: "Identificamos los metadatos." },
  { id: "autenticidad", label: "Analizamos autenticidad." },
  { id: "fiabilidad", label: "Analizamos fiabilidad." },
  { id: "integridad", label: "Analizamos integridad." },
  { id: "disponibilidad", label: "Analizamos disponibilidad." },
  { id: "riesgos", label: "Identificamos riesgos." },
  { id: "controles", label: "Propusimos controles." },
  { id: "firma", label: "Analizamos la firma." },
  { id: "certificado", label: "Analizamos certificado/verificación." },
  { id: "trazabilidad", label: "Reconstruimos la trazabilidad." },
  { id: "flujo-propuesto", label: "Elaboramos el flujo propuesto." },
  { id: "evidencias", label: "Incluimos evidencias." },
  { id: "fuentes", label: "Citamos nuestras fuentes." },
  { id: "confidencialidad", label: "Eliminamos información confidencial." },
  { id: "no-copia", label: "Revisamos que no hayamos copiado el caso modelo." },
  { id: "conclusiones", label: "Revisamos conclusiones y recomendaciones." },
];

export const modeloReviewChecklist: ChecklistItem[] = [
  { id: "revision-caso-concreto", label: "Mi trabajo tiene un caso concreto." },
  { id: "revision-documento", label: "Seleccioné un documento o expediente." },
  { id: "revision-evidencias", label: "Presenté evidencias." },
  { id: "revision-sustento", label: "Cada afirmación importante tiene sustento." },
  { id: "revision-no-descripcion", label: "No solamente describí." },
  { id: "revision-analisis-problemas", label: "Analicé los problemas." },
  { id: "revision-riesgos", label: "Relacioné los problemas con riesgos." },
  { id: "revision-controles", label: "Propuse controles." },
  { id: "revision-justifica-mejoras", label: "Expliqué por qué propongo cada mejora." },
  { id: "revision-metadatos", label: "Analicé metadatos." },
  { id: "revision-firma-trazabilidad", label: "Analicé firma y trazabilidad." },
  { id: "revision-propuesta-relacionada", label: "Mi propuesta se relaciona con los problemas encontrados." },
  { id: "revision-conclusiones-derivadas", label: "Mis conclusiones se derivan del análisis." },
  { id: "revision-no-copia", label: "No copié el caso modelo." },
];

export const orientationQuestions = [
  "¿Qué documento estamos analizando?",
  "¿Quién lo genera?",
  "¿Quién lo recibe?",
  "¿Dónde se registra?",
  "¿Qué sistema interviene?",
  "¿Cómo se relaciona con un expediente?",
  "¿Qué metadatos permiten identificarlo?",
  "¿Quién puede modificarlo?",
  "¿Cómo sabemos quién lo generó?",
  "¿Cómo sabemos si fue firmado?",
  "¿Cómo se puede verificar la firma?",
  "¿Qué eventos quedan registrados?",
  "¿Qué riesgos identificamos?",
  "¿Qué control existe?",
  "¿Qué control proponemos?",
  "¿Qué cambiaría con nuestra propuesta?",
];

export const presentationTopics = [
  "Organización.",
  "Problema.",
  "Documento/expediente.",
  "Flujo actual.",
  "SGD.",
  "Metadatos.",
  "Riesgos.",
  "Firma.",
  "Trazabilidad.",
  "Propuesta.",
];

export const professorQuestions = [
  "¿Qué evidencia demuestra que este proceso funciona así?",
  "¿Por qué consideran que este documento forma parte del expediente?",
  "¿Qué metadato consideran indispensable y por qué?",
  "¿Qué atributo se encuentra comprometido?",
  "¿Por qué proponen ese control?",
  "¿Cómo comprobarían la firma?",
  "¿Qué evidencia de trazabilidad esperarían encontrar?",
  "¿Qué cambiaría con su propuesta?",
];

export const sourceCategories: { id: string; label: string; note: string }[] = [
  { id: "institucionales", label: "Fuentes institucionales", note: "Sitios web, comunicados o documentos publicados por la propia organización analizada." },
  { id: "normativas", label: "Fuentes normativas", note: "Normas o disposiciones oficiales que ya hayan sido verificadas por el equipo." },
  { id: "academicas", label: "Fuentes académicas", note: "El contenido desarrollado en las Semanas 1 a 6 de este curso." },
  { id: "organizacion", label: "Fuentes de la organización analizada", note: "Procedimientos, manuales o registros proporcionados o autorizados por la organización." },
];

// ---------------------------------------------------------------------------
// MODELO COMPLETO DEL PROYECTO — "así debe quedar tu trabajo"
// Reutiliza el mismo caso simulado (Municipalidad Distrital de San Gabriel) del Caso
// Modelo, pero presentado como si fuera el informe FINAL y terminado de un equipo,
// no como un recorrido de aprendizaje paso a paso.
// ---------------------------------------------------------------------------

export const modeloDisclaimer =
  "Los datos, documentos, evidencias y situaciones presentados en este modelo son ficticios y fueron creados exclusivamente con fines educativos.";

export const modeloChapters: ModeloChapter[] = [
  { id: "modelo-portada", num: "", title: "Portada" },
  { id: "modelo-resumen-ejecutivo", num: "", title: "Resumen ejecutivo" },
  { id: "modelo-cap-1", num: "1", title: "Descripción de la organización" },
  { id: "modelo-cap-2", num: "2", title: "Situación identificada" },
  { id: "modelo-cap-3", num: "3", title: "Análisis del sistema de gestión documental" },
  { id: "modelo-cap-4", num: "4", title: "Flujo documental actual" },
  { id: "modelo-cap-5", num: "5", title: "Expediente analizado" },
  { id: "modelo-cap-6", num: "6", title: "Ficha de metadatos" },
  { id: "modelo-cap-7", num: "7", title: "Análisis de los atributos del documento" },
  { id: "modelo-cap-8", num: "8", title: "Matriz de riesgos y controles" },
  { id: "modelo-cap-9", num: "9", title: "Análisis de la firma" },
  { id: "modelo-cap-10", num: "10", title: "Trazabilidad" },
  { id: "modelo-cap-11", num: "11", title: "Análisis de auditoría" },
  { id: "modelo-cap-12", num: "12", title: "Propuesta de mejora" },
  { id: "modelo-conclusiones", num: "", title: "Conclusiones" },
  { id: "modelo-recomendaciones", num: "", title: "Recomendaciones" },
  { id: "modelo-referencias", num: "", title: "Referencias" },
  { id: "modelo-anexos", num: "", title: "Anexos" },
  { id: "modelo-no-copiar", num: "", title: "Qué no debes copiar" },
  { id: "modelo-comparacion", num: "", title: "¿Mi trabajo se parece al modelo?" },
];

export const modeloPortada = {
  proyecto: "PROYECTO INTEGRADOR",
  subtitulo: "DEL DOCUMENTO A LA EVIDENCIA",
  lineaDescriptiva: "Diagnóstico y propuesta de mejora de la gestión de documentos electrónicos",
  organizacion: caseOrg.name,
  area: caseOrg.area,
  proceso: caseOrg.process,
  documento: caseOrg.document,
  integrantes: "Grupo Modelo",
  curso: "Gestión de Archivos Electrónicos II",
  unidad: "Unidad I",
  anio: "2026",
  nota: "Portada de referencia. El equipo deberá reemplazar estos datos por los correspondientes a su proyecto.",
};

export const modeloResumenEjecutivo = [
  "El presente informe analiza el proceso de atención y trámite de solicitudes administrativas de la Municipalidad Distrital de San Gabriel (simulación académica), en la Gerencia de Administración. El análisis se centró en el informe técnico N.º INF-2026-0015, elaborado dentro del expediente EXP-2026-0087.",
  "Durante la revisión del proceso se identificó que, si bien el sistema de gestión documental (SGD) registra y deriva formalmente la solicitud y el expediente, ciertos documentos de trabajo — en particular las versiones preliminares del informe técnico — circulan temporalmente por correo electrónico y carpetas compartidas antes de incorporarse al expediente. Esta situación fue evidenciada al reconstruir el flujo documental y contrastarla con el registro de eventos del sistema.",
  "A partir de esa evidencia se identificaron cinco problemas relacionados con la integridad de las versiones de trabajo, el registro incompleto de ciertos eventos, la falta de una ficha uniforme de metadatos, la ausencia de una etapa formal de revisión antes de la firma y la necesidad de vincular con mayor claridad la firma del documento a un certificado verificable.",
  "Como resultado del análisis se plantea una propuesta de mejora que incorpora el registro en el SGD desde el inicio del proceso, un expediente electrónico explícito, una ficha de metadatos uniforme, una etapa formal de revisión previa a la firma y un mecanismo de verificación y trazabilidad. Esta propuesta busca reducir el riesgo de pérdida de información y fortalecer el valor probatorio del expediente como evidencia.",
];

export const modeloOrganizacion = {
  organizacion: caseOrg.name,
  sector: caseOrg.sector,
  actividad: "Administración pública local: atención de trámites y solicitudes presentadas por vecinos y áreas internas.",
  area: caseOrg.area,
  proceso: caseOrg.process,
  documento: caseOrg.document,
  expediente: "EXP-2026-0087",
  fuente: "Para efectos del presente modelo, la información corresponde a una simulación académica.",
  comoDocumentarEnCasoReal:
    "En un proyecto real, cada uno de estos datos debe indicar su fuente concreta: por ejemplo, 'Organigrama publicado en el portal de transparencia', 'Entrevista con el responsable de Mesa de Partes (15/09/2026)' o 'Procedimiento interno proporcionado por el área, versión 2025'.",
};

export const modeloSituacion = {
  narrativa:
    "Durante el análisis del proceso se identificó que los documentos de trabajo del informe técnico pueden circular temporalmente mediante correo electrónico antes de incorporarse al expediente electrónico. El equipo solicitante remite la petición, mesa de partes la registra y deriva el expediente al área responsable; sin embargo, mientras se redacta el informe técnico, sus versiones de trabajo se intercambian por correo entre el responsable del área y sus colaboradores, y solo la versión final se adjunta formalmente al expediente.",
  hecho:
    "El expediente EXP-2026-0087 solo contiene la versión final del informe técnico (INF-2026-0015); no existe registro, dentro del SGD, de las versiones previas ni de los cambios realizados sobre ellas.",
  evidencia:
    "Comparación entre el historial de eventos del SGD (que solo muestra recepción, derivación, firma y respuesta) y la reconstrucción del flujo real del proceso, que incluye una etapa adicional de elaboración fuera del sistema.",
  analisis:
    "La ausencia de registro de las versiones de trabajo impide comprobar quién propuso cada cambio y cuándo. Esto no significa que el documento final sea inválido, pero sí que su elaboración carece de trazabilidad completa, lo que puede dificultar una eventual verificación posterior.",
};

export const modeloSGDTable: ModeloMatrixRow[] = [
  { criterion: "Usuarios", values: ["Existen usuarios identificados por rol (mesa de partes, área solicitante, responsable del área, Gerencia).", "Registro de acciones asociado a cada usuario en el SGD.", "Los roles están definidos, pero no se verificó si el sistema exige autenticación reforzada para firmar."] },
  { criterion: "Documentos", values: ["El SGD reconoce documentos de entrada y salida (solicitud, oficio), pero no las versiones intermedias del informe técnico.", "Registro del documento final; ausencia de registro de las versiones de trabajo.", "El sistema gestiona bien el documento oficial, pero no cubre la etapa de elaboración."] },
  { criterion: "Expedientes", values: ["El expediente EXP-2026-0087 agrupa correctamente los documentos formales del trámite.", "Estructura del expediente visible en el sistema.", "El expediente cumple su función de reunir los documentos, aunque no refleja el proceso completo de elaboración."] },
  { criterion: "Registro", values: ["Cada documento formal recibe un código y una fecha de ingreso.", "Cargo de recepción con código EXP-2026-0087.", "El registro es consistente para los documentos que sí ingresan al sistema."] },
  { criterion: "Derivación", values: ["El expediente se deriva de mesa de partes al área responsable y luego a Gerencia.", "Constancia de derivación registrada en el sistema.", "La derivación queda bien documentada entre áreas."] },
  { criterion: "Seguimiento", values: ["Es posible consultar en qué área se encuentra el expediente en un momento dado.", "Estado del expediente visible para los usuarios autorizados.", "El seguimiento cubre el expediente formal, no las versiones de trabajo que circulan por correo."] },
  { criterion: "Trazabilidad", values: ["Se registran los eventos principales (recepción, derivación, firma, respuesta).", "Historial de eventos del expediente.", "Existen vacíos de trazabilidad en la etapa de elaboración del informe, que ocurre fuera del sistema."] },
];

export const modeloFlowTable: ModeloMatrixRow[] = [
  { criterion: "Recepción", values: ["Solicitud", "Mesa de partes", "SGD", "Cargo de recepción", "Etapa correctamente registrada."] },
  { criterion: "Registro", values: ["Solicitud", "Mesa de partes", "SGD", "Código EXP-2026-0087 asignado", "Sin observaciones."] },
  { criterion: "Derivación", values: ["Expediente", "Mesa de partes / SGD", "SGD", "Constancia de derivación", "Sin observaciones."] },
  { criterion: "Elaboración", values: ["Informe técnico (borrador)", "Responsable del área", "Correo / carpeta compartida", "Versión de trabajo del informe", "Etapa sin registro en el SGD; ocurre fuera del sistema principal."] },
  { criterion: "Revisión", values: ["Informe técnico", "Responsable del área", "Correo / SGD", "Observaciones de revisión", "La revisión es informal y no queda registrada de manera uniforme."] },
  { criterion: "Firma", values: ["Informe técnico / memorando", "Gerencia de Administración", "Firma digital", "Documento firmado (INF-2026-0015)", "Firma aplicada correctamente; ver Capítulo 9."] },
  { criterion: "Respuesta", values: ["Oficio de respuesta", "Gerencia de Administración", "SGD", "Oficio registrado y enviado", "Sin observaciones."] },
  { criterion: "Archivo", values: ["Expediente completo", "Archivo", "SGD / repositorio", "Expediente archivado", "Conserva el expediente formal; no conserva las versiones de trabajo previas."] },
];

export const modeloExpedienteDocs: { id: string; label: string; tipo: string; productor: string; fecha: string; funcion: string; relacion: string }[] = [
  { id: "solicitud", label: "Solicitud", tipo: "Documento de entrada", productor: "Área solicitante", fecha: "15/09/2026 08:10", funcion: "Iniciar el trámite administrativo", relacion: "Da origen al expediente EXP-2026-0087" },
  { id: "cargo", label: "Cargo de recepción", tipo: "Constancia", productor: "Mesa de partes", fecha: "15/09/2026 08:10", funcion: "Dejar constancia de la recepción de la solicitud", relacion: "Respalda la fecha de ingreso de la solicitud" },
  { id: "informe", label: "Informe técnico", tipo: "Documento técnico", productor: "Responsable del área", fecha: "15/09/2026 11:20 (borrador) — 15/09/2026 15:00 (firmado)", funcion: "Sustentar técnicamente la respuesta a la solicitud", relacion: "Documento central del expediente; da origen al memorando y al oficio" },
  { id: "memorando", label: "Memorando", tipo: "Documento interno", productor: "Responsable del área", fecha: "15/09/2026 14:30", funcion: "Elevar el informe técnico a la Gerencia de Administración", relacion: "Vincula el informe técnico con la decisión de Gerencia" },
  { id: "oficio", label: "Oficio de respuesta", tipo: "Documento de salida", productor: "Gerencia de Administración", fecha: "15/09/2026 16:00", funcion: "Comunicar la respuesta formal al solicitante", relacion: "Cierra el trámite iniciado por la solicitud" },
  { id: "registro-expediente", label: "Registro del expediente", tipo: "Registro del sistema", productor: "Sistema de gestión documental", fecha: "Actualizado durante todo el proceso", funcion: "Reunir y ordenar los documentos del trámite", relacion: "Agrupa a todos los documentos anteriores bajo el código EXP-2026-0087" },
];

export const modeloMetadatosTable: ModeloMatrixRow[] = [
  { criterion: "Código — INF-2026-0015", values: ["Identificar de forma única el documento.", "Es el dato que permite ubicarlo dentro del SGD sin ambigüedad frente a otros informes."] },
  { criterion: "Tipo documental — Informe técnico", values: ["Clasificar el documento según su función.", "Determina qué reglas de trámite y de conservación le corresponden."] },
  { criterion: "Fecha — 15/09/2026", values: ["Ubicar temporalmente el documento.", "Permite ordenarlo dentro del expediente y contrastarlo con otros eventos registrados."] },
  { criterion: "Productor — Gerencia de Administración", values: ["Identificar el área que originó el documento.", "Es la base para atribuir responsabilidad sobre su contenido."] },
  { criterion: "Asunto — Solicitud administrativa", values: ["Describir brevemente el contenido o propósito del documento.", "Facilita la búsqueda y comprensión rápida del documento sin abrirlo."] },
  { criterion: "Expediente — EXP-2026-0087", values: ["Vincular el documento con el trámite al que pertenece.", "Sin este dato, el documento quedaría aislado del resto del expediente."] },
  { criterion: "Responsable — Área de Administración", values: ["Indicar quién debe atender consultas o reclamos sobre el documento.", "Distingue entre quién produjo el documento y quién lo custodia."] },
  { criterion: "Estado — Firmado", values: ["Informar en qué punto del trámite se encuentra el documento.", "Indica que el documento ya cuenta con la autorización correspondiente y no debe modificarse."] },
  { criterion: "Firmante — Responsable autorizado", values: ["Identificar a la persona que autorizó el documento.", "Es indispensable para sostener la autenticidad del documento."] },
  { criterion: "Fecha de firma — 15/09/2026", values: ["Registrar el momento exacto de la autorización.", "Permite contrastar la firma con otros eventos de la trazabilidad (por ejemplo, la fecha del oficio de respuesta)."] },
];

export const modeloAtributosTable: ModeloMatrixRow[] = [
  { criterion: "Autenticidad", values: ["El informe técnico está firmado por un responsable identificado dentro del sistema.", "Registro de firma asociado al usuario autorizado.", "Bajo (el firmante está identificado)", "El documento puede atribuirse con certeza a quien lo firmó, siempre que el certificado utilizado sea válido (ver Capítulo 9)."] },
  { criterion: "Fiabilidad", values: ["El informe se elaboró mediante versiones de trabajo intercambiadas por correo antes de llegar a su forma final.", "Ausencia de registro formal de las versiones previas.", "Medio (no se puede verificar el proceso completo de elaboración)", "El documento final es fiable en su contenido, pero el proceso que lo generó no puede reconstruirse completamente por falta de evidencia de las versiones previas."] },
  { criterion: "Integridad", values: ["El documento firmado no muestra señales de alteración posterior.", "Firma digital aplicada sobre el documento final.", "Bajo (la firma protege el documento ya firmado)", "La integridad está resguardada desde la firma en adelante; no se puede garantizar la integridad de las versiones de trabajo previas, que no estaban protegidas."] },
  { criterion: "Disponibilidad", values: ["El expediente y sus documentos formales pueden consultarse a través del SGD.", "Acceso al expediente EXP-2026-0087 desde el sistema.", "Bajo (el expediente formal está disponible)", "El documento final está disponible y accesible; las versiones de trabajo, al no estar en el sistema, podrían perderse sin dejar registro."] },
];

export const modeloRiesgosTable: ModeloMatrixRow[] = [
  { criterion: "Versiones de trabajo del informe circulan fuera del SGD.", values: ["Ausencia de registro de versiones previas en el sistema.", "Integridad", "Uso de una versión desactualizada o incorrecta del informe.", "Ninguno (el intercambio ocurre por correo, sin control de versiones).", "Incorporar tempranamente el documento al SGD y habilitar control de versiones."] },
  { criterion: "No todos los eventos del proceso quedan registrados de la misma manera.", values: ["Comparación entre el historial del SGD y el flujo real reconstruido.", "Disponibilidad / Trazabilidad", "Dificultad para reconstruir el recorrido completo del documento ante una consulta o auditoría.", "Registro parcial (solo eventos formales).", "Uniformar el registro de eventos en todas las etapas del flujo, incluida la elaboración."] },
  { criterion: "No existe una ficha uniforme de metadatos para todos los documentos.", values: ["Revisión de los documentos del expediente: solo el informe técnico cuenta con ficha completa.", "Fiabilidad", "Documentos difíciles de identificar y gestionar con el mismo criterio en toda la organización.", "Ficha de metadatos aplicada solo al documento final.", "Definir una ficha mínima de metadatos aplicable a todos los documentos del proceso."] },
  { criterion: "No existe una etapa formal de revisión previa a la firma.", values: ["Las observaciones de revisión se intercambian informalmente por correo.", "Fiabilidad", "Errores del informe podrían no detectarse antes de la firma.", "Revisión informal, sin registro.", "Incorporar una etapa formal y registrada de revisión previa a la firma."] },
  { criterion: "La relación entre la firma y el certificado no queda documentada de forma explícita en el expediente.", values: ["El expediente no incluye una constancia de verificación del certificado utilizado para firmar.", "Autenticidad", "Dudas, ante una eventual auditoría, sobre la validez del certificado usado al momento de firmar.", "Firma aplicada, sin constancia de verificación adjunta.", "Adjuntar al expediente una constancia de verificación de vigencia del certificado en el momento de la firma."] },
];

export const modeloFirmaTable: ModeloMatrixRow[] = [
  { criterion: "Tipo de firma", values: ["Firma digital, aplicada mediante certificado asignado al responsable autorizado de la Gerencia de Administración.", "Documento firmado (INF-2026-0015) y registro del evento de firma en el SGD."] },
  { criterion: "Firmante", values: ["Responsable identificado dentro de la Gerencia de Administración, según el certificado asociado.", "Registro de usuario y evento de firma del 15/09/2026, 15:00 h."] },
  { criterion: "Certificado", values: ["El certificado vincula la identidad del firmante con la firma aplicada al informe/memorando.", "Referencia del certificado registrada junto al evento de firma."] },
  { criterion: "Validación", values: ["Evaluar si el certificado utilizado era aceptable para este trámite (vigente y no revocado) en el momento de la firma.", "Fecha de firma (15/09/2026) contrastada con el periodo de vigencia declarado del certificado."] },
  { criterion: "Verificación", values: ["Comprobar técnicamente que la firma corresponde al documento y que este no fue alterado después de firmarse.", "Documento firmado, sin señales de modificación posterior."] },
  { criterion: "Fecha/hora", values: ["La firma se aplicó el 15/09/2026 a las 15:00 h, previa a la emisión del oficio de respuesta (16:00 h).", "Registro de evento de firma en el historial del expediente."] },
  { criterion: "Relación con el documento y el expediente", values: ["La firma por sí sola no basta: debe relacionarse con el registro del documento y con el expediente EXP-2026-0087 para sostener su valor como evidencia.", "Vínculo entre el evento de firma y el expediente dentro del SGD."] },
];

export const modeloTrazabilidadNota =
  "La trazabilidad reconstruida permite responder, para cada momento del proceso, quién intervino, qué documento se vio afectado y qué resultado se obtuvo. En este caso, el registro de eventos formales (recepción, registro, derivación, firma, respuesta) está completo; sin embargo, no existe un evento registrado que corresponda a la etapa de elaboración del informe por correo, lo que confirma el vacío de trazabilidad identificado en el Capítulo 2.";

export const modeloAuditoriaTable: ModeloMatrixRow[] = [
  { criterion: "Documento identificado", values: ["Sí", "El informe técnico cuenta con código único (INF-2026-0015).", "Ninguno.", "Mantener la asignación de código a todo documento formal."] },
  { criterion: "Responsable identificado", values: ["Sí", "El usuario que elaboró y firmó el documento está registrado en el sistema.", "Ninguno.", "Mantener el registro de usuarios por rol."] },
  { criterion: "Firma verificable", values: ["Sí", "Existe evidencia de firma digital y registro del evento correspondiente.", "Bajo, siempre que se confirme la vigencia del certificado (ver Capítulo 9).", "Adjuntar constancia de verificación del certificado al expediente."] },
  { criterion: "Metadatos", values: ["Parcial", "Solo el informe técnico cuenta con ficha completa de metadatos.", "Dificultad para gestionar los demás documentos con el mismo criterio.", "Extender la ficha de metadatos a todos los documentos del expediente."] },
  { criterion: "Trazabilidad", values: ["Parcial", "La etapa de elaboración por correo no queda registrada en el SGD.", "Imposibilidad de reconstruir completamente el proceso de elaboración.", "Uniformar el registro de eventos, incluida la etapa de elaboración."] },
  { criterion: "Control documental", values: ["Parcial", "Existen versiones de trabajo fuera del flujo principal del SGD.", "Riesgo de uso de versiones desactualizadas.", "Incorporar tempranamente el documento al SGD con control de versiones."] },
];

export const modeloPropuestaTable: ModeloMatrixRow[] = [
  { criterion: "Las versiones de trabajo del informe circulan por correo, fuera del SGD.", values: ["Registro en el SGD desde el inicio del proceso, con control de versiones.", "Evita que el documento circule sin control desde la etapa de elaboración.", "Elimina el vacío de trazabilidad identificado en el Capítulo 2 y reduce el riesgo de usar versiones desactualizadas."] },
  { criterion: "No existe un expediente electrónico explícito que agrupe también las versiones de trabajo.", values: ["Definir un expediente electrónico explícito desde la recepción.", "Mantiene unidos todos los documentos relacionados con el trámite, incluidas sus versiones intermedias.", "Facilita la consulta y auditoría posterior del proceso completo."] },
  { criterion: "Los documentos del expediente no cuentan con una ficha de metadatos uniforme.", values: ["Aplicar una ficha de metadatos uniforme a todos los documentos.", "Permite identificar y gestionar cada documento con el mismo criterio en toda la organización.", "Reduce la dependencia de un único documento (el informe técnico) para sostener la fiabilidad del expediente."] },
  { criterion: "No existe una etapa formal de revisión antes de la firma.", values: ["Incorporar una revisión formal y registrada previa a la firma.", "Reduce el uso de versiones de trabajo dispersas por correo.", "Permite detectar observaciones antes de comprometer la firma del responsable."] },
  { criterion: "La relación entre la firma y el certificado no queda documentada explícitamente.", values: ["Incorporar una verificación registrada de la firma y su certificado.", "Confirma que el documento firmado no fue alterado y que el certificado era válido al momento de firmar.", "Fortalece el valor probatorio del documento ante una eventual auditoría."] },
  { criterion: "El registro de eventos no cubre todas las etapas del proceso.", values: ["Registrar explícitamente cada evento de trazabilidad, incluida la elaboración.", "Permite reconstruir, en cualquier momento, el recorrido completo del documento.", "Sostiene la disponibilidad y la fiabilidad del expediente como evidencia."] },
];

export const modeloConclusiones: ModeloConclusion[] = [
  {
    id: "c1",
    hallazgo: "Las versiones de trabajo del informe técnico circulan por correo antes de incorporarse al expediente.",
    evidencia: "El historial del SGD no registra ninguna versión previa a la firma; solo aparece la versión final (INF-2026-0015).",
    analisis: "Esto compromete la fiabilidad del proceso de elaboración, aunque no invalida el documento final ya firmado.",
    propuesta: "Registrar el documento en el SGD desde el inicio, con control de versiones, tal como se detalla en el Capítulo 12.",
  },
  {
    id: "c2",
    hallazgo: "El registro de eventos del SGD no cubre la etapa de elaboración del informe.",
    evidencia: "Comparación entre el flujo reconstruido (Capítulo 4) y la línea de tiempo de trazabilidad (Capítulo 10), que no muestra ningún evento entre la derivación y la revisión.",
    analisis: "El vacío de trazabilidad impide reconstruir con certeza cómo se elaboró el documento antes de su firma.",
    propuesta: "Uniformar el registro de eventos en todas las etapas, incluida la elaboración, según se propone en el Capítulo 12.",
  },
  {
    id: "c3",
    hallazgo: "Solo el informe técnico cuenta con una ficha completa de metadatos; los demás documentos del expediente no.",
    evidencia: "Revisión de los seis documentos del expediente EXP-2026-0087 frente a la ficha de metadatos del Capítulo 6.",
    analisis: "La falta de uniformidad dificulta gestionar todos los documentos del expediente con el mismo criterio.",
    propuesta: "Extender la ficha de metadatos a todos los documentos del proceso, no solo al documento final.",
  },
  {
    id: "c4",
    hallazgo: "La firma del informe técnico es verificable, pero su relación con el certificado no queda documentada de forma explícita.",
    evidencia: "El expediente no incluye una constancia de verificación de vigencia del certificado utilizado al momento de firmar (Capítulo 9).",
    analisis: "Esto no anula la validez de la firma, pero deja al expediente sin un respaldo explícito ante una eventual auditoría.",
    propuesta: "Adjuntar al expediente una constancia de verificación del certificado, según se detalla en la propuesta del Capítulo 12.",
  },
];

export const modeloRecomendaciones: ModeloRecommendation[] = [
  {
    id: "rec1",
    recomendacion: "Incorporar el informe técnico al SGD desde su primera versión de trabajo, con control de versiones.",
    porque: "Actualmente las versiones previas circulan por correo y carpetas compartidas, fuera de todo control del sistema.",
    problema: "Atiende el riesgo de usar una versión incorrecta o desactualizada del documento (Capítulo 8).",
    resultadoEsperado: "Cada cambio del informe queda registrado, con fecha y responsable, desde su elaboración hasta su firma.",
  },
  {
    id: "rec2",
    recomendacion: "Definir un expediente electrónico explícito que agrupe también las versiones de trabajo del documento.",
    porque: "El expediente actual solo agrupa los documentos formales, dejando fuera el proceso real de elaboración.",
    problema: "Atiende la dificultad para reconstruir el recorrido completo del documento (Capítulo 10).",
    resultadoEsperado: "El expediente refleja el proceso completo, no solo su resultado final.",
  },
  {
    id: "rec3",
    recomendacion: "Aplicar una ficha de metadatos uniforme a todos los documentos del expediente.",
    porque: "Actualmente solo el informe técnico cuenta con una ficha completa.",
    problema: "Atiende la dificultad para identificar y gestionar los documentos con el mismo criterio (Capítulo 6 y 8).",
    resultadoEsperado: "Todos los documentos del expediente pueden identificarse y gestionarse con el mismo nivel de detalle.",
  },
  {
    id: "rec4",
    recomendacion: "Adjuntar al expediente una constancia de verificación de vigencia del certificado utilizado para firmar.",
    porque: "El expediente no documenta explícitamente esta verificación, aunque la firma en sí es válida.",
    problema: "Atiende la falta de respaldo explícito de la relación entre firma y certificado (Capítulo 9).",
    resultadoEsperado: "El expediente cuenta con evidencia explícita de que el certificado era válido al momento de la firma.",
  },
];

export const modeloReferencias = {
  normativa: [
    "Normas o disposiciones oficiales aplicables a la gestión documental (referencia ficticia con fines de modelo — el equipo debe citar la normativa real que corresponda a su caso)." as string,
  ],
  institucionales: ["Sitio web institucional de la Municipalidad Distrital de San Gabriel (ficticio, con fines de modelo)."],
  organizacion: ["Procedimiento interno de trámite documentario de la Gerencia de Administración (ficticio, con fines de modelo)."],
  academicas: ["Contenidos desarrollados en las Semanas 1 a 6 del curso Gestión de Archivos Electrónicos II."],
  nota: "Todas las referencias anteriores son ficticias y se incluyen únicamente para mostrar cómo debe organizarse esta sección. El equipo debe reemplazarlas por fuentes reales, verificables y sin URLs inventadas.",
};

export const modeloAnexos: ModeloAnexo[] = [
  { id: "a1", titulo: "Anexo 1 — Flujo documental", descripcion: "Diagrama del flujo documental actual y propuesto (ver Capítulos 4 y 12)." },
  { id: "a2", titulo: "Anexo 2 — Ficha de metadatos", descripcion: "Ficha completa de metadatos del informe técnico INF-2026-0015 (ver Capítulo 6)." },
  { id: "a3", titulo: "Anexo 3 — Matriz de riesgos", descripcion: "Matriz de riesgos y controles con los cinco problemas identificados (ver Capítulo 8)." },
  { id: "a4", titulo: "Anexo 4 — Ficha de análisis de firma", descripcion: "Ficha de análisis de la firma del informe técnico y su certificado (ver Capítulo 9)." },
  { id: "a5", titulo: "Anexo 5 — Evidencias", descripcion: "Evidencias simuladas utilizadas en este modelo: cargo de recepción, registro de eventos y documento firmado (todas ficticias, con fines educativos)." },
];

export const modeloNoCopiar = [
  "Nombres",
  "Textos",
  "Datos",
  "Problemas",
  "Conclusiones",
  "Recomendaciones",
  "Tablas",
  "Resultados",
];

export const modeloSiUsar = [
  "Estructura",
  "Profundidad",
  "Forma de presentar evidencias",
  "Relación evidencia → análisis",
  "Forma de construir tablas",
  "Forma de justificar decisiones",
  "Organización del informe",
  "Nivel de detalle",
];

export const modeloComparacion: ModeloComparisonExample[] = [
  {
    id: "comp1",
    tema: "Descripción del proceso",
    superficial: "La empresa X utiliza documentos electrónicos.",
    esperado: "En el proceso analizado, los documentos son registrados mediante el SGD desde su recepción, según la evidencia del cargo de ingreso. Sin embargo, se identificó que ciertas versiones de trabajo circulan por correo, lo que puede generar pérdida de trazabilidad. Se propone incorporar esas versiones al sistema desde el inicio.",
  },
  {
    id: "comp2",
    tema: "Afirmación sobre la firma",
    superficial: "El área cuenta con firma digital.",
    esperado: "Se verificó, mediante la revisión del documento y del registro del evento en el SGD, que el informe técnico incluye una firma digital aplicada con certificado. Esto permite sostener la identidad del firmante, aunque no se encontró en el expediente una constancia explícita de verificación de su vigencia.",
  },
  {
    id: "comp3",
    tema: "Identificación de un problema",
    superficial: "El sistema tiene fallas en el manejo de documentos.",
    esperado: "Se identificó que las versiones de trabajo del informe técnico no quedan registradas en el SGD, a diferencia del documento final. Esto representa un riesgo de integridad, ya que no es posible verificar qué cambios se realizaron antes de la firma. Se propone habilitar el control de versiones desde la etapa de elaboración.",
  },
];
