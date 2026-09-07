::: ficha
- **Duración estimada** 30 minutos
- **Antes de empezar** el corpus importado (lección 5)
- **Materiales** los datos de contexto de tus participantes
- **Al terminar tendrás** el corpus organizado en casos con atributos comparables
:::

::: preguntas
- ¿Cuál es la diferencia entre un archivo y un caso?
- ¿Cómo registro las características de participantes y documentos?
- ¿Cómo comparo grupos dentro de mi corpus?
:::

::: objetivos
- Crear casos y vincularles materiales de distintos formatos
- Definir atributos y asignarles valores
- Filtrar el análisis por atributo para comparar grupos
:::

::: consejo Antes de seguir, un repaso
Todo lo que automatices se anota en el diario, con la función usada, los archivos, los
parámetros y la proporción de propuestas que aceptaste. Ese registro es el que después se
convierte en un párrafo del apartado metodológico.
:::

## 14.1 Archivo, caso y por qué no son lo mismo

Un archivo es un documento. Un caso es una unidad de análisis, y puede reunir varios archivos.

Si entrevistaste a Rosa dos veces, tienes dos archivos y un caso. Si además fotografiaste su
casa y grabaste una sesión, tienes cuatro archivos y sigue siendo un caso. Cuando después
preguntes qué dijo Rosa sobre el reparto del trabajo, el programa necesita saber que todo ese
material es de ella.

La unidad de análisis no siempre es una persona. Puede ser una comunidad, una escuela, un
periodo o un expediente, según tu diseño. Lo que define un caso es que agrupa material sobre
una misma unidad de comparación.

::: video
Video 14.1. Creación de casos, vinculación de archivos y asignación de atributos a cada caso.
:::

## 14.2 Crear casos

::: pasos
1. Abre "Gestionar casos" (Manage cases) y crea uno con el nombre de la unidad, por ejemplo un seudónimo.
2. Vincúlale los archivos que le corresponden.
3. Si un archivo contiene material de varios casos, como un grupo focal, asigna al caso solo la
   porción de texto que le pertenece.
4. Repite con cada unidad, cuidando que ningún archivo quede sin caso si tu diseño requiere
   compararlos a todos.
:::

::: nota
La posibilidad de asignar porciones de un mismo archivo a casos distintos es lo que hace
manejables los grupos focales. Cada intervención puede quedar atribuida a su participante sin
partir el archivo en pedazos.
:::

::: video
Video 14.2. Creación de casos y vinculación de sus archivos.
:::

::: video
Video 14.3. Asignación de una porción de texto de un grupo focal al caso de su participante.
:::

::: captura img/captura-14-01.png
Captura 14.1. Ventana de gestión de casos con varios casos y sus archivos vinculados.
:::

## 14.3 Atributos

Un atributo es una característica registrada de manera estructurada, y es lo que después
permite comparar. Se pueden asignar a casos y a archivos.

| Atributo | Tipo | Valores |
|---|---|---|
| edad | numérico | 34, 47, 61 |
| apoyo_familiar | texto | sí, no |
| zona | texto | urbana, rural |
| fecha_entrevista | texto | 2026-03-14 |

Dos recomendaciones evitan la mayoría de los problemas. Usa un valor por atributo, sin listas
dentro de una celda, porque los filtros comparan valores completos. Y decide de antemano la
escritura exacta de cada valor, porque `Sí`, `si` y `SI` son tres valores distintos para el
programa.

::: aviso
Los atributos no son datos sueltos, son parte del diseño. Registrar veinte atributos porque
estaban en la ficha sociodemográfica y no usar ninguno es tan común como registrar solo el
sexo y descubrir después que la comparación relevante era otra.
:::

::: video
Video 14.4. Creación de atributos de texto y numéricos, y asignación de valores a cada caso.
:::

## 14.4 Comparar

Con casos y atributos definidos, los informes dejan de mostrar el corpus completo y pasan a
responder preguntas.

Puedes pedir los segmentos de un código solo en los casos con determinado valor de atributo,
por ejemplo lo que dicen sobre el tiempo propio quienes no reciben apoyo familiar. Y puedes
pedir lo mismo del grupo contrario, para leerlos uno junto a otro.

Esa lectura comparada es donde suelen aparecer los hallazgos. No porque el programa calcule
nada, sino porque pone frente a ti dos conjuntos de testimonios que de otro modo estarían
mezclados en cientos de páginas.

::: tip
Antes de crear un atributo, pregúntate qué comparación harías con él. Si no puedes formular la
comparación, todavía no sabes si necesitas ese atributo.
:::

::: captura img/captura-14-02.png
Captura 14.2. Tabla de atributos con varios casos y sus valores asignados.
:::

::: video
Video 14.5. Recuperación de los segmentos de un código filtrando por el valor de un atributo, y lectura comparada de dos grupos.
:::

::: descarga
- [Tabla de atributos de los casos](ejercicios/14-atributos-casos.csv)
:::

::: nota Para profundizar
La discusión sobre qué es un caso y qué es una unidad de análisis viene de lejos. Bazeley
(2013) la resume bien al distinguir entre el caso teórico, aquello sobre lo que quieres
concluir, y el caso empírico, aquello de lo que reúnes datos. En la mayoría de los proyectos
coinciden, y cuando no, conviene tenerlo claro desde el diseño.
:::

::: reto Estructura tu corpus
Crea un caso por cada unidad de análisis de tu proyecto y vincúlale sus archivos. Define dos
atributos que correspondan a comparaciones que de verdad piensas hacer, y asígnales valores.
Después recupera los segmentos de un código filtrando por uno de esos atributos.

::: solucion Si un archivo no puede asignarse a un caso
Suele pasar con documentos de contexto, como normativas o notas de prensa. No todos los
archivos tienen que pertenecer a un caso. Déjalos fuera y recuerda que en los informes filtrados
por caso no aparecerán.
:::
:::

::: consejo Los grupos focales se resuelven con casos
No partas el archivo en pedazos. Asigna a cada caso la porción de texto de su participante y
el archivo queda íntegro, con la conversación completa y cada intervención atribuida.
:::

::: consejo No todo archivo pertenece a un caso
Las normativas, las notas de prensa y los documentos de contexto pueden quedar fuera. Lo
importante es tenerlo presente, porque no aparecerán en los informes filtrados por caso.
:::

::: comprobacion
- Cada unidad de análisis tiene su caso con los archivos vinculados
- Definiste al menos dos atributos que corresponden a comparaciones reales
- Los valores de cada atributo se escriben siempre igual
- Recuperaste segmentos filtrando por un atributo
:::

::: clave
- El caso es la unidad de análisis y puede reunir varios archivos, o solo una parte de uno
- Los atributos se registran con valores consistentes y sirven para filtrar
- Cada atributo debe corresponder a una comparación que realmente vas a hacer
- La comparación entre grupos ocurre al leer los informes filtrados, no en un cálculo
:::

::: apoyo Apoyo voluntario
Material de acceso abierto. Si está en tus posibilidades, apoya en [gastos médicos](https://gofund.me/5c133cc99) o en [asistencia humanitaria a migrantes](https://www.paypal.com/paypalme/lorenzosalomon).
:::
