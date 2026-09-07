::: ficha
- **Duración estimada** 25 minutos
- **Antes de empezar** tener permisos para instalar programas en tu equipo
- **Materiales** conexión a internet
- **Al terminar tendrás** QualCoder 4 instalado, en español y con la copia de seguridad activada
:::

::: preguntas
- ¿Cómo instalo QualCoder 4 en mi sistema operativo?
- ¿Qué configuro antes de crear el primer proyecto?
- ¿De dónde descargo la versión correcta?
:::

::: objetivos
- Instalar QualCoder 4 en Windows, macOS o Linux
- Dejar el idioma, la carpeta de trabajo y las preferencias listas
- Localizar la página de releases y elegir el archivo que corresponde a tu sistema
:::

::: consejo Antes de seguir, un repaso
Trabaja con copias de tus materiales. QualCoder guarda una copia de cada archivo dentro del
proyecto, y aun así conviene que los originales queden intactos en otra carpeta, porque
durante el curso vas a probar cosas.
:::

## 2.1 De dónde se descarga

Todas las versiones publicadas están en la página de releases del proyecto.

[github.com/ccbogel/QualCoder/releases](https://github.com/ccbogel/QualCoder/releases)

Ahí encontrarás el instalador para Windows y los archivos para los demás sistemas, junto con
las notas de cada versión, que conviene leer porque señalan los cambios recientes y los
problemas conocidos. La versión más reciente aparece arriba, marcada como Latest.

Descarga siempre desde esa página. Circulan copias en sitios de descargas que empaquetan
versiones viejas o modificadas.

::: video https://www.youtube.com/watch?v=p2pWR1IrKbg
Video 2.1. Descarga e instalación completa en Windows, paso a paso.
:::

::: captura img/captura-02-01.png
Captura 2.1. Página de releases del proyecto, con la versión más reciente marcada como Latest y la lista de archivos descargables.
:::

## 2.2 Windows

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

::: video https://www.youtube.com/watch?v=p2pWR1IrKbg
Video 2.2. Instalación completa en Windows, incluido el aviso de aplicación no reconocida.
:::

::: captura img/captura-02-02.png
Captura 2.2. Aviso de seguridad de Windows, con la opción de ejecutar de todos modos.
:::

## 2.3 macOS

En macOS se descarga el paquete correspondiente a la versión y se arrastra a la carpeta de
aplicaciones. Al abrirlo por primera vez el sistema bloquea la ejecución por venir de un
desarrollador no identificado, así que hay que abrirlo desde el menú contextual con la
opción de abrir, o autorizarlo en las preferencias de seguridad y privacidad.

::: video https://www.youtube.com/watch?v=p2pWR1IrKbg
Video 2.3. Instalación en macOS y autorización del programa en las preferencias de seguridad.
:::

## 2.4 Linux

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

::: video https://www.youtube.com/watch?v=p2pWR1IrKbg
Video 2.4. Instalación desde el código fuente en Linux, con entorno virtual y dependencias.
:::

## 2.5 Primeras configuraciones

Antes de crear un proyecto vale la pena pasar por las preferencias del programa.

| Ajuste | Por qué importa |
|---|---|
| Idioma de la interfaz | Cambia los menús a español. Requiere reiniciar el programa |
| Tema visual | Afecta el contraste al codificar durante horas |
| Tamaño de letra | Se ajusta por separado para la interfaz y para el texto de los documentos |
| Copia de seguridad al abrir | Genera una copia del proyecto cada vez que lo abres |

Deja activada la copia de seguridad automática. Ocupa espacio en disco, y a cambio te salva
de cualquier error irreversible durante la codificación.

::: aviso El nombre del codificador viene después
El nombre de quien codifica queda registrado en cada segmento y es imprescindible al trabajar
en equipo, pero no se puede escribir todavía. Esa opción aparece hasta que existe un proyecto
abierto, porque el dato se guarda dentro del proyecto y no en las preferencias generales del
programa. Lo verás en la lección 4, al crear el primero.
:::

::: captura img/captura-02-03.png
Captura 2.3. Ventana de preferencias con el idioma en español y la copia de seguridad activada.
:::

::: nota Para profundizar
Sobre los criterios para elegir y evaluar herramientas dentro de un proyecto, Flick (2008)
dedica un apartado a preguntarse qué software se usa, para qué y con qué efecto sobre la
relación con el campo. Vale la pena leerlo antes de casarse con un programa.
:::

::: video https://www.youtube.com/watch?v=p2pWR1IrKbg
Video 2.5. Recorrido por las preferencias, con el cambio de idioma y la activación de la copia de seguridad.
:::

::: reto Deja el programa listo
Instala QualCoder 4, cambia el idioma a español, activa la copia de seguridad al abrir y
reinicia el programa para comprobar que los menús aparecen traducidos.

::: solucion Si algún menú sigue en inglés
Las traducciones se completan por versión y siempre quedan cadenas pendientes en las
funciones más nuevas. Si encuentras textos sin traducir, puedes reportarlos en el
repositorio del proyecto, que es la vía por la que se corrigen.
:::
:::

::: consejo El proyecto va en disco local
Una carpeta sincronizada con la nube provoca errores de bloqueo, porque el servicio escribe
sobre la base de datos mientras el programa la tiene abierta. Sincroniza el respaldo
comprimido y deja el proyecto en uso en el disco de tu equipo.
:::

::: consejo Instalador o código fuente
El instalador es más simple y va una o dos versiones por detrás. Ejecutar desde el código
fuente exige instalar dependencias y te deja siempre en la versión más reciente, con las
correcciones recién publicadas. Para aprender, el instalador basta.
:::

::: comprobacion
- El programa abre y los menús están en español
- La copia de seguridad al abrir está activada
- Sabes desde qué página se descarga la versión más reciente
:::

::: clave
- Descarga desde la página de releases del proyecto y revisa las notas de la versión
- Los avisos de seguridad de Windows y macOS son esperables porque el programa no está firmado comercialmente
- Configura idioma, tipografía y copia de seguridad antes de empezar, y deja el nombre del codificador para cuando exista un proyecto
- Trabaja sobre disco local, nunca dentro de una carpeta sincronizada
:::

::: apoyo Sostener el curso
El curso no tiene costo ni requiere registro. Quien pueda y quiera colaborar lo hace en [gastos médicos](https://gofund.me/5c133cc99) o en [asistencia a migrantes y personas desplazadas](https://www.paypal.com/paypalme/lorenzosalomon).
:::
