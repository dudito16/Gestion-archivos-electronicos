import type { AnimatedFolderDoc } from "../../../components/common/AnimatedFolder";
import type { FlowStep, TimelineStep } from "../../../types/content.types";
import type {
  ArchitectureBlock,
  ConceptMapNode,
  ObjectiveCard,
  PurposeCard,
  SGDComponent,
  SummaryPoint,
  TraceEvent,
} from "./week02.types";

export const heroChain: { id: string; label: string; icon: string }[] = [
  { id: "usuario", label: "Usuario", icon: "KeyRound" },
  { id: "sgd", label: "SGD", icon: "Database" },
  { id: "documento", label: "Documento", icon: "FileText" },
  { id: "expediente", label: "Expediente", icon: "FolderOpen" },
  { id: "proceso", label: "Proceso", icon: "Workflow" },
  { id: "archivo", label: "Archivo", icon: "Archive" },
];

export const objectives: ObjectiveCard[] = [
  {
    id: "concepto",
    title: "Comprender el concepto y finalidad de un SGD",
    description: "Explicar qué es un Sistema de Gestión Documental y qué problema institucional resuelve más allá de almacenar archivos.",
    icon: "Database",
  },
  {
    id: "componentes",
    title: "Identificar sus componentes funcionales",
    description: "Reconocer usuarios, documentos, expedientes, metadatos, procesos y trazabilidad como piezas de un mismo sistema.",
    icon: "LayoutGrid",
  },
  {
    id: "relaciones",
    title: "Comprender cómo se relacionan sus componentes",
    description: "Analizar cómo interactúan usuarios, documentos, expedientes, metadatos, procesos y trazabilidad entre sí.",
    icon: "GitCompareArrows",
  },
  {
    id: "ciclo-vida",
    title: "Relacionar el SGD con el ciclo de vida documental",
    description: "Ubicar el rol del SGD en la producción, trámite, archivo, transferencia y disposición del documento electrónico.",
    icon: "Workflow",
  },
];

export const sgdConvergingElements: { id: string; label: string; icon: string }[] = [
  { id: "personas", label: "Personas", icon: "KeyRound" },
  { id: "procesos", label: "Procesos", icon: "Workflow" },
  { id: "documentos", label: "Documentos", icon: "FileText" },
  { id: "reglas", label: "Reglas", icon: "Scale" },
  { id: "metadatos", label: "Metadatos", icon: "Tags" },
  { id: "tecnologia", label: "Tecnología", icon: "Database" },
  { id: "controles", label: "Controles", icon: "ShieldCheck" },
];

export const sgdDefinition =
  "Un Sistema de Gestión Documental (SGD) es una solución tecnológica que permite gestionar documentos y expedientes dentro de los procesos institucionales, aplicando reglas, usuarios, metadatos, controles y mecanismos de trazabilidad para apoyar su creación, recepción, registro, trámite, consulta, seguimiento y archivo durante su ciclo de vida.";

export const purposeCards: PurposeCard[] = [
  { id: "p1", title: "Gestionar documentos", description: "Controlar la creación, identificación y estado de cada documento electrónico.", icon: "FileText" },
  { id: "p2", title: "Gestionar expedientes", description: "Agrupar y ordenar los documentos relacionados con un mismo asunto o trámite.", icon: "FolderOpen" },
  { id: "p3", title: "Apoyar procesos institucionales", description: "Acompañar el trámite documental dentro de los procesos propios de cada entidad.", icon: "Workflow" },
  { id: "p4", title: "Facilitar seguimiento", description: "Permitir conocer en qué estado y en manos de quién se encuentra un documento.", icon: "Radar" },
  { id: "p5", title: "Mantener contexto", description: "Conservar la relación del documento con su productor, actividad y expediente.", icon: "Link2" },
  { id: "p6", title: "Controlar responsabilidades", description: "Dejar constancia de quién interviene y qué acción realiza sobre cada documento.", icon: "ClipboardList" },
  { id: "p7", title: "Facilitar acceso", description: "Permitir la consulta oportuna de documentos y expedientes por quien corresponda.", icon: "KeyRound" },
  { id: "p8", title: "Mantener trazabilidad", description: "Registrar las acciones y estados relevantes ocurridos durante la gestión.", icon: "Route" },
];

