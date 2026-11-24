import type { DeliverableItem, PhaseMeta } from "../proyecto-directiva/components";

/** Semana 17 — Elaboración, aplicación y sustentación de la directiva institucional de preservación digital. */

export const week17Phases: PhaseMeta[] = [
  { id: "fase-4", number: 4, title: "Diseño de la directiva institucional", anchor: "fase-4" },
  { id: "fase-5", number: 5, title: "Anexos técnicos y demostración", anchor: "fase-5" },
  { id: "fase-6", number: 6, title: "Revisión, comité evaluador y defensa individual", anchor: "fase-6" },
];

export const transitionFrom =
  "En la Semana 16, el equipo investigó la institución, identificó problemas, analizó riesgos y estudió los referentes técnicos.";
export const transitionTo =
  "En esta Semana 17, utilizará los resultados de la investigación para elaborar una propuesta de directiva institucional de preservación digital.";
export const transitionWarning =
  "No se trata de copiar una directiva existente. Se trata de construir una propuesta que responda a las necesidades identificadas y que pueda ser aplicable al contexto institucional.";

export const week16Recap = ["Ficha institucional", "Inventario", "Diagnóstico", "Matriz de riesgos", "Investigación técnica", "Diagrama OAIS preliminar", "Evento PREMIS preliminar", "Fuentes", "Bitácora"];

/* ---------------------------------------------------------------- Fase 4 */

export const phase4Purpose =
  "Convertir el diagnóstico y la investigación técnica en una directiva clara, aplicable y con responsabilidades y controles verificables.";

export interface DirectiveSection {
  id: string;
  number: string;
  title: string;
  explanation: string;
  redactar: string;
  preguntas: string[];
  ejemplo: string;
  items?: string[];
  warning?: string;
}

