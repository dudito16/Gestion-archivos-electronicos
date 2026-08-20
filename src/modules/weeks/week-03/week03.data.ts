import type { AnimatedFolderDoc } from "../../../components/common/AnimatedFolder";
import type { FlowStep } from "../../../types/content.types";
import type { DiffRow, ObjectiveCard, ProcessMapBranch, ProcessSectionData, SummaryCluster, SummaryPoint } from "./week03.types";

export const heroChain: { id: string; label: string; icon: string }[] = [
  { id: "documento", label: "Documento", icon: "FileText" },
  { id: "proceso", label: "Proceso", icon: "Workflow" },
  { id: "expediente", label: "Expediente", icon: "FolderOpen" },
  { id: "archivo", label: "Archivo", icon: "Archive" },
];

export const objectives: ObjectiveCard[] = [
  {
    id: "procesos",
    title: "Identificar los procesos documentales de un SGD",
    description: "Reconocer recepción, registro, emisión, despacho y archivo como procesos ejecutados y controlados mediante el SGD.",
    icon: "Workflow",
  },
  {
    id: "expedientes",
    title: "Comprender documentos y expedientes electrónicos",
    description: "Analizar cómo los documentos se relacionan entre sí dentro de un expediente electrónico.",
    icon: "FolderOpen",
  },
  {
    id: "criterios",
    title: "Aplicar criterios de ordenamiento, clasificación y organización",
    description: "Distinguir y aplicar estos tres criterios documentales sobre un mismo caso.",
    icon: "GitCompareArrows",
  },
  {
    id: "descripcion",
    title: "Reconocer la importancia de la descripción",
    description: "Comprender cómo la descripción facilita identificar, comprender y recuperar documentos y expedientes.",
    icon: "FileSearch",
  },
];

export const startingQuestionChecks: string[] = [
  "¿Registrado?",
  "¿Relacionado con un expediente?",
  "¿Derivado?",
  "¿Atendido?",
  "¿Ordenado?",
  "¿Clasificado?",
  "¿Descrito?",
  "¿Archivado?",
];

export const processDefinition =
  "Un proceso documental es un conjunto de actividades relacionadas que permiten gestionar documentos dentro de una organización, desde su recepción o producción hasta las acciones de trámite, emisión, despacho y archivo que correspondan.";

export const processDefinitionFlow: FlowStep[] = [
  { id: "entrada", label: "Entrada" },
  { id: "actividades", label: "Actividades" },
  { id: "documentos", label: "Documentos" },
  { id: "decisiones", label: "Decisiones" },
  { id: "salidas", label: "Salidas" },
  { id: "continuidad", label: "Archivo / Continuidad" },
];

export const processMapBranches: ProcessMapBranch[] = [
  { id: "recepcion", steps: ["Recepción", "Registro", "Trámite", "Expediente", "Organización y control"] },
  { id: "emision", steps: ["Emisión", "Despacho"] },
  { id: "archivo", steps: ["Archivo"] },
];

export const receptionData: ProcessSectionData = {
  title: "Recepción",
  intro:
    "La recepción es el proceso mediante el cual la organización recibe documentos provenientes de ciudadanos, otras entidades, órganos internos u otros canales habilitados.",
  examples: ["Mesa de Partes", "Mesa de Partes Virtual", "Documentos internos", "Comunicaciones institucionales", "Interoperabilidad (cuando corresponda)"],
  flow: [
    { id: "externo", label: "Documento externo" },
    { id: "recepcion", label: "Recepción" },
    { id: "verificacion", label: "Verificación" },
    { id: "ingreso", label: "Ingreso al sistema" },
  ],
};

export const registrationElements = ["Documento", "Identificación", "Fecha", "Origen", "Asunto", "Relación / Expediente"];

export const issuanceData: ProcessSectionData = {
  title: "Emisión",
  intro: "La emisión corresponde a la generación de documentos institucionales como resultado de una actuación, procedimiento o decisión.",
  examples: ["Oficio", "Memorando", "Informe", "Resolución", "Comunicación institucional"],
  flow: [
    { id: "necesidad", label: "Necesidad / Actuación" },
    { id: "elaboracion", label: "Elaboración" },
    { id: "revision", label: "Revisión" },
    { id: "aprobacion", label: "Aprobación / Firma" },
    { id: "emitido", label: "Documento emitido" },
  ],
};

