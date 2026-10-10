import type { FlowStep } from "../../../types/content.types";
import type {
  HeroStep,
  InstitutionalCaseQuestion,
  LearningOutcome,
  PlanComponent,
  PolicyComponent,
  PreservationRisk,
  PriorKnowledgeQuestion,
  RelationStage,
  StrategyCase,
  StrategyInfo,
  SummaryPoint,
  WeekConnectionStep,
} from "./week11.types";

export const heroChain: HeroStep[] = [
  { id: "documento", label: "Documento electrónico", icon: "FileText" },
  { id: "riesgo", label: "Riesgo de obsolescencia", icon: "History" },
  { id: "estrategia", label: "Estrategia de preservación", icon: "Archive" },
  { id: "acceso", label: "Acceso sostenido en el tiempo", icon: "ShieldCheck" },
];

export const weekTagline = "De conservar un archivo a sostener su acceso en el tiempo";

export const weekProgression: FlowStep[] = [
  { id: "integridad", label: "Integridad (Semana 10)" },
  { id: "preservacion", label: "Preservación digital" },
  { id: "politica", label: "Política" },
  { id: "plan", label: "Plan" },
  { id: "estrategias", label: "Estrategias" },
];

export const learningOutcomes: LearningOutcome[] = [
  { id: "o1", label: "Diferenciar gestión documental, archivo electrónico y preservación digital", icon: "GitCompareArrows" },
  { id: "o2", label: "Reconocer los riesgos de obsolescencia y pérdida de acceso", icon: "ShieldAlert" },
  { id: "o3", label: "Distinguir migración, normalización y emulación", icon: "RefreshCw" },
  { id: "o4", label: "Seleccionar estrategias según el caso y sus riesgos", icon: "Target" },
  { id: "o5", label: "Proponer elementos de una política y un plan de preservación", icon: "ClipboardList" },
  { id: "o6", label: "Justificar decisiones con criterios archivísticos y técnicos", icon: "FileSearch" },
];

// ---------------------------------------------------------------------------
// Recuperación de saberes previos
// ---------------------------------------------------------------------------

export const priorKnowledgeIntro =
  "Antes de avanzar, responde estas preguntas breves sobre lo que ya revisaste en semanas anteriores. No son calificadas: te ayudan a activar lo que ya sabes.";

export const priorKnowledgeQuestions: PriorKnowledgeQuestion[] = [
  {
    id: "pk1",
    prompt: "¿Qué es un Sistema de Gestión Documental (SGD)?",
    options: [
      { id: "a", label: "Un lugar físico donde se guardan documentos antiguos" },
      { id: "b", label: "Un sistema que gestiona el ciclo de vida de los documentos electrónicos: captura, registro, trámite y archivo" },
      { id: "c", label: "Un programa para escanear documentos" },
    ],
    correctId: "b",
    feedback: "El SGD (Semana 2) gestiona el ciclo de vida completo del documento electrónico, no solo su almacenamiento.",
  },
  {
    id: "pk2",
    prompt: "¿Qué son los metadatos de un documento electrónico?",
    options: [
      { id: "a", label: "El contenido visible del documento" },
      { id: "b", label: "Información que describe, contextualiza o administra el documento (fecha, autor, tipo, relaciones)" },
      { id: "c", label: "El nombre del archivo únicamente" },
    ],
    correctId: "b",
    feedback: "Los metadatos (Semana 4) describen y contextualizan el documento — sin ellos, un documento pierde parte de su significado.",
  },
  {
    id: "pk3",
    prompt: "¿Qué significa que un documento mantenga integridad digital?",
    options: [
      { id: "a", label: "Que se mantenga completo y sin alteraciones no controladas respecto de un estado de referencia" },
      { id: "b", label: "Que nunca se pueda modificar" },
      { id: "c", label: "Que siga siendo legible" },
    ],
    correctId: "a",
    feedback: "La integridad (Semana 10) se verifica comparando contra una referencia — no basta con que el documento sea legible.",
  },
  {
    id: "pk4",
    prompt: "¿Qué riesgo revisaste en la Semana 10 sobre un documento que \"ya no se puede abrir\"?",
    options: [
      { id: "a", label: "Un riesgo de confidencialidad" },
      { id: "b", label: "Un riesgo relacionado con la pérdida de integridad o con la dependencia de un software específico" },
      { id: "c", label: "No es un riesgo real" },
    ],
    correctId: "b",
    feedback: "La dependencia tecnológica y la obsolescencia de software son precisamente el punto de partida de la preservación digital, el tema de esta semana.",
  },
];

