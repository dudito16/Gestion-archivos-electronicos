import type { FlowStep, TimelineStep } from "../../../types/content.types";
import type {
  ContextElement,
  DragDropCategory,
  DragDropItem,
  FichaField,
  FunctionCard,
  LifecycleStageMetadata,
  MetadataTypeInfo,
  ObjectiveCard,
  QualityCard,
  SummaryPoint,
} from "./week04.types";

export const heroChain: { id: string; label: string; icon: string }[] = [
  { id: "documento", label: "Documento", icon: "FileText" },
  { id: "metadatos", label: "Metadatos", icon: "Tags" },
  { id: "contexto", label: "Contexto", icon: "Link2" },
  { id: "gestion", label: "Gestión", icon: "Workflow" },
  { id: "trazabilidad", label: "Trazabilidad", icon: "Route" },
];

export const objectives: ObjectiveCard[] = [
  {
    id: "funcion",
    title: "Comprender la función de los metadatos en un SGD",
    description: "Explicar por qué un documento no puede gestionarse archivísticamente sin la información que lo contextualiza.",
    icon: "Tags",
  },
  {
    id: "iso",
    title: "Reconocer los principios de ISO 23081-1:2017",
    description: "Ubicar los metadatos como un marco de principios dependiente del contexto organizacional, no como una lista fija de campos.",
    icon: "BookOpenCheck",
  },
  {
    id: "tipos",
    title: "Diferenciar los cuatro tipos de metadatos",
    description: "Distinguir metadatos descriptivos, administrativos, estructurales y de preservación.",
    icon: "GitCompareArrows",
  },
  {
    id: "campos",
    title: "Proponer campos básicos de metadatos para un SGD",
    description: "Diseñar una ficha de metadatos aplicando criterio archivístico, no solo copiar ejemplos.",
    icon: "ClipboardList",
  },
];

export const previousWeeksChain = [
  { week: "Semana 2", question: "¿Qué es un SGD?", href: "/semana/2" },
  { week: "Semana 3", question: "¿Qué hacemos con los documentos?", href: "/semana/3" },
  { week: "Semana 4", question: "¿Qué información necesitamos para gestionarlos correctamente?", href: undefined },
];

export const startingQuestionFile = "Informe_final_v3.pdf";
export const startingQuestionChecks: string[] = [
  "¿Quién lo creó?",
  "¿Cuándo?",
  "¿Para qué?",
  "¿A qué expediente pertenece?",
  "¿Qué unidad lo produjo?",
  "¿Cuál es su estado?",
  "¿Qué ocurrió con él?",
  "¿Qué relación tiene con otros documentos?",
];

export const metadataConceptShort = "dato sobre dato";
export const metadataConceptFull =
  "Los metadatos son información estructurada asociada a un documento que permite identificarlo, describirlo, contextualizarlo y gestionarlo dentro de un sistema y de los procesos documentales correspondientes.";

export const rawFileExample = "Informe.pdf";
export const enrichedMetadataExample = ["Identificador", "Título", "Fecha", "Productor", "Tipo documental", "Expediente", "Estado", "Responsable"];

export const functionCards: FunctionCard[] = [
  { id: "identificacion", title: "Identificación", question: "¿Qué documento es?", icon: "FileSignature" },
  { id: "descripcion", title: "Descripción", question: "¿De qué trata?", icon: "FileSearch" },
  { id: "contexto", title: "Contexto", question: "¿Quién lo produce y con qué función/proceso se relaciona?", icon: "Link2" },
  { id: "gestion", title: "Gestión", question: "¿Cómo se controla?", icon: "Workflow" },
  { id: "trazabilidad", title: "Trazabilidad", question: "¿Qué ocurrió con él?", icon: "Route" },
  { id: "preservacion", title: "Preservación", question: "¿Qué información puede ser necesaria para mantener su gestión a largo plazo?", icon: "ShieldCheck" },
];

