/* Course index. Edit this file to add, reorder or rename lessons. */
/* Each lesson "archivo" must match a file inside /lecciones. */

window.CURSO = {
  titulo: "Introducción al análisis de datos cualitativos con QualCoder",
  subtitulo: "Curso en español, de la primera instalación al análisis publicable",
  autor: "Lorenzo Salomón Cárdenas",
  sitio: "SoftCualitativo",
  version: "1.2",
  modulos: [
    {
      id: "m1",
      nombre: "Antes de empezar",
      resumen:
        "Qué vas a construir a lo largo del curso y cómo dejar el programa funcionando en tu equipo.",
      color: "var(--marca-1)",
      lecciones: [
        { id: "01-bienvenida", titulo: "Cómo funciona este curso",
          archivo: "lecciones/01-bienvenida.md", minutos: 10,
          resumen: "La ruta completa, los materiales que necesitas y la forma de trabajo." },
        { id: "02-instalacion", titulo: "Instalar QualCoder 4 y dejarlo listo",
          archivo: "lecciones/02-instalacion.md", minutos: 25,
          resumen: "Descarga desde la página de releases, instalación en los tres sistemas y ajustes iniciales." }
      ]
    },
    {
      id: "m2",
      nombre: "Fundamentos y materiales",
      resumen:
        "Cómo se relaciona tu diseño metodológico con el programa, y cómo entra cada tipo de material al proyecto.",
      color: "var(--marca-2)",
      lecciones: [
        { id: "03-caqdas-y-metodo", titulo: "Qué resuelve un CAQDAS y qué sigue siendo tuyo",
          archivo: "lecciones/03-caqdas-y-metodo.md", minutos: 20,
          resumen: "Traducir tareas analíticas a funciones del programa sin delegar el análisis." },
        { id: "04-proyecto", titulo: "El proyecto por dentro",
          archivo: "lecciones/04-proyecto.md", minutos: 20,
          resumen: "Crear el proyecto, entender la carpeta que genera y respaldarlo sin sustos." },
        { id: "05-materiales", titulo: "Cargar los materiales",
          archivo: "lecciones/05-materiales.md", minutos: 30,
          resumen: "Texto, PDF, imagen, audio y video, con la preparación previa de cada formato." },
        { id: "06-importar-encuestas", titulo: "Importar encuestas",
          archivo: "lecciones/06-importar-encuestas.md", minutos: 30,
          resumen: "Convertir un cuestionario en casos, atributos y respuestas abiertas codificables." },
        { id: "07-referencias-bibliograficas", titulo: "Referencias bibliográficas",
          archivo: "lecciones/07-referencias-bibliograficas.md", minutos: 25,
          resumen: "Importar desde RIS o Zotero y vincular cada referencia con su documento." }
      ]
    },
    {
      id: "m3",
      nombre: "Codificación",
      resumen:
        "El corazón del trabajo, formato por formato, desde el diseño del sistema de códigos hasta la asistencia de IA.",
      color: "var(--marca-3)",
      lecciones: [
        { id: "08-sistema-de-codigos", titulo: "Diseñar el sistema de códigos",
          archivo: "lecciones/08-sistema-de-codigos.md", minutos: 30,
          resumen: "Categorías, códigos y sub-códigos, con criterios para no perder el control del árbol." },
        { id: "09-codificar-texto", titulo: "Codificar texto",
          archivo: "lecciones/09-codificar-texto.md", minutos: 40,
          resumen: "Marcar segmentos, in vivo, buscador de códigos, margen de codificación y memos." },
        { id: "10-codificar-pdf", titulo: "Codificar PDF",
          archivo: "lecciones/10-codificar-pdf.md", minutos: 30,
          resumen: "Documentos maquetados, importación de resaltados previos y áreas de imagen." },
        { id: "11-codificar-imagen", titulo: "Codificar imagen",
          archivo: "lecciones/11-codificar-imagen.md", minutos: 25,
          resumen: "Regiones sobre fotografías, mapas y carteles, con el criterio del recorte documentado." },
        { id: "12-audio-y-video", titulo: "Codificar audio y video",
          archivo: "lecciones/12-audio-y-video.md", minutos: 35,
          resumen: "Onda de sonido, marcas de tiempo, transcripción parcial y marcado de hablantes." },
        { id: "13-autocodificacion-e-ia", titulo: "Autocodificación y asistencia de IA",
          archivo: "lecciones/13-autocodificacion-e-ia.md", minutos: 35,
          resumen: "Búsquedas automáticas, modelos locales o en la nube y el registro de lo que hiciste." }
      ]
    },
    {
      id: "m4",
      nombre: "Análisis",
      resumen:
        "Convertir segmentos codificados en comparaciones, matrices y representaciones visuales.",
      color: "var(--marca-4)",
      lecciones: [
        { id: "14-casos-y-atributos", titulo: "Casos y atributos",
          archivo: "lecciones/14-casos-y-atributos.md", minutos: 30,
          resumen: "Organizar el corpus por persona, sitio o momento para poder comparar." },
        { id: "15-recuperar-segmentos", titulo: "Recuperar segmentos y armar informes",
          archivo: "lecciones/15-recuperar-segmentos.md", minutos: 30,
          resumen: "Filtros por código, archivo, caso y atributo, con exportación a documento." },
        { id: "16-frecuencias-y-coocurrencias", titulo: "Frecuencias, matrices y co-ocurrencias",
          archivo: "lecciones/16-frecuencias-y-coocurrencias.md", minutos: 30,
          resumen: "Contar sin perder el sentido, y leer qué códigos aparecen juntos." },
        { id: "17-graficos-y-grafos", titulo: "Gráficos, nubes y grafos",
          archivo: "lecciones/17-graficos-y-grafos.md", minutos: 35,
          resumen: "Gráficos del proyecto y el lienzo de grafos para modelar relaciones." }
      ]
    },
    {
      id: "m5",
      nombre: "Cerrar y compartir",
      resumen:
        "Dejar rastro del proceso, salir del programa sin quedar atrapado y publicar con criterio.",
      color: "var(--marca-5)",
      lecciones: [
        { id: "18-memos-y-diarios", titulo: "Memos, diarios y rastro del proceso",
          archivo: "lecciones/18-memos-y-diarios.md", minutos: 25,
          resumen: "Dónde escribir cada cosa para que el análisis quede auditable." },
        { id: "19-exportar-e-interoperar", titulo: "Exportar, QDPX e interoperabilidad",
          archivo: "lecciones/19-exportar-e-interoperar.md", minutos: 25,
          resumen: "Salidas del proyecto y el intercambio con ATLAS.ti, NVivo y MAXQDA." },
        { id: "20-equipo-y-publicacion", titulo: "Trabajo en equipo y publicación abierta",
          archivo: "lecciones/20-equipo-y-publicacion.md", minutos: 30,
          resumen: "Repartir la codificación, fusionar proyectos y decidir qué se publica." }
      ]
    },
    {
      id: "m6",
      nombre: "Evaluación final",
      resumen:
        "Un repaso con retroalimentación de todo el curso y la solicitud de la constancia.",
      color: "var(--marca-2)",
      lecciones: [
        { id: "21-examen-y-constancia", titulo: "Examen de retroalimentación y constancia",
          archivo: "lecciones/21-examen-y-constancia.md", minutos: 30,
          resumen: "Quince preguntas comentadas sobre los seis módulos y el enlace para pedir la constancia." }
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
