import type { FlowStep } from "../../../types/content.types";
import type { DecisionStep, ObjectiveCard, RequirementInfo, SummaryPoint } from "./week05.types";

export const heroChain: { id: string; label: string; icon: string }[] = [
  { id: "documento", label: "Documento", icon: "FileText" },
  { id: "autenticidad", label: "Auténtico", icon: "ShieldCheck" },
  { id: "fiable", label: "Fiable", icon: "Scale" },
  { id: "integro", label: "Íntegro", icon: "KeyRound" },
  { id: "disponible", label: "Disponible", icon: "FolderOpen" },
];

export const objectives: ObjectiveCard[] = [
  {
    id: "problema",
    title: "Comprender qué problema resuelve ISO 15489-1:2016",
    description: "Explicar por qué una organización necesita principios comunes para gestionar sus documentos como evidencia confiable.",
    icon: "Workflow",
  },
  {
    id: "requisitos",
    title: "Diferenciar los cuatro requisitos de un documento de archivo",
    description: "Distinguir autenticidad, fiabilidad, integridad y disponibilidad, y por qué ninguno sustituye a los otros.",
    icon: "GitCompareArrows",
  },
  {
    id: "procesos",
    title: "Relacionar captura, registro y mantenimiento con esos requisitos",
    description: "Analizar cómo cada proceso documental contribuye a que un documento conserve su valor como evidencia.",
    icon: "Inbox",
  },
  {
    id: "criterio",
    title: "Aplicar criterio profesional ante escenarios documentales",
    description: "Tomar decisiones fundamentadas cuando un documento presenta dudas de autenticidad, fiabilidad, integridad o acceso.",
    icon: "ClipboardList",
  },
];

export const problemIntro =
  "Antes de ISO 15489-1, cada institución podía definir a su manera qué significa \"gestionar documentos correctamente\". Sin principios comunes, resulta difícil sostener que un documento es evidencia confiable de una actuación, comparar prácticas entre instituciones, o defender un documento ante una auditoría, un reclamo o un proceso legal.";

export const problemFlow: FlowStep[] = [
  { id: "practicas", label: "Prácticas dispersas" },
  { id: "dudas", label: "Dudas sobre la evidencia" },
  { id: "principios", label: "Principios comunes (ISO 15489)" },
  { id: "confianza", label: "Documentos como evidencia confiable" },
];

export const recordsManagementDefinition =
  "ISO 15489-1:2016 define la gestión de documentos como el conjunto de principios y procesos mediante los cuales una organización crea, captura y controla sus documentos, de modo que puedan servir como evidencia de sus actividades y decisiones durante el tiempo que corresponda.";

export const recordsManagementLink: FlowStep[] = [
  { id: "procesos", label: "Procesos (Semana 3)" },
  { id: "metadatos", label: "Metadatos (Semana 4)" },
  { id: "requisitos", label: "Requisitos ISO 15489" },
  { id: "evidencia", label: "Documento como evidencia" },
];

export const requirements: RequirementInfo[] = [
  {
    id: "autenticidad",
    label: "Autenticidad",
    icon: "ShieldCheck",
    question: "¿Es lo que dice ser?",
    definition: "Un documento es auténtico cuando puede demostrarse que es lo que afirma ser, que fue creado o enviado por quien dice haberlo hecho, y en el momento que se afirma.",
    purpose: "Sostiene que el documento puede atribuirse con confianza a su productor y a su contexto de creación.",
    example: "Un oficio firmado digitalmente permite verificar quién lo suscribió y que no ha sido sustituido por otro.",
    risk: "Sin autenticidad, cualquiera podría cuestionar si el documento realmente proviene de quien se afirma.",
  },
  {
    id: "fiabilidad",
    label: "Fiabilidad",
    icon: "Scale",
    question: "¿Podemos confiar en su contenido?",
    definition: "Un documento es fiable cuando su contenido puede considerarse una representación completa y exacta de la actuación que describe, y fue generado en el momento de esa actuación o inmediatamente después.",
    purpose: "Permite tratar el contenido del documento como un relato digno de confianza de lo que efectivamente ocurrió.",
    example: "Un informe elaborado por quien participó directamente en una inspección, redactado el mismo día.",
    risk: "Un documento producido mucho después, por alguien sin conocimiento directo, es más difícil de considerar fiable.",
  },
  {
    id: "integridad",
    label: "Integridad",
    icon: "KeyRound",
    question: "¿Sigue completo y sin alteraciones?",
    definition: "Un documento íntegro es aquel que está completo y no ha sido alterado de manera no autorizada desde el momento en que se produjo.",
    purpose: "Garantiza que lo que se consulta hoy corresponde a lo que efectivamente se generó, sin modificaciones ocultas.",
    example: "Un hash o firma digital permite detectar si un archivo fue modificado después de firmarse.",
    risk: "Sin controles de integridad, un documento podría alterarse sin que nadie lo note.",
  },
  {
    id: "disponibilidad",
    label: "Disponibilidad",
    icon: "FolderOpen",
    question: "¿Podemos localizarlo, recuperarlo y comprenderlo?",
    definition: "Un documento disponible es aquel que puede ser localizado, recuperado, presentado e interpretado, conservando su relación con la actividad que lo originó.",
    purpose: "Sin disponibilidad, un documento auténtico, fiable e íntegro igualmente pierde su utilidad como evidencia.",
    example: "Un expediente correctamente descrito y clasificado, que puede recuperarse aunque hayan pasado varios años.",
    risk: "Un documento perdido, mal descrito o dependiente de un formato obsoleto deja de estar disponible en la práctica.",
  },
];

export const captureFlow: FlowStep[] = [
  { id: "actividad", label: "Actividad institucional" },
  { id: "documento", label: "Documento generado" },
  { id: "captura", label: "Captura" },
  { id: "sistema", label: "Incorporado al sistema" },
];

