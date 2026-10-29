import type { FlowStep } from "../../../types/content.types";
import type {
  BagitComponent,
  CaseQuestion,
  DublinCoreElement,
  FormatScenario,
  HeroStep,
  LearningOutcome,
  MetadataType,
  MetsSection,
  PremisEntity,
  PremisEventExample,
  PreservationEvent,
  PriorKnowledgeQuestion,
  ReferenceItem,
  SummaryPoint,
  WeekConnectionStep,
} from "./week13.types";

export const heroChain: HeroStep[] = [
  { id: "objeto", label: "Objeto digital", icon: "FileText" },
  { id: "descriptivos", label: "Dublin Core", icon: "Tags" },
  { id: "estructura", label: "METS", icon: "FolderTree" },
  { id: "preservacion", label: "PREMIS", icon: "Fingerprint" },
  { id: "empaquetado", label: "BagIt", icon: "FolderKanban" },
];

export const weekTagline = "Estándares concretos que dan forma técnica a lo que OAIS describe de forma conceptual";

export const weekProgression: FlowStep[] = [
  { id: "oais", label: "Modelo OAIS (Semana 12)" },
  { id: "metadatos", label: "Metadatos de preservación" },
  { id: "estandares", label: "PREMIS, METS, Dublin Core" },
  { id: "bagit", label: "BagIt" },
  { id: "formatos-eventos", label: "Formatos y eventos" },
];

export const motivationQuestion =
  "Si un entorno de preservación conserva miles de objetos digitales, ¿qué información necesita registrar sobre cada uno para que, dentro de veinte años, alguien pueda encontrarlo, entenderlo y confirmar que sigue siendo el mismo?";

export const learningOutcomes: LearningOutcome[] = [
  { id: "o1", label: "Diferenciar metadatos descriptivos, estructurales, técnicos y de preservación", icon: "Tags" },
  { id: "o2", label: "Explicar PREMIS y sus entidades conceptuales: objetos, eventos, agentes y derechos", icon: "Fingerprint" },
  { id: "o3", label: "Explicar el propósito de METS para estructurar objetos digitales complejos", icon: "FolderTree" },
  { id: "o4", label: "Utilizar Dublin Core para describir recursos digitales", icon: "FileText" },
  { id: "o5", label: "Comprender el empaquetado y la transferencia de contenidos mediante BagIt", icon: "FolderKanban" },
  { id: "o6", label: "Diferenciar identificación, validación y normalización de formatos digitales", icon: "SearchCheck" },
  { id: "o7", label: "Registrar eventos de preservación de forma coherente y trazable", icon: "History" },
  { id: "o8", label: "Relacionar estos estándares con OAIS y con un repositorio digital", icon: "Landmark" },
];

export const achievementIndicator =
  "Describe la finalidad de PREMIS, METS, Dublin Core y BagIt, y distingue identificación, validación y normalización de formatos.";

// ---------------------------------------------------------------------------
// Saberes previos
// ---------------------------------------------------------------------------

export const priorKnowledgeIntro =
  "Antes de empezar, repasa brevemente lo que ya revisaste en semanas anteriores: estos conocimientos son la base para comprender los estándares de esta semana.";

export const priorKnowledgeQuestions: PriorKnowledgeQuestion[] = [
  {
    id: "pk1",
    prompt: "¿Qué es el modelo OAIS (Semana 12)?",
    options: [
      { id: "a", label: "Un software que se instala y preserva automáticamente los documentos" },
      { id: "b", label: "Un modelo de referencia que organiza funciones, responsabilidades y tipos de información" },
      { id: "c", label: "Un procedimiento exclusivo del Sistema de Gestión Documental" },
    ],
    correctId: "b",
    feedback: "OAIS (Semana 12) es un modelo de referencia conceptual, no un software ni un procedimiento exclusivo del SGD.",
  },
  {
    id: "pk2",
    prompt: "¿Qué información de preservación debería acompañar a un AIP (Semana 12)?",
    options: [
      { id: "a", label: "Ninguna; basta con conservar el archivo original" },
      { id: "b", label: "Información de procedencia, integridad y el historial de acciones realizadas" },
      { id: "c", label: "Solo el nombre original del archivo" },
    ],
    correctId: "b",
    feedback: "El AIP (Semana 12) incluye información de preservación —procedencia, integridad, historial— además del contenido. Esta semana veremos los estándares que dan forma concreta a esa información.",
  },
  {
    id: "pk3",
    prompt: "¿Qué permite verificar un valor de hash (Semana 10)?",
    options: [
      { id: "a", label: "Que un documento se mantenga sin alteraciones no controladas respecto de una referencia" },
      { id: "b", label: "Quién es el autor del documento" },
      { id: "c", label: "El valor histórico del documento" },
    ],
    correctId: "a",
    feedback: "El hash y la fixity (Semana 10) sostienen la verificación de integridad — un dato que PREMIS registra como parte de un evento de preservación.",
  },
  {
    id: "pk4",
    prompt: "¿Qué diferencia a la migración de la emulación (Semana 11)?",
    options: [
      { id: "a", label: "La migración convierte el documento a un formato vigente; la emulación reproduce el entorno tecnológico original" },
      { id: "b", label: "Son exactamente lo mismo, con nombres distintos" },
      { id: "c", label: "La emulación siempre es mejor que la migración" },
    ],
    correctId: "a",
    feedback: "Son estrategias distintas frente a la obsolescencia (Semana 11). Esta semana veremos cómo normalizar un formato y cómo registrar esa acción como un evento documentado.",
  },
];

