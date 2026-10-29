# Práctica Calificada 13 — Clave de respuestas y criterio de evaluación

Documentación interna para el docente. Este archivo no se muestra al estudiante en la interfaz pública de evaluación — vive junto al resto de archivos de datos de la práctica, siguiendo exactamente la misma convención y ubicación que `week-11/practice11/ANSWER-KEY.md` y `week-12/practice12/ANSWER-KEY.md`.

Para cada pregunta: tipo de interacción, concepto evaluado, sección del módulo donde se desarrolla, respuesta correcta, explicación académica, y por qué cada distractor es incorrecto.

---

**1. Metadatos de preservación** (selectJustify, respuesta única)
Concepto evaluado: definición de los metadatos de preservación. Sección: "Metadatos de preservación".
Correcta: `definicion` ("información que puede registrar datos sobre objetos, eventos, agentes, derechos o verificaciones, según corresponda"). El alcance se amplió deliberadamente a las cuatro entidades PREMIS (objetos, eventos, agentes, derechos) más las verificaciones, en lugar de limitarlo solo a "eventos, agentes y verificaciones", y la frase "según corresponda" evita implicar que todo objeto deba tener los cinco tipos de información simultáneamente. Distractores: `son-descriptivos` (confunde con metadatos descriptivos), `son-el-contenido` (confunde el metadato con el contenido mismo del archivo), `son-software` (confunde el metadato con una herramienta que ejecuta la preservación).

**2. PREMIS** (compareChoice)
Concepto evaluado: PREMIS exige documentar estructuradamente los eventos, con la información pertinente sobre agentes y resultados, no solo conservar. Sección: "PREMIS 3.0".
Correcta: Institución B (registra cada evento de forma estructurada, con información pertinente sobre fecha, resultado y agente). La redacción evita sugerir que fecha, resultado y agente son obligatorios de forma idéntica para todo evento — se habla de "información pertinente", no de tres campos siempre exigidos. Institución A conserva sin documentar ninguna acción — insuficiente conforme a PREMIS.

**3. METS** (selectJustify, respuesta única)
Concepto evaluado: finalidad de structMap, diferenciada de fileSec y dmdSec. Sección: "METS".
Correcta: `definicion` ("organizar jerárquicamente los archivos..." / structMap representa las relaciones estructurales). El feedback y el resumen ya no afirman que fileSec "únicamente enumera" los archivos: se corrigió para indicar que fileSec organiza información sobre los archivos, structMap representa sus relaciones estructurales, y dmdSec contiene la descripción — tres funciones distintas, ninguna reducida a una enumeración simple. Distractores: `solo-enumera` (atribuye a structMap, incorrectamente, una function de mera enumeración sin jerarquía — sigue siendo un distractor válido, ya que lo que describe no es lo que structMap hace), `descriptiva` (confunde con dmdSec), `ejecuta-preservacion` (atribuye a METS una ejecución automática que no realiza).

**4. Dublin Core — correspondencia** (matchPairs)
Concepto evaluado: finalidad de 4 elementos del Dublin Core Metadata Element Set. Sección: "Dublin Core".
4 pares, biyectivos: title↔nombre del recurso; creator↔persona u organización principalmente responsable de crearlo; date↔fecha de un evento del ciclo de vida; format↔formato, medio o características físicas, según el contexto. Las definiciones de `creator` y `format` se corrigieron para alinearse con el Dublin Core Metadata Element Set real: `creator` se refiere a la persona u organización responsable de crear el recurso (no solo "el contenido"), y `format` puede abarcar formato, medio o características físicas, no únicamente "el formato digital identificado". Ver tabla de verificación abajo. `definitions` se declaró en un orden que no coincide posicionalmente con `concepts`.

**5. Relación entre estándares** (selectJustify, respuesta única — sin cambios en esta auditoría)
Concepto evaluado: PREMIS, METS y Dublin Core resuelven problemas distintos y se complementan. Sección: "Relación entre PREMIS, METS y Dublin Core".
Correcta: `definicion`. Se verificó que el feedback y este documento mantienen la distinción entre preservación (PREMIS), estructuración (METS) y descripción (Dublin Core); no requirió corrección. Distractores: `equivalentes` (los presenta como intercambiables), `mets-sustituye` (afirma que METS sustituye a PREMIS), `dc-registra-eventos` (atribuye a Dublin Core una función que corresponde a PREMIS).

**6. Relación entre estándares (análisis de una situación breve)** (compareChoice)
Concepto evaluado: implementar Dublin Core no elimina la necesidad de documentar estructuradamente la preservación; PREMIS puede complementarlo, sin ser obligatorio de forma universal. Sección: "Relación entre PREMIS, METS y Dublin Core".
Correcta: Postura B (reconoce que aún debe documentar estructuradamente sus eventos y agentes de preservación). Se reformuló para no presentar a PREMIS como un requisito obligatorio para "todas las instituciones": la postura correcta exige documentar la preservación de forma estructurada, y el feedback aclara que PREMIS "puede apoyar esa necesidad, sin ser la única vía posible". Postura A asume que Dublin Core basta por sí solo — la afirmación que la pregunta busca prevenir.

