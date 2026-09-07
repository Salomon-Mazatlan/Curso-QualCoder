/* Course index. Edit this file to add, reorder or rename lessons. */
/* Each lesson "archivo" must match a file inside /lecciones. */

window.CURSO = {
  titulo: "Investigación cualitativa con QualCoder 4",
  subtitulo: "Curso en español, de la primera instalación al análisis publicable",
  autor: "Lorenzo Salomón Cárdenas",
  sitio: "SoftCualitativo",
  version: "1.0",
  modulos: [
    {
      id: "m1",
      nombre: "Antes de empezar",
      resumen:
        "Qué vas a construir a lo largo del curso y cómo dejar el programa funcionando en tu equipo.",
      color: "var(--marca-1)",
      lecciones: [
        {
          id: "01-bienvenida",
          titulo: "Cómo funciona este curso",
          archivo: "lecciones/01-bienvenida.md",
          minutos: 10,
          resumen: "La ruta completa, los materiales que necesitas y la forma de trabajo."
        },
        {
          id: "02-instalacion",
          titulo: "Instalar QualCoder 4 y dejarlo listo",
          archivo: "lecciones/02-instalacion.md",
          minutos: 25,
          resumen: "Instalación en Windows, macOS y Linux, idioma, carpetas y primera revisión."
        }
      ]
    },
    {
      id: "m2",
      nombre: "Fundamentos",
      resumen:
        "Cómo se relaciona tu diseño metodológico con lo que el programa sabe hacer, y cómo se guarda todo.",
      color: "var(--marca-2)",
      lecciones: [
        {
          id: "03-caqdas-y-metodo",
          titulo: "Qué resuelve un CAQDAS y qué sigue siendo tuyo",
          archivo: "lecciones/03-caqdas-y-metodo.md",
          minutos: 20,
          resumen: "Traducir tareas analíticas a funciones del programa sin delegar el análisis."
        },
        {
          id: "04-proyecto",
          titulo: "El proyecto por dentro",
          archivo: "lecciones/04-proyecto.md",
          minutos: 20,
          resumen: "Crear el proyecto, entender la carpeta que genera y respaldarlo sin sustos."
        },
        {
          id: "05-materiales",
          titulo: "Cargar los materiales",
          archivo: "lecciones/05-materiales.md",
          minutos: 30,
          resumen: "Texto, PDF, imagen, audio, video, transcripciones y referencias bibliográficas."
        }
      ]
    },
    {
      id: "m3",
      nombre: "Codificación",
      resumen:
        "El corazón del trabajo, desde el diseño del sistema de códigos hasta la asistencia de IA.",
      color: "var(--marca-3)",
      lecciones: [
        {
          id: "06-sistema-de-codigos",
          titulo: "Diseñar el sistema de códigos",
          archivo: "lecciones/06-sistema-de-codigos.md",
          minutos: 30,
          resumen: "Categorías, códigos y sub-códigos, con criterios para no perder el control del árbol."
        },
        {
          id: "07-codificar-texto",
          titulo: "Codificar texto",
          archivo: "lecciones/07-codificar-texto.md",
          minutos: 40,
          resumen: "Marcar segmentos, in vivo, buscador de códigos, margen de codificación y memos."
        },
        {
          id: "08-codificar-pdf",
          titulo: "Codificar PDF",
          archivo: "lecciones/08-codificar-pdf.md",
          minutos: 30,
          resumen: "Documentos maquetados, resaltados importados y áreas de imagen dentro de la página."
        },
        {
          id: "09-imagen-y-audiovisual",
          titulo: "Imagen, audio y video",
          archivo: "lecciones/09-imagen-y-audiovisual.md",
          minutos: 35,
          resumen: "Codificar regiones de imagen, trabajar con la onda de audio y marcar hablantes."
        },
        {
          id: "10-autocodificacion-e-ia",
          titulo: "Autocodificación y asistencia de IA",
          archivo: "lecciones/10-autocodificacion-e-ia.md",
          minutos: 35,
          resumen: "Búsquedas automáticas, modelos locales o en la nube y el registro de lo que hiciste."
        }
      ]
    },
    {
      id: "m4",
      nombre: "Análisis",
      resumen:
        "Convertir segmentos codificados en comparaciones, matrices y representaciones visuales.",
      color: "var(--marca-4)",
      lecciones: [
        {
          id: "11-casos-y-atributos",
          titulo: "Casos, atributos y grupos",
          archivo: "lecciones/11-casos-y-atributos.md",
          minutos: 30,
          resumen: "Organizar el corpus por persona, sitio o momento para poder comparar."
        },
        {
          id: "12-recuperar-segmentos",
          titulo: "Recuperar segmentos y armar reportes",
          archivo: "lecciones/12-recuperar-segmentos.md",
          minutos: 30,
          resumen: "Filtros por código, archivo, caso y atributo, con exportación a documento."
        },
        {
          id: "13-frecuencias-y-coocurrencias",
          titulo: "Frecuencias, matrices y co-ocurrencias",
          archivo: "lecciones/13-frecuencias-y-coocurrencias.md",
          minutos: 30,
          resumen: "Contar sin perder el sentido, y leer qué códigos aparecen juntos."
        },
        {
          id: "14-graficos-y-grafos",
          titulo: "Gráficos, nubes y grafos",
          archivo: "lecciones/14-graficos-y-grafos.md",
          minutos: 35,
          resumen: "Visualizaciones del reporte y el lienzo de grafos para modelar relaciones."
        }
      ]
    },
    {
      id: "m5",
      nombre: "Cerrar y compartir",
      resumen:
        "Dejar rastro del proceso, salir del programa sin quedar atrapado y publicar con criterio.",
      color: "var(--marca-5)",
      lecciones: [
        {
          id: "15-memos-y-diarios",
          titulo: "Memos, diarios y rastro del proceso",
          archivo: "lecciones/15-memos-y-diarios.md",
          minutos: 25,
          resumen: "Dónde escribir cada cosa para que el análisis quede auditable."
        },
        {
          id: "16-exportar-e-interoperar",
          titulo: "Exportar, QDPX e interoperabilidad",
          archivo: "lecciones/16-exportar-e-interoperar.md",
          minutos: 25,
          resumen: "Salidas del proyecto y el intercambio con ATLAS.ti, NVivo y MAXQDA."
        },
        {
          id: "17-equipo-y-publicacion",
          titulo: "Trabajo en equipo y publicación abierta",
          archivo: "lecciones/17-equipo-y-publicacion.md",
          minutos: 30,
          resumen: "Repartir la codificación, fusionar proyectos y decidir qué se publica."
        }
      ]
    }
  ]
};

/* Flat list, in reading order. Used for previous / next navigation. */
window.CURSO.lista = window.CURSO.modulos.flatMap(function (m, i) {
  return m.lecciones.map(function (l, j) {
    return Object.assign({}, l, {
      modulo: m.nombre,
      moduloId: m.id,
      color: m.color,
      numero: window.CURSO.modulos
        .slice(0, i)
        .reduce(function (n, mm) { return n + mm.lecciones.length; }, 0) + j + 1
    });
  });
});
