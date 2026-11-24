import type { DeliverableItem, GuideBlock, PhaseMeta } from "../proyecto-directiva/components";

/** Semana 16 — Investigación y diagnóstico para diseñar una directiva institucional de preservación digital. */

export const week16Phases: PhaseMeta[] = [
  { id: "fase-1", number: 1, title: "Reconocimiento institucional y delimitación del problema", anchor: "fase-1" },
  { id: "fase-2", number: 2, title: "Diagnóstico y análisis de riesgos", anchor: "fase-2" },
  { id: "fase-3", number: 3, title: "Investigación y aplicación de referentes técnicos", anchor: "fase-3" },
];

export const heroChallenge =
  "Una institución produce, recibe y conserva documentos electrónicos que deben mantenerse auténticos, íntegros, disponibles y comprensibles a lo largo del tiempo. Sin embargo, puede carecer de reglas, responsabilidades y procedimientos que permitan garantizar su preservación.";

export const heroRole =
  "Tu equipo asumirá el papel de especialistas en archivística y preservación digital, encargados de investigar una institución y determinar qué necesidades, problemas y riesgos justifican la elaboración de una directiva institucional de preservación digital.";

export const heroAttributes = ["Auténticos", "Íntegros", "Disponibles", "Comprensibles"];

export const week16Focus = [
  { id: "investigar", icon: "FileSearch", label: "Investigar", text: "Conocer la institución, sus documentos y sus sistemas con fuentes verificables." },
  { id: "diagnosticar", icon: "ShieldAlert", label: "Diagnosticar", text: "Identificar problemas y riesgos con causas, consecuencias y evidencias." },
  { id: "sustentar", icon: "BookOpenCheck", label: "Sustentar", text: "Aplicar preservación digital, OAIS, PREMIS y repositorios confiables al caso." },
];

/* ---------------------------------------------------------------- Fase 1 */

export const phase1Purpose =
  "Conocer la institución, sus funciones, los documentos electrónicos que produce y las condiciones actuales en las que estos documentos son gestionados y almacenados.";

export const phase1Steps = [
  "Seleccionar una institución real o un escenario institucional simulado.",
  "Identificar sus funciones y actividades principales.",
  "Identificar los documentos electrónicos que produce o recibe.",
  "Identificar los sistemas utilizados para gestionar o almacenar documentos.",
  "Identificar las áreas responsables de los documentos.",
  "Investigar cómo se almacenan, organizan, consultan y protegen los documentos electrónicos.",
  "Identificar documentos que necesitan conservación a mediano o largo plazo.",
  "Delimitar el problema que justificaría una directiva institucional.",
];

export const suggestedInstitutions = [
  { id: "municipalidad", icon: "Landmark", label: "Municipalidad" },
  { id: "salud", icon: "ShieldCheck", label: "Hospital o establecimiento de salud" },
  { id: "universidad", icon: "BookOpen", label: "Universidad o instituto" },
  { id: "gobierno-regional", icon: "Landmark", label: "Gobierno regional" },
  { id: "archivo", icon: "Archive", label: "Archivo institucional" },
  { id: "expedientes", icon: "FolderOpen", label: "Entidad pública que gestione expedientes electrónicos" },
  { id: "privada", icon: "FileText", label: "Institución privada que produzca documentación digital" },
];

export const phase1Questions = [
  "¿Qué documentos electrónicos produce la institución?",
  "¿Qué documentos tienen valor administrativo, legal, informativo o histórico?",
  "¿Dónde se almacenan actualmente?",
  "¿Qué sistemas utilizan?",
  "¿Quién administra los documentos?",
  "¿Cómo se controla la integridad?",
  "¿Cómo se recuperan los documentos?",
  "¿Qué ocurre si un formato deja de ser compatible?",
  "¿Existen procedimientos de preservación digital?",
  "¿Qué documentos deberían preservarse a largo plazo?",
];

