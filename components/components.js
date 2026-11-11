/* ==========================================================================
   Web Factory · components.js
   Mejora progresiva: todo se ve y se entiende sin este archivo.
   Cada bloque se activa solo si encuentra su data-atributo en la página.
   ========================================================================== */
(function () {
  'use strict';

  var doc = document;
  var root = doc.documentElement;

  function all(sel, ctx) {
    return Array.prototype.slice.call((ctx || doc).querySelectorAll(sel));
  }

  function crear(tag, clase, texto) {
    var el = doc.createElement(tag);
    if (clase) el.className = clase;
    if (texto) el.textContent = texto;
    return el;
  }

  /* --- Selector de paleta: [data-wf-paleta] con botones [data-wf-paleta-op] --- */
  function initPaleta() {
    var CLAVE = 'wf-paleta';

    all('[data-wf-paleta]').forEach(function (grupo) {
      var botones = all('[data-wf-paleta-op]', grupo);
      if (!botones.length) return;

      var validas = botones.map(function (b) {
        return b.getAttribute('data-wf-paleta-op');
      });

      function aplicar(nombre) {
        root.setAttribute('data-palette', nombre);
        botones.forEach(function (b) {
          var activo = b.getAttribute('data-wf-paleta-op') === nombre;
          b.setAttribute('aria-pressed', activo ? 'true' : 'false');
        });
      }

      var guardada = null;
      try {
        guardada = window.localStorage.getItem(CLAVE);
      } catch (e) { /* almacenamiento bloqueado: seguimos sin recordar */ }

      var inicial = validas.indexOf(guardada) > -1
        ? guardada
        : (root.getAttribute('data-palette') || validas[0]);
      aplicar(validas.indexOf(inicial) > -1 ? inicial : validas[0]);

      grupo.addEventListener('click', function (ev) {
        var boton = ev.target.closest('[data-wf-paleta-op]');
        if (!boton || !grupo.contains(boton)) return;
        var nombre = boton.getAttribute('data-wf-paleta-op');
        aplicar(nombre);
        try {
          window.localStorage.setItem(CLAVE, nombre);
        } catch (e) { /* idem */ }
      });

      grupo.hidden = false;
    });
  }

  /* --- Catálogo: [data-wf-catalogo] > [data-wf-filtros] + ítems [data-wf-cat] --- */
  function initCatalogo() {
    all('[data-wf-catalogo]').forEach(function (catalogo) {
      var filtros = catalogo.querySelector('[data-wf-filtros]');
      var items = all('[data-wf-cat]', catalogo);
      var estado = catalogo.querySelector('[data-wf-estado]');
      if (!filtros || !items.length) return;

      var botones = all('button[data-wf-filtro]', filtros);

      function filtrar(cat) {
        var visibles = 0;
        items.forEach(function (item) {
          var cats = (item.getAttribute('data-wf-cat') || '').split(/\s+/);
          var mostrar = cat === 'todos' || cats.indexOf(cat) > -1;
          item.hidden = !mostrar;
          if (mostrar) visibles++;
        });
        botones.forEach(function (b) {
          var activo = b.getAttribute('data-wf-filtro') === cat;
          b.setAttribute('aria-pressed', activo ? 'true' : 'false');
        });
        if (estado) {
          estado.textContent = 'Mostrando ' + visibles + ' de ' + items.length + '.';
        }
      }

      filtros.addEventListener('click', function (ev) {
        var boton = ev.target.closest('button[data-wf-filtro]');
        if (!boton || !filtros.contains(boton)) return;
        filtrar(boton.getAttribute('data-wf-filtro'));
      });

      filtros.hidden = false;
    });
  }

  /* --- Turnos: form[data-wf-turnos][data-wf-whatsapp] arma el link de wa.me --- */
  function initTurnos() {
    function dosDigitos(n) {
      return (n < 10 ? '0' : '') + n;
    }

    function fechaLegible(valor) {
      var p = /^(\d{4})-(\d{2})-(\d{2})$/.exec(valor || '');
      if (!p) return valor || '';
      var fecha = new Date(Number(p[1]), Number(p[2]) - 1, Number(p[3]));
      try {
        return fecha.toLocaleDateString('es-AR', {
          weekday: 'long', day: 'numeric', month: 'long'
        });
      } catch (e) {
        return p[3] + '/' + p[2] + '/' + p[1];
      }
    }

    all('form[data-wf-turnos]').forEach(function (form) {
      var salida = form.querySelector('[data-wf-turnos-salida]');
      var dia = form.querySelector('[data-wf-campo="dia"]');

      // No dejar elegir días que ya pasaron
      if (dia && dia.type === 'date') {
        var hoy = new Date();
        dia.min = hoy.getFullYear() + '-' + dosDigitos(hoy.getMonth() + 1) + '-' +
          dosDigitos(hoy.getDate());
      }

      function valor(campo) {
        var el = form.querySelector('[data-wf-campo="' + campo + '"]');
        if (!el) return '';
        if (el.type === 'radio') {
          el = form.querySelector('[data-wf-campo="' + campo + '"]:checked');
          return el ? el.value : '';
        }
        return (el.value || '').trim();
      }

      form.addEventListener('submit', function (ev) {
        ev.preventDefault();
        if (typeof form.checkValidity === 'function' && !form.checkValidity()) {
          if (typeof form.reportValidity === 'function') form.reportValidity();
          return;
        }

        var numero = form.getAttribute('data-wf-whatsapp') || '';
        // Si todavía es un placeholder {{ }} lo dejamos a la vista para detectarlo
        if (numero.indexOf('{{') === -1) numero = numero.replace(/\D/g, '');

        var lineas = ['¡Hola! Quiero pedir un turno.'];
        var servicio = valor('servicio');
        var cuando = fechaLegible(valor('dia'));
        var franja = valor('franja');
        var nombre = valor('nombre');
        if (servicio) lineas.push('Servicio: ' + servicio);
        if (cuando) lineas.push('Día: ' + cuando);
        if (franja) lineas.push('Franja: ' + franja);
        if (nombre) lineas.push('Nombre: ' + nombre);
        lineas.push('¿Me confirman si hay lugar?');

        var mensaje = lineas.join('\n');
        var url = 'https://wa.me/' + numero + '?text=' + encodeURIComponent(mensaje);

        if (salida) {
          salida.textContent = '';
          salida.appendChild(doc.createTextNode(
            'Te armamos este mensaje. Si no se abrió WhatsApp, tocá acá: '
          ));
          var link = crear('a', 'wf-link', 'Abrir WhatsApp');
          link.href = url;
          link.target = '_blank';
          link.rel = 'noopener';
          salida.appendChild(link);
          salida.appendChild(doc.createTextNode('\n\n' + mensaje));
        }

        window.open(url, '_blank', 'noopener');
      });
    });
  }

  /* --- Galería: [data-wf-galeria] con ítems [data-wf-lightbox] --- */
  function initGaleria() {
    var galerias = all('[data-wf-galeria]');
    if (!galerias.length) return;

    var caja, escena, pie, btnCerrar, btnPrev, btnSig;
    var lista = [];
    var actual = 0;
    var origen = null;

    function construir() {
      caja = crear('div', 'wf-lightbox');
      caja.setAttribute('role', 'dialog');
      caja.setAttribute('aria-modal', 'true');
      caja.setAttribute('aria-label', 'Foto ampliada');
      caja.hidden = true;

      var barra = crear('div', 'wf-lightbox__barra');
      btnPrev = crear('button', 'wf-lightbox__btn', '← Anterior');
      btnSig = crear('button', 'wf-lightbox__btn', 'Siguiente →');
      btnCerrar = crear('button', 'wf-lightbox__btn', 'Cerrar');
      [btnPrev, btnSig, btnCerrar].forEach(function (b) {
        b.type = 'button';
        barra.appendChild(b);
      });

      escena = crear('div', 'wf-lightbox__escena');
      pie = crear('p', 'wf-lightbox__pie');
      pie.setAttribute('aria-live', 'polite');

      caja.appendChild(barra);
      caja.appendChild(escena);
      caja.appendChild(pie);
      doc.body.appendChild(caja);

      btnCerrar.addEventListener('click', cerrar);
      btnPrev.addEventListener('click', function () { mover(-1); });
      btnSig.addEventListener('click', function () { mover(1); });

      caja.addEventListener('click', function (ev) {
        if (ev.target === caja || ev.target === escena) cerrar();
      });

      caja.addEventListener('keydown', function (ev) {
        if (ev.key === 'Escape' || ev.key === 'Esc') {
          ev.preventDefault();
          cerrar();
        } else if (ev.key === 'ArrowLeft') {
          mover(-1);
        } else if (ev.key === 'ArrowRight') {
          mover(1);
        } else if (ev.key === 'Tab') {
          // Foco atrapado entre los botones visibles del lightbox
          var foco = all('button', caja).filter(function (b) { return !b.hidden; });
          if (!foco.length) return;
          var primero = foco[0];
          var ultimo = foco[foco.length - 1];
          if (ev.shiftKey && doc.activeElement === primero) {
            ev.preventDefault();
            ultimo.focus();
          } else if (!ev.shiftKey && doc.activeElement === ultimo) {
            ev.preventDefault();
            primero.focus();
          } else if (!caja.contains(doc.activeElement)) {
            ev.preventDefault();
            primero.focus();
          }
        }
      });
    }

    function leyenda(item) {
      var cap = item.querySelector('figcaption');
      return cap ? cap.textContent.trim() : '';
    }

    function mostrar(i) {
      actual = (i + lista.length) % lista.length;
      var item = lista[actual];
      var medio = item.querySelector('[data-wf-media]') ||
        item.querySelector('img, .wf-ph');

      while (escena.firstChild) escena.removeChild(escena.firstChild);
      if (medio) {
        var copia = medio.cloneNode(true);
        var grande = item.getAttribute('data-wf-full');
        if (copia.tagName === 'IMG') {
          copia.removeAttribute('srcset');
          copia.removeAttribute('sizes');
          copia.removeAttribute('loading');
          if (grande) copia.src = grande;
        }
        escena.appendChild(copia);
      }

      var texto = leyenda(item);
      pie.textContent = (texto ? texto + ' · ' : '') + (actual + 1) + ' de ' + lista.length;
    }

    function mover(paso) {
      if (lista.length > 1) mostrar(actual + paso);
    }

    function abrir(items, i, boton) {
      if (!caja) construir();
      lista = items;
      origen = boton;
      btnPrev.hidden = btnSig.hidden = items.length < 2;
      caja.hidden = false;
      root.classList.add('wf-lock');
      mostrar(i);
      btnCerrar.focus();
    }

    function cerrar() {
      if (!caja || caja.hidden) return;
      caja.hidden = true;
      root.classList.remove('wf-lock');
      if (origen && typeof origen.focus === 'function') origen.focus();
      origen = null;
    }

    galerias.forEach(function (galeria) {
      var items = all('[data-wf-lightbox]', galeria);
      items.forEach(function (item, i) {
        var boton = crear('button', 'wf-galeria__abrir');
        var texto = leyenda(item);
        boton.type = 'button';
        boton.setAttribute('aria-label', 'Ampliar foto' + (texto ? ': ' + texto : ' ' + (i + 1)));
        boton.addEventListener('click', function () { abrir(items, i, boton); });
        item.appendChild(boton);
      });
    });
  }

  function iniciar() {
    root.classList.add('wf-js');
    [initPaleta, initCatalogo, initTurnos, initGaleria].forEach(function (fn) {
      try {
        fn();
      } catch (e) { /* un componente roto no frena al resto ni ensucia la consola */ }
    });
  }

  if (doc.readyState === 'loading') {
    doc.addEventListener('DOMContentLoaded', iniciar);
  } else {
    iniciar();
  }
})();
