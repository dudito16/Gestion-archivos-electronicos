# Práctica Calificada 12 — Clave de respuestas y criterio de evaluación

Documentación interna para el docente. Este archivo no se muestra al estudiante en la interfaz pública de evaluación — vive junto al resto de archivos de datos de la práctica, siguiendo exactamente la misma convención y ubicación que `week-10/practice10/ANSWER-KEY.md` y `week-11/practice11/ANSWER-KEY.md`.

Para cada pregunta: tipo de interacción, concepto evaluado, sección del módulo donde se desarrolla, respuesta correcta, explicación académica, y por qué cada distractor es incorrecto.

---

**1. Fundamentos del modelo OAIS** (selectJustify, respuesta única)
Concepto evaluado: definición del modelo OAIS. Sección: "Fundamentos del modelo OAIS".
Correcta: `definicion` ("un modelo de referencia que organiza funciones, responsabilidades y tipos de información..."). Distractores: `programa` (confunde el modelo con software instalable), `formato` (confunde el modelo con un formato de archivo — error distinto pero igual de común), `procedimiento-sgd` (confunde el alcance de OAIS con un procedimiento exclusivo del SGD, cuando en realidad OAIS es un modelo independiente y más amplio).

**2. Modelo de referencia vs. software** (compareChoice)
Concepto evaluado: OAIS no se "instala"; requiere interpretación institucional. Sección: "Fundamentos del modelo OAIS".
Correcta: Institución B (define políticas, procedimientos y responsables). Institución A asume que adquirir un software basta por sí solo — la afirmación explícitamente prohibida por el encargo ("instalar OAIS garantiza automáticamente la preservación").

**3. Entidades funcionales — Ingest** (selectJustify, respuesta única)
Concepto evaluado: función de Ingest. Sección: "Entidades funcionales".
Correcta: `definicion` ("recibir, validar y preparar... SIP..."). Distractores: `almacenar-sin-validar` (omite la validación, parte esencial de Ingest), `entregar-acceso` (confunde con la función de Acceso), `monitorear-obsolescencia` (confunde con Planificación de la Preservación).

**4. Entidades funcionales — correspondencia** (matchPairs)
Concepto evaluado: responsabilidad principal de 4 de las 6 entidades funcionales. Sección: "Entidades funcionales".
4 pares, biyectivos: Administración↔políticas y acuerdos; Gestión de datos↔información descriptiva; Planificación de la preservación↔riesgos y estrategias; Acceso↔entrega con restricciones. Ver tabla de verificación abajo. `definitions` se declaró en un orden que no coincide posicionalmente con `concepts`.

**5. Paquetes de información — SIP** (selectJustify, respuesta única)
Concepto evaluado: definición y naturaleza del SIP. Sección: "Paquetes de información: SIP, AIP, DIP".
Correcta: `definicion`. Distractores: `siempre-completo` (contradice explícitamente que el SIP puede llegar con metadatos incompletos, como en el caso institucional), `igual-aip` (confunde SIP con AIP — error central que la pregunta busca prevenir), `lo-prepara-consumidor` (confunde el rol del productor con el del consumidor).

**6. Paquetes de información — AIP** (selectJustify, respuesta única)
Concepto evaluado: el AIP no es una copia simple. Sección: "Paquetes de información: SIP, AIP, DIP".
Correcta: `definicion`. Distractores: `copia-simple` (la afirmación explícitamente prohibida por el encargo), `nunca-accion-posterior` (contradice el rol de Planificación de la Preservación, que puede recomendar migraciones sobre un AIP), `lo-recibe-consumidor` (confunde AIP con DIP).

**7. Paquetes de información — DIP** (compareChoice)
Concepto evaluado: el DIP respeta restricciones de acceso y puede diferir del AIP. Sección: "Paquetes de información: SIP, AIP, DIP".
Correcta: Entrega B (solo la resolución solicitada, respetando restricciones). Entrega A entregaría información reservada indebidamente.

**8. Relación OAIS–SGD–repositorio (SGD)** (selectJustify, respuesta única)
Concepto evaluado: el SGD y OAIS son complementarios, no equivalentes. Sección: "Relación OAIS–SGD–repositorio".
Correcta: `definicion`. Distractores: `son-iguales` (los confunde), `oais-reemplaza-sgd` (afirmación absoluta no sustentada), `sgd-preserva-automaticamente` (contradice que la preservación es una función adicional y planificada, no automática).

