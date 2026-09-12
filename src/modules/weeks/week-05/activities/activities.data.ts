import type { RequirementId } from "../week05.types";

/** Static content for the Week 5 workshop ("Taller ISO 15489-1:2016") — 10 formative, non-graded activities. */

// ---------------------------------------------------------------------------
// Actividad 1 — "¿Qué hace que un documento sea evidencia?"
// ---------------------------------------------------------------------------

export const activity1Case =
  "Una institución recibe un documento electrónico relacionado con un trámite administrativo. El documento contiene información relevante, pero no existe claridad sobre quién lo creó, cuándo fue creado, si posteriormente fue modificado, cuál era su contexto, ni cómo fue incorporado al sistema.";

export const activity1Aspects: { id: string; label: string; icon: string; belongs: boolean }[] = [
  { id: "autoria", label: "Identificar con claridad quién creó o produjo el documento", icon: "ShieldCheck", belongs: true },
  { id: "fecha", label: "Registrar la fecha en que fue creado e incorporado al sistema", icon: "ClipboardList", belongs: true },
  { id: "contexto", label: "Vincular el documento con el trámite o actividad que lo originó", icon: "Workflow", belongs: true },
  { id: "cambios", label: "Dejar constancia de si el documento fue modificado después de creado", icon: "KeyRound", belongs: true },
  { id: "responsable", label: "Registrar la unidad o área responsable de su gestión", icon: "FolderOpen", belongs: true },
  { id: "diseno", label: "Que el documento tenga un diseño visual atractivo", icon: "Image", belongs: false },
  { id: "peso", label: "Que el archivo ocupe poco espacio en disco", icon: "FileType", belongs: false },
];

// ---------------------------------------------------------------------------
// Actividad 2 — "Autenticidad, fiabilidad, integridad y disponibilidad"
// ---------------------------------------------------------------------------

export const activity2Categories: { id: RequirementId; label: string; icon: string }[] = [
  { id: "autenticidad", label: "Autenticidad", icon: "ShieldCheck" },
  { id: "fiabilidad", label: "Fiabilidad", icon: "Scale" },
  { id: "integridad", label: "Integridad", icon: "KeyRound" },
  { id: "disponibilidad", label: "Disponibilidad", icon: "FolderOpen" },
];

export const activity2Cases: { id: string; label: string; text: string; icon: string; category: RequirementId }[] = [
  { id: "caso-a", label: "Caso A", text: "No se puede determinar quién generó el documento.", icon: "HelpCircle", category: "autenticidad" },
  { id: "caso-b", label: "Caso B", text: "El documento representa de manera confiable la actividad que registra.", icon: "Scale", category: "fiabilidad" },
  { id: "caso-c", label: "Caso C", text: "El contenido fue alterado sin quedar evidencia de la modificación.", icon: "KeyRound", category: "integridad" },
  { id: "caso-d", label: "Caso D", text: "El documento existe, pero los usuarios autorizados no pueden recuperarlo.", icon: "FolderOpen", category: "disponibilidad" },
];

// ---------------------------------------------------------------------------
// Actividad 3 — "Detecta los riesgos"
// ---------------------------------------------------------------------------

export const activity3Case =
  "Una oficina guarda documentos electrónicos únicamente en carpetas compartidas. Los archivos tienen nombres genéricos, no existe un procedimiento uniforme de registro y algunos documentos son modificados sin dejar constancia.";

export const activity3Risks: { id: string; label: string; icon: string; belongs: boolean }[] = [
  { id: "sin-registro", label: "No existe un asiento de registro que identifique cada documento", icon: "ClipboardList", belongs: true },
  { id: "sin-autoria", label: "Es difícil establecer quién produjo cada documento", icon: "ShieldCheck", belongs: true },
  { id: "sin-cambios", label: "Los cambios ocurren sin dejar evidencia de quién ni cuándo los hizo", icon: "KeyRound", belongs: true },
  { id: "dificil-ubicar", label: "Los documentos son difíciles de ubicar o distinguir entre sí", icon: "FolderOpen", belongs: true },
  { id: "colores", label: "Las carpetas no siguen un mismo esquema de colores", icon: "Image", belongs: false },
  { id: "espacio", label: "Las carpetas compartidas ocupan demasiado espacio en el servidor", icon: "FileType", belongs: false },
];

// ---------------------------------------------------------------------------
// Actividad 4 — "Captura o no captura"
// ---------------------------------------------------------------------------

export const activity4Items: { id: string; label: string; icon: string }[] = [
  { id: "mesa-partes", label: "Documento recibido por mesa de partes", icon: "Inbox" },
  { id: "borrador", label: "Borrador personal que nunca se incorporó al trámite", icon: "FileText" },
  { id: "informe-final", label: "Informe final utilizado para sustentar una decisión", icon: "ClipboardList" },
  { id: "expediente", label: "Documento que forma parte de un expediente", icon: "FolderOpen" },
  { id: "nota-personal", label: "Nota personal sin valor para la actividad institucional", icon: "FileX" },
];

// ---------------------------------------------------------------------------
// Actividad 5 — "Construye el registro documental"
// ---------------------------------------------------------------------------

export const activity5Document =
  "Documento electrónico: Oficio N.° 0452-2026, remitido por la Oficina de Administración a la Oficina de Logística el 10 de septiembre de 2026, con asunto \"Solicitud de adquisición de equipos de cómputo\", en el marco del trámite de renovación de equipos del área.";

export interface RegistrationField {
  key: string;
  label: string;
  placeholder: string;
}

