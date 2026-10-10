# Práctica Calificada 10 — Clave de respuestas y criterio de evaluación

Este documento audita la lógica de evaluación de las 10 preguntas de `practice10.data.ts`. Para cada pregunta: tipo de interacción, respuesta correcta, criterio, y por qué las alternativas incorrectas lo son. Creado como parte de la auditoría académica, semántica y técnica final de la PC10 (no existía previamente; ver "Historial de correcciones").

---

**1. Concepto de integridad digital** (selectJustify, respuesta única)
Correcta: `definicion` ("se mantenga completo y sin alteraciones no controladas respecto de un estado de referencia establecido"). Distractores: `mantiene-legible` (la legibilidad no implica integridad), `nunca-cambia` (la integridad no exige inmutabilidad absoluta, sino cambios controlados y documentados), `mismo-nombre` (detalle cosmético sin relación con el contenido).

**2. Hash vs Checksum** (compareChoice)
Correcta: Decisión B (hash, comparado periódicamente). Decisión A (checksum, una sola vez) es incorrecta en dos ejes a la vez: frecuencia (una sola vez vs. periódico) y propiedad de la herramienta (checksum detecta errores de transferencia, no está orientado a integridad documental sostenida — ver `hashVsChecksumProperties` en `week10.data.ts`). No existe una alternativa donde "checksum" sea superior a "hash" para este propósito.

**3. Fixity** (selectJustify, respuesta única)
Correcta: `definicion` (propiedad + prácticas sistemáticas de comprobación). Distractores: `memoria` (absurdo), `una-vez` (fixity exige verificación repetida, no un único chequeo), `igual-backup` (un respaldo no es una verificación de integridad).

**4. Verificación de integridad** (compareChoice)
Correcta: Verificación B (referencia A1B2C3 ≠ actual F9X8Z7 → requiere investigación). Verificación A muestra coincidencia exacta, por lo que no amerita investigación.

**5. Fixity — orden del proceso** (reorder)
Correcto: `archivo → referencia → almacenamiento → verificación → comparación → resultado`. El arreglo `items` se declaró en un orden distinto (`verificacion, archivo, resultado, almacenamiento, comparacion, referencia`) para que el orden visual no revele la respuesta. La secuencia coincide exactamente con la explicación de cada etapa en `FixitySection` (`week10.data.ts → fixityFlow`): no se puede comparar ni verificar sin haber establecido y almacenado antes una referencia, por lo que no existe una variante igualmente defendible con el contenido enseñado.

**6. Cambios detectados — interpretación de una diferencia de hash** (selectJustify, respuesta única)
Correcta: `correcta` ("el contenido cambió... por una causa que aún debe determinarse"). Distractores, los tres explícitamente incorrectos por diseño: `fraude` (conclusión apresurada, prohibida por el criterio pedagógico de la semana), `ignorar` (una diferencia nunca es irrelevante), `eliminar` (destruye evidencia antes de investigar). Pregunta central para la restricción "hash diferente ≠ fraude confirmado".

**7. Riesgos** (dragClassify)
Alto: `mod-no-autorizada`, `sustitucion` (alteraciones deliberadas y no registradas que comprometen directamente la confiabilidad). Medio: `corrupcion`, `ausencia-referencia` (fallas o vacíos técnicos no deliberados). Bajo: `error-transferencia` ("una parte **menor**"), `error-registro` ("**sin afectar** el resultado de la comparación") — ambos con una frase calificadora que ancla su severidad sin ambigüedad. La clasificación alta/media coincide exactamente con `riskCards` en `week10.data.ts` (misma severidad asignada en la teoría).

**8. Controles** (matchPairs)
4 pares, biyectivos. Ver tabla de verificación abajo. `definitions` se declaró en un orden que no coincide posicionalmente con `concepts`.

**9. Caso práctico — San Gabriel** (stageFlow)
No tiene una única "etapa crítica" predeterminada como clave fija de scoring (pregunta de juicio profesional, evaluada por calidad del razonamiento) — pero el `expectedSummary` orienta explícitamente hacia "investigar" como la etapa que evita una conclusión apresurada de fraude, coherente con Q6. El caso mantiene la etiqueta "(caso académico simulado)" en el propio escenario.

