import type { FlowStep } from "../../../types/content.types";
import type {
  DigitizationCaseItem,
  DimensionCase,
  ExpedienteLossItem,
  FieldMapping,
  FormatComparisonRow,
  FormatInfo,
  FormatSelectionCase,
  InteropDimensionInfo,
  ObjectiveCard,
  QualityControlStage,
  SummaryPoint,
  WeekConnection,
} from "./week08.types";

export const heroChain: { id: string; label: string; icon: string }[] = [
  { id: "sistema-a", label: "Sistema A", icon: "Database" },
  { id: "intercambio", label: "Intercambio", icon: "ArrowRightLeft" },
  { id: "sistema-b", label: "Sistema B", icon: "DatabaseZap" },
  { id: "digitalizacion", label: "Digitalización", icon: "ScanLine" },
  { id: "calidad", label: "Calidad", icon: "ShieldCheck" },
  { id: "formato", label: "Formato", icon: "FileType" },
];

export const weekProgression: FlowStep[] = [
  { id: "s6", label: "Semana 6: Firma, certificados y trazabilidad" },
  { id: "s7", label: "Semana 7: Seguridad de los documentos y archivos electrónicos" },
  { id: "s8", label: "Semana 8: Interoperabilidad, digitalización y formatos" },
];

export const centralQuestions = [
  "¿Cómo podemos intercambiar documentos entre sistemas sin perder su significado, contexto, calidad ni capacidad de gestión?",
  "¿Cómo sabemos si un documento digitalizado tiene la calidad necesaria para ser utilizado y gestionado correctamente?",
];

export const objectives: ObjectiveCard[] = [
  { id: "o1", title: "Explicar qué significa interoperabilidad documental", description: "No es solo \"dos sistemas que se conectan\": implica procesos, significado y mecanismos compatibles.", icon: "ArrowRightLeft" },
  { id: "o2", title: "Distinguir interoperabilidad organizacional, semántica y técnica", description: "Tres dimensiones distintas que pueden fallar de forma independiente.", icon: "GitCompareArrows" },
  { id: "o3", title: "Analizar un intercambio de documentos entre sistemas", description: "Identificar qué puede perderse y por qué.", icon: "FileSearch" },
  { id: "o4", title: "Identificar elementos que deben conservarse durante el intercambio", description: "Contenido, contexto, metadatos, identificación y relación con el expediente.", icon: "ClipboardList" },
  { id: "o5", title: "Comprender el intercambio de expedientes", description: "Intercambiar un expediente no es enviar varios archivos sueltos.", icon: "FolderTree" },
  { id: "o6", title: "Identificar problemas de interoperabilidad", description: "Reconocer en qué dimensión se origina cada problema.", icon: "AlertCircle" },
  { id: "o7", title: "Explicar criterios básicos de digitalización", description: "Resolución, color, formato y control de calidad, sin reglas universales rígidas.", icon: "ScanLine" },
  { id: "o8", title: "Reconocer factores que afectan la calidad de una imagen digitalizada", description: "Enfoque, iluminación, orientación, recorte y legibilidad.", icon: "Image" },
  { id: "o9", title: "Comparar formatos", description: "TIFF, JPEG, PNG, PDF y PDF/A, según su propósito.", icon: "FileType" },
  { id: "o10", title: "Seleccionar formatos considerando el uso y la conservación", description: "La selección depende del propósito, no de una regla universal.", icon: "Workflow" },
  { id: "o11", title: "Identificar errores de digitalización", description: "Detectar imágenes inclinadas, cortadas o poco legibles.", icon: "FileX" },
  { id: "o12", title: "Proponer mejoras técnicas", description: "Conectar un problema detectado con una mejora concreta.", icon: "RefreshCw" },
];

export const interopSimpleDefinition = "\"Dos sistemas que se conectan.\"";

export const interopFullDefinition =
  "La interoperabilidad permite que diferentes sistemas, organizaciones o plataformas puedan intercambiar información y utilizarla de manera coherente para cumplir un propósito.";

export const interopDimensionsIntro =
  "Esa definición completa involucra varias dimensiones distintas: que las organizaciones tengan procesos compatibles (organizacional), que ambas partes interpreten la información de la misma manera (semántica), y que existan mecanismos tecnológicos para realizar el intercambio (técnica). Un fallo en cualquiera de las tres impide una interoperabilidad real, aunque las otras dos funcionen.";

