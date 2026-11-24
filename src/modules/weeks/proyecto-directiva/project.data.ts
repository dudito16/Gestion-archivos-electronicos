/**
 * Content shared by Semanas 16 and 17 — the project spans both weeks, so its schedule, responsible-AI
 * guidance and research-log structure are declared once here and rendered by each week.
 */

export const PROJECT_TITLE = "Diseño de una directiva institucional para la gestión y preservación digital";

export interface Milestone {
  id: string;
  label: string;
  week: 16 | 17;
  summary: string;
  presentar: string[];
  investigado: string[];
  revisaDocente: string[];
}

export const milestones: Milestone[] = [
  {
    id: "avance-1",
    label: "Avance 1",
    week: 16,
    summary: "Institución seleccionada, ficha institucional, inventario preliminar y delimitación del problema.",
    presentar: ["Institución o escenario aprobado por el docente", "Ficha de identificación institucional", "Inventario preliminar de tipos documentales digitales", "Problema delimitado en un párrafo"],
    investigado: ["Funciones y áreas de la institución", "Documentos electrónicos que produce o recibe", "Sistemas y formas actuales de almacenamiento"],
    revisaDocente: ["Pertinencia de la institución", "Fuentes oficiales o autorizadas", "Claridad y delimitación del problema"],
  },
  {
    id: "avance-2",
    label: "Avance 2",
    week: 16,
    summary: "Diagnóstico y matriz de mínimo cinco riesgos.",
    presentar: ["Diagnóstico institucional", "Matriz problema–causa–consecuencia–evidencia–medida con al menos cinco riesgos"],
    investigado: ["Condiciones reales de gestión y almacenamiento", "Evidencias que sustentan cada riesgo"],
    revisaDocente: ["Relación lógica entre causa y consecuencia", "Evidencia de cada riesgo", "Medidas investigadas, no genéricas"],
  },
  {
    id: "avance-3",
    label: "Avance 3",
    week: 16,
    summary: "Investigación técnica, sustento OAIS, PREMIS y repositorios digitales.",
    presentar: ["Aplicación de la preservación digital al caso", "Diagrama preliminar del flujo OAIS", "Ejemplo preliminar de evento PREMIS", "Fuentes verificadas y bitácora"],
    investigado: ["Preservación digital", "Modelo OAIS (ISO 14721)", "PREMIS", "Repositorios digitales confiables (ISO 16363:2025)", "Estándares complementarios pertinentes"],
    revisaDocente: ["Aplicación al caso (no definiciones copiadas)", "Coherencia del flujo SIP–AIP–DIP", "Verificación de fuentes"],
  },
  {
    id: "avance-4",
    label: "Avance 4",
    week: 17,
    summary: "Borrador de directiva institucional.",
    presentar: ["Borrador con los diez apartados de la directiva", "Responsabilidades y procedimientos iniciales"],
    investigado: ["Estructura de directivas institucionales", "Base normativa y técnica verificada"],
    revisaDocente: ["Correspondencia entre disposiciones y riesgos", "Aplicabilidad y claridad", "Referencias reales y consultadas"],
  },
  {
    id: "avance-5",
    label: "Avance 5",
    week: 17,
    summary: "Anexos técnicos y demostración.",
    presentar: ["Seis anexos técnicos", "Guion de la demostración con un documento de ejemplo"],
    investigado: ["Metadatos y eventos PREMIS aplicables", "Algoritmos y procedimiento de verificación de integridad"],
    revisaDocente: ["Coherencia entre anexos y directiva", "Viabilidad del plan de implementación", "Calidad de la demostración"],
  },
  {
    id: "entrega-final",
    label: "Entrega final",
    week: 17,
    summary: "Directiva, anexos, evidencias, bitácora y sustentación.",
    presentar: ["Documento final completo", "Bitácora de investigación y uso de IA", "Evidencias", "Sustentación ante el comité"],
    investigado: ["Todo el proceso documentado en la bitácora"],
    revisaDocente: ["Rúbrica de 20 puntos", "Dominio individual en la defensa"],
  },
];

export const aiAllowedUses = [
  "Organizar información",
  "Buscar ideas",
  "Elaborar borradores",
  "Comparar alternativas",
  "Revisar redacción",
  "Formular preguntas",
  "Apoyar la investigación",
];

export const aiObligations = [
  { id: "fuentes", label: "Verificar directamente las fuentes", detail: "Abrir y leer el documento original antes de citarlo." },
  { id: "referencias", label: "No inventar referencias", detail: "Una referencia sugerida por IA no existe hasta que el equipo la encuentra y la consulta." },
  { id: "contrastar", label: "Contrastar las respuestas", detail: "Comparar con la norma, el estándar o el material del curso." },
  { id: "registrar", label: "Registrar el uso de IA", detail: "Anotarlo en la bitácora: qué se pidió y qué se obtuvo." },
  { id: "modificaron", label: "Explicar qué modificaron", detail: "Indicar qué se aceptó, qué se corrigió y qué se descartó." },
  { id: "justificar", label: "Justificar las decisiones", detail: "Toda decisión debe responder al diagnóstico de la institución." },
  { id: "dominio", label: "Demostrar dominio individual", detail: "Cada integrante debe poder explicar cualquier parte del trabajo." },
];

export const aiForbiddenInputs = [
  "Documentos confidenciales",
  "Datos personales",
  "Expedientes reservados",
  "Credenciales o contraseñas",
  "Información institucional protegida",
];

export const logFields = [
  { key: "fecha", label: "Fecha" },
  { key: "actividad", label: "Actividad" },
  { key: "fuente", label: "Fuente o herramienta utilizada" },
  { key: "aporte", label: "Aporte obtenido" },
  { key: "verificacion", label: "Verificación" },
  { key: "decision", label: "Decisión del equipo" },
  { key: "responsable", label: "Responsable" },
] as const;

export type LogFieldKey = (typeof logFields)[number]["key"];