/** Each section: explanation · what to write · guiding questions · brief orientative example (never the full text). */
export const directiveSections: DirectiveSection[] = [
  {
    id: "finalidad",
    number: "4.1",
    title: "Finalidad",
    explanation: "Expresa por qué se necesita la directiva: el problema institucional que la origina.",
    redactar: "Un párrafo breve que vincule la directiva con el problema delimitado en la Fase 1 y los riesgos de la Fase 2.",
    preguntas: ["¿Qué problema institucional busca resolver?", "¿Por qué es necesario establecer reglas de preservación digital?"],
    ejemplo: "«Establecer reglas que permitan [efecto buscado] de los documentos electrónicos de [ámbito], ante [problema identificado]…»",
  },
  {
    id: "objetivo",
    number: "4.2",
    title: "Objetivo",
    explanation: "Define qué pretende alcanzar la directiva. Debe ser claro, institucional y verificable.",
    redactar: "Un objetivo general (y, si lo justifican, objetivos específicos) iniciado con un verbo de acción.",
    preguntas: ["¿Qué cambiará en la institución cuando la directiva se aplique?", "¿Cómo se sabría que el objetivo se cumplió?"],
    ejemplo: "«Normar el proceso de [acción] de [tipo de documentos] desde [origen] hasta [destino], asegurando [atributos]…»",
  },
  {
    id: "alcance",
    number: "4.3",
    title: "Alcance",
    explanation: "Determina a quién y a qué se aplica la directiva.",
    redactar: "La delimitación precisa del ámbito de aplicación.",
    preguntas: ["¿Qué áreas y unidades orgánicas están obligadas?", "¿Qué sistemas y documentos quedan comprendidos y cuáles no?"],
    ejemplo: "«Es de aplicación obligatoria para [unidades], respecto de [documentos] gestionados en [sistemas]…»",
    items: ["Áreas", "Unidades orgánicas", "Personal", "Sistemas", "Documentos", "Procesos"],
  },
  {
    id: "base-normativa",
    number: "4.4",
    title: "Base normativa y técnica",
    explanation: "Normas, estándares y documentos que sustentan la directiva.",
    redactar: "La lista de referentes efectivamente consultados, con datos que permitan ubicarlos.",
    preguntas: ["¿Cada referencia fue leída por el equipo?", "¿Es pertinente y está vigente?"],
    ejemplo: "Ejemplos de referentes trabajados en el curso: ISO 14721 (OAIS), ISO 16363:2025, PREMIS. Incluyan solo lo que consultaron.",
    warning: "Verifiquen directamente las fuentes. No inventen referencias ni citen documentos que no hayan consultado. Revisen su pertinencia y vigencia.",
  },
  {
    id: "definiciones",
    number: "4.5",
    title: "Definiciones",
    explanation: "Conceptos necesarios para aplicar la directiva sin ambigüedad.",
    redactar: "Solo los términos que la directiva usa, definidos con fuentes verificadas y en lenguaje comprensible para el personal.",
    preguntas: ["¿Qué términos podría interpretar mal un servidor de otra área?", "¿La definición coincide con la fuente citada?"],
    ejemplo: "«Integridad: [definición con fuente]…»",
    items: ["Preservación digital", "Repositorio", "OAIS", "SIP", "AIP", "DIP", "PREMIS", "Metadatos", "Integridad", "Migración"],
  },
  {
    id: "responsabilidades",
    number: "4.6",
    title: "Responsabilidades",
    explanation: "Quién debe hacer qué. Sin responsables, las disposiciones no se cumplen.",
    redactar: "Las responsabilidades de cada actor según la estructura real de su institución.",
    preguntas: ["¿Qué área ejecuta, cuál supervisa y cuál aprueba?", "¿Existe dependencia de una sola persona?"],
    ejemplo: "«El Área de Archivo es responsable de [actividad] y de conservar [registro] como evidencia…»",
    items: ["Alta dirección", "Área de Archivo", "Área de Tecnologías de la Información", "Áreas productoras", "Responsable del repositorio", "Usuarios autorizados"],
    warning: "No todas las instituciones tienen la misma estructura organizacional: adapten los actores a su caso.",
  },
  {
    id: "disposiciones-generales",
    number: "4.7",
    title: "Disposiciones generales",
    explanation: "Principios institucionales que orientan toda la directiva.",
    redactar: "Principios relacionados con los hallazgos de la investigación, no una lista genérica.",
    preguntas: ["¿Qué principio responde a cada riesgo prioritario?", "¿Cómo se traduce cada principio en una regla específica?"],
    ejemplo: "«Trazabilidad: toda acción sobre un documento en preservación debe quedar registrada…» (relaciónenlo con su diagnóstico).",
    items: ["Protección de documentos digitales", "Integridad", "Autenticidad", "Disponibilidad", "Seguridad", "Trazabilidad", "Responsabilidad", "Sostenibilidad"],
  },
  {
    id: "disposiciones-especificas",
    number: "4.8",
    title: "Disposiciones específicas",
    explanation: "Reglas y procedimientos concretos para cada etapa de la preservación.",
    redactar: "Reglas que respondan a los riesgos de la matriz, indicando condiciones y responsables.",
    preguntas: ["¿Cada riesgo de la Fase 2 tiene al menos una disposición que lo atienda?", "¿La regla es verificable?"],
    ejemplo: "«Antes de su ingreso al repositorio, todo paquete de transferencia deberá [control] y [registro]…»",
    items: [
      "Identificación de documentos",
      "Selección",
      "Preparación de transferencias",
      "Ingreso",
      "Validación",
      "Verificación de integridad",
      "Metadatos",
      "Almacenamiento",
      "Seguridad",
      "Control de acceso",
      "Copias de respaldo",
      "Recuperación",
      "Migración",
      "Normalización",
      "Consulta",
      "Difusión",
      "Monitoreo",
      "Seguimiento",
    ],
  },
  {
    id: "procedimientos",
    number: "4.9",
    title: "Procedimientos",
    explanation: "Las disposiciones deben ser aplicables: los procedimientos indican cómo se ejecutan.",
    redactar: "Procedimientos paso a paso para las disposiciones principales.",
    preguntas: ["¿Alguien ajeno al equipo podría ejecutar el procedimiento?", "¿Qué evidencia queda al terminar?"],
    ejemplo: "Vean el ejemplo didáctico de procedimiento más abajo: muestra la estructura, no la solución.",
    items: ["Responsable", "Actividad", "Orden de ejecución", "Condición o criterio", "Control", "Registro o evidencia"],
  },
  {
    id: "disposiciones-finales",
    number: "4.10",
    title: "Disposiciones complementarias y finales",
    explanation: "Cómo se implementa, se cumple, se revisa y se actualiza la directiva.",
    redactar: "Plazos de implementación, mecanismos de cumplimiento y periodicidad de revisión.",
    preguntas: ["¿Quién vigila el cumplimiento?", "¿Cada cuánto se revisará y actualizará la directiva?"],
    ejemplo: "«La directiva será revisada [periodicidad] por [responsable], o antes si [condición]…»",
    items: ["Implementación", "Cumplimiento", "Revisión", "Actualización", "Responsabilidades de seguimiento"],
  },
];

