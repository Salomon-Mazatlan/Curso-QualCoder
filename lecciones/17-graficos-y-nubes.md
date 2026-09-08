::: ficha
- **Duración estimada** 25 minutos
- **Antes de empezar** haber generado informes de frecuencias y matrices (lección 16)
- **Materiales** el proyecto codificado
- **Al terminar tendrás** gráficos que describen tu corpus y una nube de palabras filtrada
:::

::: preguntas
- ¿Qué visualizaciones tienen sentido en un análisis cualitativo?
- ¿Cuándo un gráfico aporta algo que el texto no dice mejor?
- ¿Qué hago con la nube de palabras, más allá de que se vea bonita?
:::

::: objetivos
- Generar los gráficos de distribución que ofrece el programa
- Interpretarlos sin atribuirles una precisión que no tienen
- Producir una nube de palabras filtrada y saber para qué sirve
:::

::: consejo Antes de seguir, un repaso
Las frecuencias miden tu actividad de codificación, no la prevalencia del fenómeno. Dependen
de tu criterio de segmentación, del tamaño de los documentos y de cuánto habló cada
participante. Todo lo que se dibuje a partir de ellas arrastra esa limitación.
:::

## 17.1 Qué representa un gráfico aquí

El módulo "Gráficos" (Charts) dibuja lo que ya viste en los informes, con distribuciones de
códigos por caso, por archivo y por categoría.

Conviene tener claro qué se está graficando. No son datos sobre el fenómeno, son datos sobre tu
corpus y sobre tu manera de codificarlo. Un gráfico de barras que muestra que un código aparece
ochenta veces describe una actividad tuya, no una frecuencia del mundo.

Con esa advertencia por delante, sirven para dos cosas distintas. Durante el análisis, para
detectar de un vistazo concentraciones y ausencias que en una tabla pasan desapercibidas. Y en
la publicación, para describir la estructura del corpus, que es información legítima sobre el
trabajo realizado y que muchas revistas piden.

::: aviso
Una gráfica de barras con frecuencias de codificación sugiere a quien lee una precisión que los
datos no tienen. Acompáñala siempre de la aclaración de que refleja actividad de codificación,
tanto en el pie de figura como en el texto.
:::

::: video https://www.youtube.com/watch?v=p2pWR1IrKbg
Video 17.1. Recorrido por el módulo de gráficos y por los tipos disponibles.
:::

## 17.2 Qué mirar en cada gráfico

Los gráficos del programa responden preguntas distintas según cómo se agrupen.

| Agrupación | Pregunta que responde |
|---|---|
| Códigos, en total | Qué temas concentran el trabajo de codificación |
| Códigos por caso | Quién habla de qué, y quién no habla de qué |
| Códigos por archivo | Qué documentos quedaron menos trabajados |
| Categorías | Cómo se reparte el peso entre las grandes áreas del análisis |
| Códigos por atributo | Si dos grupos difieren en el tema que te interesa |

La lectura más productiva casi siempre es la de los huecos. Un código ausente en un caso donde
esperabas encontrarlo dice más que la barra más alta del gráfico, y obliga a volver al
documento a comprobar si el tema no aparece o si no lo marcaste.

::: video https://www.youtube.com/watch?v=p2pWR1IrKbg
Video 17.2. Gráficos de códigos por caso y por atributo, con lectura de los huecos.
:::

::: captura img/captura-17-01.png
Captura 17.1. Módulo de gráficos con una distribución de códigos por caso.
:::

## 17.3 Las unidades de medida

Un mismo gráfico cambia de significado según lo que se cuente, y el programa permite elegirlo.
Este es el ajuste que más malentendidos produce.

| Unidad | Qué mide | Cuándo conviene |
|---|---|---|
| Segmentos | Cuántas veces aplicaste el código | Para ver el peso del trabajo de codificación |
| Palabras | Cuánto texto abarcan esos segmentos | Cuando los segmentos son de tamaño muy desigual |
| Archivos | En cuántos documentos aparece el código | Para ver si un tema es transversal o local |
| Casos | En cuántas unidades de análisis aparece | Para hablar de personas y no de marcas |

La diferencia entre las dos primeras y las dos últimas es la que suele decidir un argumento. Un
código con ochenta segmentos concentrados en dos casos y otro con veinte segmentos repartidos en
quince casos cuentan historias opuestas, y en un gráfico por segmentos el primero parece el
importante.

::: consejo Para hablar de personas, cuenta casos
Si tu afirmación va a decir "la mayoría de las participantes menciona", el gráfico que la
sostiene tiene que estar contado por casos, no por segmentos. Es el error de lectura más común
en tesis que usan estos programas, y también el más fácil de evitar.
:::

## 17.4 Mapas de calor y gráficos de atributos

Además de las barras, hay dos familias de gráficos que suelen pasar desapercibidas y valen la
pena.