export const interopDimensions: InteropDimensionInfo[] = [
  {
    id: "organizacional",
    label: "Interoperabilidad organizacional",
    icon: "Landmark",
    definition: "Las organizaciones deben tener procesos y responsabilidades compatibles para que el intercambio tenga sentido.",
    questions: ["¿Quién envía?", "¿Quién recibe?", "¿Qué proceso se inicia?", "¿Qué responsabilidad tiene cada entidad?", "¿Qué ocurre después de recibir?"],
    institutionalExample: "La Entidad A envía un expediente, pero la Entidad B no tiene definido qué unidad debe recibirlo ni qué trámite debe iniciar: el archivo llega, pero el proceso no continúa.",
  },
  {
    id: "semantica",
    label: "Interoperabilidad semántica",
    icon: "Tags",
    definition: "Los sistemas deben interpretar la información de manera compatible, aunque usen nombres distintos para el mismo concepto.",
    questions: ["¿Ambos campos representan el mismo concepto?", "¿Existe una correspondencia documentada?", "¿Qué vocabulario o definición respalda esa equivalencia?"],
    institutionalExample: "El Sistema A registra \"DNI\" y el Sistema B registra \"Documento de identidad\": si no existe una correspondencia definida entre ambos campos, el dato puede duplicarse o perderse al transferirse.",
  },
  {
    id: "tecnica",
    label: "Interoperabilidad técnica",
    icon: "Workflow",
    definition: "Los sistemas necesitan mecanismos tecnológicos compatibles (APIs, servicios, formatos estructurados, protocolos) para intercambiar información.",
    questions: ["¿Existe un mecanismo para transmitir la información?", "¿El formato es legible por ambos sistemas?", "¿Hay validación durante la transferencia?"],
    institutionalExample: "El Sistema A puede enviar los datos, pero el Sistema B solo acepta un formato distinto al que A utiliza: sin un mecanismo de transformación, el intercambio técnico falla.",
  },
];

export const technicalFlow: FlowStep[] = [
  { id: "solicitud", label: "Solicitud" },
  { id: "servicio", label: "Servicio de intercambio" },
  { id: "validacion", label: "Validación" },
  { id: "transformacion", label: "Transformación / correspondencia" },
  { id: "registro", label: "Registro en Sistema B" },
];

export const dimensionCases: DimensionCase[] = [
  { id: "caso-1", scenario: "El expediente llega correctamente al sistema de la otra entidad, pero nadie en esa entidad sabe qué unidad debe atenderlo ni qué trámite continuar.", belongsTo: "organizacional" },
  { id: "caso-2", scenario: "El campo \"Fecha de emisión\" del sistema que envía se interpreta como \"Fecha de recepción\" en el sistema que recibe, porque no existe una correspondencia definida entre ambos campos.", belongsTo: "semantica" },
  { id: "caso-3", scenario: "El sistema que envía exporta la información en un formato que el sistema receptor no puede leer, y no existe ningún mecanismo de conversión entre ambos.", belongsTo: "tecnica" },
  { id: "caso-4", scenario: "El documento se transfiere exitosamente, pero la entidad receptora no tiene un procedimiento definido para decidir qué hacer con los documentos que recibe de otras entidades.", belongsTo: "organizacional" },
  { id: "caso-5", scenario: "Ambas entidades usan el término \"expediente activo\" para significar cosas distintas: una lo usa para \"en trámite\" y otra para \"no archivado todavía\".", belongsTo: "semantica" },
];

export const statePeruIntro =
  "En el Estado peruano, distintas entidades públicas necesitan intercambiar información para prestar servicios y resolver trámites que involucran a más de una institución. La interoperabilidad documental es parte de la transformación digital del Estado: busca que un ciudadano no tenga que presentar el mismo documento varias veces ante distintas entidades, y que la información fluya entre sistemas de forma coherente.";

export const statePeruDisclaimer =
  "Esta sección describe el concepto de interoperabilidad del Estado peruano con fines académicos, a partir de información pública general. No describe el funcionamiento interno de ninguna plataforma específica, y no debe tomarse como documentación técnica oficial — para eso, debe consultarse la normativa y las fuentes oficiales vigentes.";

export const documentExchangeFlow: FlowStep[] = [
  { id: "entidad-a", label: "Entidad A" },
  { id: "documento", label: "Documento electrónico" },
  { id: "intercambio", label: "Intercambio" },
  { id: "entidad-b", label: "Entidad B" },
  { id: "registro", label: "Registro" },
  { id: "incorporacion", label: "Incorporación al expediente" },
];

