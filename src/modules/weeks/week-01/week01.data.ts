import type {
  AGNCaseStep,
  ClassificationItem,
  ComparisonRow,
  ConceptNode,
  DigitalExample,
  DigitizationInfo,
  DragDropCategory,
  DragDropItem,
  ElectronicDocumentInfo,
  ElectronicFileDoc,
  FlowStep,
  InstantQuizQuestion,
  ObjectiveCard,
  RelationItem,
  ResourceCard,
  ScopeStage,
  SummaryPoint,
  TimelineStep,
} from "./week01.types";

export const objectives: ObjectiveCard[] = [
  {
    id: "explicar",
    title: "Explicar la Gestión de Archivos Electrónicos",
    description: "Definir su objeto de estudio, principios archivísticos aplicables y por qué exige un tratamiento distinto al archivo tradicional en papel.",
    icon: "BookOpenCheck",
  },
  {
    id: "diferenciar",
    title: "Diferenciar cuatro nociones clave",
    description: "Distinguir con precisión documento electrónico, documento digital, documento digitalizado y expediente electrónico, evitando el uso indistinto de estos términos.",
    icon: "GitCompareArrows",
  },
  {
    id: "alcance",
    title: "Comprender el alcance de la gestión documental electrónica",
    description: "Ubicar cada etapa del ciclo de vida documental —desde la creación hasta la preservación— dentro de un sistema de gestión documental electrónico.",
    icon: "Workflow",
  },
  {
    id: "relacionar",
    title: "Conectar con Gestión de Archivos Electrónicos I",
    description: "Articular los fundamentos archivísticos ya adquiridos con las exigencias tecnológicas y normativas del entorno digital.",
    icon: "Link2",
  },
];

export const timelineSteps: TimelineStep[] = [
  {
    id: "papel",
    period: "Tradición",
    title: "Archivo en papel",
    description: "El expediente físico como unidad documental: foliación manual, custodia en depósitos y acceso condicionado a la presencia del documento.",
    icon: "FileStack",
  },
  {
    id: "digitalizacion",
    period: "Transición",
    title: "Digitalización",
    description: "Se captura la imagen del documento físico mediante escaneo. El soporte cambia, pero el documento sigue siendo, jurídicamente, el original en papel.",
    icon: "ScanLine",
  },
  {
    id: "documentos-digitales",
    period: "Transición",
    title: "Documentos digitales",
    description: "Aparecen documentos nativos en formato binario (Word, Excel, correo electrónico) sin que exista aún un marco que les otorgue valor probatorio equivalente.",
    icon: "FileType",
  },
  {
    id: "documentos-electronicos",
    period: "Consolidación",
    title: "Documentos electrónicos",
    description: "La firma digital y los metadatos normalizados dotan al documento digital de autenticidad, integridad y valor legal reconocido por norma.",
    icon: "FileSignature",
  },
  {
    id: "expedientes-electronicos",
    period: "Consolidación",
    title: "Expedientes electrónicos",
    description: "Los documentos electrónicos se agrupan de forma ordenada y foliada digitalmente en torno a un mismo asunto o trámite administrativo.",
    icon: "FolderKanban",
  },
  {
    id: "sgd",
    period: "Sistematización",
    title: "Sistema de Gestión Documental",
    description: "Una plataforma (SGD/SGDEA) automatiza la captura, clasificación, trámite y control de acceso de todo el ciclo de vida documental.",
    icon: "Database",
  },
  {
    id: "archivo-electronico",
    period: "Sistematización",
    title: "Archivo Electrónico",
    description: "El repositorio institucional custodia expedientes electrónicos con valor legal, aplicando cuadros de clasificación y retención documental.",
    icon: "Archive",
  },
  {
    id: "preservacion",
    period: "Horizonte",
    title: "Preservación Digital",
    description: "Estrategias de migración, emulación y metadatos de preservación garantizan que el documento siga siendo auténtico, íntegro y accesible a largo plazo.",
    icon: "ShieldCheck",
  },
];