// ---------------------------------------------------------------------------
// Sección 1 — Fundamentos
// ---------------------------------------------------------------------------

export const preservationDefinition =
  "La preservación digital es el conjunto planificado de políticas, estrategias y acciones que garantizan que los documentos electrónicos permanezcan accesibles, auténticos, íntegros e interpretables a lo largo del tiempo, más allá de los cambios tecnológicos que vuelvan obsoletos los formatos, programas o equipos originales.";

export const storageVsPreservation = {
  storage: {
    label: "Almacenar un documento",
    points: ["Guardar el archivo en un disco, servidor o nube", "Puede incluir copias de seguridad", "No garantiza que el documento siga siendo legible dentro de 10 o 20 años", "No gestiona la obsolescencia de formatos ni de software"],
  },
  preservation: {
    label: "Preservar digitalmente",
    points: ["Planifica la accesibilidad a largo plazo", "Incluye políticas, estrategias, responsables y documentación", "Verifica autenticidad, integridad e interpretabilidad de forma sostenida", "Anticipa y gestiona la obsolescencia tecnológica"],
  },
};

export const preservationObjectives = [
  "Mantener la autenticidad: que el documento siga siendo lo que dice ser.",
  "Mantener la integridad: que los cambios sean controlados y documentados.",
  "Mantener la accesibilidad: que pueda localizarse y recuperarse cuando se necesite.",
  "Mantener la interpretabilidad: que su contenido pueda comprenderse y utilizarse, incluso si el software original ya no existe.",
];

// ---------------------------------------------------------------------------
// Sección 2 — SGD, archivo electrónico y preservación
// ---------------------------------------------------------------------------

export const relationStages: RelationStage[] = [
  { id: "sgd", label: "SGD", description: "Gestiona el documento durante su trámite activo: captura, registro, flujo, archivo corriente." },
  { id: "archivo-electronico", label: "Archivo electrónico", description: "Conserva el documento una vez concluido su trámite, organizado y descrito para su consulta." },
  { id: "evaluacion", label: "Evaluación según política", description: "Se determina, de acuerdo con la política institucional, qué documentos requieren preservación a largo plazo." },
  { id: "preservacion", label: "Entorno de preservación", description: "Los documentos de valor permanente se transfieren a un entorno con controles específicos de preservación digital." },
];

export const relationClosing =
  "Un documento puede estar correctamente gestionado en un SGD y, aun así, no estar preparado para sobrevivir el paso del tiempo: la preservación digital empieza donde termina la gestión operativa, y requiere su propia planificación.";

export const backupMisconceptionTitle = "Una copia de seguridad no es una estrategia de preservación";

export const backupMisconceptionText =
  "Una copia de seguridad protege contra la pérdida accidental de datos en el corto plazo (una falla de disco, un error humano). No resuelve que un formato quede obsoleto, que el software necesario para abrirlo desaparezca, ni que se pierdan los metadatos que le dan contexto. Preservar exige algo más que copiar: exige planificar, documentar y actuar sobre esos riesgos de manera sostenida.";

// ---------------------------------------------------------------------------
// Sección 3 — Riesgos
// ---------------------------------------------------------------------------