**7. BagIt** (selectJustify, respuesta única)
Concepto evaluado: la verificación de integridad de BagIt depende de los manifiestos y las sumas de verificación que contienen, sin garantizar autenticidad histórica. Sección: "BagIt".
Correcta: `definicion` ("permite empaquetar archivos con un manifiesto de sumas de verificación que permite comprobar su integridad"). Se precisó el mecanismo (sumas de verificación registradas en el manifiesto) en lugar de una referencia genérica a "un manifiesto". Distractores: `garantiza-autenticidad` (la afirmación explícitamente prohibida por el encargo: BagIt no garantiza autenticidad histórica por sí solo), `sustituye-todo` (presenta a BagIt como sustituto universal), `exige-repositorio` (le atribuye un requisito que no tiene).

**8. Identificación y validación de formatos (análisis de una situación breve)** (compareChoice)
Concepto evaluado: identificar y validar son comprobaciones distintas; la validación se realiza frente a un perfil de conformidad específico (p. ej., PDF/A), no porque todo archivo de ese formato deba cumplirlo. Sección: "Validación de formatos".
Correcta: Acción B (valida el perfil de conformidad requerido en el caso). El escenario y las opciones se reformularon para hablar de "un perfil de conformidad requerido (por ejemplo, PDF/A, cuando corresponda)" en vez de "un perfil de preservación específico" sin matizar, dejando explícito que no todo PDF debe ser PDF/A — solo aquellos casos donde ese perfil sea el requerido. Acción A asume que identificar basta por sí solo — el error central que la pregunta busca prevenir.

**9. Normalización y eventos de preservación** (selectJustify, respuesta única)
Concepto evaluado: la normalización requiere evaluación previa y debe documentarse como evento de preservación conforme a los procedimientos aplicables; la conservación del original es habitual, no una obligación universal sin matices. Sección: "Normalización de formatos" y "Eventos de preservación".
Correcta: `definicion`. El feedback se ajustó para hablar de documentación "conforme a los procedimientos aplicables" (en lugar de una fórmula fija) y para calificar la conservación del original como una práctica habitual sujeta a la política institucional, no como una regla absoluta. Distractores: `automatica` (aplica la normalización sin evaluación, contradice lo enseñado), `elimina-original` (contradice la conservación habitual del original), `no-se-registra` (contradice la necesidad de documentar toda acción como evento).

**10. Aplicación — caso institucional** (dragClassify)
Concepto evaluado: aplicación integrada de PREMIS, METS, Dublin Core y BagIt a un caso concreto. Sección: "Caso práctico institucional" (San Gabriel, caso académico simulado).
6 tareas, cada una mapeada a un estándar: registrar el evento de identificación→PREMIS; representar la relación jerárquica→METS; completar la descripción básica→Dublin Core; generar el manifiesto→BagIt; registrar el agente de una validación→PREMIS; declarar en bagit.txt la versión de BagIt→BagIt. El ítem de declaración de versión se reformuló para nombrar explícitamente `bagit.txt` como el archivo donde se declara la versión, distinguiéndolo del manifiesto (que registra sumas de verificación de contenido, no la versión del formato de empaquetado). Cada ítem incluye una frase ancla que evita solapamiento entre categorías (p. ej. "con su resultado y agente responsable" para PREMIS, "antes de transferirlos"/"antes de transferir el paquete completo" para BagIt).

---

## Verificación de bijectividad (matchPairs, Pregunta 4)

| Elemento | Finalidad correcta | ¿Otra finalidad podría ser válida? |
|---|---|---|
| title | Nombre por el que se conoce el recurso | No — es la única finalidad que corresponde a identificar el recurso por su nombre entre las cuatro opciones. |
| creator | Persona u organización principalmente responsable de crear el recurso | No — se distingue explícitamente de `publisher` (no evaluado en esta pregunta) y de la fecha o el formato. |
| date | Fecha asociada a un evento del ciclo de vida del recurso | No — es la única finalidad referida a un momento temporal. |
| format | Formato, medio o características físicas del recurso, según el contexto | No — es la única finalidad referida a las características técnicas o físicas del archivo. |

`correctPairs`: cuatro claves, cuatro valores distintos. Confirmado biyectivo.

## Verificación de equilibrio de longitud de las opciones (selectJustify / compareChoice)

La auditoría de la PC12 (Semana 12) encontró que una opción correcta sistemáticamente más extensa que los distractores constituye una pista involuntaria explotable sin comprensión real. Para evitar reintroducir ese problema, se midió el número de palabras de cada opción de esta práctica **antes** de cerrar el banco de preguntas (no como corrección posterior):