export const captureElements = ["Identificación", "Fecha", "Vínculo con la actividad", "Metadatos mínimos"];

export const registrationElements = ["Identificador único", "Fecha y hora de registro", "Asiento no modificable", "Relación con el expediente"];

export const maintenanceIdeas = [
  "Conservar el vínculo entre el documento y su contexto de creación.",
  "Actualizar metadatos de gestión conforme el documento avanza en el trámite.",
  "Aplicar controles de acceso y seguridad durante toda la vigencia del documento.",
  "Anticipar los cambios de formato o soporte que podrían amenazar su accesibilidad futura.",
];

export const documentFlow: FlowStep[] = [
  { id: "captura", label: "Captura" },
  { id: "registro", label: "Registro" },
  { id: "mantenimiento", label: "Mantenimiento" },
  { id: "uso", label: "Uso / consulta" },
  { id: "disposicion", label: "Disposición" },
];

export const practicalCase = {
  scenario:
    "Un documento fue creado hace dos años. Tiene firma digital vigente, pero no fue registrado en el SGD sino hasta seis meses después de su creación, y desde entonces nadie ha podido explicar quién lo redactó originalmente.",
  question: "¿Qué requisito parece estar más comprometido?",
  options: [
    { id: "a", label: "Disponibilidad, porque el archivo no se puede abrir." },
    { id: "b", label: "Fiabilidad, porque no está claro quién lo generó ni cuándo, en relación con la actuación que describe." },
    { id: "c", label: "Integridad, porque el archivo fue editado varias veces." },
    { id: "d", label: "Ninguno; la firma digital es suficiente." },
  ],
  correctId: "b",
  feedback:
    "La firma digital aporta autenticidad e integridad técnica, pero no resuelve por sí sola la fiabilidad: si no puede establecerse con claridad quién lo produjo y en qué momento respecto de la actuación, el documento pierde fuerza como relato confiable de lo ocurrido.",
};

export const decisionSteps: DecisionStep[] = [
  {
    id: "paso1",
    scenario: "Un ciudadano presenta un reclamo y adjunta una captura de pantalla de un correo como prueba de haber sido notificado.",
    prompt: "¿Qué deberías analizar primero?",
    options: [
      { id: "a", label: "Si la captura de pantalla se ve clara." },
      { id: "b", label: "Si puede verificarse el origen, la fecha y el contenido íntegro del correo, más allá de la captura." },
      { id: "c", label: "El tamaño del archivo adjunto." },
    ],
    bestId: "b",
    feedback: "Una captura de pantalla es fácilmente editable; conviene verificar el mensaje original y su contexto antes de tratarlo como prueba confiable.",
  },
  {
    id: "paso2",
    scenario: "Al revisar el correo original en el sistema institucional, la fecha de envío coincide con la que alega el ciudadano.",
    prompt: "¿Qué asegura esto?",
    options: [
      { id: "a", label: "Que el documento es automáticamente íntegro y fiable." },
      { id: "b", label: "Un dato de contexto más, pero conviene seguir verificando destinatario, contenido y trazabilidad." },
    ],
    bestId: "b",
    feedback: "La coincidencia de fecha ayuda, pero la evaluación de autenticidad y fiabilidad no depende de un solo dato aislado.",
  },
  {
    id: "paso3",
    scenario: "El sistema institucional conserva metadatos del envío (remitente, destinatario, fecha, identificador) sin alteraciones registradas.",
    prompt: "Con esta información, ¿qué puede afirmarse con mayor solidez?",
    options: [
      { id: "a", label: "Que el documento cuenta con mejores condiciones de autenticidad, fiabilidad e integridad que la sola captura de pantalla." },
      { id: "b", label: "Que ya no hace falta ningún otro análisis." },
    ],
    bestId: "a",
    feedback: "Los metadatos conservados por el sistema —no la captura de pantalla— son los que realmente sostienen la autenticidad, fiabilidad e integridad del documento como evidencia.",
  },
];

export const decisionClosing =
  "Este caso ilustra por qué los cuatro requisitos se analizan en conjunto: la apariencia de un documento (una captura de pantalla) no basta; lo que sostiene su valor como evidencia es su origen verificable, su contenido confiable, su integridad técnica y su disponibilidad dentro de un sistema controlado.";

export const summaryPoints: SummaryPoint[] = [
  { id: "s1", title: "01", description: "ISO 15489-1 ofrece principios comunes para que un documento sirva como evidencia confiable.", icon: "Workflow" },
  { id: "s2", title: "02", description: "Autenticidad, fiabilidad, integridad y disponibilidad se analizan juntas, no por separado.", icon: "GitCompareArrows" },
  { id: "s3", title: "03", description: "La firma digital aporta autenticidad e integridad, pero no garantiza por sí sola la fiabilidad.", icon: "ShieldCheck" },
  { id: "s4", title: "04", description: "Captura, registro y mantenimiento son los procesos que sostienen estos cuatro requisitos en el tiempo.", icon: "Inbox" },
  { id: "s5", title: "05", description: "Un documento perfecto en apariencia puede perder valor como evidencia si pierde disponibilidad o contexto.", icon: "FolderOpen" },
];

export const nextWeekConnection = {
  currentTitle: "ISO 15489-1:2016",
  nextWeekNumber: 6,
  nextTitle: "Identidad digital y firma",
  nextConcepts: ["Certificados", "Firma electrónica", "Firma digital", "Sellado de tiempo"],
  text: "Ya sabemos qué hace que un documento sea auténtico, fiable, íntegro y disponible. Ahora veremos qué mecanismos tecnológicos —certificados y firma digital— permiten sostener esas propiedades en un entorno electrónico.",
};