export const preservationRisks: PreservationRisk[] = [
  {
    id: "obsolescencia-formatos",
    label: "Obsolescencia de formatos",
    consequence: "El formato deja de ser soportado y el documento ya no puede abrirse correctamente, o se abre con errores de representación.",
    measure: "Normalizar a formatos abiertos y ampliamente documentados; monitorear el estado de los formatos usados.",
  },
  {
    id: "obsolescencia-hardware-software",
    label: "Obsolescencia de hardware y software",
    consequence: "El programa o el equipo necesario para interpretar el documento deja de estar disponible o deja de funcionar.",
    measure: "Migrar a formatos y plataformas vigentes, o emular el entorno original cuando la migración no sea viable.",
  },
  {
    id: "perdida-metadatos",
    label: "Pérdida de metadatos",
    consequence: "El documento sobrevive, pero se pierde el contexto que permite entender su origen, su autenticidad o su relación con un expediente.",
    measure: "Documentar y conservar los metadatos junto con el objeto digital, no solo el contenido.",
  },
  {
    id: "dependencia-propietaria",
    label: "Dependencia de aplicaciones propietarias",
    consequence: "El acceso al documento depende de una licencia, un proveedor o un software cerrado que la institución no controla.",
    measure: "Priorizar formatos abiertos y estándares documentados; reducir la dependencia de un único proveedor.",
  },
  {
    id: "corrupcion-archivos",
    label: "Corrupción de archivos",
    consequence: "El contenido se daña por fallas de almacenamiento, transferencias incompletas o degradación del medio físico.",
    measure: "Verificación periódica de integridad (hash, Semana 10) y almacenamiento redundante y controlado.",
  },
  {
    id: "falta-documentacion",
    label: "Falta de documentación técnica",
    consequence: "Nadie puede reconstruir cómo se generó, procesó o convirtió el documento, lo que compromete su autenticidad futura.",
    measure: "Registrar cada evento de preservación (migración, verificación, conversión) con suficiente detalle para auditarlo después.",
  },
  {
    id: "ausencia-politicas",
    label: "Ausencia de políticas, responsables y recursos",
    consequence: "No existe quién decida, con qué criterio ni con qué presupuesto sostener la preservación en el tiempo.",
    measure: "Aprobar una política institucional de preservación con responsables, recursos y revisión periódica asignados.",
  },
  {
    id: "perdida-interpretabilidad",
    label: "Pérdida de capacidad de interpretación",
    consequence: "El documento técnicamente existe, pero ya nadie puede comprender o utilizar su contenido como fue concebido.",
    measure: "Conservar documentación del formato, su estructura y su contexto de uso, no solo el archivo en sí.",
  },
];

// ---------------------------------------------------------------------------
// Sección 4 — Política de preservación digital
// ---------------------------------------------------------------------------

export const policyPurpose =
  "La política de preservación digital es el documento institucional que establece los principios, compromisos y responsabilidades que rigen la preservación a largo plazo de los documentos electrónicos de una entidad. La aprueba la alta dirección, con participación del área de archivo, tecnologías de la información y las áreas productoras de documentos.";

export const policyComponents: PolicyComponent[] = [
  { id: "alcance", label: "Alcance", description: "Qué documentos y series documentales cubre la política." },
  { id: "objetivos", label: "Objetivos", description: "Qué busca garantizar la institución a largo plazo (acceso, autenticidad, integridad)." },
  { id: "responsabilidades", label: "Responsabilidades", description: "Quién decide, quién ejecuta y quién supervisa la preservación." },
  { id: "criterios-seleccion", label: "Criterios de selección", description: "Qué documentos se preservan a largo plazo y con qué prioridad." },
  { id: "autenticidad-integridad", label: "Autenticidad e integridad", description: "Cómo se garantiza que el documento siga siendo confiable a través del tiempo." },
  { id: "seguridad", label: "Seguridad", description: "Controles de acceso y protección frente a pérdidas o alteraciones." },
  { id: "acceso", label: "Acceso", description: "Cómo y a quién se garantiza el acceso a los documentos preservados." },
  { id: "recursos", label: "Recursos", description: "Presupuesto, personal e infraestructura asignados a la preservación." },
  { id: "cumplimiento", label: "Cumplimiento", description: "Normativa y estándares que la institución se compromete a observar." },
  { id: "revision", label: "Revisión periódica", description: "Cada cuánto tiempo se revisa y actualiza la política." },
];

export const policyVsPlan =
  "La política establece los principios y compromisos institucionales (el 'qué' y el 'por qué'); el plan organiza su ejecución concreta (el 'cómo', 'quién' y 'cuándo'). Una institución puede tener una política aprobada y, aun así, necesitar un plan específico para llevarla a la práctica.";

// ---------------------------------------------------------------------------
// Sección 5 — Plan de preservación digital
// ---------------------------------------------------------------------------

