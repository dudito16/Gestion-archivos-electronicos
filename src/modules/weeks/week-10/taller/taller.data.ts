/** Content for Week 10's single "Laboratorio de Integridad Digital" workshop case. */

export const tallerFicha = {
  documento: "Informe-Tecnico.pdf",
  referencia: "A1B2C3",
  valorActual: "F9X8Z7",
  evento: "Edición registrada en el sistema hace 3 días",
  usuario: "j.perez (Área Técnica)",
  fecha: "2026-09-27",
  resultado: "⚠ Diferencia detectada",
};

export const tallerDetectOptions = [
  { id: "d1", label: "El valor de referencia y el valor actual no coinciden", correct: true },
  { id: "d2", label: "El documento ya no es legible", correct: false },
  { id: "d3", label: "El documento desapareció del expediente", correct: false },
];

export const tallerInterpretItems = [
  { id: "i1", label: "La diferencia indica que el contenido cambió respecto a la referencia registrada", icon: "SearchCheck", belongs: true },
  { id: "i2", label: "La diferencia confirma que hubo fraude", icon: "ShieldAlert", belongs: false },
  { id: "i3", label: "El evento de 'edición registrada' es un dato relevante para explicar la diferencia", icon: "History", belongs: true },
  { id: "i4", label: "No es necesario revisar nada más porque el documento sigue abriendo correctamente", icon: "FolderOpen", belongs: false },
];

export const tallerInvestigateItems = [
  { id: "inv1", label: "Revisar el registro de trazabilidad y auditoría del expediente (Semana 7)", icon: "FileSearch", belongs: true },
  { id: "inv2", label: "Confirmar si el usuario que editó el documento tenía permisos para hacerlo", icon: "Users", belongs: true },
  { id: "inv3", label: "Verificar si existe una versión anterior registrada del documento", icon: "History", belongs: true },
  { id: "inv4", label: "Eliminar el documento del expediente de inmediato", icon: "FileX", belongs: false },
  { id: "inv5", label: "Declarar públicamente que el documento fue alterado de forma fraudulenta", icon: "ShieldAlert", belongs: false },
];

export const tallerControlOptions = [
  { id: "c1", label: "Registrar el hallazgo y documentar la investigación en el expediente" },
  { id: "c2", label: "Ignorar la diferencia porque el usuario tiene buena reputación" },
  { id: "c3", label: "Reforzar el control de acceso y la verificación periódica de integridad a futuro" },
  { id: "c4", label: "Culpar públicamente al usuario sin completar la investigación" },
];

export const tallerControlCorrectIds = ["c1", "c3"];

export const tallerClosingPrompt =
  "Como responsable del expediente, redacta tu conclusión profesional: ¿la diferencia detectada compromete la integridad del documento? Justifica con base en la evidencia revisada (evento, usuario, fecha) sin afirmar una conclusión que la evidencia no respalda todavía.";
