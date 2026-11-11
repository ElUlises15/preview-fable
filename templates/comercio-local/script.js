// La navegación y los contactos funcionan sin JavaScript.
// Pausa las partículas cuando la pestaña no está visible.
document.addEventListener('visibilitychange', () => {
  document.querySelectorAll('.petals i').forEach(petal => {
    petal.style.animationPlayState = document.hidden ? 'paused' : 'running';
  });
});
