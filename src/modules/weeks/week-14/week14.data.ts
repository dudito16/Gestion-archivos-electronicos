import type { FlowStep } from "../../../types/content.types";
import type {
  ArchitectureComponent,
  AuditScope,
  HeroStep,
  LearningOutcome,
  PriorKnowledgeQuestion,
  ReferenceItem,
  ReliabilityCharacteristic,
  SecurityScenario,
  StorageStrategy,
  StorageTier,
  SummaryPoint,
  TransferCriterion,
  WeekConnectionStep,
} from "./week14.types";

export const heroChain: HeroStep[] = [
  { id: "sgd", label: "SGD", icon: "FileStack" },
  { id: "transferencia", label: "Transferencia", icon: "ArrowRightLeft" },
  { id: "repositorio", label: "Repositorio confiable", icon: "Archive" },
  { id: "auditoria", label: "Auditoría ISO 16363", icon: "ClipboardList" },
  { id: "acceso", label: "Acceso confiable", icon: "ShieldCheck" },
];

export const weekTagline = "Un repositorio confiable no se declara: se evalúa, con evidencias, frente a criterios explícitos";

export const weekProgression: FlowStep[] = [
  { id: "estandares", label: "Estándares de preservación (Semana 13)" },
  { id: "repositorio-confiable", label: "Repositorio digital confiable" },
  { id: "iso16363", label: "ISO 16363:2025" },
  { id: "arquitectura", label: "Arquitectura y seguridad" },
  { id: "transferencia-sgd", label: "Transferencia desde el SGD" },
];

export const motivationQuestion =
  "Una institución tiene servidores modernos y realiza copias de seguridad diariamente. ¿Podemos afirmar que dispone de un repositorio digital confiable?";

export const learningOutcomes: LearningOutcome[] = [
  { id: "o1", label: "Diferenciar almacenamiento digital, copia de seguridad y repositorio de preservación", icon: "Database" },
  { id: "o2", label: "Explicar qué significa que un repositorio sea confiable", icon: "ShieldCheck" },
  { id: "o3", label: "Reconocer las características de confiabilidad y su riesgo si no se cumplen", icon: "ListChecks" },
  { id: "o4", label: "Explicar el propósito de ISO 16363:2025 y sus tres ámbitos de evaluación", icon: "ClipboardList" },
  { id: "o5", label: "Diferenciar autoevaluación, auditoría formal y certificación", icon: "Stamp" },
  { id: "o6", label: "Describir la arquitectura y las estrategias de almacenamiento de un repositorio", icon: "Workflow" },
  { id: "o7", label: "Analizar riesgos de acceso, seguridad y sostenibilidad", icon: "Lock" },
  { id: "o8", label: "Explicar la relación entre el SGD y el repositorio de preservación, y los criterios de transferencia", icon: "ArrowRightLeft" },
];

export const achievementIndicator =
  "Identifica criterios básicos de confiabilidad y explica la relación entre el SGD y el repositorio digital.";

// ---------------------------------------------------------------------------
// Saberes previos
// ---------------------------------------------------------------------------

export const priorKnowledgeIntro =
  "Antes de empezar, repasa brevemente lo que ya revisaste en semanas anteriores: estos conocimientos son la base para evaluar la confiabilidad de un repositorio.";

export const priorKnowledgeQuestions: PriorKnowledgeQuestion[] = [
  {
    id: "pk1",
    prompt: "¿Qué permite comprobar un valor SHA-256 registrado al ingreso de un documento (Semana 10)?",
    options: [
      { id: "a", label: "Si el documento se mantiene sin alteraciones no controladas respecto de esa referencia" },
      { id: "b", label: "Quién es el autor del documento" },
      { id: "c", label: "Si el documento tiene valor histórico" },
    ],
    correctId: "a",
    feedback: "El hash (Semana 10) permite verificar integridad frente a una referencia — una de las evidencias que un repositorio confiable debe poder mostrar.",
  },
  {
    id: "pk2",
    prompt: "¿Qué registra un evento de preservación según PREMIS (Semana 13)?",
    options: [
      { id: "a", label: "Únicamente el nombre del archivo" },
      { id: "b", label: "Una acción documentada aplicada a un objeto, con su fecha, resultado y agente responsable" },
      { id: "c", label: "El tema o la materia del documento" },
    ],
    correctId: "b",
    feedback: "PREMIS (Semana 13) documenta eventos de preservación — información que un repositorio confiable necesita para ser auditable.",
  },
  {
    id: "pk3",
    prompt: "¿Qué es BagIt (Semana 13)?",
    options: [
      { id: "a", label: "Una convención de empaquetado con un manifiesto que permite verificar la integridad de la transferencia" },
      { id: "b", label: "Un modelo de referencia para la preservación digital" },
      { id: "c", label: "Un software que certifica repositorios digitales" },
    ],
    correctId: "a",
    feedback: "BagIt (Semana 13) empaqueta y permite verificar contenidos transferidos — relevante para la transferencia desde el SGD hacia el repositorio.",
  },
  {
    id: "pk4",
    prompt: "¿Qué es el modelo OAIS (Semana 12)?",
    options: [
      { id: "a", label: "Un modelo de referencia que organiza funciones, responsabilidades y tipos de información para la preservación" },
      { id: "b", label: "Un estándar de certificación de repositorios" },
      { id: "c", label: "Un procedimiento exclusivo del SGD" },
    ],
    correctId: "a",
    feedback: "OAIS (Semana 12) es el modelo de referencia conceptual; esta semana veremos cómo se evalúa, con ISO 16363, si una implementación concreta es confiable.",
  },
];

