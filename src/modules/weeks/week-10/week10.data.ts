import type { FlowStep } from "../../../types/content.types";
import type {
  DocumentState,
  FixityStage,
  HashVsChecksumProperty,
  HeroStep,
  IntegrityCause,
  LearningCapability,
  RiskCard,
  RiskControlPair,
  SanGabrielOption,
  SummaryPoint,
  WeekConnectionStep,
} from "./week10.types";

export const heroChain: HeroStep[] = [
  { id: "documento", label: "Documento electrónico", icon: "FileText" },
  { id: "huella", label: "Huella digital (hash)", icon: "Fingerprint" },
  { id: "verificar", label: "Verificar", icon: "SearchCheck" },
  { id: "coincide", label: "Coincide", icon: "ShieldCheck" },
];

export const weekTagline = "Del archivo a la evidencia de integridad";

export const weekProgression: FlowStep[] = [
  { id: "archivo", label: "Archivo" },
  { id: "huella", label: "Huella" },
  { id: "referencia", label: "Referencia" },
  { id: "verificacion", label: "Verificación" },
  { id: "resultado", label: "Resultado" },
];

export const learningCapabilities: LearningCapability[] = [
  { id: "c1", label: "Comprender integridad digital", icon: "ShieldCheck" },
  { id: "c2", label: "Diferenciar hash y checksum", icon: "GitCompareArrows" },
  { id: "c3", label: "Aplicar fixity", icon: "Route" },
  { id: "c4", label: "Interpretar diferencias", icon: "SearchCheck" },
  { id: "c5", label: "Proponer controles", icon: "Lock" },
];

// ---------------------------------------------------------------------------
// ¿Por qué importa?
// ---------------------------------------------------------------------------

export const whyItMattersFile = "Informe-Tecnico.pdf";

export const whyItMattersInitialStates: DocumentState[] = [
  { id: "disponible", label: "Disponible", icon: "FolderOpen" },
  { id: "legible", label: "Legible", icon: "FileSearch" },
  { id: "registrado", label: "Registrado", icon: "ClipboardList" },
];

export const whyItMattersLaterLabel = "3 meses después";

export const whyItMattersQuestion = "¿Cómo sabemos que sigue siendo exactamente el mismo?";

export const whyItMattersFlow: FlowStep[] = [
  { id: "archivo", label: "Archivo" },
  { id: "referencia", label: "Referencia" },
  { id: "verificacion", label: "Verificación" },
];

// ---------------------------------------------------------------------------
// Integridad digital (comparador referencia vs actual)
// ---------------------------------------------------------------------------

export const integrityDocumentName = "Informe.pdf";

export const integrityDefinition =
  "La integridad digital es la propiedad de un documento electrónico de mantenerse completo y sin alteraciones no controladas respecto de un estado de referencia establecido — no significa que el documento nunca pueda cambiar, sino que todo cambio debe ser identificable y, cuando corresponda, autorizado.";

export const integrityComparatorCases = [
  {
    id: "coincide",
    label: "Escenario A",
    reference: "A1B2C3D4",
    actual: "A1B2C3D4",
    result: "match" as const,
  },
  {
    id: "diferencia",
    label: "Escenario B",
    reference: "A1B2C3D4",
    actual: "F9E8D7C6",
    result: "mismatch" as const,
  },
];

export const integrityMatchMessage = "Integridad conforme a la referencia.";
export const integrityMismatchMessage = "Diferencia detectada. Se requiere investigar la causa — una diferencia no es, por sí sola, una conclusión.";

// ---------------------------------------------------------------------------
// Hash (simulador conceptual)
// ---------------------------------------------------------------------------

export const hashOriginalDocument = "Informe.pdf";
export const hashOriginalValue = "ABC8F91D";
export const hashModifiedDocument = "Informe.pdf (modificado)";
export const hashModifiedValue = "9F83AC02";
export const hashChangeMessage = "Se obtuvo un valor diferente respecto de la referencia — incluso un cambio mínimo en el documento produce una huella distinta.";
export const hashSimulationDisclaimer = "Simulación conceptual: los valores mostrados ilustran el comportamiento de una función hash, no son el resultado de un cálculo criptográfico real.";