export const planComponents: PlanComponent[] = [
  { id: "diagnostico", label: "Diagnóstico", description: "Estado actual de los documentos electrónicos y de la capacidad institucional para preservarlos." },
  { id: "inventario", label: "Inventario de objetos digitales", description: "Qué documentos existen, en qué formatos y en qué volumen." },
  { id: "identificacion-formatos", label: "Identificación de formatos", description: "Qué formatos se usan y cuál es su nivel de riesgo de obsolescencia." },
  { id: "evaluacion-riesgos", label: "Evaluación de riesgos", description: "Qué amenazas enfrenta cada grupo de documentos y con qué severidad." },
  { id: "prioridades", label: "Prioridades", description: "Qué documentos se atienden primero, según su valor y su nivel de riesgo." },
  { id: "estrategias", label: "Estrategias", description: "Migración, normalización, emulación u otras, según el caso." },
  { id: "responsables", label: "Responsables", description: "Quién ejecuta cada acción del plan." },
  { id: "recursos", label: "Recursos", description: "Presupuesto, herramientas y personal necesarios." },
  { id: "cronograma", label: "Cronograma", description: "Cuándo se ejecuta cada acción." },
  { id: "controles", label: "Controles", description: "Cómo se verifica que cada acción se ejecutó correctamente." },
  { id: "documentacion", label: "Documentación", description: "Registro de cada evento de preservación para sostener la trazabilidad." },
  { id: "indicadores", label: "Indicadores de seguimiento", description: "Cómo se mide el avance y el cumplimiento del plan." },
];

export const planExampleInstitution = "Municipalidad Distrital de San Gabriel (caso académico simulado)";

export const planExample = {
  diagnostico: "El 40% de los expedientes de obras públicas de los últimos 10 años están en formatos de hoja de cálculo propietarios sin soporte vigente.",
  prioridad: "Expedientes de obras públicas con valor permanente, por su valor administrativo y potencial valor histórico.",
  estrategia: "Migración a formatos abiertos y normalización del formato de salida para los nuevos expedientes.",
  responsable: "Área de Gestión Documental, con apoyo de la Oficina de Tecnologías de la Información.",
  cronograma: "Migración del backlog en 6 meses; normalización de nuevos ingresos desde el mes 1.",
  control: "Verificación de integridad (hash) antes y después de cada migración, con registro documentado.",
};

// ---------------------------------------------------------------------------
// Secciones 6-9 — Estrategias
// ---------------------------------------------------------------------------

export const strategies: StrategyInfo[] = [
  {
    id: "migracion",
    label: "Migración",
    definition: "Convertir un documento de un formato a otro, generalmente más vigente o mejor soportado, conservando su contenido y, en la medida de lo posible, su estructura y apariencia.",
    objective: "Mantener el documento accesible cuando su formato original deja o dejará de tener soporte adecuado.",
    whenToUse: "Cuando el formato original presenta riesgo de obsolescencia o problemas de compatibilidad con los sistemas vigentes.",
    advantages: ["Mantiene el documento utilizable con herramientas actuales", "Puede aplicarse a lotes completos de documentos"],
    risks: ["Puede alterar aspectos de formato, diseño o metadatos si no se controla el proceso", "Requiere validar la integridad del resultado, no basta con convertir"],
    example: "Convertir expedientes almacenados en un formato de hoja de cálculo sin soporte vigente a un formato abierto equivalente, documentando el procedimiento.",
    controls: ["Verificación de integridad antes y después (hash)", "Documentación del procedimiento y la herramienta utilizada", "Conservación de información suficiente para demostrar qué se hizo", "No se exige eliminar el original: la decisión depende de la política institucional"],
  },
  {
    id: "normalizacion",
    label: "Normalización",
    definition: "Reducir la diversidad de formatos utilizados por una institución, estableciendo un conjunto limitado y documentado de formatos preferidos para capturar o producir documentos.",
    objective: "Facilitar la gestión y la preservación al reducir la cantidad de formatos distintos que deben sostenerse en el tiempo.",
    whenToUse: "Al definir cómo se producirán o capturarán los documentos de ahora en adelante, o al estandarizar un fondo documental heterogéneo.",
    advantages: ["Simplifica la gestión técnica a largo plazo", "Reduce la dependencia de múltiples herramientas y proveedores"],
    risks: ["Ningún formato es universalmente infalible: la elección depende del tipo de contenido y la finalidad", "La sola extensión del archivo no garantiza su idoneidad para preservación"],
    example: "Establecer que todos los documentos de texto de nueva producción se guarden en un formato abierto orientado a preservación, en lugar de permitir cualquier formato de procesador de texto.",
    controls: ["Política de formatos preferidos documentada y vigente", "Verificación de que los documentos cumplen el formato normalizado", "Revisión periódica de la vigencia de los formatos elegidos"],
  },
  {
    id: "emulacion",
    label: "Emulación",
    definition: "Reproducir, mediante software, el comportamiento de un entorno tecnológico antiguo (sistema operativo, programa) para poder acceder a un documento en su formato y presentación originales.",
    objective: "Mantener el acceso a documentos cuya representación o funcionalidad depende de un entorno tecnológico que ya no existe.",
    whenToUse: "Cuando el documento depende de un software o entorno muy específico cuya migración implicaría una pérdida significativa de funcionalidad o fidelidad.",
    advantages: ["Preserva la experiencia y funcionalidad originales del documento", "Útil para objetos digitales complejos (bases de datos antiguas, software interactivo)"],
    risks: ["Requiere mantener o desarrollar el emulador a lo largo del tiempo", "Puede implicar mayores costos y dependencias técnicas que una migración", "Requiere documentación detallada del entorno original"],
    example: "Mantener un entorno emulado para consultar una base de datos administrativa antigua cuya migración completa implicaría perder relaciones entre registros.",
    controls: ["Documentación exhaustiva del entorno original emulado", "Pruebas periódicas de que el emulador sigue funcionando", "Plan de contingencia si el emulador deja de mantenerse"],
  },
];

