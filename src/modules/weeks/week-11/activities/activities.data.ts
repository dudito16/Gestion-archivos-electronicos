/** Content for Week 11's 10 formative activities ("Actividades"). */

export const activity1Statements = [
  { id: "a1-1", label: "Almacenar un documento garantiza que podrá abrirse correctamente dentro de 15 años", icon: "FileX", belongs: false },
  { id: "a1-2", label: "Preservar digitalmente implica planificar, documentar y actuar frente a la obsolescencia tecnológica", icon: "Archive", belongs: true },
  { id: "a1-3", label: "Una copia de seguridad protege frente a fallas inmediatas, pero no resuelve la obsolescencia de formatos", icon: "ShieldCheck", belongs: true },
  { id: "a1-4", label: "Si un documento está respaldado en la nube, ya está preservado digitalmente", icon: "FileX", belongs: false },
];

export const activity2Items = [
  { id: "a2-1", label: "Un oficio recién recibido se registra y se deriva al área competente", icon: "Inbox", category: "gestion" },
  { id: "a2-2", label: "Se genera una copia diaria automática de la base de datos del SGD", icon: "DatabaseZap", category: "respaldo" },
  { id: "a2-3", label: "Un expediente concluido se guarda en un disco duro externo sin ninguna otra acción", icon: "Archive", category: "almacenamiento" },
  { id: "a2-4", label: "Se aprueba una política institucional que define cómo se migrarán los formatos en riesgo durante los próximos 5 años", icon: "ClipboardList", category: "preservacion" },
  { id: "a2-5", label: "Un documento electrónico es registrado y sigue su flujo de aprobación dentro del sistema", icon: "Workflow", category: "gestion" },
  { id: "a2-6", label: "Se migran documentos de un formato obsoleto a uno vigente, documentando el procedimiento y verificando su integridad", icon: "RefreshCw", category: "preservacion" },
];

export const activity2Categories = [
  { id: "gestion", label: "Gestión documental", icon: "Workflow" },
  { id: "almacenamiento", label: "Almacenamiento", icon: "Archive" },
  { id: "respaldo", label: "Respaldo", icon: "DatabaseZap" },
  { id: "preservacion", label: "Preservación digital", icon: "ShieldCheck" },
];

export const activity3Pairs = [
  { risk: "Obsolescencia de formatos", measure: "Normalizar a formatos abiertos y monitorear su vigencia" },
  { risk: "Pérdida de metadatos", measure: "Documentar y conservar los metadatos junto con el documento" },
  { risk: "Corrupción de archivos", measure: "Verificación periódica de integridad y almacenamiento redundante" },
];

export const activity3MeasureOptions = [
  "Normalizar a formatos abiertos y monitorear su vigencia",
  "Documentar y conservar los metadatos junto con el documento",
  "Verificación periódica de integridad y almacenamiento redundante",
  "Capacitar al personal en atención al público",
];

export const activity4Case =
  "Una institución debe decidir qué hacer con un conjunto de documentos de texto producidos en un procesador de textos descontinuado, cuyo formato ya no abre correctamente en las versiones actuales del software.";

export const activity4Options = [
  { id: "migracion", label: "Migración: convertir los documentos a un formato vigente, documentando el proceso" },
  { id: "normalizacion", label: "Normalización: definir de ahora en adelante un formato único para nuevos documentos" },
  { id: "emulacion", label: "Emulación: mantener el software antiguo funcionando mediante un emulador" },
];

export const activity4Correct = "migracion";

export const activity4Feedback =
  "El problema descrito es sobre documentos EXISTENTES que ya no abren bien: la migración es la respuesta directa. La normalización previene este problema a futuro, pero no resuelve los documentos ya afectados. La emulación sería más justificable si el formato implicara una pérdida crítica de funcionalidad al migrar, lo cual no se describe aquí.";

export const activity5Case =
  "Una base de datos administrativa de los años 2000 contiene relaciones complejas entre miles de registros de trámites. El software original ya no tiene soporte, y una conversión directa a una hoja de cálculo perdería esas relaciones.";

export const activity5Question = "¿Qué estrategia recomendarías y por qué? Justifica tu elección con un criterio archivístico o técnico.";

export const activity6PolicyItems = [
  { id: "a6-1", label: "Responsabilidades: quién decide, ejecuta y supervisa la preservación", icon: "Users", belongs: true },
  { id: "a6-2", label: "Criterios de selección: qué documentos se preservan y con qué prioridad", icon: "Target", belongs: true },
  { id: "a6-3", label: "Cronograma detallado de migración de un lote específico de documentos", icon: "ListChecks", belongs: false },
  { id: "a6-4", label: "Principios institucionales sobre autenticidad, integridad y acceso a largo plazo", icon: "ShieldCheck", belongs: true },
];

export const activity7PlanItems = [
  { id: "a7-1", label: "Inventario de los objetos digitales existentes y sus formatos", icon: "ClipboardList", belongs: true },
  { id: "a7-2", label: "Cronograma de ejecución de las acciones de preservación", icon: "ListChecks", belongs: true },
  { id: "a7-3", label: "Principios generales que la institución se compromete a respetar", icon: "FileSignature", belongs: false },
  { id: "a7-4", label: "Indicadores para medir el avance de la preservación", icon: "Target", belongs: true },
];

export const activity8Case =
  "Un documento es creado, tramitado y aprobado en el SGD de una institución. Años después, concluido su trámite, se evalúa según la política institucional y, por tener valor permanente, se transfiere a un entorno con controles específicos de preservación.";

export const activity8Items = [
  { id: "a8-1", label: "SGD (captura, trámite, flujo)", icon: "Workflow" },
  { id: "a8-2", label: "Archivo electrónico (documento con trámite concluido)", icon: "FolderOpen" },
  { id: "a8-3", label: "Evaluación según política institucional", icon: "ClipboardList" },
  { id: "a8-4", label: "Entorno de preservación digital", icon: "Archive" },
];

export const activity8CorrectOrder = ["a8-1", "a8-2", "a8-3", "a8-4"];

export const activity9Pairs = [
  { risk: "Dependencia de aplicaciones propietarias", consequence: "El acceso depende de una licencia o proveedor que la institución no controla" },
  { risk: "Falta de documentación técnica", consequence: "Nadie puede reconstruir cómo se generó o convirtió el documento" },
  { risk: "Ausencia de políticas y responsables", consequence: "No existe quién decida ni con qué recursos sostener la preservación" },
];

export const activity9ConsequenceOptions = [
  "El acceso depende de una licencia o proveedor que la institución no controla",
  "Nadie puede reconstruir cómo se generó o convirtió el documento",
  "No existe quién decida ni con qué recursos sostener la preservación",
  "El personal no sabe usar el sistema de gestión documental",
];