export const hashDefinition =
  "Un hash es una huella digital de tamaño fijo que resulta de aplicar una función matemática al contenido completo de un documento. Si el contenido cambia, aunque sea mínimamente, el hash resultante cambia por completo.";

// ---------------------------------------------------------------------------
// Hash vs Checksum
// ---------------------------------------------------------------------------

export const hashVsChecksumProperties: HashVsChecksumProperty[] = [
  {
    key: "proposito",
    label: "Propósito",
    hash: "Identificar de forma única el contenido de un documento y detectar cualquier alteración.",
    checksum: "Detectar errores accidentales introducidos durante una transmisión o copia de datos.",
  },
  {
    key: "sensibilidad",
    label: "Sensibilidad a cambios",
    hash: "Muy alta: un cambio mínimo en el contenido produce un valor completamente distinto.",
    checksum: "Variable: diseñado para detectar errores comunes de transmisión, no toda alteración posible.",
  },
  {
    key: "caracteristicas",
    label: "Características",
    hash: "Algoritmo más complejo, pensado para que sea extremadamente difícil producir dos documentos distintos con el mismo valor.",
    checksum: "Algoritmo más simple y rápido de calcular, históricamente usado para verificación básica de datos.",
  },
  {
    key: "contexto",
    label: "Contexto de uso",
    hash: "Gestión documental, verificación de integridad a lo largo del tiempo, evidencia.",
    checksum: "Transferencias de archivos, descargas, controles de red.",
  },
  {
    key: "seguridad",
    label: "Relación con la seguridad",
    hash: "Puede sustentar procesos de verificación de integridad con mayor nivel de confianza.",
    checksum: "Ofrece un nivel de verificación más básico; no reemplaza un hash en contextos de gestión documental.",
  },
  {
    key: "aplicacion",
    label: "Aplicación típica",
    hash: "Fixity de documentos electrónicos y expedientes a lo largo del tiempo.",
    checksum: "Confirmar que un archivo descargado o copiado no sufrió un error durante la transferencia.",
  },
];

export const hashVsChecksumClosing =
  "En la gestión de archivos electrónicos, el hash es la herramienta central para sostener procesos de fixity; el checksum puede complementar controles técnicos puntuales, pero no sustituye una estrategia de verificación de integridad documental.";

// ---------------------------------------------------------------------------
// Fixity
// ---------------------------------------------------------------------------

export const fixityDefinition =
  "Fixity es la propiedad de un documento digital de permanecer sin cambios no documentados a lo largo del tiempo, y el conjunto de prácticas que permiten comprobarlo de forma sistemática y repetible.";

export const fixityFlow: FixityStage[] = [
  { id: "archivo", label: "Archivo", explanation: "El documento electrónico que debe mantenerse íntegro a lo largo del tiempo." },
  { id: "referencia", label: "Referencia", explanation: "Se calcula y se registra un valor de hash en el momento en que el documento se considera correcto y completo." },
  { id: "almacenamiento", label: "Almacenamiento", explanation: "El documento y su valor de referencia se conservan en el sistema de gestión documental o repositorio correspondiente." },
  { id: "verificacion", label: "Verificación", explanation: "En un momento posterior, se vuelve a calcular el hash del documento tal como existe en ese momento." },
  { id: "comparacion", label: "Comparación", explanation: "El valor recién calculado se compara contra el valor de referencia registrado." },
  { id: "resultado", label: "Resultado", explanation: "Si los valores coinciden, la integridad es conforme a la referencia; si no coinciden, se requiere investigar la causa." },
];

// ---------------------------------------------------------------------------
// Simulador de Fixity
// ---------------------------------------------------------------------------

export const fixitySimExpediente = "EXP-2026-00458";
export const fixitySimDocument = "Informe.pdf";
export const fixitySimReferenceHash = "ABC123";
export const fixitySimMatchHash = "ABC123";
export const fixitySimMismatchHash = "XYZ789";
export const fixitySimMatchMessage = "El valor actual coincide con la referencia establecida.";
export const fixitySimMismatchMessage = "El valor actual no coincide con la referencia. Se requiere investigar la causa.";

// ---------------------------------------------------------------------------
// "Una diferencia no es todavía una conclusión"
// ---------------------------------------------------------------------------