export const priorKnowledgeBridge =
  "Estos conocimientos son la base de esta semana: la integridad (Semana 10), los metadatos de preservación y el empaquetado verificable (Semana 13), y el modelo OAIS (Semana 12) son, precisamente, parte de lo que un repositorio digital confiable debe sostener de forma demostrable — no solo declarada.";

// ---------------------------------------------------------------------------
// Módulo 1 — ¿Qué es un repositorio digital confiable?
// ---------------------------------------------------------------------------

export const repositoryConceptDefinition =
  "Un repositorio digital es un sistema que organiza, administra y proporciona acceso a objetos digitales. Un repositorio digital confiable va más allá: gestiona la preservación a largo plazo de esos objetos mediante políticas, controles, responsabilidades asignadas, metadatos, seguridad, verificación de integridad y mecanismos de acceso — de forma sostenida y demostrable, no solo en el momento de su implementación.";

export const storageVsPreservationDistinction =
  "Almacenar un documento digital no es lo mismo que preservarlo. El almacenamiento conserva la secuencia de bits; la preservación digital (Semana 11) sostiene, además, la capacidad de interpretar, verificar y acceder a ese documento a lo largo del tiempo, pese a cambios tecnológicos y organizacionales.";

export const backupVsRepositoryDistinction =
  "Una copia de seguridad protege contra la pérdida accidental de información en un momento dado; no sustituye a un repositorio de preservación, que sostiene de forma planificada la integridad, los metadatos, la identificación de formatos y el acceso controlado de los objetos conservados a largo plazo.";

export const storageTiers: StorageTier[] = [
  { id: "almacenamiento", label: "Almacenamiento digital", description: "Guarda documentos." },
  { id: "backup", label: "Copia de seguridad", description: "Permite recuperar información ante una pérdida." },
  { id: "repositorio", label: "Repositorio digital", description: "Organiza, administra y proporciona acceso a objetos digitales." },
  { id: "repositorio-confiable", label: "Repositorio digital confiable", description: "Gestiona la preservación a largo plazo mediante políticas, controles, responsabilidades, metadatos, seguridad, integridad y mecanismos de acceso." },
];

export const institutionalExampleModule1 =
  "Una entidad pública conserva 30 000 expedientes electrónicos en un servidor. Realiza copias de seguridad cada semana, pero no verifica la integridad de los documentos ni dispone de una política de preservación.";

export const whyNotEnoughExplanation =
  "Tener documentos almacenados y copias de seguridad no basta: sin verificación periódica de integridad, sin política de preservación y sin responsables asignados, la institución no puede demostrar que sus documentos siguen siendo los mismos que recibió, ni sostener esa garantía si cambia el personal, la tecnología o el proveedor del servicio.";

export const institutionalResponsibilityNote =
  "Conservar documentos electrónicos con valor probatorio, administrativo o histórico es una responsabilidad institucional, no solo una tarea técnica: exige decisiones de política, asignación de responsables y sostenibilidad en el tiempo, además de infraestructura tecnológica adecuada.";

export const module1ParticipationQuestion = {
  id: "module1-participacion",
  prompt: motivationQuestion,
  options: [
    { id: "a", label: "Sí: servidores modernos y copias diarias ya garantizan un repositorio confiable" },
    { id: "b", label: "No necesariamente: sin política de preservación, verificación de integridad y responsables asignados, no puede afirmarse" },
    { id: "c", label: "Sí, siempre que las copias de seguridad sean diarias y no semanales" },
  ],
  correctId: "b",
  feedback: "La infraestructura moderna y las copias de seguridad son necesarias, pero no suficientes: un repositorio confiable requiere, además, política de preservación, verificación periódica de integridad y responsables formalmente asignados.",
};

// ---------------------------------------------------------------------------
// Módulo 2 — Características de un repositorio digital confiable
// ---------------------------------------------------------------------------

