import type { FlowStep } from "../../../types/content.types";
import type {
  AttributeInfo,
  BackupIdea,
  CaseStage,
  ControlTypeInfo,
  IncidentCase,
  ObjectiveCard,
  PermissionRole,
  ProfileOption,
  RiskChainCase,
  SummaryPoint,
  WeekConnection,
} from "./week07.types";

export const heroChain: { id: string; label: string; icon: string }[] = [
  { id: "documento", label: "Documento", icon: "FileText" },
  { id: "riesgo", label: "Riesgo", icon: "ShieldAlert" },
  { id: "atributo", label: "Atributo", icon: "Lock" },
  { id: "control", label: "Control", icon: "ShieldCheck" },
  { id: "responsable", label: "Responsable", icon: "Users" },
  { id: "evidencia", label: "Evidencia", icon: "FileSearch" },
];

export const weekProgression: FlowStep[] = [
  { id: "s5", label: "Semana 5: Autenticidad, fiabilidad, integridad y disponibilidad" },
  { id: "s6", label: "Semana 6: Firma, certificados y trazabilidad" },
  { id: "s7", label: "Semana 7: Seguridad de los documentos y archivos electrónicos" },
];

export const objectives: ObjectiveCard[] = [
  { id: "o1", title: "Explicar los conceptos de seguridad aplicados a documentos electrónicos", description: "Confidencialidad, integridad y disponibilidad, relacionados con la gestión documental y no solo con la informática.", icon: "ShieldCheck" },
  { id: "o2", title: "Diferenciar confidencialidad, integridad y disponibilidad", description: "Tres atributos distintos que pueden comprometerse de forma independiente o simultánea.", icon: "GitCompareArrows" },
  { id: "o3", title: "Identificar riesgos y amenazas", description: "Reconocer qué puede salir mal en un proceso documental y por qué.", icon: "AlertCircle" },
  { id: "o4", title: "Analizar vulnerabilidades en procesos documentales", description: "Detectar puntos débiles que una amenaza podría aprovechar.", icon: "Radar" },
  { id: "o5", title: "Relacionar usuarios, roles y permisos", description: "Vincular el acceso a un documento con la función real de cada persona.", icon: "Users" },
  { id: "o6", title: "Proponer controles de seguridad", description: "Distinguir controles preventivos, detectivos y correctivos, y elegir el que corresponde.", icon: "KeyRound" },
  { id: "o7", title: "Analizar respaldos y recuperación", description: "Evaluar si existe una estrategia adecuada para recuperar información perdida.", icon: "DatabaseZap" },
  { id: "o8", title: "Interpretar registros de auditoría", description: "Extraer, de un registro, quién hizo qué, cuándo y con qué resultado.", icon: "FileSearch" },
  { id: "o9", title: "Responder ante incidentes documentales", description: "Actuar frente a un acceso indebido, una modificación no autorizada o una pérdida de disponibilidad.", icon: "AlertCircle" },
  { id: "o10", title: "Proponer mejoras aplicables a una organización real", description: "Conectar cada control propuesto con el problema concreto que resuelve.", icon: "Workflow" },
];

export const whyItMattersCase =
  "Una institución tiene un expediente electrónico importante. Un usuario obtiene acceso que no debería tener. Después, consulta documentos reservados, modifica un registro y elimina un archivo. No existe un respaldo reciente, y el sistema no conserva suficientes registros para reconstruir lo ocurrido.";

export const whyItMattersQuestion = "¿Qué problemas de seguridad aparecen en este caso? Selecciona todos los que identifiques.";

export const whyItMattersOptions: { id: string; label: string; icon: string; belongs: boolean }[] = [
  { id: "confidencialidad", label: "Se vulneró la confidencialidad: se consultó información reservada sin autorización", icon: "EyeOff", belongs: true },
  { id: "integridad", label: "Se vulneró la integridad: se modificó un registro sin autorización", icon: "KeyRound", belongs: true },
  { id: "disponibilidad", label: "Se vulneró la disponibilidad: se eliminó un archivo y no hay respaldo reciente para recuperarlo", icon: "ServerCrash", belongs: true },
  { id: "trazabilidad", label: "No hay trazabilidad suficiente para reconstruir lo ocurrido", icon: "Route", belongs: true },
  { id: "diseno", label: "El sistema tiene un diseño visual anticuado", icon: "Image", belongs: false },
];