export const phase1Products = [
  { id: "ficha", icon: "ClipboardList", label: "Ficha de identificación institucional", detail: "Nombre, naturaleza, funciones, áreas, sistemas y fuentes consultadas." },
  { id: "inventario", icon: "FileStack", label: "Inventario preliminar de tipos documentales digitales", detail: "Qué documentos, en qué formatos, quién los produce y qué valor tienen." },
  { id: "flujo", icon: "Workflow", label: "Descripción del flujo actual de gestión y almacenamiento", detail: "Desde la producción o recepción hasta el almacenamiento y la consulta." },
  { id: "evidencias", icon: "FileSearch", label: "Evidencias de investigación", detail: "Fuentes, entrevistas, observaciones y fichas que sustentan lo descrito." },
];

export const phase1Evidence = [
  "Fuentes oficiales",
  "Documentos institucionales autorizados",
  "Entrevistas",
  "Observación",
  "Capturas autorizadas",
  "Fichas de investigación",
  "Documentos públicos",
];

/** Orientation only: column headers of the preliminary inventory — rows are the team's work. */
export const inventoryColumns = ["Tipo documental", "Área productora", "Formato", "Sistema / ubicación", "Valor", "Plazo de conservación estimado"];

/* ---------------------------------------------------------------- Fase 2 */

export const phase2Purpose =
  "Identificar problemas, causas, consecuencias y medidas que permitan justificar la necesidad de una directiva institucional.";

export const riskExamples = [
  "Pérdida o eliminación accidental",
  "Corrupción de archivos",
  "Alteración no detectada",
  "Ausencia de hash o checksum",
  "Obsolescencia de formatos",
  "Falta de metadatos de preservación",
  "Copias de seguridad insuficientes",
  "Falta de pruebas de recuperación",
  "Acceso no autorizado",
  "Ausencia de trazabilidad",
  "Falta de responsabilidades",
  "Dependencia de una persona",
  "Falta de presupuesto",
  "Ausencia de repositorio de preservación",
];

export const matrixFields = [
  { key: "problema", label: "Problema", question: "¿Qué situación se identifica?", hint: "Descríbela de forma concreta y observable en tu institución." },
  { key: "causa", label: "Causa", question: "¿Por qué ocurre?", hint: "Distingue la causa del síntoma: falta de norma, de recurso, de responsable…" },
  { key: "consecuencia", label: "Consecuencia", question: "¿Qué podría suceder?", hint: "Piensa en autenticidad, integridad, disponibilidad y comprensibilidad." },
  { key: "evidencia", label: "Evidencia", question: "¿Cómo se sustenta la identificación del problema?", hint: "Entrevista, observación, documento público, ficha… nunca una suposición." },
  { key: "medida", label: "Medida propuesta", question: "¿Qué solución podría implementarse?", hint: "Debe investigarse y justificarse; será la base de una disposición de la directiva." },
] as const;

export const caseScenario =
  "Una institución almacena sus documentos electrónicos en carpetas compartidas. No verifica periódicamente la integridad de los archivos, no documenta las transformaciones realizadas y depende de un único servidor para su almacenamiento.";

export const caseQuestions = [
  { id: "caso-riesgos", label: "¿Cuáles son los riesgos?" },
  { id: "caso-consecuencias", label: "¿Qué consecuencias podría tener esta situación?" },
  { id: "caso-evidencias", label: "¿Qué evidencias buscarían para comprobar los riesgos?" },
  { id: "caso-disposiciones", label: "¿Qué disposiciones debería establecer una futura directiva?" },
];

