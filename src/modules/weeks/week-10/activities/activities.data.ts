/** Content for Week 10's 10 formative activities ("Actividades"). */

export const activity1Case =
  "Un documento electrónico permanece almacenado durante dos años sin que nadie lo modifique intencionalmente. Al revisarlo, sigue siendo legible y está disponible.";

export const activity1Statements = [
  { id: "a1-1", label: "El documento mantiene integridad si sigue siendo exactamente igual al estado de referencia establecido", icon: "ShieldCheck", belongs: true },
  { id: "a1-2", label: "El documento mantiene integridad simplemente porque sigue siendo legible", icon: "FileSearch", belongs: false },
  { id: "a1-3", label: "Verificar la integridad requiere comparar contra un valor de referencia, no solo mirar el archivo", icon: "SearchCheck", belongs: true },
  { id: "a1-4", label: "Si el documento nunca se abrió, no hace falta verificar su integridad", icon: "FolderOpen", belongs: false },
];

export const activity2Case =
  "Un área de archivo necesita decidir qué mecanismo usar para sostener la verificación de integridad de sus expedientes electrónicos a lo largo de los años, y cuál usar solo para confirmar que una descarga no se dañó en el camino.";

export const activity2Options = [
  { id: "a2-hash", label: "Hash para integridad documental a largo plazo; checksum para verificar una transferencia puntual", correct: true },
  { id: "a2-checksum", label: "Checksum para todo, porque es más simple de calcular", correct: false },
  { id: "a2-iguales", label: "Da igual cuál usar, son exactamente lo mismo", correct: false },
];

export const activity2Feedback =
  "El hash está orientado a sostener procesos de verificación de integridad en el tiempo (fixity); el checksum es útil para confirmar que una transferencia puntual no introdujo errores, pero no sustituye una estrategia de integridad documental.";

export const activity3Statements = [
  { id: "a3-1", label: "Un cambio mínimo en el contenido de un documento produce un hash completamente distinto", icon: "Fingerprint", belongs: true },
  { id: "a3-2", label: "Dos documentos con contenido diferente deberían producir hashes distintos", icon: "GitCompareArrows", belongs: true },
  { id: "a3-3", label: "El hash de un documento depende del nombre del archivo, no de su contenido", icon: "FileX", belongs: false },
  { id: "a3-4", label: "Si el hash no cambia, es una señal de que el contenido tampoco cambió", icon: "ShieldCheck", belongs: true },
];

export const activity4Stages = ["Archivo", "Referencia", "Almacenamiento", "Verificación", "Comparación", "Resultado"];

export const activity4Feedback =
  "El proceso de fixity parte del archivo, establece una referencia (hash) al momento correcto, la conserva junto con el documento, y más adelante vuelve a calcular y comparar el valor para producir un resultado — sin ese orden, no hay nada confiable contra qué comparar.";

export const activity5Case =
  "Al verificar un expediente, el sistema detecta que el hash actual del documento no coincide con el hash de referencia registrado hace seis meses.";

export const activity5Statements = [
  { id: "a5-1", label: "Esto confirma que el documento fue manipulado de forma fraudulenta", icon: "ShieldAlert", belongs: false },
  { id: "a5-2", label: "Esto indica que el contenido cambió respecto al estado de referencia, por una causa aún no determinada", icon: "SearchCheck", belongs: true },
  { id: "a5-3", label: "Esto amerita iniciar una investigación: revisar versiones, trazabilidad y usuarios con acceso", icon: "FileSearch", belongs: true },
  { id: "a5-4", label: "Esto se puede ignorar si el documento sigue siendo legible", icon: "FolderOpen", belongs: false },
];

export const activity6Causes = [
  { id: "a6-1", label: "Modificación autorizada y registrada", icon: "FileSignature", belongs: true },
  { id: "a6-2", label: "Conversión de formato realizada por el área de archivo", icon: "FileType", belongs: true },
  { id: "a6-3", label: "Sustitución del archivo por una versión no registrada", icon: "FileX", belongs: false },
  { id: "a6-4", label: "Corrupción de datos durante el almacenamiento", icon: "FileX", belongs: false },
];

export const activity6Instruction = "Selecciona las causas que, una vez confirmadas mediante investigación, resultarían benignas (no comprometen la integridad del proceso).";

export const activity7Case =
  "Un expediente nunca tuvo un valor de hash registrado al momento de su ingreso al sistema. Dos años después, alguien pregunta si el documento sigue siendo el mismo.";

export const activity7Options = [
  { id: "a7-1", label: "Ausencia de referencia", correct: true },
  { id: "a7-2", label: "Errores durante transferencia", correct: false },
  { id: "a7-3", label: "Falta de verificaciones", correct: false },
];

export const activity7Feedback =
  "Sin un valor de referencia establecido desde el inicio, no existe nada confiable contra qué comparar el estado actual del documento — ese es precisamente el riesgo de 'ausencia de referencia', distinto de no haber verificado periódicamente algo que sí tenía referencia.";

export const activity8Pairs = [
  { risk: "Modificación no autorizada", control: "Control de acceso", icon: "Lock" },
  { risk: "Pérdida de referencia", control: "Establecer valores de hash desde el ingreso", icon: "Fingerprint" },
  { risk: "Falta de verificación periódica", control: "Controles de integridad programados", icon: "SearchCheck" },
];

export const activity8Instruction = "Para cada riesgo, selecciona el control más directamente relacionado.";
export const activity8ControlOptions = [
  "Control de acceso",
  "Establecer valores de hash desde el ingreso",
  "Controles de integridad programados",
  "Capacitación del personal en atención al público",
];

export const activity9Case =
  "Durante una auditoría se detecta una diferencia de hash en un documento. El registro de trazabilidad de la Semana 7 muestra que un usuario autorizado editó el documento la semana pasada, con un evento registrado de 'corrección de errata'.";

export const activity9Question = "¿Qué papel cumple aquí el registro de trazabilidad?";

export const activity9Options = [
  { id: "a9-1", label: "Permite relacionar la diferencia de hash con un evento concreto, autorizado y fechado, explicando la causa", correct: true },
  { id: "a9-2", label: "No tiene relación con la verificación de integridad", correct: false },
  { id: "a9-3", label: "Sustituye la necesidad de calcular el hash", correct: false },
];

export const activity9Feedback =
  "La trazabilidad y la auditoría (Semana 7) son las que permiten explicar una diferencia de hash detectada técnicamente: sin ese registro, la diferencia quedaría sin causa determinada.";
