/** Content for Week 14's four interactive "Casos prácticos". */

// ---------------------------------------------------------------------------
// Caso 1 — Evaluación de un repositorio
// ---------------------------------------------------------------------------

export const case1Disclaimer = "CASO ACADÉMICO SIMULADO";

export const case1Scenario =
  "Una institución tiene 50 000 documentos digitales en un servidor centralizado. Realiza copias de seguridad, pero no verifica periódicamente la integridad de los documentos, no cuenta con una política de preservación, y no tiene responsables formalmente asignados para la gestión del repositorio.";

export const case1Question = "¿Puede considerarse que esta institución dispone de un repositorio digital confiable?";

export const case1Options = [
  { id: "no-confiable", label: "No: tener documentos almacenados y copias de seguridad no basta sin política de preservación, verificación de integridad y responsables asignados", correct: true },
  { id: "si-confiable", label: "Sí: contar con un servidor centralizado y copias de seguridad ya constituye un repositorio confiable", correct: false },
  { id: "depende-tamano", label: "Depende únicamente del volumen de documentos conservados", correct: false },
];

export const case1Feedback =
  "Un repositorio digital confiable requiere, además del almacenamiento y las copias de seguridad, una política de preservación, verificación periódica de integridad y responsables formalmente asignados (Módulos 1 y 2). Esta institución carece de las tres condiciones: no puede considerarse confiable, aunque su infraestructura funcione técnicamente.";

// ---------------------------------------------------------------------------
// Caso 2 — Auditoría institucional
// ---------------------------------------------------------------------------

export const case2Disclaimer = "CASO ACADÉMICO SIMULADO — Entidad Pública Ficticia";

export const case2Intro =
  "Una entidad pública ficticia solicita una autoevaluación académica de su repositorio digital antes de considerar una auditoría formal. Se identificaron las siguientes situaciones en cada ámbito de ISO 16363:2025.";

export interface AuditMatrixOption {
  id: string;
  label: string;
}

export interface AuditMatrixRowData {
  id: string;
  scopeLabel: string;
  situation: string;
  evidence: string;
  riskOptions: AuditMatrixOption[];
  correctRiskId: string;
  complianceOptions: AuditMatrixOption[];
  correctComplianceId: string;
  recommendation: string;
}

export const case2Rows: AuditMatrixRowData[] = [
  {
    id: "organizacional",
    scopeLabel: "A. Infraestructura organizacional",
    situation: "No existe una política de preservación aprobada ni responsables formalmente asignados al repositorio.",
    evidence: "Ausencia de documento de política; ausencia de resolución o acto administrativo que asigne responsables.",
    riskOptions: [
      { id: "alto", label: "Alto: sin política ni responsables, ninguna otra condición de confiabilidad puede sostenerse" },
      { id: "bajo", label: "Bajo: la ausencia de política no afecta la operación técnica diaria" },
      { id: "nulo", label: "Nulo: no representa ningún riesgo mientras el sistema funcione" },
    ],
    correctRiskId: "alto",
    complianceOptions: [
      { id: "no-cumple", label: "No cumple" },
      { id: "cumple-parcial", label: "Cumple parcialmente" },
      { id: "cumple", label: "Cumple" },
    ],
    correctComplianceId: "no-cumple",
    recommendation: "Formalizar una política de preservación institucional y asignar responsables mediante un acto administrativo.",
  },
  {
    id: "objetos-digitales",
    scopeLabel: "B. Gestión de objetos digitales",
    situation: "Los documentos se reciben sin un procedimiento uniforme de validación, y los metadatos descriptivos están incompletos en una parte de ellos.",
    evidence: "Ausencia de procedimiento documentado de recepción; expedientes con metadatos parciales detectados en una muestra revisada.",
    riskOptions: [
      { id: "medio", label: "Medio: afecta la identificación y descripción de los objetos, pero no necesariamente su conservación física" },
      { id: "nulo-b", label: "Nulo: los metadatos pueden completarse en cualquier momento sin consecuencias" },
      { id: "alto-b", label: "Alto: implica que ningún documento puede considerarse recibido válidamente" },
    ],
    correctRiskId: "medio",
    complianceOptions: [
      { id: "no-cumple-b", label: "No cumple" },
      { id: "cumple-parcial-b", label: "Cumple parcialmente" },
      { id: "cumple-b", label: "Cumple" },
    ],
    correctComplianceId: "cumple-parcial-b",
    recommendation: "Definir y aplicar un procedimiento uniforme de validación en el ingreso, y completar los metadatos descriptivos faltantes.",
  },
  {
    id: "infraestructura-seguridad",
    scopeLabel: "C. Gestión de infraestructura y seguridad",
    situation: "El repositorio mantiene una única copia de los documentos en un servidor, sin redundancia ni plan de recuperación ante desastres.",
    evidence: "Inventario de infraestructura que muestra un único servidor; ausencia de plan de recuperación documentado.",
    riskOptions: [
      { id: "alto-c", label: "Alto: la falta de redundancia expone a la institución a una pérdida permanente de información" },
      { id: "bajo-c", label: "Bajo: un único servidor es suficiente mientras no falle" },
      { id: "medio-c", label: "Medio: solo afecta el tiempo de recuperación, no la conservación de la información" },
    ],
    correctRiskId: "alto-c",
    complianceOptions: [
      { id: "no-cumple-c", label: "No cumple" },
      { id: "cumple-parcial-c", label: "Cumple parcialmente" },
      { id: "cumple-c", label: "Cumple" },
    ],
    correctComplianceId: "no-cumple-c",
    recommendation: "Implementar una estrategia de redundancia (p. ej., la regla 3-2-1) y documentar un plan de recuperación ante desastres.",
  },
];