export const priorKnowledgeBridge =
  "Estos conocimientos son la base de esta semana: PREMIS, METS, Dublin Core y BagIt dan forma técnica y concreta a la información de preservación que el modelo OAIS describe de forma conceptual, y a las acciones de integridad y preservación que las Semanas 10 y 11 ya te enseñaron a valorar.";

// ---------------------------------------------------------------------------
// 6.1. Introducción a los metadatos de preservación
// ---------------------------------------------------------------------------

export const metadataIntro =
  "Un metadato es información que describe, explica o documenta otra información — en este caso, un documento o expediente digital. Un documento digital, por sí solo, no es suficiente: sin metadatos, puede volverse imposible saber quién lo produjo, cuándo, con qué relación con otros documentos, o si se mantiene igual a como fue recibido.";

export const metadataContentContextDistinction =
  "Conviene distinguir tres elementos: el contenido digital (la secuencia de bits del archivo propiamente dicho), los metadatos (la información que describe ese contenido) y el contexto documental (las relaciones del documento con el trámite, el expediente y la institución que lo produjo). Conservar solo el contenido, sin metadatos ni contexto, equivale a conservar una pieza sin instrucciones de uso.";

export const metadataTypes: MetadataType[] = [
  {
    id: "descriptivos",
    label: "Metadatos descriptivos",
    description: "Identifican y describen el recurso para facilitar su búsqueda y recuperación: título, autor, fecha, tema.",
    example: "El título y la fecha de un informe técnico, que permiten encontrarlo en un buscador institucional.",
  },
  {
    id: "estructurales",
    label: "Metadatos estructurales",
    description: "Describen las relaciones internas y la organización de un objeto digital complejo compuesto por varias partes.",
    example: "El orden en que se relacionan un informe principal, sus anexos y una resolución dentro de un mismo expediente.",
  },
  {
    id: "tecnicos",
    label: "Metadatos técnicos",
    description: "Describen características técnicas del archivo: formato, tamaño, resolución, software utilizado para crearlo.",
    example: "El formato de archivo identificado (p. ej. PDF versión 1.7) y su tamaño en bytes.",
  },
  {
    id: "preservacion",
    label: "Metadatos de preservación",
    description: "Registran la información necesaria para sostener la preservación a largo plazo: procedencia, integridad, eventos y acciones realizadas sobre el objeto.",
    example: "El valor de referencia de integridad (hash) de un archivo y el registro de una migración de formato aplicada.",
  },
];

export const metadataOaisRelation =
  "Estos cuatro tipos de metadatos no son excluyentes entre sí y, en conjunto, dan contenido concreto a lo que la Semana 12 llamó 'información de preservación' dentro del AIP: los metadatos técnicos y de preservación son, precisamente, parte de lo que distingue a un AIP de una simple copia del archivo original.";

export const metadataRisk =
  "Conservar un documento digital sin metadatos suficientes genera un riesgo real: el archivo puede seguir existiendo como secuencia de bits, pero volverse ininterpretable, no localizable, o imposible de verificar — una pérdida funcional equivalente, en la práctica, a no conservarlo.";

export const metadataExpedienteExample =
  "Un expediente electrónico con una resolución, dos informes técnicos y tres anexos necesita, como mínimo: metadatos descriptivos (qué es, de qué trata, cuándo se generó), metadatos estructurales (cómo se relacionan la resolución, los informes y los anexos entre sí), metadatos técnicos (en qué formato está cada archivo) y metadatos de preservación (si se verificó su integridad y qué acciones se le han aplicado desde su ingreso).";

// ---------------------------------------------------------------------------
// 6.2. PREMIS 3.0
// ---------------------------------------------------------------------------

export const premisDefinition =
  "PREMIS (PREservation Metadata: Implementation Strategies) es un estándar de metadatos de preservación digital, mantenido por un comité editorial internacional y publicado como un diccionario de datos de referencia. No es un software que ejecute la preservación por sí solo: es un vocabulario y una estructura conceptual que distintas instituciones e implementaciones pueden adoptar para registrar la información de preservación de sus objetos digitales.";