export const reliabilityCharacteristics: ReliabilityCharacteristic[] = [
  {
    id: "autenticidad",
    label: "Autenticidad",
    icon: "Stamp",
    definition: "La capacidad de demostrar que un documento es lo que afirma ser y que proviene de quien afirma haberlo producido o conservado.",
    importance: "Sin autenticidad demostrable, un documento pierde su valor probatorio y administrativo, incluso si su contenido parece intacto.",
    example: "Un repositorio conserva, junto al expediente, la información de procedencia que permite sustentar quién lo produjo y bajo qué proceso.",
    risk: "Un documento sin información de procedencia puede ser cuestionado como evidencia o antecedente administrativo.",
    control: "Registrar y conservar la información de procedencia y el historial de custodia del documento desde su ingreso.",
  },
  {
    id: "integridad",
    label: "Integridad",
    icon: "Fingerprint",
    definition: "Que el documento se mantenga sin alteraciones no autorizadas ni controladas respecto de una referencia conocida.",
    importance: "La integridad es verificable técnicamente (p. ej., mediante hash) y sostiene la confianza en que el contenido no cambió sin que quede registro.",
    example: "El repositorio calcula y compara periódicamente el valor SHA-256 de cada documento conservado frente al registrado en su ingreso.",
    risk: "Una alteración no detectada puede pasar desapercibida durante años si no existe verificación periódica.",
    control: "Verificar periódicamente la integridad y documentar el resultado de cada comprobación.",
  },
  {
    id: "fiabilidad",
    label: "Fiabilidad",
    icon: "ShieldCheck",
    definition: "Que el documento haya sido producido y gestionado conforme a procedimientos institucionales confiables, de forma consistente.",
    importance: "Un documento producido y gestionado con procedimientos consistentes genera mayor confianza que uno producido de forma ad hoc.",
    example: "Los expedientes se generan siguiendo el mismo procedimiento institucional documentado, no de forma improvisada por cada funcionario.",
    risk: "Procedimientos inconsistentes dificultan sustentar que el documento refleja fielmente lo ocurrido.",
    control: "Documentar y aplicar de forma consistente los procedimientos de producción y gestión documental.",
  },
  {
    id: "disponibilidad",
    label: "Disponibilidad",
    icon: "Radar",
    definition: "Que el documento pueda recuperarse y consultarse cuando se necesite, dentro de los plazos y condiciones esperados.",
    importance: "Un documento preservado pero inaccesible, en la práctica, no cumple su propósito institucional.",
    example: "El repositorio garantiza tiempos de recuperación conocidos y mantiene redundancia frente a fallas de un único punto.",
    risk: "Una falla de infraestructura sin redundancia puede dejar la información temporal o permanentemente inaccesible.",
    control: "Implementar redundancia, monitoreo de disponibilidad y procedimientos de recuperación ante fallas.",
  },
  {
    id: "trazabilidad",
    label: "Trazabilidad",
    icon: "History",
    definition: "La capacidad de reconstruir, mediante registros, qué acciones se han realizado sobre un objeto digital, cuándo y por quién.",
    importance: "Sin trazabilidad no es posible investigar un incidente (p. ej., una alteración) ni sustentar que el documento fue gestionado correctamente.",
    example: "El repositorio mantiene un registro de eventos (ingreso, verificaciones, accesos) para cada objeto conservado.",
    risk: "Sin registro de eventos, una alteración detectada no puede investigarse: no hay evidencia de qué ocurrió ni quién intervino.",
    control: "Registrar todo evento relevante sobre cada objeto, con su fecha, resultado y agente responsable.",
  },
  {
    id: "seguridad",
    label: "Seguridad",
    icon: "Lock",
    definition: "Las medidas técnicas y organizacionales que protegen al repositorio y su contenido frente a accesos, modificaciones o pérdidas no autorizadas.",
    importance: "La seguridad sostiene, en la práctica, la integridad, la autenticidad y la confidencialidad del contenido conservado.",
    example: "El repositorio aplica control de acceso por roles y registra cada operación realizada sobre los documentos.",
    risk: "Sin controles de acceso adecuados, cualquier persona con acceso al sistema podría modificar o eliminar documentos sin dejar evidencia.",
    control: "Implementar autenticación, autorización por roles y registro de operaciones (auditoría de accesos).",
  },
  {
    id: "confidencialidad",
    label: "Confidencialidad",
    icon: "EyeOff",
    definition: "Que la información reservada o restringida solo sea accesible para quienes están autorizados a consultarla.",
    importance: "Entregar información restringida indebidamente puede vulnerar derechos y generar responsabilidad institucional.",
    example: "El repositorio aplica restricciones de acceso específicas a los expedientes que contienen información reservada.",
    risk: "Una configuración de acceso deficiente puede exponer información confidencial a personas no autorizadas.",
    control: "Definir y aplicar restricciones de acceso basadas en la clasificación de la información.",
  },
  {
    id: "acceso",
    label: "Acceso",
    icon: "FileSearch",
    definition: "La capacidad del repositorio de entregar, a quien corresponde y bajo las condiciones autorizadas, la información que solicita.",
    importance: "Un repositorio que preserva pero no permite el acceso adecuado no cumple su finalidad institucional.",
    example: "Un usuario autorizado solicita un expediente y el repositorio lo entrega respetando las restricciones vigentes.",
    risk: "Procedimientos de acceso poco claros generan demoras, errores o entregas indebidas.",
    control: "Definir procedimientos claros de solicitud, verificación de autorización y entrega de información.",
  },
  {
    id: "sostenibilidad",
    label: "Sostenibilidad",
    icon: "Landmark",
    definition: "La capacidad de la institución de mantener el repositorio en funcionamiento a largo plazo, con los recursos financieros, humanos y tecnológicos necesarios.",
    importance: "Un repositorio bien diseñado pero sin sostenibilidad institucional deja de operar cuando cambian las prioridades o el presupuesto.",
    example: "La institución planifica recursos y personal para el repositorio más allá del periodo de un solo proyecto o gestión.",
    risk: "La dependencia de un proyecto temporal o una sola persona pone en riesgo la continuidad de la preservación.",
    control: "Planificar la sostenibilidad financiera, organizacional y tecnológica del repositorio a largo plazo.",
  },
  {
    id: "responsabilidad",
    label: "Responsabilidad institucional",
    icon: "ClipboardList",
    definition: "La asignación clara de responsables institucionales por la gestión, la preservación y la seguridad del repositorio.",
    importance: "Sin responsables asignados, las demás características (integridad, seguridad, sostenibilidad) carecen de quién las sostenga en la práctica.",
    example: "La institución designa formalmente a un área y a responsables específicos para la gestión del repositorio.",
    risk: "Sin responsables formalmente asignados, ninguna de las demás características puede sostenerse de forma consistente.",
    control: "Formalizar, mediante norma o documento institucional, las responsabilidades sobre el repositorio.",
  },
];