export const caseHints = [
  "Analicen cada frase del caso por separado: ¿qué atributo del documento (integridad, autenticidad, disponibilidad) queda expuesto en cada una?",
  "\"Carpetas compartidas\": ¿quién puede modificar o eliminar? ¿queda registro de esas acciones?",
  "\"No verifica la integridad\": ¿cómo sabría la institución que un archivo cambió? Recuerden lo trabajado sobre hash y fixity en la Semana 10.",
  "\"No documenta las transformaciones\": ¿cómo se demostraría después qué se hizo, cuándo y quién lo hizo? Piensen en los eventos PREMIS de la Semana 13.",
  "\"Un único servidor\": ¿qué ocurre ante una falla física, un ataque o un desastre? ¿Existen copias en otra ubicación y se han probado?",
  "Para las evidencias, piensen en qué podrían observar o solicitar: registros de respaldo, permisos de carpetas, inventarios, entrevistas al área de TI.",
  "Una disposición útil indica quién hace qué, cuándo y qué registro queda. Evalúen si sus propuestas cumplen esa condición.",
];

/* ---------------------------------------------------------------- Fase 3 */

export const phase3Purpose =
  "Construir el sustento técnico de la propuesta aplicando los referentes del curso a la institución seleccionada: no se trata de copiar definiciones, sino de usarlas para explicar el caso.";

export const referentePreservacion: GuideBlock = {
  investigar: [
    "Concepto de preservación digital",
    "Objetivos",
    "Principios",
    "Riesgos",
    "Obsolescencia",
    "Migración",
    "Normalización",
    "Emulación, cuando resulte pertinente",
    "Diferencias entre gestión documental y preservación digital",
  ],
  preguntas: [
    "¿Qué documentos requieren preservación?",
    "¿Por qué no basta con guardar archivos en un servidor?",
    "¿Qué riesgos de obsolescencia existen?",
    "¿Qué estrategias podrían aplicarse?",
  ],
  aplicar:
    "Relacionen los conceptos con los tipos documentales de su inventario: qué formatos usa la institución, cuáles están en riesgo y qué estrategia (migración, normalización o, si procede, emulación) sería razonable para cada uno.",
  producto: "Una explicación de cómo la preservación digital se aplicaría a la institución seleccionada.",
};

export interface OaisNode {
  id: string;
  label: string;
  group: "sgd" | "transferencia" | "repositorio" | "acceso";
  icon: string;
  explanation: string;
  question: string;
}

export const oaisNodes: OaisNode[] = [
  {
    id: "sgd",
    label: "SGD / productor",
    group: "sgd",
    icon: "Database",
    explanation: "Donde los documentos se producen y gestionan durante su vida activa. No es, por sí mismo, un repositorio de preservación.",
    question: "¿Qué documentos de su SGD (o sistema equivalente) deberían transferirse a preservación y en qué momento?",
  },
  {
    id: "transferencia",
    label: "Preparación y transferencia (SIP)",
    group: "transferencia",
    icon: "ArrowRightLeft",
    explanation: "El productor prepara el paquete de envío (SIP): contenido más la información que lo acompaña (metadatos, valores de hash, contexto).",
    question: "¿Qué información debería acompañar a cada transferencia en su institución?",
  },
  {
    id: "ingesta",
    label: "Ingesta",
    group: "repositorio",
    icon: "Inbox",
    explanation: "Recibe el SIP, realiza controles (integridad, formato, completitud) y genera el AIP y la información descriptiva.",
    question: "¿Qué controles aplicarían al recibir un SIP y qué pasa si alguno falla?",
  },
  {
    id: "almacenamiento",
    label: "Almacenamiento archivístico",
    group: "repositorio",
    icon: "Archive",
    explanation: "Conserva los AIP, gestiona copias y medios, y verifica periódicamente su integridad.",
    question: "¿Dónde y en cuántas copias se conservarían los AIP? ¿Cada cuánto se verificarían?",
  },
  {
    id: "gestion-datos",
    label: "Gestión de datos",
    group: "repositorio",
    icon: "Tags",
    explanation: "Mantiene la información descriptiva y administrativa que permite localizar y gestionar los AIP.",
    question: "¿Qué información necesitarían para encontrar un documento preservado dentro de diez años?",
  },
  {
    id: "administracion",
    label: "Administración",
    group: "repositorio",
    icon: "Users",
    explanation: "Gestiona la operación cotidiana: acuerdos con productores, políticas, usuarios, auditorías y mejoras.",
    question: "¿Qué área de su institución asumiría estas funciones y con qué recursos?",
  },
  {
    id: "planificacion",
    label: "Planificación de preservación",
    group: "repositorio",
    icon: "Radar",
    explanation: "Vigila los cambios tecnológicos y de la comunidad usuaria, y recomienda estrategias (por ejemplo, migraciones).",
    question: "¿Quién vigilaría la obsolescencia de los formatos que usa su institución?",
  },
  {
    id: "acceso",
    label: "Acceso (DIP)",
    group: "acceso",
    icon: "FolderOpen",
    explanation: "Atiende consultas y entrega al usuario un paquete de difusión (DIP) derivado del AIP, respetando derechos y restricciones.",
    question: "¿Quiénes consultarían los documentos y qué restricciones de acceso deberían respetarse?",
  },
];