export const investigationFlow: FlowStep[] = [
  { id: "hash-diferente", label: "Hash diferente" },
  { id: "investigar", label: "Investigar" },
  { id: "revisar-evidencias", label: "Revisar evidencias" },
  { id: "determinar-causa", label: "Determinar causa" },
  { id: "tomar-accion", label: "Tomar acción" },
];

export const integrityCauses: IntegrityCause[] = [
  { id: "modificacion-autorizada", label: "Modificación autorizada", benign: true },
  { id: "nueva-version", label: "Nueva versión del documento", benign: true },
  { id: "conversion", label: "Conversión de formato", benign: true },
  { id: "reprocesamiento", label: "Reprocesamiento técnico", benign: true },
  { id: "error", label: "Error humano o de sistema", benign: true },
  { id: "corrupcion", label: "Corrupción de datos", benign: false },
  { id: "sustitucion", label: "Sustitución del archivo", benign: false },
  { id: "modificacion-no-autorizada", label: "Modificación no autorizada", benign: false },
];

export const investigationClosing =
  "Un hash diferente es una señal, no un veredicto: el mismo resultado técnico puede originarse en una causa legítima y documentada o en una causa que compromete la integridad del expediente. Solo la investigación — revisando trazabilidad, versiones y registros de auditoría de la Semana 7 — permite distinguir una de otra.";

// ---------------------------------------------------------------------------
// Riesgos
// ---------------------------------------------------------------------------

export const riskCards: RiskCard[] = [
  {
    id: "modificacion-no-autorizada",
    label: "Modificación no autorizada",
    severity: "alta",
    impact: "Compromete la confiabilidad del documento como evidencia y puede invalidar su valor probatorio.",
    control: "Control de acceso, permisos diferenciados y registro de auditoría (Semana 7).",
  },
  {
    id: "sustitucion",
    label: "Sustitución del archivo",
    severity: "alta",
    impact: "El documento que se consulta ya no corresponde al que se produjo o recibió originalmente.",
    control: "Verificación periódica de fixity contra el valor de referencia registrado.",
  },
  {
    id: "corrupcion",
    label: "Corrupción de datos",
    severity: "media",
    impact: "El documento puede volverse ilegible o inutilizable sin que exista una intención de alterarlo.",
    control: "Copias de respaldo verificadas y almacenamiento con controles de integridad (Semana 7).",
  },
  {
    id: "ausencia-referencia",
    label: "Ausencia de referencia",
    severity: "media",
    impact: "Sin un valor de hash registrado al momento correcto, no existe nada contra qué comparar en el futuro.",
    control: "Establecer valores de referencia (hash) en el momento de captura o ingreso del documento.",
  },
  {
    id: "falta-verificaciones",
    label: "Falta de verificaciones",
    severity: "media",
    impact: "Una alteración puede pasar inadvertida durante mucho tiempo si nunca se compara contra la referencia.",
    control: "Controles periódicos de verificación de integridad, no solo al momento de la captura.",
  },
  {
    id: "errores-transferencia",
    label: "Errores durante transferencia",
    severity: "baja",
    impact: "El documento puede llegar incompleto o dañado a otro sistema sin que nadie lo detecte de inmediato.",
    control: "Verificación de integridad inmediatamente después de cada transferencia o intercambio (Semana 8).",
  },
];

// ---------------------------------------------------------------------------
// Controles
// ---------------------------------------------------------------------------

export const riskControlPairs: RiskControlPair[] = [
  { risk: "Modificación no autorizada", control: "Control de acceso" },
  { risk: "Diferencia detectada", control: "Investigación y registro" },
  { risk: "Pérdida de referencia", control: "Establecer valores de referencia" },
  { risk: "Falta de verificación", control: "Controles periódicos" },
];

export const controlComposition = [
  "Hash",
  "Control de acceso",
  "Trazabilidad",
  "Versionado",
  "Procedimientos",
  "Verificación",
];

export const controlCompositionClosing =
  "El hash permite detectar que algo cambió, pero no explica qué pasó ni lo impide por sí solo: la integridad documental se sostiene con una combinación de controles, no con una sola herramienta.";

