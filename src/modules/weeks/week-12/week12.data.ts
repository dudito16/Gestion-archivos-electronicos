import type { FlowStep } from "../../../types/content.types";
import type {
  CaseQuestion,
  ComparisonModel,
  ExternalActor,
  HeroStep,
  InformationPackage,
  LearningOutcome,
  OaisEntity,
  PriorKnowledgeQuestion,
  ReferenceItem,
  SummaryPoint,
  WeekConnectionStep,
} from "./week12.types";

export const heroChain: HeroStep[] = [
  { id: "productor", label: "Productor", icon: "Users" },
  { id: "sip", label: "SIP", icon: "FilePlus" },
  { id: "aip", label: "AIP conservado", icon: "Archive" },
  { id: "dip", label: "DIP", icon: "FileSearch" },
  { id: "consumidor", label: "Consumidor", icon: "FileSignature" },
];

export const weekTagline = "Un modelo de referencia para organizar la preservación, no un programa que se instala";

export const weekProgression: FlowStep[] = [
  { id: "preservacion", label: "Preservación digital (Semana 11)" },
  { id: "oais", label: "Modelo OAIS" },
  { id: "entidades", label: "Entidades funcionales" },
  { id: "paquetes", label: "SIP, AIP, DIP" },
  { id: "repositorio", label: "Repositorio digital" },
];

export const motivationQuestion =
  "Si una institución conserva miles de documentos electrónicos, ¿cómo puede organizar su ingreso, almacenamiento y entrega para mantenerlos disponibles y comprensibles a largo plazo?";

export const learningOutcomes: LearningOutcome[] = [
  { id: "o1", label: "Definir el modelo OAIS y explicar su propósito en la preservación digital", icon: "Target" },
  { id: "o2", label: "Comprender el alcance del modelo OAIS como modelo de referencia, no como software", icon: "GitCompareArrows" },
  { id: "o3", label: "Reconocer las entidades funcionales principales y sus responsabilidades", icon: "Workflow" },
  { id: "o4", label: "Explicar el flujo general de ingreso, almacenamiento, gestión y acceso", icon: "ArrowRightLeft" },
  { id: "o5", label: "Diferenciar los paquetes SIP, AIP y DIP", icon: "FileStack" },
  { id: "o6", label: "Identificar el papel de productores, consumidores y administración", icon: "Users" },
  { id: "o7", label: "Relacionar conceptualmente el SGD, el repositorio digital y el modelo OAIS", icon: "Landmark" },
  { id: "o8", label: "Analizar un caso institucional y proponer un flujo documental coherente con OAIS", icon: "ClipboardList" },
];

export const achievementIndicator = "Diferencia SIP, AIP y DIP y explica cómo se relacionan con un flujo documental.";

// ---------------------------------------------------------------------------
// Saberes previos
// ---------------------------------------------------------------------------

export const priorKnowledgeIntro =
  "Antes de empezar, repasa brevemente lo que ya revisaste en semanas anteriores: estos conocimientos son la base para comprender el modelo OAIS.";

export const priorKnowledgeQuestions: PriorKnowledgeQuestion[] = [
  {
    id: "pk1",
    prompt: "¿Qué gestiona un Sistema de Gestión Documental (SGD)?",
    options: [
      { id: "a", label: "Únicamente el almacenamiento físico de archivos" },
      { id: "b", label: "El ciclo de vida del documento electrónico durante su trámite activo" },
      { id: "c", label: "Solamente la preservación a largo plazo" },
    ],
    correctId: "b",
    feedback: "El SGD (Semanas 2-9) gestiona el trámite activo del documento — la preservación a largo plazo es una función adicional, distinta.",
  },
  {
    id: "pk2",
    prompt: "¿Qué es la preservación digital (Semana 11)?",
    options: [
      { id: "a", label: "Mantener copias de seguridad actualizadas" },
      { id: "b", label: "Un conjunto planificado de políticas, estrategias y acciones sostenidas en el tiempo" },
      { id: "c", label: "Usar siempre el software más moderno disponible" },
    ],
    correctId: "b",
    feedback: "La preservación digital es planificada y sostenida — no se reduce a un respaldo ni a usar software moderno.",
  },
  {
    id: "pk3",
    prompt: "¿Qué permite verificar un valor de hash (Semana 10)?",
    options: [
      { id: "a", label: "Que un documento se mantenga sin alteraciones no controladas respecto de una referencia" },
      { id: "b", label: "Quién es el autor del documento" },
      { id: "c", label: "Si el documento tiene valor histórico" },
    ],
    correctId: "a",
    feedback: "El hash y la fixity (Semana 10) sostienen la verificación de integridad — una de las propiedades que un entorno de preservación debe cuidar.",
  },
  {
    id: "pk4",
    prompt: "¿Qué diferencia a la migración de la emulación (Semana 11)?",
    options: [
      { id: "a", label: "La migración convierte el documento a un formato vigente; la emulación reproduce el entorno tecnológico original" },
      { id: "b", label: "Son exactamente lo mismo, con nombres distintos" },
      { id: "c", label: "La emulación siempre es mejor que la migración" },
    ],
    correctId: "a",
    feedback: "Son estrategias distintas frente a la obsolescencia — ninguna es universalmente superior, según el caso.",
  },
];