export const documentExchangeQuestion = "¿Qué debería conservarse durante este intercambio? Selecciona todo lo que corresponda.";

export const documentExchangeOptions: { id: string; label: string; icon: string; belongs: boolean }[] = [
  { id: "contenido", label: "El contenido del documento", icon: "FileText", belongs: true },
  { id: "contexto", label: "El contexto que explica por qué se produjo", icon: "Workflow", belongs: true },
  { id: "identificacion", label: "La identificación (código, tipo documental)", icon: "Tags", belongs: true },
  { id: "metadatos", label: "Los metadatos asociados", icon: "ClipboardList", belongs: true },
  { id: "fecha-origen", label: "La fecha y el origen del documento", icon: "Stamp", belongs: true },
  { id: "relacion", label: "La relación con el expediente al que pertenece", icon: "FolderTree", belongs: true },
  { id: "evidencia", label: "Evidencia de que el intercambio ocurrió", icon: "FileSearch", belongs: true },
  { id: "diseno", label: "El diseño visual del documento", icon: "Image", belongs: false },
];

export const expedienteStructure = ["Documento 1", "Documento 2", "Documento 3", "Metadatos", "Relaciones", "Orden", "Historial"];

export const expedienteLossItems: ExpedienteLossItem[] = [
  { id: "doc1", label: "Documento 1", lostInExchange: false },
  { id: "doc2", label: "Documento 2", lostInExchange: true },
  { id: "doc3", label: "Documento 3", lostInExchange: false },
  { id: "metadatos", label: "Metadatos", lostInExchange: true },
  { id: "relaciones", label: "Relaciones entre documentos", lostInExchange: true },
  { id: "orden", label: "Orden original", lostInExchange: false },
  { id: "historial", label: "Historial de trazabilidad", lostInExchange: true },
];

export const expedienteLossIntro =
  "El expediente EXP-2026-0087 se envía completo desde el sistema de origen. Al revisarlo en el sistema receptor, compara ambas versiones y determina qué se perdió durante el intercambio.";

export const interopCaseIntro =
  "La Municipalidad Distrital de San Gabriel (simulación académica) debe enviar un expediente electrónico a otra entidad. Ambos sistemas registran la misma información, pero con nombres de campo distintos.";

export const fieldMappings: FieldMapping[] = [
  { id: "map-1", systemAField: "Código de expediente", systemBField: "Número de expediente", valid: true, note: "Ambos identifican de forma única al expediente; es una correspondencia semántica válida." },
  { id: "map-2", systemAField: "Fecha de creación", systemBField: "Fecha de registro", valid: false, note: "No son equivalentes: 'fecha de creación' es cuando se originó el expediente; 'fecha de registro' es cuando el Sistema B lo registró, que puede ser un momento distinto." },
  { id: "map-3", systemAField: "Área responsable", systemBField: "Unidad responsable", valid: true, note: "Ambos identifican a quién corresponde el expediente dentro de cada organización; es una correspondencia semántica válida." },
  { id: "map-4", systemAField: "Tipo documental", systemBField: "Clase documental", valid: true, note: "Ambos clasifican el tipo de documento; es una correspondencia semántica válida, aunque conviene verificar que las categorías específicas coincidan." },
];

export const digitizationIntro =
  "Interoperar no resuelve un problema si el documento original fue digitalizado con mala calidad. Digitalizar es convertir información contenida en un soporte físico a una representación digital mediante un proceso controlado.";

export const digitizationDistinctions = {
  digitalizacion: "El proceso de convertir un soporte físico en una representación digital.",
  documentoDigital: "Un documento que nació digital, sin que haya existido nunca en soporte físico (visto en la Semana 1).",
  documentoDigitalizado: "El resultado de digitalizar un documento que sí existió originalmente en papel u otro soporte físico (visto en la Semana 1).",
};

export const digitizingWellFactors = [
  "Resolución", "Enfoque", "Iluminación", "Orientación", "Recorte", "Legibilidad",
  "Color", "Escala de grises", "Formato", "Tamaño", "Integridad", "Identificación",
  "Metadatos", "Control de calidad",
];

export const resolutionExplanation =
  "La resolución (medida en DPI/PPI — puntos o píxeles por pulgada) determina cuánto detalle captura una imagen digitalizada. Una imagen a baja resolución puede dificultar la lectura, la ampliación, la identificación de detalles finos y el reconocimiento óptico de caracteres (OCR).";

