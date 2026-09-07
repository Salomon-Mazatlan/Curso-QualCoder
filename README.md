# Investigación cualitativa con QualCoder 4

Curso en español de acceso abierto, en formato de sitio estático, listo para publicarse en
GitHub Pages. Diecisiete lecciones repartidas en cinco módulos, con espacios preparados para
insertar videos de YouTube, ejercicios y autoevaluaciones.

El sitio no necesita compilarse. Son archivos HTML, CSS, JavaScript y Markdown, así que se
publica tal cual.

## Publicarlo en GitHub Pages

1. Crea un repositorio nuevo en GitHub, por ejemplo `curso-qualcoder4`.
2. Sube todo el contenido de esta carpeta a la raíz del repositorio, incluido el archivo
   `.nojekyll`, que es lo que evita que GitHub intente procesar los archivos `.md`.
3. Entra en Settings, sección Pages.
4. En Source elige Deploy from a branch, con la rama `main` y la carpeta `/ (root)`.
5. Guarda y espera un minuto. La dirección queda como
   `https://TU-USUARIO.github.io/curso-qualcoder4/`.

Si prefieres el dominio de SoftCualitativo, agrega un archivo `CNAME` con el subdominio que
vayas a usar y configura el registro DNS correspondiente.

## Verlo en tu computadora antes de publicar

Las lecciones se cargan con `fetch`, así que abrir `index.html` con doble clic no funciona.
Levanta un servidor local desde la carpeta del curso.

```bash
python -m http.server 8000
```

Después abre `http://localhost:8000` en el navegador.

## Estructura

```
index.html              portada con el temario
curso.html              visor de lecciones
.nojekyll               desactiva el procesado de GitHub Pages
assets/indice.js        índice del curso, módulos y lecciones
assets/estilos.css      hoja de estilos
assets/curso.js         carga de lecciones, videos, cuestionarios y avance
assets/vendor/          marked.min.js, el conversor de Markdown, con su licencia MIT
lecciones/*.md          contenido de cada lección
```

## Añadir los videos

Cada lección trae ya los espacios marcados. Busca en el archivo `.md` los bloques que
empiezan con `::: video` y pega el enlace de YouTube junto a la marca.

```
::: video https://youtu.be/ID_DEL_VIDEO
Texto del pie de video.
:::
```

Mientras no haya enlace se muestra un recuadro que indica dónde va el video, así que puedes
publicar el curso e ir agregándolos después. El detalle completo de esta y las demás marcas
está en `GUIA-DE-EDICION.md`.

## Modificar el temario

El archivo `assets/indice.js` define módulos, lecciones, duraciones y resúmenes. Para agregar
una lección, crea su archivo en `lecciones/` y añade su entrada en ese índice. El campo
`archivo` debe coincidir con la ruta real.

Para cambiar los colores del sitio, edita las variables del inicio de `assets/estilos.css`.
Las cinco variables `--marca-1` a `--marca-5` son los colores de los módulos.

## Avance de quien estudia

El curso marca las lecciones terminadas usando el almacenamiento local del navegador. No hay
registro, cuentas ni servidor, y por lo mismo el avance no viaja entre equipos.

## Autoría y licencia

El contenido de las lecciones es original y fue escrito para este curso. Se distribuye bajo
una licencia Creative Commons Atribución Compartir Igual 4.0, de modo que cualquiera pueda
adaptarlo citando la fuente.

QualCoder es un programa libre desarrollado por Colin Curtain y su comunidad de
colaboradores, independiente de este material de formación. El sitio incluye la biblioteca
`marked`, con licencia MIT, cuyo texto está en `assets/vendor/`.
