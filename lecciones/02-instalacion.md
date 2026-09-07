::: preguntas
- ¿Cómo instalo QualCoder 4 en mi sistema operativo?
- ¿Qué configuro antes de crear el primer proyecto?
- ¿Qué hago si el programa no abre?
:::

::: objetivos
- Instalar QualCoder 4 en Windows, macOS o Linux
- Dejar el idioma, la carpeta de trabajo y las preferencias listas
- Reconocer los problemas de arranque más comunes y su solución
:::

::: quiz Repaso de la lección 1
¿Por qué conviene copiar los materiales a una carpeta de trabajo en vez de usar los originales?
- [ ] Porque el programa no lee archivos de otras carpetas
- [x] Porque durante el curso vas a probar cosas y los originales deben quedar intactos
- [ ] Porque QualCoder borra los archivos después de importarlos
> QualCoder copia lo que importas dentro del proyecto, y aun así conviene que los originales queden aparte, sin tocar.
:::

## De dónde se descarga

Las versiones publicadas están en el repositorio oficial del proyecto, en la sección de
releases. Ahí encontrarás el instalador para Windows y los archivos para los demás sistemas,
junto con las notas de la versión, que conviene leer porque señalan los cambios recientes.

Descarga siempre desde el repositorio del proyecto. Circulan copias en sitios de descargas
que empaquetan versiones viejas o modificadas.

::: video
Descarga e instalación completa en Windows, paso a paso.
:::

## Windows

::: pasos
1. Descarga el instalador `.exe` de la última versión desde la página de releases.
2. Ejecútalo. Windows puede mostrar un aviso de aplicación no reconocida porque el programa
   no está firmado comercialmente. Elige más información y luego ejecutar de todos modos.
3. Termina el asistente y abre QualCoder desde el menú de inicio.
4. La primera vez tarda unos segundos más porque prepara las carpetas de configuración.
:::

::: aviso
Algunos antivirus ponen en cuarentena los ejecutables generados con PyInstaller, que es la
herramienta con la que se empaqueta QualCoder. Si el programa desaparece después de
instalarlo, revisa la cuarentena de tu antivirus y agrega una excepción para la carpeta de
instalación.
:::

## macOS

En macOS se descarga el paquete correspondiente a la versión y se arrastra a la carpeta de
aplicaciones. Al abrirlo por primera vez el sistema bloquea la ejecución por venir de un
desarrollador no identificado, así que hay que abrirlo desde el menú contextual con la
opción de abrir, o autorizarlo en las preferencias de seguridad y privacidad.

## Linux

En Linux la vía habitual es ejecutar desde el código fuente, que además te deja siempre en
la versión más reciente.

```bash
git clone https://github.com/ccbogel/QualCoder.git
cd QualCoder
pip install -r requirements.txt
python -m qualcoder
```

Conviene hacerlo dentro de un entorno virtual para no mezclar las dependencias con las del
sistema.

```bash
python3 -m venv entorno
source entorno/bin/activate
```

Para reproducción de audio y video, QualCoder se apoya en VLC, así que instálalo desde el
gestor de paquetes de tu distribución si no lo tienes.

::: nota
Ejecutar desde el código fuente funciona igual en Windows y macOS, y es la mejor opción si
quieres probar correcciones recién publicadas antes de que salga el siguiente instalador.
:::

## Primeras configuraciones

Antes de crear un proyecto vale la pena pasar por las preferencias del programa.

| Ajuste | Por qué importa |
|---|---|
| Idioma de la interfaz | Cambia los menús a español. Requiere reiniciar el programa |
| Nombre del codificador | Queda registrado en cada segmento codificado, es imprescindible al trabajar en equipo |
| Tema visual | Afecta el contraste al codificar durante horas |
| Tamaño de letra | Se ajusta por separado para la interfaz y para el texto de los documentos |
| Copia de seguridad al abrir | Genera una copia del proyecto cada vez que lo abres |

Deja activada la copia de seguridad automática. Ocupa espacio en disco, y a cambio te salva
de cualquier error irreversible durante la codificación.

::: captura
Ventana de preferencias con el idioma en español y la copia de seguridad activada.
:::

## Cuando algo no arranca

Si al abrir no pasa nada o la ventana se cierra sola, ejecuta el programa desde la terminal
para ver el mensaje de error. Con el instalador de Windows, el registro de errores queda en
la carpeta de configuración del usuario, dentro de una carpeta llamada `.qualcoder`.

Los tres tropiezos más frecuentes tienen solución rápida. Una instalación incompleta de las
dependencias se resuelve repitiendo la instalación de requisitos. La ausencia de VLC impide
abrir audio y video, aunque el resto del programa funcione. Y una carpeta de proyecto en una
unidad de red o en un servicio de sincronización activa produce errores de bloqueo de la base
de datos, que se corrigen moviendo el proyecto a un disco local.

::: reto Deja el programa listo
Instala QualCoder 4, cambia el idioma a español, escribe tu nombre como codificador y
reinicia el programa para comprobar que los menús aparecen traducidos.

::: solucion Si algún menú sigue en inglés
Las traducciones se completan por versión y siempre quedan cadenas pendientes en las
funciones más nuevas. Si encuentras textos sin traducir, puedes reportarlos en el
repositorio del proyecto, que es la vía por la que se corrigen.
:::
:::

::: quiz
¿Por qué conviene dejar el proyecto en un disco local y no en una carpeta sincronizada con la nube?
- [ ] Porque el programa no puede leer archivos remotos
- [x] Porque la sincronización en segundo plano bloquea la base de datos y provoca errores
- [ ] Porque los proyectos ocupan demasiado espacio
> El proyecto es una base de datos SQLite que el programa mantiene abierta. Un servicio que
> sincroniza archivos mientras trabajas puede corromperla. Sincroniza el respaldo, no el
> proyecto en uso.
:::

::: quiz Para pensarlo
El programa se cierra solo al arrancar y no muestra ningún mensaje. ¿Cuál es el primer paso?
- [ ] Reinstalar el sistema operativo
- [x] Ejecutarlo desde la terminal para ver el error que produce
- [ ] Cambiar de computadora
> Con el instalador de Windows, además, queda un registro de errores en la carpeta `.qualcoder` del usuario.
:::

::: clave
- Descarga siempre desde el repositorio oficial y revisa las notas de la versión
- Los avisos de seguridad de Windows y macOS son esperables porque el programa no está firmado comercialmente
- Configura idioma, nombre de codificador y copia de seguridad antes de empezar
- Trabaja sobre disco local, nunca dentro de una carpeta sincronizada
:::

::: apoyo Sostener el curso
El curso no tiene costo ni requiere registro. Quien pueda y quiera colaborar lo hace en [gastos médicos](https://gofund.me/5c133cc99) o en [asistencia a migrantes y personas desplazadas](https://www.paypal.com/paypalme/lorenzosalomon).
:::