export const oaisPackages = [
  { id: "sip", label: "SIP", name: "Paquete de información de envío", text: "Lo que el productor entrega al repositorio." },
  { id: "aip", label: "AIP", name: "Paquete de información de archivo", text: "Lo que el repositorio conserva a largo plazo, con su información de preservación." },
  { id: "dip", label: "DIP", name: "Paquete de información de difusión", text: "Lo que el usuario recibe al consultar, derivado del AIP." },
];

export const oaisChallenge = [
  "¿Qué documentos seleccionarían para transferir?",
  "¿Qué información acompañaría la transferencia?",
  "¿Qué controles realizarían al recibir el SIP?",
  "¿Qué información conservarían en el AIP?",
  "¿Cómo permitirían generar un DIP?",
  "¿Cómo relacionarían el SGD con el repositorio?",
];

export const premisEntities = [
  {
    id: "objetos",
    label: "Objetos",
    icon: "FileText",
    text: "Lo que se preserva: archivos, representaciones o conjuntos de bits, con sus características técnicas (formato, tamaño, valor de fijación).",
    ask: "¿Qué objetos de su institución se describirían y con qué características técnicas?",
  },
  {
    id: "eventos",
    label: "Eventos",
    icon: "History",
    text: "Acciones que afectan a un objeto: qué ocurrió, cuándo, con qué resultado.",
    ask: "¿Qué acciones sobre sus documentos deberían quedar registradas obligatoriamente?",
  },
  {
    id: "agentes",
    label: "Agentes",
    icon: "Users",
    text: "Personas, organizaciones o software que participan en un evento.",
    ask: "¿Quién o qué ejecutaría cada evento en su institución?",
  },
  {
    id: "derechos",
    label: "Derechos",
    icon: "Scale",
    text: "Permisos y restricciones que autorizan acciones de preservación o condicionan el acceso.",
    ask: "¿Qué restricciones o autorizaciones afectan a sus documentos?",
  },
];

export const premisEventExamples = [
  { id: "fixity", label: "Verificación de integridad", text: "Se recalcula el hash y se compara con el valor registrado." },
  { id: "validacion", label: "Validación de formato", text: "Se comprueba que el archivo cumple la especificación de su formato." },
  { id: "migracion", label: "Migración", text: "Se genera una nueva versión del contenido en otro formato." },
  { id: "copia", label: "Creación de copia de preservación", text: "Se genera y registra una copia destinada a la conservación." },
];

/** Deliberately partial skeleton — the team completes values and explanation for their own case. */
export const premisSkeleton = [
  { field: "Identificador del evento", value: "¿?" },
  { field: "Tipo de evento", value: "validación de formato" },
  { field: "Fecha y hora", value: "¿?" },
  { field: "Detalle / herramienta", value: "¿?" },
  { field: "Resultado", value: "¿?" },
  { field: "Objeto vinculado", value: "¿?" },
  { field: "Agente vinculado", value: "¿?" },
];

