/** Content for Week 12's 10 formative activities ("Actividades"). */

export const activity1Statements = [
  { id: "a1-1", label: "OAIS es un modelo de referencia que organiza funciones y responsabilidades de preservación", icon: "Landmark", belongs: true },
  { id: "a1-2", label: "OAIS es un programa de software que se instala en un servidor institucional", icon: "FileX", belongs: false },
  { id: "a1-3", label: "OAIS ofrece un vocabulario común para distintas instituciones que preservan información digital", icon: "Users", belongs: true },
  { id: "a1-4", label: "Instalar OAIS garantiza automáticamente la preservación de los documentos", icon: "FileX", belongs: false },
];

export const activity2Case =
  "Una institución compra un software de repositorio digital y asegura que, por tenerlo instalado, ya cumple con el modelo OAIS en su totalidad.";

export const activity2Options = [
  { id: "a2-correcta", label: "El software puede adoptar conceptos de OAIS, pero el modelo en sí es un marco de referencia, no una aplicación — su sola instalación no garantiza nada", correct: true },
  { id: "a2-incorrecta1", label: "Es correcto: instalar cualquier repositorio equivale a implementar OAIS por completo", correct: false },
  { id: "a2-incorrecta2", label: "OAIS y el software son exactamente lo mismo, con nombres distintos", correct: false },
];

export const activity2Feedback =
  "OAIS es un modelo de referencia conceptual, no un software. Un repositorio puede adoptar sus funciones y conceptos, pero la sola instalación de una herramienta no garantiza preservación, autenticidad ni confiabilidad.";

export const activity3Pairs = [
  { entity: "Ingest", function: "Recibir y validar la información enviada por el productor" },
  { entity: "Acceso", function: "Preparar y entregar la información solicitada por el consumidor" },
  { entity: "Planificación de la preservación", function: "Monitorear riesgos de obsolescencia y recomendar estrategias" },
];

export const activity3FunctionOptions = [
  "Recibir y validar la información enviada por el productor",
  "Preparar y entregar la información solicitada por el consumidor",
  "Monitorear riesgos de obsolescencia y recomendar estrategias",
  "Atender al público en mesa de partes",
];

export const activity4Items = [
  { id: "a4-1", label: "Negociar un acuerdo de transferencia con un área productora", icon: "ClipboardList", category: "administration" },
  { id: "a4-2", label: "Verificar la integridad de un AIP conservado", icon: "ShieldCheck", category: "archival-storage" },
  { id: "a4-3", label: "Actualizar la base de datos descriptiva de los expedientes conservados", icon: "Database", category: "data-management" },
  { id: "a4-4", label: "Recomendar una migración de formato ante un riesgo de obsolescencia detectado", icon: "RefreshCw", category: "preservation-planning" },
  { id: "a4-5", label: "Validar que un SIP recibido esté completo antes de aceptarlo", icon: "FilePlus", category: "ingest" },
  { id: "a4-6", label: "Preparar un DIP respetando las restricciones de acceso vigentes", icon: "FileSearch", category: "access" },
];

export const activity4Categories = [
  { id: "ingest", label: "Ingest", icon: "FilePlus" },
  { id: "archival-storage", label: "Almacenamiento archivístico", icon: "Archive" },
  { id: "data-management", label: "Gestión de datos", icon: "Database" },
  { id: "administration", label: "Administración", icon: "ClipboardList" },
  { id: "preservation-planning", label: "Planificación de la preservación", icon: "RefreshCw" },
  { id: "access", label: "Acceso", icon: "FileSearch" },
];

export const activity5Stages = ["Productor envía el SIP", "Ingest valida y prepara", "Almacenamiento conserva el AIP", "Consumidor solicita acceso", "Acceso prepara y entrega el DIP"];

export const activity5Feedback =
  "El flujo conceptual parte del productor, pasa por la validación de Ingest, llega a la conservación del AIP, y solo ante una solicitud del consumidor se prepara y entrega el DIP correspondiente.";

export const activity6Statements = [
  { id: "a6-1", label: "El SIP es lo que el productor envía para su ingreso", icon: "FilePlus", belongs: true },
  { id: "a6-2", label: "El AIP incluye información de preservación, no solo el contenido del documento", icon: "Archive", belongs: true },
  { id: "a6-3", label: "El DIP es idéntico al AIP en todos los casos", icon: "FileX", belongs: false },
  { id: "a6-4", label: "Todo SIP se convierte de forma automática e idéntica en un AIP, sin validaciones", icon: "FileX", belongs: false },
];

export const activity7Pairs = [
  { package: "SIP", actor: "Productor" },
  { package: "DIP", actor: "Consumidor" },
];

export const activity7ActorOptions = ["Productor", "Consumidor", "Administración informática únicamente"];

export const activity8Statements = [
  { id: "a8-1", label: "\"OAIS garantiza por sí solo la autenticidad de los documentos\"", icon: "FileX", belongs: true },
  { id: "a8-2", label: "\"Todo repositorio digital implementa OAIS de forma completa\"", icon: "FileX", belongs: true },
  { id: "a8-3", label: "\"OAIS es un modelo de referencia que describe funciones y responsabilidades\"", icon: "ShieldCheck", belongs: false },
  { id: "a8-4", label: "\"El AIP conserva información de preservación además del contenido\"", icon: "ShieldCheck", belongs: false },
];

export const activity8Instruction = "Selecciona las afirmaciones que contienen un ERROR CONCEPTUAL sobre el modelo OAIS.";

export const activity9Case =
  "Una institución tiene un SGD que gestiona el trámite de sus documentos, y además adquirió un repositorio digital comercial para archivarlos. El responsable del proyecto afirma que, como ya tienen ambos sistemas, no necesitan aplicar ningún concepto de OAIS.";

export const activity9Question = "¿Es correcta esta afirmación? Explica la relación entre el SGD, el repositorio y el modelo OAIS en este caso.";

export const activity10Scenario =
  "La Municipalidad Distrital de San Gabriel (caso académico simulado) debe transferir expedientes de obras públicas a un entorno de preservación. Algunos expedientes agrupan varios archivos relacionados y tienen metadatos incompletos.";

export const activity10Question =
  "Como responsable del área de archivo, describe brevemente qué debe prepararse antes de aceptar estos expedientes como SIP, y qué distingue al AIP resultante de una simple copia de los archivos originales.";
