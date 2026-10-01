/** Static content for Week 8's "Actividades" — 10 formative, non-graded exercises. */

// Actividad 1 — Identifica interoperabilidad
export const activity1Case =
  "Dos sistemas de gestión documental logran transmitir archivos entre sí, pero el personal de la entidad receptora no sabe qué hacer con la información que llega, y los campos no siempre significan lo mismo en ambos sistemas.";

export const activity1Statements: { id: string; label: string; icon: string; belongs: boolean }[] = [
  { id: "solo-conexion", label: "Basta con que los sistemas puedan conectarse técnicamente", icon: "Workflow", belongs: false },
  { id: "procesos", label: "Las organizaciones deben tener procesos compatibles para que el intercambio tenga sentido", icon: "Landmark", belongs: true },
  { id: "significado", label: "Ambos sistemas deben interpretar la información de manera compatible", icon: "Tags", belongs: true },
  { id: "mecanismo", label: "Debe existir un mecanismo tecnológico para transmitir la información", icon: "ArrowRightLeft", belongs: true },
  { id: "diseno-igual", label: "Los sistemas deben tener el mismo diseño visual", icon: "Image", belongs: false },
];

// Actividad 2 — Clasifica la dimensión (organizacional, semántica o técnica)
export const activity2Items: { id: string; label: string; icon: string; category: string }[] = [
  { id: "sin-receptor", label: "Nadie en la entidad receptora sabe qué unidad debe atender el expediente recibido", icon: "Landmark", category: "organizacional" },
  { id: "campo-distinto", label: "\"Fecha de emisión\" en un sistema se interpreta como \"Fecha de recepción\" en el otro", icon: "Tags", category: "semantica" },
  { id: "formato-incompatible", label: "El sistema receptor no puede leer el formato que envía el sistema emisor", icon: "ArrowRightLeft", category: "tecnica" },
  { id: "sin-procedimiento", label: "La entidad no tiene definido qué hacer con los documentos que recibe de otras entidades", icon: "Landmark", category: "organizacional" },
  { id: "termino-ambiguo", label: "Ambas entidades usan \"expediente activo\" para significar cosas distintas", icon: "Tags", category: "semantica" },
  { id: "sin-mecanismo", label: "No existe ningún servicio o protocolo para transmitir la información entre los sistemas", icon: "Workflow", category: "tecnica" },
];

export const activity2Categories: { id: string; label: string; icon: string }[] = [
  { id: "organizacional", label: "Organizacional", icon: "Landmark" },
  { id: "semantica", label: "Semántica", icon: "Tags" },
  { id: "tecnica", label: "Técnica", icon: "Workflow" },
];

// Actividad 3 — Relaciona campos entre dos sistemas
export const activity3Concepts: { id: string; label: string }[] = [
  { id: "codigo", label: "Código de expediente (Sistema A)" },
  { id: "area", label: "Área responsable (Sistema A)" },
  { id: "tipo", label: "Tipo documental (Sistema A)" },
  { id: "fecha", label: "Fecha de creación (Sistema A)" },
];

export const activity3Definitions: { id: string; label: string }[] = [
  { id: "def-numero", label: "Número de expediente (Sistema B)" },
  { id: "def-unidad", label: "Unidad responsable (Sistema B)" },
  { id: "def-clase", label: "Clase documental (Sistema B)" },
  { id: "def-registro", label: "Fecha de registro (Sistema B) — ⚠ no es equivalente exacto" },
];

export const activity3CorrectPairs: Record<string, string> = {
  codigo: "def-numero",
  area: "def-unidad",
  tipo: "def-clase",
  fecha: "def-registro",
};

// Actividad 4 — Reconstruye un intercambio documental
export const activity4Items: { id: string; label: string }[] = [
  { id: "entidad-a", label: "Entidad A produce el documento" },
  { id: "intercambio", label: "Se realiza el intercambio" },
  { id: "entidad-b", label: "Entidad B recibe el documento" },
  { id: "registro", label: "Se registra en el Sistema B" },
  { id: "incorporacion", label: "Se incorpora al expediente correspondiente" },
];

export const activity4CorrectOrder = ["entidad-a", "intercambio", "entidad-b", "registro", "incorporacion"];

// Actividad 5 — Detecta información perdida durante un intercambio
export const activity5Case =
  "El expediente EXP-2026-0087 se envía completo desde el sistema de origen. Al revisarlo en el sistema receptor, se nota que algo falta.";