export const premisChallenge =
  "Si una institución migrara un documento PDF a otro formato de preservación, ¿qué información debería registrar para demostrar que la acción ocurrió y quién la ejecutó?";

export const referenteRepositorios: GuideBlock = {
  investigar: [
    "Arquitectura",
    "Almacenamiento",
    "Integridad",
    "Autenticidad",
    "Acceso",
    "Seguridad",
    "Metadatos",
    "Recuperación",
    "Sostenibilidad",
    "Responsabilidad institucional",
  ],
  preguntas: [
    "¿Qué evidencias demostrarían que un repositorio es confiable?",
    "¿Cómo se controla la integridad?",
    "¿Qué responsabilidades deben existir?",
    "¿Qué medidas garantizan la sostenibilidad?",
    "¿Cómo se controla el acceso?",
  ],
  aplicar:
    "Relacionen su investigación con ISO 16363:2025: sus criterios permiten evaluar aspectos organizacionales, tecnológicos y de gestión de un repositorio. Úsenlos para identificar qué le faltaría a su institución, no para declarar un cumplimiento.",
  producto: "Una síntesis de las condiciones de confiabilidad que la directiva debería promover en su institución, con las evidencias que permitirían demostrarlas.",
};

export const complementaryStandards = [
  { id: "mets", label: "METS", text: "Empaqueta y relaciona metadatos y estructura de un objeto digital.", ask: "¿Necesitan describir objetos compuestos o expedientes con varias partes?" },
  { id: "dc", label: "Dublin Core", text: "Conjunto sencillo de elementos descriptivos.", ask: "¿Requieren una descripción básica e interoperable para la consulta?" },
  { id: "bagit", label: "BagIt", text: "Empaqueta archivos con un manifiesto de valores de hash para transferirlos.", ask: "¿Sus transferencias necesitan verificarse al llegar?" },
  { id: "archivematica", label: "Archivematica", text: "Sistema de software libre que automatiza un flujo de preservación basado en OAIS.", ask: "¿Su institución tendría capacidad para implementarlo y mantenerlo?" },
];

/* ---------------------------------------------------------------- Producto final */

export const week16Deliverables: DeliverableItem[] = [
  { id: "s16-ficha", label: "Ficha institucional", detail: "Fase 1" },
  { id: "s16-inventario", label: "Inventario preliminar de documentos", detail: "Fase 1" },
  { id: "s16-diagnostico", label: "Diagnóstico institucional", detail: "Fase 2" },
  { id: "s16-matriz", label: "Matriz con mínimo cinco riesgos", detail: "Fase 2" },
  { id: "s16-investigacion", label: "Investigación técnica", detail: "Fase 3 · preservación digital, OAIS, PREMIS, repositorios y estándares" },
  { id: "s16-oais", label: "Diagrama preliminar OAIS", detail: "Fase 3 · se perfeccionará en la Semana 17" },
  { id: "s16-premis", label: "Ejemplo preliminar PREMIS", detail: "Fase 3" },
  { id: "s16-fuentes", label: "Fuentes verificadas", detail: "Todas las fases" },
  { id: "s16-bitacora", label: "Bitácora de investigación", detail: "Todas las fases" },
];

export const bridgeToWeek17 = [
  { from: "Diagnóstico y matriz de riesgos", to: "Disposiciones y procedimientos de la directiva" },
  { from: "Diagrama preliminar OAIS", to: "Anexo 1: flujo de preservación digital" },
  { from: "Ejemplo preliminar PREMIS", to: "Anexo 2: matriz de metadatos y demostración" },
  { from: "Investigación de repositorios confiables", to: "Responsabilidades, controles y plan de implementación" },
  { from: "Fuentes verificadas y bitácora", to: "Base normativa y técnica, referencias y defensa" },
];