export const priorKnowledgeBridge =
  "Estos conocimientos son la base de esta semana: el modelo OAIS organiza, de forma conceptual, cómo un entorno de preservación recibe, conserva, gestiona y entrega la información cuya integridad, autenticidad y accesibilidad las semanas anteriores ya te enseñaron a proteger.";

// ---------------------------------------------------------------------------
// Fundamentos del modelo OAIS
// ---------------------------------------------------------------------------

export const oaisAcronymExplanation =
  "OAIS significa Open Archival Information System. En español se traduce como Sistema Abierto de Información Archivística, aunque también se emplea la expresión \"Sistema de Información de Archivo Abierto\". El término \"abierto\" no significa que cualquiera pueda modificarlo: se refiere a que el modelo fue desarrollado mediante un proceso abierto de consenso y está disponible públicamente como referencia.";

export const oaisDefinition =
  "El modelo OAIS es un modelo de referencia: describe, de forma conceptual, las funciones, responsabilidades y tipos de información que debería tener un entorno dedicado a preservar información digital y mantenerla accesible para una comunidad de usuarios a lo largo del tiempo. No es un programa ni un sistema que se instala — es un marco de conceptos y terminología común que distintas instituciones e implementaciones pueden adoptar e interpretar según su propio contexto.";

export const oaisVsSoftware = {
  model: {
    label: "Modelo de referencia (OAIS)",
    points: [
      "Define conceptos, funciones y responsabilidades comunes",
      "No impone una tecnología, un proveedor ni una arquitectura específica",
      "Sirve como lenguaje compartido entre instituciones distintas",
      "Debe interpretarse y adaptarse al contexto de cada organización",
    ],
  },
  software: {
    label: "Un software o sistema concreto",
    points: [
      "Es una implementación técnica específica (por ejemplo, un repositorio)",
      "Puede adoptar, parcial o totalmente, los conceptos de OAIS",
      "Varía según el proveedor, la configuración y la institución",
      "Su sola instalación no garantiza preservación, autenticidad ni confiabilidad",
    ],
  },
};

export const oaisScope =
  "El modelo OAIS se concentra en la organización conceptual de un entorno de preservación: qué información debe gestionarse, qué funciones deben cumplirse y qué responsabilidades existen entre los distintos actores. No define por sí solo los procedimientos de gestión documental previos (eso corresponde al SGD), ni los detalles técnicos de implementación de un repositorio específico, ni garantiza automáticamente la preservación: eso depende de cómo cada institución lo interprete, lo dote de recursos y lo sostenga con políticas y controles — igual que se enseñó en la Semana 11.";

export const oaisImportance =
  "Para quien se dedica a la gestión documental y la preservación, OAIS aporta un vocabulario común y un mapa de responsabilidades: permite distinguir con precisión si un problema corresponde al ingreso, al almacenamiento, a la gestión de la información descriptiva o al acceso, y facilita el diálogo entre el área de archivo, las áreas productoras y las áreas técnicas responsables del repositorio.";

// ---------------------------------------------------------------------------
// Entidades funcionales
// ---------------------------------------------------------------------------

