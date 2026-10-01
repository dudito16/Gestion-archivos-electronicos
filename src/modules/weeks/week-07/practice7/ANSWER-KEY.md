# Práctica Calificada 7 — Clave de respuestas y criterio de evaluación

Este documento audita la lógica de evaluación de las 20 preguntas de `practice7.data.ts`. Para cada pregunta: número, tipo de interacción, respuesta correcta, criterio, explicación y por qué las alternativas son incorrectas.

> Revisado y corregido en la auditoría exhaustiva de 2026-09-25 (ver sección "Historial de correcciones" al final).

---

**1. Confidencialidad** (selectJustify)
Correcta: `archivista`, `jefe-unidad` (2 de 5 opciones). Criterio: solo quien tiene una función concreta en el trámite debería acceder (principio de necesidad de conocer).
Incorrectas: `otra-area`, `externo`, `temporal` — ninguno tiene relación funcional con el trámite ni autorización específica.

**2. Integridad** (editFields)
Correcta: campo `fecha` → "15/09/2026" (valor original); campo `responsable` permanece "Gerencia de Administración" (no fue alterado). Criterio: el problema no es solo el valor cambiado, sino la ausencia de registro de quién lo hizo.
Distractor evitado: no se pide "adivinar" quién lo hizo (dato no disponible), solo corregir el campo y razonar sobre el riesgo de la falta de registro.

**3. Disponibilidad** (compareChoice)
Correcta: Opción B (verificar respaldo, evaluar alterna, comunicar). Opción A es incorrecta por ser una respuesta pasiva sin gestión.

**4. Confidencialidad vs. integridad** (compareChoice)
Correcta: Caso B (modificación sin registro = integridad). Caso A es confidencialidad (consulta sin alteración).
**Corregido:** el Caso B originalmente decía "un usuario **autorizado** modifica..."; se retiró la palabra "autorizado" porque, si la modificación ya estaba autorizada, el escenario dejaba de ser inequívocamente un problema de integridad (podía leerse como un simple cambio legítimo sin más). El texto actual dice que, al no quedar registro, "no puede determinarse si esa modificación fue autorizada" — la ambigüedad real (autorizada o no) es precisamente lo que compromete la integridad, sin dar por hecho ninguna de las dos.

**5. Autenticación vs. autorización** (compareChoice)
Correcta: Mensaje 2 (identidad ya verificada, permiso denegado = autorización). Mensaje 1 ocurre antes de confirmar identidad = autenticación.

**6. Usuarios, roles y permisos** (selectJustify, respuesta única)
Correcta: `ver` (1 de 5 opciones). Las otras cuatro acciones (crear/modificar/eliminar/administrar) exceden la función de un rol exclusivamente de consulta.

**7. Identificación de amenaza** (selectJustify, respuesta única)
Correcta: opción `amenaza` ("persona no autorizada intenta ingresar"). `vulnerabilidad` describe una debilidad (contraseñas compartidas), `riesgo` describe una posibilidad de daño (filtración), `control` describe una medida (segundo factor) — cada distractor pertenece inequívocamente a otra categoría del marco amenaza/vulnerabilidad/riesgo/control, sin solapamiento.

**8. Identificación de vulnerabilidad** (selectJustify, respuesta única)
Correcta: opción `vulnerabilidad` ("no exige autenticación"). Mismo diseño que la pregunta 7 pero con un caso distinto, para evitar que el estudiante memorice la posición en vez del concepto.

**9. Construcción de riesgo** (reorder)
Orden correcto: amenaza → vulnerabilidad → riesgo → impacto. Es una secuencia conceptual fija (no depende del caso), consistente con el modelo enseñado en la teoría de la semana (amenaza que aprovecha una vulnerabilidad) y con el modelo NIST de análisis de riesgo (fuente de amenaza → explota → vulnerabilidad → produce → impacto).
**Corregido:** el arreglo `items` originalmente listaba los cuatro elementos en el MISMO orden que `correctOrder`, por lo que un estudiante podía tocar los botones de arriba hacia abajo sin razonar y obtener el orden correcto por casualidad. Se reordenó el arreglo `items` (ahora: riesgo, amenaza, impacto, vulnerabilidad) sin tocar `correctOrder` — el orden visual inicial ya no coincide con la respuesta.