export const resolutionNoUniversalRule =
  "No existe un único valor de DPI correcto para todos los casos. La resolución adecuada depende del tipo de documento, su tamaño, su contenido, la finalidad de la digitalización, el equipo disponible y los requisitos institucionales.";

export const resolutionComparisonLow = {
  label: "Baja resolución",
  description: "El texto se ve borroso, los trazos finos se pierden, y una ampliación muestra bloques de píxeles en lugar de detalle.",
};

export const resolutionComparisonGood = {
  label: "Resolución adecuada al propósito",
  description: "El texto es legible incluso ampliado, los detalles finos (firmas, sellos, anotaciones) se distinguen con claridad, y el documento permite un OCR confiable si se requiere.",
};

export const colorModes = [
  { id: "bn", label: "Blanco y negro", description: "Puede ser suficiente para documentos simples de texto, sin anotaciones ni elementos gráficos relevantes." },
  { id: "grises", label: "Escala de grises", description: "Útil cuando existen diferentes tonos (fotocopias, documentos con sombreado) que el blanco y negro puro no distingue." },
  { id: "color", label: "Color", description: "Necesario cuando el color forma parte del contenido informativo del documento, no solo de su apariencia." },
];

export const colorCases: { id: string; label: string; icon: string; recommendedMode: string; reason: string }[] = [
  { id: "doc-texto", label: "Oficio mecanografiado en blanco y negro, sin sellos a color", icon: "FileText", recommendedMode: "bn", reason: "El contenido informativo es solo texto; el color no aporta información adicional." },
  { id: "doc-sello", label: "Resolución con un sello oficial a color y una firma manuscrita en tinta azul", icon: "Stamp", recommendedMode: "color", reason: "El color del sello y la tinta puede ser relevante para verificar autenticidad; perderlo elimina información." },
  { id: "doc-fotocopia", label: "Copia fotostática con sombreados y manchas de distinta intensidad", icon: "ScanLine", recommendedMode: "grises", reason: "Los distintos tonos de la fotocopia se distinguen mejor en escala de grises que en blanco y negro puro." },
  { id: "doc-mapa", label: "Plano catastral con zonas diferenciadas por color", icon: "Image", recommendedMode: "color", reason: "El color es parte del contenido informativo: diferencia zonas o categorías en el plano." },
  { id: "doc-foto", label: "Fotografía institucional de un evento público", icon: "Image", recommendedMode: "color", reason: "Una fotografía pierde la mayor parte de su valor documental e informativo si se captura sin color." },
];

export const imageQualityBad = {
  label: "Imagen A",
  issues: ["Inclinada", "Cortada en el borde derecho", "Texto poco legible"],
};

export const imageQualityGood = {
  label: "Imagen B",
  issues: ["Correctamente orientada", "Documento completo", "Texto legible"],
};

export const formats: FormatInfo[] = [
  {
    id: "tiff",
    label: "TIFF",
    icon: "Image",
    type: "Imagen",
    compression: "Variable (puede ser sin pérdida)",
    definition: "Formato utilizado frecuentemente para digitalización, que permite conservar información de imagen con alta calidad.",
    considerations: ["No siempre es el formato correcto para todos los casos.", "Los archivos pueden ser considerablemente más grandes que otros formatos de imagen."],
  },
  {
    id: "jpeg",
    label: "JPEG",
    icon: "ScanLine",
    type: "Imagen",
    compression: "Con pérdida",
    definition: "Formato de imagen con compresión que reduce el tamaño del archivo a costa de cierta pérdida de información.",
    considerations: ["Útil quendo el tamaño del archivo importa más que la fidelidad exacta.", "La pérdida de información puede afectar documentos donde el detalle es crítico."],
  },
  {
    id: "png",
    label: "PNG",
    icon: "FileType",
    type: "Imagen",
    compression: "Sin pérdida",
    definition: "Formato de imagen con compresión sin pérdida, útil para determinados gráficos e imágenes.",
    considerations: ["No debe asumirse automáticamente como el mejor formato archivístico.", "Es más común en gráficos digitales que en digitalización de documentos de archivo."],
  },
  {
    id: "pdf",
    label: "PDF",
    icon: "FileText",
    type: "Documento",
    compression: "Variable, según configuración",
    definition: "Formato orientado a presentar documentos de manera consistente, independientemente del dispositivo o programa que los abra.",
    considerations: ["PDF no significa automáticamente preservación a largo plazo.", "Un PDF puede incluir elementos (fuentes externas, scripts) que comprometen su estabilidad futura."],
  },
  {
    id: "pdfa",
    label: "PDF/A",
    icon: "ShieldCheck",
    type: "Documento",
    compression: "Según el perfil utilizado",
    definition: "Familia de formatos basados en PDF, orientados a la preservación a largo plazo, con requisitos específicos que favorecen la autosuficiencia y estabilidad del documento.",
    considerations: ["No cualquier PDF/A garantiza por sí solo la preservación.", "Elegir PDF/A no sustituye otras medidas de gestión y conservación."],
  },
];