export const conceptNodes: ConceptNode[] = [
  {
    id: "captura",
    label: "Captura",
    icon: "Inbox",
    definition: "Acción de incorporar un documento al sistema de gestión documental, asignándole un identificador único y metadatos mínimos de ingreso.",
    importance: "Es el punto de entrada del control archivístico: un documento no capturado formalmente no existe para efectos de trazabilidad ni de trámite.",
    example: "Mesa de Partes Virtual registra una solicitud ciudadana y el SGD le asigna número de expediente y fecha de ingreso de forma automática.",
  },
  {
    id: "registro",
    label: "Registro",
    icon: "ClipboardList",
    definition: "Acto formal por el cual se deja constancia de la existencia de un documento dentro del sistema, mediante un asiento que no puede alterarse.",
    importance: "Genera el rastro auditable exigido por la normativa de procedimiento administrativo: sin registro no hay prueba de recepción ni de plazos.",
    example: "El aplicativo de trámite documentario asigna el número '2026-EXP-004521' y bloquea la edición retroactiva de la fecha de ingreso.",
  },
  {
    id: "clasificacion",
    label: "Clasificación",
    icon: "FolderTree",
    definition: "Ubicación del documento dentro del Cuadro de Clasificación Documental (CCD) según la función y actividad institucional que lo origina.",
    importance: "Ordena el fondo documental de forma coherente con la estructura orgánico-funcional, permitiendo recuperar la información por contexto.",
    example: "Un informe técnico de supervisión se clasifica bajo la serie 'Supervisión y Fiscalización' y no bajo 'Gestión Administrativa'.",
  },
  {
    id: "metadatos",
    label: "Metadatos",
    icon: "Tags",
    definition: "Datos estructurados que describen el contexto, contenido y estructura de un documento y su gestión a lo largo del tiempo (ISO 23081).",
    importance: "Sin metadatos normalizados el documento pierde trazabilidad: no se puede probar quién lo creó, cuándo, ni qué acciones sufrió.",
    example: "Autor, fecha de creación, hash de integridad, número de expediente y nivel de acceso viajan siempre junto al documento electrónico.",
  },
  {
    id: "expedientes",
    label: "Expedientes",
    icon: "FolderOpen",
    definition: "Unidad documental compuesta por uno o varios documentos electrónicos ordenados y foliados, relativos a un mismo asunto o procedimiento.",
    importance: "Es la unidad mínima de gestión para efectos de trámite y archivo: no se archivan documentos sueltos, se archivan expedientes.",
    example: "El expediente de transferencia documental agrupa el memorando de solicitud, el informe técnico y la resolución de aprobación.",
  },
  {
    id: "firma-digital",
    label: "Firma Digital",
    icon: "FileSignature",
    definition: "Mecanismo criptográfico basado en certificados digitales que garantiza autoría, integridad y no repudio de un documento electrónico.",
    importance: "Es la condición que distingue a un documento electrónico de un simple archivo digital: sin firma válida no hay valor jurídico pleno.",
    example: "Un funcionario firma digitalmente una resolución con un certificado emitido por una entidad de certificación acreditada conforme a la normativa vigente.",
  },
  {
    id: "archivo",
    label: "Archivo",
    icon: "Archive",
    definition: "Conjunto orgánico de documentos producidos o recibidos por una entidad en ejercicio de sus funciones, conservados como evidencia y memoria.",
    importance: "Sostiene la rendición de cuentas, la memoria institucional y el derecho ciudadano de acceso a la información pública.",
    example: "El Archivo Central de la entidad custodia los expedientes electrónicos que ya concluyeron su trámite pero deben conservarse por norma.",
  },
  {
    id: "transferencia",
    label: "Transferencia",
    icon: "ArrowRightLeft",
    definition: "Traslado controlado de expedientes entre archivos de gestión, archivo central y archivo histórico según el Programa de Control de Documentos.",
    importance: "Libera espacio y capacidad en el archivo de trámite sin perder el control ni la cadena de custodia sobre los documentos transferidos.",
    example: "Al cumplirse el plazo de retención en el archivo de gestión, el expediente se transfiere electrónicamente al Archivo Central con acta digital.",
  },
  {
    id: "preservacion",
    label: "Preservación",
    icon: "ShieldCheck",
    definition: "Conjunto de estrategias técnicas y de gestión (migración, emulación, metadatos de preservación) que aseguran accesibilidad a largo plazo.",
    importance: "Los formatos y soportes digitales caducan; sin preservación activa, el documento electrónico se vuelve ilegible aunque el bit siga existiendo.",
    example: "Un documento en formato propietario de 2010 se migra a PDF/A para garantizar que pueda abrirse en cualquier software dentro de 30 años.",
  },
  {
    id: "acceso",
    label: "Acceso",
    icon: "KeyRound",
    definition: "Conjunto de reglas y mecanismos que determinan quién puede consultar un documento y bajo qué condiciones de seguridad y confidencialidad.",
    importance: "Equilibra el derecho de acceso a la información pública con la protección de datos personales y la información clasificada.",
    example: "Un expediente de investigación disciplinaria se marca con acceso restringido hasta que la resolución quede consentida.",
  },
];