export const case2ClosingNote =
  "Esta autoevaluación académica identifica hallazgos y propone recomendaciones con fines formativos; no constituye una auditoría formal ni una certificación conforme a ISO 16363:2025.";

// ---------------------------------------------------------------------------
// Caso 3 — Alteración de un documento
// ---------------------------------------------------------------------------

export const case3Disclaimer = "CASO ACADÉMICO SIMULADO";

export const case3Scenario =
  "Un documento PDF tiene un valor SHA-256 registrado al momento de ingresar al repositorio. Seis meses después, al realizar una verificación periódica, se comprueba que el hash actual es diferente al registrado inicialmente.";

export const case3Steps = [
  { id: "interpretar", prompt: "Interpreta el resultado: ¿qué significa, estrictamente, que el hash actual sea diferente al registrado al ingreso?" },
  { id: "riesgo", prompt: "¿Qué riesgo representa este resultado para el repositorio y para el valor del documento?" },
  { id: "investigar", prompt: "¿Qué debe investigarse antes de sacar una conclusión definitiva sobre lo ocurrido?" },
  { id: "medidas", prompt: "Propón al menos una medida correctiva ante este hallazgo." },
  { id: "evidencias", prompt: "¿Qué evidencias y eventos de preservación (Semana 13) deberían quedar documentados a partir de este hallazgo?" },
];

export const case3Guidance =
  "Orientación para retroalimentación docente (no se muestra automáticamente al estudiante): un hash diferente indica que el contenido ya no coincide con la referencia registrada — no debe interpretarse automáticamente como fraude o manipulación malintencionada (lección ya enseñada en la Semana 10); antes de concluir, debe investigarse si existe un evento documentado que explique el cambio (p. ej., una migración de formato autorizada y registrada); si no existe tal evento, el hallazgo debe escalarse para investigación formal; y, en cualquier caso, debe registrarse un evento de preservación (PREMIS, Semana 13) con el resultado de la verificación y de la investigación realizada.";

// ---------------------------------------------------------------------------
// Caso 4 — Transferencia desde un SGD
// ---------------------------------------------------------------------------

export const case4Disclaimer = "CASO ACADÉMICO SIMULADO";

export const case4Scenario =
  "Una entidad pública necesita transferir 100 expedientes electrónicos de obras públicas desde su SGD hacia el repositorio de preservación institucional.";

export const case4ChecklistItems = [
  { id: "c4-1", label: "Transferir únicamente los expedientes que ya completaron su valoración documental y corresponden a conservación permanente o prolongada", icon: "ClipboardList", belongs: true },
  { id: "c4-2", label: "Acompañar cada expediente con sus metadatos descriptivos, técnicos y de preservación disponibles", icon: "Tags", belongs: true },
  { id: "c4-3", label: "Verificar la integridad de cada documento (p. ej., mediante SHA-256) antes y después de la transferencia", icon: "Fingerprint", belongs: true },
  { id: "c4-4", label: "Conservar el orden documental original de cada expediente, sin reorganizar su estructura", icon: "FolderTree", belongs: true },
  { id: "c4-5", label: "Transferir todos los expedientes del SGD, sin distinguir si ya completaron su trámite o su valoración", icon: "FileX", belongs: false },
  { id: "c4-6", label: "Omitir la confirmación de recepción, ya que el envío ya se realizó", icon: "FileX", belongs: false },
];

export const case4ConfirmationQuestion =
  "¿Cómo confirmarías formalmente la recepción de estos 100 expedientes por parte del repositorio?";

export const case4ConfirmationFeedback =
  "Una confirmación formal de recepción debería registrar, como mínimo, que el repositorio validó que el envío estuviera completo, verificó la integridad de los documentos recibidos frente a lo declarado en la transferencia, y generó un registro (evidencia de transferencia) que ambas partes — el área productora y el repositorio — puedan conservar como respaldo de que la transferencia se completó correctamente.";