export const contextElements: ContextElement[] = [
  { id: "persona", label: "Persona", icon: "KeyRound", explanation: "Quién interviene sobre el documento: autor, responsable, firmante." },
  { id: "organizacion", label: "Organización", icon: "Database", explanation: "La entidad o unidad en cuyo nombre se produce o gestiona el documento." },
  { id: "funcion", label: "Función", icon: "Workflow", explanation: "La función institucional que da origen a la necesidad del documento." },
  { id: "actividad", label: "Actividad", icon: "ClipboardList", explanation: "La actividad concreta dentro de esa función que genera el documento." },
  { id: "proceso", label: "Proceso", icon: "Route", explanation: "La secuencia de trámite por la que atraviesa el documento." },
  { id: "expediente", label: "Expediente", icon: "FolderOpen", explanation: "La agrupación documental a la que el documento pertenece." },
  { id: "eventos", label: "Eventos", icon: "Activity", explanation: "Las acciones ocurridas sobre el documento a lo largo de su gestión." },
];

export const iso23081Flow: FlowStep[] = [
  { id: "organizacion", label: "Organización" },
  { id: "requisitos", label: "Requisitos" },
  { id: "procesos", label: "Procesos" },
  { id: "documentos", label: "Documentos" },
  { id: "necesidades", label: "Necesidades de metadatos" },
  { id: "esquema", label: "Esquema de metadatos" },
];

export const iso23081Answer =
  "Las necesidades de metadatos dependen del contexto organizacional, los documentos, los procesos y los requisitos de gestión.";

export const metadataTypes: MetadataTypeInfo[] = [
  {
    id: "descriptivos",
    label: "Descriptivos",
    icon: "FileSearch",
    question: "¿Qué es el documento?",
    definition: "Metadatos que identifican y describen el contenido, asunto y naturaleza del documento.",
    purpose: "Permiten buscar, identificar y comprender de qué trata un documento sin necesidad de abrirlo.",
    examples: ["Título", "Asunto", "Descripción", "Tipo documental", "Productor", "Fecha"],
  },
  {
    id: "administrativos",
    label: "Administrativos",
    icon: "ClipboardList",
    question: "¿Cómo gestionamos el documento?",
    definition: "Metadatos que apoyan el control, seguimiento y gestión del documento dentro del sistema.",
    purpose: "Sostienen la trazabilidad de estado, responsables y permisos; los campos concretos dependen de los requisitos institucionales.",
    examples: ["Identificador", "Estado", "Responsable", "Fecha de registro", "Permisos", "Ubicación", "Relación con expediente"],
  },
  {
    id: "estructurales",
    label: "Estructurales",
    icon: "FolderTree",
    question: "¿Cómo se relacionan las partes?",
    definition: "Metadatos que representan la organización interna de un documento compuesto o la relación entre documentos de un expediente.",
    purpose: "Permiten reconstruir la composición y el orden de las partes que forman una unidad documental o un expediente.",
    examples: ["Relación con expediente", "Orden / secuencia", "Componentes del documento", "Documento padre / hijo"],
  },
  {
    id: "preservacion",
    label: "Preservación",
    icon: "ShieldCheck",
    question: "¿Qué información puede ser necesaria para mantener y gestionar el objeto digital a largo plazo?",
    definition: "Metadatos que documentan las características técnicas y los eventos necesarios para conservar el acceso al documento en el tiempo.",
    purpose: "Sustentan la conservación de la autenticidad y accesibilidad del documento aunque cambien los formatos o la tecnología.",
    examples: ["Formato", "Versión", "Información técnica", "Evento", "Fecha del evento", "Acción realizada", "Resultado"],
  },
];

export const recordExpedienteDocs = ["Documento 1", "Documento 2", "Documento 3", "Documento 4"];
export const compoundDocumentParts = ["Portada", "Contenido", "Anexos", "Otros componentes"];

export const lifecycleSteps: TimelineStep[] = [
  { id: "creacion", period: "Origen", title: "Creación", description: "El documento se genera dentro de una actividad institucional.", icon: "FilePlus" },
  { id: "captura", period: "Origen", title: "Captura", description: "El documento se incorpora formalmente al sistema.", icon: "Inbox" },
  { id: "registro", period: "Trámite", title: "Registro", description: "Se generan los primeros metadatos administrativos de control.", icon: "ClipboardList" },
  { id: "tramite", period: "Trámite", title: "Trámite", description: "Se actualizan metadatos de estado, responsable y derivación.", icon: "Workflow" },
  { id: "uso", period: "Uso", title: "Uso", description: "El documento es consultado por quienes lo requieren.", icon: "FileSearch" },
  { id: "archivo", period: "Conservación", title: "Archivo", description: "Se registran metadatos de cierre y ubicación.", icon: "Archive" },
  { id: "transferencia", period: "Conservación", title: "Transferencia", description: "Se generan metadatos del traslado entre archivos.", icon: "ArrowRightLeft" },
  { id: "preservacion", period: "Destino final", title: "Preservación", description: "Se registran metadatos técnicos y eventos de preservación.", icon: "ShieldCheck" },
];