export const premisEntities: PremisEntity[] = [
  {
    id: "objetos",
    label: "Objetos",
    englishName: "Objects",
    definition: "El objeto digital sobre el que se registra información de preservación: puede ser un archivo individual, una agrupación de archivos (representación) o una secuencia de bits dentro de un archivo.",
    managedInfo: "Identificador del objeto, características técnicas (formato, tamaño), valores de verificación de integridad y relaciones con otros objetos.",
    example: "Un expediente técnico digitalizado, registrado como objeto con su propio identificador dentro del entorno de preservación.",
  },
  {
    id: "eventos",
    label: "Eventos",
    englishName: "Events",
    definition: "Una acción documentada que ocurre sobre uno o más objetos a lo largo del tiempo: desde su ingreso hasta cualquier verificación o transformación posterior.",
    managedInfo: "Tipo de evento, fecha y hora, resultado de la acción, y los objetos y agentes vinculados a ella.",
    example: "El registro de una comprobación de integridad realizada sobre un expediente conservado, con su resultado documentado.",
  },
  {
    id: "agentes",
    label: "Agentes",
    englishName: "Agents",
    definition: "La persona, organización o sistema (incluido un software específico) responsable de ejecutar o autorizar un evento sobre un objeto.",
    managedInfo: "Identificación del agente, su tipo (persona, organización o sistema), y su rol en los eventos en los que participa.",
    example: "El sistema de verificación de integridad que ejecutó automáticamente una comprobación, o el funcionario que autorizó una migración de formato.",
  },
  {
    id: "derechos",
    label: "Derechos",
    englishName: "Rights",
    definition: "La información sobre los permisos, restricciones y obligaciones aplicables a un objeto: qué acciones están autorizadas, por quién y bajo qué condiciones.",
    managedInfo: "La base del derecho o restricción (norma, acuerdo o licencia), las acciones permitidas o restringidas, y su vigencia.",
    example: "Una restricción de acceso vigente sobre un expediente que contiene información reservada, que determina qué puede entregarse en un DIP (Semana 12).",
  },
];

export const premisEntitiesRelation =
  "Estas cuatro entidades se relacionan entre sí: un Evento ocurre sobre uno o más Objetos, es ejecutado o autorizado por uno o más Agentes, y puede estar sujeto a los Derechos aplicables a los objetos involucrados. PREMIS también define las Entidades Intelectuales (la obra o el expediente en sentido amplio, distinto de sus archivos técnicos), un concepto relacionado que este módulo no desarrolla en profundidad.";

export const premisEventExamples: PremisEventExample[] = [
  { id: "ingreso", label: "Ingreso", description: "Se registra la recepción de un SIP y su incorporación al entorno de preservación." },
  { id: "verificacion-integridad", label: "Comprobación de integridad", description: "Se calcula y compara un valor de verificación (hash) frente a una referencia anterior." },
  { id: "identificacion-formato", label: "Identificación de formato", description: "Se determina el formato real de un archivo, más allá de su extensión." },
  { id: "validacion", label: "Validación", description: "Se comprueba si un archivo cumple los criterios de conformidad de su formato o perfil." },
  { id: "normalizacion", label: "Normalización o migración", description: "Se transforma un archivo a otro formato, cuando la evaluación previa lo justifica." },
  { id: "verificacion-posterior", label: "Verificación posterior", description: "Se confirma el resultado de una acción de preservación ya aplicada." },
];

export const premisSoftwareDisclaimer =
  "PREMIS permite documentar información relevante sobre los objetos, los eventos, los agentes y los derechos involucrados en la preservación. No es, por sí solo, un software que ejecute automáticamente ninguna acción de preservación: cada institución debe implementar los procedimientos y las herramientas que generan esa información, y PREMIS únicamente ofrece la estructura para registrarla de forma coherente.";

// ---------------------------------------------------------------------------
// 6.3. METS
// ---------------------------------------------------------------------------

export const metsDefinition =
  "METS (Metadata Encoding and Transmission Standard) es un esquema, expresado en XML, para estructurar y describir objetos digitales complejos — aquellos compuestos por varias partes relacionadas entre sí, como un expediente con múltiples documentos y anexos.";

export const metsSections: MetsSection[] = [
  { id: "metsHdr", code: "metsHdr", label: "Encabezado METS", description: "Metadatos sobre el propio documento METS: quién lo creó y cuándo, no sobre el objeto digital que describe.", example: "Registra que el área de archivo generó este documento METS el día de la transferencia." },
  { id: "dmdSec", code: "dmdSec", label: "Sección de metadatos descriptivos", description: "Contiene o enlaza la información descriptiva del objeto (por ejemplo, expresada en Dublin Core).", example: "El título, la fecha y la unidad productora del expediente completo." },
  { id: "amdSec", code: "amdSec", label: "Sección de metadatos administrativos", description: "Contiene o enlaza información técnica, de derechos, de procedencia y de preservación sobre el objeto y sus archivos.", example: "El formato técnico de cada archivo y el registro de preservación asociado (p. ej., expresado en PREMIS)." },
  { id: "fileSec", code: "fileSec", label: "Sección de inventario de archivos", description: "Enumera los archivos digitales que componen el objeto, agrupados según corresponda.", example: "La lista del informe principal, los tres anexos y la resolución, cada uno como un archivo individual." },
  { id: "structMap", code: "structMap", label: "Mapa estructural", description: "Sección obligatoria que organiza jerárquicamente los archivos listados en fileSec, representando la estructura lógica del objeto.", example: "Una estructura donde el expediente agrupa, en orden, el informe principal, sus tres anexos y la resolución." },
];

export const metsAmdSecNote =
  "La sección amdSec puede, a su vez, dividirse en subsecciones internas (información técnica, de derechos, de procedencia y de preservación), pero este módulo no profundiza en el detalle de cada una: basta con reconocer que amdSec es donde vive la información administrativa y de preservación del objeto.";

export const metsExample =
  "Un expediente digital compuesto por un informe principal, tres anexos y una resolución puede describirse en METS así: dmdSec registra el título y la fecha del expediente; fileSec enumera los cinco archivos; y structMap representa que los tres anexos dependen jerárquicamente del informe principal, mientras que la resolución es un documento independiente dentro del mismo expediente.";

