/** Static content for Week 7's "Actividades" — 10 formative, non-graded exercises. */

// Actividad 1 — Identifica el atributo afectado
export const activity1Case =
  "Un funcionario descubre que el contenido de un informe fue editado sin que exista registro de quién hizo el cambio ni cuándo.";

export const activity1Attributes: { id: string; label: string; icon: string; belongs: boolean }[] = [
  { id: "integridad", label: "Integridad", icon: "KeyRound", belongs: true },
  { id: "confidencialidad", label: "Confidencialidad", icon: "EyeOff", belongs: false },
  { id: "disponibilidad", label: "Disponibilidad", icon: "ServerCrash", belongs: false },
];

// Actividad 2 — Clasifica confidencialidad, integridad o disponibilidad
export const activity2Items: { id: string; label: string; icon: string; category: string }[] = [
  { id: "consulta-indebida", label: "Un usuario consulta un expediente que no corresponde a sus funciones", icon: "EyeOff", category: "confidencialidad" },
  { id: "modifica-fecha", label: "Se modifica la fecha de un documento sin dejar registro", icon: "KeyRound", category: "integridad" },
  { id: "servidor-caido", label: "El servidor del sistema de gestión documental deja de responder", icon: "ServerCrash", category: "disponibilidad" },
  { id: "filtra-informacion", label: "Información reservada es vista por personal sin autorización", icon: "EyeOff", category: "confidencialidad" },
  { id: "sustituye-archivo", label: "Se sustituye un archivo por otra versión sin autorización", icon: "KeyRound", category: "integridad" },
  { id: "sin-respaldo", label: "Un archivo se elimina y no existe respaldo para recuperarlo", icon: "ServerCrash", category: "disponibilidad" },
];

export const activity2Categories: { id: string; label: string; icon: string }[] = [
  { id: "confidencialidad", label: "Confidencialidad", icon: "EyeOff" },
  { id: "integridad", label: "Integridad", icon: "KeyRound" },
  { id: "disponibilidad", label: "Disponibilidad", icon: "ServerCrash" },
];

// Actividad 3 — Asigna usuarios y permisos
export const activity3Items: { id: string; label: string; icon: string; category: string }[] = [
  { id: "administrar-sistema", label: "Configurar los parámetros del sistema de gestión documental", icon: "ShieldCheck", category: "administrador" },
  { id: "eliminar-autorizado", label: "Eliminar un documento duplicado, con autorización previa", icon: "FileX", category: "archivista" },
  { id: "crear-expediente", label: "Crear un nuevo expediente para un trámite", icon: "FilePlus", category: "archivista" },
  { id: "solo-consultar", label: "Consultar el estado de un trámite propio", icon: "FileSearch", category: "consulta" },
  { id: "gestionar-usuarios", label: "Crear o eliminar cuentas de usuario", icon: "Users", category: "administrador" },
  { id: "ver-expediente", label: "Ver el contenido de un expediente asignado, sin modificarlo", icon: "FileText", category: "consulta" },
];

export const activity3Categories: { id: string; label: string; icon: string }[] = [
  { id: "administrador", label: "Administrador", icon: "ShieldCheck" },
  { id: "archivista", label: "Archivista", icon: "Archive" },
  { id: "consulta", label: "Consulta", icon: "FileSearch" },
];

// Actividad 4 — Relaciona amenaza, vulnerabilidad, riesgo e impacto
export const activity4Case =
  "Varios funcionarios comparten una misma cuenta de usuario para acceder al sistema de gestión documental.";

export const activity4Items: { id: string; label: string }[] = [
  { id: "amenaza", label: "Amenaza: acceso no autorizado usando la cuenta compartida" },
  { id: "vulnerabilidad", label: "Vulnerabilidad: cuentas compartidas entre varios funcionarios" },
  { id: "riesgo", label: "Riesgo: imposibilidad de saber quién realizó una acción" },
  { id: "impacto", label: "Impacto: pérdida de trazabilidad sobre las acciones del sistema" },
];

export const activity4CorrectOrder = ["amenaza", "vulnerabilidad", "riesgo", "impacto"];

// Actividad 5 — Clasifica controles preventivos, detectivos y correctivos
export const activity5Items: { id: string; label: string; icon: string; category: string }[] = [
  { id: "contrasena", label: "Exigir contraseñas robustas para ingresar al sistema", icon: "KeyRound", category: "preventivo" },
  { id: "capacitar", label: "Capacitar al personal sobre manejo seguro de documentos", icon: "BookOpen", category: "preventivo" },
  { id: "revisar-logs", label: "Revisar periódicamente los registros de auditoría", icon: "FileSearch", category: "detectivo" },
  { id: "alerta-horario", label: "Generar una alerta cuando alguien accede fuera de su horario habitual", icon: "BellRing", category: "detectivo" },
  { id: "restaurar-respaldo", label: "Restaurar un documento eliminado desde el respaldo", icon: "RefreshCw", category: "correctivo" },
  { id: "bloquear-cuenta", label: "Bloquear la cuenta de un usuario tras un uso indebido detectado", icon: "Lock", category: "correctivo" },
];

