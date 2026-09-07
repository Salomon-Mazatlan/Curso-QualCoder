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
Coding is a heuristic — a method of discovery
+ Codificar es un heurístico, un método de descubrimiento
:::
```

El título del bloque es la referencia. Las líneas normales forman la cita en su idioma
original y la que empieza con `+` es la traducción, que el sitio muestra precedida por
«Traducción propia». Si la fuente está en español, se omite la línea con `+`.

Mantén las citas por debajo de quince palabras y una sola por fuente en todo el curso. El
archivo `CITAS-POR-VERIFICAR.md` lleva el registro de cuál salió de qué documento.

## Autoevaluación

```
::: quiz
¿Texto de la pregunta?
- [ ] Opción incorrecta
- [x] Opción correcta
- [ ] Otra opción incorrecta
> Explicación que aparece después de responder.
:::
```

La primera línea suelta es la pregunta, la opción con `[x]` es la correcta y las líneas que
empiezan con `>` forman la explicación.

El título es opcional y sirve para distinguir los tipos de pregunta.

```
::: quiz Repaso de la lección 5
::: quiz Para pensarlo
```

Cada lección lleva tres, una de repaso de la lección anterior justo después de los objetivos,
una de comprobación al final del desarrollo y una de profundización antes de los puntos clave.

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
«Gestionar archivos» (Manage files)
«Codificar texto» (Code text)
«Recuperación de códigos» (Code retrieval)
```

## Estructura recomendada

Primero `preguntas`, `objetivos` y el `quiz` de repaso. Después el desarrollo con encabezados
`##`, el video donde el procedimiento se entienda mejor viéndolo, la `cita` que sostiene el
argumento, la `descarga` si la lección tiene archivos, el `reto`, el `quiz` de comprobación,
el `quiz` de profundización, el bloque `clave` y al final el `apoyo`.

Los encabezados `##` y `###` alimentan el índice lateral derecho de forma automática.
