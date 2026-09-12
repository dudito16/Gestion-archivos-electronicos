/** Static content for Week 6's "Actividades" — 10 formative, non-graded exercises. */

// Actividad 1 — Diferencia los tipos de firma
export const activity1Statements: { id: string; label: string; icon: string; belongs: boolean }[] = [
  { id: "certificado", label: "Se genera con una clave privada asociada a un certificado digital", icon: "ShieldCheck", belongs: true },
  { id: "hash", label: "Permite detectar si el documento fue alterado después de firmarse", icon: "KeyRound", belongs: true },
  { id: "imagen", label: "Es simplemente una imagen incorporada al archivo", icon: "ScanLine", belongs: false },
  { id: "clic", label: "Puede consistir únicamente en un clic de aceptación", icon: "MousePointerClick", belongs: false },
  { id: "identidad", label: "Permite verificar técnicamente la identidad del firmante", icon: "FileSearch", belongs: true },
];

// Actividad 2 — Identifica qué mecanismo se está utilizando
export const activity2Items: { id: string; label: string; icon: string; category: string }[] = [
  { id: "clic-terminos", label: "Clic en 'Acepto los términos'", icon: "MousePointerClick", category: "electronica" },
  { id: "firma-escaneada", label: "Firma en papel, luego escaneada", icon: "ScanLine", category: "manuscrita" },
  { id: "certificado-firma", label: "Firma generada con certificado y clave privada", icon: "FileSignature", category: "digital" },
  { id: "pin-sms", label: "Código PIN enviado por SMS para aprobar", icon: "MousePointerClick", category: "electronica" },
  { id: "trazo-pantalla", label: "Trazo de firma dibujado en una pantalla, sin certificado", icon: "ScanLine", category: "manuscrita" },
  { id: "documento-firmado-pdf", label: "PDF firmado con un certificado vigente", icon: "FileSignature", category: "digital" },
];

export const activity2Categories: { id: string; label: string; icon: string }[] = [
  { id: "manuscrita", label: "Firma manuscrita digitalizada", icon: "ScanLine" },
  { id: "electronica", label: "Firma electrónica", icon: "MousePointerClick" },
  { id: "digital", label: "Firma digital", icon: "FileSignature" },
];

// Actividad 3 — Analiza un documento firmado
export const activity3Case =
  "Un documento electrónico llega con una firma digital aplicada. El área receptora debe decidir si puede utilizarlo para continuar un trámite.";

export const activity3Aspects: { id: string; label: string; icon: string; belongs: boolean }[] = [
  { id: "firmante", label: "Identificar quién firma según el certificado", icon: "FileSearch", belongs: true },
  { id: "vigencia", label: "Comprobar si el certificado está vigente", icon: "ClipboardList", belongs: true },
  { id: "integridad", label: "Verificar si el contenido fue alterado tras la firma", icon: "KeyRound", belongs: true },
  { id: "tiempo", label: "Considerar cuándo se produjo la firma", icon: "Stamp", belongs: true },
  { id: "diseno", label: "Revisar si el documento tiene buen diseño visual", icon: "Image", belongs: false },
];

// Actividad 4 — Relaciona firma y certificado
export const activity4Concepts: { id: string; label: string }[] = [
  { id: "firma", label: "Firma digital" },
  { id: "certificado", label: "Certificado digital" },
  { id: "autoridad", label: "Autoridad certificadora" },
  { id: "clave-publica", label: "Clave pública" },
];

export const activity4Definitions: { id: string; label: string }[] = [
  { id: "def-firma", label: "Resultado de aplicar una clave privada sobre el resumen del documento" },
  { id: "def-certificado", label: "Vincula una identidad con una clave dentro de una infraestructura de confianza" },
  { id: "def-autoridad", label: "Participa en la emisión y gestión de certificados" },
  { id: "def-clave", label: "Permite verificar la firma sin exponer la clave privada" },
];

