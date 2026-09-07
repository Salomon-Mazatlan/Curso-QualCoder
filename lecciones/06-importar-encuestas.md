::: ficha
- **Duración estimada** 30 minutos
- **Antes de empezar** tener el proyecto creado y saber importar archivos (lecciones 4 y 5)
- **Materiales** una hoja de cálculo con respuestas, propia o de ejemplo
- **Al terminar tendrás** un cuestionario convertido en casos, atributos y textos codificables
:::

::: preguntas
- ¿Qué hago con las preguntas abiertas de un cuestionario?
- ¿Cómo se convierte una hoja de cálculo en material codificable?
- ¿Qué columnas conviene tratar como atributo y cuáles como texto?
:::

::: objetivos
- Preparar una hoja de cálculo para que el programa la lea sin errores
- Importar una encuesta y decidir el tipo de cada campo
- Revisar el resultado, con un caso por persona y un archivo por pregunta abierta
:::

::: consejo Antes de seguir, un repaso
Los materiales se limpian y se anonimizan antes de importar, porque después de codificar
cualquier corrección desplaza las posiciones de los segmentos. Con una encuesta, además, la
limpieza incluye normalizar los valores de cada columna.
:::

## 6.1 Por qué una encuesta entra al análisis cualitativo

Muchos cuestionarios mezclan preguntas cerradas y abiertas. Las cerradas se analizan con
estadística, y las abiertas suelen quedar sin analizar o resumidas en dos frases, que es donde
se pierde la parte interesante.

Una pregunta abierta contestada por doscientas personas es material cualitativo hecho y
derecho, con la particularidad de que cada respuesta es breve y viene acompañada de datos
estructurados de quien la escribió. Esa combinación permite comparar de una manera que rara vez
está disponible con entrevistas.

QualCoder importa la hoja completa y hace tres cosas a la vez. Crea un caso por cada fila, es
decir por cada persona que respondió. Convierte las columnas cerradas en atributos de ese caso.
Y convierte cada columna abierta en un archivo de texto codificable, con la respuesta de cada
persona vinculada a su caso.

::: video
Video 6.1. Recorrido por una encuesta ya importada, con los casos, los atributos y los archivos
de texto que genera.
:::

## 6.2 Preparar la hoja de cálculo

El importador es exigente con el formato, y casi todos los errores vienen de la hoja y no del
programa.

::: pasos
1. Deja una sola fila de encabezado, en la primera fila del archivo, sin celdas combinadas ni
   títulos decorativos encima.
2. Da a cada columna un nombre corto, sin acentos ni espacios, porque ese nombre será el del
   atributo o el del archivo de texto. Sirve algo como `edad`, `zona`, `p12_dificultades`.
3. Comprueba que la primera columna identifica a la persona con un valor único, del tipo
   `E001`. Ese valor será el nombre del caso.
4. Normaliza los valores de las columnas cerradas, sin mezclar `Sí`, `si` y `SI`, y sin dejar
   celdas con dos valores separados por coma.
5. Sustituye los datos identificables por seudónimos o códigos antes de guardar.
6. Guarda como `.csv` con codificación UTF-8, que es el formato más predecible, o conserva el
   `.xlsx` si prefieres.
:::

::: aviso
Los saltos de línea dentro de una celda rompen la importación de un `.csv` cuando el archivo no
está bien entrecomillado. Si tus respuestas abiertas son largas y con párrafos, revisa el
resultado con un editor de texto antes de importar, o usa el formato de hoja de cálculo.
:::

::: captura
Captura 6.1. Hoja de cálculo preparada, con la fila de encabezado, los nombres cortos de columna
y el identificador en la primera columna.
:::

## 6.3 Importar

::: pasos
1. Abre la importación de encuestas desde el menú de gestión de datos.
2. Selecciona el archivo y confirma el separador de campos, que en un `.csv` en español suele
   ser el punto y coma en lugar de la coma.
3. Revisa la vista previa, donde aparece una fila por persona y una columna por campo.
4. Marca el tipo de cada campo. Los cerrados van como atributo de texto o numérico, y los
   abiertos van como campo cualitativo.
5. Confirma la importación y espera. Con muchas filas puede tardar unos segundos.
:::

::: video
Video 6.2. Importación paso a paso, con la elección del separador y la asignación del tipo de
cada campo.
:::

::: captura
Captura 6.2. Ventana de importación con la vista previa y la columna de tipos de campo visible.
:::

## 6.4 Qué revisar después de importar

La revisión toma cinco minutos y evita descubrir un problema cuando ya codificaste medio corpus.

::: comprobacion
- El número de casos coincide con el número de filas de la hoja
- Los nombres de los casos son los identificadores, no números correlativos
- Cada pregunta abierta generó su propio archivo de texto
- Dentro de ese archivo, cada respuesta aparece separada y atribuida a su caso
- Los atributos tienen los valores esperados, sin variantes de escritura
- Las respuestas vacías no se convirtieron en texto en blanco que ensucie los informes
:::

::: video
Video 6.3. Revisión posterior a la importación, comprobando casos, atributos y archivos
generados.
:::

## 6.5 Codificar respuestas breves

Codificar doscientas respuestas de dos líneas se parece poco a codificar una entrevista.

Los códigos tienden a ser más descriptivos, porque no hay contexto conversacional que
interpretar. La unidad suele ser la respuesta completa, no un fragmento. Y la comparación entre
grupos, que en entrevistas requiere trabajo, aquí sale casi sola, porque los atributos ya están
cargados desde la hoja.

Un flujo que funciona consiste en leer cincuenta respuestas sin codificar para ver qué hay,
crear entre seis y diez códigos, codificar el resto, y después filtrar por atributo para
comparar. Las lecciones 14 y 15 desarrollan esa comparación.

::: consejo Las respuestas vacías también dicen algo
Una pregunta abierta con cuarenta por ciento de respuestas en blanco está informando de algo,
sea que la pregunta no se entendió, que incomodaba o que llegaba demasiado tarde en el
cuestionario. Anótalo en el memo del archivo antes de olvidarlo.
:::

::: nota Para profundizar
Willis (2015) analiza qué pasa cuando quien responde entiende una pregunta de manera distinta a
la prevista, y propone leer las respuestas abiertas también como evidencia sobre el instrumento.
Es una lectura útil antes de codificar material de encuesta.
:::

::: reto Importa un cuestionario
Toma una hoja de cálculo con al menos una pregunta abierta y dos columnas cerradas. Prepárala
según los seis pasos, impórtala y recorre la lista de comprobación completa. Después codifica
veinte respuestas y filtra por uno de los atributos.

::: solucion Si la importación falla o llega incompleta
El separador equivocado es la causa más frecuente y se nota porque toda la fila aparece en una
sola columna de la vista previa. Después vienen los encabezados duplicados y las celdas
combinadas. Corrige la hoja, no el proyecto, y vuelve a importar sobre un proyecto limpio.
:::
:::

::: clave
- Las preguntas abiertas de un cuestionario son material cualitativo con datos estructurados al lado
- La importación crea un caso por fila, atributos con las columnas cerradas y archivos de texto con las abiertas
- Casi todos los errores vienen de la hoja de cálculo, no del programa
- Con los atributos ya cargados, la comparación entre grupos es inmediata
:::

::: apoyo Formas de contribuir
Compartir este curso con quien lo necesite ya es una forma de contribuir. Si además puedes donar, aquí van [gastos médicos](https://gofund.me/5c133cc99) y [asistencia humanitaria](https://www.paypal.com/paypalme/lorenzosalomon).
:::
