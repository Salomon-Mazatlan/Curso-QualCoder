::: ficha
- **Duración estimada** 30 minutos
- **Antes de empezar** el proyecto creado (lección 4)
- **Materiales** dos o tres archivos propios, de tipos distintos
- **Al terminar tendrás** tu corpus importado y ordenado dentro del proyecto
:::

::: preguntas
- ¿Qué formatos acepta QualCoder y cómo conviene preparar cada uno?
- ¿Cómo importo entrevistas, PDF, imágenes y multimedia?
- ¿Qué hago con las referencias bibliográficas?
:::

::: objetivos
- Preparar archivos de texto para que se codifiquen sin sorpresas
- Importar los distintos tipos de material y organizarlos con filtros
- Vincular referencias bibliográficas a los documentos del proyecto
:::

::: consejo Antes de seguir, un repaso
No abras el mismo proyecto desde dos equipos a la vez. La base de datos está pensada para un
solo acceso y el resultado del acceso simultáneo suele ser un archivo corrupto.
:::

## 5.1 Preparar antes de importar

El tiempo que inviertas limpiando archivos se recupera multiplicado. Estas cuatro
precauciones resuelven la mayoría de los problemas.

Unifica el formato de las transcripciones. Si marcas hablantes, usa siempre el mismo patrón,
por ejemplo `Entrevistadora:` y `Rosa:` al inicio de línea, sin variaciones. Esa consistencia
es la que después permite detectar hablantes automáticamente.

Anonimiza antes, no después. Sustituye nombres, direcciones y lugares identificables en el
archivo original. Una vez que el texto está codificado, cualquier corrección de contenido
desplaza las posiciones de los segmentos.

Quita lo que no vas a analizar. Encabezados, membretes repetidos y numeración de página
ensucian las búsquedas y las nubes de palabras.

Y guarda el texto plano en `.txt` con codificación UTF-8 cuando puedas, que es el formato más
predecible. Los `.docx` funcionan, aunque el formato enriquecido se convierte al importar.

::: aviso
Modificar un archivo después de codificarlo es la manera más rápida de descuadrar un
proyecto. Si necesitas corregir la transcripción, hazlo antes de empezar a marcar.
:::

::: video
Video 5.1. Importación de una entrevista, un PDF y una imagen, con la ventana "Gestionar archivos".
:::
<!-- verificar: 37481082-Qualitative-Research-Methods-a-Data-Collector-s-Field-Guide.pdf, p. 113 -->
La guía de campo para recolectores de datos de Family Health International resume el manejo de
materiales en una secuencia de pasos, y uno de ellos ocupa siempre el mismo lugar, antes de que
el archivo salga de las manos de quien transcribe.

::: cita Family Health International (2005, p. 113)
Remove identifying information from the transcript
+ Elimina de la transcripción la información que identifique a las personas
:::

Esa es la posición correcta también aquí, antes de importar. Después de codificar, cualquier
sustitución de nombres desplaza las posiciones de los segmentos y descuadra el proyecto.



::: video
Video 5.2. Limpieza de una transcripción, con el patrón de hablantes uniformado y los datos identificables sustituidos.
:::

::: captura img/captura-05-01.png
Captura 5.1. Transcripción antes y después de la limpieza, con el patrón de hablantes uniforme.
:::

## 5.2 Importar

La importación se hace desde "Gestionar archivos" (Manage files). Al elegir un archivo,
QualCoder lo copia dentro de la carpeta del proyecto y lo registra en la base de datos.

| Tipo | Formatos habituales | Nota |
|---|---|---|
| Texto | `.txt`, `.docx`, `.odt`, `.md` | Se convierte a texto plano para codificar |
| Documento maquetado | `.pdf` | Conserva la maqueta y tiene su propio módulo de codificación |
| Imagen | `.jpg`, `.png` | Se codifica marcando regiones rectangulares |
| Audio y video | `.mp3`, `.wav`, `.mp4`, entre otros | Requiere VLC instalado |
| Enlaces | Direcciones web | Se guarda la referencia sin copiar el contenido |

Con audio y video puedes elegir entre copiar el archivo al proyecto o dejarlo enlazado en su
ubicación. Copiar hace el proyecto autosuficiente y pesado. Enlazar lo mantiene ligero, con el
riesgo de que el archivo cambie de lugar y el vínculo se rompa.

