::: ficha
- **Duración estimada** 35 minutos
- **Antes de empezar** saber marcar segmentos (lección 9) y tener VLC instalado
- **Materiales** un audio o video corto, con transcripción si la tienes
- **Al terminar tendrás** una grabación codificada, sincronizada y con los hablantes marcados
:::

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

## 12.1 Trabajar sobre la grabación

El módulo "Codificar A/V" (Code audio/video) muestra el reproductor, la onda de sonido y,
cuando existe, la transcripción asociada.

La onda de sonido es más útil de lo que parece. Los silencios, las interrupciones, los
solapamientos y los cambios de intensidad son visibles, así que puedes ubicar un pasaje sin
escuchar el archivo completo. Se selecciona un tramo directamente sobre la onda y se codifica.

Un segmento codificado en audio o video queda registrado con su tiempo de inicio y de fin sobre
ese archivo. Al recuperarlo después, el reproductor salta a ese punto, así que la cita conserva
el acceso al sonido original y no solo a su versión escrita.

::: video https://www.youtube.com/watch?v=p2pWR1IrKbg
Video 12.1. Codificación de un fragmento de audio desde la onda de sonido y salto desde la transcripción.
:::

::: video https://www.youtube.com/watch?v=p2pWR1IrKbg
Video 12.2. Selección de un tramo directamente sobre la onda de sonido y aplicación de un código.
:::

::: captura img/captura-12-01.png
Captura 12.1. Módulo de audio y video con la onda de sonido y un segmento seleccionado.
:::

## 12.2 Cuánto transcribir

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

::: video https://www.youtube.com/watch?v=p2pWR1IrKbg
Video 12.3. Escucha completa con notas y marcas de tiempo, antes de decidir qué se transcribe en detalle.
:::

## 12.3 Transcripción y marcas de tiempo

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

::: video https://www.youtube.com/watch?v=p2pWR1IrKbg
Video 12.4. Escritura de la transcripción con marcas de tiempo y salto desde el texto al punto exacto del audio.
:::

::: video https://www.youtube.com/watch?v=p2pWR1IrKbg
Video 12.5. Uso del control de velocidad de reproducción mientras se transcribe.
:::

## 12.4 Marcar hablantes

En una entrevista, y sobre todo en un grupo focal, casi siempre necesitas saber quién dijo qué.
QualCoder incluye "Marcar hablantes" (Mark speakers), que recorre la transcripción, detecta los
identificadores de hablante y crea con ellos códigos agrupados en una categoría propia.

El resultado es que cada intervención queda codificada con el nombre de quien la dijo, sin
marcar nada a mano. A partir de ahí puedes filtrar cualquier informe por hablante.

### Cómo debe estar escrita la transcripción

La función busca un patrón, así que el patrón tiene que existir y ser constante.

| Escritura | Resultado |
|---|---|
| `Rosa:` al inicio de línea | Se detecta sin problema |
| `ROSA:` mezclado con `Rosa:` | Se detectan dos hablantes distintos |
| `Rosa -` en unas partes y `Rosa:` en otras | Solo se detecta uno de los dos |
| `[Rosa]` a mitad de línea | No se detecta |

Uniformar la transcripción antes lleva cinco minutos con buscar y reemplazar, y evita tener que
deshacer una detección completa.

::: video https://www.youtube.com/watch?v=p2pWR1IrKbg
Video 12.6. Preparación de la transcripción para que el patrón de hablantes sea uniforme.
:::

### El procedimiento

::: pasos
1. Abre el archivo en el módulo de audio y video, con la transcripción a la vista.
2. Ejecuta "Marcar hablantes" sobre ese archivo o sobre un conjunto de archivos.
3. Revisa la lista de identificadores encontrados antes de aplicar. Ahí es donde se ven las
   variantes de escritura del mismo nombre.
4. Aplica y comprueba en el árbol de códigos que apareció la categoría con un código por
   hablante.
5. Abre un informe filtrado por uno de esos códigos para verificar que recoge todas sus
   intervenciones y ninguna ajena.
:::

::: video https://www.youtube.com/watch?v=p2pWR1IrKbg
Video 12.7. Ejecución de "Marcar hablantes" sobre una transcripción de grupo focal, con la revisión de los
identificadores encontrados.
:::

::: video https://www.youtube.com/watch?v=p2pWR1IrKbg
Video 12.8. Uso de los códigos de hablante para filtrar un informe y comparar lo que dijo cada participante.
:::

::: captura img/captura-12-02.png
Captura 12.2. Ventana de "Marcar hablantes" con la lista de identificadores encontrados en la transcripción.
:::

### Qué hacer con seudónimos

Si en la transcripción ya usas seudónimos, los códigos de hablante llevarán esos seudónimos, que
es justo lo que quieres. Si todavía aparecen nombres reales, cámbialos antes de ejecutar la
detección, porque después esos nombres quedan en el árbol de códigos y en todos los informes.

::: consejo Marcar hablantes también sirve en texto plano
Aunque la función vive en el módulo audiovisual, opera sobre la transcripción. Si tienes
entrevistas transcritas sin grabación asociada, importarlas con el patrón de hablantes
uniformado te permite aprovechar la misma detección.
:::

::: descarga
- [Fragmento de audio, grupo focal simulado](ejercicios/12-fragmento-audio.mp3)
- [Transcripción con marcas de tiempo](ejercicios/12-transcripcion-grupo-focal.txt)
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

::: comprobacion
- Codificaste al menos dos tramos sobre la onda de sonido
- La transcripción lleva marcas de tiempo y el salto funciona
- El patrón de hablantes es uniforme en todo el archivo
- La detección de hablantes creó un código por participante
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
