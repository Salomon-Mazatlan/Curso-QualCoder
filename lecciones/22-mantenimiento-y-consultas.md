::: ficha
- **Duración estimada** 30 minutos
- **Antes de empezar** tener un proyecto con material codificado (lecciones 9 a 13)
- **Materiales** el proyecto y una copia de seguridad reciente
- **Al terminar tendrás** el proyecto saneado y tu primera consulta guardada
:::

::: preguntas
- ¿Qué hago si tengo que corregir una transcripción ya codificada?
- ¿Cómo reparo los vínculos rotos de los archivos multimedia?
- ¿Para qué sirve poder consultar la base de datos del proyecto?
:::

::: objetivos
- Sustituir un archivo de texto sin perder la codificación
- Reparar enlaces rotos y aplicar seudónimos de forma masiva
- Ejecutar consultas sobre el proyecto y guardar las que uses seguido
- Distinguir las operaciones reversibles de las que no lo son
:::

::: consejo Antes de seguir, un repaso
El libro de códigos se acuerda antes de repartir la codificación, y la fusión de proyectos une
los códigos que comparten nombre sin revisar su definición. Todo lo de esta lección se hace
después de respaldar, sin excepción.
:::

## 22.1 El capítulo que nadie lee hasta que lo necesita

Un proyecto que dura meses acumula problemas. Una transcripción con un error que hay que
corregir cuando ya está codificada. Un video que cambió de carpeta y rompió su vínculo. Nombres
reales que se colaron y hay que sustituir. Una pregunta sobre el propio proyecto que ningún
informe responde.

QualCoder tiene funciones para todo eso, agrupadas en la parte del programa que menos se
enseña. Conocerlas evita el desenlace habitual, que es rehacer trabajo.

::: aviso
Todas las operaciones de esta lección escriben directamente en la base de datos y ninguna tiene
deshacer. Respalda antes de cada una. La copia se hace en un minuto y la reconstrucción de un
proyecto dañado cuesta días.
:::

::: video https://www.youtube.com/watch?v=p2pWR1IrKbg
Video 22.1. Panorama de las funciones de mantenimiento y dónde vive cada una.
:::

## 22.2 Corregir un archivo ya codificado

Este es el problema más frecuente de todos. Terminaste de codificar una entrevista y descubres
que la transcripción tiene un tramo mal transcrito, o que se coló un nombre real.

La codificación no guarda el texto, guarda posiciones. Cada segmento dice que empieza en el
carácter tantos y termina en tantos otros. Si cambias el texto, todo lo que venga después de esa
corrección queda desplazado, y los segmentos empiezan a señalar frases que no son.

Hay dos funciones para esto y sirven para casos distintos.

La sustitución de un archivo de texto reemplaza el contenido conservando la codificación, y
funciona bien cuando el texto nuevo tiene la misma longitud o cuando el desplazamiento es
tolerable. La otra función desplaza las posiciones de codificación un número determinado de
caracteres, lo que permite corregir a mano un desfase conocido.

::: pasos
1. Respalda el proyecto.
2. Anota cuántos caracteres añade o quita tu corrección, si puedes calcularlo.
3. Sustituye el archivo de texto por la versión corregida.
4. Abre el documento y revisa varios segmentos repartidos por todo el texto, no solo los
   primeros.
5. Si hay desfase, aplica el desplazamiento de posiciones a partir del punto donde empieza.
6. Vuelve a revisar, y deja constancia en el diario de qué corregiste y qué ajustaste.
:::

::: video https://www.youtube.com/watch?v=p2pWR1IrKbg
Video 22.2. Sustitución de un archivo de texto ya codificado y corrección del desfase resultante.
:::

::: consejo La mejor corrección es la que no hace falta
Todo esto se evita revisando la transcripción antes de codificar. Cuando dirijo tesis pido
siempre una lectura completa del texto con la grabación al lado antes de marcar nada. Cuesta una
tarde y ahorra este capítulo entero.
:::

## 22.3 Enlaces rotos y seudónimos

Los archivos multimedia que decidiste enlazar en lugar de copiar dependen de su ruta. Si cambian
de carpeta, de disco o de computadora, el vínculo se rompe y el programa deja de encontrarlos.

La función de reparación de enlaces permite volver a apuntar a la ubicación correcta sin perder
la codificación, que sigue viva porque se guardó como marcas de tiempo sobre el archivo, no
dentro de él.

La sustitución por seudónimos, por su parte, reemplaza nombres en el texto de manera masiva. Es
útil cuando la anonimización no se hizo antes de importar, con la advertencia de siempre, porque
cambiar el texto mueve las posiciones de codificación.