export const whyItMattersClosing =
  "Un único incidente puede afectar varios atributos de seguridad al mismo tiempo. Por eso, analizar un caso de seguridad documental exige revisar cada atributo por separado y también su efecto conjunto.";

export const orientationQuestions = [
  "¿Qué estamos protegiendo?",
  "¿De qué amenaza o riesgo lo estamos protegiendo?",
  "¿Qué podría ocurrir si no existe el control?",
  "¿Qué atributo de seguridad se encuentra comprometido?",
  "¿Qué medida preventiva, detectiva o correctiva corresponde?",
  "¿Quién es responsable?",
  "¿Qué evidencia permite demostrar que el control realmente funciona?",
];

export const relatedConcepts = [
  "Documentos electrónicos",
  "Expedientes electrónicos",
  "Sistemas de gestión documental",
  "Usuarios",
  "Permisos",
  "Autenticación",
  "Acceso",
  "Respaldos",
  "Trazabilidad",
  "Integridad",
  "Disponibilidad",
  "Confidencialidad",
  "Continuidad",
  "Incidentes",
  "Auditoría",
];

export const attributes: AttributeInfo[] = [
  {
    id: "confidencialidad",
    label: "Confidencialidad",
    icon: "EyeOff",
    definition: "La información solo debe estar disponible para las personas autorizadas a conocerla.",
    examples: ["Expediente reservado", "Información personal de un ciudadano", "Documentos internos de una unidad", "Información administrativa sensible", "Documentos en proceso, no publicados aún"],
    institutionalExample: "En un archivo, un usuario consulta documentos que no corresponden a sus funciones: obtiene acceso a expedientes que no necesita para su trabajo.",
  },
  {
    id: "integridad",
    label: "Integridad",
    icon: "KeyRound",
    definition: "La información debe mantenerse completa y sin modificaciones no autorizadas.",
    examples: ["Cambio de la fecha de un documento", "Modificación de metadatos", "Sustitución de un archivo por otra versión", "Eliminación de páginas de un expediente", "Modificación del contenido de un expediente"],
    institutionalExample: "En una municipalidad, un funcionario modifica la información de un expediente sin que quede registro de qué cambió ni quién lo hizo.",
  },
  {
    id: "disponibilidad",
    label: "Disponibilidad",
    icon: "ServerCrash",
    definition: "La información debe estar disponible cuando una persona autorizada la necesita.",
    examples: ["Caída del servidor", "Pérdida de conexión", "Daño del almacenamiento", "Ransomware", "Ausencia de respaldo", "Falla del sistema de gestión documental"],
    institutionalExample: "En una universidad, un expediente académico queda inaccesible por una falla del sistema justo cuando un estudiante lo necesita para un trámite urgente.",
  },
];

export const profileOptions: ProfileOption[] = [
  { id: "administrador", label: "Administrador del sistema", icon: "ShieldCheck", shouldAccess: true, reason: "Requiere acceso técnico completo para administrar el sistema, aunque no siempre para leer el contenido de cada expediente." },
  { id: "archivista", label: "Archivista responsable del expediente", icon: "Archive", shouldAccess: true, reason: "Necesita el expediente para cumplir su función de gestión documental." },
  { id: "jefe-unidad", label: "Jefe de la unidad involucrada", icon: "Landmark", shouldAccess: true, reason: "El expediente corresponde a un trámite de su unidad; lo necesita para decidir o supervisar." },
  { id: "usuario-externo", label: "Usuario externo sin relación con el trámite", icon: "Mail", shouldAccess: false, reason: "No tiene ninguna función que justifique el acceso a este expediente." },
  { id: "temporal", label: "Personal temporal sin autorización específica", icon: "HelpCircle", shouldAccess: false, reason: "Sin una autorización explícita para este expediente, no debería acceder solo por estar dentro de la institución." },
];

export const confidentialityReflectionPrompt = "¿Quién debería poder acceder a este expediente? Selecciona los perfiles correctos y justifica tu criterio.";

export const integrityBefore = {
  campo: "Fecha del informe",
  valor: "15/09/2026",
  responsable: "Gerencia de Administración",
  estado: "Firmado",
};