**9. Relación OAIS–SGD–repositorio (repositorio)** (compareChoice)
Concepto evaluado: un repositorio no implementa OAIS de forma completa solo por existir. Sección: "Relación OAIS–SGD–repositorio".
Correcta: Afirmación B. Afirmación A es la afirmación explícitamente prohibida por el encargo ("todo repositorio digital implementa OAIS de manera completa").

**10. Aplicación — caso institucional** (dragClassify)
Concepto evaluado: aplicación integrada de las 6 entidades funcionales a un caso concreto. Sección: "Caso práctico institucional" (San Gabriel, caso académico simulado).
6 tareas, cada una mapeada a una entidad distinta: acuerdo de transferencia→Administración; validación del SIP→Ingest; completar metadatos→Gestión de Datos; verificar integridad de lo conservado→Almacenamiento Archivístico; anticipar obsolescencia de formato→Planificación de la Preservación; entrega respetando restricciones→Acceso. Cada ítem incluye una frase ancla (p. ej. "antes de aceptarlos" para Ingest, "ya conservados" para Almacenamiento) que evita solapamiento entre categorías.

---

## Verificación de bijectividad (matchPairs, Pregunta 4)

| Entidad | Función correcta | ¿Otra función podría ser válida? |
|---|---|---|
| Administración | Definir políticas y formalizar acuerdos con productores | No — es la única entidad con responsabilidad de acuerdos institucionales entre las cuatro opciones. |
| Gestión de datos | Administrar la información descriptiva de lo conservado | No — se distingue explícitamente de Almacenamiento Archivístico (que conserva el contenido, no la descripción). |
| Planificación de la preservación | Anticipar riesgos de obsolescencia y recomendar estrategias | No — es la única entidad orientada a monitorear el entorno tecnológico externo. |
| Acceso | Preparar y entregar el DIP respetando las restricciones de acceso | No — es la única entidad que interactúa con el Consumidor. |

`correctPairs`: cuatro claves, cuatro valores distintos. Confirmado biyectivo.

## Sistema de puntuación

10 preguntas × 2 puntos = 20 puntos máximo = equivalencia 100/100. `percentage = Math.round((score / MAX_SCORE_12) * 100)`, calculado en `ProgressHeader12`, `ResultsModal12` y `ResultsSummary12` — siempre usando la constante `MAX_SCORE_12` (derivada de `practice12Questions.reduce(...)`), nunca un `100` fijo como denominador.

Verificado mediante ejecución real (en contextos de navegador aislados, inyectando estado) los 8 casos exigidos por el encargo: 0→0%, 2→10%, 4→20%, 10→50%, 14→70%, 16→80%, 18→90%, 20→100%.

Dos intentos (`pointsForVerdict12`, idéntico en estructura a `pointsForVerdict11`): primer intento correcto = 100% del valor (2 pts), parcial = 50% (1 pt), incorrecto = reintento; segundo intento correcto = 60% (1.2 pts), parcial = 30% (0.6 pts), incorrecto = 0%. Mismo número de intentos que la Semana 11, reutilizado sin modificación.

**Protección contra doble conteo**: verificada mediante un doble clic sintético (dos eventos `click()` disparados en el mismo tick de JavaScript, sin esperar un repintado de React entre ambos) sobre el botón "Continuar" tras finalizar la Pregunta 1. Resultado: `preguntaActual` avanzó una sola vez (a 1, no a 2) y el puntaje registró 2 puntos (no 4), con un único resultado almacenado para la Pregunta 1. El mecanismo reutilizado de la Semana 11 protege correctamente contra el doble conteo; no fue necesario introducir ninguna solución paralela.

## Tipos de interacción utilizados

Por indicación explícita del encargo de priorizar selección única, clasificación/correspondencia y análisis de una situación breve, la PC12 usa únicamente 4 de los 7 tipos de interacción que el motor compartido admite: `selectJustify` (Q1, Q3, Q5, Q6, Q8 — selección única), `matchPairs` (Q4 — correspondencia), `compareChoice` (Q2, Q7, Q9 — análisis de una situación breve) y `dragClassify` (Q10 — clasificación). Deliberadamente no se usaron `reorder`, `stageFlow` ni `matrixBuilder`, los tipos más dependientes de juicio abierto, para mantener una única respuesta correcta verificable en cada pregunta.