export const metsDisclaimer =
  "No todo repositorio digital utiliza necesariamente METS: es un estándar ampliamente adoptado para estructurar objetos complejos, pero su uso no es universal ni obligatorio, y su sola adopción no garantiza, por sí sola, la preservación del contenido que describe.";

// ---------------------------------------------------------------------------
// 6.4. Dublin Core
// ---------------------------------------------------------------------------

export const dublinCoreDefinition =
  "El Dublin Core Metadata Element Set es un esquema de metadatos descriptivos, compuesto por un conjunto reducido de elementos genéricos, diseñado para describir recursos digitales de forma simple e interoperable entre instituciones distintas.";

export const dublinCoreElements: DublinCoreElement[] = [
  { id: "title", code: "title", label: "Título", purpose: "Nombre por el que se conoce el recurso.", example: "Informe de inspección de infraestructura" },
  { id: "creator", code: "creator", label: "Creador", purpose: "Responsable principal del contenido del recurso.", example: "Unidad responsable de la inspección" },
  { id: "subject", code: "subject", label: "Materia", purpose: "Tema o palabras clave que describen el contenido.", example: "Infraestructura vial, inspección técnica" },
  { id: "description", code: "description", label: "Descripción", purpose: "Resumen del contenido del recurso.", example: "Informe que documenta los hallazgos de una inspección realizada en campo" },
  { id: "publisher", code: "publisher", label: "Editor", purpose: "Entidad responsable de hacer disponible el recurso.", example: "La entidad pública que emite el informe" },
  { id: "date", code: "date", label: "Fecha", purpose: "Fecha asociada a un evento del ciclo de vida del recurso.", example: "Fecha de creación documentada del informe" },
  { id: "type", code: "type", label: "Tipo", purpose: "Naturaleza o género del contenido del recurso.", example: "Informe técnico" },
  { id: "format", code: "format", label: "Formato", purpose: "Formato digital identificado del archivo.", example: "El formato digital identificado del archivo, según la identificación técnica realizada" },
  { id: "identifier", code: "identifier", label: "Identificador", purpose: "Referencia inequívoca al recurso dentro de un contexto dado.", example: "El código institucional del documento" },
  { id: "language", code: "language", label: "Idioma", purpose: "Idioma del contenido intelectual del recurso.", example: "Español" },
  { id: "rights", code: "rights", label: "Derechos", purpose: "Información sobre los derechos aplicables al recurso.", example: "Las condiciones de acceso o uso aplicables, según corresponda" },
];

export const dublinCoreExampleDisclaimer =
  "Los valores de ejemplo de la tabla son didácticos: la información real de un documento debe obtenerse siempre de las fuentes institucionales correspondientes, no asumirse ni inventarse.";

export const dublinCoreVsPremis =
  "Dublin Core y PREMIS no son estándares intercambiables: Dublin Core ayuda a describir un recurso para facilitar su búsqueda (qué es, de qué trata, quién lo produjo), mientras que PREMIS se orienta a registrar la información de preservación (qué eventos se le aplicaron, qué agentes intervinieron, qué integridad se verificó). Un mismo objeto digital puede —y suele— necesitar ambos tipos de metadatos, cada uno con su propósito distinto.";

// ---------------------------------------------------------------------------
// 6.5. Relación entre PREMIS, METS y Dublin Core
// ---------------------------------------------------------------------------

export const standardsComparisonRows = [
  { criterion: "Problema que resuelve", values: ["Registrar información de preservación (eventos, agentes, integridad, derechos)", "Estructurar y describir objetos digitales complejos de varias partes", "Describir un recurso digital de forma simple para facilitar su búsqueda"] },
  { criterion: "Tipo de información", values: ["Metadatos de preservación", "Metadatos estructurales (y un contenedor para otros tipos)", "Metadatos descriptivos"] },
  { criterion: "Ejemplo de uso", values: ["Registrar una comprobación de integridad sobre un expediente conservado", "Representar la relación entre un informe principal y sus anexos", "Describir el título, la fecha y el tema de un informe"] },
  { criterion: "Relación con el repositorio", values: ["Puede incorporarse dentro de la sección administrativa (amdSec) de un documento METS", "Puede enlazar o contener información descrita con Dublin Core, y referenciar información de preservación en PREMIS", "Puede incorporarse dentro de la sección descriptiva (dmdSec) de un documento METS"] },
  { criterion: "Limitación", values: ["No estructura por sí solo objetos complejos ni describe el recurso para su búsqueda", "No define, por sí solo, qué información de preservación debe registrarse", "No registra información de preservación ni estructura objetos complejos"] },
];

export const standardsComplementarity =
  "PREMIS, METS y Dublin Core pueden complementarse dentro de una misma solución de preservación: un expediente digital puede describirse con Dublin Core, estructurarse con METS, y llevar su información de preservación registrada con PREMIS (frecuentemente incorporada dentro de la sección amdSec del propio documento METS). Esta es una arquitectura didáctica posible, no una obligación universal: una institución puede adoptar uno, varios o ninguno de estos estándares específicos, según su propio diseño.";

// ---------------------------------------------------------------------------
// 6.6. BagIt
// ---------------------------------------------------------------------------

