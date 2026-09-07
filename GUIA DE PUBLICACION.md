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

Cada lección trae ya un bloque `::: video`. Pega el enlace de YouTube junto a la marca y
listo. Mientras no haya enlace se muestra un recuadro que indica que ahí va un video, así que
el curso se puede publicar e ir completando después. El detalle está en `GUIA-DE-EDICION.md`.

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

## Actualizar los enlaces de donativos

Aparecen en tres lugares. En el bloque `::: apoyo` al final de cada lección, en el pie de
`index.html` y en `README.md`.