export const integrityAfter = {
  campo: "Fecha del informe",
  valor: "20/09/2026",
  responsable: "Gerencia de Administración",
  estado: "Firmado",
};

export const integrityChangeOptions: { id: string; label: string; icon: string; belongs: boolean }[] = [
  { id: "fecha", label: "Se modificó la fecha del informe", icon: "Stamp", belongs: true },
  { id: "responsable", label: "Se modificó el responsable del informe", icon: "Users", belongs: false },
  { id: "estado", label: "Se modificó el estado del informe", icon: "FolderOpen", belongs: false },
  { id: "sin-registro", label: "El cambio no tiene registro de quién lo hizo ni cuándo", icon: "FileSearch", belongs: true },
];

export const integrityClosing =
  "Detectar el campo alterado es solo el primer paso: el problema real es que el cambio no quedó registrado. Un control de integridad debería impedir modificaciones sin dejar evidencia de quién las hizo y cuándo.";

export const availabilityCase =
  "El servidor donde se almacena el sistema de gestión documental deja de responder. Una unidad necesita consultar, de forma urgente, un expediente para atender un trámite con plazo vencido.";

export const availabilityOptions: { id: string; label: string; correct: boolean; feedback: string }[] = [
  { id: "esperar", label: "Esperar a que el servidor se restablezca, sin comunicar nada mientras tanto", correct: false, feedback: "Esperar sin comunicar deja a la unidad sin información sobre cuánto tiempo tomará y sin alternativas mientras tanto." },
  { id: "respaldo", label: "Verificar si existe un respaldo reciente, evaluar una vía de acceso alterna y comunicar el estado a los afectados", correct: true, feedback: "Correcto: ante una falla de disponibilidad, corresponde verificar el respaldo, evaluar alternativas y mantener informados a los usuarios afectados." },
  { id: "recrear", label: "Recrear el expediente desde cero con la información que se recuerde", correct: false, feedback: "Recrear un expediente sin base documental compromete su fiabilidad; primero debe agotarse la posibilidad de restaurarlo desde un respaldo." },
];

export const authFlow: FlowStep[] = [
  { id: "usuario", label: "Usuario" },
  { id: "autenticacion", label: "Autenticación" },
  { id: "rol", label: "Rol" },
  { id: "permisos", label: "Permisos" },
  { id: "recurso", label: "Recurso" },
];

export const authDefinitions = {
  autenticacion: { label: "Autenticación", question: "¿Quién eres?", description: "Comprueba la identidad de quien intenta acceder al sistema (usuario y contraseña, un segundo factor, etc.)." },
  autorizacion: { label: "Autorización", question: "¿Qué puedes hacer?", description: "Una vez confirmada la identidad, determina qué acciones puede realizar esa persona." },
  controlAcceso: { label: "Control de acceso", question: "¿A qué información o recurso puedes acceder?", description: "Aplica la autorización a recursos concretos: documentos, expedientes o funciones específicas del sistema." },
};

export const authExample =
  "Un usuario puede ingresar correctamente al sistema (autenticación exitosa), pero eso no significa que pueda modificar todos los documentos: sus permisos (autorización) determinan qué puede hacer, y el control de acceso decide sobre qué recursos concretos.";

export const permissionRoles: PermissionRole[] = [
  { id: "administrador", label: "Administrador", ver: "Sí", crear: "Sí", modificar: "Sí", eliminar: "Sí", administrar: "Sí" },
  { id: "archivista", label: "Archivista", ver: "Sí", crear: "Sí", modificar: "Sí", eliminar: "Según autorización", administrar: "No" },
  { id: "consulta", label: "Consulta", ver: "Sí", crear: "No", modificar: "No", eliminar: "No", administrar: "No" },
];

export const permissionsDisclaimer =
  "Los permisos reales deben definirse según las funciones, responsabilidades, normativa y políticas de cada institución. Esta matriz es solo un punto de partida para razonar, no una plantilla universal.";

export const assignPermissionCase =
  "Un usuario con rol de Consulta solicita permiso para eliminar un documento duplicado que él mismo cargó por error.";