export const formatComparisonRows: FormatComparisonRow[] = [
  { format: "TIFF", type: "Imagen", compression: "Variable", use: "Digitalización", consideration: "Alta calidad" },
  { format: "JPEG", type: "Imagen", compression: "Con pérdida", use: "Fotografías/imágenes", consideration: "Pérdida de información" },
  { format: "PNG", type: "Imagen", compression: "Sin pérdida", use: "Gráficos/imágenes", consideration: "No es universal" },
  { format: "PDF", type: "Documento", compression: "Variable", use: "Distribución/consulta", consideration: "Depende de configuración" },
  { format: "PDF/A", type: "Documento", compression: "Según perfil", use: "Preservación", consideration: "Requisitos específicos" },
];

export const formatComparisonDisclaimer =
  "Esta tabla no es una regla absoluta: es un punto de partida para razonar. La elección final depende del propósito, las características del documento, los requisitos técnicos y de conservación de cada caso.";

export const formatSelectionCases: FormatSelectionCase[] = [
  { id: "caso-1", scenario: "Documento textual que se distribuirá ampliamente y debe verse igual en cualquier dispositivo.", recommendedFormats: ["pdf"] },
  { id: "caso-2", scenario: "Imagen fotográfica de uso general, donde el tamaño del archivo importa.", recommendedFormats: ["jpeg"] },
  { id: "caso-3", scenario: "Documento que debe preservarse a largo plazo como evidencia institucional.", recommendedFormats: ["pdfa"] },
  { id: "caso-4", scenario: "Imagen digitalizada donde debe conservarse el máximo detalle posible.", recommendedFormats: ["tiff"] },
  { id: "caso-5", scenario: "Gráfico digital con líneas definidas, creado directamente en una herramienta de diseño.", recommendedFormats: ["png"] },
];

export const qualityControlFlow: FlowStep[] = [
  { id: "fisico", label: "Documento físico" },
  { id: "preparacion", label: "Preparación" },
  { id: "captura", label: "Captura" },
  { id: "control-imagen", label: "Control de imagen" },
  { id: "verificacion", label: "Verificación" },
  { id: "metadatos", label: "Metadatos" },
  { id: "almacenamiento", label: "Almacenamiento" },
  { id: "registro", label: "Registro" },
];

export const qualityControlStages: QualityControlStage[] = [
  { id: "preparacion", label: "Preparación", icon: "ClipboardList", whatToCheck: "Que el documento esté limpio, desengrapado y en condiciones de ser capturado sin dañarlo." },
  { id: "captura", label: "Captura", icon: "ScanLine", whatToCheck: "Que la resolución, el modo de color y el encuadre correspondan a lo definido para ese tipo de documento." },
  { id: "control-imagen", label: "Control de imagen", icon: "Image", whatToCheck: "Que la imagen no esté inclinada, cortada, o con zonas ilegibles — aquí se detectan los errores de digitalización." },
  { id: "verificacion", label: "Verificación", icon: "FileSearch", whatToCheck: "Que la imagen corresponda realmente al documento físico y esté completa (todas las páginas, sin duplicados)." },
  { id: "metadatos", label: "Metadatos", icon: "Tags", whatToCheck: "Que los metadatos básicos (identificación, fecha, origen) se hayan registrado correctamente." },
];

export const qualityControlQuestion = "¿En qué etapa debería detectarse una imagen digitalizada inclinada o cortada?";

export const qualityControlCorrectStage = "control-imagen";

export const digitizationCaseIntro =
  "El Archivo Histórico de la institución digitaliza una colección documental compuesta por materiales muy distintos entre sí. Cada tipo de material tiene necesidades diferentes.";

