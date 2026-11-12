(function () {
  var TEL = '5491158299106';
  var quieto = matchMedia('(prefers-reduced-motion:reduce)').matches;
  var form = document.getElementById('formu');
  var mensaje = document.getElementById('mensaje');
  var enviar = document.getElementById('enviar');
  var aviso = document.getElementById('invitados-aviso');
  var LIMITE = 250;

  function fechaAr(valor) {
    if (!valor) return 'A definir';
    var p = valor.split('-');
    return p[2] + '/' + p[1] + '/' + p[0];
  }

  function actualizar() {
    var invitados = form.invitados.value;
    var excede = Number(invitados) > LIMITE;
    aviso.textContent = excede ? 'El salón recibe hasta 250 personas. Podés bajar el número o consultarlo igual.' : '';
    form.invitados.setAttribute('aria-invalid', excede ? 'true' : 'false');
    var texto = [
      '¡Hola! Quiero consultar por un evento en El Origen.',
      'Evento: ' + form.tipo.value,
      'Fecha aproximada: ' + fechaAr(form.fecha.value),
      'Invitados: ' + (invitados || 'A definir')
    ].join('\n');
    mensaje.textContent = texto;
    enviar.href = 'https://wa.me/' + TEL + '?text=' + encodeURIComponent(texto);
  }

  form.addEventListener('input', actualizar);
  form.addEventListener('submit', function (e) { e.preventDefault(); });
  form.fecha.min = new Date().toISOString().slice(0, 10);

  document.querySelectorAll('[data-tipo]').forEach(function (a) {
    a.addEventListener('click', function () {
      form.tipo.value = a.dataset.tipo;
      actualizar();
    });
  });
  actualizar();

  // Mapa de Google solo a pedido: no carga terceros hasta que se lo pide.
  var verMapa = document.getElementById('ver-mapa');
  verMapa.hidden = false;
  verMapa.addEventListener('click', function () {
    var caja = document.getElementById('mapa');
    var iframe = document.createElement('iframe');
    iframe.title = 'Mapa: Camino General Belgrano 3877 esquina 206A, Sourigues';
    iframe.src = 'https://maps.google.com/maps?q=Camino+General+Belgrano+3877,+Sourigues,+Berazategui,+Buenos+Aires&z=16&hl=es&output=embed';
    iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
    var abrir = caja.querySelector('a').cloneNode(true);
    caja.textContent = '';
    caja.classList.add('abierto');
    caja.appendChild(iframe);
    abrir.style.marginTop = '.65rem';
    abrir.style.width = '100%';
    caja.appendChild(abrir);
    iframe.setAttribute('tabindex', '0');
    iframe.focus();
  });

  var barra = document.getElementById('barra');
  var hilo = document.querySelector('.hilo');
  var pasos = document.querySelector('.pasos');

  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.rv').forEach(function (el) { el.classList.add('visible'); });
    barra.classList.add('visible');
    return;
  }

  var revelar = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revelar.unobserve(e.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.rv').forEach(function (el) { revelar.observe(el); });

  // La barra aparece al dejar la portada y se esconde sobre la consulta, donde sobra.
  var enPortada = true;
  var enConsulta = false;
  function pintarBarra() { barra.classList.toggle('visible', !enPortada && !enConsulta); }
  new IntersectionObserver(function (e) { enPortada = e[0].isIntersecting; pintarBarra(); })
    .observe(document.querySelector('.portada'));
  new IntersectionObserver(function (e) { enConsulta = e[0].isIntersecting; pintarBarra(); })
    .observe(document.getElementById('consulta'));

  if (quieto) return;

  var pendiente = false;
  function avanzarHilo() {
    pendiente = false;
    var r = pasos.getBoundingClientRect();
    var avance = (innerHeight * 0.7 - r.top) / r.height;
    hilo.style.setProperty('--avance', Math.max(0, Math.min(1, avance)).toFixed(3));
  }
  addEventListener('scroll', function () {
    if (!pendiente) { pendiente = true; requestAnimationFrame(avanzarHilo); }
  }, { passive: true });
  addEventListener('resize', avanzarHilo);
  avanzarHilo();
})();