export const oaisEntities: OaisEntity[] = [
  {
    id: "ingest",
    label: "Ingreso",
    englishName: "Ingest",
    definition: "La función responsable de recibir la información enviada por los productores y prepararla para su conservación.",
    mainFunction: "Recibir, validar y preparar el paquete de información recibido (SIP) para convertirlo en información que el entorno pueda conservar.",
    activities: ["Recibir el SIP del productor", "Verificar que la información recibida esté completa y sea comprensible", "Generar la información de preservación necesaria", "Preparar el contenido para su conservación (AIP)"],
    managedInfo: "El paquete de envío (SIP), los registros de la transferencia y los resultados de las validaciones realizadas.",
    relation: "Recibe del Productor; entrega al Almacenamiento Archivístico y a la Gestión de Datos.",
    example: "El área de archivo de una institución recibe un lote de expedientes de obras públicas que el área técnica transfiere para su conservación a largo plazo, junto con su información descriptiva.",
    poorManagementConsequence: "Si el ingreso no valida adecuadamente lo recibido, pueden conservarse documentos incompletos, sin metadatos suficientes o sin verificación de integridad — un problema que se arrastrará durante toda la preservación.",
  },
  {
    id: "archival-storage",
    label: "Almacenamiento archivístico",
    englishName: "Archival Storage",
    definition: "La función responsable de almacenar, mantener y recuperar la información conservada (el AIP).",
    mainFunction: "Conservar físicamente la información y gestionar los medios de almacenamiento a lo largo del tiempo.",
    activities: ["Recibir el AIP desde Ingest", "Gestionar el almacenamiento y sus medios", "Realizar verificaciones periódicas de integridad", "Recuperar la información cuando se solicite"],
    managedInfo: "Los paquetes de archivo (AIP) y los registros asociados a su almacenamiento, verificación y recuperación.",
    relation: "Recibe de Ingest; coordina con la Gestión de Datos y con Preservation Planning para las acciones de preservación.",
    example: "El repositorio conserva los AIP de los expedientes transferidos, con verificaciones periódicas de integridad similares al hash y la fixity de la Semana 10.",
    poorManagementConsequence: "Una gestión deficiente del almacenamiento puede derivar en corrupción de archivos no detectada, pérdida de información o imposibilidad de recuperar lo conservado cuando se necesite.",
  },
  {
    id: "data-management",
    label: "Gestión de datos",
    englishName: "Data Management",
    definition: "La función responsable de administrar la información descriptiva que permite encontrar, identificar y comprender lo conservado — no de almacenar los archivos en sí.",
    mainFunction: "Gestionar las bases de datos descriptivas y administrativas del entorno, distintas del contenido mismo de los documentos.",
    activities: ["Mantener la información descriptiva de los AIP", "Procesar consultas sobre esa información", "Generar informes y estadísticas", "Actualizar los registros administrativos"],
    managedInfo: "Metadatos descriptivos, administrativos y estadísticos — no el contenido de los archivos, que es responsabilidad del Almacenamiento Archivístico.",
    relation: "Trabaja de la mano con el Almacenamiento Archivístico y con el Acceso, que consulta esta información para localizar lo solicitado.",
    example: "Una base de datos que permite buscar expedientes por número, fecha o unidad productora, sin necesidad de abrir cada archivo conservado.",
    poorManagementConsequence: "Si la gestión de datos falla, el contenido puede seguir estando conservado pero ser imposible de localizar o de interpretar correctamente — una pérdida funcional equivalente a no tenerlo.",
  },
  {
    id: "administration",
    label: "Administración",
    englishName: "Administration",
    definition: "La función responsable de la operación general del entorno: acuerdos con productores, políticas, procedimientos, monitoreo y cumplimiento — no se limita a la administración informática o de sistemas.",
    mainFunction: "Gestionar el funcionamiento global del entorno de preservación, sus políticas y sus relaciones con productores y consumidores.",
    activities: ["Negociar y formalizar acuerdos con productores", "Establecer y revisar políticas y procedimientos", "Supervisar el cumplimiento de los estándares adoptados", "Gestionar la configuración y los recursos del entorno"],
    managedInfo: "Acuerdos de transferencia, políticas institucionales, procedimientos operativos y registros de cumplimiento.",
    relation: "Supervisa y da soporte a las demás funciones; no ejecuta directamente el ingreso, el almacenamiento ni el acceso.",
    example: "El área responsable define con qué áreas productoras se trabajará, bajo qué condiciones se aceptan los expedientes y qué política de preservación institucional se sigue.",
    poorManagementConsequence: "Sin una administración clara, no existen acuerdos definidos sobre qué se transfiere, cómo ni con qué responsabilidad — el mismo riesgo de 'ausencia de política y responsables' visto en la Semana 11.",
  },
  {
    id: "preservation-planning",
    label: "Planificación de la preservación",
    englishName: "Preservation Planning",
    definition: "La función responsable de monitorear el entorno externo (tecnologías, formatos, riesgos) y recomendar estrategias para mantener la información accesible a largo plazo.",
    mainFunction: "Anticipar riesgos de obsolescencia y proponer estrategias de preservación (migración, normalización, emulación) antes de que la información se vuelva inaccesible.",
    activities: ["Monitorear la obsolescencia de formatos y tecnologías", "Desarrollar recomendaciones y planes de preservación", "Proponer actualizaciones a los paquetes conservados cuando sea necesario", "Evaluar el impacto de los cambios tecnológicos sobre lo conservado"],
    managedInfo: "Informes de riesgo tecnológico, recomendaciones de estrategias y planes de preservación — los mismos conceptos desarrollados en la Semana 11, aplicados aquí dentro del modelo OAIS.",
    relation: "Asesora al Almacenamiento Archivístico y a la Administración; no ejecuta directamente las migraciones, pero las recomienda y planifica.",
    example: "Se detecta que el formato de un conjunto de expedientes conservados está perdiendo soporte y se recomienda una estrategia de migración documentada, igual que en la Semana 11.",
    poorManagementConsequence: "Sin esta función, el entorno conserva información pero no anticipa su obsolescencia — el riesgo se materializa recién cuando ya es demasiado tarde para actuar con tiempo.",
  },
  {
    id: "access",
    label: "Acceso",
    englishName: "Access",
    definition: "La función responsable de responder a las solicitudes de los consumidores y entregarles la información que les corresponde, respetando las restricciones aplicables.",
    mainFunction: "Procesar solicitudes, localizar la información pertinente y preparar el paquete de entrega (DIP) correspondiente.",
    activities: ["Recibir y procesar solicitudes de los consumidores", "Coordinar con la Gestión de Datos para localizar lo solicitado", "Aplicar las restricciones de acceso que correspondan", "Generar y entregar el DIP"],
    managedInfo: "Solicitudes de acceso, restricciones aplicables y los paquetes de difusión (DIP) generados para cada entrega.",
    relation: "Consulta a la Gestión de Datos y recupera contenido del Almacenamiento Archivístico para construir el DIP que recibe el Consumidor.",
    example: "Un ciudadano solicita copia de una resolución; el área de acceso verifica que no existan restricciones vigentes y entrega la información en un formato adecuado para la consulta.",
    poorManagementConsequence: "Un acceso mal gestionado puede entregar información restringida indebidamente, o volver inaccesible información que sí correspondía entregar — ambos son fallos graves de un entorno de preservación.",
  },
];

