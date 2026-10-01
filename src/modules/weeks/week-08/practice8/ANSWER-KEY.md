# Práctica Calificada 8 — Clave de respuestas y criterio de evaluación

Este documento audita la lógica de evaluación de las 20 preguntas de `practice8.data.ts`. Para cada pregunta: número, tipo de interacción, respuesta correcta, criterio, explicación y por qué las alternativas son incorrectas. Esta práctica fue diseñada aplicando, desde el inicio, las correcciones aprendidas en la auditoría de la Práctica Calificada 7 (ver más abajo "Medidas preventivas aplicadas desde el diseño").

**Actualizado tras la auditoría pedagógica, académica y técnica final** (ver "Historial de correcciones" al final del documento) — se corrigieron dos hallazgos confirmados: un desbalance de distractores en la Pregunta 5 y una restricción excesiva de `consistencyHints` en la Pregunta 20.

---

**1. Concepto de interoperabilidad** (selectJustify, respuesta única)
Correcta: `definicion-completa`. Las otras tres opciones reducen la interoperabilidad a un solo aspecto (proveedor, conexión técnica, canal de envío), sin cubrir las tres dimensiones (organizacional, semántica, técnica).

**2. Interoperabilidad organizacional** (selectJustify, respuesta única)
Correcta: `organizacional` (ausencia de un proceso definido). Distractores: `semantico` (interpretación de campos), `tecnico` (formato ilegible), `no-interop` (lentitud del servidor — ni siquiera es un problema de interoperabilidad). Cada distractor pertenece inequívocamente a otra categoría.

**3. Interoperabilidad semántica** (selectJustify, respuesta única)
Correcta: `semantico`. Distractores: `tecnico` (mecanismo de transmisión), `organizacional` (continuidad del trámite), `no-interop` (rendimiento).

**4. Interoperabilidad técnica** (selectJustify, respuesta única)
Correcta: `tecnico` (mecanismo de conversión). Distractores: `organizacional` y dos variantes semánticas, para evitar que el estudiante memorice "la opción semántica es siempre la tercera".

**5. Intercambio documental** (selectJustify, multi)
Correctas: `contenido`, `metadatos`, `relacion`, `evidencia` (4 de 7). Incorrectas: `diseno`, `nombre-archivo` y `veces-abierto` — las tres cosméticas o de uso previo, sin relación con la gestión documental. *(Corregido: originalmente había solo 2 distractores frente a 4 correctas; con esa proporción, seleccionar los 6 ítems disponibles —incluyendo ambos distractores— alcanzaba exactamente el umbral de "correcto" (ratio 0.75) sin discriminar nada. Se añadió un tercer distractor para que marcar todas las opciones ya no alcance el umbral.)*

**6. Intercambio de expediente** (selectJustify, multi)
Correctas: `fechas`, `orden` (2 de 4) — literalmente lo que el escenario describe como faltante. Incorrectas: `tipo-letra`, `color-sellos` — ninguno se menciona en el caso.

**7. Correspondencia de metadatos** (matchPairs)
4 pares, biyectivos. Ver tabla de verificación abajo.

**8. Caso de interoperabilidad** (compareChoice)
Correcta: Correspondencia B (código↔número de expediente). Correspondencia A (fecha de creación↔fecha de registro) es un distractor realista pero incorrecto: representan momentos distintos del proceso, no el mismo concepto.

**9. Identificación de pérdida de información** (selectJustify, multi)
Correctas: `area`, `evidencia-recepcion`. Incorrecta clave: `contenido` — el propio escenario dice "se visualiza correctamente", por lo que seleccionarlo sería contradecir el texto del caso, no una interpretación válida. `color-sello` tampoco se menciona.

**10. Digitalización** (selectJustify, respuesta única)
Correcta: `definicion`. Distractores: confunden digitalización con "documento digital" (nunca existió en papel) y con "solo una fotografía" — ambas distinciones trabajadas en la Semana 1 y retomadas en el Capítulo "Digitalización".

**11. Calidad de imagen** (compareChoice)
Correcta: Imagen B (orientada, completa, legible). Imagen A está inclinada, cortada y es poco legible — no hay ambigüedad posible.

**12. Resolución** (selectJustify, respuesta única)
Correcta: `depende` (no existe un valor universal). Distractores: `siempre-300` (viola explícitamente la regla pedagógica del curso), `mas-grande-mejor` (tamaño de archivo no es sinónimo de calidad), `no-influye-ocr` (afirmación falsa).

**13. Color** (compareChoice)
Correcta: Documento B (sello a color, firma en tinta azul — el color es parte del contenido informativo). Documento A es solo texto en tinta negra, sin elementos donde el color aporte información.