export const activity4CorrectPairs: Record<string, string> = {
  firma: "def-firma",
  certificado: "def-certificado",
  autoridad: "def-autoridad",
  "clave-publica": "def-clave",
};

// Actividad 5 — Detecta errores de validación
export const activity5Case =
  "Un sistema reporta: 'Firma verificada correctamente'. Sin embargo, el certificado asociado venció hace tres meses y el trámite requiere un certificado vigente al momento de la firma.";

export const activity5Risks: { id: string; label: string; icon: string; belongs: boolean }[] = [
  { id: "vencido", label: "El certificado está vencido para el trámite", icon: "ClipboardList", belongs: true },
  { id: "confundir", label: "Se confunde verificación técnica con validez para el trámite", icon: "GitCompareArrows", belongs: true },
  { id: "formato", label: "El documento tiene un formato de archivo antiguo", icon: "FileType", belongs: false },
  { id: "sin-registro", label: "No hay evidencia de que se haya registrado esta revisión", icon: "FileSearch", belongs: true },
];

// Actividad 6 — Ordena el proceso de firma
export const activity6Items: { id: string; label: string }[] = [
  { id: "documento", label: "Documento" },
  { id: "resumen", label: "Generación de resumen (hash)" },
  { id: "firma", label: "Aplicación de la firma" },
  { id: "certificado", label: "Certificado" },
  { id: "firmado", label: "Documento firmado" },
];

export const activity6CorrectOrder = ["documento", "resumen", "firma", "certificado", "firmado"];

// Actividad 7 — Identifica información de auditoría
export const activity7Log = "Registro: 'jperez modificó OFI-2026-118 el 12/09/2026'.";

export const activity7Fields: { id: string; label: string; icon: string; belongs: boolean }[] = [
  { id: "quien", label: "Quién realizó la acción (jperez)", icon: "FileSearch", belongs: true },
  { id: "que", label: "Qué acción se realizó (modificó)", icon: "ClipboardList", belongs: true },
  { id: "cuando", label: "Cuándo ocurrió (12/09/2026)", icon: "Stamp", belongs: true },
  { id: "documento", label: "Sobre qué documento (OFI-2026-118)", icon: "FileText", belongs: true },
  { id: "resultado", label: "Cuál fue el resultado de la modificación", icon: "ShieldCheck", belongs: false },
  { id: "estado-previo", label: "Cuál era el estado antes de modificarse", icon: "FolderOpen", belongs: false },
];

// Actividad 8 — Reconstruye una línea de tiempo
export const activity8Items: { id: string; label: string }[] = [
  { id: "creacion", label: "Creación del documento" },
  { id: "captura", label: "Captura en el sistema" },
  { id: "registro", label: "Registro formal" },
  { id: "firma", label: "Firma digital" },
  { id: "validacion", label: "Validación de la firma" },
  { id: "archivo", label: "Archivo" },
];

export const activity8CorrectOrder = ["creacion", "captura", "registro", "firma", "validacion", "archivo"];

// Actividad 9 — Decide si el documento puede continuar
export const activity9Case =
  "Un documento firmado digitalmente presenta certificado vigente y firma verificada, pero no se ha registrado la revisión dentro del sistema de gestión documental.";

// Actividad 10 — Caso profesional integrador
export const activity10Case =
  "Recibes un documento con firma digital. El certificado está vigente y la firma se verifica correctamente, pero el documento no ha sido registrado y no hay evidencia de cuándo se recibió.";

export const activity10Aspects: { id: string; label: string; icon: string; belongs: boolean }[] = [
  { id: "registro", label: "Registrar el documento en el sistema de gestión documental", icon: "ClipboardList", belongs: true },
  { id: "fecha", label: "Dejar constancia de la fecha de recepción", icon: "Stamp", belongs: true },
  { id: "trazabilidad", label: "Documentar la revisión realizada para sostener la trazabilidad", icon: "Route", belongs: true },
  { id: "diseno", label: "Rediseñar el formato del documento", icon: "Image", belongs: false },
];