**10. Clasificación de controles** (dragClassify)
Preventivos: MFA, capacitación. Detectivos: revisión de logs, alertas. Correctivos: restaurar, bloquear cuenta. Cada ítem incluye una frase calificadora ("antes de otorgar acceso", "tras un uso indebido") que fija inequívocamente su categoría.

**11. Control preventivo** (selectJustify, respuesta única)
Correcta: "exigir permisos diferenciados" (actúa antes del incidente). Las otras tres opciones son detectiva, correctiva y no-control, respectivamente.

**12. Control detectivo** (openText)
Evaluación por palabras clave: `logs`/`registro de auditoria`, `alerta`, `revision periodica`. Requiere al menos 1 concepto y 8 palabras — no exige coincidencia textual exacta. Palabras clave específicas (no genéricas como "seguridad" o "sistema"), reduciendo el riesgo de falsos positivos.

**13. Control correctivo** (selectJustify, respuesta única)
Correcta: "restaurar desde respaldo" (ocurre después de la pérdida). Distractores: preventivo (contraseñas), detectivo (alerta), no-control (organigrama).

**14. Backup y recuperación** (matchPairs)
4 pares, biyectivos. Ver tabla de verificación abajo.
**Corregido:** el arreglo `definitions` originalmente estaba en el mismo orden que `concepts` (alineación 1:1 por posición), permitiendo relacionar todo de arriba hacia abajo sin leer. Se reordenó `definitions` (ahora: prueba, externa, completo, incremental) sin tocar `correctPairs` — la posición visual ya no revela la respuesta.

**15. Análisis de registro de auditoría** (selectJustify multi)
Correctas: `quien`, `que`, `cuando`, `documento` (4 de 6 — literalmente presentes en el texto del registro). Incorrectas: `resultado`, `estado-previo` — información que el registro no menciona.
**Corregido:** las 4 opciones correctas ocupaban las primeras 4 posiciones del arreglo; se intercalaron con las incorrectas (ahora: quien, resultado, que, estado-previo, cuando, documento) para que no puedan "adivinarse" seleccionando simplemente las primeras cuatro.

**16. Respuesta ante incidente** (reorder)
Orden correcto: detectar → contener → evaluar → corregir → recuperar → documentar. Consistente con el resto del contenido de la semana (simulador de respaldo, Actividad 7).
**Corregido:** mismo problema que la pregunta 9 — `items` coincidía con `correctOrder`. Se reordenó `items` (ahora: corregir, detectar, documentar, evaluar, recuperar, contener) sin tocar `correctOrder`.

**17. Caso de acceso no autorizado** (selectJustify multi)
Correctas: `registrar`, `revisar-permisos`, `informar` (3 de 5). Incorrectas: `borrar-registro` (destruye evidencia), `ampliar-permisos` (agrava el problema) — ambas claramente contraproducentes, no defendibles profesionalmente.
**Corregido:** las 3 correctas ocupaban las primeras 3 posiciones; se intercalaron con las incorrectas (ahora: borrar-registro, registrar, ampliar-permisos, revisar-permisos, informar).

**18. Caso de modificación no autorizada** (stageFlow)
6 etapas fijas, mínimo 4 completas con 3 columnas (qué hacer/responsable/evidencia) + justificación de la etapa crítica. No existe una única "etapa crítica" correcta predeterminada — es una pregunta de juicio profesional genuinamente abierta; se evalúa la calidad del razonamiento (longitud y presencia de una elección + justificación), no una opción fija. Esto es intencional, no una omisión: forzar una única "etapa crítica correcta" convertiría un punto de análisis profesional en una pregunta de memoria.

**19. Caso de pérdida de disponibilidad** (compareChoice)
Correcta: Opción B (verificar respaldo, informar, estimar tiempo). Opción A es pasiva. Escenario deliberadamente distinto al de la pregunta 3 (falla de dos horas con trámite pendiente, vs. caída de servidor con plazo vencido) para no ser una repetición literal.