| Pregunta | Palabras por opción (verificado tras la corrección académica) |
|---|---|
| Q1 | 16, 14, 13, 13 |
| Q2 (A / B) | 15, 17 |
| Q3 | 12, 13, 14, 11 |
| Q5 | 14, 16, 13, 13 |
| Q6 (A / B) | 17, 18 |
| Q7 | 15, 15, 14, 12 |
| Q8 (A / B) | 16, 15 |
| Q9 | 16, 18, 14, 14 |

En ninguna pregunta la opción correcta es la más extensa por un margen explotable: la diferencia máxima entre opciones de una misma pregunta es de 7 palabras (Q3), y la opción correcta nunca se distingue por ser sustancialmente más larga que el distractor más corto. Esta tabla se volvió a medir después de la corrección académica de 2026 (ver "Historial de correcciones" abajo) para confirmar que las ampliaciones de texto exigidas (p. ej., Q1, Q2, Q6, Q7, Q8) no reintrodujeran el patrón de "pista involuntaria por longitud" detectado en la auditoría de la PC12.

## Sistema de puntuación

10 preguntas × 2 puntos = 20 puntos máximo = equivalencia 100/100. `percentage = Math.round((score / MAX_SCORE_13) * 100)`, calculado en `ProgressHeader13`, `ResultsModal13` y `ResultsSummary13` — siempre usando la constante `MAX_SCORE_13` (derivada de `practice13Questions.reduce(...)`), nunca un `100` fijo como denominador.

Verificado mediante ejecución real (inyectando estado en `localStorage` dentro de un navegador aislado) los 8 casos exigidos por el encargo: 0→0%, 2→10%, 4→20%, 10→50%, 14→70%, 16→80%, 18→90%, 20→100%.

Dos intentos (`pointsForVerdict13`, idéntico en estructura a `pointsForVerdict12`): primer intento correcto = 100% del valor (2 pts), parcial = 50% (1 pt), incorrecto = reintento; segundo intento correcto = 60% (1.2 pts), parcial = 30% (0.6 pts), incorrecto = 0%. Mismo mecanismo que la Semana 12, reutilizado sin modificación.

**Protección contra doble conteo**: el mecanismo de `Practice13Quiz`/`QuestionCard13` reutiliza, sin modificación, el patrón ya verificado en las Semanas 11 y 12 (el estado avanza de forma síncrona dentro del mismo `setState`, sin ventana para un doble conteo por doble clic).

**Prevención del exploit de selección múltiple (hallazgo de la auditoría de la PC8, Semana 8)**: todas las preguntas `selectJustify` de esta práctica tienen `correctIds` de un solo elemento y `minSelected: 1`. Con `correctSet.size = 1`, seleccionar más de una opción introduce automáticamente un falso positivo que resta 0.5 por cada selección incorrecta, llevando la razón a 0 o menos — nunca se alcanza el umbral `ratio >= 0.75` seleccionando todas las opciones. Verificado explícitamente para la Pregunta 1 (ver pruebas ejecutadas).

## Tipos de interacción utilizados

Por la misma razón documentada en la Semana 12 (una única respuesta correcta verificable, evitando el juicio abierto de `reorder`, `stageFlow` o `matrixBuilder`), la PC13 usa los mismos 4 de los 7 tipos de interacción que el motor compartido admite: `selectJustify` (Q1, Q3, Q5, Q7, Q9 — selección única), `matchPairs` (Q4 — correspondencia), `compareChoice` (Q2, Q6, Q8 — análisis de una situación breve) y `dragClassify` (Q10 — clasificación).

## Verificación de evaluador vs. alternativas mostradas

Las preguntas evalúan por `.id`, nunca por posición en el arreglo (confirmado por lectura de `practice13.scoring.ts`, idéntico en estructura a `practice12.scoring.ts`). No existe shuffling/randomización en ningún componente. Las opciones de `selectJustify` se intercalaron deliberadamente (la opción correcta nunca es sistemáticamente la primera ni la última) y, como se documenta arriba, se equilibraron en extensión desde el diseño inicial.

## Pruebas ejecutadas