export const scopeStages: ScopeStage[] = [
  {
    id: "creacion",
    order: 1,
    title: "Creación",
    whatHappens: "Se genera el documento electrónico nativo dentro de una herramienta ofimática o del propio SGD, o se recibe de un tercero externo.",
    who: ["Funcionario emisor", "Área usuaria"],
    documents: ["Memorando", "Informe", "Oficio"],
    metadata: ["Autor", "Fecha de creación", "Tipo documental"],
  },
  {
    id: "recepcion",
    order: 2,
    title: "Recepción",
    whatHappens: "El sistema recibe un documento originado fuera de la entidad (ciudadano, otra institución) a través de mesa de partes física o virtual.",
    who: ["Mesa de Partes", "Administrado"],
    documents: ["Solicitud", "Recurso administrativo"],
    metadata: ["Fecha y hora de recepción", "Canal de ingreso", "Remitente"],
  },
  {
    id: "registro",
    order: 3,
    title: "Registro",
    whatHappens: "El documento recibe un número único de expediente o de trámite documentario que lo identifica de forma irrepetible en el sistema.",
    who: ["Personal de Trámite Documentario"],
    documents: ["Cargo de recepción"],
    metadata: ["Número de expediente", "Código de barras / hash"],
  },
  {
    id: "clasificacion",
    order: 4,
    title: "Clasificación",
    whatHappens: "El documento se ubica dentro del Cuadro de Clasificación Documental según la función y serie documental que le corresponde.",
    who: ["Especialista en Gestión Documental"],
    documents: ["Todo documento registrado"],
    metadata: ["Código de serie documental", "Unidad orgánica productora"],
  },
  {
    id: "tramite",
    order: 5,
    title: "Trámite",
    whatHappens: "El expediente circula entre las áreas competentes para su atención: derivaciones, informes técnicos, opiniones legales y decisiones.",
    who: ["Áreas competentes", "Especialistas técnicos y legales"],
    documents: ["Informe técnico", "Informe legal", "Proveído"],
    metadata: ["Historial de derivaciones", "Plazos y vencimientos"],
  },
  {
    id: "archivo",
    order: 6,
    title: "Archivo",
    whatHappens: "Concluido el trámite, el expediente se cierra y se conserva en el archivo de gestión del área que lo produjo.",
    who: ["Responsable de archivo de gestión"],
    documents: ["Expediente completo y foliado"],
    metadata: ["Fecha de cierre", "Ubicación topográfica digital"],
  },
  {
    id: "transferencia",
    order: 7,
    title: "Transferencia",
    whatHappens: "Vencido el plazo de permanencia en el archivo de gestión, el expediente se traslada de forma controlada al Archivo Central.",
    who: ["Comité Evaluador de Documentos", "Archivo Central"],
    documents: ["Acta de transferencia", "Inventario documental"],
    metadata: ["Fecha de transferencia", "Plazo de retención aplicado"],
  },
  {
    id: "preservacion",
    order: 8,
    title: "Preservación",
    whatHappens: "Se aplican políticas de preservación digital para garantizar la legibilidad y autenticidad del expediente durante todo su ciclo de vida útil.",
    who: ["Archivo Central", "Área de Tecnologías de la Información"],
    documents: ["Expedientes con valor permanente o de retención prolongada"],
    metadata: ["Formato de preservación", "Verificación de integridad (checksum)"],
  },
  {
    id: "acceso",
    order: 9,
    title: "Acceso",
    whatHappens: "El expediente queda disponible para consulta interna, fiscalización, transparencia o atención de solicitudes de acceso a la información.",
    who: ["Ciudadanía", "Órganos de control", "Personal autorizado"],
    documents: ["Copias certificadas", "Consultas en línea"],
    metadata: ["Nivel de acceso", "Registro de consultas"],
  },
];

export const relationLeft: RelationItem[] = [
  { id: "l1", text: "Principios archivísticos: procedencia y orden original" },
  { id: "l2", text: "Ciclo vital del documento y teoría de las tres edades" },
  { id: "l3", text: "Cuadro de Clasificación Documental (CCD)" },
  { id: "l4", text: "Programa de Control de Documentos y retención documental" },
  { id: "l5", text: "Transferencias documentales entre archivos" },
];

export const relationRight: RelationItem[] = [
  { id: "r1", text: "Autenticidad e integridad en entornos digitales" },
  { id: "r2", text: "Metadatos normalizados según ISO 23081" },
  { id: "r3", text: "Firma digital y certificados en el ciclo documental" },
  { id: "r4", text: "Sistemas de Gestión Documental Electrónica (SGDEA)" },
  { id: "r5", text: "Preservación digital a largo plazo" },
];

/** Índices alineados: relationLeft[i] se conecta con relationRight[i]. */
export const relationLinks: number[] = [0, 1, 2, 3, 4];

