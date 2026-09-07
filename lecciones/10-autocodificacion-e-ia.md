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

::: quiz Repaso de la lección 9
¿Qué necesita «Marcar hablantes» para funcionar bien?
- [ ] Que el audio tenga buena calidad
- [x] Que la transcripción use siempre el mismo patrón para identificar a quien habla
- [ ] Que cada hablante tenga su propio archivo
> Mezclar `Rosa:` con `ROSA -` es la causa más común de que la detección no encuentre nada.
:::

## Autocodificación clásica

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

::: video
Autocodificación por búsqueda de texto y revisión de los resultados antes de confirmar.
:::
<!-- verificar: Angrosino, Doing Ethnographic and Observational Research (2008), p. 75 -->
::: cita Angrosino (2008, p. 75)
computer programs tempt the researcher to let them do all the work
+ los programas de cómputo tientan a quien investiga a dejar que hagan todo el trabajo
:::


## Qué hace la IA en QualCoder 4

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

## Nube o modelos locales

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

## Qué automatizar y qué no

La pregunta no es si la máquina puede, es si conviene que lo haga.

Automatizar tiene sentido en tareas mecánicas y verificables, como localizar menciones,
atribuir intervenciones a hablantes, o hacer un primer barrido exploratorio de un corpus muy
grande para saber por dónde entrar.

No tiene sentido en las decisiones que constituyen el análisis, como definir qué significa una
categoría, decidir si dos testimonios expresan lo mismo, o determinar la saturación. Delegar eso
no ahorra tiempo, cambia el resultado por otro que no puedes defender.

Hay además una razón práctica. En la defensa de una tesis o en la revisión de un artículo te van
a preguntar por qué codificaste así, y la respuesta no puede ser que lo sugirió un modelo.

## Dejar constancia

Todo lo que automatices tiene que quedar registrado. En el diario del proyecto anota qué
función usaste, sobre qué archivos, con qué parámetros y qué proporción de las propuestas
aceptaste.

Ese registro es lo que después se convierte en un párrafo del apartado metodológico, y es
también lo que permite que alguien más entienda cómo se construyó tu codificación.

::: captura
Panel de configuración de IA con el nivel de acceso a los datos visible.
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

::: quiz
Vas a analizar entrevistas con víctimas de violencia y quieres usar búsqueda por significado.
¿Qué opción es defendible ante un comité de ética?
- [ ] Un proveedor comercial en la nube, porque el texto está anonimizado
- [x] Un modelo local que corre en tu computadora, sin salida de datos
- [ ] Cualquiera, porque el programa no guarda las consultas
> La anonimización reduce el riesgo pero no elimina el envío del contenido a un tercero. Con
> material sensible, el procesamiento local es la única vía que no compromete el consentimiento.
:::

::: quiz Para pensarlo
Autocodificaste un término y al revisar descartaste ocho de cada diez segmentos. ¿Qué te dice ese resultado?
- [ ] Que la autocodificación está mal configurada
- [x] Que la palabra aparece en contextos distintos y la automatización te da ruido, no ahorro
- [ ] Que el corpus es demasiado grande
> Cuando conservas casi todo, el término funciona como marcador confiable del tema. Cuando no, conviene volver a la lectura.
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
