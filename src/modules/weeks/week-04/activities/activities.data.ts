import type { ConceptCandidate, DynamicColumn, FieldCriterion } from "./activities.types";

/* ---------- Actividad 1 — Detecta los metadatos ---------- */

export const activity1SampleDocument = `MEMORANDO N.º M-2026-041

TÍTULO: Solicitud de digitalización de expedientes archivados
FECHA: 10 de marzo de 2026
DE: Unidad de Archivo Central
PARA: Unidad de Tecnologías de la Información
ASUNTO: Digitalización de expedientes del periodo 2018-2020
CÓDIGO: MEM-2026-041
REFERENCIA: Oficio N.º 034-2026

Se solicita coordinar la digitalización de los expedientes archivados correspondientes
al periodo 2018-2020, a fin de facilitar su consulta y preservación, considerando el
deterioro observado en los soportes físicos durante la última inspección del depósito.`;

export const activity1Candidates: ConceptCandidate[] = [
  { id: "titulo", label: "Título", keywords: ["titulo"] },
  { id: "fecha", label: "Fecha", keywords: ["fecha"] },
  { id: "productor", label: "Productor / remitente (DE)", keywords: ["productor", "remitente", "de:", " de "] },
  { id: "destinatario", label: "Destinatario (PARA)", keywords: ["destinatario", "para"] },
  { id: "asunto", label: "Asunto", keywords: ["asunto"] },
  { id: "codigo", label: "Código / identificador", keywords: ["codigo", "identificador", "numero"] },
  { id: "referencia", label: "Referencia", keywords: ["referencia"] },
  { id: "tipo", label: "Tipo documental (memorando)", keywords: ["tipo documental", "memorando"] },
];

/* ---------- Actividad 2 — Completa la ficha (PDF) ---------- */

export const activity2PdfUrl = "/informe-tecnico-actividad2.pdf";

export const activity2Fields: FieldCriterion[] = [
  {
    id: "titulo",
    label: "Título",
    placeholder: "¿Sobre qué trata el informe?",
    keywordGroups: [["evaluacion"], ["organizacion", "descripcion"], ["documentos electronicos"]],
    criterionText: "Evaluación de la organización y descripción de documentos electrónicos en el archivo de gestión.",
    explanation: "El título permite identificar de qué trata el documento sin necesidad de leerlo por completo.",
  },
  {
    id: "codigo",
    label: "Código / identificador",
    placeholder: "N.º del informe",
    keywordGroups: [["it-2026-015", "it 2026 015", "2026-015", "015"]],
    criterionText: "IT-2026-015",
    explanation: "El código identifica de forma única al documento dentro del sistema, distinguiéndolo de otros similares.",
  },
  {
    id: "fecha",
    label: "Fecha",
    placeholder: "Fecha del informe",
    keywordGroups: [["15 de agosto", "15/08/2026", "agosto 2026", "15-08-2026", "15 agosto"]],
    criterionText: "15 de agosto de 2026",
    explanation: "La fecha sitúa al documento en el tiempo y permite establecer su relación con otros hechos o documentos.",
  },
  {
    id: "autor",
    label: "Autor / responsable",
    placeholder: "¿Quién lo elaboró?",
    keywordGroups: [["mariana"], ["cardenas", "cárdenas"]],
    criterionText: "Mariana Elizabeth Cárdenas Ruiz",
    explanation: "El autor permite atribuir el documento a una persona identificable, sustento de su autenticidad.",
  },
  {
    id: "unidad",
    label: "Unidad responsable",
    placeholder: "¿Qué unidad lo produjo?",
    keywordGroups: [["gestion documental"]],
    criterionText: "Unidad de Gestión Documental",
    explanation: "La unidad productora aporta contexto institucional: en qué función y estructura se originó el documento.",
  },
  {
    id: "tipo",
    label: "Tipo documental",
    placeholder: "¿Qué clase de documento es?",
    keywordGroups: [["informe tecnico", "informe"]],
    criterionText: "Informe técnico",
    explanation: "El tipo documental ubica al documento dentro de una tipología reconocida, con reglas y usos propios.",
  },
  {
    id: "asunto",
    label: "Asunto",
    placeholder: "¿Cuál es el tema puntual?",
    keywordGroups: [["evaluacion"], ["organizacion", "descripcion"]],
    criterionText: "Evaluación de la organización y descripción de documentos electrónicos en el archivo de gestión.",
    explanation: "El asunto resume el contenido concreto y ayuda a diferenciar documentos de un mismo tipo entre sí.",
  },
  {
    id: "destinatario",
    label: "Destinatario",
    placeholder: "¿A quién se dirige?",
    keywordGroups: [["tramite documentario"], ["jefatura"]],
    criterionText: "Jefatura de la Unidad de Trámite Documentario",
    explanation: "El destinatario indica hacia dónde se dirige el documento dentro del flujo institucional.",
  },
  {
    id: "referencia",
    label: "Referencia",
    placeholder: "¿Qué documento originó este informe?",
    keywordGroups: [["memorando"], ["078", "m-2026-078"]],
    criterionText: "Memorando N.º M-2026-078",
    explanation: "La referencia vincula el documento con el trámite o comunicación que le dio origen.",
  },
  {
    id: "estado",
    label: "Estado del documento",
    placeholder: "¿En qué situación se encuentra?",
    keywordGroups: [["aprobado"]],
    criterionText: "Aprobado",
    explanation: "El estado permite dar seguimiento al documento dentro de su ciclo de trámite.",
  },
  {
    id: "acceso",
    label: "Nivel de acceso",
    placeholder: "¿Es de acceso público, interno...?",
    keywordGroups: [["uso interno", "interno"]],
    criterionText: "Uso interno",
    explanation: "El nivel de acceso regula quién puede consultar el documento, equilibrando transparencia y confidencialidad.",
  },
  {
    id: "observaciones",
    label: "Observaciones / contexto",
    placeholder: "Resume brevemente el contexto del informe",
    keywordGroups: [["revision interna", "observaciones"], ["evaluacion tecnica", "solicito", "solicitud"]],
    criterionText: "Informe elaborado a solicitud de la Unidad de Trámite Documentario, a partir de una revisión interna que evidenció problemas de organización y descripción documental.",
    explanation: "El contexto explica por qué existe el documento y qué actividad institucional lo originó — información que rara vez está en un solo campo, pero que el resto de metadatos permite reconstruir.",
  },
];