/** Didactic procedure — shows the structure only, for a deliberately generic activity. */
export const procedureExample = {
  title: "Ejemplo didáctico: recepción de una transferencia (estructura, no solución)",
  columns: ["N.°", "Responsable", "Actividad", "Condición o criterio", "Control", "Registro o evidencia"],
  rows: [
    ["1", "Área productora", "Prepara el paquete de transferencia", "Documentos seleccionados según…", "¿?", "¿?"],
    ["2", "¿?", "Recibe el paquete", "¿?", "Verifica que los valores de hash coincidan", "¿?"],
    ["3", "¿?", "¿?", "Si el control falla…", "¿?", "Registro del evento"],
  ],
};

/* ---------------------------------------------------------------- Fase 5 */

export const phase5Purpose =
  "Demostrar que la directiva puede aplicarse: los anexos traducen las disposiciones en flujos, matrices y procedimientos concretos.";

export interface Annex {
  id: string;
  number: number;
  title: string;
  icon: string;
  intro: string;
  include: string[];
  note?: string;
}

export const annexes: Annex[] = [
  {
    id: "anexo-1",
    number: 1,
    title: "Flujo de preservación digital",
    icon: "Workflow",
    intro: "Diagrama definitivo del flujo institucional (perfecciona el diagrama preliminar de la Semana 16).",
    include: ["Actividades", "Controles", "Responsables", "Puntos de validación", "Metadatos"],
    note: "No existe una arquitectura única: el flujo debe corresponder a su institución.",
  },
  {
    id: "anexo-2",
    number: 2,
    title: "Matriz de metadatos",
    icon: "Tags",
    intro: "Campos que se registrarán para cada documento en preservación, indicando su tipo y cuándo corresponden a PREMIS.",
    include: ["Identificador", "Nombre del archivo", "Tipo de archivo", "Fecha de creación", "Fecha de ingreso", "Formato", "Tamaño", "Hash", "Agente", "Evento", "Resultado del evento", "Derechos o restricciones"],
    note: "PREMIS no es una lista genérica de todos los metadatos del documento: describe objetos, eventos, agentes y derechos para la preservación. Los metadatos descriptivos (por ejemplo, Dublin Core) cumplen otra función.",
  },
  {
    id: "anexo-3",
    number: 3,
    title: "Procedimiento de verificación de integridad",
    icon: "Fingerprint",
    intro: "Cómo, cuándo y con qué evidencia se comprueba que un documento no cambió.",
    include: ["Algoritmo de hash propuesto", "Momento en que se calcula", "Dónde se registra", "Cuándo se verifica", "Qué ocurre cuando el valor cambia", "Qué evidencia se conserva"],
  },
  {
    id: "anexo-4",
    number: 4,
    title: "Matriz de riesgos y controles",
    icon: "ShieldAlert",
    intro: "Evoluciona la matriz de la Semana 16 hacia controles concretos con responsables.",
    include: ["Riesgo", "Causa", "Consecuencia", "Control", "Responsable", "Evidencia", "Frecuencia, cuando corresponda"],
  },
  {
    id: "anexo-5",
    number: 5,
    title: "Matriz de responsabilidades",
    icon: "Users",
    intro: "Quién ejecuta, quién supervisa y quién aprueba cada actividad de la directiva.",
    include: ["Actividad", "Responsable de ejecutar", "Responsable de supervisar", "Responsable de aprobar, si corresponde", "Evidencia"],
  },
  {
    id: "anexo-6",
    number: 6,
    title: "Plan de implementación",
    icon: "ListChecks",
    intro: "Cómo pasará la directiva del papel a la práctica, de forma realista para el contexto institucional.",
    include: ["Actividades", "Plazos", "Responsables", "Recursos", "Prioridades", "Indicadores"],
  },
];