export const strategyComparisonDisclaimer =
  "No existe una estrategia universalmente superior: la elección depende del objeto digital, su finalidad, los recursos disponibles y los riesgos identificados en el diagnóstico institucional.";

export const strategyCases: StrategyCase[] = [
  { id: "caso-hoja-calculo", scenario: "Expedientes en un formato de hoja de cálculo propietario, sin soporte vigente, que deben seguir siendo consultables por el personal administrativo.", recommendedStrategies: ["migracion"], reason: "El contenido puede convertirse a un formato abierto equivalente sin perder su función administrativa." },
  { id: "caso-nuevos-ingresos", scenario: "Una institución quiere evitar que, en el futuro, sus áreas produzcan documentos en formatos heterogéneos y poco documentados.", recommendedStrategies: ["normalizacion"], reason: "El problema es de producción futura: conviene estandarizar los formatos de captura, no convertir documentos existentes." },
  { id: "caso-base-datos-antigua", scenario: "Una base de datos administrativa de los años 2000, con relaciones complejas entre registros, cuyo software original ya no tiene soporte.", recommendedStrategies: ["emulacion", "migracion"], reason: "Si migrar implica perder relaciones o funcionalidad crítica, la emulación puede preservar la experiencia original; si una migración cuidadosa conserva esas relaciones, también es una opción válida." },
];

export const formatComparisonDisclaimer =
  "La extensión de un archivo no garantiza por sí sola su idoneidad para la preservación: dos documentos con la misma extensión pueden tener un nivel de riesgo muy distinto según cómo fueron generados y qué dependencias técnicas tienen.";

// ---------------------------------------------------------------------------
// Sección 10 — Caso práctico institucional
// ---------------------------------------------------------------------------

export const institutionalCaseDisclaimer = "CASO ACADÉMICO SIMULADO — Municipalidad Distrital de San Gabriel";

export const institutionalCaseNarrative = [
  "La Municipalidad Distrital de San Gabriel (caso académico simulado) conserva documentos electrónicos de valor administrativo e histórico desde hace más de 15 años.",
  "Un conjunto importante de expedientes de obras públicas fue elaborado en un formato de hoja de cálculo propietario que la versión actual del software institucional ya no abre correctamente.",
  "Otro conjunto de resoluciones de alcaldía de los años 2008-2012 se conserva como imágenes escaneadas sin ningún metadato asociado más allá del nombre del archivo.",
  "No existe una política de preservación digital aprobada, ni un responsable formalmente asignado para esta función, ni un presupuesto específico.",
  "El personal del área de archivo ha detectado, además, que algunos de estos documentos ya presentan errores al momento de abrirse.",
];