export const dispatchData: ProcessSectionData = {
  title: "Despacho",
  intro:
    "El despacho corresponde a las acciones mediante las cuales un documento emitido es enviado o puesto a disposición de su destinatario por el canal correspondiente.",
  examples: ["Notificación", "Correo institucional", "Plataforma", "Entrega física", "Canal institucional habilitado"],
  flow: [
    { id: "emitido", label: "Documento emitido" },
    { id: "destinatario", label: "Destinatario" },
    { id: "canal", label: "Canal" },
    { id: "despacho", label: "Despacho" },
    { id: "evidencia", label: "Evidencia" },
  ],
};

export const archivingFlow: FlowStep[] = [
  { id: "doc-exp", label: "Documento / Expediente" },
  { id: "cierre", label: "Cierre / Conclusión del trámite" },
  { id: "organizacion", label: "Organización" },
  { id: "archivo", label: "Archivo" },
];

export const integralFlowMain: FlowStep[] = [
  { id: "recepcion", label: "Recepción" },
  { id: "registro", label: "Registro" },
  { id: "tramite", label: "Trámite" },
  { id: "expediente", label: "Expediente" },
  { id: "clasificar", label: "Clasificar" },
  { id: "ordenar", label: "Ordenar" },
  { id: "describir", label: "Describir" },
  { id: "gestion", label: "Gestión" },
  { id: "despacho", label: "Despacho" },
  { id: "archivo", label: "Archivo" },
];

export const integralFlowCompanions: { id: string; label: string; icon: string }[] = [
  { id: "documento", label: "Documento", icon: "FileText" },
  { id: "expediente", label: "Expediente", icon: "FolderOpen" },
  { id: "organizacion", label: "Organización documental", icon: "FolderTree" },
];

export const recordDocs: AnimatedFolderDoc[] = [
  { id: "solicitud", title: "01 Solicitud", icon: "FileText" },
  { id: "memorando", title: "02 Memorando", icon: "FileText" },
  { id: "informe", title: "03 Informe", icon: "FileSearch" },
  { id: "proveido", title: "04 Proveído", icon: "ClipboardList" },
  { id: "resolucion", title: "05 Resolución", icon: "Stamp" },
  { id: "notificacion", title: "06 Notificación", icon: "BellRing" },
];

export const recordChain: string[] = ["Clasificación", "Ordenamiento", "Descripción", "Archivo"];

export const foliationDocs: string[] = ["Documento 1", "Documento 2", "Documento 3", "Documento 4", "Documento 5"];

export const orderingBefore: string[] = ["Informe.pdf", "final.pdf", "final2.pdf", "documento.pdf", "nuevo.pdf", "scan001.pdf"];
export const orderingAfter: string[] = ["01_Solicitud", "02_Informe", "03_Proveido", "04_Resolucion", "05_Notificacion"];

export const classificationFlow: FlowStep[] = [
  { id: "institucion", label: "Institución" },
  { id: "funciones", label: "Funciones" },
  { id: "actividades", label: "Actividades" },
  { id: "series", label: "Series / agrupaciones documentales" },
  { id: "expedientes", label: "Expedientes" },
  { id: "documentos", label: "Documentos" },
];

export const organizationComparison = {
  document: "Informe sobre contratación",
  classification: "Proceso / función correspondiente",
  organization: "Relación con expediente + orden documental + estructura",
};

export const descriptionElements = ["Código", "Título", "Fechas", "Productor", "Alcance", "Contenido", "Relaciones"];

export const diffTableRows: DiffRow[] = [
  { concept: "Clasificación", question: "¿Dónde pertenece?" },
  { concept: "Organización", question: "¿Cómo se estructura y mantiene?" },
  { concept: "Ordenamiento", question: "¿En qué secuencia se dispone?" },
  { concept: "Descripción", question: "¿Cómo lo representamos para identificarlo y recuperarlo?" },
];