export const metadataTypeHints = [
  { field: "Identificador", tipo: "Identificación / PREMIS (objeto)" },
  { field: "Hash", tipo: "Técnico / PREMIS (objeto: valor de fijación)" },
  { field: "Evento", tipo: "¿?" },
  { field: "Agente", tipo: "¿?" },
  { field: "Fecha de creación", tipo: "¿?" },
  { field: "Derechos o restricciones", tipo: "¿?" },
];

export const demoSteps = [
  { id: "demo-documento", label: "¿Qué documento seleccionó?" },
  { id: "demo-por-que", label: "¿Por qué requiere preservación?" },
  { id: "demo-transferencia", label: "¿Cómo sería recibido o transferido?" },
  { id: "demo-controles", label: "¿Qué controles aplicaría?" },
  { id: "demo-premis", label: "¿Qué información documentaría mediante PREMIS?" },
  { id: "demo-integridad", label: "¿Cómo verificaría su integridad?" },
  { id: "demo-conservacion", label: "¿Cómo se conservaría?" },
  { id: "demo-consulta", label: "¿Cómo podría consultarse?" },
];

/* ---------------------------------------------------------------- Fase 6 */

export const phase6Purpose =
  "Defender ante un comité evaluador que cada disposición propuesta responde a un problema identificado y que cada integrante domina la propuesta.";

export const defensePoints = [
  "Explicar el problema institucional.",
  "Justificar el diagnóstico.",
  "Defender sus riesgos prioritarios.",
  "Explicar la aplicación del modelo OAIS.",
  "Explicar cómo utilizaría PREMIS.",
  "Justificar los controles de integridad.",
  "Defender la arquitectura y los procedimientos propuestos.",
  "Explicar cómo se implementaría la directiva.",
];

export const defenseQuestions = [
  "¿Qué evidencia respalda el problema identificado?",
  "¿Por qué su institución necesita una directiva?",
  "¿Qué documentos deberían priorizarse?",
  "¿Cómo comprobarían la integridad de un documento?",
  "¿Qué controles aplicarían al recibir un SIP?",
  "¿Qué información debería conservar el AIP?",
  "¿Qué evento PREMIS documentaría una migración?",
  "¿Qué evidencias demostrarían que un repositorio es confiable?",
  "¿Qué harían si la institución no dispone de presupuesto suficiente?",
  "¿Qué disposición de su directiva es más importante y cómo verificarían su cumplimiento?",
];

export const peerQuestionStems = [
  "¿Qué evidencia demuestra que…?",
  "¿Qué ocurriría si el responsable de … no estuviera disponible?",
  "¿Cómo verificarían que la disposición … se cumple?",
  "¿Por qué eligieron … y no otra alternativa?",
  "¿Qué riesgo de su matriz no quedó atendido por ninguna disposición?",
  "¿Es realista el plazo propuesto para …?",
];

/* ---------------------------------------------------------------- Documento final */