export const institutionalCaseQuestions: InstitutionalCaseQuestion[] = [
  { id: "q1", prompt: "¿Qué riesgos de preservación identificas en este caso? Menciona al menos tres." },
  { id: "q2", prompt: "¿Qué problemas corresponden a la gestión documental operativa y cuáles corresponden específicamente a la preservación a largo plazo?" },
  { id: "q3", prompt: "¿Qué estrategia (o combinación de estrategias) recomendarías para cada conjunto de documentos, y por qué?" },
  { id: "q4", prompt: "¿Qué elementos básicos debería tener la política y el plan de preservación que actualmente le falta a esta institución?" },
];

export const institutionalCaseGuidance =
  "Orientación para retroalimentación docente (no mostrar como respuesta única al estudiante): los expedientes en formato propietario obsoleto requieren migración documentada y validada; las imágenes escaneadas sin metadatos requieren primero recuperar o reconstruir su contexto (relación con el expediente, fecha, autoridad) antes de decidir una estrategia técnica, ya que el problema principal ahí es la pérdida de metadatos, no solo el formato. La ausencia de política, responsable y presupuesto es en sí misma un riesgo de preservación (sección 3) que debe resolverse antes o en paralelo a cualquier estrategia técnica.";

// ---------------------------------------------------------------------------
// Conexiones
// ---------------------------------------------------------------------------

export const connectionPrevious: WeekConnectionStep[] = [
  { id: "integridad", label: "Semana 10: Integridad" },
  { id: "hash-fixity", label: "Hash y fixity" },
  { id: "preservacion", label: "Semana 11: Preservación digital" },
  { id: "politica-plan", label: "Política y plan" },
];

export const connectionPreviousClosing =
  "La verificación de integridad (Semana 10) es una de las herramientas que sostiene la preservación digital: sin poder comprobar que un documento sigue siendo el mismo, ninguna estrategia de preservación puede garantizar su autenticidad en el tiempo.";

export const connectionNext: WeekConnectionStep[] = [
  { id: "preservacion", label: "Preservación digital" },
  { id: "modelo-oais", label: "Modelo OAIS" },
  { id: "sip-aip-dip", label: "SIP, AIP, DIP" },
];

export const connectionNextClosing =
  "Los conceptos de esta semana son la base para comprender, en la Semana 12, el modelo de referencia OAIS: un marco internacional que organiza exactamente las funciones de preservación que acabas de estudiar (ingesta, almacenamiento, gestión y acceso) en un modelo formal.";

export const projectConnectionItems = ["Política de preservación propuesta", "Riesgos de obsolescencia identificados", "Estrategia de migración, normalización o emulación justificada", "Elementos básicos de un plan de preservación"];

// ---------------------------------------------------------------------------
// Resumen
// ---------------------------------------------------------------------------

export const summaryPoints: SummaryPoint[] = [
  { id: "preservacion", label: "Preservación", icon: "Archive" },
  { id: "politica", label: "Política", icon: "ClipboardList" },
  { id: "plan", label: "Plan", icon: "ListChecks" },
  { id: "riesgos", label: "Riesgos", icon: "ShieldAlert" },
  { id: "migracion", label: "Migración", icon: "RefreshCw" },
  { id: "normalizacion", label: "Normalización", icon: "Layers" },
  { id: "emulacion", label: "Emulación", icon: "Cpu" },
  { id: "sostenibilidad", label: "Sostenibilidad", icon: "Route" },
];

export const closingMessages = [
  "La preservación digital no es un evento único: es una función institucional planificada, documentada y sostenida en el tiempo.",
  "Ninguna estrategia técnica reemplaza una política y un plan con responsables, recursos y revisión periódica.",
];

export const nextWeekConnection = {
  nextWeekNumber: 12,
  nextTitle: "Modelo de referencia OAIS",
  text: "El modelo OAIS (ISO 14721) formaliza, en un marco de referencia internacional, las funciones de preservación digital que esta semana comenzaste a comprender: ingesta, almacenamiento, gestión de datos y acceso.",
};