export const bagitDefinition =
  "BagIt es una convención de empaquetado: una forma estandarizada de organizar un conjunto de archivos digitales en una carpeta ('bag') junto con la información necesaria para transferirlos y comprobar que lleguen completos y sin alteraciones.";

export const bagitComponents: BagitComponent[] = [
  { id: "bagit-txt", code: "bagit.txt", label: "Declaración de versión", description: "Archivo que declara la versión de BagIt utilizada y la codificación de caracteres del paquete." },
  { id: "data", code: "data/", label: "Directorio de contenido", description: "Carpeta que contiene los archivos de contenido (el 'payload') que se desea transferir o conservar." },
  { id: "manifest", code: "manifest-<algoritmo>.txt", label: "Manifiesto de contenido", description: "Lista los archivos de la carpeta data/ junto con su valor de verificación (p. ej. sha256), para comprobar que el contenido coincide con lo registrado." },
  { id: "tagmanifest", code: "tagmanifest-<algoritmo>.txt", label: "Manifiesto de etiquetas", description: "Lista los archivos de descripción del propio paquete (como bagit.txt y el manifiesto) junto con su valor de verificación, cuando corresponde." },
  { id: "bag-info", code: "bag-info.txt", label: "Información del paquete", description: "Archivo opcional con metadatos descriptivos sobre el paquete (p. ej., quién lo preparó y cuándo)." },
];

export const bagitExample =
  "Un paquete BagIt que transfiere los documentos de un expediente contendría: la carpeta data/ con los archivos del informe, los anexos y la resolución; un manifest-sha256.txt que lista el valor de verificación de cada archivo; bagit.txt declarando la versión utilizada; y, opcionalmente, bag-info.txt con información sobre quién preparó la transferencia.";

export const bagitVerificationNote =
  "El manifiesto permite comprobar si el contenido recibido coincide con el valor registrado al momento de preparar el paquete — el mismo principio de verificación de integridad estudiado en la Semana 10. Una coincidencia confirma que el contenido no cambió durante la transferencia; no demuestra, por sí sola, la autenticidad histórica del documento, que el contenido sea verdadero, ni que el paquete cumpla automáticamente todas las necesidades de preservación.";

export const bagitScopeDisclaimer =
  "BagIt no debe presentarse como sustituto universal de OAIS, PREMIS, METS o Dublin Core: resuelve específicamente el empaquetado y la transferencia verificable de contenidos, no la descripción, la estructuración ni el registro de eventos de preservación — funciones que corresponden a los otros estándares revisados esta semana.";

// ---------------------------------------------------------------------------
// 6.7. Identificación de formatos digitales
// ---------------------------------------------------------------------------

export const formatIdentificationDefinition =
  "Identificar un formato digital significa determinar, con un procedimiento o herramienta adecuados, qué formato tiene realmente un archivo — a diferencia de asumirlo únicamente por su extensión o por cómo se ve al abrirlo.";

export const formatIdentificationDistinctions = [
  { id: "extension", label: "Extensión del archivo", description: "El sufijo del nombre del archivo (p. ej. \".pdf\"), que es solo una convención y puede no corresponder al contenido real." },
  { id: "formato-real", label: "Tipo de formato real", description: "El formato que el contenido del archivo efectivamente tiene, verificable mediante su estructura interna (p. ej. su firma o 'magic number')." },
  { id: "informacion-tecnica", label: "Información técnica disponible", description: "Los datos técnicos adicionales (versión, códecs, propiedades) que complementan la identificación básica del formato." },
];

export const formatIdentificationCase: FormatScenario = {
  id: "caso-extension-incorrecta",
  label: "Caso simulado de extensión incorrecta",
  description: "Un archivo nombrado \"documento.pdf\" se recibe en una transferencia. Una identificación técnica (simulada para este ejercicio) determina que su contenido real corresponde a un formato de imagen, no a un PDF: alguien renombró el archivo sin convertir su contenido.",
};

export const formatIdentificationDisclaimer =
  "Los resultados de identificación de formato mostrados en este módulo son simulados con fines didácticos: no se ejecutó ninguna herramienta real de identificación sobre un archivo. En la práctica, instituciones de archivo y bibliotecas suelen apoyarse en bases de registros de formatos y herramientas especializadas para esta tarea.";

// ---------------------------------------------------------------------------
// 6.8. Validación de formatos
// ---------------------------------------------------------------------------

export const formatValidationDefinition =
  "Validar un formato significa comprobar si un archivo, además de pertenecer a un formato identificado, cumple los criterios o requisitos de conformidad definidos para ese formato o para un perfil específico dentro de él.";

export const formatValidationVsIdentification =
  "Identificar responde '¿qué formato tiene este archivo?'. Validar responde una pregunta distinta: '¿este archivo, siendo del formato que dice ser, cumple realmente las reglas de ese formato o de un perfil determinado?'. Un archivo puede identificarse correctamente como PDF y, aun así, no ser válido conforme a un perfil específico como PDF/A.";