// ---------------------------------------------------------------------------
// Conexiones
// ---------------------------------------------------------------------------

export const connectionWeek7: WeekConnectionStep[] = [
  { id: "seguridad", label: "Seguridad" },
  { id: "cid", label: "Confidencialidad, integridad, disponibilidad" },
  { id: "verificacion-integridad", label: "Verificación de integridad" },
  { id: "hash-checksum-fixity", label: "Hash, checksum, fixity" },
];

export const connectionWeek7Closing =
  "En la Semana 7, la integridad era uno de los tres atributos de la seguridad de la información (junto a confidencialidad y disponibilidad). La Semana 10 profundiza en cómo verificarla de forma técnica y sistemática: el hash y la fixity son las herramientas concretas detrás de ese atributo.";

export const connectionWeek8: WeekConnectionStep[] = [
  { id: "digitalizacion", label: "Digitalización" },
  { id: "documento-digital", label: "Documento digital" },
  { id: "formato", label: "Formato" },
  { id: "almacenamiento", label: "Almacenamiento" },
  { id: "referencia", label: "Referencia" },
  { id: "verificacion", label: "Verificación" },
];

export const connectionWeek8Closing =
  "Digitalizar correctamente un documento (Semana 8) no elimina la necesidad de controlar posteriormente su integridad: la calidad de la captura y la elección del formato son condiciones de partida, pero el documento sigue necesitando una referencia y verificaciones a lo largo de su ciclo de vida.";

// ---------------------------------------------------------------------------
// Caso San Gabriel
// ---------------------------------------------------------------------------

export const sanGabrielDisclaimer = "CASO ACADÉMICO SIMULADO — Municipalidad Distrital de San Gabriel";

export const sanGabrielExpediente = "EXP-2026-00458";
export const sanGabrielDocument = "Informe-Tecnico.pdf";
export const sanGabrielReferenceHash = "A1B2C3";
export const sanGabrielMatchHash = "A1B2C3";
export const sanGabrielMismatchHash = "F9X8Z7";

export const sanGabrielQuestion = "¿Qué debería hacer el responsable del expediente?";

export const sanGabrielOptions: SanGabrielOption[] = [
  { id: "declarar-fraude", label: "Declarar de inmediato que el documento fue manipulado de forma fraudulenta", recommended: false },
  { id: "ignorar", label: "Ignorar la diferencia porque el documento sigue siendo legible", recommended: false },
  { id: "investigar", label: "Registrar la diferencia e iniciar una investigación: revisar versiones, trazabilidad y usuarios que accedieron al expediente", recommended: true },
  { id: "eliminar", label: "Eliminar el documento del expediente para evitar observaciones", recommended: false },
];

export const sanGabrielFeedback =
  "Una diferencia de hash es el punto de partida de una investigación, no una conclusión. El responsable debe registrar el hallazgo y revisar la evidencia disponible (versiones, trazabilidad, usuarios y fechas, vistas en la Semana 7) antes de determinar una causa.";

// ---------------------------------------------------------------------------
// Resumen
// ---------------------------------------------------------------------------

export const summaryPoints: SummaryPoint[] = [
  { id: "integridad", label: "Integridad", icon: "ShieldCheck" },
  { id: "referencia", label: "Referencia", icon: "Fingerprint" },
  { id: "hash-checksum", label: "Hash / Checksum", icon: "GitCompareArrows" },
  { id: "verificacion", label: "Verificación", icon: "SearchCheck" },
  { id: "fixity", label: "Fixity", icon: "Route" },
  { id: "resultado", label: "Resultado", icon: "ClipboardList" },
  { id: "investigacion", label: "Investigación", icon: "FileSearch" },
  { id: "control", label: "Control", icon: "Lock" },
];

export const closingMessages = [
  "La integridad digital no se asume: se verifica.",
  "Una diferencia detectada es el comienzo de un análisis, nunca el final.",
];

export const nextWeekConnection = {
  nextWeekNumber: 11,
  nextTitle: "Fundamentos de preservación digital",
  text: "Verificar la integridad de un documento es una condición necesaria, pero no suficiente, para preservarlo a largo plazo. La Semana 11 introduce los conceptos, principios y el plan de preservación digital que sostienen esa continuidad en el tiempo.",
};