export const hashChangeExample = {
  scenario: "Un expediente fue recibido por el repositorio, pero seis meses después se detecta que uno de sus documentos tiene un SHA-256 diferente al registrado inicialmente.",
  question: "¿Qué característica se encuentra comprometida?",
  correctCharacteristicId: "integridad",
  distractorCharacteristicIds: ["confidencialidad", "sostenibilidad"],
  explanation:
    "El hash diferente compromete directamente la integridad (el documento ya no coincide con la referencia registrada). Esto no significa automáticamente que la autenticidad y la trazabilidad también estén comprometidas: dependerá de si existe un registro de eventos que explique el cambio (p. ej., una migración documentada) o si, por el contrario, no hay ningún evento que lo justifique — en ese segundo caso, la falta de trazabilidad impediría investigar qué ocurrió, y eso sí pondría en duda la autenticidad.",
};

// ---------------------------------------------------------------------------
// Módulo 3 — ISO 16363:2025: auditoría y certificación
// ---------------------------------------------------------------------------

export const iso16363Definition =
  "ISO 16363:2025 es la norma internacional que establece los criterios para evaluar la confiabilidad de un repositorio digital, organizados en ámbitos de infraestructura organizacional, gestión de objetos digitales y gestión de infraestructura y seguridad tecnológica. El sílabo del curso señala esta norma por su denominación y propósito; verifica siempre en el catálogo oficial de ISO la edición vigente y el detalle de sus criterios antes de citarlos en un documento formal — este módulo no inventa numerales ni requisitos normativos específicos.";

export const iso16363Purpose =
  "La norma permite evaluar si un repositorio cumple condiciones organizacionales, de gestión de objetos digitales y de infraestructura que sustentan su confiabilidad — no certifica, por sí sola, que la tecnología empleada sea la adecuada: una institución con servidores modernos puede, igualmente, carecer de las políticas, los procedimientos o las responsabilidades que la norma evalúa.";

export const auditDefinition =
  "Una auditoría es un proceso formal de evaluación que examina evidencias concretas (políticas documentadas, registros de eventos, procedimientos aplicados) para determinar si un repositorio cumple los criterios evaluados — no se basa en lo que la institución declara, sino en lo que puede demostrar.";

export const certificationDefinition =
  "Una certificación es el reconocimiento formal, emitido por una entidad competente, de que un repositorio cumplió satisfactoriamente una auditoría conforme a la norma. No debe confundirse con una autoevaluación académica ni con el cumplimiento de un ejercicio didáctico: completar las actividades de este módulo no certifica, ni acredita formalmente, ningún repositorio real.";

export const auditEvidenceExamples = [
  "Políticas de preservación formalmente aprobadas",
  "Registros de eventos de preservación (ingreso, verificación, migración)",
  "Procedimientos documentados de gestión de riesgos",
  "Evidencia de verificación periódica de integridad",
  "Documentación de la infraestructura tecnológica y de seguridad",
];

export const auditScopes: AuditScope[] = [
  {
    id: "organizacional",
    letter: "A",
    label: "Infraestructura organizacional",
    items: ["Gobernanza", "Políticas institucionales", "Responsabilidades", "Recursos humanos", "Recursos financieros", "Planificación", "Sostenibilidad", "Gestión de riesgos"],
    description: "Evalúa si la institución cuenta con gobernanza, políticas, responsables formalmente asignados y planificación de recursos que sostengan el repositorio a largo plazo — condiciones organizacionales, no solo tecnológicas.",
  },
  {
    id: "objetos-digitales",
    letter: "B",
    label: "Gestión de objetos digitales",
    items: ["Recepción de documentos", "Transferencia", "Identificación", "Integridad", "Metadatos", "Gestión de paquetes", "Preservación", "Acceso y recuperación"],
    description: "Evalúa cómo el repositorio recibe, identifica, describe, conserva y entrega los objetos digitales, incluyendo la verificación de su integridad a lo largo del tiempo.",
  },
  {
    id: "infraestructura-seguridad",
    letter: "C",
    label: "Gestión de infraestructura y seguridad",
    items: ["Infraestructura tecnológica", "Almacenamiento", "Redundancia", "Seguridad", "Control de acceso", "Copias de seguridad", "Continuidad operativa", "Recuperación ante desastres"],
    description: "Evalúa la infraestructura tecnológica propiamente dicha: almacenamiento, redundancia, seguridad, control de acceso y capacidad de continuar operando o recuperarse ante incidentes.",
  },
];

// ---------------------------------------------------------------------------
// Módulo 4 — Arquitectura y almacenamiento
// ---------------------------------------------------------------------------

export const architectureIntro =
  "La arquitectura de un repositorio de preservación organiza, en una secuencia de componentes, el recorrido de un objeto digital desde su producción en el SGD hasta su conservación y entrega. Esta representación es conceptual: una implementación real puede añadir pasos, validaciones o controles adicionales según su diseño institucional.";