export const agnConceptualFlow: FlowStep[] = [
  { id: "recibido", label: "Documento recibido" },
  { id: "registro", label: "Registro" },
  { id: "expediente", label: "Expediente" },
  { id: "derivacion", label: "Derivación" },
  { id: "atencion", label: "Atención" },
  { id: "respuesta", label: "Documento de respuesta" },
  { id: "despacho", label: "Despacho / Notificación" },
  { id: "cierre", label: "Cierre" },
  { id: "archivo", label: "Archivo" },
];

export const interactiveCaseTimeline = {
  known: ["Documento recibido", "Expediente", "Documento emitido", "Archivo"],
  gaps: [
    { id: "gap1", afterIndex: 0, options: ["Registro", "Derivación", "Despacho", "Clasificación", "Metadatos"], correct: "Registro" },
    { id: "gap2", afterIndex: 1, options: ["Registro", "Derivación", "Despacho", "Clasificación", "Metadatos"], correct: "Derivación" },
    { id: "gap3", afterIndex: 2, options: ["Registro", "Derivación", "Despacho", "Clasificación", "Metadatos"], correct: "Despacho" },
  ],
  feedback:
    "Un documento recibido debe registrarse antes de vincularse a un expediente; luego se deriva para su atención; y, tras emitirse la respuesta, se despacha antes del archivo.",
};

export const activity1Items: { id: string; label: string }[] = [
  { id: "recepcion", label: "RECEPCIÓN" },
  { id: "registro", label: "REGISTRO" },
  { id: "emision", label: "EMISIÓN" },
  { id: "despacho", label: "DESPACHO" },
  { id: "archivo", label: "ARCHIVO" },
];
export const activity1Order: string[] = ["recepcion", "registro", "emision", "despacho", "archivo"];
export const activity1Explanation: Record<string, string> = {
  recepcion: "El documento ingresa a la organización por el canal correspondiente.",
  registro: "Se le asigna identificación, fecha y demás datos de control.",
  emision: "Se elabora, revisa y aprueba el documento de respuesta o actuación.",
  despacho: "El documento se envía o se pone a disposición de su destinatario.",
  archivo: "Concluido el trámite, el documento y su expediente se organizan y conservan.",
};

export const activity2Items: { id: string; label: string; icon: string; belongs: boolean }[] = [
  { id: "solicitud", label: "Solicitud", icon: "FileText", belongs: true },
  { id: "informe", label: "Informe", icon: "FileSearch", belongs: true },
  { id: "proveido", label: "Proveído", icon: "ClipboardList", belongs: true },
  { id: "resolucion", label: "Resolución", icon: "Stamp", belongs: true },
  { id: "notificacion", label: "Notificación", icon: "BellRing", belongs: true },
  { id: "no-relacionado", label: "Memorando de otro asunto, sin relación con este trámite", icon: "FileX", belongs: false },
];
export const activity2Explanation = "Un expediente no es una carpeta de archivos sin relación.";

export const activity3Items: { id: string; label: string }[] = [
  { id: "resolucion", label: "03_Resolucion.pdf" },
  { id: "solicitud", label: "01_Solicitud.pdf" },
  { id: "notificacion", label: "05_Notificacion.pdf" },
  { id: "informe", label: "02_Informe.pdf" },
  { id: "proveido", label: "04_Proveido.pdf" },
];
export const activity3Order: string[] = ["solicitud", "informe", "resolucion", "proveido", "notificacion"];
export const activity3WhyItMatters = ["Contexto", "Secuencia", "Comprensión", "Control", "Recuperación"];

export const activity4Case = {
  prompt: "Una institución recibe un documento relacionado con una contratación.\n\n¿Qué debemos determinar antes de organizarlo?",
  options: [
    { id: "a", label: "Solamente el nombre del archivo." },
    { id: "b", label: "La función/actividad y agrupación documental correspondiente." },
    { id: "c", label: "El color de la carpeta." },
    { id: "d", label: "El tamaño del PDF." },
  ],
  correctId: "b",
  feedback: "La clasificación debe relacionar el documento con el contexto funcional y documental correspondiente.",
};