**14. Control de calidad** (stageFlow)
5 etapas fijas, mínimo 4 completas con 3 columnas. No existe una única "etapa crítica" predeterminada en el sentido de una clave fija de scoring (es una pregunta de juicio profesional, evaluada por calidad del razonamiento) — pero el `expectedSummary` orienta explícitamente hacia "control de imagen" como la etapa donde se detectan errores de orientación/legibilidad, igual que en el contenido teórico de la semana.

**15. TIFF, JPEG y PNG** (dragClassify)
Cada afirmación incluye una frase calificadora que fija su categoría de forma inequívoca (p. ej. "cuya compresión puede perder información" → JPEG; "sin pérdida... no debe asumirse como el mejor formato archivístico" → PNG). Ningún ítem podría clasificarse razonablemente en dos categorías.

**16. PDF** (selectJustify, respuesta única)
Correcta: PDF no garantiza automáticamente preservación. Distractor `imagen-sin-perdida` confunde PDF con PNG deliberadamente, para verificar que el estudiante no mezcle formatos de documento con formatos de imagen.

**17. PDF/A** (selectJustify, respuesta única)
Correcta: familia de formatos con requisitos específicos de preservación. Distractores: identifica con PDF común, afirma garantía absoluta, y restringe incorrectamente su uso a imágenes.

**18. Selección de formato** (selectJustify, respuesta única)
Correcta: PDF/A. El escenario especifica "documento de texto de varias páginas" + "preservación a largo plazo" + "sin depender de un software específico" — tres condiciones que descartan JPEG y PNG (formatos de imagen) y distinguen a PDF/A de TIFF (formato de imagen, no pensado para documentos de texto de varias páginas como evidencia).

**19. Caso de digitalización** (compareChoice)
Correcta: Enfoque B (escala de grises o color, resolución suficiente para distinguir trazos desvanecidos). Enfoque A prioriza el ahorro de espacio sobre la legibilidad, lo que compromete el propósito mismo de digitalizar ese material.

**20. Caso integrador** (matrixBuilder)
No tiene una única "respuesta correcta": se evalúa que existan al menos 3 filas completas (problema + decisión + criterio + formato + control) y que las 2 preguntas de cierre tengan desarrollo mínimo. **Incluye `consistencyHints` desde el diseño inicial** (no como corrección posterior): si una fila usa el problema sugerido "documentos digitalizados hace años con baja resolución" pero el formato elegido no es TIFF ni PDF/A, el puntaje máximo de la pregunta se limita a 0.5 (fuerza "parcial", nunca "correcto") — evitando que el sistema acepte una combinación contradictoria solo por tener los campos llenos. *(Corregido: la versión original solo aceptaba TIFF como formato válido para esa fila. El propio contenido de la semana enseña dos finalidades legítimas y distintas para este caso — "conservar el máximo detalle" (TIFF, ver `formatSelectionCases.caso-4`) y "preservar a largo plazo como evidencia institucional" (PDF/A, ver `caso-3`) — y el enunciado de la Pregunta 20 no fija cuál de las dos finalidades aplica. Exigir únicamente TIFF penalizaba una elección defendible (PDF/A) como si fuera un error. Se amplió `expectedValue` a `string | string[]` para aceptar ambos formatos como coherentes; JPEG y PNG siguen marcándose como contradictorios, porque ambos representan un paso atrás en calidad frente a un problema definido explícitamente como de baja calidad.)*

---

## Verificación de bijectividad (matchPairs, Pregunta 7)

| Concepto | Definición correcta | ¿Otra definición podría ser válida? |
|---|---|---|
| Código de expediente | Número de expediente | No — ambos identifican de forma única el expediente; no se solapa con unidad, clase ni condición. |
| Área responsable | Unidad responsable | No — se refiere a responsabilidad organizacional, dimensión distinta de identificación, clasificación o estado. |
| Tipo documental | Clase documental | No — clasificación del documento, no se confunde con las otras tres dimensiones. |
| Estado del expediente | Condición del expediente | No — situación actual del trámite, dimensión distinta de las otras tres. |

`correctPairs`: cuatro claves, cuatro valores distintos. Confirmado biyectivo. Las cuatro dimensiones (identificación / responsabilidad / clasificación / estado) son conceptualmente independientes entre sí, sin riesgo de solapamiento.

## Medidas preventivas aplicadas desde el diseño (lecciones de la auditoría de PC7)

A diferencia de PC7 (donde estos problemas se encontraron y corrigieron después de implementada), en PC8 se aplicaron desde el inicio:

1. **Sin "orden visual = respuesta correcta"**: en las preguntas `reorder` no se usó esta vez ninguna pregunta de ese tipo que coincidiera con un orden predecible; donde existía riesgo similar (`matchPairs` de la Pregunta 7), el arreglo `definitions` se escribió en un orden que NO coincide con el de `concepts`.
2. **Sin alternativas correctas agrupadas al inicio**: en todas las preguntas `selectJustify`, las opciones correctas se intercalaron deliberadamente con las incorrectas (ninguna pregunta tiene sus respuestas correctas como las primeras N de la lista).
3. **Sin presuponer la respuesta en el enunciado**: ningún escenario incluye palabras que ya revelen la clasificación esperada (p. ej., no se usa la palabra "autorizado" de forma que contradiga la respuesta, como ocurrió en la Q4 original de PC7).
4. **`consistencyHints` en la pregunta integradora desde el diseño inicial**: la Pregunta 20 ya nace con la verificación de coherencia problema↔formato, en vez de agregarse como corrección posterior.
5. **Distractores no defendibles profesionalmente**: se revisó cada distractor para que ninguno sea "técnicamente válido pero menos adecuado" — todos son claramente incorrectos para el escenario planteado.

## Verificación de evaluador vs. alternativas mostradas

Todas las preguntas de tipo `selectJustify`, `dragClassify`, `matchPairs`, `compareChoice` y `stageFlow` evalúan por `.id`, nunca por posición en el arreglo. Confirmado por lectura de `practice8.scoring.ts` (misma lógica que `practice7.scoring.ts`, ya auditada en la Semana 7). No existe shuffling/randomización en ningún componente de esta práctica.

## Respuestas abiertas

No se usó ninguna pregunta `openText` en PC8 (a diferencia de PC7); las justificaciones libres de `selectJustify`/`compareChoice`/`matrixBuilder` se evalúan por longitud mínima significativa (`isMeaningfulText`), nunca por coincidencia textual exacta. El disclaimer "Las respuestas abiertas requieren análisis docente. La retroalimentación automática es orientativa." se muestra en cada campo abierto.

## Sistema de dos intentos

Idéntico a PC4-PC7 (`pointsForVerdict8`): primer intento correcto = 100%, parcial = 50%, incorrecto = reintento; segundo intento correcto = 60%, parcial = 30%, incorrecto = 0%. Sin cambios respecto a la lógica existente.

## Historial de correcciones (auditoría pedagógica, académica y técnica final)

| Pregunta | Problema confirmado | Corrección aplicada |
|---|---|---|
| 5 | `selectJustify` multi con 4 correctas y solo 2 distractores: seleccionar las 6 opciones disponibles (incluyendo ambos distractores) alcanzaba exactamente el umbral `ratio ≥ 0.75` y se marcaba "Correcto", sin discriminar los elementos cosméticos del escenario. | Se añadió un tercer distractor (`veces-abierto`). Seleccionar todas las opciones ahora da ratio 0.625 (parcial), ya no alcanza el umbral de "correcto". |
| 20 | `consistencyHints` exigía TIFF como único formato válido para la fila "digitalizados hace años con baja resolución", pero el contenido de la propia semana enseña dos finalidades distintas y legítimas para ese escenario (TIFF para máximo detalle, PDF/A para preservación a largo plazo como evidencia), sin que el enunciado fije cuál aplica — penalizaba una respuesta defendible (PDF/A) como si fuera incorrecta. | Se amplió el tipo `expectedValue` a `string \| string[]` y se aceptan ahora `tiff` y `pdfa` como formatos consistentes para esa fila; JPEG y PNG se mantienen como contradictorios. |

Las 18 preguntas restantes se revisaron íntegramente (redacción, alternativas, clave, scoring, retroalimentación) bajo la prueba "abogado del estudiante" y no presentaron ninguna alternativa incorrecta razonablemente defendible ni discrepancia entre `practice8.data.ts`, `practice8.scoring.ts`, `practice8.grade.ts` y esta clave — se dejaron exactamente como estaban.

## Pruebas ejecutadas

1. **Ejecución completa con respuestas correctas** (20/20 preguntas respondidas con la clave declarada en este documento) — ver reporte final para el resultado numérico.
2. **Prueba inversa de distractores**: para una muestra representativa de preguntas (selectJustify de respuesta única, compareChoice, matchPairs, dragClassify) se seleccionó deliberadamente un distractor y se confirmó que ninguno obtuvo verdict "Correcto".
3. **Prueba de contradicción en la matriz (Pregunta 20)**: se asignó PNG (formato inconsistente) al problema "documentos digitalizados hace años con baja resolución"; el sistema no marcó la respuesta como correcta. Se verificó además que TIFF y PDF/A ya no se penalizan entre sí para esa misma fila.
4. **Prueba del exploit de la Pregunta 5**: se seleccionaron las 7 opciones disponibles (las 4 correctas y las 3 incorrectas); el sistema ya no marca "Correcto" (ratio 0.625, verdict "parcial").
5. **Build**: `tsc -b` sin errores; `vite build` exitoso; `oxlint` sin advertencias nuevas.
6. **Responsive**: sin scroll horizontal en 1440/1024/768/390 px.