export const electronicDocument: ElectronicDocumentInfo = {
  definition:
    "Documento cuyo contenido está registrado en formato digital y que incorpora firma digital y metadatos normalizados que garantizan su autenticidad, integridad y valor jurídico equivalente al documento en soporte papel.",
  characteristics: [
    "Nace, se tramita y se archiva íntegramente en medios electrónicos",
    "Incorpora firma digital vinculada a un certificado válido",
    "Contiene metadatos normalizados de gestión documental",
    "Es íntegro: cualquier alteración posterior es detectable",
    "Es auténtico: se puede verificar su autor y origen",
  ],
  elements: [
    "Contenido (el texto, imagen o dato registrado)",
    "Firma digital y sello de tiempo",
    "Metadatos de creación, trámite y gestión",
    "Identificador único dentro del sistema",
  ],
  legalValue: "El documento electrónico, cuando cumple los requisitos de autenticidad, integridad y conservación exigidos por la normativa vigente, tiene validez y eficacia jurídica equivalente al documento en soporte papel.",
  normativa: [
    "ISO 15489-1:2016 — Información y documentación, gestión de documentos",
    "ISO 23081-1:2017 — Metadatos para la gestión de documentos",
    "Normativa archivística del Archivo General de la Nación",
    "Modelo de Gestión Documental y disposiciones relacionadas con gestión documental digital e interoperabilidad",
  ],
  useCases: [
    "Resoluciones administrativas firmadas digitalmente",
    "Memorandos y oficios generados dentro del SGD",
    "Contratos electrónicos con firma digital de ambas partes",
    "Notificaciones electrónicas con constancia de recepción",
  ],
  agnFlow: [
    { id: "memo", label: "Memorando", description: "El área usuaria redacta el documento en el módulo de trámite del SGD." },
    { id: "creado", label: "Creado en el SGD", description: "El sistema le asigna número, fecha y metadatos de creación." },
    { id: "firmado", label: "Firmado digitalmente", description: "El funcionario competente aplica su firma digital con certificado vigente." },
    { id: "derivado", label: "Derivado", description: "El SGD enruta el documento al área competente para su atención." },
    { id: "archivado", label: "Archivado", description: "Concluido el trámite, el documento se integra al expediente electrónico." },
  ],
};

export const digitalExamples: DigitalExample[] = [
  { id: "pdf", format: "PDF", icon: "FileText", description: "Documento portable; puede o no tener firma digital." },
  { id: "word", format: "Word", icon: "FileType", description: "Documento editable de uso interno, sin control de integridad." },
  { id: "excel", format: "Excel", icon: "Sheet", description: "Hoja de cálculo para reportes y análisis internos." },
  { id: "correo", format: "Correo electrónico", icon: "Mail", description: "Mensaje digital; requiere metadatos y captura formal para tener valor archivístico." },
  { id: "xml", format: "XML", icon: "FileCode", description: "Formato estructurado usado para el intercambio de datos entre sistemas." },
  { id: "tiff", format: "TIFF", icon: "Image", description: "Formato de imagen sin pérdida, común en digitalización de archivos." },
  { id: "video", format: "Video", icon: "Video", description: "Registro audiovisual de audiencias, capacitaciones o entrevistas." },
  { id: "audio", format: "Audio", icon: "AudioLines", description: "Grabación sonora, por ejemplo de una sesión o declaración." },
];

export const digitization: DigitizationInfo = {
  flow: [
    { id: "fisico", label: "Documento físico" },
    { id: "escaner", label: "Escáner" },
    { id: "ocr", label: "OCR" },
    { id: "pdf", label: "PDF" },
    { id: "digitalizado", label: "Documento digitalizado" },
  ],
  advantages: [
    "Facilita el acceso y la búsqueda del contenido mediante OCR",
    "Reduce el manejo físico y el deterioro del original",
    "Permite compartir copias sin trasladar el documento fuente",
  ],
  limitations: [
    "No sustituye al documento físico salvo autorización normativa expresa",
    "No incorpora, por sí sola, firma digital ni metadatos de gestión",
    "La calidad de la copia depende del proceso de captura y OCR",
  ],
  whenValid: "La copia digitalizada conserva valor archivístico pleno cuando el proceso de digitalización certificada cumple los requisitos normativos (resolución mínima, metadatos de proceso, firma digital del fedatario) y el documento físico original se conserva o elimina conforme al programa de retención documental.",
};

export const electronicFileDocs: ElectronicFileDoc[] = [
  { id: "memo", title: "Memorando", icon: "FileText", note: "Documento que inicia la solicitud de transferencia documental." },
  { id: "informe-tecnico", title: "Informe Técnico", icon: "FileSearch", note: "Evaluación especializada sobre la procedencia de la transferencia." },
  { id: "informe-legal", title: "Informe Legal", icon: "Scale", note: "Opinión jurídica sobre el cumplimiento del marco normativo aplicable." },
  { id: "resolucion", title: "Resolución", icon: "Stamp", note: "Acto administrativo que aprueba formalmente la transferencia." },
  { id: "cargo", title: "Cargo", icon: "ReceiptText", note: "Constancia de notificación de la resolución a las partes interesadas." },
  { id: "notificaciones", title: "Notificaciones", icon: "BellRing", note: "Comunicaciones electrónicas enviadas a las áreas involucradas." },
];