export const activity2JustifyPrompts = [
  "Justifica el primer metadato que propusiste: ¿por qué es relevante para gestionar este informe?",
  "Justifica el segundo metadato que propusiste.",
  "Justifica el tercer metadato que propusiste.",
];

export const activity2ReflectionIntro =
  "Ahora relaciona los metadatos que identificaste con su importancia para la gestión de documentos electrónicos.";

export const activity2ReflectionPrompts = [
  "¿Qué podría ocurrir si este informe se incorpora a un sistema de gestión documental sin registrar correctamente sus metadatos?",
  "¿Cuál de los 12 metadatos consideras más importante para identificar este documento y por qué?",
];

/* ---------- Actividad 3 — ¿Qué metadato falta? ---------- */

export const activity3IncompleteSheet = [
  { field: "Título", value: "Informe técnico sobre gestión documental" },
  { field: "Fecha", value: "12/08/2026" },
  { field: "Tipo documental", value: "Informe técnico" },
  { field: "Asunto", value: "Gestión de documentos electrónicos" },
];

export const activity3MissingCandidates: ConceptCandidate[] = [
  { id: "autor", label: "Autor / productor", keywords: ["autor", "productor", "responsable", "unidad"] },
  { id: "codigo", label: "Código / identificador", keywords: ["codigo", "identificador", "numero"] },
  { id: "expediente", label: "Expediente relacionado", keywords: ["expediente"] },
  { id: "estado", label: "Estado del documento", keywords: ["estado"] },
  { id: "destinatario", label: "Destinatario", keywords: ["destinatario", "dirigido"] },
];

/* ---------- Actividad 4 — Clasifica el metadato ---------- */

export const activity4Categories = [
  { id: "identificacion", label: "Identificación", icon: "FileSignature" },
  { id: "descripcion", label: "Descripción", icon: "FileSearch" },
  { id: "gestion", label: "Gestión", icon: "ClipboardList" },
  { id: "contexto", label: "Contexto", icon: "Link2" },
  { id: "preservacion", label: "Preservación", icon: "ShieldCheck" },
] as const;

export type Activity4CategoryId = (typeof activity4Categories)[number]["id"];

export const activity4Items: { id: string; label: string; icon: string; category: Activity4CategoryId }[] = [
  { id: "identificador", label: "Identificador único", icon: "FileSignature", category: "identificacion" },
  { id: "titulo", label: "Título", icon: "FileText", category: "descripcion" },
  { id: "asunto", label: "Asunto", icon: "FileSearch", category: "descripcion" },
  { id: "tipo", label: "Tipo documental", icon: "FileType", category: "descripcion" },
  { id: "productor", label: "Productor / autor", icon: "KeyRound", category: "contexto" },
  { id: "unidad", label: "Unidad orgánica productora", icon: "Database", category: "contexto" },
  { id: "expediente", label: "Relación con expediente", icon: "FolderOpen", category: "contexto" },
  { id: "estado-tramite", label: "Estado del trámite", icon: "Activity", category: "gestion" },
  { id: "responsable", label: "Usuario responsable", icon: "ClipboardList", category: "gestion" },
  { id: "acceso", label: "Nivel de acceso", icon: "KeyRound", category: "gestion" },
  { id: "formato", label: "Formato del archivo", icon: "FileType", category: "preservacion" },
  { id: "evento", label: "Evento de migración / conservación", icon: "ShieldCheck", category: "preservacion" },
];

/* ---------- Actividad 5 — Construye los metadatos ---------- */

export const activity5DocumentBrief =
  "Una unidad orgánica ha elaborado un comunicado interno breve, dirigido a todo el personal, anunciando el cambio de horario de atención al público a partir del próximo mes.";