export const externalActors: ExternalActor[] = [
  { id: "productor", label: "Productor", description: "La persona, área o sistema que entrega información al entorno de preservación para su conservación (envía el SIP)." },
  { id: "consumidor", label: "Consumidor", description: "La persona o entidad que interactúa con el entorno para obtener la información que necesita (recibe el DIP)." },
  { id: "administracion-direccion", label: "Administración o dirección responsable", description: "La autoridad institucional que define las políticas generales, aprueba los acuerdos y asume la responsabilidad última del entorno de preservación." },
];

export const externalActorsClarification =
  "Productor, Consumidor y la Administración o dirección responsable interactúan con el entorno OAIS, pero no son entidades funcionales internas: son roles externos (o de dirección institucional) que se relacionan con las seis funciones internas descritas arriba, sin ejecutarlas directamente.";

// ---------------------------------------------------------------------------
// Flujo de funcionamiento OAIS
// ---------------------------------------------------------------------------

export const oaisFlow: FlowStep[] = [
  { id: "productor", label: "Productor", description: "Prepara y envía la información" },
  { id: "ingest", label: "Ingest", description: "Recibe y valida el SIP" },
  { id: "archival-storage", label: "Almacenamiento archivístico", description: "Conserva el AIP" },
  { id: "data-management", label: "Gestión de datos", description: "Administra la información descriptiva" },
  { id: "access", label: "Acceso", description: "Prepara y entrega el DIP" },
  { id: "consumidor", label: "Consumidor", description: "Recibe la información solicitada" },
];