export const storageItems = ["PDF", "DOCX", "PDF", "XLSX", "PDF"];
export const storageContainers = ["Carpeta", "Servidor", "Repositorio"];
export const managementElements = ["Documento", "Contexto", "Metadatos", "Expediente", "Proceso", "Usuario", "Estado", "Trazabilidad"];

export const scenarioWithoutSGD: FlowStep[] = [
  { id: "solicitud", label: "Solicitud" },
  { id: "correo", label: "Correo" },
  { id: "carpeta", label: "Carpeta" },
  { id: "word", label: "Word" },
  { id: "pdf", label: "PDF" },
  { id: "correo-2", label: "Correo" },
  { id: "otra-oficina", label: "Otra oficina" },
];

export const scenarioWithSGD: FlowStep[] = [
  { id: "solicitud", label: "Solicitud" },
  { id: "registro", label: "Registro" },
  { id: "expediente", label: "Expediente" },
  { id: "derivacion", label: "Derivación" },
  { id: "atencion", label: "Atención" },
  { id: "respuesta", label: "Documento de respuesta" },
  { id: "firma", label: "Firma" },
  { id: "notificacion", label: "Notificación" },
  { id: "archivo", label: "Archivo" },
];

export const sgdComponents: SGDComponent[] = [
  {
    id: "usuarios",
    label: "Usuarios",
    icon: "KeyRound",
    definition: "Personas que intervienen en la gestión documental desde un rol institucional específico.",
    purpose: "Determinar quién puede registrar, consultar, derivar, atender, elaborar, aprobar, firmar o supervisar un documento.",
    example: "Un especialista registra una solicitud; otro la deriva; un tercero la atiende y elabora la respuesta.",
    keyQuestion: "¿Quién interviene y qué puede hacer?",
  },
  {
    id: "documentos",
    label: "Documentos",
    icon: "FileText",
    definition: "Objetos documentales identificados, con contenido, contexto y metadatos, vinculados a un proceso institucional.",
    purpose: "Ser la unidad mínima de información que el sistema crea, registra, tramita y conserva.",
    example: "Un memorando, un informe o una resolución, cada uno con su propia identificación y estado.",
    keyQuestion: "¿Qué información se gestiona y en qué contexto?",
  },
  {
    id: "expedientes",
    label: "Expedientes",
    icon: "FolderOpen",
    definition: "Agrupación estructurada de documentos relacionados con un mismo asunto, procedimiento o actuación.",
    purpose: "Mantener la relación contextual entre documentos que, por separado, perderían parte de su sentido.",
    example: "Un expediente de transferencia documental que agrupa solicitud, informe y resolución.",
    keyQuestion: "¿Qué documentos pertenecen a un mismo asunto?",
  },
  {
    id: "metadatos",
    label: "Metadatos",
    icon: "Tags",
    definition: "Datos que describen el contexto, contenido y gestión de un documento a lo largo del tiempo.",
    purpose: "Permitir identificar, buscar y comprender un documento incluso fuera de su expediente original.",
    example: "Número, fecha, asunto, productor, destinatario y tipo documental de un oficio.",
    keyQuestion: "¿Qué información describe y contextualiza al documento?",
  },
  {
    id: "procesos",
    label: "Procesos",
    icon: "Workflow",
    definition: "Secuencia de pasos institucionales por los que atraviesa un documento desde su origen hasta su archivo.",
    purpose: "Ordenar y dar seguimiento al trámite documental dentro de la institución.",
    example: "Recepción, registro, derivación, atención, elaboración, firma, notificación y archivo.",
    keyQuestion: "¿Por qué proceso institucional pasa este documento?",
  },
  {
    id: "trazabilidad",
    label: "Trazabilidad",
    icon: "Route",
    definition: "Capacidad de reconstruir las acciones y estados relevantes ocurridos durante la gestión de un documento.",
    purpose: "Sustentar el seguimiento, la rendición de cuentas y la reconstrucción del contexto de gestión.",
    example: "Saber quién registró, derivó, atendió y firmó un documento, y cuándo ocurrió cada acción.",
    keyQuestion: "¿Qué ocurrió con este documento y quién intervino?",
  },
];