export const activity5Columns: DynamicColumn[] = [
  { key: "campo", label: "Campo", placeholder: "p. ej. Fecha de emisión" },
  { key: "valor", label: "Valor", placeholder: "p. ej. 01/09/2026" },
];

export const activity5MinFields = 5;

/* ---------- Actividad 6 — Corrige la ficha ---------- */

export const activity6InitialSheet = [
  { id: "titulo", field: "Título", value: "Documento nuevo" },
  { id: "autor", field: "Autor", value: "Juan" },
  { id: "fecha", field: "Fecha", value: "2026" },
  { id: "tipo", field: "Tipo", value: "Archivo" },
  { id: "codigo", field: "Código", value: "123" },
  { id: "asunto", field: "Asunto", value: "Varios" },
];

export const activity6KnownProblems = [
  "Información demasiado genérica",
  "Falta de precisión",
  "Identificador insuficiente",
  "Fecha incompleta",
  "Tipo documental poco específico",
  "Falta de contexto",
];

/* ---------- Actividad 7 — Documento y expediente ---------- */

export const activity7ExpedienteDocs = ["Solicitud", "Informe", "Memorando", "Resolución"];

export const activity7Categories = [
  { id: "expediente", label: "Expediente", icon: "FolderOpen" },
  { id: "documento", label: "Documento individual", icon: "FileText" },
] as const;

export type Activity7CategoryId = (typeof activity7Categories)[number]["id"];

export const activity7Items: { id: string; label: string; icon: string; category: Activity7CategoryId }[] = [
  { id: "num-expediente", label: "Número de expediente", icon: "FolderOpen", category: "expediente" },
  { id: "asunto-tramite", label: "Asunto del trámite", icon: "FileSearch", category: "expediente" },
  { id: "fecha-apertura", label: "Fecha de apertura del expediente", icon: "FolderOpen", category: "expediente" },
  { id: "unidad-tramite", label: "Unidad responsable del trámite", icon: "Database", category: "expediente" },
  { id: "id-documento", label: "Identificador de cada documento", icon: "FileSignature", category: "documento" },
  { id: "fecha-documento", label: "Fecha de cada documento", icon: "FileText", category: "documento" },
  { id: "autor-documento", label: "Autor de cada documento", icon: "KeyRound", category: "documento" },
  { id: "tipo-documento", label: "Tipo documental de cada pieza", icon: "FileType", category: "documento" },
  { id: "folio", label: "Folio / posición en el expediente", icon: "FolderTree", category: "documento" },
  { id: "estado-documento", label: "Estado de cada documento", icon: "Activity", category: "documento" },
];

/* ---------- Actividad 8 — Reconstruye la historia del documento ---------- */

export const activity8Flow = ["Creación", "Registro", "Tramitación", "Modificación", "Firma", "Derivación", "Archivo"];

export const activity8Candidates: ConceptCandidate[] = [
  { id: "fecha", label: "Fecha", keywords: ["fecha"] },
  { id: "usuario", label: "Usuario", keywords: ["usuario", "responsable", "quien"] },
  { id: "accion", label: "Acción realizada", keywords: ["accion", "evento"] },
  { id: "estado", label: "Estado", keywords: ["estado"] },
  { id: "unidad", label: "Unidad", keywords: ["unidad"] },
  { id: "identificador", label: "Identificador", keywords: ["identificador", "codigo"] },
  { id: "fecha-mod", label: "Fecha de modificación", keywords: ["modificacion", "actualizacion"] },
];

/* ---------- Actividad 9 — Decisión profesional ---------- */

export const activity9DocumentA = [
  { field: "Título", value: "Informe" },
  { field: "Fecha", value: "2026" },
  { field: "Autor", value: "Carlos" },
  { field: "Código", value: "15" },
];

export const activity9DocumentB = [
  { field: "Título", value: "Informe técnico de evaluación documental" },
  { field: "Fecha", value: "15/08/2026" },
  { field: "Autor", value: "Carlos Pérez" },
  { field: "Código", value: "IT-2026-015" },
  { field: "Unidad", value: "Gestión Documental" },
  { field: "Asunto", value: "Evaluación de documentos electrónicos" },
];

/* ---------- Actividad 10 — Diseña tu propia ficha ---------- */

export const activity10DocumentTypes = ["Memorando", "Oficio", "Acta", "Resolución", "Informe", "Solicitud", "Otro"];

export const activity10Columns: DynamicColumn[] = [
  { key: "campo", label: "Nombre del campo", placeholder: "p. ej. Fecha de vigencia" },
  { key: "valor", label: "Valor propuesto", placeholder: "p. ej. 01/01/2027" },
  { key: "justificacion", label: "Justificación", placeholder: "¿Por qué es necesario?" },
];

export const activity10MinFields = 8;

export const activity10ClosingQuestions = [
  "¿Por qué seleccionaste esos metadatos?",
  "¿Cuáles consideras indispensables?",
  "¿Cuál aporta mayor contexto al documento?",
  "¿Qué problema podría existir si ese metadato no se registra?",
];