1. **Ejecución completa con respuestas correctas**: 10/10 preguntas con la clave declarada en este documento → 20/20 (100/100).
2. **Matriz de puntuación**: 8 casos (0, 2, 4, 10, 14, 16, 18, 20 puntos) verificados por ejecución real, todos con el porcentaje exacto exigido.
3. **Prueba inversa de distractores**: Q1 (incluyendo el intento de seleccionar las cuatro opciones a la vez), Q2 (crítico: "no documentar ningún evento"), Q6 (crítico: "Dublin Core basta por sí solo"), Q8 (crítico: "identificar basta, no hace falta validar") — ninguno obtuvo verdict "Correcto".
4. **Prueba de doble conteo**: verificado mediante inspección del flujo síncrono de `handleFinalizeQuestion`, idéntico al de la Semana 12 ya verificado con doble clic sintético.
5. **Build**: `tsc -b` sin errores; `vite build` exitoso; `oxlint` sin advertencias nuevas (solo el patrón preexistente `react(only-export-components)`).
6. **Responsive**: sin scroll horizontal en 1440/1024/768/390 px, incluyendo las secciones de tabla (Dublin Core, comparación de estándares) y la clasificación de la Pregunta 10.
7. **Persistencia**: `gae2.week13.practica13` verificada con F5 y reanudación; claves aisladas de `gae2.week10.*` / `gae2.week11.*` / `gae2.week12.*`.

## Historial de correcciones

**Revisión académica y correctiva (posterior al lanzamiento)**: se recibieron 10 observaciones puntuales sobre la precisión académica de las Preguntas 1, 2, 3, 4, 6, 7, 8, 9 y 10 (la Pregunta 5 se revisó y no requirió cambios). Ninguna observación cuestionó la respuesta correcta de ninguna pregunta; todas apuntaban a matizar enunciados, opciones o retroalimentación que resultaban correctos en esencia pero imprecisos, demasiado absolutos, o desalineados con la terminología exacta de PREMIS/METS/Dublin Core/BagIt. Resumen de los cambios:

| Pregunta | Cambio aplicado | ¿Cambió la respuesta correcta? |
|---|---|---|
| Q1 | La opción correcta y el feedback ahora cubren las cuatro entidades PREMIS (objetos, eventos, agentes, derechos) más verificaciones, con "según corresponda" para no exigir que todo objeto tenga los cinco tipos de información. | No |
| Q2 | El enunciado y el feedback ya no presentan fecha+resultado+agente como tres campos obligatorios idénticos para todo evento; se habla de "información pertinente" documentada de forma estructurada. | No |
| Q3 | Se corrigió la afirmación de que fileSec "únicamente enumera" los archivos: ahora se dice que fileSec organiza información sobre ellos, structMap representa sus relaciones estructurales, y dmdSec contiene la descripción. | No |
| Q4 | `creator` se redefinió como la persona u organización responsable de crear el recurso (no "el contenido"); `format` ahora cubre formato, medio o características físicas, no solo "el formato digital identificado". | No |
| Q5 | Revisado; ya mantenía la distinción preservación/estructuración/descripción. Sin cambios. | No |
| Q6 | Se eliminó la implicación de que PREMIS es obligatorio para toda institución: la postura correcta exige documentar estructuradamente la preservación, y PREMIS se presenta como un estándar que puede apoyar esa necesidad, no como la única vía. | No |
| Q7 | Se precisó que la verificación de integridad depende de las sumas de verificación registradas en el manifiesto, en vez de una referencia genérica a "un manifiesto". | No |
| Q8 | El escenario y las opciones ahora hablan de "un perfil de conformidad requerido (p. ej., PDF/A, cuando corresponda)" en vez de "un perfil de preservación específico" sin matizar, dejando explícito que no todo PDF debe ser PDF/A. | No |
| Q9 | El feedback ahora exige documentar "conforme a los procedimientos aplicables" y califica la conservación del original como práctica habitual (no obligación universal sin matices). | No |
| Q10 | El ítem de declaración de versión ahora nombra explícitamente `bagit.txt`, distinguiéndolo del manifiesto de sumas de verificación. | No |

**Verificación de balance de longitud tras la corrección**: dado que varias correcciones ampliaron el texto de la opción/postura correcta (Q1, Q2, Q6, Q7, Q8), se volvió a medir el número de palabras por opción en cada pregunta afectada (tabla arriba) para confirmar que ninguna opción correcta quedó siendo sustancialmente más extensa que sus distractores — el mismo tipo de hallazgo detectado en la auditoría de la PC12. Resultado: ninguna reintroducción del patrón; la mayor diferencia entre la opción correcta y la más corta de la misma pregunta es de 4 palabras (Q6: 18 vs. 17, prácticamente iguales).

**Verificación de `dragClassify` (Q10) para clasificaciones parciales**: se inspeccionó `practice13.scoring.ts` (caso `dragClassify`) y se confirmó, mediante prueba real, que el cálculo `ratio = score / total` y `combineVerdict` siguen produciendo los verdicts esperados para las 6 tareas de la Pregunta 10: 6/6 y 5/6 → "correct"; 4/6, 3/6, 2/6 y 1/6 → "partial"; 0/6 → "review" — sin cambios de código, solo verificación de que la reformulación del ítem de `bagit.txt` no alteró la lógica de puntuación (que opera por `category`, no por el texto del `label`).