export const lifecycleMetadataMoments: LifecycleStageMetadata[] = [
  { id: "registro", stage: "Registro", fields: ["ID", "Fecha", "Usuario", "Estado inicial"] },
  { id: "tramite", stage: "Trámite", fields: ["Responsable", "Derivación", "Estado"] },
  { id: "cierre", stage: "Cierre", fields: ["Fecha de cierre", "Resultado"] },
  { id: "preservacion", stage: "Preservación", fields: ["Formato", "Evento", "Información técnica"] },
];

export const schemaFlow: FlowStep[] = [
  { id: "campo", label: "Campo" },
  { id: "definicion", label: "Definición" },
  { id: "tipo", label: "Tipo de dato" },
  { id: "obligatorio", label: "Obligatorio / Opcional" },
  { id: "valores", label: "Valores permitidos" },
  { id: "reglas", label: "Reglas" },
];

export const fichaExample: FichaField[] = [
  { id: "identificador", field: "Identificador", value: "DOC-2026-00452", function: "Identifica el documento de forma unívoca dentro del sistema." },
  { id: "titulo", field: "Título", value: "Informe técnico", function: "Describe brevemente el contenido del documento." },
  { id: "tipo", field: "Tipo documental", value: "Informe", function: "Ubica el documento dentro de una tipología documental reconocida." },
  { id: "fecha", field: "Fecha", value: "02/09/2026", function: "Sitúa temporalmente el documento dentro del trámite." },
  { id: "productor", field: "Productor", value: "Unidad X", function: "Identifica quién produjo el documento." },
  { id: "expediente", field: "Expediente", value: "EXP-2026-00120", function: "Relaciona el documento con la agrupación documental a la que pertenece." },
  { id: "estado", field: "Estado", value: "Aprobado", function: "Informa en qué situación de trámite se encuentra el documento." },
  { id: "formato", field: "Formato", value: "PDF", function: "Registra la codificación técnica del documento, relevante para su preservación." },
];

export const fewMetadataProblem = "Falta de contexto";
export const manyMetadataProblems = ["Carga innecesaria", "Datos incompletos", "Inconsistencias"];
export const qualityConclusion =
  "El objetivo es definir los metadatos necesarios y adecuados para los requisitos de gestión documental.";

export const qualityCards: QualityCard[] = [
  { id: "completitud", title: "Completitud", question: "¿Está la información necesaria?", icon: "ClipboardList" },
  { id: "exactitud", title: "Exactitud", question: "¿Es correcta?", icon: "Target" },
  { id: "consistencia", title: "Consistencia", question: "¿Se registra de manera uniforme?", icon: "GitCompareArrows" },
  { id: "oportunidad", title: "Oportunidad", question: "¿Se registra cuando corresponde?", icon: "Activity" },
  { id: "trazabilidad", title: "Trazabilidad", question: "¿Podemos saber cómo se generó o modificó?", icon: "Route" },
];

export const uncontrolledValues = ["OK", "Bueno", "Listo", "Final", "Terminado"];
export const controlledValues = ["Registrado", "En trámite", "En revisión", "Aprobado", "Notificado", "Archivado"];

export const sgdDiagram: { id: string; label: string; icon: string }[] = [
  { id: "metadatos", label: "Metadatos", icon: "Tags" },
  { id: "expediente", label: "Expediente", icon: "FolderOpen" },
  { id: "proceso", label: "Proceso", icon: "Workflow" },
  { id: "trazabilidad", label: "Trazabilidad", icon: "Route" },
];

export const agnExampleFields = [
  "Identificador",
  "Número",
  "Fecha",
  "Tipo documental",
  "Asunto",
  "Unidad productora",
  "Expediente",
  "Estado",
  "Responsable",
  "Relaciones",
];