export const assignPermissionOptions: { id: string; label: string; correct: boolean }[] = [
  { id: "ver", label: "Otorgarle solo permiso de Ver, como corresponde a su rol", correct: false },
  { id: "eliminar-directo", label: "Permitirle eliminar directamente, ya que fue su propio error", correct: false },
  { id: "solicitar-archivista", label: "Mantener su rol de Consulta y derivar la eliminación a quien tenga el permiso correspondiente (Archivista, según autorización)", correct: true },
];

export const assignPermissionFeedback =
  "El error de carga no cambia el rol del usuario. Ampliar permisos de forma puntual e informal debilita el control de acceso; lo correcto es que la acción la realice quien tiene el permiso asignado, dejando registro de por qué se eliminó.";

export const riskDefinitions = {
  amenaza: "Un evento o actor que puede causar daño (por ejemplo, un acceso no autorizado).",
  vulnerabilidad: "Una debilidad que hace posible que la amenaza tenga efecto (por ejemplo, cuentas compartidas).",
  riesgo: "La posibilidad de que la amenaza aproveche la vulnerabilidad (por ejemplo, consulta indebida de documentos).",
  impacto: "La consecuencia si el riesgo se concreta (por ejemplo, exposición de información reservada).",
  control: "La medida que reduce la amenaza, la vulnerabilidad o el impacto (por ejemplo, cuentas individuales y auditoría).",
};

export const riskChainExample: RiskChainCase = {
  id: "ejemplo-riesgo",
  threat: "Acceso no autorizado a un expediente",
  vulnerability: "Cuentas de usuario compartidas entre varios funcionarios",
  risk: "Consulta indebida de documentos reservados",
  impact: "Exposición de información personal o institucional sensible",
  control: "Cuentas individuales, permisos por rol y auditoría de accesos",
};

export const riskChainOrderItems: { id: string; label: string }[] = [
  { id: "amenaza", label: "Amenaza: acceso no autorizado" },
  { id: "vulnerabilidad", label: "Vulnerabilidad: cuentas compartidas" },
  { id: "riesgo", label: "Riesgo: consulta indebida de documentos" },
  { id: "impacto", label: "Impacto: exposición de información" },
];

export const riskChainCorrectOrder = ["amenaza", "vulnerabilidad", "riesgo", "impacto"];

export const controlTypes: ControlTypeInfo[] = [
  { id: "preventivo", label: "Controles preventivos", icon: "ShieldCheck", definition: "Evitan que el incidente ocurra.", examples: ["Contraseñas robustas", "Autenticación de doble factor (MFA)", "Permisos por rol", "Capacitación del personal"] },
  { id: "detectivo", label: "Controles detectivos", icon: "Radar", definition: "Permiten identificar que algo ocurrió.", examples: ["Registros de auditoría (logs)", "Revisión periódica de accesos", "Alertas automáticas ante actividad inusual"] },
  { id: "correctivo", label: "Controles correctivos", icon: "RefreshCw", definition: "Permiten recuperar o corregir después de un incidente.", examples: ["Restauración desde respaldo", "Recuperación de información alterada", "Bloqueo de la cuenta comprometida"] },
];

export const controlClassifySituations: { id: string; label: string; icon: string; category: "preventivo" | "detectivo" | "correctivo" }[] = [
  { id: "mfa", label: "Exigir un segundo factor de autenticación para ingresar", icon: "KeyRound", category: "preventivo" },
  { id: "permisos-rol", label: "Asignar permisos según el rol de cada usuario", icon: "Users", category: "preventivo" },
  { id: "capacitacion", label: "Capacitar al personal sobre manejo seguro de documentos", icon: "BookOpen", category: "preventivo" },
  { id: "logs", label: "Revisar los registros de auditoría cada semana", icon: "FileSearch", category: "detectivo" },
  { id: "alerta", label: "Recibir una alerta cuando alguien accede fuera de su horario habitual", icon: "BellRing", category: "detectivo" },
  { id: "restaurar", label: "Restaurar un documento eliminado desde el respaldo", icon: "RefreshCw", category: "correctivo" },
  { id: "bloquear", label: "Bloquear la cuenta de un usuario tras detectar un uso indebido", icon: "Lock", category: "correctivo" },
  { id: "recuperar-info", label: "Recuperar la versión anterior de un documento modificado indebidamente", icon: "History", category: "correctivo" },
];

