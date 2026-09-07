::: preguntas
- ¿Qué visualizaciones tienen sentido en un análisis cualitativo?
- ¿Cómo construyo un modelo de relaciones entre códigos?
- ¿Cómo llevo esas figuras a una publicación?
:::

::: objetivos
- Generar gráficos y nubes de palabras con criterio
- Construir un modelo en el lienzo «Grafo» (View graph) y nombrar sus relaciones
- Exportar figuras utilizables en un artículo o una tesis
:::

## Gráficos

QualCoder incluye el módulo «Gráficos» (Charts), que representa lo que ya viste en los informes,
con distribuciones de códigos por caso, por archivo y por categoría.

Sirven para dos cosas distintas. Durante el análisis, para detectar de un vistazo
concentraciones y ausencias. Y en la publicación, para mostrar la estructura del corpus, que es
información legítima sobre el trabajo realizado.

Antes de incluir un gráfico en un texto conviene preguntarse qué añade respecto de una frase.
Si la respuesta es que ordena una distribución compleja, adelante. Si la respuesta es que se ve
técnico, sobra.

::: aviso
Una gráfica de barras con frecuencias de codificación puede sugerir a quien lee una precisión
que los datos no tienen. Acompáñala siempre de la aclaración de que refleja actividad de
codificación.
:::

## Nubes de palabras

La nube de palabras representa la frecuencia léxica del corpus o de una selección. Es útil como
exploración inicial, para ver qué vocabulario domina antes de codificar.

Como resultado publicable es discutible, porque el tamaño de las palabras no significa
importancia analítica y las palabras vacías distorsionan el conjunto. Si la usas, filtra las
palabras irrelevantes y explica qué muestra.

::: video
Generación de gráficos de distribución y de una nube de palabras filtrada.
:::

## El lienzo de grafos

El lienzo «Grafo» (View graph) es distinto de todo lo anterior, porque no representa un cálculo sino un
modelo que tú construyes. Es el espacio donde el análisis se vuelve visible.

Sobre el lienzo puedes colocar códigos, categorías, casos, archivos, memos y bloques de texto
libre, moverlos, agruparlos y conectarlos con líneas que expresan relaciones.

::: pasos
1. Abre «Grafo» (View graph) y trae la rama de códigos que quieres modelar.
2. Acomoda los elementos con alguno de los modos de organización, o a mano si prefieres control
   total.
3. Conecta los elementos que se relacionan y ponle nombre a cada relación.
4. Añade memos o bloques de texto para anotar lo que la figura no dice sola.
5. Guarda el grafo dentro del proyecto, con un nombre que indique qué representa.
:::

Los grafos guardados quedan en el proyecto y se pueden volver a abrir, así que sirven como
registro de cómo fue cambiando tu modelo a lo largo del análisis.

## Nombrar las relaciones

Una línea sin nombre dice que dos cosas están conectadas, que es casi no decir nada. El valor
está en nombrar la relación, indicando si un código es condición de otro, si lo contradice, si
es un caso particular o si lo precede en el tiempo.

QualCoder ofrece conjuntos de relaciones basados en distintas tradiciones metodológicas, para
que no tengas que inventar el vocabulario. Si tu enfoque es otro, puedes escribir tus propias
etiquetas.

::: nota
El programa también puede generar modelos automáticos, como la jerarquía de categorías, la
comparación entre casos o la red de co-ocurrencias. Son un punto de partida rápido, y el modelo
que vas a publicar casi siempre requiere que lo reorganices a mano.
:::

## Llevar las figuras a la publicación

Los grafos se exportan como imagen y también a formatos editables de diagramación, lo que
permite retocar tipografía y colores en otra herramienta antes de publicar.

Para una tesis o un artículo conviene revisar tres cosas. Que el texto sea legible al tamaño
final, que la figura funcione en blanco y negro por si la revista imprime así, y que el pie de
figura explique qué representa cada tipo de elemento.

::: captura
Lienzo de grafos con un modelo de tres categorías, sus códigos y relaciones nombradas.
:::

::: reto Modela tu hallazgo principal
Construye un grafo con la categoría central de tu análisis, sus códigos y al menos cuatro
relaciones nombradas. Guárdalo con fecha en el nombre y expórtalo como imagen.

::: solucion Si el grafo queda ilegible
Suele ser exceso de elementos. Un modelo publicable rara vez pasa de quince nodos. Quita todo lo
que no participe en la relación que quieres mostrar, y si necesitas el resto, haz un segundo
grafo.
:::
:::

::: quiz
¿Cuál es la diferencia principal entre el informe «Co-ocurrencia de códigos» (Code co-occurrence) y un grafo del lienzo?
- [ ] Ninguna, el grafo es la versión visual del informe
- [x] El informe muestra coincidencias calculadas, el grafo muestra relaciones que tú afirmas
- [ ] El grafo solo admite códigos, el informe admite casos
> La co-ocurrencia es un dato sobre cómo codificaste. La relación de un grafo es una
> interpretación tuya, y por eso lleva nombre y se puede discutir.
:::

::: clave
- Los gráficos ayudan a explorar y a describir el corpus, no a probar nada
- La nube de palabras es exploratoria y necesita filtrado y explicación
- El lienzo de grafos representa tu modelo, con relaciones nombradas
- Los grafos guardados registran la evolución del análisis y se exportan para publicar
:::

::: apoyo Donativos voluntarios
Curso gratuito por convicción. Los donativos voluntarios apoyan [gastos médicos](https://gofund.me/5c133cc99) y [asistencia a personas migrantes y desplazadas](https://www.paypal.com/paypalme/lorenzosalomon).
:::
