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

::: quiz Repaso de la lección 10
¿Qué conviene registrar cada vez que usas una función automática?
- [ ] Nada, el programa deja su propio historial
- [x] Qué función usaste, sobre qué archivos, con qué parámetros y cuánto conservaste
- [ ] Solo el número de segmentos generados
> Ese registro es el que después se convierte en un párrafo del apartado metodológico.
:::

## Archivo, caso y por qué no son lo mismo

Un archivo es un documento. Un caso es una unidad de análisis, y puede reunir varios archivos.

Si entrevistaste a Rosa dos veces, tienes dos archivos y un caso. Si además fotografiaste su
casa y grabaste una sesión, tienes cuatro archivos y sigue siendo un caso. Cuando después
preguntes qué dijo Rosa sobre el reparto del trabajo, el programa necesita saber que todo ese
material es de ella.

La unidad de análisis no siempre es una persona. Puede ser una comunidad, una escuela, un
periodo o un expediente, según tu diseño. Lo que define un caso es que agrupa material sobre
una misma unidad de comparación.

::: video
Creación de casos, vinculación de archivos y asignación de atributos a cada caso.
:::

## Crear casos

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

## Atributos

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

## Comparar

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

::: captura
Tabla de atributos con varios casos y sus valores asignados.
:::

::: descarga
- [Tabla de atributos de los casos](ejercicios/11-atributos-casos.csv)
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

::: quiz
Tienes un grupo focal con seis participantes en un solo archivo y quieres comparar lo que dijo
cada uno. ¿Qué haces?
- [ ] Divides el archivo en seis archivos separados
- [x] Creas seis casos y asignas a cada uno la porción de texto de su participante
- [ ] Creas seis códigos con los nombres de los participantes
> Partir el archivo rompe la secuencia de la conversación. Asignar porciones a casos conserva el
> archivo íntegro y permite filtrar por participante en cualquier informe.
:::

::: quiz Para pensarlo
Tienes normativas y notas de prensa que no pertenecen a ninguna persona entrevistada. ¿Los asignas a un caso?
- [ ] Sí, creas un caso llamado "contexto"
- [x] No, pueden quedar fuera, sabiendo que no aparecerán en los informes filtrados por caso
- [ ] No, y conviene eliminarlos del proyecto
> No todos los archivos tienen que pertenecer a un caso. Lo importante es saber qué queda fuera de cada filtro.
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