**10. Caso integrador** (matrixBuilder)
No tiene una única "respuesta correcta": se evalúa que existan al menos 3 filas completas y que las 2 preguntas de cierre tengan desarrollo mínimo. Incluye `consistencyHints` para los tres problemas sugeridos por chip — ver sección dedicada abajo.

---

## Verificación de bijectividad (matchPairs, Pregunta 8)

| Riesgo | Control correcto | ¿Otro control podría ser válido? |
|---|---|---|
| Modificación no autorizada | Control de acceso y permisos diferenciados | No — es la única medida preventiva de acceso entre las cuatro opciones. |
| Pérdida de referencia | Establecer un valor de hash desde el ingreso del documento | No — "controles periódicos" o "investigación" presuponen que ya existe una referencia contra la cual comparar. |
| Falta de verificación periódica | Controles de integridad programados periódicamente | No — casi tautológico con el riesgo mismo; ningún otro control programa verificaciones recurrentes. |
| Diferencia detectada sin explicación | Investigación y registro del hallazgo | No — es la respuesta obligatoria tras cualquier diferencia, por diseño de la Pregunta 6. |

`correctPairs`: cuatro claves, cuatro valores distintos. Confirmado biyectivo. Coincide exactamente con `riskControlPairs` en `week10.data.ts` (mismo mapeo riesgo→control ya enseñado en `ControlsSection`).

## Verificación del orden de Fixity (reorder, Pregunta 5)

| Posición | Etapa | Por qué no puede ir antes |
|---|---|---|
| 1 | Archivo | Es el objeto de partida; no hay nada que verificar sin él. |
| 2 | Referencia | Se calcula sobre el archivo ya existente; no puede preceder al archivo. |
| 3 | Almacenamiento | Conserva el archivo **junto con** su referencia ya calculada. |
| 4 | Verificación | Vuelve a calcular el valor en un momento posterior; requiere que el archivo esté almacenado. |
| 5 | Comparación | Compara el valor recién calculado contra la referencia; requiere ambos valores disponibles. |
| 6 | Resultado | Es la conclusión de la comparación; no puede preceder a esta. |

## Revisión de `consistencyHints` y `expectedValue` (Pregunta 10)

| `problemKeyword` (chip sugerido) | `column` | `expectedValue` | Justificación |
|---|---|---|---|
| "diferencia de hash sin explicación documentada" | `decision` | `investigar` (string) | Única decisión defendible entre las 6 opciones: ignorar/declarar-fraude/eliminar están explícitamente prohibidas por Q6; establecer-referencia y programar-verificación son controles *preventivos* que no responden a un hallazgo ya detectado. |
| "expediente sin valor de referencia desde su ingreso" | `decision` | `establecer-referencia` (string) | Coincide con `riskControlPairs` ("Pérdida de referencia → Establecer valores de referencia"). "Investigar" no aplica: no hay ninguna irregularidad que investigar, solo un vacío de proceso que corregir directamente. |
| "falta de verificación periódica de integridad" | `decision` | `programar-verificacion` (string) | Coincide con `riskControlPairs` ("Falta de verificación → Controles periódicos"). "Establecer referencia" no aplica: el problema no es la ausencia de referencia, sino la ausencia de un calendario de verificación. |

Los tres `expectedValue` son `string` (no `string[]`), porque para cada uno de los tres problemas sugeridos existe una única decisión defendible entre las seis opciones del `<select>` — a diferencia de un caso como el de la Semana 8 (formato TIFF vs. PDF/A), aquí no hay dos decisiones igualmente válidas que deban aceptarse ambas. Ningún `expectedValue` penaliza una respuesta académicamente defendible: ninguna de las tres restricciones excluye una alternativa que un estudiante pudiera sustentar con el contenido de la Semana 10.

## Sistema de puntuación

