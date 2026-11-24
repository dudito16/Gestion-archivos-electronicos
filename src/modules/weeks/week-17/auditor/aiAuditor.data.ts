/**
 * Semana 17 · Fase 4 — "Auditor técnico de la propuesta de preservación digital con IA".
 * The AI acts only as a preliminary critical reviewer; the team verifies, decides and justifies.
 */

export const AUDITOR_STORAGE_KEY = "gae2.week17.auditorIA";

export const auditorIntro = [
  "Una disposición de una directiva institucional no debe limitarse a expresar una intención. Debe responder a un problema identificado, establecer una acción aplicable, definir responsabilidades y permitir verificar su cumplimiento.",
  "En esta actividad utilizarás una herramienta de inteligencia artificial como auditor técnico preliminar. La IA analizará tu propuesta y te ayudará a identificar posibles vacíos, inconsistencias y problemas de aplicabilidad.",
  "La decisión final corresponde al equipo. Todas las observaciones deberán contrastarse con la investigación, el diagnóstico institucional y las fuentes técnicas verificadas.",
];

export const auditorFlow = [
  { id: "borrador", label: "Borrador de disposición" },
  { id: "revision", label: "Revisión con IA" },
  { id: "observaciones", label: "Observaciones" },
  { id: "verificacion", label: "Verificación de fuentes" },
  { id: "decision", label: "Decisión del equipo" },
  { id: "mejora", label: "Mejora de la disposición" },
];

export const inputsToProvide = [
  { id: "contexto", label: "Contexto institucional relevante", detail: "Solo lo necesario para entender la disposición." },
  { id: "problema", label: "Problema identificado en el diagnóstico", detail: "El que la disposición busca atender." },
  { id: "riesgo", label: "Riesgo relacionado", detail: "Cuando corresponda, tomado de su matriz de riesgos." },
  { id: "borrador", label: "Borrador de la disposición", detail: "Una sola disposición por consulta." },
  { id: "referentes", label: "Referentes técnicos verificados", detail: "Si corresponde: solo los que el equipo consultó." },
];

export const inputsExample = {
  title: "Ejemplo: revisar la disposición sobre verificación de integridad",
  items: [
    "El problema relacionado con la integridad identificado en su diagnóstico.",
    "El riesgo correspondiente de su matriz.",
    "El texto de su disposición.",
    "Los criterios técnicos que han investigado (por ejemplo, lo trabajado sobre hash y fixity).",
  ],
};

export const auditorPrompt = `Actúa como un revisor técnico especializado en gestión documental, archivos digitales y preservación digital.

Voy a proporcionarte información limitada sobre una institución, un problema identificado en su diagnóstico, un riesgo relacionado y el borrador de una disposición de una propuesta de directiva institucional de preservación digital.

Tu función es realizar una revisión crítica preliminar. No debes redactar toda la directiva, sustituir la investigación del equipo ni inventar información institucional.

Analiza la disposición considerando los siguientes criterios:

1. Coherencia con el problema institucional identificado.
2. Correspondencia con el riesgo relacionado, cuando corresponda.
3. Claridad de la redacción.
4. Viabilidad de su aplicación en el contexto descrito.
5. Identificación de responsables, si la disposición requiere asignarlos.
6. Existencia de controles verificables.
7. Identificación de evidencias que permitan demostrar su cumplimiento.
8. Coherencia con los principios y objetivos de la preservación digital.
9. Correspondencia con los referentes técnicos que el equipo proporciona.
10. Identificación de posibles vacíos, ambigüedades, contradicciones o afirmaciones que requieran sustento.

Presenta el análisis en una tabla con las siguientes columnas:

- Criterio evaluado.
- Observación.
- Problema detectado.
- Riesgo o consecuencia que podría generar.
- Recomendación de mejora.
- Fuente o evidencia que debería verificarse.

Reglas:

- No inventes normas, estándares, citas, responsables, procedimientos ni características de la institución.
- No afirmes que una recomendación es normativa si no puedes demostrarlo mediante una fuente proporcionada o verificable.
- Diferencia claramente tus observaciones técnicas de los requisitos que realmente estén respaldados por fuentes.
- Si la información proporcionada es insuficiente, indícalo.
- No redactes automáticamente la disposición final.
- Tus recomendaciones deben ser razonables, aplicables y orientadas a mejorar la propuesta.

Al finalizar, formula cinco preguntas críticas que el equipo deberá responder para decidir si acepta, rechaza o modifica tus recomendaciones.

INFORMACIÓN PROPORCIONADA POR EL EQUIPO:

Contexto institucional relevante:
[Completar]

Problema identificado en el diagnóstico:
[Completar]

Riesgo relacionado:
[Completar, si corresponde]

Referentes técnicos verificados:
[Completar, si corresponde]

Borrador de la disposición:
[Completar]`;