## Verificación de evaluador vs. alternativas mostradas

Las cuatro preguntas de tipo `selectJustify`, `matchPairs` y `dragClassify` evalúan por `.id`, nunca por posición en el arreglo (confirmado por lectura de `practice12.scoring.ts`). No existe shuffling/randomización en ningún componente. Las opciones de `selectJustify` se intercalaron deliberadamente (la opción correcta nunca es sistemáticamente la primera ni la última).

## Pruebas ejecutadas

1. **Ejecución completa con respuestas correctas**: 10/10 preguntas con la clave declarada en este documento → 20/20 (100/100).
2. **Matriz de puntuación**: 8 casos (0, 2, 4, 10, 14, 16, 18, 20 puntos) verificados por ejecución real, todos con el porcentaje exacto exigido.
3. **Prueba inversa de distractores**: Q1, Q2 (crítico: "software basta por sí solo"), Q4 (pares invertidos), Q6 (crítico: "AIP = copia simple"), Q9 (crítico: "repositorio = OAIS automático") — ninguno obtuvo verdict "Correcto".
4. **Prueba de doble conteo**: doble clic sintético sobre "Continuar" — confirmado que no duplica el resultado ni el puntaje.
5. **Build**: `tsc -b` sin errores; `vite build` exitoso; `oxlint` sin advertencias nuevas (solo el patrón preexistente `react(only-export-components)`).
6. **Responsive**: sin scroll horizontal en 1440/1024/768/390 px, incluyendo las secciones de tabla comparativa y la clasificación de la Pregunta 10.
7. **Persistencia**: `gae2.week12.practica12` verificada con F5 y reanudación; claves aisladas de `gae2.week10.*` / `gae2.week11.*`.

## Historial de correcciones

**Hallazgo (auditoría posterior al lanzamiento): pista involuntaria por longitud de opción.**

Al medir objetivamente (conteo de palabras por `label`, no solo lectura cualitativa) las cuatro opciones de cada pregunta `selectJustify`, se detectó que en las Preguntas 1, 5 y 8 la opción correcta era sistemáticamente ≈2 veces más extensa que el distractor más corto:

| Pregunta | Palabras por opción (orden original: distractor, correcta, distractor, distractor) |
|---|---|
| Q1 | 11, 20, 10, 9 |
| Q5 | 9, 20, 14, 9 |
| Q8 | 10, 22, 15, 12 |

Esto permite a un estudiante sin comprensión real del contenido identificar la respuesta correcta únicamente por ser la alternativa "más elaborada", sin necesidad de entender la diferencia entre OAIS y software, SIP y AIP, o SGD y OAIS — exactamente el tipo de "pista involuntaria" que el criterio académico de la práctica exige evitar.

También se detectó, en menor grado, el mismo patrón en la Pregunta 9 (`compareChoice`): la afirmación correcta (B) tenía 20 palabras frente a 14 de la afirmación distractora (A), una proporción más leve (~1.4×) que igualmente se corrigió por consistencia.

**Corrección aplicada**: se reescribió el texto (`label`/`value`) de las opciones de las Preguntas 1, 5, 8 y 9 para equilibrar su extensión, manteniendo intacto el contenido académico, el `id`/`correctIds`/`expected` de cada opción y toda la lógica de evaluación (que opera por `id`, nunca por longitud ni posición). Resultado verificado tras la corrección (conteo de palabras por opción):

| Pregunta | Palabras por opción (mismo orden) |
|---|---|
| Q1 | 16, 16, 13, 14 |
| Q5 | 13, 18, 16, 15 |
| Q8 | 14, 18, 16, 16 |
| Q9 (A / B) | 19, 19 |

Ninguna opción difiere ya de las demás en más de 5 palabras dentro de la misma pregunta. No se modificó ningún `id`, `correctIds`, `expected`, `correctPairs` ni la lógica de `practice12.scoring.ts` — únicamente el texto visible de las alternativas. Se re-ejecutó la batería completa de pruebas (ejecución correcta 10/10 → 20/20, prueba inversa de distractores, matriz de puntuación de 8 casos, doble conteo, build, responsive) tras el cambio, sin regresiones.