export const activity5Data = {
  recordLabel: "Expediente 2026-001",
  files: ["archivo_final.pdf", "scan001.pdf", "nuevo.pdf", "documento2.pdf", "final_final.pdf"],
  options: [
    "Nombres poco significativos",
    "Ausencia de contexto",
    "Dificultad para determinar secuencia",
    "Posible duplicidad",
    "Falta de organización",
    "Dificultad de recuperación",
  ],
  revealTitle: "Criterio archivístico",
  revealContent:
    "Ninguno de estos nombres identifica el asunto, la fecha ni la posición del documento dentro del expediente. Sin una convención de ordenamiento y sin metadatos, no es posible saber cuál es la versión vigente ni reconstruir la secuencia de actuaciones — el objetivo no es memorizar nombres de archivo, sino reconocer el riesgo que genera su ausencia.",
};

export const integratorCaseFlow: FlowStep[] = [
  { id: "solicitud", label: "Solicitud" },
  { id: "recepcion", label: "Recepción" },
  { id: "registro", label: "Registro" },
  { id: "expediente", label: "Expediente" },
  { id: "derivacion", label: "Derivación" },
  { id: "informe", label: "Informe" },
  { id: "respuesta", label: "Documento de respuesta" },
  { id: "despacho", label: "Despacho" },
  { id: "cierre", label: "Cierre" },
  { id: "archivo", label: "Archivo" },
];

export const integratorConcepts: { id: string; label: string; explanation: string }[] = [
  { id: "clasificacion", label: "Clasificación", explanation: "Al derivarse a la unidad responsable, el expediente se relaciona con la función y serie documental que le corresponde." },
  { id: "organizacion", label: "Organización", explanation: "Cada documento generado (informe, respuesta) se incorpora y relaciona con el expediente ya existente." },
  { id: "ordenamiento", label: "Ordenamiento", explanation: "Los documentos del expediente deben disponerse en la secuencia en que ocurrieron las actuaciones." },
  { id: "descripcion", label: "Descripción", explanation: "Al cerrarse, el expediente debe quedar identificado con código, título, fechas y asunto para su recuperación futura." },
];

export const lifecycleConnectionToWeek2 = {
  currentQuestion: "¿Qué es el SGD?",
  currentAnswers: ["Componentes", "Procesos", "Expedientes", "Organización"],
  nextQuestion: "¿Qué hacemos con los documentos dentro del SGD?",
};

export const nextWeekConnection = {
  currentQuestion: "¿Qué logramos esta semana?",
  currentAnswers: ["Documento", "Proceso", "Expediente", "Organización"],
  nextQuestion: "¿Qué información necesitamos para describir y gestionar correctamente esos documentos?",
  nextTitle: "Metadatos en un SGD",
};

export const summaryClusters: SummaryCluster[] = [
  { id: "procesos", title: "Procesos documentales", icon: "Workflow", items: ["Recepción", "Registro", "Emisión", "Despacho", "Archivo"] },
  { id: "expediente", title: "Expediente", icon: "FolderOpen", items: ["Relación", "Ordenamiento", "Foliación", "Control"] },
  { id: "organizacion", title: "Organización", icon: "FolderTree", items: ["Clasificación", "Organización", "Descripción"] },
];

export const keyIdeas: SummaryPoint[] = [
  { id: "k1", title: "01", description: "Un documento recibido todavía tiene un proceso de gestión por delante.", icon: "Inbox" },
  { id: "k2", title: "02", description: "El expediente mantiene la relación entre documentos vinculados.", icon: "FolderOpen" },
  { id: "k3", title: "03", description: "Ordenar no es lo mismo que clasificar.", icon: "GitCompareArrows" },
  { id: "k4", title: "04", description: "Clasificar permite relacionar documentos con su contexto funcional y documental.", icon: "FolderTree" },
  { id: "k5", title: "05", description: "Describir facilita identificar, comprender y recuperar documentos y expedientes.", icon: "FileSearch" },
];