10 preguntas × 2 puntos = 20 puntos máximo = 100%. `percentage = Math.round((score / MAX_SCORE_10) * 100)`, calculado en `ProgressHeader10`, `ResultsModal10` y `ResultsSummary10` — nunca se usa `100` como denominador fijo en ningún cálculo, siempre `MAX_SCORE_10` (constante derivada de `practice10Questions.reduce(...)`, por lo que cambiar el número de preguntas o sus puntos no puede desincronizar el máximo).

Dos intentos (`pointsForVerdict10`, idéntico en estructura a `pointsForVerdict8`): primer intento correcto = 100% del valor (2 pts), parcial = 50% (1 pt), incorrecto = reintento; segundo intento correcto = 60% (1.2 pts), parcial = 30% (0.6 pts), incorrecto = 0%. Verificado matemáticamente: 10 correctas = 20/20 = 100%; 9 correctas + 1 con reintento exitoso (2do intento correcto) = 18.8/20 → pantalla de resultados confirma redondeo correcto a un decimal (`scoreToGrade`).

## Verificación de evaluador vs. alternativas mostradas

Todas las preguntas de tipo `selectJustify`, `dragClassify`, `matchPairs`, `compareChoice` y `stageFlow` evalúan por `.id`, nunca por posición en el arreglo (confirmado por lectura de `practice10.scoring.ts`). No existe shuffling/randomización en ningún componente.

## Respuestas abiertas

No se usó ninguna pregunta `openText` en PC10; las justificaciones libres se evalúan por longitud mínima significativa (`isMeaningfulText`), nunca por coincidencia textual exacta. El disclaimer "Las respuestas abiertas requieren análisis docente. La retroalimentación automática es orientativa." se muestra en cada campo abierto.

## Historial de correcciones (auditoría académica, semántica y técnica final)

| Elemento | Problema confirmado | Corrección aplicada |
|---|---|---|
| `practice10/ANSWER-KEY.md` | No existía (se había omitido durante el desarrollo inicial de la Semana 10). | Se creó este documento. |
| Q10 `consistencyHints` | Solo cubría el problema de "diferencia de hash", dejando los otros dos problemas sugeridos por chip (ausencia de referencia, falta de verificación periódica) sin ninguna verificación de coherencia — un estudiante podía asignarles "declarar fraude de inmediato" o "ignorar" y aun así obtener puntaje completo si el resto de la fila estaba lleno. | Se agregaron dos `consistencyHints` adicionales, ambos anclados en el mapeo riesgo→control ya enseñado en `riskControlPairs` (`ControlsSection`), sin introducir ninguna regla nueva no enseñada. |

Las 9 preguntas restantes (Q1–Q9) y los demás aspectos de Q10 se revisaron íntegramente bajo la prueba "abogado del estudiante" (incluyendo la biyectividad de Q8, la secuencia de Q5 y la clasificación de severidad de Q7) y no presentaron ninguna alternativa incorrecta razonablemente defendible ni discrepancia entre `practice10.data.ts`, `practice10.scoring.ts`, `practice10.grade.ts` y esta clave — se dejaron exactamente como estaban.

## Pruebas ejecutadas

1. **Ejecución completa con respuestas correctas**: 10/10 preguntas con la clave declarada en este documento → 19.2/20 (96%) en una corrida con un reintento deliberado en Q1, y 20/20 (100%) en una corrida íntegramente correcta (verificado inyectando el estado final directamente para confirmar el renderizado de "100%").
2. **Prueba inversa de distractores**: Q1, Q3, Q6 (crítica: "fraude confirmado"), Q8 (pares invertidos) — ninguno obtuvo verdict "Correcto".
3. **Prueba de contradicción en la matriz (Pregunta 10)**: se asignó "Declarar fraude de inmediato" al problema "diferencia de hash sin explicación documentada"; el sistema no marcó la respuesta como correcta. Verificado también tras la corrección que las otras dos filas quedan igualmente protegidas.
4. **Build**: `tsc -b` sin errores; `vite build` exitoso; `oxlint` sin advertencias nuevas.
5. **Responsive**: sin scroll horizontal en 1440/1024/768/390 px.
6. **Persistencia**: `gae2.week10.practica10` verificada sin interferencia con `gae2.week7.*` / `gae2.week8.*`.
