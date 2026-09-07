::: ficha
- **Duración estimada** 30 minutos
- **Antes de empezar** saber marcar segmentos en texto (lección 9)
- **Materiales** un PDF maquetado, y si tienes, uno con resaltados previos
- **Al terminar tendrás** documentos maquetados codificados, con sus figuras y sus resaltados importados
:::

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

::: consejo Antes de seguir, un repaso
Codificar en vivo consiste en usar las palabras exactas de quien participó como nombre del
código. Sirve para quedarse cerca del lenguaje del campo en las primeras lecturas, y esos
códigos se agrupan después bajo otros más abstractos.
:::

## 10.1 Por qué el PDF va aparte

En una transcripción el orden del texto es evidente. En un PDF hay columnas, notas al pie,
tablas, figuras y encabezados, y ese orden visual se pierde al extraer el texto plano.

Para materiales donde la maqueta importa, como artículos científicos, informes oficiales,
periódicos o documentos legales, QualCoder 4 incluye un módulo que muestra el PDF tal cual y
permite codificar sobre él. Puedes marcar texto y también recuadros que abarquen una figura,
una tabla o una fotografía dentro de la página.

::: video
Video 10.1. Codificación sobre un PDF, con marcado de texto y de una región de imagen dentro de la página.
:::

## 10.2 Codificar sobre la página

El funcionamiento es equivalente al del texto, con el árbol de códigos a la izquierda y el
documento al centro, ahora paginado.

::: pasos
1. Abre el documento en el módulo "Codificar PDF" (Code pdf) y elige si quieres desplazarte por página o de
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
informes junto con los segmentos de texto.
:::

::: video
Video 10.2. Apertura de un PDF maquetado y marcado de texto sobre la página.
:::

::: video
Video 10.3. Codificación de una figura o una tabla dibujando un recuadro dentro de la página.
:::

::: captura img/captura-10-01.png
Captura 10.1. Documento PDF con segmentos de texto codificados y un recuadro sobre una figura.
:::

## 10.3 Importar un PDF con resaltados

Mucha gente llega con años de PDF ya subrayados en Zotero, en Acrobat, en Preview o en el lector
de la tableta. Ese trabajo se puede aprovechar, porque QualCoder detecta las anotaciones
incrustadas en el archivo al importarlo.

Se reconocen los subrayados, los resaltados de color, los tachados y las notas de texto que
acompañan a una marca. Lo que no viaja son los dibujos a mano alzada ni los sellos, porque no
llevan asociado un fragmento de texto.

::: pasos
1. Antes de importar, abre el PDF en el programa donde lo anotaste y comprueba que las marcas
   están guardadas en el archivo, no en la base de datos de la aplicación. En Zotero, exporta el
   PDF con anotaciones incrustadas.
2. Importa el documento al proyecto de la manera habitual.
3. Acepta la detección de anotaciones cuando el programa la ofrezca, y revisa cuántas encontró.
4. Abre el documento en "Codificar PDF" (Code pdf) y localiza los pasajes marcados, que
   aparecen agrupados y todavía sin corresponder a tu sistema de códigos.
5. Reasigna cada grupo a los códigos que tú definiste, empezando por los colores que usabas con
   un significado fijo.
6. Elimina los resaltados que ya no te interesan, para que no ensucien los informes.
:::

::: video
Video 10.4. Importación de un PDF con resaltados hechos en otro programa, con la detección de anotaciones.
:::

::: video
Video 10.5. Reasignación de los resaltados importados a los códigos propios del proyecto.
:::

::: captura img/captura-10-02.png
Captura 10.2. Documento importado con los resaltados detectados y la lista de anotaciones encontradas.
:::

No es una traducción automática de tu sistema de códigos, es un punto de partida que te ahorra
volver a localizar los pasajes que ya te habían interesado. La decisión de qué significa cada
marca sigue siendo tuya.