export const comparisonMatrix: ComparisonRow[] = [
  { criterion: "Origen", values: ["Nativo digital o recibido por medio electrónico", "Nativo digital", "Conversión de un original físico", "Agrupación de documentos electrónicos"] },
  { criterion: "Metadatos", values: ["Normalizados (ISO 23081)", "Básicos o inexistentes", "De proceso de digitalización", "Heredados de sus documentos + propios"] },
  { criterion: "Firma", values: ["Firma digital obligatoria", "Opcional, sin efecto legal", "Firma del fedatario (si es certificada)", "Firma de cada documento que contiene"] },
  { criterion: "Autenticidad", values: ["Verificable criptográficamente", "No garantizada", "Depende de la certificación del proceso", "Depende de sus documentos componentes"] },
  { criterion: "Integridad", values: ["Garantizada por hash/firma", "No garantizada", "Garantizada solo si es certificada", "Garantizada por foliado electrónico"] },
  { criterion: "Valor legal", values: ["Pleno, equivalente al papel", "Ninguno por sí solo", "Pleno solo si es certificada", "Pleno, como unidad documental"] },
  { criterion: "Ejemplos", values: ["Resolución firmada digitalmente", "Word, Excel sin firmar", "PDF escaneado de un contrato físico", "Expediente de transferencia documental"] },
  { criterion: "Formato típico", values: ["PDF/A firmado, XML firmado", "DOCX, XLSX, MP4", "PDF/A, TIFF", "Contenedor de documentos electrónicos"] },
  { criterion: "Conservación", values: ["Preservación digital a largo plazo", "Sin política formal de preservación", "Requiere preservación + custodia del físico (según norma)", "Preservación del conjunto documental"] },
  { criterion: "Trazabilidad", values: ["Completa, mediante metadatos de gestión", "Limitada o nula", "Del proceso de digitalización", "Completa, mediante foliado y metadatos"] },
];

/** Caso didáctico contextualizado al AGN: secuencia genérica de ejemplo, no una descripción de un flujo interno real. */
export const agnCaseSteps: AGNCaseStep[] = [
  { id: "mesa-partes", order: 1, actor: "Área usuaria", document: "Solicitud de Transferencia Documental", action: "Presenta la solicitud de transferencia documental.", result: "La solicitud queda registrada como documento electrónico de ingreso.", time: "Inicio del trámite" },
  { id: "registro", order: 2, actor: "Trámite Documentario", document: "Solicitud registrada", action: "Asigna número de expediente y deriva al área competente.", result: "El expediente electrónico queda creado y trazable.", time: "Inicio del trámite" },
  { id: "especialista", order: 3, actor: "Especialista en Gestión Documental", document: "Expediente de transferencia", action: "Revisa el inventario documental y el cumplimiento de los plazos de retención.", result: "Se determina la procedencia técnica de la transferencia.", time: "Evaluación técnica" },
  { id: "informe-tecnico", order: 4, actor: "Especialista en Gestión Documental", document: "Informe Técnico", action: "Elabora el informe con el sustento archivístico de la transferencia.", result: "El informe se incorpora al expediente electrónico.", time: "Evaluación técnica" },
  { id: "firma-digital", order: 5, actor: "Responsable de archivo", document: "Informe Técnico", action: "Firma digitalmente el informe con su certificado vigente.", result: "El documento adquiere autenticidad e integridad verificables.", time: "Evaluación técnica" },
  { id: "director", order: 6, actor: "Autoridad competente", document: "Resolución de aprobación", action: "Evalúa el informe y emite la resolución que aprueba la transferencia.", result: "El acto administrativo queda firmado digitalmente.", time: "Decisión" },
  { id: "archivo", order: 7, actor: "Archivo Central", document: "Expediente completo", action: "Recibe formalmente los documentos transferidos y verifica su integridad.", result: "Los documentos quedan bajo custodia del Archivo Central.", time: "Cierre del trámite" },
  { id: "expediente-electronico", order: 8, actor: "Archivo Central", document: "Expediente Electrónico de Transferencia", action: "Cierra y preserva el expediente electrónico como evidencia del proceso.", result: "El expediente queda disponible para consulta y auditoría.", time: "Cierre del trámite" },
];

export const dragDropCategories: DragDropCategory[] = [
  { id: "electronico", label: "Documento Electrónico", icon: "FileSignature" },
  { id: "digital", label: "Documento Digital", icon: "FileType" },
  { id: "digitalizado", label: "Documento Digitalizado", icon: "ScanLine" },
  { id: "expediente", label: "Expediente Electrónico", icon: "FolderOpen" },
];

export const dragDropItems: DragDropItem[] = [
  { id: "d1", label: "Resolución firmada con certificado digital", icon: "FileSignature", category: "electronico" },
  { id: "d2", label: "Hoja de Excel de control interno sin firmar", icon: "Sheet", category: "digital" },
  { id: "d3", label: "Contrato físico escaneado a PDF por un fedatario", icon: "ScanLine", category: "digitalizado" },
  { id: "d4", label: "Conjunto foliado: memorando + informe + resolución", icon: "FolderOpen", category: "expediente" },
  { id: "d5", label: "Correo electrónico interno sin metadatos de gestión", icon: "Mail", category: "digital" },
  { id: "d6", label: "Oficio firmado digitalmente y derivado por el SGD", icon: "FileSignature", category: "electronico" },
  { id: "d7", label: "Imagen TIFF de un acta antigua digitalizada", icon: "Image", category: "digitalizado" },
  { id: "d8", label: "Expediente de transferencia documental completo", icon: "FolderOpen", category: "expediente" },
];