El mapa de calor cruza códigos con casos o con archivos y colorea cada celda según la
intensidad. Es la mejor vista para detectar de un vistazo qué caso concentra qué temas y, sobre
todo, dónde hay huecos. En corpus medianos sustituye con ventaja a una matriz de números.

Los gráficos de atributos agrupan la codificación según los valores que cargaste, así que
permiten ver la comparación entre grupos sin construirla a mano. Es el resultado directo de
haber anclado bien los atributos en la lección 14.

::: video https://www.youtube.com/watch?v=p2pWR1IrKbg
Video 17.3. Mapa de calor de códigos por caso y gráfico agrupado por atributo.
:::

::: captura img/captura-17-02.png
Captura 17.2. Mapa de calor con códigos en filas y casos en columnas.
:::

## 17.5 Nubes de palabras

La nube de palabras representa la frecuencia léxica del corpus o de una selección, con el
tamaño de cada palabra proporcional a su número de apariciones.

Como herramienta exploratoria es útil de verdad. Antes de codificar, muestra qué vocabulario
domina y qué términos usa el campo, que a veces no son los que tú esperabas. Después de
codificar, aplicada a los segmentos de un solo código, ayuda a ver si ese código agrupa un
lenguaje homogéneo o mezcla vocabularios distintos.

Como resultado publicable es otra cosa. El tamaño de una palabra no significa importancia
analítica, las palabras vacías distorsionan el conjunto y dos corpus muy distintos pueden
producir nubes casi iguales. Si la incluyes, filtra las palabras irrelevantes, indica sobre qué
material se calculó y explica qué se supone que muestra.

::: pasos
1. Abre la nube de palabras desde el módulo de gráficos.
2. Elige el alcance, todo el corpus, un archivo o los segmentos de un código.
3. Amplía la lista de palabras vacías con los términos que no aportan en tu material, como
   muletillas y nombres de la entrevistadora.
4. Ajusta el número máximo de palabras, que por encima de sesenta suele volverse ilegible.
5. Exporta la imagen si vas a usarla, y anota los parámetros en el diario del proyecto.
:::

::: video https://www.youtube.com/watch?v=p2pWR1IrKbg
Video 17.4. Nube de palabras, filtrado de palabras vacías y ajuste del número de términos.
:::

::: captura img/captura-17-03.png
Captura 17.3. Nube de palabras con la lista de palabras vacías ampliada.
:::

::: consejo Lo que una nube no puede decir
Dos palabras del mismo tamaño no tienen la misma importancia si una aparece en veinte
entrevistas y la otra treinta veces en una sola. La nube no distingue dispersión de
concentración, así que conviene comprobarlo con el informe de frecuencias antes de afirmar
nada.
:::

## 17.6 Llevar un gráfico a un texto

Antes de incluir cualquier figura, la pregunta útil es qué añade respecto de una frase escrita.
Si ordena una distribución que en prosa costaría un párrafo confuso, adelante. Si solo aporta
apariencia técnica, sobra.

Tres comprobaciones antes de dar por buena una figura. Que se lea al tamaño final de la
publicación, que funcione en blanco y negro por si la revista imprime así, y que el pie explique
qué representa cada eje y sobre cuántos documentos se calculó.

::: nota Para profundizar
Bazeley (2013) dedica un apartado a la visualización en análisis cualitativo y distingue entre
las figuras que sirven para pensar, que suelen ser feas y provisionales, y las que sirven para
comunicar, que exigen trabajo de edición. Confundirlas es el error habitual.
:::

::: reto Describe tu corpus con dos figuras
Genera un gráfico de códigos por caso y una nube de palabras filtrada sobre un solo código.
Escribe para cada uno un pie de figura de dos líneas que diga qué representa y sobre qué
material se calculó.

::: solucion Cómo saber si el pie está bien escrito
Tápate la figura y lee solo el pie. Si con eso alguien puede decir qué se midió, sobre cuántos
documentos y qué no muestra la figura, está completo. Si el pie repite el título, falta trabajo.
:::
:::

::: comprobacion
- Sabes que los gráficos describen tu codificación, no el fenómeno
- Generaste al menos un gráfico agrupado por caso o por atributo
- Miraste los huecos y no solo las barras altas
- Tu nube de palabras tiene lista de palabras vacías ampliada
- Cada figura tiene un pie que explica qué representa y sobre qué material
:::

::: clave
- Los gráficos del programa describen el corpus y el trabajo de codificación
- Las ausencias suelen ser más informativas que las concentraciones
- La nube de palabras es exploratoria, y como resultado exige filtrado y explicación
- Una figura entra en el texto solo si dice algo que la prosa no diga mejor
:::

::: apoyo Donativos voluntarios
Curso gratuito por convicción. Los donativos voluntarios apoyan [gastos médicos](https://gofund.me/5c133cc99) y [asistencia a personas migrantes y desplazadas](https://www.paypal.com/paypalme/lorenzosalomon).
:::