export const architectureComponents: ArchitectureComponent[] = [
  { id: "sgd", order: 1, label: "Sistema de Gestión Documental (SGD)", icon: "FileStack", does: "Gestiona el documento durante su trámite activo y su ciclo de vida institucional.", receives: "El documento o expediente generado o recibido por la institución.", produces: "Un documento o expediente listo para su valoración y, eventualmente, su transferencia.", risksControlled: "Que el documento se gestione conforme a los procedimientos institucionales durante su trámite." },
  { id: "area-transferencia", order: 2, label: "Área de transferencia", icon: "ArrowRightLeft", does: "Prepara y formaliza el envío de los documentos seleccionados hacia el repositorio.", receives: "Documentos del SGD seleccionados para su conservación a largo plazo.", produces: "Un conjunto de documentos y metadatos disponibles, organizado para su envío.", risksControlled: "Que la transferencia se realice bajo condiciones y acuerdos formalmente establecidos." },
  { id: "recepcion-validacion", order: 3, label: "Recepción y validación", icon: "ClipboardList", does: "Recibe el envío y valida que esté completo y sea comprensible antes de aceptarlo.", receives: "El conjunto de documentos y metadatos enviado para su transferencia.", produces: "Una confirmación de recepción, o la identificación de observaciones a resolver.", risksControlled: "Que se acepten documentos incompletos o sin la información mínima necesaria." },
  { id: "identificacion-formatos", order: 4, label: "Identificación de formatos", icon: "SearchCheck", does: "Determina el formato real de cada archivo, más allá de su extensión.", receives: "Los archivos validados en la recepción.", produces: "Un registro del formato técnico identificado de cada archivo.", risksControlled: "Que se conserve un archivo sin saber, con certeza, qué formato tiene realmente." },
  { id: "gestion-metadatos", order: 5, label: "Gestión de metadatos", icon: "Tags", does: "Completa y organiza los metadatos descriptivos, técnicos y de preservación de cada objeto.", receives: "Los metadatos disponibles desde la transferencia y la identificación de formatos.", produces: "Un conjunto de metadatos completo y organizado, asociado a cada objeto.", risksControlled: "Que el objeto se conserve sin la información necesaria para interpretarlo o localizarlo." },
  { id: "generacion-paquetes", order: 6, label: "Generación de paquetes de preservación", icon: "FolderKanban", does: "Construye el paquete de preservación (conceptualmente, un AIP) con el contenido y su información de preservación asociada.", receives: "El contenido validado y sus metadatos completos.", produces: "Un paquete de preservación listo para su almacenamiento.", risksControlled: "Que se conserve el contenido sin la información de preservación que lo acompaña." },
  { id: "almacenamiento", order: 7, label: "Almacenamiento", icon: "Database", does: "Conserva físicamente los paquetes de preservación, con redundancia según la estrategia adoptada.", receives: "Los paquetes de preservación generados.", produces: "Paquetes conservados y disponibles para su verificación y recuperación.", risksControlled: "La pérdida de información por falla de un único punto de almacenamiento." },
  { id: "control-integridad", order: 8, label: "Control de integridad", icon: "Fingerprint", does: "Verifica periódicamente que los paquetes conservados coincidan con su referencia de integridad.", receives: "Los paquetes almacenados y sus valores de referencia (p. ej., hash).", produces: "Registros de verificación, con su resultado documentado.", risksControlled: "Una alteración no detectada durante la conservación a largo plazo." },
  { id: "gestion-acceso", order: 9, label: "Gestión de acceso", icon: "Lock", does: "Aplica autenticación, autorización y restricciones de acceso a las solicitudes de consulta.", receives: "Solicitudes de acceso de usuarios autorizados.", produces: "Decisiones de autorización y, cuando corresponde, el contenido a entregar.", risksControlled: "La entrega indebida de información reservada o restringida." },
  { id: "recuperacion-consulta", order: 10, label: "Recuperación y consulta", icon: "FileSearch", does: "Localiza y entrega la información solicitada, en una forma adecuada para su consulta.", receives: "Una solicitud autorizada y la información descriptiva necesaria para localizar el objeto.", produces: "El contenido entregado al solicitante, respetando las restricciones aplicables.", risksControlled: "Que la información conservada resulte, en la práctica, inaccesible para quien la necesita legítimamente." },
];

export const storageStrategies: StorageStrategy[] = [
  { id: "redundancia", label: "Redundancia", description: "Mantener más de una copia de la información, de modo que la falla de un único componente no implique pérdida de datos." },
  { id: "replicacion", label: "Replicación", description: "Mantener copias sincronizadas en más de un sistema o ubicación, actualizadas junto con el original." },
  { id: "copias-seguridad", label: "Copias de seguridad", description: "Copias periódicas que permiten recuperar información ante una pérdida o un error, no necesariamente sincronizadas en tiempo real." },
  { id: "regla-321", label: "Regla 3-2-1", description: "Mantener al menos 3 copias de la información, en 2 tipos de soporte distintos, con al menos 1 copia en una ubicación externa." },
  { id: "local-externo", label: "Almacenamiento local y externo", description: "Combinar almacenamiento en la sede institucional con almacenamiento en una ubicación geográficamente distinta." },
  { id: "verificacion-integridad", label: "Verificación de integridad", description: "Comprobar periódicamente que las copias almacenadas coincidan con su referencia de integridad registrada." },
  { id: "recuperacion-desastres", label: "Recuperación ante desastres", description: "Procedimientos documentados para restaurar la operación y la información tras un incidente grave (incendio, inundación, falla mayor)." },
];

export const sameBuildingRiskExample = {
  scenario: "Una institución conserva una copia de sus expedientes en el servidor principal y otra copia en el mismo edificio.",
  question: "¿Qué sucedería si ocurre un incendio o una inundación?",
  explanation:
    "Si ambas copias están en el mismo edificio, un incidente físico (incendio, inundación, falla eléctrica mayor) podría afectar a las dos simultáneamente, dejando a la institución sin ninguna copia recuperable. Por eso la regla 3-2-1 exige que al menos una copia se mantenga en una ubicación geográficamente independiente, junto con procedimientos de recuperación ante desastres documentados y probados.",
};