export const formatValidationCase: FormatScenario = {
  id: "caso-pdf-preservacion",
  label: "Caso simulado: PDF destinado a preservación",
  description: "Un documento PDF se identifica correctamente como PDF. Sin embargo, una validación (simulada) frente al perfil PDF/A, orientado a la preservación a largo plazo, encuentra elementos no conformes con ese perfil específico — el archivo sigue siendo un PDF válido en general, pero no necesariamente conforme al perfil PDF/A evaluado.",
};

export const formatValidationAbsoluteClaimWarning =
  "Identificar un archivo como PDF no implica automáticamente que sea PDF/A, que esté completo, que sea accesible, ni que resulte conforme con ningún perfil de preservación específico. La validación frente a un perfil determinado es una comprobación adicional y distinta de la identificación.";

// ---------------------------------------------------------------------------
// 6.9. Normalización de formatos
// ---------------------------------------------------------------------------

export const normalizationDefinition =
  "Normalizar un formato, en el contexto de la preservación digital, significa transformar un archivo desde su formato original hacia otro formato —generalmente más estandarizado, documentado o sostenible— con el objetivo de facilitar su conservación y acceso futuro.";

export const normalizationSteps = [
  { id: "objetivo", label: "Objetivo", description: "Definir con claridad qué se busca lograr con la normalización (p. ej., reducir el riesgo de obsolescencia de un formato propietario)." },
  { id: "riesgo", label: "Evaluación de riesgos", description: "Evaluar si el formato original realmente presenta un riesgo que justifique la transformación." },
  { id: "evaluacion-previa", label: "Evaluación previa", description: "Comprobar qué información podría perderse o alterarse al transformar el archivo." },
  { id: "conservacion-original", label: "Conservación del original", description: "Mantener el archivo original junto con la versión normalizada, salvo que exista una política institucional que indique lo contrario." },
  { id: "comprobacion-resultado", label: "Comprobación del resultado", description: "Verificar que el archivo transformado conserve el contenido esperado y cumpla el objetivo planteado." },
  { id: "documentacion", label: "Documentación de la decisión", description: "Registrar qué se transformó, por qué, cuándo y mediante qué procedimiento — como un evento de preservación." },
];

export const normalizationCase =
  "Una institución identifica que un conjunto de informes técnicos está almacenado en un formato de procesador de texto propietario y antiguo, con soporte decreciente. Antes de normalizarlos a un formato más estandarizado, el equipo responsable debe evaluar el riesgo real de obsolescencia, comprobar qué elementos del documento (formato, maquetación, metadatos incrustados) podrían verse afectados por la conversión, conservar los archivos originales, y documentar la decisión y el procedimiento aplicado una vez ejecutada la transformación.";

export const normalizationWarning =
  "La normalización no debe aplicarse de forma automática ni uniforme a todos los archivos de un repositorio: debe responder a una estrategia institucional, a una evaluación técnica previa y a una justificación documentada — el mismo criterio de planificación de la preservación estudiado en la Semana 11.";

// ---------------------------------------------------------------------------
// 6.10. Eventos de preservación
// ---------------------------------------------------------------------------

export const preservationEventDefinition =
  "Un evento de preservación es el registro documentado de una acción realizada sobre un objeto digital a lo largo de su conservación. Ese registro, y no el archivo en sí, es lo que permite reconstruir qué le ha ocurrido a un objeto desde su ingreso.";

export const preservationEvents: PreservationEvent[] = [
  { id: "ingreso", label: "Ingreso", description: "Recepción e incorporación de un objeto al entorno de preservación.", premisField: "Tipo de evento: ingestión" },
  { id: "verificacion-integridad", label: "Verificación de integridad", description: "Cálculo y comparación de un valor de verificación frente a una referencia previa.", premisField: "Tipo de evento: comprobación de fijeza (fixity check)" },
  { id: "identificacion-formato", label: "Identificación de formato", description: "Determinación del formato real de un archivo.", premisField: "Tipo de evento: identificación de formato" },
  { id: "validacion", label: "Validación", description: "Comprobación de conformidad frente a las reglas de un formato o perfil.", premisField: "Tipo de evento: validación" },
  { id: "migracion", label: "Migración o normalización", description: "Transformación de un archivo a otro formato, documentada y justificada.", premisField: "Tipo de evento: migración" },
  { id: "verificacion-posterior", label: "Verificación posterior", description: "Confirmación del resultado de una acción de preservación ya aplicada.", premisField: "Tipo de evento: verificación de resultado" },
];

export const preservationEventFields =
  "Según el esquema que se implemente (frecuentemente basado en PREMIS), un registro de evento puede incluir: el tipo de acción realizada, la fecha y hora en que ocurrió, el resultado obtenido, el objeto u objetos afectados, y el agente responsable de ejecutarla o autorizarla.";

export const preservationEventVsFile =
  "Un evento de preservación no debe confundirse con el archivo digital al que se aplica: el archivo es el objeto conservado; el evento es el registro de lo que se hizo sobre ese objeto. Un mismo archivo puede tener, a lo largo del tiempo, varios eventos registrados — ingreso, una o más verificaciones de integridad, y eventualmente una migración.";

// ---------------------------------------------------------------------------
// 6.11-6.12. Caso práctico integrador y conexión con la práctica archivística
// ---------------------------------------------------------------------------

export const caseDisclaimer = "CASO ACADÉMICO SIMULADO — Municipalidad Distrital de San Gabriel";