export const backupIdeas: BackupIdea[] = [
  { id: "backup", label: "Copia de respaldo (backup)", detail: "Una copia de la información, realizada con una frecuencia definida." },
  { id: "recuperacion", label: "Recuperación", detail: "El proceso de restaurar la información a partir de un respaldo." },
  { id: "frecuencia", label: "Frecuencia", detail: "Cada cuánto tiempo se realiza el respaldo; debe responder al ritmo real de cambios." },
  { id: "almacenamiento", label: "Almacenamiento", detail: "Dónde se guarda el respaldo — idealmente, no en el mismo lugar que el original." },
  { id: "pruebas", label: "Pruebas de restauración", detail: "Comprobar periódicamente que el respaldo realmente puede restaurarse." },
  { id: "responsabilidad", label: "Responsabilidad", detail: "Quién es responsable de que el respaldo se realice y se verifique." },
];

export const rule321 =
  "La estrategia 3-2-1 es una referencia práctica y general: mantener 3 copias de la información, en 2 tipos de soporte distintos, con 1 copia fuera del lugar principal. Las políticas institucionales pueden establecer requisitos adicionales o distintos según el caso.";

export const backupSimulatorItems: { id: string; label: string }[] = [
  { id: "detectar", label: "Detectar el incidente" },
  { id: "aislar", label: "Aislar el problema" },
  { id: "evaluar", label: "Evaluar el alcance" },
  { id: "verificar", label: "Verificar el respaldo disponible" },
  { id: "restaurar", label: "Restaurar la información" },
  { id: "validar", label: "Validar la información restaurada" },
  { id: "documentar", label: "Documentar el incidente" },
];

export const backupSimulatorCorrectOrder = ["detectar", "aislar", "evaluar", "verificar", "restaurar", "validar", "documentar"];

export const traceabilityAuditIntro =
  "La trazabilidad, trabajada en la Semana 6 para la firma digital, también es la base de la auditoría de seguridad: permite reconstruir quién hizo qué, cuándo, sobre qué documento, desde qué proceso y con qué resultado.";

export const auditLogEvents: { id: string; time: string; user: string; action: string; document: string; suspicious: boolean }[] = [
  { id: "e1", time: "09:01", user: "mgarcia", action: "Inicia sesión", document: "—", suspicious: false },
  { id: "e2", time: "09:03", user: "mgarcia", action: "Consulta expediente", document: "EXP-2026-0142", suspicious: false },
  { id: "e3", time: "09:05", user: "mgarcia", action: "Modifica metadato", document: "EXP-2026-0142", suspicious: false },
  { id: "e4", time: "09:07", user: "Sistema", action: "Registra la modificación", document: "EXP-2026-0142", suspicious: false },
  { id: "e5", time: "23:47", user: "mgarcia", action: "Consulta expediente (fuera de horario habitual)", document: "EXP-2026-0198", suspicious: true },
  { id: "e6", time: "09:10", user: "Supervisor", action: "Revisa expediente", document: "EXP-2026-0142", suspicious: false },
];

export const auditLogQuestion = "¿Qué evento de esta línea de tiempo requiere revisión adicional? Selecciónalo y explica por qué.";

export const incidentIntro =
  "Un incidente de seguridad no debe tratarse solamente como un problema informático: cuando afecta documentos electrónicos, también puede afectar la gestión documental, la evidencia, la trazabilidad y la continuidad institucional.";

export const incidentCase: IncidentCase = {
  id: "incidente-modificacion",
  scenario: "Se detecta que un documento del sistema de gestión documental fue modificado sin autorización.",
  prompt: "¿Qué deberías hacer primero, y qué evidencia deberías conservar? Selecciona las acciones correctas.",
  options: [
    { id: "registrar", label: "Registrar el incidente y conservar evidencia (versión modificada, registros del sistema)", icon: "ClipboardList", belongs: true },
    { id: "informar", label: "Informar al responsable de gestión documental o de seguridad", icon: "FileSearch", belongs: true },
    { id: "revisar-logs", label: "Revisar los registros de auditoría para identificar quién y cuándo", icon: "Route", belongs: true },
    { id: "borrar-version", label: "Eliminar la versión modificada para que no cause más problemas", icon: "FileX", belongs: false },
    { id: "ignorar", label: "No informar si el documento no era muy importante", icon: "HelpCircle", belongs: false },
  ],
  explanation: "Antes de corregir cualquier cosa, hay que registrar el incidente y conservar la evidencia disponible; eliminar la versión modificada o no informar destruye la posibilidad de investigar y aprender del incidente.",
};