export const oaisFlowSupportNote =
  "La Administración y la Planificación de la Preservación no son etapas de este recorrido lineal: son funciones que supervisan y dan soporte a todo el entorno de forma continua — la Administración define acuerdos y políticas, y la Planificación de la Preservación anticipa riesgos tecnológicos — ambas actuando sobre cualquier etapa del flujo, no solo al principio o al final.";

export const oaisFlowDisclaimer =
  "Este flujo es conceptual: representa el recorrido general de la información dentro del modelo de referencia. Una implementación real puede incluir más pasos, validaciones, transformaciones técnicas y controles intermedios, según el diseño de cada entorno de preservación.";

// ---------------------------------------------------------------------------
// Paquetes de información: SIP, AIP, DIP
// ---------------------------------------------------------------------------

export const informationPackages: InformationPackage[] = [
  {
    id: "sip",
    fullName: "Submission Information Package",
    acronym: "SIP",
    definition: "El paquete de información que un productor prepara y envía al entorno de preservación para su ingreso.",
    purpose: "Transferir la información (contenido y metadatos disponibles) desde el productor hacia la función de Ingest, para que pueda ser evaluada y preparada.",
    elements: ["El contenido de los documentos o expedientes a transferir", "Los metadatos disponibles al momento del envío (pueden estar incompletos)", "Información sobre la transferencia misma (quién la envía, cuándo, bajo qué acuerdo)"],
    relation: "Lo prepara y envía el Productor; lo recibe y evalúa la función de Ingest, que lo transformará en la base del AIP.",
    example: "El área de obras públicas transfiere al área de archivo un conjunto de expedientes técnicos concluidos, junto con la información que tiene disponible sobre cada uno, para que el área de archivo evalúe su ingreso al entorno de preservación.",
  },
  {
    id: "aip",
    fullName: "Archival Information Package",
    acronym: "AIP",
    definition: "El paquete de información que el entorno de preservación conserva de forma sostenida, con la información de contenido y la información de preservación necesarias para mantenerlo accesible e interpretable en el tiempo.",
    purpose: "Sostener la preservación a largo plazo: no es solo 'guardar el archivo', sino conservarlo junto con la información que permite comprobar su integridad, entender su contexto y explicar las acciones realizadas sobre él.",
    elements: ["La información de contenido (el documento o expediente propiamente dicho)", "Información de descripción de la preservación (procedencia, contexto, referencia de integridad, historial de acciones)", "Empaquetado e identificación que vinculan ambos elementos de forma consistente"],
    relation: "Lo construye la función de Ingest a partir del SIP evaluado, y lo conserva y mantiene el Almacenamiento Archivístico, con el apoyo de la Gestión de Datos y la Planificación de la Preservación.",
    example: "El expediente técnico ingresado se conserva como AIP junto con su valor de referencia de integridad (hash), su información de procedencia y el registro de cualquier migración de formato aplicada — no es una simple copia del archivo original.",
  },
  {
    id: "dip",
    fullName: "Dissemination Information Package",
    acronym: "DIP",
    definition: "El paquete de información que el entorno prepara para entregar a un consumidor en respuesta a una solicitud de acceso.",
    purpose: "Facilitar el acceso: presentar al consumidor la información que necesita, en una forma adecuada para su consulta, respetando las restricciones de acceso aplicables.",
    elements: ["La parte del contenido del AIP pertinente para la solicitud (no necesariamente el AIP completo)", "La información necesaria para que el consumidor comprenda lo recibido", "Puede excluir información reservada que la solicitud no autoriza entregar"],
    relation: "Lo prepara la función de Acceso, consultando la Gestión de Datos y recuperando contenido del Almacenamiento Archivístico, y lo recibe el Consumidor.",
    example: "Un ciudadano solicita copia de una resolución específica de un expediente; el DIP entregado contiene esa resolución y la información mínima necesaria para identificarla, no el expediente completo ni los documentos internos reservados.",
  },
];

export const aipClarification =
  "El AIP no debe reducirse a 'una copia del archivo original'. Representa un paquete de información diseñado para sostener la preservación conforme al modelo y a la implementación adoptada por cada institución — incluye información de preservación (procedencia, integridad, contexto) que un archivo aislado, por sí solo, no tiene.";

export const dipClarification =
  "El DIP puede diferir del AIP: no siempre contiene exactamente la misma estructura ni todos los archivos conservados. Su contenido depende de la solicitud específica y de las restricciones de acceso vigentes.";