export const caseNarrative = [
  "La Municipalidad Distrital de San Gabriel (caso académico simulado) continúa preparando la transferencia de expedientes electrónicos de obras públicas hacia su entorno de preservación digital, ya organizado conceptualmente según el modelo OAIS (Semana 12).",
  "El equipo responsable debe ahora resolver un problema más concreto: cada expediente contiene varios archivos relacionados (un informe principal, anexos y una resolución), algunos en formatos antiguos y con metadatos incompletos, y no existe todavía un procedimiento para describirlos, estructurarlos, empaquetarlos para su transferencia, ni para registrar las acciones de preservación que se les aplique.",
];

export const caseProblems = [
  "Expedientes con varios archivos relacionados, sin una forma estandarizada de representar esa relación",
  "Metadatos descriptivos incompletos en parte de los documentos",
  "Archivos en formatos antiguos, algunos identificados solo por su extensión",
  "Ausencia de un procedimiento para empaquetar y verificar los archivos antes de transferirlos",
  "Necesidad de registrar cualquier acción de preservación aplicada, de forma trazable",
];

export const caseStandardsApplication =
  "Dublin Core puede usarse para completar la descripción básica de cada expediente (título, fecha, unidad productora); METS puede representar la relación entre el informe principal, los anexos y la resolución; BagIt puede emplearse para empaquetar los archivos antes de transferirlos, con un manifiesto que permita verificar que lleguen completos; y PREMIS puede registrar los eventos de preservación —identificación de formato, validación, y cualquier normalización— aplicados desde el ingreso.";

export const caseFormatSituation =
  "Al revisar los archivos, el equipo encuentra uno nombrado 'informe_final.pdf' cuyo contenido, al identificarlo técnicamente (de forma simulada para este ejercicio), no corresponde realmente a un PDF. Antes de aceptarlo como parte del SIP, el equipo debe identificar su formato real, y solo después evaluar si requiere alguna acción de normalización — nunca asumir que la extensión del archivo es suficiente.";

export const caseBagitProposal: FlowStep[] = [
  { id: "agrupar", label: "Agrupar los archivos del expediente en la carpeta data/" },
  { id: "manifiesto", label: "Generar el manifiesto con el valor de verificación de cada archivo" },
  { id: "declarar-version", label: "Declarar la versión de BagIt utilizada" },
  { id: "transferir", label: "Transferir el paquete completo al entorno de preservación" },
  { id: "verificar-llegada", label: "Verificar, al recibirlo, que el contenido coincide con el manifiesto" },
];

export const caseQuestions: CaseQuestion[] = [
  { id: "q1", prompt: "¿Qué metadatos descriptivos, estructurales, técnicos y de preservación debería completar el equipo antes de transferir estos expedientes?" },
  { id: "q2", prompt: "¿Por qué no basta con confiar en la extensión \".pdf\" del archivo mencionado en el caso?" },
  { id: "q3", prompt: "¿Qué estándar (PREMIS, METS, Dublin Core o BagIt) usarías para cada una de las necesidades identificadas, y por qué?" },
  { id: "q4", prompt: "¿Qué debería registrarse como evento de preservación si, tras la identificación, se decide normalizar el archivo?" },
];

export const caseGuidance =
  "Orientación para retroalimentación docente (no se muestra automáticamente al estudiante): la relación entre el informe principal, los anexos y la resolución debe representarse estructuralmente (p. ej. con METS), no asumirse implícita; la extensión \".pdf\" no sustituye una identificación técnica real del formato; la normalización solo debe decidirse tras evaluar el riesgo y el impacto, nunca de forma automática; y cualquier acción aplicada (identificación, validación, normalización) debe registrarse como un evento trazable, con su tipo, fecha, resultado y agente responsable.";

export const practiceConnectionRoles = [
  { id: "unidad-productora", label: "Unidad productora", description: "Genera los documentos y aporta la información descriptiva disponible al momento de la transferencia." },
  { id: "responsable-gestion", label: "Responsable de gestión documental", description: "Verifica que la documentación cumpla los procedimientos institucionales antes de proponerla para transferencia." },
  { id: "administrador-repositorio", label: "Administrador del repositorio", description: "Gestiona la infraestructura donde se aplican los procedimientos de empaquetado, descripción y preservación." },
  { id: "responsable-tecnico", label: "Responsable técnico", description: "Ejecuta o supervisa la identificación, validación y normalización de formatos." },
  { id: "equipo-preservacion", label: "Equipo de preservación", description: "Registra los eventos de preservación y sostiene las decisiones documentadas en el tiempo." },
  { id: "usuario-autorizado", label: "Usuario autorizado", description: "Accede a la información conservada respetando las restricciones de derechos vigentes." },
];

export const practiceConnectionDisclaimer =
  "Los roles concretos dependen de la organización y sus procedimientos: una misma persona puede cumplir más de un rol, y una institución pequeña puede no distinguir todos estos roles de forma separada.";

// ---------------------------------------------------------------------------
// Referencias
// ---------------------------------------------------------------------------

export const referencesIntro =
  "El sílabo del curso señala estos estándares por su nombre y propósito. Verifica siempre en las fuentes oficiales la versión y el estado vigentes antes de citarlos en un documento formal: los estándares se revisan periódicamente y este módulo no sustituye la consulta directa de la fuente.";

