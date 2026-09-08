::: ficha
- **Duración estimada** 35 minutos
- **Antes de empezar** tener parte del corpus ya codificado a mano (lección 9)
- **Materiales** el corpus importado
- **Al terminar tendrás** un barrido automático revisado y documentado en el diario
:::

::: preguntas
- ¿Cuándo conviene automatizar parte de la codificación?
- ¿Qué hacen las funciones de inteligencia artificial de QualCoder 4?
- ¿Qué pasa con la confidencialidad de mis datos?
:::

::: objetivos
- Usar la autocodificación por búsqueda y por unidad de texto
- Configurar un proveedor de IA y elegir entre nube y modelos locales
- Decidir con criterio qué se automatiza y qué no, y dejarlo documentado
:::

::: consejo Antes de seguir, un repaso
"Marcar hablantes" necesita que la transcripción use siempre el mismo patrón. Mezclar `Rosa:`
con `ROSA -` es la causa más común de que la detección no encuentre nada.
:::

## 13.1 Autocodificación clásica

Antes de la inteligencia artificial ya existían formas de automatizar, y siguen siendo las más
predecibles porque hacen exactamente lo que se les pide.

La autocodificación por búsqueda aplica un código a todas las apariciones de un término o de un
patrón. Sirve para lo literal, como marcar cada mención de una institución o de un programa
social. Puedes revisar los resultados antes de confirmar, y también deshacer una sesión de
autocodificación completa si el resultado no sirvió.

La autocodificación por unidad aplica un código a la frase, al párrafo o al bloque que rodea
cada coincidencia, lo que evita quedarse con marcas de dos palabras que después no se entienden.

::: tip
Una autocodificación con expresiones regulares bien armada resuelve en segundos tareas
mecánicas, como marcar todas las intervenciones de un hablante o todos los años mencionados.
Lo mecánico se automatiza, lo interpretativo no.
:::

::: video https://www.youtube.com/watch?v=p2pWR1IrKbg
Video 13.1. Autocodificación por búsqueda de texto y revisión de los resultados antes de confirmar.
:::
<!-- verificar: Angrosino, Doing Ethnographic and Observational Research (2008), p. 75 -->
Michael Angrosino escribió sobre etnografía y observación mucho antes de que existieran los
asistentes de inteligencia artificial, y su advertencia sobre el software de análisis envejeció
notablemente bien.

::: cita Angrosino (2008, p. 75)
> Angrosino enumera las ventajas y los inconvenientes del software de análisis, décadas antes de que existieran los asistentes de inteligencia artificial. Entre los inconvenientes anota que
computer programs tempt the researcher to let them do all the work
+ los programas de cómputo tientan a quien investiga a dejar que hagan todo el trabajo
:::

La tentación aumentó desde entonces. Un modelo que devuelve doscientos segmentos codificados en
un minuto es mucho más seductor que una búsqueda de texto, y revisar esos doscientos segmentos
sigue siendo la única forma de que la codificación siga siendo tuya.



::: video https://www.youtube.com/watch?v=p2pWR1IrKbg
Video 13.2. Autocodificación por búsqueda de un término, con revisión de los resultados antes de confirmar.
:::

::: video https://www.youtube.com/watch?v=p2pWR1IrKbg
Video 13.3. Autocodificación por frase y por párrafo, y diferencia en los segmentos que produce.
:::

::: video https://www.youtube.com/watch?v=p2pWR1IrKbg
Video 13.4. Cómo deshacer una sesión de autocodificación completa.
:::

## 13.2 Qué hace la IA en QualCoder 4

La versión 4 incorpora funciones de inteligencia artificial que trabajan sobre el proyecto.
Permiten conversar sobre el material, buscar por significado en lugar de por palabra exacta, y
proponer codificaciones que tú revisas antes de aceptar.

La búsqueda por significado es donde más se nota la diferencia. Puedes pedir los pasajes donde
alguien expresa cansancio, y encontrar fragmentos que nunca usan esa palabra. Lo que devuelve
son candidatos, y la decisión sigue siendo tuya.

También hay distintos niveles de acceso a los datos, que determinan cuánta información del
proyecto se envía al modelo. Vale la pena entender ese ajuste antes de activarlo, porque de él
depende la confidencialidad de tu corpus.

::: pasos
1. Activa las funciones de IA en las preferencias del programa.
2. Elige un proveedor y configura sus credenciales, o apunta a un modelo local.
3. Define el nivel de acceso a los datos del proyecto según la sensibilidad del material.
4. Prueba primero con un documento poco sensible para ver cómo responde.
5. Revisa cada propuesta de codificación antes de aceptarla.
:::

::: video https://www.youtube.com/watch?v=p2pWR1IrKbg
Video 13.5. Configuración de un proveedor de inteligencia artificial y elección del nivel de acceso a los datos.
:::

