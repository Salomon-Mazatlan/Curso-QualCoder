::: ficha
- **Duración estimada** 20 minutos
- **Antes de empezar** el programa instalado y configurado (lección 2)
- **Materiales** ninguno
- **Al terminar tendrás** tu proyecto creado, respaldado y con el diario abierto
:::

::: preguntas
- ¿Qué se crea exactamente cuando abro un proyecto nuevo?
- ¿Dónde quedan mis archivos y cómo los respaldo?
- ¿Qué partes del proyecto conviene decidir desde el primer día?
:::

::: objetivos
- Crear un proyecto y entender la carpeta que genera
- Establecer una rutina de respaldo confiable
- Fijar convenciones de nombres antes de importar materiales
:::

::: consejo Antes de seguir, un repaso
Una categoría agrupa códigos y no se aplica al material. Lo que se aplica a los fragmentos
son los códigos y los sub-códigos. Confundirlos produce árboles que se ven ordenados y no
recuperan nada.
:::

## 4.1 Crear el proyecto

Desde el menú de proyecto se elige crear uno nuevo, se escoge dónde guardarlo y se le da
nombre. QualCoder crea entonces una carpeta terminada en `.qda` que es, en sí misma, el
proyecto completo.

Dale un nombre que sirva dentro de dos años, con el tema y el año, sin espacios ni acentos.
Algo como `cuidado_mazatlan_2026.qda` funciona mejor que `proyecto final definitivo`.

::: video
Video 4.1. Creación de un proyecto nuevo y recorrido por la carpeta que genera en el disco.
:::
<!-- verificar: Hyers, Diary methods (2018), p. 163 -->
Lauri Hyers estudia métodos de diario en investigación social, y explica por qué conviene
escribir sobre la marcha en lugar de reconstruir al final. Su argumento es que un proyecto se
compone de decisiones pequeñas, tomadas una tras otra, que en el momento parecen obvias.

::: cita Hyers (2018, p. 163)
contingent decisions, the reasoning for which may swiftly be forgotten
+ decisiones contingentes cuyo razonamiento puede olvidarse muy pronto
:::

De ahí que el diario se abra el primer día y no cuando el análisis ya está avanzado. Lo que hoy
te parece evidente, dentro de tres meses será exactamente lo que no puedas explicar.



## 4.2 Qué hay dentro de la carpeta

Vale la pena mirar esa carpeta con el explorador de archivos, porque entender su estructura
quita casi todo el miedo a perder trabajo.

| Elemento | Contenido |
|---|---|
| `data.qda` | Base de datos SQLite con códigos, segmentos, memos, casos y atributos |
| `documents` | Copia de los archivos de texto y PDF que importaste |
| `images` | Copia de las imágenes |
| `audio` y `video` | Copia de los archivos multimedia, cuando eliges incorporarlos |

La base de datos guarda las marcas, no el contenido de los archivos multimedia. Al codificar
una entrevista en video, lo que se registra es que entre el minuto 4:12 y el 4:48 aplicaste
cierto código sobre cierto archivo.

Como toda la información vive en esa carpeta, respaldarla equivale a respaldar el proyecto
entero. Y como es una base de datos SQLite estándar, tus datos siguen siendo legibles con
otras herramientas si algún día lo necesitas.

::: aviso
No edites `data.qda` con otro programa mientras QualCoder está abierto, y no abras el mismo
proyecto desde dos equipos a la vez. La base no está pensada para acceso simultáneo, y el
resultado suele ser un archivo corrupto.
:::

::: video
Video 4.2. Recorrido por la carpeta del proyecto en el explorador de archivos, con la base de datos y las subcarpetas.
:::

::: captura img/captura-04-01.png
Captura 4.1. Carpeta del proyecto abierta en el explorador, con data.qda y las subcarpetas visibles.
:::

## 4.3 Respaldo

QualCoder puede generar una copia del proyecto cada vez que lo abres, si dejaste activada esa
preferencia. Es la primera línea de defensa y no basta por sí sola, porque esas copias viven
en el mismo disco.

::: pasos
1. Deja activada la copia automática al abrir el proyecto.
2. Una vez por semana, comprime la carpeta `.qda` completa y guárdala fuera del equipo, en un
   disco externo o en un servicio de nube.
