::: ficha
- **Duración estimada** 20 minutos
- **Antes de empezar** el programa instalado (lección 2)
- **Materiales** tu pregunta de investigación, aunque sea provisional
- **Al terminar tendrás** una tabla que traduce tus tareas analíticas a operaciones del programa
:::

::: preguntas
- ¿Qué hace realmente un programa de análisis cualitativo?
- ¿Cómo se traduce una pregunta de investigación en operaciones del software?
- ¿Qué decisiones no puedo delegar en la herramienta?
:::

::: objetivos
- Distinguir entre tarea analítica y función del programa
- Traducir objetivos de investigación en operaciones concretas
- Evitar los dos errores más comunes al empezar con un CAQDAS
:::

::: consejo Antes de seguir, un repaso
Deja activada la copia de seguridad al abrir el proyecto. Ocupa espacio en disco y es lo
único que te salva de un error irreversible en medio de la codificación.
:::

## 3.1 Lo que el programa hace y lo que no

Un CAQDAS, por las siglas en inglés de análisis cualitativo de datos asistido por computadora,
administra materiales y marcas. Guarda tus documentos, registra qué fragmento marcaste con
qué código, guarda lo que escribiste en los memos y te devuelve todo eso filtrado como se lo
pidas.

Lo que no hace es interpretar. Ninguna función decide si dos testimonios hablan de lo mismo,
ni si una categoría se sostiene, ni cuándo dejaste de encontrar información nueva. Esas
decisiones son tuyas, y el programa apenas conserva su rastro.

Esta distinción no es un adorno introductorio. Explica los dos tropiezos típicos de quien
empieza. El primero consiste en codificar todo el corpus con cientos de códigos descriptivos
sin haber definido qué se busca, y quedarse después con un árbol enorme que no responde
ninguna pregunta. El segundo consiste en esperar que alguna función revele los hallazgos,
sobre todo desde que hay asistentes de inteligencia artificial a la mano.

::: video https://www.youtube.com/watch?v=p2pWR1IrKbg
Video 3.1. Ejemplo de traducción, de una pregunta de investigación a un conjunto de operaciones en QualCoder.
:::
<!-- verificar: abductive-analysis-theorizing-qualitative-research.pdf, notas del capítulo 1 -->
Iddo Tavory y Stefan Timmermans trabajan sobre el análisis abductivo, es decir sobre cómo se
construye teoría a partir de observaciones. Al revisar lo que aportan los programas de análisis
cualitativo, señalan que hacen bastante con los datos y no hacen lo único que importaría.

::: cita Tavory y Timmermans (2014), notas del cap. 1
they do not tell you what codes to attach to the data
+ no te dicen qué códigos aplicar a los datos
:::

La frase describe con precisión el reparto de tareas de este curso. El programa aplica, guarda,
filtra y recupera. Decidir qué código merece cada fragmento, y por qué, es trabajo tuyo en todas
las lecciones que siguen.



## 3.2 El trabajo de traducción

Christina Silver y Nicholas Woolf propusieron pensar el uso de estos programas en niveles, y
el que más cuesta es el de traducción, donde una tarea analítica se convierte en una
secuencia de acciones del programa. Vale la pena hacerlo explícito antes de tocar el software.

Toma una pregunta cualquiera, por ejemplo cómo cambia la organización de la vida cotidiana en
mujeres que asumen el cuidado de un familiar. De ahí sale un objetivo analítico, que sería
comparar la reorganización del tiempo entre quienes cuentan con apoyo y quienes no. Y de ese
objetivo salen operaciones concretas.

| Tarea analítica | Operación en QualCoder |
|---|---|
| Distinguir participantes por condición | Casos con atributos, por ejemplo apoyo familiar sí o no |
| Marcar los fragmentos sobre uso del tiempo | Códigos agrupados en una categoría |
| Comparar los dos grupos | Informe filtrado por atributo |
| Ver qué temas aparecen juntos | Informe de co-ocurrencias |
| Registrar por qué decidiste algo | Memo del código y diario del proyecto |

Cuando la tabla está escrita, el trabajo con el programa deja de ser exploratorio y se vuelve
ejecución. Y si una fila de la izquierda no encuentra su correspondencia a la derecha, ya
sabes dónde vas a tener que resolver a mano o con otra herramienta.