// ---------------------------------------------------------------------------
// Módulo 5 — Acceso, seguridad y sostenibilidad
// ---------------------------------------------------------------------------

export const securityScenarios: SecurityScenario[] = [
  {
    id: "modificacion-sin-evidencia",
    scenario: "Un usuario modifica un documento sin dejar evidencia.",
    riskOptions: [
      { id: "integridad-trazabilidad", label: "Riesgo de integridad y de trazabilidad: no hay registro que permita detectar o investigar el cambio" },
      { id: "sostenibilidad", label: "Riesgo de sostenibilidad financiera" },
      { id: "confidencialidad", label: "Riesgo de confidencialidad" },
    ],
    correctRiskId: "integridad-trazabilidad",
    controlOptions: [
      { id: "registro-operaciones", label: "Registrar toda operación de modificación, con usuario, fecha y resultado (auditoría de accesos)" },
      { id: "copia-seguridad-semanal", label: "Realizar una copia de seguridad semanal" },
      { id: "capacitacion-anual", label: "Capacitar al personal una vez al año" },
    ],
    correctControlId: "registro-operaciones",
    feedback: "Sin registro de operaciones, una modificación no autorizada puede pasar desapercibida indefinidamente. El control de acceso con registro de auditoría permite detectar e investigar cambios, sosteniendo la integridad y la trazabilidad.",
  },
  {
    id: "obsolescencia-formato",
    scenario: "Un documento ya no puede abrirse debido a la obsolescencia del formato.",
    riskOptions: [
      { id: "obsolescencia", label: "Riesgo de obsolescencia tecnológica: el formato deja de ser soportado por el software disponible" },
      { id: "confidencialidad", label: "Riesgo de confidencialidad" },
      { id: "autenticidad", label: "Riesgo de autenticidad del productor" },
    ],
    correctRiskId: "obsolescencia",
    controlOptions: [
      { id: "monitoreo-formatos", label: "Monitorear la obsolescencia de formatos y planificar una normalización o migración evaluada (Semana 11 y 13)" },
      { id: "eliminar-documento", label: "Eliminar el documento, ya que no puede abrirse" },
      { id: "ignorar-el-problema", label: "No tomar ninguna acción, ya que el contenido sigue almacenado" },
    ],
    correctControlId: "monitoreo-formatos",
    feedback: "La obsolescencia de formatos es, precisamente, el riesgo que la Planificación de la Preservación (Semana 12) y las estrategias de migración o normalización (Semanas 11 y 13) buscan anticipar y controlar, nunca resolver eliminando el documento.",
  },
  {
    id: "falla-servidor",
    scenario: "El servidor principal deja de funcionar.",
    riskOptions: [
      { id: "disponibilidad", label: "Riesgo de disponibilidad: la información conservada queda temporalmente inaccesible" },
      { id: "confidencialidad", label: "Riesgo de confidencialidad" },
      { id: "autenticidad", label: "Riesgo de autenticidad" },
    ],
    correctRiskId: "disponibilidad",
    controlOptions: [
      { id: "redundancia-recuperacion", label: "Contar con redundancia y un procedimiento documentado de recuperación ante desastres" },
      { id: "esperar-reparacion", label: "Esperar a que el proveedor repare el servidor, sin ningún plan adicional" },
      { id: "eliminar-copias-antiguas", label: "Eliminar copias antiguas para liberar espacio en el servidor" },
    ],
    correctControlId: "redundancia-recuperacion",
    feedback: "Sin redundancia ni un plan de recuperación documentado, la falla de un único servidor puede dejar la información inaccesible durante un periodo prolongado — o, en el peor caso, de forma permanente.",
  },
  {
    id: "perdida-sin-redundancia",
    scenario: "Se pierde información por falta de redundancia.",
    riskOptions: [
      { id: "disponibilidad-perdida", label: "Riesgo de pérdida permanente de información, por depender de una única copia" },
      { id: "confidencialidad", label: "Riesgo de confidencialidad" },
      { id: "fiabilidad", label: "Riesgo de fiabilidad del procedimiento de producción" },
    ],
    correctRiskId: "disponibilidad-perdida",
    controlOptions: [
      { id: "regla-321-aplicar", label: "Aplicar una estrategia de redundancia como la regla 3-2-1, con copias en ubicaciones independientes" },
      { id: "confiar-proveedor", label: "Confiar en que el proveedor del servicio nunca perderá información" },
      { id: "reducir-volumen", label: "Reducir el volumen de documentos conservados para simplificar la gestión" },
    ],
    correctControlId: "regla-321-aplicar",
    feedback: "La falta de redundancia convierte cualquier incidente — humano, técnico o físico — en un riesgo de pérdida permanente. La regla 3-2-1 (Módulo 4) es, precisamente, el control diseñado para este riesgo.",
  },
  {
    id: "publicacion-indebida",
    scenario: "Un documento confidencial se publica sin autorización.",
    riskOptions: [
      { id: "confidencialidad-riesgo", label: "Riesgo de confidencialidad: información reservada entregada a quien no estaba autorizado" },
      { id: "obsolescencia-riesgo", label: "Riesgo de obsolescencia tecnológica" },
      { id: "disponibilidad-riesgo", label: "Riesgo de disponibilidad" },
    ],
    correctRiskId: "confidencialidad-riesgo",
    controlOptions: [
      { id: "restricciones-acceso", label: "Definir y aplicar restricciones de acceso según la clasificación de la información, antes de cualquier entrega" },
      { id: "publicar-todo", label: "Publicar toda la información para evitar la percepción de opacidad" },
      { id: "revisar-despues", label: "Revisar la clasificación únicamente después de recibir una queja" },
    ],
    correctControlId: "restricciones-acceso",
    feedback: "La confidencialidad se protege verificando las restricciones de acceso antes de cualquier entrega, no revisándolas después de que el daño ya ocurrió.",
  },
];