export const activity5Items: { id: string; label: string; icon: string; belongs: boolean }[] = [
  { id: "documentos", label: "Faltan dos de los documentos originales", icon: "FileText", belongs: true },
  { id: "metadatos", label: "Los metadatos de fecha y origen no llegaron completos", icon: "Tags", belongs: true },
  { id: "relaciones", label: "Se perdió la relación entre los documentos del expediente", icon: "FolderTree", belongs: true },
  { id: "nombre-archivo", label: "El nombre interno del archivo cambió de mayúsculas a minúsculas", icon: "FileType", belongs: false },
];

// Actividad 6 — Analiza calidad de digitalización
export const activity6Comparison = {
  imageA: { label: "Imagen A", issues: ["Inclinada", "Cortada en el borde", "Texto poco legible"] },
  imageB: { label: "Imagen B", issues: ["Correctamente orientada", "Completa", "Texto legible"] },
};

export const activity6Options: { id: string; label: string; belongs: boolean }[] = [
  { id: "a-mejor", label: "La Imagen A cumple mejor el objetivo de digitalización", belongs: false },
  { id: "b-mejor", label: "La Imagen B cumple mejor el objetivo de digitalización", belongs: true },
  { id: "ambas-igual", label: "Ambas imágenes cumplen igual el objetivo", belongs: false },
];

// Actividad 7 — Selecciona el modo de color
export const activity7Case =
  "Debes digitalizar una resolución institucional que incluye un sello oficial a color y una firma manuscrita en tinta azul.";

export const activity7Options: { id: string; label: string; correct: boolean }[] = [
  { id: "bn", label: "Blanco y negro", correct: false },
  { id: "grises", label: "Escala de grises", correct: false },
  { id: "color", label: "Color", correct: true },
];

export const activity7Feedback =
  "El color del sello y la tinta puede ser relevante para verificar la autenticidad del documento; capturarlo en blanco y negro o escala de grises elimina esa información.";

// Actividad 8 — Compara formatos
export const activity8Statements: { id: string; label: string; icon: string; belongs: boolean }[] = [
  { id: "tiff-calidad", label: "TIFF permite conservar información de imagen con alta calidad", icon: "Image", belongs: true },
  { id: "jpeg-siempre", label: "JPEG nunca pierde información al comprimir", icon: "ScanLine", belongs: false },
  { id: "png-sin-perdida", label: "PNG utiliza compresión sin pérdida", icon: "FileType", belongs: true },
  { id: "pdf-preservacion", label: "Cualquier PDF garantiza automáticamente la preservación a largo plazo", icon: "FileText", belongs: false },
  { id: "pdfa-requisitos", label: "PDF/A está orientado a la preservación, con requisitos específicos", icon: "ShieldCheck", belongs: true },
];

// Actividad 9 — Selecciona un formato para un caso
export const activity9Case =
  "Un documento digitalizado debe preservarse a largo plazo como evidencia institucional, sin depender de un software específico en el futuro.";

export const activity9Options: { id: string; label: string; correct: boolean }[] = [
  { id: "jpeg", label: "JPEG", correct: false },
  { id: "pdfa", label: "PDF/A", correct: true },
  { id: "png", label: "PNG", correct: false },
];

export const activity9Feedback =
  "PDF/A está diseñado específicamente para la preservación a largo plazo, con requisitos que favorecen la autosuficiencia del documento — aunque, como siempre, debe acompañarse de buenas prácticas de conservación.";

// Actividad 10 — Caso integrador de interoperabilidad + digitalización
export const activity10Case =
  "Una entidad debe enviar un expediente a otra institución. El expediente incluye documentos digitalizados hace varios años, con baja resolución y sin metadatos completos, y los sistemas de ambas entidades usan nombres de campo distintos.";

export const activity10Aspects: { id: string; label: string; icon: string; belongs: boolean }[] = [
  { id: "mapear-campos", label: "Establecer la correspondencia entre los campos de ambos sistemas", icon: "Tags", belongs: true },
  { id: "revisar-digitalizacion", label: "Revisar si la digitalización original cumple la calidad necesaria", icon: "ScanLine", belongs: true },
  { id: "completar-metadatos", label: "Completar los metadatos faltantes antes del envío", icon: "ClipboardList", belongs: true },
  { id: "definir-receptor", label: "Confirmar qué unidad de la otra entidad recibirá y continuará el trámite", icon: "Landmark", belongs: true },
  { id: "rediseno-visual", label: "Rediseñar el logotipo de la institución", icon: "Image", belongs: false },
];
