::: preguntas
- ¿Por qué el PDF tiene un módulo aparte?
- ¿Cómo aprovecho los resaltados que ya hice en otro programa?
- ¿Qué pasa con los PDF escaneados?
:::

::: objetivos
- Codificar directamente sobre la maqueta de un PDF
- Importar resaltados y notas hechos fuera de QualCoder
- Reconocer las limitaciones de los documentos sin capa de texto
:::

## Por qué el PDF va aparte

En una transcripción el orden del texto es evidente. En un PDF hay columnas, notas al pie,
tablas, figuras y encabezados, y ese orden visual se pierde al extraer el texto plano.

Para materiales donde la maqueta importa, como artículos científicos, informes oficiales,
periódicos o documentos legales, QualCoder 4 incluye un módulo que muestra el PDF tal cual y
permite codificar sobre él. Puedes marcar texto y también recuadros que abarquen una figura,
una tabla o una fotografía dentro de la página.

::: video
Codificación sobre un PDF, con marcado de texto y de una región de imagen dentro de la página.
:::

## Codificar sobre la página

El funcionamiento es equivalente al del texto, con el árbol de códigos a la izquierda y el
documento al centro, ahora paginado.

::: pasos
1. Abre el documento en el módulo de PDF y elige si quieres desplazarte por página o de
   corrido.
2. Selecciona texto sobre la página y aplica el código desde el árbol o el menú contextual.
3. Para codificar una figura o una tabla, dibuja un recuadro sobre esa zona y aplícale el
   código.
4. Ajusta el tamaño del recuadro arrastrando sus bordes si quedó corto.
5. Revisa las franjas del margen para ver la densidad de codificación de cada página.
:::

::: nota
Los recuadros se registran con su página y sus coordenadas. Por eso una región codificada
vuelve a aparecer exactamente donde estaba al reabrir el documento, y por eso aparece en los
reportes junto con los segmentos de texto.
:::

## Traer resaltados hechos fuera

Mucha gente llega con años de PDF ya subrayados en otro programa. Ese trabajo se puede
aprovechar, porque QualCoder 4 detecta las anotaciones incrustadas en el archivo al importarlo,
tanto subrayados como marcados y notas.

Los resaltados importados llegan agrupados, y a partir de ahí puedes reasignarlos a tus propios
códigos. No es una traducción automática de tu sistema de códigos, es un punto de partida que
te ahorra volver a localizar los pasajes que ya te habían interesado.

::: tip
Si vas a subrayar PDF fuera de QualCoder pensando en importarlos después, usa colores con un
significado fijo. Un color por tema hace que la reasignación posterior sea casi mecánica.
:::

## PDF escaneados

Un PDF escaneado sin reconocimiento de texto es, para el programa, una imagen por página. Se
puede codificar por regiones, y no se puede seleccionar texto ni buscar palabras.

Si necesitas trabajar con el contenido textual, hay que pasar el documento por un
reconocimiento óptico de caracteres antes de importarlo. Existen herramientas libres para eso, y
después conviene revisar el resultado, porque el reconocimiento sobre documentos antiguos o mal
escaneados produce errores que después ensucian las búsquedas.

::: aviso
Un PDF con restricciones de edición o protegido con contraseña puede impedir tanto la
extracción de texto como la codificación. Conviene detectarlo al importar y no cuando ya
llevas medio corpus trabajado.
:::

## Cuándo conviene texto plano

El módulo de PDF no siempre es la mejor opción. Si el documento es simplemente una transcripción
exportada a PDF, sin maqueta significativa, conviene convertirla a texto plano e importarla como
documento de texto, porque el módulo de texto es más ágil y permite operaciones que dependen del
flujo continuo, como la detección de hablantes.

La pregunta útil es si perderías información al aplanar el documento. Si la respuesta es no,
apláñalo.

::: captura
Documento PDF con segmentos de texto codificados y un recuadro sobre una figura.
:::

::: reto Codifica un artículo
Importa un PDF con maqueta a dos columnas, codifica tres fragmentos de texto y encierra una
figura o una tabla en un recuadro codificado. Después comprueba en el reporte de códigos que
las tres marcas de texto y la región aparecen juntas.

::: solucion Si el texto se selecciona en desorden
En documentos a dos columnas la selección puede saltar entre columnas. Marca por bloques más
cortos, dentro de una misma columna, en lugar de arrastrar a lo largo de toda la página.
:::
:::

::: quiz
Tienes veinte informes en PDF escaneados de los años noventa y necesitas buscar términos
específicos en su interior. ¿Qué haces primero?
- [ ] Importarlos y usar la búsqueda de texto del módulo de PDF
- [x] Pasarlos por reconocimiento óptico de caracteres y revisar el resultado antes de importar
- [ ] Codificarlos por regiones sin más
> Sin capa de texto no hay nada que buscar. El reconocimiento óptico se hace antes de importar,
> y su revisión es parte del trabajo porque los errores de lectura se arrastran a todo el análisis.
:::

::: clave
- El módulo de PDF conserva la maqueta y permite codificar texto y regiones dentro de la página
- Los subrayados y notas hechos en otros programas se detectan al importar y se reasignan a tus códigos
- Los PDF escaneados solo se codifican por regiones mientras no tengan capa de texto
- Si aplanar el documento no pierde información, el módulo de texto es más ágil
:::