export const userChain: FlowStep[] = [
  { id: "usuario", label: "Usuario" },
  { id: "rol", label: "Rol" },
  { id: "permiso", label: "Permiso" },
  { id: "accion", label: "Acción" },
];

export const userActions = ["Registrar", "Consultar", "Derivar", "Atender", "Elaborar", "Aprobar", "Firmar", "Supervisar"];

export const documentElements = ["Contenido", "Identificación", "Contexto", "Metadatos", "Relaciones", "Estado"];
export const documentExamples = ["Memorando", "Informe", "Oficio", "Solicitud", "Resolución", "Proveído", "Notificación"];

export const recordsDocs: AnimatedFolderDoc[] = [
  { id: "solicitud", title: "Solicitud", icon: "FileText" },
  { id: "memorando", title: "Memorando", icon: "FileText" },
  { id: "informe", title: "Informe", icon: "FileSearch" },
  { id: "proveido", title: "Proveído", icon: "ClipboardList" },
  { id: "resolucion", title: "Resolución", icon: "Stamp" },
  { id: "notificacion", title: "Notificación", icon: "BellRing" },
];

export const metadataExamples = ["Número", "Fecha", "Asunto", "Productor", "Destinatario", "Tipo documental", "Expediente", "Estado", "Usuario"];
export const metadataQuestion = "¿Qué pasaría si solo conservamos el PDF y perdemos la información que lo contextualiza?";
export const metadataAnswer =
  "El archivo seguiría siendo legible, pero dejaría de ser gestionable archivísticamente: no sabríamos quién lo produjo, a qué expediente pertenece, en qué estado se encuentra ni qué relación tiene con otros documentos.";

export const processesFlow: FlowStep[] = [
  { id: "recepcion", label: "Recepción" },
  { id: "registro", label: "Registro" },
  { id: "derivacion", label: "Derivación" },
  { id: "atencion", label: "Atención" },
  { id: "elaboracion", label: "Elaboración" },
  { id: "firma", label: "Firma" },
  { id: "notificacion", label: "Notificación" },
  { id: "archivo", label: "Archivo" },
];

export const traceEvents: TraceEvent[] = [
  { id: "creado", label: "Documento creado", icon: "FilePlus", user: "Área usuaria", date: "Día 1", time: "Mañana", action: "Creación del documento", status: "En elaboración", origin: "—", destination: "Trámite documentario" },
  { id: "registrado", label: "Registrado", icon: "ClipboardList", user: "Trámite documentario", date: "Día 1", time: "Mañana", action: "Asignación de número y metadatos", status: "Registrado", origin: "Área usuaria", destination: "Área competente" },
  { id: "derivado", label: "Derivado", icon: "ArrowRightLeft", user: "Trámite documentario", date: "Día 1", time: "Tarde", action: "Derivación a la unidad competente", status: "Derivado", origin: "Trámite documentario", destination: "Área competente" },
  { id: "recibido", label: "Recibido", icon: "Inbox", user: "Área competente", date: "Día 2", time: "Mañana", action: "Recepción del documento derivado", status: "Recibido", origin: "Trámite documentario", destination: "Área competente" },
  { id: "atendido", label: "Atendido", icon: "FileSearch", user: "Especialista", date: "Día 2", time: "Tarde", action: "Elaboración de la respuesta", status: "En atención", origin: "Área competente", destination: "Área competente" },
  { id: "firmado", label: "Firmado", icon: "FileSignature", user: "Responsable", date: "Día 3", time: "Mañana", action: "Firma del documento de respuesta", status: "Firmado", origin: "Área competente", destination: "Trámite documentario" },
  { id: "notificado", label: "Notificado", icon: "BellRing", user: "Trámite documentario", date: "Día 3", time: "Tarde", action: "Notificación al interesado", status: "Notificado", origin: "Trámite documentario", destination: "Administrado" },
  { id: "archivado", label: "Archivado", icon: "Archive", user: "Responsable de archivo", date: "Día 3", time: "Tarde", action: "Incorporación al expediente y archivo", status: "Archivado", origin: "Trámite documentario", destination: "Archivo de gestión" },
];

