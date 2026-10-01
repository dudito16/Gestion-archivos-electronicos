import type { Practice7Question } from "./practice7.types";

export const practice7Questions: Practice7Question[] = [
  // Pregunta 1 — Confidencialidad
  {
    id: 1,
    category: "Confidencialidad",
    kind: "selectJustify",
    scenario:
      "Un expediente electrónico contiene información personal de un vecino que solicitó un trámite ante la Gerencia de Administración.",
    prompt: "¿Qué perfiles deberían poder acceder a este expediente? Selecciona los correctos y justifica uno de ellos.",
    points: 1,
    options: [
      { id: "otra-area", label: "Personal de otra área, sin relación con el trámite" },
      { id: "archivista", label: "El archivista responsable de tramitar este expediente" },
      { id: "externo", label: "Un usuario externo sin vínculo con el trámite" },
      { id: "jefe-unidad", label: "El jefe de la unidad involucrada en el trámite" },
      { id: "temporal", label: "Personal temporal, sin autorización específica para este expediente" },
    ],
    correctIds: ["archivista", "jefe-unidad"],
    minSelected: 2,
    justifyPrompts: ["Elige uno de los perfiles que seleccionaste y explica por qué debería tener acceso."],
    justifyMinWords: 8,
    expectedSummary: "Solo el archivista responsable y el jefe de la unidad involucrada tienen una función que justifica el acceso; los demás perfiles no tienen relación con el trámite ni autorización específica.",
    feedbackByVerdict: {
      correct: "Correcto: el acceso responde al principio de necesidad de conocer — solo quien tiene una función concreta en el trámite debería acceder al expediente.",
      partial: "Tu selección va en la dirección correcta, pero revisa si incluiste algún perfil sin relación con el trámite, o si tu justificación necesita más desarrollo.",
      review: "El acceso a un expediente reservado debe limitarse a quienes tienen una función concreta en el trámite (el archivista responsable y el jefe de la unidad involucrada), no a cualquier persona autenticada en el sistema.",
    },
  },

  // Pregunta 2 — Integridad
  {
    id: 2,
    category: "Integridad",
    kind: "editFields",
    scenario:
      "El expediente EXP-2026-0341 fue firmado originalmente el 15/09/2026 por la Gerencia de Administración. Al revisar el sistema hoy, el campo 'Fecha del informe' aparece como 20/09/2026, sin que exista registro de quién realizó este cambio.",
    prompt: "Corrige el campo alterado a su valor original y explica el riesgo de que este tipo de cambio no quede registrado.",
    points: 1,
    fields: [
      { id: "fecha", label: "Fecha del informe", initialValue: "20/09/2026", keywordGroups: [["15/09/2026", "15 de septiembre"]] },
      { id: "responsable", label: "Responsable", initialValue: "Gerencia de Administración", keywordGroups: [["gerencia de administracion", "gerencia"]] },
    ],
    explanationPrompt: "¿Qué riesgo representa que este cambio no haya quedado registrado?",
    explanationMinWords: 8,
    expectedSummary: "La fecha del informe debe corregirse a 15/09/2026 (el responsable no cambió); el riesgo es que, sin registro del cambio, no puede saberse quién lo hizo ni cuándo, comprometiendo la integridad del expediente.",
    feedbackByVerdict: {
      correct: "Correcto: identificaste el campo alterado (la fecha) y reconoces que el problema de fondo es la ausencia de un registro que permita atribuir el cambio a alguien.",
      partial: "Vas en buen camino, pero revisa si corregiste la fecha al valor original y si tu explicación conecta el problema con la falta de registro del cambio.",
      review: "El campo alterado es la fecha del informe (debería ser 15/09/2026). El problema de integridad no es solo el cambio en sí, sino que ocurrió sin dejar registro de quién lo hizo ni cuándo.",
    },
  },

  // Pregunta 3 — Disponibilidad
  {
    id: 3,
    category: "Disponibilidad",
    kind: "compareChoice",
    scenario:
      "El servidor donde se almacena el sistema de gestión documental deja de responder. Una unidad necesita consultar, de forma urgente, un expediente para atender un trámite con plazo vencido.",
    prompt: "¿Qué opción refleja mejor una respuesta adecuada ante esta falla de disponibilidad?",
    points: 1,
    labelA: "Opción A",
    rowsA: [{ field: "Acción", value: "Esperar a que el servidor se restablezca, sin comunicar nada mientras tanto" }],
    labelB: "Opción B",
    rowsB: [{ field: "Acción", value: "Verificar si existe un respaldo reciente, evaluar una vía de acceso alterna y comunicar el estado a los afectados" }],
    expected: "b",
    justifyMinWords: 8,
    expectedSummary: "Ante una falla de disponibilidad corresponde verificar el respaldo, evaluar alternativas y comunicar el estado — no simplemente esperar en silencio.",
    feedbackByVerdict: {
      correct: "Correcto: verificar el respaldo, evaluar alternativas y comunicar el estado es la respuesta adecuada ante una pérdida de disponibilidad.",
      partial: "Tu justificación muestra análisis, pero revisa cuál de las dos opciones realmente atiende la disponibilidad de forma activa.",
      review: "Esperar sin comunicar deja a la unidad sin información y sin alternativas. Lo adecuado es verificar el respaldo, evaluar una vía alterna y mantener informados a los afectados.",
    },
  },

  // Pregunta 4 — Confidencialidad vs. integridad
  {
    id: 4,
    category: "Confidencialidad vs. integridad",
    kind: "compareChoice",
    prompt: "¿Cuál de los dos casos representa principalmente un problema de INTEGRIDAD (y no de confidencialidad)?",
    points: 1,
    labelA: "Caso A",
    rowsA: [{ field: "Situación", value: "Un usuario sin autorización consulta un expediente reservado, sin modificar su contenido." }],
    labelB: "Caso B",
    rowsB: [{ field: "Situación", value: "Alguien modifica el contenido de un expediente sin dejar registro del cambio, de modo que no puede determinarse si esa modificación fue autorizada." }],
    expected: "b",
    justifyMinWords: 8,
    expectedSummary: "El Caso A compromete la confidencialidad (consulta indebida, sin alteración); el Caso B compromete la integridad (modificación sin registro).",
    feedbackByVerdict: {
      correct: "Correcto: el Caso B compromete la integridad porque el contenido cambió sin dejar registro; el Caso A es un problema de confidencialidad, no de integridad.",
      partial: "Tu justificación aporta algo, pero revisa cuál de los dos casos describe una modificación del contenido, y cuál describe solo una consulta indebida.",
      review: "El Caso A es un problema de confidencialidad: se consulta información sin autorización, pero no se modifica. El Caso B es un problema de integridad: el contenido cambia sin quedar registrado.",
    },
  },

  // Pregunta 5 — Autenticación vs. autorización
  {
    id: 5,
    category: "Autenticación vs. autorización",
    kind: "compareChoice",
    prompt: "¿Cuál de los dos mensajes corresponde a un problema de AUTORIZACIÓN (no de autenticación)?",
    points: 1,
    labelA: "Mensaje 1",
    rowsA: [{ field: "Mensaje del sistema", value: "\"Usuario o contraseña incorrectos. Intente nuevamente.\"" }],
    labelB: "Mensaje 2",
    rowsB: [{ field: "Mensaje del sistema", value: "\"Su identidad fue verificada, pero no cuenta con permiso para eliminar este documento.\"" }],
    expected: "b",
    justifyMinWords: 8,
    expectedSummary: "El Mensaje 1 es un fallo de autenticación (no se confirma la identidad); el Mensaje 2 es un fallo de autorización (la identidad ya está confirmada, pero faltan permisos).",
    feedbackByVerdict: {
      correct: "Correcto: el Mensaje 2 confirma la identidad pero niega el permiso para una acción específica — eso es autorización, no autenticación.",
      partial: "Tu justificación muestra criterio, pero revisa cuál mensaje ocurre ANTES de confirmar la identidad y cuál ocurre DESPUÉS.",
      review: "El Mensaje 1 impide confirmar quién eres (autenticación). El Mensaje 2 ya confirmó tu identidad, pero limita qué puedes hacer (autorización).",
    },
  },

  // Pregunta 6 — Usuarios, roles y permisos
  {
    id: 6,
    category: "Usuarios, roles y permisos",
    kind: "selectJustify",
    scenario: "El sistema debe asignar permisos al rol 'Consulta', reservado para personal que solo necesita revisar el estado de sus propios trámites.",
    prompt: "¿Qué acción debería tener permitida el rol Consulta? Selecciona la única opción correcta y justifica tu respuesta.",
    points: 1,
    options: [
      { id: "modificar", label: "Modificar" },
      { id: "eliminar", label: "Eliminar" },
      { id: "ver", label: "Ver" },
      { id: "crear", label: "Crear" },
      { id: "administrar", label: "Administrar" },
    ],
    correctIds: ["ver"],
    minSelected: 1,
    justifyPrompts: ["Explica por qué las demás acciones no deberían estar permitidas para este rol."],
    justifyMinWords: 8,
    expectedSummary: "El rol Consulta solo debería poder Ver; Crear, Modificar, Eliminar y Administrar exceden su función.",
    feedbackByVerdict: {
      correct: "Correcto: un rol de consulta se limita a ver la información; cualquier acción de modificación o administración excede su función.",
      partial: "Revisa tu selección: solo una de las cinco acciones corresponde a un rol que únicamente necesita consultar.",
      review: "El rol Consulta, por definición, solo necesita Ver la información. Otorgarle permisos de Crear, Modificar, Eliminar o Administrar excede su función real.",
    },
  },

  // Pregunta 7 — Identificación de amenaza
  {
    id: 7,
    category: "Identificación de amenaza",
    kind: "selectJustify",
    prompt: "¿Cuál de las siguientes afirmaciones describe una AMENAZA (y no una vulnerabilidad, un riesgo o un control)? Selecciona la correcta y justifica.",
    points: 1,
    options: [
      { id: "vulnerabilidad", label: "Las contraseñas del sistema se comparten entre varios usuarios" },
      { id: "riesgo", label: "Podría filtrarse información reservada del expediente" },
      { id: "amenaza", label: "Una persona no autorizada intenta ingresar al sistema usando credenciales ajenas" },
      { id: "control", label: "El sistema exige un segundo factor de autenticación" },
    ],
    correctIds: ["amenaza"],
    minSelected: 1,
    justifyPrompts: ["Explica por qué las otras tres opciones no son amenazas."],
    justifyMinWords: 10,
    expectedSummary: "Una amenaza es un evento o actor que puede causar daño (el intento de acceso no autorizado). Las otras opciones describen una vulnerabilidad, un riesgo y un control, respectivamente.",
    feedbackByVerdict: {
      correct: "Correcto: la amenaza es el intento de acceso no autorizado; las otras opciones son una vulnerabilidad, un riesgo y un control.",
      partial: "Revisa la diferencia: una amenaza es quien o qué puede causar daño, no la debilidad que lo permite ni la consecuencia posible.",
      review: "La amenaza es el intento de acceso no autorizado (un actor que puede causar daño). Compartir contraseñas es una vulnerabilidad; la filtración posible es un riesgo; el segundo factor es un control.",
    },
  },

  // Pregunta 8 — Identificación de vulnerabilidad
  {
    id: 8,
    category: "Identificación de vulnerabilidad",
    kind: "selectJustify",
    prompt: "¿Cuál de las siguientes afirmaciones describe una VULNERABILIDAD (y no una amenaza, un riesgo o un control)? Selecciona la correcta y justifica.",
    points: 1,
    options: [
      { id: "amenaza", label: "Un usuario intenta modificar un documento sin autorización" },
      { id: "vulnerabilidad", label: "El sistema no exige ningún tipo de autenticación para consultar expedientes" },
      { id: "riesgo", label: "El expediente podría quedar expuesto a modificaciones no autorizadas" },
      { id: "control", label: "Se revisan los registros de auditoría cada semana" },
    ],
    correctIds: ["vulnerabilidad"],
    minSelected: 1,
    justifyPrompts: ["Explica por qué las otras tres opciones no son vulnerabilidades."],
    justifyMinWords: 10,
    expectedSummary: "Una vulnerabilidad es una debilidad que hace posible el daño (la ausencia de autenticación). Las otras opciones describen una amenaza, un riesgo y un control.",
    feedbackByVerdict: {
      correct: "Correcto: la ausencia de autenticación es la debilidad (vulnerabilidad) que permitiría que una amenaza tenga efecto.",
      partial: "Revisa la diferencia: una vulnerabilidad es una debilidad del sistema, no la acción de un atacante ni la consecuencia posible.",
      review: "La vulnerabilidad es la ausencia de autenticación (una debilidad del sistema). El intento de modificación es una amenaza; la exposición posible es un riesgo; la revisión de registros es un control.",
    },
  },

  // Pregunta 9 — Construcción de riesgo
  {
    id: 9,
    category: "Construcción de riesgo",
    kind: "reorder",
    scenario: "Varios funcionarios comparten una misma cuenta de usuario para acceder al sistema de gestión documental.",
    prompt: "Ordena estos conceptos según la cadena lógica de análisis de riesgo, de la causa inicial a la consecuencia.",
    points: 1,
    items: [
      { id: "riesgo", label: "Riesgo: imposibilidad de saber quién realizó una acción" },
      { id: "amenaza", label: "Amenaza: acceso no autorizado mediante la cuenta compartida" },
      { id: "impacto", label: "Impacto: pérdida de trazabilidad sobre las acciones del sistema" },
      { id: "vulnerabilidad", label: "Vulnerabilidad: cuentas compartidas entre varios funcionarios" },
    ],
    correctOrder: ["amenaza", "vulnerabilidad", "riesgo", "impacto"],
    expectedSummary: "La cadena lógica es amenaza → vulnerabilidad → riesgo → impacto: la amenaza aprovecha la vulnerabilidad, lo que constituye el riesgo, que de concretarse produce el impacto.",
    feedbackByVerdict: {
      correct: "Correcto: la amenaza aprovecha la vulnerabilidad, eso constituye el riesgo, y de concretarse produce el impacto.",
      partial: "Tu orden se acerca, pero revisa qué elemento es la causa inicial y cuál es la consecuencia final.",
      review: "El orden correcto es: amenaza (el evento que puede causar daño), vulnerabilidad (la debilidad que lo permite), riesgo (la posibilidad concreta) e impacto (la consecuencia si se concreta).",
    },
  },

  // Pregunta 10 — Clasificación de controles
  {
    id: 10,
    category: "Clasificación de controles",
    kind: "dragClassify",
    instructions: "Arrastra cada medida (o tócala y luego toca la categoría) hacia el tipo de control que le corresponde.",
    prompt: "Clasifica cada medida como control preventivo, detectivo o correctivo.",
    points: 1,
    items: [
      { id: "mfa", label: "Exigir un segundo factor de autenticación", icon: "KeyRound", category: "preventivo" },
      { id: "capacitar", label: "Capacitar al personal sobre manejo seguro de documentos", icon: "BookOpen", category: "preventivo" },
      { id: "logs", label: "Revisar los registros de auditoría cada semana", icon: "FileSearch", category: "detectivo" },
      { id: "alerta", label: "Generar una alerta ante actividad fuera de horario", icon: "BellRing", category: "detectivo" },
      { id: "restaurar", label: "Restaurar un documento eliminado desde el respaldo", icon: "RefreshCw", category: "correctivo" },
      { id: "bloquear", label: "Bloquear la cuenta de un usuario tras un uso indebido", icon: "Lock", category: "correctivo" },
    ],
    categories: [
      { id: "preventivo", label: "Preventivo", icon: "ShieldCheck" },
      { id: "detectivo", label: "Detectivo", icon: "Radar" },
      { id: "correctivo", label: "Correctivo", icon: "RefreshCw" },
    ],
    expectedSummary: "Preventivos: MFA y capacitación (evitan el incidente). Detectivos: revisión de logs y alertas (identifican que algo ocurrió). Correctivos: restaurar y bloquear (recuperan o corrigen después).",
    feedbackByVerdict: {
      correct: "Correcto: clasificaste cada medida según el momento en que actúa — antes, durante o después del incidente.",
      partial: "Clasificaste correctamente algunas medidas; revisa la diferencia entre identificar que algo ocurrió (detectivo) y corregirlo después (correctivo).",
      review: "Preventivo evita que ocurra (MFA, capacitación); detectivo identifica que ocurrió (logs, alertas); correctivo recupera o corrige después (restaurar, bloquear).",
    },
  },

  // Pregunta 11 — Control preventivo
  {
    id: 11,
    category: "Control preventivo",
    kind: "selectJustify",
    prompt: "¿Cuál de las siguientes medidas es un control PREVENTIVO? Selecciona la correcta y justifica.",
    points: 1,
    options: [
      { id: "detectivo", label: "Revisar semanalmente los registros de accesos realizados" },
      { id: "correctivo", label: "Restaurar la información desde un respaldo tras una pérdida" },
      { id: "preventivo", label: "Exigir permisos diferenciados por rol antes de otorgar acceso al sistema" },
      { id: "no-control", label: "Enviar un comunicado informando que el sistema tuvo una falla" },
    ],
    correctIds: ["preventivo"],
    minSelected: 1,
    justifyPrompts: ["Explica por qué esta medida actúa antes de que ocurra un incidente."],
    justifyMinWords: 8,
    expectedSummary: "Un control preventivo actúa antes del incidente: exigir permisos diferenciados evita accesos indebidos desde el inicio.",
    feedbackByVerdict: {
      correct: "Correcto: exigir permisos diferenciados evita el problema antes de que ocurra — esa es la esencia de un control preventivo.",
      partial: "Revisa cuál de las opciones actúa ANTES de que ocurra cualquier incidente, y no después de detectarlo o sufrirlo.",
      review: "El control preventivo es exigir permisos diferenciados por rol, porque evita el acceso indebido desde el inicio. Las otras opciones ocurren durante o después de un incidente, o no son controles.",
    },
  },

  // Pregunta 12 — Control detectivo
  {
    id: 12,
    category: "Control detectivo",
    kind: "openText",
    prompt: "Da un ejemplo de control DETECTIVO aplicable a la gestión documental y explica por qué lo es.",
    points: 1,
    fieldLabel: "Tu ejemplo y explicación",
    candidates: [
      { id: "logs", label: "Registros de auditoría", keywords: ["registro de auditoria", "logs", "bitacora", "registro de acceso"] },
      { id: "alerta", label: "Alertas automáticas", keywords: ["alerta", "notificacion automatica"] },
      { id: "revision", label: "Revisión periódica de accesos", keywords: ["revision periodica", "revisar periodicamente", "revision de accesos"] },
    ],
    requiredCount: 1,
    minWords: 8,
    expectedSummary: "Un control detectivo permite identificar que algo ocurrió: registros de auditoría, alertas automáticas o revisiones periódicas de acceso son ejemplos válidos.",
    feedbackByVerdict: {
      correct: "Correcto: tu ejemplo permite identificar que algo ocurrió después del hecho — esa es la función de un control detectivo.",
      partial: "Tu respuesta menciona una idea relacionada, pero verifica que se trate claramente de un mecanismo que detecta (no que previene ni que corrige).",
      review: "Un control detectivo identifica que algo ocurrió, sin haberlo evitado: por ejemplo, registros de auditoría, alertas automáticas o revisiones periódicas de acceso.",
    },
  },

  // Pregunta 13 — Control correctivo
  {
    id: 13,
    category: "Control correctivo",
    kind: "selectJustify",
    prompt: "¿Cuál de las siguientes medidas es un control CORRECTIVO? Selecciona la correcta y justifica.",
    points: 1,
    options: [
      { id: "preventivo", label: "Exigir contraseñas robustas para ingresar al sistema" },
      { id: "detectivo", label: "Recibir una alerta cuando alguien accede fuera de su horario habitual" },
      { id: "correctivo", label: "Restaurar un expediente eliminado a partir de la última copia de respaldo" },
      { id: "no-control", label: "Publicar el organigrama de la institución" },
    ],
    correctIds: ["correctivo"],
    minSelected: 1,
    justifyPrompts: ["Explica por qué esta medida ocurre después del incidente, no antes."],
    justifyMinWords: 8,
    expectedSummary: "Un control correctivo actúa después del incidente para recuperar o corregir: restaurar desde un respaldo es el ejemplo correcto.",
    feedbackByVerdict: {
      correct: "Correcto: restaurar desde un respaldo ocurre después de la pérdida, para recuperar la información — esa es la esencia de un control correctivo.",
      partial: "Revisa cuál de las opciones ocurre DESPUÉS de un incidente, con el fin de recuperar o corregir, y no antes o durante.",
      review: "El control correctivo es restaurar el expediente desde el respaldo, porque actúa después de la pérdida para recuperar la información. Las demás opciones son preventivas, detectivas o no son controles.",
    },
  },

  // Pregunta 14 — Backup y recuperación
  {
    id: 14,
    category: "Backup y recuperación",
    kind: "matchPairs",
    prompt: "Relaciona cada concepto de respaldo y recuperación con su definición.",
    points: 1,
    concepts: [
      { id: "backup-completo", label: "Backup completo" },
      { id: "backup-incremental", label: "Backup incremental" },
      { id: "prueba-restauracion", label: "Prueba de restauración" },
      { id: "copia-externa", label: "Copia fuera del sitio principal" },
    ],
    definitions: [
      { id: "def-prueba", label: "Verificación de que un respaldo realmente puede restaurarse" },
      { id: "def-externa", label: "Copia almacenada en un lugar distinto al de la información original" },
      { id: "def-completo", label: "Copia de toda la información disponible en un momento determinado" },
      { id: "def-incremental", label: "Copia solo de lo que cambió desde el último respaldo" },
    ],
    correctPairs: {
      "backup-completo": "def-completo",
      "backup-incremental": "def-incremental",
      "prueba-restauracion": "def-prueba",
      "copia-externa": "def-externa",
    },
    expectedSummary: "Backup completo = copia total; backup incremental = solo lo que cambió; prueba de restauración = verifica que el respaldo sirve; copia externa = almacenada fuera del sitio original.",
    feedbackByVerdict: {
      correct: "Correcto: relacionaste cada concepto con su definición exacta.",
      partial: "Relacionaste algunos conceptos correctamente; revisa la diferencia entre un backup completo y uno incremental, y entre una prueba de restauración y una copia externa.",
      review: "Backup completo copia todo; backup incremental copia solo los cambios; la prueba de restauración confirma que el respaldo sirve; la copia externa protege ante una falla física del lugar original.",
    },
  },

  // Pregunta 15 — Análisis de registro de auditoría
  {
    id: 15,
    category: "Análisis de registro de auditoría",
    kind: "selectJustify",
    scenario: "Registro: 'archivista5 modificó EXP-2026-0410 el 22/09/2026 a las 10:15.'",
    prompt: "¿Qué información básica de auditoría está efectivamente presente en este registro? Selecciona todo lo que corresponda y explica una de ellas.",
    points: 1,
    options: [
      { id: "quien", label: "Quién realizó la acción (archivista5)" },
      { id: "resultado", label: "Cuál fue el resultado de la modificación" },
      { id: "que", label: "Qué acción se realizó (modificó)" },
      { id: "estado-previo", label: "Cuál era el estado antes de modificarse" },
      { id: "cuando", label: "Cuándo ocurrió (22/09/2026, 10:15)" },
      { id: "documento", label: "Sobre qué documento (EXP-2026-0410)" },
    ],
    correctIds: ["quien", "que", "cuando", "documento"],
    minSelected: 3,
    justifyPrompts: ["Elige uno de los datos presentes y explica por qué es útil para la auditoría."],
    justifyMinWords: 8,
    expectedSummary: "El registro contiene quién, qué, cuándo y sobre qué documento; no indica el resultado de la modificación ni el estado previo.",
    feedbackByVerdict: {
      correct: "Correcto: identificaste exactamente los cuatro datos que el registro contiene, sin incluir información que no está presente.",
      partial: "Tu selección va en la dirección correcta; revisa si incluiste algún dato que el registro no menciona explícitamente.",
      review: "El registro solo indica quién, qué, cuándo y sobre qué documento. No dice cuál fue el resultado de la modificación ni cuál era el estado previo — esa información no está en el texto.",
    },
  },

  // Pregunta 16 — Respuesta ante incidente
  {
    id: 16,
    category: "Respuesta ante incidente",
    kind: "reorder",
    prompt: "Ordena las etapas generales de respuesta ante un incidente de seguridad documental.",
    points: 1,
    items: [
      { id: "corregir", label: "Corregir o erradicar la causa" },
      { id: "detectar", label: "Detectar el incidente" },
      { id: "documentar", label: "Documentar el incidente" },
      { id: "evaluar", label: "Evaluar el alcance" },
      { id: "recuperar", label: "Recuperar la información o el servicio" },
      { id: "contener", label: "Contener o aislar el problema" },
    ],
    correctOrder: ["detectar", "contener", "evaluar", "corregir", "recuperar", "documentar"],
    expectedSummary: "El orden general es: detectar, contener, evaluar, corregir, recuperar y, finalmente, documentar.",
    feedbackByVerdict: {
      correct: "Correcto: esa es la secuencia general de respuesta ante un incidente de seguridad.",
      partial: "Tu orden se acerca; revisa qué debe ocurrir antes de corregir la causa y qué debe ocurrir al final, una vez resuelto el incidente.",
      review: "El orden correcto es: detectar, contener, evaluar el alcance, corregir la causa, recuperar la información o el servicio y, al final, documentar el incidente.",
    },
  },

  // Pregunta 17 — Caso de acceso no autorizado
  {
    id: 17,
    category: "Caso de acceso no autorizado",
    kind: "selectJustify",
    scenario: "Se detecta que un usuario accedió a expedientes que no corresponden a sus funciones, fuera de su horario habitual de trabajo.",
    prompt: "¿Qué acciones corresponden de inmediato? Selecciona las correctas y justifica una de ellas.",
    points: 1,
    options: [
      { id: "borrar-registro", label: "Eliminar el registro de acceso para no generar alarma" },
      { id: "registrar", label: "Registrar el hallazgo y conservar el registro de acceso como evidencia" },
      { id: "ampliar-permisos", label: "Ampliarle los permisos para que el acceso deje de marcarse como indebido" },
      { id: "revisar-permisos", label: "Revisar si los permisos de ese usuario corresponden a sus funciones" },
      { id: "informar", label: "Informar al responsable de seguridad o de gestión documental" },
    ],
    correctIds: ["registrar", "revisar-permisos", "informar"],
    minSelected: 2,
    justifyPrompts: ["Explica por qué eliminar el registro de acceso no es una acción apropiada."],
    justifyMinWords: 8,
    expectedSummary: "Corresponde registrar y conservar evidencia, revisar los permisos del usuario e informar al responsable; nunca eliminar el registro ni ampliar permisos para evitar la alarma.",
    feedbackByVerdict: {
      correct: "Correcto: registrar, revisar permisos e informar son las acciones apropiadas; eliminar evidencia o ampliar permisos agravaría el problema.",
      partial: "Tu selección va en la dirección correcta, pero revisa si incluiste alguna acción que en realidad oculta o agrava el problema.",
      review: "Ante un acceso indebido, lo correcto es registrar y conservar evidencia, revisar si los permisos corresponden a la función real, e informar al responsable — nunca borrar el registro ni ampliar permisos para 'normalizar' el acceso.",
    },
  },

  // Pregunta 18 — Caso de modificación no autorizada
  {
    id: 18,
    category: "Caso de modificación no autorizada",
    kind: "stageFlow",
    scenario: "Se detecta que un documento del sistema de gestión documental fue modificado sin autorización.",
    prompt: "Completa qué hacer, quién es responsable y qué evidencia debería quedar en cada etapa de la respuesta a este incidente.",
    points: 1,
    stages: [
      { id: "detectar", label: "Detectar" },
      { id: "contener", label: "Contener" },
      { id: "evaluar", label: "Evaluar" },
      { id: "notificar", label: "Notificar" },
      { id: "recuperar", label: "Recuperar" },
      { id: "documentar", label: "Documentar" },
    ],
    fieldLabels: ["Qué hacer", "Responsable", "Evidencia"],
    minStages: 4,
    criticalPrompt: "¿Cuál de estas etapas consideras más crítica para sostener el caso como evidencia, y por qué?",
    criticalMinWords: 8,
    expectedSummary: "Una respuesta completa detecta, contiene, evalúa el alcance, notifica al responsable, recupera la versión correcta y documenta todo el proceso, asignando responsable y evidencia en cada etapa.",
    feedbackByVerdict: {
      correct: "Correcto: completaste las etapas con acción, responsable y evidencia, y justificaste con criterio cuál es la etapa más crítica.",
      partial: "Avanzaste en varias etapas; completa al menos cuatro con sus tres columnas y profundiza en tu justificación de la etapa crítica.",
      review: "Cada etapa (detectar, contener, evaluar, notificar, recuperar, documentar) debería tener una acción concreta, un responsable claro y una evidencia asociada — sin eso, el incidente no puede sostenerse ante una revisión posterior.",
    },
  },

  // Pregunta 19 — Caso de pérdida de disponibilidad
  {
    id: 19,
    category: "Caso de pérdida de disponibilidad",
    kind: "compareChoice",
    scenario: "Una unidad reporta que no puede acceder al sistema de gestión documental desde hace dos horas, y tiene un trámite urgente pendiente.",
    prompt: "¿Qué opción refleja mejor una respuesta adecuada ante esta pérdida de disponibilidad?",
    points: 1,
    labelA: "Opción A",
    rowsA: [{ field: "Acción", value: "Comunicar que el sistema está caído y esperar a que el proveedor lo resuelva, sin más gestión" }],
    labelB: "Opción B",
    rowsB: [{ field: "Acción", value: "Verificar el último respaldo disponible, informar a los usuarios afectados y estimar un tiempo de restauración" }],
    expected: "b",
    justifyMinWords: 8,
    expectedSummary: "Ante una pérdida de disponibilidad prolongada, corresponde verificar el respaldo, informar a los afectados y estimar tiempos — no limitarse a esperar sin gestión activa.",
    feedbackByVerdict: {
      correct: "Correcto: verificar el respaldo, informar y estimar tiempos es una gestión activa de la disponibilidad, no una espera pasiva.",
      partial: "Tu justificación aporta algo, pero revisa cuál opción implica una gestión activa del incidente y cuál se limita a esperar.",
      review: "Esperar sin gestión no resuelve el problema del trámite urgente. Lo adecuado es verificar el respaldo, informar a los usuarios y estimar cuándo podrá restablecerse el servicio.",
    },
  },

  // Pregunta 20 — CASO INTEGRADOR
  {
    id: 20,
    category: "Caso integrador de seguridad documental",
    kind: "matrixBuilder",
    scenario:
      "Una entidad detecta varios problemas: usuarios con más permisos de los que necesitan, un expediente modificado sin registro claro de autoría, un respaldo que nunca se ha probado y ausencia de revisión periódica de los accesos otorgados.",
    prompt: "Construye una matriz de seguridad: para cada problema, identifica el atributo afectado, el riesgo y un control propuesto.",
    instructions: "Completa al menos 3 filas y responde las preguntas de cierre.",
    points: 1,
    columns: [
      { key: "problema", label: "Problema", type: "text", placeholder: "Describe el problema" },
      {
        key: "atributo",
        label: "Atributo afectado",
        type: "select",
        options: [
          { id: "confidencialidad", label: "Confidencialidad" },
          { id: "integridad", label: "Integridad" },
          { id: "disponibilidad", label: "Disponibilidad" },
        ],
      },
      { key: "riesgo", label: "Riesgo", type: "text", placeholder: "¿Qué podría ocurrir?" },
      { key: "control", label: "Control propuesto", type: "text", placeholder: "¿Qué control corresponde?" },
    ],
    minRows: 3,
    addLabel: "Agregar otro problema",
    chipSuggestions: [
      "Usuarios con más permisos de los que necesitan",
      "Expediente modificado sin registro claro de autoría",
      "Respaldo que nunca se ha probado",
      "Ausencia de revisión periódica de accesos",
    ],
    chipColumnKey: "problema",
    consistencyHints: [
      { problemKeyword: "mas permisos de los que necesitan", column: "atributo", expectedValue: "confidencialidad" },
      { problemKeyword: "modificado sin registro claro de autoria", column: "atributo", expectedValue: "integridad" },
      { problemKeyword: "respaldo que nunca se ha probado", column: "atributo", expectedValue: "disponibilidad" },
      { problemKeyword: "revision periodica de accesos", column: "atributo", expectedValue: "confidencialidad" },
    ],
    closingQuestions: [
      "¿Qué evidencia permitiría verificar que tu control propuesto realmente funciona?",
      "De todos los problemas identificados, ¿cuál priorizarías primero y por qué?",
    ],
    closingMinWords: 8,
    expectedSummary: "Cada problema debe asociarse con el atributo que realmente compromete (confidencialidad, integridad o disponibilidad, sin contradecir el problema descrito), un riesgo concreto y un control verificable — no una intención genérica.",
    feedbackByVerdict: {
      correct: "Correcto: construiste una matriz completa que conecta cada problema con el atributo que realmente compromete, su riesgo y un control verificable, con evidencia y prioridad claras.",
      partial: "Avanzaste en la matriz; completa al menos tres filas con las cuatro columnas, revisa que el atributo elegido corresponda al problema descrito (por ejemplo, un respaldo sin probar compromete disponibilidad, no confidencialidad) y profundiza en las respuestas de cierre.",
      review: "Una matriz de seguridad completa relaciona cada problema con el atributo que compromete, el riesgo concreto que genera y un control específico y verificable — no basta con enunciar el problema, y el atributo elegido debe ser coherente con él.",
    },
  },
];

export const TOTAL_QUESTIONS_7 = practice7Questions.length;
export const MAX_SCORE_7 = practice7Questions.reduce((sum, q) => sum + q.points, 0);
