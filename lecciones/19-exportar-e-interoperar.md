::: ficha
- **Duración estimada** 25 minutos
- **Antes de empezar** el proyecto con codificación y memos
- **Materiales** ninguno
- **Al terminar tendrás** el libro de códigos exportado y un intercambio en formato QDPX verificado
:::

::: preguntas
- ¿Cómo saco del proyecto lo que necesito para escribir?
- ¿Puedo llevar mi trabajo a ATLAS.ti, NVivo o MAXQDA?
- ¿Qué se conserva y qué se pierde en un intercambio?
:::

::: objetivos
- Exportar códigos, segmentos y informes en formatos utilizables
- Intercambiar proyectos completos mediante el estándar REFI-QDA
- Anticipar qué información no sobrevive a la conversión
:::

::: consejo Antes de seguir, un repaso
El diario registra decisiones, no actividades. Que codificaste tres entrevistas no importa.
Que decidiste dividir un código, sí, y con la fecha.
:::

## 19.1 Salidas del proyecto

QualCoder exporta a distintos niveles según lo que necesites.

El árbol de códigos se exporta como libro de códigos, con nombres, jerarquía y memos, que es lo
que se entrega como anexo de una tesis o lo que se comparte con quien va a codificar contigo.

Los segmentos codificados salen como documento de texto o como hoja de cálculo, con su
procedencia. Los informes de frecuencias, matrices y co-ocurrencias salen a hoja de cálculo. Y
los grafos salen como imagen o como diagrama editable.

::: tip
Para escribir la tesis, exporta a documento de texto y trabaja sobre esa copia. Para revisar
sistemáticamente la codificación, exporta a hoja de cálculo, donde puedes ordenar y filtrar por
columnas.
:::

::: video https://www.youtube.com/watch?v=p2pWR1IrKbg
Video 19.1. Exportación del libro de códigos y de un proyecto completo en formato REFI-QDA.
:::

::: video https://www.youtube.com/watch?v=p2pWR1IrKbg
Video 19.2. Exportación del libro de códigos, con nombres, jerarquía y memos.
:::

::: video https://www.youtube.com/watch?v=p2pWR1IrKbg
Video 19.3. Exportación de los segmentos codificados a documento y a hoja de cálculo.
:::

## 19.2 El estándar REFI-QDA

Existe un formato de intercambio entre programas de análisis cualitativo, llamado REFI-QDA, que
empaqueta un proyecto completo en un archivo `.qdpx`. Lo soportan QualCoder y los programas
comerciales más usados.

Ese archivo lleva los documentos, los códigos con su jerarquía, los segmentos codificados, los
memos, los casos y las variables. Es la vía para llevar un proyecto de un programa a otro sin
volver a codificar.

::: pasos
1. Desde el menú de proyecto, elige la exportación en formato REFI-QDA.
2. Guarda el archivo `.qdpx` con el nombre del proyecto y la fecha.
3. Ábrelo en el programa de destino con su función de importación de proyectos QDPX.
4. Revisa que la jerarquía de códigos y los memos hayan llegado completos.
5. Verifica una muestra de segmentos comparando con el proyecto original.
:::

::: aviso
El paso de verificación no es opcional. Cada programa implementa el estándar con sus propias
particularidades, y las diferencias aparecen sobre todo en las jerarquías profundas, en los
memos y en los materiales multimedia.
:::

::: video https://www.youtube.com/watch?v=p2pWR1IrKbg
Video 19.4. Exportación del proyecto completo a un archivo .qdpx.
:::

::: video https://www.youtube.com/watch?v=p2pWR1IrKbg
Video 19.5. Importación de un .qdpx en un proyecto vacío y verificación del resultado.
:::

::: captura img/captura-19-01.png
Captura 19.1. Menú de exportación con las opciones de libro de códigos y de proyecto REFI-QDA.
:::

## 19.3 Qué se conserva y qué no

Lo que viaja bien son los documentos, los códigos, los segmentos de texto, la estructura de
categorías y los memos principales.

Lo que suele complicarse son las jerarquías de sub-códigos, cuando el programa de destino no
tiene un equivalente exacto y las convierte en otra cosa. También las codificaciones sobre
imagen y sobre audio, cuyo tratamiento varía entre programas. Y los elementos propios de cada
herramienta, como los grafos, que no tienen representación en el estándar.

Por eso conviene conservar siempre el proyecto original de QualCoder aunque hayas migrado.
El `.qdpx` es para el intercambio, no para reemplazar tu proyecto de trabajo.

::: nota
El intercambio también funciona al revés. Si tienes un proyecto en ATLAS.ti, NVivo o MAXQDA,
puedes exportarlo a `.qdpx` e importarlo en QualCoder, que es la vía habitual para migrar sin
perder el trabajo hecho.
:::

## 19.4 Interoperar sin migrar

No siempre hace falta mover el proyecto entero. Para muchas colaboraciones basta con
intercambiar el libro de códigos, de modo que cada quien trabaje en su herramienta con el mismo
sistema de códigos, y compartir después los informes de segmentos.

Esta vía es menos elegante y bastante más robusta, sobre todo cuando el equipo usa programas
distintos y ninguno quiere cambiar el suyo.

::: captura img/captura-19-02.png
Captura 19.2. Menú de exportación con las opciones de libro de códigos y de proyecto REFI-QDA.
:::

::: nota Para profundizar
El estándar REFI-QDA está documentado por el consorcio que lo mantiene, en `qdasoftware.org`,
con la especificación completa y la lista de programas que lo implementan. Es la referencia
para saber qué se puede esperar de un intercambio antes de intentarlo.
:::

::: reto Prueba el viaje completo
Exporta tu proyecto a `.qdpx`, crea un proyecto nuevo y vacío en QualCoder e importa ahí el
archivo. Compara el número de códigos, la jerarquía y una muestra de segmentos con el original.

::: solucion Qué revisar primero
Empieza por los sub-códigos y por los memos, que son los que más varían entre implementaciones.
Si algo no llegó, anótalo, porque es información valiosa para cuando tengas que intercambiar con
alguien de verdad.
:::
:::

::: consejo Comparte el libro de códigos, no el proyecto
Para acordar un sistema de códigos con alguien que usa otro programa, basta con exportar el
libro de códigos. Enviar el proyecto completo mueve documentos y codificación que quizá no
deberían salir de tu equipo.
:::

::: consejo Verifica siempre la importación
Cada programa implementa el estándar a su manera. Lo primero que se pierde son las jerarquías
profundas de sub-códigos, los memos y el multimedia. Si algo no llegó, anótalo, conserva el
proyecto original de QualCoder y decide si compensa migrar.
:::

::: comprobacion
- Exportaste el libro de códigos
- Probaste una exportación e importación en formato QDPX
- Verificaste sub-códigos, memos y multimedia después de importar
- Conservas el proyecto original de QualCoder
:::

::: clave
- El libro de códigos, los segmentos y los informes se exportan por separado según el uso
- REFI-QDA en formato `.qdpx` intercambia proyectos completos entre programas
- Siempre se verifica la importación, sobre todo sub-códigos, memos y multimedia
- Conserva el proyecto original de QualCoder aunque exportes o migres
:::

::: apoyo Apoyo voluntario
Formación cualitativa al alcance de cualquiera. Puedes apoyarla en [gastos médicos](https://gofund.me/5c133cc99) o en [asistencia a personas desplazadas](https://www.paypal.com/paypalme/lorenzosalomon).
:::