export const architectureBlocks: ArchitectureBlock[] = [
  { id: "usuarios", label: "Usuarios", icon: "KeyRound", description: "Personas que acceden al sistema según su rol institucional.", row: 0 },
  { id: "interfaz", label: "Interfaz del SGD", icon: "LayoutGrid", description: "Capa de interacción mediante la cual los usuarios registran, consultan y tramitan documentos.", row: 1 },
  { id: "logica", label: "Lógica de negocio", icon: "Workflow", description: "Reglas que determinan cómo se registran, derivan, clasifican y controlan documentos y expedientes.", row: 2 },
  { id: "documentos", label: "Documentos", icon: "FileText", description: "Objetos documentales gestionados por el sistema.", row: 3 },
  { id: "expedientes", label: "Expedientes", icon: "FolderOpen", description: "Agrupaciones de documentos relacionados con un mismo asunto.", row: 3 },
  { id: "metadatos", label: "Metadatos", icon: "Tags", description: "Información que describe y contextualiza documentos y expedientes.", row: 3 },
  { id: "trazabilidad", label: "Trazabilidad", icon: "Route", description: "Registro de las acciones y estados relevantes ocurridos durante la gestión.", row: 4 },
  { id: "repositorio", label: "Repositorio", icon: "Database", description: "Almacenamiento donde residen documentos, expedientes y sus metadatos.", row: 5 },
  { id: "integraciones", label: "Integraciones / Servicios", icon: "ArrowRightLeft", description: "Conexiones con otros sistemas y servicios institucionales.", row: 6 },
];

export const agnConceptualFlow: FlowStep[] = [
  { id: "documento", label: "Documento" },
  { id: "registro", label: "Registro" },
  { id: "expediente", label: "Expediente" },
  { id: "derivacion", label: "Derivación" },
  { id: "atencion", label: "Atención" },
  { id: "respuesta", label: "Documento de respuesta" },
  { id: "firma", label: "Firma" },
  { id: "notificacion", label: "Notificación" },
  { id: "archivo", label: "Archivo" },
];

export const agnDocumentCaseDocs: AnimatedFolderDoc[] = [
  { id: "memorando", title: "Memorando", icon: "FileText" },
  { id: "informe-tecnico", title: "Informe Técnico", icon: "FileSearch" },
  { id: "proveido", title: "Proveído", icon: "ClipboardList" },
  { id: "resolucion", title: "Resolución", icon: "Stamp" },
  { id: "notificacion", title: "Notificación", icon: "BellRing" },
];

export const lifecycleSteps: TimelineStep[] = [
  { id: "produccion", period: "Origen", title: "Producción", description: "El documento se genera dentro de una actividad institucional.", icon: "FilePlus" },
  { id: "captura", period: "Origen", title: "Captura", description: "El documento se incorpora formalmente al sistema.", icon: "Inbox" },
  { id: "registro", period: "Trámite", title: "Registro", description: "Se asigna identificación y metadatos mínimos de ingreso.", icon: "ClipboardList" },
  { id: "tramite", period: "Trámite", title: "Trámite", description: "El documento circula por el proceso institucional correspondiente.", icon: "Workflow" },
  { id: "consulta", period: "Uso", title: "Consulta / Uso", description: "El documento es consultado por quienes lo requieren para sus funciones.", icon: "FileSearch" },
  { id: "archivo", period: "Conservación", title: "Archivo", description: "El documento se conserva una vez concluido su trámite.", icon: "Archive" },
  { id: "transferencia", period: "Conservación", title: "Transferencia", description: "El documento se traslada de forma controlada entre archivos.", icon: "ArrowRightLeft" },
  { id: "disposicion", period: "Destino final", title: "Disposición / Preservación", description: "Se define su eliminación o conservación permanente, con preservación si corresponde.", icon: "ShieldCheck" },
];

