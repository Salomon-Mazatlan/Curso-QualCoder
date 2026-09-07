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

::: quiz Repaso de la lección 4
¿Por qué no conviene abrir el mismo proyecto desde dos equipos a la vez?
- [ ] Porque la licencia lo impide
- [x] Porque la base de datos no admite acceso simultáneo y puede corromperse
- [ ] Porque el programa duplica los códigos
> El proyecto es una base SQLite que el programa mantiene abierta, pensada para un solo acceso.
:::

## Preparar antes de importar

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
Importación de una entrevista, un PDF y una imagen, con la ventana "Gestionar archivos".
:::
<!-- verificar: 37481082-Qualitative-Research-Methods-a-Data-Collector-s-Field-Guide.pdf, p. 113 -->
::: cita Family Health International (2005, p. 113)
Remove identifying information from the transcript
+ Elimina de la transcripción la información que identifique a las personas
:::


## Importar

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

## Ordenar el corpus

Con más de una docena de archivos, la lista se vuelve difícil de recorrer. La ventana de
gestión de archivos incluye búsqueda y filtros por columna, que permiten acotar por nombre,
por tipo o por fecha sin alterar nada del proyecto.

Es un buen momento para revisar que cada archivo tenga el nombre definitivo y que no se haya
colado nada que no forme parte del corpus.

::: captura
Ventana "Gestionar archivos" con varios documentos importados y un filtro aplicado.
:::

## Referencias bibliográficas

QualCoder 4 gestiona referencias dentro del proyecto. Puedes importar un archivo `.ris`
exportado desde tu gestor bibliográfico, o traer las referencias desde una biblioteca local de
Zotero.

Una vez importadas, cada referencia se vincula a los documentos que le corresponden. Esto es
especialmente útil cuando el corpus está hecho de literatura, como en una revisión
sistemática o en un estado del arte, porque entonces cada PDF codificado queda asociado a su
ficha completa.

::: pasos
1. Exporta tus referencias desde el gestor bibliográfico en formato RIS, o deja Zotero abierto
   para importar desde su biblioteca local.
2. Abre "Gestionar referencias" (Manage references) en QualCoder e importa el archivo.
3. Revisa la vista previa de importación antes de confirmar, porque ahí se ven los campos que
   quedaron incompletos.
4. Vincula cada referencia con el archivo correspondiente del proyecto.
:::

## Qué dejar fuera

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
capa de texto, la lección 8 explica qué se puede y qué no.
:::
:::

::: quiz
Trabajas con entrevistas en video de 2 GB cada una y necesitas que el proyecto viaje entre
dos computadoras. ¿Qué conviene?
- [ ] Copiar los videos al proyecto para que nada se pierda
- [x] Enlazarlos y llevar los archivos en la misma estructura de carpetas en ambos equipos
- [ ] Convertirlos a audio y descartar el video
> Copiar haría el proyecto inmanejable. Enlazar funciona si respetas la ruta en ambos equipos,
> y si no, el programa te pedirá localizar el archivo de nuevo.
:::

::: quiz Para pensarlo
Un `.docx` con control de cambios activo no se importa. ¿Qué haces?
- [ ] Lo renombras a `.txt` sin abrirlo
- [x] Aceptas los cambios, lo guardas limpio y vuelves a importarlo
- [ ] Lo importas como PDF
> Los documentos protegidos o con marcas de revisión son la causa más común de fallos al importar.
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