export const packagesFlowDisclaimer =
  "Esta secuencia (SIP → proceso de ingreso → AIP conservado → preparación de acceso → DIP) es una representación conceptual. No todo SIP se convierte de forma automática e idéntica en un AIP: de por medio existen validaciones y transformaciones. Tampoco debe asumirse que un DIP debe contener exactamente la misma estructura o todos los archivos del AIP del que proviene.";

export const packagesFlow: FlowStep[] = [
  { id: "sip", label: "SIP" },
  { id: "ingreso", label: "Proceso de ingreso" },
  { id: "aip", label: "AIP conservado" },
  { id: "preparacion-acceso", label: "Preparación de acceso" },
  { id: "dip", label: "DIP" },
];

// ---------------------------------------------------------------------------
// Relación OAIS-SGD-repositorio
// ---------------------------------------------------------------------------

export const comparisonModels: ComparisonModel[] = [
  { id: "sgd", label: "Sistema de Gestión Documental", description: "Gestiona documentos y procedimientos institucionales durante su trámite activo — procesos, flujos, metadatos de gestión (Semanas 2-9)." },
  { id: "repositorio", label: "Repositorio digital", description: "El entorno tecnológico y organizativo concreto donde se administran determinados objetos digitales, según su finalidad y diseño específicos." },
  { id: "oais", label: "Modelo OAIS", description: "Un modelo de referencia conceptual: no es un sistema, sino un marco de funciones y responsabilidades que un entorno de preservación puede adoptar." },
  { id: "entorno-preservacion", label: "Entorno de preservación digital", description: "La combinación real de políticas, procedimientos, personas y tecnología (que puede incluir un repositorio) dedicada a sostener la preservación a largo plazo (Semana 11)." },
];

export const repositoryOaisClarification =
  "Un repositorio puede adoptar principios y funciones relacionados con OAIS (por ejemplo, organizar su almacenamiento, su gestión de datos y su acceso según esas funciones), pero no debe afirmarse que todo repositorio implementa OAIS de manera completa: la adopción depende de cada diseño institucional y de qué tan rigurosamente se apliquen los conceptos del modelo.";

export const transferExample: FlowStep[] = [
  { id: "generado", label: "Documento generado o recibido" },
  { id: "sgd", label: "Gestión en el SGD" },
  { id: "evaluacion", label: "Evaluación y preparación de transferencia" },
  { id: "ingreso", label: "Ingreso al entorno de preservación" },
  { id: "aip", label: "Mantenimiento del AIP" },
  { id: "dip", label: "Preparación del DIP para acceso autorizado" },
];

export const transferCriteria =
  "Los criterios de transferencia desde el SGD hacia el entorno de preservación dependen de la valoración documental, las normas aplicables, las responsabilidades institucionales y los procedimientos establecidos — no es una decisión automática ni idéntica para todos los documentos.";

// ---------------------------------------------------------------------------
// Referencias
// ---------------------------------------------------------------------------

export const referencesIntro =
  "El sílabo del curso señala la norma como ISO 14721:2025. La base técnica internacional de esa norma es el modelo de referencia desarrollado por el CCSDS (Consultative Committee for Space Data Systems), publicado como el documento técnico citado abajo. Verifica siempre en las fuentes oficiales la edición vigente antes de citarla en un documento formal: las normas se revisan periódicamente y este módulo no sustituye la consulta directa de la fuente.";

export const referenceItems: ReferenceItem[] = [
  {
    id: "ccsds",
    label: "CCSDS 650.0-B — Reference Model for an Open Archival Information System (OAIS)",
    url: "https://public.ccsds.org/Pubs/650x0b2.pdf",
    note: "Documento técnico (\"Blue Book\") que desarrolló originalmente el modelo OAIS y en el que se basa la norma ISO 14721. Fuente primaria para el detalle técnico de las entidades funcionales y los paquetes de información.",
  },
  {
    id: "dpc",
    label: "Digital Preservation Coalition — OAIS (Digital Preservation Handbook)",
    url: "https://www.dpconline.org/handbook/technical-solutions-and-tools/oais",
    note: "Explicación introductoria de referencia, en inglés, orientada a profesionales de archivo y preservación digital.",
  },
  {
    id: "iso",
    label: "ISO — Catálogo oficial (buscar \"ISO 14721\")",
    url: "https://www.iso.org/standard/search",
    note: "Consulta el catálogo oficial de ISO para confirmar la edición y el estado vigentes de la norma antes de citarla formalmente.",
  },
];

