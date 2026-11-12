// Sin este archivo la página se ve completa: solo suma el estado del día y la entrada del tablero.
(function () {
  var HORAS = { 6: [12, 21], 0: [8, 21] };
  var estado = document.querySelector('[data-estado]');
  var textoHorario = estado.textContent;

  function actualizar() {
    // Hora de Argentina (UTC-3, sin cambio de horario), sin importar dónde esté quien mira.
    var ahora = new Date(Date.now() - 3 * 3600 * 1000);
    var dia = ahora.getUTCDay();
    var hora = ahora.getUTCHours() + ahora.getUTCMinutes() / 60;
    var franja = HORAS[dia];
    var abierto = !!franja && hora >= franja[0] && hora < franja[1];

    document.querySelectorAll('.horas tr').forEach(function (fila) {
      var clave = fila.dataset.dia;
      var hoy = clave === '1-5' ? dia >= 1 && dia <= 5 : +clave === dia;
      fila.classList.toggle('hoy', hoy);
    });

    if (abierto) {
      estado.innerHTML = '<b>Abierto ahora</b> · hasta las ' + franja[1] + ' h';
    } else {
      estado.textContent = textoHorario;
    }
  }

  actualizar();
  setInterval(actualizar, 60000);

  var bloques = document.querySelectorAll('[data-entrada]');
  if (!('IntersectionObserver' in window)) {
    bloques.forEach(function (b) { b.classList.add('visto'); });
    return;
  }
  var observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('visto');
        observador.unobserve(e.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px' });
  bloques.forEach(function (b) { observador.observe(b); });

})();