export const activity5Fields: RegistrationField[] = [
  { key: "identificador", label: "Identificador", placeholder: "p. ej. OFI-0452-2026" },
  { key: "titulo", label: "Título", placeholder: "Denominación del documento" },
  { key: "fecha", label: "Fecha", placeholder: "dd/mm/aaaa" },
  { key: "productor", label: "Productor / autor", placeholder: "Persona o unidad que lo produce" },
  { key: "unidad", label: "Unidad responsable", placeholder: "Área que gestiona el documento" },
  { key: "tipo", label: "Tipo documental", placeholder: "p. ej. Oficio, informe, memorando" },
  { key: "asunto", label: "Asunto", placeholder: "Materia del documento" },
  { key: "relacion", label: "Relación con actividad o trámite", placeholder: "¿A qué trámite pertenece?" },
  { key: "estado", label: "Estado", placeholder: "p. ej. En trámite, atendido, archivado" },
  { key: "ubicacion", label: "Ubicación / referencia", placeholder: "Expediente o carpeta donde reside" },
];

// ---------------------------------------------------------------------------
// Actividad 6 — "Ordena el ciclo de gestión"
// ---------------------------------------------------------------------------

export const activity6Items: { id: string; label: string }[] = [
  { id: "creacion", label: "Creación / recepción" },
  { id: "captura", label: "Captura" },
  { id: "registro", label: "Registro" },
  { id: "tramitacion", label: "Tramitación / uso" },
  { id: "mantenimiento", label: "Mantenimiento" },
  { id: "control", label: "Control" },
  { id: "disposicion", label: "Archivo / disposición" },
];

export const activity6ReferenceOrder = ["creacion", "captura", "registro", "tramitacion", "mantenimiento", "control", "disposicion"];

// ---------------------------------------------------------------------------
// Actividad 7 — "Corrige un sistema documental deficiente"
// ---------------------------------------------------------------------------

export const activity7Case =
  "Una unidad administrativa almacena documentos electrónicos en computadoras personales. No existe una estructura uniforme. Los documentos se envían por correo, existen varias versiones y no hay claridad sobre cuál es la versión que debe utilizarse como evidencia.";

export const activity7Controls: { id: string; label: string; icon: string }[] = [
  { id: "reglas-captura", label: "Reglas de captura", icon: "Inbox" },
  { id: "registro", label: "Registro", icon: "ClipboardList" },
  { id: "identificacion", label: "Identificación", icon: "FileSearch" },
  { id: "versiones", label: "Control de versiones", icon: "GitCompareArrows" },
  { id: "responsabilidades", label: "Responsabilidades definidas", icon: "ShieldCheck" },
  { id: "metadatos", label: "Metadatos", icon: "Tags" },
  { id: "procedimientos", label: "Procedimientos documentados", icon: "Route" },
  { id: "acceso", label: "Acceso controlado", icon: "KeyRound" },
];

// ---------------------------------------------------------------------------
// Actividad 8 — "Analiza el flujo documental"
// ---------------------------------------------------------------------------

export interface FlowStageRow {
  id: string;
  label: string;
}

export const activity8Stages: FlowStageRow[] = [
  { id: "recepcion", label: "Recepción" },
  { id: "registro", label: "Registro" },
  { id: "revision", label: "Revisión" },
  { id: "derivacion", label: "Derivación" },
  { id: "atencion", label: "Atención" },
  { id: "respuesta", label: "Respuesta" },
  { id: "archivo", label: "Archivo" },
];

export const activity8MinStages = 5;

// ---------------------------------------------------------------------------
// Actividad 9 — "¿Qué atributo está en riesgo?"
// ---------------------------------------------------------------------------

export interface AttributeRiskCase {
  id: string;
  label: string;
  text: string;
  correct: RequirementId;
}

export const activity9Cases: AttributeRiskCase[] = [
  { id: "caso-a", label: "Caso A", text: "No se puede demostrar quién generó el documento.", correct: "autenticidad" },
  { id: "caso-b", label: "Caso B", text: "El documento fue modificado y no existe evidencia del cambio.", correct: "integridad" },
  { id: "caso-c", label: "Caso C", text: "El documento representa incorrectamente la actividad que supuestamente registra.", correct: "fiabilidad" },
  { id: "caso-d", label: "Caso D", text: "El documento existe, pero los usuarios autorizados no pueden localizarlo.", correct: "disponibilidad" },
];

export const activity9AttributeOptions: { id: RequirementId; label: string }[] = [
  { id: "autenticidad", label: "Autenticidad" },
  { id: "fiabilidad", label: "Fiabilidad" },
  { id: "integridad", label: "Integridad" },
  { id: "disponibilidad", label: "Disponibilidad" },
];

// ---------------------------------------------------------------------------
// Actividad 10 — "Caso integrador: diseña los controles"
// ---------------------------------------------------------------------------

export const activity10Scenario =
  "Una institución pública está implementando un sistema para gestionar documentos electrónicos. Durante el análisis inicial se detectó que: algunos documentos no se registran; existen varias versiones del mismo documento; no siempre se puede determinar quién realizó una modificación; algunos documentos son difíciles de localizar; no existe un procedimiento uniforme para la captura; los responsables del proceso no tienen claramente definidas sus funciones; algunos documentos carecen de información contextual.";

export const activity10ProblemSuggestions = [
  "Algunos documentos no se registran",
  "Existen varias versiones del mismo documento",
  "No se puede determinar quién realizó una modificación",
  "Algunos documentos son difíciles de localizar",
  "No existe un procedimiento uniforme para la captura",
  "Los responsables no tienen funciones claramente definidas",
  "Algunos documentos carecen de información contextual",
];

export const activity10MinRows = 5;
