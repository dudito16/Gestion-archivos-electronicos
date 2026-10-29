/** Content for Week 13's single "Organización y documentación de un paquete de preservación digital" workshop case. */

export const tallerDisclaimer = "CASO ACADÉMICO SIMULADO — Municipalidad Distrital de San Gabriel";

export const tallerScenario =
  "La Municipalidad Distrital de San Gabriel (caso académico simulado) debe preparar, para su transferencia, un expediente electrónico compuesto por un informe principal, tres anexos y una resolución. Necesita describir los documentos, mantener su estructura, empaquetarlos de forma verificable y documentar las acciones de preservación realizadas.";

export const tallerObjectsPrompt = "Identifica los objetos digitales del expediente: ¿qué archivos lo componen y cómo se relacionan entre sí?";

export const tallerDescriptivePrompt = "Registra la información descriptiva básica del expediente (equivalente a los elementos Dublin Core que usarías): título, fecha, unidad productora y tema.";

export const tallerPreservationMetadataItems = [
  { id: "pm1", label: "El valor de verificación (hash) calculado al momento del ingreso", icon: "Fingerprint", belongs: true },
  { id: "pm2", label: "El registro de cualquier migración de formato aplicada", icon: "RefreshCw", belongs: true },
  { id: "pm3", label: "El título del expediente", icon: "FileX", belongs: false },
  { id: "pm4", label: "El tema o materia del expediente", icon: "FileX", belongs: false },
];

export const tallerStructurePrompt = "Propón, en tus propias palabras, cómo representarías la relación estructural entre el informe principal, los tres anexos y la resolución (piensa en lo que resolvería METS).";

export const tallerBagitPrompt = "Explica cómo organizarías un paquete BagIt para transferir estos archivos: ¿qué contendría la carpeta data/ y qué permitiría comprobar el manifiesto?";

export const tallerIdentificationValidationItems = [
  { id: "iv1", label: "Identificar el formato real de cada archivo antes de aceptarlo, sin confiar solo en su extensión", icon: "SearchCheck", belongs: true },
  { id: "iv2", label: "Validar si un archivo cumple un perfil de preservación específico, cuando corresponda", icon: "ShieldCheck", belongs: true },
  { id: "iv3", label: "Asumir que la extensión del archivo es prueba suficiente de su formato real", icon: "FileX", belongs: false },
];

export const tallerNormalizationPrompt = "Si se detecta un archivo en un formato antiguo con riesgo de obsolescencia, describe qué pasos evaluarías antes de decidir normalizarlo.";

export const tallerEventPrompt = "Redacta cómo documentarías un evento de preservación (p. ej., una identificación de formato o una migración): ¿qué datos incluirías?";

export const tallerRisksControlsItems = [
  { id: "rc1", label: "Verificar el contenido de un archivo, no solo su extensión, antes de aceptarlo", icon: "SearchCheck", belongs: true },
  { id: "rc2", label: "Documentar toda acción de preservación aplicada, con su tipo, fecha, resultado y agente", icon: "ClipboardList", belongs: true },
  { id: "rc3", label: "Aplicar una normalización sin ninguna evaluación previa, para ahorrar tiempo", icon: "FileX", belongs: false },
];

export const tallerClosingPrompt =
  "Redacta tu conclusión técnica: un breve resumen de cómo se describirían, estructurarían, empaquetarían y documentarían estos documentos conforme a los estándares revisados esta semana.";

export const tallerRubric = [
  { criterion: "Objetos digitales identificados", points: 10, description: "Identifica con claridad los archivos del expediente y sus relaciones." },
  { criterion: "Información descriptiva básica", points: 10, description: "Registra una descripción coherente, equivalente a los elementos Dublin Core pertinentes." },
  { criterion: "Metadatos de preservación", points: 10, description: "Distingue correctamente qué información corresponde a metadatos de preservación." },
  { criterion: "Estructura de relaciones", points: 10, description: "Propone una representación coherente de la relación entre los documentos del expediente." },
  { criterion: "Organización del paquete BagIt", points: 10, description: "Describe un empaquetado coherente con la convención BagIt." },
  { criterion: "Identificación y validación", points: 10, description: "Distingue correctamente identificar un formato de validar su conformidad." },
  { criterion: "Evaluación de normalización", points: 10, description: "Reconoce los pasos de evaluación previos a una decisión de normalización." },
  { criterion: "Documentación de un evento", points: 10, description: "Documenta un evento de preservación con información suficiente." },
  { criterion: "Riesgos y controles", points: 10, description: "Identifica riesgos pertinentes y los controles correspondientes." },
  { criterion: "Conclusión técnica", points: 10, description: "Presenta una conclusión clara, coherente con los estándares revisados." },
];

export const tallerRubricTotal = tallerRubric.reduce((sum, r) => sum + r.points, 0);