export const sustainabilityDimensions = [
  { id: "financiera", label: "Sostenibilidad financiera", description: "Recursos presupuestales planificados más allá de un proyecto o gestión institucional específica." },
  { id: "organizacional", label: "Sostenibilidad organizacional", description: "Responsables y procedimientos que no dependen de una sola persona ni de una sola gestión." },
  { id: "tecnologica", label: "Sostenibilidad tecnológica", description: "Planificación frente a la obsolescencia de la infraestructura, el software y los formatos utilizados." },
];

// ---------------------------------------------------------------------------
// Módulo 6 — Relación entre SGD y repositorio de preservación
// ---------------------------------------------------------------------------

export const sgdDefinitionModule6 =
  "El SGD gestiona los documentos y expedientes electrónicos durante los procesos institucionales y su ciclo de vida activo (Semanas 2-9).";

export const repositoryDefinitionModule6 =
  "El repositorio de preservación gestiona la conservación a largo plazo de los objetos digitales recibidos, junto con sus metadatos, su estructura y su información de preservación (Semanas 12 y 13).";

export const sgdRepositoryComplementarity =
  "El SGD y el repositorio de preservación no son sistemas que se sustituyen entre sí: cumplen funciones distintas y, en una institución que preserva correctamente, se complementan — el SGD gestiona el trámite activo, y el repositorio sostiene la conservación de lo que, conforme a la valoración documental, debe transferirse a largo plazo.";

export const sgdToRepositoryFlow: FlowStep[] = [
  { id: "sgd", label: "SGD", description: "Gestión del documento durante su trámite activo" },
  { id: "seleccion-preparacion", label: "Selección y preparación", description: "Valoración documental y preparación de lo que se transferirá" },
  { id: "transferencia", label: "Transferencia", description: "Envío formal hacia el repositorio" },
  { id: "recepcion-repositorio", label: "Recepción del repositorio", description: "El repositorio recibe el envío" },
  { id: "validacion", label: "Validación", description: "Se comprueba que el envío esté completo y sea comprensible" },
  { id: "identificacion-formatos-flow", label: "Identificación de formatos", description: "Se determina el formato real de cada archivo" },
  { id: "metadatos-preservacion", label: "Metadatos de preservación", description: "Se completa la información de preservación necesaria" },
  { id: "generacion-aip", label: "Generación del AIP", description: "Se construye el paquete de preservación" },
  { id: "almacenamiento-control", label: "Almacenamiento y control", description: "Se conserva el paquete, con verificación periódica de integridad" },
  { id: "acceso-difusion", label: "Acceso y difusión", description: "Se atienden las solicitudes de acceso autorizadas" },
];

export const transferCriteria: TransferCriterion[] = [
  { id: "identificacion-expediente", label: "Identificación del expediente" },
  { id: "identificacion-documentos", label: "Identificación de los documentos" },
  { id: "organizacion-orden", label: "Organización y orden documental", relatedStandard: "METS" },
  { id: "metadatos-descriptivos", label: "Metadatos descriptivos", relatedStandard: "Dublin Core" },
  { id: "metadatos-administrativos", label: "Metadatos administrativos" },
  { id: "metadatos-tecnicos", label: "Metadatos técnicos" },
  { id: "metadatos-preservacion", label: "Metadatos de preservación", relatedStandard: "PREMIS" },
  { id: "verificacion-integridad", label: "Verificación de integridad", relatedStandard: "SHA-256 / BagIt" },
  { id: "control-formatos", label: "Control de formatos" },
  { id: "restricciones-acceso", label: "Restricciones de acceso" },
  { id: "evidencia-transferencia", label: "Evidencia de transferencia", relatedStandard: "BagIt" },
  { id: "confirmacion-recepcion", label: "Confirmación de recepción" },
];

export const week13ApplicationNote =
  "Esta transferencia aplica, de forma concreta, lo ya revisado en la Semana 13: Dublin Core puede describir el expediente; METS puede representar la organización y el orden documental; PREMIS puede registrar los eventos de preservación aplicados desde el ingreso; BagIt puede empaquetar y verificar la transferencia mediante sumas de verificación (p. ej., SHA-256); y la identificación y validación de formatos sigue siendo necesaria antes de aceptar cualquier archivo. No se repite aquí el detalle de cada estándar — se aplica a un caso de transferencia real.";

// ---------------------------------------------------------------------------
// Referencias
// ---------------------------------------------------------------------------

export const referencesIntro =
  "El sílabo del curso señala estas normas y fuentes por su denominación. Verifica siempre en las fuentes oficiales la edición y los criterios vigentes antes de citarlos en un documento formal: las normas se revisan periódicamente y este módulo no sustituye la consulta directa de la fuente ni inventa numerales o requisitos normativos específicos.";