3. Nombra cada respaldo con la fecha en formato año-mes-día, para que se ordenen solos.
4. Antes de cualquier operación masiva, como fusionar códigos o importar un proyecto ajeno,
   haz un respaldo manual.
5. Cada tanto, abre un respaldo para comprobar que funciona.
:::

::: tip
La sincronización en la nube sirve para los respaldos comprimidos, no para el proyecto en
uso. Sincroniza el `.zip`, nunca la carpeta abierta.
:::

::: video
Video 4.3. Rutina de respaldo, comprimiendo la carpeta del proyecto y nombrando el archivo con la fecha.
:::

## 4.4 Convenciones que conviene fijar hoy

Tres decisiones pequeñas evitan desorden más adelante.

La primera es el nombre de los archivos. Un esquema como `E03_rosa_2026-03-14.txt`, con
código de participante, seudónimo y fecha, permite ordenar y localizar sin abrir nada. Cámbialo
antes de importar, porque el nombre con el que entra el archivo es el que verás en todos los
informes.

La segunda es el nombre del codificador, que ahora sí puedes escribir. La opción no estaba
disponible mientras no había proyecto, porque el dato se guarda dentro de él. Aparece en cada
segmento y es lo que permite después comparar entre personas, así que conviene escribirlo
aunque trabajes solo, por si más adelante se suma alguien.

La tercera es el idioma de tus códigos. Mezclar español e inglés en el árbol de códigos
complica los informes y las búsquedas, y no hay manera cómoda de arreglarlo después.

::: captura img/captura-04-02.png
Captura 4.2. Ventana principal con un proyecto recién creado y el nombre del proyecto visible en la barra
de título.
:::

## 4.5 El diario del proyecto

QualCoder incluye "Diarios" (Journals), que son documentos de escritura libre dentro del proyecto. Abre uno
el primer día y anota qué decisiones tomaste y por qué.

Ese registro es lo que después te permite escribir el apartado metodológico sin inventar,
y en investigación cualitativa es parte del rigor, no una formalidad. La lección 18 lo
retoma con detalle.

::: video
Video 4.4. Apertura del primer diario del proyecto y escritura de la entrada inicial.
:::

::: reto Crea tu proyecto y ábrelo por fuera
Crea el proyecto del curso, ciérralo y localiza su carpeta en el explorador de archivos.
Identifica el archivo `data.qda` y la carpeta `documents`. Después crea tu primer respaldo
comprimido con la fecha de hoy.

::: solucion Qué deberías ver
La carpeta `documents` estará vacía porque aún no importas nada, y `data.qda` pesará unos
pocos cientos de kilobytes. Ese peso crece con la codificación y con las copias de los
archivos que importes después.
:::
:::

::: consejo Borrar códigos no tiene vuelta atrás
El borrado y la fusión escriben directamente en la base de datos, sin deshacer. Los archivos
originales siguen intactos, y la codificación de ese código se pierde. Respalda antes de
cualquier operación masiva sobre el árbol.
:::

::: consejo Para mover el proyecto, copia la carpeta completa
La base guarda las marcas y las subcarpetas guardan las copias de los archivos. Llevarse solo
`data.qda` rompe el proyecto. Comprime la carpeta `.qda` entera, con la fecha en el nombre.
:::

::: comprobacion
- El proyecto está creado y localizaste su carpeta en el explorador
- Reconoces el archivo de base de datos y la carpeta de documentos
- Escribiste tu nombre como codificador
- Hiciste un primer respaldo comprimido con la fecha en el nombre
- Abriste el diario del proyecto y escribiste una entrada
:::

::: clave
- El proyecto es una carpeta `.qda` con una base SQLite y copias de tus archivos
- Respaldar el proyecto es comprimir esa carpeta y guardarla fuera del equipo
- Los nombres de archivo y el idioma de los códigos se deciden antes de importar
- El diario del proyecto es el registro de tus decisiones y se abre desde el primer día
:::

::: apoyo Apoyo voluntario
Aquí no hay cuotas ni matrícula. Si te resulta útil, puedes apoyar en [gastos médicos](https://gofund.me/5c133cc99) o en [asistencia a personas desplazadas](https://www.paypal.com/paypalme/lorenzosalomon).
:::
