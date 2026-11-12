/** Content for Week 14's 10 formative activities ("Actividades"). */

export const activity1Statements = [
  { id: "a1-1", label: "Un repositorio confiable gestiona la preservación mediante políticas, controles y responsabilidades, no solo infraestructura", icon: "ShieldCheck", belongs: true },
  { id: "a1-2", label: "Tener servidores modernos y copias de seguridad diarias ya equivale a un repositorio confiable", icon: "FileX", belongs: false },
  { id: "a1-3", label: "Una copia de seguridad permite recuperar información ante una pérdida, pero no sustituye a un repositorio de preservación", icon: "Archive", belongs: true },
  { id: "a1-4", label: "El almacenamiento digital, por sí solo, ya constituye preservación digital", icon: "FileX", belongs: false },
];

export const activity2Case =
  "Una institución asegura que, por contar con un repositorio digital donde organiza y da acceso a sus documentos, ya puede considerarse un repositorio confiable certificado conforme a ISO 16363:2025.";

export const activity2Options = [
  { id: "a2-correcta", label: "Organizar y dar acceso a documentos es propio de un repositorio digital; ser 'confiable' y estar 'certificado' son afirmaciones adicionales que requieren evidencias y una auditoría formal", correct: true },
  { id: "a2-incorrecta1", label: "Es correcto: cualquier repositorio digital que organice documentos ya está certificado automáticamente", correct: false },
  { id: "a2-incorrecta2", label: "Repositorio digital, repositorio confiable y repositorio certificado son exactamente lo mismo", correct: false },
];

export const activity2Feedback =
  "Un repositorio digital organiza y da acceso a objetos digitales; ser confiable exige además políticas, controles y responsabilidades sostenidas; y estar certificado exige haber superado una auditoría formal conforme a la norma — ninguna de las tres afirmaciones es automática a partir de la anterior.";

export const activity3Pairs = [
  { characteristic: "Integridad", definition: "Que el documento se mantenga sin alteraciones no controladas respecto de una referencia" },
  { characteristic: "Trazabilidad", definition: "La capacidad de reconstruir qué acciones se realizaron sobre un objeto, cuándo y por quién" },
  { characteristic: "Sostenibilidad", definition: "La capacidad institucional de mantener el repositorio en funcionamiento a largo plazo" },
];

export const activity3DefinitionOptions = [
  "Que el documento se mantenga sin alteraciones no controladas respecto de una referencia",
  "La capacidad de reconstruir qué acciones se realizaron sobre un objeto, cuándo y por quién",
  "La capacidad institucional de mantener el repositorio en funcionamiento a largo plazo",
  "Que cualquier persona pueda modificar el documento sin dejar registro",
];

export const activity4Items = [
  { id: "a4-1", label: "No existen responsables formalmente asignados al repositorio", icon: "ClipboardList", category: "organizacional" },
  { id: "a4-2", label: "Los metadatos descriptivos de un lote de expedientes están incompletos", icon: "Tags", category: "objetos-digitales" },
  { id: "a4-3", label: "No se verifica periódicamente la integridad de los documentos conservados", icon: "Fingerprint", category: "objetos-digitales" },
  { id: "a4-4", label: "El repositorio depende de un único servidor, sin redundancia", icon: "Database", category: "infraestructura-seguridad" },
  { id: "a4-5", label: "No existe una política de preservación aprobada formalmente", icon: "Landmark", category: "organizacional" },
  { id: "a4-6", label: "No existe un plan documentado de recuperación ante desastres", icon: "ServerCrash", category: "infraestructura-seguridad" },
];

export const activity4Categories = [
  { id: "organizacional", label: "A. Infraestructura organizacional", icon: "Landmark" },
  { id: "objetos-digitales", label: "B. Gestión de objetos digitales", icon: "Tags" },
  { id: "infraestructura-seguridad", label: "C. Infraestructura y seguridad", icon: "Lock" },
];

export const activity5Stages = [
  "SGD gestiona el documento",
  "Selección y preparación para transferencia",
  "Transferencia formal",
  "Recepción y validación del repositorio",
  "Generación del paquete de preservación (AIP)",
  "Acceso y difusión autorizados",
];

export const activity5Feedback =
  "El flujo conceptual parte del SGD, pasa por la selección, preparación y transferencia formal, continúa con la recepción y validación del repositorio, la generación del paquete de preservación, y culmina en el acceso autorizado — no al revés.";

export const activity6Statements = [
  { id: "a6-1", label: "Una auditoría examina evidencias concretas, no solo lo que la institución declara", icon: "SearchCheck", belongs: true },
  { id: "a6-2", label: "Una certificación es el reconocimiento formal emitido por una entidad competente tras una auditoría exitosa", icon: "Stamp", belongs: true },
  { id: "a6-3", label: "Completar una autoevaluación académica certifica automáticamente al repositorio evaluado", icon: "FileX", belongs: false },
  { id: "a6-4", label: "Auditoría y autoevaluación académica son exactamente lo mismo", icon: "FileX", belongs: false },
];

export const activity7Case =
  "Un repositorio permite que cualquier usuario autenticado, sin distinción de rol, pueda eliminar permanentemente cualquier documento conservado.";

export const activity7Options = [
  { id: "a7-correcta", label: "Es un riesgo de seguridad grave: faltan autorización por roles y registro de operaciones que permitan controlar y rastrear esa acción", correct: true },
  { id: "a7-incorrecta1", label: "No representa ningún riesgo mientras los usuarios estén autenticados", correct: false },
  { id: "a7-incorrecta2", label: "Es una buena práctica, porque facilita la gestión del espacio de almacenamiento", correct: false },
];

export const activity7Feedback =
  "Autenticar a un usuario no es suficiente: sin autorización diferenciada por roles ni registro de operaciones, cualquier persona podría eliminar documentos de forma irreversible y sin dejar evidencia — un riesgo grave de seguridad y de trazabilidad.";

export const activity8Statements = [
  { id: "a8-1", label: "\"Una copia de seguridad semanal ya constituye una política de preservación digital\"", icon: "FileX", belongs: true },
  { id: "a8-2", label: "\"Toda institución con un repositorio digital está certificada conforme a ISO 16363\"", icon: "FileX", belongs: true },
  { id: "a8-3", label: "\"Un repositorio confiable requiere responsables formalmente asignados\"", icon: "ShieldCheck", belongs: false },
  { id: "a8-4", label: "\"La sostenibilidad de un repositorio depende también de la planificación financiera y organizacional\"", icon: "ShieldCheck", belongs: false },
];

export const activity8Instruction = "Selecciona las afirmaciones que contienen un ERROR CONCEPTUAL sobre repositorios confiables.";

export const activity9Case =
  "Un repositorio institucional funciona correctamente desde hace dos años, pero depende por completo de una sola persona que conoce los procedimientos y de un presupuesto asignado únicamente para el proyecto inicial, ya vencido.";

export const activity9Question =
  "¿Qué riesgos de sostenibilidad identificas en este caso? Distingue qué dimensiones están comprometidas de forma inmediata y directa, y cuál podría verse afectada solo a mediano plazo, como consecuencia de las anteriores.";

export const activity10Scenario =
  "Una entidad pública peruana ficticia planea transferir 200 expedientes desde su SGD a su repositorio institucional, y además desea una autoevaluación académica previa conforme a los tres ámbitos de ISO 16363:2025.";

export const activity10Question =
  "Como responsable del área de archivo, describe brevemente qué criterios de transferencia aplicarías y qué evidencias prepararías para sustentar cada uno de los tres ámbitos de ISO 16363 en la autoevaluación.";