export const finalDocumentStructure = [
  { id: "doc-caratula", label: "Carátula", detail: "Institución, título de la propuesta, integrantes, curso, docente y fecha." },
  { id: "doc-resumen", label: "Resumen ejecutivo", detail: "Problema, diagnóstico, propuesta y resultado esperado en una página." },
  { id: "doc-cap1", label: "Capítulo I: Identificación institucional", detail: "Ficha, inventario y flujo actual (Fase 1)." },
  { id: "doc-cap2", label: "Capítulo II: Diagnóstico y riesgos", detail: "Diagnóstico y matriz de riesgos (Fase 2)." },
  { id: "doc-cap3", label: "Capítulo III: Sustento técnico", detail: "Preservación digital, OAIS, PREMIS, repositorios y estándares (Fase 3)." },
  { id: "doc-cap4", label: "Capítulo IV: Directiva institucional", detail: "Los diez apartados de la directiva (Fase 4)." },
  { id: "doc-cap5", label: "Capítulo V: Anexos técnicos", detail: "Seis anexos y demostración (Fase 5)." },
  { id: "doc-conclusiones", label: "Conclusiones", detail: "Derivadas del diagnóstico y de la propuesta, no genéricas." },
  { id: "doc-recomendaciones", label: "Recomendaciones", detail: "Dirigidas a actores concretos de la institución." },
  { id: "doc-referencias", label: "Referencias", detail: "Solo fuentes efectivamente consultadas y verificadas." },
  { id: "doc-bitacora", label: "Bitácora de investigación", detail: "Transcripción de la bitácora de investigación y uso de IA." },
  { id: "doc-evidencias", label: "Evidencias y anexos complementarios", detail: "Fuentes, entrevistas, fichas y capturas autorizadas." },
];

/* ---------------------------------------------------------------- Rúbrica */

export const rubric = [
  { id: "r1", label: "Investigación institucional y fuentes", description: "Información sustentada, delimitación, evidencia y fuentes verificables.", points: 4 },
  { id: "r2", label: "Diagnóstico y riesgos", description: "Problemas, causas, consecuencias, evidencia y medidas.", points: 4 },
  { id: "r3", label: "Aplicación técnica", description: "Aplicación de preservación digital, OAIS, PREMIS y repositorios digitales.", points: 4 },
  { id: "r4", label: "Directiva institucional", description: "Claridad, aplicabilidad, responsabilidades y controles.", points: 4 },
  { id: "r5", label: "Anexos y demostración", description: "Diagramas, matrices, ejemplos y evidencias coherentes.", points: 2 },
  { id: "r6", label: "Sustentación y dominio individual", description: "Comprensión, argumentación y defensa de decisiones.", points: 2 },
];

export const RUBRIC_TOTAL = 20;

/* ---------------------------------------------------------------- Entrega final */

export const week17Deliverables: DeliverableItem[] = [
  { id: "s17-directiva", label: "Directiva con sus diez apartados", detail: "Fase 4" },
  { id: "s17-anexo1", label: "Anexo 1: flujo de preservación digital", detail: "Fase 5" },
  { id: "s17-anexo2", label: "Anexo 2: matriz de metadatos", detail: "Fase 5" },
  { id: "s17-anexo3", label: "Anexo 3: procedimiento de verificación de integridad", detail: "Fase 5" },
  { id: "s17-anexo4", label: "Anexo 4: matriz de riesgos y controles", detail: "Fase 5" },
  { id: "s17-anexo5", label: "Anexo 5: matriz de responsabilidades", detail: "Fase 5" },
  { id: "s17-anexo6", label: "Anexo 6: plan de implementación", detail: "Fase 5" },
  { id: "s17-demo", label: "Demostración con un documento de ejemplo", detail: "Fase 5" },
  { id: "s17-documento", label: "Documento final con la estructura completa", detail: "Documento final" },
  { id: "s17-bitacora", label: "Bitácora de investigación y uso de IA actualizada", detail: "Todas las fases" },
  { id: "s17-defensa", label: "Sustentación preparada por todos los integrantes", detail: "Fase 6" },
];