export const interactiveCaseItems: ClassificationItem[] = [
  {
    id: "c1",
    label: "Memorando N.° 245-2026 firmado digitalmente por el jefe de área",
    icon: "FileSignature",
    correctCategory: "electronico",
    feedback: "Correcto: nace en el SGD, tiene firma digital vigente y metadatos normalizados — cumple los tres requisitos del documento electrónico.",
  },
  {
    id: "c2",
    label: "Plantilla Word de solicitud, aún sin enviar ni firmar",
    icon: "FileType",
    correctCategory: "digital",
    feedback: "Correcto: es un archivo nativo digital, pero al no tener firma ni haber sido capturado por el sistema carece de valor archivístico pleno.",
  },
  {
    id: "c3",
    label: "PDF/A de un título profesional escaneado y certificado por fedatario",
    icon: "ScanLine",
    correctCategory: "digitalizado",
    feedback: "Correcto: el original es físico; la digitalización certificada le permite circular electrónicamente conservando su valor probatorio.",
  },
  {
    id: "c4",
    label: "Conjunto foliado con memorando, informe técnico y resolución sobre un mismo trámite",
    icon: "FolderOpen",
    correctCategory: "expediente",
    feedback: "Correcto: varios documentos electrónicos ordenados en torno a un mismo asunto constituyen un expediente electrónico.",
  },
];

export const conceptMapFinalNodes: { id: string; label: string; icon: string }[] = [
  { id: "doc-electronico", label: "Documento Electrónico", icon: "FileSignature" },
  { id: "doc-digital", label: "Documento Digital", icon: "FileType" },
  { id: "doc-digitalizado", label: "Documento Digitalizado", icon: "ScanLine" },
  { id: "expediente-electronico", label: "Expediente Electrónico", icon: "FolderOpen" },
  { id: "sgd", label: "SGD", icon: "Database" },
  { id: "archivo-electronico", label: "Archivo Electrónico", icon: "Archive" },
  { id: "preservacion-digital", label: "Preservación Digital", icon: "ShieldCheck" },
];

export const quizQuestions: InstantQuizQuestion[] = [
  {
    id: "q1",
    question: "¿Cuál es el requisito que distingue a un documento electrónico de un documento digital?",
    options: ["Estar en formato PDF", "Tener firma digital y metadatos normalizados", "Haber sido enviado por correo", "Ocupar poco espacio de almacenamiento"],
    correctIndex: 1,
    explanation: "El documento electrónico requiere firma digital válida y metadatos de gestión normalizados; el formato o el canal de envío no son determinantes.",
  },
  {
    id: "q2",
    question: "Una hoja de Excel creada internamente y nunca firmada digitalmente es:",
    options: ["Un documento electrónico", "Un documento digital", "Un expediente electrónico", "Un documento digitalizado"],
    correctIndex: 1,
    explanation: "Es un archivo nativo en formato digital, pero al carecer de firma digital y metadatos de gestión no alcanza la categoría de documento electrónico.",
  },
  {
    id: "q3",
    question: "¿Qué caracteriza a un documento digitalizado?",
    options: ["Nace directamente en formato digital", "Es la conversión de un original físico mediante escaneo", "Siempre tiene firma digital", "Sustituye automáticamente al original en todos los casos"],
    correctIndex: 1,
    explanation: "El documento digitalizado proviene de un original físico capturado por escáner; solo conserva valor pleno si el proceso está certificado conforme a norma.",
  },
  {
    id: "q4",
    question: "Un expediente electrónico se define principalmente como:",
    options: ["Un documento firmado digitalmente", "Un repositorio en la nube", "Un conjunto ordenado y foliado de documentos electrónicos sobre un mismo asunto", "Una base de datos de metadatos"],
    correctIndex: 2,
    explanation: "El expediente electrónico es la unidad documental que agrupa, ordena y foliada digitalmente los documentos relativos a un mismo trámite.",
  },
  {
    id: "q5",
    question: "Según ISO 23081, los metadatos de gestión documental sirven principalmente para:",
    options: ["Decorar el documento", "Describir contexto, contenido, estructura y gestión del documento en el tiempo", "Reemplazar la firma digital", "Reducir el tamaño del archivo"],
    correctIndex: 1,
    explanation: "ISO 23081 define los metadatos como la información estructurada que documenta el contexto y la gestión del documento a lo largo de su ciclo de vida.",
  },
  {
    id: "q6",
    question: "¿En qué etapa del alcance de la gestión documental se asigna el número de expediente?",
    options: ["Creación", "Registro", "Preservación", "Acceso"],
    correctIndex: 1,
    explanation: "El registro es el acto formal que dota al documento de un identificador único y trazable dentro del sistema.",
  },
  {
    id: "q7",
    question: "La preservación digital es necesaria principalmente porque:",
    options: ["Los documentos electrónicos ocupan mucho espacio", "Los formatos y soportes digitales pueden volverse obsoletos o ilegibles con el tiempo", "La firma digital caduca cada año", "Los metadatos deben eliminarse periódicamente"],
    correctIndex: 1,
    explanation: "Sin estrategias activas de migración o emulación, un documento puede volverse técnicamente inaccesible aunque los bits sigan almacenados.",
  },
  {
    id: "q8",
    question: "¿Qué elemento NO es indispensable para que un documento digitalizado conserve valor archivístico pleno?",
    options: ["Cumplir la resolución mínima de captura exigida por norma", "Contar con metadatos del proceso de digitalización", "Haber sido escrito originalmente en formato XML", "Certificación del fedatario cuando la norma lo exige"],
    correctIndex: 2,
    explanation: "El formato original del documento físico es irrelevante; lo relevante es el cumplimiento del proceso de digitalización certificada.",
  },
  {
    id: "q9",
    question: "En el flujo de la Gestión de Archivos Electrónicos I hacia esta unidad, ¿qué conocimiento previo se conecta directamente con la firma digital?",
    options: ["Los principios de procedencia y orden original", "El ciclo vital del documento y las tres edades", "El Cuadro de Clasificación Documental", "El Programa de Control de Documentos"],
    correctIndex: 1,
    explanation: "El ciclo vital del documento (archivo de gestión, central e histórico) se sostiene ahora sobre documentos firmados digitalmente en cada una de esas edades.",
  },
  {
    id: "q10",
    question: "¿Cuál de las siguientes afirmaciones es correcta sobre la relación entre estos cuatro conceptos?",
    options: [
      "Todo documento digital es también un documento electrónico",
      "Todo documento electrónico es un documento digital, pero no todo documento digital es electrónico",
      "El expediente electrónico nunca contiene documentos electrónicos",
      "El documento digitalizado siempre tiene el mismo valor legal que el documento electrónico",
    ],
    correctIndex: 1,
    explanation: "\"Electrónico\" es un subconjunto de \"digital\": todo documento electrónico está en formato digital, pero solo alcanza esa categoría cuando suma firma digital y metadatos normalizados.",
  },
];

