/* Curso QualCoder 4. Rendering, navigation and progress. */
(function () {
  "use strict";

  var CLAVE_TEMA = "qc4.tema";
  var CLAVE_AVANCE = "qc4.avance";

  /* ---------- almacenamiento tolerante a fallos ---------- */

  function leer(clave, porDefecto) {
    try {
      var v = window.localStorage.getItem(clave);
      return v === null ? porDefecto : JSON.parse(v);
    } catch (e) {
      return porDefecto;
    }
  }

  function guardar(clave, valor) {
    try {
      window.localStorage.setItem(clave, JSON.stringify(valor));
    } catch (e) {
      /* modo privado o almacenamiento lleno */
    }
  }

  var avance = leer(CLAVE_AVANCE, []);
  if (!Array.isArray(avance)) avance = [];

  function estaHecha(id) { return avance.indexOf(id) !== -1; }

  function alternarHecha(id) {
    var i = avance.indexOf(id);
    if (i === -1) avance.push(id); else avance.splice(i, 1);
    guardar(CLAVE_AVANCE, avance);
    return estaHecha(id);
  }

  /* ---------- tema ---------- */

  function aplicarTema(t) {
    document.documentElement.setAttribute("data-tema", t);
    var b = document.querySelector("[data-accion=tema]");
    if (b) {
      b.textContent = t === "oscuro" ? "☀" : "☾";
      b.setAttribute("aria-label", t === "oscuro" ? "Usar tema claro" : "Usar tema oscuro");
    }
  }

  function iniciarTema() {
    var guardado = leer(CLAVE_TEMA, null);
    var oscuroSistema = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    aplicarTema(guardado || (oscuroSistema ? "oscuro" : "claro"));
    document.addEventListener("click", function (e) {
      var b = e.target.closest("[data-accion=tema]");
      if (!b) return;
      var nuevo = document.documentElement.getAttribute("data-tema") === "oscuro" ? "claro" : "oscuro";
      aplicarTema(nuevo);
      guardar(CLAVE_TEMA, nuevo);
    });
  }

  /* ---------- utilidades ---------- */

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function idDesdeTexto(t) {
    return t.toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function idYoutube(url) {
    if (!url) return "";
    url = url.trim();
    if (/^[\w-]{11}$/.test(url)) return url;
    var m = url.match(/(?:youtu\.be\/|v=|\/embed\/|\/shorts\/|\/live\/)([\w-]{11})/);
    return m ? m[1] : "";
  }

  /* ---------- bloques propios del curso ---------- */

  var BLOQUES = {
    objetivos:  { clase: "bloque-objetivos",  icono: "◎", titulo: "Al terminar podrás" },
    preguntas:  { clase: "bloque-preguntas",  icono: "?", titulo: "Preguntas que guían la lección" },
    nota:       { clase: "bloque-nota",       icono: "▪", titulo: "Nota" },
    aviso:      { clase: "bloque-aviso",      icono: "!", titulo: "Cuidado" },
    tip:        { clase: "bloque-tip",        icono: "✦", titulo: "Atajo útil" },
    clave:      { clase: "bloque-clave",      icono: "▬", titulo: "Puntos clave" },
    reto:       { clase: "bloque-reto",       icono: "◆", titulo: "Practica" },
    captura:    { clase: "bloque-captura",    icono: "▣", titulo: "Captura sugerida" },
    descarga:   { clase: "bloque-descarga",   icono: "↓", titulo: "Archivos de la práctica" },
    apoyo:      { clase: "bloque-apoyo",      icono: "♥", titulo: "Curso gratuito, sostenido con donativos" },
    cita:       { clase: "bloque-cita",       icono: "❞", titulo: "Cita" },
    consejo:    { clase: "bloque-consejo",    icono: "✦", titulo: "Consejo metodológico" },
    ficha:      { clase: "bloque-ficha",      icono: "▤", titulo: "Ficha de la lección" }
  };

  /* Convierte el texto en un arbol de nodos segun las marcas ::: */
  function analizar(texto) {
    var lineas = texto.replace(/\r\n?/g, "\n").split("\n");
    var raiz = { tipo: "raiz", hijos: [] };
    var pila = [raiz];
    var buffer = [];

    function vaciar() {
      if (buffer.length) {
        pila[pila.length - 1].hijos.push({ tipo: "texto", valor: buffer.join("\n") });
        buffer = [];
      }
    }

    for (var i = 0; i < lineas.length; i++) {
      var linea = lineas[i];
      var abre = linea.match(/^:::\s*([a-zA-ZáéíóúñÁÉÍÓÚÑ-]+)\s*(.*)$/);
      var cierra = /^:::\s*$/.test(linea);

      if (cierra && pila.length > 1) {
        vaciar();
        pila.pop();
      } else if (abre) {
        vaciar();
        var nodo = { tipo: abre[1].toLowerCase(), arg: abre[2].trim(), hijos: [] };
        pila[pila.length - 1].hijos.push(nodo);
        pila.push(nodo);
      } else {
        buffer.push(linea);
      }
    }
    vaciar();
    return raiz;
  }

  function md(texto) {
    return window.marked.parse(texto.trim(), { mangle: false, headerIds: false });
  }

  function hijosHtml(nodo) {
    return nodo.hijos.map(dibujar).join("");
  }

  function dibujarVideo(nodo) {
    var cuerpo = nodo.hijos.filter(function (h) { return h.tipo === "texto"; })
      .map(function (h) { return h.valor; }).join("\n").trim();
    var lineas = cuerpo.split("\n").filter(function (l) { return l.trim() !== ""; });
    var fuente = nodo.arg;
    if (!fuente && lineas.length && /^(https?:\/\/|[\w-]{11}$)/.test(lineas[0].trim())) {
      fuente = lineas.shift().trim();
    }
    var pie = lineas.join(" ").trim();
    var id = idYoutube(fuente);

    if (!id) {
      return '<div class="video"><div class="video-vacio"><div>' +
        "<strong>Aquí va un video.</strong><br>Pega el enlace de YouTube en la marca " +
        "<code>::: video</code> de este archivo." +
        (pie ? "<br><br>" + esc(pie) : "") +
        "</div></div></div>";
    }

    return '<div class="video">' +
      '<button class="video-marco" type="button" data-video="' + id + '" ' +
      'aria-label="Reproducir el video' + (pie ? ": " + esc(pie) : "") + '">' +
      '<img loading="lazy" src="https://i.ytimg.com/vi/' + id + '/hqdefault.jpg" alt="">' +
      '<span class="play"><span>▶</span></span>' +
      "</button>" +
      (pie ? '<p class="video-pie"><span class="etiqueta">video</span><span>' + esc(pie) + "</span></p>" : "") +
      "</div>";
  }

  function dibujarQuiz(nodo) {
    var cuerpo = nodo.hijos.filter(function (h) { return h.tipo === "texto"; })
      .map(function (h) { return h.valor; }).join("\n");
    var pregunta = "";
    var opciones = [];
    var explicacion = [];

    cuerpo.split("\n").forEach(function (l) {
      var op = l.match(/^\s*[-*]\s*\[( |x|X)\]\s*(.+)$/);
      if (op) {
        opciones.push({ correcta: op[1].toLowerCase() === "x", texto: op[2].trim() });
      } else if (/^\s*>/.test(l)) {
        explicacion.push(l.replace(/^\s*>\s?/, ""));
      } else if (l.trim() && !pregunta) {
        pregunta = l.trim();
      }
    });

    var lista = opciones.map(function (o, i) {
      return '<li><button type="button" data-correcta="' + (o.correcta ? "1" : "0") +
        '" data-i="' + i + '">' + esc(o.texto) + "</button></li>";
    }).join("");

    return '<div class="quiz">' +
      '<p class="titulo-bloque"><span class="icono">◇</span>' +
      esc(nodo.arg || "Compruébalo") + "</p>" +
      '<p class="pregunta">' + esc(pregunta) + "</p>" +
      '<ul class="opciones">' + lista + "</ul>" +
      '<div class="respuesta" hidden>' + (explicacion.length ? md(explicacion.join("\n")) : "") + "</div>" +
      "</div>";
  }

  function dibujarCita(nodo) {
    var cuerpo = nodo.hijos.filter(function (h) { return h.tipo === "texto"; })
      .map(function (h) { return h.valor; }).join("\n");
    var original = [];
    var traduccion = [];
    cuerpo.split("\n").forEach(function (l) {
      if (/^\s*\+\s+/.test(l)) traduccion.push(l.replace(/^\s*\+\s+/, ""));
      else if (l.trim()) original.push(l.trim());
    });

    return '<div class="bloque bloque-cita">' +
      '<p class="titulo-bloque"><span class="icono">❞</span>' +
      esc(nodo.arg || "Cita textual") + "</p>" +
      '<p class="original">"' + esc(original.join(" ")) + '"</p>' +
      (traduccion.length
        ? '<p class="traduccion">Traducción propia. "' + esc(traduccion.join(" ")) + '"</p>'
        : "") +
      "</div>";
  }

  function dibujar(nodo) {
    if (nodo.tipo === "texto") return md(nodo.valor);
    if (nodo.tipo === "raiz") return hijosHtml(nodo);
    if (nodo.tipo === "video") return dibujarVideo(nodo);
    if (nodo.tipo === "quiz") return dibujarQuiz(nodo);
    if (nodo.tipo === "cita") return dibujarCita(nodo);

    if (nodo.tipo === "consejo") {
      return '<div class="bloque bloque-consejo"><details><summary>' +
        '<span class="icono">✦</span><span>' + esc(nodo.arg || "Consejo metodológico") +
        "</span></summary>" + hijosHtml(nodo) + "</details></div>";
    }

    if (nodo.tipo === "comprobacion") {
      var lineas = nodo.hijos
        .filter(function (h) { return h.tipo === "texto"; })
        .map(function (h) { return h.valor; })
        .join("\n")
        .split("\n")
        .filter(function (l) { return /^\s*[-*]\s+/.test(l); })
        .map(function (l) { return l.replace(/^\s*[-*]\s+/, ""); });

      return '<div class="bloque bloque-comprobacion">' +
        '<p class="titulo-bloque"><span class="icono">☑</span>' +
        esc(nodo.arg || "Comprueba antes de seguir") + "</p><ul>" +
        lineas.map(function (t) {
          return "<li><label><input type=\"checkbox\"><span>" + esc(t) + "</span></label></li>";
        }).join("") +
        "</ul></div>";
    }

    if (nodo.tipo === "resultado") {
      return '<div class="panel-resultado" id="panel-resultado">' +
        '<p class="marcador"><span data-aciertos>0</span> de <span data-total>0</span> ' +
        "correctas</p>" +
        '<div class="riel-examen"><span class="relleno-examen"></span></div>' +
        '<p class="pendiente" data-pendientes></p></div>';
    }

    if (nodo.tipo === "constancia") {
      return '<div class="bloque bloque-constancia">' +
        '<p class="titulo-bloque"><span class="icono">✔</span>Constancia de culminación</p>' +
        hijosHtml(nodo) +
        (nodo.arg
          ? '<p class="accion"><a class="boton" href="' + esc(nodo.arg) +
            '" target="_blank" rel="noopener">Solicitar la constancia</a></p>'
          : "") +
        "</div>";
    }

    if (nodo.tipo === "pasos") {
      return '<div class="envoltura-pasos">' + hijosHtml(nodo).replace(/<ol>/, '<ol class="pasos">') + "</div>";
    }

    if (nodo.tipo === "solucion") {
      return "<details><summary>" + esc(nodo.arg || "Ver una solución") + "</summary>" +
        hijosHtml(nodo) + "</details>";
    }

    var def = BLOQUES[nodo.tipo];
    if (!def) return hijosHtml(nodo);

    return '<div class="bloque ' + def.clase + '">' +
      '<p class="titulo-bloque"><span class="icono">' + def.icono + "</span>" +
      esc(nodo.arg || def.titulo) + "</p>" +
      hijosHtml(nodo) + "</div>";
  }

  function convertir(texto) {
    return dibujar(analizar(texto));
  }

  /* ---------- portada ---------- */

  function pintarPortada() {
    var ruta = document.getElementById("ruta");
    if (!ruta) return;

    ruta.innerHTML = window.CURSO.modulos.map(function (m, i) {
      var lecciones = m.lecciones.map(function (l) {
        var n = window.CURSO.lista.filter(function (x) { return x.id === l.id; })[0].numero;
        return '<li><a href="curso.html#/' + l.id + '"' + (estaHecha(l.id) ? ' class="hecha"' : "") + ">" +
          '<span class="num">' + n + "</span>" +
          '<span class="titulo-leccion">' + esc(l.titulo) + "</span>" +
          '<span class="duracion">' + l.minutos + " min</span>" +
          '<span class="resumen-leccion">' + esc(l.resumen) + "</span>" +
          "</a></li>";
      }).join("");

      return '<section class="modulo" style="--color-modulo: ' + m.color + '">' +
        '<div class="modulo-cabecera">' +
        '<p class="clave">Módulo ' + (i + 1) + "</p>" +
        "<h3>" + esc(m.nombre) + "</h3>" +
        "<p>" + esc(m.resumen) + "</p>" +
        "</div>" +
        '<ul class="lista-lecciones">' + lecciones + "</ul>" +
        "</section>";
    }).join("");

    var total = window.CURSO.lista.length;
    var minutos = window.CURSO.lista.reduce(function (s, l) { return s + l.minutos; }, 0);
    var d = document.getElementById("dato-lecciones");
    if (d) d.textContent = total;
    var h = document.getElementById("dato-horas");
    if (h) h.textContent = Math.round(minutos / 60) + " h";
    var mo = document.getElementById("dato-modulos");
    if (mo) mo.textContent = window.CURSO.modulos.length;

    var seguir = document.getElementById("seguir");
    if (seguir) {
      var pendiente = window.CURSO.lista.filter(function (l) { return !estaHecha(l.id); })[0];
      if (pendiente && avance.length) {
        seguir.href = "curso.html#/" + pendiente.id;
        seguir.textContent = "Continuar en la lección " + pendiente.numero;
      }
    }
    actualizarAvanceBarra();
  }

  function actualizarAvanceBarra() {
    var total = window.CURSO.lista.length;
    var hechas = window.CURSO.lista.filter(function (l) { return estaHecha(l.id); }).length;
    var pct = total ? Math.round((hechas / total) * 100) : 0;
    var r = document.querySelector(".relleno-riel");
    if (r) r.style.width = pct + "%";
    var t = document.querySelector("[data-avance-texto]");
    if (t) t.textContent = hechas + " de " + total;
  }

  /* ---------- visor ---------- */

  function pintarLateral(idActual) {
    var lat = document.getElementById("nav-lecciones");
    if (!lat) return;

    lat.innerHTML = window.CURSO.modulos.map(function (m, i) {
      var items = m.lecciones.map(function (l) {
        var n = window.CURSO.lista.filter(function (x) { return x.id === l.id; })[0].numero;
        var clases = [];
        if (l.id === idActual) clases.push("activa");
        if (estaHecha(l.id)) clases.push("hecha");
        return '<li data-busca="' + esc((l.titulo + " " + l.resumen + " " + m.nombre).toLowerCase()) + '">' +
          '<a href="#/' + l.id + '" class="' + clases.join(" ") + '">' +
          '<span class="n">' + n + "</span><span>" + esc(l.titulo) + "</span></a></li>";
      }).join("");
      return '<div class="nav-modulo" style="--color-modulo: ' + m.color + '">' +
        "<p>Módulo " + (i + 1) + ". " + esc(m.nombre) + "</p><ol>" + items + "</ol></div>";
    }).join("");
  }

  function pintarIndice(articulo) {
    var caja = document.getElementById("indice-leccion");
    if (!caja) return;
    var titulos = articulo.querySelectorAll("h2, h3");
    if (!titulos.length) { caja.innerHTML = ""; return; }
    var items = Array.prototype.map.call(titulos, function (t) {
      return '<li class="' + (t.tagName === "H3" ? "n2" : "n1") + '">' +
        '<a href="#/' + leccionActual + "#" + t.id + '">' + esc(t.textContent.replace("#", "").trim()) + "</a></li>";
    }).join("");
    caja.innerHTML = "<p>En esta lección</p><ul>" + items + "</ul>";
  }

  function activarVideos(raiz) {
    raiz.addEventListener("click", function (e) {
      var b = e.target.closest("[data-video]");
      if (!b) return;
      var id = b.getAttribute("data-video");
      var marco = document.createElement("div");
      marco.className = "video-marco";
      marco.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + id +
        '?autoplay=1&rel=0" title="Video de la lección" allow="accelerometer; autoplay; ' +
        'clipboard-write; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
      b.replaceWith(marco);
    });
  }

  function activarQuiz(raiz) {
    raiz.addEventListener("click", function (e) {
      var b = e.target.closest(".quiz .opciones button");
      if (!b) return;
      var quiz = b.closest(".quiz");
      var botones = quiz.querySelectorAll(".opciones button");
      Array.prototype.forEach.call(botones, function (x) {
        x.disabled = true;
        if (x.getAttribute("data-correcta") === "1") x.classList.add("correcta");
      });
      if (b.getAttribute("data-correcta") !== "1") b.classList.add("incorrecta");
      var r = quiz.querySelector(".respuesta");
      if (r) r.hidden = false;
      actualizarExamen();
    });
  }

  function actualizarExamen() {
    var panel = document.getElementById("panel-resultado");
    if (!panel) return;
    var quizzes = document.querySelectorAll("#contenido .quiz");
    var total = quizzes.length;
    var aciertos = 0;
    var respondidas = 0;
    Array.prototype.forEach.call(quizzes, function (q) {
      var elegida = q.querySelector(".opciones button.incorrecta");
      var contestada = q.querySelector(".opciones button[disabled]");
      if (!contestada) return;
      respondidas++;
      if (!elegida) aciertos++;
    });
    panel.querySelector("[data-aciertos]").textContent = aciertos;
    panel.querySelector("[data-total]").textContent = total;
    panel.querySelector(".relleno-examen").style.width =
      (total ? Math.round((respondidas / total) * 100) : 0) + "%";
    var faltan = total - respondidas;
    panel.querySelector("[data-pendientes]").textContent =
      faltan === 0
        ? "Respondiste las " + total + " preguntas."
        : "Faltan " + faltan + " preguntas por responder.";
  }

  function anclas(articulo) {
    Array.prototype.forEach.call(articulo.querySelectorAll("h2, h3"), function (t) {
      if (!t.id) t.id = idDesdeTexto(t.textContent);
      var a = document.createElement("a");
      a.className = "ancla";
      a.href = "#/" + leccionActual + "#" + t.id;
      a.textContent = "#";
      a.setAttribute("aria-hidden", "true");
      t.appendChild(a);
    });
  }

  function vigilarIndice(articulo) {
    var titulos = articulo.querySelectorAll("h2, h3");
    if (!titulos.length || !("IntersectionObserver" in window)) return;
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (!en.isIntersecting) return;
        var enlaces = document.querySelectorAll("#indice-leccion a");
        Array.prototype.forEach.call(enlaces, function (a) {
          var destino = a.getAttribute("href").split("#")[2];
          a.classList.toggle("activo", destino === en.target.id);
        });
      });
    }, { rootMargin: "-70px 0px -75% 0px" });
    Array.prototype.forEach.call(titulos, function (t) { obs.observe(t); });
  }

  var leccionActual = "";

  function idActualDesdeHash() {
    var h = window.location.hash.replace(/^#\/?/, "");
    if (!h) return window.CURSO.lista[0].id;
    var pos = h.indexOf("#");
    if (pos !== -1) h = h.slice(0, pos);
    var existe = window.CURSO.lista.filter(function (l) { return l.id === h; })[0];
    return existe ? h : window.CURSO.lista[0].id;
  }

  function cargarLeccion() {
    var id = idActualDesdeHash();
    leccionActual = id;
    var leccion = window.CURSO.lista.filter(function (l) { return l.id === id; })[0];
    var articulo = document.getElementById("contenido");
    var cabecera = document.getElementById("cabecera-leccion");

    pintarLateral(id);
    document.title = leccion.titulo + " · " + window.CURSO.titulo;

    cabecera.innerHTML =
      '<p class="ruta-migas">Módulo ' + esc(leccion.modulo) + " · lección " + leccion.numero + "</p>" +
      "<h1>" + esc(leccion.titulo) + "</h1>" +
      '<p class="meta"><span>' + leccion.minutos + " min</span><span>" + esc(leccion.resumen) + "</span></p>";
    cabecera.style.setProperty("--color-modulo", leccion.color);

    articulo.innerHTML = '<p class="cargando">Cargando la lección…</p>';

    fetch(leccion.archivo, { cache: "no-cache" })
      .then(function (r) {
        if (!r.ok) throw new Error(r.status);
        return r.text();
      })
      .then(function (texto) {
        articulo.innerHTML = convertir(texto);
        anclas(articulo);
        actualizarExamen();
        pintarIndice(articulo);
        vigilarIndice(articulo);
        pintarPie(leccion);
        var destino = window.location.hash.split("#")[2];
        if (destino) {
          var el = document.getElementById(destino);
          if (el) el.scrollIntoView();
        } else {
          window.scrollTo(0, 0);
        }
      })
      .catch(function () {
        articulo.innerHTML =
          '<div class="bloque bloque-aviso"><p class="titulo-bloque"><span class="icono">!</span>' +
          "No se pudo abrir la lección</p><p>Falta el archivo <code>" + esc(leccion.archivo) +
          "</code> o el sitio se está viendo desde el disco. Publícalo en GitHub Pages, " +
          "o levanta un servidor local con <code>python -m http.server</code> dentro de la carpeta del curso.</p></div>";
        pintarPie(leccion);
      });
  }

  function pintarPie(leccion) {
    var pie = document.getElementById("pie-leccion");
    var i = window.CURSO.lista.indexOf(
      window.CURSO.lista.filter(function (l) { return l.id === leccion.id; })[0]
    );
    var previa = window.CURSO.lista[i - 1];
    var siguiente = window.CURSO.lista[i + 1];

    pie.innerHTML =
      '<div class="acciones-leccion">' +
      '<button class="marcar" type="button" data-marcar="' + leccion.id + '" aria-pressed="' +
      (estaHecha(leccion.id) ? "true" : "false") + '">' +
      (estaHecha(leccion.id) ? "✓ Lección terminada" : "Marcar como terminada") + "</button>" +
      "</div>" +
      '<nav class="paginacion">' +
      (previa
        ? '<a href="#/' + previa.id + '"><span class="sentido">Anterior</span><span>' +
          esc(previa.titulo) + "</span></a>"
        : "<span></span>") +
      (siguiente
        ? '<a class="siguiente" href="#/' + siguiente.id + '"><span class="sentido">Siguiente</span><span>' +
          esc(siguiente.titulo) + "</span></a>"
        : '<a class="siguiente" href="index.html"><span class="sentido">Fin del curso</span>' +
          "<span>Volver a la portada</span></a>") +
      "</nav>";
  }

  function activarBuscador() {
    var campo = document.getElementById("buscador");
    if (!campo) return;
    campo.addEventListener("input", function () {
      var q = campo.value.trim().toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      Array.prototype.forEach.call(document.querySelectorAll("#nav-lecciones li"), function (li) {
        var t = li.getAttribute("data-busca").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        li.hidden = q !== "" && t.indexOf(q) === -1;
      });
      Array.prototype.forEach.call(document.querySelectorAll(".nav-modulo"), function (m) {
        var visibles = m.querySelectorAll("li:not([hidden])").length;
        m.hidden = visibles === 0;
      });
    });
  }

  function activarLateralMovil() {
    var lat = document.getElementById("lateral");
    var velo = document.getElementById("velo");
    if (!lat || !velo) return;

    function cerrar() {
      lat.classList.remove("abierto");
      velo.classList.remove("visible");
    }
    document.addEventListener("click", function (e) {
      if (e.target.closest("[data-accion=lateral]")) {
        lat.classList.toggle("abierto");
        velo.classList.toggle("visible", lat.classList.contains("abierto"));
      } else if (e.target === velo || e.target.closest("#nav-lecciones a")) {
        cerrar();
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") cerrar();
    });
  }

  function activarMarcado() {
    document.addEventListener("click", function (e) {
      var b = e.target.closest("[data-marcar]");
      if (!b) return;
      var id = b.getAttribute("data-marcar");
      var hecha = alternarHecha(id);
      b.setAttribute("aria-pressed", hecha ? "true" : "false");
      b.textContent = hecha ? "✓ Lección terminada" : "Marcar como terminada";
      pintarLateral(idActualDesdeHash());
      actualizarAvanceBarra();
    });
  }

  function atajosTeclado() {
    document.addEventListener("keydown", function (e) {
      if (e.target.matches("input, textarea")) return;
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      var id = idActualDesdeHash();
      var i = window.CURSO.lista.map(function (l) { return l.id; }).indexOf(id);
      var destino = e.key === "ArrowRight" ? window.CURSO.lista[i + 1] : window.CURSO.lista[i - 1];
      if (destino) window.location.hash = "#/" + destino.id;
    });
  }

  /* ---------- arranque ---------- */

  document.addEventListener("DOMContentLoaded", function () {
    iniciarTema();

    if (document.getElementById("ruta")) {
      pintarPortada();
      return;
    }

    if (!document.getElementById("contenido")) return;

    var articulo = document.getElementById("contenido");
    activarVideos(articulo);
    activarQuiz(articulo);
    activarBuscador();
    activarLateralMovil();
    activarMarcado();
    atajosTeclado();
    actualizarAvanceBarra();

    window.addEventListener("hashchange", function () {
      if (idActualDesdeHash() === leccionActual) {
        var destino = window.location.hash.split("#")[2];
        var el = destino && document.getElementById(destino);
        if (el) el.scrollIntoView();
        return;
      }
      cargarLeccion();
      actualizarAvanceBarra();
    });
    cargarLeccion();
  });

  window.CursoUtiles = { convertir: convertir, analizar: analizar, idYoutube: idYoutube };
})();