// ---------------------------------------------------------------------------
// Caso institucional — Municipalidad Distrital de San Gabriel
// ---------------------------------------------------------------------------

export const caseDisclaimer = "CASO ACADÉMICO SIMULADO — Municipalidad Distrital de San Gabriel";

export const caseNarrative = [
  "La Municipalidad Distrital de San Gabriel (caso académico simulado) cuenta con un Sistema de Gestión Documental que administra expedientes de contratación, resoluciones de alcaldía e informes técnicos.",
  "El área de archivos ha identificado un conjunto de expedientes de conservación prolongada — por su valor administrativo y potencial valor histórico — y propone transferirlos a un entorno de preservación digital.",
  "Durante la preparación de esta transferencia se detectan varios problemas: algunos expedientes contienen múltiples archivos relacionados entre sí; parte de los documentos tiene metadatos incompletos; no existe un procedimiento uniforme de ingreso; la institución necesita registrar y verificar la información recibida; el acceso futuro debe respetar las restricciones correspondientes; y se requiere documentar las decisiones y operaciones realizadas.",
];

export const caseProblems = [
  "Expedientes con varios archivos relacionados entre sí, sin un criterio uniforme para agruparlos",
  "Metadatos incompletos en parte de los documentos",
  "Ausencia de un procedimiento uniforme de ingreso",
  "Necesidad de registrar y verificar la información recibida",
  "Restricciones de acceso que deben respetarse en entregas futuras",
  "Necesidad de documentar las decisiones y operaciones realizadas",
];

export const caseEntitiesInvolved =
  "Ingest debe definir y aplicar el procedimiento de validación que hoy no existe; Gestión de Datos debe completar y organizar los metadatos faltantes; Almacenamiento Archivístico debe conservar los AIP resultantes con verificación de integridad; Acceso debe aplicar las restricciones correspondientes al preparar cualquier DIP; Administración debe formalizar el acuerdo de transferencia con el área productora; y Planificación de la Preservación debe anticipar los riesgos de formato de los expedientes recibidos.";

export const caseIngestInfo =
  "Para el ingreso debe prepararse: el contenido de cada expediente y sus archivos relacionados correctamente agrupados, los metadatos disponibles (y un plan para completar los faltantes), la identificación de quién produjo cada documento y bajo qué trámite, y un acuerdo de transferencia que defina formalmente las condiciones del envío.";

export const caseSipExplanation =
  "El SIP de este caso sería el conjunto de expedientes de obras públicas y sus archivos relacionados, junto con los metadatos disponibles aunque estén incompletos, enviados por el área productora al área de archivo para su evaluación de ingreso.";

export const caseAipExplanation =
  "El AIP resultante debe conservar cada expediente junto con su información de preservación: un valor de referencia de integridad, el registro de los metadatos completados durante el ingreso, y la documentación de cualquier procedimiento aplicado (como una eventual migración de formato) — no una simple copia de los archivos originales.";

export const caseDipExplanation =
  "Si un funcionario autorizado solicita consultar un expediente específico, el DIP entregado debe contener únicamente la información pertinente a esa solicitud, respetando las restricciones de acceso vigentes — no necesariamente el expediente completo con todos sus archivos relacionados.";

export const caseWorkflowProposal: FlowStep[] = [
  { id: "acuerdo", label: "Formalizar el acuerdo de transferencia" },
  { id: "preparacion-sip", label: "Preparar el SIP (agrupar archivos, completar metadatos posibles)" },
  { id: "validacion-ingreso", label: "Validar el ingreso (verificar integridad y completitud)" },
  { id: "construccion-aip", label: "Construir y conservar el AIP" },
  { id: "gestion-datos", label: "Organizar la información descriptiva" },
  { id: "atencion-solicitudes", label: "Atender solicitudes preparando el DIP correspondiente" },
];

export const caseRisksControls = [
  { risk: "Expedientes con archivos relacionados mal agrupados", control: "Definir un criterio uniforme de agrupación antes del ingreso" },
  { risk: "Metadatos incompletos", control: "Procedimiento de completado y validación durante la Gestión de Datos" },
  { risk: "Ausencia de procedimiento uniforme de ingreso", control: "Definir y documentar un procedimiento de Ingest estándar" },
  { risk: "Entrega indebida de información restringida", control: "Verificación de restricciones de acceso antes de preparar cualquier DIP" },
];

