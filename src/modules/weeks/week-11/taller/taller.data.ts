/** Content for Week 11's single "Diseño preliminar de una estrategia de preservación digital" workshop case. */

export const tallerDisclaimer = "CASO ACADÉMICO SIMULADO — Municipalidad Distrital de San Gabriel";

export const tallerScenario =
  "La Municipalidad Distrital de San Gabriel (caso académico simulado) conserva dos conjuntos de documentos electrónicos de valor permanente: (1) expedientes técnicos de obras públicas, producidos en un formato de hoja de cálculo propietario sin soporte vigente, con errores al abrirse; y (2) resoluciones de alcaldía digitalizadas hace más de 10 años, sin metadatos más allá del nombre del archivo. La institución no cuenta con una política de preservación digital aprobada ni con un responsable formalmente asignado.";

export const tallerRiskItems = [
  { id: "r1", label: "Obsolescencia del formato de hoja de cálculo de los expedientes técnicos", icon: "FileType", belongs: true },
  { id: "r2", label: "Pérdida de metadatos en las resoluciones digitalizadas", icon: "FileSearch", belongs: true },
  { id: "r3", label: "Ausencia de política y responsable formal de preservación", icon: "ClipboardList", belongs: true },
  { id: "r4", label: "El personal de mesa de partes no conoce el horario de atención", icon: "FileX", belongs: false },
];

export const tallerClassifyItems = [
  { id: "c1", label: "Un documento recién emitido no se deriva al área competente a tiempo", icon: "Inbox", category: "sgd" },
  { id: "c2", label: "Los expedientes técnicos ya no abren correctamente por la obsolescencia del formato", icon: "FileType", category: "preservacion" },
  { id: "c3", label: "No existe un responsable institucional de la preservación a largo plazo", icon: "ClipboardList", category: "preservacion" },
  { id: "c4", label: "Un trámite se registra con el tipo documental incorrecto", icon: "FileSignature", category: "sgd" },
];

export const tallerClassifyCategories = [
  { id: "sgd", label: "Problema del SGD (gestión operativa)", icon: "Workflow" },
  { id: "preservacion", label: "Problema de preservación a largo plazo", icon: "Archive" },
];

export const tallerPriorityOptions = [
  { id: "obras", label: "Expedientes técnicos de obras públicas (formato obsoleto, errores de apertura)" },
  { id: "resoluciones", label: "Resoluciones de alcaldía digitalizadas (sin metadatos)" },
];

export const tallerPriorityPrompt = "¿A qué conjunto de documentos darías prioridad y por qué? Justifica tu decisión.";

export const tallerStrategyOptions = [
  { id: "migracion", label: "Migración" },
  { id: "normalizacion", label: "Normalización" },
  { id: "emulacion", label: "Emulación" },
];

export const tallerStrategyPrompt = "Selecciona la o las estrategias que aplicarías a este caso y justifica tu elección.";

export const tallerValidationItems = [
  { id: "v1", label: "Verificación de integridad (hash) antes y después de cualquier migración", icon: "ShieldCheck", belongs: true },
  { id: "v2", label: "Documentación del procedimiento aplicado a cada conjunto de documentos", icon: "ClipboardList", belongs: true },
  { id: "v3", label: "Eliminar inmediatamente los documentos originales tras cualquier conversión", icon: "FileX", belongs: false },
  { id: "v4", label: "Reconstruir o recuperar los metadatos faltantes antes de decidir una estrategia técnica", icon: "FileSearch", belongs: true },
];

export const tallerPolicyPlanItems = [
  { id: "p1", label: "Responsabilidades institucionales para la preservación", icon: "Users", belongs: true },
  { id: "p2", label: "Inventario de los objetos digitales en riesgo", icon: "ClipboardList", belongs: true },
  { id: "p3", label: "Cronograma de migración de los expedientes técnicos", icon: "ListChecks", belongs: true },
  { id: "p4", label: "Horario de atención al público", icon: "FileX", belongs: false },
];

export const tallerClosingPrompt =
  "Redacta tus conclusiones y recomendaciones profesionales para este caso: ¿qué debería hacer la institución primero, y qué debería evitar hacer?";

export const tallerRubric = [
  { criterion: "Identificación de riesgos", description: "Reconoce los riesgos de obsolescencia, pérdida de metadatos y ausencia de política." },
  { criterion: "Distinción SGD vs. preservación", description: "Diferencia problemas de gestión operativa de problemas de preservación a largo plazo." },
  { criterion: "Priorización justificada", description: "Elige y justifica qué documentos atender primero con un criterio archivístico." },
  { criterion: "Selección de estrategia", description: "Elige migración, normalización o emulación con una justificación coherente con el caso." },
  { criterion: "Validación y documentación", description: "Propone verificación de integridad y documentación del procedimiento, sin eliminar evidencia." },
  { criterion: "Política y plan", description: "Identifica correctamente los elementos de política y de plan pertinentes al caso." },
  { criterion: "Conclusiones profesionales", description: "Formula recomendaciones concretas y evita afirmaciones absolutas o no sustentadas en el caso." },
];
