::: preguntas
- ¿Cómo se codifica una fotografía o un mapa?
- ¿Cómo trabajo entrevistas en audio y video sin transcribirlas por completo?
- ¿Qué gano marcando hablantes en una transcripción?
:::

::: objetivos
- Codificar regiones de una imagen y documentar el criterio visual
- Codificar audio y video apoyándote en la onda de sonido
- Vincular transcripción y grabación con marcas de tiempo, y marcar hablantes
:::

## Imagen

Codificar una imagen consiste en dibujar un rectángulo sobre una zona y aplicarle un código.
Sirve para fotografías de campo, mapas, carteles, capturas de pantalla y material gráfico en
general.

Como en el texto, el criterio de qué constituye un segmento tiene que ser explícito. Un
rectángulo que abarca la imagen completa dice algo distinto a uno que aísla un detalle, y esa
diferencia debe quedar escrita en el memo del código.

::: pasos
1. Abre la imagen en el módulo correspondiente.
2. Dibuja un rectángulo sobre la zona que te interesa.
3. Aplícale el código desde el árbol.
4. Escribe un memo del segmento cuando el recorte necesite explicación, por ejemplo por qué
   aislaste ese detalle y no la escena completa.
:::

::: nota
Las regiones codificadas de imagen entran en los reportes junto con los segmentos de texto, y
también cuentan en los análisis de co-ocurrencia. Un código puede vivir a la vez en texto,
imagen y audio sin problema.
:::

::: video
Codificación de una fotografía por regiones y de un fragmento de audio desde la onda de sonido.
:::

## Audio y video

El módulo audiovisual muestra el reproductor, la onda de sonido y, cuando existe, la
transcripción asociada.

La onda de sonido es más útil de lo que parece. Los silencios, las interrupciones y los cambios
de intensidad son visibles, así que puedes ubicar el pasaje que buscas sin escuchar el archivo
completo. Se puede seleccionar un tramo directamente sobre la onda y codificarlo.

Un segmento codificado en audio o video queda registrado con su tiempo de inicio y de fin sobre
ese archivo, y al recuperarlo después el reproductor salta a ese punto.

::: tip
La reproducción tiene control de velocidad. Escuchar a 0.8 mientras transcribes, o a 1.5 en un
primer recorrido para ubicar temas, ahorra bastante tiempo.
:::

## Transcripción y marcas de tiempo

Puedes escribir la transcripción dentro de QualCoder o importar una que ya tengas. En ambos
casos, lo que hace útil el trabajo es que el texto lleve marcas de tiempo con un formato
reconocible, como `[00:04:12]` al inicio de cada intervención.

Con esas marcas, el texto y la grabación quedan sincronizados, y al hacer clic sobre un punto de
la transcripción el audio salta a ese momento. Eso permite codificar sobre el texto, que es más
cómodo, sin perder el acceso a la grabación, que es donde están el tono y las pausas.

::: aviso
Si vas a importar una transcripción hecha con un servicio automático, revísala antes. Los
errores de reconocimiento en nombres propios y en habla regional son frecuentes, y una vez
codificado el texto ya no conviene corregirlo.
:::

## Marcar hablantes

En una entrevista o en un grupo focal casi siempre necesitas saber quién dijo qué. QualCoder
incluye una función que detecta los identificadores de hablante en la transcripción y crea con
ellos códigos agrupados en una categoría propia.

::: pasos
1. Asegúrate de que la transcripción usa siempre el mismo patrón para identificar a quien habla.
2. Ejecuta la detección de hablantes sobre el archivo o sobre un conjunto de archivos.
3. Revisa la lista de identificadores encontrados antes de aplicar, porque suelen colarse
   variantes de escritura del mismo nombre.
4. Aplica, y comprueba que cada intervención quedó atribuida.
:::

A partir de ahí puedes filtrar cualquier reporte por hablante, lo que en grupos focales es la
diferencia entre un análisis y un montón de citas sin dueño.

::: captura
Ventana de detección de hablantes con la lista de identificadores encontrados en la transcripción.
:::

::: reto Trabaja una grabación
Importa un audio corto, marca dos fragmentos codificados directamente sobre la onda de sonido y
escribe la transcripción de uno de ellos con su marca de tiempo. Si tienes una transcripción
completa con hablantes, ejecuta la detección y revisa el resultado.

::: solucion Si la detección no encuentra hablantes
El patrón debe ser consistente en todo el archivo. Los casos que suelen fallar son los que
mezclan `Rosa:` con `ROSA -` o dejan el nombre a mitad de línea. Uniforma el archivo antes de
volver a ejecutar la detección.
:::
:::

::: quiz
¿Qué se guarda en la base de datos cuando codificas un fragmento de video?
- [ ] Una copia del fragmento de video recortado
- [x] La referencia al archivo, el tiempo de inicio, el de fin y el código aplicado
- [ ] Una transcripción automática de ese fragmento
> Los materiales multimedia no se recortan ni se duplican. Se registran marcas de tiempo sobre
> el archivo, que es lo que mantiene el proyecto manejable.
:::

::: clave
- Las imágenes se codifican por regiones rectangulares y esos segmentos entran en los reportes
- La onda de sonido permite ubicar y seleccionar pasajes sin escuchar todo el archivo
- Las marcas de tiempo en la transcripción sincronizan texto y grabación
- La detección de hablantes exige un patrón de escritura uniforme en la transcripción
:::
