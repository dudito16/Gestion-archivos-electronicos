/** Static content for Week 8's "Taller" — 10 deeper, non-graded workshop activities. */

// Taller 1 — Mapa de interoperabilidad
export const taller1Case =
  "Dos municipalidades acuerdan intercambiar expedientes electrónicos para un trámite conjunto. Antes de iniciar, deben verificar que el intercambio pueda funcionar.";

export const taller1Concerns: { id: string; label: string; icon: string; belongs: boolean }[] = [
  { id: "procesos-compatibles", label: "Ambas entidades deben tener procesos y responsabilidades compatibles para el trámite", icon: "Landmark", belongs: true },
  { id: "significado-compartido", label: "Los campos de ambos sistemas deben interpretarse de forma compatible", icon: "Tags", belongs: true },
  { id: "mecanismo-tecnico", label: "Debe existir un mecanismo técnico para transmitir la información", icon: "ArrowRightLeft", belongs: true },
  { id: "mismo-proveedor", label: "Ambas entidades deben usar el mismo proveedor de software", icon: "HelpCircle", belongs: false },
];

// Taller 2 — Identificación de actores
export const taller2Roles: { id: string; label: string }[] = [
  { id: "entidad-emisora", label: "Entidad emisora" },
  { id: "entidad-receptora", label: "Entidad receptora" },
  { id: "area-ti", label: "Área de TI / soporte técnico" },
];

// Taller 3 — Correspondencia de metadatos
export const taller3Scenario =
  "Dos sistemas de gestión documental deben intercambiar expedientes, pero cada uno nombra sus campos de forma distinta.";

export const taller3FieldSuggestions = [
  "Código de expediente ↔ Número de expediente",
  "Área responsable ↔ Unidad responsable",
  "Tipo documental ↔ Clase documental",
  "Fecha de creación ↔ Fecha de registro",
];

export const taller3MinRows = 4;

// Taller 4 — Análisis de intercambio de expediente
export const taller4Stages: { id: string; label: string }[] = [
  { id: "documentos", label: "Documentos" },
  { id: "metadatos", label: "Metadatos" },
  { id: "relaciones", label: "Relaciones" },
  { id: "orden", label: "Orden" },
  { id: "historial", label: "Historial" },
];

export const taller4MinStages = 4;

// Taller 5 — Diagnóstico de pérdida de información
export const taller5Case =
  "Un expediente de 5 documentos se envía a otra entidad. Al revisarlo, el sistema receptor solo muestra 3 documentos, sin fechas de producción, y sin indicar el orden original.";

export const taller5Concerns: { id: string; label: string; icon: string; belongs: boolean }[] = [
  { id: "documentos-faltantes", label: "Faltan documentos del expediente original", icon: "FileText", belongs: true },
  { id: "metadatos-faltantes", label: "Faltan metadatos de fecha", icon: "Tags", belongs: true },
  { id: "orden-perdido", label: "Se perdió el orden original de los documentos", icon: "FolderTree", belongs: true },
  { id: "formato-distinto", label: "El tipo de letra del documento cambió", icon: "HelpCircle", belongs: false },
];

// Taller 6 — Evaluación de calidad de imágenes
export const taller6Images: { id: string; label: string }[] = [
  { id: "img-1", label: "Imagen 1 (manuscrito antiguo)" },
  { id: "img-2", label: "Imagen 2 (oficio mecanografiado)" },
  { id: "img-3", label: "Imagen 3 (fotografía institucional)" },
];

// Taller 7 — Selección de resolución según caso
export const taller7Scenario =
  "El área de archivo debe digitalizar distintos tipos de documentos y necesita justificar la resolución elegida para cada uno.";

export const taller7CaseSuggestions = [
  "Documento de texto simple para consulta interna",
  "Manuscrito con trazos finos y tinta desvanecida",
  "Plano técnico con alto nivel de detalle",
  "Fotografía para ampliación futura",
];

export const taller7MinRows = 4;

// Taller 8 — Selección de formato
export const taller8Cases: { id: string; label: string; scenario: string }[] = [
  { id: "caso-a", label: "Caso A", scenario: "Documento textual que se distribuirá ampliamente y debe verse igual en cualquier dispositivo." },
  { id: "caso-b", label: "Caso B", scenario: "Documento que debe preservarse a largo plazo como evidencia institucional." },
  { id: "caso-c", label: "Caso C", scenario: "Imagen digitalizada donde debe conservarse el máximo detalle posible." },
];

export const taller8FormatOptions: { id: string; label: string }[] = [
  { id: "tiff", label: "TIFF" },
  { id: "jpeg", label: "JPEG" },
  { id: "png", label: "PNG" },
  { id: "pdf", label: "PDF" },
  { id: "pdfa", label: "PDF/A" },
];

// Taller 9 — Plan básico de digitalización
export const taller9Fields: { id: string; label: string; placeholder: string }[] = [
  { id: "preparacion", label: "¿Cómo prepararías los documentos antes de digitalizar?", placeholder: "p. ej. revisar que estén desengrapados y limpios" },
  { id: "captura", label: "¿Qué criterios de captura definirías (resolución, color)?", placeholder: "p. ej. resolución según el tipo de documento" },
  { id: "control-calidad", label: "¿Cómo controlarías la calidad de las imágenes obtenidas?", placeholder: "p. ej. revisar orientación, recorte y legibilidad" },
  { id: "metadatos", label: "¿Qué metadatos básicos registrarías?", placeholder: "p. ej. identificación, fecha, origen" },
  { id: "almacenamiento", label: "¿Cómo almacenarías y registrarías el resultado?", placeholder: "p. ej. formato elegido y ubicación" },
];

// Taller 10 — CASO INTEGRADOR: matriz de interoperabilidad y digitalización
export const taller10Scenario =
  "Una entidad debe enviar un expediente con documentos digitalizados a otra institución. Se detectan varios problemas: documentos con baja resolución, metadatos incompletos, campos sin correspondencia clara entre sistemas y ausencia de control de calidad en la digitalización original.";

export const taller10ProblemSuggestions = [
  "Documentos digitalizados con baja resolución",
  "Metadatos incompletos en varios documentos",
  "Campos sin correspondencia clara entre los dos sistemas",
  "Ausencia de control de calidad en la digitalización original",
  "No está definida la unidad receptora en la otra entidad",
];

export const taller10MinRows = 5;
