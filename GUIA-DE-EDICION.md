# Guía de edición de lecciones

Las lecciones son archivos Markdown normales dentro de `lecciones/`. Además del Markdown
habitual, el curso reconoce bloques propios delimitados por tres dos puntos.

Un bloque abre con `::: nombre` y cierra con `:::` en una línea sola. Los bloques pueden
anidarse, que es como funciona el reto con su solución.

## Videos

```
::: video https://youtu.be/ID_DEL_VIDEO
Texto que aparece debajo del video.
:::
```

Se aceptan las direcciones de `youtube.com/watch?v=`, `youtu.be/`, `/embed/` y `/shorts/`,
o directamente el identificador de once caracteres.

El video no se carga hasta que la persona hace clic, así que la página abre rápido aunque
tenga varios. La reproducción usa el dominio sin cookies de YouTube.

Si dejas el bloque sin enlace, se muestra un recuadro que avisa que ahí va un video. Sirve
para publicar el curso e ir grabando después.

## Bloques didácticos

| Marca | Aparece como |
|---|---|
| `::: preguntas` | Preguntas que guían la lección, al inicio |
| `::: objetivos` | Lo que se podrá hacer al terminar |
| `::: nota` | Aclaración en gris |
| `::: aviso` | Advertencia en naranja |
| `::: tip` | Atajo o consejo, en verde |
| `::: clave` | Puntos clave, en la caja oscura del final |
| `::: captura` | Recuadro punteado que indica qué captura de pantalla falta |
| `::: pasos` | Lista numerada con la línea de tiempo vertical |
| `::: reto` | Ejercicio práctico |
| `::: solucion` | Respuesta plegable, va dentro del reto |
| `::: quiz` | Pregunta de opción múltiple interactiva |

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

El bloque de solución cierra primero, y el del reto después. El texto que escribas junto a
`::: solucion` es lo que se lee en el enlace desplegable.

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

La primera línea suelta es la pregunta, las opciones marcadas con `[x]` son las correctas y
las líneas que empiezan con `>` forman la explicación.

## Recomendaciones de escritura

Cada lección funciona mejor con esta secuencia. Primero `preguntas` y `objetivos`, después
el desarrollo con encabezados `##`, el video donde el procedimiento se entienda mejor
viéndolo, un `reto` cerca del final, un `quiz` y el bloque `clave` para cerrar.

Los encabezados `##` y `###` alimentan el índice lateral derecho de forma automática, así
que conviene que digan de qué trata la sección.

## Imágenes

Guarda las capturas en una carpeta `img/` dentro del curso y enlázalas de manera relativa
desde la lección.

```
![Ventana de codificación](../img/codificacion-texto.png)
```

Los bloques `::: captura` sirven como recordatorio de las capturas que faltan. Cuando
insertes la imagen definitiva, borra el recordatorio.
