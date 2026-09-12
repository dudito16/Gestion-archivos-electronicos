/** Static content for Week 6's "Taller" — 10 deeper, non-graded workshop activities. */

// Taller 1 — Analiza una firma digital paso a paso
export const taller1Case =
  "Un documento PDF llega con una firma digital. El visor muestra: 'Firmado por: María Rojas Castillo. Certificado emitido el 02/01/2026, válido hasta 02/01/2027. Firma verificada: sin alteraciones detectadas.'";

export const taller1Aspects: { id: string; label: string; icon: string; belongs: boolean }[] = [
  { id: "identidad", label: "El firmante queda identificado por el certificado (María Rojas Castillo)", icon: "FileSearch", belongs: true },
  { id: "vigencia", label: "El certificado está dentro de su periodo de validez", icon: "ClipboardList", belongs: true },
  { id: "integridad", label: "No se detectaron alteraciones posteriores a la firma", icon: "KeyRound", belongs: true },
  { id: "cargo", label: "El cargo de la firmante garantiza automáticamente la validez del trámite", icon: "Landmark", belongs: false },
  { id: "diseno", label: "El PDF tiene un diseño profesional", icon: "Image", belongs: false },
];

// Taller 2 — Diferencia mecanismos en un caso real
export const taller2Items: { id: string; label: string; icon: string; category: string }[] = [
  { id: "boton-aprobar", label: "Botón 'Aprobar' en un flujo interno sin certificado", icon: "MousePointerClick", category: "electronica" },
  { id: "firma-tablet", label: "Firma dibujada con el dedo en una tablet, sin infraestructura de certificados", icon: "ScanLine", category: "manuscrita" },
  { id: "oficio-firmado", label: "Oficio firmado con certificado digital vigente", icon: "FileSignature", category: "digital" },
  { id: "carta-escaneada", label: "Carta firmada a mano y luego escaneada", icon: "ScanLine", category: "manuscrita" },
  { id: "clave-dinamica", label: "Aprobación con clave dinámica enviada por correo", icon: "MousePointerClick", category: "electronica" },
  { id: "contrato-certificado", label: "Contrato firmado digitalmente con clave privada y certificado", icon: "FileSignature", category: "digital" },
];

export const taller2Categories: { id: string; label: string; icon: string }[] = [
  { id: "manuscrita", label: "Firma manuscrita digitalizada", icon: "ScanLine" },
  { id: "electronica", label: "Firma electrónica", icon: "MousePointerClick" },
  { id: "digital", label: "Firma digital", icon: "FileSignature" },
];

// Taller 3 — Interpreta un certificado digital
export const taller3Certificate = {
  titular: "Juan Pérez López",
  emisor: "Entidad certificadora (ejemplo genérico)",
  vigencia: "01/03/2024 – 01/03/2025",
  usoDeclarado: "Firma de documentos administrativos internos",
};

export const taller3Concerns: { id: string; label: string; icon: string; belongs: boolean }[] = [
  { id: "vencido", label: "El certificado está fuera de su periodo de vigencia si hoy es 2026", icon: "ClipboardList", belongs: true },
  { id: "uso", label: "Debe confirmarse que el uso declarado corresponde al trámite actual", icon: "GitCompareArrows", belongs: true },
  { id: "titular", label: "El nombre del titular es demasiado corto", icon: "FileType", belongs: false },
  { id: "emisor-generico", label: "Conviene identificar con precisión quién emitió el certificado", icon: "FileSearch", belongs: true },
];

// Taller 4 — Verifica una situación de firma
export const taller4Case =
  "Un documento firmado digitalmente se somete a revisión. El sistema confirma que la firma corresponde técnicamente al documento (no fue alterado), pero el certificado utilizado fue revocado dos días antes de la firma.";

// Taller 5 — Reconstruye la trazabilidad de un documento
export const taller5Stages: { id: string; label: string }[] = [
  { id: "recepcion", label: "Recepción" },
  { id: "registro", label: "Registro" },
  { id: "firma", label: "Firma" },
  { id: "validacion", label: "Validación" },
  { id: "derivacion", label: "Derivación" },
];

export const taller5MinStages = 4;

// Taller 6 — Analiza una ficha de auditoría incompleta
export const taller6Fields: { id: string; label: string; initialValue: string }[] = [
  { id: "quien", label: "¿Quién?", initialValue: "" },
  { id: "que", label: "¿Qué hizo?", initialValue: "Firmó el documento OFI-2026-204" },
  { id: "cuando", label: "¿Cuándo?", initialValue: "" },
  { id: "documento", label: "¿Sobre qué documento?", initialValue: "OFI-2026-204" },
  { id: "resultado", label: "¿Cuál fue el resultado?", initialValue: "" },
];

// Taller 7 — Ordena el proceso completo
export const taller7Items: { id: string; label: string }[] = [
  { id: "documento", label: "Documento" },
  { id: "resumen", label: "Generación de resumen" },
  { id: "firma", label: "Aplicación de la firma" },
  { id: "firmado", label: "Documento firmado" },
  { id: "certificado", label: "Verificación del certificado" },
  { id: "comprobar", label: "Comprobación de la firma" },
  { id: "resultado", label: "Resultado de la validación" },
];

export const taller7CorrectOrder = ["documento", "resumen", "firma", "firmado", "certificado", "comprobar", "resultado"];

// Taller 8 — Detecta un problema de gestión con firma válida
export const taller8Case =
  "Un contrato firmado digitalmente, con certificado vigente y firma verificada sin alteraciones, se almacena únicamente en el correo personal de quien lo recibió. No existe copia en el sistema de gestión documental ni registro de su recepción.";

export const taller8Risks: { id: string; label: string; icon: string; belongs: boolean }[] = [
  { id: "sin-captura", label: "El documento no fue capturado por el sistema de gestión documental", icon: "Inbox", belongs: true },
  { id: "sin-registro", label: "No existe registro de su recepción", icon: "ClipboardList", belongs: true },
  { id: "dependencia-personal", label: "Su conservación depende de una bandeja de correo personal", icon: "FolderOpen", belongs: true },
  { id: "firma-invalida", label: "La firma digital en sí misma no es válida", icon: "FileSignature", belongs: false },
];

// Taller 9 — ¿Continuar o detener? (3 mini-casos)
export const taller9Cases: { id: string; label: string; text: string; correct: "continuar" | "detener" }[] = [
  { id: "caso-a", label: "Caso A", text: "Firma verificada, certificado vigente, documento registrado.", correct: "continuar" },
  { id: "caso-b", label: "Caso B", text: "Firma verificada, pero el certificado fue revocado antes de firmarse.", correct: "detener" },
  { id: "caso-c", label: "Caso C", text: "Firma verificada y certificado vigente, pero sin ningún registro de recepción.", correct: "detener" },
];

// Taller 10 — CASO INTEGRADOR
export const taller10Scenario =
  "Una entidad recibe documentos firmados digitalmente de distintas áreas. Se ha detectado que algunos certificados no se revisan, no siempre se registra la recepción, hay dudas sobre la vigencia de algunos certificados, no existe evidencia temporal uniforme y la trazabilidad se pierde después de la firma.";

export const taller10ProblemSuggestions = [
  "Algunos certificados no se revisan antes de aceptar el documento",
  "No siempre se registra la recepción del documento firmado",
  "Existen dudas sobre la vigencia de algunos certificados",
  "No hay evidencia temporal uniforme para todas las firmas",
  "La trazabilidad se pierde después de la firma",
];

export const taller10MinRows = 5;