::: pasos
1. Respalda el proyecto.
2. Revisa la lista de archivos con vínculo roto que muestra el programa.
3. Indica la nueva ubicación de cada uno, o de la carpeta que los contiene.
4. Comprueba que se abren y que la codificación cae donde debe.
5. Si aplicas seudónimos, hazlo antes de codificar siempre que puedas, y si no, revisa después
   los segmentos afectados.
:::

::: captura img/captura-22-01.png
Captura 22.1. Reparación de vínculos, con la lista de archivos no encontrados.
:::

## 22.4 Consultar la base de datos

El proyecto es una base SQLite, y el programa incluye una ventana para consultarla. Suena
técnico y no lo es tanto, porque trae consultas predefinidas que puedes ejecutar sin escribir
nada.

Sirve para preguntas que ningún informe cubre. Cuántos segmentos codificó cada persona por mes.
Qué códigos no se han usado nunca. Qué archivos no tienen ningún caso asignado. Qué memos están
vacíos.

::: pasos
1. Abre la ventana de consultas desde el menú de informes.
2. Revisa la lista de consultas predefinidas y ejecuta alguna para ver el formato del resultado.
3. Modifica una consulta existente antes de escribir la tuya desde cero, que es la manera más
   rápida de aprender la estructura.
4. Guarda las consultas que vayas a repetir, con un nombre que diga qué responden.
5. Exporta el resultado si lo necesitas fuera del programa.
:::

::: video https://www.youtube.com/watch?v=p2pWR1IrKbg
Video 22.3. Ejecución de una consulta predefinida, modificación y guardado de una consulta propia.
:::

::: captura img/captura-22-02.png
Captura 22.2. Ventana de consultas con una consulta predefinida y su resultado.
:::

::: aviso
La ventana admite también sentencias que escriben en la base, no solo consultas de lectura. Una
sentencia mal escrita puede dañar el proyecto sin aviso y sin retorno. Si no estás segura de lo
que hace una instrucción, no la ejecutes, y en ningún caso la ejecutes sin respaldo.
:::

::: consejo Tres consultas que valen su peso
Códigos sin usar, para depurar el libro antes de escribir. Archivos sin caso asignado, para
detectar material que quedará fuera de los informes filtrados. Y segmentos por codificador y
fecha, que es la manera más simple de documentar el ritmo real del trabajo en un equipo.
:::

## 22.5 Higiene del proyecto

Media hora de mantenimiento cada tanto evita casi todos los sustos. Esta es la rutina que
recomiendo, mensual en proyectos activos.

::: pasos
1. Respalda y guarda la copia fuera del equipo, con la fecha en el nombre.
2. Revisa la pestaña de mensajes por si hay avisos que no viste.
3. Comprueba que ningún archivo tiene el vínculo roto.
4. Busca códigos sin usar y decide si se quedan o se van.
5. Revisa que los archivos nuevos tengan su caso y sus atributos.
6. Lee la última entrada del diario y escribe una nueva con el estado del proyecto.
:::

::: comprobacion
- Tienes un respaldo reciente guardado fuera del equipo
- Sabes qué hacer si tienes que corregir un texto ya codificado
- Ningún archivo del proyecto tiene el vínculo roto
- Ejecutaste al menos una consulta y guardaste una propia
- El diario tiene una entrada con el estado actual del proyecto
:::

::: reto Sanea tu proyecto
Haz la rutina completa de higiene sobre tu proyecto del curso. Ejecuta después la consulta de
códigos sin usar y decide qué hacer con los que aparezcan. Anota en el diario cuántos eran y qué
decidiste.

::: solucion Qué suele aparecer en esa consulta
Casi siempre salen entre cinco y quince códigos sin usar, restos de las primeras sesiones de
codificación inductiva. La mitad se fusiona con otros y la otra mitad se elimina. Los que
sobreviven sin uso suelen ser códigos deductivos que esperabas encontrar y no aparecieron, y esa
ausencia es un hallazgo que merece su párrafo.
:::
:::

::: clave
- Corregir un texto ya codificado desplaza las posiciones, así que se hace con método y respaldo
- Los vínculos rotos se reparan sin perder la codificación
- La ventana de consultas responde preguntas sobre el proyecto que ningún informe cubre
- Ninguna de estas operaciones tiene deshacer, y todas se hacen después de respaldar
- Media hora de mantenimiento al mes evita casi todos los sustos
:::

::: apoyo Apoyo voluntario
Material de acceso abierto. Si está en tus posibilidades, apoya en [gastos médicos](https://gofund.me/5c133cc99) o en [asistencia humanitaria a migrantes](https://www.paypal.com/paypalme/lorenzosalomon).
:::
