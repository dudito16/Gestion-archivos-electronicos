/** Content for Week 12's single "Diseño conceptual de un flujo OAIS" workshop case. */

export const tallerDisclaimer = "CASO ACADÉMICO SIMULADO — Municipalidad Distrital de San Gabriel";

export const tallerScenario =
  "La Municipalidad Distrital de San Gabriel (caso académico simulado) debe diseñar, de forma conceptual, un flujo OAIS para preservar un conjunto de expedientes electrónicos de obras públicas con valor de conservación prolongada.";

export const tallerDocumentsPrompt = "¿Qué documentos o expedientes se transferirán? Descríbelos brevemente.";

export const tallerActorsPrompt = "Identifica al productor (quién envía la información) y al consumidor (quién la solicitará en el futuro) de este caso.";

export const tallerSipPrompt = "Describe el contenido del SIP: ¿qué incluirías en el paquete que el productor envía?";

export const tallerIngestItems = [
  { id: "i1", label: "Verificar que el SIP esté completo antes de aceptarlo", icon: "ShieldCheck", belongs: true },
  { id: "i2", label: "Comprobar la integridad de los archivos recibidos", icon: "Fingerprint", belongs: true },
  { id: "i3", label: "Aceptar cualquier envío sin ningún tipo de validación", icon: "FileX", belongs: false },
  { id: "i4", label: "Registrar la transferencia y sus condiciones", icon: "ClipboardList", belongs: true },
];

export const tallerAipPrompt = "Describe conceptualmente el AIP resultante: ¿qué información de preservación debería acompañar al contenido?";

export const tallerDataStorageItems = [
  { id: "d1", label: "Mantener una base de datos descriptiva de los expedientes conservados", icon: "Database", belongs: true },
  { id: "d2", label: "Verificar periódicamente la integridad de lo almacenado", icon: "ShieldCheck", belongs: true },
  { id: "d3", label: "Asumir que el contenido conservado no necesita ningún control posterior", icon: "FileX", belongs: false },
];

export const tallerDipPrompt = "Ante una solicitud de acceso a un expediente específico, describe qué contendría el DIP preparado.";

export const tallerAccessRestrictionsPrompt = "¿Qué restricciones de acceso deberían verificarse antes de entregar información de estos expedientes?";

export const tallerWorkflowPrompt = "Representa brevemente, en tus propias palabras, el flujo de trabajo propuesto de principio a fin (desde el productor hasta el consumidor).";

export const tallerControlsItems = [
  { id: "c1", label: "Registrar las decisiones tomadas durante el ingreso", icon: "ClipboardList", belongs: true },
  { id: "c2", label: "Documentar cualquier acción de preservación aplicada (p. ej. una migración)", icon: "RefreshCw", belongs: true },
  { id: "c3", label: "No dejar ningún registro, para simplificar el proceso", icon: "FileX", belongs: false },
];

export const tallerClosingPrompt =
  "Redacta tu propuesta final: un breve resumen del flujo diseñado y de cómo se relacionan el SIP, el AIP y el DIP en este caso.";

export const tallerRubric = [
  { criterion: "Documentos identificados", points: 10, description: "Identifica con claridad los documentos o expedientes a transferir." },
  { criterion: "Productor y consumidor", points: 10, description: "Identifica correctamente ambos actores externos del caso." },
  { criterion: "Contenido del SIP", points: 10, description: "Describe un SIP coherente con el contenido y los metadatos disponibles." },
  { criterion: "Ingreso y validaciones", points: 10, description: "Reconoce las validaciones necesarias antes de aceptar el SIP." },
  { criterion: "AIP conceptual", points: 10, description: "Distingue el AIP de una simple copia, incluyendo información de preservación." },
  { criterion: "Gestión de datos y almacenamiento", points: 10, description: "Describe correctamente el rol de ambas funciones." },
  { criterion: "DIP conceptual", points: 10, description: "Prepara un DIP coherente con una solicitud específica." },
  { criterion: "Restricciones de acceso", points: 10, description: "Identifica restricciones pertinentes antes de la entrega." },
  { criterion: "Representación del flujo", points: 10, description: "Representa el flujo de trabajo de forma clara y completa." },
  { criterion: "Registro de decisiones y controles", points: 10, description: "Documenta las decisiones y controles aplicados." },
];

export const tallerRubricTotal = tallerRubric.reduce((sum, r) => sum + r.points, 0);