export const caseQuestions: CaseQuestion[] = [
  { id: "q1", prompt: "¿Qué información debería completarse antes de aceptar estos expedientes como SIP?" },
  { id: "q2", prompt: "¿Qué distingue, en este caso, al AIP de una simple copia de los archivos originales?" },
  { id: "q3", prompt: "¿Qué función de OAIS es responsable de resolver cada uno de los problemas detectados?" },
  { id: "q4", prompt: "¿Qué restricciones debería verificar la función de Acceso antes de entregar un DIP sobre estos expedientes?" },
];

export const caseGuidance =
  "Orientación para retroalimentación docente (no se muestra automáticamente al estudiante): los archivos relacionados deben agruparse bajo un criterio documentado (p. ej., todos los documentos de un mismo expediente) antes del ingreso; los metadatos incompletos son responsabilidad de completarse en la etapa de Ingest/Gestión de Datos, no de omitirse; el AIP se distingue de una copia simple por incluir información de preservación (integridad, procedencia, historial de acciones); y la función de Acceso debe verificar restricciones (p. ej., documentos con información reservada) antes de construir cualquier DIP, sin asumir que todo lo conservado es de libre entrega.";

// ---------------------------------------------------------------------------
// Conexiones
// ---------------------------------------------------------------------------

export const connectionPrevious: WeekConnectionStep[] = [
  { id: "preservacion", label: "Semana 11: Preservación digital" },
  { id: "riesgos-estrategias", label: "Riesgos y estrategias" },
  { id: "oais", label: "Semana 12: Modelo OAIS" },
  { id: "entidades-paquetes", label: "Entidades y paquetes SIP/AIP/DIP" },
];

export const connectionPreviousClosing =
  "La Semana 11 enseñó riesgos, políticas y estrategias de preservación; OAIS organiza esas mismas preocupaciones dentro de un modelo de funciones y responsabilidades, dándoles un lugar conceptual específico (por ejemplo, Preservation Planning retoma directamente la selección de estrategias de la Semana 11).";

export const connectionNext: WeekConnectionStep[] = [
  { id: "oais", label: "Modelo OAIS" },
  { id: "estandares", label: "Estándares de preservación" },
  { id: "premis-mets-dublincore", label: "PREMIS, METS, Dublin Core" },
];

export const connectionNextClosing =
  "La Semana 13 profundiza en estándares concretos (PREMIS, METS, Dublin Core, BagIt) que implementan, en la práctica, parte de la información que el modelo OAIS describe de forma conceptual — especialmente la información de preservación que debe acompañar a un AIP.";

export const projectConnectionItems = ["Entidades funcionales relevantes para el caso del proyecto", "Definición conceptual de SIP, AIP y DIP aplicada al proyecto", "Relación propuesta entre el SGD del caso y un entorno de preservación"];

// ---------------------------------------------------------------------------
// Resumen
// ---------------------------------------------------------------------------

export const summaryPoints: SummaryPoint[] = [
  { id: "oais", label: "Modelo OAIS", icon: "Landmark" },
  { id: "ingest", label: "Ingest", icon: "FilePlus" },
  { id: "almacenamiento", label: "Almacenamiento", icon: "Archive" },
  { id: "gestion-datos", label: "Gestión de datos", icon: "Database" },
  { id: "acceso", label: "Acceso", icon: "FileSearch" },
  { id: "sip", label: "SIP", icon: "FilePlus" },
  { id: "aip", label: "AIP", icon: "Archive" },
  { id: "dip", label: "DIP", icon: "FileSignature" },
];

export const closingMessages = [
  "OAIS no es un software que se instala: es un modelo de referencia que organiza funciones, responsabilidades e información.",
  "SIP, AIP y DIP representan momentos distintos del ciclo de vida de la información preservada, no sinónimos de 'el archivo'.",
];

export const nextWeekConnection = {
  nextWeekNumber: 13,
  nextTitle: "Estándares de preservación digital",
  text: "PREMIS 3.0, METS, Dublin Core, BagIt e identificación de formatos: estándares concretos que dan forma técnica a la información de preservación que el modelo OAIS describe conceptualmente.",
};