export const integralFlowSteps: FlowStep[] = [
  { id: "usuario", label: "Usuario" },
  { id: "documento", label: "Documento" },
  { id: "registro", label: "Registro" },
  { id: "expediente", label: "Expediente" },
  { id: "proceso", label: "Proceso" },
  { id: "derivacion", label: "Derivación" },
  { id: "atencion", label: "Atención" },
  { id: "firma", label: "Firma" },
  { id: "notificacion", label: "Notificación" },
  { id: "archivo", label: "Archivo" },
];

export const integralFlowCompanions: { id: string; label: string; icon: string }[] = [
  { id: "metadatos", label: "Metadatos", icon: "Tags" },
  { id: "trazabilidad", label: "Trazabilidad", icon: "Route" },
  { id: "usuario", label: "Usuario", icon: "KeyRound" },
  { id: "estado", label: "Estado", icon: "Activity" },
];

export const documentAloneNodes: ConceptMapNode[] = [
  { id: "contexto", label: "Contexto", icon: "Link2" },
  { id: "metadatos", label: "Metadatos", icon: "Tags" },
  { id: "expediente", label: "Expediente", icon: "FolderOpen" },
  { id: "proceso", label: "Proceso", icon: "Workflow" },
  { id: "usuario", label: "Usuario", icon: "KeyRound" },
  { id: "estado", label: "Estado", icon: "Activity" },
  { id: "trazabilidad", label: "Trazabilidad", icon: "Route" },
];

export const conceptMapNodes: ConceptMapNode[] = [
  { id: "usuarios", label: "Usuarios", icon: "KeyRound" },
  { id: "documentos", label: "Documentos", icon: "FileText" },
  { id: "expedientes", label: "Expedientes", icon: "FolderOpen" },
  { id: "metadatos", label: "Metadatos", icon: "Tags" },
  { id: "procesos", label: "Procesos", icon: "Workflow" },
  { id: "trazabilidad", label: "Trazabilidad", icon: "Route" },
];

export const weekConnectionFromWeek1 = {
  currentQuestion: "¿Qué gestionamos?",
  currentAnswers: ["Documentos", "Expedientes", "Contexto"],
  nextQuestion: "¿Dónde y cómo los gestionamos?",
  nextTitle: "Sistema de Gestión Documental",
};

export const weekConnectionToWeek3 = {
  currentQuestion: "¿Cómo funciona el SGD?",
  nextQuestion: "¿Qué procesos ejecuta?",
  nextAnswers: ["Recepción", "Registro", "Emisión", "Despacho", "Archivo", "Gestión de expedientes", "Clasificación", "Organización", "Descripción"],
};

export const keyIdeas: SummaryPoint[] = [
  { id: "k1", title: "01", description: "Un SGD no es simplemente un repositorio de archivos.", icon: "DatabaseZap" },
  { id: "k2", title: "02", description: "El documento debe gestionarse dentro de su contexto.", icon: "Link2" },
  { id: "k3", title: "03", description: "Los expedientes permiten relacionar documentos vinculados.", icon: "FolderOpen" },
  { id: "k4", title: "04", description: "Los procesos determinan cómo se gestionan los documentos.", icon: "Workflow" },
  { id: "k5", title: "05", description: "La trazabilidad permite reconstruir las acciones relevantes realizadas durante la gestión.", icon: "Route" },
];