**20. Caso integrador** (matrixBuilder)
Se evalúa que existan al menos 3 filas completas y que las 2 preguntas de cierre tengan desarrollo mínimo.
**Corregido (hallazgo importante):** el evaluador original solo comprobaba que las cuatro columnas de cada fila estuvieran llenas, sin verificar que el **atributo elegido correspondiera realmente al problema descrito** — un estudiante podía escribir "respaldo que nunca se ha probado" y marcar "Confidencialidad" como atributo afectado (en vez de Disponibilidad) y aun así recibir puntaje completo, porque el sistema solo contaba campos no vacíos. Se agregó `consistencyHints` a la pregunta (`practice7.types.ts` + `practice7.scoring.ts`): para los 4 problemas sugeridos (chips), el evaluador ahora compara el atributo seleccionado contra el atributo correcto conocido, y si hay una fila con el problema de un chip pero el atributo contradictorio, el puntaje máximo posible de la pregunta se limita a 0.5 (fuerza verdict "parcial", nunca "correcto"). Los problemas escritos libremente por el estudiante (no un chip) no se penalizan por este chequeo — se mantiene el criterio de evaluación orientativa para texto libre. Verificado empíricamente (ver sección de pruebas).

---

## Verificación de bijectividad (matchPairs, Pregunta 14)

| Concepto | Definición correcta | ¿Otra definición podría ser válida? |
|---|---|---|
| Backup completo | Copia de toda la información disponible en un momento determinado | No — se refiere al alcance (todo), no se solapa con incremental (parcial), prueba (verificación) ni copia externa (ubicación). |
| Backup incremental | Copia solo de lo que cambió desde el último respaldo | No — distinto de completo, prueba y copia externa. |
| Prueba de restauración | Verificación de que un respaldo realmente puede restaurarse | No — es una acción de verificación, no un tipo de copia; no se confunde con ninguna otra. |
| Copia fuera del sitio principal | Copia almacenada en un lugar distinto al de la información original | No — se refiere a ubicación, no a alcance ni a verificación. |

`correctPairs`: `{backup-completo→def-completo, backup-incremental→def-incremental, prueba-restauracion→def-prueba, copia-externa→def-externa}`. Cuatro claves, cuatro valores, todos distintos. Sin duplicados. Confirmado biyectivo (no afectado por el reordenamiento visual de `definitions`, que solo cambia el orden de presentación, no las relaciones por `id`).

## Tabla de correspondencia — pregunta / respuesta mostrada / ANSWER-KEY / scoring

| Pregunta | Respuesta correcta (mostrada en la interfaz) | Respuesta en ANSWER-KEY | Respuesta en `practice7.data.ts` (`correctIds`/`correctOrder`/`correctPairs`/`expected`) | Coincide |
|---|---|---|---|---|
| 1 | Archivista responsable + Jefe de la unidad | Igual | `correctIds: ["archivista","jefe-unidad"]` | ✓ |
| 2 | Fecha → 15/09/2026; Responsable sin cambio | Igual | `keywordGroups` sobre "fecha" y "responsable" | ✓ |
| 3 | Opción B | Igual | `expected: "b"` | ✓ |
| 4 | Caso B | Igual | `expected: "b"` | ✓ |
| 5 | Mensaje 2 | Igual | `expected: "b"` | ✓ |
| 6 | Ver | Igual | `correctIds: ["ver"]` | ✓ |
| 7 | Amenaza (persona no autorizada) | Igual | `correctIds: ["amenaza"]` | ✓ |
| 8 | Vulnerabilidad (sin autenticación) | Igual | `correctIds: ["vulnerabilidad"]` | ✓ |
| 9 | amenaza→vulnerabilidad→riesgo→impacto | Igual | `correctOrder` | ✓ |
| 10 | mfa/capacitar=preventivo; logs/alerta=detectivo; restaurar/bloquear=correctivo | Igual | `items[].category` | ✓ |
| 11 | Exigir permisos diferenciados | Igual | `correctIds: ["preventivo"]` | ✓ |
| 12 | logs/alerta/revisión periódica | Igual | `candidates[].keywords` | ✓ |
| 13 | Restaurar desde respaldo | Igual | `correctIds: ["correctivo"]` | ✓ |
| 14 | 4 pares completo/incremental/prueba/externa | Igual | `correctPairs` | ✓ |
| 15 | quien, que, cuando, documento | Igual | `correctIds` | ✓ |
| 16 | detectar→contener→evaluar→corregir→recuperar→documentar | Igual | `correctOrder` | ✓ |
| 17 | registrar, revisar-permisos, informar | Igual | `correctIds` | ✓ |
| 18 | (abierta — sin clave única, ver nota) | Igual | evaluación por completitud + justificación | ✓ |
| 19 | Opción B | Igual | `expected: "b"` | ✓ |
| 20 | Atributo consistente con el problema (ver `consistencyHints`) | Igual | `consistencyHints` | ✓ |