export const practicalCaseIntro =
  "El área de gestión documental de la Municipalidad Distrital de San Gabriel (simulación académica) detecta que un usuario modificó información de un expediente electrónico. Además, una carpeta con documentos no está disponible, y se descubre que el último respaldo fue realizado hace varias semanas.";

export const practicalCaseStages: CaseStage[] = [
  {
    id: "etapa-1",
    title: "Etapa 1 — ¿Qué ocurrió?",
    prompt: "Selecciona los hechos que están efectivamente descritos en el caso.",
    kind: "multiSelect",
    options: [
      { id: "modificacion", label: "Un usuario modificó información de un expediente electrónico", belongs: true },
      { id: "carpeta", label: "Una carpeta con documentos no está disponible", belongs: true },
      { id: "respaldo-antiguo", label: "El último respaldo fue realizado hace varias semanas", belongs: true },
      { id: "filtracion", label: "Se confirmó la filtración pública de los documentos", belongs: false },
    ],
    closingNote: "El caso describe una modificación no autorizada y un problema de disponibilidad — no se menciona una filtración pública confirmada.",
  },
  {
    id: "etapa-2",
    title: "Etapa 2 — Atributos comprometidos",
    prompt: "¿Qué atributos de seguridad están comprometidos en este caso? Selecciona todos los que correspondan.",
    kind: "multiSelect",
    options: [
      { id: "integridad", label: "Integridad (la modificación no autorizada)", belongs: true },
      { id: "disponibilidad", label: "Disponibilidad (la carpeta inaccesible, sin respaldo reciente)", belongs: true },
      { id: "confidencialidad", label: "Confidencialidad (no hay evidencia de que alguien no autorizado haya visto la información)", belongs: false },
    ],
    closingNote: "El caso compromete integridad y disponibilidad; no hay evidencia de un problema de confidencialidad en los datos descritos.",
  },
  {
    id: "etapa-3",
    title: "Etapa 3 — Amenazas y vulnerabilidades",
    prompt: "Selecciona la amenaza y la vulnerabilidad que mejor explican lo ocurrido.",
    kind: "multiSelect",
    options: [
      { id: "amenaza-modificacion", label: "Amenaza: modificación no autorizada por parte de un usuario con acceso", belongs: true },
      { id: "vulnerabilidad-sin-control", label: "Vulnerabilidad: no existe control que impida o registre modificaciones no autorizadas", belongs: true },
      { id: "vulnerabilidad-respaldo", label: "Vulnerabilidad: no existe una política de respaldo con frecuencia adecuada", belongs: true },
      { id: "amenaza-diseno", label: "Amenaza: el sistema tiene un diseño visual poco atractivo", belongs: false },
    ],
    closingNote: "La amenaza es la acción no autorizada; las vulnerabilidades son la falta de control sobre modificaciones y una política de respaldo insuficiente.",
  },
  {
    id: "etapa-4",
    title: "Etapa 4 — Controles faltantes",
    prompt: "¿Qué controles faltan en este caso? Selecciona todos los que correspondan.",
    kind: "multiSelect",
    options: [
      { id: "control-modificaciones", label: "Un control que registre o restrinja modificaciones no autorizadas", belongs: true },
      { id: "control-respaldo", label: "Una política de respaldo con frecuencia adecuada y pruebas de restauración", belongs: true },
      { id: "control-auditoria", label: "Un registro de auditoría que permita reconstruir quién modificó qué y cuándo", belongs: true },
      { id: "control-diseno", label: "Un rediseño visual del sistema", belongs: false },
    ],
    closingNote: "Faltan controles de integridad (registro/restricción de cambios), de disponibilidad (respaldo probado) y de auditoría (trazabilidad de la modificación).",
  },
  {
    id: "etapa-5",
    title: "Etapa 5 — Acciones inmediatas",
    prompt: "Ordena las acciones inmediatas que deberías tomar ante este caso.",
    kind: "sequence",
    options: [
      { id: "detectar", label: "Confirmar y documentar lo detectado" },
      { id: "conservar", label: "Conservar evidencia (registro de la modificación, estado de la carpeta)" },
      { id: "informar", label: "Informar al responsable de gestión documental" },
      { id: "verificar-respaldo", label: "Verificar si existe algún respaldo utilizable" },
    ],
    correctOrder: ["detectar", "conservar", "informar", "verificar-respaldo"],
    closingNote: "Antes de proponer mejoras a futuro, hay que confirmar lo ocurrido, conservar evidencia, informar al responsable y verificar qué puede recuperarse ahora.",
  },
  {
    id: "etapa-6",
    title: "Etapa 6 — Mejoras propuestas",
    prompt: "Describe, con tus propias palabras, dos mejoras que propondrías para evitar que esto vuelva a ocurrir.",
    kind: "openText",
    minWords: 10,
    closingNote: "Una propuesta sólida suele incluir: control de modificaciones con registro de autoría, y una política de respaldo con frecuencia definida y pruebas periódicas de restauración.",
  },
  {
    id: "etapa-7",
    title: "Etapa 7 — Evidencias de verificación",
    prompt: "¿Qué evidencia permitiría comprobar, más adelante, que tus mejoras realmente funcionan?",
    kind: "openText",
    minWords: 8,
    closingNote: "Por ejemplo: registros de auditoría que muestren modificaciones siempre atribuibles a un usuario, o un registro de pruebas de restauración exitosas realizadas periódicamente.",
  },
];

