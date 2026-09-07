::: preguntas
- ¿Cómo trabajo entrevistas en audio o video sin transcribirlas por completo?
- ¿Para qué sirve la onda de sonido?
- ¿Qué gano marcando hablantes en una transcripción?
:::

::: objetivos
- Codificar audio y video apoyándote en la onda de sonido
- Vincular transcripción y grabación mediante marcas de tiempo
- Atribuir cada intervención a su hablante con "Marcar hablantes"
:::

::: consejo Antes de seguir, un repaso
Delimitar una región en una imagen ya es interpretar, y por eso el criterio del recorte se
escribe en el memo del código. En audio y video ocurre lo mismo con el punto donde decides
que empieza y termina un fragmento.
:::

## Trabajar sobre la grabación

El módulo "Codificar A/V" (Code audio/video) muestra el reproductor, la onda de sonido y,
cuando existe, la transcripción asociada.

La onda de sonido es más útil de lo que parece. Los silencios, las interrupciones, los
solapamientos y los cambios de intensidad son visibles, así que puedes ubicar un pasaje sin
escuchar el archivo completo. Se selecciona un tramo directamente sobre la onda y se codifica.

Un segmento codificado en audio o video queda registrado con su tiempo de inicio y de fin sobre
ese archivo. Al recuperarlo después, el reproductor salta a ese punto, así que la cita conserva
el acceso al sonido original y no solo a su versión escrita.

::: video
Codificación de un fragmento de audio desde la onda de sonido y salto desde la transcripción.
:::

## Cuánto transcribir

Transcribir es caro. Una hora de entrevista consume entre cuatro y seis horas de trabajo, y no
siempre hace falta transcribirlo todo.

Una estrategia razonable consiste en escuchar completo tomando notas con marcas de tiempo,
codificar directamente sobre la onda los pasajes relevantes, y transcribir en detalle solo lo
que vas a citar o analizar palabra por palabra. Anne Harris advierte de lo que pasa cuando esa
decisión no se toma a tiempo.

::: cita Harris (2016, p. 19)
without it, large video datasets can become unwieldy
+ sin ello, los conjuntos grandes de datos en video pueden volverse inmanejables
:::

Lo que Harris llama "ello" es una pregunta de investigación acotada. Con material audiovisual,
donde cada minuto contiene imagen, sonido, gesto y contexto a la vez, sin ese recorte previo el
corpus crece más rápido de lo que se puede analizar.

::: consejo El tono no se transcribe, pero se codifica
Las pausas, los cambios de voz y los silencios rara vez sobreviven a la transcripción. Si tu
análisis los necesita, codifícalos sobre el audio y no sobre el texto. Un código como
"silencio largo" aplicado a un tramo de la onda conserva algo que la transcripción pierde.
:::

## Transcripción y marcas de tiempo

Puedes escribir la transcripción dentro de QualCoder o importar una que ya tengas. En ambos
casos, lo que hace útil el trabajo es que el texto lleve marcas de tiempo con un formato
reconocible, como `[00:04:12]` al inicio de cada intervención.

Con esas marcas, texto y grabación quedan sincronizados. Al hacer clic sobre un punto de la
transcripción, el audio salta a ese momento, así que puedes codificar sobre el texto, que es
más cómodo, sin perder el acceso al sonido, que es donde están el tono y las pausas.

::: aviso
Si vas a importar una transcripción hecha con un servicio automático, revísala antes contra el
audio. Los errores de reconocimiento en nombres propios, en habla regional y en solapamientos
son frecuentes, y una vez codificado el texto ya no conviene corregirlo.
:::

::: tip
La reproducción tiene control de velocidad. Escuchar a 0.8 mientras transcribes, o a 1.5 en un
primer recorrido para ubicar temas, ahorra bastante tiempo.
:::

## Marcar hablantes

En una entrevista, y sobre todo en un grupo focal, casi siempre necesitas saber quién dijo qué.
QualCoder incluye "Marcar hablantes" (Mark speakers), que detecta los identificadores de
hablante en la transcripción y crea con ellos códigos agrupados en una categoría propia.

::: pasos
1. Asegúrate de que la transcripción usa siempre el mismo patrón para identificar a quien habla.
2. Ejecuta "Marcar hablantes" sobre el archivo o sobre un conjunto de archivos.
3. Revisa la lista de identificadores encontrados antes de aplicar, porque suelen colarse
   variantes de escritura del mismo nombre.
4. Aplica, y comprueba que cada intervención quedó atribuida a quien corresponde.
:::

A partir de ahí puedes filtrar cualquier informe por hablante, lo que en grupos focales es la
diferencia entre un análisis y un montón de citas sin dueño.

::: captura
Ventana de "Marcar hablantes" con la lista de identificadores encontrados en la transcripción.
:::

::: descarga
- [Fragmento de audio](ejercicios/10-fragmento-audio.mp3)
:::

::: reto Trabaja una grabación
Importa un audio corto, marca dos fragmentos codificados directamente sobre la onda de sonido y
escribe la transcripción de uno de ellos con su marca de tiempo. Si tienes una transcripción
completa con hablantes, ejecuta la detección y revisa el resultado.

::: solucion Si la detección no encuentra hablantes
El patrón debe ser consistente en todo el archivo. Los casos que fallan son los que mezclan
`Rosa:` con `ROSA -` o dejan el nombre a mitad de línea. Uniforma el archivo y vuelve a
ejecutar.
:::
:::

::: consejo Qué se guarda de un video codificado
No se recorta ni se duplica el archivo. Lo que queda en la base de datos es la referencia al
archivo, el tiempo de inicio, el de fin y el código aplicado. Por eso el proyecto sigue siendo
manejable aunque trabajes con horas de grabación, y por eso mover el archivo de sitio rompe el
vínculo.
:::

::: clave
- La onda de sonido permite ubicar y seleccionar pasajes sin escuchar todo el archivo
- No hace falta transcribirlo todo, basta con transcribir lo que vas a citar o analizar en detalle
- Las marcas de tiempo sincronizan la transcripción con la grabación
- "Marcar hablantes" exige un patrón de escritura uniforme en toda la transcripción
:::

::: apoyo Cómo se sostiene el curso
El curso se mantiene con lo que aporta quien puede, sin obligación. Hay dos destinos, [gastos médicos](https://gofund.me/5c133cc99) y [asistencia a personas desplazadas](https://www.paypal.com/paypalme/lorenzosalomon).
:::
