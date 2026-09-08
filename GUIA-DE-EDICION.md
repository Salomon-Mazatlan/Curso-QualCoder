# Guía de edición de lecciones

Las lecciones son archivos Markdown dentro de `lecciones/`. Además del Markdown habitual, el
curso reconoce bloques propios delimitados por tres dos puntos.

Un bloque abre con `::: nombre` y cierra con `:::` en una línea sola. Los bloques se pueden
anidar, que es como funciona el reto con su solución.

## Videos

```
::: video https://youtu.be/ID_DEL_VIDEO
Texto que aparece debajo del video.
:::
```

Se aceptan las direcciones de `youtube.com/watch?v=`, `youtu.be/`, `/embed/` y `/shorts/`, o
directamente el identificador de once caracteres.

El video no se carga hasta que la persona hace clic, así que la página abre rápido aunque
tenga varios. La reproducción usa el dominio de YouTube sin cookies.

Si dejas el bloque sin enlace, se muestra un recuadro que avisa que ahí va un video.

## Archivos de práctica

Los materiales descargables van en `ejercicios/`, con el esquema `NN-tema-descripcion.ext`,
donde `NN` es el número de lección con dos dígitos. Todo en minúsculas, sin acentos ni
espacios, con guiones medios como separador.

```
ejercicios/07-entrevista-cuidado.txt
ejercicios/08-articulo-dos-columnas.pdf
ejercicios/11-atributos-casos.csv
```

En la lección se enlazan con un bloque de descarga.

```
::: descarga
- [Entrevista para codificar](ejercicios/07-entrevista-cuidado.txt)
- [Tabla de atributos](ejercicios/11-atributos-casos.csv)
:::
```

La ruta arranca en la raíz del sitio, sin `../`, porque el contenido de la lección se inserta
dentro de `curso.html`. Lo mismo aplica a las imágenes.

```
![Ventana Codificar texto](img/07-codificar-texto.png)
```

GitHub sirve archivos de hasta 100 MB por archivo. Para audio y video conviene recortar el
fragmento o subirlo a otro servicio y enlazarlo.

## Bloques didácticos

| Marca | Aparece como |
|---|---|
| `::: preguntas` | Preguntas que guían la lección, al inicio |
| `::: objetivos` | Lo que se podrá hacer al terminar |
| `::: nota` | Aclaración sobre fondo gris |
| `::: aviso` | Advertencia en naranja |
| `::: tip` | Atajo o consejo, en verde |
| `::: clave` | Puntos clave, en la caja oscura del final |
| `::: captura` | Recuadro punteado que indica qué captura falta |
| `::: descarga` | Lista de archivos de práctica |
| `::: pasos` | Lista numerada con línea de tiempo vertical |
| `::: reto` | Ejercicio práctico |
| `::: solucion` | Respuesta plegable, va dentro del reto |
| `::: quiz` | Pregunta de opción múltiple interactiva |
| `::: apoyo` | Nota de donativos al final de la lección |
| `::: cita` | Cita textual con su traducción propia |
| `::: consejo` | Consejo metodológico desplegable |
| `::: constancia` | Tarjeta con el enlace para pedir la constancia |
| `::: resultado` | Marcador del examen final |
| `::: ficha` | Ficha con duración, requisitos y resultado, al inicio |
| `::: comprobacion` | Lista de comprobación con casillas, antes del cierre |

Todos aceptan un título propio escrito después del nombre.

```
::: aviso No trabajes sobre los originales
Copia los archivos antes de importarlos.
:::
```

## Pasos

```
::: pasos
1. Primer paso.
2. Segundo paso.
:::
```

La lista tiene que ser numerada para que se dibuje la línea de tiempo.

## Reto con solución

```
::: reto Codifica tu primera entrevista
Consigna del ejercicio.

::: solucion Qué deberías ver
Texto que aparece al desplegar.
:::
:::
```

El bloque de solución cierra primero y el del reto después.

## Citas textuales

```
::: cita Saldaña (2011, p. 95)
Coding is a heuristic
+ Codificar es un heurístico
:::
```

El título del bloque es la referencia. Las líneas normales forman la cita en su idioma
original y la que empieza con `+` es la traducción, que el sitio muestra precedida por
"Traducción propia". Si la fuente está en español, se omite la línea con `+`.

Mantén las citas por debajo de quince palabras y una sola por fuente en todo el curso. El
archivo `CITAS-POR-VERIFICAR.md` lleva el registro de cuál salió de qué documento.

## Ficha de la lección

Abre cada lección, antes de las preguntas.

```
::: ficha
- **Duración estimada** 30 minutos
- **Antes de empezar** el proyecto creado (lección 4)
- **Materiales** dos o tres archivos propios
- **Al terminar tendrás** el corpus importado y ordenado
:::
```

El texto en negrita de cada línea es la etiqueta y el resto es el contenido.