export const resources: ResourceCard[] = [
  {
    id: "agn",
    title: "Archivo General de la Nación",
    badge: "Ente rector",
    summary: "Autoridad del Sistema Nacional de Archivos del Perú; emite lineamientos y normas técnicas para la gestión documental pública.",
  },
  {
    id: "normativa-agn",
    title: "Normativa archivística del AGN",
    badge: "Marco legal",
    summary: "Conjunto de normas y lineamientos que reconocen y regulan la gestión de documentos y expedientes en entornos electrónicos en el Perú.",
  },
  {
    id: "iso-15489",
    title: "ISO 15489-1:2016",
    badge: "Norma internacional",
    summary: "Establece los principios y requisitos para la creación, captura y gestión de documentos de archivo, con independencia de su soporte.",
  },
  {
    id: "iso-23081",
    title: "ISO 23081-1:2017",
    badge: "Norma internacional",
    summary: "Define el marco de metadatos para la gestión de documentos: qué describir, para qué y cómo deben evolucionar en el tiempo.",
  },
  {
    id: "modelo-gestion",
    title: "Modelo de Gestión Documental",
    badge: "Marco de referencia",
    summary: "Estructura de referencia y disposiciones relacionadas con la gestión documental digital e interoperabilidad, aplicables al ciclo de vida documental.",
  },
];

export const summaryPoints: SummaryPoint[] = [
  { id: "s1", title: "01", description: "Un archivo electrónico no es simplemente una carpeta con archivos.", icon: "FolderX" },
  { id: "s2", title: "02", description: "El formato digital no determina por sí solo la naturaleza documental.", icon: "FileType" },
  { id: "s3", title: "03", description: "Un documento digitalizado tiene un origen relacionado con un proceso de digitalización.", icon: "ScanLine" },
  { id: "s4", title: "04", description: "Un expediente electrónico representa una agrupación contextualizada de documentos relacionados.", icon: "FolderOpen" },
  { id: "s5", title: "05", description: "La gestión electrónica requiere considerar documentos, contexto, organización, información asociada y controles.", icon: "Workflow" },
];

export const priorKnowledgeQuestion = {
  prompt: "Una institución recibe un archivo PDF.\n\n¿Podemos afirmar automáticamente que se trata de un documento electrónico?",
  options: [
    { id: "a", label: "Sí." },
    { id: "b", label: "No." },
    { id: "c", label: "Depende de su origen, contexto y forma de gestión." },
    { id: "d", label: "Todo PDF es un expediente electrónico." },
  ],
  correctId: "c",
  feedback:
    "La extensión o formato del archivo no es suficiente para determinar su naturaleza documental. Es necesario analizar su origen, contexto, relación con el proceso y forma de gestión.",
};