export const interpretSteps = [
  { id: "leer", label: "Leer las observaciones", text: "Identificar los problemas que la IA ha señalado." },
  { id: "verificar", label: "Verificar", text: "Contrastar cada observación con el diagnóstico, la investigación, las normas, los estándares y las fuentes realmente consultadas." },
  { id: "decidir", label: "Decidir", text: "El equipo decide si acepta, rechaza o acepta parcialmente la recomendación." },
  { id: "justificar", label: "Justificar", text: "Explicar por qué se toma esa decisión." },
  { id: "mejorar", label: "Mejorar", text: "Modificar la disposición cuando corresponda y conservar evidencia de la decisión." },
];

export const aiCanBeWrong =
  "La IA puede equivocarse, interpretar incorrectamente el contexto, proponer controles que no sean viables o presentar recomendaciones sin suficiente sustento. No aceptes una observación únicamente porque la IA la formuló.";

export const decisionOptions = ["Aceptar", "Rechazar", "Aceptar parcialmente"] as const;
export type Decision = (typeof decisionOptions)[number];

export const evaluationFields = [
  { key: "observacion", label: "Observación de IA", howTo: "Resume la observación tal como la formuló la IA (no la reescribas a tu favor)." },
  { key: "decision", label: "Decisión del equipo", howTo: "Aceptar, rechazar o aceptar parcialmente." },
  { key: "justificacion", label: "Justificación", howTo: "Por qué el equipo tomó esa decisión, con relación al diagnóstico." },
  { key: "fuente", label: "Fuente verificada", howTo: "La fuente que el equipo consultó para confirmar o descartar la observación." },
  { key: "cambio", label: "Cambio realizado", howTo: "Qué se modificó en la disposición (o «ninguno», si se rechazó)." },
] as const;

export const didacticExample = {
  problema:
    "La institución no cuenta con un procedimiento documentado para verificar periódicamente la integridad de los documentos digitales almacenados.",
  borrador: "Los documentos digitales deberán conservarse adecuadamente.",
  fallas: [
    "No indica cómo se verifica la integridad.",
    "No indica quién ejecuta la actividad.",
    "No indica qué evidencia se genera.",
    "No indica qué ocurre ante una incidencia.",
  ],
  mejora:
    "El responsable designado por la institución establecerá y documentará las actividades de verificación de integridad de los documentos digitales bajo su ámbito de responsabilidad. Los resultados de la verificación deberán registrarse, incluyendo fecha, identificación de los documentos evaluados, resultado y, cuando corresponda, las incidencias detectadas y las acciones adoptadas.",
  nota: "Este ejemplo es únicamente orientador. Cada equipo debe adaptar sus disposiciones a los problemas, capacidades, responsabilidades y necesidades identificados en su investigación.",
};

export const privacyText = [
  "No ingreses a herramientas externas de IA documentos reservados, datos personales, credenciales, contraseñas, información institucional protegida ni expedientes confidenciales.",
  "Utiliza información simulada, anonimizada o autorizada.",
  "La responsabilidad de verificar las fuentes, evaluar las recomendaciones y tomar las decisiones técnicas corresponde al equipo.",
];

export const logReminderItems = [
  "Fecha de uso",
  "Herramienta utilizada",
  "Apartado revisado",
  "Prompt utilizado o descripción de la consulta",
  "Observaciones relevantes obtenidas",
  "Recomendaciones aceptadas",
  "Recomendaciones rechazadas",
  "Justificación de las decisiones",
  "Cambios realizados en la propuesta",
];
