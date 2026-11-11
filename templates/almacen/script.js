const toggle = document.querySelector('.motion-toggle');
toggle.addEventListener('click', () => {
  const paused = document.querySelector('.hero-photo').classList.toggle('paused');
  toggle.setAttribute('aria-pressed', String(paused));
  toggle.setAttribute('aria-label', paused ? 'Activar animación' : 'Pausar animación');
  toggle.textContent = paused ? '▷' : 'Ⅱ';
});
