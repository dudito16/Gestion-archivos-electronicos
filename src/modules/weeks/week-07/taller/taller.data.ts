/** Static content for Week 7's "Taller" — 10 deeper, non-graded workshop activities. */

// Taller 1 — Diagnóstico de accesos
export const taller1Case =
  "Un sistema de gestión documental permite que cualquier usuario autenticado consulte todos los expedientes, sin distinción por área o función.";

export const taller1Concerns: { id: string; label: string; icon: string; belongs: boolean }[] = [
  { id: "sin-segmentacion", label: "No existe segmentación de acceso por área o función", icon: "Users", belongs: true },
  { id: "confidencialidad", label: "Se compromete la confidencialidad de expedientes reservados", icon: "EyeOff", belongs: true },
  { id: "no-hay-necesidad", label: "El acceso no responde al principio de necesidad de conocer", icon: "KeyRound", belongs: true },
  { id: "diseno", label: "El sistema tiene un diseño visual poco intuitivo", icon: "Image", belongs: false },
  { id: "lento", label: "El sistema tarda en cargar los expedientes", icon: "ServerCrash", belongs: false },
];

// Taller 2 — Matriz de usuarios, roles y permisos
export const taller2Roles: { id: string; label: string }[] = [
  { id: "administrador", label: "Administrador" },
  { id: "archivista", label: "Archivista" },
  { id: "consulta", label: "Consulta" },
];

// Taller 3 — Mapa de riesgos documentales
export const taller3Scenario =
  "El área de archivo de una entidad no cuenta con políticas claras de acceso, no revisa periódicamente los permisos asignados y no prueba sus respaldos.";

export const taller3ProblemSuggestions = [
  "No hay políticas claras de acceso a los expedientes",
  "Los permisos asignados no se revisan periódicamente",
  "Los respaldos no se prueban antes de necesitarlos",
  "No hay un registro uniforme de quién accede a qué expediente",
];

export const taller3MinRows = 4;

// Taller 4 — Identificación de vulnerabilidades
export const taller4Case =
  "En una oficina, varios funcionarios utilizan la misma computadora y sesión de usuario para consultar el sistema de gestión documental durante todo el turno.";

export const taller4Concerns: { id: string; label: string; icon: string; belongs: boolean }[] = [
  { id: "sesion-compartida", label: "La sesión compartida impide saber quién realizó cada acción", icon: "Users", belongs: true },
  { id: "sin-bloqueo", label: "La sesión probablemente queda abierta sin bloqueo automático", icon: "Lock", belongs: true },
  { id: "trazabilidad", label: "Se pierde trazabilidad individual sobre las acciones realizadas", icon: "Route", belongs: true },
  { id: "hardware", label: "La computadora es un modelo antiguo", icon: "HelpCircle", belongs: false },
];

// Taller 5 — Matriz de controles
export const taller5ProblemSuggestions = [
  "Contraseñas débiles o reutilizadas",
  "No se revisan los registros de acceso",
  "No existe plan de recuperación ante incidentes",
  "Los permisos no se actualizan cuando cambia una función",
];

export const taller5MinRows = 4;

export const taller5ControlTypeOptions: { id: string; label: string }[] = [
  { id: "preventivo", label: "Preventivo" },
  { id: "detectivo", label: "Detectivo" },
  { id: "correctivo", label: "Correctivo" },
];

// Taller 6 — Análisis de respaldo y recuperación
export const taller6Stages: { id: string; label: string }[] = [
  { id: "detectar", label: "Detectar" },
  { id: "aislar", label: "Aislar" },
  { id: "evaluar", label: "Evaluar alcance" },
  { id: "verificar", label: "Verificar respaldo" },
  { id: "restaurar", label: "Restaurar" },
  { id: "validar", label: "Validar" },
  { id: "documentar", label: "Documentar" },
];

export const taller6MinStages = 5;

// Taller 7 — Reconstrucción de un incidente mediante registros
export const taller7Items: { id: string; label: string }[] = [
  { id: "acceso", label: "Inicio de sesión de un usuario fuera de su horario habitual" },
  { id: "consulta", label: "Consulta de un expediente ajeno a sus funciones" },
  { id: "descarga", label: "Descarga masiva de documentos del expediente" },
  { id: "alerta", label: "El sistema genera una alerta por actividad inusual" },
  { id: "revision", label: "El área de seguridad revisa el registro de auditoría" },
  { id: "bloqueo", label: "Se bloquea la cuenta del usuario" },
];

export const taller7CorrectOrder = ["acceso", "consulta", "descarga", "alerta", "revision", "bloqueo"];

// Taller 8 — Ficha de incidente
export const taller8Fields: { id: string; label: string; placeholder: string }[] = [
  { id: "que-ocurrio", label: "¿Qué ocurrió?", placeholder: "Describe brevemente el incidente" },
  { id: "cuando-detecto", label: "¿Cuándo se detectó?", placeholder: "Fecha y hora aproximada" },
  { id: "primera-accion", label: "¿Qué se hizo primero?", placeholder: "Primera acción tomada" },
  { id: "evidencia", label: "¿Qué evidencia se conservó?", placeholder: "Registros, capturas, versiones" },
  { id: "informado", label: "¿A quién se informó?", placeholder: "Responsable o área informada" },
];

// Taller 9 — Caso institucional (3 mini-casos)
export const taller9Cases: { id: string; label: string; text: string; correct: "aceptar" | "investigar" }[] = [
  { id: "caso-a", label: "Caso A", text: "Un usuario con rol de Consulta solicita, por única vez, permiso temporal para exportar un reporte que necesita para una reunión inmediata, y su jefe lo autoriza por escrito.", correct: "aceptar" },
  { id: "caso-b", label: "Caso B", text: "Un usuario solicita acceso a expedientes de otra área 'para revisar algo', sin especificar el trámite ni contar con autorización de esa área.", correct: "investigar" },
  { id: "caso-c", label: "Caso C", text: "Se detecta que una cuenta accedió a expedientes fuera de su horario habitual y no hay ninguna solicitud ni justificación registrada.", correct: "investigar" },
];

// Taller 10 — CASO INTEGRADOR: matriz de seguridad documental
export const taller10Scenario =
  "Una entidad detecta varios problemas: usuarios con más permisos de los que necesitan, modificaciones sin registro claro, un respaldo que nunca se ha probado y falta de revisión periódica de los accesos.";

export const taller10ProblemSuggestions = [
  "Usuarios con más permisos de los que necesitan",
  "Modificaciones realizadas sin registro claro de autoría",
  "El respaldo existente nunca se ha probado",
  "No se revisan periódicamente los accesos otorgados",
  "No hay un procedimiento definido ante un incidente",
];

export const taller10AttributeOptions: { id: string; label: string }[] = [
  { id: "confidencialidad", label: "Confidencialidad" },
  { id: "integridad", label: "Integridad" },
  { id: "disponibilidad", label: "Disponibilidad" },
];

export const taller10MinRows = 5;