::: nota
Al importar un audio o un video, QualCoder puede crear un archivo de texto asociado para la
transcripción. Si ya tienes la transcripción hecha, puedes sustituir ese texto por el tuyo en
lugar de escribirlo de nuevo.
:::

::: video
Video 5.3. Importación de una entrevista en .docx y comprobación de la copia dentro de la carpeta del proyecto.
:::

::: video
Video 5.4. Importación de un PDF y de una imagen, y diferencias en cómo aparecen en la lista de archivos.
:::

::: video
Video 5.5. Importación de un audio, con la elección entre copiar el archivo al proyecto o dejarlo enlazado.
:::

## 5.3 Ordenar el corpus

Con más de una docena de archivos, la lista se vuelve difícil de recorrer. La ventana de
gestión de archivos incluye búsqueda y filtros por columna, que permiten acotar por nombre,
por tipo o por fecha sin alterar nada del proyecto.

Es un buen momento para revisar que cada archivo tenga el nombre definitivo y que no se haya
colado nada que no forme parte del corpus.

::: captura img/captura-05-02.png
Captura 5.2. Ventana "Gestionar archivos" con varios documentos importados y un filtro aplicado.
:::

::: video
Video 5.6. Uso de la búsqueda y los filtros de la ventana de gestión de archivos sobre un corpus de veinte documentos.
:::

## 5.4 Referencias bibliográficas y encuestas

Dos tipos de material tienen su propia lección porque el procedimiento es distinto.

Las encuestas y hojas de cálculo con preguntas abiertas se importan con un asistente que crea
casos, atributos y textos en una sola operación. Eso es la lección 6.

Las referencias bibliográficas se cargan desde un archivo RIS o desde Zotero y se vinculan
después a los documentos del proyecto, lo que resulta indispensable cuando el corpus es
literatura. Eso es la lección 7.

## 5.5 Qué dejar fuera

No todo lo que tienes debe entrar al proyecto. Los datos crudos sin anonimizar, los
consentimientos firmados y cualquier material que identifique a las personas participantes
conviene mantenerlos aparte, con su propio resguardo.

Adentro va lo que vas a analizar. Afuera va lo que necesitas conservar por razones éticas o
legales, con acceso restringido.

::: descarga
- [Entrevista de ejemplo, texto plano](ejercicios/05-entrevista-ejemplo.txt)
- [Nota de campo de ejemplo](ejercicios/05-nota-de-campo.docx)
:::

::: reto Arma tu corpus de práctica
Importa al menos tres archivos de tipos distintos, por ejemplo una transcripción, un PDF y una
imagen. Renómbralos antes con tu convención, y comprueba después que la carpeta `documents`
del proyecto contiene las copias.

::: solucion Si un archivo no se importa
Los `.docx` protegidos o con control de cambios activo suelen fallar. Ábrelos, acepta los
cambios, guarda como `.docx` limpio o como `.txt`, y vuelve a intentar. Con PDF escaneados sin
capa de texto, la lección 10 explica qué se puede y qué no.
:::
:::

::: consejo Copiar o enlazar el multimedia
Copiar hace el proyecto autosuficiente y pesado. Enlazar lo mantiene ligero, con el riesgo de
que el archivo cambie de lugar. Con grabaciones grandes que viajan entre equipos, enlaza y
respeta la misma estructura de carpetas en los dos.
:::

::: consejo Si un archivo no se importa
Los `.docx` protegidos o con control de cambios activo son la causa más frecuente. Ábrelos,
acepta los cambios, guarda una copia limpia y vuelve a intentar. Con PDF escaneados, el
reconocimiento óptico va antes de importar.
:::

::: comprobacion
- Los archivos están limpios y anonimizados antes de entrar al proyecto
- Importaste al menos tres archivos de tipos distintos
- La carpeta de documentos del proyecto contiene las copias
- Los nombres de archivo siguen tu convención y no vas a cambiarlos
:::

::: clave
- Limpiar y anonimizar antes de importar evita descuadrar la codificación después
- QualCoder copia los archivos al proyecto, salvo el multimedia que decidas enlazar
- Los filtros de "Gestionar archivos" hacen manejable un corpus grande
- Las referencias bibliográficas se importan desde RIS o desde Zotero y se vinculan a los documentos
:::

::: apoyo Cómo se sostiene el curso
Este material se mantiene con donativos voluntarios. Se reciben para [gastos médicos](https://gofund.me/5c133cc99) y para [asistencia humanitaria a migrantes](https://www.paypal.com/paypalme/lorenzosalomon).
:::
