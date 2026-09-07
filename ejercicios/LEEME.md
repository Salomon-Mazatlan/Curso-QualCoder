# Archivos de práctica

Todos los materiales de esta carpeta están simulados. Las personas, los lugares y los hechos
son ficticios, y pueden usarse, modificarse y redistribuirse sin restricción. Sustitúyelos por
material propio cuando quieras, conservando los nombres para que los enlaces de las lecciones
sigan funcionando.

| Archivo | Lección | Para qué se usa |
|---|---|---|
| `05-entrevista-ejemplo.txt` | 5 | Importar un texto plano con patrón de hablantes |
| `05-nota-de-campo.docx` | 5 | Importar un documento con formato y encabezados |
| `06-encuesta-ejemplo.csv` | 6 | Importar un cuestionario de 40 filas con dos preguntas abiertas |
| `07-referencias-ejemplo.ris` | 7 | Importar nueve referencias bibliográficas |
| `09-entrevista-cuidado.txt` | 9 | Codificar texto, entrevista más larga |
| `10-articulo-dos-columnas.pdf` | 10 | Codificar sobre maqueta, con tabla y figura |
| `10-articulo-resaltado.pdf` | 10 | Importar un PDF con nueve resaltados en cuatro colores |
| `11-fotografia-campo.jpg` | 11 | Codificar regiones de imagen |
| `12-fragmento-audio.mp3` | 12 | Codificar desde la onda de sonido, 2 min 27 s |
| `12-transcripcion-grupo-focal.txt` | 12 | Marcar hablantes y sincronizar marcas de tiempo |
| `14-atributos-casos.csv` | 14 | Cargar atributos de ocho casos |

## Detalles de cada archivo

**Los dos CSV** usan punto y coma como separador y codificación UTF-8, que es la combinación
más común en español. La encuesta trae nueve columnas cerradas y dos abiertas, `p8_dificultades`
y `p9_apoyo_necesario`, con algunas respuestas vacías a propósito para que se vea qué pasa con
ellas al importar.

**El PDF resaltado** lleva anotaciones reales incrustadas en el archivo, de tipo Highlight, en
cuatro colores que corresponden a cuatro temas. Es la misma maqueta del PDF sin resaltar, así
que se pueden comparar los dos.

**El audio** se generó con voz sintética, así que suena robótico. Sirve para lo que hace falta
en la lección 12, que es ver la forma de la onda, distinguir turnos de palabra y practicar
marcas de tiempo. Las marcas de la transcripción corresponden exactamente a los tiempos del
archivo de audio.

**La fotografía** es una escena ilustrada, no una imagen real. Tiene varias zonas codificables
por separado, entre ellas el calendario con citas marcadas, el pastillero, los frascos y la
libreta con horarios.

**La entrevista y el grupo focal** usan un patrón de hablante uniforme, `Nombre:` al inicio de
línea, para que la detección de hablantes funcione. Si quieres practicar el caso contrario,
introduce variantes a mano y comprueba cómo falla.

## Si subes material propio

Sigue el esquema `NN-tema-descripcion.ext`, con el número de lección en dos dígitos, en
minúsculas, sin acentos ni espacios y con guiones medios como separador.

Antes de subir cualquier material con datos de personas, comprueba que esté anonimizado y que
tengas autorización para difundirlo. GitHub sirve archivos de hasta 100 MB por archivo, así que
para audio y video conviene recortar o comprimir.