export const reviewFields = [
  { id: "identificador", label: "Identificador", category: "administrativos" as const },
  { id: "tipo", label: "Tipo documental", category: "descriptivos" as const },
  { id: "fecha", label: "Fecha", category: "descriptivos" as const },
  { id: "productor", label: "Productor / unidad", category: "descriptivos" as const },
  { id: "asunto", label: "Asunto", category: "descriptivos" as const },
  { id: "objeto", label: "Objeto relacionado", category: "estructurales" as const },
  { id: "estado", label: "Estado", category: "administrativos" as const },
  { id: "usuario", label: "Usuario responsable", category: "administrativos" as const },
  { id: "ubicacion", label: "Ubicación", category: "administrativos" as const },
  { id: "relaciones", label: "Relaciones", category: "estructurales" as const },
];

export const practicalCaseDocs = [
  { id: "a", label: "Documento A", fecha: "10/01/2026", productor: "Unidad A", expediente: "EXP-001", asunto: "Contratación" },
  { id: "b", label: "Documento B", fecha: "20/02/2026", productor: "Unidad B", expediente: "EXP-045", asunto: "Digitalización" },
];

export const dragDropCategories: DragDropCategory[] = [
  { id: "descriptivos", label: "Descriptivo", icon: "FileSearch" },
  { id: "administrativos", label: "Administrativo", icon: "ClipboardList" },
  { id: "estructurales", label: "Estructural", icon: "FolderTree" },
  { id: "preservacion", label: "Preservación", icon: "ShieldCheck" },
];

export const dragDropItems: DragDropItem[] = [
  { id: "titulo", label: "Título", icon: "FileSignature", category: "descriptivos" },
  { id: "estado", label: "Estado", icon: "Activity", category: "administrativos" },
  { id: "expediente", label: "Expediente (relación)", icon: "FolderTree", category: "estructurales" },
  { id: "formato", label: "Formato", icon: "FileType", category: "preservacion" },
  { id: "fecha-registro", label: "Fecha de registro", icon: "ClipboardList", category: "administrativos" },
  { id: "descripcion", label: "Descripción", icon: "FileSearch", category: "descriptivos" },
];

export const ficha2Fields = ["Identificador", "Título", "Fecha", "Productor", "Tipo documental", "Expediente", "Estado", "Formato"];
export const ficha2Suggested: Record<string, string> = {
  Identificador: "DOC-2026-00789",
  Título: "Informe técnico",
  Fecha: "15/09/2026",
  Productor: "Unidad responsable",
  "Tipo documental": "Informe",
  Expediente: "EXP-2026-00234",
  Estado: "En revisión",
  Formato: "PDF",
};

export const analysisQuestion = {
  prompt: "¿Más metadatos significa mejor gestión?",
  options: [
    { id: "si", label: "Sí" },
    { id: "no", label: "No" },
  ],
  correctId: "no",
  feedback:
    "NO NECESARIAMENTE. El objetivo no es acumular campos, sino definir información necesaria, útil, consistente y adecuada para los requisitos de gestión documental.",
};

export const workshopGuideQuestions = [
  "¿Qué información necesito?",
  "¿Por qué es necesaria?",
  "¿Quién la registra?",
  "¿Cuándo se genera?",
  "¿Puede cambiar?",
  "¿Es obligatoria?",
  "¿Qué valores puede tener?",
];

export const finalDiagramGroup = ["Identificación", "Descripción", "Contexto", "Gestión", "Relaciones", "Trazabilidad"];

export const summaryPoints: SummaryPoint[] = [
  { id: "s1", title: "01", description: "Los metadatos aportan contexto al documento.", icon: "Link2" },
  { id: "s2", title: "02", description: "Los metadatos permiten identificar y describir documentos.", icon: "FileSearch" },
  { id: "s3", title: "03", description: "Los metadatos apoyan la gestión dentro del SGD.", icon: "Workflow" },
  { id: "s4", title: "04", description: "Los metadatos pueden generarse y actualizarse durante el ciclo de vida.", icon: "Route" },
  { id: "s5", title: "05", description: "El esquema de metadatos debe responder a los requisitos de la organización.", icon: "ClipboardList" },
];

export const nextWeekConnection = {
  currentTitle: "Metadatos",
  nextWeekNumber: 5,
  nextTitle: "ISO 15489-1:2016",
  nextConcepts: ["Autenticidad", "Fiabilidad", "Integridad", "Disponibilidad"],
  text:
    "Ahora que sabemos qué información acompaña y contextualiza a los documentos, estudiaremos los principios de gestión de documentos y los requisitos relacionados con su valor como evidencia.",
};