::: video https://www.youtube.com/watch?v=p2pWR1IrKbg
Video 13.6. Búsqueda por significado sobre el corpus y revisión de los candidatos que devuelve.
:::

::: captura img/captura-13-01.png
Captura 13.1. Panel de configuración de IA con el nivel de acceso a los datos visible.
:::

## 13.3 Nube o modelos locales

Un proveedor en la nube da mejores resultados y envía tus datos a un servidor ajeno. Un modelo
local corre en tu computadora, no envía nada, y a cambio exige un equipo con recursos y suele
responder con menos precisión.

Herramientas como Ollama o LM Studio permiten levantar un modelo local que QualCoder puede usar
apuntando a la dirección del servicio en tu propia máquina. Para material sensible, esa es la
única opción defendible ante un comité de ética.

::: aviso
Si trabajas con testimonios de personas en situación de vulnerabilidad, enviar el corpus a un
servicio comercial puede violar el consentimiento que firmaron, incluso si el texto está
anonimizado. Revisa qué autorizaste antes de activar cualquier función que salga de tu equipo.
:::

::: video https://www.youtube.com/watch?v=p2pWR1IrKbg
Video 13.7. Conexión de QualCoder con un modelo que corre en la propia computadora.
:::

## 13.4 Qué automatizar y qué no

La pregunta no es si la máquina puede, es si conviene que lo haga.

Automatizar tiene sentido en tareas mecánicas y verificables, como localizar menciones,
atribuir intervenciones a hablantes, o hacer un primer barrido exploratorio de un corpus muy
grande para saber por dónde entrar.

No tiene sentido en las decisiones que constituyen el análisis, como definir qué significa una
categoría, decidir si dos testimonios expresan lo mismo, o determinar la saturación. Delegar eso
no ahorra tiempo, cambia el resultado por otro que no puedes defender.

Hay además una razón práctica. En la defensa de una tesis o en la revisión de un artículo te van
a preguntar por qué codificaste así, y la respuesta no puede ser que lo sugirió un modelo.

## 13.5 Dejar constancia

Todo lo que automatices tiene que quedar registrado. En el diario del proyecto anota qué
función usaste, sobre qué archivos, con qué parámetros y qué proporción de las propuestas
aceptaste.

Ese registro es lo que después se convierte en un párrafo del apartado metodológico, y es
también lo que permite que alguien más entienda cómo se construyó tu codificación.

::: captura img/captura-13-02.png
Captura 13.2. Panel de configuración de IA con el nivel de acceso a los datos visible.
:::

::: reto Un barrido controlado
Elige un término que aparezca varias veces en tu corpus y autocodifícalo por párrafo. Revisa
después los segmentos generados y calcula cuántos son pertinentes. Anota en el diario del
proyecto el término, el número de coincidencias y cuántas conservaste.

::: solucion Cómo leer ese resultado
Si conservaste casi todas, el término funciona como marcador confiable de ese tema. Si
descartaste la mayoría, la palabra aparece en contextos distintos y la automatización te está
dando ruido, no ahorro.
:::
:::

::: consejo Material sensible, procesamiento local
Con testimonios de personas en situación de vulnerabilidad, la anonimización reduce el riesgo
pero no elimina el envío del contenido a un tercero. Un modelo que corre en tu computadora es
la única opción defendible ante un comité de ética.
:::

::: consejo Mide el rendimiento de lo que automatizas
Después de una autocodificación, cuenta cuántos segmentos conservaste. Si guardaste casi todos,
el término funciona como marcador confiable del tema. Si descartaste la mayoría, la
automatización te está dando ruido y conviene volver a la lectura.

Ese porcentaje es además lo que se reporta. En el apartado metodológico queda mucho mejor una
frase que diga que se autocodificaron ciento ochenta coincidencias y se conservaron ciento
veinte tras revisión manual, que una que diga que se usó autocodificación. La primera se puede
evaluar, la segunda no.
:::

::: comprobacion
- Hiciste una autocodificación por búsqueda y revisaste los resultados
- Sabes cómo deshacer una sesión de autocodificación
- Elegiste con criterio entre proveedor en la nube y modelo local
- Anotaste en el diario qué automatizaste y cuánto conservaste
:::

::: clave
- La autocodificación por búsqueda resuelve lo literal y es reversible
- La IA de QualCoder 4 propone candidatos que tú revisas, no codifica en tu lugar
- El nivel de acceso a los datos y la elección entre nube y modelo local definen la confidencialidad
- Todo lo automatizado se registra en el diario para poder explicarlo después
:::

::: apoyo Cómo se sostiene el curso
El curso se sostiene con lo que aporta quien puede, sin obligación. Hay dos destinos, [gastos médicos](https://gofund.me/5c133cc99) y [asistencia a personas desplazadas](https://www.paypal.com/paypalme/lorenzosalomon).
:::
