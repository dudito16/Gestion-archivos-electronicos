/** Content for Week 13's 10 formative activities ("Actividades"). */

export const activity1Scenario =
  "Un área de archivo recibe un informe técnico digital y necesita registrar, entre otros datos, su título, su fecha de creación y el valor de verificación (hash) calculado al momento del ingreso.";

export const activity1Statements = [
  { id: "a1-1", label: "El título del informe es un metadato descriptivo", icon: "Tags", belongs: true },
  { id: "a1-2", label: "El valor de verificación (hash) calculado al ingreso es un metadato de preservación", icon: "Fingerprint", belongs: true },
  { id: "a1-3", label: "El título del informe es un metadato de preservación", icon: "FileX", belongs: false },
  { id: "a1-4", label: "Basta con conservar el archivo, sin ningún metadato adicional", icon: "FileX", belongs: false },
];

export const activity2Pairs = [
  { scenario: "Se calcula y registra el resultado de una comprobación de integridad sobre un expediente conservado", entity: "Eventos" },
  { scenario: "Se identifica al sistema que ejecutó automáticamente una validación de formato", entity: "Agentes" },
  { scenario: "Se registra una restricción de acceso vigente sobre un expediente con información reservada", entity: "Derechos" },
];

export const activity2EntityOptions = ["Objetos", "Eventos", "Agentes", "Derechos"];

export const activity3Pairs = [
  { section: "fileSec", purpose: "Enumerar los archivos digitales que componen el objeto" },
  { section: "structMap", purpose: "Organizar jerárquicamente los archivos en la estructura lógica del objeto" },
  { section: "dmdSec", purpose: "Contener o enlazar la información descriptiva del objeto" },
];

export const activity3PurposeOptions = [
  "Enumerar los archivos digitales que componen el objeto",
  "Organizar jerárquicamente los archivos en la estructura lógica del objeto",
  "Contener o enlazar la información descriptiva del objeto",
  "Ejecutar automáticamente la preservación del objeto",
];

export const activity4Scenario =
  "Debes describir, con Dublin Core, un informe técnico digital para que pueda encontrarse en el buscador institucional.";

export const activity4Statements = [
  { id: "a4-1", label: "title — el nombre del informe", icon: "FileText", belongs: true },
  { id: "a4-2", label: "creator — la unidad responsable del informe", icon: "Users", belongs: true },
  { id: "a4-3", label: "date — la fecha de creación del informe", icon: "History", belongs: true },
  { id: "a4-4", label: "Un elemento Dublin Core que registre el historial de migraciones aplicadas al archivo", icon: "FileX", belongs: false },
];

export const activity5Items = [
  { id: "a5-1", label: "Registrar el resultado de una verificación de integridad", icon: "Fingerprint", category: "premis" },
  { id: "a5-2", label: "Representar la relación entre un informe y sus tres anexos", icon: "FolderTree", category: "mets" },
  { id: "a5-3", label: "Describir el título y la fecha de un documento para facilitar su búsqueda", icon: "Tags", category: "dublincore" },
  { id: "a5-4", label: "Registrar qué agente ejecutó una migración de formato", icon: "Fingerprint", category: "premis" },
  { id: "a5-5", label: "Enumerar y organizar jerárquicamente los archivos de un expediente complejo", icon: "FolderTree", category: "mets" },
  { id: "a5-6", label: "Registrar el tema y el idioma de un informe técnico", icon: "Tags", category: "dublincore" },
];

export const activity5Categories = [
  { id: "premis", label: "PREMIS", icon: "Fingerprint" },
  { id: "mets", label: "METS", icon: "FolderTree" },
  { id: "dublincore", label: "Dublin Core", icon: "Tags" },
];

export const activity6Statements = [
  { id: "a6-1", label: "bagit.txt declara la versión de BagIt utilizada", icon: "FolderKanban", belongs: true },
  { id: "a6-2", label: "El manifiesto registra el valor de verificación de cada archivo del contenido", icon: "Fingerprint", belongs: true },
  { id: "a6-3", label: "Un paquete BagIt garantiza, por sí solo, la autenticidad histórica del documento", icon: "FileX", belongs: false },
  { id: "a6-4", label: "BagIt sustituye a OAIS, PREMIS, METS y Dublin Core en todas sus funciones", icon: "FileX", belongs: false },
];

export const activity7Case =
  "Un archivo recibido se llama \"plano_obra.pdf\". Al identificarlo técnicamente (de forma simulada para este ejercicio), su contenido real corresponde a un formato de imagen, no a un PDF.";

export const activity7Options = [
  { id: "a7-correcta", label: "El archivo no debe aceptarse como PDF sin corregir antes la discrepancia entre su extensión y su formato real", correct: true },
  { id: "a7-incorrecta1", label: "La extensión \".pdf\" es suficiente por sí sola para confirmar el formato del archivo", correct: false },
  { id: "a7-incorrecta2", label: "El problema no tiene ninguna relevancia para la preservación del archivo", correct: false },
];

export const activity7Feedback =
  "Identificar un formato implica comprobar el contenido real del archivo, no solo su extensión. Un archivo nombrado \".pdf\" cuyo contenido no corresponde a ese formato debe corregirse o documentarse antes de continuar.";

export const activity8Case =
  "Un archivo se identifica correctamente como PDF. El equipo de preservación debe decidir si, además, necesita comprobar su conformidad con el perfil PDF/A antes de aceptarlo para conservación a largo plazo.";

export const activity8Options = [
  { id: "a8-correcta", label: "Identificar el formato (PDF) y validar su conformidad con un perfil (PDF/A) son dos comprobaciones distintas y ambas pueden ser necesarias", correct: true },
  { id: "a8-incorrecta1", label: "Si el archivo ya se identificó como PDF, no es necesario comprobar nada más", correct: false },
  { id: "a8-incorrecta2", label: "Identificar y validar son exactamente lo mismo, solo con nombres distintos", correct: false },
];

export const activity8Feedback =
  "Identificar responde qué formato tiene el archivo; validar responde si cumple las reglas de ese formato o de un perfil específico. Un archivo puede identificarse correctamente y, aun así, no ser válido conforme a un perfil determinado.";

export const activity9Case =
  "Un equipo de archivo detecta que un conjunto de informes está en un formato de procesador de texto antiguo, con soporte decreciente, y propone normalizarlos de inmediato a un formato más actual, sin ninguna evaluación previa.";

export const activity9Question =
  "¿Qué le falta a esta propuesta de normalización? Explica qué pasos deberían darse antes de transformar estos archivos.";

export const activity10Scenario =
  "La Municipalidad Distrital de San Gabriel (caso académico simulado) debe transferir expedientes de obras públicas. Algunos archivos tienen metadatos incompletos, y uno de ellos, nombrado \"informe_final.pdf\", resulta no ser realmente un PDF al identificarlo técnicamente.";

export const activity10Question =
  "Como responsable del área de archivo, describe brevemente qué estándares (PREMIS, METS, Dublin Core, BagIt) aplicarías para resolver cada problema del caso, y qué evento de preservación registrarías respecto del archivo mal identificado.";