export const referenceItems: ReferenceItem[] = [
  {
    id: "premis",
    label: "PREMIS Editorial Committee — PREMIS Data Dictionary for Preservation Metadata",
    url: "https://www.loc.gov/standards/premis/",
    note: "Sitio oficial del estándar PREMIS, mantenido con el apoyo de la Library of Congress. Fuente primaria para el diccionario de datos completo.",
  },
  {
    id: "mets",
    label: "METS — Metadata Encoding and Transmission Standard",
    url: "https://www.loc.gov/standards/mets/",
    note: "Sitio oficial del estándar METS, con su documentación técnica y ejemplos de esquema XML.",
  },
  {
    id: "dublincore",
    label: "DCMI — Dublin Core Metadata Initiative",
    url: "https://www.dublincore.org/specifications/dublin-core/dces/",
    note: "Especificación oficial del Dublin Core Metadata Element Set.",
  },
  {
    id: "bagit",
    label: "IETF RFC 8493 — The BagIt File Packaging Format",
    url: "https://www.rfc-editor.org/rfc/rfc8493",
    note: "Especificación formal de BagIt como estándar de empaquetado (RFC del IETF).",
  },
];

// ---------------------------------------------------------------------------
// Conexiones
// ---------------------------------------------------------------------------

export const connectionPrevious: WeekConnectionStep[] = [
  { id: "oais", label: "Semana 12: Modelo OAIS" },
  { id: "entidades-paquetes", label: "Entidades y paquetes SIP/AIP/DIP" },
  { id: "estandares", label: "Semana 13: Estándares de preservación" },
  { id: "premis-mets-dc-bagit", label: "PREMIS, METS, Dublin Core, BagIt" },
];

export const connectionPreviousClosing =
  "La Semana 12 describió, de forma conceptual, qué funciones y paquetes de información componen un entorno OAIS; esta semana da forma técnica concreta a una parte específica de esa información: los metadatos de preservación (PREMIS), la estructura de objetos complejos (METS), la descripción de recursos (Dublin Core) y el empaquetado verificable para su transferencia (BagIt).";

export const connectionNext: WeekConnectionStep[] = [
  { id: "estandares", label: "Estándares de preservación" },
  { id: "repositorios", label: "Repositorios digitales confiables" },
  { id: "iso-16363", label: "ISO 16363:2025" },
];

export const connectionNextClosing =
  "La Semana 14 estudia los repositorios digitales confiables y su auditoría y certificación (ISO 16363:2025) — un repositorio confiable es, entre otras cosas, aquel que aplica de forma sostenida y verificable estándares como los revisados esta semana.";

export const projectConnectionItems = [
  "Metadatos descriptivos, estructurales, técnicos y de preservación aplicables al caso del proyecto",
  "Estándares pertinentes (PREMIS, METS, Dublin Core, BagIt) para describir y empaquetar los objetos digitales del caso",
  "Procedimiento propuesto de identificación, validación y normalización de formatos",
];

// ---------------------------------------------------------------------------
// Resumen
// ---------------------------------------------------------------------------

export const summaryPoints: SummaryPoint[] = [
  { id: "metadatos", label: "Metadatos", icon: "Tags" },
  { id: "premis", label: "PREMIS", icon: "Fingerprint" },
  { id: "mets", label: "METS", icon: "FolderTree" },
  { id: "dublincore", label: "Dublin Core", icon: "FileText" },
  { id: "bagit", label: "BagIt", icon: "FolderKanban" },
  { id: "identificacion", label: "Identificación", icon: "SearchCheck" },
  { id: "validacion", label: "Validación", icon: "ShieldCheck" },
  { id: "normalizacion", label: "Normalización", icon: "RefreshCw" },
];

export const closingMessages = [
  "PREMIS, METS, Dublin Core y BagIt son estándares complementarios, no intercambiables: cada uno resuelve un problema distinto de la preservación digital.",
  "Identificar, validar y normalizar un formato son tres acciones distintas, y ninguna debe asumirse automáticamente a partir de otra.",
];

export const summaryChecklist = [
  "Puedo diferenciar metadatos descriptivos, estructurales, técnicos y de preservación.",
  "Puedo explicar qué registran las entidades de PREMIS: objetos, eventos, agentes y derechos.",
  "Puedo explicar para qué sirve METS y reconocer sus secciones principales.",
  "Puedo usar Dublin Core para describir un recurso digital.",
  "Puedo explicar qué resuelve BagIt y qué no resuelve por sí solo.",
  "Puedo distinguir identificación, validación y normalización de formatos.",
  "Puedo explicar qué información debe registrar un evento de preservación.",
];

export const practiceReminder =
  "Para la práctica calificada, recuerda: ningún estándar de esta semana garantiza por sí solo la preservación; cada uno resuelve un problema específico; identificar no es lo mismo que validar, y validar no es lo mismo que normalizar; y todo evento de preservación debe quedar documentado, no asumido.";

export const nextWeekConnection = {
  nextWeekNumber: 14,
  nextTitle: "Repositorios digitales confiables",
  text: "ISO 16363:2025: auditoría, certificación, arquitectura y transferencia desde el SGD hacia un repositorio que sostenga, de forma verificable, estándares como los revisados esta semana.",
};