export const activity5Categories: { id: string; label: string; icon: string }[] = [
  { id: "preventivo", label: "Preventivo", icon: "ShieldCheck" },
  { id: "detectivo", label: "Detectivo", icon: "Radar" },
  { id: "correctivo", label: "Correctivo", icon: "RefreshCw" },
];

// Actividad 6 — Analiza un incidente
export const activity6Case =
  "Se detecta que un usuario descargó, en un solo día, una cantidad inusual de expedientes que no corresponden a sus funciones habituales.";

export const activity6Actions: { id: string; label: string; icon: string; belongs: boolean }[] = [
  { id: "registrar", label: "Registrar el hallazgo y conservar el registro de descargas como evidencia", icon: "ClipboardList", belongs: true },
  { id: "informar", label: "Informar al responsable de seguridad o de gestión documental", icon: "FileSearch", belongs: true },
  { id: "revisar-permisos", label: "Revisar si los permisos de ese usuario corresponden a sus funciones", icon: "Users", belongs: true },
  { id: "borrar-registro", label: "Eliminar el registro de descargas para no generar alarma", icon: "FileX", belongs: false },
  { id: "ignorar", label: "No hacer nada si el usuario tiene una buena trayectoria", icon: "HelpCircle", belongs: false },
];

// Actividad 7 — Ordena las acciones de respuesta ante un incidente
export const activity7Items: { id: string; label: string }[] = [
  { id: "detectar", label: "Detectar el incidente" },
  { id: "contener", label: "Contener o aislar el problema" },
  { id: "evaluar", label: "Evaluar el alcance" },
  { id: "corregir", label: "Corregir o erradicar la causa" },
  { id: "recuperar", label: "Recuperar la información o el servicio" },
  { id: "documentar", label: "Documentar el incidente" },
];

export const activity7CorrectOrder = ["detectar", "contener", "evaluar", "corregir", "recuperar", "documentar"];

// Actividad 8 — Analiza un registro de auditoría
export const activity8Log = "Registro: 'archivista3 modificó EXP-2026-0231 el 18/09/2026 a las 14:20'.";

export const activity8Fields: { id: string; label: string; icon: string; belongs: boolean }[] = [
  { id: "quien", label: "Quién realizó la acción (archivista3)", icon: "FileSearch", belongs: true },
  { id: "que", label: "Qué acción se realizó (modificó)", icon: "ClipboardList", belongs: true },
  { id: "cuando", label: "Cuándo ocurrió (18/09/2026, 14:20)", icon: "Stamp", belongs: true },
  { id: "documento", label: "Sobre qué documento (EXP-2026-0231)", icon: "FileText", belongs: true },
  { id: "resultado", label: "Cuál fue el resultado de la modificación", icon: "ShieldCheck", belongs: false },
  { id: "estado-previo", label: "Cuál era el estado antes de modificarse", icon: "FolderOpen", belongs: false },
];

// Actividad 9 — Construye una estrategia básica de respaldo y recuperación
export const activity9Concepts: { id: string; label: string }[] = [
  { id: "backup-completo", label: "Backup completo" },
  { id: "backup-incremental", label: "Backup incremental" },
  { id: "prueba-restauracion", label: "Prueba de restauración" },
  { id: "copia-externa", label: "Copia fuera del sitio principal" },
];

export const activity9Definitions: { id: string; label: string }[] = [
  { id: "def-completo", label: "Copia de toda la información disponible en un momento determinado" },
  { id: "def-incremental", label: "Copia solo de lo que cambió desde el último respaldo" },
  { id: "def-prueba", label: "Verificación de que un respaldo realmente puede restaurarse" },
  { id: "def-externa", label: "Copia almacenada en un lugar distinto al de la información original" },
];

export const activity9CorrectPairs: Record<string, string> = {
  "backup-completo": "def-completo",
  "backup-incremental": "def-incremental",
  "prueba-restauracion": "def-prueba",
  "copia-externa": "def-externa",
};

// Actividad 10 — Caso integrador de seguridad documental
export const activity10Case =
  "Un expediente electrónico fue modificado sin autorización. Además, la unidad responsable no cuenta con un respaldo reciente ni con un registro claro de quién accedió al expediente en los últimos días.";

export const activity10Aspects: { id: string; label: string; icon: string; belongs: boolean }[] = [
  { id: "registrar-incidente", label: "Registrar el incidente y conservar la evidencia disponible", icon: "ClipboardList", belongs: true },
  { id: "revisar-accesos", label: "Revisar los accesos recientes al expediente", icon: "Users", belongs: true },
  { id: "verificar-respaldo", label: "Verificar si existe algún respaldo utilizable", icon: "DatabaseZap", belongs: true },
  { id: "definir-permisos", label: "Definir permisos según responsabilidades para evitar que se repita", icon: "KeyRound", belongs: true },
  { id: "rediseno", label: "Rediseñar el formato visual del expediente", icon: "Image", belongs: false },
];