export const practicalCaseClosing =
  "Así se analiza un incidente de seguridad documental desde una perspectiva de gestión documental: identificar el hecho, los atributos comprometidos, la amenaza y la vulnerabilidad, los controles faltantes, actuar de inmediato, proponer mejoras y definir cómo se verificará que funcionan.";

export const weekConnections: WeekConnection[] = [
  { week: 1, label: "Semana 1", concept: "Documento electrónico y expediente" },
  { week: 2, label: "Semana 2", concept: "Sistema de gestión documental" },
  { week: 3, label: "Semana 3", concept: "Procesos documentales" },
  { week: 4, label: "Semana 4", concept: "Metadatos" },
  { week: 5, label: "Semana 5", concept: "Autenticidad, fiabilidad, integridad y disponibilidad" },
  { week: 6, label: "Semana 6", concept: "Firma, certificado y trazabilidad" },
  { week: 7, label: "Semana 7", concept: "Seguridad de los documentos y archivos electrónicos" },
];

export const projectConnectionItems = [
  "Riesgos",
  "Accesos",
  "Permisos",
  "Atributos de seguridad",
  "Controles",
  "Respaldos",
  "Trazabilidad",
  "Incidentes",
  "Evidencias",
];

export const summaryPoints: SummaryPoint[] = [
  { id: "s1", title: "01", description: "La seguridad no es solo tecnología: también es gestión documental, roles y decisiones institucionales.", icon: "ShieldCheck" },
  { id: "s2", title: "02", description: "Los documentos electrónicos también necesitan protección, no solo los sistemas que los almacenan.", icon: "FileText" },
  { id: "s3", title: "03", description: "Los permisos deben responder a responsabilidades reales, no asignarse por comodidad.", icon: "Users" },
  { id: "s4", title: "04", description: "Todo riesgo debe analizarse (amenaza, vulnerabilidad, impacto) y controlarse, no solo mencionarse.", icon: "AlertCircle" },
  { id: "s5", title: "05", description: "Los respaldos deben poder recuperarse: un respaldo que nunca se prueba no es una garantía.", icon: "DatabaseZap" },
  { id: "s6", title: "06", description: "La trazabilidad permite reconstruir acciones — quién, qué, cuándo y con qué resultado.", icon: "Route" },
  { id: "s7", title: "07", description: "Un incidente debe generar evidencia y aprendizaje, no solo una corrección apresurada.", icon: "FileSearch" },
];

export const nextWeekConnection = {
  currentTitle: "Seguridad de los documentos y archivos electrónicos",
  nextWeekNumber: 8,
  nextTitle: "Interoperabilidad y digitalización",
  text: "Ya sabemos qué proteger, de qué protegerlo y qué controles corresponden. Ahora veremos cómo los documentos se intercambian entre sistemas y cómo se digitalizan los documentos físicos, dos procesos que también deben preservar la seguridad que hemos analizado.",
};