::: nota
Este ejercicio también sirve para elegir software. Si al llenar la columna derecha descubres
que la mitad de tus tareas dependen de una función que QualCoder no tiene, es información
útil, no un fracaso.
:::

::: video https://www.youtube.com/watch?v=p2pWR1IrKbg
Video 3.2. Ejemplo completo de traducción, de una pregunta de investigación a la tabla de operaciones del programa.
:::

## 3.3 Qué aporta que sea libre

QualCoder es software libre y guarda el proyecto en una base de datos SQLite abierta, con los
archivos originales en carpetas normales. Eso tiene tres consecuencias prácticas.

Tus datos no quedan atrapados. Puedes abrir la base con cualquier visor de SQLite y ver las
tablas, sin depender de que el programa siga existiendo dentro de diez años.

El costo deja de ser un filtro. En contextos donde una licencia anual equivale a varios meses
de beca, el acceso a la herramienta se vuelve una cuestión de justicia epistémica y no un
detalle presupuestal.

Y el desarrollo es público. Los errores se reportan, se discuten y se corrigen a la vista de
todos, y cualquiera puede proponer mejoras.

::: aviso
Software libre no significa software sin responsabilidad. Al publicar resultados sigue siendo
tuya la obligación de documentar qué versión usaste y qué hiciste con ella, igual que con
cualquier programa comercial.
:::

::: video https://www.youtube.com/watch?v=p2pWR1IrKbg
Video 3.3. Apertura del archivo de proyecto con un visor de SQLite, para ver las tablas por dentro.
:::

## 3.4 Vocabulario mínimo

Antes de seguir conviene fijar cuatro términos que este curso usa con precisión.

Un **código** es una etiqueta aplicada a un fragmento. Una **categoría** agrupa códigos y no
se aplica directamente al texto. Un **sub-código** es un código que depende de otro código y
mantiene con él una relación de mayor a menor detalle. Un **caso** reúne materiales que
pertenecen a una misma unidad de análisis, como una persona, una comunidad o un periodo.

Si vienes de otro programa, la equivalencia más incómoda es que lo que ATLAS.ti llama cita y
NVivo llama referencia, aquí se llama simplemente segmento codificado.

::: reto Escribe tu tabla de traducción
Con tu propia investigación, escribe una tabla de dos columnas con al menos cuatro tareas
analíticas y su operación correspondiente. Déjala a la vista mientras haces el curso.

::: solucion Cómo saber si está bien planteada
Cada fila de la izquierda debe poder decirse sin nombrar el software, y cada fila de la
derecha debe poder ejecutarse sin discutir de teoría. Si una fila mezcla las dos cosas,
todavía no está traducida.
:::
:::

::: consejo El programa administra, tú interpretas
Ninguna función decide si dos testimonios hablan de lo mismo, ni si una categoría se
sostiene, ni cuándo dejaste de encontrar información nueva. Las funciones automáticas proponen
candidatos y quien decide es quien investiga.
:::

::: consejo Un hueco en la tabla de traducción es información
Si al traducir tus tareas analíticas a operaciones del programa la mitad se queda sin
equivalente, no significa que el proyecto esté mal planteado. Significa que ya sabes qué vas a
resolver a mano o con otra herramienta, y descubrirlo ahora sale barato.
:::

::: comprobacion
- Escribiste tu tabla de traducción con al menos cuatro tareas
- Cada tarea de la izquierda se enuncia sin nombrar el software
- Distingues código, categoría, sub-código y caso
:::

::: clave
- El programa administra materiales y marcas, la interpretación no se delega
- Traducir tareas analíticas a operaciones concretas antes de codificar ahorra semanas
- El formato abierto del proyecto protege el acceso a tus datos a largo plazo
- Código, categoría, sub-código y caso significan cosas distintas y conviene no mezclarlas
:::

::: apoyo Conocimiento abierto
Formación libre, sostenida con aportaciones voluntarias. Los destinos son [gastos médicos](https://gofund.me/5c133cc99) y [asistencia humanitaria a migrantes](https://www.paypal.com/paypalme/lorenzosalomon).
:::