## Lista de comprobación

Va justo antes del bloque `clave`. Las casillas se marcan con un clic y no guardan estado.

```
::: comprobacion
- Importaste al menos tres archivos de tipos distintos
- La carpeta de documentos contiene las copias
:::
```

## Videos y capturas

Cada procedimiento lleva su propio video, numerado por lección.

```
::: video https://youtu.be/ID
Video 5.3. Importación de un audio, con la elección entre copiar o enlazar.
:::
```

La numeración es manual. Si insertas un video en medio, renumera los siguientes para que el
orden siga correspondiendo con el de la lección.

Los 99 bloques traen de momento un mismo video de prueba, para ver cómo queda la página
mientras grabas. Para sustituirlos, busca y reemplaza el identificador en toda la carpeta de
lecciones.

```bash
grep -rl "p2pWR1IrKbg" lecciones/          # ver qué lecciones lo usan todavía
```

Las capturas siguen el mismo esquema.

```
::: captura
Captura 5.1. Ventana de gestión de archivos con un filtro aplicado.
:::
```

La ruta de la imagen va en la misma línea de apertura y el pie en el cuerpo. En la página se
muestra con un botón de ampliar, y al hacer clic la captura se abre a pantalla completa sobre
la misma página, sin salir de la lección. Con más de una captura en la lección, el visor deja
pasar de una a otra con las flechas del teclado, y se cierra con Escape o haciendo clic fuera
de la imagen.

Para poner las capturas reales, sustituye los archivos de `img/` conservando el nombre. No hace
falta tocar las lecciones.

## Consejos metodológicos

```
::: consejo El proyecto va en disco local
Una carpeta sincronizada con la nube provoca errores de bloqueo.
:::
```

Se muestra plegado, con el título visible, y se abre con un clic. Es el formato de los apuntes
que complementan el desarrollo sin interrumpir la lectura. Cada lección lleva tres, uno de
repaso de la lección anterior después de los objetivos, uno en medio del desarrollo y uno antes
de los puntos clave.

## Examen final y constancia

El bloque `::: quiz` se usa solo en la lección 19. Las demás lecciones no llevan preguntas.

```
::: quiz Pregunta 1
¿Texto de la pregunta?
- [ ] Opción incorrecta
- [x] Opción correcta
- [ ] Otra opción incorrecta
> Explicación que aparece después de responder.
:::
```

La primera línea suelta es la pregunta, la opción con `[x]` es la correcta y las líneas que
empiezan con `>` forman la explicación, que conviene cerrar indicando a qué lección volver.

El marcador que lleva la cuenta se coloca con un bloque vacío, al inicio de la lección.

```
::: resultado
:::
```

Cuenta automáticamente todas las preguntas de la página, así que no hay que configurarlo al
agregar o quitar preguntas.

La tarjeta de la constancia lleva el enlace del formulario en la misma línea de apertura.

```
::: constancia https://forms.gle/TU-FORMULARIO
Texto que explica qué datos hay que llenar.
:::
```

## Nota de donativos

Va al final de cada lección, con un texto distinto en cada una para que no se lea repetitivo.

```
::: apoyo Apoyo voluntario
Curso gratuito. Si puedes colaborar, hay dos destinos,
[gastos médicos](https://gofund.me/5c133cc99) y
[asistencia humanitaria a migrantes](https://www.paypal.com/paypalme/lorenzosalomon).
:::
```

## Nombres de la interfaz

El curso usa el nombre en español de cada módulo y, en su primera aparición dentro de la
lección, el original en inglés entre paréntesis, porque hay quien tiene la interfaz sin
traducir.

```
"Gestionar archivos" (Manage files)
"Codificar texto" (Code text)
"Recuperación de códigos" (Code retrieval)
```

## El método del curso

Las lecciones se apoyan en la ruta de anclaje, presentada en la lección 3. Cuando escribas
contenido nuevo, conviene mantener el vocabulario, con las cuatro palabras del método, nombrar,
situar, anclar y registrar, y con las piezas del programa nombradas siempre igual, código,
sub-código, categoría, caso, atributo, memo, diario, relación e informe.

Los tres fallos de anclaje, invertido, doble y vacío, sirven para redactar consejos. Casi
cualquier error frecuente cabe en uno de los tres, y nombrarlo así da continuidad al curso.

## Estructura recomendada

Primero `preguntas`, `objetivos` y el `consejo` de repaso. Después el desarrollo con
encabezados `##`, el video donde el procedimiento se entienda mejor viéndolo, la `cita` que
sostiene el argumento con un párrafo antes y otro después, un `consejo` en medio, la `descarga`
si la lección tiene archivos, el `reto`, un último `consejo`, el bloque `clave` y al final el
`apoyo`.

Los encabezados `##` y `###` alimentan el índice lateral derecho de forma automática.