export const digitizationCaseItems: DigitizationCaseItem[] = [
  { id: "manuscrito", label: "Manuscritos antiguos", icon: "FileText", needs: "Alta resolución para capturar trazos finos de tinta desvanecida; escala de grises o color según el estado del papel; formato que conserve el máximo detalle." },
  { id: "fotografia", label: "Fotografías históricas", icon: "Image", needs: "Color (o escala de grises si la fotografía original es en blanco y negro); resolución suficiente para ampliaciones; formato de alta calidad." },
  { id: "mecanografiado", label: "Documentos mecanografiados", icon: "FileType", needs: "Resolución moderada suele bastar para el texto; blanco y negro o escala de grises según el estado del papel; formato que facilite el OCR." },
  { id: "mapa", label: "Mapas y planos", icon: "FolderTree", needs: "Resolución alta por el nivel de detalle y las dimensiones grandes; color cuando el documento usa colores para diferenciar zonas; formato que conserve el detalle sin comprimir demasiado." },
];

export const digitizationCaseClosing =
  "No existen valores universales rígidos para esta colección: cada decisión (resolución, color, formato, control de calidad) debe justificarse según el tipo de material y la finalidad de su conservación o uso.";

export const qualityControlOrganizational =
  "Un control de calidad de digitalización no es solo una revisión técnica: también requiere que la organización defina responsables, criterios y un punto del flujo en el que detenerse si algo no cumple lo esperado.";

export const weekConnections: WeekConnection[] = [
  { week: 1, label: "Semana 1", concept: "Documento y expediente" },
  { week: 2, label: "Semana 2", concept: "Sistema de gestión documental" },
  { week: 3, label: "Semana 3", concept: "Procesos documentales" },
  { week: 4, label: "Semana 4", concept: "Metadatos" },
  { week: 5, label: "Semana 5", concept: "Autenticidad, fiabilidad, integridad y disponibilidad" },
  { week: 6, label: "Semana 6", concept: "Firma y trazabilidad" },
  { week: 7, label: "Semana 7", concept: "Seguridad" },
  { week: 8, label: "Semana 8", concept: "Interoperabilidad + Digitalización" },
];

export const weekConnectionsClosing =
  "Hasta ahora, el estudiante ha aprendido a administrar documentos dentro de un sistema. Esta semana agrega una capa más: comprender qué ocurre cuando esos documentos se intercambian entre sistemas, y qué ocurre cuando documentos físicos son convertidos a formatos digitales.";

export const projectConnectionInterop = [
  "Sistemas involucrados",
  "Actores",
  "Información intercambiada",
  "Correspondencia de metadatos",
  "Riesgos del intercambio",
];

export const projectConnectionDigitization = [
  "Documentos a digitalizar",
  "Finalidad",
  "Criterios técnicos",
  "Calidad",
  "Formatos",
  "Control de calidad",
];

export const summaryPoints: SummaryPoint[] = [
  { id: "s1", title: "01", description: "La interoperabilidad no es solamente conectar sistemas.", icon: "ArrowRightLeft" },
  { id: "s2", title: "02", description: "El significado de los datos debe mantenerse durante el intercambio.", icon: "Tags" },
  { id: "s3", title: "03", description: "Un expediente debe conservar su contexto y sus relaciones, no solo sus archivos.", icon: "FolderTree" },
  { id: "s4", title: "04", description: "Digitalizar no es simplemente escanear.", icon: "ScanLine" },
  { id: "s5", title: "05", description: "La calidad de una digitalización depende de múltiples factores, no de uno solo.", icon: "Image" },
  { id: "s6", title: "06", description: "No existe un único formato correcto para todos los casos.", icon: "FileType" },
  { id: "s7", title: "07", description: "La selección del formato depende del propósito y los requisitos de conservación.", icon: "Workflow" },
  { id: "s8", title: "08", description: "La calidad debe verificarse, no asumirse.", icon: "ShieldCheck" },
];

export const closingMessages = [
  "Un documento puede viajar entre sistemas, pero si pierde su contexto, significado o calidad, el intercambio deja de cumplir adecuadamente su propósito documental.",
  "Digitalizar no significa simplemente convertir papel en una imagen; significa producir una representación digital controlada, identificada y evaluada.",
];

export const nextWeekConnection = {
  nextWeekNumber: 9,
  nextTitle: "Repaso integrador y Evaluación Parcial",
  text: "La próxima semana es un repaso integrador de las Semanas 1 a 8, antes de la Evaluación Parcial. Revisa especialmente los conceptos que relacionan gestión documental, seguridad e interoperabilidad.",
};