**20/20 coinciden.**

## Verificación de evaluador vs. alternativas mostradas

Todas las preguntas de tipo `selectJustify`, `dragClassify`, `reorder`, `matchPairs`, `compareChoice` y `stageFlow` evalúan por `.id`, nunca por posición en el arreglo ni por índice — confirmado por lectura de `practice7.scoring.ts`. El reordenamiento de los arreglos `options`/`items`/`definitions` (correcciones anti-adivinanza descritas arriba) no afecta el scoring precisamente porque este nunca dependió del orden — se confirmó con una prueba automatizada de extremo a extremo tras cada cambio (ver "Pruebas ejecutadas"). No existe shuffling/randomización en ningún componente de esta práctica.

## Respuestas abiertas

Las preguntas 12, 18 y 20 (parcialmente) usan evaluación por palabras clave o por longitud mínima significativa (`isMeaningfulText`), nunca por coincidencia textual exacta. El disclaimer "Las respuestas abiertas requieren análisis docente. La retroalimentación automática es orientativa." se muestra en cada campo abierto (`OpenAnswerDisclaimer`). Las palabras clave usadas en la pregunta 12 son específicas (logs, bitácora, revisión periódica) y no genéricas (no se usan "seguridad", "documento", "sistema", "información" ni "usuario" como palabras clave aisladas), reduciendo el riesgo de falsos positivos.

## Sistema de dos intentos

Sin cambios respecto al diseño original (`pointsForVerdict7`): primer intento correcto = 100%, parcial = 50%, incorrecto = reintento; segundo intento correcto = 60%, parcial = 30%, incorrecto = 0%. Nunca intentos ilimitados (máximo 2, aplicado por `QuestionCard7`'s máquina de estados `answering → retry-prompt → finalized`). Verificado empíricamente: una respuesta deliberadamente incorrecta en el primer intento, corregida en el segundo, produjo exactamente 0.6/1 puntos.

## Pruebas ejecutadas (auditoría 2026-09-25)

1. **Ejecución completa con respuestas correctas** (20/20): las 20 preguntas evaluadas con la respuesta que este documento declara correcta obtuvieron verdict "Correcto" en el primer intento (excepto la Pregunta 1, deliberadamente respondida mal primero para probar el reintento). Puntaje final: 19.6/20.
2. **Prueba inversa de distractores** (7 preguntas: 3, 6, 7, 8, 9, 14, 16): para cada una se seleccionó deliberadamente una alternativa/orden/pareo incorrecto y se confirmó que NINGUNO obtuvo verdict "Correcto" en el primer intento. 0 falsos positivos.
3. **Prueba de contradicción en la matriz (Pregunta 20)**: se asignó el atributo "Confidencialidad" al problema "respaldo que nunca se ha probado" (debería ser "Disponibilidad"); el sistema NO marcó la respuesta como correcta, confirmando que `consistencyHints` detecta la inconsistencia.
4. **Build**: `tsc -b` sin errores; `vite build` exitoso; `oxlint` sin advertencias nuevas.
5. **Responsive**: sin scroll horizontal en 1440/1024/768/390 px.

## Historial de correcciones

- **Q4**: se eliminó la palabra "autorizado" del Caso B para no presuponer la respuesta dentro del propio enunciado.
- **Q9, Q16**: se reordenó el arreglo `items` para que el orden visual inicial no coincida con `correctOrder`.
- **Q14**: se reordenó el arreglo `definitions` para que no esté alineado posicionalmente con `concepts`.
- **Q1, Q6, Q7, Q11, Q15, Q17**: se reordenaron los arreglos `options` para que las alternativas correctas no queden agrupadas al inicio de la lista.
- **Q20**: se añadió el campo `consistencyHints` (tipo y lógica de evaluación) para detectar una asignación de atributo contradictoria con el problema descrito, en vez de aceptar cualquier combinación con los campos simplemente llenos.

Ninguna de estas correcciones cambió el significado de una respuesta correcta: todas preservan exactamente las mismas respuestas correctas documentadas en este archivo desde su versión original; solo se corrigió la posibilidad de acertar por posición/casualidad y el vacío de validación semántica en la Pregunta 20.