::: tip
Si vas a subrayar PDF fuera de QualCoder pensando en importarlos después, usa colores con un
significado fijo, uno por tema. La reasignación posterior se vuelve casi mecánica.
:::

::: aviso
Las anotaciones que un lector guarda solo en su propia base de datos, y no dentro del archivo,
no viajan con el PDF. Es el caso de algunas aplicaciones de tableta y de lectura en la nube.
Comprueba abriendo el archivo en otro programa antes de dar por perdido el trabajo.
:::

## 10.4 PDF escaneados

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

::: video
Video 10.6. Qué se puede y qué no con un PDF escaneado, y cómo se ve un documento sin capa de texto.
:::

## 10.5 Cuándo conviene texto plano

El módulo "Codificar PDF" (Code pdf) no siempre es la mejor opción. Si el documento es simplemente una transcripción
exportada a PDF, sin maqueta significativa, conviene convertirla a texto plano e importarla como
documento de texto, porque el módulo de texto es más ágil y permite operaciones que dependen del
flujo continuo, como la detección de hablantes.

La pregunta útil es si perderías información al aplanar el documento. Si la respuesta es no,
apláñalo.

::: captura img/captura-10-03.png
Captura 10.3. Documento PDF con segmentos de texto codificados y un recuadro sobre una figura.
:::

::: descarga
- [Artículo maquetado a dos columnas](ejercicios/10-articulo-dos-columnas.pdf)
- [El mismo artículo con resaltados previos](ejercicios/10-articulo-resaltado.pdf)
:::

::: nota Para profundizar
Saldaña (2011) trata los documentos como un tipo de dato con derecho propio, no como relleno
del corpus, y sugiere registrar dónde se obtuvo cada uno y qué revela más allá de su contenido
literal. Rapley, en el volumen sobre análisis de documentos del SAGE Qualitative Research Kit,
desarrolla el punto con detalle.
:::

::: reto Codifica un artículo
Importa un PDF con maqueta a dos columnas, codifica tres fragmentos de texto y encierra una
figura o una tabla en un recuadro codificado. Después comprueba en el informe de códigos que
las tres marcas de texto y la región aparecen juntas.

::: solucion Si el texto se selecciona en desorden
En documentos a dos columnas la selección puede saltar entre columnas. Marca por bloques más
cortos, dentro de una misma columna, en lugar de arrastrar a lo largo de toda la página.
:::
:::

::: consejo Un escaneo sin capa de texto es una imagen
Se puede codificar por regiones y no se puede buscar ni seleccionar texto. Si necesitas el
contenido textual, pasa el documento por reconocimiento óptico de caracteres antes de
importarlo, y revisa el resultado, porque los errores de lectura ensucian todas las búsquedas.
:::

::: consejo Cuándo aplanar el documento
Si el PDF es solo una transcripción exportada, sin columnas ni figuras, conviértelo a texto
plano e impórtalo como documento de texto. El módulo de texto es más ágil y permite
operaciones que dependen del flujo continuo. La pregunta útil es si perderías información al
aplanarlo.
:::

::: comprobacion
- Codificaste texto y al menos un recuadro dentro de la página
- Si tenías PDF resaltados, las anotaciones se detectaron al importar
- Los resaltados importados quedaron reasignados a tus propios códigos
- Sabes distinguir un PDF con capa de texto de uno escaneado
:::

::: clave
- El módulo de PDF conserva la maqueta y permite codificar texto y regiones dentro de la página
- Los subrayados y notas hechos en otros programas se detectan al importar y se reasignan a tus códigos
- Los PDF escaneados solo se codifican por regiones mientras no tengan capa de texto
- Si aplanar el documento no pierde información, el módulo de texto es más ágil
:::

::: apoyo Apoyo voluntario
Acceso gratuito, hoy y siempre. Los donativos voluntarios van a [gastos médicos](https://gofund.me/5c133cc99) y a [asistencia a migrantes y personas desplazadas](https://www.paypal.com/paypalme/lorenzosalomon).
:::
