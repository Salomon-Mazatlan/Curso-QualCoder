# Guía de publicación

Instrucciones de mantenimiento del sitio. Quien estudia el curso no necesita este archivo.

## Publicar en GitHub Pages

1. Crea un repositorio nuevo, por ejemplo `curso-qualcoder4`.
2. Sube todo el contenido de esta carpeta a la raíz del repositorio, incluido el archivo
   `.nojekyll`, que evita que GitHub procese los archivos `.md` de las lecciones.
3. Entra en Settings, sección Pages.
4. En Source elige Deploy from a branch, con la rama `main` y la carpeta `/ (root)`.
5. Guarda y espera un minuto. La dirección queda como
   `https://TU-USUARIO.github.io/curso-qualcoder4/`.

Para usar un subdominio propio, agrega un archivo `CNAME` con el dominio y configura el
registro DNS correspondiente.

## Verlo antes de publicar

Las lecciones se cargan con `fetch`, así que abrir `index.html` con doble clic no funciona.
Levanta un servidor local desde la carpeta del curso.

```bash
python -m http.server 8000
```

Después abre `http://localhost:8000`.

## Estructura

```
index.html               portada y temario
curso.html               visor de lecciones
.nojekyll                desactiva el procesado de GitHub Pages
assets/indice.js         módulos, lecciones, duraciones y resúmenes
assets/estilos.css       diseño, colores y tipografías
assets/curso.js          carga de lecciones, videos, autoevaluación y avance
assets/vendor/           marked.min.js con su licencia MIT
lecciones/*.md           contenido de cada lección
CITAS-POR-VERIFICAR.md   registro de las citas textuales y su archivo de origen
ejercicios/              archivos de práctica descargables
img/                     capturas de pantalla
```

## Agregar los videos

Hay 99 bloques `::: video`, uno por procedimiento, y ahora mismo todos apuntan al mismo video
de prueba para que puedas ver cómo queda la página mientras grabas.

Conforme grabes, sustituye el enlace de cada bloque por el suyo. Para localizar los que faltan,
desde la carpeta del curso.

```bash
grep -rn "p2pWR1IrKbg" lecciones/ | wc -l    # cuántos siguen con el video de prueba
grep -rn "p2pWR1IrKbg" lecciones/03*.md      # los de una lección concreta
```

Si prefieres publicar con los huecos a la vista, borra el enlace y deja solo `::: video`. En
ese caso se muestra un recuadro que avisa de que ahí va un video.

## Subir los archivos de práctica

Van en `ejercicios/`, con el esquema `NN-tema-descripcion.ext`. La lista de los que esperan
las lecciones actuales está en `ejercicios/LEEME.md`.

## Modificar el temario

`assets/indice.js` define módulos y lecciones. Para agregar una, crea su archivo en
`lecciones/` y añade su entrada, cuidando que el campo `archivo` coincida con la ruta real.
El orden del arreglo es el orden del curso y de la navegación entre lecciones.

## Cambiar colores y tipografías

Las variables del inicio de `assets/estilos.css` controlan todo. Las cinco variables
`--marca-1` a `--marca-5` son los colores de los módulos, y `--azul`, `--rosa`, `--amarillo`,
`--verde`, `--violeta` y `--naranja` la paleta base. El bloque `[data-tema="oscuro"]` define
las mismas variables para el tema oscuro.

Las tipografías se cargan en el `<head>` de `index.html` y de `curso.html`, y se asignan en
`--display`, `--serif` y `--mono`.

## El enlace de la constancia

La lección 19 termina con una tarjeta que apunta a un formulario. Está puesto como
`https://forms.gle/CAMBIA-ESTE-ENLACE` y hay que sustituirlo por el tuyo, en el bloque
`::: constancia` de `lecciones/19-examen-y-constancia.md`.

Sirve cualquier formulario que recoja nombre completo, correo e institución. La emisión es
manual, así que conviene que el formulario avise del tiempo de respuesta. El examen no envía
resultados a ningún lado, la calificación se calcula y se muestra solo en el navegador de quien
lo contesta.

## La dirección del sitio en las citas

La cita del curso aparece en tres lugares, la portada, el README y la lección 21, con la
dirección puesta como `https://TU-USUARIO.github.io/Curso-QualCoder/`. Sustitúyela por la real
en cuanto publiques.

```bash
grep -rn "TU-USUARIO" .
```

## Actualizar los enlaces de donativos

Aparecen en tres lugares. En el bloque `::: apoyo` al final de cada lección, en el pie de
`index.html` y en `README.md`.