export const missingContextQuestion = {
  filename: "MEMORANDO_0254.pdf",
  prompt: "¿Es suficiente este nombre de archivo para gestionar archivísticamente el documento?",
  options: [
    { id: "a", label: "Sí." },
    { id: "b", label: "No." },
    { id: "c", label: "Depende del contexto y de la información disponible." },
  ],
  correctId: "c",
  feedback:
    "El nombre del archivo por sí solo no proporciona necesariamente todo el contexto requerido. Un documento gestionado archivísticamente necesita, además del archivo, información sobre su productor, fecha, asunto, tipo documental, contexto, expediente al que pertenece, estado e información asociada.",
  missingElements: ["Productor", "Fecha", "Asunto", "Tipo documental", "Contexto", "Expediente", "Estado", "Información asociada"],
};

export const folderProblemsData = {
  files: [
    "/documentos/",
    "informe.pdf",
    "informe_final.pdf",
    "informe_final2.pdf",
    "informe_final_ahora_si.pdf",
    "resolucion.pdf",
    "scan001.pdf",
    "scan002.pdf",
    "nuevo.pdf",
  ],
  options: [
    "Identificación deficiente",
    "Falta de contexto",
    "Posible confusión de versiones",
    "Nombres inconsistentes",
    "Falta de estructura documental",
    "Dificultad para establecer relaciones",
    "Riesgo de pérdida de información contextual",
  ],
  revealTitle: "Por qué importa",
  revealContent:
    "Ninguno de estos nombres identifica productor, fecha, asunto o expediente. Sin metadatos ni una convención de nomenclatura, no es posible saber cuál es la versión vigente, a qué trámite pertenece cada archivo, ni recuperar su contexto de producción — el riesgo de pérdida de información aumenta con cada renombramiento manual.",
};

export const professionalCaseData = {
  scenario:
    "Una institución tiene aproximadamente 10 000 archivos PDF almacenados en carpetas compartidas.\n\nLos archivos pertenecen a diferentes oficinas y años. Algunos fueron generados originalmente en formato digital. Otros son resultado de digitalización. Algunos pertenecen a expedientes. Otros no tienen información suficiente sobre su origen.",
  question: "¿Podemos afirmar que la institución ya dispone de un archivo electrónico gestionado?",
  mustIdentify: [
    "Problemas",
    "Riesgos",
    "Información faltante",
    "Necesidades de organización",
    "Necesidad de contexto",
    "Necesidad de metadatos",
    "Necesidad de control",
    "Relación con un SGD",
  ],
  rubric: [
    { criterion: "Comprensión conceptual", weight: 30 },
    { criterion: "Identificación de problemas", weight: 25 },
    { criterion: "Argumentación archivística", weight: 25 },
    { criterion: "Propuesta", weight: 20 },
  ],
};

export const debateData = {
  statement: "Un archivo electrónico es simplemente un conjunto de archivos PDF almacenados en un servidor.",
  resolution:
    "La gestión archivística requiere considerar no solamente los archivos almacenados, sino también su contexto, organización, relaciones, control, acceso y demás elementos necesarios para su gestión.",
};

export const integratorCaseSteps: FlowStep[] = [
  { id: "solicitud", label: "Solicitud" },
  { id: "memorando", label: "Memorando" },
  { id: "informe-tecnico", label: "Informe Técnico" },
  { id: "informe-legal", label: "Informe Legal" },
  { id: "proveido", label: "Proveído" },
  { id: "resolucion", label: "Resolución" },
  { id: "notificacion", label: "Notificación" },
];

export const integratorCaseQuestions: string[] = [
  "¿Cuántos documentos existen?",
  "¿Existe un expediente?",
  "¿Qué relación existe entre ellos?",
  "¿Qué información debería permitir identificarlos?",
  "¿Qué información permitiría comprender su contexto?",
  "¿Qué riesgos existirían si se elimina uno de los documentos?",
  "¿Qué papel tendría un SGD?",
];

export const nextWeekData = {
  currentQuestion: "¿Qué gestionamos?",
  currentAnswer: ["Documentos", "Expedientes", "Contexto"],
  nextWeekNumber: 2,
  nextWeekTitle: "Sistema de Gestión Documental (SGD)",
  nextQuestion: "¿Dónde y cómo los gestionamos?",
};

export const conceptualDimensions: { id: string; title: string; question: string }[] = [
  { id: "documento", title: "Documento", question: "¿Qué información se gestiona?" },
  { id: "contexto", title: "Contexto", question: "¿Quién lo produjo, por qué y dentro de qué actividad?" },
  { id: "organizacion", title: "Organización", question: "¿Cómo se relaciona con otros documentos?" },
  { id: "control", title: "Control", question: "¿Qué acciones y estados deben registrarse?" },
  { id: "acceso", title: "Acceso", question: "¿Quién puede consultarlo o intervenir?" },
  { id: "continuidad", title: "Continuidad", question: "¿Cómo se mantiene disponible durante el tiempo que corresponda?" },
];