export const referenceItems: ReferenceItem[] = [
  { id: "iso16363", label: "ISO — Catálogo oficial (buscar \"ISO 16363\")", url: "https://www.iso.org/standard/search", note: "Consulta el catálogo oficial de ISO para confirmar la edición y el estado vigentes de la norma antes de citarla formalmente." },
  { id: "iso14721", label: "ISO — Catálogo oficial (buscar \"ISO 14721\")", url: "https://www.iso.org/standard/search", note: "Modelo OAIS (Semana 12), base conceptual de la arquitectura y las funciones de preservación revisadas esta semana." },
  { id: "dpc", label: "Digital Preservation Coalition — Repository Planning and Development", url: "https://www.dpconline.org/handbook/institutional-strategies/repository-planning", note: "Orientación introductoria, en inglés, sobre planificación de repositorios de preservación." },
  { id: "premis", label: "PREMIS Editorial Committee — PREMIS Data Dictionary", url: "https://www.loc.gov/standards/premis/", note: "Estándar de metadatos de preservación (Semana 13), aplicado en la transferencia desde el SGD." },
  { id: "bagit", label: "IETF RFC 8493 — The BagIt File Packaging Format", url: "https://www.rfc-editor.org/rfc/rfc8493", note: "Especificación de BagIt (Semana 13), aplicable al empaquetado verificable de la transferencia." },
  { id: "agn", label: "Archivo General de la Nación del Perú", url: "https://www.gob.pe/agn", note: "Entidad rectora del Sistema Nacional de Archivos en el Perú; consulta sus normas vigentes sobre gestión documental y archivos electrónicos." },
];

// ---------------------------------------------------------------------------
// Conexiones
// ---------------------------------------------------------------------------

export const connectionPrevious: WeekConnectionStep[] = [
  { id: "estandares", label: "Semana 13: Estándares de preservación" },
  { id: "premis-mets-dc-bagit", label: "PREMIS, METS, Dublin Core, BagIt" },
  { id: "repositorios", label: "Semana 14: Repositorios confiables" },
  { id: "iso16363-conn", label: "ISO 16363:2025" },
];

export const connectionPreviousClosing =
  "La Semana 13 dio forma técnica concreta a la información de preservación (metadatos, empaquetado verificable); esta semana evalúa, con ISO 16363:2025, si el entorno que sostiene esa información —el repositorio— es organizacional y tecnológicamente confiable para hacerlo de forma sostenida.";

export const connectionNext: WeekConnectionStep[] = [
  { id: "repositorios-conn", label: "Repositorios digitales confiables" },
  { id: "archivematica", label: "Archivematica" },
  { id: "transfer-aip-dip", label: "Transfer → SIP → AIP → DIP" },
];

export const connectionNextClosing =
  "La Semana 15 estudia Archivematica, una implementación concreta de software que aplica, en la práctica, varios de los conceptos revisados esta semana (identificación de formatos, generación de paquetes de preservación, flujo Transfer-Ingest-AIP-DIP) dentro de un repositorio digital.";

export const projectConnectionItems = [
  "Características de confiabilidad aplicables al repositorio propuesto en el proyecto",
  "Ámbitos de ISO 16363 pertinentes para evaluar el caso del proyecto",
  "Criterios de transferencia desde el SGD del caso hacia un repositorio de preservación",
];

// ---------------------------------------------------------------------------
// Resumen
// ---------------------------------------------------------------------------

export const summaryPoints: SummaryPoint[] = [
  { id: "repositorio-confiable", label: "Repositorio confiable", icon: "Archive" },
  { id: "integridad", label: "Integridad", icon: "Fingerprint" },
  { id: "trazabilidad", label: "Trazabilidad", icon: "History" },
  { id: "iso16363-sum", label: "ISO 16363", icon: "ClipboardList" },
  { id: "auditoria-sum", label: "Auditoría", icon: "SearchCheck" },
  { id: "certificacion-sum", label: "Certificación", icon: "Stamp" },
  { id: "seguridad-sum", label: "Seguridad", icon: "Lock" },
  { id: "sostenibilidad-sum", label: "Sostenibilidad", icon: "Landmark" },
];

export const closingMessages = [
  "Tener servidores modernos y copias de seguridad no equivale, por sí solo, a tener un repositorio digital confiable.",
  "La confiabilidad se evalúa con evidencias frente a criterios explícitos (ISO 16363), no se declara.",
];

export const summaryChecklist = [
  "Puedo diferenciar almacenamiento digital, copia de seguridad, repositorio y repositorio confiable.",
  "Puedo explicar las diez características de confiabilidad y su riesgo si no se cumplen.",
  "Puedo explicar qué evalúa ISO 16363:2025 en sus tres ámbitos.",
  "Puedo diferenciar autoevaluación, auditoría formal y certificación.",
  "Puedo describir la arquitectura y las estrategias de almacenamiento de un repositorio.",
  "Puedo identificar riesgos de acceso, seguridad y sostenibilidad y sus controles.",
  "Puedo explicar la relación entre el SGD y el repositorio, y los criterios de transferencia.",
];

export const practiceReminder =
  "Para la evaluación final, recuerda: ninguna tecnología por sí sola garantiza confiabilidad; las características de confiabilidad son distintas entre sí (integridad no es autenticidad, ni trazabilidad); ISO 16363 evalúa tres ámbitos complementarios; y una autoevaluación académica nunca equivale a una certificación formal.";

export const nextWeekConnection = {
  nextWeekNumber: 15,
  nextTitle: "Archivematica",
  text: "Propósito, arquitectura y flujo de trabajo (Transfer → SIP → AIP → DIP) de una implementación concreta de software que aplica varios de los conceptos revisados esta semana.",
};
